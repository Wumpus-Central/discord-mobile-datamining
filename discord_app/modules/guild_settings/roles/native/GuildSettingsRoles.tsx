// === Module 16824: ConnectedGuildSettingsModalRoles ===

// Module 16824 (ConnectedGuildSettingsModalRoles)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1984 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import handleInviteData from "handleInviteData" /* 4295 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import getRoleMemberCount from "getRoleMemberCount" /* 6928 */;
import handleGuildRoleCreateOrUpdate from "handleGuildRoleCreateOrUpdate" /* 16825 */;
import { GuildSettingsRoleEditSections as closure_16 } from "MAX_SUBCATEGORIES" /* 16826 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

const require = fn;
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
({ GuildSettingsSections: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20, Fonts } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingBottom: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[4] = { paddingBottom: 16, alignItems: "center" };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, width: "100%", flex: 1, alignItems: "center" };
createCacheKey[6] = { marginTop: 28, width: "100%" };
createCacheKey[7] = { marginTop: 0, aspectRatio: 2.75, width: "100%", height: "auto" };
createCacheKey[8] = { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" };
let obj3 = {};
let merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.marginTop = 16;
createCacheKey[9] = obj3;
createCacheKey[10] = { marginTop: 8, textAlign: "center" };
createCacheKey[11] = { flexGrow: 0, marginTop: 16 };
createCacheKey[12] = { lineHeight: 18, textAlign: "center" };
createCacheKey[13] = { height: StyleSheet.hairlineWidth, width: "100%" };
createCacheKey[14] = { marginTop: 2, marginBottom: 24 };
createCacheKey[15] = { marginTop: ThemesDefault.space.PX_16, marginLeft: ThemesDefault.space.PX_16 };
createCacheKey[16] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[17] = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createCacheKey[18] = { marginLeft: 8 };
createCacheKey[19] = { padding: 16, paddingTop: 8, lineHeight: 18 };
createCacheKey[20] = { opacity: 0.4 };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default function ConnectedGuildSettingsModalRoles(guildId) {
  guildId = guildId.guildId;
  let React;
  let memberCount;
  let sortedGuildRoles;
  let rolesOrder;
  let currentUserId;
  let highestRole;
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
  let first = tmp;
  let obj = React;
  const ref = React.useRef(null);
  obj1 = sortedGuildRoles(1500);
  const navigation = obj1.useNavigation();
  const tmp7 = first(7925)();
  let obj2 = sortedGuildRoles(589);
  let items = [memberCount];
  const stateFromStores = obj2.useStateFromStores(items, () => memberCount.theme);
  let obj3 = sortedGuildRoles(589);
  let items1 = [highestRole, currentUserId, sortedGuildRoles, c15, closure_14, rolesOrder];
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
      highestRole = str(4026).getHighestRole(guild, id);
      const obj2 = str(4026);
    }
    obj[7] = highestRole;
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  React = guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  let callback = guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  rolesOrder = stateFromStoresObject.rolesOrder;
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  sortedGuildRoles = ref;
  let obj4 = sortedGuildRoles(16827);
  const guildSettingsRolesManagerState = obj4.useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
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
        ref(closure_1_3[19]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        sortedGuildRoles(table[19]).setRoleJustCreated(false);
      };
    }
  }, items2);
  sortedGuildRoles = guildId;
  first = undefined;
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
  const canManageRoles = stateFromStoresObject1.canManageRoles;
  let items4 = [canManageRoles, canAccessSettings];
  const effect = React.useEffect(() => {
    let tmp = str;
    if (str) {
      tmp = first;
    }
    if (!tmp) {
      first(15405).terminate();
      const obj = first(15405);
      first(8874).close();
      const obj2 = first(8874);
    }
  }, items4);
  const tmp14 = callback(React.useState(false), 2);
  first = tmp14[0];
  closure_14 = tmp14[1];
  React = undefined;
  callback = undefined;
  const tmp16 = callback(React.useState(""), 2);
  let str = tmp16[0];
  dependencyMap = tmp16[1];
  [tmp18, c4] = callback(React.useState(() => sortedGuildRoles), 2);
  React = React.useRef(false);
  const items5 = [sortedGuildRoles];
  callback = React.useCallback((str) => {
    str = str.toLowerCase();
    const trimmed = str.trim();
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
      found = trimmed.filter((item, index) => {
        const formatted = item.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    _undefined(found);
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
  closure_16 = tmp21;
  let obj6 = sortedGuildRoles(589);
  const items7 = [currentUserId];
  const stateFromStoresArray = obj6.useStateFromStoresArray(items7, () => {
    if (null != rolesOrder) {
      let manyRoles = currentUserId.getManyRoles(sortedGuildRoles, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  const items8 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, tmp18, guild, currentUserId, highestRole];
  const memo = React.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : c15.filter((item, index) => !callback(item));
    const mapped = found.map((item, index) => {
      const obj = { role: item, memberCount: null };
      let num;
      if (closure_8 != null) {
        num = tmp[item.id];
      }
      if (num == null) {
        num = 0;
      }
      obj[1] = num;
      return obj;
    });
    let num = 0;
    if (null != closure_5) {
      num = mapped.findIndex((item, index) => str(closure_1_3[25]).isRoleHigher(closure_5, closure_11, closure_12, item.role));
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items8);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp25 = first;
  if (!first) {
    tmp25 = tmp24 < 10;
  }
  closure_22 = tmp25;
  const items9 = [callback];
  const items10 = [guild];
  const callback1 = obj.useCallback((str) => {
    callback(str.toLowerCase());
  }, items9);
  callback2 = obj.useCallback(() => {
    first(698);
    const obj = { type: roleData.GUILD_ROLE_CREATION_MODAL };
    let id;
    if (ref != null) {
      id = ref.id;
    }
    const merged = Object.assign(sortedGuildRoles(5042).collectGuildAnalyticsMetadata(id));
    obj.track(stateFromStoresArray.OPEN_MODAL, obj);
    const obj3 = sortedGuildRoles(5042);
    first(16828).open();
    const tmpResult = first(16828);
  }, items10);
  const items11 = [navigation];
  callback3 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    str.push(callback.ROLE_EDIT_REFRESH, { role, newRole: flag, section: constants.DISPLAY });
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
      sortedGuildRoles(16837).batchRoleUpdate(ref.id, updates);
      const obj = sortedGuildRoles(16837);
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
    first(16838).updateRoleOrder(to.from, to);
  }, items15);
  const items16 = [tmp, roleData, tmp21, first, callback5];
  const callback8 = obj.useCallback(() => {
    const items = [first.rolesHeader, ];
    let edittingRolesHeader;
    if (first) {
      edittingRolesHeader = first.edittingRolesHeader;
    }
    items[1] = edittingRolesHeader;
    const intl = sortedGuildRoles(1236).intl;
    const obj = { numRoles: "" + roleData.length };
    obj[0] = intl.formatToPlainString(sortedGuildRoles(1236).t["38N3Vz"], obj);
    const items1 = [hasRoles(sortedGuildRoles(6286).TableRowGroupTitle, obj), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!closure_16) {
        obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = sortedGuildRoles(1236).intl;
        obj1[1] = intl2.string(sortedGuildRoles(1236).t["0dOFq+"]);
        obj1[2] = callback5;
        obj1[3] = first.reorderButton;
        const obj2 = { color: null, size: "sm" };
        obj2[0] = first(712).colors.TEXT_LINK;
        const items2 = [hasRoles(sortedGuildRoles(11329).ArrowsUpDownIcon, obj2), ];
        const obj3 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
        obj3[0] = first.reorderButtonText;
        const intl3 = sortedGuildRoles(1236).intl;
        obj3[3] = intl3.string(sortedGuildRoles(1236).t["0dOFq+"]);
        items2[1] = hasRoles(sortedGuildRoles(4734).Text, obj3);
        obj1[4] = items2;
        tmpResult = callback(sortedGuildRoles(5433).PressableOpacity, obj1);
      }
    }
    items1[1] = tmpResult;
    obj[1] = items1;
    const children = [callback(callback, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj4 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      obj4[0] = first.rolesBody;
      const intl4 = sortedGuildRoles(1236).intl;
      obj4[3] = intl4.string(sortedGuildRoles(1236).t.nHcwVl);
      tmp6Result = hasRoles(sortedGuildRoles(4734).Text, obj4);
    }
    children[1] = tmp6Result;
    return callback(callback, { children });
  }, items16);
  const items17 = [tmp, callback2, hasRoles, stateFromStores, tmp7, tmp25];
  const items18 = [tmp, callback3, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback9 = obj.useCallback(() => {
    let obj = sortedGuildRoles(1363);
    const isThemeDarkResult = obj.isThemeDark(c4);
    let tmp4 = dependencyMap;
    if (dependencyMap) {
      if (isThemeDarkResult) {
        tmp4 = 16839;
        let tmp3Result = first(tmp4);
      } else {
        tmp3Result = first(16840);
      }
    } else {
      if (isThemeDarkResult) {
        tmp3Result = first(16841);
      } else {
        tmp3Result = first(16842);
      }
      if (hasRoles) {
        const items = [first.subheaderContainer, ];
        let num = 0;
        if (callback) {
          num = first(712).space.PX_16;
        }
        obj = { style: null, children: null };
        obj1 = { paddingTop: null };
        obj1[0] = num;
        items[1] = obj1;
        obj[0] = items;
        const obj2 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
        obj2[0] = first.subheaderDescription;
        const intl4 = sortedGuildRoles(1236).intl;
        obj2[3] = intl4.string(sortedGuildRoles(1236).t["1ydhVp"]);
        obj[1] = hasRoles(sortedGuildRoles(4734).Text, obj2);
        const items1 = [hasRoles(callback, obj), ];
        const obj3 = { style: null };
        obj3[0] = first.divider;
        items1[1] = hasRoles(callback, obj3);
        obj[0] = items1;
        let tmp9Result = callback(callback2, obj);
      } else {
        const obj4 = { style: null, children: null };
        obj4[0] = first.emptySubheaderContainer;
        const obj5 = { style: null, children: null };
        obj5[0] = first.emptyIlloContainer;
        const items2 = [first.emptyIllo, ];
        let emptyIlloLarge = null;
        if (dependencyMap) {
          emptyIlloLarge = first.emptyIlloLarge;
        }
        const obj6 = { style: null, source: null };
        items2[1] = emptyIlloLarge;
        obj6[0] = items2;
        obj6[1] = tmp3Result;
        obj5[1] = hasRoles(first(5449), obj6);
        const items3 = [hasRoles(callback, obj5), , ];
        const obj7 = { style: null, children: null };
        obj7[0] = first.emptySubheaderBody;
        const obj8 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        obj8[0] = first.subheader;
        const intl = sortedGuildRoles(1236).intl;
        obj8[3] = intl.string(sortedGuildRoles(1236).t.ALlnbi);
        const items4 = [hasRoles(sortedGuildRoles(4734).Heading, obj8), , ];
        const obj9 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
        obj9[0] = first.subheaderBody;
        const intl2 = sortedGuildRoles(1236).intl;
        obj9[3] = intl2.string(sortedGuildRoles(1236).t["1ydhVp"]);
        items4[1] = hasRoles(sortedGuildRoles(4734).Text, obj9);
        const obj10 = { style: null, children: null };
        obj10[0] = first.subheaderButton;
        const obj11 = { text: null, onPress: null };
        const intl3 = sortedGuildRoles(1236).intl;
        obj11[0] = intl3.string(sortedGuildRoles(1236).t.JZZjQK);
        obj11[1] = callback2;
        obj10[1] = hasRoles(sortedGuildRoles(4745).Button, obj11);
        items4[2] = hasRoles(callback, obj10);
        obj7[1] = items4;
        items3[1] = callback(callback, obj7);
        const obj12 = { style: null };
        obj12[0] = first.divider;
        items3[2] = hasRoles(callback, obj12);
        obj4[1] = items3;
        tmp9Result = callback(callback, obj4);
        const tmp17 = first(5449);
      }
      return tmp9Result;
    }
  }, items17);
  const items19 = [guild, roleData.length, currentUserId, highestRole, first, callback3, callback4, callback7];
  const callback10 = obj.useCallback(() => {
    if (null != user) {
      if (null != callback) {
        str(4026);
        let obj = { style: null, children: null };
        obj[0] = first.everyoneWrapper;
        obj = { role: null, locked: null, onPress: null, guildId: null, sorting: false, numMembers: 0, isEveryoneRole: true, isLastRole: true, isFirstRole: true };
        obj[0] = callback;
        obj[1] = !obj.isRoleHigher(user, currentUserId, highestRole, callback);
        obj[2] = function onPress() {
          return callback(closure_6);
        };
        obj[3] = user.id;
        obj[1] = hasRoles(first(16843), obj);
        return hasRoles(callback, obj);
      }
    }
    return null;
  }, items18);
  const callback11 = obj.useCallback((role) => {
    closure_0 = arg1;
    if (null == user) {
      return hasRoles(callback2, {});
    } else {
      role = role.role;
      str(4026);
      const diff = roleData.length - 1;
      const obj = { sorting: null, isEveryoneRole: null, role: null, locked: null, guildId: null, numMembers: null, isFirstRole: null, isLastRole: null, onPress: null, onLongPress: null, onMoveUp: null, onMoveDown: null };
      obj[0] = first;
      let tmp3 = null != user;
      const tmp19 = !obj.isRoleHigher(user, currentUserId, highestRole, role);
      if (tmp3) {
        tmp3 = roleMemberCount(role);
      }
      obj[1] = tmp3;
      obj[2] = role;
      obj[3] = tmp19;
      let id;
      if (user != null) {
        id = user.id;
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
          callback7({ from: closure_0, to: closure_0 - 1 });
        };
      }
      obj[10] = fn;
      let fn2;
      if (arg1 !== diff) {
        fn2 = () => {
          callback7({ from: closure_0, to: closure_0 + 1 });
        };
      }
      obj[11] = fn2;
      return hasRoles(first(16843), obj, role.id);
    }
  }, items19);
  const items20 = [callback2, callback6, callback5, hasRoles, first, navigation];
  const callback12 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect2 = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: closure_26, text: null };
        const intl = sortedGuildRoles(closure_1_3[31]).intl;
        obj[1] = intl.string(sortedGuildRoles(closure_1_3[31]).t["ETE/oC"]);
        return hasRoles(sortedGuildRoles(closure_1_3[43]).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: closure_27, text: null };
        const intl = sortedGuildRoles(closure_1_3[31]).intl;
        obj[1] = intl.string(sortedGuildRoles(closure_1_3[31]).t["R3BPH+"]);
        return hasRoles(sortedGuildRoles(closure_1_3[43]).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress: closure_23, source: first(closure_1_3[44]), accessibilityLabel: null };
        const intl = sortedGuildRoles(closure_1_3[31]).intl;
        obj[2] = intl.string(sortedGuildRoles(closure_1_3[31]).t.JZZjQK);
        return hasRoles(sortedGuildRoles(closure_1_3[43]).HeaderActionButton, obj);
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
      if (null != closure_5) {
        first(16838).startReordering(tmp2.id);
        const obj2 = first(16838);
      }
      if (obj3.isIOS()) {
        let obj = { gestureEnabled: null };
        obj[0] = !tmp;
        str.setOptions(obj);
      }
      obj3 = sortedGuildRoles(500);
    }
    obj = first(16838);
    obj.stopReordering();
  }, items21);
  const items22 = [guild, memberCount];
  const effect4 = obj.useEffect(() => {
    if (null != user) {
      if (memberCount <= sortedGuildRoles(16835).MAX_PREFETCH_MEMBER_COUNT) {
        const obj = first(6778);
        const members = obj.requestMembers(user.id, "", 0, false);
      }
      const memberCounts = str(6929).fetchMemberCounts(user.id);
      const obj2 = str(6929);
    }
  }, items22);
  const items23 = [first];
  const effect5 = obj.useEffect(() => () => {
    if (closure_13) {
      first(closure_1_3[29]).stopReordering();
      const obj = first(closure_1_3[29]);
    }
  }, items23);
  let tmp44 = null;
  if (!tmp25) {
    obj = { style: null, children: null };
    obj[0] = tmp.searchWrapper;
    obj = { size: "md", onChange: null };
    obj[1] = callback1;
    obj[1] = hasRoles(tmp3(7337).SearchField, obj);
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
      obj2[2] = tmp6(8861);
      obj1[0] = tmp47(tmp3(1297).Icon, obj2);
      obj3 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(1236).intl;
      obj3[2] = intl.string(tmp3(1236).t.nZfHsf);
      obj1[1] = tmp47(tmp3(4734).Text, obj3);
      tmp47Result = tmp47(tmp3(8083).FormRow, obj1);
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
  obj5[1] = hasRoles(first(15637), obj6);
  items24[2] = hasRoles(callback, obj5);
  items24[3] = hasRoles(sortedGuildRoles(6550).NavScrim, {});
  obj8[0] = items24;
  return closure_22(callback2, obj8);
};