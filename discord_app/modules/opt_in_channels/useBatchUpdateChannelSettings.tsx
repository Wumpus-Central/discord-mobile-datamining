// discord_app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import OptInChannelsActionCreators from "OptInChannelsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(guildId) {
  _require = guildId;
  let items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    UserGuildSettingsStore.getPendingChannelUpdates(closure_0),
  );
  let items1 = [guildId];
  const effect = noop.useEffect(() => {
    DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    return () => {
      stateFromStores(573).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    };
  }, items1);
  const items2 = [guildId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const result = OptInChannelsActionCreators.updateOptInChannelsBatched(closure_0, tmp);
    }
  }, items2);
  let obj = require("initialize");
  return {
    onChannelClick: noop.useCallback((guildId, channelId, channel) => {
      const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
      let isCollapsedResult = !isChannelOptedInResult;
      if (!isChannelOptedInResult) {
        isCollapsedResult = collapsed.isCollapsed(channel);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != channel;
      }
      if (isCollapsedResult) {
        guildId(11688).categoryExpand(channel);
        const obj = guildId(11688);
      }
      if (obj2.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === channel) {
          const obj3 = { include: null };
          const _Set2 = Set;
          const items = [channelId];
          const set = new Set(items);
          obj3.include = set;
          const result = guildId(11685).optIntoAllChannelsForExistingMember(guildId, obj3);
          const tmp8Result = guildId(11685);
        } else {
          const obj4 = { exclude: null };
          const _Set = Set;
          const items1 = [channelId];
          const set1 = new Set(items1);
          obj4.exclude = set1;
          const result1 = guildId(11685).optIntoAllChannelsForExistingMember(guildId, obj4);
          const tmp8Result3 = guildId(11685);
        }
      } else {
        const tmp8Result4 = guildId(7216);
        const obj5 = { section: constants.CHANNEL_BROWSER };
        const result2 = tmp8Result4.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj5);
      }
      obj2 = guildId(11685);
    }, []),
  };
}
