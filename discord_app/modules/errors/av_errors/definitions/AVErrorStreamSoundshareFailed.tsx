// === Module 17063: AVErrorStreamSoundshareFailedDefinition ===

// Module 17063 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4531 */;
import mapped from "mapped" /* 9668 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17055 */;
import reset from "reset" /* 4652 */;
import getHookError from "getHookError" /* 4563 */;
import { MediaEngineHookTypes } from "ME" /* 676 */;

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