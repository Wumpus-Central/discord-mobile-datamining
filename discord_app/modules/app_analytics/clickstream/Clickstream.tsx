// discord_app/modules/app_analytics/clickstream/Clickstream.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ClickstreamExperiment from "ClickstreamExperiment.tsx";
import ClickstreamEvents from "ClickstreamEvents.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
function isClickstreamEnabled() {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(AuthenticationStore.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    result = ClickstreamExperiment.clickstreamExperimentEnabled();
  }
  return result;
}
function drainClickstream() {
  if (flag === undefined) {
    flag = true;
  }
  if (isClickstreamEnabled(flag)) {
    const tmp3 = map[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp8 = _slicedToArray(tmp5, 2);
      let first = tmp8[0];
      let obj2 = AnalyticsUtilsDefault;
      let obj3 = ClickstreamEvents;
      let trackResult = obj2.track(first, obj3.getClickstreamDrainEvent(first, tmp8[1]));
      continue;
    }
    map.clear();
  } else {
    map.clear();
  }
}
const map = new Map();
let c7 = -1;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, arg1) {
  let obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
  if (extractTimestampResult !== c7) {
    drainClickstream(false);
    c7 = extractTimestampResult;
  }
  result = ClickstreamExperiment.clickstreamExperimentEnabled();
  if (result) {
    if (!map.has(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM)) {
      const result1 = map.set(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, []);
    }
    value = map.get(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM);
    if (value != null) {
      obj = { timestamp: null, rtc_state: null };
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      obj.rtc_state = RTCConnectionStore.getState();
      const merged = Object.assign(arg1);
      value.push(obj);
    }
  }
};
export { drainClickstream };
