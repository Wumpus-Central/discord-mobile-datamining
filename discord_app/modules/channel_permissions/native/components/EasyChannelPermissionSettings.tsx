// === Module 16821: EasyChannelPermissionSettings ===

// Module 16821 (EasyChannelPermissionSettings)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9738 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9739 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9751 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11608 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSettingsPermissionsStore from "ChannelSettingsPermissionsStore" /* 16822 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ChannelPermissionSettingsBasicView(channel) {
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
  closure_7 = async function _togglePrivateChannel() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            accessPermissions = accessPermissions.accessPermissions;
            const result = v2(9738).isPrivateGuildChannel(accessPermissions);
            const obj9 = v2(9738);
            const tmp21 = v2;
            closure_128_0 = v2(9738).flipEveryonePermission(accessPermissions, accessPermissions, result);
            currentUser = currentUser.getCurrentUser();
            let tmp7 = ChannelSettingsPermissionsStore;
            const obj10 = v2(9738);
            if (!ChannelSettingsPermissionsStore) {
              tmp7 = null == currentUser;
            }
            if (!tmp7) {
              tmp7 = canResult;
            }
            if (!tmp7) {
              v2 = 1;
              dependencyMap = 1;
              const obj1 = { value: tmp21(9738).grantUserChannelAccess(accessPermissions, accessPermissions), done: false };
              return obj1;
            }
            canResult = PermissionStore.can(constants.ADMINISTRATOR, guild);
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        const items = [closure_128_0];
        v2 = 2;
        dependencyMap = 1;
        const obj3 = { value: tmp2(9739).savePermissionUpdates(closure_129_0.id, items), done: false };
        return obj3;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  };
  closure_8 = async function _onPrivateChannelSwitchChange() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            if (null != guild_id.guild_id) {
              if (!privateToggleState) {
                let obj1 = tmp5(9740);
                c2 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.checkChattableChannelThresholdMetAfterChannelPermissionDeny(guild_id, constants.VIEW_CHANNEL);
                return obj1;
              }
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        const intl = tmp5(1114).intl;
        const string = intl.string;
        const t = tmp5(1114).t;
        if (closure_129_1) {
          let stringResult = string(t.vw48TT);
        } else {
          stringResult = string(t["47gQYL"]);
        }
        closure_128_0 = stringResult;
        let obj3 = tmp5(4713);
        closure_128_1 = obj3.computeChannelName(closure_129_0, UserStore, RelationshipStore);
        let intl2 = tmp5(1114).intl;
        let onCancel = intl2.format;
        let show = tmp5(1114).t;
        if (closure_129_1) {
          const obj2 = { channelName: closure_128_1 };
          let onCancelResult = onCancel(show.hGzPnx, obj2);
        } else {
          obj3 = { channelName: closure_128_1 };
          onCancelResult = onCancel(show.rKzX1E, obj3);
        }
        closure_128_2 = onCancelResult;
        closure_129_2(!closure_129_1);
        show = tmp2(4904).show;
        const obj4 = { title: closure_128_0, body: closure_128_2, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, onCancel: null };
        const intl3 = tmp5(1114).intl;
        obj4.cancelText = intl3.string(tmp5(1114).t["ETE/oC"]);
        const intl4 = tmp5(1114).intl;
        obj4.confirmText = intl4.string(tmp5(1114).t.p89ACt);
        intl2 = closure_129_6;
        obj4.onConfirm = closure_129_6;
        onCancel = function onCancel() {
          closure_1_2(c2(c3[20]).isPrivateGuildChannel(closure_1_0));
        };
        obj4.onCancel = onCancel;
        show(obj4);
        dependencyMap = 3;
        const tmp42 = tmp2(4904);
      } catch (tmp54) {
        dependencyMap = tmp;
        throw tmp54;
      }
    }
  };
  const tmp = closure_26();
  let obj = channel(navigation[17]);
  navigation = obj.useNavigation();
  let obj1 = channel(navigation[18]);
  const appChannelBotUserId = obj1.useAppChannelBotUserId(channel);
  let obj2 = channel(navigation[19]);
  let items = [GuildStore, GuildRoleStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(channel.getGuildId());
    const obj = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = togglePrivateChannel.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: "Array" });
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
      let obj3 = setPrivateToggleState(tmp3[20]);
      obj = { appChannelBotUserId };
      const existingMembersRows = obj3.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions, obj);
      let obj5 = setPrivateToggleState(tmp3[20]);
      let result = obj5.isPrivateGuildChannel(channel);
      c9 = result;
      let obj6 = setPrivateToggleState(tmp3[27]);
      const isCategoryResult = channel.isCategory();
      let obj7 = setPrivateToggleState(tmp3[27]);
      const canEveryoneRoleResult1 = obj7.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      let string = tmp2(tmp3[23]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        let intl2 = tmp2(tmp3[23]).intl;
        let stringResult = intl2.string(tmp2(tmp3[23]).t.RQUk61);
      } else {
        stringResult = tmp20;
        if (type === tmp21.GUILD_VOICE) {
          let intl = tmp2(tmp3[23]).intl;
          stringResult = intl.string(tmp2(tmp3[23]).t.cLjvKg);
        }
      }
      obj = { style: null, spacing: null, children: null };
      obj1 = { paddingHorizontal: privateToggleState(tmp3[16]).space.PX_16 };
      obj.style = obj1;
      obj.spacing = privateToggleState(tmp3[16]).space.PX_16;
      obj2 = { title: stringResult, hasIcons: false, children: null };
      let intl3 = tmp2(tmp3[23]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[23]).t;
      if (isCategoryResult) {
        let string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      obj3 = {
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
      obj2.children = closure_23(tmp2(tmp3[30]).TableSwitchRow, obj3);
      const items3 = [closure_23(tmp2(tmp3[29]).TableRowGroup, obj2), , , , , ];
      let tmp25Result = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        let obj4 = { style: tmp.adminWarning, children: null };
        obj5 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: null };
        let intl4 = tmp2(tmp3[23]).intl;
        obj5.children = intl4.string(tmp2(tmp3[23]).t["5f3HIC"]);
        obj4.children = closure_23(tmp2(tmp3[31]).HelpMessage, obj5);
        tmp25Result = closure_23(closure_7, obj4);
      }
      items3[1] = tmp25Result;
      tmp25Result = !canEveryoneRoleResult1;
      if (!canEveryoneRoleResult1) {
        tmp25Result = !canEveryoneRoleResult;
      }
      if (tmp25Result) {
        tmp25Result = !result;
      }
      if (tmp25Result) {
        obj6 = { style: tmp.adminWarning, children: null };
        obj7 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: null };
        const intl5 = tmp2(tmp3[23]).intl;
        obj7.children = intl5.string(tmp2(tmp3[23]).t.ZAk4Q9);
        obj6.children = closure_23(tmp2(tmp3[31]).HelpMessage, obj7);
        tmp25Result = closure_23(closure_7, obj6);
      }
      items3[2] = tmp25Result;
      const obj8 = { hasIcons: true, children: null };
      let obj9 = { arrow: true, icon: closure_23(tmp2(tmp3[33]).CirclePlusIcon, {}), label: null, onPress: null };
      const intl6 = tmp2(tmp3[23]).intl;
      obj9.label = intl6.string(tmp2(tmp3[23]).t.dMJ3Y6);
      obj9.onPress = function onPress() {
        if (null != channel) {
          const result = channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(tmp);
        }
      };
      obj8.children = closure_23(tmp2(tmp3[32]).TableRow, obj9);
      items3[3] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj8);
      let obj10 = { title: null, hasIcons: true, children: null };
      const intl7 = tmp2(tmp3[23]).intl;
      obj10.title = intl7.string(tmp2(tmp3[23]).t.ES4CC6);
      obj10.children = memo.map((item) => __initData3(ChannelOverwritesItemDefault, { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, item.id));
      items3[4] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj10);
      const obj11 = { hasIcons: true, children: existingMembersRows.map((item) => __initData3(ChannelOverwritesItemDefault, { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, item.id)) };
      items3[5] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj11);
      obj.children = items3;
      return closure_24(tmp2(tmp3[28]).Stack, obj);
    }
  }
  return null;
}
function onBack() {
  AlertActionCreatorsDefault.close();
  return false;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const SettingMode = fn(8401).SettingMode;
const Constants = fn(1074);
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
fn(4560);
let createStyles = { container: null, content: null, adminWarning: null };
createStyles = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.content = { marginTop: 16, flex: 1 };
createStyles.adminWarning = { marginTop: nativeDefault.space.PX_12 };
let closure_26 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default function EasyChannelPermissionSettings(arg0) {
  ({ channelId: require, origin } = arg0);
  let defaultIndex;
  _slicedToArray = undefined;
  closure_5 = undefined;
  let obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(onBack);
  const tmp4 = closure_26();
  let obj1 = require("initialize");
  const items = [ChannelStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj3 = require("initialize");
  const items1 = [ChannelSettingsPermissionsStore];
  let obj4 = noop;
  let isGuildStageVoiceResult;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => advancedMode.advancedMode);
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
  const tmp9 = _slicedToArray(noop.useState(BASIC), 2);
  defaultIndex = tmp9[0];
  _slicedToArray = tmp9[1];
  let obj5 = stateFromStores(tmp2[20]);
  const tmp11 = _slicedToArray(obj4.useState(obj5.isPrivateGuildChannel(stateFromStores)), 2);
  closure_5 = tmp12;
  const items2 = [origin];
  const effect = obj4.useEffect(() => {
    let obj = AppAnalyticsUtilsDefault;
    let CHANNEL_SETTINGS = null;
    if (origin === constants4.OVERVIEW) {
      CHANNEL_SETTINGS = constants5.CHANNEL_SETTINGS;
    }
    obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: constants4.PERMISSIONS };
    obj.trackWithMetadata(constants3.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [stateFromStores];
  const callback = obj4.useCallback((arg0) => {
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
  obj = { pageWidth: 0, defaultIndex, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
  const items5 = [stateFromStores, defaultIndex];
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj);
  const effect1 = obj4.useEffect(() => {
    let obj = AppAnalyticsUtilsDefault;
    if (first === constants.BASIC) {
      let ADVANCED = SettingMode.BASIC;
    } else {
      ADVANCED = SettingMode.ADVANCED;
    }
    obj = { mode: ADVANCED, channel_is_private: ChannelPermissionsUtilsAll.isPrivateGuildChannel(stateFromStores) };
    obj.trackWithMetadata(constants3.CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: tmp4.container, children: null };
    obj1 = { style: null, children: null };
    let obj2 = { paddingHorizontal: origin(tmp2[16]).space.PX_12 };
    obj1.style = obj2;
    obj3 = { state: segmentedControlState };
    obj1.children = closure_23(require("SegmentedControl").SegmentedControl, obj3);
    const items6 = [closure_23(closure_7, obj1), ];
    obj4 = { style: tmp4.content, children: null };
    if (defaultIndex === tmp8.BASIC) {
      obj5 = { channel: stateFromStores, privateToggleState: tmp11[0], setPrivateToggleState: tmp12 };
      let tmp21Result = closure_23(ChannelPermissionSettingsBasicView, obj5);
    } else if (defaultIndex === tmp8.MODERATORS) {
      const obj6 = { channel: stateFromStores };
      tmp21Result = closure_23(origin(tmp2[39]), obj6);
    } else {
      const obj7 = { channelId: stateFromStores.id };
      tmp21Result = closure_23(origin(tmp2[40]), obj7);
    }
    obj4.children = tmp21Result;
    obj4 = closure_23(closure_8, obj4);
    items6[1] = obj4;
    obj.children = items6;
    closure_24(closure_7, obj);
  }
  const tmpResult = require("SegmentedControlState");
};