// discord_app/stores/RTCRegionStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import setDefault from "../utils/Durations.tsx";

let obj = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null };
const HOUR = setDefault.Millis.HOUR;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class RTCRegionStore extends DeviceSettingsStore {}
const prototype = RTCRegionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_3 = tmp;
};
prototype["shouldIncludePreferredRegion"] = function shouldIncludePreferredRegion() {
  return null != obj.preferredRegions;
};
prototype["getPreferredRegion"] = function getPreferredRegion() {
  const preferredRegions = obj.preferredRegions;
  let first;
  if (preferredRegions != null) {
    first = preferredRegions[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
prototype["getPreferredRegions"] = function getPreferredRegions() {
  return obj.preferredRegions;
};
prototype["getRegion"] = function getRegion(str) {
  if (null != str) {
    return str.substr(0, str.search(/\d/));
  }
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
prototype["shouldPerformLatencyTest"] = function shouldPerformLatencyTest(mapped) {
  let tmp = null === obj.preferredRegions;
  if (!tmp) {
    obj = applyDefault;
    let lastGeoRankedOrder = obj.lastGeoRankedOrder;
    if (lastGeoRankedOrder == null) {
      lastGeoRankedOrder = [];
    }
    tmp = !obj.isEqual(mapped, lastGeoRankedOrder);
  }
  if (!tmp) {
    const _Date = Date;
    let num = obj.lastTestTimestamp;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    tmp = timestamp - num >= HOUR;
  }
  return tmp;
};
RTCRegionStore.displayName = "RTCRegionStore";
RTCRegionStore.persistKey = "RTCRegionStore";
let items = [
  (preferredRegion) => {
    if (preferredRegion.preferredRegion) {
      const items = [preferredRegion.preferredRegion];
      preferredRegion.preferredRegions = items;
    } else {
      preferredRegion.preferredRegions = null;
    }
    delete tmp[tmp2];
    return preferredRegion;
  },
];
RTCRegionStore.migrations = items;
obj = {
  RTC_LATENCY_TEST_COMPLETE: function handleCompletedRTCLatencyTest(latencyRankedRegions) {
    if (latencyRankedRegions.latencyRankedRegions.length > 0) {
      obj.lastGeoRankedOrder = latencyRankedRegions.geoRankedRegions;
      obj.preferredRegions = latencyRankedRegions.latencyRankedRegions;
    }
    obj.lastTestTimestamp = Date.now();
  },
};
const rTCRegionStore = new RTCRegionStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("stores/RTCRegionStore.tsx");

export default rTCRegionStore;
