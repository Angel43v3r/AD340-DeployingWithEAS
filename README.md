# AD340-DeployingWithEAS

# Deploying with EAS
<img src="https://github.com/Angel43v3r/AD340-PushNotification/blob/main/PushNotificationApp/assets/images/react-logo%403x.png" 
    alt="React Logo"
    width="200">
<img src="https://github.com/Angel43v3r/AD340-PushNotification/blob/main/PushNotificationApp/assets/images/android-icon-foreground.png" 
    alt="Expo Logo"
    width="200">

## Assignment 18 - Deploying with Expo Application Services (EAS)
### AD340 - Mobile Application Development
### North Seattle College (Spring 2026)
### Date: June 14, 2026


## Table Of Contents
1. [Objective](#objective)
2. [How to Use](#how-to-use)
3. [Assignment Instruction](#assignment-instruction)
4. [Running Test](#running-test-optional)
5. [Contributing](#contributing)
6. [License](#license)


## Objective
Configure a React Native Expo project for production, set up Expo Application Services (EAS), and successfully generate a shareable Android .apk or an iOS Simulator build.

## How to Use
### Prerequisites
Make sure you have the following installed:
- **Visual Studio Code (VS Code)**
    - You can use any editor, VSC is recommended for this project. You can download from [VS Code official website](https://code.visualstudio.com/).
    
- **Node.js**
    - This project uses **Node.js 20 (LTS line)** to run the local development server and manage dependencies. You can download from [Node.js official website](https://nodejs.org/en/).

- **Node Package Manager (npm)**: Version 11.6.2 or higher (comes bundled with Node.js)
    - This project use npm to manage the libraries for the project, this comes pre-bundled with Node.js.

- **Expo**
    - This project uses **Expo** to build and run the app on Android and iOS devices.
    - It simplifies setup by handling native configuration and build tools automatically

- **Expo Go** (Optional)
    - **Expo Go** is a mobile app that allows you to quickly preview and test React Native apps on your physical device.
    - It is useful for rapid development without needing a full Android or iOS build setup.
    - You can download from the [Expo Go official website](https://expo.dev/go).
    - The following step is **only needed if you are creating a new React Native project using Expo Go**:

    ```bash
    npx create-expo-app@latest --template
    ```

- **Android Studio** (Optional)
    - **Android Studio** is required to run the app on an Android emulator or a physical device.
    - It provides the Android SDK, emulator, and build tools needed for React Native development.
    - You can download from the [Android Studio official website](https://developer.android.com/studio).


 *Note: To check version installed in your terminal or bash:*
 ```bash
 node -v
 npm -v
 npx -v
 ```

### Installation & Environment Setup
#### 1. Go to your terminal or bash, navigate to the folder you want to save the project:

```bash
cd <Folder_Name>
```
#### 2. Clone the Repository
In the folder you want to save your project in, run:

```bash
git@github.com:Angel43v3r/AD340-DeployingWithEAS.git
```

#### 3. Navigate to the app folder:

```
cd AD340-DeployingWithEAS
```

#### 4. If you haven't yet, install Expo:
 ```bash
    npx create-expo-app@latest --template
```
#### -OR-
```bash
   npx create-expo-app@latest <app-name>
```

Select Expo version that is the stable or same version as your Expo Go. For this project I selected Expo version 54 instead of the latest version 56.

*NOTE: Make sure that your core Expo is the same or older version than the version in your phone Expo Go. If not downgrade to match your phone.*

To downgrade to Expo version 54
```bash
npm install expo@54
npx expo install --fix
npx expo start --clear
```


Next, choose a template, I choose `Default`
Lastly, name your app
*NOTE: This will automatically run npm install and install all the needed dependencies for Expo*

#### Required CLI (Command Line Interface) tool:
```bash
npm install --global eas-cli
```

**Reference:** https://docs.expo.dev/eas/cli/ 

**Verify:** `eas --version`

**To Login:** `eas login` then select `yes`

**To Verify you are Logged in:** `eas whoami`

**Initialize EAS:** `eas build:configure`, when prompted to create EAS project select `yes`, then select the platform `iOS` or `Android`. I selected `Android` to make `.apk` cause iOS you need a apple developer account.

#### 5. Navigate to the folder
```
cd <Folder_Name>
```

#### 6. Start the development server:
```bash
npx expo start
```

#### 7. Once the server starts, **Expo Dev Tool** will open in your browser and a QR code will be displayed in the terminal.
You can then choose one of the following options:

- Scan **QR code** (Recommended):
    - This opens the **Expo Go** app on your mobile device. Make sure that Expo Go app is installed on your phone.
    - If the QR code does not scan, make sure your phone and computer are on the same Wi-Fi network.
- use **Android Studio** Emulator:
    - Make sure the Android Studio is running.
    - You need to open the **Android Studio** in your server, then navigate and open the project folder root. Make sure Android studio is installed. 
    - Press `a -> Android emulator` in your bash or terminal.
- use **iOS simulator (Mac Only)**:
    - Press `i -> iOS simulator` (Mac only).
- Run on **Web Browser**:
    - Press `w -> open web`

#### 8. Open the project in your preferred code editor such as VS Code.

#### 9. Once you have a working Expo project (managed workflow), start deploying by following the Assignment Instruction.


## Assignment Instruction
In this assignment, you will transition a local Expo project into the production pipeline. You will configure your project's metadata, link it to the cloud using the EAS CLI, and trigger a managed cloud build.

### Assignment Prerequisites
- A working Expo project (managed workflow).

- Node.js installed on your local machine.

- An active Expo Account.


### Step 1: Configure app.json
Before building, you must provide your app with unique production identifiers. Open your `app.json` file and update the following fields under the `expo` object.

1. **`name` & `slug`**: Ensure these represent your app's public name and URL-friendly identifier.

2. **`version`:** Set this to `"1.0.0"`.

3. **Android Configuration:** Add an `android` object with a unique `package` name (using reverse-domain notation, e.g., `com.yourname.myapp`) and the `adaptiveIcon`.

4. **iOS Configuration:** Add an `ios` object with a unique `bundleIdentifier`.

### Step 2: Install EAS CLI and Log In
EAS builds happen in the cloud, managed via the command line interface.

[STEPS HERE](#required-cli-command-line-interface-tool)

### Step 3: Configure `eas.json` for Custom Outputs
By default, EAS builds Android apps as `.aab` (App Bundle) files for the Google Play Store, which cannot be installed directly on a regular phone. To generate a testable `.apk` or an iOS Simulator build, we need to configure a custom build profile.

### Step 4: Run the Build

#### For Android APK:
```
npx eas build --platform android --profile preview
```

#### -OR- if installed globally
```
eas build --platform android --profile preview
```

#### For iOS (need Apple Developer account):
```
eas build --platform ios
```

*I choose Android*

If prompted for `Android application id`, i put com.username.title

## Running Test (OPTIONAL)
I did not implement a test on this project. This is how to setup a Vitest as the test runner.

### Installation
If not already installed, in the `DeployingWithEAS` or `root` folder:
```bash
npm install -D vitest
```

### Test Setup
Make sure your `package.json` should include:
```json
"scripts": {
    "test": "vitest",
},
"vitest": {
    "include": ["test/**/*.test.ts"]
},
"devDependencies": {
    "vitest": "^2.0.0"
}
```

Make sure your test folder structure should look like below:
```
DeployingWithEAS/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── test/
│   └── index.test.ts
```

### Run Test
In your bash or terminal, navigate to the React Native root folder (PushNotification):
```bash
npm test
```

**-OR-** run tests once (CI mode):
```bash
npx vitest run
```


## Contributing
Developed By: **Jovy Ann Nelson**

Instructor: **BC Ko**

Course: **AD340 - Mobile Application Development**

College: **North Seattle College**

Term: **Spring 2026**

Date: **June 8, 2026** to **June 14, 2026**


## License

This project is licensed under the MIT License. Please refer to the [LICENSE](https://github.com/Angel43v3r/AD340-PushNotification/blob/main/LICENSE) for more details.
