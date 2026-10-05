// discord_app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import useAvatarColor from "../../../../avatar/useAvatarColor.tsx";
import useHeroColors from "../../../../content_inventory/memberlist/useHeroColors.tsx";
import ColorUtils_mod from "../../../../../utils/ColorUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3 = "#000000";
let ColorUtils = ColorUtils_mod;
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760)];
ColorUtils = ColorUtils_mod;
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting(
  "modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx",
);

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  let primaryColor;
  let secondaryColor;
  if (null == appIconSrc) {
    return items;
  } else {
    const obj5 = useAvatarColor;
    if (obj5.hasFetchedColors(appIconSrc)) {
      const tmp6Result = useHeroColors;
      const heroColors = tmp6Result.getHeroColors(appIconSrc);
      ({ primaryColor, secondaryColor } = heroColors);
      let tmp5 = tmp;
      const tmp4 = primaryColor === c3 && secondaryColor === c3;
      if (false === tmp4) {
        items = [,];
        const tmp6Result4 = ColorUtils;
        items[0] = tmp6Result4.hexToRgba(primaryColor);
        const tmp6Result5 = ColorUtils;
        items[1] = tmp6Result5.hexToRgba(secondaryColor);
        tmp5 = items;
      }
      return tmp5;
    } else {
      const tmp6Result6 = useAvatarColor;
      tmp6Result6.maybeFetchColors(appIconSrc);
      return items;
    }
  }
};
export const getAppIconSrc = function getAppIconSrc(id, icon, bot) {
  const obj = AvatarUtilsDefault;
  const obj2 = { id, icon, bot, fallbackAvatar: false };
  let applicationIconURL = obj.getApplicationIconURL(obj2);
  if (applicationIconURL == null) {
    applicationIconURL = null;
  }
  return applicationIconURL;
};
