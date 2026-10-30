// === Module 19992: AVErrorStreamSoundshareFailed ===

// Module 19992 (AVErrorStreamSoundshareFailed)
import AVError from "AVError" /* 5942 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6711 */;
import AVErrorContext from "AVErrorContext" /* 19984 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import HookErrorStore from "HookErrorStore" /* 7880 */;

require = fn;
const MediaEngineHookTypes = fn(1072).MediaEngineHookTypes;
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