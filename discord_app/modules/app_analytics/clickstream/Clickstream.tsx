// discord_app/modules/app_analytics/clickstream/Clickstream.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ClickstreamExperiment from "ClickstreamExperiment.tsx";
import ClickstreamEvents from "ClickstreamEvents.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function isClickstreamEnabled() {
  if (flag) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    const obj2 = ClickstreamExperiment;
    metroImportAll = obj2.clickstreamExperimentEnabled();
  }
  return metroImportAll;
}
function drainClickstream() {
  let first;
  let tmp10;
  if (isClickstreamEnabled(flag)) {
    const tmp3 = map[Symbol.iterator]();
    while (tmp3 !== undefined) {
      [first, tmp10] = tmp5;
      let tmp13 = AnalyticsUtilsDefault;
      let track = tmp13.track;
      let obj2 = ClickstreamEvents;
      let trackResult = track(first, obj2.getClickstreamDrainEvent(first, tmp10));
      continue;
    }
    map.clear();
  } else {
    map.clear();
  }
}
const map = new Map();
let c7 = -1;
let metroImportAll = false;
const result = size.fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, arg1) {
  let date;
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
  if (extractTimestampResult !== c7) {
    drainClickstream(false);
    c7 = extractTimestampResult;
  }
  const obj2 = ClickstreamExperiment;
  metroImportAll = obj2.clickstreamExperimentEnabled();
  if (metroImportAll) {
    if (!map.has(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM)) {
      const result1 = map.set(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, []);
    }
    const value = map.get(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM);
    if (value != null) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const push = value.push;
      const obj4 = { timestamp: date, rtc_state: RTCConnectionStore.getState() };
      date = new Date();
      const merged = Object.assign(arg1);
      push(obj4);
    }
  }
};
export { drainClickstream };
