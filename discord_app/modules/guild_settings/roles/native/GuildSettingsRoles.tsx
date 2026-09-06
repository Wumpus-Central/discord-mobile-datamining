// discord_app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GuildRoleMemberActionCreatorsAll from "../../GuildRoleMemberActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../../GuildSettingsModalChannelsActionCreators.tsx";
import SortableListViewDefault from "../../../../components_native/common/SortableListView.tsx";
import GuildSettingsRolesManager from "GuildSettingsRolesManager.tsx";
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators.tsx";
import GuildSettingsRolesUtils from "../GuildSettingsRolesUtils.tsx";
import actions_GuildActionCreators from "../../../../actions/native/GuildActionCreators.tsx";
import GuildSettingsModalRolesActionCreatorsDefault from "../GuildSettingsModalRolesActionCreators.tsx";
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildRoleMemberCountStore from "../../GuildRoleMemberCountStore.tsx";
import GuildSettingsModalRolesStore from "../GuildSettingsModalRolesStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const isEveryoneRole = fn(2016).isEveryoneRole;
let closure_16 = fn(17605).GuildSettingsRoleEditSections;
const Constants = fn(1074);
({
  GuildSettingsSections: closure_17,
  AnalyticEvents: closure_18,
  AnalyticsSections: closure_19,
  Permissions: closure_20,
  Fonts,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1 },
  scrollContainer: { paddingHorizontal: 12 },
  searchWrapper: null,
  subheaderContainer: null,
  emptySubheaderContainer: null,
  emptyIlloContainer: null,
  emptyIllo: null,
  emptyIlloLarge: null,
  emptySubheaderBody: null,
  subheader: null,
  subheaderBody: null,
  subheaderButton: null,
  subheaderDescription: null,
  divider: null,
  everyoneWrapper: null,
  edittingRolesHeader: null,
  rolesHeader: null,
  reorderButton: null,
  reorderButtonText: null,
  rolesBody: null,
  emptyRolesIcon: null,
};
createStyles = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.searchWrapper = createStyles;
createStyles.subheaderContainer = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.emptySubheaderContainer = { paddingBottom: 16, alignItems: "center" };
let obj1 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.emptyIlloContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  width: "100%",
  flex: 1,
  alignItems: "center",
};
createStyles.emptyIllo = { marginTop: 28, width: "100%" };
createStyles.emptyIlloLarge = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
createStyles.emptySubheaderBody = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj3 = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.marginTop = 16;
createStyles.subheader = obj3;
createStyles.subheaderBody = { marginTop: 8, textAlign: "center" };
createStyles.subheaderButton = { flexGrow: 0, marginTop: 16 };
createStyles.subheaderDescription = { lineHeight: 18, textAlign: "center" };
createStyles.divider = { height: StyleSheet.hairlineWidth, width: "100%" };
createStyles.everyoneWrapper = { marginTop: 2, marginBottom: 24 };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
createStyles.edittingRolesHeader = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
createStyles.rolesHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createStyles.reorderButton = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createStyles.reorderButtonText = { marginLeft: 8 };
createStyles.rolesBody = { padding: 16, paddingTop: 8, lineHeight: 18 };
createStyles.emptyRolesIcon = { opacity: 0.4 };
let closure_24 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  guildId = guildId.guildId;
  let guild;
  let memberCount;
  let sortedGuildRoles;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let sorting;
  closure_14 = undefined;
  c15 = undefined;
  closure_22 = undefined;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let tmp = callback3();
  importDefault = tmp;
  let obj = guild;
  const ref = guild.useRef(null);
  let obj1 = guildId(1483);
  const navigation = obj1.useNavigation();
  const tmp7 = useIsWindowLargeDefault();
  dependencyMap = tmp7;
  let obj2 = guildId(504);
  let items = [memberCount];
  const stateFromStores = obj2.useStateFromStores(items, () => memberCount.theme);
  let obj3 = guildId(504);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, c15, closure_14, rolesOrder];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    guild = GuildStore.getGuild(guildId);
    const id = AuthenticationStore.getId();
    const obj = {
      guild,
      guildEveryoneRole: null,
      memberCount: null,
      roleMemberCount: null,
      sortedGuildRoles: null,
      rolesOrder: null,
      currentUserId: null,
      highestRole: null,
    };
    let everyoneRole = null;
    if (null != guild) {
      everyoneRole = GuildRoleStore.getEveryoneRole(guild);
    }
    obj.guildEveryoneRole = everyoneRole;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    let num = GuildMemberCountStore.getMemberCount(id1);
    if (num == null) {
      num = 0;
    }
    obj.memberCount = num;
    let id2;
    if (guild != null) {
      id2 = guild.id;
    }
    obj.roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(id2);
    obj.sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
    obj.rolesOrder = GuildSettingsModalRolesStore.order;
    obj.currentUserId = id;
    highestRole = undefined;
    if (null != guild) {
      highestRole = PermissionUtilsAll.getHighestRole(guild, id);
    }
    obj.highestRole = highestRole;
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  closure_129_0 = ref;
  let obj4 = guildId(17606);
  const guildSettingsRolesManagerState = obj4.useGuildSettingsRolesManagerState(
    (roleJustCreated) => roleJustCreated.roleJustCreated,
  );
  closure_129_1 = guildSettingsRolesManagerState;
  let items2 = [ref, guildSettingsRolesManagerState];
  const layoutEffect = guild.useLayoutEffect(() => {
    if (closure_1) {
      const _setTimeout = setTimeout;
      setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          const _listRef = current._listRef;
          if (_listRef != null) {
            const current2 = _listRef.current;
            if (current2 != null) {
              current2.scrollToEnd();
            }
          }
        }
        guildId(closure_3[19]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
      };
    }
  }, items2);
  closure_130_0 = guildId;
  let obj5 = guildId(504);
  let items3 = [highestRole, sorting];
  const stateFromStoresObject1 = obj5.useStateFromStoresObject(items3, () => {
    guild = GuildStore.getGuild(guildId);
    let result = null != guild;
    if (result) {
      result = PermissionStore.canAccessGuildSettings(guild);
    }
    return { canAccessSettings: result, canManageRoles: PermissionStore.can(constants4.MANAGE_ROLES, guild) };
  });
  const canAccessSettings = stateFromStoresObject1.canAccessSettings;
  closure_130_1 = canAccessSettings;
  const canManageRoles = stateFromStoresObject1.canManageRoles;
  closure_130_2 = canManageRoles;
  let items4 = [canManageRoles, canAccessSettings];
  const effect = guild.useEffect(() => {
    let tmp = navigation;
    if (navigation) {
      tmp = closure_1;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items4);
  let tmp14 = stateFromStores(guild.useState(false), 2);
  sorting = tmp14[0];
  closure_14 = tmp14[1];
  closure_131_0 = sortedGuildRoles;
  closure_131_1 = sorting;
  closure_131_4 = undefined;
  const tmp16 = stateFromStores(guild.useState(""), 2);
  closure_131_2 = str;
  closure_131_3 = tmp16[1];
  [tmp18, closure_131_4] = stateFromStores(
    guild.useState(() => guildId),
    2,
  );
  closure_131_5 = guild.useRef(false);
  const items5 = [sortedGuildRoles];
  const callback = guild.useCallback((str) => {
    const trimmed = str.toLowerCase().trim();
    let current = guild.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      guild.current = true;
      AnalyticsUtilsDefault.track(constants2.SEARCH_STARTED, { search_type: "Roles" });
    }
    dependencyMap(trimmed);
    if ("" === trimmed) {
      let found = guildId;
    } else {
      found = guildId.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    stateFromStores(found);
  }, items5);
  closure_131_6 = callback;
  const items6 = [sorting, tmp16[0], sortedGuildRoles, callback];
  const effect1 = guild.useEffect(() => {
    if (!closure_1) {
      if ("" !== navigation.trim()) {
        guildEveryoneRole(tmp);
      } else {
        stateFromStores(guildId);
      }
      tmp = navigation;
    }
  }, items6);
  const tmp21 = "" !== tmp16[0].trim();
  c15 = tmp18;
  constants = tmp21;
  let obj6 = guildId(504);
  const items7 = [currentUserId];
  const stateFromStoresArray = obj6.useStateFromStoresArray(items7, () => {
    if (null != rolesOrder) {
      let manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items8 = [
    sortedGuildRoles,
    stateFromStoresArray,
    rolesOrder,
    roleMemberCount,
    tmp18,
    guild,
    currentUserId,
    highestRole,
  ];
  const memo = guild.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : c15.filter((item) => !roleMemberCount(item));
    const mapped = found.map((role) => {
      const obj = { role, memberCount: null };
      let num;
      if (roleMemberCount != null) {
        num = tmp[role.id];
      }
      if (num == null) {
        num = 0;
      }
      obj.memberCount = num;
      return obj;
    });
    let num = 0;
    if (null != guild) {
      num = mapped.findIndex((role) =>
        navigation(closure_3[25]).isRoleHigher(guild, currentUserId, highestRole, role.role),
      );
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items8);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp25 = sorting;
  if (!sorting) {
    tmp25 = tmp24 < 10;
  }
  closure_22 = tmp25;
  const items9 = [callback];
  const items10 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items9);
  callback2 = obj.useCallback(() => {
    const obj = { type: constants3.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
    obj.track(constants2.OPEN_MODAL, obj);
    GuildSettingsRoleCreateModalActionCreatorsDefault.open();
  }, items10);
  const items11 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    navigation.push(constants.ROLE_EDIT_REFRESH, { role, newRole: flag, section: constants.DISPLAY });
  }, items11);
  const items12 = [callback];
  callback4 = obj.useCallback(() => {
    closure_14(true);
    callback("");
  }, items12);
  const items13 = [callback];
  callback5 = obj.useCallback(() => {
    callback("");
    closure_14((arg0) => !arg0);
  }, items13);
  const items14 = [guild, callback5];
  callback6 = obj.useCallback(() => {
    const updates = GuildSettingsModalRolesStore.getUpdates();
    let tmp = updates.length > 0;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      actions_GuildActionCreators.batchRoleUpdate(guild.id, updates);
    }
    callback5();
  }, items14);
  const items15 = [firstEditableIndex];
  callback7 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    GuildSettingsModalRolesActionCreatorsDefault.updateRoleOrder(to.from, to);
  }, items15);
  const items16 = [tmp, roleData, tmp21, sorting, callback5];
  const callback8 = obj.useCallback(() => {
    const items = [closure_1.rolesHeader];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = tmp3.edittingRolesHeader;
    }
    let obj = { style: items, children: null };
    items[1] = edittingRolesHeader;
    obj = { title: null };
    const intl = util.intl;
    obj = { numRoles: "" + roleData.length };
    obj.title = intl.formatToPlainString(util.t["38N3Vz"], obj);
    const items1 = [__initData(TableRowGroup.TableRowGroupTitle, obj)];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!closure_16) {
        const obj1 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          style: null,
          children: null,
        };
        const intl2 = tmp7(1114).intl;
        obj1.accessibilityLabel = intl2.string(tmp7(1114).t["0dOFq+"]);
        obj1.onPress = callback5;
        obj1.style = tmp3.reorderButton;
        const obj2 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const items2 = [tmp6(tmp7(12151).ArrowsUpDownIcon, obj2)];
        const obj3 = { style: tmp3.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: null };
        const intl3 = tmp7(1114).intl;
        obj3.children = intl3.string(tmp7(1114).t["0dOFq+"]);
        items2[1] = tmp6(tmp7(4556).Text, obj3);
        obj1.children = items2;
        tmpResult = tmp(tmp7(5123).PressableOpacity, obj1);
      }
    }
    items1[1] = tmpResult;
    obj.children = items1;
    const children = [__initData2(timestampProducer, obj)];
    let tmp6Result = null;
    if (first) {
      const obj4 = {
        style: tmp3.rolesBody,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: null,
      };
      const intl4 = tmp7(1114).intl;
      obj4.children = intl4.string(tmp7(1114).t.nHcwVl);
      tmp6Result = tmp6(tmp7(4556).Text, obj4);
    }
    children[1] = tmp6Result;
    return __initData2(timestampProducer, { children });
  }, items16);
  const items17 = [tmp, callback2, hasRoles, stateFromStores, tmp7, tmp25];
  const items18 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    let obj = shared;
    const isThemeDarkResult = obj.isThemeDark(stateFromStores);
    let tmp4 = dependencyMap;
    if (closure_3) {
      if (isThemeDarkResult) {
        tmp4 = 17618;
        let tmp3Result = tmp3(tmp4);
      } else {
        tmp3Result = tmp3(17619);
      }
    } else {
      if (isThemeDarkResult) {
        tmp3Result = tmp3(17620);
      } else {
        tmp3Result = tmp3(17621);
      }
      if (hasRoles) {
        const items = [closure_1.subheaderContainer];
        let num = 0;
        if (closure_22) {
          num = nativeDefault.space.PX_16;
        }
        obj = { children: null };
        obj = { style: null, children: null };
        const obj1 = { paddingTop: num };
        items[1] = obj1;
        obj.style = items;
        const obj2 = {
          style: closure_1.subheaderDescription,
          variant: "text-sm/medium",
          color: "interactive-text-default",
          children: null,
        };
        const intl4 = util.intl;
        obj2.children = intl4.string(util.t["1ydhVp"]);
        obj.children = __initData(Text_Text.Text, obj2);
        const items1 = [__initData(timestampProducer, obj)];
        const obj3 = { style: closure_1.divider };
        items1[1] = __initData(timestampProducer, obj3);
        obj.children = items1;
        let tmp9Result = tmp9(__initData3, obj);
      } else {
        const obj4 = { style: closure_1.emptySubheaderContainer, children: null };
        const obj5 = { style: closure_1.emptyIlloContainer, children: null };
        const items2 = [closure_1.emptyIllo];
        let emptyIlloLarge = null;
        if (closure_3) {
          emptyIlloLarge = tmp11.emptyIlloLarge;
        }
        const obj6 = { style: null, source: null };
        items2[1] = emptyIlloLarge;
        obj6.style = items2;
        obj6.source = tmp3Result;
        obj5.children = __initData(FastImageDefault, obj6);
        const items3 = [__initData(timestampProducer, obj5), ,];
        const obj7 = { style: closure_1.emptySubheaderBody, children: null };
        const obj8 = {
          style: closure_1.subheader,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        obj8.children = intl.string(util.t.ALlnbi);
        const items4 = [__initData(Text_Text.Heading, obj8), ,];
        const obj9 = {
          style: closure_1.subheaderBody,
          variant: "text-sm/medium",
          color: "text-default",
          children: null,
        };
        const intl2 = util.intl;
        obj9.children = intl2.string(util.t["1ydhVp"]);
        items4[1] = __initData(Text_Text.Text, obj9);
        const obj10 = { style: closure_1.subheaderButton, children: null };
        const obj11 = { text: null, onPress: null };
        const intl3 = util.intl;
        obj11.text = intl3.string(util.t.JZZjQK);
        obj11.onPress = callback2;
        obj10.children = __initData(components_Button_Button.Button, obj11);
        items4[2] = __initData(timestampProducer, obj10);
        obj7.children = items4;
        items3[1] = __initData2(timestampProducer, obj7);
        const obj12 = { style: closure_1.divider };
        items3[2] = __initData(timestampProducer, obj12);
        obj4.children = items3;
        tmp9Result = tmp9(timestampProducer, obj4);
      }
      return tmp9Result;
    }
  }, items17);
  const items19 = [guild, roleData.length, currentUserId, highestRole, sorting, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        let obj = { style: closure_1.everyoneWrapper, children: null };
        obj = {
          role: tmp2,
          locked: null,
          onPress: null,
          guildId: null,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true,
        };
        obj.locked = !obj.isRoleHigher(tmp, currentUserId, highestRole, tmp2);
        obj.onPress = function onPress() {
          return callback3(guildEveryoneRole);
        };
        obj.guildId = tmp.id;
        obj.children = __initData(GuildSettingsRoleItemDefault, obj);
        return __initData(timestampProducer, obj);
      }
    }
    return null;
  }, items18);
  const callback11 = obj.useCallback((role, from) => {
    if (null == guild) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      navigation(4204);
      const diff = roleData.length - 1;
      const obj = {
        sorting,
        isEveryoneRole: null,
        role: null,
        locked: null,
        guildId: null,
        numMembers: null,
        isFirstRole: null,
        isLastRole: null,
        onPress: null,
        onLongPress: null,
        onMoveUp: null,
        onMoveDown: null,
      };
      let tmp3 = null != tmp;
      const tmp19 = !obj.isRoleHigher(tmp, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      obj.isEveryoneRole = tmp3;
      obj.role = role;
      obj.locked = tmp19;
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      obj.guildId = id;
      obj.numMembers = role.memberCount;
      obj.isFirstRole = 0 === from;
      obj.isLastRole = from === diff;
      obj.onPress = callback3;
      obj.onLongPress = callback4;
      let fn;
      if (0 !== from) {
        fn = () => {
          callback7({ from, to: from - 1 });
        };
      }
      obj.onMoveUp = fn;
      let fn2;
      if (from !== diff) {
        fn2 = () => {
          callback7({ from, to: from + 1 });
        };
      }
      obj.onMoveDown = fn2;
      return tmp22(closure_1(17622), obj, role.id);
    }
  }, items19);
  const items20 = [callback2, callback6, callback5, hasRoles, sorting, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: onPress2, text: null };
        const intl = guildId(1114).intl;
        obj.text = intl.string(guildId(1114).t["ETE/oC"]);
        return hasRoles(guildId(7377).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: onPress3, text: null };
        const intl = guildId(1114).intl;
        obj.text = intl.string(guildId(1114).t["R3BPH+"]);
        return hasRoles(guildId(7377).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress, source: closure_1(12773), accessibilityLabel: null };
        const intl = guildId(1114).intl;
        obj.accessibilityLabel = intl.string(guildId(1114).t.JZZjQK);
        return hasRoles(guildId(7377).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    let intl = util.intl;
    obj.headerTitle = intl.string(util.t.UvdTMj);
    navigation.setOptions(obj);
  }, items20);
  const items21 = [guild, sorting, navigation];
  const effect3 = obj.useEffect(() => {
    if (first) {
      if (null != guild) {
        GuildSettingsModalRolesActionCreatorsDefault.startReordering(tmp2.id);
      }
      if (obj3.isIOS()) {
        let obj = { gestureEnabled: !tmp };
        navigation.setOptions(obj);
      }
    }
    obj = GuildSettingsModalRolesActionCreatorsDefault;
    obj.stopReordering();
  }, items21);
  const items22 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(tmp.id);
    }
  }, items22);
  const items23 = [sorting];
  const effect5 = obj.useEffect(
    () => () => {
      if (sorting) {
        closure_1(dependencyMap[29]).stopReordering();
        const obj = closure_1(dependencyMap[29]);
      }
    },
    items23,
  );
  let tmp44 = null;
  if (!tmp25) {
    obj = { style: tmp.searchWrapper, children: null };
    obj = { size: "md", onChange: callback1 };
    obj.children = hasRoles(tmp3(7050).SearchField, obj);
    tmp44 = hasRoles(guildEveryoneRole, obj);
  }
  const items24 = [tmp44, , ,];
  let tmp42Result = null;
  if (sorting) {
    const items25 = [callback8()];
    let tmp47Result = null;
    if (!hasRoles) {
      obj1 = { leading: null, label: null };
      obj2 = { style: tmp.emptyRolesIcon, size: tmp3(1178).Icon.Sizes.LARGE, source: tmp6(9754) };
      obj1.leading = tmp47(tmp3(1178).Icon, obj2);
      obj3 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(1114).intl;
      obj3.children = intl.string(tmp3(1114).t.nZfHsf);
      obj1.label = tmp47(tmp3(4556).Text, obj3);
      tmp47Result = tmp47(tmp3(8593).FormRow, obj1);
    }
    obj4 = { children: null };
    items25[1] = tmp47Result;
    obj4.children = items25;
    tmp42Result = tmp42(tmp43, obj4);
  }
  items24[1] = hasRoles(guildEveryoneRole, { children: tmp42Result });
  obj5 = { style: tmp.container, children: null };
  obj6 = {
    ref,
    header: null,
    wrapperStyles: null,
    contentContainerStyle: null,
    data: null,
    rowHasChanged: null,
    onRowMoved: null,
    disableSorting: null,
    minDraggableIndex: null,
    renderRow: null,
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
  };
  tmp42Result = null;
  let tmp17 = stateFromStores(
    guild.useState(() => guildId),
    2,
  );
  if (!sorting) {
    let callback9Result = null;
    if (!tmp21) {
      callback9Result = callback9();
    }
    const items26 = [callback9Result, ,];
    let callback10Result = null;
    if (!tmp21) {
      callback10Result = callback10();
    }
    items26[1] = callback10Result;
    let callback8Result = null;
    if (hasRoles) {
      callback8Result = callback8();
    }
    let obj7 = { children: null };
    items26[2] = callback8Result;
    obj7.children = items26;
    tmp42Result = tmp42(tmp43, obj7);
  }
  obj6.header = tmp42Result;
  obj6.wrapperStyles = tmp.container;
  const items27 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj6.contentContainerStyle = items27;
  obj6.data = roleData;
  obj6.rowHasChanged = callback12;
  obj6.onRowMoved = callback7;
  obj6.disableSorting = !sorting;
  let tmp56;
  if (firstEditableIndex >= 0) {
    tmp56 = firstEditableIndex;
  }
  let obj8 = { children: null };
  obj6.minDraggableIndex = tmp56;
  obj6.renderRow = callback11;
  obj5.children = hasRoles(SortableListViewDefault, obj6);
  items24[2] = hasRoles(guildEveryoneRole, obj5);
  items24[3] = hasRoles(guildId(7040).NavScrim, {});
  obj8.children = items24;
  return closure_22(callback2, obj8);
}
