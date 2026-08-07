// discord_app/modules/channel_following/useChannelFollowerStats.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getFollowerStatsForChannel from "getFollowerStatsForChannel";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

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
  stateFromStores = _initialize.useStateFromStores(items, () => outer1_5.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        dependencyMap(true);
        const channelFollowerStats = first(10155).fetchChannelFollowerStats(closure_0);
        const obj = first(10155);
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