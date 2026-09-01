// discord_app/modules/action_sheet/native/ActionSheetActionCreators.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import dismissGlobalKeyboard from "../../../utils/native/KeyboardManagerUtils.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "ActionSheetStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
noopAll;
let result = require("set").fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise) {
    closure_0 = arg1;
    closure_1 = arg2;
    closure_2 = arg3;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((arg0) => arg0.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((arg0) => {
      let obj = callback;
      if (callback == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      obj = {};
      const merged = Object.assign(closure_1_4(obj, closure_1_3));
      closure_0 = closure_1_6(arg0, obj);
      callback = closure_0;
      closure_5 = impressionName;
      callback(table[4]).wait(() => {
        if (!disableHapticOnOpen) {
          let obj = callback(impressionName[5]);
          const result = obj.triggerHapticFeedback(callback2(impressionName[6]).IMPACT_LIGHT);
        }
        const result1 = callback(impressionName[7]).dismissGlobalKeyboard();
        const obj2 = callback(impressionName[7]);
        obj = {
          type: "SHOW_ACTION_SHEET",
          content: callback,
          key: callback2,
          impressionName,
          impressionProperties,
          backdropKind,
          stackingBehavior: closure_5,
          appEntryKey,
        };
        callback2(impressionName[4]).dispatch(obj);
      });
    });
  },
  hideActionSheet(key) {
    if (open.isOpen()) {
      let obj = dismissGlobalKeyboard;
      const result = obj.dismissGlobalKeyboard();
    }
    obj = { type: "HIDE_ACTION_SHEET", key };
    dispatcherDefault.dispatch(obj);
  },
  hideAllActionSheets() {
    dispatcherDefault.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    let obj = dispatcherDefault;
    obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(closure_0) {
    let obj = dispatcherDefault;
    obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey: closure_0 };
    obj.dispatch(obj);
  },
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(arg0) {
  ({
    content: require,
    key: importDefault,
    impressionName: dependencyMap,
    impressionProperties: closure_3,
    backdropKind: closure_4,
    stackingBehavior: closure_5,
    disableHapticOnOpen: jsx,
    appEntryKey: closure_7,
  } = arg0);
  dispatcherDefault.wait(() => {
    if (!disableHapticOnOpen) {
      let obj = callback(impressionName[5]);
      const result = obj.triggerHapticFeedback(callback2(impressionName[6]).IMPACT_LIGHT);
    }
    const result1 = callback(impressionName[7]).dismissGlobalKeyboard();
    const obj2 = callback(impressionName[7]);
    obj = {
      type: "SHOW_ACTION_SHEET",
      content: callback,
      key: callback2,
      impressionName,
      impressionProperties,
      backdropKind,
      stackingBehavior: closure_5,
      appEntryKey,
    };
    callback2(impressionName[4]).dispatch(obj);
  });
};
