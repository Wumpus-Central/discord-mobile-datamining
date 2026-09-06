// discord_app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import OptInChannelsActionCreators from "OptInChannelsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(guildId) {
  _require = guildId;
  let obj = require("initialize");
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    UserGuildSettingsStore.getPendingChannelUpdates(closure_0),
  );
  let items1 = [guildId];
  const effect = noop.useEffect(() => {
    let obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
    obj.dispatch(obj);
    return () => {
      stateFromStores(573);
      const obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
      obj.dispatch(obj);
    };
  }, items1);
  const items2 = [guildId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const result = OptInChannelsActionCreators.updateOptInChannelsBatched(closure_0, tmp);
    }
  }, items2);
  obj = {
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
        let obj = guildId(11558);
        obj.categoryExpand(channel);
      }
      let obj1 = guildId(11555);
      if (obj1.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === channel) {
          let tmp8Result = guildId(11555);
          obj = { include: null };
          const _Set2 = Set;
          const items = [channelId];
          const set = new Set(items);
          obj.include = set;
          const result = tmp8Result.optIntoAllChannelsForExistingMember(guildId, obj);
        } else {
          tmp8Result = guildId(11555);
          obj = { exclude: null };
          const _Set = Set;
          const items1 = [channelId];
          const set1 = new Set(items1);
          obj.exclude = set1;
          const result1 = tmp8Result.optIntoAllChannelsForExistingMember(guildId, obj);
        }
      } else {
        const tmp8Result1 = guildId(7113);
        obj1 = { section: constants.CHANNEL_BROWSER };
        const result2 = tmp8Result1.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj1);
      }
    }, []),
  };
  return obj;
}
