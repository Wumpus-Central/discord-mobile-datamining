// discord_app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GuildRoleMemberActionCreatorsAll from "../../GuildRoleMemberActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import ArrowsUpDownIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../../GuildSettingsModalChannelsActionCreators.tsx";
import SortableListViewDefault from "../../../../components_native/common/SortableListView.tsx";
import GuildSettingsRolesManager from "GuildSettingsRolesManager.tsx";
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators.tsx";
import GuildSettingsRolesUtils from "../GuildSettingsRolesUtils.tsx";
import actions_GuildActionCreators from "../../../../actions/native/GuildActionCreators.tsx";
import GuildSettingsModalRolesActionCreatorsDefault from "../GuildSettingsModalRolesActionCreators.tsx";
import _modDef17828 from "../../../../../_runtime/metro/17828__.js";
import _modDef17829 from "../../../../../_runtime/metro/17829__.js";
import _modDef17830 from "../../../../../_runtime/metro/17830__.js";
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
const isEveryoneRole = fn(2017).isEveryoneRole;
let closure_16 = fn(17814).GuildSettingsRoleEditSections;
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
const createStyles = fn(4638);
let obj2 = {
  container: { flex: 1 },
  scrollContainer: { paddingHorizontal: 12 },
  searchWrapper: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 },
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
let obj3 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.subheaderContainer = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.emptySubheaderContainer = { paddingBottom: 16, alignItems: "center" };
let obj4 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.emptyIlloContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  width: "100%",
  flex: 1,
  alignItems: "center",
};
obj2.emptyIllo = { marginTop: 28, width: "100%" };
obj2.emptyIlloLarge = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
obj2.emptySubheaderBody = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj6 = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj6.marginTop = 16;
obj2.subheader = obj6;
obj2.subheaderBody = { marginTop: 8, textAlign: "center" };
obj2.subheaderButton = { flexGrow: 0, marginTop: 16 };
obj2.subheaderDescription = { lineHeight: 18, textAlign: "center" };
obj2.divider = { height: StyleSheet.hairlineWidth, width: "100%" };
obj2.everyoneWrapper = { marginTop: 2, marginBottom: 24 };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
obj2.edittingRolesHeader = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
obj2.rolesHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj2.reorderButton = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
obj2.reorderButtonText = { marginLeft: 8 };
obj2.rolesBody = { padding: 16, paddingTop: 8, lineHeight: 18 };
obj2.emptyRolesIcon = { opacity: 0.4 };
let closure_24 = createStyles.createStyles(obj2);
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
  const ref = guild.useRef(null);
  const navigation = guildId(1484).useNavigation();
  const tmp7 = useIsWindowLargeDefault();
  dependencyMap = tmp7;
  let obj2 = guildId(1484);
  let items = [memberCount];
  const stateFromStores = guildId(504).useStateFromStores(items, () => memberCount.theme);
  let obj3 = guildId(504);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, c15, closure_14, rolesOrder];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items1, () => {
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
  let obj4 = guildId(504);
  const guildSettingsRolesManagerState = guildId(17815).useGuildSettingsRolesManagerState(
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
  let obj5 = guildId(17815);
  let items3 = [highestRole, sorting];
  const stateFromStoresObject1 = guildId(504).useStateFromStoresObject(items3, () => {
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
  const tmp14 = stateFromStores(guild.useState(false), 2);
  sorting = tmp14[0];
  closure_14 = tmp14[1];
  closure_131_0 = sortedGuildRoles;
  closure_131_1 = sorting;
  closure_131_4 = undefined;
  const tmp16 = stateFromStores(guild.useState(""), 2);
  closure_131_2 = str;
  closure_131_3 = tmp16[1];
  let obj6 = guildId(504);
  [tmp18, closure_131_4] = stateFromStores(
    guild.useState(() => guildId),
    2,
  );
  closure_131_5 = guild.useRef(false);
  const items5 = [sortedGuildRoles];
  const callback = guild.useCallback((str) => {
    str = str.toLowerCase();
    const trimmed = str.trim();
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
        guildEveryoneRole(navigation);
      } else {
        stateFromStores(guildId);
      }
    }
  }, items6);
  const tmp21 = "" !== tmp16[0].trim();
  c15 = tmp18;
  constants = tmp21;
  let tmp17 = stateFromStores(
    guild.useState(() => guildId),
    2,
  );
  const items7 = [currentUserId];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(items7, () => {
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
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants3.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
    obj.track(constants2.OPEN_MODAL, obj2);
    GuildSettingsRoleCreateModalActionCreatorsDefault.open();
    const tmpResult = GuildSettingsRoleCreateModalActionCreatorsDefault;
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
      edittingRolesHeader = closure_1.edittingRolesHeader;
    }
    const obj = { style: items, children: null };
    items[1] = edittingRolesHeader;
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.formatToPlainString(util.t["38N3Vz"], { numRoles: "" + roleData.length });
    const items1 = [__initData(TableRowGroup.TableRowGroupTitle, obj2)];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!closure_16) {
        const obj4 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          style: null,
          children: null,
        };
        const intl2 = util.intl;
        obj4.accessibilityLabel = intl2.string(util.t["0dOFq+"]);
        obj4.onPress = callback5;
        obj4.style = closure_1.reorderButton;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const items2 = [__initData(ArrowsUpDownIcon.ArrowsUpDownIcon, obj5)];
        const obj6 = {
          style: closure_1.reorderButtonText,
          variant: "text-sm/medium",
          color: "text-link",
          children: null,
        };
        const intl3 = util.intl;
        obj6.children = intl3.string(util.t["0dOFq+"]);
        items2[1] = __initData(Text_Text.Text, obj6);
        obj4.children = items2;
        tmpResult = __initData2(Pressables.PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    obj.children = items1;
    const children = [__initData2(timestampProducer, obj)];
    let tmp6Result = null;
    if (first) {
      const obj7 = {
        style: closure_1.rolesBody,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: null,
      };
      const intl4 = util.intl;
      obj7.children = intl4.string(util.t.nHcwVl);
      tmp6Result = __initData(Text_Text.Text, obj7);
    }
    children[1] = tmp6Result;
    return __initData2(timestampProducer, { children });
  }, items16);
  const items17 = [tmp, callback2, hasRoles, stateFromStores, tmp7, tmp25];
  const items18 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    const isThemeDarkResult = shared.isThemeDark(stateFromStores);
    let tmp4 = dependencyMap;
    if (closure_3) {
      if (isThemeDarkResult) {
        tmp4 = 17827;
        let tmp3Result = importDefault(tmp4);
      } else {
        tmp3Result = _modDef17828;
      }
    } else {
      if (isThemeDarkResult) {
        let tmp3Result2 = _modDef17829;
      } else {
        tmp3Result2 = _modDef17830;
      }
      if (hasRoles) {
        const items = [closure_1.subheaderContainer];
        let num = 0;
        if (closure_22) {
          num = nativeDefault.space.PX_16;
        }
        const obj2 = { children: null };
        const obj3 = { style: null, children: null };
        const obj4 = { paddingTop: num };
        items[1] = obj4;
        obj3.style = items;
        const obj5 = {
          style: closure_1.subheaderDescription,
          variant: "text-sm/medium",
          color: "interactive-text-default",
          children: null,
        };
        const intl4 = util.intl;
        obj5.children = intl4.string(util.t["1ydhVp"]);
        obj3.children = __initData(Text_Text.Text, obj5);
        const items1 = [__initData(timestampProducer, obj3)];
        const obj6 = { style: closure_1.divider };
        items1[1] = __initData(timestampProducer, obj6);
        obj2.children = items1;
        let tmp9Result = __initData2(__initData3, obj2);
      } else {
        const obj7 = { style: closure_1.emptySubheaderContainer, children: null };
        const obj8 = { style: closure_1.emptyIlloContainer, children: null };
        const items2 = [closure_1.emptyIllo];
        let emptyIlloLarge = null;
        if (closure_3) {
          emptyIlloLarge = closure_1.emptyIlloLarge;
        }
        const obj9 = { style: null, source: null };
        items2[1] = emptyIlloLarge;
        obj9.style = items2;
        obj9.source = tmp3Result2;
        obj8.children = __initData(FastImageDefault, obj9);
        const items3 = [__initData(timestampProducer, obj8), ,];
        const obj10 = { style: closure_1.emptySubheaderBody, children: null };
        const obj11 = {
          style: closure_1.subheader,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        obj11.children = intl.string(util.t.ALlnbi);
        const items4 = [__initData(Text_Text.Heading, obj11), ,];
        const obj12 = {
          style: closure_1.subheaderBody,
          variant: "text-sm/medium",
          color: "text-default",
          children: null,
        };
        const intl2 = util.intl;
        obj12.children = intl2.string(util.t["1ydhVp"]);
        items4[1] = __initData(Text_Text.Text, obj12);
        const obj13 = { style: closure_1.subheaderButton, children: null };
        const obj14 = { text: null, onPress: null };
        const intl3 = util.intl;
        obj14.text = intl3.string(util.t.JZZjQK);
        obj14.onPress = callback2;
        obj13.children = __initData(components_Button_Button.Button, obj14);
        items4[2] = __initData(timestampProducer, obj13);
        obj10.children = items4;
        items3[1] = __initData2(timestampProducer, obj10);
        const obj15 = { style: closure_1.divider };
        items3[2] = __initData(timestampProducer, obj15);
        obj7.children = items3;
        tmp9Result = __initData2(timestampProducer, obj7);
      }
      return tmp9Result;
    }
  }, items17);
  const items19 = [guild, roleData.length, currentUserId, highestRole, sorting, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: null };
        const obj3 = {
          role: guildEveryoneRole,
          locked: !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole),
          onPress() {
            return callback3(guildEveryoneRole);
          },
          guildId: guild.id,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true,
        };
        obj2.children = __initData(GuildSettingsRoleItemDefault, obj3);
        return __initData(timestampProducer, obj2);
      }
    }
    return null;
  }, items18);
  const callback11 = obj.useCallback((role, from) => {
    if (null == guild) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      const obj = navigation(4281);
      const diff = roleData.length - 1;
      const obj2 = {
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
      let tmp3 = null != guild;
      const tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      obj2.isEveryoneRole = tmp3;
      obj2.role = role;
      obj2.locked = tmp19;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      obj2.guildId = id;
      obj2.numMembers = role.memberCount;
      obj2.isFirstRole = 0 === from;
      obj2.isLastRole = from === diff;
      obj2.onPress = callback3;
      obj2.onLongPress = callback4;
      let fn;
      if (0 !== from) {
        fn = () => {
          callback7({ from, to: from - 1 });
        };
      }
      obj2.onMoveUp = fn;
      let fn2;
      if (from !== diff) {
        fn2 = () => {
          callback7({ from, to: from + 1 });
        };
      }
      obj2.onMoveDown = fn2;
      return hasRoles(closure_1(17831), obj2, role.id);
    }
  }, items19);
  const items20 = [callback2, callback6, callback5, hasRoles, sorting, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: onPress2, text: null };
        const intl = guildId(1115).intl;
        obj.text = intl.string(guildId(1115).t["ETE/oC"]);
        return hasRoles(guildId(7487).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: onPress3, text: null };
        const intl = guildId(1115).intl;
        obj.text = intl.string(guildId(1115).t["R3BPH+"]);
        return hasRoles(guildId(7487).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress, source: closure_1(12916), accessibilityLabel: null };
        const intl = guildId(1115).intl;
        obj.accessibilityLabel = intl.string(guildId(1115).t.JZZjQK);
        return hasRoles(guildId(7487).HeaderActionButton, obj);
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
        const obj4 = { gestureEnabled: !tmp };
        navigation.setOptions(obj4);
      }
      obj3 = PlatformUtils;
    }
    GuildSettingsModalRolesActionCreatorsDefault.stopReordering();
  }, items21);
  const items22 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(guild.id, "", 0, false);
      }
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(guild.id);
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
    let obj8 = { style: tmp.searchWrapper, children: null };
    let obj9 = { size: "md", onChange: callback1 };
    obj8.children = hasRoles(tmp3(7160).SearchField, obj9);
    tmp44 = hasRoles(guildEveryoneRole, obj8);
  }
  const items24 = [tmp44, , ,];
  let tmp42Result = null;
  if (sorting) {
    const items25 = [callback8()];
    let tmp47Result = null;
    if (!hasRoles) {
      let obj10 = { leading: null, label: null };
      let obj11 = { style: tmp.emptyRolesIcon, size: tmp3(1177).Icon.Sizes.LARGE, source: tmp6(9894) };
      obj10.leading = tmp47(tmp3(1177).Icon, obj11);
      let obj12 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(1115).intl;
      obj12.children = intl.string(tmp3(1115).t.nZfHsf);
      obj10.label = tmp47(tmp3(4634).Text, obj12);
      tmp47Result = tmp47(tmp3(8728).FormRow, obj10);
    }
    let obj13 = { children: null };
    items25[1] = tmp47Result;
    obj13.children = items25;
    tmp42Result = tmp42(tmp43, obj13);
  }
  items24[1] = hasRoles(guildEveryoneRole, { children: tmp42Result });
  let obj14 = { style: tmp.container, children: null };
  let obj15 = {
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
  let tmp42Result2 = null;
  let obj7 = guildId(504);
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
    const obj16 = { children: null };
    items26[2] = callback8Result;
    obj16.children = items26;
    tmp42Result2 = tmp42(tmp43, obj16);
  }
  obj15.header = tmp42Result2;
  obj15.wrapperStyles = tmp.container;
  const items27 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj15.contentContainerStyle = items27;
  obj15.data = roleData;
  obj15.rowHasChanged = callback12;
  obj15.onRowMoved = callback7;
  obj15.disableSorting = !sorting;
  let tmp56;
  if (firstEditableIndex >= 0) {
    tmp56 = firstEditableIndex;
  }
  const obj17 = { children: null };
  obj15.minDraggableIndex = tmp56;
  obj15.renderRow = callback11;
  obj14.children = hasRoles(SortableListViewDefault, obj15);
  items24[2] = hasRoles(guildEveryoneRole, obj14);
  items24[3] = hasRoles(guildId(7150).NavScrim, {});
  obj17.children = items24;
  return closure_22(callback2, obj17);
}
