// discord_app/modules/guild_settings/native/GuildSettingsModalOverview.tsx
import { isGuildOwnerWithRequiredMfaLevel as closure_3 } from "GuildNSFWContentLevel";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import handleInviteData from "handleInviteData";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleFormInit from "handleFormInit";
import ME from "ME";
import jsxProd from "showSimpleActionSheet";
import createCacheKey from "createCacheKey";
import { PureComponent } from "openChannelPicker";
import importAllResult from "openChannelPicker";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { MAX_TRAITS } from "../../../../discord_common/js/shared/shared-constants/GuildProfileLimits.tsx";
import { hasFlag } from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { NavScrim } from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TextArea } from "../../../design/components/TextInput/native/TextArea.native.tsx";
import { TextInput } from "../../../design/components/TextInput/native/TextInput.native.tsx";
import { Form } from "../../../design/void/Form/native/index.tsx";
import { canSeeChannelSummaries } from "../../../experiments/ChannelSummariesExperiment.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";
import { apexExperiment } from "../../premium/powerups/experiments/MobileBoostProgressBarExperiment.tsx";
import { presentAddedFriendToast } from "../../toast/native/ToastUtils.tsx";
import { GuildSettingsActionCreators } from "../GuildSettingsActionCreators.tsx";
import { getSource } from "AssetChooser.tsx";

