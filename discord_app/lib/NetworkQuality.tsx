// discord_app/lib/NetworkQuality.tsx
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import NetworkStore from "../stores/NetworkStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ NetworkConnectionTypes: c3, NetworkConnectionSpeeds: closure_4 } = Constants);
let result = size.fileFinishedImporting("lib/NetworkQuality.tsx");
class NetworkQuality {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj._networkStats = obj._initStats();
    const obj2 = TimeUtils;
    obj._lastSampleTimestamp = obj2.now();
    return obj;
  }
  _initStats() {
    const obj = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
    const values = Object.values(c3);
    const item = values.forEach((item) => {
      obj.connectionTypeBuckets[item] = 0;
    });
    const values2 = Object.values(closure_4);
    const item1 = values2.forEach((item) => {
      obj.effectiveConnectionSpeedBuckets[item] = 0;
    });
    return obj;
  }
  getStats() {
    let num10;
    let num11;
    let num12;
    let num2;
    let num3;
    let num4;
    let num5;
    let num6;
    let num7;
    let num8;
    let num9;
    const _networkStats = this._networkStats;
    let num = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.WIFI]) {
      const _Math = Math;
      num = Math.round(tmp2);
    }
    const obj = {
      duration_connection_type_wifi: num,
      duration_connection_type_cellular: num2,
      duration_connection_type_ethernet: num3,
      duration_connection_type_bluetooth: num4,
      duration_connection_type_other: num5,
      duration_connection_type_unknown: num6,
      duration_connection_type_none: num7,
      duration_effective_connection_speed_2g: num8,
      duration_effective_connection_speed_3g: num9,
      duration_effective_connection_speed_4g: num10,
      duration_effective_connection_speed_5g: num11,
      duration_effective_connection_speed_unknown: num12,
    };
    num2 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.CELLULAR]) {
      const _Math2 = Math;
      num2 = Math.round(tmp4);
    }
    num3 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.ETHERNET]) {
      const _Math3 = Math;
      num3 = Math.round(tmp6);
    }
    num4 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.BLUETOOTH]) {
      const _Math4 = Math;
      num4 = Math.round(tmp8);
    }
    num5 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.OTHER]) {
      const _Math5 = Math;
      num5 = Math.round(tmp10);
    }
    num6 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.UNKNOWN]) {
      const _Math6 = Math;
      num6 = Math.round(tmp12);
    }
    num7 = 0;
    if (null != _networkStats.connectionTypeBuckets[constants.NONE]) {
      const _Math7 = Math;
      num7 = Math.round(tmp14);
    }
    num8 = 0;
    if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.TWO_G]) {
      const _Math8 = Math;
      num8 = Math.round(tmp17);
    }
    num9 = 0;
    if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.THREE_G]) {
      const _Math9 = Math;
      num9 = Math.round(tmp19);
    }
    num10 = 0;
    if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.FOUR_G]) {
      const _Math10 = Math;
      num10 = Math.round(tmp21);
    }
    num11 = 0;
    if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.FIVE_G]) {
      const _Math11 = Math;
      num11 = Math.round(tmp23);
    }
    num12 = 0;
    if (null != _networkStats.effectiveConnectionSpeedBuckets[constants2.UNKNOWN]) {
      const _Math12 = Math;
      num12 = Math.round(tmp25);
    }
    return obj;
  }
  incrementNetworkStats(nowResult) {
    const self = this;
    const result = (nowResult - this._lastSampleTimestamp) / 1000;
    let TWO_G = NetworkStore.getEffectiveConnectionSpeed();
    if (TWO_G === constants2.SLOW_TWO_G) {
      TWO_G = constants2.TWO_G;
    }
    let WIFI = NetworkStore.getType();
    if (WIFI === constants.WIMAX) {
      WIFI = constants.WIFI;
    }
    const effectiveConnectionSpeedBuckets = self._networkStats.effectiveConnectionSpeedBuckets;
    effectiveConnectionSpeedBuckets[TWO_G] = effectiveConnectionSpeedBuckets[TWO_G] + result;
    const connectionTypeBuckets = self._networkStats.connectionTypeBuckets;
    connectionTypeBuckets[WIFI] = connectionTypeBuckets[WIFI] + result;
    self._lastSampleTimestamp = nowResult;
  }
}
const prototype = NetworkQuality.prototype;

export default NetworkQuality;
