// discord_app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import useAvatarColor from "../../../../avatar/useAvatarColor.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3 = "#000000";
let items = [ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760)];
items[1] = ColorUtils.hexToRgba(nativeDefault.unsafe_rawColors.PRIMARY_760);
const result = size.fileFinishedImporting(
  "modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx",
);

export const getAppGradientColors = function getAppGradientColors(appIconSrc) {
  if (null == appIconSrc) {
    return tmp;
  } else {
    if (obj5.hasFetchedColors(appIconSrc)) {
      let tmp6Result = tmp6(8133);
      const heroColors = tmp6Result.getHeroColors(appIconSrc);
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
      tmp6(8132).maybeFetchColors(appIconSrc);
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
