// discord_app/modules/app_analytics/useTrackImpression.tsx
import encodeProperties2 from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import collectGuildAnalyticsMetadata from "AppAnalyticsUtils.tsx";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../stores/SelectedGuildStore.tsx";
import withEqualityFn from "ImpressionStore.tsx";
import encodeProperties from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";

require = arg1;
function trackImpression(type, arg1, arg2) {
  let flag = arg1;
  if (arg1 === undefined) {
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
  let tmpResult = tmp(698);
  obj = { impression_type: type, location: callback3() };
  tmpResult = tmp(5047);
  const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guild_id));
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channel.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = tmpResult.expandEventProperties(obj);
  if (flag) {
    callback2(null, null);
  } else {
    if (tmp15) {
      tmp(698).debugLogEvent(name, result);
      callback5(name, result);
      const tmpResult2 = tmp(698);
    }
    callback2(name, result);
    tmp15 = null != name && null != type;
  }
}
({ setCurrentImpression: error, cleanupImpression: closure_8, setDebugTrackedData: c9, getLocation: c10, getImpressionStack: unpackModuleId } = withEqualityFn);
encodeProperties = { analyticEventConfigs: require("expandEventProperties").AnalyticEventConfigs, dispatcher: dispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_12 = encodeProperties.trackMaker(encodeProperties);
let result = require("set").fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(arg0) {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = arg2;
  let React;
  closure_4 = undefined;
  React = React.useRef(undefined);
  closure_4 = React.useRef(undefined);
  obj(4766)(() => {
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
        obj.sequenceId = tmp2(5266)("impression_");
        closure_1_13(obj, tmp.disableTrack);
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
        obj.sequenceId = tmp2(5266)("impression_");
        closure_1_13(obj, tmp.disableTrack);
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