// === Module 16571: GuildSettingsModalMembers ===

// Module 16571 (GuildSettingsModalMembers)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 7265 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import RolePillDefault from "RolePill" /* 10947 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let items = [fn(9835).AutocompleterResultTypes.USER];
fn(4560);
let obj = { containerInner: null, searchFieldContainer: null, roleList: null };
obj = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.containerInner = obj;
const createStyles = { paddingVertical: nativeDefault.space.PX_12 };
obj.searchFieldContainer = createStyles;
obj.roleList = { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 };
let closure_19 = createStyles.createStyles(obj);
let closure_20 = noop.memo((guild) => {
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  let obj = guild(1483);
  dependencyMap = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    let tmp5 = guildMember.userId === guild.ownerId;
    if (tmp5) {
      tmp5 = AuthenticationStore.getId() === guild.ownerId;
    }
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((role) => __initData(RolePillDefault, { role, guildId: guild.id }, role.id));
    let formatToPlainStringResult;
    if (found.length > 0) {
      const user = UserStore.getUser(guildMember.userId);
      let obj1 = guildMember(4712);
      let str = obj1.getNickname(guild.id, undefined, user);
      if (str == null) {
        str = tmp9(4404).getGlobalName(user);
        const tmp9Result = tmp9(4404);
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
      const intl = tmp2(1114).intl;
      obj = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t["6eGpWx"], obj);
      tmp9 = guildMember;
    }
    obj = { userId: guildMember.userId, guildId: guild.id, accessibilityLabel: formatToPlainStringResult, subLabel: null, disabled: null, onPress: null, arrow: true, start: null, end: null };
    let tmp12Result = null;
    if (mapped.length > 0) {
      obj1 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = closure_15(View, obj1);
    }
    obj.subLabel = tmp12Result;
    obj.disabled = tmp5;
    obj.onPress = function onPress() {
      closure_2.push(GuildSettingsSections.MEMBER_EDIT, { userId: guildMember.userId });
    };
    obj.start = start;
    obj.end = end;
    return closure_15(guildMember(10942), obj);
  }
  tmp = closure_19();
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default noop.memo(function GuildSettingsModalMembers(guildId) {
  guildId = guildId.guildId;
  let guild;
  let stateFromStores2;
  let stateFromStoresArray;
  let first;
  closure_10 = undefined;
  let first1;
  closure_12 = undefined;
  let first2;
  closure_19 = undefined;
  let obj = guildId(guild[16]);
  const navigation = obj.useNavigation();
  const tmp4 = closure_19();
  let obj1 = guildId(guild[23]);
  items = [closure_10, first];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) }));
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let obj2 = guildId(guild[23]);
  const items1 = [first1, closure_12];
  const items2 = [guild];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items2);
  let obj3 = guildId(guild[23]);
  const items3 = [first2];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  let obj4 = guildId(guild[23]);
  const items4 = [stateFromStores2];
  const items5 = [guildId, guildLoaded];
  stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let num = GuildMemberCountStore.getMemberCount(guildId);
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
  stateFromStoresArray = obj5.useStateFromStoresArray(items6, () => GuildMemberStore.getMembers(guildId), items7);
  let tmp11 = guildLoaded(sortedGuildRoles.useState([]), 2);
  first = tmp11[0];
  closure_10 = tmp11[1];
  const tmp13 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp13[0];
  closure_12 = tmp13[1];
  const tmp15 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp15[0];
  closure_14 = tmp15[1];
  const first3 = guildLoaded(sortedGuildRoles.useState(() => new sortByMatchScoreDefault((arg0) => {
    closure_1_10(arg0);
    closure_1_14(false);
  }, items, 100)), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const memo = sortedGuildRoles.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        tmp2 = !guildId(guild[25]).isEveryoneRoleId(closure_1_0, stateFromStores1);
        const obj = guildId(guild[25]);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(stateFromStores1);
      }
      return tmp2;
    }
    items = [];
    if (first1) {
      const iter2 = first[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp20 = nextResult;
        if (nextResult.type === sortByMatchScore.AutocompleterResultTypes.USER) {
          let member = GuildMemberStore.getMember(guildId, tmp20.record.id);
          let tmp27 = member;
          let guildRoleIsFilteredResult = null == member;
          if (!guildRoleIsFilteredResult) {
            guildRoleIsFilteredResult = guildRoleIsFiltered(tmp27);
          }
          if (!guildRoleIsFilteredResult) {
            let arr = items.push(tmp27);
          }
        }
        continue;
      }
    } else {
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult1 = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult1;
        let guildRoleIsFilteredResult1 = null == UserStore.getUser(nextResult1.userId);
        if (!guildRoleIsFilteredResult1) {
          guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp7);
        }
        if (!guildRoleIsFilteredResult1) {
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
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  c17 = diff;
  const items9 = [stateFromStores, guild, navigation];
  const effect = sortedGuildRoles.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        if (null != closure_1_2) {
          let obj = { guild: tmp4, canPrune };
          let membersManagementActions = guildId(guild[27]).getMembersManagementActions(obj);
          const tmp2Result = guildId(guild[27]);
        } else {
          membersManagementActions = [];
        }
        obj = {
          items: membersManagementActions,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { source: closure_1_1(9800), accessibilityLabel: null, ref: null };
            const intl = closure_1_0(1114).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1114).t.ogxXGq);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            return closure_1_15(closure_1_0(7377).HeaderActionButton, obj);
          }
        };
        return first3(guildId(guild[26]).ContextMenu, obj);
      }
    });
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = sortedGuildRoles.useEffect(() => {
    if (stateFromStores2) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = sortedGuildRoles.useEffect(() => {
    if (guildLoaded) {
      let obj = { userFilters: null };
      obj = { guild: guildId, strict: true };
      obj.userFilters = obj;
      first3.setOptions(obj);
    }
    return () => {
      if (guildLoaded) {
        const obj = navigation(guild[31]);
        const role = obj.selectRole(navigation(guild[32]).castGuildIdAsEveryoneGuildRoleId(guildId));
        const obj2 = navigation(guild[32]);
      }
      first3.destroy();
    };
  }, items11);
  const tmp23 = guildLoaded(sortedGuildRoles.useState(""), 2);
  const first4 = tmp23[0];
  closure_19 = tmp23[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  const callback = sortedGuildRoles.useCallback((str) => {
    closure_19(str);
    const tmp2 = "" !== str.trim();
    closure_12(tmp2);
    if (tmp2) {
      closure_14(true);
      let tmp12;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      first3.search(str, tmp12);
    } else {
      first3.clear();
      closure_14(false);
    }
  }, items12);
  const effect3 = sortedGuildRoles.useEffect(() => {
    if ("" !== first4.trim()) {
      if (!first2) {
        if (memo.length > 0) {
          const intl2 = util.intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.ZGVL3g, obj);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t.oB9grQ);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = sortedGuildRoles.useCallback((guildMember) => {
    const index = guildMember.index;
    return __initData(closure_20, { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === c17 });
  }, items14);
  obj = { style: tmp4.containerInner, children: null };
  obj = { style: tmp4.searchFieldContainer, children: null };
  const callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  obj1 = { size: "md", placeholder: null, onChange: null, isRound: true };
  let intl = guildId(guild[20]).intl;
  obj1.placeholder = intl.string(guildId(guild[20]).t.pYHobK);
  obj1.onChange = callback;
  obj.children = first3(guildId(guild[34]).SearchField, obj1);
  const items15 = [first3(stateFromStores, obj), ];
  if (0 !== memo.length) {
    obj2 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: null };
    obj3 = { paddingBottom: navigation(guild[22])().bottom + navigation(tmp2[15]).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    let tmp32Result = tmp32(tmp(tmp2[35]).FlashList, obj2);
  } else {
    obj4 = { Illustration: tmp(tmp2[37]).NoResults, title: null, body: null };
    let intl2 = tmp(tmp2[20]).intl;
    obj4.title = intl2.string(tmp(tmp2[20]).t.qVQ9ud);
    const intl3 = tmp(tmp2[20]).intl;
    obj4.body = intl3.string(tmp(tmp2[20]).t.oB9grQ);
    tmp32Result = tmp32(tmp(tmp2[36]).EmptyState, obj4);
  }
  obj5 = { children: null };
  items15[1] = tmp32Result;
  obj.children = items15;
  const items16 = [memo(stateFromStores, obj), first3(guildId(guild[38]).NavScrim, {})];
  obj5.children = items16;
  return memo(c17, obj5);
});