// === Module 19397: AVErrorStreamSoundshareFailed ===

// Module 19397 (AVErrorStreamSoundshareFailed)
import AVError from "AVError" /* 5897 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6645 */;
import AVErrorContext from "AVErrorContext" /* 19389 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import HookErrorStore from "HookErrorStore" /* 7816 */;

require = fn;
const MediaEngineHookTypes = fn(1087).MediaEngineHookTypes;
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