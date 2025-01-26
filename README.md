# Foundation

This is a starter project for a monorepo used to build a mobile app, a web app, and a backend API.

## Project Structure

The project is organized into four applications in the apps directory:

- `frontend-app`: The main frontend application built with React and Next.js.
- `marketing-site`: A marketing website built with Next.js.
- `mobile-app`: The mobile application built with React Native.
- `backend-api`: The backend API built with Nest.js.

Additionally, there are shared libraries for types, and utilities in the following directories:

- `libs/shared-types`: Shared types for the project.
- `libs/utils`: Shared utilities for the project.

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
git clone https://github.com/dmitry-zolotaryov/Foundation
cd Foundation
```

2. Install dependencies

```bash
# Install root dependencies
npm install

# Install dependencies for all applications
npm run install:all
```

## Running the Applications

### Backend

```bash
nx serve backend-api
```

The backend will be available at `http://localhost:3000`

### Marketing Site

```bash
nx serve marketing-site
```

The marketing site will be available at `http://localhost:3001`

### Frontend App

```bash
nx serve frontend-app
```

The frontend will be available at `http://localhost:3002`

### Mobile App

Prior to running the mobile app, you need to install [Xcode](https://developer.apple.com/xcode/), and [Android Studio](https://developer.android.com/studio). Once you have Xcode installed, you also need to set up at least one iOS simulator and one Android emulator.

Running on iOS:

```bash
# Install command line tools
brew install cocoapods
brew install ios-deploy

# Install pods
cd apps/mobile-app/ios
pod install
cd ../../../

# List all available simulators
xcrun simctl list devices

# Run on iOS
nx run mobile-app:run-ios --simulator=<enter the simulator ID>
```

Running on Android:

```bash
# Install the JDK
brew install openjdk@17

# Set JAVA_HOME
echo export "JAVA_HOME=\$(/usr/libexec/java_home)" >> ~/.bash_profile
echo export "ANDROID_HOME=\$HOME/Library/Android/sdk" >> ~/.bash_profile
source ~/.bash_profile

# Run on Android
nx run mobile-app:run-android
```

## License

Licensed Under: [MIT License](./LICENSE.txt)<br />
Year: 2025<br />
Author: [Dmitry Zolotaryov](https://github.com/dmitry-zolotaryov)
