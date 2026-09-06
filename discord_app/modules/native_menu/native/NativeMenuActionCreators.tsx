// discord_app/modules/native_menu/native/NativeMenuActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    importDefault = memo;
    DispatcherDefault.wait(() => {
      let obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key, menu };
      DispatcherDefault.dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    const obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  },
};
