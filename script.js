
// Basic placeholder frontend logic
let chatBox = document.getElementById('chatBox');
let history = [];

function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  history.push({ role: "user", content: msg });
  chatBox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  input.value = '';

  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ history })
  }).then(res => res.json()).then(data => {
    history.push({ role: "assistant", content: data.reply });
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

function resetChat() {
  history = [];
  chatBox.innerHTML = '';
}

function downloadSummary() {
  const summary = history.map(h => `${h.role.toUpperCase()}: ${h.content}`).join('\n\n');
  const blob = new Blob([summary], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "VAT_COS_Chat_Summary.txt";
  a.click();
}
