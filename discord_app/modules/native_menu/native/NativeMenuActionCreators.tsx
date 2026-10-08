// === Module 9991: NativeMenuActionCreators ===

// Module 9991 (NativeMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5056 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    importDefault = memo;
    DispatcherDefault.wait(() => {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      DispatcherDefault.dispatch({ type: "SHOW_NATIVE_MENU", key, menu });
    });
  },
  hideNativeMenu(key) {
    DispatcherDefault.dispatch({ type: "HIDE_NATIVE_MENU", key });
  }
};