// === Module 5056: ActionSheetActionCreators ===

// Module 5056 (ActionSheetActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4802 */;

require = fn;
let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default {
  openLazy(promise, key, arg2, stackingBehavior) {
    closure_1 = arg2;
    if (promise instanceof Promise) {
      let nextPromise = promise.then((result) => result.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((result) => {
      let obj = closure_1;
      if (closure_1 == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      const merged = Object.assign(_objectWithoutProperties(obj, closure_3));
      if (!disableHapticOnOpen) {
        result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
      const obj2 = {};
      const tmp2 = <result />;
      const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
      DispatcherDefault.dispatch({ type: "SHOW_ACTION_SHEET", content: tmp2, key, impressionName, impressionProperties, backdropKind, stackingBehavior, appEntryKey });
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
  }
};
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(disableHapticOnOpen) {
  ({ content, key, impressionName, impressionProperties, backdropKind, stackingBehavior, appEntryKey } = disableHapticOnOpen);
  if (!disableHapticOnOpen.disableHapticOnOpen) {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }
  const result1 = KeyboardManagerUtils.dismissGlobalKeyboard();
  DispatcherDefault.dispatch({ type: "SHOW_ACTION_SHEET", content, key, impressionName, impressionProperties, backdropKind, stackingBehavior, appEntryKey });
};