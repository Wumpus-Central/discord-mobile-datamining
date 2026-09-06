// discord_app/modules/guild_sidebar/native/ConnectedUserLimit.tsx
import useChannelVideoLimitDefault from "../../video_calls/useChannelVideoLimit.tsx";
import VoiceChannelUserLimitDefault from "VoiceChannelUserLimit.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
