import DISCORD_EPOCH from "DISCORD_EPOCH";
import importAllResult from "nameFromUser";
import { View } from "RolePill";
import fetchFingerprint from "fetchFingerprint";
import handleInviteData from "handleInviteData";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleFormInit from "handleFormInit";
import { GuildSettingsSections } from "ME";
import jsxProd from "memoResult1";
import createCacheKey from "createCacheKey";

let closure_15;
let closure_16;
let closure_17;
const require = arg1;
let c4 = importAllResult;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let items = [require("sortByMatchScore").AutocompleterResultTypes.USER];
let obj = { containerInner: null, searchFieldContainer: null, roleList: null };
obj = { paddingHorizontal: require("Themes").space.PX_12, flex: 1 };
obj[0] = obj;
createCacheKey = { paddingVertical: require("Themes").space.PX_12 };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 };
let closure_19 = createCacheKey.createStyles(obj);
let closure_20 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  let dependencyMap;
  ({ start, end } = guild);
  let obj = guild(1480);
  dependencyMap = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    let tmp5 = guildMember.userId === guild.ownerId;
    if (tmp5) {
      tmp5 = id.getId() === guild.ownerId;
    }
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((id) => outer1_15(guildMember(arr[17]), { role: id, guildId: guild.id }, id.id));
    let formatToPlainStringResult;
    if (found.length > 0) {
      user = user.getUser(guildMember.userId);
      let obj1 = guildMember(4445);
      let str = obj1.getNickname(guild.id, undefined, user);
      if (str == null) {
        str = tmp9(4094).getGlobalName(user);
        const tmp9Result = tmp9(4094);
      }
      if (str == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        str = username;
      }
      if (str == null) {
        str = "";
      }
      const mapped1 = found.map((name) => name.name);
      const joined = mapped1.join(", ");
      const intl = tmp2(1236).intl;
      obj = { memberName: null, roleNames: null };
      obj[0] = str;
      obj[1] = joined;
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t["6eGpWx"], obj);
      tmp9 = guildMember;
    }
    obj = { userId: null, guildId: null, accessibilityLabel: null, subLabel: null, disabled: null, onPress: null, arrow: true, start: null, end: null };
    obj[0] = guildMember.userId;
    obj[1] = guild.id;
    obj[2] = formatToPlainStringResult;
    let tmp12Result = null;
    if (mapped.length > 0) {
      obj1 = { style: null, pointerEvents: "none", children: null };
      obj1[0] = tmp.roleList;
      obj1[2] = mapped;
      tmp12Result = tmp12(View, obj1);
    }
    obj[3] = tmp12Result;
    obj[4] = tmp5;
    obj[5] = function onPress() {

    };
    obj[7] = start;
    obj[8] = end;
    return closure_15(guildMember(10354), obj);
  }
  tmp = callback();
});
const memoResult = importAllResult.memo(function GuildSettingsModalMembers(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let guild;
  let guildLoaded;
  let sortedGuildRoles;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStoresArray;
  let first;
  let createGuildRecordFromRust;
  let first1;
  let mergeGuildAvatar;
  let first2;
  let closure_14;
  let first3;
  let memo;
  let c17;
  let first4;
  let callback;
  let obj = guildId(guild[16]);
  navigation = obj.useNavigation();
  const tmp4 = callback();
  let obj1 = guildId(guild[23]);
  let items = [createGuildRecordFromRust, first];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: store.getGuild(guildId), guildLoaded: null != store.getGuild(guildId), sortedGuildRoles: first.getSortedRoles(guildId) }));
  guild = stateFromStoresObject.guild;
  guildLoaded = stateFromStoresObject.guildLoaded;
  sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let obj2 = guildId(guild[23]);
  const items1 = [first1, mergeGuildAvatar];
  const items2 = [guild];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(guild[24]).canPruneGuildMembers(tmp, authStore.getCurrentUser(), first1);
      const obj = guildId(guild[24]);
    }
    return canPruneGuildMembersResult;
  }, items2);
  let obj3 = guildId(guild[23]);
  const items3 = [first2];
  stateFromStores1 = obj3.useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  let obj4 = guildId(guild[23]);
  const items4 = [stateFromStores2];
  const items5 = [guildId, guildLoaded];
  stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let num = stateFromStores2.getMemberCount(guildId);
    if (num == null) {
      num = 0;
    }
    let tmp = num > 0;
    if (tmp) {
      tmp = num <= 10000;
    }
    if (tmp) {
      tmp = guildLoaded;
    }
    return tmp;
  }, items5);
  let obj5 = guildId(guild[23]);
  const items6 = [stateFromStoresArray];
  const items7 = [guildId];
  stateFromStoresArray = obj5.useStateFromStoresArray(items6, () => stateFromStoresArray.getMembers(guildId), items7);
  let tmp11 = guildLoaded(sortedGuildRoles.useState([]), 2);
  first = tmp11[0];
  createGuildRecordFromRust = tmp11[1];
  const tmp13 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp13[0];
  mergeGuildAvatar = tmp13[1];
  const tmp15 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp15[0];
  closure_14 = tmp15[1];
  first3 = guildLoaded(sortedGuildRoles.useState(() => new navigation(guild[13])((arg0) => {
    callback(arg0);
    callback2(false);
  }, first4, 100)), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  memo = sortedGuildRoles.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != fetchFingerprint;
      if (tmp2) {
        tmp2 = !outer1_0(outer1_2[25]).isEveryoneRoleId(closure_0, tmp);
        const obj = outer1_0(outer1_2[25]);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(tmp);
      }
      return tmp2;
    }
    const items = [];
    if (first1) {
      const iter2 = first[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp21 = guildId;
        let tmp22 = guild;
        let tmp20 = nextResult;
        if (nextResult.type === guildId(guild[13]).AutocompleterResultTypes.USER) {
          let tmp23 = stateFromStoresArray;
          let tmp24 = guildId;
          let tmp25 = nextResult;
          let member = stateFromStoresArray.getMember(guildId, tmp20.record.id);
          let tmp27 = member;
          let guildRoleIsFilteredResult = null == member;
          if (!guildRoleIsFilteredResult) {
            let tmp29 = member;
            guildRoleIsFilteredResult = guildRoleIsFiltered(tmp27);
          }
          if (!guildRoleIsFilteredResult) {
            let tmp30 = member;
            let arr = items.push(tmp27);
          }
        }
        continue;
      }
      const tmp14 = first;
    } else {
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult1 = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult1;
        let tmp8 = authStore;
        let guildRoleIsFilteredResult1 = null == authStore.getUser(nextResult1.userId);
        if (!guildRoleIsFilteredResult1) {
          let tmp10 = nextResult1;
          guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp7);
        }
        if (!guildRoleIsFilteredResult1) {
          let tmp11 = nextResult1;
          arr = items.push(tmp7);
        }
        continue;
      }
      const sorted = items.sort((nick, nick2) => {
        let str = nick.nick;
        if (str == null) {
          const user = authStore.getUser(nick.userId);
          let username;
          if (user != null) {
            username = user.username;
          }
          str = username;
        }
        if (str == null) {
          str = "";
        }
        let str2 = nick2.nick;
        if (str2 == null) {
          const user1 = authStore.getUser(nick2.userId);
          let username1;
          if (user1 != null) {
            username1 = user1.username;
          }
          str2 = username1;
        }
        if (str2 == null) {
          str2 = "";
        }
        return str.localeCompare(str2);
      });
      const tmp = stateFromStoresArray;
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  c17 = diff;
  const items9 = [stateFromStores, guild, navigation];
  const effect = sortedGuildRoles.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        if (null != closure_2) {
          let obj = { guild: null, canPrune: null };
          obj[0] = tmp4;
          obj[1] = closure_5;
          let membersManagementActions = outer1_0(outer1_2[27]).getMembersManagementActions(obj);
          const tmp2Result = outer1_0(outer1_2[27]);
        } else {
          membersManagementActions = [];
        }
        obj = {
          items: membersManagementActions,
          children(ref) {
            const merged = Object.assign(ref, Object.create(null));
            const obj = { source: null, accessibilityLabel: null, ref: null };
            obj[0] = callback2(8643);
            const intl = callback(1236).intl;
            obj[1] = intl.string(callback(1236).t.ogxXGq);
            obj[2] = ref.ref;
            const merged1 = Object.assign(merged);
            return callback3(callback(5907).HeaderActionButton, obj);
          }
        };
        return outer1_15(outer1_0(outer1_2[26]).ContextMenu, obj);
      }
    });
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = sortedGuildRoles.useEffect(() => {
    if (stateFromStores2) {
      const obj = navigation(guild[30]);
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = sortedGuildRoles.useEffect(() => {
    if (guildLoaded) {
      let obj = { userFilters: null };
      obj = { guild: null, strict: true };
      obj[0] = guildId;
      obj[0] = obj;
      first3.setOptions(obj);
    }
    return () => {
      if (DISCORD_EPOCH) {
        const obj = outer1_1(outer1_2[31]);
        const role = obj.selectRole(outer1_1(outer1_2[32]).castGuildIdAsEveryoneGuildRoleId(closure_0));
        const obj2 = outer1_1(outer1_2[32]);
      }
      closure_15.destroy();
    };
  }, items11);
  let tmp23 = guildLoaded(sortedGuildRoles.useState(""), 2);
  first4 = tmp23[0];
  callback = tmp23[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  callback = sortedGuildRoles.useCallback((str) => {
    callback2(str);
    const tmp2 = "" !== str.trim();
    authStore(tmp2);
    if (tmp2) {
      callback(true);
      let tmp12;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      first3.search(str, tmp12);
    } else {
      first3.clear();
      callback(false);
    }
  }, items12);
  const effect3 = sortedGuildRoles.useEffect(() => {
    if ("" !== first4.trim()) {
      if (!first2) {
        if (memo.length > 0) {
          const intl2 = guildId(guild[20]).intl;
          const obj = { count: null };
          obj[0] = length;
          let formatToPlainStringResult = intl2.formatToPlainString(guildId(guild[20]).t.ZGVL3g, obj);
        } else {
          const intl = guildId(guild[20]).intl;
          formatToPlainStringResult = intl.string(guildId(guild[20]).t.oB9grQ);
        }
        const AccessibilityAnnouncer = guildId(guild[33]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = sortedGuildRoles.useCallback((guildMember) => {
    const index = guildMember.index;
    return first3(outer1_20, { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === c17 });
  }, items14);
  obj = { style: tmp4.containerInner, children: null };
  obj = { style: tmp4.searchFieldContainer, children: null };
  const callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  obj1 = { size: "md", placeholder: null, onChange: null, isRound: true };
  let intl = guildId(guild[20]).intl;
  obj1[1] = intl.string(guildId(guild[20]).t.pYHobK);
  obj1[2] = callback;
  obj[1] = first3(guildId(guild[34]).SearchField, obj1);
  const items15 = [first3(stateFromStores, obj), ];
  if (0 !== memo.length) {
    obj2 = { keyExtractor: null, data: null, renderItem: null, contentContainerStyle: null };
    obj2[0] = callback2;
    obj2[1] = memo;
    obj2[2] = callback1;
    obj3 = { paddingBottom: null };
    obj3[0] = navigation(guild[22])().bottom + navigation(tmp2[15]).space.PX_16;
    obj2[3] = obj3;
    let tmp32Result = tmp32(tmp(tmp2[35]).FlashList, obj2);
  } else {
    obj4 = { Illustration: null, title: null, body: null };
    obj4[0] = tmp(tmp2[37]).NoResults;
    let intl2 = tmp(tmp2[20]).intl;
    obj4[1] = intl2.string(tmp(tmp2[20]).t.qVQ9ud);
    const intl3 = tmp(tmp2[20]).intl;
    obj4[2] = intl3.string(tmp(tmp2[20]).t.oB9grQ);
    tmp32Result = tmp32(tmp(tmp2[36]).EmptyState, obj4);
  }
  obj5 = { children: null };
  items15[1] = tmp32Result;
  obj[1] = items15;
  const items16 = [memo(stateFromStores, obj), first3(guildId(guild[38]).NavScrim, {})];
  obj5[0] = items16;
  return memo(c17, obj5);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;