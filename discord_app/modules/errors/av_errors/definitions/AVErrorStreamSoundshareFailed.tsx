// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
import reset from "reset";
import getHookError from "getHookError";
import { MediaEngineHookTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = require("../AVError.tsx") /* mapped */.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = require("../AVErrorContext.tsx") /* getVoiceChannelErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(require("../../../go_live/utils/StreamKeyUtils.tsx") /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = require("../../../go_live/utils/StreamKeyUtils.tsx") /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};