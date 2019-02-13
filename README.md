## `TRUE`  = Recording  */*  `FALSE` = Not recording

### 1 JS

### App.js

```javascript
import { NativeModules } from 'react-native';
const ScreenRecorderGang = NativeModules.ScreenRecorderGang;
```

```javascript
checkIfRecord() {
    try {
      ScreenRecorderGang.get().then(isScreen => { this.setState({ screenStatu: isScreen}) });
    } catch (e) {
      console.error(e);
    }
}
```

### 2 iOS

```
Import ScreenRecorder.h && ScreenRecorder.m in ios/ or just create them with Xcode and copy / paste
```
