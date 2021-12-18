# Build a Digital Wallet with React Native
Tutorial to build the UI for a digital wallet app in react native.

## How do we build it ?
All steps are in commits <- link to define

### Project initialisation
Initialise the project with
```
npx react-native init DigitalWallet
```

### Config react native
Create a file `react-native.config.js` at the root of the project folder with the following content
```
module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ["./assets/fonts/"]
}
```

### Add project assets
Add the alreading existing project assets. So won't need to design it yourself.
Download the `assets/` folder and past it at the root of the project directory.

### Define some constants for the project
You'll define some constants for this project in other to ease the development.
Since you'll reuse some variables like image links, icon links, Fonts size, colors, etc... It's better to define it once and simply reuse it as you want afterward.

Download the `constants/` folder and paste it at the root of the project directory.
It contains 4 files :
```
DigitalWallet/
...
|---constants/
    |---icons.js
    |---images.js
    |---index.js
    |---theme.js
...
```
`icons.js`, `images.js` and `theme.js` to define the constants. `index.js` to export all of them.

### Define Screens for the project
Create a `screens` folder at the root of the project directory. Then create a js file for each of the 3 screens to be created and an `index.js` file to export all of the screens.
You should have
```
DigitalWallet/
...
|---screens/
    |---Home.js
    |---index.js
    |---Scan.js
    |---SignUp.js
...
```
Each js screen file with the following basic content
```
ScreenName.js


import React from 'react'
import {
  View,
  Text
} from "react-native"

const ScreenName = () => {
  return (
    <View>
      <Text>ScreenName</Text>
    </View>
  )
}

export default ScreenName;
```

`ScreenName` will be `Home`, `SignUp` or `Scan`.

### Install navigation utilities
We need to install some utilities to handle navigation and other view actions in the app
```
npm install @react-navigation/native react-native-reanimated@2.2.4 react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack @react-navigation/bottom-tabs
```
We have to install the `2.2.4` version  of `react-native-reanimated` due to some [issue](https://stackoverflow.com/questions/70335156/how-to-resolve-react-native-navigation-error-while-installing-version-6/70336901#70336901) with the `2.3.0 (latest)` version.

### Updating App.js and add a default SignUp Screen
Here you'll update `App.js` to reflect the app's behave. When launched the app will land on the Signup page.

Modify the `App.js` file into the following :
```
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import { SignUp } from './screens'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    borders: "transparent"
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'SignUp'}
      >
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
```

Then link the assets to the project.
```
npx react-native link
```

For iOS, run the following commands after :
```
cd ios
pod install
cd  ..
```

Run the app to test it out :
```
npm run android
```
or

```
npm run ios
```

## Install react-native-linear-gradient
As we need gradient to design the SignUp screen, we install react-native-linear-gradient
```
npm react-native-linear-gradient
npx react-native link
```

For iOS, run the following commands too :
```
cd ios
pod install
cd  ..
```