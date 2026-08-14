// discord_app/modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
import noop from "noop";
import { MediaKeyboardTarget } from "DRAG_HANDLE";
import ME from "ME";
import { useUploadDisabled } from "../useUploadDisabled.tsx";

let c5;
let closure_6;
const require = arg1;
({ ChannelTypesSets: c5, MAX_UPLOAD_COUNT: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  let channel;
  let context;
  ({ channel, context } = arg0);
  let importDefault;
  let dependencyMap;
  let canStartThread;
  let MediaKeyboardTarget;
  let mediaKeyboardDraftType;
  const tmp4 = context(7287).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp4;
  const tmp5 = useUploadDisabled(channel);
  dependencyMap = tmp5;
  let tmp2Result = tmp2(5951);
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
  tmp2Result = tmp2(8407);
  const tmp8 = tmp2Result.useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp8;
  let obj = context(7287);
  mediaKeyboardDraftType = context(10064).getMediaKeyboardDraftType(context.target);
  let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
  return canStartThread.useMemo(() => {
    const target = context.target;
    if (target !== _undefined2.CHAT) {
      if (target !== tmp2.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === _undefined2.COMMAND) {
      if (tmp.option.type === context(_undefined[8]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = tmp.option.fileTypes;
      }
    }
    let num = 1;
    if (target === _undefined2.CHAT) {
      num = outer1_6;
    }
    const obj = { uploadLimit: num, disableWhenReachedLimit: target === _undefined2.CHAT, includedUploadIds: null, fileTypes: null, canPostPolls: null, canStartThreads: null, isAppLauncherEnabled: null, uploadDisabled: null, draftType: null };
    let tmp6;
    if (target !== _undefined2.CHAT) {
      const items = [tmp.option.name];
      tmp6 = items;
    }
    obj[2] = tmp6;
    obj[3] = fileTypes;
    obj[4] = c1;
    obj[5] = canStartThread;
    obj[6] = _undefined2;
    obj[7] = _undefined;
    obj[8] = mediaKeyboardDraftType;
    return obj;
  }, items);
};