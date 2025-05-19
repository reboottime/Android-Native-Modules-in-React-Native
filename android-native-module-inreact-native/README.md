# README

This repo is a learning note about figuring about how to write native android code for react native app. The original readme is [here](./repo.md).

This app demonstrates controlling Android screen brightness through volume buttons — a capability not natively supported by React Native. 


## How to bridge native code to React native code

- where the native modules are defined
    - [Keyevent module](https://github.com/reboottime/Android-Native-Modules-in-React-Native/blob/main/android/app/src/main/java/com/nativemodulesreactnativev0/keyevent/KeyEventModule.kt)
    - [brightness module](https://github.com/reboottime/Android-Native-Modules-in-React-Native/blob/main/android/app/src/main/java/com/nativemodulesreactnativev0/brightness/BrightnessModule.kt)
- [register above two modules to react native, such that react native can discover these two native modules](https://github.com/reboottime/Android-Native-Modules-in-React-Native/blob/main/android/app/src/main/java/com/nativemodulesreactnativev0/CustomModules.kt)
- [Provide clean interface for react native components to access the native modules](./NativeModules/)

## Other essential files

- App.tsx, where you write your react native app
- index.js, the whole app entry file. This registration is essential as it tells the native system which component to render when the app launches, making it the bridge between your JavaScript code and the native runtime environment.

## Illurstration

![alt text](https://github.com/reboottime/Android-Native-Modules-in-React-Native/blob/main/image.png)