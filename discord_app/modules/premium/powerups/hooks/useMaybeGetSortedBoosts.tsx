// discord_app/modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../stores/AppliedGuildBoostStore.tsx";
import closure_6 from "../../../../stores/GuildMemberRequesterStore.tsx";
import closure_7 from "../../../../stores/GuildMemberStore.tsx";
import closure_8 from "../../../../stores/GuildStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = _require(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = stateFromStoresArray1.getAppliedGuildBoostsForGuild(closure_0);
    if (appliedGuildBoostsForGuild == null) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  first = first(memo.useState(() => Date.now()), 1)[0];
  const items2 = [stateFromStoresArray, arg1, first];
  memo = memo.useMemo(() => {
    const mapped = stateFromStoresArray.map((ended) => {
      let obj = closure_1_0(closure_1_2[7]);
      const boostLifecycleInfo = obj.getBoostLifecycleInfo(ended, closure_3);
      const boostLifecycleTimestamp = closure_1_0(closure_1_2[7]).getBoostLifecycleTimestamp(ended, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        obj = { boost: null, phase: "expiring", sortKey: null, endsAt: null };
        obj[0] = ended;
        obj[2] = boostLifecycleTimestamp;
        obj[3] = boostLifecycleInfo.endsAt;
      } else {
        obj = { boost: null, phase: null, sortKey: null };
        obj[0] = ended;
        obj[1] = boostLifecycleInfo.phase;
        obj[2] = boostLifecycleTimestamp;
      }
      return obj;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, closure_1);
  }, items2);
  let obj = _require(stateFromStoresArray[6]);
  const items3 = [memo1];
  const items4 = [arg0, memo];
  stateFromStoresArray1 = _require(stateFromStoresArray[6]).useStateFromStoresArray(items3, () => {
    const set = new Set();
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == memo1.getMember(set, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  const items5 = [arg0, stateFromStoresArray1];
  const effect = memo.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((id) => closure_1_6.requestMember(closure_0, id));
    }
  }, items5);
  const obj2 = _require(stateFromStoresArray[6]);
  const items6 = [stateFromStores1];
  const stateFromStores = _require(stateFromStoresArray[6]).useStateFromStores(items6, () => {
    const guild = stateFromStores1.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = memo.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  const obj3 = _require(stateFromStoresArray[6]);
  const items8 = [stateFromStoresArray1];
  const items9 = [arg0];
  stateFromStores1 = _require(stateFromStoresArray[6]).useStateFromStores(items8, () => null != stateFromStoresArray1.getLastFetchedAtForGuild(closure_0), items9);
  const items10 = [arg0, stateFromStores, memo1, stateFromStores1];
  const effect1 = memo.useEffect(() => {
    if (!tmp) {
      const appliedGuildBoostsForGuild = callback(stateFromStoresArray[8]).fetchAppliedGuildBoostsForGuild(callback, { includeEnded: true });
      const obj = callback(stateFromStoresArray[8]);
    }
  }, items10);
  return memo;
};
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  const _require = boost;
  let obj = DISCORD_EPOCHDefault;
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [closure_7];
  const items1 = [boost];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items, () => {
    const member = closure_1_7.getMember(boost.guildId, boost.userId);
    let nick = closure_1_7.getNick(boost.guildId, boost.userId);
    if (nick == null) {
      const user = boost.user;
      let username;
      if (user != null) {
        username = user.username;
      }
      nick = username;
    }
    if (nick == null) {
      const intl = boost(closure_1_2[10]).intl;
      nick = intl.string(boost(closure_1_2[10]).t["30mdIx"]);
    }
    const obj = { username: nick, roleColor: null, roleColorStrings: null };
    let colorString;
    if (member != null) {
      colorString = member.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    obj[1] = colorString;
    let colorStrings;
    if (member != null) {
      colorStrings = member.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    obj[2] = colorStrings;
    return obj;
  }, items1);
  obj = { timestamp: date, username: stateFromStoresObject.username, roleColor: stateFromStoresObject.roleColor, roleColorStrings: stateFromStoresObject.roleColorStrings };
  return obj;
};