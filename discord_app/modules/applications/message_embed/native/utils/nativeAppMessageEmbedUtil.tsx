// discord_app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../../utils/AvatarUtils.tsx";
import hasFetchedColors from "../../../../avatar/useAvatarColor.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";

let c3 = "#000000";
let items = [hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760)];
items[1] = hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760);
const result = set.fileFinishedImporting(
  "modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx",
);

export const getAppGradientColors = function getAppGradientColors(id2) {
  if (null == id2) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(id2)) {
      let tmp6Result = tmp6(8133);
      const heroColors = tmp6Result.getHeroColors(id2);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      if (false === tmp4) {
        tmp6Result = tmp6(4409);
        items = [tmp6Result.hexToRgba(primaryColor), tmp6(4409).hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = tmp6(4409);
      }
      return tmp5;
    } else {
      tmp6(8132).maybeFetchColors(id2);
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
