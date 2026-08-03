// === Module 11790: useMaybeGetSortedBoosts ===

// Module 11790 (useMaybeGetSortedBoosts)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleModifyingAppliedBoostStart from "handleModifyingAppliedBoostStart";
import handleConnectionReset from "handleConnectionReset";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("handleModifyingAppliedBoostStart").fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  expiringBoostsEnabled = _require(expiringBoostsEnabled[6]).useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  let obj = _require(expiringBoostsEnabled[6]);
  const items = [memo];
  const items1 = [arg0];
  const stateFromStoresArray = _require(expiringBoostsEnabled[7]).useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = memo.getAppliedGuildBoostsForGuild(closure_0);
    if (appliedGuildBoostsForGuild == null) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  first = stateFromStoresArray(first.useState(() => Date.now()), 1)[0];
  const items2 = [stateFromStoresArray, arg1, first, expiringBoostsEnabled];
  memo = first.useMemo(() => {
    const mapped = stateFromStoresArray.map((ended) => {
      if (closure_2) {
        let boostLifecycleInfo = outer1_0(outer1_2[8]).getBoostLifecycleInfo(ended, noop);
        const obj2 = outer1_0(outer1_2[8]);
      } else {
        boostLifecycleInfo = { phase: "gave" };
      }
      const boostLifecycleTimestamp = outer1_0(outer1_2[8]).getBoostLifecycleTimestamp(ended, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        let obj = { boost: null, phase: "expiring", sortKey: null, endsAt: null };
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
  let obj2 = _require(expiringBoostsEnabled[7]);
  const items3 = [stateFromStores];
  const items4 = [arg0, memo];
  const stateFromStoresArray1 = _require(expiringBoostsEnabled[7]).useStateFromStoresArray(items3, () => {
    const set = new Set();
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == stateFromStores.getMember(set, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  const items5 = [arg0, stateFromStoresArray1];
  const effect = first.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((id) => outer1_6.requestMember(closure_0, id));
    }
  }, items5);
  const obj3 = _require(expiringBoostsEnabled[7]);
  const items6 = [memo1];
  stateFromStores = _require(expiringBoostsEnabled[7]).useStateFromStores(items6, () => {
    const guild = memo1.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = first.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  const obj4 = _require(expiringBoostsEnabled[7]);
  const items8 = [memo];
  const items9 = [arg0];
  const stateFromStores1 = _require(expiringBoostsEnabled[7]).useStateFromStores(items8, () => null != memo.getLastFetchedAtForGuild(closure_0), items9);
  const items10 = [arg0, stateFromStores, memo1, expiringBoostsEnabled, stateFromStores1];
  const effect1 = first.useEffect(() => {
    let tmp = stateFromStores !== memo1;
    if (!tmp) {
      let tmp2 = expiringBoostsEnabled;
      if (expiringBoostsEnabled) {
        tmp2 = !stateFromStores1;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let obj = callback(expiringBoostsEnabled[9]);
      obj = { includeEnded: null };
      obj[0] = expiringBoostsEnabled;
      const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(callback, obj);
    }
  }, items10);
  return memo;
};
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  const _require = boost;
  let obj = importDefault(11);
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [trackCommunicationDisabled];
  const items1 = [boost];
  const stateFromStoresObject = _require(589).useStateFromStoresObject(items, () => {
    const member = outer1_7.getMember(boost.guildId, boost.userId);
    let nick = outer1_7.getNick(boost.guildId, boost.userId);
    if (nick == null) {
      const user = boost.user;
      let username;
      if (user != null) {
        username = user.username;
      }
      nick = username;
    }
    if (nick == null) {
      const intl = boost(outer1_2[11]).intl;
      nick = intl.string(boost(outer1_2[11]).t["30mdIx"]);
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