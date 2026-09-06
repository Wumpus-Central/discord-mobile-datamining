// === Module 8768: useTrackImpression ===

// Module 8768 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import _modDef1332 from "module_1332" /* 1332 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import uniqueIdDefault from "uniqueId" /* 4764 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

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
      let obj = closure_1_11();
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
  obj = { impression_type: type, location: closure_1_10() };
  const tmpResult = AppAnalyticsUtils;
  const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guild_id));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = tmpResult.expandEventProperties(obj);
  if (flag) {
    React7(null, null);
  } else {
    if (tmp15) {
      AnalyticsUtils2.debugLogEvent(name, result);
      closure_12(name, result);
      const tmpResult2 = AnalyticsUtils2;
    }
    React7(name, result);
    tmp15 = null != name && null != type;
  }
  const tmpResult1 = AppAnalyticsUtils;
}
const ImpressionStore = fn(1243);
({ setCurrentImpression: closure_7, cleanupImpression: closure_8, setDebugTrackedData: closure_9, getLocation: c10, getImpressionStack: closure_11 } = ImpressionStore);
fn(1250);
const AnalyticsUtils = { analyticEventConfigs: fn(1242).AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_12 = AnalyticsUtils.trackMaker(AnalyticsUtils);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(FOR_LATER_POPOUT, arg1) {
  const current = FOR_LATER_POPOUT;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = items;
  noop = undefined;
  noop = noop.useRef(undefined);
  noop.useRef(undefined);
  obj(4992)(() => {
    if (obj.trackOnInitialLoad) {
      const tmp6 = _modDef1332(ref.current, current);
      if (!tmp6) {
        ref.current = current;
      }
      const tmp10 = _modDef1332(ref2.current, current2);
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
      const tmp6 = _modDef1332(ref.current, current);
      if (!tmp6) {
        ref.current = current;
      }
      const tmp10 = _modDef1332(ref2.current, current2);
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
};
export { trackImpression };