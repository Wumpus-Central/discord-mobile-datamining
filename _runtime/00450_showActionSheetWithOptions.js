// === Module 450: showActionSheetWithOptions ===

// Module 450 (showActionSheetWithOptions)
import _mod38 from "module_38" /* 38 */;
import processColor from "processColor" /* 50 */;
import ActionSheetManagerDefault from "ActionSheetManager" /* 451 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = arg1;
let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(destructiveButtonIndex, fn) {
    let tmp4 = typeof destructiveButtonIndex === "object";
    if (typeof destructiveButtonIndex === "object") {
      tmp4 = null !== destructiveButtonIndex;
    }
    _mod38(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid callback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    destructiveButtonIndex = destructiveButtonIndex.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = destructiveButtonIndex);
    let tmp11 = destructiveButtonIndex;
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp11 = null;
      if (typeof destructiveButtonIndex === "number") {
        const items = [destructiveButtonIndex];
        tmp11 = items;
      }
    }
    tmpResult = tmp(50);
    const defaultResult = tmpResult.default(tintColor);
    const tmp10 = _objectWithoutProperties(destructiveButtonIndex, closure_3);
    const defaultResult1 = processColor.default(cancelButtonTintColor);
    const tmpResult1 = processColor;
    const defaultResult2 = processColor.default(disabledButtonTintColor);
    let tmp16 = null == defaultResult;
    const tmpResult2 = processColor;
    if (!tmp16) {
      tmp16 = typeof defaultResult === "number";
    }
    _mod38(tmp16, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp19 = null == defaultResult1;
    const tmpResult3 = _mod38;
    if (!tmp19) {
      tmp19 = typeof defaultResult1 === "number";
    }
    _mod38(tmp19, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp22 = null == defaultResult2;
    const tmpResult4 = _mod38;
    if (!tmp22) {
      tmp22 = typeof defaultResult2 === "number";
    }
    _mod38(tmp22, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const tmpResult5 = _mod38;
    const obj = {};
    const merged = Object.assign(tmp10);
    obj.tintColor = defaultResult;
    obj.cancelButtonTintColor = defaultResult1;
    obj.disabledButtonTintColor = defaultResult2;
    obj.destructiveButtonIndices = tmp11;
    const result = ActionSheetManagerDefault.showActionSheetWithOptions(obj, fn);
  },
  showShareActionSheetWithOptions(tintColor, fn, fn2) {
    let tmp4 = typeof tintColor === "object";
    if (typeof tintColor === "object") {
      tmp4 = null !== tintColor;
    }
    _mod38(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid failureCallback");
    _mod38(typeof fn2 === "function", "Must provide a valid successCallback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    const obj = {};
    const merged = Object.assign(tintColor);
    tmpResult = tmp(50);
    obj.tintColor = tmpResult.default(tintColor.tintColor);
    const result = obj.showShareActionSheetWithOptions(obj, fn, fn2);
  },
  dismissActionSheet() {
    _mod38(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    if (typeof ActionSheetManagerDefault.dismissActionSheet === "function") {
      ActionSheetManagerDefault.dismissActionSheet();
      const tmp3Result = ActionSheetManagerDefault;
    }
  }
};