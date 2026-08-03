// === Module 11264: items ===

// Module 11264 (items)
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";

let c3 = "#000000";
let items = [hexToRgba.hexToRgba(require("Themes").unsafe_rawColors.PRIMARY_760), ];
items[1] = hexToRgba.hexToRgba(require("Themes").unsafe_rawColors.PRIMARY_760);
const result = require("hasFetchedColors").fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

export const getAppGradientColors = function getAppGradientColors(id2) {
  let primaryColor;
  let secondaryColor;
  if (null == id2) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(id2)) {
      let tmp6Result = tmp6(8034);
      const heroColors = tmp6Result.getHeroColors(id2);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        tmp6Result = tmp6(4099);
        const items = [tmp6Result.hexToRgba(primaryColor), tmp6(4099).hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = tmp6(4099);
      }
      return tmp5;
    } else {
      tmp6(8033).maybeFetchColors(id2);
      return tmp;
    }
    obj5 = require(8033) /* hasFetchedColors */;
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  let obj = importDefault(1416);
  obj = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};