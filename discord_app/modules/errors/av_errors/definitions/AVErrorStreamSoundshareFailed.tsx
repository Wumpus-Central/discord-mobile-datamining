// discord_app/modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx
import reset from "reset";
import getHookError from "getHookError";
import { MediaEngineHookTypes } from "ME";
import { isStreamKey } from "../../../go_live/utils/StreamKeyUtils.tsx";
import { mapped } from "../AVError.tsx";
import { getVoiceChannelErrorContext } from "../AVErrorContext.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = mapped /* mapped */.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = getVoiceChannelErrorContext /* getVoiceChannelErrorContext */;
        const merged = Object.assign(obj2.getStreamErrorContext(isStreamKey /* isStreamKey */.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = isStreamKey /* isStreamKey */;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};