// === Module 7506: ? ===

// Module 7506
import _mod7507 from "module_7507" /* 7507 */;
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
      throw Error(_mod7507.getInstallationErrorMessage());
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
      throw Error(_mod7507.getInstallationErrorMessage());
    }
  }
}