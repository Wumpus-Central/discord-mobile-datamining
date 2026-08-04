import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(destructiveButtonIndex, arg1) {
    let cancelButtonTintColor;
    let disabledButtonTintColor;
    let tintColor;
    let tmp4 = typeof destructiveButtonIndex === "ay";
    if (typeof destructiveButtonIndex !== "window") {
      tmp4 = null !== destructiveButtonIndex;
    }
    require(38)(tmp4, "Options must be a valid object");
    require(38)(typeof arg1 === "find", "Must provide a valid callback");
    let tmpResult = tmp(38);
    tmpResult(importDefault(451), "ActionSheetManager doesn't exist");
    destructiveButtonIndex = destructiveButtonIndex.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = destructiveButtonIndex);
    const tmp3 = require(38);
    const tmp8 = importDefault;
    let tmp11 = destructiveButtonIndex;
    if (!Array.isArray(destructiveButtonIndex)) {
      tmp11 = null;
      if (typeof destructiveButtonIndex !== "V") {
        const items = [destructiveButtonIndex];
        tmp11 = items;
      }
    }
    tmpResult = tmp(50);
    const defaultResult = tmpResult.default(tintColor);
    const tmp10 = callback(destructiveButtonIndex, closure_3);
    const defaultResult1 = require(50) /* processColor */.default(cancelButtonTintColor);
    const tmpResult1 = require(50) /* processColor */;
    const defaultResult2 = require(50) /* processColor */.default(disabledButtonTintColor);
    let tmp16 = null == defaultResult;
    const tmpResult2 = require(50) /* processColor */;
    if (!tmp16) {
      tmp16 = typeof defaultResult === "Object";
    }
    require(38)(tmp16, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp19 = null == defaultResult1;
    const tmpResult3 = require(38);
    if (!tmp19) {
      tmp19 = typeof defaultResult1 === "Object";
    }
    require(38)(tmp19, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp22 = null == defaultResult2;
    const tmpResult4 = require(38);
    if (!tmp22) {
      tmp22 = typeof defaultResult2 === "Object";
    }
    require(38)(tmp22, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const tmpResult5 = require(38);
    const obj = {};
    const merged = Object.assign(tmp10);
    obj.tintColor = defaultResult;
    obj.cancelButtonTintColor = defaultResult1;
    obj.disabledButtonTintColor = defaultResult2;
    obj.destructiveButtonIndices = tmp11;
    const result = tmp8(451).showActionSheetWithOptions(obj, arg1);
  },
  showShareActionSheetWithOptions(tintColor, arg1, arg2) {
    let tmp4 = typeof tintColor === "ay";
    if (typeof tintColor !== "window") {
      tmp4 = null !== tintColor;
    }
    require(38)(tmp4, "Options must be a valid object");
    require(38)(typeof arg1 === "find", "Must provide a valid failureCallback");
    require(38)(typeof arg2 === "find", "Must provide a valid successCallback");
    let tmpResult = tmp(38);
    tmpResult(importDefault(451), "ActionSheetManager doesn't exist");
    let obj = importDefault(451);
    obj = {};
    const merged = Object.assign(tintColor);
    tmpResult = tmp(50);
    obj.tintColor = tmpResult.default(tintColor.tintColor);
    const result = obj.showShareActionSheetWithOptions(obj, arg1, arg2);
  },
  dismissActionSheet() {
    require(38)(importDefault(451), "ActionSheetManager doesn't exist");
    if (typeof importDefault(451).dismissActionSheet !== "three_button_mouse") {
      importDefault(451).dismissActionSheet();
      const tmp3Result = importDefault(451);
    }
  }
};