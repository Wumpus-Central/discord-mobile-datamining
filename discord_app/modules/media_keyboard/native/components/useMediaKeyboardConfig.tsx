// discord_app/modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import MediaKeyboardConstants from "../MediaKeyboardConstants.tsx";
import Server from "../../../../flow/Server.tsx";
import ThreadHooks from "../../../threads/ThreadHooks.tsx";
import PollsUtils from "../../../polls/PollsUtils.tsx";
import ActivitiesInTextUtils from "../../../activities/ActivitiesInTextUtils.tsx";
import MediaKeyboardUtils from "../MediaKeyboardUtils.tsx";
import useUploadDisabledDefault from "../useUploadDisabled.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
({ ChannelTypesSets: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let channel;
      let context;
      let fileTypes;
      let tmp11;
      const obj = react2;
      const cResult = obj.c(15);
      ({ channel, context } = arg0);
      const obj2 = PollsUtils;
      const tmp6 = obj2.useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
      const tmp7 = useUploadDisabledDefault(channel);
      const tmpResult = ThreadHooks;
      let canStartThread = tmpResult.useCanStartThread(channel);
      if (canStartThread) {
        const GUILD_THREADS_ONLY = hasOwnProperty.GUILD_THREADS_ONLY;
        canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (canStartThread) {
        canStartThread = !channel.isThread();
      }
      if (canStartThread) {
        canStartThread = !tmp5;
      }
      const tmpResult3 = ActivitiesInTextUtils;
      const tmp10 = tmpResult3.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
      if (cResult[0] !== context.target) {
        const tmpResult4 = MediaKeyboardUtils;
        const mediaKeyboardDraftType = tmpResult4.getMediaKeyboardDraftType(context.target);
        cResult[0] = context.target;
        cResult[1] = mediaKeyboardDraftType;
        tmp11 = mediaKeyboardDraftType;
      } else {
        tmp11 = cResult[1];
      }
      const target = context.target;
      if (target !== MediaKeyboardTarget.CHAT) {
        if (target !== MediaKeyboardTarget.COMMAND) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("MediaKeyboard does not support context target " + target);
          throw error;
        }
      }
      if (target === MediaKeyboardTarget.COMMAND) {
        if (context.option.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
          fileTypes = context.option.fileTypes;
        }
      }
      let num3 = 1;
      if (target === MediaKeyboardTarget.CHAT) {
        num3 = metroRequire;
      }
      if (cResult[2] === context.option) {
        let tmp14;
        if (cResult[3] === target) {
          tmp14 = cResult[4];
        }
        if (cResult[5] === tmp6) {
          if (cResult[6] === canStartThread) {
            if (cResult[7] === tmp11) {
              if (cResult[8] === fileTypes) {
                if (cResult[9] === tmp10) {
                  if (cResult[10] === num3) {
                    if ((cResult[11] === target) === tmp13) {
                      if (cResult[12] === tmp14) {
                        let tmp17;
                        if (cResult[13] === tmp7) {
                          tmp17 = cResult[14];
                        }
                        return tmp17;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj3 = {
          uploadLimit: num3,
          disableWhenReachedLimit: target === tmp13,
          includedUploadIds: tmp14,
          fileTypes,
          canPostPolls: tmp6,
          canStartThreads: canStartThread,
          isAppLauncherEnabled: tmp10,
          uploadDisabled: tmp7,
          draftType: tmp11,
        };
        cResult[5] = tmp6;
        cResult[6] = canStartThread;
        cResult[7] = tmp11;
        cResult[8] = fileTypes;
        cResult[9] = tmp10;
        cResult[10] = num3;
        cResult[11] = target === tmp13;
        cResult[12] = tmp14;
        cResult[13] = tmp7;
        cResult[14] = obj3;
        tmp17 = obj3;
      }
      let tmp15;
      if (target !== MediaKeyboardTarget.CHAT) {
        const items = [context.option.name];
        tmp15 = items;
      }
      cResult[2] = context.option;
      cResult[3] = target;
      cResult[4] = tmp15;
      tmp14 = tmp15;
    }
  : (arg0) => {
      let canPostPolls;
      let channel;
      let context;
      let isAppLauncherEnabled;
      let uploadDisabled;
      ({ channel, context } = arg0);
      MediaKeyboardTarget = undefined;
      let mediaKeyboardDraftType;
      let obj = context(7270);
      const tmp4 = obj.useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
      importDefault = tmp4;
      const tmp5 = useUploadDisabledDefault(channel);
      dependencyMap = tmp5;
      const tmp2Result = context(6782);
      let canStartThread = tmp2Result.useCanStartThread(channel);
      if (canStartThread) {
        const GUILD_THREADS_ONLY = mediaKeyboardDraftType.GUILD_THREADS_ONLY;
        canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
      }
      if (canStartThread) {
        canStartThread = !channel.isThread();
      }
      if (canStartThread) {
        canStartThread = !tmp;
      }
      const tmp2Result3 = context(9033);
      const tmp8 = tmp2Result3.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
      MediaKeyboardTarget = tmp8;
      const tmp2Result4 = context(10377);
      mediaKeyboardDraftType = tmp2Result4.getMediaKeyboardDraftType(context.target);
      let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
      return canStartThread.useMemo(function () {
        let tmp6;
        const target = context.target;
        if (target !== MediaKeyboardTarget.CHAT) {
          if (target !== MediaKeyboardTarget.COMMAND) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("MediaKeyboard does not support context target " + target);
            throw error;
          }
        }
        let fileTypes;
        if (target === MediaKeyboardTarget.COMMAND) {
          if (context.option.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
            fileTypes = context.option.fileTypes;
          }
        }
        let num = 1;
        if (target === MediaKeyboardTarget.CHAT) {
          num = metroRequire;
        }
        const obj = {
          uploadLimit: num,
          disableWhenReachedLimit: target === MediaKeyboardTarget.CHAT,
          includedUploadIds: tmp6,
          fileTypes,
          canPostPolls,
          canStartThreads: canStartThread,
          isAppLauncherEnabled,
          uploadDisabled,
          draftType: mediaKeyboardDraftType,
        };
        tmp6 = undefined;
        if (target !== MediaKeyboardTarget.CHAT) {
          const items = [context.option.name];
          tmp6 = items;
        }
        return obj;
      }, items);
    };
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default tmp3;
