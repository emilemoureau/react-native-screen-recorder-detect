### App.js

## 1
```
import { NativeModules } from 'react-native';
const ScreenRecorderGang = NativeModules.ScreenRecorderGang;
```

```
checkIfRecord() {
    try {
      ScreenRecorderGang.get().then(isScreen => { this.setState({ screenStatu: isScreen}) });
    } catch (e) {
      console.error(e);
    }
}
```
# TRUE = Recording
# FALSE = Not recording

## 2
##### Import ScreenRecorder.h && ScreenRecorder.m in ios/
