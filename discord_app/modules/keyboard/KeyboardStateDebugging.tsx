// === Module 1873: KeyboardStateDebugging ===

// Module 1873 (KeyboardStateDebugging)
import LoggerDefault from "Logger" /* 3 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;

require = fn;
const logger = new LoggerDefault("KeyboardStateDebugging");
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default {
  channelSafeAreaBottomLayoutHeightChanged(layoutHeight) {
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { layoutHeight };
      logger.info("ChannelSafeAreaBottom layout height changed.", obj);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(layoutHeight, reportedKeyboardHeight) {
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { layoutHeight, reportedKeyboardHeight };
      logger.warn("ChannelSafeAreaBottom layout height mismatch.", obj);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { height };
      logger.info("KeyboardController keyboardWillShow.", obj);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { height, rootProvider: flag };
      logger.info("KeyboardController keyboardDidShow.", obj);
    }
  },
  keyboardControllerWorkletEvent(arg0, height) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      obj = { height, rootProvider: flag };
      logger.info("KeyboardController worklet " + arg0 + ".", obj);
    }
  },
  keyboardControllerKeyboardWillHide() {
    if (!obj.isIOS()) {
      logger.info("KeyboardController keyboardWillHide.");
    }
    obj = utils_PlatformUtils;
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { rootProvider: flag };
      logger.info("KeyboardController keyboardDidHide.", obj);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { height, location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didShow.", obj);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    let obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      obj = { location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didHide.", obj);
    }
  },
  markPotentialBadState() {
    if (!obj.isIOS()) {
      logger.warn("Marking potential bad state from user, check logs above.");
    }
    obj = utils_PlatformUtils;
  }
};