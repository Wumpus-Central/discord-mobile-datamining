// discord_app/modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import Button from "../../../../design/void/native.tsx";
import DECORATION_TO_AVATAR_RATIO from "../AvatarDecorationConstants.tsx";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let closure_3 = DECORATION_TO_AVATAR_RATIO.DECORATION_TO_AVATAR_RATIO;
let result = obj132.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(closure_11) {
  if (typeof closure_11 !== "number") {
    let result = Button.AVATAR_SIZE_MAP[closure_11] * closure_3;
  } else {
    result = closure_11 * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(cutout, arg1) {
  const _require = arg1;
  let tmp = cutout;
  if (null != cutout) {
    let obj = { direction: null, radius: null, inset: null, imageType: null, nativeCutouts: null };
    ({ direction: obj[0], radius: obj[1], inset } = cutout);
    if (inset == null) {
      inset = 0;
    }
    obj[2] = inset + arg1;
    obj[3] = require("../../../../design/void/native.tsx").CutoutType.RECTANGULAR;
    const nativeCutouts = cutout.nativeCutouts;
    let mapped;
    if (nativeCutouts != null) {
      mapped = nativeCutouts.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.x = item.x + closure_0;
        obj.y = item.y + closure_0;
        return obj;
      });
    }
    obj[4] = mapped;
    tmp = obj;
  }
  return tmp;
};
export const openAvatarDecorationActionSheet = function openAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(8368, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};