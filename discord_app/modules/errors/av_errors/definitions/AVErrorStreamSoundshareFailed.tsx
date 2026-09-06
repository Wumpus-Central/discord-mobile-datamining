// === Module 17842: AVErrorStreamSoundshareFailed ===

// Module 17842 (AVErrorStreamSoundshareFailed)
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import HookErrorStore from "HookErrorStore" /* 4608 */;

require = fn;
const MediaEngineHookTypes = fn(1074).MediaEngineHookTypes;
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