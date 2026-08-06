// discord_app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
import PressableBase from "PressableBase";
import setRoleJustCreated from "setRoleJustCreated";
import get_ActivityIndicator from "createTextStyle";
import handleThemeChange from "handleThemeChange";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import fetchFingerprint from "fetchFingerprint";
import handleInviteData from "handleInviteData";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import getRoleMemberCount from "getRoleMemberCount";
import handleGuildRoleCreateOrUpdate from "handleGuildRoleCreateOrUpdate";
import { GuildSettingsRoleEditSections as closure_16 } from "MAX_SUBCATEGORIES";
import ME from "ME";
import jsxProd from "dispatcher";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let Fonts;
let StyleSheet;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_6;
const require = arg1;
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20, Fonts } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
createCacheKey = { container: { flex: 1 }, scrollContainer: { paddingHorizontal: 12 }, searchWrapper: null, subheaderContainer: null, emptySubheaderContainer: null, emptyIlloContainer: null, emptyIllo: null, emptyIlloLarge: null, emptySubheaderBody: null, subheader: null, subheaderBody: null, subheaderButton: null, subheaderDescription: null, divider: null, everyoneWrapper: null, edittingRolesHeader: null, rolesHeader: null, reorderButton: null, reorderButtonText: null, rolesBody: null, emptyRolesIcon: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[4] = { paddingBottom: 16, alignItems: "center" };
let obj1 = { paddingBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
createCacheKey[6] = { marginTop: 28, width: "100%" };
createCacheKey[7] = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
createCacheKey[8] = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj3 = {};
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.marginTop = 16;
createCacheKey[9] = obj3;
createCacheKey[10] = { marginTop: 8, textAlign: "center" };
createCacheKey[11] = { flexGrow: 0, marginTop: 16 };
createCacheKey[12] = { lineHeight: 18, textAlign: "center" };
createCacheKey[13] = { height: StyleSheet.hairlineWidth, width: "100%" };
createCacheKey[14] = { marginTop: 2, marginBottom: 24 };
createCacheKey[15] = { marginTop: require("Themes").space.PX_16, marginLeft: require("Themes").space.PX_16 };
createCacheKey[16] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[17] = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createCacheKey[18] = { marginLeft: 8 };
createCacheKey[19] = { padding: 16, paddingTop: 8, lineHeight: 18 };
createCacheKey[20] = { opacity: 0.4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: require("Themes").space.PX_16, marginLeft: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  let c4;
  let tmp18;
  guildId = guildId.guildId;
  let sortedGuildRoles = guildId;
  let first;
  let str;
  let dependencyMap;
  let callback;
  let React;
  callback = undefined;
  let memberCount;
  let roleMemberCount;
  sortedGuildRoles = undefined;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  first = undefined;
  let getRoleMemberCount;
  let c15;
  let c16;
  callback = undefined;
  let stateFromStoresArray;
  let roleData;
  let firstEditableIndex;
  let hasRoles;
  let c22;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let callback7;
  let tmp = callback3();
  first = tmp;
  let obj = React;
  const ref = React.useRef(null);
  let obj1 = sortedGuildRoles(1480);
  const navigation = obj1.useNavigation();
  str = navigation;
  const tmp7 = first(7562)();
  dependencyMap = tmp7;
  let obj2 = sortedGuildRoles(589);
  let items = [memberCount];
  const stateFromStores = obj2.useStateFromStores(items, () => memberCount.theme);
  callback = stateFromStores;
  let obj3 = sortedGuildRoles(589);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, c15, getRoleMemberCount, rolesOrder];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    const guild = highestRole.getGuild(sortedGuildRoles);
    const id = sortedGuildRoles.getId();
    const obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
    let everyoneRole = null;
    if (null != guild) {
      everyoneRole = currentUserId.getEveryoneRole(guild);
    }
    obj[1] = everyoneRole;
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    let num = rolesOrder.getMemberCount(id1);
    if (num == null) {
      num = 0;
    }
    obj[2] = num;
    let id2;
    if (guild != null) {
      id2 = guild.id;
    }
    obj[3] = roleMemberCount.getRoleMemberCount(id2);
    obj[4] = currentUserId.getSortedRoles(sortedGuildRoles);
    obj[5] = _undefined2.order;
    obj[6] = id;
    highestRole = undefined;
    if (null != guild) {
      highestRole = str(3917).getHighestRole(guild, id);
      const obj2 = str(3917);
    }
    obj[7] = highestRole;
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  React = guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  callback = guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  roleMemberCount = stateFromStoresObject.roleMemberCount;
  sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  sortedGuildRoles = ref;
  first = undefined;
  let obj4 = sortedGuildRoles(16587);
  const guildSettingsRolesManagerState = obj4.useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  first = guildSettingsRolesManagerState;
  let items2 = [ref, guildSettingsRolesManagerState];
  const layoutEffect = React.useLayoutEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
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
        ref(outer1_3[19]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        sortedGuildRoles(table[19]).setRoleJustCreated(false);
      };
    }
  }, items2);
  sortedGuildRoles = guildId;
  first = undefined;
  str = undefined;
  let obj5 = sortedGuildRoles(589);
  let items3 = [highestRole, first];
  const stateFromStoresObject1 = obj5.useStateFromStoresObject(items3, () => {
    const guild = highestRole.getGuild(sortedGuildRoles);
    let result = null != guild;
    if (result) {
      result = first.canAccessGuildSettings(guild);
    }
    return { canAccessSettings: result, canManageRoles: first.can(firstEditableIndex.MANAGE_ROLES, guild) };
  });
  const canAccessSettings = stateFromStoresObject1.canAccessSettings;
  first = canAccessSettings;
  const canManageRoles = stateFromStoresObject1.canManageRoles;
  str = canManageRoles;
  let items4 = [canManageRoles, canAccessSettings];
  const effect = React.useEffect(() => {
    let tmp = str;
    if (str) {
      tmp = first;
    }
    if (!tmp) {
      first(16492).terminate();
      const obj = first(16492);
      first(8944).close();
      const obj2 = first(8944);
    }
  }, items4);
  let tmp14 = callback(React.useState(false), 2);
  first = tmp14[0];
  getRoleMemberCount = tmp14[1];
  str = undefined;
  dependencyMap = undefined;
  callback = undefined;
  React = undefined;
  callback = undefined;
  const tmp16 = callback(React.useState(""), 2);
  str = tmp16[0];
  dependencyMap = tmp16[1];
  [tmp18, c4] = callback(React.useState(() => sortedGuildRoles), 2);
  React = React.useRef(false);
  const items5 = [sortedGuildRoles];
  callback = React.useCallback((str) => {
    let trimmed = str;
    trimmed = str.toLowerCase().trim();
    let current = ref.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      ref.current = true;
      first(698).track(stateFromStoresArray.SEARCH_STARTED, { search_type: "Roles" });
      const obj = first(698);
    }
    dependencyMap(trimmed);
    if ("" === trimmed) {
      let found = trimmed;
    } else {
      found = trimmed.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    c4(found);
  }, items5);
  const items6 = [first, str, sortedGuildRoles, callback];
  const effect1 = React.useEffect(() => {
    if (!first) {
      if ("" !== "".trim()) {
        callback(tmp);
      } else {
        _undefined(sortedGuildRoles);
      }
      tmp = str;
    }
  }, items6);
  const tmp21 = "" !== str.trim();
  c15 = tmp18;
  c16 = tmp21;
  let obj6 = sortedGuildRoles(589);
  const items7 = [currentUserId];
  stateFromStoresArray = obj6.useStateFromStoresArray(items7, () => {
    if (null != rolesOrder) {
      let manyRoles = currentUserId.getManyRoles(sortedGuildRoles, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items8 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, tmp18, guild, currentUserId, highestRole];
  const memo = React.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : c15.filter((arg0) => !callback(arg0));
    const mapped = found.map((role) => {
      const obj = { role, memberCount: null };
      let num;
      if (closure_8 != null) {
        num = tmp[role.id];
      }
      if (num == null) {
        num = 0;
      }
      obj[1] = num;
      return obj;
    });
    let num = 0;
    if (null != setRoleJustCreated) {
      num = mapped.findIndex((role) => outer1_2(outer1_3[25]).isRoleHigher(setRoleJustCreated, createGuildRoleRecordFromRust, createGuildRecordFromRust, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items8);
  roleData = memo.roleData;
  firstEditableIndex = memo.firstEditableIndex;
  hasRoles = memo.hasRoles;
  let tmp25 = first;
  if (!first) {
    tmp25 = tmp24 < 10;
  }
  c22 = tmp25;
  const items9 = [callback];
  const items10 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items9);
  callback2 = obj.useCallback(() => {
    let obj = first(698);
    obj = { type: roleData.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (ref != null) {
      id = ref.id;
    }
    const merged = Object.assign(sortedGuildRoles(4479).collectGuildAnalyticsMetadata(id));
    obj.track(stateFromStoresArray.OPEN_MODAL, obj);
    const obj3 = sortedGuildRoles(4479);
    const tmp = first;
    first(16588).open();
  }, items10);
  const items11 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    str.push(callback.ROLE_EDIT_REFRESH, { role, newRole: flag, section: _undefined3.DISPLAY });
  }, items11);
  const items12 = [callback];
  callback4 = obj.useCallback(() => {
    roleMemberCount(true);
    callback("");
  }, items12);
  const items13 = [callback];
  callback5 = obj.useCallback(() => {
    callback("");
    roleMemberCount((arg0) => !arg0);
  }, items13);
  const items14 = [guild, callback5];
  callback6 = obj.useCallback(() => {
    const updates = _undefined2.getUpdates();
    let tmp = updates.length > 0;
    if (tmp) {
      tmp = null != ref;
    }
    if (tmp) {
      sortedGuildRoles(16597).batchRoleUpdate(ref.id, updates);
      const obj = sortedGuildRoles(16597);
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
    first(16598).updateRoleOrder(to.from, to);
  }, items15);
  const items16 = [tmp, roleData, tmp21, first, callback5];
  const callback8 = obj.useCallback(() => {
    const items = [first.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = tmp3.edittingRolesHeader;
    }
    let obj = { style: items, children: null };
    items[1] = edittingRolesHeader;
    obj = { title: null };
    const intl = sortedGuildRoles(1236).intl;
    obj = { numRoles: null };
    obj[0] = "" + roleData.length;
    obj[0] = intl.formatToPlainString(sortedGuildRoles(1236).t["38N3Vz"], obj);
    const items1 = [hasRoles(sortedGuildRoles(5688).TableRowGroupTitle, obj), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!c16) {
        const obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = tmp7(1236).intl;
        obj1[1] = intl2.string(tmp7(1236).t["0dOFq+"]);
        obj1[2] = callback5;
        obj1[3] = tmp3.reorderButton;
        const obj2 = { color: null, size: "sm" };
        obj2[0] = first(712).colors.TEXT_LINK;
        const items2 = [tmp6(tmp7(11457).ArrowsUpDownIcon, obj2), ];
        const obj3 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
        obj3[0] = tmp3.reorderButtonText;
        const intl3 = tmp7(1236).intl;
        obj3[3] = intl3.string(tmp7(1236).t["0dOFq+"]);
        items2[1] = tmp6(tmp7(4281).Text, obj3);
        obj1[4] = items2;
        tmpResult = tmp(tmp7(4827).PressableOpacity, obj1);
      }
    }
    items1[1] = tmpResult;
    obj[1] = items1;
    const children = [c22(callback, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj4 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      obj4[0] = tmp3.rolesBody;
      const intl4 = tmp7(1236).intl;
      obj4[3] = intl4.string(tmp7(1236).t.nHcwVl);
      tmp6Result = tmp6(tmp7(4281).Text, obj4);
    }
    children[1] = tmp6Result;
    return c22(callback, { children });
  }, items16);
  const items17 = [tmp, callback2, hasRoles, stateFromStores, tmp7, tmp25];
  const items18 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    let obj = sortedGuildRoles(4130);
    const isThemeDarkResult = obj.isThemeDark(c4);
    let tmp4 = dependencyMap;
    if (dependencyMap) {
      if (isThemeDarkResult) {
        tmp4 = 16599;
        let tmp3Result = tmp3(tmp4);
      } else {
        tmp3Result = tmp3(16600);
      }
    } else {
      if (isThemeDarkResult) {
        tmp3Result = tmp3(16601);
      } else {
        tmp3Result = tmp3(16602);
      }
      if (hasRoles) {
        const items = [first.subheaderContainer, ];
        let num = 0;
        if (_undefined4) {
          num = first(712).space.PX_16;
        }
        obj = { children: null };
        obj = { style: null, children: null };
        const obj1 = { paddingTop: null };
        obj1[0] = num;
        items[1] = obj1;
        obj[0] = items;
        const obj2 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
        obj2[0] = first.subheaderDescription;
        const intl4 = sortedGuildRoles(1236).intl;
        obj2[3] = intl4.string(sortedGuildRoles(1236).t["1ydhVp"]);
        obj[1] = hasRoles(sortedGuildRoles(4281).Text, obj2);
        const items1 = [hasRoles(callback, obj), ];
        const obj3 = { style: null };
        obj3[0] = first.divider;
        items1[1] = hasRoles(callback, obj3);
        obj[0] = items1;
        let tmp9Result = tmp9(callback2, obj);
        const tmp48 = callback2;
        const tmp49 = hasRoles;
        const tmp50 = callback;
      } else {
        const obj4 = { style: null, children: null };
        obj4[0] = first.emptySubheaderContainer;
        const obj5 = { style: null, children: null };
        obj5[0] = first.emptyIlloContainer;
        const items2 = [first.emptyIllo, ];
        let emptyIlloLarge = null;
        if (dependencyMap) {
          emptyIlloLarge = tmp11.emptyIlloLarge;
        }
        const obj6 = { style: null, source: null };
        items2[1] = emptyIlloLarge;
        obj6[0] = items2;
        obj6[1] = tmp3Result;
        obj5[1] = hasRoles(first(5251), obj6);
        const items3 = [hasRoles(callback, obj5), , ];
        const obj7 = { style: null, children: null };
        obj7[0] = first.emptySubheaderBody;
        const obj8 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        obj8[0] = first.subheader;
        const intl = sortedGuildRoles(1236).intl;
        obj8[3] = intl.string(sortedGuildRoles(1236).t.ALlnbi);
        const items4 = [hasRoles(sortedGuildRoles(4281).Heading, obj8), , ];
        const obj9 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
        obj9[0] = first.subheaderBody;
        const intl2 = sortedGuildRoles(1236).intl;
        obj9[3] = intl2.string(sortedGuildRoles(1236).t["1ydhVp"]);
        items4[1] = hasRoles(sortedGuildRoles(4281).Text, obj9);
        const obj10 = { style: null, children: null };
        obj10[0] = first.subheaderButton;
        const obj11 = { text: null, onPress: null };
        const intl3 = sortedGuildRoles(1236).intl;
        obj11[0] = intl3.string(sortedGuildRoles(1236).t.JZZjQK);
        obj11[1] = callback2;
        obj10[1] = hasRoles(sortedGuildRoles(4695).Button, obj11);
        items4[2] = hasRoles(callback, obj10);
        obj7[1] = items4;
        items3[1] = _undefined4(callback, obj7);
        const obj12 = { style: null };
        obj12[0] = first.divider;
        items3[2] = hasRoles(callback, obj12);
        obj4[1] = items3;
        tmp9Result = tmp9(callback, obj4);
        const tmp10 = callback;
        const tmp12 = hasRoles;
        const tmp13 = callback;
        const tmp14 = hasRoles;
        const tmp17 = first(5251);
      }
      return tmp9Result;
    }
  }, items17);
  const items19 = [guild, roleData.length, currentUserId, highestRole, first, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    if (null != setRoleJustCreated) {
      if (null != callback) {
        let obj = str(3917);
        obj = { style: null, children: null };
        obj[0] = first.everyoneWrapper;
        obj = { role: null, locked: null, onPress: null, guildId: null, sorting: false, numMembers: 0, isEveryoneRole: true, isLastRole: true, isFirstRole: true };
        obj[0] = tmp2;
        obj[1] = !obj.isRoleHigher(tmp, currentUserId, highestRole, tmp2);
        obj[2] = function onPress() {
          return callback(closure_6);
        };
        obj[3] = tmp.id;
        obj[1] = hasRoles(first(16603), obj);
        return hasRoles(callback, obj);
      }
    }
    return null;
  }, items18);
  const callback11 = obj.useCallback((role) => {
    let closure_0 = arg1;
    if (null == setRoleJustCreated) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      let obj = str(3917);
      const diff = roleData.length - 1;
      obj = { sorting: null, isEveryoneRole: null, role: null, locked: null, guildId: null, numMembers: null, isFirstRole: null, isLastRole: null, onPress: null, onLongPress: null, onMoveUp: null, onMoveDown: null };
      obj[0] = first;
      let tmp3 = null != tmp;
      const tmp19 = !obj.isRoleHigher(tmp, currentUserId, highestRole, role);
      const tmp22 = hasRoles;
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      obj[1] = tmp3;
      obj[2] = role;
      obj[3] = tmp19;
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      obj[4] = id;
      obj[5] = role.memberCount;
      obj[6] = 0 === arg1;
      obj[7] = arg1 === diff;
      obj[8] = callback3;
      obj[9] = callback4;
      let fn;
      if (0 !== arg1) {
        fn = () => {
          outer1_28({ from: closure_0, to: closure_0 - 1 });
        };
      }
      obj[10] = fn;
      let fn2;
      if (arg1 !== diff) {
        fn2 = () => {
          outer1_28({ from: closure_0, to: closure_0 + 1 });
        };
      }
      obj[11] = fn2;
      return tmp22(first(16603), obj, role.id);
    }
  }, items19);
  const items20 = [callback2, callback6, callback5, hasRoles, first, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: closure_26, text: null };
        const intl = outer1_0(outer1_3[31]).intl;
        obj[1] = intl.string(outer1_0(outer1_3[31]).t["ETE/oC"]);
        return outer1_21(outer1_0(outer1_3[43]).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: closure_27, text: null };
        const intl = outer1_0(outer1_3[31]).intl;
        obj[1] = intl.string(outer1_0(outer1_3[31]).t["R3BPH+"]);
        return outer1_21(outer1_0(outer1_3[43]).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress: closure_23, source: null, accessibilityLabel: null };
        obj[1] = outer1_1(outer1_3[44]);
        const intl = outer1_0(outer1_3[31]).intl;
        obj[2] = intl.string(outer1_0(outer1_3[31]).t.JZZjQK);
        return outer1_21(outer1_0(outer1_3[43]).HeaderActionButton, obj);
      };
    }
    obj[1] = fn2;
    let intl = sortedGuildRoles(1236).intl;
    obj[2] = intl.string(sortedGuildRoles(1236).t.UvdTMj);
    str.setOptions(obj);
  }, items20);
  const items21 = [guild, first, navigation];
  const effect3 = obj.useEffect(() => {
    if (first) {
      if (null != setRoleJustCreated) {
        first(16598).startReordering(tmp2.id);
        const obj2 = first(16598);
      }
      if (obj3.isIOS()) {
        let obj = { gestureEnabled: null };
        obj[0] = !tmp;
        str.setOptions(obj);
      }
    }
    obj = first(16598);
    obj.stopReordering();
  }, items21);
  const items22 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != setRoleJustCreated) {
      if (memberCount <= sortedGuildRoles(16595).MAX_PREFETCH_MEMBER_COUNT) {
        const obj = first(5215);
        const members = obj.requestMembers(tmp.id, "", 0, false);
      }
      const memberCounts = str(5339).fetchMemberCounts(tmp.id);
      const obj2 = str(5339);
    }
  }, items22);
  const items23 = [first];
  const effect5 = obj.useEffect(() => () => {
    if (getUncachedChannelPermissions) {
      outer1_1(outer1_3[29]).stopReordering();
      const obj = outer1_1(outer1_3[29]);
    }
  }, items23);
  let tmp44 = null;
  if (!tmp25) {
    obj = { style: null, children: null };
    obj[0] = tmp.searchWrapper;
    obj = { size: "md", onChange: null };
    obj[1] = callback1;
    obj[1] = hasRoles(tmp3(5913).SearchField, obj);
    tmp44 = hasRoles(callback, obj);
  }
  const items24 = [tmp44, , , ];
  let tmp42Result = null;
  if (first) {
    const items25 = [callback8(), ];
    let tmp47Result = null;
    if (!hasRoles) {
      obj1 = { leading: null, label: null };
      obj2 = { style: null, size: null, source: null };
      obj2[0] = tmp.emptyRolesIcon;
      obj2[1] = tmp3(1297).Icon.Sizes.LARGE;
      obj2[2] = tmp6(8931);
      obj1[0] = tmp47(tmp3(1297).Icon, obj2);
      obj3 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(1236).intl;
      obj3[2] = intl.string(tmp3(1236).t.nZfHsf);
      obj1[1] = tmp47(tmp3(4281).Text, obj3);
      tmp47Result = tmp47(tmp3(7890).FormRow, obj1);
    }
    obj4 = { children: null };
    items25[1] = tmp47Result;
    obj4[0] = items25;
    tmp42Result = tmp42(tmp43, obj4);
  }
  items24[1] = hasRoles(callback, { children: tmp42Result });
  obj5 = { style: tmp.container, children: null };
  obj6 = { ref, header: null, wrapperStyles: null, contentContainerStyle: null, data: null, rowHasChanged: null, onRowMoved: null, disableSorting: null, minDraggableIndex: null, renderRow: null, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  tmp42Result = null;
  let tmp17 = callback(React.useState(() => sortedGuildRoles), 2);
  if (!first) {
    let callback9Result = null;
    if (!tmp21) {
      callback9Result = callback9();
    }
    const items26 = [callback9Result, , ];
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
    obj7[0] = items26;
    tmp42Result = tmp42(tmp43, obj7);
  }
  obj6[1] = tmp42Result;
  obj6[2] = tmp.container;
  const items27 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj6[3] = items27;
  obj6[4] = roleData;
  obj6[5] = callback12;
  obj6[6] = callback7;
  obj6[7] = !first;
  let tmp56;
  if (firstEditableIndex >= 0) {
    tmp56 = firstEditableIndex;
  }
  let obj8 = { children: null };
  obj6[8] = tmp56;
  obj6[9] = callback11;
  obj5[1] = hasRoles(first(15389), obj6);
  items24[2] = hasRoles(callback, obj5);
  items24[3] = hasRoles(sortedGuildRoles(5635).NavScrim, {});
  obj8[0] = items24;
  return c22(callback2, obj8);
};