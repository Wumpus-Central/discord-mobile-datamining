// discord_app/modules/video_calls/native/useTrackActivityVideoPip.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore.tsx";

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelCallLifecycleStore];
        const fn = function _() {
          return pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
      const tmp8 = stateFromStores(7946)(stateFromStores);
      dependencyMap = tmp8;
      const tmp9 = stateFromStores(9132)();
      noop = tmp9;
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp9) {
          if (cResult[4] === stateFromStores) {
            if (cResult[5] === tmp8) {
              let tmp10 = cResult[6];
              let tmp11 = cResult[7];
            }
            const effect = noop.useEffect(tmp10, tmp11);
          }
        }
      }
      class I {
        constructor() {
          compositeInstanceId = closure_3;
          if (null != closure_3) {
            if (null != closure_2) {
              if (closure_1 !== tmp8) {
                track = AnalyticEvents;
                tmp3 = closure_1;
                tmp4 = closure_2;
                tmp2 = tmp ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
                tmp5 = closure_1(closure_2[8]);
                track = tmp5.track;
                obj = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
                tmp6 = closure_0;
                ({ id: obj.channel_id, guild_id: obj.guild_id } = closure_0);
                ({ applicationId: obj.application_id, compositeInstanceId } = compositeInstanceId);
                obj.activity_session_id = compositeInstanceId;
                trackResult = track(tmp2, obj);
              }
            }
          }
          return;
        }
      }
      const items1 = [stateFromStores, tmp8, arg0, tmp9];
      cResult[2] = arg0;
      cResult[3] = tmp9;
      cResult[4] = stateFromStores;
      cResult[5] = tmp8;
      cResult[6] = I;
      cResult[7] = items1;
      tmp11 = items1;
      tmp10 = I;
      const tmpResult = require("useStateFromStores");
    }
  : (arg0) => {
      _require = arg0;
      const items = [ChannelCallLifecycleStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream(),
      );
      let tmp2 = stateFromStores(7946)(stateFromStores);
      dependencyMap = tmp2;
      const tmp3 = stateFromStores(9132)();
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
