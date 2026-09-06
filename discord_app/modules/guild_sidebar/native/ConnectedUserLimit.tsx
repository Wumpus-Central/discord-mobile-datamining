// === Module 16119: ConnectedUserLimit ===

// Module 16119 (ConnectedUserLimit)
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9088 */;
import VoiceChannelUserLimitDefault from "VoiceChannelUserLimit" /* 16120 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

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
  return jsx(VoiceChannelUserLimitDefault, { users: users.userCount, total, videoLimit });
};