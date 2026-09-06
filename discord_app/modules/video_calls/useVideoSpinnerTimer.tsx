// === Module 9606: useVideoSpinnerTimer ===

// Module 9606 (useVideoSpinnerTimer)
import VideoSpinnerTimer from "VideoSpinnerTimer" /* 9607 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default function useVideoSpinnerTimer(userId) {
  ({ location: require, videoSpinnerContext } = userId);
  userId = userId.userId;
  const streamId = userId.streamId;
  const loading = userId.loading;
  let flag = userId.paused;
  if (flag === undefined) {
    flag = false;
  }
  const first = userId(streamId.useState(() => {
    const videoSpinnerTimer = new VideoSpinnerTimer.VideoSpinnerTimer(closure_1_0);
    return videoSpinnerTimer;
  }), 1)[0];
  const items = [loading, flag, streamId, first, videoSpinnerContext, userId];
  const effect = streamId.useEffect(() => {
    if (!flag) {
      if (loading) {
        first.onSpinnerStarted();
      } else if (null != streamId) {
        first.trackSpinnerDuration(videoSpinnerContext, userId, tmp2);
      }
    }
  }, items);
};