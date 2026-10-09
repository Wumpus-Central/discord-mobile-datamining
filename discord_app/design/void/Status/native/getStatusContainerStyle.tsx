// discord_app/design/void/Status/native/getStatusContainerStyle.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import StatusConstants from "StatusConstants.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const PixelRatio = _mod17.PixelRatio;
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
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
let sum = PixelRatio.roundToNearestPixel(StatusSizes.SMALL) + 2 * STATUS_PADDING;
size.width = sum;
size.height = sum;
size.borderRadius = sum / 2;
size.paddingLeft = STATUS_PADDING;
size.paddingRight = STATUS_PADDING;
size.paddingTop = STATUS_PADDING;
size.paddingBottom = STATUS_PADDING;
obj.containerSmall = size;
let size1 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
let sum1 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10) + 2 * STATUS_PADDING;
size1.width = sum1;
size1.height = sum1;
size1.borderRadius = sum1 / 2;
size1.paddingLeft = STATUS_PADDING;
size1.paddingRight = STATUS_PADDING;
size1.paddingTop = STATUS_PADDING;
size1.paddingBottom = STATUS_PADDING;
obj.containerRefreshMedium = size1;
const size2 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum2 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM) + 2 * STATUS_PADDING;
size2.width = sum2;
size2.height = sum2;
size2.borderRadius = sum2 / 2;
size2.paddingLeft = STATUS_PADDING;
size2.paddingRight = STATUS_PADDING;
size2.paddingTop = STATUS_PADDING;
size2.paddingBottom = STATUS_PADDING;
obj.containerMedium = size2;
const size3 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum3 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size3.width = sum3;
size3.height = sum3;
size3.borderRadius = sum3 / 2;
size3.paddingLeft = STATUS_PADDING;
size3.paddingRight = STATUS_PADDING;
size3.paddingTop = STATUS_PADDING;
size3.paddingBottom = STATUS_PADDING;
obj.containerLarge = size3;
const size4 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum4 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size4.width = sum4;
size4.height = sum4;
size4.borderRadius = sum4 / 2;
size4.paddingLeft = STATUS_PADDING;
size4.paddingRight = STATUS_PADDING;
size4.paddingTop = STATUS_PADDING;
size4.paddingBottom = STATUS_PADDING;
obj.containerXLarge = size4;
const size5 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum5 = PixelRatio.roundToNearestPixel(StatusSizes.SMALL) + 2 * STATUS_PADDING;
size5.width = sum5;
size5.height = sum5 + sum5 / 2.5;
size5.borderRadius = sum5 / 4;
size5.paddingLeft = STATUS_PADDING;
size5.paddingRight = STATUS_PADDING;
size5.paddingTop = STATUS_PADDING + 1;
size5.paddingBottom = STATUS_PADDING + 1;
obj.containerMobileOnlineSmall = size5;
const size6 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum6 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10) + 2 * STATUS_PADDING;
size6.width = sum6;
size6.height = sum6 + sum6 / 2.5;
size6.borderRadius = sum6 / 4;
size6.paddingLeft = STATUS_PADDING;
size6.paddingRight = STATUS_PADDING;
size6.paddingTop = STATUS_PADDING + 1;
size6.paddingBottom = STATUS_PADDING + 1;
obj.containerMobileOnlineRefreshMedium = size6;
const size7 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum7 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM) + 2 * STATUS_PADDING;
size7.width = sum7;
size7.height = sum7 + sum7 / 2.5;
size7.borderRadius = sum7 / 4;
size7.paddingLeft = STATUS_PADDING;
size7.paddingRight = STATUS_PADDING;
size7.paddingTop = STATUS_PADDING + 1;
size7.paddingBottom = STATUS_PADDING + 1;
obj.containerMobileOnlineMedium = size7;
const size8 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum8 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size8.width = sum8;
size8.height = sum8 + sum8 / 2.5;
size8.borderRadius = sum8 / 4;
size8.paddingLeft = STATUS_PADDING;
size8.paddingRight = STATUS_PADDING;
size8.paddingTop = STATUS_PADDING + 1;
size8.paddingBottom = STATUS_PADDING + 1;
obj.containerMobileOnlineLarge = size8;
const size9 = {
  width: null,
  height: null,
  borderRadius: null,
  paddingLeft: null,
  paddingRight: null,
  paddingTop: null,
  paddingBottom: null,
};
const sum9 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size9.width = sum9;
size9.height = sum9 + sum9 / 2.5;
size9.borderRadius = sum9 / 4;
size9.paddingLeft = STATUS_PADDING;
size9.paddingRight = STATUS_PADDING;
size9.paddingTop = STATUS_PADDING + 1;
size9.paddingBottom = STATUS_PADDING + 1;
obj.containerMobileOnlineXLarge = size9;
let roundToNearestPixelResult = PixelRatio.roundToNearestPixel(StatusSizes.SMALL * VR_STATUS_SCALE);
const sum10 = roundToNearestPixelResult + 2 * STATUS_PADDING;
const size10 = {
  width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
  height: sum10,
  borderRadius: sum10 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
obj.containerVRSmall = size10;
const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10 * VR_STATUS_SCALE);
const sum11 = roundToNearestPixelResult1 + 2 * STATUS_PADDING;
const size11 = {
  width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult1 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
  height: sum11,
  borderRadius: sum11 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
obj.containerVRRefreshMedium = size11;
const roundToNearestPixelResult2 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM * VR_STATUS_SCALE);
const sum12 = roundToNearestPixelResult2 + 2 * STATUS_PADDING;
const size12 = {
  width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult2 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
  height: sum12,
  borderRadius: sum12 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
obj.containerVRMedium = size12;
const roundToNearestPixelResult3 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE * VR_STATUS_SCALE);
const sum13 = roundToNearestPixelResult3 + 2 * STATUS_PADDING;
const size13 = {
  width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult3 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
  height: sum13,
  borderRadius: sum13 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
obj.containerVRLarge = size13;
const roundToNearestPixelResult4 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE * VR_STATUS_SCALE);
const sum14 = roundToNearestPixelResult4 + 2 * STATUS_PADDING;
const size14 = {
  width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult4 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
  height: sum14,
  borderRadius: sum14 / 2,
  paddingLeft: STATUS_PADDING,
  paddingRight: STATUS_PADDING,
  paddingTop: STATUS_PADDING,
  paddingBottom: STATUS_PADDING,
};
obj.containerVRXLarge = size14;
let size = size_mod;
let result = size.fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(statusSizeOverride, isMobileOnline) {
  let flag = isVROnline;
  if (isVROnline === undefined) {
    flag = false;
  }
  const SMALL = StatusSizes.SMALL;
  if (flag) {
    if (SMALL === statusSizeOverride) {
      return obj.containerVRSmall;
    } else if (StatusSizes.REFRESH_MEDIUM_10 === statusSizeOverride) {
      return obj.containerVRRefreshMedium;
    } else if (StatusSizes.MEDIUM === statusSizeOverride) {
      return obj.containerVRMedium;
    } else if (StatusSizes.LARGE === statusSizeOverride) {
      return obj.containerVRLarge;
    } else if (StatusSizes.XLARGE === statusSizeOverride) {
      return obj.containerVRXLarge;
    } else {
      const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(statusSizeOverride * VR_STATUS_SCALE);
      const sum = roundToNearestPixelResult + 2 * STATUS_PADDING;
      const size = {
        width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING,
        height: sum,
        borderRadius: sum / 2,
        paddingLeft: STATUS_PADDING,
        paddingRight: STATUS_PADDING,
        paddingTop: STATUS_PADDING,
        paddingBottom: STATUS_PADDING,
      };
      return size;
    }
  } else if (SMALL === statusSizeOverride) {
    return isMobileOnline ? obj.containerMobileOnlineSmall : obj.containerSmall;
  } else if (StatusSizes.REFRESH_MEDIUM_10 === statusSizeOverride) {
    return isMobileOnline ? obj.containerMobileOnlineRefreshMedium : obj.containerRefreshMedium;
  } else if (StatusSizes.MEDIUM === statusSizeOverride) {
    return isMobileOnline ? obj.containerMobileOnlineMedium : obj.containerMedium;
  } else if (StatusSizes.LARGE === statusSizeOverride) {
    return isMobileOnline ? obj.containerMobileOnlineLarge : obj.containerLarge;
  } else if (StatusSizes.XLARGE === statusSizeOverride) {
    return isMobileOnline ? obj.containerMobileOnlineXLarge : obj.containerXLarge;
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
    const sum1 = PixelRatio.roundToNearestPixel(statusSizeOverride) + 2 * STATUS_PADDING;
    size1.width = sum1;
    let num2 = 0;
    if (isMobileOnline) {
      num2 = sum1 / 2.5;
    }
    size1.height = sum1 + num2;
    if (isMobileOnline) {
      let result = sum1 / 4;
    } else {
      result = sum1 / 2;
    }
    size1.borderRadius = result;
    size1.paddingLeft = STATUS_PADDING;
    size1.paddingRight = STATUS_PADDING;
    let num4 = 0;
    if (isMobileOnline) {
      num4 = 1;
    }
    size1.paddingTop = STATUS_PADDING + num4;
    let num5 = 0;
    if (isMobileOnline) {
      num5 = 1;
    }
    size1.paddingBottom = STATUS_PADDING + num5;
    return size1;
  }
}
