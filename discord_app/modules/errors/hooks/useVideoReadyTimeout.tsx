// === Module 12449: useVideoReadyTimeout ===

// Module 12449 (useVideoReadyTimeout)
import obj132Default from "obj132" /* 687 */;
import noop from "noop" /* 19 */;

const require = fn;
let closure_3 = 20 * obj132Default.Millis.SECOND;
let result = require("obj132").fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

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
  closure_5 = streamKey.useRef(timeout);
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
              current(userId[6]).videoStreamTimedOut(current, closure_1, closure_6, closure_2);
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
    obj[0] = obj.useCallback(() => {
      const current = ref.current;
      current.stop();
      const result = streamId(userId[6]).clearVideoStreamTimeout(STREAM, userId);
    }, items1);
    return obj;
  }
  STREAM = tmp(tmp2[4]).MediaEngineContextTypes.STREAM;
};