// discord_app/modules/native_menu/native/NativeMenuActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

let obj = {
  showNativeMenu(key, memo) {
    let menu;
    importDefault = memo;
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj2 = DispatcherDefault;
      const obj3 = { type: "SHOW_NATIVE_MENU", key, menu };
      obj2.dispatch(obj3);
    });
  },
  hideNativeMenu(key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj2);
  },
};
let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default obj;
