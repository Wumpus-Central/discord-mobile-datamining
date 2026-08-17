// discord_app/modules/native_menu/native/NativeMenuActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

let result = set.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    closure_0 = key;
    importDefault = memo;
    dispatcherDefault.wait(() => {
      let obj = key(closure_1_2[1]);
      const result = obj.triggerHapticFeedback(memo(closure_1_2[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key, menu: memo };
      memo(closure_1_2[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    let obj = dispatcherDefault;
    obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};