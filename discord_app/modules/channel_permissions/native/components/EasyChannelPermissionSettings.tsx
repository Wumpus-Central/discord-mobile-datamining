// discord_app/modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import ChannelPermissionsUtilsAll from "../../ChannelPermissionsUtils.tsx";
import ChannelSettingsPermissionsActionCreators from "../../../../actions/ChannelSettingsPermissionsActionCreators.tsx";
import ChannelOverwritesItemDefault from "ChannelOverwritesItem.tsx";
import channel_permissions_ChannelPermissionsUtils from "../ChannelPermissionsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelSettingsPermissionsStore from "../../../../stores/ChannelSettingsPermissionsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            accessPermissions = accessPermissions.accessPermissions;
            const result = v2(9016).isPrivateGuildChannel(accessPermissions);
            const obj9 = v2(9016);
            const tmp21 = v2;
            closure_128_0 = v2(9016).flipEveryonePermission(accessPermissions, accessPermissions, result);
            currentUser = currentUser.getCurrentUser();
            let tmp7 = ChannelSettingsPermissionsStore;
            const obj10 = v2(9016);
            if (!ChannelSettingsPermissionsStore) {
              tmp7 = null == currentUser;
            }
            if (!tmp7) {
              tmp7 = canResult;
            }
            if (!tmp7) {
              v2 = 1;
              dependencyMap = 1;
              const obj4 = {
                value: tmp21(9016).grantUserChannelAccess(accessPermissions, accessPermissions),
                done: false,
              };
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
          return { value: "HermesInternal", done: null };
        }
        const items = [closure_128_0];
        v2 = 2;
        dependencyMap = 1;
        const obj7 = { value: tmp2(9017).savePermissionUpdates(closure_129_0.id, items), done: false };
        return obj7;
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
        const obj3 = { value, done: true };
        return obj3;
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
                const obj6 = {
                  value: tmp5(9018).checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                    guild_id,
                    constants.VIEW_CHANNEL,
                  ),
                  done: false,
                };
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
          return { value: "HermesInternal", done: null };
        }
        const intl = tmp5(1115).intl;
        const string = intl.string;
        const t = tmp5(1115).t;
        if (closure_129_1) {
          let stringResult = string(t.vw48TT);
        } else {
          stringResult = string(t["47gQYL"]);
        }
        closure_128_0 = stringResult;
        closure_128_1 = tmp5(4989).computeChannelName(closure_129_0, UserStore, RelationshipStore);
        let intl2 = tmp5(1115).intl;
        let onCancel = intl2.format;
        let show = tmp5(1115).t;
        if (closure_129_1) {
          const obj7 = { channelName: closure_128_1 };
          let onCancelResult = onCancel(show.hGzPnx, obj7);
        } else {
          const obj8 = { channelName: closure_128_1 };
          onCancelResult = onCancel(show.rKzX1E, obj8);
        }
        closure_128_2 = onCancelResult;
        closure_129_2(!closure_129_1);
        const obj4 = tmp5(4989);
        show = tmp2(5203).show;
        const obj9 = {
          title: closure_128_0,
          body: closure_128_2,
          cancelText: null,
          confirmText: null,
          onConfirm: null,
          hideActionSheet: false,
          onCancel: null,
          isDismissable: false,
        };
        const intl3 = tmp5(1115).intl;
        obj9.cancelText = intl3.string(tmp5(1115).t["ETE/oC"]);
        const intl4 = tmp5(1115).intl;
        obj9.confirmText = intl4.string(tmp5(1115).t.p89ACt);
        intl2 = closure_129_6;
        obj9.onConfirm = closure_129_6;
        onCancel = function onCancel() {
          closure_1_2(c2(c3[20]).isPrivateGuildChannel(closure_1_0));
        };
        obj9.onCancel = onCancel;
        show(obj9);
        dependencyMap = 3;
        const tmp42 = tmp2(5203);
      } catch (tmp54) {
        dependencyMap = tmp;
        throw tmp54;
      }
    }
  };
  const tmp = closure_26();
  navigation = channel(navigation[17]).useNavigation();
  let obj = channel(navigation[17]);
  const appChannelBotUserId = channel(navigation[18]).useAppChannelBotUserId(channel);
  let obj2 = channel(navigation[18]);
  let items = [GuildStore, GuildRoleStore];
  const stateFromStoresObject = channel(navigation[19]).useStateFromStoresObject(items, () => {
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
    navigation.setOptions({ headerRight: "__initData" });
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
      let obj4 = setPrivateToggleState(tmp3[20]);
      let obj5 = { appChannelBotUserId };
      const existingMembersRows = obj4.getExistingMembersRows(
        memberIds,
        channel,
        guild,
        channel.accessPermissions,
        obj5,
      );
      const isCategoryResult = channel.isCategory();
      let result = setPrivateToggleState(tmp3[20]).isPrivateGuildChannel(channel);
      c9 = result;
      let obj6 = setPrivateToggleState(tmp3[20]);
      let obj7 = setPrivateToggleState(tmp3[27]);
      const canEveryoneRoleResult = setPrivateToggleState(tmp3[27]).canEveryoneRole(constants2.VIEW_CHANNEL, guild);
      const canEveryoneRoleResult1 = setPrivateToggleState(tmp3[27]).canEveryoneRole(constants2.ADMINISTRATOR, guild);
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
      let obj9 = { style: null, spacing: null, children: null };
      let obj10 = { paddingHorizontal: privateToggleState(tmp3[16]).space.PX_16 };
      obj9.style = obj10;
      obj9.spacing = privateToggleState(tmp3[16]).space.PX_16;
      const obj11 = { title: stringResult, hasIcons: false, children: null };
      let intl3 = tmp2(tmp3[23]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[23]).t;
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
        },
      };
      obj11.children = closure_23(tmp2(tmp3[30]).TableSwitchRow, obj12);
      const items3 = [closure_23(tmp2(tmp3[29]).TableRowGroup, obj11), , , , ,];
      let tmp25Result = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        const obj13 = { style: tmp.adminWarning, children: null };
        const obj14 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: null };
        let intl4 = tmp2(tmp3[23]).intl;
        obj14.children = intl4.string(tmp2(tmp3[23]).t["5f3HIC"]);
        obj13.children = closure_23(tmp2(tmp3[31]).HelpMessage, obj14);
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
        const obj16 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: null };
        const intl5 = tmp2(tmp3[23]).intl;
        obj16.children = intl5.string(tmp2(tmp3[23]).t.ZAk4Q9);
        obj15.children = closure_23(tmp2(tmp3[31]).HelpMessage, obj16);
        tmp25Result2 = closure_23(closure_7, obj15);
      }
      items3[2] = tmp25Result2;
      const obj17 = { hasIcons: true, children: null };
      const obj18 = { arrow: true, icon: closure_23(tmp2(tmp3[33]).CirclePlusIcon, {}), label: null, onPress: null };
      const intl6 = tmp2(tmp3[23]).intl;
      obj18.label = intl6.string(tmp2(tmp3[23]).t.dMJ3Y6);
      obj18.onPress = function onPress() {
        if (null != channel) {
          const result = channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(tmp);
        }
      };
      obj17.children = closure_23(tmp2(tmp3[32]).TableRow, obj18);
      items3[3] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj17);
      const obj19 = { title: null, hasIcons: true, children: null };
      const intl7 = tmp2(tmp3[23]).intl;
      obj19.title = intl7.string(tmp2(tmp3[23]).t.ES4CC6);
      obj19.children = memo.map((item) =>
        __initData3(
          ChannelOverwritesItemDefault,
          { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id },
          item.id,
        ),
      );
      items3[4] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj19);
      const obj20 = {
        hasIcons: true,
        children: existingMembersRows.map((item) =>
          __initData3(
            ChannelOverwritesItemDefault,
            { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id },
            item.id,
          ),
        ),
      };
      items3[5] = closure_23(tmp2(tmp3[29]).TableRowGroup, obj20);
      obj9.children = items3;
      return closure_24(tmp2(tmp3[28]).Stack, obj9);
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
const SettingMode = fn(7849).SettingMode;
const Constants = fn(1074);
({
  ChannelTypes: closure_18,
  Permissions: closure_19,
  AnalyticEvents: closure_20,
  ChannelSettingsSections: closure_21,
  SettingsPaneTypes: closure_22,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
const createStyles = fn(4836);
let obj2 = {
  container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  content: { marginTop: 16, flex: 1 },
  adminWarning: null,
};
let obj3 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.adminWarning = { marginTop: nativeDefault.space.PX_12 };
let closure_26 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx",
);

export default function EasyChannelPermissionSettings(arg0) {
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
  const tmp11 = _slicedToArray(
    noop.useState(stateFromStores(defaultIndex[20]).isPrivateGuildChannel(stateFromStores)),
    2,
  );
  closure_5 = tmp12;
  const items2 = [origin];
  const effect = noop.useEffect(() => {
    let CHANNEL_SETTINGS = null;
    if (origin === constants4.OVERVIEW) {
      CHANNEL_SETTINGS = constants5.CHANNEL_SETTINGS;
    }
    AppAnalyticsUtilsDefault.trackWithMetadata(constants3.SETTINGS_PANE_VIEWED, {
      settings_type: "channel",
      origin_pane: CHANNEL_SETTINGS,
      destination_pane: constants4.PERMISSIONS,
    });
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
  const items4 = [intl.string(require("util").t["Mw/UDN"])];
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
  const obj6 = stateFromStores(defaultIndex[20]);
  const tmpResult = require("SegmentedControlState");
  const items5 = [stateFromStores, defaultIndex];
  const segmentedControlState = tmpResult.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex,
    onSetActiveIndex: callback,
    items: items4.map((id) => ({ id, label: id, page: null })),
  });
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
    const items6 = [closure_23(closure_7, obj8)];
    let obj11 = { style: tmp4.content, children: null };
    if (defaultIndex === tmp8.BASIC) {
      const obj12 = { channel: stateFromStores, privateToggleState: tmp11[0], setPrivateToggleState: tmp12 };
      let tmp21Result = closure_23(ChannelPermissionSettingsBasicView, obj12);
    } else if (defaultIndex === tmp8.MODERATORS) {
      const obj13 = { channel: stateFromStores };
      tmp21Result = closure_23(origin(tmp2[39]), obj13);
    } else {
      const obj14 = { channelId: stateFromStores.id };
      tmp21Result = closure_23(origin(tmp2[40]), obj14);
    }
    obj11.children = tmp21Result;
    obj11 = closure_23(closure_8, obj11);
    items6[1] = obj11;
    obj7.children = items6;
    closure_24(closure_7, obj7);
  }
  let obj3 = {
    pageWidth: 0,
    defaultIndex,
    onSetActiveIndex: callback,
    items: items4.map((id) => ({ id, label: id, page: null })),
  };
}
