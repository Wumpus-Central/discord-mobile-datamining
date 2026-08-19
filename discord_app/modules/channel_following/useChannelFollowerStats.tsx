// discord_app/modules/channel_following/useChannelFollowerStats.tsx
import obj132Default from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import getFollowerStatsForChannel from "../../stores/ChannelFollowerStatsStore.tsx";

const require = fn;
const HOUR = obj132Default.Millis.HOUR;
const result = require("obj132").fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
  const _require = arg0;
  const tmp = stateFromStores(React.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [closure_5];
  const items1 = [arg0];
  stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_5.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        dependencyMap(true);
        const channelFollowerStats = first(10536).fetchChannelFollowerStats(closure_0);
        const obj = first(10536);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      dependencyMap(false);
    }
    tmp11 = null != stateFromStores && first;
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
};