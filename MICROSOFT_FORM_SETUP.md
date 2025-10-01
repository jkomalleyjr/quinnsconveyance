# Microsoft Form Setup Guide

## 📋 Creating Your Hot Shot Trucking Quote Form

### Step 1: Create a New Microsoft Form

1. **Go to Microsoft Forms**: [https://forms.office.com](https://forms.office.com)
2. **Sign in** with your Microsoft account (or create one if needed)
3. **Click "New Form"** 
4. **Title**: "Hot Shot Trucking Quote Request"
5. **Description**: "Get a custom quote for your expedited freight needs"

### Step 2: Add Form Questions

Here are suggested questions for your hot shot trucking quote form:

#### Basic Contact Information
- **Name** (Text, Required)
- **Email** (Text, Required)
- **Phone Number** (Text, Required)
- **Company Name** (Text, Optional)

#### Shipment Details
- **Origin (Pickup Location)** (Text, Required)
  - "City, State or Full Address"
  
- **Destination (Delivery Location)** (Text, Required)
  - "City, State or Full Address"

- **Pickup Date** (Date picker, Required)
- **Delivery Date Needed** (Date picker, Required)

#### Freight Information
- **Type of Freight** (Multiple choice, Required)
  - Construction Materials
  - Oil & Gas Equipment
  - Machinery/Industrial Equipment
  - Automotive Parts
  - General Freight
  - Other (please specify)

- **Weight (lbs)** (Text, Required)
- **Dimensions** (Text, Required)
  - "Length x Width x Height (feet)"

- **Number of Pieces/Pallets** (Number, Required)

- **Special Requirements** (Long answer, Optional)
  - "Any special handling, hazmat, oversized, etc."

#### Service Type
- **Preferred Service** (Multiple choice, Required)
  - Sprinter Van (up to 3,000 lbs)
  - Box Truck (10-16 ft)
  - Straight Truck (Large capacity)
  - Flatbed Service
  - Hot Shot Truck & Trailer
  - 53' Dry Van

- **Urgency Level** (Multiple choice, Required)
  - Same Day
  - Next Day
  - Within 2-3 Days
  - Standard (3-5 Days)

#### Additional Information
- **Additional Comments** (Long answer, Optional)
- **How did you hear about us?** (Multiple choice, Optional)
  - Google Search
  - Referral
  - Social Media
  - Previous Customer
  - Other

### Step 3: Configure Form Settings

1. **Click Settings** (gear icon)
2. **Response Options**:
   - ✅ Accept responses
   - ✅ Record name (if you want to require sign-in)
   - ✅ One response per person (optional)
   
3. **Response Receipt**:
   - ✅ Send email receipt to respondents
   - Customize receipt message: "Thank you for your quote request. We'll respond within 2 business hours."

4. **Response Notifications**:
   - ✅ Get email notification for each response
   - Add your business email address

### Step 4: Customize Form Design

1. **Click Theme** (palette icon)
2. Choose a professional blue theme to match your website
3. **Add your logo** if desired (Settings > Customization)

### Step 5: Get the Form URL

1. **Click "Share"** button
2. **Copy the link** - it will look like:
   `https://forms.office.com/r/ABC123DEF456`
3. **This is your form URL** to use in the website

### Step 6: Update Your Website

Replace `YOUR_FORM_ID` in the website code with your actual form URL:

```javascript
// Replace this URL in main.js:
"https://forms.office.com/r/YOUR_FORM_ID"

// With your actual form URL:
"https://forms.office.com/r/ABC123DEF456"
```

### Step 7: Test Your Form

1. **Preview the form** using the "Preview" button
2. **Submit a test response** to ensure everything works
3. **Check that you receive email notifications**
4. **Test the form link from your website**

## 🔄 Managing Responses

### Viewing Responses
- Go to your form in Microsoft Forms
- Click "Responses" tab
- View individual responses or download to Excel

### Response Analysis
- View response summary and charts
- Export to Excel for detailed analysis
- Set up automated workflows with Power Automate (optional)

## 📧 Email Notifications

You'll receive an email for each form submission containing:
- All form responses
- Timestamp of submission
- Respondent information

## 🛠️ Advanced Features (Optional)

### Power Automate Integration
- Create automated workflows
- Send custom email responses
- Add to CRM systems
- Create calendar appointments

### Microsoft Teams Integration
- Get form responses in Teams channels
- Collaborate on quotes with team members

---

## 📞 Next Steps

1. Create your Microsoft Form using the questions above
2. Get your form URL
3. Replace the placeholder URL in your website
4. Test the integration
5. Start receiving quote requests!

**Need help?** The form creation should take about 10-15 minutes to set up completely.