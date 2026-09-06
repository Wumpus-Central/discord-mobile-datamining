// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import HookErrorStore from "../../../../stores/HookErrorStore.tsx";

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
        const merged = Object.assign(
          obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)),
        );
        const items = [obj];
        tmp2 = items;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  },
};
