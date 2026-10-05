// === Module 1880: KeyboardStateDebugging ===

// Module 1880 (KeyboardStateDebugging)
import LoggerDefault from "Logger" /* 3 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("KeyboardStateDebugging");
let obj = {
  channelSafeAreaBottomLayoutHeightChanged(layoutHeight) {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { layoutHeight };
      logger.info("ChannelSafeAreaBottom layout height changed.", obj2);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(layoutHeight, reportedKeyboardHeight) {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { layoutHeight, reportedKeyboardHeight };
      logger.warn("ChannelSafeAreaBottom layout height mismatch.", obj2);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { height };
      logger.info("KeyboardController keyboardWillShow.", obj2);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { height, rootProvider: flag };
      logger.info("KeyboardController keyboardDidShow.", obj2);
    }
  },
  keyboardControllerWorkletEvent(arg0, height) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      const obj2 = { height, rootProvider: flag };
      logger.info("KeyboardController worklet " + arg0 + ".", obj2);
    }
  },
  keyboardControllerKeyboardWillHide() {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      logger.info("KeyboardController keyboardWillHide.");
    }
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { rootProvider: flag };
      logger.info("KeyboardController keyboardDidHide.", obj2);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { height, location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didShow.", obj2);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      const obj2 = { location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didHide.", obj2);
    }
  },
  markPotentialBadState() {
    const obj = utils_PlatformUtils;
    if (!obj.isIOS()) {
      logger.warn("Marking potential bad state from user, check logs above.");
    }
  }
};
const tmp2 = new LoggerDefault("KeyboardStateDebugging");
const result = size.fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default obj;