// discord_app/modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
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
      let obj = outer1_0(outer1_2[7]);
      const boostLifecycleInfo = obj.getBoostLifecycleInfo(ended, _slicedToArray);
      const boostLifecycleTimestamp = outer1_0(outer1_2[7]).getBoostLifecycleTimestamp(ended, boostLifecycleInfo);
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
      const item = stateFromStoresArray1.forEach((id) => outer1_6.requestMember(closure_0, id));
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
  let obj = require("../../../../utils/SnowflakeUtils.tsx");
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [trackCommunicationDisabled];
  const items1 = [boost];
  const stateFromStoresObject = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
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
      const intl = boost(outer1_2[10]).intl;
      nick = intl.string(boost(outer1_2[10]).t["30mdIx"]);
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