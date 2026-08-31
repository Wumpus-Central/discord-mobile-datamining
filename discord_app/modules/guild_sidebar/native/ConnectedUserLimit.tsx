// discord_app/modules/guild_sidebar/native/ConnectedUserLimit.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useChannelVideoLimitDefault from "../../video_calls/useChannelVideoLimit.tsx";
import _modDef15673 from "VoiceChannelUserLimit.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(users) {
  ({ channel, video } = users);
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let videoLimit = false;
  let total = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    total = bound;
    videoLimit = num < 0 || limit < num;
    const tmp4 = num < 0 || limit < num;
  }
  return jsx(_modDef15673, { users: users.userCount, total, videoLimit });
};