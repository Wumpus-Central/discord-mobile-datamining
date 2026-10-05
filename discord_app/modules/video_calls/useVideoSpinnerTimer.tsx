// discord_app/modules/video_calls/useVideoSpinnerTimer.tsx
import VideoSpinnerTimer from "../../lib/VideoSpinnerTimer.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let _location;
      let tmp3;
      let videoSpinnerContext;
      const obj = _location(videoSpinnerContext[3]);
      const cResult = obj.c(10);
      _location = location.location;
      videoSpinnerContext = location.videoSpinnerContext;
      const userId = location.userId;
      const streamId = location.streamId;
      const loading = location.loading;
      const paused = location.paused;
      let closure_5 = tmp2;
      if (cResult[0] !== _location) {
        const fn = function u() {
          const videoSpinnerTimer = new VideoSpinnerTimer.VideoSpinnerTimer(_location);
          return videoSpinnerTimer;
        };
        cResult[0] = _location;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      const first = userId(streamId.useState(tmp3), 1)[0];
      const obj2 = streamId;
      if (cResult[2] === loading) {
        if (cResult[3] === (undefined !== paused && paused)) {
          if (cResult[4] === streamId) {
            if (cResult[5] === userId) {
              if (cResult[6] === videoSpinnerContext) {
                let tmp5;
                let tmp6;
                if (cResult[7] === first) {
                  tmp5 = cResult[8];
                  tmp6 = cResult[9];
                }
                const effect = obj2.useEffect(tmp5, tmp6);
              }
            }
          }
        }
      }
      const fn2 = function _() {
        if (!closure_5) {
          if (loading) {
            first.onSpinnerStarted();
          } else if (null != streamId) {
            first.trackSpinnerDuration(videoSpinnerContext, userId, tmp3);
          }
        }
      };
      const items = [loading, undefined !== paused && paused, streamId, first, videoSpinnerContext, userId];
      cResult[2] = loading;
      cResult[3] = undefined !== paused && paused;
      cResult[4] = streamId;
      cResult[5] = userId;
      cResult[6] = videoSpinnerContext;
      cResult[7] = first;
      cResult[8] = fn2;
      cResult[9] = items;
      tmp6 = items;
      tmp5 = fn2;
    }
  : (userId) => {
      let videoSpinnerContext;
      ({ location: require, videoSpinnerContext } = userId);
      userId = userId.userId;
      const streamId = userId.streamId;
      const loading = userId.loading;
      let flag = userId.paused;
      if (flag === undefined) {
        flag = false;
      }
      const first = userId(
        streamId.useState(() => {
          const videoSpinnerTimer = new VideoSpinnerTimer.VideoSpinnerTimer(require);
          return videoSpinnerTimer;
        }),
        1,
      )[0];
      const items = [loading, flag, streamId, first, videoSpinnerContext, userId];
      const effect = streamId.useEffect(() => {
        if (!flag) {
          if (loading) {
            first.onSpinnerStarted();
          } else if (null != streamId) {
            first.trackSpinnerDuration(videoSpinnerContext, userId, tmp3);
          }
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default tmp2;
