import { DECORATION_TO_AVATAR_RATIO as closure_3 } from "DECORATION_TO_AVATAR_RATIO";

let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(NORMAL) {
  if (typeof NORMAL === "__REMOTEDEV__") {
    let result = require(1297) /* Button */.AVATAR_SIZE_MAP[NORMAL] * closure_3;
  } else {
    result = NORMAL * closure_3;
  }
  return result;
};
export const getDecorationCutoutForAvatarCutout = function getDecorationCutoutForAvatarCutout(memo, arg1) {
  let inset;
  const _require = arg1;
  let tmp = memo;
  if (null != memo) {
    let obj = { direction: null, radius: null, inset: null, imageType: null, nativeCutouts: null };
    ({ direction: obj[0], radius: obj[1], inset } = memo);
    if (inset == null) {
      inset = 0;
    }
    obj[2] = inset + arg1;
    obj[3] = _require(1297).CutoutType.RECTANGULAR;
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
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(7940, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};