// discord_app/modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx
import { DECORATION_TO_AVATAR_RATIO as closure_3 } from "DECORATION_TO_AVATAR_RATIO";
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { Button } from "../../../../design/void/native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarDecorationUtils.tsx");

export const getDecorationSizeForAvatarSize = function getDecorationSizeForAvatarSize(NORMAL) {
  if (typeof NORMAL !== "number") {
    let result = Button.AVATAR_SIZE_MAP[NORMAL] * closure_3;
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
    obj[3] = _Button.CutoutType.RECTANGULAR;
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
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(8200, dependencyMap.paths), "Edit Avatar Decoration", { user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations });
};