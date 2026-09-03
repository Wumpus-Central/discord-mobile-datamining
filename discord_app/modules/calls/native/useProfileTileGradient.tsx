// discord_app/modules/calls/native/useProfileTileGradient.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default function useProfileTileGradient(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  const tmp2 = guildId(8125)(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = closure_3(themeColors, 2);
  const items = [userId, guildId];
  const effect = React.useEffect(() => {
    if (null != userId) {
      const obj = { guildId: null, dispatchWait: true };
      obj[0] = guildId;
      guildId(closure_1_2[3])(tmp, undefined, obj);
    }
  }, items);
  const tmp3 = closure_3;
  const tmp3Result = closure_3(themeColors, 2);
  return userId(8130).useVideoTileGradientColors(tmp5, tmp6);
}
