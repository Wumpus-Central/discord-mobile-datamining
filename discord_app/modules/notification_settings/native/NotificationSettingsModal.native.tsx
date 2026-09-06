// === Module 17791: NotificationSettingsModal ===

// Module 17791 (NotificationSettingsModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import MuteTimers from "MuteTimers" /* 4202 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelName from "useChannelName" /* 4713 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4744 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowIcon from "TableRowIcon" /* 5611 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableRadioRow from "TableRadioRow" /* 5688 */;
import Navigator from "Navigator" /* 7000 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 7112 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import Form2 from "Form" /* 8593 */;
import MutedUntilTextDefault from "MutedUntilText" /* 10146 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 10147 */;
import NotificationSettingsMuteBanner from "NotificationSettingsMuteBanner" /* 10151 */;
import NotificationSettingsPresets from "NotificationSettingsPresets" /* 10152 */;
import NotificationSettingsMessageNotification from "NotificationSettingsMessageNotification" /* 10156 */;
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread" /* 10163 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12753 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7111 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildStore from "GuildStore" /* 1979 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17506 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ConnectedNotificationSettings(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1483);
  const navigation = obj.useNavigation();
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items, () => ({ guild: GuildStore.getGuild(guildId), suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId), mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId), muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId), muted: UserGuildSettingsStore.isMuted(guildId), muteConfig: UserGuildSettingsStore.getMuteConfig(guildId), messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId), channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId), categories: GuildCategoryStore.getCategories(guildId), guildMemberCount: GuildMemberCountStore.getMemberCount(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) }));
  const categories = stateFromStoresObject.categories;
  const obj2 = guildId(504);
  const items1 = [categories];
  const memo = noop.useMemo(() => getFlattedChannelListDefault(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    let tmp = closure_1_7(type);
    if (!tmp) {
      tmp = type === constants.GUILD_CATEGORY;
    }
    return tmp;
  }), items1);
  const tmp3 = _objectWithoutProperties(stateFromStoresObject, closure_3);
  obj = { children: null };
  obj = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: guildId(10147).useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  const items2 = [closure_26(NotificationSettings, obj), closure_26(guildId(7040).NavScrim, {})];
  obj.children = items2;
  return closure_27(closure_28, obj);
}
let closure_3 = ["categories"];
const View = fn(17).View;
const isGuildReadableType = fn(1961).isGuildReadableType;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, NotificationSettingsSections: closure_19, SettingsPaneTypes: closure_20, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_21, GuildFeatures: closure_22, HighlightSettings: closure_23, HelpdeskArticles: closure_24, EMPTY_STRING_SNOWFLAKE_ID: closure_25 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
fn(4560);
let createStyles = { highlightsLearnMore: null, separator: null, formStack: null };
createStyles = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
createStyles.highlightsLearnMore = createStyles;
createStyles.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let obj1 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createStyles.formStack = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_29 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class NotificationSettings extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleMutePress = function handleMutePress() {
      ({ guildId, muted } = applyArgumentsResult.props);
      if (muted) {
        let tmpResult = NotificationSettingsModalActionCreatorsDefault;
        let obj = { muted: !muted };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = tmpResult.updateGuildNotificationSettings(guildId, obj, NotificationLabel.muted(!muted));
      } else {
        tmpResult = ActionSheetActionCreatorsDefault;
        const _HermesInternal = HermesInternal;
        obj = { guildId };
        tmpResult.openLazy(asyncRequireImpl(10144, dependencyMap.paths), "muteSettings" + guildId, obj);
        const tmp7 = asyncRequireImpl(10144, dependencyMap.paths);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const obj = { [mobile_push]: arg1 };
      const result = obj.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, obj, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(message_notifications) {
      const obj = { message_notifications };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    applyArgumentsResult.handleAddOverride = function handleAddOverride() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(constants3.ADD_OVERRIDE, { guildId: props.guildId });
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      const navigation = applyArgumentsResult.props.navigation;
      navigation.push(constants3.CHANNEL_OVERRIDE, { channelId });
    };
    return applyArgumentsResult;
  }
}
const prototype = NotificationSettings.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const obj = { settings_type: "guild", destination_pane: constants4.GUILD_NOTIFICATION_SETTINGS };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
prototype["renderServerSettings"] = function renderServerSettings() {
  const self = this;
  const props = this.props;
  ({ muted, guildMemberCount } = props);
  ({ messageNotifications, shouldUseNewNotificationSystem } = props);
  if (shouldUseNewNotificationSystem) {
    let obj = { children: null };
    obj = { children: null };
    const obj1 = { guildId: self.props.guildId };
    const items = [dependencyMap(NotificationSettingsPresets.NotificationSettingsGuildPresets, obj1), , ];
    const obj2 = { style: { marginTop: 24 }, guildId: self.props.guildId };
    items[1] = dependencyMap(NotificationSettingsMessageNotification.NotificationSettingsGuildMessageNotification, obj2);
    const obj3 = { style: { marginTop: 24 }, guildId: self.props.guildId };
    items[2] = dependencyMap(NotificationSettingsMessageUnread.NotificationSettingsGuildMessageUnread, obj3);
    obj.children = items;
    const items1 = [__initData5(View, obj), ];
    const obj4 = { style: tmp.separator };
    items1[1] = dependencyMap(View, obj4);
    obj.children = items1;
    let tmp2Result = __initData5(__initData6, obj);
  } else {
    obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.lprV7V);
    obj.value = messageNotifications;
    obj.onChange = self.handleTypeChange;
    const obj5 = { label: null, disabled: null, value: null, subLabel: null };
    const intl2 = util.intl;
    obj5.label = intl2.string(util.t["n/bTaY"]);
    obj5.disabled = muted;
    obj5.value = constants2.ALL_MESSAGES;
    let stringResult = null;
    if (null != guildMemberCount) {
      stringResult = null;
      if (guildMemberCount >= __initData) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.Dh5p5j);
      }
    }
    obj5.subLabel = stringResult;
    const items2 = [dependencyMap(TableRadioRow.TableRadioRow, obj5), , ];
    const obj6 = { label: null, value: null, disabled: null };
    const intl4 = util.intl;
    obj6.label = intl4.format(util.t.L2hmYy, {});
    obj6.value = constants2.ONLY_MENTIONS;
    obj6.disabled = muted;
    items2[1] = dependencyMap(TableRadioRow.TableRadioRow, obj6);
    const obj7 = { label: null, value: null, disabled: null };
    const intl5 = util.intl;
    obj7.label = intl5.string(util.t.CtVGyQ);
    obj7.value = constants2.NO_MESSAGES;
    obj7.disabled = muted;
    items2[2] = dependencyMap(TableRadioRow.TableRadioRow, obj7);
    obj.children = items2;
    tmp2Result = __initData5(TableRadioGroup.TableRadioGroup, obj);
  }
  return tmp2Result;
};
prototype["renderNotificationOptions"] = function renderNotificationOptions() {
  const self = this;
  const props = this.props;
  ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: require } = props);
  let obj = { label: null, value: null, onValueChange: null };
  const intl = util.intl;
  obj.label = intl.format(util.t.OWiWAp, {});
  if (suppressEveryone == null) {
    suppressEveryone = false;
  }
  obj.value = suppressEveryone;
  obj.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
  };
  const items = [closure_26(TableSwitchRow.TableSwitchRow, obj), , ];
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["O/QdoD"]);
  if (suppressRoles == null) {
    suppressRoles = false;
  }
  obj.value = suppressRoles;
  obj.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
  };
  items[1] = closure_26(TableSwitchRow.TableSwitchRow, obj);
  obj = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.gPuteJ);
  let tmp8 = muted;
  if (!muted) {
    tmp8 = props.notifyHighlights === constants6.DISABLED;
  }
  const obj1 = { children: null };
  const obj2 = { hasIcons: false, children: null };
  obj.value = tmp8;
  obj.onValueChange = function onValueChange(arg0) {
    const obj = { notify_highlights: arg0 ? constants6.DISABLED : constants6.ENABLED };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateGuildNotificationSettings(closure_1_0, obj, NotificationLabel.highlights(!arg0));
  };
  items[2] = closure_26(TableSwitchRow.TableSwitchRow, obj);
  obj2.children = items;
  const items1 = [closure_27(TableRowGroup.TableRowGroup, obj2), , ];
  const obj3 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: null };
  const intl4 = util.intl;
  obj3.children = intl4.string(util.t["Vw/Xn8"]);
  items1[1] = closure_26(Text_Text.Text, obj3);
  const obj4 = {
    style: closure_29(this.context).highlightsLearnMore,
    accessibilityRole: "link",
    onPress() {
      const obj = self(4255);
      return obj.openURL(self(2024).getArticleURL(constants.HIGHLIGHTS));
    },
    children: null
  };
  const intl5 = util.intl;
  obj4.children = intl5.string(util.t.PRBn9K);
  items1[2] = closure_26(native.LegacyText, obj4);
  obj1.children = items1;
  const items2 = [closure_27(View, obj1), ];
  const obj5 = { label: null, value: null, onValueChange: null };
  const intl6 = util.intl;
  obj5.label = intl6.string(util.t.ONG3Yz);
  if (muteEvents == null) {
    muteEvents = false;
  }
  obj5.value = muteEvents;
  obj5.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
  };
  const items3 = [closure_26(TableSwitchRow.TableSwitchRow, obj5), ];
  const obj6 = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl7 = util.intl;
  obj6.label = intl7.string(util.t.h1DL66);
  let tmp10 = !muted;
  if (!muted) {
    if (mobilePush == null) {
      mobilePush = false;
    }
    tmp10 = mobilePush;
  }
  const obj7 = { children: null };
  const obj8 = { hasIcons: false, children: null };
  obj6.value = tmp10;
  obj6.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
  };
  items3[1] = closure_26(TableSwitchRow.TableSwitchRow, obj6);
  obj8.children = items3;
  items2[1] = closure_27(TableRowGroup.TableRowGroup, obj8);
  obj7.children = items2;
  return closure_27(closure_28, obj7);
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const self = this;
  const props = this.props;
  ({ muted, muteConfig, guild } = props);
  if (props.shouldUseNewNotificationSystem) {
    let tmp15 = null;
    if (muted) {
      let obj = { title: null, subtitle: null, style: null, onPressUnmute: null };
      const intl3 = util.intl;
      obj.title = intl3.string(util.t.ZSkXJY);
      obj.subtitle = NotificationSettingsMuteBanner.getMuteBannerSubtitleFromConfig(muteConfig);
      obj.style = { marginBottom: 16 };
      obj.onPressUnmute = self.handleMutePress;
      tmp15 = dependencyMap(NotificationSettingsMuteBanner.NotificationSettingsMuteBanner, obj);
    }
    return tmp15;
  } else {
    const intl = util.intl;
    const format = intl.format;
    const t = util.t;
    if (muted) {
      let name;
      if (guild != null) {
        name = guild.name;
      }
      obj = { name };
      let formatResult = format(t.e8hzDQ, obj);
      let tmp7 = require;
    } else {
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      obj = { name: name1 };
      formatResult = format(t["J+7D9E"], obj);
      tmp7 = require;
    }
    const obj1 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp7(1114).intl;
    obj1.helperText = intl2.string(tmp7(1114).t["8wbTQ6"]);
    const obj2 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
    obj1.children = dependencyMap(tmp7(5605).TableRow, obj2);
    const items = [dependencyMap(tmp7(5687).TableRowGroup, obj1, "mute"), ];
    let tmp10Result = null;
    if (muted) {
      const obj3 = { muteConfig, type: tmp7(10146).MuteSettingType.SERVER };
      tmp10Result = dependencyMap(MutedUntilTextDefault, obj3, "muted-until");
    }
    items[1] = tmp10Result;
    return items;
  }
};
prototype["renderChannels"] = function renderChannels() {
  const self = this;
  let obj = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.O4TIvi);
  obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: PlusMediumIcon.PlusMediumIcon };
  obj.icon = dependencyMap(TableRowIcon.TableRowIcon, obj);
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.quib7R);
  obj.onPress = this.handleAddOverride;
  obj.children = dependencyMap(TableRow.TableRow, obj);
  const items = [dependencyMap(TableRowGroup.TableRowGroup, obj, "override-header"), ];
  const obj1 = { hasIcons: true, children: null };
  const overriddenChannels = this.getOverriddenChannels();
  obj1.children = overriddenChannels.map((item) => self.renderChannel(item));
  items[1] = dependencyMap(TableRowGroup.TableRowGroup, obj1, "override-channels");
  return items;
};
prototype["renderChannel"] = function renderChannel(parent_id) {
  const self = this;
  if (null != parent_id) {
    let channel;
    if (null != parent_id.parent_id) {
      channel = ChannelStore.getChannel(parent_id.parent_id);
    }
    let obj = MuteTimers;
    if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.fpKdS1);
    } else {
      const message_notifications = tmp.message_notifications;
      if (constants2.ALL_MESSAGES === message_notifications) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t["n/bTaY"]);
      } else if (constants2.ONLY_MENTIONS === message_notifications) {
        const intl = util.intl;
        stringResult = intl.string(util.t["6fQPhu"]);
      } else if (constants2.NO_MESSAGES === message_notifications) {
        const intl4 = util.intl;
        stringResult = intl4.string(util.t.CtVGyQ);
      }
    }
    if (self.props.shouldUseNewNotificationSystem) {
      const tmp4Result = notificationSettingsPresetUtils;
      const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(parent_id);
      stringResult = tmp4Result.presetName(tmp4Result.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(parent_id)));
    }
    obj = { icon: null, label: null, onPress: null, subLabel: null, trailing: null, arrow: true };
    obj = { IconComponent: utils_ChannelUtils.getChannelIconComponent(parent_id) };
    obj.icon = dependencyMap(TableRowIcon.TableRowIcon, obj);
    const tmp4Result1 = utils_ChannelUtils;
    obj.label = useChannelName.computeChannelName(parent_id, UserStore, RelationshipStore);
    obj.onPress = function onPress() {
      return self.handleChannelSelect(parent_id.id);
    };
    let channelName = null;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp4Result3 = useChannelName;
    }
    obj.subLabel = channelName;
    let tmp10Result;
    if (null != stringResult) {
      const obj1 = { text: stringResult };
      tmp10Result = dependencyMap(TableRow.TableRow.TrailingText, obj1);
    }
    obj.trailing = tmp10Result;
    return dependencyMap(TableRow.TableRow, obj, parent_id.id);
  }
};
prototype["render"] = function render() {
  const self = this;
  const guild = this.props.guild;
  const tmp = closure_29(this.context);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants5.HUB);
  }
  const Form = Form2.Form;
  let obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
  if (hasItem) {
    obj = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
    obj.children = dependencyMap(Stack_Stack.Stack, obj);
    let tmp4Result = dependencyMap(Form, obj);
  } else {
    obj = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: null };
    const items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
    obj.children = items;
    obj.children = __initData5(Stack_Stack.Stack, obj);
    tmp4Result = dependencyMap(Form, obj);
  }
  return tmp4Result;
};
prototype["getOverriddenChannels"] = function getOverriddenChannels() {
  const props = this.props;
  const channels = props.channels;
  const obj = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
  const set = new Set(obj.filterOverrides(props.channelOverrides, obj));
  const mapped = channels.map((channel) => {
    channel = channel.channel;
    let tmp = null;
    if (set.has(channel.id)) {
      tmp = channel;
    }
    return tmp;
  });
  return mapped.filter((item) => null != item);
};
NotificationSettings.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  let obj = initialize;
  const items = [NotificationSettingsModalStore];
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = noop.useMemo(() => {
    let obj = {};
    obj = { headerLeft: NavigatorHeader.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close), title: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.h850Ss);
    obj.render = function render(guildId) {
      return closure_1_26(closure_1_31, { guildId: guildId.guildId });
    };
    obj[constants.OVERVIEW] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.s7vIQT);
    obj.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj.render = function render(guildId, navigation) {
      return closure_1_26(closure_1_1(17792), { guildId: guildId.guildId, navigation });
    };
    obj[constants.ADD_OVERRIDE] = obj;
    const obj1 = { headerLeft: null, title: null, render: null };
    obj1.headerLeft = NavigatorHeader.getHeaderBackButton();
    const intl3 = util.intl;
    obj1.title = intl3.string(util.t.h850Ss);
    obj1.render = function render(channelId) {
      return closure_1_26(closure_1_1(10143), { channelId: channelId.channelId, inGuildContext: true });
    };
    obj[constants.CHANNEL_OVERRIDE] = obj1;
    return obj;
  }, []);
  obj = { screens: memo, initialRouteStack: null };
  obj = { name: constants3.OVERVIEW, params: null };
  if (stateFromStores == null) {
    stateFromStores = closure_1_25;
  }
  obj.params = { guildId: stateFromStores };
  const items1 = [obj];
  obj.initialRouteStack = items1;
  return dependencyMap(Navigator.Navigator, obj);
};
export { NotificationSettings };