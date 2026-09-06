// discord_app/modules/video_calls/useVideoSpinnerTimer.tsx
import VideoSpinnerTimer from "../../lib/VideoSpinnerTimer.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

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
  const first = userId(
    streamId.useState(() => {
      const videoSpinnerTimer = new VideoSpinnerTimer.VideoSpinnerTimer(closure_1_0);
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
        first.trackSpinnerDuration(videoSpinnerContext, userId, tmp2);
      }
    }
  }, items);
}
