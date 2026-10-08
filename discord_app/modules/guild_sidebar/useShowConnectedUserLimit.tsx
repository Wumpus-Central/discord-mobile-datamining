// discord_app/modules/guild_sidebar/useShowConnectedUserLimit.tsx
import c from "../../../_runtime/00576_c.js";
import Constants from "../../Constants.tsx";
import useChannelVideoLimitDefault from "../video_calls/useChannelVideoLimit.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import "ReactCompilerGating";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = Constants.MAX_STAGE_VOICE_USER_LIMIT;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConnectedUserLimit(arg0) {
      ({ channel, video, considerMaxStageVoiceUserLimit } = arg0);
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
        let num2 = tmp2;
      } else {
        num2 = 0;
      }
      return num2;
    }
  : function useConnectedUserLimit(arg0) {
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
let closure_4 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConnectedUserLimitFormatted(arg0) {
      const cResult = c.c(6);
      ({ channel, video, userCount } = arg0);
      if (cResult[0] === channel) {
        if (cResult[1] === video) {
          let tmp2 = cResult[2];
        }
        const obj3 = closure_4(tmp2);
        if (obj3 <= 0) {
          return null;
        } else {
          if (null == userCount) {
            if (obj3 >= 1000) {
              const _Math = Math;
              let str3 = "";
              const rounded = Math.floor(obj3 / 1000);
              if (obj3 % 1000 !== 0) {
                str3 = "+";
              }
              const _HermesInternal = HermesInternal;
              let combined = "" + rounded + "k" + str3;
            } else {
              combined = obj3.toFixed(0).padStart(2, "0");
              const toFixedResult = obj3.toFixed(0);
            }
            cResult[3] = obj3;
            cResult[4] = userCount;
            cResult[5] = combined;
          }
          let num4 = 1000;
          if (userCount >= 1000) {
            const _Math2 = Math;
            let str7 = "";
            const rounded1 = Math.floor(userCount / num4);
            if (userCount % num4 !== 0) {
              str7 = "+";
            }
            const _HermesInternal2 = HermesInternal;
            let combined1 = "" + rounded1 + "k" + str7;
          } else {
            combined1 = userCount.toFixed(0).padStart(2, "0");
            const toFixedResult1 = userCount.toFixed(0);
          }
          if (obj3 >= num4) {
            const _Math3 = Math;
            const rounded2 = Math.floor(obj3 / num4);
            num4 = obj3 % num4;
            let str11 = "";
            if (num4 !== 0) {
              str11 = "+";
            }
            const _HermesInternal3 = HermesInternal;
            let combined2 = "" + rounded2 + "k" + str11;
          } else {
            combined2 = obj3.toFixed(0).padStart(2, "0");
            const toFixedResult2 = obj3.toFixed(0);
          }
          const _HermesInternal4 = HermesInternal;
          const combined3 = "" + combined1 + "/" + combined2;
        }
      }
      const obj2 = { channel, video };
      cResult[0] = channel;
      cResult[1] = video;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : function useConnectedUserLimitFormatted(channel) {
      const userCount = channel.userCount;
      let str = closure_4({ channel: channel.channel, video: channel.video });
      if (str <= 0) {
        return null;
      } else {
        if (null == userCount) {
          if (str >= 1000) {
            const _Math = Math;
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
        let num3 = 1000;
        if (userCount >= 1000) {
          const _Math2 = Math;
          let str8 = "";
          const rounded1 = Math.floor(userCount / num3);
          if (userCount % num3 !== 0) {
            str8 = "+";
          }
          const _HermesInternal2 = HermesInternal;
          let combined1 = "" + rounded1 + "k" + str8;
        } else {
          combined1 = userCount.toFixed(0).padStart(2, "0");
          const toFixedResult1 = userCount.toFixed(0);
        }
        if (str >= num3) {
          const _Math3 = Math;
          const rounded2 = Math.floor(str / num3);
          num3 = str % num3;
          let str12 = "";
          if (num3 !== 0) {
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
const result = size.fileFinishedImporting("modules/guild_sidebar/useShowConnectedUserLimit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowConnectedUserLimit(arg0) {
      const cResult = c.c(3);
      ({ channel, video } = arg0);
      if (cResult[0] === channel) {
        if (cResult[1] === video) {
          let tmp4 = cResult[2];
        }
        return closure_4(tmp4) > 0 && !tmp2 && !tmp3;
      }
      const obj2 = { channel, video };
      cResult[0] = channel;
      cResult[1] = video;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : function useShowConnectedUserLimit(channel) {
      ({ locked, selected } = channel);
      return closure_4({ channel: channel.channel, video: channel.video }) > 0 && !locked && !selected;
    };
export const useConnectedUserLimit = tmp2;
export const useConnectedUserLimitFormatted = tmp3;
