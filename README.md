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
