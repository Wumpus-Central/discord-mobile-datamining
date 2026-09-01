// _runtime/00450_showActionSheetWithOptions.js
import _mod38 from "metro/00038__.js";
import processColor from "00050_processColor.js";
import ActionSheetManagerDefault from "00451_ActionSheetManager.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";

require = arg1;
let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(obj, fn) {
    let tmp4 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp4 = null !== obj;
    }
    _mod38(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid callback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    const destructiveButtonIndex = obj.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = obj);
    const tmp3 = _mod38;
    const tmp8 = importDefault;
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
    const tmp10 = callback(obj, closure_3);
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
    obj = {};
    const merged = Object.assign(tmp10);
    obj.tintColor = defaultResult;
    obj.cancelButtonTintColor = defaultResult1;
    obj.disabledButtonTintColor = defaultResult2;
    obj.destructiveButtonIndices = tmp11;
    const result = ActionSheetManagerDefault.showActionSheetWithOptions(obj, fn);
  },
  showShareActionSheetWithOptions(obj, fn, fn2) {
    let tmp4 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp4 = null !== obj;
    }
    _mod38(tmp4, "Options must be a valid object");
    _mod38(typeof fn === "function", "Must provide a valid failureCallback");
    _mod38(typeof fn2 === "function", "Must provide a valid successCallback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    obj = ActionSheetManagerDefault;
    obj = {};
    const merged = Object.assign(obj);
    tmpResult = tmp(50);
    obj.tintColor = tmpResult.default(obj.tintColor);
    const result = obj.showShareActionSheetWithOptions(obj, fn, fn2);
  },
  dismissActionSheet() {
    _mod38(ActionSheetManagerDefault, "ActionSheetManager doesn't exist");
    if (typeof ActionSheetManagerDefault.dismissActionSheet === "function") {
      ActionSheetManagerDefault.dismissActionSheet();
      const tmp3Result = ActionSheetManagerDefault;
    }
  },
};
