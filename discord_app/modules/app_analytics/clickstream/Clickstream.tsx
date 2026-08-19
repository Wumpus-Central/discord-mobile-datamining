// discord_app/modules/app_analytics/clickstream/Clickstream.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import clickstreamExperimentEnabled from "ClickstreamExperiment.tsx";
import getClickstreamDrainEvent from "ClickstreamEvents.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";

require = fn;
function isClickstreamEnabled(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(store.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    closure_8 = clickstreamExperimentEnabled.clickstreamExperimentEnabled();
  }
  return closure_8;
}
function drainClickstream(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isClickstreamEnabled(flag)) {
    const tmp3 = map[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp8 = callback(tmp5, 2);
      let first = tmp8[0];
      let obj2 = expandEventPropertiesDefault;
      let obj3 = getClickstreamDrainEvent;
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
let c8 = false;
let result = require("obj132").fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(GUILD_VIEWED_CLICKSTREAM, arg1) {
  let obj = DISCORD_EPOCHDefault;
  const extractTimestampResult = obj.extractTimestamp(store.getId());
  if (extractTimestampResult !== c7) {
    drainClickstream(false);
    c7 = extractTimestampResult;
  }
  const result = clickstreamExperimentEnabled.clickstreamExperimentEnabled();
  c8 = result;
  if (result) {
    if (!map.has(GUILD_VIEWED_CLICKSTREAM)) {
      const result1 = map.set(GUILD_VIEWED_CLICKSTREAM, []);
    }
    const value = map.get(GUILD_VIEWED_CLICKSTREAM);
    if (value != null) {
      obj = { timestamp: null, rtc_state: null };
      const _Date = Date;
      const date = new Date();
      obj[0] = date;
      obj[1] = state.getState();
      const merged = Object.assign(arg1);
      value.push(obj);
    }
  }
};
export { drainClickstream };