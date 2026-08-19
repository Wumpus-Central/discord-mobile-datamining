// === Module 9177: trackImpression ===

// Module 9177 (trackImpression)
import encodeProperties2 from "encodeProperties" /* 503 */;
import expandEventProperties from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import withEqualityFn from "withEqualityFn" /* 699 */;
import "encodeProperties";

require = fn;
function trackImpression(type, disableTrack, arg2) {
  let flag = disableTrack;
  if (disableTrack === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  ({ name, type, properties } = type);
  if (type.type === encodeProperties2.ImpressionTypes.MODAL) {
    if (null == type.name) {
      let obj = callback4();
    }
  }
  if (!flag2) {
    callback(type);
  }
  let guild_id;
  if (properties != null) {
    guild_id = properties.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId.getGuildId();
  }
  let channel_id;
  if (properties != null) {
    channel_id = properties.channel_id;
  }
  if (channel_id == null) {
    channel_id = channelId.getChannelId(guild_id);
  }
  obj = { impression_type: type, location: callback3() };
  const tmpResult = collectGuildAnalyticsMetadata;
  const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guild_id));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = tmpResult.expandEventProperties(obj);
  if (flag) {
    callback2(null, null);
  } else {
    if (tmp15) {
      expandEventProperties.debugLogEvent(name, result);
      callback5(name, result);
      const tmpResult2 = expandEventProperties;
    }
    callback2(name, result);
    tmp15 = null != name && null != type;
  }
  const tmpResult1 = collectGuildAnalyticsMetadata;
}
({ setCurrentImpression: error, cleanupImpression: closure_8, setDebugTrackedData: c9, getLocation: c10, getImpressionStack: unpackModuleId } = withEqualityFn);
const encodeProperties = { analyticEventConfigs: require("expandEventProperties").AnalyticEventConfigs, dispatcher: dispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_12 = encodeProperties.trackMaker(encodeProperties);
let result = require("obj132").fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(arg0) {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = arg2;
  let React;
  React = React.useRef(undefined);
  closure_4 = React.useRef(undefined);
  obj(4761)(() => {
    if (obj.trackOnInitialLoad) {
      const tmp6 = obj(659)(ref.current, obj);
      if (!tmp6) {
        ref.current = tmp5;
      }
      const tmp10 = obj(659)(ref2.current, dependencyMap);
      if (!tmp10) {
        ref2.current = dependencyMap;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(tmp5);
        obj.sequenceId = tmp2(5261)("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_1_8(tmp);
          }
        };
      }
      return fn;
    }
  });
  const effect = React.useEffect(() => {
    if (!obj.trackOnInitialLoad) {
      const tmp6 = obj(659)(ref.current, obj);
      if (!tmp6) {
        ref.current = tmp5;
      }
      const tmp10 = obj(659)(ref2.current, dependencyMap);
      if (!tmp10) {
        ref2.current = dependencyMap;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(tmp5);
        obj.sequenceId = tmp2(5261)("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_1_8(tmp);
          }
        };
      }
      return fn;
    }
  });
};
export { trackImpression };