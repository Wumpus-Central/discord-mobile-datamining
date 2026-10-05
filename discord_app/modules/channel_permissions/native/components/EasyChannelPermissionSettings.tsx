// === Module 17000: EasyChannelPermissionSettings ===

// Module 17000 (EasyChannelPermissionSettings)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8077 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9215 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9216 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9231 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11230 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelSettingsPermissionsStore from "ChannelSettingsPermissionsStore" /* 17001 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let accessPermissions, c3, channel, navigation;

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function onBack() {
  const obj = AlertActionCreatorsDefault;
  obj.close();
  return false;
}
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const SettingMode = ChannelPermissionsConstants.SettingMode;
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = Constants);
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { marginTop: 16, flex: 1 }, adminWarning: obj3 };
obj2 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_26 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp10;
  let tmp13;
  const tmp = channel;
  let obj = channel(navigation[18]);
  const cResult = obj.c(98);
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  closure_26();
  const obj2 = channel(navigation[19]);
  const tmp2 = navigation;
  navigation = obj2.useNavigation();
  const obj3 = channel(navigation[20]);
  const appChannelBotUserId = obj3.useAppChannelBotUserId(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function c() {
      let sortedRoles;
      guild = GuildStore.getGuild(channel.getGuildId());
      const obj = { guild, sortedGuildRoles: sortedRoles };
      sortedRoles = undefined;
      if (null != guild) {
        sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      }
      return obj;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(tmp2[21]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10);
  let guild = stateFromStoresObject.guild;
  if (cResult[3] !== navigation) {
    class N {
      constructor() {
        navigation.setOptions({ headerRight: "r" });
      }
    }
    const items1 = [navigation];
    cResult[3] = navigation;
    cResult[4] = N;
    cResult[5] = items1;
    tmp13 = items1;
  } else {
    class N {
      constructor() {
        navigation.setOptions({ headerRight: "r" });
      }
    }
    tmp13 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(N, tmp13);
  if (null != guild) {
    class N {
      constructor() {
        navigation.setOptions({ headerRight: "r" });
      }
    }
    if (null != guild) {
      class N {
        constructor() {
          navigation.setOptions({ headerRight: "r" });
        }
      }
    }
    return null;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        navigation.setOptions({ headerRight: "r" });
      }
    }
    cResult[6] = tmp16;
  } else {
    class N {
      constructor() {
        navigation.setOptions({ headerRight: "r" });
      }
    }
  }
}) : ((channel) => {
  let HelpMessage;
  let HelpMessage2;
  let TableRow;
  let TableSwitchRow;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  navigation = undefined;
  let c9;
  function togglePrivateChannel() {
    return obj(...arguments);
  }
  let obj = function _togglePrivateChannel2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let currentUser;
      let v2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              accessPermissions = accessPermissions.accessPermissions;
              const obj9 = v2(c3[22]);
              const result = obj9.isPrivateGuildChannel(accessPermissions);
              const obj10 = v2(c3[22]);
              tmp = obj10.flipEveryonePermission(accessPermissions, accessPermissions, result);
              currentUser = currentUser.getCurrentUser();
              let tmp6 = closure_2_9;
              const canResult = closure_1_14.can(constants.ADMINISTRATOR, guild);
              const tmp19 = v2;
              if (!closure_2_9) {
                tmp6 = null == currentUser;
              }
              if (!tmp6) {
                tmp6 = canResult;
              }
              if (!tmp6) {
                v2 = 1;
                const tmp19Result = tmp19(c3[22]);
                c3 = 1;
                const obj4 = { value: tmp19Result.grantUserChannelAccess(accessPermissions, accessPermissions), done: false };
                return obj4;
              }
            }
          } else if (1 === v2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
          const items = [tmp];
          v2 = 2;
          const obj5 = tmp(c3[23]);
          c3 = 1;
          const obj7 = { value: obj5.savePermissionUpdates(closure_129_0.id, items), done: false };
          return obj7;
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _onPrivateChannelSwitchChange2() {
    let guild_id;
    obj = _asyncToGenerator(async () => {
      let body;
      let intl3;
      let intl4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let title;
          let channelName;
          let stringResult;
          let formatResult;
          c3 = 2;
          if (0 === body) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              title = undefined;
              channelName = undefined;
              body = undefined;
              if (null != guild_id.guild_id) {
                if (!privateToggleState) {
                  body = 1;
                  const obj2 = title(c3[24]);
                  c3 = 1;
                  const obj6 = { value: obj2.checkChattableChannelThresholdMetAfterChannelPermissionDeny(guild_id, constants.VIEW_CHANNEL), done: false };
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
          const intl = title(c3[25]).intl;
          const string = intl.string;
          const t = title(c3[25]).t;
          if (closure_129_1) {
            stringResult = string(t.vw48TT);
          } else {
            stringResult = string(t["47gQYL"]);
          }
          title = stringResult;
          const obj4 = title(c3[26]);
          channelName = obj4.computeChannelName(closure_129_0, closure_1_16, closure_1_15);
          const intl2 = title(c3[25]).intl;
          const format = intl2.format;
          const t2 = title(c3[25]).t;
          if (closure_129_1) {
            const obj7 = { channelName };
            formatResult = format(t2.hGzPnx, obj7);
          } else {
            const obj8 = { channelName };
            formatResult = format(t2.rKzX1E, obj8);
          }
          body = formatResult;
          closure_129_2(!closure_129_1);
          const obj9 = {
            title,
            body,
            cancelText: intl3.string(title(c3[25]).t["ETE/oC"]),
            confirmText: intl4.string(title(c3[25]).t.p89ACt),
            onConfirm: closure_129_6,
            hideActionSheet: false,
            onCancel() {
                  obj = c2(c3[22]);
                  body(obj.isPrivateGuildChannel(title));
                },
            isDismissable: false
          };
          const show = channelName(c3[27]).show;
          const tmp41 = channelName(c3[27]);
          intl3 = title(c3[25]).intl;
          intl4 = title(c3[25]).intl;
          show(obj9);
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp54) {
          c3 = 3;
          throw tmp54;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_26();
  const tmp3 = navigation;
  obj = channel(navigation[19]);
  navigation = obj.useNavigation();
  let obj2 = channel(navigation[20]);
  const appChannelBotUserId = obj2.useAppChannelBotUserId(channel);
  let obj3 = channel(navigation[21]);
  let items = [GuildStore, GuildRoleStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    let sortedRoles;
    guild = GuildStore.getGuild(channel.getGuildId());
    obj = { guild, sortedGuildRoles: sortedRoles };
    sortedRoles = undefined;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = togglePrivateChannel.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: "r" });
  }, items1);
  const items2 = [guild, sortedGuildRoles, channel];
  const memo = togglePrivateChannel.useMemo(() => {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        obj = ChannelPermissionsUtilsAll;
        const existingRolesRows = obj.getExistingRolesRows(guild, sortedGuildRoles, channel, channel.accessPermissions);
      }
      return [];
    }
  }, items2);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let stringResult;
      let string2Result;
      let id;
      const getMemberIds = GuildMemberStore.getMemberIds;
      const isCategoryResult = channel.isCategory();
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = getMemberIds(id);
      let obj4 = setPrivateToggleState(tmp3[22]);
      let obj5 = { appChannelBotUserId };
      const tmp15 = obj5;
      const existingMembersRows = obj4.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions, obj5);
      let obj6 = setPrivateToggleState(tmp3[22]);
      let result = obj6.isPrivateGuildChannel(channel);
      c9 = result;
      let obj7 = setPrivateToggleState(tmp3[29]);
      const canEveryoneRoleResult = obj7.canEveryoneRole(constants2.VIEW_CHANNEL, guild);
      let obj8 = setPrivateToggleState(tmp3[29]);
      const canEveryoneRoleResult1 = obj8.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      let string = tmp2(tmp3[25]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        let intl2 = tmp2(tmp3[25]).intl;
        stringResult = intl2.string(tmp2(tmp3[25]).t.RQUk61);
      } else {
        stringResult = tmp20;
        if (type === tmp21.GUILD_VOICE) {
          let intl = tmp2(tmp3[25]).intl;
          stringResult = intl.string(tmp2(tmp3[25]).t.cLjvKg);
        }
      }
      let obj9 = { style: obj10, spacing: privateToggleState(tmp3[16]).space.PX_16, children: items3 };
      obj10 = { paddingHorizontal: privateToggleState(tmp3[16]).space.PX_16 };
      const Stack = tmp2(tmp3[30]).Stack;
      const obj11 = { title: stringResult, hasIcons: false, children: closure_23(TableSwitchRow, obj12) };
      const TableRowGroup = tmp2(tmp3[32]).TableRowGroup;
      TableSwitchRow = tmp2(tmp3[31]).TableSwitchRow;
      let intl3 = tmp2(tmp3[25]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[25]).t;
      if (isCategoryResult) {
        string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      obj12 = {
        label: string2Result,
        value: privateToggleState,
        onValueChange: function onPrivateChannelSwitchChange() {
              return obj(...arguments);
            }
      };
      items3 = [closure_23(TableRowGroup, obj11), , , , , ];
      let tmp25Result = canEveryoneRoleResult1;
      if (tmp25Result) {
        const obj13 = { style: tmp.adminWarning, children: closure_23(HelpMessage, obj14) };
        obj14 = { messageType: channel(tmp3[33]).HelpMessageTypes.WARNING, children: intl4.string(channel(tmp3[25]).t["5f3HIC"]) };
        HelpMessage = tmp2(tmp3[33]).HelpMessage;
        intl4 = tmp2(tmp3[25]).intl;
        tmp25Result = closure_23(obj, obj13);
      }
      items3[1] = tmp25Result;
      let tmp25Result2 = !canEveryoneRoleResult1 && !canEveryoneRoleResult && !result;
      if (tmp25Result2) {
        const obj15 = { style: tmp.adminWarning, children: closure_23(HelpMessage2, obj16) };
        obj16 = { messageType: channel(tmp3[33]).HelpMessageTypes.WARNING, children: intl5.string(channel(tmp3[25]).t.ZAk4Q9) };
        HelpMessage2 = tmp2(tmp3[33]).HelpMessage;
        intl5 = tmp2(tmp3[25]).intl;
        tmp25Result2 = closure_23(obj, obj15);
      }
      items3[2] = tmp25Result2;
      const obj17 = { hasIcons: true, children: closure_23(TableRow, obj18) };
      const TableRowGroup2 = tmp2(tmp3[32]).TableRowGroup;
      obj18 = {
        arrow: true,
        icon: closure_23(channel(tmp3[34]).CirclePlusIcon, {}),
        label: intl6.string(channel(tmp3[25]).t.dMJ3Y6),
        onPress() {
              if (null != channel) {
                obj = channel_permissions_ChannelPermissionsUtils;
                const result = obj.openAddMembersActionSheet(tmp);
              }
            }
      };
      TableRow = tmp2(tmp3[35]).TableRow;
      intl6 = tmp2(tmp3[25]).intl;
      items3[3] = closure_23(TableRowGroup2, obj17);
      const obj19 = {
        title: intl7.string(channel(tmp3[25]).t.ES4CC6),
        hasIcons: true,
        children: memo.map((item) => {
              obj = { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id };
              return closure_23(ChannelOverwritesItemDefault, obj, item.id);
            })
      };
      const TableRowGroup3 = tmp2(tmp3[32]).TableRowGroup;
      intl7 = tmp2(tmp3[25]).intl;
      items3[4] = closure_23(TableRowGroup3, obj19);
      const obj20 = {
        hasIcons: true,
        children: existingMembersRows.map((item) => {
              obj = { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id };
              return closure_23(ChannelOverwritesItemDefault, obj, item.id);
            })
      };
      const TableRowGroup4 = tmp2(tmp3[32]).TableRowGroup;
      items3[5] = closure_23(TableRowGroup4, obj20);
      return closure_24(Stack, obj9);
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function EasyChannelPermissionSettings(channelId) {
  let BASIC;
  let advancedMode;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let tmp10;
  let tmp19;
  let tmp23;
  let tmp25;
  let tmp29;
  let tmp30;
  let tmp8;
  let tmp9;
  const tmp2 = first1;
  let obj = channelId(first1[18]);
  const cResult = obj.c(33);
  channelId = channelId.channelId;
  const origin = channelId.origin;
  let obj2 = channelId(first1[37]);
  obj2.useNavigatorBackPressHandler(onBack);
  closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = channelId(tmp2[21]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelSettingsPermissionsStore];
    const fn2 = function f() {
      return advancedMode.advancedMode;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  let isGuildStageVoiceResult;
  const tmpResult2 = channelId(tmp2[21]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  const useState = react.useState;
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    BASIC = constants.MODERATORS;
  } else if (stateFromStores1) {
    BASIC = constants.ADVANCED;
  } else {
    BASIC = constants.BASIC;
  }
  const tmp17 = _slicedToArray(useState(BASIC), 2);
  first1 = tmp17[0];
  _slicedToArray = tmp17[1];
  if (cResult[5] !== stateFromStores) {
    const obj7 = stateFromStores(tmp2[22]);
    const result = obj7.isPrivateGuildChannel(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    tmp19 = result;
  } else {
    tmp19 = cResult[6];
  }
  [r10079, tmp23] = _slicedToArray(react.useState(tmp19), 2);
  _asyncToGenerator = tmp23;
  _slicedToArray(react.useState(tmp19), 2);
  if (cResult[7] !== origin) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    const items2 = [origin];
    cResult[7] = origin;
    cResult[8] = U;
    cResult[9] = items2;
    tmp25 = items2;
  } else {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    tmp25 = cResult[9];
  }
  const effect = react.useEffect(U, tmp25);
  if (cResult[10] !== stateFromStores) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    cResult[10] = stateFromStores;
    cResult[11] = tmp28;
  } else {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    const stringResult = obj8.string(channelId(tmp2[25]).t["Mw/UDN"]);
    const intl = tmp(tmp2[25]).intl;
    const stringResult1 = intl.string(channelId(tmp2[25]).t["0a6awf"]);
    cResult[12] = stringResult1;
    cResult[13] = stringResult;
    tmp30 = stringResult;
    tmp29 = stringResult1;
  } else {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    tmp30 = cResult[13];
  }
  if (cResult[14] !== stateFromStores) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    arr4[0] = tmp30;
    arr4[1] = tmp29;
    if (stateFromStores != null) {
      class U {
        constructor() {
          const OVERVIEW = constants2.OVERVIEW;
          let CHANNEL_SETTINGS = null;
          const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
          const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
          AppAnalyticsUtilsDefault;
          if (origin === OVERVIEW) {
            CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
          }
          const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
          trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
        }
      }
    }
    if (true === undefined) {
      let tmp35;
      class U {
        constructor() {
          const OVERVIEW = constants2.OVERVIEW;
          let CHANNEL_SETTINGS = null;
          const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
          const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
          AppAnalyticsUtilsDefault;
          if (origin === OVERVIEW) {
            CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
          }
          const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
          trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            const OVERVIEW = constants2.OVERVIEW;
            let CHANNEL_SETTINGS = null;
            const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
            const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
            AppAnalyticsUtilsDefault;
            if (origin === OVERVIEW) {
              CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
            }
            const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
            trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
          }
        }
        const stringResult2 = obj9.string(channelId(tmp2[25]).t.YIIUJ3);
        cResult[16] = stringResult2;
        tmp35 = stringResult2;
      } else {
        class U {
          constructor() {
            const OVERVIEW = constants2.OVERVIEW;
            let CHANNEL_SETTINGS = null;
            const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
            const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
            AppAnalyticsUtilsDefault;
            if (origin === OVERVIEW) {
              CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
            }
            const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
            trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
          }
        }
      }
      arr4.push(tmp35);
    }
    cResult[14] = stateFromStores;
    cResult[15] = arr4;
  } else {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
  }
  if (cResult[17] !== arr4) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
    cResult[17] = arr4;
    cResult[18] = tmp39;
  } else {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
  }
  if (cResult[19] === tmp28) {
    class U {
      constructor() {
        const OVERVIEW = constants2.OVERVIEW;
        let CHANNEL_SETTINGS = null;
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
        AppAnalyticsUtilsDefault;
        if (origin === OVERVIEW) {
          CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
        }
        const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
        trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
      }
    }
  }
  let obj3 = { pageWidth: 0, defaultIndex: first1, onSetActiveIndex: tmp28, items: tmp39 };
  cResult[19] = tmp28;
  cResult[20] = first1;
  cResult[21] = tmp39;
  cResult[22] = obj3;
}) : (function EasyChannelPermissionSettings(arg0) {
  let BASIC;
  let advancedMode;
  let closure_4;
  let defaultIndex;
  let items6;
  let obj10;
  let obj9;
  let origin;
  let tmp23Result;
  let tmp8;
  ({ channelId: require, origin } = arg0);
  defaultIndex = undefined;
  _slicedToArray = undefined;
  let closure_5;
  const tmp2 = defaultIndex;
  let obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(onBack);
  const tmp4 = closure_26();
  let obj2 = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [ChannelSettingsPermissionsStore];
  let isGuildStageVoiceResult;
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items1, () => advancedMode.advancedMode);
  const useState = react.useState;
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    BASIC = constants.MODERATORS;
    tmp8 = constants;
  } else if (stateFromStores1) {
    BASIC = constants.ADVANCED;
    tmp8 = constants;
  } else {
    BASIC = constants.BASIC;
    tmp8 = constants;
  }
  [defaultIndex, _slicedToArray] = useState(BASIC);
  const useState2 = react.useState;
  const obj6 = stateFromStores(tmp2[22]);
  const tmp11 = _slicedToArray(useState2(obj6.isPrivateGuildChannel(stateFromStores)), 2);
  closure_5 = tmp13;
  const items2 = [origin];
  const first1 = tmp11[0];
  const effect = react.useEffect(() => {
    const OVERVIEW = constants2.OVERVIEW;
    let CHANNEL_SETTINGS = null;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
    AppAnalyticsUtilsDefault;
    if (origin === OVERVIEW) {
      CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
    }
    const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants2.PERMISSIONS };
    trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [stateFromStores];
  const callback = react.useCallback((arg0) => {
    if (arg0 === constants.ADVANCED) {
      const obj3 = ChannelSettingsPermissionsActionCreators;
      obj3.setAdvancedMode(true);
    } else {
      const obj = ChannelPermissionsUtilsAll;
      closure_5(obj.isPrivateGuildChannel(stateFromStores));
      const obj2 = ChannelSettingsPermissionsActionCreators;
      obj2.setAdvancedMode(false);
    }
    closure_4(arg0);
  }, items3);
  const intl = require("intl").intl;
  const items4 = [intl.string(require("intl").t["Mw/UDN"]), ];
  const intl2 = require("intl").intl;
  items4[1] = intl2.string(require("intl").t["0a6awf"]);
  let isGuildStageVoiceResult1;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  if (true === isGuildStageVoiceResult1) {
    const push = items4.push;
    const intl3 = require("intl").intl;
    push(intl3.string(require("intl").t.YIIUJ3));
  }
  const tmpResult = require("SegmentedControlState");
  let obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
  const items5 = [stateFromStores, defaultIndex];
  const segmentedControlState = tmpResult.useSegmentedControlState(obj3);
  const effect1 = react.useEffect(() => {
    let ADVANCED;
    let obj2;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const CHANNEL_PERMISSIONS_PAGE_VIEWED = constants.CHANNEL_PERMISSIONS_PAGE_VIEWED;
    AppAnalyticsUtilsDefault;
    if (first === constants.BASIC) {
      ADVANCED = SettingMode.BASIC;
    } else {
      ADVANCED = SettingMode.ADVANCED;
    }
    const obj = { mode: ADVANCED, channel_is_private: obj2.isPrivateGuildChannel(stateFromStores) };
    obj2 = ChannelPermissionsUtilsAll;
    trackWithMetadata(CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
  }, items5);
  let tmp21Result = null;
  if (null != stateFromStores) {
    const obj7 = { style: tmp4.container, children: items6 };
    const obj8 = { style: obj9, children: closure_23(require("SegmentedControl").SegmentedControl, obj10) };
    obj10 = { state: segmentedControlState };
    obj9 = { paddingHorizontal: origin(tmp2[16]).space.PX_12 };
    items6 = [closure_23(closure_7, obj8), ];
    const obj11 = { style: tmp4.content, children: tmp23Result };
    if (defaultIndex === tmp8.BASIC) {
      const obj12 = { channel: stateFromStores, privateToggleState: first1, setPrivateToggleState: tmp11[1] };
      tmp23Result = closure_23(closure_27, obj12);
    } else if (defaultIndex === tmp8.MODERATORS) {
      const obj13 = { channel: stateFromStores };
      tmp23Result = closure_23(origin(tmp2[41]), obj13);
    } else {
      const obj14 = { channelId: stateFromStores.id };
      tmp23Result = closure_23(origin(tmp2[42]), obj14);
    }
    items6[1] = closure_23(closure_8, obj11);
    tmp21Result = closure_24(closure_7, obj7);
  }
  return tmp21Result;
});
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default tmp6;