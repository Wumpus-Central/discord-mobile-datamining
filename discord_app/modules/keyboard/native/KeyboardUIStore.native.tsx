// === Module 1488: KeyboardUIStore ===

// Module 1488 (KeyboardUIStore)
import Storage5 from "Storage" /* 510 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import ChatInputFocused from "ChatInputFocused" /* 1617 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1618 */;
import react_nativeDefault from "react-native" /* 1630 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1632 */;
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 1880 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import module_570 from "module_570" /* 570 */;
import SafeAreaStore from "SafeAreaStore" /* 1619 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, byAppEntry, height, importDefault;

function computeEntryState(arg0, keyboardDuration, DEFAULT_APP_ENTRY_KEY) {
  let num2;
  let num3;
  let tmp = arg0;
  keyboardDuration = keyboardDuration.keyboardDuration;
  if (keyboardDuration == null) {
    keyboardDuration = tmp.keyboardDuration;
  }
  let keyboardHeight = keyboardDuration.keyboardHeight;
  if (keyboardHeight == null) {
    keyboardHeight = tmp.keyboardHeight;
  }
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    num2 = obj2.getImeInsets(false, DEFAULT_APP_ENTRY_KEY);
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
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    const obj5 = react_nativeDefault;
    num3 = obj5.getImeInsets(true, DEFAULT_APP_ENTRY_KEY);
  } else {
    num3 = 0;
    if (0 !== keyboardHeight2) {
      const tmp2Result7 = useSafeAreaInsets;
      num3 = keyboardHeight2 - tmp2Result7.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
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
  const tmp7 = type !== tmp.keyboardType ? tmp.keyboardType : tmp.keyboardTypePrevious;
  const Storage = Storage5.Storage;
  let num4 = Storage.get(customKeyboardHeight, 253);
  if (num4 == null) {
    num4 = 253;
  }
  if (type === KeyboardTypes.KeyboardTypes.SYSTEM) {
    if (0 !== num2) {
      let tmp12;
      const tmp2Result8 = ChatInputFocused;
      if (tmp2Result8.getIsAnyChatInputFocused()) {
        const _Math = Math;
        const bound = Math.max(num2, 200);
        if (bound !== num4) {
          const Storage2 = Storage5.Storage;
          const result = Storage2.set(customKeyboardHeight, bound);
        }
        tmp12 = bound;
      }
      const Storage3 = Storage5.Storage;
      let num7 = Storage3.get(customKeyboardHeight, 253);
      if (num7 == null) {
        num7 = 253;
      }
      if (type === KeyboardTypes.KeyboardTypes.SYSTEM) {
        if (0 !== num2) {
          let diff;
          const tmp2Result9 = ChatInputFocused;
          if (tmp2Result9.getIsAnyChatInputFocused()) {
            const _Math2 = Math;
            const bound1 = Math.max(num2, 200);
            if (bound1 !== num7) {
              const Storage4 = Storage5.Storage;
              const result1 = Storage4.set(customKeyboardHeight, bound1);
            }
            const tmp2Result10 = useSafeAreaInsets;
            diff = bound1 - tmp2Result10.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
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
            let tmp19;
            let systemKeyboardOpen;
            let tmp21;
            if (typeof context === "object") {
              tmp19 = !shallowEqualDefault(tmp17, context);
            }
            const tmp2Result11 = PlatformUtils;
            if (tmp2Result11.isAndroid()) {
              systemKeyboardOpen = num2 > 0;
            } else {
              systemKeyboardOpen = keyboardDuration.systemKeyboardOpen;
              if (systemKeyboardOpen == null) {
                systemKeyboardOpen = tmp.systemKeyboardOpen;
              }
            }
            if (tmp.keyboardContexts[KeyboardTypes.KeyboardTypes.SYSTEM].keyboardWillOpen) {
              if (null != keyboardDuration.systemKeyboardOpen) {
                const obj3 = {};
                const merged = Object.assign(tmp.keyboardContexts);
                const obj4 = { keyboardWillOpen: false };
                const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
                const merged1 = Object.assign(tmp.keyboardContexts[KeyboardTypes.KeyboardTypes.SYSTEM]);
                obj3[SYSTEM] = obj4;
                tmp21 = obj3;
              }
              const tmp30 = shallowEqualDefault(tmp.keyboardContexts, tmp21);
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
              tmp = { keyboardContexts: tmp21, keyboardDuration, keyboardHeight: num2, keyboardHeightExcludingSafeAreaInsets: num3, systemKeyboardOpen, keyboardType: type, keyboardTypePrevious: tmp7, customKeyboardHeight: tmp12, customKeyboardHeightExcludingSafeAreaInsets: diff };
              const obj6 = { keyboardContexts: tmp21, keyboardDuration, keyboardHeight: num2, keyboardHeightExcludingSafeAreaInsets: num3, systemKeyboardOpen, keyboardType: type, keyboardTypePrevious: tmp7, customKeyboardHeight: tmp12, customKeyboardHeightExcludingSafeAreaInsets: diff };
            }
            keyboardContexts = tmp.keyboardContexts;
            if (tmp19) {
              const obj7 = {};
              const merged2 = Object.assign(keyboardContexts);
              obj7[type] = context;
              tmp21 = obj7;
            } else {
              tmp21 = keyboardContexts;
            }
          }
          tmp19 = tmp17 !== context;
        }
      }
      const tmp2Result12 = useSafeAreaInsets;
      diff = num7 - tmp2Result12.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
    }
  }
  tmp12 = num4;
}
function createInitialEntryState(main) {
  let num2;
  let num3;
  let num4;
  let obj2;
  let obj3;
  let obj4;
  let tmpResult;
  const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
  const Storage = Storage5.Storage;
  let num = Storage.get(customKeyboardHeight, 253);
  if (num == null) {
    num = 253;
  }
  const obj = { customKeyboardHeight: num, customKeyboardHeightExcludingSafeAreaInsets: num2 - tmpResult.getSafeAreaInsets(main).bottom, keyboardContexts: { [KeyboardTypes.KeyboardTypes.SYSTEM]: { keyboardWillOpen: false }, [KeyboardTypes.KeyboardTypes.EXPRESSION]: obj2, [KeyboardTypes.KeyboardTypes.MEDIA]: obj3, [KeyboardTypes.KeyboardTypes.APP_LAUNCHER]: obj4 }, keyboardDuration: 0, keyboardHeight: num3, keyboardHeightExcludingSafeAreaInsets: num4, systemKeyboardOpen: false, keyboardType: KeyboardTypes.KeyboardTypes.SYSTEM, keyboardTypePrevious: KeyboardTypes.KeyboardTypes.SYSTEM };
  const SYSTEM2 = KeyboardTypes.KeyboardTypes.SYSTEM;
  const SYSTEM3 = KeyboardTypes.KeyboardTypes.SYSTEM;
  const Storage2 = Storage5.Storage;
  num2 = Storage2.get(customKeyboardHeight, 253);
  if (num2 == null) {
    num2 = 253;
  }
  const SYSTEM4 = KeyboardTypes.KeyboardTypes.SYSTEM;
  num3 = 0;
  obj2 = { type: ExpressionPickerViewType.EMOJI };
  obj3 = { target: MediaKeyboardTarget.CHAT };
  obj4 = { initialRouteName: AppLauncherRouteName.HOME };
  tmpResult = useSafeAreaInsets;
  const tmpResult3 = PlatformUtils;
  if (tmpResult3.isAndroid()) {
    const obj7 = react_nativeDefault;
    num3 = obj7.getImeInsets(false, main);
  }
  const tmpResult4 = PlatformUtils;
  if (tmpResult4.isAndroid()) {
    const obj9 = react_nativeDefault;
    num4 = obj9.getImeInsets(true, main);
  } else {
    num4 = 0;
  }
  return obj;
}
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
const MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
const customKeyboardHeight = "customKeyboardHeight";
const set = new Set();
const set1 = new Set();
let PlatformUtils = PlatformUtils_mod;
let str = "keyboardWillShow";
if (PlatformUtils.isAndroid()) {
  str = "keyboardDidShow";
}
PlatformUtils = PlatformUtils_mod;
let str2 = "keyboardWillHide";
if (PlatformUtils.isAndroid()) {
  str2 = "keyboardDidHide";
}
let keyboardContexts = module_570.create(() => {
  const obj = { byAppEntry: { main: createInitialEntryState("main"), share: createInitialEntryState("share") } };
  ({ main: createInitialEntryState("main"), share: createInitialEntryState("share") });
  return obj;
});
const KeyboardEvents = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents.addListener(str, (height) => {
  let c1;
  let closure_0;
  height = height.height;
  const duration = height.duration;
  const obj = KeyboardStateDebuggingDefault;
  const result = obj.reactNativeKeyboardDidShow(height, "KeyboardUIStore");
  _require = { keyboardHeight: height, keyboardDuration: duration, systemKeyboardOpen: true };
  importDefault = undefined;
  const obj2 = require("react-native");
  obj2.batchUpdates(() => state.setState((byAppEntry) => {
    let APP_ENTRY_KEYS;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(closure_2_2[11]).APP_ENTRY_KEYS;
    }
    let tmp4 = byAppEntry;
    byAppEntry = byAppEntry.byAppEntry;
    const iter = APP_ENTRY_KEYS[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = byAppEntry[nextResult];
      let tmp6 = nextResult;
      let tmp11 = closure_2_9(tmp8, closure_1_0, nextResult);
      if (tmp8 !== tmp11) {
        let obj = {};
        let merged = Object.assign(byAppEntry);
        obj[tmp6] = tmp12;
        byAppEntry = obj;
      }
      continue;
    }
    if (byAppEntry !== tmp4.byAppEntry) {
      tmp4 = { byAppEntry };
      const obj2 = { byAppEntry };
    }
    return tmp4;
  }));
  const obj3 = require("KeyboardManagerUtils");
  obj3.onKeyboardChanged(true);
  const item = set1.forEach((fn) => fn(false));
});
const KeyboardEvents2 = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents2.addListener(str2, () => {
  let c1;
  let closure_0;
  const obj = KeyboardStateDebuggingDefault;
  const result = obj.reactNativeKeyboardDidHide("KeyboardUIStore");
  _require = { keyboardHeight: 0, systemKeyboardOpen: false };
  importDefault = undefined;
  const obj2 = require("react-native");
  obj2.batchUpdates(() => state.setState((byAppEntry) => {
    let APP_ENTRY_KEYS;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(closure_2_2[11]).APP_ENTRY_KEYS;
    }
    let tmp4 = byAppEntry;
    byAppEntry = byAppEntry.byAppEntry;
    const iter = APP_ENTRY_KEYS[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = byAppEntry[nextResult];
      let tmp6 = nextResult;
      let tmp11 = closure_2_9(tmp8, closure_1_0, nextResult);
      if (tmp8 !== tmp11) {
        let obj = {};
        let merged = Object.assign(byAppEntry);
        obj[tmp6] = tmp12;
        byAppEntry = obj;
      }
      continue;
    }
    if (byAppEntry !== tmp4.byAppEntry) {
      tmp4 = { byAppEntry };
      const obj2 = { byAppEntry };
    }
    return tmp4;
  }));
  const obj3 = require("KeyboardManagerUtils");
  obj3.onKeyboardChanged(false);
  const item = set1.forEach((fn) => fn(false));
});
const subscription = SafeAreaStore.subscribe(() => {
  let closure_0;
  _require = {};
  const obj = require("react-native");
  obj.batchUpdates(() => state.setState((byAppEntry) => {
    let APP_ENTRY_KEYS;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(closure_2_2[11]).APP_ENTRY_KEYS;
    }
    let tmp4 = byAppEntry;
    byAppEntry = byAppEntry.byAppEntry;
    const iter = APP_ENTRY_KEYS[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = byAppEntry[nextResult];
      let tmp6 = nextResult;
      let tmp11 = closure_2_9(tmp8, closure_1_0, nextResult);
      if (tmp8 !== tmp11) {
        let obj = {};
        let merged = Object.assign(byAppEntry);
        obj[tmp6] = tmp12;
        byAppEntry = obj;
      }
      continue;
    }
    if (byAppEntry !== tmp4.byAppEntry) {
      tmp4 = { byAppEntry };
      const obj2 = { byAppEntry };
    }
    return tmp4;
  }));
});
let result = size.fileFinishedImporting("modules/keyboard/native/KeyboardUIStore.native.tsx");

export default keyboardContexts;
export const setKeyboardType = function setKeyboardType(keyboardParams) {
  let state;
  _require = keyboardParams;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    const tmp = _require;
    DEFAULT_APP_ENTRY_KEY = require("AppEntryKeyContext").DEFAULT_APP_ENTRY_KEY;
  }
  const item = set.forEach((fn) => fn(keyboardParams, DEFAULT_APP_ENTRY_KEY));
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
  _require = { keyboardType: keyboardParams };
  let obj = require("react-native");
  obj.batchUpdates(() => state.setState((byAppEntry) => {
    let APP_ENTRY_KEYS;
    if (null != DEFAULT_APP_ENTRY_KEY) {
      const items = [tmp];
      APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_0(closure_2_2[11]).APP_ENTRY_KEYS;
    }
    let tmp4 = byAppEntry;
    byAppEntry = byAppEntry.byAppEntry;
    const iter = APP_ENTRY_KEYS[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = byAppEntry[nextResult];
      let tmp6 = nextResult;
      let tmp11 = closure_2_9(tmp8, closure_1_0, nextResult);
      if (tmp8 !== tmp11) {
        let obj = {};
        let merged = Object.assign(byAppEntry);
        obj[tmp6] = tmp12;
        byAppEntry = obj;
      }
      continue;
    }
    if (byAppEntry !== tmp4.byAppEntry) {
      tmp4 = { byAppEntry };
      const obj2 = { byAppEntry };
    }
    return tmp4;
  }));
};
export const setKeyboardContext = function setKeyboardContext(EXPRESSION, arg1) {
  let closure_0 = EXPRESSION;
  let closure_1 = arg1;
  let DEFAULT_APP_ENTRY_KEY = arg2;
  if (arg2 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  obj.setState((byAppEntry) => {
    let obj3;
    keyboardContexts = {};
    const merged = Object.assign(tmp.keyboardContexts);
    keyboardContexts[closure_0] = closure_1;
    const obj2 = { byAppEntry: obj3 };
    obj3 = {};
    const merged1 = Object.assign(byAppEntry.byAppEntry);
    const obj4 = { keyboardContexts };
    const merged2 = Object.assign(tmp);
    obj3[DEFAULT_APP_ENTRY_KEY] = obj4;
    return obj2;
  });
};
export const addKeyboardWillOpenChangedListener = function addKeyboardWillOpenChangedListener(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
};
export const addKeyboardTypeChangedListener = function addKeyboardTypeChangedListener(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
};