// === Module 1481: computeEntryState ===

// Module 1481 (computeEntryState)
import Storage5 from "Storage" /* 510 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import ExpressionPickerViewType2 from "ExpressionPickerViewType" /* 1219 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1482 */;
import DRAG_HANDLE from "DRAG_HANDLE" /* 1607 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import _modDef1612 from "module_1612" /* 1612 */;
import enforcingDefault from "enforcing" /* 1623 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1625 */;
import _modDef1873 from "module_1873" /* 1873 */;
import set from "set" /* 1115 */;
import keys from "keys" /* 560 */;

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
  obj = set;
  if (obj.isAndroid()) {
    obj1 = enforcingDefault;
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
  let tmp2Result = tmp2(1115);
  if (tmp2Result.isAndroid()) {
    let num3 = enforcingDefault.getImeInsets(true, DEFAULT_APP_ENTRY_KEY);
    const obj5 = enforcingDefault;
  } else {
    num3 = 0;
    if (0 !== keyboardHeight2) {
      tmp2Result = tmp2(1611);
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
  const Storage = tmp2(510).Storage;
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
          const Storage2 = tmp2(510).Storage;
          const result = Storage2.set(tmp8, bound);
        }
        let tmp12 = bound;
      }
      const Storage3 = tmp2(510).Storage;
      let num7 = Storage3.get(tmp8, 253);
      if (num7 == null) {
        num7 = 253;
      }
      if (type === tmp2(1609).KeyboardTypes.SYSTEM) {
        if (0 !== num2) {
          if (tmp2Result2.getIsAnyChatInputFocused()) {
            const _Math2 = Math;
            const bound1 = Math.max(num2, 200);
            if (bound1 !== num7) {
              const Storage4 = tmp2(510).Storage;
              const result1 = Storage4.set(tmp8, bound1);
            }
            let diff = bound1 - tmp2(1611).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
            const tmp2Result3 = tmp2(1611);
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
              let tmp19 = !shallowEqualDefault(tmp17, context);
            }
            if (tmp2Result4.isAndroid()) {
              let systemKeyboardOpen = num2 > 0;
            } else {
              systemKeyboardOpen = keyboardDuration.systemKeyboardOpen;
              if (systemKeyboardOpen == null) {
                systemKeyboardOpen = tmp.systemKeyboardOpen;
              }
            }
            if (tmp.keyboardContexts[tmp2(undefined, 1609).KeyboardTypes.SYSTEM].keyboardWillOpen) {
              if (null != keyboardDuration.systemKeyboardOpen) {
                obj = {};
                const merged = Object.assign(tmp.keyboardContexts);
                obj = {};
                const merged1 = Object.assign(tmp.keyboardContexts[tmp2(undefined, 1609).KeyboardTypes.SYSTEM]);
                obj.keyboardWillOpen = false;
                obj[tmp2(1609).KeyboardTypes.SYSTEM] = obj;
                let tmp21 = obj;
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
              obj1 = { keyboardContexts: null, keyboardDuration: null, keyboardHeight: null, keyboardHeightExcludingSafeAreaInsets: null, systemKeyboardOpen: null, keyboardType: null, keyboardTypePrevious: null, customKeyboardHeight: null, customKeyboardHeightExcludingSafeAreaInsets: null };
              obj1[0] = tmp21;
              obj1[1] = keyboardDuration;
              obj1[2] = num2;
              obj1[3] = num3;
              obj1[4] = systemKeyboardOpen;
              obj1[5] = type;
              obj1[6] = tmp7;
              obj1[7] = tmp12;
              obj1[8] = diff;
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
            tmp2Result4 = tmp2(1115);
          }
          tmp19 = tmp17 !== context;
          tmp2Result2 = tmp2(1610);
        }
      }
      tmp2Result1 = tmp2(1610);
      diff = num7 - tmp2(1611).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY).bottom;
      const tmp2Result5 = tmp2(1611);
    }
  }
  tmp12 = num4;
}
function createInitialEntryState(main) {
  const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
  const Storage = Storage5.Storage;
  let num = Storage.get(customKeyboardHeight, 253);
  if (num == null) {
    num = 253;
  }
  obj = { customKeyboardHeight: null, customKeyboardHeightExcludingSafeAreaInsets: null, keyboardContexts: null, keyboardDuration: 0, keyboardHeight: null, keyboardHeightExcludingSafeAreaInsets: null, systemKeyboardOpen: false, keyboardType: null, keyboardTypePrevious: null };
  const SYSTEM2 = tmp(1609).KeyboardTypes.SYSTEM;
  obj[0] = num;
  const SYSTEM3 = tmp(1609).KeyboardTypes.SYSTEM;
  const Storage2 = tmp(510).Storage;
  let num2 = Storage2.get(customKeyboardHeight, 253);
  if (num2 == null) {
    num2 = 253;
  }
  const SYSTEM4 = tmp(1609).KeyboardTypes.SYSTEM;
  let tmpResult = tmp(1611);
  obj[1] = num2 - tmpResult.getSafeAreaInsets(main).bottom;
  obj = { [tmp(1609).KeyboardTypes.SYSTEM]: { keyboardWillOpen: false }, [tmp(1609).KeyboardTypes.EXPRESSION]: ExpressionPickerViewType.EMOJI, [tmp(1609).KeyboardTypes.MEDIA]: obj, [tmp(1609).KeyboardTypes.APP_LAUNCHER]: obj1 };
  obj = { target: MediaKeyboardTarget.CHAT };
  obj[2] = obj;
  tmpResult = tmp(1115);
  let num3 = 0;
  if (tmpResult.isAndroid()) {
    num3 = enforcingDefault.getImeInsets(false, main);
    const obj7 = enforcingDefault;
  }
  obj[4] = num3;
  if (tmpResult1.isAndroid()) {
    let num4 = enforcingDefault.getImeInsets(true, main);
    const obj9 = enforcingDefault;
  } else {
    num4 = 0;
  }
  obj[5] = num4;
  obj[7] = KeyboardTypes.KeyboardTypes.SYSTEM;
  obj[8] = KeyboardTypes.KeyboardTypes.SYSTEM;
  return obj;
}
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
const ExpressionPickerViewType = ExpressionPickerViewType2.ExpressionPickerViewType;
const MediaKeyboardTarget = DRAG_HANDLE.MediaKeyboardTarget;
const customKeyboardHeight = "customKeyboardHeight";
let set = new Set();
const set1 = new Set();
let str = "keyboardWillShow";
if (set.isAndroid()) {
  str = "keyboardDidShow";
}
let str2 = "keyboardWillHide";
if (set.isAndroid()) {
  str2 = "keyboardDidHide";
}
let obj = keys.create(() => {
  obj = { byAppEntry: null };
  obj = { main: createInitialEntryState("main"), share: createInitialEntryState("share") };
  obj[0] = obj;
  return obj;
});
const KeyboardEvents = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents.addListener(str, (height) => {
  height = height.height;
  const result = _modDef1873.reactNativeKeyboardDidShow(height, "KeyboardUIStore");
  const _require = { keyboardHeight: height, keyboardDuration: height.duration, systemKeyboardOpen: true };
  importDefault = undefined;
  obj = _modDef1873;
  _require(1249).batchUpdates(() => closure_1_11.setState((arg0) => {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_1_0(closure_1_2[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
  const obj2 = _require(1249);
  _require(1874).onKeyboardChanged(true);
  const item = set1.forEach((arg0) => arg0(false));
});
const KeyboardEvents2 = KeyboardChatScrollView.KeyboardEvents;
KeyboardEvents2.addListener(str2, () => {
  const result = _modDef1873.reactNativeKeyboardDidHide("KeyboardUIStore");
  const _require = { keyboardHeight: 0, systemKeyboardOpen: false };
  importDefault = undefined;
  obj = _modDef1873;
  _require(1249).batchUpdates(() => closure_1_11.setState((arg0) => {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_1_0(closure_1_2[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
  const obj2 = _require(1249);
  _require(1874).onKeyboardChanged(false);
  const item = set1.forEach((arg0) => arg0(false));
});
const subscription = _modDef1612.subscribe(() => {
  const _require = {};
  _require(1249).batchUpdates(() => closure_1_11.setState((arg0) => {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_1_0(closure_1_2[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
});
let result = set.fileFinishedImporting("modules/keyboard/native/KeyboardUIStore.native.tsx");

export default obj;
export const setKeyboardType = function setKeyboardType(keyboardParams) {
  let _require = keyboardParams;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1480).DEFAULT_APP_ENTRY_KEY;
  }
  const item = set.forEach((arg0) => arg0(closure_0, DEFAULT_APP_ENTRY_KEY));
  const item1 = set1.forEach((arg0) => {
    let tmp2 = lib.type === lib(closure_1_2[4]).KeyboardTypes.SYSTEM;
    if (tmp2) {
      const context = lib.context;
      let keyboardWillOpen;
      if (context != null) {
        keyboardWillOpen = context.keyboardWillOpen;
      }
      tmp2 = true === keyboardWillOpen;
    }
    return arg0(tmp2, DEFAULT_APP_ENTRY_KEY);
  });
  _require = { keyboardType: keyboardParams };
  _require(1249).batchUpdates(() => closure_1_11.setState((arg0) => {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let APP_ENTRY_KEYS = items;
    } else {
      APP_ENTRY_KEYS = closure_1_0(closure_1_2[11]).APP_ENTRY_KEYS;
    }
    tmp = APP_ENTRY_KEYS[Symbol.iterator]();
  }));
};
export const setKeyboardContext = function setKeyboardContext(EXPRESSION, arg1) {
  const _require = EXPRESSION;
  closure_1 = arg1;
  let DEFAULT_APP_ENTRY_KEY = arg2;
  if (arg2 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(DEFAULT_APP_ENTRY_KEY[17]).DEFAULT_APP_ENTRY_KEY;
  }
  obj.setState((byAppEntry) => {
    obj = {};
    const merged = Object.assign(tmp.keyboardContexts);
    obj[closure_0] = closure_1;
    obj = { byAppEntry: null };
    obj = {};
    const merged1 = Object.assign(byAppEntry.byAppEntry);
    obj1 = {};
    const merged2 = Object.assign(tmp);
    obj1.keyboardContexts = obj;
    obj[DEFAULT_APP_ENTRY_KEY] = obj1;
    obj[0] = obj;
    return obj;
  });
};
export const addKeyboardWillOpenChangedListener = function addKeyboardWillOpenChangedListener(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => closure_1_8.delete(closure_0);
};
export const addKeyboardTypeChangedListener = function addKeyboardTypeChangedListener(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => closure_1_7.delete(closure_0);
};