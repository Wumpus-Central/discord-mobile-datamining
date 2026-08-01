// === Module 9892: useChannelFollowerStats ===

// Module 9892 (useChannelFollowerStats)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getFollowerStatsForChannel from "getFollowerStatsForChannel";

const require = arg1;
const HOUR = require("set").Millis.HOUR;
const result = require("getFollowerStatsForChannel").fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
  const _require = arg0;
  const tmp = stateFromStores(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [getFollowerStatsForChannel];
  const items1 = [arg0];
  stateFromStores = _require(589).useStateFromStores(items, () => outer1_5.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        dependencyMap(true);
        const channelFollowerStats = first(9894).fetchChannelFollowerStats(closure_0);
        const obj = first(9894);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      dependencyMap(false);
    }
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
};