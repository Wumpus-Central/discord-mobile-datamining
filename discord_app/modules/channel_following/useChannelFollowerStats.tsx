// === Module 11671: useChannelFollowerStats ===

// Module 11671 (useChannelFollowerStats)
import DurationsDefault from "Durations" /* 1090 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11332 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelFollowerStatsStore from "ChannelFollowerStatsStore" /* 11672 */;

const require = fn;
const HOUR = DurationsDefault.Millis.HOUR;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
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
};