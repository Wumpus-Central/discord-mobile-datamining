// === Module 8078: getDecorationSizeForAvatarSize ===

// Module 8078 (getDecorationSizeForAvatarSize)
import set from "set" /* 2 */;
import Button from "Button" /* 1296 */;
import DECORATION_TO_AVATAR_RATIO from "DECORATION_TO_AVATAR_RATIO" /* 1431 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

let closure_3 = DECORATION_TO_AVATAR_RATIO.DECORATION_TO_AVATAR_RATIO;
let result = set.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(NORMAL) {
  if (typeof NORMAL !== "number") {
    let result = Button.AVATAR_SIZE_MAP[NORMAL] * closure_3;
  } else {
    result = NORMAL * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(memo, arg1) {
  const _require = arg1;
  let tmp = memo;
  if (null != memo) {
    let obj = { direction: null, radius: null, inset: null, imageType: null, nativeCutouts: null };
    ({ direction: obj[0], radius: obj[1], inset } = memo);
    if (inset == null) {
      inset = 0;
    }
    obj[2] = inset + arg1;
    obj[3] = _require(1296).CutoutType.RECTANGULAR;
    const nativeCutouts = memo.nativeCutouts;
    let mapped;
    if (nativeCutouts != null) {
      mapped = nativeCutouts.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.x = arg0.x + closure_0;
        obj.y = arg0.y + closure_0;
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
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(8079, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};