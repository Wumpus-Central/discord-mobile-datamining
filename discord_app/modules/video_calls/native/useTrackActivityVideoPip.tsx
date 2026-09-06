// === Module 9655: useTrackActivityVideoPip ===

// Module 9655 (useTrackActivityVideoPip)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9486 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  _require = arg0;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  let tmp2 = stateFromStores(8272)(stateFromStores);
  dependencyMap = tmp2;
  const tmp3 = stateFromStores(9633)();
  noop = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = noop.useEffect(() => {
    compositeInstanceId = closure_3;
    if (null != closure_3) {
      if (null != closure_2) {
        if (stateFromStores !== tmp8) {
          const track = AnalyticsUtilsDefault.track;
          const obj = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
          ({ id: obj.channel_id, guild_id: obj.guild_id } = closure_0);
          ({ applicationId: obj.application_id, compositeInstanceId } = compositeInstanceId);
          obj.activity_session_id = compositeInstanceId;
          track(tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN, obj);
          const tmp2 = tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
        }
      }
    }
  }, items1);
};