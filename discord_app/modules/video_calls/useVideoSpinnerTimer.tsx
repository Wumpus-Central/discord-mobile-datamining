// === Module 9514: useVideoSpinnerTimer ===

// Module 9514 (useVideoSpinnerTimer)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useVideoSpinnerTimer.tsx");

export default function useVideoSpinnerTimer(userId) {
  ({ location: require, videoSpinnerContext } = userId);
  userId = userId.userId;
  const streamId = userId.streamId;
  const loading = userId.loading;
  let flag = userId.paused;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  first = userId(streamId.useState(() => {
    const videoSpinnerTimer = new closure_1_0(videoSpinnerContext[2]).VideoSpinnerTimer(closure_0);
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