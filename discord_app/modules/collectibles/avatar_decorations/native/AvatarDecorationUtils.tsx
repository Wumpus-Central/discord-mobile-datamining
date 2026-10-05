// === Module 7828: avatar_decorations/AvatarDecorationUtils ===

// Module 7828 (avatar_decorations/AvatarDecorationUtils)
import native from "native" /* 1188 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1403 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

let closure_3 = AvatarDecorationConstants.DECORATION_TO_AVATAR_RATIO;
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(NORMAL) {
  let result;
  if (typeof NORMAL !== "number") {
    result = native.AVATAR_SIZE_MAP[NORMAL] * closure_3;
  } else {
    result = NORMAL * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(cutout, arg1) {
  let inset;
  let mapped;
  let closure_0 = arg1;
  let tmp = cutout;
  if (null != cutout) {
    let obj = { direction: null, radius: null, inset: inset + arg1, imageType: native.CutoutType.RECTANGULAR, nativeCutouts: mapped };
    ({ direction: obj.direction, radius: obj.radius, inset } = cutout);
    if (inset == null) {
      inset = 0;
    }
    const nativeCutouts = cutout.nativeCutouts;
    mapped = undefined;
    if (nativeCutouts != null) {
      mapped = nativeCutouts.map((item) => {
        const obj = { x: item.x + closure_0, y: item.y + closure_0 };
        const merged = Object.assign(item);
        return obj;
      });
    }
    tmp = obj;
  }
  return tmp;
};
export const openAvatarDecorationActionSheet = function openAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.openLazy(asyncRequire(7829, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};