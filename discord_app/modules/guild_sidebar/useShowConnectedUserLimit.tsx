// === Module 11461: useShowConnectedUserLimit ===

// Module 11461 (useShowConnectedUserLimit)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9653 */;

let closure_2 = ME.MAX_STAGE_VOICE_USER_LIMIT;
const result = set.fileFinishedImporting("modules/guild_sidebar/useShowConnectedUserLimit.tsx");

export default function useShowConnectedUserLimit(channel) {
  ({ channel, video, considerMaxStageVoiceUserLimit } = { channel: channel.channel, video: channel.video });
  ({ locked, selected } = channel);
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
    let num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2 > 0 && !locked && !selected;
};
export const useConnectedUserLimit = function useConnectedUserLimit(arg0) {
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
    let num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2;
};
export const useConnectedUserLimitFormatted = function useConnectedUserLimitFormatted(channel) {
  const userCount = channel.userCount;
  ({ channel, video, considerMaxStageVoiceUserLimit } = { channel: channel.channel, video: channel.video });
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
    let str = tmp;
  } else {
    str = 0;
  }
  if (str <= 0) {
    return null;
  } else {
    if (null == userCount) {
      if (str >= 1000) {
        const _Math2 = Math;
        let str4 = "";
        const rounded = Math.floor(str / 1000);
        if (str % 1000 !== 0) {
          str4 = "+";
        }
        const _HermesInternal = HermesInternal;
        let combined = "" + rounded + "k" + str4;
      } else {
        combined = str.toFixed(0).padStart(2, "0");
        const toFixedResult = str.toFixed(0);
      }
    }
    let num4 = 1000;
    if (userCount >= 1000) {
      const _Math3 = Math;
      let str8 = "";
      const rounded1 = Math.floor(userCount / num4);
      if (userCount % num4 !== 0) {
        str8 = "+";
      }
      const _HermesInternal2 = HermesInternal;
      let combined1 = "" + rounded1 + "k" + str8;
    } else {
      combined1 = userCount.toFixed(0).padStart(2, "0");
      const toFixedResult1 = userCount.toFixed(0);
    }
    if (str >= num4) {
      const _Math4 = Math;
      const rounded2 = Math.floor(str / num4);
      num4 = str % num4;
      let str12 = "";
      if (num4 !== 0) {
        str12 = "+";
      }
      const _HermesInternal3 = HermesInternal;
      let combined2 = "" + rounded2 + "k" + str12;
    } else {
      combined2 = str.toFixed(0).padStart(2, "0");
      const toFixedResult2 = str.toFixed(0);
    }
    const _HermesInternal4 = HermesInternal;
    str = "/";
    const combined3 = "" + combined1 + "/" + combined2;
  }
};