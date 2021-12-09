# Digital Wallet
UI for a digital wallet react native app.

## How do we build it ?
All steps are in commits <- link to define

### Project initialisation
Initialise the project with
`npx react-native init DigitalWallet`

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