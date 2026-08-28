// discord_app/modules/calls/native/useProfileTileGradient.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default function useProfileTileGradient(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  dependencyMap = undefined;
  let tmp2 = guildId(1367)(userId.location);
  dependencyMap = tmp2;
  const tmp3 = guildId(8060)(userId, guildId);
  let items = null;
  if (tmp2) {
    let themeColors;
    if (tmp3 != null) {
      themeColors = tmp3.themeColors;
    }
    items = themeColors;
  }
  if (items == null) {
    items = [];
  }
  [tmp7, tmp8] = closure_3(items, 2);
  const items1 = [tmp2, userId, guildId];
  const effect = React.useEffect(() => {
    let tmp2 = null != userId;
    if (tmp2) {
      tmp2 = table;
    }
    if (tmp2) {
      const obj = { guildId: null, dispatchWait: true };
      obj[0] = guildId;
      guildId(table[4])(userId, undefined, obj);
    }
  }, items1);
  const tmp4 = closure_3;
  const tmp4Result = closure_3(items, 2);
  return userId(8065).useVideoTileGradientColors(tmp7, tmp8);
};