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

### Basic Form Section design
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
#### Design full name input
In the Form section, add the design of the full name's input just right below `{/* Full Name */}`
```
...
         {/* Full Name */}
         <View
            style={{
              marginTop: SIZES.padding * 3
            }}
          >
            <Text
              style={{
                color: COLORS.lightGreen,
                ...FONTS.body3
              }}
            >
              Full Name
            </Text>
            <TextInput
              style={{
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3
              }}
              placeholder="Enter Full Name"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
...
```

#### Basic Design of Phone Number Input
Here we'll just define the basic design of the phone number input. Then later, complete it with some advance features (fetching countries, modal, etc...).
The Phone number Input has two main components, the country code -with a down arrow icon, the country flag which is us by default and the country code like '(+1)'- and the phone number itself which is just an input field.
```
...
        {/* Phone Number */}
        <View
          style={{
            marginTop: SIZES.padding * 2
          }}
        >
          <Text
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            {/* Country Code */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2
              }}
              onPress={() => console.log('Show modal')}
            >
              <View
                style= {{
                  justifyContent: 'center'
                }}
              >
                <Image
                  source={icons.down}
                  style={{
                    width: 10,
                    height: 10,
                    tintColor: COLORS.white
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Image
                    source={images.usFlag}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30
                    }}
                  />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3
                    }}
                  >
                    US +1
                  </Text>
              </View>
            </TouchableOpacity>

            {/* Phone Number */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3
              }}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>
...
```

#### Basic Design of password Input
The password form field will be an Input with a secureTextEntry to hide characters when typed by the user.
```
...
        {/* Password */}
        <View
          style={{
            marginTop: SIZES.padding * 2
          }}
        >
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Password
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              color: COLORS.white,
              ...FONTS.body3
            }}
            placeholder= "Enter Password"
            placeholderTextColor= {COLORS.white}
            selectionColor= {COLORS.white}
            secureTextEntry= {true}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30
            }}
            onPress={() => console.log('toggle')}
          >
            <Image
              source={icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
        </View>
...
```

#### Add signup validation button
Add the `renderButton()` instruction in your `screens/SignUp.js` file.
```
...
        <ScrollView>
          { renderHeader() }
          { renderLogo() }
          { renderForm() }
          { renderButton() }   // <=  add this line
        </ScrollView>
...
```
Then define the `renderButton()` function.
```
...
  function renderHeader() {
    ...
  }

  function renderLogo() {
    ...
  }

  function renderForm() {
    ...
  }

  function renderButton() {
    return (
      <View style = {{ margin: SIZES.padding * 3}}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={ () => console.log("Navigate to Home")}
        >
          <Text style={{
            color: COLORS.white,
            ...FONTS.h3
          }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
...
```

#### Add Secure text entry toggle on the Password field
When we initialized the password field, we set a non functionning "Show Password" button. Now we'll make it effective to toggle secureTextEntry when the user click on it.
You need to first define the state variable that will be used to store the toggle boolean
```
...
const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);    // <= Add This line
...
``` 
Next, in the password field code change the followings :
```
secureTextEntry= {true}
```
into
```
secureTextEntry= {!showPassword}
```
Then
```
onPress={() => console.log("Toggle")}
```
into
```
onPress={() => setShowPassword(!showPassword)}
```
Your password field should toggle properly.

### Complete Form section design
#### Complete design of Phone Number field
You remember the basic Phone Number field we first built ? Now we will make it fetch dynamically conuntries data from online APIs.
Two APIs will be used :
- [restcountries.com](restcountries.com) to fetch countries' code, name and calling code
- [flagcdn.com](flagcdn.com) to fecth countries' flags in `.png` format. Since `restcountries.com` doesn't provide flags in `png` format.

Let's add the following our code in `screens/SignUp.js`
```
...
const SignUp = () => {
  /* CODE TO ADD STARTING HERE */
  const [showPassword, setShowPassword] = React.useState(false)
  
  const [areas, setAreas] = React.useState([])                  // The state variable which will contain all countries data for the modal
  const [selectedArea, setSelectedArea] = React.useState(null)  // The state variable containing the selected country's data
  const [modalVisible, setModalVisible] = React.useState(false) // The boolean to show or hide the model

  React.useEffect(() => {                                       // Here we fetch countries data from restcountries.com
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => {
      let areaData = data.map(item => {
        return {
          code : item.alpha2Code,
          name : item.name,
          callingCode: `+${item.callingCodes[0]}`,
          flag: `https://flagcdn.com/w640/${item.alpha2Code.toLowerCase()}.png`  // We set flag's uri according to flagcdn.com format
        }
      })
      
      setAreas(areaData)

      if(areaData.length > 0) {
        let defaultData = areaData.filter(a => a.code == "US")
        
        if(defaultData.length > 0) {
          setSelectedArea(defaultData[0])
        }
      }
    })
  }, [])
  /* CODE TO ADD ENDING
   HERE */

  function renderHeader() {
...
```

Then you need to edit the Country code to load its data dynamically :
```
...
          {/* Country Code */}
              ...
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Image
                    source={{ uri: selectedArea?.flag }}                    {/* changed the static US flag to the dynamic uri */}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30
                    }}
                  />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3
                    }}
                  >
                    {selectedArea?.callingCode}           {/* changed 'US +1' to the dynamic value */}
                  </Text>
              </View>
            </TouchableOpacity>
...
```