// discord_app/modules/action_sheet/native/ActionSheetActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "ActionSheetStore.tsx";

require = fn;
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise, arg1, arg2, arg3) {
    closure_0 = arg1;
    closure_1 = arg2;
    closure_2 = arg3;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((result) => result.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((result) => {
      let obj = key;
      if (key == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      obj = {};
      const merged = Object.assign(_objectWithoutProperties(obj, closure_3));
      const content = jsx(result, {});
      const stackingBehavior = impressionName;
      DispatcherDefault.wait(() => {
        if (!disableHapticOnOpen) {
          let obj = content(impressionName[5]);
          const result = obj.triggerHapticFeedback(key(impressionName[6]).IMPACT_LIGHT);
        }
        const result1 = content(impressionName[7]).dismissGlobalKeyboard();
        const obj2 = content(impressionName[7]);
        obj = {
          type: "SHOW_ACTION_SHEET",
          content,
          key,
          impressionName,
          impressionProperties,
          backdropKind,
          stackingBehavior,
          appEntryKey,
        };
        key(impressionName[4]).dispatch(obj);
      });
    });
  },
  hideActionSheet(key) {
    if (ActionSheetStore.isOpen()) {
      let obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    }
    obj = { type: "HIDE_ACTION_SHEET", key };
    DispatcherDefault.dispatch(obj);
  },
  hideAllActionSheets() {
    DispatcherDefault.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    const obj = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj);
  },
  resetActionSheetsForAppEntryKey(appEntryKey) {
    const obj = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey };
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
    backdropKind: _objectWithoutProperties,
    stackingBehavior: ActionSheetStore,
    disableHapticOnOpen: jsx,
    appEntryKey: closure_7,
  } = arg0);
  DispatcherDefault.wait(() => {
    if (!disableHapticOnOpen) {
      let obj = content(impressionName[5]);
      const result = obj.triggerHapticFeedback(key(impressionName[6]).IMPACT_LIGHT);
    }
    const result1 = content(impressionName[7]).dismissGlobalKeyboard();
    const obj2 = content(impressionName[7]);
    obj = {
      type: "SHOW_ACTION_SHEET",
      content,
      key,
      impressionName,
      impressionProperties,
      backdropKind,
      stackingBehavior,
      appEntryKey,
    };
    key(impressionName[4]).dispatch(obj);
  });
};
