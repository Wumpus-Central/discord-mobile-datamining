import { processColor } from "00050_processColor.js";
import { ActionSheetManager } from "00451_ActionSheetManager.js";
import { 00038__ } from "metro/00038__.js";
// _runtime/00450_showActionSheetWithOptions.js
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_3 = ["tintColor", "cancelButtonTintColor", "disabledButtonTintColor", "destructiveButtonIndex"];

export default {
  showActionSheetWithOptions(obj, fn) {
    let cancelButtonTintColor;
    let disabledButtonTintColor;
    let tintColor;
    let tmp4 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp4 = null !== obj;
    }
    00038__(tmp4, "Options must be a valid object");
    00038__(typeof fn === "function", "Must provide a valid callback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManager, "ActionSheetManager doesn't exist");
    const destructiveButtonIndex = obj.destructiveButtonIndex;
    ({ tintColor, cancelButtonTintColor, disabledButtonTintColor } = obj);
    const tmp3 = 00038__;
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
    const defaultResult1 = processColor /* processColor */.default(cancelButtonTintColor);
    const tmpResult1 = processColor /* processColor */;
    const defaultResult2 = processColor /* processColor */.default(disabledButtonTintColor);
    let tmp16 = null == defaultResult;
    const tmpResult2 = processColor /* processColor */;
    if (!tmp16) {
      tmp16 = typeof defaultResult === "number";
    }
    00038__(tmp16, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor");
    let tmp19 = null == defaultResult1;
    const tmpResult3 = 00038__;
    if (!tmp19) {
      tmp19 = typeof defaultResult1 === "number";
    }
    00038__(tmp19, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor");
    let tmp22 = null == defaultResult2;
    const tmpResult4 = 00038__;
    if (!tmp22) {
      tmp22 = typeof defaultResult2 === "number";
    }
    00038__(tmp22, "Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor");
    const tmpResult5 = 00038__;
    obj = {};
    const merged = Object.assign(tmp10);
    obj.tintColor = defaultResult;
    obj.cancelButtonTintColor = defaultResult1;
    obj.disabledButtonTintColor = defaultResult2;
    obj.destructiveButtonIndices = tmp11;
    const result = tmp8(451).showActionSheetWithOptions(obj, fn);
  },
  showShareActionSheetWithOptions(obj, fn, fn2) {
    let tmp4 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp4 = null !== obj;
    }
    00038__(tmp4, "Options must be a valid object");
    00038__(typeof fn === "function", "Must provide a valid failureCallback");
    00038__(typeof fn2 === "function", "Must provide a valid successCallback");
    let tmpResult = tmp(38);
    tmpResult(ActionSheetManager, "ActionSheetManager doesn't exist");
    obj = ActionSheetManager;
    obj = {};
    const merged = Object.assign(obj);
    tmpResult = tmp(50);
    obj.tintColor = tmpResult.default(obj.tintColor);
    const result = obj.showShareActionSheetWithOptions(obj, fn, fn2);
  },
  dismissActionSheet() {
    00038__(ActionSheetManager, "ActionSheetManager doesn't exist");
    if (typeof ActionSheetManager.dismissActionSheet === "function") {
      ActionSheetManager.dismissActionSheet();
      const tmp3Result = ActionSheetManager;
    }
  }
};