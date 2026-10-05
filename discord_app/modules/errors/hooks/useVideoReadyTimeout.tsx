// discord_app/modules/errors/hooks/useVideoReadyTimeout.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import VideoStreamReadyActionCreators from "../VideoStreamReadyActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = 20 * DurationsDefault.Millis.SECOND;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (streamId) {
      let first;
      let streamKey;
      let userId;
      let videoSpinnerContext;
      let obj = streamId(userId[3]);
      const cResult = obj.c(14);
      streamId = streamId.streamId;
      userId = streamId.userId;
      ({ videoSpinnerContext, streamKey } = streamId);
      const loading = streamId.loading;
      const paused = streamId.paused;
      let closure_4 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const self = this;
        const self2 = this;
        const timeout = new tmp(tmp2[4]).Timeout();
        cResult[0] = timeout;
        first = timeout;
      } else {
        first = cResult[0];
      }
      const ref = streamKey.useRef(first);
      const obj2 = streamKey;
      if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.SELF_STREAM) {
        let STREAM;
        if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.REMOTE_STREAM) {
          STREAM = tmp(tmp2[6]).MediaEngineContextTypes.DEFAULT;
        }
        if (cResult[1] === loading) {
          if (cResult[2] === STREAM) {
            if (cResult[3] === (undefined !== paused && paused)) {
              if (cResult[4] === streamId) {
                if (cResult[5] === streamKey) {
                  let tmp8;
                  let tmp9;
                  if (cResult[6] === userId) {
                    tmp8 = cResult[7];
                    tmp9 = cResult[8];
                  }
                  const effect = obj2.useEffect(tmp8, tmp9);
                  if (cResult[9] === STREAM) {
                    let tmp11;
                    let tmp12;
                    if (cResult[10] === userId) {
                      tmp11 = cResult[11];
                    }
                    if (cResult[12] !== tmp11) {
                      const obj3 = { onReady: tmp11 };
                      cResult[12] = tmp11;
                      cResult[13] = obj3;
                      tmp12 = obj3;
                    } else {
                      tmp12 = cResult[13];
                    }
                    return tmp12;
                  }
                  const fn2 = function v() {
                    const current = ref.current;
                    current.stop();
                    const obj = VideoStreamReadyActionCreators;
                    const result = obj.clearVideoStreamTimeout(STREAM, userId);
                  };
                  cResult[9] = STREAM;
                  cResult[10] = userId;
                  cResult[11] = fn2;
                  tmp11 = fn2;
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
                  const obj = streamId(userId[8]);
                  obj.videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
                });
                return () => {
                  current.stop();
                };
              }
            }
          }
        };
        const items = [undefined !== paused && paused, streamId, loading, STREAM, streamKey, userId];
        cResult[1] = loading;
        cResult[2] = STREAM;
        cResult[3] = undefined !== paused && paused;
        cResult[4] = streamId;
        cResult[5] = streamKey;
        cResult[6] = userId;
        cResult[7] = fn;
        cResult[8] = items;
        tmp9 = items;
        tmp8 = fn;
      }
      STREAM = tmp(tmp2[6]).MediaEngineContextTypes.STREAM;
    }
  : (streamId) => {
      let items1;
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
      let STREAM;
      let obj = streamKey;
      const useRef = streamKey.useRef;
      const timeout = new streamId(userId[4]).Timeout();
      const ref = useRef(timeout);
      if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.SELF_STREAM) {
        if (videoSpinnerContext !== streamId(userId[5]).VideoSpinnerContext.REMOTE_STREAM) {
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
                  const obj = streamId(userId[8]);
                  obj.videoStreamTimedOut(current, closure_1_1, STREAM, streamKey);
                });
                return () => {
                  current.stop();
                };
              }
            }
          }
        }, items);
        const obj2 = {
          onReady: obj.useCallback(() => {
            const current = ref.current;
            current.stop();
            const obj = VideoStreamReadyActionCreators;
            const result = obj.clearVideoStreamTimeout(STREAM, userId);
          }, items1),
        };
        items1 = [userId, STREAM];
        return obj2;
      }
      STREAM = tmp(tmp2[6]).MediaEngineContextTypes.STREAM;
    };
let result = size.fileFinishedImporting("modules/errors/hooks/useVideoReadyTimeout.tsx");

export default tmp2;
