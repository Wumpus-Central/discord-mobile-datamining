// discord_app/modules/calls/native/useProfileTileGradient.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/native/useProfileTileGradient.tsx");

export default function useProfileTileGradient(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let isVideoBackgroundProfileFetchEnabled;
  let tmp2 = guildId(isVideoBackgroundProfileFetchEnabled[2])(userId, guildId);
  let themeColors;
  if (tmp2 != null) {
    themeColors = tmp2.themeColors;
  }
  if (themeColors == null) {
    themeColors = [];
  }
  [tmp5, tmp6] = closure_3(themeColors, 2);
  const tmp3 = closure_3;
  const tmp3Result = closure_3(themeColors, 2);
  isVideoBackgroundProfileFetchEnabled = userId(
    isVideoBackgroundProfileFetchEnabled[3],
  ).useIsVideoBackgroundProfileFetchEnabled(userId.location);
  const items = [isVideoBackgroundProfileFetchEnabled, userId, guildId];
  const effect = React.useEffect(() => {
    let tmp2 = null != userId;
    if (tmp2) {
      tmp2 = isVideoBackgroundProfileFetchEnabled;
    }
    if (tmp2) {
      const obj = { guildId: null, dispatchWait: true };
      obj[0] = guildId;
      guildId(isVideoBackgroundProfileFetchEnabled[4])(userId, undefined, obj);
    }
  }, items);
  let obj = userId(isVideoBackgroundProfileFetchEnabled[3]);
  return userId(isVideoBackgroundProfileFetchEnabled[5]).useVideoTileGradientColors(tmp5, tmp6);
}
