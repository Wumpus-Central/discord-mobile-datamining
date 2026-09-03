// === Module 7221: isClickstreamEnabled ===

// Module 7221 (isClickstreamEnabled)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import clickstreamExperimentEnabled from "clickstreamExperimentEnabled" /* 7222 */;
import getClickstreamDrainEvent from "getClickstreamDrainEvent" /* 7223 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "createRTCConnection" /* 4554 */;

require = arg1;
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
    const obj = DISCORD_EPOCHDefault;
    closure_8 = clickstreamExperimentEnabled.clickstreamExperimentEnabled();
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
      let obj2 = expandEventPropertiesDefault;
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
let result = require("set").fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

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