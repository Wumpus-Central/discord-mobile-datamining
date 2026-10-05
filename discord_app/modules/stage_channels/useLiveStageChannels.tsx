// === Module 16111: useLiveStageChannels ===

// Module 16111 (useLiveStageChannels)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let channel;
      const mapped = closure_0.map((item) => channel.getChannel(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== stateFromStoresArray) {
    const fn2 = function _() {
      return stateFromStoresArray.filter((item) => closure_1_4.can(closure_1_0(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item));
    };
    const items3 = [stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult2 = require("get initialized");
  return tmpResult2.useStateFromStoresArray(tmp9, tmp11, tmp12);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let channel;
    const mapped = closure_0.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items2, () => stateFromStoresArray.filter((item) => closure_1_4.can(closure_1_0(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    const fn = function n() {
      allStageInstances = allStageInstances.getAllStageInstances();
      return allStageInstances.map((channel_id) => channel_id.channel_id);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return closure_6(tmpResult.useStateFromStores(tmp4, tmp5, tmp6));
}) : (() => {
  const items = [StageInstanceStore];
  const obj = get_initialized;
  return closure_6(obj.useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const obj = SnowflakeUtilsDefault;
      return obj.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return closure_6(tmpResult.useStateFromStoresArray(first, tmp6, tmp7));
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [StageInstanceStore];
  const items1 = [arg0];
  return closure_6(obj.useStateFromStoresArray(items, () => {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
  }, items1));
});
const result = size.fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default tmp3;
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  const allStageInstances = StageInstanceStore.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    channel = channel.getChannel(channel_id.channel_id);
    const canResult = null != channel && PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    if (canResult) {
      arr = arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = tmp2;