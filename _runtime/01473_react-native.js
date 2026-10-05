// === Module 1473: react-native ===

// Module 1473 (react-native)
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;

const NativeEventEmitter = react_native.NativeEventEmitter;
if (require("react-native")) {
  let closure_3 = null;
  const _Object = Object;
  const obj = {};
  const importDefaultResult = require("react-native");
  Object.defineProperty(obj, "eventEmitter", {
    get: function() {
        let tmp = closure_3;
        if (!tmp) {
          const self = this;
          const self2 = this;
          const tmp5 = new NativeEventEmitter(require("react-native"));
          closure_3 = tmp5;
          tmp = tmp5;
        }
        return tmp;
      },
    set: undefined
  });
  exports.default = assign(importDefaultResult, obj);
} else {
  const _Error = Error;
  let self = this;
  let self2 = this;
  const error = new Error("@react-native-community/netinfo: NativeModule.RNCNetInfo is null. To fix this issue try these steps:\n\n\u2022 Run `react-native link @react-native-community/netinfo` in the project root.\n\u2022 Rebuild and re-run the app.\n\u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n\u2022 Check that the library was linked correctly when you used the link command by running through the manual installation instructions in the README.\n* If you are getting this error while unit testing you need to mock the native module. Follow the guide in the README.\n\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-netinfo");
  throw error;
}