# Azure Deployment Guide

## 🚀 Deploy Quinn's Conveyance to Azure Static Web Apps

Azure Static Web Apps is perfect for your Vite-based website because it:
- ✅ **Free hosting** for personal projects
- ✅ **Automatic HTTPS** with custom domains
- ✅ **Global CDN** for fast loading worldwide
- ✅ **GitHub integration** for automatic deployments
- ✅ **Custom domains** support
- ✅ **Serverless functions** (if needed later)

## 📋 Step-by-Step Azure Deployment

### Step 1: Azure Account Setup

1. **Create Azure Account** (if you don't have one):
   - Go to [https://azure.microsoft.com/free/](https://azure.microsoft.com/free/)
   - Sign up for free account (includes $200 credit)

2. **Install Azure CLI** (optional but recommended):
   ```powershell
   winget install Microsoft.AzureCLI
   ```

### Step 2: Create Azure Static Web App

#### Option A: Using Azure Portal (Recommended for beginners)

1. **Go to Azure Portal**: [https://portal.azure.com](https://portal.azure.com)
2. **Click "Create a resource"**
3. **Search for "Static Web App"** and select it
4. **Click "Create"**

5. **Fill in the details**:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new "quinns-conveyance-rg"
   - **Name**: "quinns-conveyance" (will be part of your URL)
   - **Plan Type**: "Free" (perfect for this project)
   - **Region**: Choose closest to your location
   
6. **GitHub Integration**:
   - **Source**: GitHub
   - **GitHub Account**: Sign in to your GitHub
   - **Organization**: Your username (jkomalleyjr)
   - **Repository**: quinnsconveyance
   - **Branch**: main
   
7. **Build Details**:
   - **Build Presets**: "Custom"
   - **App location**: "/" 
   - **Api location**: "" (leave empty)
   - **Output location**: "dist"

8. **Click "Review + Create"** then **"Create"**

#### Option B: Using Azure CLI

```powershell
# Login to Azure
az login

# Create resource group
az group create --name quinns-conveyance-rg --location "East US"

# Create static web app
az staticwebapp create \
  --name quinns-conveyance \
  --resource-group quinns-conveyance-rg \
  --source https://github.com/jkomalleyjr/quinnsconveyance \
  --location "East US" \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Step 3: What Happens Next

1. **Azure creates the resource** (takes 1-2 minutes)
2. **GitHub Actions workflow is automatically added** to your repository
3. **First deployment starts automatically**
4. **You'll get a URL** like: `https://quinns-conveyance-abc123.azurestaticapps.net`

### Step 4: Verify Deployment

1. **Check GitHub Actions**:
   - Go to your GitHub repository
   - Click "Actions" tab
   - You should see a running deployment

2. **Get your Azure URL**:
   - In Azure Portal, go to your Static Web App resource
   - Copy the URL from the overview page

3. **Test your website**:
   - Visit the Azure URL
   - Verify all functionality works
   - Test the embedded Microsoft Form

### Step 5: Custom Domain (Optional)

If you have your own domain:

1. **In Azure Portal**:
   - Go to your Static Web App
   - Click "Custom domains"
   - Click "Add"
   - Enter your domain (e.g., quinnsconveyance.com)

2. **Update DNS**:
   - Add CNAME record pointing to your Azure URL
   - Verification will happen automatically

## 🔧 Deployment Configuration

The workflow file (`.github/workflows/azure-static-web-apps.yml`) is already created and configured for:

- **Automatic builds** on every push to main branch
- **Pull request previews** for testing changes
- **Vite build process** with proper output directory
- **Environment variables** support (if needed)

## 📊 Monitoring & Management

### View Deployment Status
```powershell
# Check deployment status
az staticwebapp show --name quinns-conveyance --resource-group quinns-conveyance-rg
```

### View Logs
- Go to Azure Portal → Your Static Web App → "Functions" → "Application Insights"
- Or check GitHub Actions for build logs

## 💰 Costs

**Azure Static Web Apps Free Tier includes**:
- ✅ 100 GB bandwidth per month
- ✅ 0.5 GB storage
- ✅ Custom domains with SSL
- ✅ GitHub integration
- ✅ Global CDN

Perfect for your trucking website!

## 🚀 Benefits Over GitHub Pages

| Feature | GitHub Pages | Azure Static Web Apps |
|---------|--------------|----------------------|
| Custom domains | ✅ | ✅ |
| HTTPS | ✅ | ✅ |
| Global CDN | ❌ | ✅ |
| Serverless functions | ❌ | ✅ |
| Authentication | ❌ | ✅ |
| Form handling | ❌ | ✅ |
| Preview deployments | ❌ | ✅ |

## 🔗 Useful Links

- **Azure Portal**: [https://portal.azure.com](https://portal.azure.com)
- **Azure Static Web Apps Docs**: [https://docs.microsoft.com/azure/static-web-apps/](https://docs.microsoft.com/azure/static-web-apps/)
- **Your GitHub Repository**: [https://github.com/jkomalleyjr/quinnsconveyance](https://github.com/jkomalleyjr/quinnsconveyance)

## 🆘 Troubleshooting

### Common Issues:

1. **Build fails**: Check package.json scripts are correct
2. **Form doesn't work**: Verify Microsoft Form URLs are updated
3. **Custom domain issues**: Check DNS propagation (can take 24-48 hours)

### Getting Help:
- Check GitHub Actions logs for build errors
- Azure Portal shows deployment status
- Contact Azure support if needed (free tier includes basic support)

---

**Once deployed, your website will be available globally with enterprise-grade performance and security!**