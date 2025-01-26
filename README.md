# Project Name

## Overview
A brief description of your project and its components:
- Frontend App
- Marketing Site
- Mobile App
- Backend

## Local Environment Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- React Native development environment
  - For iOS: Xcode (Mac only)
  - For Android: Android Studio
- Git

### Initial Setup
1. Clone the repository

```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies

```bash
# Install root dependencies
npm install # or yarn install

# Install dependencies for all applications
npm run install:all # (assuming you have a script for this)
```

## Running the Applications

### Frontend App

```bash
nx serve frontend-app
```

The frontend will be available at `http://localhost:3002`

### Marketing Site

```bash
nx serve marketing-site
```

The marketing site will be available at `http://localhost:3001`

### Mobile App

Prior to running the mobile app, you need to install [Xcode](https://developer.apple.com/xcode/), and [Android Studio](https://developer.android.com/studio). Once you have Xcode installed, you also need to install the iOS simulator and have a default simulator created.

```bash
# Install cocoapods
brew install cocoapods

# Install pods
cd apps/mobile-app
pod install
cd ../../

# Run on iOS
nx run mobile-app:run-ios

# Install the JDK
brew install openjdk@17

# Set JAVA_HOME
echo export "JAVA_HOME=\$(/usr/libexec/java_home)" >> ~/.bash_profile
echo export "ANDROID_HOME=\$HOME/Library/Android/sdk" >> ~/.bash_profile
source ~/.bash_profile

# Run on Android
nx run mobile-app:run-android
```

### Backend

```bash
nx serve backend-api
```

The backend will be available at `http://localhost:3000`

## Additional Information

### Environment Variables
Create `.env` files in each project directory following the `.env.example` templates.

### Troubleshooting
Common issues and their solutions...

## Contributing
Instructions for contributing to the project...

## License
Project license information...