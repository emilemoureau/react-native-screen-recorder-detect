#### Detect screen capture / record / mirrored - iOS 11 < *

## `YES`  = Recording  */*  `NO` = Not recording

### 1 JS

### App.js

```javascript
import { NativeModules } from 'react-native';
const ScreenRecorderDetect = NativeModules.ScreenRecorderDetect;
```

```javascript
checkIfRecord() {
    try {
      ScreenRecorderDetect.get().then(isRecord => { this.setState({ screen: isRecord}) });
    } catch (e) {
      console.error(e);
    }
}
```

### 2 iOS

```
Import ScreenRecorder.h && ScreenRecorder.m in ios/ or just create them with Xcode and copy / paste
```
