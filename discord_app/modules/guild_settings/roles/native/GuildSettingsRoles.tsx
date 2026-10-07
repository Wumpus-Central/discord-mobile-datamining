// === Module 17820: GuildSettingsRoles ===

// Module 17820 (GuildSettingsRoles)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import Text_Text from "Text/Text" /* 4892 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import Pressables from "Pressables" /* 5916 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6631 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import ArrowsUpDownIcon from "ArrowsUpDownIcon" /* 11789 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16109 */;
import GuildSettingsRolesManager from "GuildSettingsRolesManager" /* 17823 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 17824 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17831 */;
import actions_GuildActionCreators from "actions/GuildActionCreators" /* 17833 */;
import GuildSettingsModalRolesActionCreatorsDefault from "GuildSettingsModalRolesActionCreators" /* 17834 */;
import MemberRolesAbstractUI from "MemberRolesAbstractUI" /* 17835 */;
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem" /* 17837 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6630 */;
import GuildSettingsModalRolesStore from "GuildSettingsModalRolesStore" /* 17821 */;
import TextStyles from "TextStyles" /* 5922 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const isEveryoneRole = fn(2107).isEveryoneRole;
let closure_15 = fn(17822).GuildSettingsRoleEditSections;
const Constants = fn(1085);
({ GuildSettingsSections: closure_16, AnalyticEvents: closure_17, AnalyticsSections: closure_18, Permissions: closure_19, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const createStyles = fn(4896);
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
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(16);
  [first, dependencyMap] = noop.useState("");
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let obj = require("c");
  [r10027, _slicedToArray] = noop.useState(tmp5);
  noop = obj2.useRef(false);
  if (cResult[2] !== arg0) {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[19]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const formatted = name.name.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
    cResult[2] = arg0;
    cResult[3] = R;
  } else {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[19]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const formatted = name.name.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
  }
  closure_6 = R;
  if (cResult[4] === arg1) {
    class R {
      constructor(arg0) {
        closure_0 = arg0;
        str = arg0.toLowerCase();
        trimmed = str.trim();
        closure_0 = trimmed;
        current = closure_5.current;
        tmp2 = closure_5;
        if (!current) {
          str2 = "";
          current = "" === trimmed;
        }
        if (!current) {
          flag = true;
          tmp2.current = true;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[19]);
          tmp5 = AnalyticEvents;
          trackResult = obj.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Roles" });
        }
        tmp7 = closure_3(trimmed);
        tmp8 = closure_4;
        if ("" === trimmed) {
          found = closure_0;
        } else {
          tmp9 = closure_0;
          found = closure_0.filter((name) => {
            const formatted = name.name.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        tmp8Result = tmp8(found);
        return;
      }
    }
  }
  class E {
    constructor() {
      if (!closure_1) {
        tmp = closure_2;
        str = "";
        if ("" !== closure_2.trim()) {
          tmp5 = closure_6;
          tmp6 = closure_6(tmp);
        } else {
          tmp2 = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_4(closure_0);
        }
      }
      return;
    }
  }
  const items = [arg1, first, arg0, R];
  cResult[4] = arg1;
  cResult[5] = first;
  cResult[6] = R;
  cResult[7] = arg0;
  cResult[8] = E;
  cResult[9] = items;
  const tmp2Result = _slicedToArray(noop.useState(tmp5), 2);
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  [str, closure_3] = noop.useState("");
  const tmp2 = _slicedToArray(noop.useState(() => closure_0), 2);
  _slicedToArray = tmp2[1];
  noop = noop.useRef(false);
  const items = [arg0];
  const setSearchQuery = noop.useCallback((str) => {
    str = str.toLowerCase();
    const trimmed = str.trim();
    let current = ref.current;
    if (!current) {
      current = "" === trimmed;
    }
    if (!current) {
      ref.current = true;
      AnalyticsUtilsDefault.track(constants2.SEARCH_STARTED, { search_type: "Roles" });
    }
    closure_3(trimmed);
    if ("" === trimmed) {
      let found = closure_0;
    } else {
      found = closure_0.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(trimmed);
      });
    }
    closure_4(found);
  }, items);
  const items1 = [arg1, str, arg0, setSearchQuery];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      if ("" !== "".trim()) {
        callback(tmp);
      } else {
        closure_4(closure_0);
      }
      tmp = str;
    }
  }, items1);
  return { hasSearchQuery: "" !== str.trim(), filteredRoles: tmp2[0], setSearchQuery };
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(roleJustCreated) {
      return roleJustCreated.roleJustCreated;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const guildSettingsRolesManagerState = require("GuildSettingsRolesManager").useGuildSettingsRolesManagerState(first);
  if (cResult[1] === arg0) {
    if (cResult[2] === guildSettingsRolesManagerState) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
  }
  const fn2 = function o() {
    if (guildSettingsRolesManagerState) {
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
        ref(dependencyMap[20]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
      };
    }
  };
  const items = [arg0, guildSettingsRolesManagerState];
  cResult[1] = arg0;
  cResult[2] = guildSettingsRolesManagerState;
  cResult[3] = fn2;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = fn2;
  const tmpResult = require("GuildSettingsRolesManager");
}) : ((arg0) => {
  _require = arg0;
  const guildSettingsRolesManagerState = require("GuildSettingsRolesManager").useGuildSettingsRolesManagerState((roleJustCreated) => roleJustCreated.roleJustCreated);
  const items = [arg0, guildSettingsRolesManagerState];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (guildSettingsRolesManagerState) {
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
        ref(dependencyMap[20]).setRoleJustCreated(false);
      }, 1000);
      return () => {
        clearTimeout(closure_0);
        GuildSettingsRolesManager.setRoleJustCreated(false);
      };
    }
  }, items);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      guild = GuildStore.getGuild(closure_0);
      let result = null != guild;
      if (result) {
        result = PermissionStore.canAccessGuildSettings(guild);
      }
      return { canAccessSettings: result, canManageRoles: PermissionStore.can(constants4.MANAGE_ROLES, guild) };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp7);
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  if (cResult[3] === canAccessSettings) {
    if (cResult[4] === canManageRoles) {
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
    }
    const effect = noop.useEffect(tmp9, tmp10);
  }
  const fn2 = function s() {
    let tmp = canManageRoles;
    if (canManageRoles) {
      tmp = canAccessSettings;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
    }
  };
  const items1 = [canManageRoles, canAccessSettings];
  cResult[3] = canAccessSettings;
  cResult[4] = canManageRoles;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn2;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let result = null != guild;
    if (result) {
      result = PermissionStore.canAccessGuildSettings(guild);
    }
    return { canAccessSettings: result, canManageRoles: PermissionStore.can(constants4.MANAGE_ROLES, guild) };
  });
  const canAccessSettings = stateFromStoresObject.canAccessSettings;
  const canManageRoles = stateFromStoresObject.canManageRoles;
  const items1 = [canManageRoles, canAccessSettings];
  const effect = noop.useEffect(() => {
    let tmp = canManageRoles;
    if (canManageRoles) {
      tmp = canAccessSettings;
    }
    if (!tmp) {
      GuildSettingsModalChannelsActionCreatorsDefault.terminate();
      GuildSettingsActionCreatorsDefault.close();
    }
  }, items1);
});
ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(guild[18]).c(135);
  guildId = guildId.guildId;
  let obj = guildId(guild[18]);
  closure_1 = closure_23();
  let obj2 = memberCount;
  const tmp4 = closure_23();
  const ref = memberCount.useRef(null);
  const navigation = guildId(guild[24]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, first1, currentUserId, GuildSettingsModalRolesStore, setSearchQuery, highestRole];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class R {
      constructor() {
        tmp = guildId;
        guild = closure_11.getGuild(guildId);
        id = closure_8.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_10;
          everyoneRole = closure_10.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_9;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_9.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_13;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
        obj.rolesOrder = closure_14.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[25]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    cResult[1] = guildId;
    cResult[2] = R;
  } else {
    class R {
      constructor() {
        tmp = guildId;
        guild = closure_11.getGuild(guildId);
        id = closure_8.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_10;
          everyoneRole = closure_10.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_9;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_9.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_13;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
        obj.rolesOrder = closure_14.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[25]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
  }
  let obj3 = guildId(guild[24]);
  const stateFromStoresObject = guildId(guild[21]).useStateFromStoresObject(first, R);
  guild = stateFromStoresObject.guild;
  const guildEveryoneRole = stateFromStoresObject.guildEveryoneRole;
  memberCount = stateFromStoresObject.memberCount;
  const roleMemberCount = stateFromStoresObject.roleMemberCount;
  ({ sortedGuildRoles, rolesOrder } = stateFromStoresObject);
  currentUserId = stateFromStoresObject.currentUserId;
  highestRole = stateFromStoresObject.highestRole;
  closure_25(ref);
  closure_26(guildId);
  const tmp18 = guildEveryoneRole(obj2.useState(false), 2);
  first1 = tmp18[0];
  GuildStore = tmp18[1];
  const tmp20 = closure_24(sortedGuildRoles, first1);
  ({ filteredRoles, hasSearchQuery } = tmp20);
  setSearchQuery = tmp20.setSearchQuery;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp = guildId;
        guild = closure_11.getGuild(guildId);
        id = closure_8.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_10;
          everyoneRole = closure_10.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_9;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_9.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_13;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
        obj.rolesOrder = closure_14.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[25]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    let items1 = [first1];
    cResult[3] = items1;
  } else {
    class R {
      constructor() {
        tmp = guildId;
        guild = closure_11.getGuild(guildId);
        id = closure_8.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_10;
          everyoneRole = closure_10.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_9;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_9.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_13;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
        obj.rolesOrder = closure_14.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[25]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
  }
  if (cResult[4] === guildId) {
    class R {
      constructor() {
        tmp = guildId;
        guild = closure_11.getGuild(guildId);
        id = closure_8.getId();
        obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
        everyoneRole = null;
        if (null != guild) {
          tmp5 = closure_10;
          everyoneRole = closure_10.getEveryoneRole(guild);
        }
        obj.guildEveryoneRole = everyoneRole;
        id1 = undefined;
        tmp6 = closure_9;
        if (guild != null) {
          id1 = guild.id;
        }
        num = closure_9.getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        obj.memberCount = num;
        id2 = undefined;
        tmp8 = closure_13;
        if (guild != null) {
          id2 = guild.id;
        }
        obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
        obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
        obj.rolesOrder = closure_14.order;
        obj.currentUserId = id;
        highestRole = undefined;
        if (null != guild) {
          tmp11 = closure_2;
          tmp12 = closure_3;
          obj2 = closure_2(closure_3[25]);
          highestRole = obj2.getHighestRole(guild, id);
        }
        obj.highestRole = highestRole;
        return obj;
      }
    }
    tmp(tmp2[21]);
    if (null != rolesOrder) {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    if (cResult[7] === currentUserId) {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
      cResult[14] = tmp26;
    } else {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    if (cResult[15] !== roleMemberCount) {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
      cResult[15] = roleMemberCount;
      cResult[16] = tmp28;
    } else {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    const found = filteredRoles.filter(tmp26);
    const mapped = found.map(tmp28);
    if (null != guild) {
      class R {
        constructor() {
          tmp = guildId;
          guild = closure_11.getGuild(guildId);
          id = closure_8.getId();
          obj = { guild, guildEveryoneRole: null, memberCount: null, roleMemberCount: null, sortedGuildRoles: null, rolesOrder: null, currentUserId: null, highestRole: null };
          everyoneRole = null;
          if (null != guild) {
            tmp5 = closure_10;
            everyoneRole = closure_10.getEveryoneRole(guild);
          }
          obj.guildEveryoneRole = everyoneRole;
          id1 = undefined;
          tmp6 = closure_9;
          if (guild != null) {
            id1 = guild.id;
          }
          num = closure_9.getMemberCount(id1);
          if (num == null) {
            num = 0;
          }
          obj.memberCount = num;
          id2 = undefined;
          tmp8 = closure_13;
          if (guild != null) {
            id2 = guild.id;
          }
          obj.roleMemberCount = closure_13.getRoleMemberCount(id2);
          obj.sortedGuildRoles = closure_10.getSortedRoles(tmp);
          obj.rolesOrder = closure_14.order;
          obj.currentUserId = id;
          highestRole = undefined;
          if (null != guild) {
            tmp11 = closure_2;
            tmp12 = closure_3;
            obj2 = closure_2(closure_3[25]);
            highestRole = obj2.getHighestRole(guild, id);
          }
          obj.highestRole = highestRole;
          return obj;
        }
      }
    }
    cResult[7] = currentUserId;
    cResult[8] = guild;
    cResult[9] = highestRole;
    cResult[10] = filteredRoles;
    cResult[11] = roleMemberCount;
    cResult[12] = mapped;
    cResult[13] = 0;
  }
  class W {
    constructor() {
      if (null != rolesOrder) {
        tmp2 = closure_10;
        tmp3 = guildId;
        manyRoles = closure_10.getManyRoles(guildId, tmp);
      } else {
        manyRoles = [];
      }
      return manyRoles;
    }
  }
  cResult[4] = guildId;
  cResult[5] = rolesOrder;
  cResult[6] = W;
  let tmpResult = guildId(guild[21]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  guild = undefined;
  let memberCount;
  let rolesOrder;
  let currentUserId;
  let highestRole;
  let sorting;
  let filteredRoles;
  let hasSearchQuery;
  closure_20 = undefined;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let tmp = callback3();
  importDefault = tmp;
  const ref = memberCount.useRef(null);
  const navigation = guildId(guild[24]).useNavigation();
  let obj2 = guildId(guild[24]);
  let items = [sorting, highestRole, rolesOrder, hasSearchQuery, filteredRoles, currentUserId];
  const stateFromStoresObject = guildId(guild[21]).useStateFromStoresObject(items, () => {
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
  callback5(ref);
  callback6(guildId);
  const tmp9 = guildEveryoneRole(memberCount.useState(false), 2);
  sorting = tmp9[0];
  closure_12 = tmp9[1];
  const tmp11 = callback4(sortedGuildRoles, sorting);
  filteredRoles = tmp11.filteredRoles;
  hasSearchQuery = tmp11.hasSearchQuery;
  const setSearchQuery = tmp11.setSearchQuery;
  let obj3 = guildId(guild[21]);
  let items1 = [highestRole];
  const stateFromStoresArray = guildId(guild[21]).useStateFromStoresArray(items1, () => {
    if (null != rolesOrder) {
      let manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  });
  let items2 = [sortedGuildRoles, stateFromStoresArray, rolesOrder, roleMemberCount, filteredRoles, guild, currentUserId, highestRole];
  const memo = memberCount.useMemo(() => {
    const found = null != rolesOrder ? stateFromStoresArray : filteredRoles.filter((item) => !sortedGuildRoles(item));
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
      num = mapped.findIndex((role) => navigation(guild[25]).isRoleHigher(closure_1_3, currentUserId, highestRole, role.role));
    }
    const diff = sortedGuildRoles.length - 1;
    return { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
  }, items2);
  const roleData = memo.roleData;
  const firstEditableIndex = memo.firstEditableIndex;
  const hasRoles = memo.hasRoles;
  let tmp15 = sorting;
  if (!sorting) {
    tmp15 = tmp14 < 10;
  }
  closure_20 = tmp15;
  let items3 = [setSearchQuery];
  const items4 = [guild];
  const callback = obj.useCallback((str) => {
    setSearchQuery(str.toLowerCase());
  }, items3);
  callback1 = obj.useCallback(() => {
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
  }, items4);
  const items5 = [navigation];
  callback2 = obj.useCallback((role) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    navigation.push(constants.ROLE_EDIT_REFRESH, { role, newRole: flag, section: setSearchQuery.DISPLAY });
  }, items5);
  const items6 = [setSearchQuery];
  callback3 = obj.useCallback(() => {
    closure_12(true);
    setSearchQuery("");
  }, items6);
  const items7 = [setSearchQuery];
  callback4 = obj.useCallback(() => {
    setSearchQuery("");
    closure_12((arg0) => !arg0);
  }, items7);
  const items8 = [guild, callback4];
  callback5 = obj.useCallback(() => {
    const updates = GuildSettingsModalRolesStore.getUpdates();
    let tmp = updates.length > 0;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      actions_GuildActionCreators.batchRoleUpdate(guild.id, updates);
    }
    callback4();
  }, items8);
  const items9 = [firstEditableIndex];
  callback6 = obj.useCallback((to) => {
    if (firstEditableIndex >= 0) {
      const _Math = Math;
      to = Math.max(to.to, tmp);
    } else {
      to = to.to;
    }
    GuildSettingsModalRolesActionCreatorsDefault.updateRoleOrder(to.from, to);
  }, items9);
  const items10 = [tmp, roleData, hasSearchQuery, sorting, callback4];
  const callback7 = obj.useCallback(() => {
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
    const items1 = [closure_2_20(TableRowGroup.TableRowGroupTitle, obj2), ];
    let tmpResult = null;
    if (!first) {
      tmpResult = null;
      if (!hasSearchQuery) {
        const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const intl2 = util.intl;
        obj4.accessibilityLabel = intl2.string(util.t["0dOFq+"]);
        obj4.onPress = callback4;
        obj4.style = closure_1.reorderButton;
        const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
        const items2 = [closure_2_20(ArrowsUpDownIcon.ArrowsUpDownIcon, obj5), ];
        const obj6 = { style: closure_1.reorderButtonText, variant: "text-sm/medium", color: "text-link", children: null };
        const intl3 = util.intl;
        obj6.children = intl3.string(util.t["0dOFq+"]);
        items2[1] = closure_2_20(Text_Text.Text, obj6);
        obj4.children = items2;
        tmpResult = guild(Pressables.PressableOpacity, obj4);
      }
    }
    items1[1] = tmpResult;
    obj.children = items1;
    const children = [guild(timestampProducer, obj), ];
    let tmp6Result = null;
    if (first) {
      const obj7 = { style: closure_1.rolesBody, variant: "text-sm/medium", color: "interactive-text-default", children: null };
      const intl4 = util.intl;
      obj7.children = intl4.string(util.t.nHcwVl);
      tmp6Result = closure_2_20(Text_Text.Text, obj7);
    }
    children[1] = tmp6Result;
    return guild(timestampProducer, { children });
  }, items10);
  const items11 = [tmp, callback1, hasRoles, tmp15];
  const items12 = [tmp, callback2, guild, currentUserId, highestRole, guildEveryoneRole];
  const callback8 = obj.useCallback(() => {
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
      obj3.children = closure_2_20(Text_Text.Text, obj5);
      const items1 = [closure_2_20(timestampProducer, obj3), ];
      const obj6 = { style: closure_1.divider };
      items1[1] = closure_2_20(timestampProducer, obj6);
      obj2.children = items1;
      let tmpResult = guild(closure_2_22, obj2);
    } else {
      const obj = { style: closure_1.emptySubheaderContainer, children: null };
      const obj7 = { style: closure_1.emptyIlloContainer, children: closure_2_20(MemberRolesAbstractUI.MemberRolesAbstractUI, {}) };
      const items2 = [closure_2_20(timestampProducer, obj7), , ];
      const obj8 = { style: closure_1.emptySubheaderBody, children: null };
      const obj9 = { style: closure_1.subheader, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj9.children = intl.string(util.t.ALlnbi);
      const items3 = [closure_2_20(Text_Text.Heading, obj9), , ];
      const obj10 = { style: closure_1.subheaderBody, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj10.children = intl2.string(util.t["1ydhVp"]);
      items3[1] = closure_2_20(Text_Text.Text, obj10);
      const obj11 = { style: closure_1.subheaderButton, children: null };
      const obj12 = { text: null, onPress: null };
      const intl3 = util.intl;
      obj12.text = intl3.string(util.t.JZZjQK);
      obj12.onPress = callback1;
      obj11.children = closure_2_20(components_Button_Button.Button, obj12);
      items3[2] = closure_2_20(timestampProducer, obj11);
      obj8.children = items3;
      items2[1] = guild(timestampProducer, obj8);
      const obj13 = { style: closure_1.divider };
      items2[2] = closure_2_20(timestampProducer, obj13);
      obj.children = items2;
      tmpResult = guild(timestampProducer, obj);
    }
    return tmpResult;
  }, items11);
  const items13 = [guild, roleData.length, currentUserId, highestRole, sorting, callback2, callback3, callback6];
  const callback9 = obj.useCallback(() => {
    if (null != guild) {
      if (null != guildEveryoneRole) {
        const obj = PermissionUtilsAll;
        const obj2 = { style: closure_1.everyoneWrapper, children: null };
        const obj3 = {
          role: guildEveryoneRole,
          locked: !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole),
          onPress() {
                return callback2(guildEveryoneRole);
              },
          guildId: guild.id,
          sorting: false,
          numMembers: 0,
          isEveryoneRole: true,
          isLastRole: true,
          isFirstRole: true
        };
        obj2.children = closure_2_20(GuildSettingsRoleItemDefault, obj3);
        return closure_2_20(timestampProducer, obj2);
      }
    }
    return null;
  }, items12);
  const callback10 = obj.useCallback((role, from) => {
    if (null == guild) {
      return closure_20(callback2, {});
    } else {
      role = role.role;
      const obj = navigation(guild[25]);
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
      obj2.onPress = callback2;
      obj2.onLongPress = callback3;
      let fn;
      if (0 !== from) {
        fn = () => {
          callback6({ from, to: from - 1 });
        };
      }
      obj2.onMoveUp = fn;
      let fn2;
      if (from !== diff) {
        fn2 = () => {
          callback6({ from, to: from + 1 });
        };
      }
      obj2.onMoveDown = fn2;
      return closure_20(closure_1(guild[37]), obj2, role.id);
    }
  }, items13);
  const items14 = [callback1, callback5, callback4, hasRoles, sorting, navigation];
  const callback11 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
  const effect = obj.useEffect(() => {
    let fn;
    if (first) {
      fn = () => {
        const obj = { onPress: onPress2, text: null };
        const intl = guildId(guild[31]).intl;
        obj.text = intl.string(guildId(guild[31]).t["ETE/oC"]);
        return closure_20(guildId(guild[38]).HeaderActionButton, obj);
      };
    }
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (first) {
      let fn2 = () => {
        const obj = { onPress: onPress3, text: null };
        const intl = guildId(guild[31]).intl;
        obj.text = intl.string(guildId(guild[31]).t["R3BPH+"]);
        return closure_20(guildId(guild[38]).HeaderActionButton, obj);
      };
    } else if (hasRoles) {
      fn2 = () => {
        const obj = { onPress, source: closure_1(guild[39]), accessibilityLabel: null };
        const intl = guildId(guild[31]).intl;
        obj.accessibilityLabel = intl.string(guildId(guild[31]).t.JZZjQK);
        return closure_20(guildId(guild[38]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    let intl = util.intl;
    obj.headerTitle = intl.string(util.t.UvdTMj);
    navigation.setOptions(obj);
  }, items14);
  const items15 = [guild, sorting, navigation];
  const effect1 = obj.useEffect(() => {
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
  }, items15);
  const items16 = [guild, memberCount];
  const effect2 = obj.useEffect(() => {
    if (null != guild) {
      if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
        const obj = GuildActionCreatorsDefault;
        const members = obj.requestMembers(guild.id, "", 0, false);
      }
      const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(guild.id);
    }
  }, items16);
  const items17 = [sorting];
  const effect3 = obj.useEffect(() => () => {
    if (sorting) {
      closure_1(guild[29]).stopReordering();
      const obj = closure_1(guild[29]);
    }
  }, items17);
  let tmp34 = null;
  if (!tmp15) {
    let obj5 = { style: tmp.searchWrapper, children: null };
    let obj6 = { size: "md", onChange: callback };
    obj5.children = closure_20(tmp3(tmp4[44]).SearchField, obj6);
    tmp34 = closure_20(roleMemberCount, obj5);
  }
  const items18 = [tmp34, , , ];
  let tmp32Result = null;
  if (sorting) {
    const items19 = [callback7(), ];
    let tmp37Result = null;
    if (!hasRoles) {
      let obj7 = { leading: null, label: null };
      let obj8 = { style: tmp.emptyRolesIcon, size: tmp3(tmp4[46]).Icon.Sizes.LARGE, source: require("module_9269") };
      obj7.leading = tmp37(tmp3(tmp4[46]).Icon, obj8);
      let obj9 = { variant: "text-md/semibold", color: "interactive-text-default", children: null };
      let intl = tmp3(tmp4[31]).intl;
      obj9.children = intl.string(tmp3(tmp4[31]).t.nZfHsf);
      obj7.label = tmp37(tmp3(tmp4[34]).Text, obj9);
      tmp37Result = tmp37(tmp3(tmp4[45]).FormRow, obj7);
    }
    let obj10 = { children: null };
    items19[1] = tmp37Result;
    obj10.children = items19;
    tmp32Result = tmp32(tmp33, obj10);
  }
  items18[1] = closure_20(roleMemberCount, { children: tmp32Result });
  let obj11 = { style: tmp.container, children: null };
  let obj12 = { ref, header: null, wrapperStyles: null, contentContainerStyle: null, data: null, rowHasChanged: null, onRowMoved: null, disableSorting: null, minDraggableIndex: null, renderRow: null, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true };
  let tmp32Result2 = null;
  let obj4 = guildId(guild[21]);
  if (!sorting) {
    let callback8Result = null;
    if (!hasSearchQuery) {
      callback8Result = callback8();
    }
    const items20 = [callback8Result, , ];
    let callback9Result = null;
    if (!hasSearchQuery) {
      callback9Result = callback9();
    }
    items20[1] = callback9Result;
    let callback7Result = null;
    if (hasRoles) {
      callback7Result = callback7();
    }
    let obj13 = { children: null };
    items20[2] = callback7Result;
    obj13.children = items20;
    tmp32Result2 = tmp32(tmp33, obj13);
  }
  obj12.header = tmp32Result2;
  obj12.wrapperStyles = tmp.container;
  const items21 = [tmp.scrollContainer, guildId.contentContainerStyle];
  obj12.contentContainerStyle = items21;
  obj12.data = roleData;
  obj12.rowHasChanged = callback11;
  obj12.onRowMoved = callback6;
  obj12.disableSorting = !sorting;
  let tmp47;
  if (firstEditableIndex >= 0) {
    tmp47 = firstEditableIndex;
  }
  const obj14 = { children: null };
  obj12.minDraggableIndex = tmp47;
  obj12.renderRow = callback10;
  obj11.children = closure_20(require("SortableListView"), obj12);
  items18[2] = closure_20(roleMemberCount, obj11);
  items18[3] = closure_20(guildId(guild[49]).NavScrim, {});
  obj14.children = items18;
  return callback1(callback2, obj14);
});