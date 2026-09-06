// === Module 17842: AVErrorStreamSoundshareFailedDefinition ===

// Module 17842 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4612 */;
import mapped from "mapped" /* 9110 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17834 */;
import closure_2 from "reset" /* 4582 */;
import closure_3 from "getHookError" /* 4608 */;
import { MediaEngineHookTypes } from "ME" /* 1074 */;

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