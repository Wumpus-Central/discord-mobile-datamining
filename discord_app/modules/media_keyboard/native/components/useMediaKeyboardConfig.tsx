// discord_app/modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
import useUploadDisabledDefault from "../useUploadDisabled.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { MediaKeyboardTarget } from "../MediaKeyboardConstants.tsx";
import ME from "../../../../Constants.tsx";

const require = arg1;
({ ChannelTypesSets: c5, MAX_UPLOAD_COUNT: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  ({ channel, context } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let canStartThread;
  MediaKeyboardTarget = undefined;
  let mediaKeyboardDraftType;
  const tmp4 = context(7505).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp4;
  const tmp5 = useUploadDisabledDefault(channel);
  dependencyMap = tmp5;
  let tmp2Result = tmp2(6116);
  canStartThread = tmp2Result.useCanStartThread(channel);
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
  tmp2Result = tmp2(8144);
  const tmp8 = tmp2Result.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp8;
  let obj = context(7505);
  mediaKeyboardDraftType = context(10428).getMediaKeyboardDraftType(context.target);
  let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
  return canStartThread.useMemo(() => {
    const target = context.target;
    if (target !== constants.CHAT) {
      if (target !== tmp2.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === constants.COMMAND) {
      if (tmp.option.type === context(table[8]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = tmp.option.fileTypes;
      }
    }
    let num = 1;
    if (target === constants.CHAT) {
      num = closure_1_6;
    }
    const obj = { uploadLimit: num, disableWhenReachedLimit: target === constants.CHAT, includedUploadIds: null, fileTypes: null, canPostPolls: null, canStartThreads: null, isAppLauncherEnabled: null, uploadDisabled: null, draftType: null };
    let tmp6;
    if (target !== constants.CHAT) {
      const items = [tmp.option.name];
      tmp6 = items;
    }
    obj[2] = tmp6;
    obj[3] = fileTypes;
    obj[4] = closure_1;
    obj[5] = canStartThread;
    obj[6] = constants;
    obj[7] = table;
    obj[8] = mediaKeyboardDraftType;
    return obj;
  }, items);
};