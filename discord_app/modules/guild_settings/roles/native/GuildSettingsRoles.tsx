// === Module 19707: GuildSettingsRoles ===

// Module 19707 (GuildSettingsRoles)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import Pressables from "Pressables" /* 6974 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7293 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import ArrowsUpDownIcon from "ArrowsUpDownIcon" /* 12304 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 18150 */;
import GuildSettingsRolesManager from "GuildSettingsRolesManager" /* 19710 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 19711 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 19718 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 19720 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 19721 */;
import MemberRolesAbstractUI from "MemberRolesAbstractUI" /* 19722 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 19726 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7292 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 19708 */;
import TextStyles from "TextStyles" /* 6717 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const isEveryoneRole = fn(4916).isEveryoneRole;
let closure_15 = fn(19709).GuildSettingsRoleEditSections;
const Constants = fn(1072);
({ GuildSettingsSections: closure_16, AnalyticEvents: closure_17, AnalyticsSections: closure_18, Permissions: closure_19, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 }, searchWrapper: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 }, subheaderContainer: null, emptySubheaderContainer: null, emptyIlloContainer: null, emptySubheaderBody: null, subheader: null, subheaderBody: null, subheaderButton: null, subheaderDescription: null, divider: null, everyoneWrapper: null, edittingRolesHeader: null, rolesHeader: null, reorderButton: null, reorderButtonText: null, rolesBody: null, emptyRolesIcon: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.subheaderContainer = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.emptySubheaderContainer = { paddingBottom: 16, alignItems: "center" };
obj2.emptyIlloContainer = { width: "100%", flex: 1, alignItems: "center", paddingTop: 28 };
obj2.emptySubheaderBody = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj5 = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5.marginTop = 16;
obj2.subheader = obj5;
obj2.subheaderBody = { marginTop: 8, textAlign: "center" };
obj2.subheaderButton = { flexGrow: 0, marginTop: 16 };
obj2.subheaderDescription = { lineHeight: 18, textAlign: "center" };
obj2.divider = { height: StyleSheet.hairlineWidth, width: "100%" };
obj2.everyoneWrapper = { marginTop: 2, marginBottom: 24 };
let obj4 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.edittingRolesHeader = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
obj2.rolesHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj2.reorderButton = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
obj2.reorderButtonText = { marginLeft: 8 };
obj2.rolesBody = { padding: 16, paddingTop: 8, lineHeight: 18 };
obj2.emptyRolesIcon = { opacity: 0.4 };
let closure_23 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  guildId = guildId.guildId;
  let guild;
  let memberCount;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let sorting;
  closure_12 = undefined;
  c13 = undefined;
  closure_14 = undefined;
  closure_20 = undefined;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let tmp = callback4();
  importDefault = tmp;
  const ref = memberCount.useRef(null);
  const navigation = guildId(guild[22]).useNavigation();
  let obj2 = guildId(guild[22]);
  let items = [sorting, highestRole, rolesOrder, closure_14, c13, currentUserId];
  const stateFromStoresObject = guildId(guild[19]).useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(guildId);
    const id = AuthenticationStore.getId();
    const obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
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
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  closure_129_0 = ref;
  let obj3 = guildId(guild[19]);
  const guildSettingsRolesManagerState = guildId(guild[18]).useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  closure_129_1 = guildSettingsRolesManagerState;
  let items1 = [ref, guildSettingsRolesManagerState];
  const layoutEffect = memberCount.useLayoutEffect(() => {
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
        guildId(guild[18]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
      };
    }
  }, items1);
  closure_130_0 = guildId;
  let obj4 = guildId(guild[18]);
  let items2 = [sorting, closure_12];
  const stateFromStoresObject1 = guildId(guild[19]).useStateFromStoresObject(items2, () => {
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
  let items3 = [canManageRoles, canAccessSettings];
  const effect = memberCount.useEffect(() => {
    let tmp = navigation;
    if (navigation) {
      tmp = closure_1;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items3);
  const tmp11 = guildEveryoneRole(memberCount.useState(false), 2);
  sorting = tmp11[0];
  closure_12 = tmp11[1];
  closure_131_0 = sortedGuildRoles;
  closure_131_1 = sorting;
  closure_131_4 = undefined;
  const tmp13 = guildEveryoneRole(memberCount.useState(""), 2);
  closure_131_2 = str;
  closure_131_3 = tmp13[1];
  let obj5 = guildId(guild[19]);
  [tmp15, closure_131_4] = guildEveryoneRole(memberCount.useState(() => guildId), 2);
  closure_131_5 = memberCount.useRef(false);
  const items4 = [sortedGuildRoles];
  const callback = memberCount.useCallback((str) => {
    str = str.toLowerCase();
    const trimmed = str.trim();
    let current = memberCount.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      memberCount.current = true;
      AnalyticsUtilsDefault.track(constants2.SEARCH_STARTED, { search_type: "Roles" });
    }
    guild(trimmed);
    if ("" === trimmed) {
      let found = guildId;
    } else {
      found = guildId.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    guildEveryoneRole(found);
  }, items4);
  closure_131_6 = callback;
  const items5 = [sorting, tmp13[0], sortedGuildRoles, callback];
  const effect1 = memberCount.useEffect(() => {
    if (!closure_1) {
      if ("" !== navigation.trim()) {
        roleMemberCount(navigation);
      } else {
        guildEveryoneRole(guildId);
      }
    }
  }, items5);
  const tmp18 = "" !== tmp13[0].trim();
  c13 = tmp15;
  closure_14 = tmp18;
  const tmp14 = guildEveryoneRole(memberCount.useState(() => guildId), 2);
  const items6 = [highestRole];
  const stateFromStoresArray = guildId(guild[19]).useStateFromStoresArray(items6, () => {
    if (null != rolesOrder) {
      let manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items7 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, tmp15, guild, currentUserId, highestRole];
  const memo = memberCount.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : c13.filter((item) => !sortedGuildRoles(item));
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
      num = mapped.findIndex((role) => navigation(guild[23]).isRoleHigher(closure_1_3, currentUserId, highestRole, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items7);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp22 = sorting;
  if (!sorting) {
    tmp22 = tmp21 < 10;
  }
  closure_20 = tmp22;
  const items8 = [callback];
  const items9 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items8);
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
  }, items9);
  const items10 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    navigation.push(constants.ROLE_EDIT_REFRESH, { role, newRole: flag, section: constants.DISPLAY });
  }, items10);
  const items11 = [callback];
  callback4 = obj.useCallback(() => {
    closure_12(true);
    callback("");
  }, items11);
  const items12 = [callback];
  callback5 = obj.useCallback(() => {
    callback("");
    closure_12((arg0) => !arg0);
  }, items12);
  const items13 = [guild, callback5];
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
  }, items13);
  const items14 = [firstEditableIndex];
  callback7 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    GuildSettingsModalRolesActionCreatorsDefault.updateRoleOrder(to.from, to);
  }, items14);
  const items15 = [tmp, roleData, tmp18, sorting, callback5];
  const callback8 = obj.useCallback(() => {
    const items = [closure_1.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = closure_1.edittingRolesHeader;
    }
    const obj = { style: items, children: null };
    items[1] = edittingRolesHeader;
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.formatToPlainString(util.t["38N3Vz"], { numRoles: "" + roleData.length });
    const items1 = [dependencyMap(TableRowGroup.TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!closure_14) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = util.intl;
        obj4.accessibilityLabel = intl2.string(util.t["0dOFq+"]);
        obj4.onPress = callback5;
        obj4.style = closure_1.reorderButton;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const items2 = [dependencyMap(ArrowsUpDownIcon.ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: closure_1.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: null };
        const intl3 = util.intl;
        obj6.children = intl3.string(util.t["0dOFq+"]);
        items2[1] = dependencyMap(Text_Text.Text, obj6);
        obj4.children = items2;
        tmpResult = __initData(Pressables.PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    obj.children = items1;
    const children = [__initData(timestampProducer, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: closure_1.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      const intl4 = util.intl;
      obj7.children = intl4.string(util.t.nHcwVl);
      tmp6Result = dependencyMap(Text_Text.Text, obj7);
    }
    children[1] = tmp6Result;
    return __initData(timestampProducer, { children });
  }, items15);
  const items16 = [tmp, callback2, hasRoles, tmp22];
  const items17 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    if (hasRoles) {
      const items = [closure_1.subheaderContainer, ];
      let num = 0;
      if (closure_20) {
        num = nativeDefault.space.PX_16;
      }
      const obj2 = { children: null };
      const obj3 = { style: null, children: null };
      const obj4 = { paddingTop: num };
      items[1] = obj4;
      obj3.style = items;
      const obj5 = { style: closure_1.subheaderDescription, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      const intl4 = util.intl;
      obj5.children = intl4.string(util.t["1ydhVp"]);
      obj3.children = dependencyMap(Text_Text.Text, obj5);
      const items1 = [dependencyMap(timestampProducer, obj3), ];
      const obj6 = { style: closure_1.divider };
      items1[1] = dependencyMap(timestampProducer, obj6);
      obj2.children = items1;
      let tmpResult = __initData(__initData2, obj2);
    } else {
      const obj = { style: closure_1.emptySubheaderContainer, children: null };
      const obj7 = { style: closure_1.emptyIlloContainer, children: dependencyMap(MemberRolesAbstractUI.MemberRolesAbstractUI, {}) };
      const items2 = [dependencyMap(timestampProducer, obj7), , ];
      const obj8 = { style: closure_1.emptySubheaderBody, children: null };
      const obj9 = { style: closure_1.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj9.children = intl.string(util.t.ALlnbi);
      const items3 = [dependencyMap(Text_Text.Heading, obj9), , ];
      const obj10 = { style: closure_1.subheaderBody, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj10.children = intl2.string(util.t["1ydhVp"]);
      items3[1] = dependencyMap(Text_Text.Text, obj10);
      const obj11 = { style: closure_1.subheaderButton, children: null };
      const obj12 = { text: null, onPress: null };
      const intl3 = util.intl;
      obj12.text = intl3.string(util.t.JZZjQK);
      obj12.onPress = callback2;
      obj11.children = dependencyMap(components_Button_Button.Button, obj12);
      items3[2] = dependencyMap(timestampProducer, obj11);
      obj8.children = items3;
      items2[1] = __initData(timestampProducer, obj8);
      const obj13 = { style: closure_1.divider };
      items2[2] = dependencyMap(timestampProducer, obj13);
      obj.children = items2;
      tmpResult = __initData(timestampProducer, obj);
    }
    return tmpResult;
  }, items16);
  const items18 = [guild, roleData.length, currentUserId, highestRole, sorting, callback3, callback4, callback7];
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
          isFirstRole: true
        };
        obj2.children = dependencyMap(GuildSettingsRoleItemDefault, obj3);
        return dependencyMap(timestampProducer, obj2);
      }
    }
    return null;
  }, items17);
  const callback11 = obj.useCallback((role, from) => {
    if (null == guild) {
      return closure_20(callback3, {});
    } else {
      role = role.role;
      const obj = navigation(guild[23]);
      const diff = roleData.length - 1;
      const obj2 = { sorting, isEveryoneRole: null, role: null, locked: null, guildId: null, numMembers: null, isFirstRole: null, isLastRole: null, onPress: null, onLongPress: null, onMoveUp: null, onMoveDown: null };
      let tmp3 = null != guild;
      const tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
      if (tmp3) {
        tmp3 = sortedGuildRoles(role);
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
      let handleMoveUp;
      if (0 !== from) {
        handleMoveUp = function handleMoveUp() {
          callback7({ from, to: from - 1 });
        };
      }
      obj2.onMoveUp = handleMoveUp;
      let handleMoveDown;
      if (from !== diff) {
        handleMoveDown = function handleMoveDown() {
          callback7({ from, to: from + 1 });
        };
      }
      obj2.onMoveDown = handleMoveDown;
      return closure_20(closure_1(guild[35]), obj2, role.id);
    }
  }, items18);
  const items19 = [callback2, callback6, callback5, hasRoles, sorting, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: onPress2, text: null };
        const intl = guildId(guild[29]).intl;
        obj.text = intl.string(guildId(guild[29]).t["ETE/oC"]);
        return closure_20(guildId(guild[36]).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: onPress3, text: null };
        const intl = guildId(guild[29]).intl;
        obj.text = intl.string(guildId(guild[29]).t["R3BPH+"]);
        return closure_20(guildId(guild[36]).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress, source: closure_1(guild[37]), accessibilityLabel: null };
        const intl = guildId(guild[29]).intl;
        obj.accessibilityLabel = intl.string(guildId(guild[29]).t.JZZjQK);
        return closure_20(guildId(guild[36]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    let intl = util.intl;
    obj.headerTitle = intl.string(util.t.UvdTMj);
    navigation.setOptions(obj);
  }, items19);
  const items20 = [guild, sorting, navigation];
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
  }, items20);
  const items21 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(guild.id, "", 0, false);
      }
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(guild.id);
    }
  }, items21);
  const items22 = [sorting];
  const effect5 = obj.useEffect(() => () => {
    if (sorting) {
      closure_1(guild[27]).stopReordering();
      const obj = closure_1(guild[27]);
    }
  }, items22);
  let tmp41 = null;
  if (!tmp22) {
    let obj7 = { style: tmp.searchWrapper, children: null };
    let obj8 = { size: "md", onChange: callback1 };
    obj7.children = closure_20(tmp3(tmp4[42]).SearchBar, obj8);
    tmp41 = closure_20(roleMemberCount, obj7);
  }
  const items23 = [tmp41, , , ];
  let tmp39Result = null;
  if (sorting) {
    const items24 = [callback8(), ];
    let tmp44Result = null;
    if (!hasRoles) {
      let obj9 = { leading: null, label: null };
      let obj10 = { style: tmp.emptyRolesIcon, size: tmp3(tmp4[44]).Icon.Sizes.LARGE, source: require("module_9042") };
      obj9.leading = tmp44(tmp3(tmp4[44]).Icon, obj10);
      let obj11 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(tmp4[29]).intl;
      obj11.children = intl.string(tmp3(tmp4[29]).t.nZfHsf);
      obj9.label = tmp44(tmp3(tmp4[32]).Text, obj11);
      tmp44Result = tmp44(tmp3(tmp4[43]).FormRow, obj9);
    }
    let obj12 = { children: null };
    items24[1] = tmp44Result;
    obj12.children = items24;
    tmp39Result = tmp39(tmp40, obj12);
  }
  items23[1] = closure_20(roleMemberCount, { children: tmp39Result });
  let obj13 = { style: tmp.container, children: null };
  const obj14 = { ref, header: null, wrapperStyles: null, contentContainerStyle: null, data: null, keyExtractor: null, rowHasChanged: null, onRowMoved: null, disableSorting: null, minDraggableIndex: null, renderRow: null, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  let tmp39Result2 = null;
  let obj6 = guildId(guild[19]);
  if (!sorting) {
    let callback9Result = null;
    if (!tmp18) {
      callback9Result = callback9();
    }
    const items25 = [callback9Result, , ];
    let callback10Result = null;
    if (!tmp18) {
      callback10Result = callback10();
    }
    items25[1] = callback10Result;
    let callback8Result = null;
    if (hasRoles) {
      callback8Result = callback8();
    }
    const obj15 = { children: null };
    items25[2] = callback8Result;
    obj15.children = items25;
    tmp39Result2 = tmp39(tmp40, obj15);
  }
  obj14.header = tmp39Result2;
  obj14.wrapperStyles = tmp.container;
  const items26 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj14.contentContainerStyle = items26;
  obj14.data = roleData;
  obj14.keyExtractor = function keyExtractor(role) {
    return role.role.id;
  };
  obj14.rowHasChanged = callback12;
  obj14.onRowMoved = callback7;
  obj14.disableSorting = !sorting;
  let tmp54;
  if (firstEditableIndex >= 0) {
    tmp54 = firstEditableIndex;
  }
  const obj16 = { children: null };
  obj14.minDraggableIndex = tmp54;
  obj14.renderRow = callback11;
  obj13.children = closure_20(require("SortableListView"), obj14);
  items23[2] = closure_20(roleMemberCount, obj13);
  items23[3] = closure_20(guildId(guild[47]).NavScrim, {});
  obj16.children = items23;
  return callback2(callback3, obj16);
};