// === Module 13468: STATUS_PADDING ===

// Module 13468 (STATUS_PADDING)
import obj132 from "obj132" /* 2 */;
import STATUS_PADDING from "STATUS_PADDING" /* 1298 */;

STATUS_PADDING = STATUS_PADDING.STATUS_PADDING;
const StatusSizes = STATUS_PADDING.StatusSizes;
const VR_STATUS_SCALE = STATUS_PADDING.VR_STATUS_SCALE;
const VR_STATUS_WIDTH_RATIO = STATUS_PADDING.VR_STATUS_WIDTH_RATIO;
let sum = StatusSizes.SMALL + 2 * STATUS_PADDING;
let sum1 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
let obj = { width: sum2, height: sum2, borderRadius: sum2 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum2 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
const sum3 = StatusSizes.LARGE + 2 * STATUS_PADDING;
const sum4 = StatusSizes.LARGE + 2 * STATUS_PADDING;
const sum5 = StatusSizes.SMALL + 2 * STATUS_PADDING;
const sum6 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
const sum7 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
const sum8 = StatusSizes.LARGE + 2 * STATUS_PADDING;
const sum9 = StatusSizes.LARGE + 2 * STATUS_PADDING;
let result = StatusSizes.SMALL * VR_STATUS_SCALE;
const sum10 = result + 2 * STATUS_PADDING;
let result1 = StatusSizes.REFRESH_MEDIUM_10 * VR_STATUS_SCALE;
const sum11 = result1 + 2 * STATUS_PADDING;
const result2 = StatusSizes.MEDIUM * VR_STATUS_SCALE;
const sum12 = result2 + 2 * STATUS_PADDING;
const result3 = StatusSizes.LARGE * VR_STATUS_SCALE;
const sum13 = result3 + 2 * STATUS_PADDING;
const result4 = StatusSizes.LARGE * VR_STATUS_SCALE;
const sum14 = result4 + 2 * STATUS_PADDING;
let closure_4 = { containerSmall: obj, containerRefreshMedium: obj, containerMedium: obj, containerLarge: { width: sum3, height: sum3, borderRadius: sum3 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerXLarge: { width: sum4, height: sum4, borderRadius: sum4 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerMobileOnlineSmall: { width: sum5, height: sum5 + sum5 / 2.5, borderRadius: sum5 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 }, containerMobileOnlineRefreshMedium: { width: sum6, height: sum6 + sum6 / 2.5, borderRadius: sum6 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 }, containerMobileOnlineMedium: { width: sum7, height: sum7 + sum7 / 2.5, borderRadius: sum7 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 }, containerMobileOnlineLarge: { width: sum8, height: sum8 + sum8 / 2.5, borderRadius: sum8 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 }, containerMobileOnlineXLarge: { width: sum9, height: sum9 + sum9 / 2.5, borderRadius: sum9 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 }, containerVRSmall: { width: result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum10, borderRadius: sum10 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRRefreshMedium: { width: result1 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum11, borderRadius: sum11 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRMedium: { width: result2 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum12, borderRadius: sum12 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRLarge: { width: result3 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum13, borderRadius: sum13 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRXLarge: { width: result4 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum14, borderRadius: sum14 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING } };
const result5 = obj132.fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const SMALL = StatusSizes.SMALL;
  if (flag) {
    if (SMALL === arg0) {
      return closure_4.containerVRSmall;
    } else if (StatusSizes.REFRESH_MEDIUM_10 === arg0) {
      return closure_4.containerVRRefreshMedium;
    } else if (StatusSizes.MEDIUM === arg0) {
      return closure_4.containerVRMedium;
    } else if (StatusSizes.LARGE === arg0) {
      return closure_4.containerVRLarge;
    } else if (StatusSizes.XLARGE === arg0) {
      return closure_4.containerVRXLarge;
    } else {
      const result = arg0 * VR_STATUS_SCALE;
      const sum = result + 2 * STATUS_PADDING;
      let obj = { width: null, height: null, borderRadius: null, paddingLeft: null, paddingRight: null, paddingTop: null, paddingBottom: null };
      obj[0] = result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING;
      obj[1] = sum;
      obj[2] = sum / 2;
      obj[3] = STATUS_PADDING;
      obj[4] = STATUS_PADDING;
      obj[5] = STATUS_PADDING;
      obj[6] = STATUS_PADDING;
      return obj;
    }
  } else if (SMALL === arg0) {
    return arg1 ? closure_4.containerMobileOnlineSmall : closure_4.containerSmall;
  } else if (StatusSizes.REFRESH_MEDIUM_10 === arg0) {
    return arg1 ? closure_4.containerMobileOnlineRefreshMedium : closure_4.containerRefreshMedium;
  } else if (StatusSizes.MEDIUM === arg0) {
    return arg1 ? closure_4.containerMobileOnlineMedium : closure_4.containerMedium;
  } else if (StatusSizes.LARGE === arg0) {
    return arg1 ? closure_4.containerMobileOnlineLarge : closure_4.containerLarge;
  } else if (StatusSizes.XLARGE === arg0) {
    return arg1 ? closure_4.containerMobileOnlineXLarge : closure_4.containerXLarge;
  } else {
    obj = { width: null, height: null, borderRadius: null, paddingLeft: null, paddingRight: null, paddingTop: null, paddingBottom: null };
    const sum1 = arg0 + 2 * STATUS_PADDING;
    obj[0] = sum1;
    let num2 = 0;
    if (arg1) {
      num2 = sum1 / 2.5;
    }
    obj[1] = sum1 + num2;
    if (arg1) {
      let result1 = sum1 / 4;
    } else {
      result1 = sum1 / 2;
    }
    obj[2] = result1;
    obj[3] = STATUS_PADDING;
    obj[4] = STATUS_PADDING;
    let num5 = 0;
    if (arg1) {
      num5 = 1;
    }
    obj[5] = STATUS_PADDING + num5;
    let num6 = 0;
    if (arg1) {
      num6 = 1;
    }
    obj[6] = STATUS_PADDING + num6;
    return obj;
  }
};