// === Module 8455: useTrackImpression ===

// Module 8455 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef1342 from "module_1342" /* 1342 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import uniqueIdDefault from "uniqueId" /* 5100 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;

const require = globalThis.__r;

require = fn;
function trackImpression(type) {
  let flag = disableTrack;
  if (disableTrack === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  ({ name, type, properties } = type);
  if (type.type === discord_common_AnalyticsUtils.ImpressionTypes.MODAL) {
    if (null == type.name) {
      closure_1_11();
    }
  }
  if (!flag2) {
    React5(type);
  }
  let guild_id;
  if (properties != null) {
    guild_id = properties.guild_id;
  }
  if (guild_id == null) {
    guild_id = SelectedGuildStore.getGuildId();
  }
  let channel_id;
  if (properties != null) {
    channel_id = properties.channel_id;
  }
  if (channel_id == null) {
    channel_id = SelectedChannelStore.getChannelId(guild_id);
  }
  const tmpResult = AnalyticsUtils2;
  const obj2 = { impression_type: type, location: v65535() };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
  const tmpResult4 = AppAnalyticsUtils;
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = tmpResult.expandEventProperties(obj2);
  if (flag) {
    options(null, null);
  } else {
    if (tmp15) {
      AnalyticsUtils2.debugLogEvent(name, result);
      closure_12(name, result);
      const tmpResult6 = AnalyticsUtils2;
    }
    options(name, result);
    tmp15 = null != name && null != type;
  }
  const tmpResult5 = AppAnalyticsUtils;
}
const ImpressionStore = fn(1253);
({ setCurrentImpression: closure_7, cleanupImpression: closure_8, setDebugTrackedData: closure_9, getLocation: c10, getImpressionStack: closure_11 } = ImpressionStore);
const AnalyticsUtils = fn(1260);
let closure_12 = AnalyticsUtils.trackMaker({ analyticEventConfigs: fn(1252).AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" });
const ReactCompilerGating = fn(558);
let obj2 = { analyticEventConfigs: fn(1252).AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((current, arg1, current2) => {
  _require = current;
  importDefault = current2;
  const cResult = require("c").c(12);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = { disableTrack: false, trackOnInitialLoad: false };
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  noop = noop.useRef(undefined);
  noop.useRef(undefined);
  if (cResult[2] === current2) {
    if (cResult[3] === tmp3.disableTrack) {
      if (cResult[4] === current) {
        let tmp4 = cResult[5];
      }
      SelectedChannelStore = tmp4;
      if (cResult[6] === tmp3.trackOnInitialLoad) {
        if (cResult[7] === tmp4) {
          let tmp5 = cResult[8];
        }
        useMountEffectDefault(tmp5);
        if (cResult[9] === tmp3.trackOnInitialLoad) {
          if (cResult[10] === tmp4) {
            let tmp8 = cResult[11];
          }
          const effect = noop.useEffect(tmp8);
        }
        class L {
          constructor() {
            if (closure_2.trackOnInitialLoad) {
              return;
            } else {
              tmp = closure_5;
              return closure_5();
            }
          }
        }
        cResult[9] = tmp3.trackOnInitialLoad;
        cResult[10] = tmp4;
        cResult[11] = L;
        tmp8 = L;
      }
      const fn2 = function v() {
        if (closure_2.trackOnInitialLoad) {
          return closure_5();
        }
      };
      cResult[6] = tmp3.trackOnInitialLoad;
      cResult[7] = tmp4;
      cResult[8] = fn2;
      tmp5 = fn2;
    }
  }
  const fn = function f() {
    if (!tmp5) {
      ref.current = current;
    }
    tmp5 = _modDef1342(ref.current, current);
    if (!tmp8) {
      ref2.current = current2;
    }
    const obj = {};
    const merged = Object.assign(current);
    obj.sequenceId = uniqueIdDefault("impression_");
    trackImpression(obj, closure_2.disableTrack);
    return () => {
      if (null != obj) {
        closure_2_8(tmp);
      }
    };
  };
  cResult[2] = current2;
  cResult[3] = tmp3.disableTrack;
  cResult[4] = current;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((current, arg1) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = current2;
  noop = undefined;
  noop = noop.useRef(undefined);
  noop.useRef(undefined);
  obj(5597)(() => {
    if (obj.trackOnInitialLoad) {
      const tmp6 = _modDef1342(ref.current, current);
      if (!tmp6) {
        ref.current = current;
      }
      const tmp10 = _modDef1342(ref2.current, current2);
      if (!tmp10) {
        ref2.current = current2;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(current);
        obj.sequenceId = uniqueIdDefault("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
  const effect = noop.useEffect(() => {
    if (!obj.trackOnInitialLoad) {
      const tmp6 = _modDef1342(ref.current, current);
      if (!tmp6) {
        ref.current = current;
      }
      const tmp10 = _modDef1342(ref2.current, current2);
      if (!tmp10) {
        ref2.current = current2;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(current);
        obj.sequenceId = uniqueIdDefault("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
});
export { trackImpression };