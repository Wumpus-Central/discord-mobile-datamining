// discord_app/modules/channel_following/useChannelFollowerStats.tsx
import setDefault from "../../utils/Durations.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../../stores/ChannelFollowerStatsStore.tsx";

const require = arg1;
const HOUR = setDefault.Millis.HOUR;
const result = require("set").fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

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
        const channelFollowerStats = first(10889).fetchChannelFollowerStats(closure_0);
        const obj = first(10889);
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