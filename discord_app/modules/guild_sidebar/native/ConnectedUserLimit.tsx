// === Module 16038: ConnectedUserLimit ===

// Module 16038 (ConnectedUserLimit)
import c from "c" /* 576 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9305 */;
import VoiceChannelUserLimitDefault from "VoiceChannelUserLimit" /* 16039 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ channel, video, userCount } = arg0);
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let flag = false;
  let tmp4 = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp4 = bound;
    flag = num < 0 || limit < num;
    const tmp5 = num < 0 || limit < num;
  }
  if (cResult[0] === flag) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === userCount) {
        let tmp8 = cResult[3];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(VoiceChannelUserLimitDefault, { users: userCount, total: tmp4, videoLimit: flag });
  cResult[0] = flag;
  cResult[1] = tmp4;
  cResult[2] = userCount;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((users) => {
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
});