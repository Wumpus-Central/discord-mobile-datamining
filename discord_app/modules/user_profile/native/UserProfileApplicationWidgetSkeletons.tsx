// discord_app/modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { skeleton: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export const ImageSkeleton = function ImageSkeleton(style) {
  const obj = { style: null };
  const items = [callback().skeleton, style.style];
  obj[0] = items;
  return <View style={null} />;
};
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export const TextSkeleton = function TextSkeleton(widthChars) {
  let num = widthChars.widthChars;
  if (num === undefined) {
    num = 15;
  }
  const tmp2 = Text.TextStyleSheet[widthChars.variant];
  const style = [callback().skeleton, { width: 0.46 * tmp2.fontSize * num, height: 0.8 * tmp2.lineHeight }];
  return <View style={style} />;
};