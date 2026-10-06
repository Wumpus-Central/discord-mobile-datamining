// discord_app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import GuildRoleRecord from "../../../../records/GuildRoleRecord.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import GuildRoleMemberActionCreatorsAll from "../../GuildRoleMemberActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import ArrowsUpDownIcon2 from "../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../../GuildSettingsModalChannelsActionCreators.tsx";
import GuildSettingsConstants from "../../GuildSettingsConstants.tsx";
import GuildSettingsRolesManager from "GuildSettingsRolesManager.tsx";
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators.tsx";
import GuildSettingsRolesUtils from "../GuildSettingsRolesUtils.tsx";
import actions_GuildActionCreators from "../../../../actions/native/GuildActionCreators.tsx";
import GuildSettingsModalRolesActionCreatorsDefault from "../GuildSettingsModalRolesActionCreators.tsx";
import MemberRolesAbstractUI from "../../../../design/components/mana-assets/native/generated/MemberRolesAbstractUI.native.tsx";
import GuildSettingsRoleItemDefault from "GuildSettingsRoleItem.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore_mod from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildRoleMemberCountStore from "../../GuildRoleMemberCountStore.tsx";
import GuildSettingsModalRolesStore from "../GuildSettingsModalRolesStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_12, guildId, importDefault, navigation, role, str2, tmp12, tmp8Result, to, trackResult;

