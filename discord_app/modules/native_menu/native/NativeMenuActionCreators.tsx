// === Module 10039: NativeMenuActionCreators ===

// Module 10039 (NativeMenuActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    DispatcherDefault.dispatch({ type: "SHOW_NATIVE_MENU", key, menu: memo });
  },
  hideNativeMenu(key) {
    DispatcherDefault.dispatch({ type: "HIDE_NATIVE_MENU", key });
  }
};