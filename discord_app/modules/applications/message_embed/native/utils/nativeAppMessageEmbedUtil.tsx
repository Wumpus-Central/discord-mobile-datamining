// discord_app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../../utils/AvatarUtils.tsx";
import hasFetchedColors from "../../../../avatar/useAvatarColor.tsx";
import useHeroColors from "../../../../content_inventory/memberlist/useHeroColors.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";

let c3 = "#000000";
let items = [hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760), ];
items[1] = hexToRgba.hexToRgba(ThemesDefault.unsafe_rawColors.PRIMARY_760);
const result = obj132.fileFinishedImporting("modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx");

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
        tmp6Result = hexToRgba;
        items = [tmp6Result.hexToRgba(primaryColor), hexToRgba.hexToRgba(secondaryColor)];
        tmp5 = items;
        const tmp6Result1 = hexToRgba;
      }
      return tmp5;
    } else {
      hasFetchedColors.maybeFetchColors(appIconSrc);
      return tmp;
    }
    obj5 = hasFetchedColors;
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