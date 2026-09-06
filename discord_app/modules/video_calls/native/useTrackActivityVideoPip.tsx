// === Module 9655: useTrackActivityPip ===

// Module 9655 (useTrackActivityPip)
import closure_3 from "noop" /* 19 */;
import closure_4 from "initialize" /* 9486 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = _require(563).useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  let tmp2 = stateFromStores(8272)(stateFromStores);
  dependencyMap = tmp2;
  const tmp3 = stateFromStores(9633)();
  const React = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = React.useEffect(() => {
    compositeInstanceId = closure_3;
    if (null != closure_3) {
      if (null != table) {
        if (stateFromStores !== tmp8) {
          let track = closure_1_5;
          track = stateFromStores(table[6]).track;
          const obj = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
          ({ id: obj[0], guild_id: obj[1] } = closure_0);
          ({ applicationId: obj[2], compositeInstanceId } = compositeInstanceId);
          obj[3] = compositeInstanceId;
          track(tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN, obj);
          const tmp2 = tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
          const tmp5 = stateFromStores(table[6]);
        }
      }
    }
  }, items1);
};