// _runtime/metro/09233__.js
import _mod9234 from "09234__.js";
import react_native from "../00017_react-native.js";

let RNDatePicker;

let Platform;
let c3;
let closure_4;
let hasOwnProperty;
({
  NativeModules: c3,
  Platform,
  TurboModuleRegistry: closure_4,
  requireNativeComponent: hasOwnProperty,
} = react_native);

export const getNativeComponent = () => {
  try {
    return hasOwnProperty("RNDatePicker");
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      const obj = _mod9234;
      throw Error(obj.getInstallationErrorMessage());
    }
  }
};
export const getNativeModule = () => {
  try {
    if (React3) {
      RNDatePicker = React3.get("RNDatePicker");
    } else {
      RNDatePicker = RNDatePicker.RNDatePicker;
    }
    return RNDatePicker;
  } catch (err) {
    if (global.ignoreDatePickerWarning) {
      return null;
    } else {
      const _Error = Error;
      const obj2 = _mod9234;
      throw Error(obj2.getInstallationErrorMessage());
    }
  }
};