let Fonts;
let StyleSheet;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: metroRequire, StyleSheet } = react_native);
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
let GuildStore = GuildStore_mod;
let closure_15 = GuildSettingsConstants.GuildSettingsRoleEditSections;
({
  GuildSettingsSections: closure_16,
  AnalyticEvents: closure_17,
  AnalyticsSections: closure_18,
  Permissions: closure_19,
  Fonts,
} = Constants);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1 },
  scrollContainer: { paddingHorizontal: 12 },
  searchWrapper: obj2,
  subheaderContainer: obj3,
  emptySubheaderContainer: { paddingBottom: 16, alignItems: "center" },
  emptyIlloContainer: { width: "100%", flex: 1, alignItems: "center", paddingTop: 28 },
  emptySubheaderBody: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24, alignItems: "center" },
  subheader: obj4,
  subheaderBody: { marginTop: 8, textAlign: "center" },
  subheaderButton: { flexGrow: 0, marginTop: 16 },
  subheaderDescription: { lineHeight: 18, textAlign: "center" },
  divider: { height: StyleSheet.hairlineWidth, width: "100%" },
  everyoneWrapper: { marginTop: 2, marginBottom: 24 },
  edittingRolesHeader: obj5,
  rolesHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  reorderButton: { marginBottom: 8, flexDirection: "row", alignItems: "center" },
  reorderButtonText: { marginLeft: 8 },
  rolesBody: { padding: 16, paddingTop: 8, lineHeight: 18 },
  emptyRolesIcon: { opacity: 0.4 },
};
obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { marginTop: 16 };
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5 = { marginTop: nativeDefault.space.PX_16, marginLeft: nativeDefault.space.PX_16 };
let closure_23 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_3;
      let first;
      let ref;
      let tmp5;
      _require = arg0;
      importDefault = arg1;
      let obj = require("react");
      const cResult = obj.c(16);
      [first, dependencyMap] = react.useState("");
      if (cResult[0] !== arg0) {
        const fn = function o() {
          return closure_0;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmp2Result = _slicedToArray(react.useState(tmp5), 2);
      [r10027, _slicedToArray] = tmp2Result;
      react = obj2.useRef(false);
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
                const str = name.name;
                const formatted = str.toLowerCase();
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
                const str = name.name;
                const formatted = str.toLowerCase();
                return formatted.includes(trimmed);
              });
            }
            tmp8Result = tmp8(found);
            return;
          }
        }
      }
      let closure_6 = R;
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
                const str = name.name;
                const formatted = str.toLowerCase();
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
            if ("" !== first.trim()) {
              closure_6(first);
            } else {
              _slicedToArray(closure_0);
            }
          }
        }
      }
      const items = [arg1, first, arg0, R];
      cResult[4] = arg1;
      cResult[5] = first;
      cResult[6] = R;
      cResult[7] = arg0;
      cResult[8] = E;
      cResult[9] = items;
    }
  : (arg0, arg1) => {
      let closure_3;
      let closure_4;
      let first;
      let ref;
      let str;
      let closure_0 = arg0;
      let closure_1 = arg1;
      [str, closure_3] = react.useState("");
      [first, _slicedToArray] = react.useState(() => closure_0);
      react = react.useRef(false);
      const items = [arg0];
      const setSearchQuery = react.useCallback((str) => {
        let found;
        str = str.toLowerCase();
        const trimmed = str.trim();
        const current = ref.current || "" === trimmed;
        if (!current) {
          ref.current = true;
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.SEARCH_STARTED, { search_type: "Roles" });
        }
        closure_3(trimmed);
        if ("" === trimmed) {
          found = closure_0;
        } else {
          found = closure_0.filter((name) => {
            str = name.name;
            const formatted = str.toLowerCase();
            return formatted.includes(trimmed);
          });
        }
        closure_4(found);
      }, items);
      const items1 = [arg1, str, arg0, setSearchQuery];
      const effect = react.useEffect(() => {
        if (!closure_1) {
          const tmp2 = str;
          if ("" !== "".trim()) {
            callback(tmp2);
          } else {
            closure_4(closure_0);
          }
        }
      }, items1);
      let obj = { hasSearchQuery: "" !== str.trim(), filteredRoles: first, setSearchQuery };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(roleJustCreated) {
          return roleJustCreated.roleJustCreated;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmpResult = tmp(17823);
      const guildSettingsRolesManagerState = tmpResult.useGuildSettingsRolesManagerState(first);
      if (cResult[1] === arg0) {
        let tmp6;
        let tmp7;
        if (cResult[2] === guildSettingsRolesManagerState) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
      }
      const fn2 = function o() {
        if (guildSettingsRolesManagerState) {
          const _setTimeout = setTimeout;
          const ref = setTimeout(() => {
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
            const obj = ref(dependencyMap[20]);
            obj.setRoleJustCreated(false);
          }, 1000);
          return () => {
            clearTimeout(ref);
            const obj = GuildSettingsRolesManager;
            obj.setRoleJustCreated(false);
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
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("GuildSettingsRolesManager");
      const guildSettingsRolesManagerState = obj.useGuildSettingsRolesManagerState(
        (roleJustCreated) => roleJustCreated.roleJustCreated,
      );
      const items = [arg0, guildSettingsRolesManagerState];
      const layoutEffect = react.useLayoutEffect(() => {
        if (guildSettingsRolesManagerState) {
          const _setTimeout = setTimeout;
          const ref = setTimeout(() => {
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
            const obj = ref(dependencyMap[20]);
            obj.setRoleJustCreated(false);
          }, 1000);
          return () => {
            clearTimeout(ref);
            const obj = GuildSettingsRolesManager;
            obj.setRoleJustCreated(false);
          };
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const guild = GuildStore.getGuild(closure_0);
          const result = null != guild && PermissionStore.canAccessGuildSettings(guild);
          const obj = { canAccessSettings: result, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, guild) };
          return obj;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
      const canAccessSettings = stateFromStoresObject.canAccessSettings;
      const canManageRoles = stateFromStoresObject.canManageRoles;
      if (cResult[3] === canAccessSettings) {
        let tmp9;
        let tmp10;
        if (cResult[4] === canManageRoles) {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const effect = react.useEffect(tmp9, tmp10);
      }
      const fn2 = function s() {
        const tmp = canManageRoles && canAccessSettings;
        if (!tmp) {
          const obj = GuildSettingsModalChannelsActionCreatorsDefault;
          obj.terminate();
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.close();
        }
      };
      const items1 = [canManageRoles, canAccessSettings];
      cResult[3] = canAccessSettings;
      cResult[4] = canManageRoles;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp10 = items1;
      tmp9 = fn2;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [GuildStore, PermissionStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        const result = null != guild && PermissionStore.canAccessGuildSettings(guild);
        const obj = { canAccessSettings: result, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, guild) };
        return obj;
      });
      const canAccessSettings = stateFromStoresObject.canAccessSettings;
      const canManageRoles = stateFromStoresObject.canManageRoles;
      const items1 = [canManageRoles, canAccessSettings];
      const effect = react.useEffect(() => {
        const tmp = canManageRoles && canAccessSettings;
        if (!tmp) {
          const obj = GuildSettingsModalChannelsActionCreatorsDefault;
          obj.terminate();
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.close();
        }
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_11;
      let currentUserId;
      let filteredRoles;
      let first;
      let first1;
      let guild;
      let hasSearchQuery;
      let highestRole;
      let length;
      let memberCount;
      let onLongPress;
      let onPress;
      let onPress2;
      let onPress3;
      let rolesOrder;
      let setSearchQuery;
      let sortedGuildRoles;
      let tmp = guildId;
      const tmp2 = guild;
      let obj = guildId(guild[18]);
      const cResult = obj.c(135);
      guildId = guildId.guildId;
      const tmp4 = closure_23();
      let closure_1 = tmp4;
      let obj2 = memberCount;
      const ref = memberCount.useRef(null);
      let obj3 = guildId(guild[24]);
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, first1, , , ,];
        items[2] = currentUserId;
        items[3] = GuildSettingsModalRolesStore;
        items[4] = setSearchQuery;
        items[5] = highestRole;
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class R {
          constructor() {
            tmp = guildId;
            guild = closure_11.getGuild(guildId);
            id = closure_8.getId();
            obj = {
              guild,
              guildEveryoneRole: null,
              memberCount: null,
              roleMemberCount: null,
              sortedGuildRoles: null,
              rolesOrder: null,
              currentUserId: null,
              highestRole: null,
            };
            everyoneRole = null;
            if (null != guild) {
              tmp5 = closure_10;
              everyoneRole = closure_10.getEveryoneRole(guild);
            }
            obj.guildEveryoneRole = everyoneRole;
            id1 = undefined;
            tmp6 = closure_9;
            getMemberCount = closure_9.getMemberCount;
            if (guild != null) {
              id1 = guild.id;
            }
            num = getMemberCount(id1);
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            id2 = undefined;
            tmp8 = closure_13;
            getRoleMemberCount = closure_13.getRoleMemberCount;
            if (guild != null) {
              id2 = guild.id;
            }
            obj.roleMemberCount = getRoleMemberCount(id2);
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
            obj = {
              guild,
              guildEveryoneRole: null,
              memberCount: null,
              roleMemberCount: null,
              sortedGuildRoles: null,
              rolesOrder: null,
              currentUserId: null,
              highestRole: null,
            };
            everyoneRole = null;
            if (null != guild) {
              tmp5 = closure_10;
              everyoneRole = closure_10.getEveryoneRole(guild);
            }
            obj.guildEveryoneRole = everyoneRole;
            id1 = undefined;
            tmp6 = closure_9;
            getMemberCount = closure_9.getMemberCount;
            if (guild != null) {
              id1 = guild.id;
            }
            num = getMemberCount(id1);
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            id2 = undefined;
            tmp8 = closure_13;
            getRoleMemberCount = closure_13.getRoleMemberCount;
            if (guild != null) {
              id2 = guild.id;
            }
            obj.roleMemberCount = getRoleMemberCount(id2);
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
      let tmpResult = tmp(tmp2[21]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, R);
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
            obj = {
              guild,
              guildEveryoneRole: null,
              memberCount: null,
              roleMemberCount: null,
              sortedGuildRoles: null,
              rolesOrder: null,
              currentUserId: null,
              highestRole: null,
            };
            everyoneRole = null;
            if (null != guild) {
              tmp5 = closure_10;
              everyoneRole = closure_10.getEveryoneRole(guild);
            }
            obj.guildEveryoneRole = everyoneRole;
            id1 = undefined;
            tmp6 = closure_9;
            getMemberCount = closure_9.getMemberCount;
            if (guild != null) {
              id1 = guild.id;
            }
            num = getMemberCount(id1);
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            id2 = undefined;
            tmp8 = closure_13;
            getRoleMemberCount = closure_13.getRoleMemberCount;
            if (guild != null) {
              id2 = guild.id;
            }
            obj.roleMemberCount = getRoleMemberCount(id2);
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
            obj = {
              guild,
              guildEveryoneRole: null,
              memberCount: null,
              roleMemberCount: null,
              sortedGuildRoles: null,
              rolesOrder: null,
              currentUserId: null,
              highestRole: null,
            };
            everyoneRole = null;
            if (null != guild) {
              tmp5 = closure_10;
              everyoneRole = closure_10.getEveryoneRole(guild);
            }
            obj.guildEveryoneRole = everyoneRole;
            id1 = undefined;
            tmp6 = closure_9;
            getMemberCount = closure_9.getMemberCount;
            if (guild != null) {
              id1 = guild.id;
            }
            num = getMemberCount(id1);
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            id2 = undefined;
            tmp8 = closure_13;
            getRoleMemberCount = closure_13.getRoleMemberCount;
            if (guild != null) {
              id2 = guild.id;
            }
            obj.roleMemberCount = getRoleMemberCount(id2);
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
            obj = {
              guild,
              guildEveryoneRole: null,
              memberCount: null,
              roleMemberCount: null,
              sortedGuildRoles: null,
              rolesOrder: null,
              currentUserId: null,
              highestRole: null,
            };
            everyoneRole = null;
            if (null != guild) {
              tmp5 = closure_10;
              everyoneRole = closure_10.getEveryoneRole(guild);
            }
            obj.guildEveryoneRole = everyoneRole;
            id1 = undefined;
            tmp6 = closure_9;
            getMemberCount = closure_9.getMemberCount;
            if (guild != null) {
              id1 = guild.id;
            }
            num = getMemberCount(id1);
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            id2 = undefined;
            tmp8 = closure_13;
            getRoleMemberCount = closure_13.getRoleMemberCount;
            if (guild != null) {
              id2 = guild.id;
            }
            obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
              obj = {
                guild,
                guildEveryoneRole: null,
                memberCount: null,
                roleMemberCount: null,
                sortedGuildRoles: null,
                rolesOrder: null,
                currentUserId: null,
                highestRole: null,
              };
              everyoneRole = null;
              if (null != guild) {
                tmp5 = closure_10;
                everyoneRole = closure_10.getEveryoneRole(guild);
              }
              obj.guildEveryoneRole = everyoneRole;
              id1 = undefined;
              tmp6 = closure_9;
              getMemberCount = closure_9.getMemberCount;
              if (guild != null) {
                id1 = guild.id;
              }
              num = getMemberCount(id1);
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              id2 = undefined;
              tmp8 = closure_13;
              getRoleMemberCount = closure_13.getRoleMemberCount;
              if (guild != null) {
                id2 = guild.id;
              }
              obj.roleMemberCount = getRoleMemberCount(id2);
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
        let tmp24 = num8;
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
    }
  : (guildId) => {
      let Icon;
      let Text;
      let closure_1;
      let intl;
      let items21;
      let obj12;
      let obj6;
      let obj8;
      let obj9;
      let tmp32Result2;
      let tmp42;
      let tmp47;
      guildId = guildId.guildId;
      let guild;
      let memberCount;
      let rolesOrder;
      let currentUserId;
      let highestRole;
      let sorting;
      let filteredRoles;
      let hasSearchQuery;
      let closure_20;
      let callback1;
      let callback2;
      let callback3;
      let callback4;
      let callback5;
      let callback6;
      const contentContainerStyle = guildId.contentContainerStyle;
      let tmp = callback3();
      importDefault = tmp;
      let obj = memberCount;
      const ref = memberCount.useRef(null);
      let tmp3 = guildId;
      const tmp4 = guild;
      let obj2 = guildId(guild[24]);
      navigation = obj2.useNavigation();
      let obj3 = guildId(guild[21]);
      let items = [sorting, highestRole, rolesOrder, hasSearchQuery, filteredRoles, currentUserId];
      const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
        let everyoneRole;
        let getRoleMemberCount;
        let id2;
        let num;
        guild = GuildStore.getGuild(guildId);
        const id = AuthenticationStore.getId();
        const obj = {
          guild,
          guildEveryoneRole: everyoneRole,
          memberCount: num,
          roleMemberCount: getRoleMemberCount(id2),
          sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId),
          rolesOrder: GuildSettingsModalRolesStore.order,
          currentUserId: id,
          highestRole,
        };
        everyoneRole = null;
        if (null != guild) {
          everyoneRole = GuildRoleStore.getEveryoneRole(guild);
        }
        let id1;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (guild != null) {
          id1 = guild.id;
        }
        num = getMemberCount(id1);
        if (num == null) {
          num = 0;
        }
        id2 = undefined;
        getRoleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount;
        if (guild != null) {
          id2 = guild.id;
        }
        highestRole = undefined;
        if (null != guild) {
          const obj2 = PermissionUtilsAll;
          highestRole = obj2.getHighestRole(guild, id);
        }
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
      let obj4 = guildId(guild[21]);
      let items1 = [highestRole];
      const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => {
        let manyRoles;
        if (null != rolesOrder) {
          manyRoles = GuildRoleStore.getManyRoles(guildId, tmp);
        } else {
          manyRoles = [];
        }
        return manyRoles;
      });
      let items2 = [
        sortedGuildRoles,
        stateFromStoresArray,
        rolesOrder,
        roleMemberCount,
        filteredRoles,
        guild,
        currentUserId,
        highestRole,
      ];
      const memo = memberCount.useMemo(() => {
        const arr = null != rolesOrder ? stateFromStoresArray : filteredRoles;
        const found = arr.filter((item) => !sortedGuildRoles(item));
        const mapped = found.map((role) => {
          let num;
          const obj = { role, memberCount: num };
          num = undefined;
          if (roleMemberCount != null) {
            num = tmp[role.id];
          }
          if (num == null) {
            num = 0;
          }
          return obj;
        });
        let num = 0;
        if (null != guild) {
          num = mapped.findIndex((role) => {
            const obj = navigation(guild[25]);
            return obj.isRoleHigher(closure_1_3, currentUserId, highestRole, role.role);
          });
        }
        const diff = sortedGuildRoles.length - 1;
        let obj = { roleData: mapped, firstEditableIndex: num, numSortableRoles: diff, hasRoles: diff > 0 };
        return obj;
      }, items2);
      const roleData = memo.roleData;
      const firstEditableIndex = memo.firstEditableIndex;
      const hasRoles = memo.hasRoles;
      let tmp15 = sorting;
      if (!tmp15) {
        let num = 10;
        tmp15 = tmp14 < 10;
      }
      closure_20 = tmp15;
      let items3 = [setSearchQuery];
      const items4 = [guild];
      const callback = obj.useCallback((str) => {
        setSearchQuery(str.toLowerCase());
      }, items3);
      callback1 = obj.useCallback(() => {
        const track = AnalyticsUtilsDefault.track;
        const OPEN_MODAL = roleData.OPEN_MODAL;
        const obj = { type: firstEditableIndex.GUILD_ROLE_CREATION_MODAL };
        AnalyticsUtilsDefault;
        let id;
        const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
        AppAnalyticsUtils;
        if (guild != null) {
          id = guild.id;
        }
        const merged = Object.assign(collectGuildAnalyticsMetadata(id));
        track(OPEN_MODAL, obj);
        const tmpResult = GuildSettingsRoleCreateModalActionCreatorsDefault;
        tmpResult.open();
      }, items4);
      const items5 = [navigation];
      callback2 = obj.useCallback((role) => {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = false;
        }
        const obj = { role, newRole: flag, section: setSearchQuery.DISPLAY };
        navigation.push(stateFromStoresArray.ROLE_EDIT_REFRESH, obj);
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
        const tmp = updates.length > 0 && null != guild;
        if (tmp) {
          const obj = actions_GuildActionCreators;
          obj.batchRoleUpdate(guild.id, updates);
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
        const obj = GuildSettingsModalRolesActionCreatorsDefault;
        obj.updateRoleOrder(to.from, to);
      }, items9);
      const items10 = [tmp, roleData, hasSearchQuery, sorting, callback4];
      const callback7 = obj.useCallback(() => {
        let formatToPlainString;
        let intl2;
        let intl3;
        let intl4;
        let items1;
        let items2;
        let obj3;
        let v38N3Vz;
        const items = [closure_1.rolesHeader];
        let edittingRolesHeader;
        if (first) {
          edittingRolesHeader = closure_1.edittingRolesHeader;
        }
        const obj = { style: items, children: items1 };
        items[1] = edittingRolesHeader;
        const obj2 = { title: formatToPlainString(v38N3Vz, obj3) };
        const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
        const intl = intl5.intl;
        formatToPlainString = intl.formatToPlainString;
        obj3 = { numRoles: "" + roleData.length };
        v38N3Vz = intl5.t["38N3Vz"];
        items1 = [closure_20(TableRowGroupTitle, obj2)];
        let tmpResult = null;
        if (!first) {
          tmpResult = null;
          if (!hasSearchQuery) {
            const obj4 = {
              accessibilityRole: "button",
              accessibilityLabel: intl2.string(intl5.t["0dOFq+"]),
              onPress: callback4,
              style: closure_1.reorderButton,
              children: items2,
            };
            const PressableOpacity = Pressables.PressableOpacity;
            intl2 = intl5.intl;
            const obj5 = { color: nativeDefault.colors.TEXT_LINK, size: "sm" };
            const ArrowsUpDownIcon = ArrowsUpDownIcon2.ArrowsUpDownIcon;
            items2 = [closure_20(ArrowsUpDownIcon, obj5)];
            const obj6 = {
              style: closure_1.reorderButtonText,
              variant: "text-sm/medium",
              color: "text-link",
              children: intl3.string(intl5.t["0dOFq+"]),
            };
            const Text = Text_Text.Text;
            intl3 = intl5.intl;
            items2[1] = closure_20(Text, obj6);
            tmpResult = callback1(PressableOpacity, obj4);
          }
        }
        items1[1] = tmpResult;
        const children = [callback1(metroRequire, obj)];
        let tmp6Result = null;
        if (first) {
          const obj7 = {
            style: closure_1.rolesBody,
            variant: "text-sm/medium",
            color: "interactive-text-default",
            children: intl4.string(intl5.t.nHcwVl),
          };
          const Text2 = Text_Text.Text;
          intl4 = intl5.intl;
          tmp6Result = closure_20(Text2, obj7);
        }
        children[1] = tmp6Result;
        return callback1(metroRequire, { children });
      }, items10);
      const items11 = [tmp, callback1, hasRoles, tmp15];
      const items12 = [tmp, callback2, guild, currentUserId, highestRole, guildEveryoneRole];
      const callback8 = obj.useCallback(() => {
        let Button;
        let Text2;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let items1;
        let items2;
        let items3;
        let obj12;
        let obj5;
        let tmpResult;
        if (hasRoles) {
          const items = [closure_1.subheaderContainer];
          let num = 0;
          if (closure_20) {
            num = nativeDefault.space.PX_16;
          }
          const obj2 = { children: items1 };
          const obj4 = { paddingTop: num };
          items[1] = obj4;
          const obj3 = { style: items, children: closure_20(Text2, obj5) };
          obj5 = {
            style: closure_1.subheaderDescription,
            variant: "text-sm/medium",
            color: "interactive-text-default",
            children: intl4.string(intl5.t["1ydhVp"]),
          };
          Text2 = Text_Text.Text;
          intl4 = intl5.intl;
          items1 = [closure_20(metroRequire, obj3)];
          const obj6 = { style: closure_1.divider };
          items1[1] = closure_20(metroRequire, obj6);
          tmpResult = callback1(afk, obj2);
        } else {
          const obj = { style: closure_1.emptySubheaderContainer, children: items2 };
          const obj7 = {
            style: closure_1.emptyIlloContainer,
            children: closure_20(MemberRolesAbstractUI.MemberRolesAbstractUI, {}),
          };
          items2 = [closure_20(metroRequire, obj7), ,];
          const obj8 = { style: closure_1.emptySubheaderBody, children: items3 };
          const obj9 = {
            style: closure_1.subheader,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: intl.string(intl5.t.ALlnbi),
          };
          const Heading = Text_Text.Heading;
          intl = intl5.intl;
          items3 = [closure_20(Heading, obj9), ,];
          const obj10 = {
            style: closure_1.subheaderBody,
            variant: "text-sm/medium",
            color: "text-default",
            children: intl2.string(intl5.t["1ydhVp"]),
          };
          const Text = Text_Text.Text;
          intl2 = intl5.intl;
          items3[1] = closure_20(Text, obj10);
          const obj11 = { style: closure_1.subheaderButton, children: closure_20(Button, obj12) };
          obj12 = { text: intl3.string(intl5.t.JZZjQK), onPress: callback1 };
          Button = components_Button_Button.Button;
          intl3 = intl5.intl;
          items3[2] = closure_20(metroRequire, obj11);
          items2[1] = callback1(metroRequire, obj8);
          const obj13 = { style: closure_1.divider };
          items2[2] = closure_20(metroRequire, obj13);
          tmpResult = callback1(metroRequire, obj);
        }
        return tmpResult;
      }, items11);
      const items13 = [guild, roleData.length, currentUserId, highestRole, sorting, callback2, callback3, callback6];
      const callback9 = obj.useCallback(() => {
        let obj3;
        if (null != guild) {
          if (null != guildEveryoneRole) {
            const obj = PermissionUtilsAll;
            const obj2 = { style: closure_1.everyoneWrapper, children: closure_20(GuildSettingsRoleItemDefault, obj3) };
            obj3 = {
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
              isFirstRole: true,
            };
            !obj.isRoleHigher(guild, currentUserId, highestRole, guildEveryoneRole);
            return closure_20(metroRequire, obj2);
          }
        }
        return null;
      }, items12);
      const callback10 = obj.useCallback((role, from) => {
        let fn;
        let fn2;
        let id;
        let tmp19;
        let tmp3;
        if (null == guild) {
          return closure_20(callback2, {});
        } else {
          role = role.role;
          memberCount = role.memberCount;
          let obj = navigation(guild[25]);
          const diff = roleData.length - 1;
          const obj2 = {
            sorting,
            isEveryoneRole: tmp3,
            role,
            locked: tmp19,
            guildId: id,
            numMembers: memberCount,
            isFirstRole: 0 === from,
            isLastRole: from === diff,
            onPress: callback2,
            onLongPress: callback3,
            onMoveUp: fn,
            onMoveDown: fn2,
          };
          tmp3 = null != guild;
          tmp19 = !obj.isRoleHigher(guild, currentUserId, highestRole, role);
          const tmp24 = closure_1(guild[37]);
          if (tmp3) {
            tmp3 = sortedGuildRoles(role);
          }
          id = undefined;
          if (guild != null) {
            id = guild.id;
          }
          fn = undefined;
          if (0 !== from) {
            fn = () => {
              const obj = { from, to: from - 1 };
              callback6(obj);
            };
          }
          fn2 = undefined;
          if (from !== diff) {
            fn2 = () => {
              const obj = { from, to: from + 1 };
              callback6(obj);
            };
          }
          return closure_20(tmp24, obj2, role.id);
        }
      }, items13);
      const items14 = [callback1, callback5, callback4, hasRoles, sorting, navigation];
      const callback11 = obj.useCallback((arg0, arg1) => arg0 !== arg1, []);
      const effect = obj.useEffect(() => {
        let fn2;
        let intl;
        let onPress;
        let onPress2;
        let onPress3;
        let fn;
        const setOptions = navigation.setOptions;
        if (first) {
          fn = () => {
            let intl;
            const obj = { onPress: onPress2, text: intl.string(guildId(guild[31]).t["ETE/oC"]) };
            const HeaderActionButton = guildId(guild[38]).HeaderActionButton;
            intl = guildId(guild[31]).intl;
            return closure_20(HeaderActionButton, obj);
          };
        }
        let obj = { headerLeft: fn, headerRight: fn2, headerTitle: intl.string(intl5.t.UvdTMj) };
        if (first) {
          fn2 = () => {
            let intl;
            const obj = { onPress: onPress3, text: intl.string(guildId(guild[31]).t["R3BPH+"]) };
            const HeaderActionButton = guildId(guild[38]).HeaderActionButton;
            intl = guildId(guild[31]).intl;
            return closure_20(HeaderActionButton, obj);
          };
        } else if (hasRoles) {
          fn2 = () => {
            let intl;
            const obj = {
              onPress,
              source: closure_1(guild[39]),
              accessibilityLabel: intl.string(guildId(guild[31]).t.JZZjQK),
            };
            const HeaderActionButton = guildId(guild[38]).HeaderActionButton;
            intl = guildId(guild[31]).intl;
            return closure_20(HeaderActionButton, obj);
          };
        }
        intl = intl5.intl;
        setOptions(obj);
      }, items14);
      const items15 = [guild, sorting, navigation];
      const effect1 = obj.useEffect(() => {
        if (first) {
          if (null != guild) {
            const obj2 = GuildSettingsModalRolesActionCreatorsDefault;
            obj2.startReordering(tmp2.id);
          }
          const obj3 = PlatformUtils;
          if (obj3.isIOS()) {
            const obj4 = { gestureEnabled: !tmp };
            navigation.setOptions(obj4);
          }
        }
        const obj = GuildSettingsModalRolesActionCreatorsDefault;
        obj.stopReordering();
      }, items15);
      const items16 = [guild, memberCount];
      const effect2 = obj.useEffect(() => {
        if (null != guild) {
          if (memberCount <= GuildSettingsRolesUtils.MAX_PREFETCH_MEMBER_COUNT) {
            const obj = GuildActionCreatorsDefault;
            const members = obj.requestMembers(guild.id, "", 0, false);
          }
          const obj2 = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj2.fetchMemberCounts(guild.id);
        }
      }, items16);
      const items17 = [sorting];
      const effect3 = obj.useEffect(
        () => () => {
          if (sorting) {
            const obj = closure_1(guild[29]);
            obj.stopReordering();
          }
        },
        items17,
      );
      let tmp34 = null;
      if (!tmp15) {
        let obj5 = { style: tmp.searchWrapper, children: closure_20(tmp3(tmp4[44]).SearchField, obj6) };
        obj6 = { size: "md", onChange: callback };
        tmp34 = closure_20(roleMemberCount, obj5);
      }
      const items18 = [tmp34, , ,];
      let tmp32Result = null;
      if (sorting) {
        const items19 = [callback7()];
        let tmp37Result = null;
        if (!hasRoles) {
          let obj7 = { leading: closure_20(Icon, obj8), label: closure_20(Text, obj9) };
          const FormRow = tmp3(tmp4[45]).FormRow;
          obj8 = { style: tmp.emptyRolesIcon, size: tmp3(tmp4[46]).Icon.Sizes.LARGE, source: require("AssetRegistry") };
          Icon = tmp3(tmp4[46]).Icon;
          obj9 = {
            variant: "text-md/semibold",
            color: "interactive-text-default",
            children: intl.string(tmp3(tmp4[31]).t.nZfHsf),
          };
          Text = tmp3(tmp4[34]).Text;
          intl = tmp3(tmp4[31]).intl;
          tmp37Result = tmp37(FormRow, obj7);
        }
        let obj10 = { children: items19 };
        items19[1] = tmp37Result;
        tmp32Result = tmp32(tmp33, obj10);
      }
      items18[1] = closure_20(roleMemberCount, { children: tmp32Result });
      let obj11 = { style: tmp.container, children: closure_20(tmp42, obj12) };
      obj12 = {
        ref,
        header: tmp32Result2,
        wrapperStyles: tmp.container,
        contentContainerStyle: items21,
        data: roleData,
        rowHasChanged: callback11,
        onRowMoved: callback6,
        disableSorting: !sorting,
        minDraggableIndex: tmp47,
        renderRow: callback10,
        keyboardShouldPersistTaps: "handled",
        scrollEventThrottle: 16,
        scrollEnabled: true,
      };
      tmp32Result2 = null;
      tmp42 = require("SortableListView");
      if (!sorting) {
        let callback8Result = null;
        if (!hasSearchQuery) {
          callback8Result = callback8();
        }
        const items20 = [callback8Result, ,];
        let callback9Result = null;
        if (!hasSearchQuery) {
          callback9Result = callback9();
        }
        items20[1] = callback9Result;
        let callback7Result = null;
        if (hasRoles) {
          callback7Result = callback7();
        }
        let obj13 = { children: items20 };
        items20[2] = callback7Result;
        tmp32Result2 = tmp32(tmp33, obj13);
      }
      items21 = [tmp.scrollContainer, contentContainerStyle];
      tmp47 = undefined;
      if (firstEditableIndex >= 0) {
        tmp47 = firstEditableIndex;
      }
      const obj14 = { children: items18 };
      items18[2] = closure_20(roleMemberCount, obj11);
      items18[3] = closure_20(tmp3(tmp4[49]).NavScrim, {});
      return callback1(callback2, obj14);
    };
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoles.tsx");

export default tmp8;
