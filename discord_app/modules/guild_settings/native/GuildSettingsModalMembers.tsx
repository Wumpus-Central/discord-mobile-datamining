// discord_app/modules/guild_settings/native/GuildSettingsModalMembers.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import MemberSafetyPermissionsUtils from "../../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import sortByMatchScore from "../../autocompleter/index.tsx";
import RolePillDefault from "../../../components_native/common/RolePill.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let items = [fn(10182).AutocompleterResultTypes.USER];
const createStyles = fn(4829);
let obj = {
  containerInner: { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 },
  searchFieldContainer: null,
  roleList: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
obj.searchFieldContainer = { paddingVertical: nativeDefault.space.PX_12 };
obj.roleList = { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 };
let closure_19 = createStyles.createStyles(obj);
let closure_20 = noop.memo((guild) => {
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  const tmp = closure_19();
  dependencyMap = guild(1484).useNavigation();
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
      let str = guildMember(4981).getNickname(guild.id, undefined, user);
      if (str == null) {
        str = tmp9(4673).getGlobalName(user);
        const tmp9Result = tmp9(4673);
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
      const intl = tmp2(1115).intl;
      const obj3 = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t["6eGpWx"], obj3);
      const obj2 = guildMember(4981);
      tmp9 = guildMember;
    }
    const obj4 = {
      userId: guildMember.userId,
      guildId: guild.id,
      accessibilityLabel: formatToPlainStringResult,
      subLabel: null,
      disabled: null,
      onPress: null,
      arrow: true,
      start: null,
      end: null,
    };
    let tmp12Result = null;
    if (mapped.length > 0) {
      const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = closure_15(View, obj5);
    }
    obj4.subLabel = tmp12Result;
    obj4.disabled = tmp5;
    obj4.onPress = function onPress() {
      closure_2.push(GuildSettingsSections.MEMBER_EDIT, { userId: guildMember.userId });
    };
    obj4.start = start;
    obj4.end = end;
    return closure_15(guildMember(11295), obj4);
  }
  const obj = guild(1484);
});
let obj4 = { paddingVertical: nativeDefault.space.PX_12 };
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
  const navigation = guildId(guild[16]).useNavigation();
  const tmp4 = closure_19();
  let obj = guildId(guild[16]);
  const tmp5 = navigation;
  items = [closure_10, first];
  const stateFromStoresObject = guildId(guild[23]).useStateFromStoresObject(items, () => ({
    guild: GuildStore.getGuild(guildId),
    guildLoaded: null != GuildStore.getGuild(guildId),
    sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId),
  }));
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let obj2 = guildId(guild[23]);
  const items1 = [first1, closure_12];
  const items2 = [guild];
  const stateFromStores = guildId(guild[23]).useStateFromStores(
    items1,
    () => {
      let canPruneGuildMembersResult = null != guild;
      if (canPruneGuildMembersResult) {
        canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(
          tmp,
          UserStore.getCurrentUser(),
          PermissionStore,
        );
      }
      return canPruneGuildMembersResult;
    },
    items2,
  );
  const obj3 = guildId(guild[23]);
  const items3 = [first2];
  const stateFromStores1 = guildId(guild[23]).useStateFromStores(items3, () => first2.getProps().selectedRoleId);
  const obj4 = guildId(guild[23]);
  const items4 = [stateFromStores2];
  const items5 = [guildId, guildLoaded];
  stateFromStores2 = guildId(guild[23]).useStateFromStores(
    items4,
    () => {
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
    },
    items5,
  );
  const obj5 = guildId(guild[23]);
  const items6 = [stateFromStoresArray];
  const items7 = [guildId];
  stateFromStoresArray = guildId(guild[23]).useStateFromStoresArray(
    items6,
    () => GuildMemberStore.getMembers(guildId),
    items7,
  );
  let tmp11 = guildLoaded(sortedGuildRoles.useState([]), 2);
  first = tmp11[0];
  closure_10 = tmp11[1];
  const tmp13 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first1 = tmp13[0];
  closure_12 = tmp13[1];
  const tmp15 = guildLoaded(sortedGuildRoles.useState(false), 2);
  first2 = tmp15[0];
  closure_14 = tmp15[1];
  const obj6 = guildId(guild[23]);
  const first3 = guildLoaded(
    sortedGuildRoles.useState(
      () =>
        new sortByMatchScoreDefault(
          (arg0) => {
            closure_1_10(arg0);
            closure_1_14(false);
          },
          items,
          100,
        ),
    ),
    2,
  )[0];
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
          let arr3 = items.push(tmp7);
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
        return first3(guildId(guild[26]).ContextMenu, {
          items: membersManagementActions,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { source: closure_1_1(9982), accessibilityLabel: null, ref: null };
            const intl = closure_1_0(1115).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1115).t.ogxXGq);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            return closure_1_15(closure_1_0(7707).HeaderActionButton, obj);
          },
        });
      },
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
      let obj2 = { guild: guildId, strict: true };
      obj.userFilters = obj2;
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
    return __initData(closure_20, {
      guild,
      guildMember: guildMember.item,
      sortedGuildRoles,
      start: 0 === index,
      end: index === c17,
    });
  }, items14);
  const obj7 = { style: tmp4.containerInner, children: null };
  const obj8 = { style: tmp4.searchFieldContainer, children: null };
  const callback2 = sortedGuildRoles.useCallback((userId) => userId.userId, []);
  const obj9 = { size: "md", placeholder: null, onChange: null, round: true };
  let intl = guildId(guild[20]).intl;
  obj9.placeholder = intl.string(guildId(guild[20]).t.pYHobK);
  obj9.onChange = callback;
  obj8.children = first3(guildId(guild[34]).SearchField, obj9);
  const items15 = [first3(stateFromStores, obj8)];
  if (0 !== memo.length) {
    const obj10 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: null };
    const obj11 = { paddingBottom: navigation(guild[22])().bottom + tmp5(tmp2[15]).space.PX_16 };
    obj10.contentContainerStyle = obj11;
    let tmp32Result = tmp32(tmp(tmp2[35]).FlashList, obj10);
  } else {
    const obj12 = { Illustration: tmp(tmp2[37]).NoResults, title: null, body: null };
    let intl2 = tmp(tmp2[20]).intl;
    obj12.title = intl2.string(tmp(tmp2[20]).t.qVQ9ud);
    const intl3 = tmp(tmp2[20]).intl;
    obj12.body = intl3.string(tmp(tmp2[20]).t.oB9grQ);
    tmp32Result = tmp32(tmp(tmp2[36]).EmptyState, obj12);
  }
  const obj13 = { children: null };
  items15[1] = tmp32Result;
  obj7.children = items15;
  const items16 = [memo(stateFromStores, obj7), first3(guildId(guild[38]).NavScrim, {})];
  obj13.children = items16;
  return memo(c17, obj13);
});
