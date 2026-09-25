// === Module 17586: NotificationSettingsModal ===

// Module 17586 (NotificationSettingsModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import MuteTimers from "MuteTimers" /* 4469 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import useChannelName from "useChannelName" /* 4982 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5013 */;
import Stack_Stack from "Stack/Stack" /* 5272 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5328 */;
import TableRow from "TableRow" /* 5912 */;
import TableRowIcon from "TableRowIcon" /* 5918 */;
import NavigatorHeader from "NavigatorHeader" /* 5931 */;
import TableRadioGroup from "TableRadioGroup" /* 5992 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import TableRadioRow from "TableRadioRow" /* 5995 */;
import Navigator from "Navigator" /* 6416 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6528 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6530 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6535 */;
import TableSwitchRow from "TableSwitchRow" /* 6616 */;
import Form2 from "Form" /* 8045 */;
import MutedUntilTextDefault from "MutedUntilText" /* 9593 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9594 */;
import NotificationSettingsMuteBanner from "NotificationSettingsMuteBanner" /* 9598 */;
import NotificationSettingsPresets from "NotificationSettingsPresets" /* 9599 */;
import NotificationSettingsMessageNotification from "NotificationSettingsMessageNotification" /* 9605 */;
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread" /* 9612 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12251 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6527 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4750 */;
import GuildStore from "GuildStore" /* 2066 */;
import NotificationSettingsModalStore from "NotificationSettingsModalStore" /* 17242 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ConnectedNotificationSettings(guildId) {
  guildId = guildId.guildId;
  const navigation = guildId(1484).useNavigation();
  const obj = guildId(1484);
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
  const obj4 = { children: null };
  const obj3 = guildId(9594);
  const merged = Object.assign(tmp3);
  const items2 = [closure_26(NotificationSettings, { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: guildId(9594).useShouldUseNewNotificationSystem("NotificationSettingsModalNative") }), closure_26(guildId(6456).NavScrim, {})];
  obj4.children = items2;
  return closure_27(closure_28, obj4);
}
let closure_3 = ["categories"];
const View = fn(17).View;
const isGuildReadableType = fn(2048).isGuildReadableType;
const Constants = fn(1074);
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, NotificationSettingsSections: closure_19, SettingsPaneTypes: closure_20, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_21, GuildFeatures: closure_22, HighlightSettings: closure_23, HelpdeskArticles: closure_24, EMPTY_STRING_SNOWFLAKE_ID: closure_25 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { highlightsLearnMore: { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 }, separator: null, formStack: null };
let obj3 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj2.formStack = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_29 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class NotificationSettings extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleMutePress = function handleMutePress() {
      ({ guildId, muted } = applyArgumentsResult.props);
      if (muted) {
        const obj = { muted: !muted };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, obj, NotificationLabel.muted(!muted));
        const tmpResult = NotificationSettingsModalActionCreatorsDefault;
      } else {
        const _HermesInternal = HermesInternal;
        const tmpResult2 = ActionSheetActionCreatorsDefault;
        const obj2 = { guildId };
        tmpResult2.openLazy(asyncRequireImpl(9589, dependencyMap.paths), "muteSettings" + guildId, obj2);
        const tmp7 = asyncRequireImpl(9589, dependencyMap.paths);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, { [mobile_push]: arg1 }, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(message_notifications) {
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, { message_notifications }, NotificationLabel.notifications(message_notifications));
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
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, { settings_type: "guild", destination_pane: constants4.GUILD_NOTIFICATION_SETTINGS });
};
prototype["renderServerSettings"] = function renderServerSettings() {
  const self = this;
  const props = this.props;
  ({ muted, guildMemberCount } = props);
  ({ messageNotifications, shouldUseNewNotificationSystem } = props);
  if (shouldUseNewNotificationSystem) {
    const obj2 = { children: null };
    const obj3 = { children: null };
    const obj4 = { guildId: self.props.guildId };
    const items = [dependencyMap(NotificationSettingsPresets.NotificationSettingsGuildPresets, obj4), , ];
    const obj5 = { style: { marginTop: 24 }, guildId: self.props.guildId };
    items[1] = dependencyMap(NotificationSettingsMessageNotification.NotificationSettingsGuildMessageNotification, obj5);
    const obj6 = { style: { marginTop: 24 }, guildId: self.props.guildId };
    items[2] = dependencyMap(NotificationSettingsMessageUnread.NotificationSettingsGuildMessageUnread, obj6);
    obj3.children = items;
    const items1 = [__initData5(View, obj3), ];
    const obj7 = { style: tmp.separator };
    items1[1] = dependencyMap(View, obj7);
    obj2.children = items1;
    let tmp2Result = __initData5(__initData6, obj2);
  } else {
    const obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.lprV7V);
    obj.value = messageNotifications;
    obj.onChange = self.handleTypeChange;
    const obj8 = { label: null, disabled: null, value: null, subLabel: null };
    const intl2 = util.intl;
    obj8.label = intl2.string(util.t["n/bTaY"]);
    obj8.disabled = muted;
    obj8.value = constants2.ALL_MESSAGES;
    let stringResult = null;
    if (null != guildMemberCount) {
      stringResult = null;
      if (guildMemberCount >= __initData) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.Dh5p5j);
      }
    }
    obj8.subLabel = stringResult;
    const items2 = [dependencyMap(TableRadioRow.TableRadioRow, obj8), , ];
    const obj9 = { label: null, value: null, disabled: null };
    const intl4 = util.intl;
    obj9.label = intl4.format(util.t.L2hmYy, {});
    obj9.value = constants2.ONLY_MENTIONS;
    obj9.disabled = muted;
    items2[1] = dependencyMap(TableRadioRow.TableRadioRow, obj9);
    const obj10 = { label: null, value: null, disabled: null };
    const intl5 = util.intl;
    obj10.label = intl5.string(util.t.CtVGyQ);
    obj10.value = constants2.NO_MESSAGES;
    obj10.disabled = muted;
    items2[2] = dependencyMap(TableRadioRow.TableRadioRow, obj10);
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
  let obj2 = { label: null, value: null, onValueChange: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["O/QdoD"]);
  if (suppressRoles == null) {
    suppressRoles = false;
  }
  obj2.value = suppressRoles;
  obj2.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
  };
  items[1] = closure_26(TableSwitchRow.TableSwitchRow, obj2);
  const obj3 = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.gPuteJ);
  let tmp8 = muted;
  if (!muted) {
    tmp8 = props.notifyHighlights === constants6.DISABLED;
  }
  const obj4 = { children: null };
  const obj5 = { hasIcons: false, children: null };
  obj3.value = tmp8;
  obj3.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(closure_1_0, { notify_highlights: arg0 ? constants6.DISABLED : constants6.ENABLED }, NotificationLabel.highlights(!arg0));
    const obj2 = { notify_highlights: arg0 ? constants6.DISABLED : constants6.ENABLED };
  };
  items[2] = closure_26(TableSwitchRow.TableSwitchRow, obj3);
  obj5.children = items;
  const items1 = [closure_27(TableRowGroup.TableRowGroup, obj5), , ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["Vw/Xn8"]);
  items1[1] = closure_26(Text_Text.Text, obj6);
  const obj7 = {
    style: closure_29(this.context).highlightsLearnMore,
    accessibilityRole: "link",
    onPress() {
      const obj = self(4522);
      return obj.openURL(self(2110).getArticleURL(constants.HIGHLIGHTS));
    },
    children: null
  };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t.PRBn9K);
  items1[2] = closure_26(native.LegacyText, obj7);
  obj4.children = items1;
  const items2 = [closure_27(View, obj4), ];
  const obj8 = { label: null, value: null, onValueChange: null };
  const intl6 = util.intl;
  obj8.label = intl6.string(util.t.ONG3Yz);
  if (muteEvents == null) {
    muteEvents = false;
  }
  obj8.value = muteEvents;
  obj8.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
  };
  const items3 = [closure_26(TableSwitchRow.TableSwitchRow, obj8), ];
  const obj9 = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl7 = util.intl;
  obj9.label = intl7.string(util.t.h1DL66);
  let tmp10 = !muted;
  if (!muted) {
    if (mobilePush == null) {
      mobilePush = false;
    }
    tmp10 = mobilePush;
  }
  const obj10 = { children: null };
  const obj11 = { hasIcons: false, children: null };
  obj9.value = tmp10;
  obj9.onValueChange = function onValueChange(arg0) {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    self.handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
  };
  items3[1] = closure_26(TableSwitchRow.TableSwitchRow, obj9);
  obj11.children = items3;
  items2[1] = closure_27(TableRowGroup.TableRowGroup, obj11);
  obj10.children = items2;
  return closure_27(closure_28, obj10);
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const self = this;
  const props = this.props;
  ({ muted, muteConfig, guild } = props);
  if (props.shouldUseNewNotificationSystem) {
    let tmp15 = null;
    if (muted) {
      const obj2 = { title: null, subtitle: null, style: null, onPressUnmute: null };
      const intl3 = util.intl;
      obj2.title = intl3.string(util.t.ZSkXJY);
      obj2.subtitle = NotificationSettingsMuteBanner.getMuteBannerSubtitleFromConfig(muteConfig);
      obj2.style = { marginBottom: 16 };
      obj2.onPressUnmute = self.handleMutePress;
      tmp15 = dependencyMap(NotificationSettingsMuteBanner.NotificationSettingsMuteBanner, obj2);
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
      const obj3 = { name };
      let formatResult = format(t.e8hzDQ, obj3);
      let tmp7 = require;
    } else {
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      const obj = { name: name1 };
      formatResult = format(t["J+7D9E"], obj);
      tmp7 = require;
    }
    const obj4 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp7(1115).intl;
    obj4.helperText = intl2.string(tmp7(1115).t["8wbTQ6"]);
    const obj5 = { label: formatResult, onPress: self.handleMutePress, arrow: !muted };
    obj4.children = dependencyMap(tmp7(5912).TableRow, obj5);
    const items = [dependencyMap(tmp7(5994).TableRowGroup, obj4, "mute"), ];
    let tmp10Result = null;
    if (muted) {
      const obj6 = { muteConfig, type: tmp7(9593).MuteSettingType.SERVER };
      tmp10Result = dependencyMap(MutedUntilTextDefault, obj6, "muted-until");
    }
    items[1] = tmp10Result;
    return items;
  }
};
prototype["renderChannels"] = function renderChannels() {
  const self = this;
  const obj = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.O4TIvi);
  const obj2 = { icon: dependencyMap(TableRowIcon.TableRowIcon, { IconComponent: PlusMediumIcon.PlusMediumIcon }), label: null, onPress: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.quib7R);
  obj2.onPress = this.handleAddOverride;
  obj.children = dependencyMap(TableRow.TableRow, obj2);
  const items = [dependencyMap(TableRowGroup.TableRowGroup, obj, "override-header"), ];
  const obj4 = { hasIcons: true, children: null };
  const overriddenChannels = this.getOverriddenChannels();
  obj4.children = overriddenChannels.map((item) => self.renderChannel(item));
  items[1] = dependencyMap(TableRowGroup.TableRowGroup, obj4, "override-channels");
  return items;
};
prototype["renderChannel"] = function renderChannel(parent_id) {
  const self = this;
  if (null != parent_id) {
    let channel;
    if (null != parent_id.parent_id) {
      channel = ChannelStore.getChannel(parent_id.parent_id);
    }
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
      stringResult = tmp4Result.presetName(notificationSettingsPresetUtils.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(parent_id)));
      const tmp4Result5 = notificationSettingsPresetUtils;
    }
    const obj2 = { icon: null, label: null, onPress: null, subLabel: null, trailing: null, arrow: true };
    const obj3 = { IconComponent: null };
    obj = MuteTimers;
    obj3.IconComponent = utils_ChannelUtils.getChannelIconComponent(parent_id);
    obj2.icon = dependencyMap(TableRowIcon.TableRowIcon, obj3);
    const tmp4Result6 = utils_ChannelUtils;
    obj2.label = useChannelName.computeChannelName(parent_id, UserStore, RelationshipStore);
    obj2.onPress = function onPress() {
      return self.handleChannelSelect(parent_id.id);
    };
    let channelName = null;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp4Result8 = useChannelName;
    }
    obj2.subLabel = channelName;
    let tmp10Result;
    if (null != stringResult) {
      const obj4 = { text: stringResult };
      tmp10Result = dependencyMap(TableRow.TableRow.TrailingText, obj4);
    }
    obj2.trailing = tmp10Result;
    return dependencyMap(TableRow.TableRow, obj2, parent_id.id);
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
  const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
  if (hasItem) {
    const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
    obj.children = dependencyMap(Stack_Stack.Stack, obj2);
    let tmp4Result = dependencyMap(Form, obj);
  } else {
    const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: null };
    const items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
    obj3.children = items;
    obj.children = __initData5(Stack_Stack.Stack, obj3);
    tmp4Result = dependencyMap(Form, obj);
  }
  return tmp4Result;
};
prototype["getOverriddenChannels"] = function getOverriddenChannels() {
  const props = this.props;
  const channels = props.channels;
  const set = new Set(notifications_NotificationUtils.filterOverrides(props.channelOverrides, { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem }));
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
NotificationSettings.contextType = fn(4537).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  const items = [NotificationSettingsModalStore];
  let stateFromStores = initialize.useStateFromStores(items, () => props.getProps().guildId);
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = { headerLeft: NavigatorHeader.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close), title: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.h850Ss);
    obj2.render = function render(guildId) {
      return closure_1_26(closure_1_31, { guildId: guildId.guildId });
    };
    obj[constants.OVERVIEW] = obj2;
    const obj4 = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t.s7vIQT);
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render(guildId, navigation) {
      return closure_1_26(closure_1_1(17587), { guildId: guildId.guildId, navigation });
    };
    obj[constants.ADD_OVERRIDE] = obj4;
    const obj6 = { headerLeft: null, title: null, render: null };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton();
    const intl3 = util.intl;
    obj6.title = intl3.string(util.t.h850Ss);
    obj6.render = function render(channelId) {
      return closure_1_26(closure_1_1(9588), { channelId: channelId.channelId, inGuildContext: true });
    };
    obj[constants.CHANNEL_OVERRIDE] = obj6;
    return obj;
  }, []);
  let obj2 = { screens: memo, initialRouteStack: null };
  let obj3 = { name: constants3.OVERVIEW, params: null };
  if (stateFromStores == null) {
    stateFromStores = closure_1_25;
  }
  obj3.params = { guildId: stateFromStores };
  const items1 = [obj3];
  obj2.initialRouteStack = items1;
  return dependencyMap(Navigator.Navigator, obj2);
};
export { NotificationSettings };