// discord_app/modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import BoostingActionCreators from "../../../../actions/BoostingActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppliedGuildBoostStore from "../../../../stores/AppliedGuildBoostStore.tsx";
import GuildMemberRequesterStore from "../../../../stores/GuildMemberRequesterStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
      if (appliedGuildBoostsForGuild == null) {
        appliedGuildBoostsForGuild = [];
      }
      return appliedGuildBoostsForGuild;
    },
    items1,
  );
  first = first(
    memo.useState(() => Date.now()),
    1,
  )[0];
  const items2 = [stateFromStoresArray, arg1, first];
  memo = memo.useMemo(() => {
    const mapped = stateFromStoresArray.map((boost) => {
      let obj = closure_0(stateFromStoresArray[7]);
      const boostLifecycleInfo = obj.getBoostLifecycleInfo(boost, first);
      const boostLifecycleTimestamp = closure_0(stateFromStoresArray[7]).getBoostLifecycleTimestamp(
        boost,
        boostLifecycleInfo,
      );
      if ("expiring" === boostLifecycleInfo.phase) {
        obj = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
      } else {
        obj = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
      }
      return obj;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, closure_1);
  }, items2);
  let obj = require("initialize");
  const items3 = [memo1];
  const items4 = [arg0, memo];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
    items3,
    () => {
      const set = new Set();
      const item = memo.forEach((boost) => {
        boost = boost.boost;
        if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
          set.add(boost.userId);
        }
      });
      return Array.from(set);
    },
    items4,
  );
  const items5 = [arg0, stateFromStoresArray1];
  const effect = memo.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((item) => stateFromStores.requestMember(closure_1_0, item));
    }
  }, items5);
  const obj2 = require("initialize");
  const items6 = [stateFromStores1];
  const stateFromStores = require("initialize").useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = memo.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  const obj3 = require("initialize");
  const items8 = [stateFromStoresArray1];
  const items9 = [arg0];
  stateFromStores1 = require("initialize").useStateFromStores(
    items8,
    () => null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0),
    items9,
  );
  const items10 = [arg0, stateFromStores, memo1, stateFromStores1];
  const effect1 = memo.useEffect(() => {
    if (!tmp) {
      const appliedGuildBoostsForGuild = BoostingActionCreators.fetchAppliedGuildBoostsForGuild(closure_0, {
        includeEnded: true,
      });
    }
  }, items10);
  return memo;
}
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  _require = boost;
  let obj = SnowflakeUtilsDefault;
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [GuildMemberStore];
  const items1 = [boost];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      const member = GuildMemberStore.getMember(boost.guildId, boost.userId);
      let nick = GuildMemberStore.getNick(boost.guildId, boost.userId);
      if (nick == null) {
        const user = boost.user;
        let username;
        if (user != null) {
          username = user.username;
        }
        nick = username;
      }
      if (nick == null) {
        const intl = util.intl;
        nick = intl.string(util.t["30mdIx"]);
      }
      const obj = { username: nick, roleColor: null, roleColorStrings: null };
      let colorString;
      if (member != null) {
        colorString = member.colorString;
      }
      if (colorString == null) {
        colorString = null;
      }
      obj.roleColor = colorString;
      let colorStrings;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      obj.roleColorStrings = colorStrings;
      return obj;
    },
    items1,
  );
  obj = {
    timestamp: date,
    username: stateFromStoresObject.username,
    roleColor: stateFromStoresObject.roleColor,
    roleColorStrings: stateFromStoresObject.roleColorStrings,
  };
  return obj;
};
