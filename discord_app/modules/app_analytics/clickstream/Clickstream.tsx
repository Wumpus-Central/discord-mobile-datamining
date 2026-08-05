// discord_app/modules/app_analytics/clickstream/Clickstream.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import createRTCConnection from "createRTCConnection";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";
import { getClickstreamDrainEvent } from "ClickstreamEvents.tsx";
import { clickstreamExperimentEnabled } from "ClickstreamExperiment.tsx";

const require = arg1;
function isClickstreamEnabled(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const extractTimestampResult = DISCORD_EPOCH.extractTimestamp(store.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    const obj = DISCORD_EPOCH;
    let closure_8 = clickstreamExperimentEnabled.clickstreamExperimentEnabled();
    const obj2 = clickstreamExperimentEnabled;
  }
  return closure_8;
}
function drainClickstream(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (isClickstreamEnabled(flag)) {
    const tmp3 = obj[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp7 = callback;
      let tmp8 = callback(tmp5, 2);
      let first = tmp8[0];
      let tmp10 = importDefault;
      let tmp11 = dependencyMap;
      let obj2 = expandEventProperties;
      let tmp12 = require;
      let obj3 = getClickstreamDrainEvent;
      let trackResult = obj2.track(first, obj3.getClickstreamDrainEvent(first, tmp8[1]));
      continue;
    }
    map.clear();
  } else {
    obj.clear();
  }
}
const map = new Map();
let c7 = -1;
let c8 = false;
let result = require("createRTCConnection").fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(GUILD_VIEWED_CLICKSTREAM, arg1) {
  let obj = DISCORD_EPOCH;
  const extractTimestampResult = obj.extractTimestamp(store.getId());
  if (extractTimestampResult !== c7) {
    drainClickstream(false);
    c7 = extractTimestampResult;
  }
  const result = clickstreamExperimentEnabled.clickstreamExperimentEnabled();
  let c8 = result;
  if (result) {
    if (!map.has(GUILD_VIEWED_CLICKSTREAM)) {
      const result1 = obj3.set(GUILD_VIEWED_CLICKSTREAM, []);
    }
    const value = obj3.get(GUILD_VIEWED_CLICKSTREAM);
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