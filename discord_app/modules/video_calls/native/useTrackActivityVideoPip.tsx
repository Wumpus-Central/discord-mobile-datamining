// discord_app/modules/video_calls/native/useTrackActivityVideoPip.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_2;
      let closure_3;
      let pipEnabledWhileFocusedOnActivityOrStream;
      let tmp4;
      let tmp5;
      _require = arg0;
      const tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(8);
      const tmp = _require;
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
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = stateFromStores(7957)(stateFromStores);
      dependencyMap = tmp8;
      const tmp9 = stateFromStores(9167)();
      react = tmp9;
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp9) {
          if (cResult[4] === stateFromStores) {
            let tmp10;
            let tmp11;
            if (cResult[5] === tmp8) {
              tmp10 = cResult[6];
              tmp11 = cResult[7];
            }
            const effect = react.useEffect(tmp10, tmp11);
          }
        }
      }
      class I {
        constructor() {
          if (null != closure_3) {
            if (null != closure_2) {
              if (stateFromStores !== tmp9) {
                const obj3 = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
                const tmp4 = tmp2 ? AnalyticEvents.ACTIVITY_VIDEO_PIP_SHOWN : AnalyticEvents.ACTIVITY_VIDEO_PIP_HIDDEN;
                ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_0);
                ({ applicationId: obj2.application_id, compositeInstanceId: obj2.activity_session_id } = closure_3);
                const obj = AnalyticsUtilsDefault;
                obj.track(tmp4, obj3);
              }
            }
          }
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
    }
  : (arg0) => {
      let closure_0;
      let closure_2;
      let closure_3;
      let pipEnabledWhileFocusedOnActivityOrStream;
      _require = arg0;
      let obj = require("useStateFromStores");
      const items = [ChannelCallLifecycleStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream(),
      );
      const tmp2 = stateFromStores(7957)(stateFromStores);
      dependencyMap = tmp2;
      const tmp3 = stateFromStores(9167)();
      react = tmp3;
      const items1 = [stateFromStores, tmp2, arg0, tmp3];
      const effect = react.useEffect(() => {
        if (null != closure_3) {
          if (null != closure_2) {
            if (stateFromStores !== tmp9) {
              const obj3 = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
              const tmp4 = tmp2 ? AnalyticEvents.ACTIVITY_VIDEO_PIP_SHOWN : AnalyticEvents.ACTIVITY_VIDEO_PIP_HIDDEN;
              ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_0);
              ({ applicationId: obj2.application_id, compositeInstanceId: obj2.activity_session_id } = closure_3);
              const obj = AnalyticsUtilsDefault;
              obj.track(tmp4, obj3);
            }
          }
        }
      }, items1);
    };
const result = size.fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default tmp2;
