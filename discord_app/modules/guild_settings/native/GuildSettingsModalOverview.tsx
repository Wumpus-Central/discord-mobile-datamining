// === Module 18038: GuildSettingsModalOverview ===

// Module 18038 (GuildSettingsModalOverview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2110 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import useChannelName from "useChannelName" /* 4982 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import Stack_Stack from "Stack/Stack" /* 5271 */;
import common_AlertDefault from "common/Alert" /* 5292 */;
import GuildProfileLimits from "GuildProfileLimits" /* 5854 */;
import TableRow from "TableRow" /* 5910 */;
import TableRadioGroup from "TableRadioGroup" /* 5990 */;
import TableRowGroup from "TableRowGroup" /* 5992 */;
import TableRadioRow from "TableRadioRow" /* 5993 */;
import TextInput from "TextInput" /* 6936 */;
import NavScrim from "NavScrim" /* 7373 */;
import TextArea from "TextArea" /* 7418 */;
import TableSwitchRow from "TableSwitchRow" /* 7533 */;
import HeaderActionButton from "HeaderActionButton" /* 7707 */;
import Form from "Form" /* 8951 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9939 */;
import openChannelPickerDefault from "openChannelPicker" /* 11678 */;
import ChannelSummariesExperiment from "ChannelSummariesExperiment" /* 11696 */;
import AssetChooserDefault from "AssetChooser" /* 18039 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4748 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import RelationshipStore from "RelationshipStore" /* 4474 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;

require = fn;
let closure_3 = fn(2062).isGuildOwnerWithRequiredMfaLevel;
const GuildChannelStore = fn(4462);
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
const Constants = fn(1074);
({ UserNotificationSettings: closure_12, ChannelTypes: map1, Permissions: closure_14, GuildFeatures: closure_15, GuildSettingsSections: closure_16, HelpdeskArticles: closure_17, SystemChannelFlags: closure_18, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_19 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { overview: { flex: 1 }, overviewContent: { paddingTop: 16 }, stackPadding: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_23 = createStyles.createLegacyClassComponentStyles(obj2);
let items = [
  {
    value: 60,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 1 });
    }
  },
  {
    value: 300,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 5 });
    }
  },
  {
    value: 900,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 15 });
    }
  },
  {
    value: 1800,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.iXLF9W, { minutes: 30 });
    }
  },
  {
    value: 3600,
    label() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.xCjYxK, { hours: 1 });
    }
  }
];
let closure_24 = Object.freeze(items);
const PureComponent = noop.PureComponent;
class GuildSettingsModalOverview extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      GuildSettingsActionCreatorsDefault.updateGuild({ name });
    };
    applyArgumentsResult.handleDescriptionChange = function handleDescriptionChange(description) {
      GuildSettingsActionCreatorsDefault.updateGuild({ description });
    };
    applyArgumentsResult.handleAfkChannelChange = function handleAfkChannelChange() {
      const obj = { guildId: applyArgumentsResult.props.guild.id, channelType: channelType2, noChannelOptionLabel: null, onSelect: null, filterFn: null, selectedChannel: null };
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
        selectedChannel: null
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
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_JOIN_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemJoinMessageReplies = function handleSystemJoinMessageReplies(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !arg0);
    };
    applyArgumentsResult.handleSystemPremiumSubscribe = function handleSystemPremiumSubscribe(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !arg0);
    };
    applyArgumentsResult.handleSystemReminderNotifications = function handleSystemReminderNotifications(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessages = function handleSystemGuildRoleSubscriptionPurchaseMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessageReplies = function handleSystemGuildRoleSubscriptionPurchaseMessageReplies(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !arg0);
    };
    applyArgumentsResult.handleSystemVoiceSessionMessages = function handleSystemVoiceSessionMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(constants6.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleGuildSpaceSettingsPress = function handleGuildSpaceSettingsPress() {
      const navigation = applyArgumentsResult.props.navigation;
      navigation.push(constants4.GUILD_SPACE);
    };
    applyArgumentsResult.handleAFKTimeoutChange = function handleAFKTimeoutChange() {
      const obj = applyArgumentsResult(7527);
      const result = obj.showSimpleActionSheet({
        key: "AFKTimeout",
        options: closure_1_24.map((label) => ({
          label: label.label(),
          onPress() {
            closure_2_1(dependencyMap[18]).updateGuild({ afkTimeout: label.value });
          }
        })),
        hasIcons: false
      });
    };
    applyArgumentsResult.handleDeleteServer = function handleDeleteServer() {
      const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.l3hWP6);
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t["Zuo+Vd"], { name: applyArgumentsResult.props.guild.name });
      const intl3 = util.intl;
      obj2.cancelText = intl3.string(util.t.gm1Vej);
      const intl4 = util.intl;
      obj2.confirmText = intl4.string(util.t.p89ACt);
      obj2.onConfirm = applyArgumentsResult.handleConfirmDeleteServer;
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      actions_AlertActionCreatorsDefault.show(obj2);
    };
    applyArgumentsResult.handleConfirmDeleteServer = function handleConfirmDeleteServer() {
      GuildSettingsActionCreatorsDefault.deleteGuild(applyArgumentsResult.props.guild.id);
    };
    applyArgumentsResult.handleSplashChange = function handleSplashChange(splash) {
      GuildSettingsActionCreatorsDefault.updateGuild({ splash });
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
      GuildSettingsActionCreatorsDefault.updateGuild({ banner });
    };
    applyArgumentsResult.handleOverviewSaveChanges = function handleOverviewSaveChanges() {
      ({ id, name, icon, afkChannelId, afkTimeout, systemChannelId, safetyAlertsChannelId, systemChannelFlags, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled } = applyArgumentsResult.props.guild);
      GuildSettingsActionCreatorsDefault.saveGuild(id, { name, icon, afkChannelId, afkTimeout, systemChannelId, systemChannelFlags, safetyAlertsChannelId, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled });
    };
    applyArgumentsResult.handleBoostProgressBarToggle = function handleBoostProgressBarToggle(premiumProgressBarEnabled) {
      GuildSettingsActionCreatorsDefault.updateGuild({ premiumProgressBarEnabled });
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
    let intl = self(1115).intl;
    setOptionsResult.title = intl.string(self(1115).t["/dp6yY"]);
    let fn;
    if (submitting) {
      fn = () => null;
    }
    setOptionsResult.headerLeft = fn;
    if (submitting) {
      let fn2 = () => closure_1_20(self(dependencyMap[16]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleOverviewSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return closure_2_20(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
  tmp = null != submitting && submitting === submitting.submitting && hasChanges === submitting.hasChanges;
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
prototype["handleSystemChannelFlagsChange"] = function handleSystemChannelFlagsChange(SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, setting) {
  const setFlagResult = FlagUtils.setFlag(this.props.guild.systemChannelFlags, SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, setting);
  GuildSettingsActionCreatorsDefault.updateGuild({ systemChannelFlags: setFlagResult });
};
prototype["handleDefaultNotificationsChange"] = function handleDefaultNotificationsChange(defaultMessageNotifications) {
  GuildSettingsActionCreatorsDefault.updateGuild({ defaultMessageNotifications });
};
prototype["renderGuildName"] = function renderGuildName() {
  ({ guild, canManage } = this.props);
  const obj = { label: null, value: null, disabled: null, onChange: null, errorMessage: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.dBih7e);
  obj.value = guild.name;
  obj.disabled = !canManage;
  obj.onChange = this.handleNameChange;
  obj.errorMessage = this.getError("name");
  return closure_1_20(TextInput.TextInput, obj);
};
prototype["renderAFKSettings"] = function renderAFKSettings() {
  const self = this;
  const props = this.props;
  const guild = props.guild;
  ({ canManage, afkChannel } = props);
  if (null != afkChannel) {
    let channelName = useChannelName.computeChannelName(afkChannel, UserStore, RelationshipStore);
    let tmp4 = require;
  } else {
    const intl = util.intl;
    channelName = intl.string(util.t.wGiHkK);
    tmp4 = require;
  }
  let found = null;
  if (null != guild.afkChannelId) {
    found = closure_24.find((value) => value.value === guild.afkTimeout);
  }
  if (null != found) {
    let labelResult = found.label();
  } else {
    labelResult = closure_24[1].label();
  }
  const obj3 = { title: null, description: null, hasIcons: false, children: null };
  const intl2 = tmp4(1115).intl;
  obj3.title = intl2.string(tmp4(1115).t.qyGmGt);
  const intl3 = tmp4(1115).intl;
  obj3.description = intl3.string(tmp4(1115).t.ffEOKP);
  const obj4 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp4(1115).intl;
  obj4.label = intl4.string(tmp4(1115).t.KuYcnU);
  obj4.disabled = !canManage;
  obj4.trailing = closure_1_20(tmp4(5910).TableRow.TrailingText, { text: channelName });
  obj4.onPress = self.handleAfkChannelChange;
  const items = [closure_1_20(tmp4(5910).TableRow, obj4), ];
  const obj5 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl5 = tmp4(1115).intl;
  obj5.label = intl5.string(tmp4(1115).t.brhYaR);
  let tmp15 = !canManage;
  if (canManage) {
    tmp15 = null == guild.afkChannelId;
  }
  obj5.disabled = tmp15;
  obj5.trailing = closure_1_20(tmp4(5910).TableRow.TrailingText, { text: labelResult });
  obj5.onPress = self.handleAFKTimeoutChange;
  items[1] = closure_1_20(tmp4(5910).TableRow, obj5);
  obj3.children = items;
  return __initData(tmp4(5992).TableRowGroup, obj3);
};
prototype["renderSystemMessageSettings"] = function renderSystemMessageSettings() {
  const self = this;
  ({ guild, canManage, systemChannel } = this.props);
  if (null != systemChannel) {
    let channelName = useChannelName.computeChannelName(systemChannel, UserStore, RelationshipStore);
    let tmp = require;
  } else {
    tmp = require;
    const intl = util.intl;
    channelName = intl.string(util.t.ibUhoa);
  }
  const result = tmp(8340).isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild);
  let hasFlagResult = result;
  if (!result) {
    hasFlagResult = tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
    const tmpResult13 = tmp(1385);
  }
  let hasFlagResult1 = result;
  if (!result) {
    hasFlagResult1 = tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    const tmpResult14 = tmp(1385);
  }
  const tmpResult = tmp(8340);
  let result1 = tmp(17861).isPastVcActivityMessagesEnabled(guild.id, "GuildSettingsModalOverview");
  if (!result1) {
    result1 = tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    const tmpResult16 = tmp(1385);
  }
  const tmpResult15 = tmp(17861);
  let guildSpaceExperimentEnabled = tmp(7558).getGuildSpaceExperimentEnabled(guild.id, "GuildSettingsModalOverview");
  const obj2 = { title: null, description: null, hasIcons: false, children: null };
  const intl2 = tmp(1115).intl;
  obj2.title = intl2.string(tmp(1115).t.DP39VH);
  const intl3 = tmp(1115).intl;
  obj2.description = intl3.string(tmp(1115).t.BT9zR3);
  const obj3 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp(1115).intl;
  obj3.label = intl4.string(tmp(1115).t.GK18KJ);
  obj3.disabled = !canManage;
  obj3.trailing = closure_1_20(tmp(5910).TableRow.TrailingText, { text: channelName });
  obj3.onPress = self.handleSystemChannelChange;
  const items = [closure_1_20(tmp(5910).TableRow, obj3), , , , , , , , ];
  const obj4 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl5 = tmp(1115).intl;
  obj4.label = intl5.string(tmp(1115).t["+f0bXQ"]);
  obj4.disabled = !canManage;
  const tmpResult17 = tmp(7558);
  obj4.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_JOIN_NOTIFICATIONS);
  obj4.onValueChange = self.handleSystemJoinMessages;
  items[1] = closure_1_20(tmp(7533).TableSwitchRow, obj4);
  const obj5 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl6 = tmp(1115).intl;
  obj5.label = intl6.string(tmp(1115).t["72k7jf"]);
  obj5.disabled = !canManage;
  const tmpResult18 = tmp(1385);
  obj5.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
  obj5.onValueChange = self.handleSystemJoinMessageReplies;
  items[2] = closure_1_20(tmp(7533).TableSwitchRow, obj5);
  const obj6 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl7 = tmp(1115).intl;
  obj6.label = intl7.string(tmp(1115).t["2L8NCN"]);
  obj6.disabled = !canManage;
  const tmpResult19 = tmp(1385);
  obj6.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_PREMIUM_SUBSCRIPTIONS);
  obj6.onValueChange = self.handleSystemPremiumSubscribe;
  items[3] = closure_1_20(tmp(7533).TableSwitchRow, obj6);
  const obj7 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl8 = tmp(1115).intl;
  obj7.label = intl8.string(tmp(1115).t["NvnW+V"]);
  obj7.disabled = !canManage;
  const tmpResult20 = tmp(1385);
  obj7.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS);
  obj7.onValueChange = self.handleSystemReminderNotifications;
  items[4] = closure_1_20(tmp(7533).TableSwitchRow, obj7);
  if (hasFlagResult) {
    const obj8 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl9 = tmp(1115).intl;
    obj8.label = intl9.string(tmp(1115).t["54n19R"]);
    obj8.disabled = !canManage;
    obj8.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
    obj8.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessages;
    hasFlagResult = closure_1_20(tmp(7533).TableSwitchRow, obj8);
    const tmpResult22 = tmp(1385);
  }
  items[5] = hasFlagResult;
  if (hasFlagResult1) {
    const obj9 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl10 = tmp(1115).intl;
    obj9.label = intl10.string(tmp(1115).t["IhF5d+"]);
    obj9.disabled = !canManage;
    obj9.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    obj9.onValueChange = self.handleSystemGuildRoleSubscriptionPurchaseMessageReplies;
    hasFlagResult1 = closure_1_20(tmp(7533).TableSwitchRow, obj9);
    const tmpResult23 = tmp(1385);
  }
  items[6] = hasFlagResult1;
  if (result1) {
    const obj10 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl11 = tmp(1115).intl;
    obj10.label = intl11.string(tmp(1115).t.IMtHBW);
    obj10.disabled = !canManage;
    obj10.value = !tmp(1385).hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    obj10.onValueChange = self.handleSystemVoiceSessionMessages;
    result1 = closure_1_20(tmp(7533).TableSwitchRow, obj10);
    const tmpResult24 = tmp(1385);
  }
  items[7] = result1;
  if (guildSpaceExperimentEnabled) {
    const obj11 = { label: null, arrow: true, onPress: null };
    const intl12 = tmp(1115).intl;
    obj11.label = intl12.string(tmp(1115).t.OBskVU);
    obj11.onPress = self.handleGuildSpaceSettingsPress;
    guildSpaceExperimentEnabled = closure_1_20(tmp(5910).TableRow, obj11);
  }
  items[8] = guildSpaceExperimentEnabled;
  obj2.children = items;
  return __initData(tmp(5992).TableRowGroup, obj2);
};
prototype["renderDefaultNotificationSettings"] = function renderDefaultNotificationSettings() {
  const self = this;
  const props = this.props;
  ({ canManage, guildMemberCount } = props);
  const obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["23TVhl"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.PA2MZv);
  obj.value = props.guild.defaultMessageNotifications;
  obj.onChange = function onChange(defaultMessageNotifications) {
    return self.handleDefaultNotificationsChange(defaultMessageNotifications);
  };
  const obj2 = { value: constants.ALL_MESSAGES, label: null, subLabel: null, disabled: null };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t["n/bTaY"]);
  let stringResult;
  if (null != guildMemberCount) {
    if (guildMemberCount >= closure_1_19) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t["L+P4t2"]);
    }
  }
  obj2.subLabel = stringResult;
  obj2.disabled = !canManage;
  const items = [closure_1_20(TableRadioRow.TableRadioRow, obj2), ];
  const obj3 = { value: constants.ONLY_MENTIONS, label: null, disabled: null };
  const intl5 = util.intl;
  obj3.label = intl5.format(util.t.L2hmYy, {});
  obj3.disabled = !canManage;
  items[1] = closure_1_20(TableRadioRow.TableRadioRow, obj3);
  obj.children = items;
  return __initData(TableRadioGroup.TableRadioGroup, obj);
};
prototype["renderBoostProgressBar"] = function renderBoostProgressBar() {
  ({ guild, canManage } = this.props);
  let tmp3 = null;
  if (obj.getMobileBoostProgressBarEnabled("GuildSettingsModalOverview")) {
    const obj2 = { title: null, description: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["0morVD"]);
    const intl2 = util.intl;
    obj2.description = intl2.string(util.t.O87mwg);
    const obj3 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.Dl4mJS);
    obj3.disabled = !canManage;
    obj3.value = guild.premiumProgressBarEnabled;
    obj3.onValueChange = this.handleBoostProgressBarToggle;
    obj2.children = closure_1_20(TableSwitchRow.TableSwitchRow, obj3);
    tmp3 = closure_1_20(TableRowGroup.TableRowGroup, obj2);
  }
  return tmp3;
};
prototype["renderSplash"] = function renderSplash() {
  ({ guild, canManage } = this.props);
  const features = guild.features;
  let tmp = null;
  if (features.has(constants3.INVITE_SPLASH)) {
    const obj = { title: null, description: null, helperText: null, hasIcons: false, hasTrailingText: null, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.tzGY0q);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.FEFkkG);
    const intl3 = util.intl;
    const obj2 = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants5.GUILD_INVITE_SPLASH) };
    obj.helperText = intl3.format(util.t.ZYA9PV, obj2);
    obj.hasTrailingText = null != guild.splash && canManage;
    const obj4 = {
      disabled: !canManage,
      guild,
      rawSource: guild.splash,
      getSource(id, size) {
          return AvatarUtilsDefault.getGuildSplashSource({ id: id.id, splash: id.splash, size });
        },
      onChooseAsset: this.handleSplashChange,
      size: { width: 1920, height: 1080 }
    };
    obj.children = closure_1_20(AssetChooserDefault, obj4);
    tmp = closure_1_20(TableRowGroup.TableRowGroup, obj);
  }
  return tmp;
};
prototype["renderSummaries"] = function renderSummaries() {
  const props = this.props;
  const guild = props.guild;
  if (obj.canGuildUseConversationSummaries(guild, false)) {
    const intl = util.intl;
    const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants5.CONVERSATION_SUMMARIES) };
    const obj4 = { title: null, description: null, hasIcons: false, children: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t.XPDhcc);
    obj4.description = intl.format(util.t["c6Cy/h"], obj2);
    const obj5 = { label: null, trailing: null, value: null, disabled: null, onValueChange: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.vmEDQs);
    obj5.trailing = closure_1_20(native.BetaTag, {});
    const features = guild.features;
    obj5.value = features.has(constants3.SUMMARIES_ENABLED_BY_USER);
    obj5.disabled = !props.canManage;
    obj5.onValueChange = this.handleSummariesToggle;
    obj4.children = closure_1_20(TableSwitchRow.TableSwitchRow, obj5);
    return closure_1_20(TableRowGroup.TableRowGroup, obj4);
  } else {
    return null;
  }
  obj = ChannelSummariesExperiment;
};
prototype["renderDescription"] = function renderDescription() {
  ({ guild, canManage } = this.props);
  const obj = { label: null, description: null, maxLength: null, value: null, disabled: null, onChange: null, placeholder: null };
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
  obj.disabled = !canManage;
  obj.onChange = this.handleDescriptionChange;
  const intl3 = util.intl;
  obj.placeholder = intl3.string(util.t.Nvfowl);
  return closure_1_20(TextArea.TextArea, obj);
};
prototype["renderBanner"] = function renderBanner() {
  ({ guild, canManage } = this.props);
  let features = guild.features;
  if (features.has(constants3.BANNER)) {
    const obj = { title: null, description: null, helperText: null, hasIcons: false, hasTrailingText: null, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["0r0AzF"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.UfqmIb);
    const intl3 = util.intl;
    const obj2 = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants5.GUILD_BANNER_SPLASH) };
    obj.helperText = intl3.format(util.t.vBcWUv, obj2);
    obj.hasTrailingText = null != guild.banner && canManage;
    const obj4 = {
      disabled: !canManage,
      guild,
      rawSource: guild.banner,
      getSource(features) {
          features = features.features;
          const hasItem = features.has(constants.ANIMATED_BANNER);
          return AvatarUtilsDefault.getGuildBannerSource(features, hasItem);
        },
      onChooseAsset: this.handleBannerChange,
      size: { width: 960, height: 540 }
    };
    obj.children = closure_1_20(AssetChooserDefault, obj4);
    return closure_1_20(TableRowGroup.TableRowGroup, obj);
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
      const obj = { hasIcons: false, children: null };
      const obj2 = { variant: "danger", label: null, onPress: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t.l3hWP6);
      obj2.onPress = this.handleDeleteServer;
      obj.children = closure_1_20(TableRow.TableRow, obj2);
      tmp2 = closure_1_20(TableRowGroup.TableRowGroup, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const tmp = closure_23(this.context);
  const obj = { children: null };
  const obj2 = { style: tmp.overview, contentContainerStyle: null, children: null };
  const items = [tmp.overviewContent, this.props.contentContainerStyle];
  obj2.contentContainerStyle = items;
  const obj3 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [this.renderGuildName(), this.renderSummaries(), this.renderAFKSettings(), this.renderSystemMessageSettings(), this.renderDefaultNotificationSettings(), this.renderBoostProgressBar(), this.renderDescription(), this.renderBanner(), this.renderSplash(), this.renderDeleteGuild()];
  obj3.children = items1;
  obj2.children = __initData(Stack_Stack.Stack, obj3);
  const items2 = [closure_1_20(Form.Form, obj2), closure_1_20(NavScrim.NavScrim, {})];
  obj.children = items2;
  return __initData(__initData2, obj);
};
GuildSettingsModalOverview.contextType = fn(4535).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOverview.tsx");

export default function ConnectedGuildSettingsModalOverview(contentContainerStyle) {
  let guild;
  const navigation = guild(1484).useNavigation();
  const obj = guild(1484);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items, () => ({ guild: GuildSettingsStore.getGuild(), submitting: GuildSettingsStore.isSubmitting(), hasChanges: GuildSettingsStore.hasChanges(), errors: GuildSettingsStore.getErrors() }), []);
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges, errors } = stateFromStoresObject);
  const obj2 = guild(504);
  const items1 = [PermissionStore];
  const items2 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items1, () => PermissionStore.can(constants2.MANAGE_GUILD, guild), items2);
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
    const obj6 = { navigation, guild, submitting, hasChanges, canManage: stateFromStores, afkChannel: stateFromStores1, systemChannel: stateFromStores2, guildMemberCount: tmp7, errors, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    tmp8 = closure_20(GuildSettingsModalOverview, obj6);
  }
  return tmp8;
};