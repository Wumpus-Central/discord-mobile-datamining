// discord_app/modules/action_sheet/native/ActionSheetActionCreators.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
let result = require("jsxProd").fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise) {
    let closure_0 = arg1;
    let closure_1 = arg2;
    let closure_2 = arg3;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((arg0) => arg0.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((arg0) => {
      let appEntryKey;
      let backdropKind;
      let disableHapticOnOpen;
      let impressionName;
      let impressionProperties;
      let obj = callback;
      if (callback == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      obj = {};
      const merged = Object.assign(outer1_4(obj, outer1_3));
      let closure_0 = outer1_5(arg0, obj);
      callback = closure_0;
      let closure_5 = impressionName;
      callback(table[3]).wait(() => {
        if (!disableHapticOnOpen) {
          let obj = callback(impressionName[4]);
          const result = obj.triggerHapticFeedback(callback2(impressionName[5]).IMPACT_LIGHT);
        }
        const result1 = callback(impressionName[6]).dismissGlobalKeyboard();
        const obj2 = callback(impressionName[6]);
        obj = { type: "SHOW_ACTION_SHEET", content: callback, key: callback2, impressionName, impressionProperties, backdropKind, stackingBehavior: closure_5, appEntryKey };
        callback2(impressionName[3]).dispatch(obj);
      });
    });
  },
  hideActionSheet(key) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "HIDE_ACTION_SHEET", key };
    obj.dispatch(obj);
  },
  hideAllActionSheets() {
    require("../../../Dispatcher.tsx").dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(closure_0) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey: closure_0 };
    obj.dispatch(obj);
  }
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(arg0) {
  let closure_3;
  let _objectWithoutProperties;
  let closure_6;
  let closure_7;
  let dependencyMap;
  let importDefault;
  let jsx;
  let require;
  ({ content: require, key: importDefault, impressionName: dependencyMap, impressionProperties: closure_3, backdropKind: _objectWithoutProperties, stackingBehavior: jsx, disableHapticOnOpen: closure_6, appEntryKey: closure_7 } = arg0);
  require("../../../Dispatcher.tsx").wait(() => {
    if (!disableHapticOnOpen) {
      let obj = callback(impressionName[4]);
      const result = obj.triggerHapticFeedback(callback2(impressionName[5]).IMPACT_LIGHT);
    }
    const result1 = callback(impressionName[6]).dismissGlobalKeyboard();
    const obj2 = callback(impressionName[6]);
    obj = { type: "SHOW_ACTION_SHEET", content: callback, key: callback2, impressionName, impressionProperties, backdropKind, stackingBehavior: closure_5, appEntryKey };
    callback2(impressionName[3]).dispatch(obj);
  });
};