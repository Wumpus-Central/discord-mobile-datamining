// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
import isStreamKey from "../../../go_live/utils/StreamKeyUtils.tsx";
import mapped from "../AVError.tsx";
import getVoiceChannelErrorContext from "../AVErrorContext.tsx";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import getHookError from "../../../../stores/HookErrorStore.tsx";
import { MediaEngineHookTypes } from "../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = mapped.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = getVoiceChannelErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(isStreamKey.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};