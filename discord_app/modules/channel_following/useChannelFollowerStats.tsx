// === Module 11294: useChannelFollowerStats ===

// Module 11294 (useChannelFollowerStats)
import DurationsDefault from "Durations" /* 1102 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11296 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelFollowerStatsStore from "ChannelFollowerStatsStore" /* 11295 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const HOUR = DurationsDefault.Millis.HOUR;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let first1;
  let stateFromStores;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp4 = stateFromStores(react.useState(false), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelFollowerStatsStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return ChannelFollowerStatsStore.getFollowerStatsForChannel(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(first1, tmp8, tmp9);
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStores) {
      let tmp11;
      let tmp12;
      if (cResult[6] === first) {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (cResult[9] === stateFromStores) {
        let tmp14;
        if (cResult[10] === first) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
      const items2 = [stateFromStores, first];
      cResult[9] = stateFromStores;
      cResult[10] = first;
      cResult[11] = items2;
      tmp14 = items2;
    }
  }
  class C {
    constructor() {
      if (null == stateFromStores) {
        if (!first) {
          closure_2(true);
          const obj = ChannelFollowerActionCreatorsDefault;
          const channelFollowerStats = obj.fetchChannelFollowerStats(closure_0);
        }
      } else {
        const _Date = Date;
      }
      const tmp11 = null != stateFromStores && first;
      if (tmp11) {
        closure_2(false);
      }
    }
  }
  const items3 = [arg0, stateFromStores, first];
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = first;
  cResult[7] = C;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = C;
}) : ((arg0) => {
  let closure_0;
  let closure_2;
  let stateFromStores;
  _require = arg0;
  const tmp = stateFromStores(react.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  let obj = require("get initialized");
  const items = [ChannelFollowerStatsStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => ChannelFollowerStatsStore.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        closure_2(true);
        const obj = ChannelFollowerActionCreatorsDefault;
        const channelFollowerStats = obj.fetchChannelFollowerStats(closure_0);
      }
    } else {
      const _Date = Date;
    }
    const tmp11 = null != stateFromStores && first;
    if (tmp11) {
      closure_2(false);
    }
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
});
const result = size.fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default tmp2;