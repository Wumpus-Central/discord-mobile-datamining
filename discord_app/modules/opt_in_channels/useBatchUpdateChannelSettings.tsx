// discord_app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../stores/CategoryCollapseStore.tsx";
import closure_5 from "../../stores/UserGuildSettingsStore.tsx";
import { AnalyticsSections } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(arg0) {
  const _require = arg0;
  let obj = initialize;
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getPendingChannelUpdates(closure_0));
  let items1 = [arg0];
  const effect = React.useEffect(() => {
    let obj = stateFromStores(closure_1_2[4]);
    obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
    obj.dispatch(obj);
    return () => {
      let obj = closure_1_1(closure_1_2[4]);
      obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
      obj.dispatch(obj);
    };
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      const result = callback(closure_1_2[6]).updateOptInChannelsBatched(callback, tmp);
      const obj = callback(closure_1_2[6]);
    }
  }, items2);
  obj = {
    onChannelClick: React.useCallback((closure_0, id, id) => {
      const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(closure_0, id);
      let isCollapsedResult = !isChannelOptedInResult;
      if (!isChannelOptedInResult) {
        isCollapsedResult = collapsed.isCollapsed(id);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != id;
      }
      if (isCollapsedResult) {
        let obj = callback(11558);
        obj.categoryExpand(id);
      }
      obj1 = callback(11555);
      if (obj1.hasNotSetUpChannelOptIn(closure_0)) {
        if (id === id) {
          let tmp8Result = tmp8(11555);
          obj = { include: null };
          const _Set2 = Set;
          const items = [id];
          const set = new Set(items);
          obj[0] = set;
          const result = tmp8Result.optIntoAllChannelsForExistingMember(closure_0, obj);
        } else {
          tmp8Result = tmp8(11555);
          obj = { exclude: null };
          const _Set = Set;
          const items1 = [id];
          const set1 = new Set(items1);
          obj[0] = set1;
          const result1 = tmp8Result.optIntoAllChannelsForExistingMember(closure_0, obj);
        }
      } else {
        const tmp8Result1 = tmp8(7113);
        obj1 = { section: null };
        obj1[0] = constants.CHANNEL_BROWSER;
        const result2 = tmp8Result1.updateOptInChannelsImmediate(closure_0, id, !isChannelOptedInResult, obj1);
      }
    }, []),
  };
  return obj;
}
