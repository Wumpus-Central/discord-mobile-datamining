// === Module 17000: EasyChannelPermissionSettings ===

// Module 17000 (EasyChannelPermissionSettings)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9215 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9216 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9231 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11230 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSettingsPermissionsStore from "ChannelSettingsPermissionsStore" /* 17001 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function onBack() {
  AlertActionCreatorsDefault.close();
  return false;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const SettingMode = fn(8077).SettingMode;
const Constants = fn(1085);
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: { marginTop: 16, flex: 1 }, adminWarning: null };
let obj3 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.adminWarning = { marginTop: nativeDefault.space.PX_12 };
let closure_26 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(navigation[18]).c(98);
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  closure_26();
  let obj = channel(navigation[18]);
  const tmp = channel;
  const tmp2 = navigation;
  navigation = channel(navigation[19]).useNavigation();
  let obj2 = channel(navigation[19]);
  const appChannelBotUserId = channel(navigation[20]).useAppChannelBotUserId(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function c() {
      guild = GuildStore.getGuild(channel.getGuildId());
      const obj = { guild, sortedGuildRoles: null };
      let sortedRoles;
      if (null != guild) {
        sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
      }
      obj.sortedGuildRoles = sortedRoles;
      return obj;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let obj3 = channel(navigation[20]);
  const stateFromStoresObject = tmp(tmp2[21]).useStateFromStoresObject(first, tmp10);
  guild = stateFromStoresObject.guild;
  if (cResult[3] !== navigation) {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
    const items1 = [navigation];
    cResult[3] = navigation;
    cResult[4] = N;
    cResult[5] = items1;
    let tmp13 = items1;
  } else {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
    tmp13 = cResult[5];
  }
  const layoutEffect = noop.useLayoutEffect(N, tmp13);
  if (null != guild) {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
    cResult[6] = tmp16;
  } else {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
  }
  if (null != guild) {
    class N {
      constructor() {
        setOptionsResult = closure_3.setOptions({ headerRight: "r" });
        return;
      }
    }
  }
  return null;
}) : ((channel) => {
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  let navigation;
  c9 = undefined;
  function togglePrivateChannel() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_7 = async function _togglePrivateChannel2() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            accessPermissions = accessPermissions.accessPermissions;
            const result = v2(9215).isPrivateGuildChannel(accessPermissions);
            const obj9 = v2(9215);
            const tmp21 = v2;
            closure_128_0 = v2(9215).flipEveryonePermission(accessPermissions, accessPermissions, result);
            currentUser = currentUser.getCurrentUser();
            let tmp7 = ChannelSettingsPermissionsStore;
            const obj10 = v2(9215);
            if (!ChannelSettingsPermissionsStore) {
              tmp7 = null == currentUser;
            }
            if (!tmp7) {
              tmp7 = canResult;
            }
            if (!tmp7) {
              v2 = 1;
              dependencyMap = 1;
              const obj4 = { value: tmp21(9215).grantUserChannelAccess(accessPermissions, accessPermissions), done: false };
              return obj4;
            }
            canResult = PermissionStore.can(constants.ADMINISTRATOR, guild);
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 3;
          return { value: "IconComponent", done: null };
        }
        const items = [closure_128_0];
        v2 = 2;
        dependencyMap = 1;
        const obj7 = { value: tmp2(9216).savePermissionUpdates(closure_129_0.id, items), done: false };
        return obj7;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  };
  closure_8 = async function _onPrivateChannelSwitchChange2() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            if (null != guild_id.guild_id) {
              if (!privateToggleState) {
                c2 = 1;
                dependencyMap = 1;
                const obj6 = { value: tmp5(9217).checkChattableChannelThresholdMetAfterChannelPermissionDeny(guild_id, constants.VIEW_CHANNEL), done: false };
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "IconComponent", done: null };
        }
        const intl = tmp5(1126).intl;
        const string = intl.string;
        const t = tmp5(1126).t;
        if (closure_129_1) {
          let stringResult = string(t.vw48TT);
        } else {
          stringResult = string(t["47gQYL"]);
        }
        closure_128_0 = stringResult;
        closure_128_1 = tmp5(5043).computeChannelName(closure_129_0, UserStore, RelationshipStore);
        let intl2 = tmp5(1126).intl;
        let onCancel = intl2.format;
        let show = tmp5(1126).t;
        if (closure_129_1) {
          const obj7 = { channelName: closure_128_1 };
          let onCancelResult = onCancel(show.hGzPnx, obj7);
        } else {
          const obj8 = { channelName: closure_128_1 };
          onCancelResult = onCancel(show.rKzX1E, obj8);
        }
        closure_128_2 = onCancelResult;
        closure_129_2(!closure_129_1);
        const obj4 = tmp5(5043);
        show = tmp2(5707).show;
        const obj9 = { title: closure_128_0, body: closure_128_2, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, onCancel: null, isDismissable: false };
        const intl3 = tmp5(1126).intl;
        obj9.cancelText = intl3.string(tmp5(1126).t["ETE/oC"]);
        const intl4 = tmp5(1126).intl;
        obj9.confirmText = intl4.string(tmp5(1126).t.p89ACt);
        intl2 = closure_129_6;
        obj9.onConfirm = closure_129_6;
        onCancel = function onCancel() {
          closure_1_2(c2(c3[22]).isPrivateGuildChannel(closure_1_0));
        };
        obj9.onCancel = onCancel;
        show(obj9);
        dependencyMap = 3;
        const tmp42 = tmp2(5707);
      } catch (tmp54) {
        dependencyMap = tmp;
        throw tmp54;
      }
    }
  };
  const tmp = closure_26();
  navigation = channel(navigation[19]).useNavigation();
  let obj = channel(navigation[19]);
  const appChannelBotUserId = channel(navigation[20]).useAppChannelBotUserId(channel);
  let obj2 = channel(navigation[20]);
  let items = [GuildStore, GuildRoleStore];
  const stateFromStoresObject = channel(navigation[21]).useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(channel.getGuildId());
    const obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = togglePrivateChannel.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: "r" });
  }, items1);
  const items2 = [guild, sortedGuildRoles, channel];
  const memo = togglePrivateChannel.useMemo(() => {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const obj = ChannelPermissionsUtilsAll;
        const existingRolesRows = obj.getExistingRolesRows(guild, sortedGuildRoles, channel, channel.accessPermissions);
      }
      return [];
    }
  }, items2);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = GuildMemberStore.getMemberIds(id);
      let obj4 = setPrivateToggleState(tmp3[22]);
      let obj5 = { appChannelBotUserId };
      const existingMembersRows = obj4.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions, obj5);
      const isCategoryResult = channel.isCategory();
      let result = setPrivateToggleState(tmp3[22]).isPrivateGuildChannel(channel);
      c9 = result;
      let obj6 = setPrivateToggleState(tmp3[22]);
      let obj7 = setPrivateToggleState(tmp3[29]);
      const canEveryoneRoleResult = setPrivateToggleState(tmp3[29]).canEveryoneRole(constants2.VIEW_CHANNEL, guild);
      const canEveryoneRoleResult1 = setPrivateToggleState(tmp3[29]).canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      let string = tmp2(tmp3[25]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        let intl2 = tmp2(tmp3[25]).intl;
        let stringResult = intl2.string(tmp2(tmp3[25]).t.RQUk61);
      } else {
        stringResult = tmp20;
        if (type === tmp21.GUILD_VOICE) {
          let intl = tmp2(tmp3[25]).intl;
          stringResult = intl.string(tmp2(tmp3[25]).t.cLjvKg);
        }
      }
      let obj9 = { style: null, spacing: null, children: null };
      let obj10 = { paddingHorizontal: privateToggleState(tmp3[16]).space.PX_16 };
      obj9.style = obj10;
      obj9.spacing = privateToggleState(tmp3[16]).space.PX_16;
      const obj11 = { title: stringResult, hasIcons: false, children: null };
      let intl3 = tmp2(tmp3[25]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[25]).t;
      if (isCategoryResult) {
        let string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      const obj12 = {
        label: string2Result,
        value: privateToggleState,
        onValueChange: function onPrivateChannelSwitchChange() {
              const self = this;
              const apply = closure_8.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
      };
      obj11.children = closure_23(tmp2(tmp3[31]).TableSwitchRow, obj12);
      const items3 = [closure_23(tmp2(tmp3[32]).TableRowGroup, obj11), , , , , ];
      let tmp25Result = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        const obj13 = { style: tmp.adminWarning, children: null };
        const obj14 = { messageType: tmp2(tmp3[33]).HelpMessageTypes.WARNING, children: null };
        let intl4 = tmp2(tmp3[25]).intl;
        obj14.children = intl4.string(tmp2(tmp3[25]).t["5f3HIC"]);
        obj13.children = closure_23(tmp2(tmp3[33]).HelpMessage, obj14);
        tmp25Result = closure_23(closure_7, obj13);
      }
      items3[1] = tmp25Result;
      let tmp25Result2 = !canEveryoneRoleResult1;
      if (!canEveryoneRoleResult1) {
        tmp25Result2 = !canEveryoneRoleResult;
      }
      if (tmp25Result2) {
        tmp25Result2 = !result;
      }
      if (tmp25Result2) {
        const obj15 = { style: tmp.adminWarning, children: null };
        const obj16 = { messageType: tmp2(tmp3[33]).HelpMessageTypes.WARNING, children: null };
        const intl5 = tmp2(tmp3[25]).intl;
        obj16.children = intl5.string(tmp2(tmp3[25]).t.ZAk4Q9);
        obj15.children = closure_23(tmp2(tmp3[33]).HelpMessage, obj16);
        tmp25Result2 = closure_23(closure_7, obj15);
      }
      items3[2] = tmp25Result2;
      const obj17 = { hasIcons: true, children: null };
      const obj18 = { arrow: true, icon: closure_23(tmp2(tmp3[34]).CirclePlusIcon, {}), label: null, onPress: null };
      const intl6 = tmp2(tmp3[25]).intl;
      obj18.label = intl6.string(tmp2(tmp3[25]).t.dMJ3Y6);
      obj18.onPress = function onPress() {
        if (null != channel) {
          const result = channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(tmp);
        }
      };
      obj17.children = closure_23(tmp2(tmp3[35]).TableRow, obj18);
      items3[3] = closure_23(tmp2(tmp3[32]).TableRowGroup, obj17);
      const obj19 = { title: null, hasIcons: true, children: null };
      const intl7 = tmp2(tmp3[25]).intl;
      obj19.title = intl7.string(tmp2(tmp3[25]).t.ES4CC6);
      obj19.children = memo.map((item) => closure_2_23(ChannelOverwritesItemDefault, { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, item.id));
      items3[4] = closure_23(tmp2(tmp3[32]).TableRowGroup, obj19);
      const obj20 = { hasIcons: true, children: existingMembersRows.map((item) => closure_2_23(ChannelOverwritesItemDefault, { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, item.id)) };
      items3[5] = closure_23(tmp2(tmp3[32]).TableRowGroup, obj20);
      obj9.children = items3;
      return closure_24(tmp2(tmp3[30]).Stack, obj9);
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EasyChannelPermissionSettings(channelId) {
  const cResult = channelId(first1[18]).c(33);
  channelId = channelId.channelId;
  const origin = channelId.origin;
  let obj = channelId(first1[18]);
  channelId(first1[37]).useNavigatorBackPressHandler(onBack);
  closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = channelId(first1[37]);
  const stateFromStores = channelId(first1[21]).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelSettingsPermissionsStore];
    const fn2 = function f() {
      return advancedMode.advancedMode;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = channelId(first1[21]);
  let isGuildStageVoiceResult;
  const stateFromStores1 = channelId(first1[21]).useStateFromStores(tmp9, tmp10);
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    let BASIC = constants.MODERATORS;
  } else if (stateFromStores1) {
    BASIC = constants.ADVANCED;
  } else {
    BASIC = constants.BASIC;
  }
  [first1, _slicedToArray] = noop.useState(BASIC);
  if (cResult[5] !== stateFromStores) {
    const result = stateFromStores(tmp2[22]).isPrivateGuildChannel(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    let tmp19 = result;
    const obj7 = stateFromStores(tmp2[22]);
  } else {
    tmp19 = cResult[6];
  }
  const tmpResult2 = channelId(first1[21]);
  [r10079, tmp23] = noop.useState(tmp19);
  asyncGeneratorStep = tmp23;
  if (cResult[7] !== origin) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    const items2 = [origin];
    cResult[7] = origin;
    cResult[8] = U;
    cResult[9] = items2;
    let tmp25 = items2;
  } else {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    tmp25 = cResult[9];
  }
  const effect = noop.useEffect(U, tmp25);
  if (cResult[10] !== stateFromStores) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    cResult[10] = stateFromStores;
    cResult[11] = tmp28;
  } else {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    const stringResult = obj8.string(tmp(tmp2[25]).t["Mw/UDN"]);
    const intl = tmp(tmp2[25]).intl;
    const stringResult1 = intl.string(tmp(tmp2[25]).t["0a6awf"]);
    cResult[12] = stringResult1;
    cResult[13] = stringResult;
    let tmp30 = stringResult;
    const tmp29 = stringResult1;
  } else {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    tmp30 = cResult[13];
  }
  if (cResult[14] !== stateFromStores) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    arr4[0] = tmp30;
    arr4[1] = tmp29;
    if (stateFromStores != null) {
      class U {
        constructor() {
          tmp = ChannelSettingsSections;
          obj = closure_1(closure_3[38]);
          CHANNEL_SETTINGS = null;
          if (origin === ChannelSettingsSections.OVERVIEW) {
            tmp3 = SettingsPaneTypes;
            CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
          }
          obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
    }
    if (true !== undefined) {
      class U {
        constructor() {
          tmp = ChannelSettingsSections;
          obj = closure_1(closure_3[38]);
          CHANNEL_SETTINGS = null;
          if (origin === ChannelSettingsSections.OVERVIEW) {
            tmp3 = SettingsPaneTypes;
            CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
          }
          obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      cResult[14] = stateFromStores;
      cResult[15] = arr4;
    } else {
      class U {
        constructor() {
          tmp = ChannelSettingsSections;
          obj = closure_1(closure_3[38]);
          CHANNEL_SETTINGS = null;
          if (origin === ChannelSettingsSections.OVERVIEW) {
            tmp3 = SettingsPaneTypes;
            CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
          }
          obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
          return;
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            tmp = ChannelSettingsSections;
            obj = closure_1(closure_3[38]);
            CHANNEL_SETTINGS = null;
            if (origin === ChannelSettingsSections.OVERVIEW) {
              tmp3 = SettingsPaneTypes;
              CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
            }
            obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
        const stringResult2 = obj9.string(tmp(tmp2[25]).t.YIIUJ3);
        cResult[16] = stringResult2;
        const tmp35 = stringResult2;
      } else {
        class U {
          constructor() {
            tmp = ChannelSettingsSections;
            obj = closure_1(closure_3[38]);
            CHANNEL_SETTINGS = null;
            if (origin === ChannelSettingsSections.OVERVIEW) {
              tmp3 = SettingsPaneTypes;
              CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
            }
            obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
            return;
          }
        }
      }
      arr4.push(tmp35);
    }
  } else {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
  }
  if (cResult[17] !== arr4) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
    cResult[17] = arr4;
    cResult[18] = tmp39;
  } else {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
  }
  if (cResult[19] === tmp28) {
    class U {
      constructor() {
        tmp = ChannelSettingsSections;
        obj = closure_1(closure_3[38]);
        CHANNEL_SETTINGS = null;
        if (origin === ChannelSettingsSections.OVERVIEW) {
          tmp3 = SettingsPaneTypes;
          CHANNEL_SETTINGS = SettingsPaneTypes.CHANNEL_SETTINGS;
        }
        obj1 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.SETTINGS_PANE_VIEWED, obj1);
        return;
      }
    }
  }
  cResult[19] = tmp28;
  cResult[20] = first1;
  cResult[21] = tmp39;
  cResult[22] = { pageWidth: 0, defaultIndex: first1, onSetActiveIndex: tmp28, items: tmp39 };
  let obj3 = { pageWidth: 0, defaultIndex: first1, onSetActiveIndex: tmp28, items: tmp39 };
  const tmp16Result = _slicedToArray(noop.useState(tmp19), 2);
}) : (function EasyChannelPermissionSettings(arg0) {
  ({ channelId: require, origin } = arg0);
  defaultIndex = undefined;
  _slicedToArray = undefined;
  closure_5 = undefined;
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(onBack);
  const tmp4 = closure_26();
  let obj = require("useNavigatorBackPressHandler");
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj2 = require("initialize");
  const items1 = [ChannelSettingsPermissionsStore];
  let isGuildStageVoiceResult;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => advancedMode.advancedMode);
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    let BASIC = constants.MODERATORS;
    let tmp8 = constants;
  } else if (stateFromStores1) {
    BASIC = constants.ADVANCED;
    tmp8 = constants;
  } else {
    BASIC = constants.BASIC;
    tmp8 = constants;
  }
  [defaultIndex, _slicedToArray] = noop.useState(BASIC);
  const obj4 = require("initialize");
  const tmp11 = _slicedToArray(noop.useState(stateFromStores(defaultIndex[22]).isPrivateGuildChannel(stateFromStores)), 2);
  closure_5 = tmp12;
  const items2 = [origin];
  const effect = noop.useEffect(() => {
    let CHANNEL_SETTINGS = null;
    if (origin === constants4.OVERVIEW) {
      CHANNEL_SETTINGS = constants5.CHANNEL_SETTINGS;
    }
    AppAnalyticsUtilsDefault.trackWithMetadata(constants3.SETTINGS_PANE_VIEWED, { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants4.PERMISSIONS });
    const obj2 = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants4.PERMISSIONS };
  }, items2);
  const items3 = [stateFromStores];
  const callback = noop.useCallback((arg0) => {
    if (arg0 === constants.ADVANCED) {
      ChannelSettingsPermissionsActionCreators.setAdvancedMode(true);
    } else {
      closure_5(ChannelPermissionsUtilsAll.isPrivateGuildChannel(stateFromStores));
      ChannelSettingsPermissionsActionCreators.setAdvancedMode(false);
    }
    closure_4(arg0);
  }, items3);
  const intl = require("util").intl;
  const items4 = [intl.string(require("util").t["Mw/UDN"]), ];
  const intl2 = require("util").intl;
  items4[1] = intl2.string(require("util").t["0a6awf"]);
  let isGuildStageVoiceResult1;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  if (true === isGuildStageVoiceResult1) {
    const intl3 = require("util").intl;
    items4.push(intl3.string(require("util").t.YIIUJ3));
  }
  const obj6 = stateFromStores(defaultIndex[22]);
  const tmpResult = require("SegmentedControlState");
  const items5 = [stateFromStores, defaultIndex];
  const segmentedControlState = tmpResult.useSegmentedControlState({ pageWidth: 0, defaultIndex, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) });
  const effect1 = noop.useEffect(() => {
    if (first === constants.BASIC) {
      let ADVANCED = SettingMode.BASIC;
    } else {
      ADVANCED = SettingMode.ADVANCED;
    }
    const obj2 = { mode: ADVANCED, channel_is_private: null };
    const obj = AppAnalyticsUtilsDefault;
    obj2.channel_is_private = ChannelPermissionsUtilsAll.isPrivateGuildChannel(stateFromStores);
    obj.trackWithMetadata(constants3.CHANNEL_PERMISSIONS_PAGE_VIEWED, obj2);
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj7 = { style: tmp4.container, children: null };
    const obj8 = { style: null, children: null };
    const obj9 = { paddingHorizontal: origin(tmp2[16]).space.PX_12 };
    obj8.style = obj9;
    const obj10 = { state: segmentedControlState };
    obj8.children = closure_23(require("SegmentedControl").SegmentedControl, obj10);
    const items6 = [closure_23(closure_7, obj8), ];
    let obj11 = { style: tmp4.content, children: null };
    if (defaultIndex === tmp8.BASIC) {
      const obj12 = { channel: stateFromStores, privateToggleState: tmp11[0], setPrivateToggleState: tmp12 };
      let tmp21Result = closure_23(closure_27, obj12);
    } else if (defaultIndex === tmp8.MODERATORS) {
      const obj13 = { channel: stateFromStores };
      tmp21Result = closure_23(origin(tmp2[41]), obj13);
    } else {
      const obj14 = { channelId: stateFromStores.id };
      tmp21Result = closure_23(origin(tmp2[42]), obj14);
    }
    obj11.children = tmp21Result;
    obj11 = closure_23(closure_8, obj11);
    items6[1] = obj11;
    obj7.children = items6;
    closure_24(closure_7, obj7);
  }
  let obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
});