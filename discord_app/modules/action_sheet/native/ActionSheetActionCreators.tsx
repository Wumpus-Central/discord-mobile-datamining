// discord_app/modules/action_sheet/native/ActionSheetActionCreators.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
noopAll;
let result = require("obj132").fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise) {
    closure_0 = arg1;
    closure_1 = arg2;
    closure_2 = arg3;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((result) => result.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((result) => {
      let obj = callback;
      if (callback == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      obj = {};
      const merged = Object.assign(closure_1_4(obj, closure_1_3));
      closure_0 = <result />;
      callback = closure_0;
      closure_5 = impressionName;
      callback(table[3]).wait(() => {
        if (!disableHapticOnOpen) {
          let obj = callback(impressionName[4]);
          const result = obj.triggerHapticFeedback(callback2(impressionName[5]).IMPACT_LIGHT);
        }
        const result1 = callback(impressionName[6]).dismissGlobalKeyboard();
        const obj2 = callback(impressionName[6]);
        obj = { type: "SHOW_ACTION_SHEET", content: callback, key: callback2, impressionName, impressionProperties, backdropKind, stackingBehavior: closure_5, appEntryKey };
        callback2(impressionName[3]).dispatch(obj);
        const obj3 = callback2(impressionName[3]);
      });
    });
  },
  hideActionSheet(key) {
    const obj = { type: "HIDE_ACTION_SHEET", key };
    obj.dispatch(obj);
  },
  hideAllActionSheets() {
    dispatcherDefault.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    const obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(closure_0) {
    const obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey: closure_0 };
    obj.dispatch(obj);
  }
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(arg0) {
  ({ content: require, key: importDefault, impressionName: dependencyMap, impressionProperties: closure_3, backdropKind: closure_4, stackingBehavior: jsx, disableHapticOnOpen: closure_6, appEntryKey: closure_7 } = arg0);
  dispatcherDefault.wait(() => {
    if (!disableHapticOnOpen) {
      let obj = callback(impressionName[4]);
      const result = obj.triggerHapticFeedback(callback2(impressionName[5]).IMPACT_LIGHT);
    }
    const result1 = callback(impressionName[6]).dismissGlobalKeyboard();
    const obj2 = callback(impressionName[6]);
    obj = { type: "SHOW_ACTION_SHEET", content: callback, key: callback2, impressionName, impressionProperties, backdropKind, stackingBehavior: closure_5, appEntryKey };
    callback2(impressionName[3]).dispatch(obj);
    const obj3 = callback2(impressionName[3]);
  });
};