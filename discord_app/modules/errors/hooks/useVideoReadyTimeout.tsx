// === Module 10572: useVideoReadyTimeout ===

// Module 10572 (useVideoReadyTimeout)
import noop from "noop";

const require = arg1;
let closure_3 = 20 * require("set").Millis.SECOND;
let result = require("start").fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default function useVideoReadyTimeout(streamId) {
  let streamKey;
  let videoSpinnerContext;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const loading = streamId.loading;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let closure_5;
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
              current(outer1_1[6]).videoStreamTimedOut(current, closure_1, closure_6, noop);
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