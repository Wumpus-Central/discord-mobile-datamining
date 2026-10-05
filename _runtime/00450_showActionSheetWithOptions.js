// _runtime/00450_showActionSheetWithOptions.js
import _mod38 from "metro/00038__.js";
import processColor from "00050_processColor.js";
import ActionSheetManagerDefault from "00451_ActionSheetManager.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";

let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(destructiveButtonIndex, fn) {
    let cancelButtonTintColor;
    let disabledButtonTintColor;
    let tintColor;
    let tmp4 = typeof destructiveButtonIndex === "object";
    const tmp3 = _mod38;
    if (typeof destructiveButtonIndex === "object") {
      tmp4 = null !== destructiveButtonIndex;
    }
    tmp3(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid callback");
    const tmpResult = _mod38;
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    destructiveButtonIndex = destructiveButtonIndex.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = destructiveButtonIndex);
    let tmp11 = destructiveButtonIndex;
    const tmp10 = _objectWithoutProperties(destructiveButtonIndex, closure_3);
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp11 = null;
      if (typeof destructiveButtonIndex === "number") {
        const items = [destructiveButtonIndex];
        tmp11 = items;
      }
    }
    const tmpResult7 = processColor;
    const defaultResult = tmpResult7.default(tintColor);
    const tmpResult8 = processColor;
    const defaultResult1 = tmpResult8.default(cancelButtonTintColor);
    const tmpResult9 = processColor;
    const defaultResult2 = tmpResult9.default(disabledButtonTintColor);
    let tmp16 = null == defaultResult;
    const tmpResult10 = _mod38;
    if (!tmp16) {
      tmp16 = typeof defaultResult === "number";
    }
    tmpResult10(tmp16, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp19 = null == defaultResult1;
    const tmpResult11 = _mod38;
    if (!tmp19) {
      tmp19 = typeof defaultResult1 === "number";
    }
    tmpResult11(tmp19, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp22 = null == defaultResult2;
    const tmpResult12 = _mod38;
    if (!tmp22) {
      tmp22 = typeof defaultResult2 === "number";
    }
    tmpResult12(tmp22, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const obj = {
      tintColor: defaultResult,
      cancelButtonTintColor: defaultResult1,
      disabledButtonTintColor: defaultResult2,
      destructiveButtonIndices: tmp11,
    };
    const showActionSheetWithOptions = ActionSheetManagerDefault.showActionSheetWithOptions;
    ActionSheetManagerDefault;
    const merged = Object.assign(tmp10);
    const result = showActionSheetWithOptions(obj, fn);
  },
  showShareActionSheetWithOptions(tintColor, fn, fn2) {
    let tmpResult2;
    let tmp4 = typeof tintColor === "object";
    const tmp3 = _mod38;
    if (typeof tintColor === "object") {
      tmp4 = null !== tintColor;
    }
    tmp3(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid failureCallback");
    _mod38(typeof fn2 === "function", "Must provide a valid successCallback");
    const tmpResult = _mod38;
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    const obj = { tintColor: tmpResult2.default(tintColor.tintColor) };
    const showShareActionSheetWithOptions = ActionSheetManagerDefault.showShareActionSheetWithOptions;
    ActionSheetManagerDefault;
    const merged = Object.assign(tintColor);
    tmpResult2 = processColor;
    const result = showShareActionSheetWithOptions(obj, fn, fn2);
  },
  dismissActionSheet() {
    const tmp2 = _mod38;
    tmp2(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    if (typeof ActionSheetManagerDefault.dismissActionSheet === "function") {
      const tmp3Result = ActionSheetManagerDefault;
      tmp3Result.dismissActionSheet();
    }
  },
};
