// discord_app/modules/guild_settings/native/GuildSettingsModalOverview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl13 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import GuildRecord from "../../../records/GuildRecord.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import native2 from "../../../../discord_common/js/packages/design/native.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import AlertDefault from "../../../components_native/common/Alert.tsx";
import GuildProfileLimits from "../../../../discord_common/js/shared/shared-constants/GuildProfileLimits.tsx";
import TableRow3 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioRow3 from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup2 from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TextInput_TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import TextArea2 from "../../../design/components/TextInput/native/TextArea.native.tsx";
import showSimpleActionSheet from "../../action_sheet/native/showSimpleActionSheet.tsx";
import TableSwitchRow8 from "../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import HeaderActionButton2 from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import Form2 from "../../../design/void/Form/native/index.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import ChannelSummariesExperiment from "../../../experiments/ChannelSummariesExperiment.tsx";
import openChannelPickerDefault from "../../channel/native/openChannelPicker.tsx";
import AssetChooserDefault from "AssetChooser.tsx";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let contentContainerStyle, navigation, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
const _false = GuildRecord.isGuildOwnerWithRequiredMfaLevel;
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
({
  UserNotificationSettings: closure_12,
  ChannelTypes: map1,
  Permissions: closure_14,
  GuildFeatures: closure_15,
  GuildSettingsSections: closure_16,
  HelpdeskArticles: closure_17,
  SystemChannelFlags: closure_18,
  MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_19,
} = Constants);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
let obj = { overview: { flex: 1 }, overviewContent: { paddingTop: 16 }, stackPadding: obj2 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_23 = createStyles.createLegacyClassComponentStyles(obj);
let obj3 = {
  value: 60,
  label() {
    const intl = intl13.intl;
    return intl.formatToPlainString(intl13.t.iXLF9W, { minutes: 1 });
  },
};
let items = [
  obj3,
  {
    value: 300,
    label() {
      const intl = intl13.intl;
      return intl.formatToPlainString(intl13.t.iXLF9W, { minutes: 5 });
    },
  },
  {
    value: 900,
    label() {
      const intl = intl13.intl;
      return intl.formatToPlainString(intl13.t.iXLF9W, { minutes: 15 });
    },
  },
  {
    value: 1800,
    label() {
      const intl = intl13.intl;
      return intl.formatToPlainString(intl13.t.iXLF9W, { minutes: 30 });
    },
  },
  {
    value: 3600,
    label() {
      const intl = intl13.intl;
      return intl.formatToPlainString(intl13.t.xCjYxK, { hours: 1 });
    },
  },
];
let closure_24 = Object.freeze(items);
const PureComponent = react.PureComponent;
class GuildSettingsModalOverview extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { name };
      obj.updateGuild(obj2);
    };
    applyArgumentsResult.handleDescriptionChange = function handleDescriptionChange(description) {
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { description };
      obj.updateGuild(obj2);
    };
    applyArgumentsResult.handleAfkChannelChange = function handleAfkChannelChange() {
      let afkChannel;
      let intl;
      const obj = {
        guildId: require.props.guild.id,
        channelType: metroRequire,
        noChannelOptionLabel: intl.string(intl13.t.wGiHkK),
        onSelect(id) {
          id = undefined;
          const updateGuild = closure_1_1(closure_1_2[18]).updateGuild;
          closure_1_1(closure_1_2[18]);
          if (id != null) {
            id = id.id;
          }
          updateGuild({ afkChannelId: id });
        },
        filterFn(channel) {
          return channel.channel.type === constants.GUILD_VOICE;
        },
        selectedChannel: afkChannel,
      };
      const tmp = openChannelPickerDefault;
      intl = intl13.intl;
      afkChannel = require.props.afkChannel;
      if (afkChannel == null) {
        afkChannel = null;
      }
      tmp(obj);
    };
    applyArgumentsResult.handleSystemChannelChange = function handleSystemChannelChange() {
      let intl;
      const props = require.props;
      const guild = props.guild;
      let systemChannel = props.systemChannel;
      let obj = {
        guildId: guild.id,
        channelType: hasOwnProperty,
        filterFn(channel) {
          return channel.channel.type === constants.GUILD_TEXT;
        },
        noChannelOptionLabel: intl.string(intl13.t.ibUhoa),
        onSelect(id) {
          id = undefined;
          const updateGuild = closure_2_1(closure_2_2[18]).updateGuild;
          closure_2_1(closure_2_2[18]);
          if (id != null) {
            id = id.id;
          }
          updateGuild({ systemChannelId: id });
          if (((null != systemChannel) !== null) != id) {
            const obj = closure_2_0(closure_2_2[20]);
            const result = obj.trackServerHubToggleSetting(
              guild.id,
              closure_2_0(closure_2_2[20]).ServerHubSettingType.ALL_SYSTEM_MESSAGES,
              tmp,
            );
          }
        },
        selectedChannel: systemChannel,
      };
      const tmp2 = openChannelPickerDefault;
      intl = intl13.intl;
      if (systemChannel == null) {
        systemChannel = null;
      }
      tmp2(obj);
    };
    applyArgumentsResult.handleSystemJoinMessages = function handleSystemJoinMessages(arg0) {
      const result = require.handleSystemChannelFlagsChange(constants3.SUPPRESS_JOIN_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemJoinMessageReplies = function handleSystemJoinMessageReplies(arg0) {
      const result = require.handleSystemChannelFlagsChange(constants3.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !arg0);
    };
    applyArgumentsResult.handleSystemPremiumSubscribe = function handleSystemPremiumSubscribe(arg0) {
      const result = require.handleSystemChannelFlagsChange(constants3.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !arg0);
    };
    applyArgumentsResult.handleSystemReminderNotifications = function handleSystemReminderNotifications(arg0) {
      const result = require.handleSystemChannelFlagsChange(constants3.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessages =
      function handleSystemGuildRoleSubscriptionPurchaseMessages(arg0) {
        const result = require.handleSystemChannelFlagsChange(
          constants3.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS,
          !arg0,
        );
      };
    applyArgumentsResult.handleSystemGuildRoleSubscriptionPurchaseMessageReplies =
      function handleSystemGuildRoleSubscriptionPurchaseMessageReplies(arg0) {
        const result = require.handleSystemChannelFlagsChange(
          constants3.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
          !arg0,
        );
      };
    applyArgumentsResult.handleSystemVoiceSessionMessages = function handleSystemVoiceSessionMessages(arg0) {
      const result = require.handleSystemChannelFlagsChange(constants3.SUPPRESS_VOICE_SESSION_NOTIFICATIONS, !arg0);
    };
    applyArgumentsResult.handleGuildSpaceSettingsPress = function handleGuildSpaceSettingsPress() {
      navigation = require.props.navigation;
      navigation.push(constants2.GUILD_SPACE);
    };
    applyArgumentsResult.handleAFKTimeoutChange = function handleAFKTimeoutChange() {
      let obj = showSimpleActionSheet;
      let obj2 = {
        key: "AFKTimeout",
        options: closure_1_24.map((label) => {
          let obj = {
            label: label.label(),
            onPress() {
              const obj = closure_2_1(closure_2_2[18]);
              const obj2 = { afkTimeout: label.value };
              obj.updateGuild(obj2);
            },
          };
          return obj;
        }),
        hasIcons: false,
      };
      const result = obj.showSimpleActionSheet(obj2);
    };
    applyArgumentsResult.handleDeleteServer = function handleDeleteServer() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      const obj = {
        title: intl.string(intl13.t.l3hWP6),
        body: intl2.format(intl13.t["Zuo+Vd"], obj2),
        cancelText: intl3.string(intl13.t.gm1Vej),
        confirmText: intl4.string(intl13.t.p89ACt),
        onConfirm: require.handleConfirmDeleteServer,
        confirmColor: AlertDefault.Colors.RED,
      };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl13.intl;
      intl2 = intl13.intl;
      obj2 = { name: require.props.guild.name };
      intl3 = intl13.intl;
      intl4 = intl13.intl;
      show(obj);
    };
    applyArgumentsResult.handleConfirmDeleteServer = function handleConfirmDeleteServer() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.deleteGuild(require.props.guild.id);
    };
    applyArgumentsResult.handleSplashChange = function handleSplashChange(splash) {
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { splash };
      obj.updateGuild(obj2);
    };
    applyArgumentsResult.handleSummariesToggle = function handleSummariesToggle(arg0) {
      set = new Set(require.props.guild.features);
      const tmp = arg0;
      if (tmp) {
        set.add(constants.SUMMARIES_ENABLED_BY_USER);
      } else {
        set.delete(constants.SUMMARIES_ENABLED_BY_USER);
      }
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.updateGuild({ features: set });
    };
    applyArgumentsResult.handleBannerChange = function handleBannerChange(banner) {
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { banner };
      obj.updateGuild(obj2);
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
      } = require.props.guild);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.saveGuild(id, {
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
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { premiumProgressBarEnabled };
      obj.updateGuild(obj2);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigator();
  }
  componentDidUpdate(errors) {
    errors = this.props.errors;
    this.updateNavigator(errors);
    const tmp2 = errors.errors.message !== errors.message && null != errors.message;
    if (tmp2) {
      const obj = ToastUtils;
      obj.presentError(errors.message);
    }
  }
  updateNavigator(submitting) {
    let fn;
    let fn2;
    let hasChanges;
    let intl;
    const self = this;
    ({ navigation, submitting, hasChanges } = this.props);
    const tmp = null != submitting && submitting === submitting.submitting && hasChanges === submitting.hasChanges;
    if (!tmp) {
      let obj = { title: intl.string(self(1126).t["/dp6yY"]), headerLeft: fn, headerRight: fn2 };
      const setOptions = navigation.setOptions;
      intl = self(1126).intl;
      fn = undefined;
      if (submitting) {
        fn = () => null;
      }
      if (submitting) {
        fn2 = () => closure_1_20(self(dependencyMap[16]).HeaderSubmittingIndicator, {});
      } else if (hasChanges) {
        fn2 = () => {
          let intl;
          const obj = { onPress: self.handleOverviewSaveChanges, text: intl.string(intl13.t["R3BPH+"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl13.intl;
          return closure_20(HeaderActionButton, obj);
        };
      }
      setOptions(obj);
    }
  }
  componentWillUnmount() {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.cancelChanges(this.props.guild.id);
  }
  getError(arg0) {
    const errors = this.props.errors;
    let first;
    if (errors != null) {
      if (errors[arg0] != null) {
        first = tmp3[0];
      }
    }
    return first;
  }
  handleSystemChannelFlagsChange(SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, setting) {
    const guild = this.props.guild;
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(guild.systemChannelFlags, SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, setting);
    const obj2 = GuildSettingsActionCreatorsDefault;
    obj2.updateGuild({ systemChannelFlags: setFlagResult });
  }
  handleDefaultNotificationsChange(defaultMessageNotifications) {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { defaultMessageNotifications };
    obj.updateGuild(obj2);
  }
  renderGuildName() {
    let canManage;
    let guild;
    let intl;
    ({ guild, canManage } = this.props);
    const obj = {
      label: intl.string(intl13.t.dBih7e),
      value: guild.name,
      disabled: !canManage,
      onChange: this.handleNameChange,
      errorMessage: this.getError("name"),
    };
    const TextInput = TextInput_TextInput.TextInput;
    intl = intl13.intl;
    return closure_20(TextInput, obj);
  }
  renderAFKSettings() {
    let afkChannel;
    let canManage;
    let channelName;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let labelResult;
    let tmp15;
    let tmp4;
    const self = this;
    const props = this.props;
    const guild = props.guild;
    ({ canManage, afkChannel } = props);
    if (null != afkChannel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(afkChannel, UserStore, RelationshipStore);
      tmp4 = require;
    } else {
      const intl = intl13.intl;
      channelName = intl.string(intl13.t.wGiHkK);
      tmp4 = require;
    }
    let found = null;
    if (null != guild.afkChannelId) {
      found = closure_24.find((value) => value.value === guild.afkTimeout);
    }
    if (null != found) {
      labelResult = found.label();
    } else {
      const obj2 = closure_24[1];
      labelResult = obj2.label();
    }
    const obj3 = {
      title: intl2.string(tmp4(1126).t.qyGmGt),
      description: intl3.string(tmp4(1126).t.ffEOKP),
      hasIcons: false,
      children: items,
    };
    const TableRowGroup = tmp4(6081).TableRowGroup;
    intl2 = tmp4(1126).intl;
    intl3 = tmp4(1126).intl;
    const obj4 = {
      label: intl4.string(tmp4(1126).t.KuYcnU),
      disabled: !canManage,
      trailing: closure_20(tmp4(6000).TableRow.TrailingText, { text: channelName }),
      arrow: true,
      onPress: self.handleAfkChannelChange,
    };
    const TableRow = tmp4(6000).TableRow;
    intl4 = tmp4(1126).intl;
    items = [closure_20(TableRow, obj4)];
    const obj5 = {
      label: intl5.string(tmp4(1126).t.brhYaR),
      disabled: tmp15,
      trailing: closure_20(tmp4(6000).TableRow.TrailingText, { text: labelResult }),
      arrow: true,
      onPress: self.handleAFKTimeoutChange,
    };
    const TableRow2 = tmp4(6000).TableRow;
    intl5 = tmp4(1126).intl;
    tmp15 = !canManage;
    if (canManage) {
      tmp15 = null == guild.afkChannelId;
    }
    items[1] = closure_20(TableRow2, obj5);
    return closure_21(TableRowGroup, obj3);
  }
  renderSystemMessageSettings() {
    let canManage;
    let channelName;
    let guild;
    let intl10;
    let intl11;
    let intl12;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items;
    let systemChannel;
    let tmp;
    let tmpResult18;
    let tmpResult19;
    let tmpResult20;
    let tmpResult21;
    let tmpResult22;
    let tmpResult23;
    let tmpResult24;
    const self = this;
    ({ guild, canManage, systemChannel } = this.props);
    if (null != systemChannel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(systemChannel, UserStore, RelationshipStore);
      tmp = require;
    } else {
      tmp = require;
      const intl = intl13.intl;
      channelName = intl.string(intl13.t.ibUhoa);
    }
    const tmpResult = tmp(7662);
    const result = tmpResult.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild);
    let hasFlagResult = result;
    if (!hasFlagResult) {
      const tmpResult13 = tmp(1390);
      hasFlagResult = tmpResult13.hasFlag(
        guild.systemChannelFlags,
        constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS,
      );
    }
    let hasFlagResult1 = result;
    if (!hasFlagResult1) {
      const tmpResult14 = tmp(1390);
      hasFlagResult1 = tmpResult14.hasFlag(
        guild.systemChannelFlags,
        constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
      );
    }
    const tmpResult15 = tmp(17507);
    let result1 = tmpResult15.isPastVcActivityMessagesEnabled(guild.id, "GuildSettingsModalOverview");
    if (!result1) {
      const tmpResult16 = tmp(1390);
      result1 = tmpResult16.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_VOICE_SESSION_NOTIFICATIONS);
    }
    const tmpResult17 = tmp(6740);
    let guildSpaceExperimentEnabled = tmpResult17.getGuildSpaceExperimentEnabled(
      guild.id,
      "GuildSettingsModalOverview",
    );
    const obj2 = {
      title: intl2.string(tmp(1126).t.DP39VH),
      description: intl3.string(tmp(1126).t.BT9zR3),
      hasIcons: false,
      children: items,
    };
    const TableRowGroup = tmp(6081).TableRowGroup;
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    const obj3 = {
      label: intl4.string(tmp(1126).t.GK18KJ),
      disabled: !canManage,
      trailing: closure_20(tmp(6000).TableRow.TrailingText, { text: channelName }),
      arrow: true,
      onPress: self.handleSystemChannelChange,
    };
    const TableRow = tmp(6000).TableRow;
    intl4 = tmp(1126).intl;
    items = [closure_20(TableRow, obj3), , , , , , , ,];
    const obj4 = {
      label: intl5.string(tmp(1126).t["+f0bXQ"]),
      disabled: !canManage,
      value: !tmpResult18.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_JOIN_NOTIFICATIONS),
      onValueChange: self.handleSystemJoinMessages,
    };
    const TableSwitchRow = tmp(6705).TableSwitchRow;
    intl5 = tmp(1126).intl;
    tmpResult18 = tmp(1390);
    items[1] = closure_20(TableSwitchRow, obj4);
    const obj5 = {
      label: intl6.string(tmp(1126).t["72k7jf"]),
      disabled: !canManage,
      value: !tmpResult19.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      onValueChange: self.handleSystemJoinMessageReplies,
    };
    const TableSwitchRow2 = tmp(6705).TableSwitchRow;
    intl6 = tmp(1126).intl;
    tmpResult19 = tmp(1390);
    items[2] = closure_20(TableSwitchRow2, obj5);
    const obj6 = {
      label: intl7.string(tmp(1126).t["2L8NCN"]),
      disabled: !canManage,
      value: !tmpResult20.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      onValueChange: self.handleSystemPremiumSubscribe,
    };
    const TableSwitchRow3 = tmp(6705).TableSwitchRow;
    intl7 = tmp(1126).intl;
    tmpResult20 = tmp(1390);
    items[3] = closure_20(TableSwitchRow3, obj6);
    const obj7 = {
      label: intl8.string(tmp(1126).t["NvnW+V"]),
      disabled: !canManage,
      value: !tmpResult21.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      onValueChange: self.handleSystemReminderNotifications,
    };
    const TableSwitchRow4 = tmp(6705).TableSwitchRow;
    intl8 = tmp(1126).intl;
    tmpResult21 = tmp(1390);
    items[4] = closure_20(TableSwitchRow4, obj7);
    if (hasFlagResult) {
      const obj8 = {
        label: intl9.string(tmp(1126).t["54n19R"]),
        disabled: !canManage,
        value: !tmpResult22.hasFlag(
          guild.systemChannelFlags,
          constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS,
        ),
        onValueChange: self.handleSystemGuildRoleSubscriptionPurchaseMessages,
      };
      const TableSwitchRow5 = tmp(6705).TableSwitchRow;
      intl9 = tmp(1126).intl;
      tmpResult22 = tmp(1390);
      hasFlagResult = closure_20(TableSwitchRow5, obj8);
    }
    items[5] = hasFlagResult;
    if (hasFlagResult1) {
      const obj9 = {
        label: intl10.string(tmp(1126).t["IhF5d+"]),
        disabled: !canManage,
        value: !tmpResult23.hasFlag(
          guild.systemChannelFlags,
          constants6.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES,
        ),
        onValueChange: self.handleSystemGuildRoleSubscriptionPurchaseMessageReplies,
      };
      const TableSwitchRow6 = tmp(6705).TableSwitchRow;
      intl10 = tmp(1126).intl;
      tmpResult23 = tmp(1390);
      hasFlagResult1 = closure_20(TableSwitchRow6, obj9);
    }
    items[6] = hasFlagResult1;
    if (result1) {
      const obj10 = {
        label: intl11.string(tmp(1126).t.IMtHBW),
        disabled: !canManage,
        value: !tmpResult24.hasFlag(guild.systemChannelFlags, constants6.SUPPRESS_VOICE_SESSION_NOTIFICATIONS),
        onValueChange: self.handleSystemVoiceSessionMessages,
      };
      const TableSwitchRow7 = tmp(6705).TableSwitchRow;
      intl11 = tmp(1126).intl;
      tmpResult24 = tmp(1390);
      result1 = closure_20(TableSwitchRow7, obj10);
    }
    items[7] = result1;
    if (guildSpaceExperimentEnabled) {
      const obj11 = {
        label: intl12.string(tmp(1126).t.OBskVU),
        arrow: true,
        onPress: self.handleGuildSpaceSettingsPress,
      };
      const TableRow2 = tmp(6000).TableRow;
      intl12 = tmp(1126).intl;
      guildSpaceExperimentEnabled = closure_20(TableRow2, obj11);
    }
    items[8] = guildSpaceExperimentEnabled;
    return closure_21(TableRowGroup, obj2);
  }
  renderDefaultNotificationSettings() {
    let canManage;
    let guildMemberCount;
    let intl;
    let intl2;
    let intl3;
    let intl5;
    let items;
    let stringResult;
    const self = this;
    const props = this.props;
    ({ canManage, guildMemberCount } = props);
    const guild = props.guild;
    const obj = {
      title: intl.string(intl13.t["23TVhl"]),
      description: intl2.string(intl13.t.PA2MZv),
      value: guild.defaultMessageNotifications,
      onChange(defaultMessageNotifications) {
        return self.handleDefaultNotificationsChange(defaultMessageNotifications);
      },
      hasIcons: false,
      children: items,
    };
    const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
    intl = intl13.intl;
    intl2 = intl13.intl;
    const obj2 = {
      value: constants.ALL_MESSAGES,
      label: intl3.string(intl13.t["n/bTaY"]),
      subLabel: stringResult,
      disabled: !canManage,
    };
    const TableRadioRow = TableRadioRow3.TableRadioRow;
    intl3 = intl13.intl;
    stringResult = undefined;
    if (null != guildMemberCount) {
      if (guildMemberCount >= closure_19) {
        const intl4 = intl13.intl;
        stringResult = intl4.string(intl13.t["L+P4t2"]);
      }
    }
    items = [closure_20(TableRadioRow, obj2)];
    const obj3 = { value: constants.ONLY_MENTIONS, label: intl5.format(intl13.t.L2hmYy, {}), disabled: !canManage };
    const TableRadioRow2 = TableRadioRow3.TableRadioRow;
    intl5 = intl13.intl;
    items[1] = closure_20(TableRadioRow2, obj3);
    return closure_21(TableRadioGroup, obj);
  }
  renderBoostProgressBar() {
    let TableSwitchRow;
    let canManage;
    let guild;
    let intl;
    let intl2;
    let intl3;
    let obj2;
    ({ guild, canManage } = this.props);
    const obj = {
      title: intl.string(intl13.t["0morVD"]),
      description: intl2.string(intl13.t.O87mwg),
      hasIcons: false,
      children: closure_20(TableSwitchRow, obj2),
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl = intl13.intl;
    intl2 = intl13.intl;
    obj2 = {
      label: intl3.string(intl13.t.Dl4mJS),
      disabled: !canManage,
      value: guild.premiumProgressBarEnabled,
      onValueChange: this.handleBoostProgressBarToggle,
    };
    TableSwitchRow = TableSwitchRow8.TableSwitchRow;
    intl3 = intl13.intl;
    return closure_20(TableRowGroup, obj);
  }
  renderSplash() {
    let ZYA9PV;
    let canManage;
    let format;
    let guild;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let obj4;
    ({ guild, canManage } = this.props);
    const features = guild.features;
    let tmp = null;
    if (features.has(constants3.INVITE_SPLASH)) {
      let obj = {
        title: intl.string(intl13.t.tzGY0q),
        description: intl2.string(intl13.t.FEFkkG),
        helperText: format(ZYA9PV, obj2),
        hasIcons: false,
        hasTrailingText: null != guild.splash && canManage,
        children: closure_20(AssetChooserDefault, obj4),
      };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      intl = intl13.intl;
      intl2 = intl13.intl;
      const intl3 = intl13.intl;
      format = intl3.format;
      obj2 = { articleURL: obj3.getArticleURL(constants5.GUILD_INVITE_SPLASH) };
      ZYA9PV = intl13.t.ZYA9PV;
      obj3 = HelpdeskUtilsDefault;
      obj4 = {
        disabled: !canManage,
        guild,
        rawSource: guild.splash,
        getSource(id, size) {
          const obj = AvatarUtilsDefault;
          const obj2 = { id: id.id, splash: id.splash, size };
          return obj.getGuildSplashSource(obj2);
        },
        onChooseAsset: this.handleSplashChange,
        size: { width: 1920, height: 1080 },
      };
      tmp = closure_20(TableRowGroup, obj);
    }
    return tmp;
  }
  renderSummaries() {
    let TableSwitchRow;
    let features;
    let formatResult;
    let intl2;
    let intl3;
    let obj3;
    let obj5;
    const props = this.props;
    const guild = props.guild;
    const canManage = props.canManage;
    const obj = ChannelSummariesExperiment;
    if (obj.canGuildUseConversationSummaries(guild, false)) {
      const intl = intl13.intl;
      const format = intl.format;
      const obj2 = { helpdeskArticle: obj3.getArticleURL(constants5.CONVERSATION_SUMMARIES) };
      const prop = intl13.t["c6Cy/h"];
      obj3 = HelpdeskUtilsDefault;
      const obj4 = {
        title: intl2.string(intl13.t.XPDhcc),
        description: formatResult,
        hasIcons: false,
        children: closure_20(TableSwitchRow, obj5),
      };
      formatResult = format(prop, obj2);
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      intl2 = intl13.intl;
      obj5 = {
        label: intl3.string(intl13.t.vmEDQs),
        trailing: closure_20(native.BetaTag, {}),
        value: features.has(constants3.SUMMARIES_ENABLED_BY_USER),
        disabled: !canManage,
        onValueChange: this.handleSummariesToggle,
      };
      TableSwitchRow = TableSwitchRow8.TableSwitchRow;
      intl3 = intl13.intl;
      features = guild.features;
      return closure_20(TableRowGroup, obj4);
    } else {
      return null;
    }
  }
  renderDescription() {
    let canManage;
    let guild;
    let intl;
    let intl2;
    let intl3;
    let str;
    ({ guild, canManage } = this.props);
    const obj = {
      label: intl.string(intl13.t["RSfm+i"]),
      description: intl2.string(intl13.t["/B6PRw"]),
      maxLength: GuildProfileLimits.MAX_DESCRIPTION_LENGTH,
      value: str,
      disabled: !canManage,
      onChange: this.handleDescriptionChange,
      placeholder: intl3.string(intl13.t.Nvfowl),
    };
    const TextArea = TextArea2.TextArea;
    intl = intl13.intl;
    intl2 = intl13.intl;
    str = guild.description;
    if (str == null) {
      str = "";
    }
    intl3 = intl13.intl;
    return closure_20(TextArea, obj);
  }
  renderBanner() {
    let canManage;
    let format;
    let guild;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let obj4;
    let vBcWUv;
    ({ guild, canManage } = this.props);
    let features = guild.features;
    if (features.has(constants3.BANNER)) {
      let obj = {
        title: intl.string(intl13.t["0r0AzF"]),
        description: intl2.string(intl13.t.UfqmIb),
        helperText: format(vBcWUv, obj2),
        hasIcons: false,
        hasTrailingText: null != guild.banner && canManage,
        children: closure_20(AssetChooserDefault, obj4),
      };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      intl = intl13.intl;
      intl2 = intl13.intl;
      const intl3 = intl13.intl;
      format = intl3.format;
      obj2 = { articleURL: obj3.getArticleURL(constants5.GUILD_BANNER_SPLASH) };
      vBcWUv = intl13.t.vBcWUv;
      obj3 = HelpdeskUtilsDefault;
      obj4 = {
        disabled: !canManage,
        guild,
        rawSource: guild.banner,
        getSource(features) {
          features = features.features;
          const hasItem = features.has(constants.ANIMATED_BANNER);
          const obj = AvatarUtilsDefault;
          return obj.getGuildBannerSource(features, hasItem);
        },
        onChooseAsset: this.handleBannerChange,
        size: { width: 960, height: 540 },
      };
      return closure_20(TableRowGroup, obj);
    } else {
      return null;
    }
  }
  renderDeleteGuild() {
    let TableRow;
    let intl;
    let obj2;
    const guild = this.props.guild;
    const currentUser = UserStore.getCurrentUser();
    let tmp2 = null;
    if (null != currentUser) {
      tmp2 = null;
      if (closure_3(guild, currentUser)) {
        const obj = { hasIcons: false, children: closure_20(TableRow, obj2) };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        obj2 = { variant: "danger", label: intl.string(intl13.t.l3hWP6), onPress: this.handleDeleteServer };
        TableRow = TableRow3.TableRow;
        intl = intl13.intl;
        tmp2 = closure_20(TableRowGroup, obj);
      }
    }
    return tmp2;
  }
  render() {
    let Stack;
    let items;
    let items1;
    let items2;
    let obj3;
    const tmp = closure_23(this.context);
    const obj = { children: items2 };
    const obj2 = { style: tmp.overview, contentContainerStyle: items, children: closure_21(Stack, obj3) };
    items = [tmp.overviewContent, this.props.contentContainerStyle];
    const Form = Form2.Form;
    obj3 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: items1 };
    Stack = Stack_Stack.Stack;
    items1 = [
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
    items2 = [closure_20(Form, obj2), closure_20(NavScrim.NavScrim, {})];
    return closure_21(afk, obj);
  }
}
const prototype = GuildSettingsModalOverview.prototype;
GuildSettingsModalOverview.contextType = native2.ThemeContext;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (contentContainerStyle) => {
      let errors;
      let guild;
      let hasChanges;
      let submitting;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp19;
      let tmp22;
      let tmp26;
      let tmp29;
      let tmp33;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = guild(576);
      const cResult = obj.c(27);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const obj2 = guild(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsStore];
        const fn = function l() {
          const obj = {
            guild: GuildSettingsStore.getGuild(),
            submitting: GuildSettingsStore.isSubmitting(),
            hasChanges: GuildSettingsStore.hasChanges(),
            errors: GuildSettingsStore.getErrors(),
          };
          return obj;
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp5 = items;
        tmp6 = fn;
        tmp7 = items1;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      const tmpResult = guild(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6, tmp7);
      ({ submitting, hasChanges, errors, guild } = stateFromStoresObject);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        cResult[3] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guild) {
        const fn2 = function b() {
          return PermissionStore.can(constants.MANAGE_GUILD, guild);
        };
        const items3 = [guild];
        cResult[4] = guild;
        cResult[5] = fn2;
        cResult[6] = items3;
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult5 = guild(504);
      const stateFromStores = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ChannelStore];
        cResult[7] = items4;
        tmp15 = items4;
      } else {
        tmp15 = cResult[7];
      }
      let afkChannelId;
      const tmp17 = cResult[8];
      if (guild != null) {
        afkChannelId = guild.afkChannelId;
      }
      if (tmp17 !== afkChannelId) {
        let afkChannelId1;
        if (guild != null) {
          afkChannelId1 = guild.afkChannelId;
        }
        class O {
          constructor() {
            let afkChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            return getChannel(afkChannelId);
          }
        }
        cResult[8] = afkChannelId1;
        cResult[9] = O;
        tmp19 = O;
      } else {
        tmp19 = cResult[9];
      }
      const tmpResult6 = guild(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp15, tmp19);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [];
        class O {
          constructor() {
            let afkChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              afkChannelId = guild.afkChannelId;
            }
            return getChannel(afkChannelId);
          }
        }
        cResult[10] = items5;
        tmp22 = items5;
      } else {
        tmp22 = cResult[10];
      }
      let systemChannelId;
      const tmp24 = cResult[11];
      if (guild != null) {
        systemChannelId = guild.systemChannelId;
      }
      if (tmp24 !== systemChannelId) {
        let systemChannelId1;
        if (guild != null) {
          systemChannelId1 = guild.systemChannelId;
        }
        class M {
          constructor() {
            let systemChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              systemChannelId = guild.systemChannelId;
            }
            return getChannel(systemChannelId);
          }
        }
        cResult[11] = systemChannelId1;
        cResult[12] = M;
        tmp26 = M;
      } else {
        tmp26 = cResult[12];
      }
      const tmpResult7 = guild(504);
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp22, tmp26);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [];
        class M {
          constructor() {
            let systemChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              systemChannelId = guild.systemChannelId;
            }
            return getChannel(systemChannelId);
          }
        }
        cResult[13] = items6;
        tmp29 = items6;
      } else {
        tmp29 = cResult[13];
      }
      let id;
      const tmp31 = cResult[14];
      if (guild != null) {
        id = guild.id;
      }
      if (tmp31 !== id) {
        let id1;
        if (guild != null) {
          id1 = guild.id;
        }
        class M {
          constructor() {
            let systemChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              systemChannelId = guild.systemChannelId;
            }
            return getChannel(systemChannelId);
          }
        }
        cResult[14] = id1;
        cResult[15] = tmp35;
        tmp33 = tmp35;
      } else {
        tmp33 = cResult[15];
      }
      const tmpResult8 = guild(504);
      const stateFromStores3 = tmpResult8.useStateFromStores(tmp29, tmp33);
      if (cResult[16] === stateFromStores1) {
        if (cResult[17] === stateFromStores) {
          if (cResult[18] === contentContainerStyle) {
            if (cResult[19] === errors) {
              if (cResult[20] === guild) {
                if (cResult[21] === stateFromStores3) {
                  if (cResult[22] === hasChanges) {
                    if (cResult[23] === navigation) {
                      if (cResult[24] === submitting) {
                        let tmp37;
                        if (cResult[25] === stateFromStores2) {
                          tmp37 = cResult[26];
                        }
                        return tmp37;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp38 = null;
      if (null != guild) {
        class M {
          constructor() {
            let systemChannelId;
            const getChannel = ChannelStore.getChannel;
            if (guild != null) {
              systemChannelId = guild.systemChannelId;
            }
            return getChannel(systemChannelId);
          }
        }
        tmp41[0] = navigation;
        tmp41[1] = guild;
        tmp41[2] = submitting;
        tmp41[3] = hasChanges;
        tmp41[4] = stateFromStores;
        tmp41[5] = stateFromStores1;
        tmp41[6] = stateFromStores2;
        tmp41[7] = stateFromStores3;
        tmp41[8] = errors;
        tmp41[9] = contentContainerStyle;
        tmp38 = closure_20(GuildSettingsModalOverview, tmp41);
      }
      cResult[16] = stateFromStores1;
      cResult[17] = stateFromStores;
      cResult[18] = contentContainerStyle;
      cResult[19] = errors;
      cResult[20] = guild;
      cResult[21] = stateFromStores3;
      cResult[22] = hasChanges;
      cResult[23] = navigation;
      cResult[24] = submitting;
      cResult[25] = stateFromStores2;
      cResult[26] = tmp38;
      tmp37 = tmp38;
    }
  : (contentContainerStyle) => {
      let errors;
      let hasChanges;
      let submitting;
      let guild;
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      let obj = guild(1490);
      navigation = obj.useNavigation();
      const items = [GuildSettingsStore];
      const obj2 = guild(504);
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        const obj = {
          guild: GuildSettingsStore.getGuild(),
          submitting: GuildSettingsStore.isSubmitting(),
          hasChanges: GuildSettingsStore.hasChanges(),
          errors: GuildSettingsStore.getErrors(),
        };
        return obj;
      }, []);
      guild = stateFromStoresObject.guild;
      ({ submitting, hasChanges, errors } = stateFromStoresObject);
      const items1 = [PermissionStore];
      const items2 = [guild];
      const obj3 = guild(504);
      const stateFromStores = obj3.useStateFromStores(
        items1,
        () => PermissionStore.can(constants.MANAGE_GUILD, guild),
        items2,
      );
      const items3 = [ChannelStore];
      const obj4 = guild(504);
      const stateFromStores1 = obj4.useStateFromStores(items3, () => {
        let afkChannelId;
        const getChannel = ChannelStore.getChannel;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        return getChannel(afkChannelId);
      });
      const items4 = [ChannelStore];
      const obj5 = guild(504);
      const stateFromStores2 = obj5.useStateFromStores(items4, () => {
        let systemChannelId;
        const getChannel = ChannelStore.getChannel;
        if (guild != null) {
          systemChannelId = guild.systemChannelId;
        }
        return getChannel(systemChannelId);
      });
      guild(504);
      [][0] = GuildMemberCountStore;
      let tmp8 = null;
      if (null != guild) {
        const obj6 = {
          navigation,
          guild,
          submitting,
          hasChanges,
          canManage: stateFromStores,
          afkChannel: stateFromStores1,
          systemChannel: stateFromStores2,
          guildMemberCount: tmp7,
          errors,
          contentContainerStyle,
        };
        tmp8 = closure_20(GuildSettingsModalOverview, obj6);
      }
      return tmp8;
    };
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOverview.tsx");

export default tmp6;
