
# VAT COS Recovery Assistant (Updated)

## Features
- Service category selector
- Full decision logic for COS Heading 4 (IT Support) and Heading 35 (Building Maintenance)
- Free-text matcher for Heading 35 (based on VATGPB10435)
- Strict logic flow with reference to VATGPB10430 exclusions
- Session-based tracking with summary export
- Passcode protected access

## Setup on Glitch

1. Go to https://glitch.com
2. Start a new project and choose "Import from GitHub" (or upload files)
3. Add these environment variables using Tools > Secrets:
   - `OPENAI_API_KEY=your-openai-api-key`
   - `ACCESS_PASSCODE=your-passcode`
4. Click "Show" to view the chatbot live.
