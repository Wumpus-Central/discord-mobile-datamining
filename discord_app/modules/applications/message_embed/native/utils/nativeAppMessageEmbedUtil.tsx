// === Module 12074: nativeAppMessageEmbedUtil ===

// Module 12074 (nativeAppMessageEmbedUtil)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useAvatarColor from "useAvatarColor" /* 8249 */;
import useHeroColors from "useHeroColors" /* 8250 */;
import ColorUtils_mod from "ColorUtils" /* 4486 */;
import size from "module_2" /* 2 */;

let c3 = "#000000";
let ColorUtils = ColorUtils_mod;
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760), ];
let ColorUtils = ColorUtils_mod;
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  if (null == appIconSrc) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(appIconSrc)) {
      const heroColors = useHeroColors.getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        items = [ColorUtils.hexToRgba(primaryColor), ];
        const tmp6Result4 = ColorUtils;
        items[1] = ColorUtils.hexToRgba(secondaryColor);
        tmp5 = items;
        const tmp6Result5 = ColorUtils;
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
  let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id, icon, bot, fallbackAvatar: false });
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};