let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_6;
let map1;
let require = arg1;
({ GUILD_SELECTABLE_CHANNELS_KEY: c5, GUILD_VOCAL_CHANNELS_KEY: closure_6 } = comparator);
({ UserNotificationSettings: closure_12, ChannelTypes: map1, Permissions: closure_14, GuildFeatures: closure_15, HelpdeskArticles: closure_16, SystemChannelFlags: closure_17, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
createCacheKey = { overview: { flex: 1 }, overviewContent: { paddingTop: 16 }, stackPadding: null };
createCacheKey = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
let items = [
  {
    value: 60,
    label() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes: 1 });
    }
  },
  {
    value: 300,
    label() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes: 5 });
    }
  },
  {
    value: 900,
    label() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes: 15 });
    }
  },
  {
    value: 1800,
    label() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes: 30 });
    }
  },
  {
    value: 3600,
    label() {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(getSystemLocale.t.xCjYxK, { hours: 1 });
    }
  }
];
let closure_23 = Object.freeze(items);
class GuildSettingsModalOverview extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      let obj = callback(8944);
      obj = { name };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleDescriptionChange = function handleDescriptionChange(description) {
      let obj = callback(8944);
      obj = { description };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleAfkChannelChange = function handleAfkChannelChange() {
      const obj = { guildId: applyArgumentsResult.props.guild.id, channelType: outer1_6, noChannelOptionLabel: null, onSelect: null, filterFn: null, selectedChannel: null };
      const intl = applyArgumentsResult(outer1_2[13]).intl;
      obj[2] = intl.string(applyArgumentsResult(outer1_2[13]).t.wGiHkK);
      obj[3] = function onSelect(id) {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        callback(table[18]).updateGuild({ afkChannelId: id });
      };
      obj[4] = function filterFn(channel) {
        return channel.channel.type === constants.GUILD_VOICE;
      };
      let afkChannel = applyArgumentsResult.props.afkChannel;
      if (afkChannel == null) {
        afkChannel = null;
      }
      obj[5] = afkChannel;
      outer1_1(outer1_2[19])(obj);
    };
    applyArgumentsResult.handleSystemChannelChange = function handleSystemChannelChange() {
      const obj = {
        guildId: applyArgumentsResult.props.guild.id,
        channelType: outer1_5,
        filterFn(channel) {
          return channel.channel.type === constants.GUILD_TEXT;
        },
        noChannelOptionLabel: null,
        onSelect: null,
        selectedChannel: null
      };
      const intl = applyArgumentsResult(outer1_2[13]).intl;
      obj[3] = intl.string(applyArgumentsResult(outer1_2[13]).t.ibUhoa);
      obj[4] = function onSelect(id) {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        callback(table[18]).updateGuild({ systemChannelId: id });
      };
      let systemChannel = applyArgumentsResult.props.systemChannel;
      if (systemChannel == null) {
        systemChannel = null;
      }
      obj[5] = systemChannel;
      outer1_1(outer1_2[19])(obj);
    };
    applyArgumentsResult.handleSystemJoinMessages = function handleSystemJoinMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_JOIN_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemJoinMessageReplies = function handleSystemJoinMessageReplies(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !arg0);
    };
    applyArgumentsResult.handleSystemPremiumSubscribe = function handleSystemPremiumSubscribe(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !arg0);
    };
    applyArgumentsResult.handleSystemReminderNotifications = function handleSystemReminderNotifications(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessages = function handleSystemGuildRoleSubscriptionPurchaseMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessageReplies = function handleSystemGuildRoleSubscriptionPurchaseMessageReplies(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !arg0);
    };
    applyArgumentsResult.handleSystemVoiceSessionMessages = function handleSystemVoiceSessionMessages(arg0) {
      const result = applyArgumentsResult.handleSystemChannelFlagsChange(outer1_17.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleAFKTimeoutChange = function handleAFKTimeoutChange() {
      let obj = applyArgumentsResult(5682);
      obj = {
        key: "AFKTimeout",
        options: closure_23.map((label) => {
          let closure_0 = label;
          return {
            label: label.label(),
            onPress() {
              let obj = outer1_1(outer1_2[18]);
              obj = { afkTimeout: label.value };
              obj.updateGuild(obj);
            }
          };
        }),
        hasIcons: false
      };
      const result = obj.showSimpleActionSheet(obj);
    };
    applyArgumentsResult.handleDeleteServer = function handleDeleteServer() {
      let obj = outer1_1(outer1_2[22]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = applyArgumentsResult(outer1_2[13]).intl;
      obj[0] = intl.string(applyArgumentsResult(outer1_2[13]).t.l3hWP6);
      const intl2 = applyArgumentsResult(outer1_2[13]).intl;
      obj = { name: applyArgumentsResult.props.guild.name };
      obj[1] = intl2.format(applyArgumentsResult(outer1_2[13]).t["Zuo+Vd"], obj);
      const intl3 = applyArgumentsResult(outer1_2[13]).intl;
      obj[2] = intl3.string(applyArgumentsResult(outer1_2[13]).t.gm1Vej);
      const intl4 = applyArgumentsResult(outer1_2[13]).intl;
      obj[3] = intl4.string(applyArgumentsResult(outer1_2[13]).t.p89ACt);
      obj[4] = applyArgumentsResult.handleConfirmDeleteServer;
      obj[5] = outer1_1(outer1_2[23]).Colors.RED;
      obj.show(obj);
    };
    applyArgumentsResult.handleConfirmDeleteServer = function handleConfirmDeleteServer() {
      outer1_1(outer1_2[18]).deleteGuild(applyArgumentsResult.props.guild.id);
    };
    applyArgumentsResult.handleSplashChange = function handleSplashChange(splash) {
      let obj = callback(8944);
      obj = { splash };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleSummariesToggle = function handleSummariesToggle(arg0) {
      const set = new Set(applyArgumentsResult.props.guild.features);
      if (arg0) {
        set.add(outer1_15.SUMMARIES_ENABLED_BY_USER);
      } else {
        set.delete(outer1_15.SUMMARIES_ENABLED_BY_USER);
      }
      outer1_1(outer1_2[18]).updateGuild({ features: set });
    };
    applyArgumentsResult.handleBannerChange = function handleBannerChange(banner) {
      let obj = callback(8944);
      obj = { banner };
      obj.updateGuild(obj);
    };
    applyArgumentsResult.handleOverviewSaveChanges = function handleOverviewSaveChanges() {
      let afkChannelId;
      let afkTimeout;
      let banner;
      let defaultMessageNotifications;
      let description;
      let features;
      let icon;
      let id;
      let name;
      let premiumProgressBarEnabled;
      let safetyAlertsChannelId;
      let splash;
      let systemChannelFlags;
      let systemChannelId;
      ({ id, name, icon, afkChannelId, afkTimeout, systemChannelId, safetyAlertsChannelId, systemChannelFlags, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled } = applyArgumentsResult.props.guild);
      outer1_1(outer1_2[18]).saveGuild(id, { name, icon, afkChannelId, afkTimeout, systemChannelId, systemChannelFlags, safetyAlertsChannelId, defaultMessageNotifications, splash, banner, description, features, premiumProgressBarEnabled });
    };
    applyArgumentsResult.handleBoostProgressBarToggle = function handleBoostProgressBarToggle(premiumProgressBarEnabled) {
      let obj = callback(8944);
      obj = { premiumProgressBarEnabled };
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
    presentAddedFriendToast.presentError(errors.message);
    const obj = presentAddedFriendToast;
  }
};
prototype["updateNavigator"] = function updateNavigator(submitting) {
  let hasChanges;
  let navigation;
  const self = this;
  ({ navigation, submitting, hasChanges } = this.props);
  if (!tmp) {
    let setOptionsResult = { title: null, headerLeft: null, headerRight: null };
    let intl = self(1236).intl;
    setOptionsResult[0] = intl.string(self(1236).t["/dp6yY"]);
    let fn;
    if (submitting) {
      fn = () => null;
    }
    setOptionsResult[1] = fn;
    if (submitting) {
      let fn2 = () => callback(self(table[16]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleOverviewSaveChanges, text: null };
        const intl = self(outer1_2[13]).intl;
        obj[1] = intl.string(self(outer1_2[13]).t["R3BPH+"]);
        return outer1_19(self(outer1_2[17]).HeaderActionButton, obj);
      };
    }
    setOptionsResult[2] = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  GuildSettingsActionCreators.cancelChanges(this.props.guild.id);
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
prototype["handleSystemChannelFlagsChange"] = function handleSystemChannelFlagsChange(SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, arg1) {
  const obj = hasFlag;
  const setFlagResult = hasFlag.setFlag(this.props.guild.systemChannelFlags, SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, arg1);
  GuildSettingsActionCreators.updateGuild({ systemChannelFlags: setFlagResult });
};
prototype["handleDefaultNotificationsChange"] = function handleDefaultNotificationsChange(defaultMessageNotifications) {
  let obj = GuildSettingsActionCreators;
  obj = { defaultMessageNotifications };
  obj.updateGuild(obj);
};
prototype["renderGuildName"] = function renderGuildName() {
  let canManage;
  let guild;
  ({ guild, canManage } = this.props);
  const obj = { label: null, value: null, isDisabled: null, onChange: null, errorMessage: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.dBih7e);
  obj[1] = guild.name;
  obj[2] = !canManage;
  obj[3] = this.handleNameChange;
  obj[4] = this.getError("name");
  return callback2(TextInput.TextInput, obj);
};
prototype["renderAFKSettings"] = function renderAFKSettings() {
  let afkChannel;
  let canManage;
  const self = this;
  const props = this.props;
  const guild = props.guild;
  ({ canManage, afkChannel } = props);
  if (null != afkChannel) {
    let obj = guild(4475);
    let channelName = obj.computeChannelName(afkChannel, mergeGuildAvatar, upsertRelationship);
    let tmp4 = guild;
  } else {
    const intl = guild(1236).intl;
    channelName = intl.string(guild(1236).t.wGiHkK);
    tmp4 = guild;
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
  const intl2 = tmp4(1236).intl;
  obj[0] = intl2.string(tmp4(1236).t.qyGmGt);
  const intl3 = tmp4(1236).intl;
  obj[1] = intl3.string(tmp4(1236).t.ffEOKP);
  obj = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp4(1236).intl;
  obj[0] = intl4.string(tmp4(1236).t.KuYcnU);
  obj[1] = !canManage;
  obj[2] = callback2(tmp4(5354).TableRow.TrailingText, { text: channelName });
  obj[4] = self.handleAfkChannelChange;
  const items = [callback2(tmp4(5354).TableRow, obj), ];
  obj1 = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl5 = tmp4(1236).intl;
  obj1[0] = intl5.string(tmp4(1236).t.brhYaR);
  let tmp15 = !canManage;
  if (canManage) {
    tmp15 = null == guild.afkChannelId;
  }
  obj1[1] = tmp15;
  obj1[2] = callback2(tmp4(5354).TableRow.TrailingText, { text: labelResult });
  obj1[4] = self.handleAFKTimeoutChange;
  items[1] = callback2(tmp4(5354).TableRow, obj1);
  obj[3] = items;
  return closure_20(tmp4(5688).TableRowGroup, obj);
};
prototype["renderSystemMessageSettings"] = function renderSystemMessageSettings() {
  let canManage;
  let guild;
  let systemChannel;
  const self = this;
  ({ guild, canManage, systemChannel } = this.props);
  if (null != systemChannel) {
    let obj = computeChannelName;
    let channelName = obj.computeChannelName(systemChannel, mergeGuildAvatar, upsertRelationship);
    let tmp = require;
  } else {
    tmp = require;
    const intl = getSystemLocale.intl;
    channelName = intl.string(getSystemLocale.t.ibUhoa);
  }
  let tmpResult = tmp(8022);
  const result = tmpResult.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild);
  let hasFlagResult = result;
  if (!result) {
    tmpResult = tmp(1384);
    hasFlagResult = tmpResult.hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
  }
  let hasFlagResult1 = result;
  if (!result) {
    hasFlagResult1 = tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    const tmpResult1 = tmp(1384);
  }
  let result1 = tmp(16294).isPastVcActivityMessagesEnabled(guild.id, "GuildSettingsModalOverview");
  if (!result1) {
    result1 = tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    const tmpResult3 = tmp(1384);
  }
  obj = { title: null, description: null, hasIcons: false, children: null };
  const intl2 = tmp(1236).intl;
  obj[0] = intl2.string(tmp(1236).t.DP39VH);
  const intl3 = tmp(1236).intl;
  obj[1] = intl3.string(tmp(1236).t.BT9zR3);
  obj = { label: null, disabled: null, trailing: null, arrow: true, onPress: null };
  const intl4 = tmp(1236).intl;
  obj[0] = intl4.string(tmp(1236).t.GK18KJ);
  obj[1] = !canManage;
  obj[2] = callback2(tmp(5354).TableRow.TrailingText, { text: channelName });
  obj[4] = self.handleSystemChannelChange;
  const items = [callback2(tmp(5354).TableRow, obj), , , , , , , ];
  const obj1 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl5 = tmp(1236).intl;
  obj1[0] = intl5.string(tmp(1236).t["+f0bXQ"]);
  obj1[1] = !canManage;
  const tmp15 = closure_20;
  const tmpResult2 = tmp(16294);
  obj1[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_JOIN_NOTIFICATIONS);
  obj1[3] = self.handleSystemJoinMessages;
  items[1] = callback2(tmp(5689).TableSwitchRow, obj1);
  const obj2 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl6 = tmp(1236).intl;
  obj2[0] = intl6.string(tmp(1236).t["72k7jf"]);
  obj2[1] = !canManage;
  const tmpResult4 = tmp(1384);
  obj2[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
  obj2[3] = self.handleSystemJoinMessageReplies;
  items[2] = callback2(tmp(5689).TableSwitchRow, obj2);
  const obj3 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl7 = tmp(1236).intl;
  obj3[0] = intl7.string(tmp(1236).t["2L8NCN"]);
  obj3[1] = !canManage;
  const tmpResult5 = tmp(1384);
  obj3[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_PREMIUM_SUBSCRIPTIONS);
  obj3[3] = self.handleSystemPremiumSubscribe;
  items[3] = callback2(tmp(5689).TableSwitchRow, obj3);
  const obj4 = { label: null, disabled: null, value: null, onValueChange: null };
  const intl8 = tmp(1236).intl;
  obj4[0] = intl8.string(tmp(1236).t["NvnW+V"]);
  obj4[1] = !canManage;
  const tmpResult6 = tmp(1384);
  obj4[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, constants4.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS);
  obj4[3] = self.handleSystemReminderNotifications;
  items[4] = callback2(tmp(5689).TableSwitchRow, obj4);
  if (hasFlagResult) {
    const obj5 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl9 = tmp(1236).intl;
    obj5[0] = intl9.string(tmp(1236).t["54n19R"]);
    obj5[1] = !canManage;
    obj5[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, tmp17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS);
    obj5[3] = self.handleSystemGuildRoleSubscriptionPurchaseMessages;
    hasFlagResult = tmp16(tmp(5689).TableSwitchRow, obj5);
    const tmpResult8 = tmp(1384);
  }
  items[5] = hasFlagResult;
  if (hasFlagResult1) {
    const obj6 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl10 = tmp(1236).intl;
    obj6[0] = intl10.string(tmp(1236).t["IhF5d+"]);
    obj6[1] = !canManage;
    obj6[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, tmp17.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    obj6[3] = self.handleSystemGuildRoleSubscriptionPurchaseMessageReplies;
    hasFlagResult1 = tmp16(tmp(5689).TableSwitchRow, obj6);
    const tmpResult9 = tmp(1384);
  }
  items[6] = hasFlagResult1;
  if (result1) {
    const obj7 = { label: null, disabled: null, value: null, onValueChange: null };
    const intl11 = tmp(1236).intl;
    obj7[0] = intl11.string(tmp(1236).t.IMtHBW);
    obj7[1] = !canManage;
    obj7[2] = !tmp(1384).hasFlag(guild.systemChannelFlags, tmp17.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    obj7[3] = self.handleSystemVoiceSessionMessages;
    result1 = tmp16(tmp(5689).TableSwitchRow, obj7);
    const tmpResult10 = tmp(1384);
  }
  items[7] = result1;
  obj[3] = items;
  return tmp15(tmp(5688).TableRowGroup, obj);
};
prototype["renderDefaultNotificationSettings"] = function renderDefaultNotificationSettings() {
  let canManage;
  let guildMemberCount;
  const self = this;
  const props = this.props;
  ({ canManage, guildMemberCount } = props);
  let obj = { title: null, description: null, value: null, onChange: null, hasIcons: false, children: null };
  const intl = self(1236).intl;
  obj[0] = intl.string(self(1236).t["23TVhl"]);
  const intl2 = self(1236).intl;
  obj[1] = intl2.string(self(1236).t.PA2MZv);
  obj[2] = props.guild.defaultMessageNotifications;
  obj[3] = function onChange(defaultMessageNotifications) {
    return self.handleDefaultNotificationsChange(defaultMessageNotifications);
  };
  obj = { value: constants.ALL_MESSAGES, label: null, subLabel: null, disabled: null };
  const intl3 = self(1236).intl;
  obj[1] = intl3.string(self(1236).t["n/bTaY"]);
  let stringResult;
  if (null != guildMemberCount) {
    if (guildMemberCount >= closure_18) {
      const intl4 = tmp2(1236).intl;
      stringResult = intl4.string(tmp2(1236).t["L+P4t2"]);
    }
  }
  obj[2] = stringResult;
  obj[3] = !canManage;
  const items = [closure_19(self(7907).TableRadioRow, obj), ];
  obj = { value: constants.ONLY_MENTIONS, label: null, disabled: null };
  const intl5 = tmp2(1236).intl;
  obj[1] = intl5.format(self(1236).t.L2hmYy, {});
  obj[2] = !canManage;
  items[1] = closure_19(self(7907).TableRadioRow, obj);
  obj[5] = items;
  return closure_20(self(7908).TableRadioGroup, obj);
};
prototype["renderBoostProgressBar"] = function renderBoostProgressBar() {
  let canManage;
  let guild;
  ({ guild, canManage } = this.props);
  let obj = apexExperiment;
  let tmp3 = null;
  if (obj.getMobileBoostProgressBarEnabled("GuildSettingsModalOverview")) {
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t["0morVD"]);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t.O87mwg);
    obj = { label: null, disabled: null, value: null, onValueChange: null };
    const intl3 = tmp(1236).intl;
    obj[0] = intl3.string(tmp(1236).t.Dl4mJS);
    obj[1] = !canManage;
    obj[2] = guild.premiumProgressBarEnabled;
    obj[3] = this.handleBoostProgressBarToggle;
    obj[3] = callback2(tmp(5689).TableSwitchRow, obj);
    tmp3 = callback2(tmp(5688).TableRowGroup, obj);
  }
  return tmp3;
};
prototype["renderSplash"] = function renderSplash() {
  let canManage;
  let guild;
  ({ guild, canManage } = this.props);
  const features = guild.features;
  let tmp = null;
  if (features.has(constants2.INVITE_SPLASH)) {
    let obj = { title: null, description: null, helperText: null, hasIcons: false, hasTrailingText: null, children: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.tzGY0q);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.FEFkkG);
    const intl3 = getSystemLocale.intl;
    obj = { articleURL: null };
    obj[0] = combined.getArticleURL(constants3.GUILD_INVITE_SPLASH);
    obj[2] = intl3.format(getSystemLocale.t.ZYA9PV, obj);
    obj[4] = null != guild.splash && canManage;
    obj = { disabled: null, guild: null, rawSource: null, getSource: null, onChooseAsset: null, size: null };
    obj[0] = !canManage;
    obj[1] = guild;
    obj[2] = guild.splash;
    obj[3] = function getSource(id, size) {
      let obj = callback(table[36]);
      obj = { id: id.id, splash: id.splash, size };
      return obj.getGuildSplashSource(obj);
    };
    obj[4] = this.handleSplashChange;
    obj[5] = { width: 1920, height: 1080 };
    obj[5] = closure_19(getSource, obj);
    tmp = tmp2(TableRowGroupTitle.TableRowGroup, obj);
    const obj3 = combined;
    const tmp5 = importDefault;
  }
  return tmp;
};
prototype["renderSummaries"] = function renderSummaries() {
  const props = this.props;
  const guild = props.guild;
  let obj = canSeeChannelSummaries;
  if (obj.canGuildUseConversationSummaries(guild, false)) {
    const intl = tmp(1236).intl;
    obj = { helpdeskArticle: null };
    obj[0] = combined.getArticleURL(constants3.CONVERSATION_SUMMARIES);
    const obj3 = combined;
    obj = { title: null, description: null, hasIcons: false, children: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t.XPDhcc);
    obj[1] = intl.format(tmp(1236).t["c6Cy/h"], obj);
    const obj1 = { label: null, trailing: null, value: null, disabled: null, onValueChange: null };
    const intl3 = tmp(1236).intl;
    obj1[0] = intl3.string(tmp(1236).t.vmEDQs);
    obj1[1] = callback2(tmp(1297).BetaTag, {});
    const features = guild.features;
    obj1[2] = features.has(constants2.SUMMARIES_ENABLED_BY_USER);
    obj1[3] = !props.canManage;
    obj1[4] = this.handleSummariesToggle;
    obj[3] = callback2(tmp(5689).TableSwitchRow, obj1);
    return callback2(tmp(5688).TableRowGroup, obj);
  } else {
    return null;
  }
};
prototype["renderDescription"] = function renderDescription() {
  let canManage;
  let guild;
  ({ guild, canManage } = this.props);
  const obj = { label: null, description: null, maxLength: null, value: null, isDisabled: null, onChange: null, placeholder: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["RSfm+i"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["/B6PRw"]);
  obj[2] = MAX_TRAITS.MAX_DESCRIPTION_LENGTH;
  let str = guild.description;
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = !canManage;
  obj[5] = this.handleDescriptionChange;
  const intl3 = tmp2(1236).intl;
  obj[6] = intl3.string(getSystemLocale.t.Nvfowl);
  return closure_19(TextArea.TextArea, obj);
};
prototype["renderBanner"] = function renderBanner() {
  let canManage;
  let guild;
  ({ guild, canManage } = this.props);
  let features = guild.features;
  if (features.has(constants2.BANNER)) {
    let obj = { title: null, description: null, helperText: null, hasIcons: false, hasTrailingText: null, children: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["0r0AzF"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.UfqmIb);
    const intl3 = getSystemLocale.intl;
    obj = { articleURL: null };
    obj[0] = combined.getArticleURL(constants3.GUILD_BANNER_SPLASH);
    obj[2] = intl3.format(getSystemLocale.t.vBcWUv, obj);
    obj[4] = null != guild.banner && canManage;
    obj = { disabled: null, guild: null, rawSource: null, getSource: null, onChooseAsset: null, size: null };
    obj[0] = !canManage;
    obj[1] = guild;
    obj[2] = guild.banner;
    obj[3] = function getSource(features) {
      features = features.features;
      const hasItem = features.has(constants.ANIMATED_BANNER);
      return callback(table[36]).getGuildBannerSource(features, hasItem);
    };
    obj[4] = this.handleBannerChange;
    obj[5] = { width: 960, height: 540 };
    obj[5] = closure_19(getSource, obj);
    return closure_19(TableRowGroupTitle.TableRowGroup, obj);
  } else {
    return null;
  }
};
prototype["renderDeleteGuild"] = function renderDeleteGuild() {
  currentUser = currentUser.getCurrentUser();
  let tmp2 = null;
  if (null != currentUser) {
    tmp2 = null;
    if (callback(this.props.guild, currentUser)) {
      let obj = { hasIcons: false, children: null };
      obj = { variant: "danger", label: null, onPress: null };
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.l3hWP6);
      obj[2] = this.handleDeleteServer;
      obj[1] = callback2(TableRowInner.TableRow, obj);
      tmp2 = callback2(TableRowGroupTitle.TableRowGroup, obj);
    }
  }
  return tmp2;
};
prototype["render"] = function render() {
  const tmp = createCacheKey(this.context);
  let obj = { children: null };
  obj = { style: tmp.overview, contentContainerStyle: items, children: null };
  items = [tmp.overviewContent, this.props.contentContainerStyle];
  obj = { style: tmp.stackPadding, spacing: null, children: null };
  obj[1] = Themes.space.PX_24;
  const items1 = [this.renderGuildName(), this.renderSummaries(), this.renderAFKSettings(), this.renderSystemMessageSettings(), this.renderDefaultNotificationSettings(), this.renderBoostProgressBar(), this.renderDescription(), this.renderBanner(), this.renderSplash(), this.renderDeleteGuild()];
  obj[2] = items1;
  obj[2] = callback3(Stack.Stack, obj);
  const items2 = [callback2(Form.Form, obj), callback2(NavScrim.NavScrim, {})];
  obj[0] = items2;
  return callback3(closure_21, obj);
};
GuildSettingsModalOverview.contextType = require("ManaContext").ThemeContext;
let obj1 = {
  value: 60,
  label() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes: 1 });
  }
};
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOverview.tsx");

export default function ConnectedGuildSettingsModalOverview(contentContainerStyle) {
  let errors;
  let hasChanges;
  let submitting;
  let guild;
  let obj = guild(1480);
  const navigation = obj.useNavigation();
  const items = [handleFormInit];
  const stateFromStoresObject = guild(589).useStateFromStoresObject(items, () => ({ guild: store.getGuild(), submitting: store.isSubmitting(), hasChanges: store.hasChanges(), errors: store.getErrors() }), []);
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges, errors } = stateFromStoresObject);
  const obj2 = guild(589);
  const items1 = [getUncachedChannelPermissions];
  const items2 = [guild];
  const stateFromStores = guild(589).useStateFromStores(items1, () => outer1_8.can(outer1_14.MANAGE_GUILD, guild), items2);
  const obj3 = guild(589);
  const items3 = [ensureGuildLoaded];
  const stateFromStores1 = guild(589).useStateFromStores(items3, () => {
    let afkChannelId;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    return outer1_4.getChannel(afkChannelId);
  });
  const obj4 = guild(589);
  const items4 = [ensureGuildLoaded];
  const stateFromStores2 = guild(589).useStateFromStores(items4, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return outer1_4.getChannel(systemChannelId);
  });
  guild(589);
  [][0] = handleInviteData;
  let tmp8 = null;
  if (null != guild) {
    obj = { navigation: null, guild: null, submitting: null, hasChanges: null, canManage: null, afkChannel: null, systemChannel: null, guildMemberCount: null, errors: null, contentContainerStyle: null };
    obj[0] = navigation;
    obj[1] = guild;
    obj[2] = submitting;
    obj[3] = hasChanges;
    obj[4] = stateFromStores;
    obj[5] = stateFromStores1;
    obj[6] = stateFromStores2;
    obj[7] = tmp7;
    obj[8] = errors;
    obj[9] = contentContainerStyle.contentContainerStyle;
    tmp8 = callback2(GuildSettingsModalOverview, obj);
  }
  return tmp8;
};