// discord_app/modules/channel_following/useChannelFollowerStats.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import ChannelFollowerActionCreatorsDefault from "../../actions/ChannelFollowerActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelFollowerStatsStore from "../../stores/ChannelFollowerStatsStore.tsx";

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
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ChannelFollowerStatsStore.getFollowerStatsForChannel(closure_0),
    items1,
  );
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
}
