
# react-native-screen-recorder-detect

## Getting started

`$ npm install react-native-screen-recorder-detect --save`

### Mostly automatic installation

`$ react-native link react-native-screen-recorder-detect`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-screen-recorder-detect` and add `RNScreenRecorderDetect.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNScreenRecorderDetect.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.shellmonger.reactnative.RNScreenRecorderDetectPackage;` to the imports at the top of the file
  - Add `new RNScreenRecorderDetectPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-screen-recorder-detect'
  	project(':react-native-screen-recorder-detect').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-screen-recorder-detect/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-screen-recorder-detect')
  	```


## Usage
```javascript
import RNScreenRecorderDetect from 'react-native-screen-recorder-detect';

// TODO: What to do with the module?
RNScreenRecorderDetect;
```
  