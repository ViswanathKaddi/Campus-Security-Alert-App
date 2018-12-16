# Campus-Security-Alert-App
Campus Security Alert App is the mobile application built to connect the students and help them in rescue operation in case of emergency or threatening situations that takes place inside the Colleges and Universities.

Follow the guidelines to set up the environment and run the code in Windows Environment 

1. You must have The Java Development Kit (Java SDK) in our machine. If not, install the JDK version like Java SE8 or Java SE10.

https://www.oracle.com/technetwork/java/javase/downloads/index.html

2. Install node.js 

Node is used to generate the Application Bundle. It takes all the JavaScript Code we write and combine it all to one file of mobile device. Node is also used for package management (NPM)

https://nodejs.org/en/download/ 

3. Install the Atom IDE which is open source code editor avaiblr for Windows, Mac and Unix

https://atom.io/

4. Download and install Android Studio. Android studio is used for mobile application development. It is used to run the code and simulate it in mobile environment using Android Virtual Device (AVD) Manager.

https://developer.android.com/studio/

5. Install the React Native by running the command in CLI 

npm install -g react-native-cli

6. Navigate to the folder where you want to create ther project and type the following command to create the project 

react-native init project_name

7. To run the react native app, you can execute the following command on CLI inside the location of project folder

react-native run-android

8. In Android Studio IDE, open the folder named 'android' present in the react native project

9. Create the Android Emulator. Click on 'Tools' Window, select Android from the Dropdown and choose 'AVD Manager'. Create the Virtual Device

10. Virtual Device helps us to run Android Operating System inside whatever Operating System we are using. Select the Device type like Nexus 5 with regard to their screen size. And select Android Version like Marshmallow, Nougat that you desire to work on. 

11. Finally to run your React Native Project in Android Emulator. 
  * In Windows CLI, at the location of the project run command 'react-native run-android'
  * A react native packager pops up, this takes all the written  JavaScript code, compresses to single JS file and makes it available for device.
  * At the Windows CLI, application is built for Android device, it automatically runs and opens it on Virtual Device.
  * Press R key twice to refresh your code everytime you make some changes
  * Use command Ctrl+M for opening the Development Menu where there are options fpor debugging, settings, Reloading etc.
