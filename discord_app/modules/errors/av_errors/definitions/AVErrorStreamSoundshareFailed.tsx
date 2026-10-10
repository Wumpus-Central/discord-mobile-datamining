// === Module 18605: AVErrorStreamSoundshareFailed ===

// Module 18605 (AVErrorStreamSoundshareFailed)
import AVError from "AVError" /* 5289 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import AVErrorContext from "AVErrorContext" /* 18597 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import HookErrorStore from "HookErrorStore" /* 7431 */;

require = fn;
const MediaEngineHookTypes = fn(1085).MediaEngineHookTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != HookErrorStore.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: AVError.AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = AVErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
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