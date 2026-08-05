// discord_app/modules/keyboard/KeyboardStateDebugging.tsx
const require = arg1;
let obj = {
  channelSafeAreaBottomLayoutHeightChanged(arg0) {
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { layoutHeight: null };
      obj[0] = arg0;
      tmp2.info("ChannelSafeAreaBottom layout height changed.", obj);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(arg0, arg1) {
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { layoutHeight: null, reportedKeyboardHeight: null };
      obj[0] = arg0;
      obj[1] = arg1;
      arg1.warn("ChannelSafeAreaBottom layout height mismatch.", obj);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { height: null };
      obj[0] = height;
      tmp2.info("KeyboardController keyboardWillShow.", obj);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { height: null, rootProvider: null };
      obj[0] = height;
      obj[1] = flag;
      tmp2.info("KeyboardController keyboardDidShow.", obj);
    }
  },
  keyboardControllerWorkletEvent(arg0, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      obj = { height: null, rootProvider: null };
      obj[0] = arg1;
      obj[1] = flag;
      arg1.info("KeyboardController worklet " + arg0 + ".", obj);
    }
  },
  keyboardControllerKeyboardWillHide() {
    if (!obj.isIOS()) {
      tmp2.info("KeyboardController keyboardWillHide.");
    }
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { rootProvider: null };
      obj[0] = flag;
      tmp2.info("KeyboardController keyboardDidHide.", obj);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { height: null, location: null };
      obj[0] = height;
      obj[1] = KeyboardUIStore;
      KeyboardUIStore.info("ReactNativeKeyboard didShow.", obj);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    let obj = require("../../../discord_common/js/shared/utils/PlatformUtils.tsx") /* PlatformTypes */;
    if (!obj.isIOS()) {
      obj = { location: null };
      obj[0] = KeyboardUIStore;
      tmp2.info("ReactNativeKeyboard didHide.", obj);
    }
  },
  markPotentialBadState() {
    if (!obj.isIOS()) {
      tmp2.warn("Marking potential bad state from user, check logs above.");
    }
  }
};
const tmp2 = new require("timestamp")("KeyboardStateDebugging");
const result = require("set").fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default obj;