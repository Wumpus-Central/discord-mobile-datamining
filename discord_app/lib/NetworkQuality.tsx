// discord_app/lib/NetworkQuality.tsx
import handleConnectionInfoChange from "handleConnectionInfoChange";
import ME from "ME";

let c3;
let c4;
const require = arg1;
({ NetworkConnectionTypes: c3, NetworkConnectionSpeeds: c4 } = ME);
let result = require("sleep").fileFinishedImporting("lib/NetworkQuality.tsx");
class NetworkQuality {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._networkStats = obj._initStats();
    obj2 = require("sleep");
    obj._lastSampleTimestamp = obj2.now();
    return obj;
  }
}
const prototype = NetworkQuality.prototype;
prototype["_initStats"] = function _initStats() {
  const obj = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
  let values = Object.values(closure_3);
  const item = values.forEach((arg0) => {
    obj.connectionTypeBuckets[arg0] = 0;
  });
  values = Object.values(closure_4);
  const item1 = values.forEach((arg0) => {
    obj.effectiveConnectionSpeedBuckets[arg0] = 0;
  });
  return obj;
};
prototype["getStats"] = function getStats() {
  const _networkStats = this._networkStats;
  let num = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.WIFI]) {
    const _Math = Math;
    num = Math.round(tmp2);
  }
  const obj = { duration_connection_type_wifi: num, duration_connection_type_cellular: null, duration_connection_type_ethernet: null, duration_connection_type_bluetooth: null, duration_connection_type_other: null, duration_connection_type_unknown: null, duration_connection_type_none: null, duration_effective_connection_speed_2g: null, duration_effective_connection_speed_3g: null, duration_effective_connection_speed_4g: null, duration_effective_connection_speed_5g: null, duration_effective_connection_speed_unknown: null };
  let num2 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.CELLULAR]) {
    const _Math2 = Math;
    num2 = Math.round(tmp4);
  }
  obj[1] = num2;
  let num3 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.ETHERNET]) {
    const _Math3 = Math;
    num3 = Math.round(tmp6);
  }
  obj[2] = num3;
  let num4 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.BLUETOOTH]) {
    const _Math4 = Math;
    num4 = Math.round(tmp8);
  }
  obj[3] = num4;
  let num5 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.OTHER]) {
    const _Math5 = Math;
    num5 = Math.round(tmp10);
  }
  obj[4] = num5;
  let num6 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.UNKNOWN]) {
    const _Math6 = Math;
    num6 = Math.round(tmp12);
  }
  obj[5] = num6;
  let num7 = 0;
  if (null != _networkStats.connectionTypeBuckets[constants.NONE]) {
    const _Math7 = Math;
    num7 = Math.round(tmp14);
  }
  obj[6] = num7;
  let num8 = 0;
  if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.TWO_G]) {
    const _Math8 = Math;
    num8 = Math.round(tmp17);
  }
  obj[7] = num8;
  let num9 = 0;
  if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.THREE_G]) {
    const _Math9 = Math;
    num9 = Math.round(tmp19);
  }
  obj[8] = num9;
  let num10 = 0;
  if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.FOUR_G]) {
    const _Math10 = Math;
    num10 = Math.round(tmp21);
  }
  obj[9] = num10;
  let num11 = 0;
  if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.FIVE_G]) {
    const _Math11 = Math;
    num11 = Math.round(tmp23);
  }
  obj[10] = num11;
  let num12 = 0;
  if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.UNKNOWN]) {
    const _Math12 = Math;
    num12 = Math.round(tmp25);
  }
  obj[11] = num12;
  return obj;
};
prototype["incrementNetworkStats"] = function incrementNetworkStats(nowResult) {
  const self = this;
  const result = (nowResult - this._lastSampleTimestamp) / 1000;
  let TWO_G = effectiveConnectionSpeed.getEffectiveConnectionSpeed();
  if (TWO_G === constants2.SLOW_TWO_G) {
    TWO_G = constants2.TWO_G;
  }
  let WIFI = effectiveConnectionSpeed.getType();
  if (WIFI === constants.WIMAX) {
    WIFI = constants.WIFI;
  }
  const effectiveConnectionSpeedBuckets = self._networkStats.effectiveConnectionSpeedBuckets;
  effectiveConnectionSpeedBuckets[TWO_G] = effectiveConnectionSpeedBuckets[TWO_G] + result;
  const connectionTypeBuckets = self._networkStats.connectionTypeBuckets;
  connectionTypeBuckets[WIFI] = connectionTypeBuckets[WIFI] + result;
  self._lastSampleTimestamp = nowResult;
};

export default NetworkQuality;