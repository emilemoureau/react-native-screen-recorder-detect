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
## 2
##### Import ScreenRecorder.h && ScreenRecorder.m
