// discord_app/design/void/Status/native/getStatusContainerStyle.tsx
import StatusConstants from "StatusConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusSizes = StatusConstants.StatusSizes;
const VR_STATUS_SCALE = StatusConstants.VR_STATUS_SCALE;
const VR_STATUS_WIDTH_RATIO = StatusConstants.VR_STATUS_WIDTH_RATIO;
const obj = {
  containerSmall: null,
  containerRefreshMedium: null,
  containerMedium: null,
  containerLarge: null,
  containerXLarge: null,
  containerMobileOnlineSmall: null,
  containerMobileOnlineRefreshMedium: null,
  containerMobileOnlineMedium: null,
  containerMobileOnlineLarge: null,
  containerMobileOnlineXLarge: null,
  containerVRSmall: null,
  containerVRRefreshMedium: null,
  containerVRMedium: null,
  containerVRLarge: null,
  containerVRXLarge: null,
};
let size = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
let sum = StatusSizes.SMALL + 2 * STATUS_PADDING;
size.width = sum;
size.height = sum;
size.borderRadius = sum / 2;
obj.containerSmall = size;
let size1 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
let sum1 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
size1.width = sum1;
size1.height = sum1;
size1.borderRadius = sum1 / 2;
obj.containerRefreshMedium = size1;
const size2 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const sum2 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
size2.width = sum2;
size2.height = sum2;
size2.borderRadius = sum2 / 2;
obj.containerMedium = size2;
const size3 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const sum3 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size3.width = sum3;
size3.height = sum3;
size3.borderRadius = sum3 / 2;
obj.containerLarge = size3;
const size4 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const sum4 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size4.width = sum4;
size4.height = sum4;
size4.borderRadius = sum4 / 2;
obj.containerXLarge = size4;
const size5 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING + 1,
  paddingBottom: STATUS_PADDING + 1,
};
const sum5 = StatusSizes.SMALL + 2 * STATUS_PADDING;
size5.width = sum5;
size5.height = sum5 + sum5 / 2.5;
size5.borderRadius = sum5 / 4;
obj.containerMobileOnlineSmall = size5;
const size6 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING + 1,
  paddingBottom: STATUS_PADDING + 1,
};
const sum6 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
size6.width = sum6;
size6.height = sum6 + sum6 / 2.5;
size6.borderRadius = sum6 / 4;
obj.containerMobileOnlineRefreshMedium = size6;
const size7 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING + 1,
  paddingBottom: STATUS_PADDING + 1,
};
const sum7 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
size7.width = sum7;
size7.height = sum7 + sum7 / 2.5;
size7.borderRadius = sum7 / 4;
obj.containerMobileOnlineMedium = size7;
const size8 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING + 1,
  paddingBottom: STATUS_PADDING + 1,
};
const sum8 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size8.width = sum8;
size8.height = sum8 + sum8 / 2.5;
size8.borderRadius = sum8 / 4;
obj.containerMobileOnlineLarge = size8;
const size9 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING + 1,
  paddingBottom: STATUS_PADDING + 1,
};
const sum9 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size9.width = sum9;
size9.height = sum9 + sum9 / 2.5;
size9.borderRadius = sum9 / 4;
obj.containerMobileOnlineXLarge = size9;
let result = StatusSizes.SMALL * VR_STATUS_SCALE;
const sum10 = result + 2 * STATUS_PADDING;
obj.containerVRSmall = {
  width: result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
  height: sum10,
  borderRadius: sum10 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
let result1 = StatusSizes.REFRESH_MEDIUM_10 * VR_STATUS_SCALE;
const sum11 = result1 + 2 * STATUS_PADDING;
obj.containerVRRefreshMedium = {
  width: result1 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
  height: sum11,
  borderRadius: sum11 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const result2 = StatusSizes.MEDIUM * VR_STATUS_SCALE;
const sum12 = result2 + 2 * STATUS_PADDING;
obj.containerVRMedium = {
  width: result2 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
  height: sum12,
  borderRadius: sum12 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const result3 = StatusSizes.LARGE * VR_STATUS_SCALE;
const sum13 = result3 + 2 * STATUS_PADDING;
obj.containerVRLarge = {
  width: result3 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
  height: sum13,
  borderRadius: sum13 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const result4 = StatusSizes.LARGE * VR_STATUS_SCALE;
const sum14 = result4 + 2 * STATUS_PADDING;
obj.containerVRXLarge = {
  width: result4 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
  height: sum14,
  borderRadius: sum14 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
const result5 = size.fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(items, flag) {
  flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  const SMALL = StatusSizes.SMALL;
  if (flag) {
    if (SMALL === items) {
      return obj.containerVRSmall;
    } else if (StatusSizes.REFRESH_MEDIUM_10 === items) {
      return obj.containerVRRefreshMedium;
    } else if (StatusSizes.MEDIUM === items) {
      return obj.containerVRMedium;
    } else if (StatusSizes.LARGE === items) {
      return obj.containerVRLarge;
    } else if (StatusSizes.XLARGE === items) {
      return obj.containerVRXLarge;
    } else {
      const result = items * VR_STATUS_SCALE;
      const sum = result + 2 * STATUS_PADDING;
      const size = {
        width: result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING,
        height: sum,
        borderRadius: sum / 2,
        paddingLeft: STATUS_PADDING,
        paddingRight: STATUS_PADDING,
        paddingTop: STATUS_PADDING,
        paddingBottom: STATUS_PADDING,
      };
      return size;
    }
  } else if (SMALL === items) {
    return flag ? obj.containerMobileOnlineSmall : obj.containerSmall;
  } else if (StatusSizes.REFRESH_MEDIUM_10 === items) {
    return flag ? obj.containerMobileOnlineRefreshMedium : obj.containerRefreshMedium;
  } else if (StatusSizes.MEDIUM === items) {
    return flag ? obj.containerMobileOnlineMedium : obj.containerMedium;
  } else if (StatusSizes.LARGE === items) {
    return flag ? obj.containerMobileOnlineLarge : obj.containerLarge;
  } else if (StatusSizes.XLARGE === items) {
    return flag ? obj.containerMobileOnlineXLarge : obj.containerXLarge;
  } else {
    const size1 = {
      width: null,
      height: null,
      borderRadius: null,
      paddingLeft: null,
      paddingRight: null,
      paddingTop: null,
      paddingBottom: null,
    };
    const sum1 = items + 2 * STATUS_PADDING;
    size1.width = sum1;
    let num2 = 0;
    if (flag) {
      num2 = sum1 / 2.5;
    }
    size1.height = sum1 + num2;
    if (flag) {
      let result1 = sum1 / 4;
    } else {
      result1 = sum1 / 2;
    }
    size1.borderRadius = result1;
    size1.paddingLeft = STATUS_PADDING;
    size1.paddingRight = STATUS_PADDING;
    let num5 = 0;
    if (flag) {
      num5 = 1;
    }
    size1.paddingTop = STATUS_PADDING + num5;
    let num6 = 0;
    if (flag) {
      num6 = 1;
    }
    size1.paddingBottom = STATUS_PADDING + num6;
    return size1;
  }
}
