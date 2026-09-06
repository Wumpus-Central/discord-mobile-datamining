// discord_app/modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
import Server from "../../../../flow/Server.tsx";
import useUploadDisabledDefault from "../useUploadDisabled.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let MediaKeyboardTarget = fn(1607).MediaKeyboardTarget;
const Constants = fn(1074);
({ ChannelTypesSets: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  ({ channel, context } = arg0);
  MediaKeyboardTarget = undefined;
  let mediaKeyboardDraftType;
  const tmp4 = context(7761).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp4;
  const tmp5 = useUploadDisabledDefault(channel);
  dependencyMap = tmp5;
  let tmp2Result = tmp2(7269);
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
  tmp2Result = tmp2(9546);
  const tmp8 = tmp2Result.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp8;
  let obj = context(7761);
  mediaKeyboardDraftType = context(10635).getMediaKeyboardDraftType(context.target);
  let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
  return canStartThread.useMemo(() => {
    const target = context.target;
    if (target !== MediaKeyboardTarget.CHAT) {
      if (target !== tmp2.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === MediaKeyboardTarget.COMMAND) {
      if (tmp.option.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = tmp.option.fileTypes;
      }
    }
    let num = 1;
    if (target === MediaKeyboardTarget.CHAT) {
      num = timestampProducer;
    }
    const obj = {
      uploadLimit: num,
      disableWhenReachedLimit: target === MediaKeyboardTarget.CHAT,
      includedUploadIds: null,
      fileTypes: null,
      canPostPolls: null,
      canStartThreads: null,
      isAppLauncherEnabled: null,
      uploadDisabled: null,
      draftType: null,
    };
    let tmp6;
    if (target !== MediaKeyboardTarget.CHAT) {
      const items = [tmp.option.name];
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
}
