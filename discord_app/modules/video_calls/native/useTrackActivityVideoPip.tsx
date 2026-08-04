import noop from "noop";
import initialize from "initialize";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  const _require = arg0;
  const items = [initialize];
  const stateFromStores = _require(647).useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  let tmp2 = stateFromStores(8775)(stateFromStores);
  const dependencyMap = tmp2;
  const tmp3 = stateFromStores(10628)();
  const React = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = React.useEffect(() => {
    let compositeInstanceId;
    compositeInstanceId = noop;
    if (null != noop) {
      if (null != tmp2) {
        if (stateFromStores !== tmp8) {
          let track = outer1_5;
          tmp2 = tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
          track = stateFromStores(tmp2[6]).track;
          const obj = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
          ({ id: obj[0], guild_id: obj[1] } = closure_0);
          ({ applicationId: obj[2], compositeInstanceId } = compositeInstanceId);
          obj[3] = compositeInstanceId;
          track(tmp2, obj);
          const tmp5 = stateFromStores(tmp2[6]);
        }
      }
    }
  }, items1);
};