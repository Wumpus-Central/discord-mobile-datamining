// === Module 5057: isClickstreamEnabled ===

// Module 5057 (isClickstreamEnabled)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import clickstreamExperimentEnabled from "clickstreamExperimentEnabled" /* 5058 */;
import getClickstreamDrainEvent from "getClickstreamDrainEvent" /* 5059 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;

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