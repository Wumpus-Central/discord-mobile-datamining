// discord_app/modules/video_calls/native/useTrackActivityVideoPip.tsx
import noop from "../../../../_runtime/00019_noop.js";
import initialize from "ChannelCallLifecycleStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  let tmp2 = stateFromStores(6701)(stateFromStores);
  dependencyMap = tmp2;
  const tmp3 = stateFromStores(11234)();
  const React = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = React.useEffect(() => {
    compositeInstanceId = closure_3;
    if (null != closure_3) {
      if (null != table) {
        if (stateFromStores !== tmp8) {
          const track = stateFromStores(table[6]).track;
          const obj = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
          ({ id: obj[0], guild_id: obj[1] } = closure_0);
          ({ applicationId: obj[2], compositeInstanceId } = compositeInstanceId);
          obj[3] = compositeInstanceId;
          track(tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN, obj);
          const tmp5 = stateFromStores(table[6]);
        }
      }
    }
  }, items1);
};