// === Module 17987: NotificationSettingsModal ===

// Module 17987 (NotificationSettingsModal)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import MuteTimers from "MuteTimers" /* 4512 */;
import native2 from "native" /* 4589 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelName from "useChannelName" /* 5043 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5074 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowIcon2 from "TableRowIcon" /* 5999 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import TableRadioRow4 from "TableRadioRow" /* 6071 */;
import TableRadioGroup2 from "TableRadioGroup" /* 6072 */;
import TableRowGroup3 from "TableRowGroup" /* 6074 */;
import Navigator2 from "Navigator" /* 6496 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6607 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import TableSwitchRow6 from "TableSwitchRow" /* 6698 */;
import Form2 from "Form" /* 8895 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9849 */;
import PlusMediumIcon from "PlusMediumIcon" /* 10978 */;
import MutedUntilTextDefault from "MutedUntilText" /* 11066 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 12496 */;
import NotificationSettingsMuteBanner2 from "NotificationSettingsMuteBanner" /* 12498 */;
import NotificationSettingsPresets from "NotificationSettingsPresets" /* 12499 */;
import NotificationSettingsMessageNotification from "NotificationSettingsMessageNotification" /* 12503 */;
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread" /* 12510 */;
import NotificationSettingChannelOverridesDefault from "NotificationSettingChannelOverrides" /* 17988 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import GuildStore from "GuildStore" /* 2074 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17645 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let obj2;
let obj3;
let obj4;
function getScreens() {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj5;
  let obj7;
  let obj = {};
  const OVERVIEW = constants4.OVERVIEW;
  const obj2 = {
    headerLeft: obj3.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close),
    title: intl.string(intl8.t.h850Ss),
    render(guildId) {
      const obj = { guildId: guildId.guildId };
      return closure_1_27(closure_1_32, obj);
    }
  };
  obj3 = NavigatorHeader;
  intl = intl8.intl;
  obj[OVERVIEW] = obj2;
  const ADD_OVERRIDE = constants4.ADD_OVERRIDE;
  const obj4 = {
    title: intl2.string(intl8.t.s7vIQT),
    headerLeft: obj5.getHeaderBackButton(),
    render(guildId, navigation) {
      const obj = { guildId: guildId.guildId, navigation };
      return closure_1_27(NotificationSettingChannelOverridesDefault, obj);
    }
  };
  intl2 = intl8.intl;
  obj[ADD_OVERRIDE] = obj4;
  obj5 = NavigatorHeader;
  const CHANNEL_OVERRIDE = constants4.CHANNEL_OVERRIDE;
  const obj6 = {
    headerLeft: obj7.getHeaderBackButton(),
    title: intl3.string(intl8.t.h850Ss),
    render(channelId) {
      return closure_1_27(ChannelSettingsNotificationsDefault, { channelId: channelId.channelId, inGuildContext: true });
    }
  };
  obj7 = NavigatorHeader;
  intl3 = intl8.intl;
  obj[CHANNEL_OVERRIDE] = obj6;
  return obj;
}
let closure_3 = ["categories"];
let closure_4 = ["categories"];
const View = react_native.View;
const isGuildReadableType = ChannelRecord.isGuildReadableType;
({ AnalyticEvents: closure_17, UserNotificationSettings: closure_18, ChannelTypes: closure_19, NotificationSettingsSections: closure_20, SettingsPaneTypes: closure_21, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_22, GuildFeatures: closure_23, HighlightSettings: closure_24, HelpdeskArticles: closure_25, EMPTY_STRING_SNOWFLAKE_ID: closure_26 } = Constants);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = Fragment);
let obj = { highlightsLearnMore: obj2, separator: obj3, formStack: obj4 };
obj2 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const __initData = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class NotificationSettings extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleMutePress = function handleMutePress() {
      let guildId;
      let muted;
      ({ guildId, muted } = require.props);
      if (muted) {
        const obj2 = { muted: !muted };
        const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
        NotificationSettingsModalActionCreatorsDefault;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateGuildNotificationSettings(guildId, obj2, NotificationLabel.muted(!muted));
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault;
        const obj = { guildId };
        const tmp8 = asyncRequire(11064, dependencyMap.paths);
        openLazy(tmp8, "muteSettings" + guildId, obj);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const obj2 = { [mobile_push]: arg1 };
      const result = obj.updateGuildNotificationSettings(require.props.guildId, obj2, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(message_notifications) {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const guildId = require.props.guildId;
      const obj = { message_notifications };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    applyArgumentsResult.handleAddOverride = function handleAddOverride() {
      const props = require.props;
      navigation = props.navigation;
      const obj = { guildId: props.guildId };
      navigation.push(constants.ADD_OVERRIDE, obj);
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      navigation = require.props.navigation;
      const obj = { channelId };
      navigation.push(constants.CHANNEL_OVERRIDE, obj);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "guild", destination_pane: constants5.GUILD_NOTIFICATION_SETTINGS };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }
  renderServerSettings() {
    let guildMemberCount;
    let intl;
    let intl2;
    let intl4;
    let intl5;
    let items;
    let items1;
    let items2;
    let messageNotifications;
    let muted;
    let shouldUseNewNotificationSystem;
    let stringResult;
    let tmp2Result;
    const self = this;
    const props = this.props;
    ({ muted, guildMemberCount } = props);
    ({ messageNotifications, shouldUseNewNotificationSystem } = props);
    if (shouldUseNewNotificationSystem) {
      const obj2 = { children: items1 };
      const obj3 = { children: items };
      const obj4 = { guildId: self.props.guildId };
      items = [closure_27(NotificationSettingsPresets.NotificationSettingsGuildPresets, obj4), , ];
      const obj5 = { style: { marginTop: 24 }, guildId: self.props.guildId };
      items[1] = closure_27(NotificationSettingsMessageNotification.NotificationSettingsGuildMessageNotification, obj5);
      const obj6 = { style: { marginTop: 24 }, guildId: self.props.guildId };
      items[2] = closure_27(NotificationSettingsMessageUnread.NotificationSettingsGuildMessageUnread, obj6);
      items1 = [closure_28(View, obj3), ];
      const obj7 = { style: tmp.separator };
      items1[1] = closure_27(View, obj7);
      tmp2Result = closure_28(set, obj2);
    } else {
      const obj = { title: intl.string(intl8.t.lprV7V), value: messageNotifications, onChange: self.handleTypeChange, hasIcons: false, children: items2 };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      intl = intl8.intl;
      const obj8 = { label: intl2.string(intl8.t["n/bTaY"]), disabled: muted, value: constants2.ALL_MESSAGES, subLabel: stringResult };
      const TableRadioRow = TableRadioRow4.TableRadioRow;
      intl2 = intl8.intl;
      stringResult = null;
      if (null != guildMemberCount) {
        stringResult = null;
        if (guildMemberCount >= afk) {
          const intl3 = intl8.intl;
          stringResult = intl3.string(intl8.t.Dh5p5j);
        }
      }
      items2 = [closure_27(TableRadioRow, obj8), , ];
      const obj9 = { label: intl4.format(intl8.t.L2hmYy, {}), value: constants2.ONLY_MENTIONS, disabled: muted };
      const TableRadioRow2 = TableRadioRow4.TableRadioRow;
      intl4 = intl8.intl;
      items2[1] = closure_27(TableRadioRow2, obj9);
      const obj10 = { label: intl5.string(intl8.t.CtVGyQ), value: constants2.NO_MESSAGES, disabled: muted };
      const TableRadioRow3 = TableRadioRow4.TableRadioRow;
      intl5 = intl8.intl;
      items2[2] = closure_27(TableRadioRow3, obj10);
      tmp2Result = closure_28(TableRadioGroup, obj);
    }
    return tmp2Result;
  }
  renderNotificationOptions() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let items1;
    let mobilePush;
    let muteEvents;
    let muted;
    let suppressEveryone;
    let suppressRoles;
    let tmp10;
    let tmp8;
    const self = this;
    const props = this.props;
    ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: require } = props);
    const tmp = closure_30(this.context);
    const notifyHighlights = props.notifyHighlights;
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    let obj = {
      label: intl.format(intl8.t.OWiWAp, {}),
      value: suppressEveryone,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
      }
    };
    const TableSwitchRow = TableSwitchRow6.TableSwitchRow;
    intl = intl8.intl;
    if (suppressEveryone == null) {
      suppressEveryone = false;
    }
    const items = [closure_27(TableSwitchRow, obj), , ];
    const obj2 = {
      label: intl2.string(intl8.t["O/QdoD"]),
      value: suppressRoles,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
      }
    };
    const TableSwitchRow2 = TableSwitchRow6.TableSwitchRow;
    intl2 = intl8.intl;
    if (suppressRoles == null) {
      suppressRoles = false;
    }
    items[1] = closure_27(TableSwitchRow2, obj2);
    const obj3 = {
      disabled: muted,
      label: intl3.string(intl8.t.gPuteJ),
      value: tmp8,
      onValueChange(arg0) {
        const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
        const obj = { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED };
        NotificationSettingsModalActionCreatorsDefault;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateGuildNotificationSettings(require, obj, NotificationLabel.highlights(!arg0));
      }
    };
    const TableSwitchRow3 = TableSwitchRow6.TableSwitchRow;
    intl3 = intl8.intl;
    const obj4 = { children: items1 };
    const obj5 = { hasIcons: false, children: items };
    tmp8 = muted || notifyHighlights === constants7.DISABLED;
    items[2] = closure_27(TableSwitchRow3, obj3);
    items1 = [closure_28(TableRowGroup, obj5), , ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: intl4.string(intl8.t["Vw/Xn8"]) };
    const Text = Text_Text.Text;
    intl4 = intl8.intl;
    items1[1] = closure_27(Text, obj6);
    const obj7 = {
      style: tmp.highlightsLearnMore,
      accessibilityRole: "link",
      onPress() {
        const openURL = self(dependencyMap[33]).openURL;
        self(dependencyMap[33]);
        const obj = self(dependencyMap[34]);
        return openURL(obj.getArticleURL(constants.HIGHLIGHTS));
      },
      children: intl5.string(intl8.t.PRBn9K)
    };
    const LegacyText = native.LegacyText;
    intl5 = intl8.intl;
    items1[2] = closure_27(LegacyText, obj7);
    const items2 = [closure_28(View, obj4), ];
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    const obj8 = {
      label: intl6.string(intl8.t.ONG3Yz),
      value: muteEvents,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
      }
    };
    const TableSwitchRow4 = TableSwitchRow6.TableSwitchRow;
    intl6 = intl8.intl;
    if (muteEvents == null) {
      muteEvents = false;
    }
    const items3 = [closure_27(TableSwitchRow4, obj8), ];
    const obj9 = {
      disabled: muted,
      label: intl7.string(intl8.t.h1DL66),
      value: tmp10,
      onValueChange(arg0) {
        const handleToggleChange = self.handleToggleChange;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
      }
    };
    const TableSwitchRow5 = TableSwitchRow6.TableSwitchRow;
    intl7 = intl8.intl;
    tmp10 = !muted;
    if (tmp10) {
      if (mobilePush == null) {
        mobilePush = false;
      }
      tmp10 = mobilePush;
    }
    const obj10 = { children: items2 };
    const obj11 = { hasIcons: false, children: items3 };
    items3[1] = closure_27(TableSwitchRow5, obj9);
    items2[1] = closure_28(TableRowGroup2, obj11);
    return closure_28(closure_29, obj10);
  }
  renderMuteSection() {
    let guild;
    let intl2;
    let intl3;
    let muteConfig;
    let muted;
    let obj5;
    let obj7;
    const self = this;
    const props = this.props;
    ({ muted, muteConfig, guild } = props);
    if (props.shouldUseNewNotificationSystem) {
      let tmp16 = null;
      if (muted) {
        const obj2 = { title: intl3.string(intl8.t.ZSkXJY), subtitle: obj7.getMuteBannerSubtitleFromConfig(muteConfig), style: { marginBottom: 16 }, onPressUnmute: self.handleMutePress };
        const NotificationSettingsMuteBanner = NotificationSettingsMuteBanner2.NotificationSettingsMuteBanner;
        intl3 = intl8.intl;
        obj7 = NotificationSettingsMuteBanner2;
        tmp16 = closure_27(NotificationSettingsMuteBanner, obj2);
      }
      return tmp16;
    } else {
      let formatResult;
      let tmp8;
      const intl = intl8.intl;
      const format = intl.format;
      const t = intl8.t;
      if (muted) {
        let name;
        const e8hzDQ = t.e8hzDQ;
        if (guild != null) {
          name = guild.name;
        }
        const obj3 = { name };
        formatResult = format(e8hzDQ, obj3);
        tmp8 = require;
      } else {
        let name1;
        const prop = t["J+7D9E"];
        if (guild != null) {
          name1 = guild.name;
        }
        const obj = { name: name1 };
        formatResult = format(prop, obj);
        tmp8 = require;
      }
      const obj4 = { helperText: intl2.string(tmp8(1126).t["8wbTQ6"]), hasIcons: false, children: closure_27(tmp8(5993).TableRow, obj5) };
      const TableRowGroup = tmp8(6074).TableRowGroup;
      intl2 = tmp8(1126).intl;
      obj5 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
      const items = [closure_27(TableRowGroup, obj4, "mute"), ];
      let tmp11Result = null;
      if (muted) {
        const obj6 = { muteConfig, type: tmp8(11066).MuteSettingType.SERVER };
        const tmp15 = MutedUntilTextDefault;
        tmp11Result = closure_27(tmp15, obj6, "muted-until");
      }
      items[1] = tmp11Result;
      return items;
    }
  }
  renderChannels() {
    let TableRow;
    let TableRowIcon;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let overriddenChannels;
    const self = this;
    const obj = { title: intl.string(intl8.t.O4TIvi), hasIcons: true, children: closure_27(TableRow, obj2) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    intl = intl8.intl;
    obj2 = { icon: closure_27(TableRowIcon, obj3), label: intl2.string(intl8.t.quib7R), onPress: this.handleAddOverride };
    TableRow = TableRow2.TableRow;
    obj3 = { IconComponent: PlusMediumIcon.PlusMediumIcon };
    TableRowIcon = TableRowIcon2.TableRowIcon;
    intl2 = intl8.intl;
    const items = [closure_27(TableRowGroup, obj, "override-header"), ];
    const obj4 = { hasIcons: true, children: overriddenChannels.map((item) => self.renderChannel(item)) };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    overriddenChannels = this.getOverriddenChannels();
    items[1] = closure_27(TableRowGroup2, obj4, "override-channels");
    return items;
  }
  renderChannel(parent_id) {
    let TableRowIcon;
    let channelName;
    let obj3;
    let tmp12Result;
    let tmp4Result6;
    let tmp4Result7;
    const self = this;
    let closure_0 = parent_id;
    if (null != parent_id) {
      let stringResult;
      let channel;
      if (null != parent_id.parent_id) {
        channel = ChannelStore.getChannel(parent_id.parent_id);
      }
      const obj = MuteTimers;
      if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
        const intl3 = intl8.intl;
        stringResult = intl3.string(intl8.t.fpKdS1);
      } else {
        const message_notifications = tmp.message_notifications;
        if (constants2.ALL_MESSAGES === message_notifications) {
          const intl2 = intl8.intl;
          stringResult = intl2.string(intl8.t["n/bTaY"]);
        } else if (constants2.ONLY_MENTIONS === message_notifications) {
          const intl = intl8.intl;
          stringResult = intl.string(intl8.t["6fQPhu"]);
        } else if (constants2.NO_MESSAGES === message_notifications) {
          const intl4 = intl8.intl;
          stringResult = intl4.string(intl8.t.CtVGyQ);
        }
      }
      if (self.props.shouldUseNewNotificationSystem) {
        const presetName = notificationSettingsPresetUtils.presetName;
        notificationSettingsPresetUtils;
        const presetFromSettings = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(parent_id);
        stringResult = presetName(presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(parent_id)));
      }
      const obj2 = {
        icon: closure_27(TableRowIcon, obj3),
        label: tmp4Result7.computeChannelName(parent_id, UserStore, RelationshipStore),
        onPress() {
            return self.handleChannelSelect(id.id);
          },
        subLabel: channelName,
        trailing: tmp12Result,
        arrow: true
      };
      const TableRow = TableRow2.TableRow;
      obj3 = { IconComponent: tmp4Result6.getChannelIconComponent(parent_id) };
      TableRowIcon = TableRowIcon2.TableRowIcon;
      tmp4Result6 = utils_ChannelUtils;
      channelName = null;
      tmp4Result7 = useChannelName;
      if (null != channel) {
        const tmp4Result8 = useChannelName;
        channelName = tmp4Result8.computeChannelName(channel, UserStore, RelationshipStore);
      }
      tmp12Result = undefined;
      if (null != stringResult) {
        const obj4 = { text: stringResult };
        tmp12Result = closure_27(TableRow2.TableRow.TrailingText, obj4);
      }
      return closure_27(TableRow, obj2, parent_id.id);
    }
  }
  render() {
    let items;
    let tmp4Result;
    const self = this;
    const guild = this.props.guild;
    const tmp = closure_30(this.context);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants6.HUB);
    }
    const Form = Form2.Form;
    const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
    if (hasItem) {
      const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
      const Stack2 = Stack_Stack.Stack;
      obj.children = closure_27(Stack2, obj2);
      tmp4Result = closure_27(Form, obj);
    } else {
      const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: items };
      const Stack = Stack_Stack.Stack;
      items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
      obj.children = closure_28(Stack, obj3);
      tmp4Result = closure_27(Form, obj);
    }
    return tmp4Result;
  }
  getOverriddenChannels() {
    const props = this.props;
    const channels = props.channels;
    const channelOverrides = props.channelOverrides;
    const obj = notifications_NotificationUtils;
    const obj2 = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
    set = new Set(obj.filterOverrides(channelOverrides, obj2));
    const mapped = channels.map((channel) => {
      channel = channel.channel;
      let tmp = null;
      if (set.has(channel.id)) {
        tmp = channel;
      }
      return tmp;
    });
    return mapped.filter((item) => null != item);
  }
}
const prototype = NotificationSettings.prototype;
NotificationSettings.contextType = native2.ThemeContext;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(18);
  guildId = guildId.guildId;
  const obj2 = guildId(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
      return obj;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10);
  if (cResult[3] !== stateFromStoresObject) {
    const categories = stateFromStoresObject.categories;
    const tmp16 = _objectWithoutProperties(stateFromStoresObject, closure_3);
    cResult[3] = stateFromStoresObject;
    cResult[4] = categories;
    cResult[5] = tmp16;
    tmp13 = tmp16;
    tmp12 = categories;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(channel) {
        const type = channel.channel.type;
        const tmp = isGuildReadableType(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      }
    }
    cResult[6] = E;
  } else {
    class E {
      constructor(channel) {
        const type = channel.channel.type;
        const tmp = isGuildReadableType(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      }
    }
  }
  if (cResult[7] !== tmp12) {
    class E {
      constructor(channel) {
        const type = channel.channel.type;
        const tmp = isGuildReadableType(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      }
    }
    cResult[7] = tmp12;
    cResult[8] = getFlattedChannelListDefault(tmp12._categories, tmp12, E);
    const tmp19 = getFlattedChannelListDefault(tmp12._categories, tmp12, E);
  } else {
    class E {
      constructor(channel) {
        const type = channel.channel.type;
        const tmp = isGuildReadableType(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      }
    }
  }
  const tmpResult2 = tmp(9849);
  const shouldUseNewNotificationSystem = tmpResult2.useShouldUseNewNotificationSystem("NotificationSettingsModalNative");
  if (cResult[9] === tmp18) {
    class E {
      constructor(channel) {
        const type = channel.channel.type;
        const tmp = isGuildReadableType(type) || type === constants.GUILD_CATEGORY;
        return tmp;
      }
    }
  }
  const obj3 = { guildId, channels: tmp18, navigation, shouldUseNewNotificationSystem };
  const merged = Object.assign(tmp13);
  cResult[9] = tmp18;
  cResult[10] = guildId;
  cResult[11] = navigation;
  cResult[12] = tmp13;
  cResult[13] = shouldUseNewNotificationSystem;
  cResult[14] = closure_27(NotificationSettings, obj3);
  closure_27(NotificationSettings, obj3);
}) : ((guildId) => {
  let items2;
  guildId = guildId.guildId;
  let obj = guildId(1490);
  navigation = obj.useNavigation();
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const obj2 = guildId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  });
  const categories = stateFromStoresObject.categories;
  const items1 = [categories];
  const tmp3 = _objectWithoutProperties(stateFromStoresObject, closure_4);
  const memo = react.useMemo(() => getFlattedChannelListDefault(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    const tmp = closure_1_8(type) || type === constants.GUILD_CATEGORY;
    return tmp;
  }), items1);
  const obj4 = { children: items2 };
  const obj3 = guildId(9849);
  const obj5 = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: obj3.useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  items2 = [closure_27(NotificationSettings, obj5), closure_27(guildId(6536).NavScrim, {})];
  return closure_28(closure_29, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let obj4;
  let props;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationSettingsModalStore];
    const fn = function n() {
      return props.getProps().guildId;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = getScreens();
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  let tmp11 = stateFromStores;
  if (stateFromStores == null) {
    tmp11 = prioritySpeakerDucking;
  }
  if (cResult[3] !== tmp11) {
    const obj3 = { name: constants4.OVERVIEW, params: obj4 };
    const obj2 = { screens: tmp8, initialRouteStack: items1 };
    items1 = [obj3];
    obj4 = { guildId: tmp11 };
    const tmp15 = closure_27(Navigator2.Navigator, obj2);
    cResult[3] = tmp11;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (() => {
  let items1;
  let props;
  const items = [NotificationSettingsModalStore];
  const obj = get_initialized;
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = react.useMemo(() => getScreens(), []);
  const obj2 = { screens: memo, initialRouteStack: items1 };
  const obj3 = { name: constants4.OVERVIEW, params: { guildId: stateFromStores } };
  const Navigator = Navigator2.Navigator;
  if (stateFromStores == null) {
    stateFromStores = prioritySpeakerDucking;
  }
  items1 = [obj3];
  return closure_27(Navigator, obj2);
});
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default tmp6;
export { NotificationSettings };