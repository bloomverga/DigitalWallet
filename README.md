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
## Design the SignUp Screen
All the work in this part will be done in the `screens/SignUp.js` file.
### Design the basic SignUp Screen
We Design the basic SignUp Screen with a KeyBoardAvoidingView, a green linear gradient background and a Scroll View().

Modify `screens/SignUp.js` to the following
```
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  PlatformColor
} from "react-native"
import LinearGradient from 'react-native-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const SignUp = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Text>SignUp</Text>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SignUp;
```

### Design the header section of the Sign Up Screen
In your `screens/SignUp.js` file, replace the line
```
...
        <ScrollView>
          <Text>SignUp</Text>  // <= Replace this line
        </ScrollView>
...
```
with the function to render the Header
```
...
        <ScrollView>
          { renderHeader() }  // <=  with this line
        </ScrollView>
...
```

Then define the `renderHeader()` function just right after  `const SignUp = () => {` in your `screens/SignUp.js` file
```
...
const SignUp = () => {
  // renderHeader() function starts here
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2
        }}
        onPress={() => console.log("Sign Up")}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.white,
            ...FONTS.h4
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    )
  }
  // renderHeader() function ends here.
  
return (
...
```

### Design logo section of the SignUp Screen
In your `screens/SignUp.js` file, add the `renderLogo()` instruction
```
...
        <ScrollView>
          { renderHeader() }
          { renderLogo() }   // <=  add this line
        </ScrollView>
...
```
Then define the `renderLogo()` function right after your `renderHeader()` function
```
...
  function renderHeader() {
    ...
  }

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source= {images.wallieLogo}
          resizeMode= "contain"
          style={{
            width: "50%"
          }}
        />
      </View>
    )
  }
  
  return (
...
```

### Design form section
Add the `renderForm()` instruction in your `screens/SignUp.js` file.
```
...
        <ScrollView>
          { renderHeader() }
          { renderLogo() }
          { renderForm() }   // <=  add this line
        </ScrollView>
...
```
Then define the `renderForm()` function.
```
...
  function renderHeader() {
    ...
  }

  function renderLogo() {
    ...
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3
        }}
      >
        {/* Full Name */}
        {/* Phone Number */}
        {/* Password */}
      </View>
    )
  }
  
  return (
...
```