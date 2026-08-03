import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { skeleton: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = function ImageSkeleton(style) {
  const obj = { style: null };
  const items = [createCacheKey().skeleton, style.style];
  obj[0] = items;
  return <View style={null} />;
};
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = function TextSkeleton(widthChars) {
  let num = widthChars.widthChars;
  if (num === undefined) {
    num = 15;
  }
  const tmp2 = require(4251) /* Text */.TextStyleSheet[widthChars.variant];
  const style = [createCacheKey().skeleton, { width: 0.46 * tmp2.fontSize * num, height: 0.8 * tmp2.lineHeight }];
  return <View style={style} />;
};