// discord_app/modules/action_sheet/native/ActionSheetActionCreators.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ActionSheetStore from "ActionSheetStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = ["impressionName", "impressionProperties", "backdropKind", "disableHapticOnOpen", "appEntryKey"];
const jsx = Fragment.jsx;
let obj = {
  openLazy(promise, arg1, arg2, arg3) {
    let nextPromise;
    let closure_0 = arg1;
    let closure_1 = arg2;
    let closure_2 = arg3;
    if (promise instanceof Promise) {
      nextPromise = promise.then((result) => result.default);
    } else {
      nextPromise = promise();
    }
    nextPromise.then((result) => {
      let appEntryKey;
      let backdropKind;
      let disableHapticOnOpen;
      let impressionName;
      let impressionProperties;
      let obj = closure_1;
      if (closure_1 == null) {
        obj = {};
      }
      ({ impressionName, impressionProperties, backdropKind, disableHapticOnOpen, appEntryKey } = obj);
      const merged = Object.assign(_objectWithoutProperties(obj, closure_3));
      closure_0 = <result />;
      closure_1 = closure_0;
      let closure_5 = closure_2;
      let obj3 = DispatcherDefault;
      obj3.wait(() => {
        if (!disableHapticOnOpen) {
          const obj = closure_2_0(closure_2_2[5]);
          const result = obj.triggerHapticFeedback(closure_2_1(closure_2_2[6]).IMPACT_LIGHT);
        }
        const obj2 = closure_2_0(closure_2_2[7]);
        const result1 = obj2.dismissGlobalKeyboard();
        const obj3 = closure_2_1(closure_2_2[4]);
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
        obj3.dispatch(obj4);
      });
    });
  },
  hideActionSheet(key) {
    if (ActionSheetStore.isOpen()) {
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    }
    const obj2 = DispatcherDefault;
    const obj3 = { type: "HIDE_ACTION_SHEET", key };
    obj2.dispatch(obj3);
  },
  hideAllActionSheets() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "HIDE_ALL_ACTION_SHEETS" });
  },
  setActionSheetZIndex(zIndex) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SET_ACTION_SHEET_Z_INDEX", zIndex };
    obj.dispatch(obj2);
  },
  resetActionSheetsForAppEntryKey(appEntryKey) {
    const obj = DispatcherDefault;
    const obj2 = { type: "RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY", appEntryKey };
    obj.dispatch(obj2);
  },
};
let result = size.fileFinishedImporting("modules/action_sheet/native/ActionSheetActionCreators.tsx");

export default obj;
export const ACTION_SHEET_HEIGHT_HALF = "start";
export const ACTION_SHEET_HEIGHT_EXPANDED = "expanded";
export const showActionSheet = function showActionSheet(arg0) {
  let closure_7;
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
  const obj = DispatcherDefault;
  obj.wait(() => {
    if (!disableHapticOnOpen) {
      const obj = closure_2_0(closure_2_2[5]);
      const result = obj.triggerHapticFeedback(closure_2_1(closure_2_2[6]).IMPACT_LIGHT);
    }
    const obj2 = closure_2_0(closure_2_2[7]);
    const result1 = obj2.dismissGlobalKeyboard();
    const obj3 = closure_2_1(closure_2_2[4]);
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
    obj3.dispatch(obj4);
  });
};
