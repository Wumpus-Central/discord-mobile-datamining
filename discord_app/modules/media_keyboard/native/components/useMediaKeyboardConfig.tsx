// === Module 16909: useMediaKeyboardConfig ===

// Module 16909 (useMediaKeyboardConfig)
import c from "c" /* 576 */;
import Server from "Server" /* 1997 */;
import ThreadHooks from "ThreadHooks" /* 6958 */;
import PollsUtils from "PollsUtils" /* 7870 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8488 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 9974 */;
import useUploadDisabledDefault from "useUploadDisabled" /* 11951 */;
import noop from "module_19" /* 19 */;

require = fn;
let MediaKeyboardTarget = fn(1626).MediaKeyboardTarget;
const Constants = fn(1085);
({ ChannelTypesSets: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaKeyboardConfig(arg0) {
  const cResult = c.c(15);
  ({ channel, context } = arg0);
  const tmp6 = PollsUtils.useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  const tmp7 = useUploadDisabledDefault(channel);
  let canStartThread = ThreadHooks.useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !channel.isThread();
  }
  if (canStartThread) {
    canStartThread = !tmp5;
  }
  const tmpResult = ThreadHooks;
  const tmp10 = ActivitiesInTextUtils.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  if (cResult[0] !== context.target) {
    const mediaKeyboardDraftType = MediaKeyboardUtils.getMediaKeyboardDraftType(context.target);
    cResult[0] = context.target;
    cResult[1] = mediaKeyboardDraftType;
    let tmp11 = mediaKeyboardDraftType;
    const tmpResult4 = MediaKeyboardUtils;
  } else {
    tmp11 = cResult[1];
  }
  const target = context.target;
  if (target !== MediaKeyboardTarget.CHAT) {
    if (target !== MediaKeyboardTarget.COMMAND) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("MediaKeyboard does not support context target " + target);
      throw error;
    }
  }
  if (target === MediaKeyboardTarget.COMMAND) {
    if (context.option.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
      const fileTypes = context.option.fileTypes;
    }
  }
  let num3 = 1;
  if (target === MediaKeyboardTarget.CHAT) {
    num3 = timestampProducer;
  }
  if (cResult[2] === context.option) {
    if (cResult[3] === target) {
      let tmp14 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === canStartThread) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === fileTypes) {
            if (cResult[9] === tmp10) {
              if (cResult[10] === num3) {
                if (cResult[11] === tmp16) {
                  if (cResult[12] === tmp14) {
                    if (cResult[13] === tmp7) {
                      let tmp17 = cResult[14];
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
    const obj3 = { uploadLimit: num3, disableWhenReachedLimit: target === tmp13, includedUploadIds: tmp14, fileTypes, canPostPolls: tmp6, canStartThreads: canStartThread, isAppLauncherEnabled: tmp10, uploadDisabled: tmp7, draftType: tmp11 };
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
  const tmpResult3 = ActivitiesInTextUtils;
}) : (function useMediaKeyboardConfig(arg0) {
  ({ channel, context } = arg0);
  MediaKeyboardTarget = undefined;
  let mediaKeyboardDraftType;
  const tmp4 = context(7870).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp4;
  const tmp5 = useUploadDisabledDefault(channel);
  dependencyMap = tmp5;
  let obj = context(7870);
  let canStartThread = context(6958).useCanStartThread(channel);
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
  const tmp2Result = context(6958);
  const tmp8 = context(8488).useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp8;
  const tmp2Result3 = context(8488);
  mediaKeyboardDraftType = context(9974).getMediaKeyboardDraftType(context.target);
  let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
  return canStartThread.useMemo(() => {
    const target = context.target;
    if (target !== MediaKeyboardTarget.CHAT) {
      if (target !== MediaKeyboardTarget.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
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
      num = timestampProducer;
    }
    const obj = { uploadLimit: num, disableWhenReachedLimit: target === MediaKeyboardTarget.CHAT, includedUploadIds: null, fileTypes: null, canPostPolls: null, canStartThreads: null, isAppLauncherEnabled: null, uploadDisabled: null, draftType: null };
    let tmp6;
    if (target !== MediaKeyboardTarget.CHAT) {
      const items = [context.option.name];
      tmp6 = items;
    }
    obj.includedUploadIds = tmp6;
    obj.fileTypes = fileTypes;
    obj.canPostPolls = canPostPolls;
    obj.canStartThreads = canStartThread;
    obj.isAppLauncherEnabled = isAppLauncherEnabled;
    obj.uploadDisabled = uploadDisabled;
    obj.draftType = mediaKeyboardDraftType;
    return obj;
  }, items);
});