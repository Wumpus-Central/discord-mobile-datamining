// === Module 8157: avatar_decorations/AvatarDecorationUtils ===

// Module 8157 (avatar_decorations/AvatarDecorationUtils)
import native from "native" /* 1178 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1397 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

let closure_3 = AvatarDecorationConstants.DECORATION_TO_AVATAR_RATIO;
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(NORMAL) {
  if (typeof NORMAL !== "number") {
    let result = native.AVATAR_SIZE_MAP[NORMAL] * closure_3;
  } else {
    result = NORMAL * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(cutout, arg1) {
  closure_0 = arg1;
  let tmp = cutout;
  if (null != cutout) {
    let obj = { direction: null, radius: null, inset: null, imageType: null, nativeCutouts: null };
    ({ direction: obj.direction, radius: obj.radius, inset } = cutout);
    if (inset == null) {
      inset = 0;
    }
    obj.inset = inset + arg1;
    obj.imageType = native.CutoutType.RECTANGULAR;
    const nativeCutouts = cutout.nativeCutouts;
    let mapped;
    if (nativeCutouts != null) {
      mapped = nativeCutouts.map((item) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.x = item.x + closure_0;
        obj.y = item.y + closure_0;
        return obj;
      });
    }
    obj.nativeCutouts = mapped;
    tmp = obj;
  }
  return tmp;
};
export const openAvatarDecorationActionSheet = function openAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8158, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};