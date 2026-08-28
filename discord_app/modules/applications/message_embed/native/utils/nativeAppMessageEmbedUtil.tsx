// === Module 11454: items ===

// Module 11454 (items)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import hasFetchedColors from "hasFetchedColors" /* 7987 */;
import hexToRgba from "hexToRgba" /* 4294 */;

let c3 = "#000000";
let items = [hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760), ];
items[1] = hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760);
const result = set.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(id2) {
  if (null == id2) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(id2)) {
      let tmp6Result = tmp6(7988);
      const heroColors = tmp6Result.getHeroColors(id2);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        tmp6Result = tmp6(4294);
        items = [tmp6Result.hexToRgba(primaryColor), tmp6(4294).hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = tmp6(4294);
      }
      return tmp5;
    } else {
      tmp6(7987).maybeFetchColors(id2);
      return tmp;
    }
    obj5 = hasFetchedColors;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let obj = getAvatarURLDefault;
  obj = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};