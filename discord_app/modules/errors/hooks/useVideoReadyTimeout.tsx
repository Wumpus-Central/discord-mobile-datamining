// === Module 9608: useVideoReadyTimeout ===

// Module 9608 (useVideoReadyTimeout)
import DurationsDefault from "Durations" /* 1090 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 9612 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
let result = size.fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default function useVideoReadyTimeout(streamId) {
  streamId = streamId.streamId;
  const userId = streamId.userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const loading = streamId.loading;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let STREAM;
  let obj = streamKey;
  const timeout = new streamId(userId[2]).Timeout();
  streamKey.useRef(timeout);
  if (videoSpinnerContext !== streamId(userId[3]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== tmp(tmp2[3]).VideoSpinnerContext.REMOTE_STREAM) {
      STREAM = tmp(tmp2[4]).MediaEngineContextTypes.DEFAULT;
    }
    const items = [flag, streamId, loading, STREAM, streamKey, userId];
    const effect = obj.useEffect(() => {
      if (loading) {
        if (!flag) {
          const WindowVisibilityVideoManager = streamId(userId[5]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            current.start(loading, () => {
              streamId(userId[6]).videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
            });
            return () => {
              current.stop();
            };
          }
        }
      }
    }, items);
    obj = { onReady: null };
    const items1 = [userId, STREAM];
    obj.onReady = obj.useCallback(() => {
      const current = ref.current;
      current.stop();
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(STREAM, userId);
    }, items1);
    return obj;
  }
  STREAM = tmp(tmp2[4]).MediaEngineContextTypes.STREAM;
};