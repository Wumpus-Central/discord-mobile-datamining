// === Module 12801: useChannelFollowerStats ===

// Module 12801 (useChannelFollowerStats)
import DurationsDefault from "Durations" /* 1102 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 12198 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelFollowerStatsStore from "ChannelFollowerStatsStore" /* 12802 */;

const require = globalThis.__r;

const require = fn;
const HOUR = DurationsDefault.Millis.HOUR;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelFollowerStats(arg0) {
  _require = arg0;
  const cResult = require("c").c(12);
  const tmp4 = stateFromStores(noop.useState(false), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelFollowerStatsStore];
    cResult[0] = items;
    let first1 = items;
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first1, tmp8, tmp9);
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === first) {
        let tmp11 = cResult[7];
        let tmp12 = cResult[8];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      if (cResult[9] === stateFromStores) {
        if (cResult[10] === first) {
          let tmp14 = cResult[11];
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
  const fn2 = function _() {
    if (null == stateFromStores) {
      if (!first) {
        closure_2(true);
        const channelFollowerStats = ChannelFollowerActionCreatorsDefault.fetchChannelFollowerStats(closure_0);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      closure_2(false);
    }
    tmp11 = null != stateFromStores && first;
  };
  const items3 = [arg0, stateFromStores, first];
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = first;
  cResult[7] = fn2;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = fn2;
  const tmpResult = require("initialize");
}) : (function useChannelFollowerStats(arg0) {
  _require = arg0;
  const tmp = stateFromStores(noop.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [ChannelFollowerStatsStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelFollowerStatsStore.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        closure_2(true);
        const channelFollowerStats = ChannelFollowerActionCreatorsDefault.fetchChannelFollowerStats(closure_0);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      closure_2(false);
    }
    tmp11 = null != stateFromStores && first;
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
});