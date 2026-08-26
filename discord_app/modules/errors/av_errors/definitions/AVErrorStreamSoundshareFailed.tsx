// === Module 17273: AVErrorStreamSoundshareFailedDefinition ===

// Module 17273 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4510 */;
import mapped from "mapped" /* 9385 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17265 */;
import closure_2 from "reset" /* 4466 */;
import closure_3 from "getHookError" /* 4537 */;
import { MediaEngineHookTypes } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

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
        const obj3 = isStreamKey;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};