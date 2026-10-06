// === Module 11936: useShowConnectedUserLimit ===

// Module 11936 (useShowConnectedUserLimit)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9340 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.MAX_STAGE_VOICE_USER_LIMIT;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let considerMaxStageVoiceUserLimit;
  let num2;
  let video;
  ({ channel, video, considerMaxStageVoiceUserLimit } = arg0);
  const tmp = undefined === considerMaxStageVoiceUserLimit || considerMaxStageVoiceUserLimit;
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp2 = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp2 = bound;
  }
  if (!tmp) {
    num2 = tmp2;
  } else {
    num2 = 0;
  }
  return num2;
}) : ((arg0) => {
  let channel;
  let considerMaxStageVoiceUserLimit;
  let num2;
  let video;
  ({ channel, video, considerMaxStageVoiceUserLimit } = arg0);
  if (considerMaxStageVoiceUserLimit === undefined) {
    considerMaxStageVoiceUserLimit = true;
  }
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp = bound;
  }
  if (!considerMaxStageVoiceUserLimit) {
    num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2;
});
let closure_4 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let userCount;
  let video;
  const obj = react;
  const cResult = obj.c(6);
  ({ channel, video, userCount } = arg0);
  if (cResult[0] === channel) {
    let tmp2;
    if (cResult[1] === video) {
      tmp2 = cResult[2];
    }
    const obj3 = closure_4(tmp2);
    let tmp5 = null;
    if (obj3 > 0) {
      let combined2;
      if (cResult[3] === obj3) {
        let tmp6;
        if (cResult[4] === userCount) {
          tmp6 = cResult[5];
        }
        tmp5 = tmp6;
      }
      if (null != userCount) {
        let combined;
        let combined1;
        if (userCount >= 1000) {
          const _Math2 = Math;
          let str7 = "";
          const rounded = Math.floor(userCount / 1000);
          if (userCount % 1000 !== 0) {
            str7 = "+";
          }
          const _HermesInternal2 = HermesInternal;
          combined = "" + rounded + "k" + str7;
        } else {
          const toFixedResult = userCount.toFixed(0);
          combined = toFixedResult.padStart(2, "0");
        }
        if (obj3 >= 1000) {
          const _Math3 = Math;
          let str11 = "";
          const rounded1 = Math.floor(obj3 / 1000);
          if (obj3 % 1000 !== 0) {
            str11 = "+";
          }
          const _HermesInternal3 = HermesInternal;
          combined1 = "" + rounded1 + "k" + str11;
        } else {
          const toFixedResult1 = obj3.toFixed(0);
          combined1 = toFixedResult1.padStart(2, "0");
        }
        const _HermesInternal4 = HermesInternal;
        combined2 = "" + combined + "/" + combined1;
      } else if (obj3 >= 1000) {
        const _Math = Math;
        let str3 = "";
        const rounded2 = Math.floor(obj3 / 1000);
        if (obj3 % 1000 !== 0) {
          str3 = "+";
        }
        const _HermesInternal = HermesInternal;
        combined2 = "" + rounded2 + "k" + str3;
      } else {
        const toFixedResult2 = obj3.toFixed(0);
        combined2 = toFixedResult2.padStart(2, "0");
      }
      cResult[3] = obj3;
      cResult[4] = userCount;
      cResult[5] = combined2;
      tmp6 = combined2;
    }
    return tmp5;
  }
  const obj2 = { channel, video };
  cResult[0] = channel;
  cResult[1] = video;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : ((channel) => {
  const userCount = channel.userCount;
  const obj = { channel: channel.channel, video: channel.video };
  const obj2 = closure_4(obj);
  let tmp = null;
  if (obj2 > 0) {
    let combined2;
    if (null != userCount) {
      let combined;
      let combined1;
      if (userCount >= 1000) {
        const _Math2 = Math;
        let str7 = "";
        const rounded = Math.floor(userCount / 1000);
        if (userCount % 1000 !== 0) {
          str7 = "+";
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + rounded + "k" + str7;
      } else {
        const toFixedResult = userCount.toFixed(0);
        combined = toFixedResult.padStart(2, "0");
      }
      if (obj2 >= 1000) {
        const _Math3 = Math;
        let str11 = "";
        const rounded1 = Math.floor(obj2 / 1000);
        if (obj2 % 1000 !== 0) {
          str11 = "+";
        }
        const _HermesInternal3 = HermesInternal;
        combined1 = "" + rounded1 + "k" + str11;
      } else {
        const toFixedResult1 = obj2.toFixed(0);
        combined1 = toFixedResult1.padStart(2, "0");
      }
      const _HermesInternal4 = HermesInternal;
      combined2 = "" + combined + "/" + combined1;
    } else if (obj2 >= 1000) {
      const _Math = Math;
      let str3 = "";
      const rounded2 = Math.floor(obj2 / 1000);
      if (obj2 % 1000 !== 0) {
        str3 = "+";
      }
      const _HermesInternal = HermesInternal;
      combined2 = "" + rounded2 + "k" + str3;
    } else {
      const toFixedResult2 = obj2.toFixed(0);
      combined2 = toFixedResult2.padStart(2, "0");
    }
    tmp = combined2;
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let video;
  const obj = react;
  const cResult = obj.c(3);
  ({ channel, video } = arg0);
  if (cResult[0] === channel) {
    let tmp4;
    if (cResult[1] === video) {
      tmp4 = cResult[2];
    }
    const tmp6 = closure_4(tmp4) > 0 && !tmp2 && !tmp3;
    return tmp6;
  }
  const obj2 = { channel, video };
  cResult[0] = channel;
  cResult[1] = video;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : ((channel) => {
  let locked;
  let selected;
  const obj = { channel: channel.channel, video: channel.video };
  ({ locked, selected } = channel);
  const tmp = closure_4(obj) > 0 && !locked && !selected;
  return tmp;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/useShowConnectedUserLimit.tsx");

export default tmp4;
export const useConnectedUserLimit = tmp2;
export const useConnectedUserLimitFormatted = tmp3;