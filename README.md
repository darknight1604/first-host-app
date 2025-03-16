### Setup firebase

- Register app bundle id
- Download then add file `GoogleService-Info.plist` into project by XCode
- Update file /ios/first_host_app/AppDelegate.swift:

```swift
import Firebase
```

```swift
override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    FirebaseApp.configure() <-- Add this line>

    // Some code below
  }
```

- Update file ios/Podfile:

```swift
target 'first_host_app' do
  // Some code
  <-- This two lines below -->
  use_frameworks! :linkage => :static
  $RNFirebaseAsStaticFramework = true
  <-- This two lines below -->

  use_react_native!(
    // Some code
  )

  // Some code below
end
```

- Run command:

```shell
cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```

### Setup absolute path

- Update file `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@host-app/*": ["src/*"]
    }
  }
}
```
- Install nessesary package:
```shell
npm install --save-dev babel-plugin-module-resolver
```
- Update file `babel.config.js`

```javascript
module.exports = {
  // Some configs
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@host-app': './src',
        },
      },
    ],
  ],
};
```

### Setup Google Sign-in
- Create file `.npmrc`:
```
//npm.pkg.github.com/:_authToken=TOKEN
@react-native-google-signin:registry=https://npm.pkg.github.com/:_authToken=TOKEN
```
- `npm i @react-native-google-signin/google-signin@latest`
- Configure URL types in the `Info` add your "iOS URL scheme" (also known as reversed client id), which can be found in `GoogleService-Info.plist`

*More detail can find at [here](https://react-native-google-signin.github.io/docs/install)*

## Release
### Android key
- Find it in Note with `Dani host app release key`. In that note we have various pair keys debug-debug(Variant-Config), release-debug, debugAndroidTest-debug