// === Module 10682: NativeMenuActionCreators ===

// Module 10682 (NativeMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HapticUtils from "HapticUtils" /* 4542 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4543 */;
import size from "module_2" /* 2 */;

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
  }
};