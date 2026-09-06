// === Module 1481: KeyboardUIStore ===

// Module 1481 (KeyboardUIStore)
import Storage5 from "Storage" /* 510 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1219 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1482 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1607 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import ChatInputFocused from "ChatInputFocused" /* 1610 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1611 */;
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1623 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1625 */;
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 1873 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import module_560 from "module_560" /* 560 */;
import SafeAreaStore from "SafeAreaStore" /* 1612 */;
import size from "module_2" /* 2 */;

function computeEntryState(arg0, keyboardDuration, DEFAULT_APP_ENTRY_KEY) {
  let tmp = arg0;
  keyboardDuration = keyboardDuration.keyboardDuration;
  if (keyboardDuration == null) {
    keyboardDuration = tmp.keyboardDuration;
  }
  let keyboardHeight = keyboardDuration.keyboardHeight;
  if (keyboardHeight == null) {
    keyboardHeight = tmp.keyboardHeight;
  }
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    let obj1 = NativeSafeAreaInsetsModuleDefault;
    let num2 = obj1.getImeInsets(false, DEFAULT_APP_ENTRY_KEY);
  } else {
    num2 = 0;
    if (0 !== keyboardHeight) {
      num2 = keyboardHeight;
    }
  }
  let keyboardHeight2 = keyboardDuration.keyboardHeight;
  if (keyboardHeight2 == null) {
    keyboardHeight2 = tmp.keyboardHeight;
  }
  let tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    let num3 = NativeSafeAreaInsetsModuleDefault.getImeInsets(true, DEFAULT_APP_ENTRY_KEY);
  } else {
    num3 = 0;
    if (0 !== keyboardHeight2) {
      tmp2Result = useSafeAreaInsets;
      num3 = keyboardHeight2 - tmp2Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
    }
  }
  const keyboardType = keyboardDuration.keyboardType;
  let type;
  if (keyboardType != null) {
    type = keyboardType.type;
  }
  if (type == null) {
    type = tmp.keyboardType;
  }
  const Storage = Storage5.Storage;
  let num4 = Storage.get(customKeyboardHeight, 253);
  if (num4 == null) {
    num4 = 253;
  }
  if (type === KeyboardTypes.KeyboardTypes.SYSTEM) {
    if (0 !== num2) {
      if (tmp2Result1.getIsAnyChatInputFocused()) {
        const _Math = Math;
        const bound = Math.max(num2, 200);
        if (bound !== num4) {
          const Storage2 = Storage5.Storage;
          const result = Storage2.set(customKeyboardHeight, bound);
        }
        let tmp12 = bound;
      }
      const Storage3 = Storage5.Storage;
      let num7 = Storage3.get(customKeyboardHeight, 253);
      if (num7 == null) {
        num7 = 253;
      }
      if (type === KeyboardTypes.KeyboardTypes.SYSTEM) {
        if (0 !== num2) {
          if (tmp2Result2.getIsAnyChatInputFocused()) {
            const _Math2 = Math;
            const bound1 = Math.max(num2, 200);
            if (bound1 !== num7) {
              const Storage4 = Storage5.Storage;
              const result1 = Storage4.set(customKeyboardHeight, bound1);
            }
            let diff = bound1 - useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
            const tmp2Result3 = useSafeAreaInsets;
          }
          const keyboardType2 = keyboardDuration.keyboardType;
          let context;
          if (keyboardType2 != null) {
            context = keyboardType2.context;
          }
          if (context == null) {
            context = tmp17;
          }
          if (typeof tmp.keyboardContexts[type] === "object") {
            if (typeof context === "object") {
              let tmp19 = !discord_common_shallowEqualDefault(tmp17, context);
            }
            if (tmp2Result4.isAndroid()) {
              let systemKeyboardOpen = num2 > 0;
            } else {
              systemKeyboardOpen = keyboardDuration.systemKeyboardOpen;
              if (systemKeyboardOpen == null) {
                systemKeyboardOpen = tmp.systemKeyboardOpen;
              }
            }
            if (tmp.keyboardContexts[KeyboardTypes.KeyboardTypes.SYSTEM].keyboardWillOpen) {
              if (null != keyboardDuration.systemKeyboardOpen) {
                obj = {};
                const merged = Object.assign(tmp.keyboardContexts);
                obj = {};
                const merged1 = Object.assign(tmp.keyboardContexts[KeyboardTypes.KeyboardTypes.SYSTEM]);
                obj.keyboardWillOpen = false;
                obj[KeyboardTypes.KeyboardTypes.SYSTEM] = obj;
                let tmp21 = obj;
              }
              const tmp30 = discord_common_shallowEqualDefault(tmp.keyboardContexts, tmp21);
              if (tmp.keyboardDuration === keyboardDuration) {
                if (tmp30) {
                  if (tmp.keyboardHeight === num2) {
                    if (tmp.keyboardHeightExcludingSafeAreaInsets === num3) {
                      if (tmp.keyboardType === type) {
                        if (tmp.customKeyboardHeight === tmp12) {
                          return tmp;
                        }
                      }
                    }
                  }
                }
              }
              obj1 = { keyboardContexts: tmp21, keyboardDuration, keyboardHeight: num2, keyboardHeightExcludingSafeAreaInsets: num3, systemKeyboardOpen, keyboardType: type, keyboardTypePrevious: tmp7, customKeyboardHeight: tmp12, customKeyboardHeightExcludingSafeAreaInsets: diff };
              tmp = obj1;
            }
            const keyboardContexts = tmp.keyboardContexts;
            if (tmp19) {
              const obj2 = {};
              const merged2 = Object.assign(keyboardContexts);
              obj2[type] = context;
              tmp21 = obj2;
            } else {
              tmp21 = keyboardContexts;
            }
            tmp2Result4 = PlatformUtils;
          }
          tmp19 = tmp17 !== context;
          tmp2Result2 = ChatInputFocused;
        }
      }
      tmp2Result1 = ChatInputFocused;
      diff = num7 - useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
      const tmp2Result5 = useSafeAreaInsets;
    }
  }
  tmp12 = num4;
  tmp7 = type !== tmp.keyboardType ? tmp.keyboardType : tmp.keyboardTypePrevious;
}
function createInitialEntryState(main) {
  const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
  const Storage = Storage5.Storage;
  let num = Storage.get(customKeyboardHeight, 253);
  if (num == null) {
    num = 253;
  }
  let keyboardContexts = { customKeyboardHeight: null, customKeyboardHeightExcludingSafeAreaInsets: null, keyboardContexts: null, keyboardDuration: 0, keyboardHeight: null, keyboardHeightExcludingSafeAreaInsets: null, systemKeyboardOpen: false, keyboardType: null, keyboardTypePrevious: null };
  const SYSTEM2 = KeyboardTypes.KeyboardTypes.SYSTEM;
  keyboardContexts.customKeyboardHeight = num;
  const SYSTEM3 = KeyboardTypes.KeyboardTypes.SYSTEM;
  const Storage2 = Storage5.Storage;
  let num2 = Storage2.get(customKeyboardHeight, 253);
  if (num2 == null) {
    num2 = 253;
  }
  const SYSTEM4 = KeyboardTypes.KeyboardTypes.SYSTEM;
  let tmpResult = useSafeAreaInsets;
  keyboardContexts.customKeyboardHeightExcludingSafeAreaInsets = num2 - tmpResult.getSafeAreaInsets(main).bottom;
  keyboardContexts = { [KeyboardTypes.KeyboardTypes.SYSTEM]: { keyboardWillOpen: false }, [KeyboardTypes.KeyboardTypes.EXPRESSION]: ExpressionPickerViewType.EMOJI, [KeyboardTypes.KeyboardTypes.MEDIA]: keyboardContexts, [KeyboardTypes.KeyboardTypes.APP_LAUNCHER]: obj1 };
  keyboardContexts = { target: MediaKeyboardTarget.CHAT };
  keyboardContexts.keyboardContexts = keyboardContexts;
  tmpResult = PlatformUtils;
  let num3 = 0;
  if (tmpResult.isAndroid()) {
    num3 = NativeSafeAreaInsetsModuleDefault.getImeInsets(false, main);
  }
  keyboardContexts.keyboardHeight = num3;
  if (tmpResult1.isAndroid()) {
    let num4 = NativeSafeAreaInsetsModuleDefault.getImeInsets(true, main);
  } else {
    num4 = 0;
  }
  keyboardContexts.keyboardHeightExcludingSafeAreaInsets = num4;
  keyboardContexts.keyboardType = KeyboardTypes.KeyboardTypes.SYSTEM;
  keyboardContexts.keyboardTypePrevious = KeyboardTypes.KeyboardTypes.SYSTEM;
  return keyboardContexts;
}
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
const MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
const customKeyboardHeight = "customKeyboardHeight";
const set = new Set();
const set1 = new Set();
let str = "keyboardWillShow";
if (PlatformUtils.isAndroid()) {
  str = "keyboardDidShow";
}
let str2 = "keyboardWillHide";
if (PlatformUtils.isAndroid()) {
  str2 = "keyboardDidHide";
}
let obj = module_560.create(() => {
  let byAppEntry = { byAppEntry: null };
  byAppEntry = { main: createInitialEntryState("main"), share: createInitialEntryState("share") };
  byAppEntry.byAppEntry = byAppEntry;
  return byAppEntry;
});
const KeyboardEvents = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents.addListener(str, (height) => {
  height = height.height;
  const result = KeyboardStateDebuggingDefault.reactNativeKeyboardDidShow(height, "KeyboardUIStore");
  _require = { keyboardHeight: height, keyboardDuration: height.duration, systemKeyboardOpen: true };
  importDefault = undefined;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState((arg0) => {
    let tmp = DEFAULT_APP_ENTRY_KEY;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(dependencyMap[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
  const obj2 = require("ReactBatchUpdates");
  require("KeyboardManagerUtils").onKeyboardChanged(true);
  const item = set1.forEach((fn) => fn(false));
});
const KeyboardEvents2 = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents2.addListener(str2, () => {
  const result = KeyboardStateDebuggingDefault.reactNativeKeyboardDidHide("KeyboardUIStore");
  _require = { keyboardHeight: 0, systemKeyboardOpen: false };
  importDefault = undefined;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState((arg0) => {
    let tmp = DEFAULT_APP_ENTRY_KEY;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(dependencyMap[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
  const obj2 = require("ReactBatchUpdates");
  require("KeyboardManagerUtils").onKeyboardChanged(false);
  const item = set1.forEach((fn) => fn(false));
});
const subscription = SafeAreaStore.subscribe(() => {
  _require = {};
  require("ReactBatchUpdates").batchUpdates(() => obj.setState((arg0) => {
    let tmp = DEFAULT_APP_ENTRY_KEY;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(dependencyMap[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
});
let result = size.fileFinishedImporting("modules/keyboard/native/KeyboardUIStore.native.tsx");

export default obj;
export const setKeyboardType = function setKeyboardType(keyboardParams) {
  _require = keyboardParams;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("AppEntryKeyContext").DEFAULT_APP_ENTRY_KEY;
  }
  const item = set.forEach((fn) => fn(closure_0, DEFAULT_APP_ENTRY_KEY));
  const item1 = set1.forEach((fn) => {
    let tmp2 = keyboardParams.type === KeyboardTypes.KeyboardTypes.SYSTEM;
    if (tmp2) {
      const context = keyboardParams.context;
      let keyboardWillOpen;
      if (context != null) {
        keyboardWillOpen = context.keyboardWillOpen;
      }
      tmp2 = true === keyboardWillOpen;
    }
    return fn(tmp2, DEFAULT_APP_ENTRY_KEY);
  });
  closure_129_0 = { keyboardType: keyboardParams };
  closure_129_1 = DEFAULT_APP_ENTRY_KEY;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState((arg0) => {
    let tmp = DEFAULT_APP_ENTRY_KEY;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(dependencyMap[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
  obj = require("ReactBatchUpdates");
};
export const setKeyboardContext = function setKeyboardContext(EXPRESSION, arg1) {
  closure_0 = EXPRESSION;
  closure_1 = arg1;
  let DEFAULT_APP_ENTRY_KEY = arg2;
  if (arg2 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  obj.setState((byAppEntry) => {
    byAppEntry = {};
    const merged = Object.assign(tmp.keyboardContexts);
    byAppEntry[closure_0] = closure_1;
    byAppEntry = { byAppEntry: null };
    byAppEntry = {};
    const merged1 = Object.assign(byAppEntry.byAppEntry);
    const obj1 = {};
    const merged2 = Object.assign(tmp);
    obj1.keyboardContexts = byAppEntry;
    byAppEntry[DEFAULT_APP_ENTRY_KEY] = obj1;
    byAppEntry.byAppEntry = byAppEntry;
    return byAppEntry;
  });
};
export const addKeyboardWillOpenChangedListener = function addKeyboardWillOpenChangedListener(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
};
export const addKeyboardTypeChangedListener = function addKeyboardTypeChangedListener(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
};