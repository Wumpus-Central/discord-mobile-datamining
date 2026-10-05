// === Module 16042: ConnectedUserLimit ===

// Module 16042 (ConnectedUserLimit)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9305 */;
import VoiceChannelUserLimitDefault from "VoiceChannelUserLimit" /* 16043 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let userCount;
  let video;
  const obj = react2;
  const cResult = obj.c(4);
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
    const tmp5 = num < 0 || limit < num;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp4 = bound;
    flag = tmp5;
  }
  if (cResult[0] === flag) {
    if (cResult[1] === tmp4) {
      let tmp8;
      if (cResult[2] === userCount) {
        tmp8 = cResult[3];
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
}) : ((userCount) => {
  let channel;
  let video;
  ({ channel, video } = userCount);
  const users = userCount.userCount;
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
    const tmp4 = num < 0 || limit < num;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    total = bound;
    videoLimit = tmp4;
  }
  return jsx(VoiceChannelUserLimitDefault, { users, total, videoLimit });
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = tmp3;