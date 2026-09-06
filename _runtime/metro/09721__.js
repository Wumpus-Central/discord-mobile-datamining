// _runtime/metro/09721__.js
import _mod9722 from "09722__.js";
import get_ActivityIndicator from "00017__.js";

({
  NativeModules: c3,
  Platform,
  TurboModuleRegistry: closure_4,
  requireNativeComponent: hasOwnProperty,
} = get_ActivityIndicator);

export const getNativeComponent = () => {
  try {
    return hasOwnProperty("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      throw Error(_mod9722.getInstallationErrorMessage());
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
      throw Error(_mod9722.getInstallationErrorMessage());
    }
  }
};
