// === Module 16111: useLiveStageChannels ===

// Module 16111 (useLiveStageChannels)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const mapped = closure_0.map((item) => channel.getChannel(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    let tmp9 = items2;
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
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = require("initialize");
  return require("initialize").useStateFromStoresArray(tmp9, tmp11, tmp12);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = closure_0.map((item) => channel.getChannel(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
  const obj = require("initialize");
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  return require("initialize").useStateFromStoresArray(items2, () => stateFromStoresArray.filter((item) => closure_1_4.can(closure_1_0(closure_1_2[3]).JOIN_VOCAL_CHANNEL_PERMISSIONS, item)), items3);
});
fn(558);
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
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
  return closure_6(initialize.useStateFromStores(tmp4, tmp5, tmp6));
}) : (() => {
  const items = [StageInstanceStore];
  return closure_6(initialize.useStateFromStores(items, () => {
    allStageInstances = allStageInstances.getAllStageInstances();
    return allStageInstances.map((channel_id) => channel_id.channel_id);
  }, []));
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useLiveStageChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return SnowflakeUtilsDefault.keys(StageInstanceStore.getStageInstancesByGuild(closure_0));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return closure_6(require("initialize").useStateFromStoresArray(first, tmp6, tmp7));
}) : ((arg0) => {
  _require = arg0;
  const items = [StageInstanceStore];
  const items1 = [arg0];
  return closure_6(require("initialize").useStateFromStoresArray(items, () => SnowflakeUtilsDefault.keys(StageInstanceStore.getStageInstancesByGuild(closure_0)), items1));
});
export const getAllLiveStageChannels = function getAllLiveStageChannels() {
  const allStageInstances = StageInstanceStore.getAllStageInstances();
  return allStageInstances.reduce((arr, channel_id) => {
    channel = channel.getChannel(channel_id.channel_id);
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    if (canResult) {
      arr = arr.push(channel);
    }
    return arr;
  }, []);
};
export const useAllLiveStageChannels = tmp2;