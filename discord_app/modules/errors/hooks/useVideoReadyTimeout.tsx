// === Module 9143: useVideoReadyTimeout ===

// Module 9143 (useVideoReadyTimeout)
import DurationsDefault from "Durations" /* 1102 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 9147 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = 20 * DurationsDefault.Millis.SECOND;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((streamId) => {
  const cResult = streamId(userId[3]).c(14);
  streamId = streamId.streamId;
  userId = streamId.userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const loading = streamId.loading;
  const paused = streamId.paused;
  closure_4 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const timeout = new tmp(tmp2[4]).Timeout();
    cResult[0] = timeout;
    let first = timeout;
  } else {
    first = cResult[0];
  }
  streamKey.useRef(first);
  if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== tmp(tmp2[5]).VideoSpinnerContext.REMOTE_STREAM) {
      let STREAM = tmp(tmp2[6]).MediaEngineContextTypes.DEFAULT;
    }
    if (cResult[1] === loading) {
      if (cResult[2] === STREAM) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === streamId) {
            if (cResult[5] === streamKey) {
              if (cResult[6] === userId) {
                let tmp10 = cResult[7];
                let tmp11 = cResult[8];
              }
              const effect = streamKey.useEffect(tmp10, tmp11);
              if (cResult[9] === STREAM) {
                if (cResult[10] === userId) {
                  let tmp13 = cResult[11];
                }
                if (cResult[12] !== tmp13) {
                  const obj3 = { onReady: tmp13 };
                  cResult[12] = tmp13;
                  cResult[13] = obj3;
                  let tmp14 = obj3;
                } else {
                  tmp14 = cResult[13];
                }
                return tmp14;
              }
              const fn2 = function v() {
                const current = ref.current;
                current.stop();
                const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(STREAM, userId);
              };
              cResult[9] = STREAM;
              cResult[10] = userId;
              cResult[11] = fn2;
              tmp13 = fn2;
            }
          }
        }
      }
    }
    const fn = function f() {
      if (loading) {
        if (!closure_4) {
          const WindowVisibilityVideoManager = streamId(userId[7]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            current.start(loading, () => {
              streamId(userId[8]).videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
            });
            return () => {
              current.stop();
            };
          }
        }
      }
    };
    const items = [tmp4, streamId, loading, STREAM, streamKey, userId];
    cResult[1] = loading;
    cResult[2] = STREAM;
    cResult[3] = tmp4;
    cResult[4] = streamId;
    cResult[5] = streamKey;
    cResult[6] = userId;
    cResult[7] = fn;
    cResult[8] = items;
    tmp11 = items;
    tmp10 = fn;
  }
  STREAM = tmp(tmp2[6]).MediaEngineContextTypes.STREAM;
}) : ((streamId) => {
  streamId = streamId.streamId;
  const userId = streamId.userId;
  ({ videoSpinnerContext, streamKey } = streamId);
  const loading = streamId.loading;
  let flag = streamId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let STREAM;
  const timeout = new streamId(userId[4]).Timeout();
  streamKey.useRef(timeout);
  if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.SELF_STREAM) {
    if (videoSpinnerContext !== tmp(tmp2[5]).VideoSpinnerContext.REMOTE_STREAM) {
      STREAM = tmp(tmp2[6]).MediaEngineContextTypes.DEFAULT;
    }
    const items = [flag, streamId, loading, STREAM, streamKey, userId];
    const effect = obj.useEffect(() => {
      if (loading) {
        if (!flag) {
          const WindowVisibilityVideoManager = streamId(userId[7]).WindowVisibilityVideoManager;
          if (WindowVisibilityVideoManager.isIncomingVideoEnabled()) {
            const current = ref.current;
            current.start(loading, () => {
              streamId(userId[8]).videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
            });
            return () => {
              current.stop();
            };
          }
        }
      }
    }, items);
    const obj2 = { onReady: null };
    const items1 = [userId, STREAM];
    obj2.onReady = obj.useCallback(() => {
      const current = ref.current;
      current.stop();
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(STREAM, userId);
    }, items1);
    return obj2;
  }
  STREAM = tmp(tmp2[6]).MediaEngineContextTypes.STREAM;
});