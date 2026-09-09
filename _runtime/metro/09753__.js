// === Module 9753: ? ===

// Module 9753
import _mod9754 from "module_9754" /* 9754 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ NativeModules: c3, Platform, TurboModuleRegistry: closure_4, requireNativeComponent: hasOwnProperty } = get_ActivityIndicator);

export const getNativeComponent = () => {
  try {
    return hasOwnProperty("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(_mod9754.getInstallationErrorMessage());
    }
  }
};
export const getNativeModule = () => {
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
      throw Error(_mod9754.getInstallationErrorMessage());
    }
  }
};