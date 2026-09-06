// discord_app/modules/guild_settings/native/GuildSettingsModalOverview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import GuildProfileLimits from "../../../../discord_common/js/shared/shared-constants/GuildProfileLimits.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioGroup from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import TextArea from "../../../design/components/TextInput/native/TextArea.native.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import openChannelPickerDefault from "../../channel/native/openChannelPicker.tsx";
import ChannelSummariesExperiment from "../../../experiments/ChannelSummariesExperiment.tsx";
import MobileBoostProgressBarExperiment from "../../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx";
import AssetChooserDefault from "AssetChooser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
let closure_3 = fn(1975).isGuildOwnerWithRequiredMfaLevel;
const GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
const Constants = fn(1074);
({
  UserNotificationSettings: closure_12,
  ChannelTypes: map1,
  Permissions: closure_14,
  GuildFeatures: closure_15,
  HelpdeskArticles: closure_16,
  SystemChannelFlags: closure_17,
  MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_18,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
fn(4560);
let createStyles = { overview: { flex: 1 }, overviewContent: { paddingTop: 16 }, stackPadding: null };
createStyles = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.stackPadding = createStyles;
let closure_22 = createStyles.createLegacyClassComponentStyles(createStyles);
let items = [
  {
    value: 60,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 1 });
    },
  },
  {
    value: 300,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 5 });
    },
  },
  {
    value: 900,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 15 });
    },
  },
  {
    value: 1800,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 30 });
    },
  },
  {
    value: 3600,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.xCjYxK, { hours: 1 });
    },
  },
];
let closure_23 = Object.freeze(items);
const PureComponent = noop.PureComponent;
class GuildSettingsModalOverview extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      const obj = { name };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleDescriptionChange = function handleDescriptionChange(description) {
      const obj = { description };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleAfkChannelChange = function handleAfkChannelChange() {
      const obj = {
        guildId: applyArgumentsResult.props.guild.id,
        channelType: channelType2,
        noChannelOptionLabel: null,
        onSelect: null,
        filterFn: null,
        selectedChannel: null,
      };
      const intl = util.intl;
      obj.noChannelOptionLabel = intl.string(util.t.wGiHkK);
      obj.onSelect = function onSelect(id) {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        closure_1_1(dependencyMap[18]).updateGuild({ afkChannelId: id });
      };
      obj.filterFn = function filterFn(channel) {
        return channel.channel.type === constants.GUILD_VOICE;
      };
      let afkChannel = applyArgumentsResult.props.afkChannel;
      if (afkChannel == null) {
        afkChannel = null;
      }
      obj.selectedChannel = afkChannel;
      openChannelPickerDefault(obj);
    };
    applyArgumentsResult.handleSystemChannelChange = function handleSystemChannelChange() {
      const obj = {
        guildId: applyArgumentsResult.props.guild.id,
        channelType,
        filterFn(channel) {
          return channel.channel.type === constants.GUILD_TEXT;
        },
        noChannelOptionLabel: null,
        onSelect: null,
        selectedChannel: null,
      };
      const intl = util.intl;
      obj.noChannelOptionLabel = intl.string(util.t.ibUhoa);
      obj.onSelect = function onSelect(id) {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        closure_1_1(dependencyMap[18]).updateGuild({ systemChannelId: id });
      };
      let systemChannel = applyArgumentsResult.props.systemChannel;
      if (systemChannel == null) {
        systemChannel = null;
      }
      obj.selectedChannel = systemChannel;
      openChannelPickerDefault(obj);
    };
    applyArgumentsResult.handleSystemJoinMessages = function handleSystemJoinMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants5.SUPPRESS_JOIN_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemJoinMessageReplies = function handleSystemJoinMessageReplies(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(
        constants5.SUPPRESS_JOIN_NOTIFICATION_REPLIES,
        !arg0,
      );
    };
    applyArgumentsResult.handleSystemPremiumSubscribe = function handleSystemPremiumSubscribe(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(
        constants5.SUPPRESS_PREMIUM_SUBSCRIPTIONS,
        !arg0,
      );
    };
    applyArgumentsResult.handleSystemReminderNotifications = function handleSystemReminderNotifications(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(
        constants5.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS,
        !arg0,
      );
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessages =
      function handleSystemGuildRoleSubscriptionPurchaseMessages(arg0) {
        const result = applyArgumentsResult.handleSystemChannelFlagsChange(
          constants5.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS,
          !arg0,
        );
      };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessageReplies =
      function handleSystemGuildRoleSubscriptionPurchaseMessageReplies(arg0) {
        const result = applyArgumentsResult.handleSystemChannelFlagsChange(
          constants5.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
          !arg0,
        );
      };
    applyArgumentsResult.handleSystemVoiceSessionMessages = function handleSystemVoiceSessionMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(
        constants5.SUPPRESS_VOICE_SESSION_NOTIFICATIONS,
        !arg0,
      );
    };
    applyArgumentsResult.handleAFKTimeoutChange = function handleAFKTimeoutChange() {
      applyArgumentsResult(7195);
      let obj = {
        key: "AFKTimeout",
        options: closure_1_23.map((label) => ({
          label: label.label(),
          onPress() {
            closure_2_1(dependencyMap[18]);
            const obj = { afkTimeout: label.value };
            obj.updateGuild(obj);
          },
        })),
        hasIcons: false,
      };
      const result = obj.showSimpleActionSheet(obj);
    };
    applyArgumentsResult.handleDeleteServer = function handleDeleteServer() {
      let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.l3hWP6);
      const intl2 = util.intl;
      obj = { name: applyArgumentsResult.props.guild.name };
      obj.body = intl2.format(util.t["Zuo+Vd"], obj);
      const intl3 = util.intl;
      obj.cancelText = intl3.string(util.t.gm1Vej);
      const intl4 = util.intl;
      obj.confirmText = intl4.string(util.t.p89ACt);
      obj.onConfirm = applyArgumentsResult.handleConfirmDeleteServer;
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.show(obj);
    };
    applyArgumentsResult.handleConfirmDeleteServer = function handleConfirmDeleteServer() {
      GuildSettingsActionCreatorsDefault.deleteGuild(applyArgumentsResult.props.guild.id);
    };
    applyArgumentsResult.handleSplashChange = function handleSplashChange(splash) {
      const obj = { splash };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleSummariesToggle = function handleSummariesToggle(arg0) {
      const set = new Set(applyArgumentsResult.props.guild.features);
      if (arg0) {
        set.add(constants3.SUMMARIES_ENABLED_BY_USER);
      } else {
        set.delete(constants3.SUMMARIES_ENABLED_BY_USER);
      }
      GuildSettingsActionCreatorsDefault.updateGuild({ features: set });
    };
    applyArgumentsResult.handleBannerChange = function handleBannerChange(banner) {
      const obj = { banner };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleOverviewSaveChanges = function handleOverviewSaveChanges() {
      ({
        id,
        name,
        icon,
        afkChannelId,
        afkTimeout,
        systemChannelId,
        safetyAlertsChannelId,
        systemChannelFlags,
        defaultMessageNotifications,
        splash,
        banner,
        description,
        features,
        premiumProgressBarEnabled,
      } = applyArgumentsResult.props.guild);
      GuildSettingsActionCreatorsDefault.saveGuild(id, {
        name,
        icon,
        afkChannelId,
        afkTimeout,
        systemChannelId,
        systemChannelFlags,
        safetyAlertsChannelId,
        defaultMessageNotifications,
        splash,
        banner,
        description,
        features,
        premiumProgressBarEnabled,
      });
    };
    applyArgumentsResult.handleBoostProgressBarToggle = function handleBoostProgressBarToggle(
      premiumProgressBarEnabled,
    ) {
      const obj = { premiumProgressBarEnabled };
      obj.updateGuild(obj);
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalOverview.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigator();
};
prototype["componentDidUpdate"] = function componentDidUpdate(errors) {
  errors = this.props.errors;
  this.updateNavigator(errors);
  let tmp2 = errors.errors.message !== errors.message;
  if (tmp2) {
    tmp2 = null != errors.message;
  }
  if (tmp2) {
    ToastUtils.presentError(errors.message);
  }
};
prototype["updateNavigator"] = function updateNavigator(submitting) {
  const self = this;
  ({ navigation, submitting, hasChanges } = this.props);
  if (!tmp) {
    let setOptionsResult = { title: null, headerLeft: null, headerRight: null };
    let intl = self(1114).intl;
    setOptionsResult.title = intl.string(self(1114).t["/dp6yY"]);
    let fn;
    if (submitting) {
      fn = () => null;
    }
    setOptionsResult.headerLeft = fn;
    if (submitting) {
      let fn2 = () => closure_1_19(self(dependencyMap[16]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleOverviewSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return closure_2_19(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  GuildSettingsActionCreatorsDefault.cancelChanges(this.props.guild.id);
};
prototype["getError"] = function getError(arg0) {
  const errors = this.props.errors;
  let first;
  if (errors != null) {
    if (errors[arg0] != null) {
      first = tmp3[0];
    }
  }
  return first;
};
prototype["handleSystemChannelFlagsChange"] = function handleSystemChannelFlagsChange(
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS,
  arg1,
) {
  const setFlagResult = FlagUtils.setFlag(
    this.props.guild.systemChannelFlags,
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS,
    arg1,
  );
  GuildSettingsActionCreatorsDefault.updateGuild({ systemChannelFlags: setFlagResult });
};
prototype["handleDefaultNotificationsChange"] = function handleDefaultNotificationsChange(defaultMessageNotifications) {
  const obj = { defaultMessageNotifications };
  obj.updateGuild(obj);
};
prototype["renderGuildName"] = function renderGuildName() {
  ({ guild, canManage } = this.props);
  const obj = { label: null, value: null, isDisabled: null, onChange: null, errorMessage: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.dBih7e);
  obj.value = guild.name;
  obj.isDisabled = !canManage;
  obj.onChange = this.handleNameChange;
  obj.errorMessage = this.getError("name");
  return closure_1_19(TextInput.TextInput, obj);
};
prototype["renderAFKSettings"] = function renderAFKSettings() {
  const self = this;
  const props = this.props;
  const guild = props.guild;
  ({ canManage, afkChannel } = props);
  if (null != afkChannel) {
    let obj = useChannelName;
    let channelName = obj.computeChannelName(afkChannel, UserStore, RelationshipStore);
    let tmp4 = require;
  } else {
    const intl = util.intl;
    channelName = intl.string(util.t.wGiHkK);
    tmp4 = require;
  }
  let found = null;
  if (null != guild.afkChannelId) {
    found = closure_23.find((value) => value.value === guild.afkTimeout);
  }
  if (null != found) {
    let labelResult = found.label();
  } else {
    let obj1 = closure_23[1];
    labelResult = obj1.label();
  }
  obj = { title: null, description: null, hasIcons: false, children: null };
  const intl2 = tmp4(1114).intl;
  obj.title = intl2.string(tmp4(1114).t.qyGmGt);
  const intl3 = tmp4(1114).intl;
  obj.description = intl3.string(tmp4(1114).t.ffEOKP);
  obj = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp4(1114).intl;
  obj.label = intl4.string(tmp4(1114).t.KuYcnU);
  obj.disabled = !canManage;
  obj.trailing = closure_1_19(tmp4(5605).TableRow.TrailingText, { text: channelName });
  obj.onPress = self.handleAfkChannelChange;
  const items = [closure_1_19(tmp4(5605).TableRow, obj)];
  obj1 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl5 = tmp4(1114).intl;
  obj1.label = intl5.string(tmp4(1114).t.brhYaR);
  let tmp15 = !canManage;
  if (canManage) {
    tmp15 = null == guild.afkChannelId;
  }
  obj1.disabled = tmp15;
  obj1.trailing = closure_1_19(tmp4(5605).TableRow.TrailingText, { text: labelResult });
  obj1.onPress = self.handleAFKTimeoutChange;
  items[1] = closure_1_19(tmp4(5605).TableRow, obj1);
  obj.children = items;
  return closure_1_20(tmp4(5687).TableRowGroup, obj);
};
prototype["renderSystemMessageSettings"] = function renderSystemMessageSettings() {
  const self = this;
  ({ guild, canManage, systemChannel } = this.props);
  if (null != systemChannel) {
    let obj = useChannelName;
    let channelName = obj.computeChannelName(systemChannel, UserStore, RelationshipStore);
    let tmp = require;
  } else {
    tmp = require;
    const intl = util.intl;
    channelName = intl.string(util.t.ibUhoa);
  }
  let tmpResult = tmp(7992);
  const result = tmpResult.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild);
  let hasFlagResult = result;
  if (!result) {
    tmpResult = tmp(1384);
    hasFlagResult = tmpResult.hasFlag(
      guild.systemChannelFlags,
      constants5.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS,
    );
  }
  let hasFlagResult1 = result;
  if (!result) {
    hasFlagResult1 = tmp(1384).hasFlag(
      guild.systemChannelFlags,
      constants5.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
    );
    const tmpResult1 = tmp(1384);
  }
  let result1 = tmp(17336).isPastVcActivityMessagesEnabled(guild.id, "GuildSettingsModalOverview");
  if (!result1) {
    result1 = tmp(1384).hasFlag(guild.systemChannelFlags, constants5.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    const tmpResult3 = tmp(1384);
  }
  obj = { title: null, description: null, hasIcons: false, children: null };
  const intl2 = tmp(1114).intl;
  obj.title = intl2.string(tmp(1114).t.DP39VH);
  const intl3 = tmp(1114).intl;
  obj.description = intl3.string(tmp(1114).t.BT9zR3);
  obj = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp(1114).intl;
  obj.label = intl4.string(tmp(1114).t.GK18KJ);
  obj.disabled = !canManage;
  obj.trailing = closure_1_19(tmp(5605).TableRow.TrailingText, { text: channelName });
  obj.onPress = self.handleSystemChannelChange;
  const items = [closure_1_19(tmp(5605).TableRow, obj), , , , , , ,];
  const obj1 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl5 = tmp(1114).intl;
  obj1.label = intl5.string(tmp(1114).t["+f0bXQ"]);
  obj1.disabled = !canManage;
  const tmp15 = closure_1_20;
  const tmpResult2 = tmp(17336);
  obj1.value = !tmp(1384).hasFlag(guild.systemChannelFlags, constants5.SUPPRESS_JOIN_NOTIFICATIONS);
  obj1.onValueChange = self.handleSystemJoinMessages;
  items[1] = closure_1_19(tmp(7201).TableSwitchRow, obj1);
  const obj2 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl6 = tmp(1114).intl;
  obj2.label = intl6.string(tmp(1114).t["72k7jf"]);
  obj2.disabled = !canManage;
  const tmpResult4 = tmp(1384);
  obj2.value = !tmp(1384).hasFlag(guild.systemChannelFlags, constants5.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
  obj2.onValueChange = self.handleSystemJoinMessageReplies;
  items[2] = closure_1_19(tmp(7201).TableSwitchRow, obj2);
  const obj3 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl7 = tmp(1114).intl;
  obj3.label = intl7.string(tmp(1114).t["2L8NCN"]);
  obj3.disabled = !canManage;
  const tmpResult5 = tmp(1384);
  obj3.value = !tmp(1384).hasFlag(guild.systemChannelFlags, constants5.SUPPRESS_PREMIUM_SUBSCRIPTIONS);
  obj3.onValueChange = self.handleSystemPremiumSubscribe;
  items[3] = closure_1_19(tmp(7201).TableSwitchRow, obj3);
  const obj4 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl8 = tmp(1114).intl;
  obj4.label = intl8.string(tmp(1114).t["NvnW+V"]);
  obj4.disabled = !canManage;
  const tmpResult6 = tmp(1384);
  obj4.value = !tmp(1384).hasFlag(guild.systemChannelFlags, constants5.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS);
  obj4.onValueChange = self.handleSystemReminderNotifications;
  items[4] = closure_1_19(tmp(7201).TableSwitchRow, obj4);
  if (hasFlagResult) {
    const obj5 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl9 = tmp(1114).intl;
    obj5.label = intl9.string(tmp(1114).t["54n19R"]);
    obj5.disabled = !canManage;
    obj5.value = !tmp(1384).hasFlag(guild.systemChannelFlags, tmp17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
    obj5.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessages;
    hasFlagResult = tmp16(tmp(7201).TableSwitchRow, obj5);
    const tmpResult8 = tmp(1384);
  }
  items[5] = hasFlagResult;
  if (hasFlagResult1) {
    const obj6 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl10 = tmp(1114).intl;
    obj6.label = intl10.string(tmp(1114).t["IhF5d+"]);
    obj6.disabled = !canManage;
    obj6.value = !tmp(1384).hasFlag(
      guild.systemChannelFlags,
      tmp17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
    );
    obj6.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessageReplies;
    hasFlagResult1 = tmp16(tmp(7201).TableSwitchRow, obj6);
    const tmpResult9 = tmp(1384);
  }
  items[6] = hasFlagResult1;
  if (result1) {
    const obj7 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl11 = tmp(1114).intl;
    obj7.label = intl11.string(tmp(1114).t.IMtHBW);
    obj7.disabled = !canManage;
    obj7.value = !tmp(1384).hasFlag(guild.systemChannelFlags, tmp17.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    obj7.onValueChange = self.handleSystemVoiceSessionMessages;
    result1 = tmp16(tmp(7201).TableSwitchRow, obj7);
    const tmpResult10 = tmp(1384);
  }
  items[7] = result1;
  obj.children = items;
  return tmp15(tmp(5687).TableRowGroup, obj);
};
prototype["renderDefaultNotificationSettings"] = function renderDefaultNotificationSettings() {
  const self = this;
  const props = this.props;
  ({ canManage, guildMemberCount } = props);
  let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["23TVhl"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.PA2MZv);
  obj.value = props.guild.defaultMessageNotifications;
  obj.onChange = function onChange(defaultMessageNotifications) {
    return self.handleDefaultNotificationsChange(defaultMessageNotifications);
  };
  obj = { value: constants.ALL_MESSAGES, label: null, subLabel: null, disabled: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t["n/bTaY"]);
  let stringResult;
  if (null != guildMemberCount) {
    if (guildMemberCount >= collapsedCategories) {
      const intl4 = tmp2(1114).intl;
      stringResult = intl4.string(tmp2(1114).t["L+P4t2"]);
    }
  }
  obj.subLabel = stringResult;
  obj.disabled = !canManage;
  const items = [closure_1_19(TableRadioRow.TableRadioRow, obj)];
  obj = { value: constants.ONLY_MENTIONS, label: null, disabled: null };
  const intl5 = tmp2(1114).intl;
  obj.label = intl5.format(util.t.L2hmYy, {});
  obj.disabled = !canManage;
  items[1] = closure_1_19(TableRadioRow.TableRadioRow, obj);
  obj.children = items;
  return closure_1_20(TableRadioGroup.TableRadioGroup, obj);
};
prototype["renderBoostProgressBar"] = function renderBoostProgressBar() {
  ({ guild, canManage } = this.props);
  let obj = MobileBoostProgressBarExperiment;
  let tmp3 = null;
  if (obj.getMobileBoostProgressBarEnabled("GuildSettingsModalOverview")) {
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["0morVD"]);
    const intl2 = tmp(1114).intl;
    obj.description = intl2.string(tmp(1114).t.O87mwg);
    obj = { label: null, disabled: null, value: null, onValueChange: null };
    const intl3 = tmp(1114).intl;
    obj.label = intl3.string(tmp(1114).t.Dl4mJS);
    obj.disabled = !canManage;
    obj.value = guild.premiumProgressBarEnabled;
    obj.onValueChange = this.handleBoostProgressBarToggle;
    obj.children = closure_1_19(tmp(7201).TableSwitchRow, obj);
    tmp3 = closure_1_19(tmp(5687).TableRowGroup, obj);
  }
  return tmp3;
};
prototype["renderSplash"] = function renderSplash() {
  ({ guild, canManage } = this.props);
  const features = guild.features;
  let tmp = null;
  if (features.has(constants3.INVITE_SPLASH)) {
    let obj = {
      title: null,
      description: null,
      helperText: null,
      hasIcons: false,
      hasTrailingText: null,
      children: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.tzGY0q);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.FEFkkG);
    const intl3 = util.intl;
    obj = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants4.GUILD_INVITE_SPLASH) };
    obj.helperText = intl3.format(util.t.ZYA9PV, obj);
    obj.hasTrailingText = null != guild.splash && canManage;
    obj = {
      disabled: !canManage,
      guild,
      rawSource: guild.splash,
      getSource(id, size) {
        const obj = { id: id.id, splash: id.splash, size };
        return obj.getGuildSplashSource(obj);
      },
      onChooseAsset: this.handleSplashChange,
      size: { width: 1920, height: 1080 },
    };
    obj.children = closure_1_19(AssetChooserDefault, obj);
    tmp = tmp2(TableRowGroup.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderSummaries"] = function renderSummaries() {
  const props = this.props;
  const guild = props.guild;
  let obj = ChannelSummariesExperiment;
  if (obj.canGuildUseConversationSummaries(guild, false)) {
    const intl = tmp(1114).intl;
    obj = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants4.CONVERSATION_SUMMARIES) };
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl2 = tmp(1114).intl;
    obj.title = intl2.string(tmp(1114).t.XPDhcc);
    obj.description = intl.format(tmp(1114).t["c6Cy/h"], obj);
    const obj1 = { label: null, trailing: null, value: null, disabled: null, onValueChange: null };
    const intl3 = tmp(1114).intl;
    obj1.label = intl3.string(tmp(1114).t.vmEDQs);
    obj1.trailing = closure_1_19(tmp(1178).BetaTag, {});
    const features = guild.features;
    obj1.value = features.has(constants3.SUMMARIES_ENABLED_BY_USER);
    obj1.disabled = !props.canManage;
    obj1.onValueChange = this.handleSummariesToggle;
    obj.children = closure_1_19(tmp(7201).TableSwitchRow, obj1);
    return closure_1_19(tmp(5687).TableRowGroup, obj);
  } else {
    return null;
  }
};
prototype["renderDescription"] = function renderDescription() {
  ({ guild, canManage } = this.props);
  const obj = {
    label: null,
    description: null,
    maxLength: null,
    value: null,
    isDisabled: null,
    onChange: null,
    placeholder: null,
  };
  const intl = util.intl;
  obj.label = intl.string(util.t["RSfm+i"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["/B6PRw"]);
  obj.maxLength = GuildProfileLimits.MAX_DESCRIPTION_LENGTH;
  let str = guild.description;
  if (str == null) {
    str = "";
  }
  obj.value = str;
  obj.isDisabled = !canManage;
  obj.onChange = this.handleDescriptionChange;
  const intl3 = tmp2(1114).intl;
  obj.placeholder = intl3.string(util.t.Nvfowl);
  return closure_1_19(TextArea.TextArea, obj);
};
prototype["renderBanner"] = function renderBanner() {
  ({ guild, canManage } = this.props);
  let features = guild.features;
  if (features.has(constants3.BANNER)) {
    let obj = {
      title: null,
      description: null,
      helperText: null,
      hasIcons: false,
      hasTrailingText: null,
      children: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t["0r0AzF"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.UfqmIb);
    const intl3 = util.intl;
    obj = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants4.GUILD_BANNER_SPLASH) };
    obj.helperText = intl3.format(util.t.vBcWUv, obj);
    obj.hasTrailingText = null != guild.banner && canManage;
    obj = {
      disabled: !canManage,
      guild,
      rawSource: guild.banner,
      getSource(features) {
        features = features.features;
        const hasItem = features.has(constants.ANIMATED_BANNER);
        return AvatarUtilsDefault.getGuildBannerSource(features, hasItem);
      },
      onChooseAsset: this.handleBannerChange,
      size: { width: 960, height: 540 },
    };
    obj.children = closure_1_19(AssetChooserDefault, obj);
    return closure_1_19(TableRowGroup.TableRowGroup, obj);
  } else {
    return null;
  }
};
prototype["renderDeleteGuild"] = function renderDeleteGuild() {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null;
  if (null != currentUser) {
    tmp2 = null;
    if (closure_3(this.props.guild, currentUser)) {
      let obj = { hasIcons: false, children: null };
      obj = { variant: "danger", label: null, onPress: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.l3hWP6);
      obj.onPress = this.handleDeleteServer;
      obj.children = closure_1_19(TableRow.TableRow, obj);
      tmp2 = closure_1_19(TableRowGroup.TableRowGroup, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const tmp = closure_22(this.context);
  let obj = { children: null };
  obj = { style: tmp.overview, contentContainerStyle: null, children: null };
  const items = [tmp.overviewContent, this.props.contentContainerStyle];
  obj.contentContainerStyle = items;
  obj = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [
    this.renderGuildName(),
    this.renderSummaries(),
    this.renderAFKSettings(),
    this.renderSystemMessageSettings(),
    this.renderDefaultNotificationSettings(),
    this.renderBoostProgressBar(),
    this.renderDescription(),
    this.renderBanner(),
    this.renderSplash(),
    this.renderDeleteGuild(),
  ];
  obj.children = items1;
  obj.children = closure_1_20(Stack_Stack.Stack, obj);
  const items2 = [closure_1_19(Form.Form, obj), closure_1_19(NavScrim.NavScrim, {})];
  obj.children = items2;
  return closure_1_20(__initData, obj);
};
GuildSettingsModalOverview.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOverview.tsx");

export default function ConnectedGuildSettingsModalOverview(contentContainerStyle) {
  let guild;
  let obj = guild(1483);
  const navigation = obj.useNavigation();
  const items = [GuildSettingsStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(
    items,
    () => ({
      guild: GuildSettingsStore.getGuild(),
      submitting: GuildSettingsStore.isSubmitting(),
      hasChanges: GuildSettingsStore.hasChanges(),
      errors: GuildSettingsStore.getErrors(),
    }),
    [],
  );
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges, errors } = stateFromStoresObject);
  const obj2 = guild(504);
  const items1 = [PermissionStore];
  const items2 = [guild];
  const stateFromStores = guild(504).useStateFromStores(
    items1,
    () => PermissionStore.can(constants2.MANAGE_GUILD, guild),
    items2,
  );
  const obj3 = guild(504);
  const items3 = [ChannelStore];
  const stateFromStores1 = guild(504).useStateFromStores(items3, () => {
    let afkChannelId;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    return ChannelStore.getChannel(afkChannelId);
  });
  const obj4 = guild(504);
  const items4 = [ChannelStore];
  const stateFromStores2 = guild(504).useStateFromStores(items4, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return ChannelStore.getChannel(systemChannelId);
  });
  guild(504);
  [][0] = GuildMemberCountStore;
  let tmp8 = null;
  if (null != guild) {
    obj = {
      navigation,
      guild,
      submitting,
      hasChanges,
      canManage: stateFromStores,
      afkChannel: stateFromStores1,
      systemChannel: stateFromStores2,
      guildMemberCount: tmp7,
      errors,
      contentContainerStyle: contentContainerStyle.contentContainerStyle,
    };
    tmp8 = closure_19(GuildSettingsModalOverview, obj);
  }
  return tmp8;
}
