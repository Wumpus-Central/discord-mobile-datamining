// === Module 1891: ? ===

// Module 1891
import timestampDefault from "timestamp" /* 3 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

require = arg1;
let closure_2 = new timestampDefault("KeyboardStateDebugging");
let obj = {
  channelSafeAreaBottomLayoutHeightChanged(arg0) {
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { layoutHeight: null };
      obj[0] = arg0;
      logger.info("ChannelSafeAreaBottom layout height changed.", obj);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(arg0, arg1) {
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { layoutHeight: null, reportedKeyboardHeight: null };
      obj[0] = arg0;
      obj[1] = arg1;
      logger.warn("ChannelSafeAreaBottom layout height mismatch.", obj);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { height: null };
      obj[0] = height;
      logger.info("KeyboardController keyboardWillShow.", obj);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { height: null, rootProvider: null };
      obj[0] = height;
      obj[1] = flag;
      logger.info("KeyboardController keyboardDidShow.", obj);
    }
  },
  keyboardControllerWorkletEvent(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      obj = { height: null, rootProvider: null };
      obj[0] = arg1;
      obj[1] = flag;
      logger.info("KeyboardController worklet " + arg0 + ".", obj);
    }
  },
  keyboardControllerKeyboardWillHide() {
    if (!obj.isIOS()) {
      logger.info("KeyboardController keyboardWillHide.");
    }
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { rootProvider: null };
      obj[0] = flag;
      logger.info("KeyboardController keyboardDidHide.", obj);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { height: null, location: null };
      obj[0] = height;
      obj[1] = KeyboardUIStore;
      logger.info("ReactNativeKeyboard didShow.", obj);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    let obj = PlatformTypes;
    if (!obj.isIOS()) {
      obj = { location: null };
      obj[0] = KeyboardUIStore;
      logger.info("ReactNativeKeyboard didHide.", obj);
    }
  },
  markPotentialBadState() {
    if (!obj.isIOS()) {
      logger.warn("Marking potential bad state from user, check logs above.");
    }
  }
};
const tmp2 = new timestampDefault("KeyboardStateDebugging");
const result = require("set").fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default obj;