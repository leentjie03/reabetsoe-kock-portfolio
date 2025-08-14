# Email Configuration Setup

## Security Notice
Your email configuration is secure! The `.env` file is already in `.gitignore` and won't be pushed to GitHub.

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Get your EmailJS credentials:**
   - Visit: https://dashboard.emailjs.com/admin
   - **Service ID**: Go to Email Services → Copy your service ID
   - **Template ID**: Go to Email Templates → Copy your template ID  
   - **Public Key**: Go to Account → Copy your public key

3. **Update your `.env` file** with the actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

4. **Restart your development server** after updating the `.env` file.

## Deployment
For production deployment, add these environment variables to your hosting platform (Vercel, Netlify, etc.).