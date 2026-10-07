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
      const merged = Object.assign(_objectWithoutProperties(obj, closure_3));
      const content = <result />;
      const stackingBehavior = impressionName;
      DispatcherDefault.wait(() => {
        if (!disableHapticOnOpen) {
          const result = content(impressionName[5]).triggerHapticFeedback(key(impressionName[6]).IMPACT_LIGHT);
          const obj = content(impressionName[5]);
        }
        const result1 = content(impressionName[7]).dismissGlobalKeyboard();
        const obj2 = content(impressionName[7]);
        key(impressionName[4]).dispatch({
          type: "SHOW_ACTION_SHEET",
          content,
          key,
          impressionName,
          impressionProperties,
          backdropKind,
          stackingBehavior,
          appEntryKey,
        });
        const obj3 = key(impressionName[4]);
        const obj4 = {
          type: "SHOW_ACTION_SHEET",
          content,
          key,
          impressionName,
          impressionProperties,
          backdropKind,
          stackingBehavior,
          appEntryKey,
        };
      });
    });
  },
  hideActionSheet(key) {
    if (ActionSheetStore.isOpen()) {
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    }
    DispatcherDefault.dispatch({ type: "HIDE_ACTION_SHEET", key });
    const obj3 = { type: "HIDE_ACTION_SHEET", key };
  },
  hideAllActionSheets() {
    DispatcherDefault.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    DispatcherDefault.dispatch({ type: "SET_ACTION_SHEET_Z_INDEX", zIndex });
  },
  resetActionSheetsForAppEntryKey(appEntryKey) {
    DispatcherDefault.dispatch({ type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey });
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
      const result = content(impressionName[5]).triggerHapticFeedback(key(impressionName[6]).IMPACT_LIGHT);
      const obj = content(impressionName[5]);
    }
    const result1 = content(impressionName[7]).dismissGlobalKeyboard();
    const obj2 = content(impressionName[7]);
    key(impressionName[4]).dispatch({
      type: "SHOW_ACTION_SHEET",
      content,
      key,
      impressionName,
      impressionProperties,
      backdropKind,
      stackingBehavior,
      appEntryKey,
    });
    const obj3 = key(impressionName[4]);
    const obj4 = {
      type: "SHOW_ACTION_SHEET",
      content,
      key,
      impressionName,
      impressionProperties,
      backdropKind,
      stackingBehavior,
      appEntryKey,
    };
  });
};
