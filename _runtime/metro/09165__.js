// === Module 9165: ? ===

// Module 9165
import _mod9166 from "module_9166" /* 9166 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ NativeModules: c3, Platform, TurboModuleRegistry: closure_4, requireNativeComponent: hasOwnProperty } = get_ActivityIndicator);

export () => {
  try {
    return hasOwnProperty("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(_mod9166.getInstallationErrorMessage());
    }
  }
}
export () => {
  try {
    if (React4) {
      RNDatePicker = React4.get("RNDatePicker");
    } else {
      RNDatePicker = RNDatePicker.RNDatePicker;
    }
    return RNDatePicker;
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(_mod9166.getInstallationErrorMessage());
    }
  }
}