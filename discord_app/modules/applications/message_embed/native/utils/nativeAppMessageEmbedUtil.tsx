// === Module 11944: nativeAppMessageEmbedUtil ===

// Module 11944 (nativeAppMessageEmbedUtil)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useAvatarColor from "useAvatarColor" /* 8132 */;
import useHeroColors from "useHeroColors" /* 8133 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import size from "module_2" /* 2 */;

let c3 = "#000000";
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760), ];
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  if (null == appIconSrc) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(appIconSrc)) {
      let tmp6Result = useHeroColors;
      const heroColors = tmp6Result.getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        tmp6Result = ColorUtils;
        items = [tmp6Result.hexToRgba(primaryColor), ColorUtils.hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = ColorUtils;
      }
      return tmp5;
    } else {
      useAvatarColor.maybeFetchColors(appIconSrc);
      return tmp;
    }
    obj5 = useAvatarColor;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  const obj = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};