// === Module 17222: ConnectedNotificationSettings ===

// Module 17222 (ConnectedNotificationSettings)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4440 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4652 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5939 */;
import TableSwitchRow from "TableSwitchRow" /* 5940 */;
import NavigationStack from "NavigationStack" /* 5955 */;
import Form2 from "Form" /* 8185 */;
import TableRadioRow from "TableRadioRow" /* 8202 */;
import context from "context" /* 8203 */;
import MutedUntilTextDefault from "MutedUntilText" /* 10045 */;
import NotificationSettingsMuteBanner from "NotificationSettingsMuteBanner" /* 10050 */;
import NotificationSettingsPresets from "NotificationSettingsPresets" /* 10051 */;
import NotificationSettingsMessageNotification from "NotificationSettingsMessageNotification" /* 10055 */;
import NotificationSettingsMessageUnread from "NotificationSettingsMessageUnread" /* 10062 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isGuildReadableType } from "createChannelRecord" /* 1395 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import closure_9 from "setIndex" /* 5426 */;
import closure_10 from "handleInviteData" /* 4364 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "FormStates" /* 16937 */;
import closure_13 from "markAllUserIdListsStale" /* 4098 */;
import closure_14 from "updateUserGuildSettingsInternal" /* 4653 */;
import closure_15 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function ConnectedNotificationSettings(guildId) {
  guildId = guildId.guildId;
  let categories;
  let obj = guildId(1500);
  const navigation = obj.useNavigation();
  const items = [closure_14, closure_11, closure_9, closure_10];
  const stateFromStoresObject = guildId(589).useStateFromStoresObject(items, () => ({ guild: closure_1_11.getGuild(guildId), suppressEveryone: closure_1_14.isSuppressEveryoneEnabled(guildId), suppressRoles: closure_1_14.isSuppressRolesEnabled(guildId), mobilePush: closure_1_14.isMobilePushEnabled(guildId), muteEvents: closure_1_14.isMuteScheduledEventsEnabled(guildId), muted: closure_1_14.isMuted(guildId), muteConfig: closure_1_14.getMuteConfig(guildId), messageNotifications: closure_1_14.getMessageNotifications(guildId), channelOverrides: closure_1_14.getChannelOverrides(guildId), categories: closure_1_9.getCategories(guildId), guildMemberCount: closure_1_10.getMemberCount(guildId), notifyHighlights: closure_1_14.getNotifyHighlights(guildId) }));
  categories = stateFromStoresObject.categories;
  const obj2 = guildId(589);
  const items1 = [categories];
  const memo = importAllResult.useMemo(() => categories(closure_1_2[49])(categories._categories, categories, (channel) => {
    const type = channel.channel.type;
    let tmp = callback(type);
    if (!tmp) {
      tmp = type === constants.GUILD_CATEGORY;
    }
    return tmp;
  }), items1);
  const tmp3 = callback(stateFromStoresObject, closure_3);
  obj = { children: null };
  obj = { guildId, channels: memo, navigation, shouldUseNewNotificationSystem: guildId(10046).useShouldUseNewNotificationSystem("NotificationSettingsModalNative") };
  const merged = Object.assign(tmp3);
  const items2 = [callback2(NotificationSettings, obj), callback2(guildId(5886).NavScrim, {})];
  obj[0] = items2;
  return callback3(closure_28, obj);
}
let closure_3 = ["categories"];
let c5 = importAllResult;
({ AnalyticEvents: closure_16, UserNotificationSettings: closure_17, ChannelTypes: closure_18, NotificationSettingsSections: closure_19, SettingsPaneTypes: closure_20, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_21, GuildFeatures: closure_22, HighlightSettings: closure_23, HelpdeskArticles: closure_24, EMPTY_STRING_SNOWFLAKE_ID: closure_25 } = ME);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
createCacheKey = { highlightsLearnMore: null, separator: null, formStack: null };
createCacheKey = { fontSize: 12, color: ThemesDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let obj1 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_29 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class NotificationSettings extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleMutePress = function handleMutePress() {
      ({ guildId, muted } = applyArgumentsResult.props);
      if (muted) {
        let tmpResult = tmp(tmp2[21]);
        let obj = { muted: null };
        obj[0] = !muted;
        const NotificationLabel = applyArgumentsResult(closure_1_2[22]).NotificationLabel;
        const result = tmpResult.updateGuildNotificationSettings(guildId, obj, NotificationLabel.muted(!muted));
      } else {
        tmpResult = tmp(tmp2[18]);
        const _HermesInternal = HermesInternal;
        obj = { guildId: null };
        obj[0] = guildId;
        tmpResult.openLazy(applyArgumentsResult(closure_1_2[20])(closure_1_2[19], closure_1_2.paths), "muteSettings" + guildId, obj);
        const tmp7 = applyArgumentsResult(closure_1_2[20])(closure_1_2[19], closure_1_2.paths);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      let obj = closure_1_1(closure_1_2[21]);
      obj = { [mobile_push]: arg1 };
      const result = obj.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, obj, NotificationLabel);
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(message_notifications) {
      let obj = closure_1_1(closure_1_2[21]);
      obj = { message_notifications };
      const NotificationLabel = applyArgumentsResult(closure_1_2[22]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(applyArgumentsResult.props.guildId, obj, NotificationLabel.notifications(message_notifications));
    };
    applyArgumentsResult.handleAddOverride = function handleAddOverride() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(closure_1_19.ADD_OVERRIDE, { guildId: props.guildId });
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      const navigation = applyArgumentsResult.props.navigation;
      navigation.push(closure_1_19.CHANNEL_OVERRIDE, { channelId });
    };
    return applyArgumentsResult;
  }
}
const prototype = NotificationSettings.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { settings_type: "guild", destination_pane: constants4.GUILD_NOTIFICATION_SETTINGS };
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
    obj1 = { guildId: null };
    obj1[0] = self.props.guildId;
    const items = [callback2(NotificationSettingsPresets.NotificationSettingsGuildPresets, obj1), , ];
    const obj2 = { style: null, guildId: null };
    obj2[0] = { marginTop: 24 };
    obj2[1] = self.props.guildId;
    items[1] = callback2(NotificationSettingsMessageNotification.NotificationSettingsGuildMessageNotification, obj2);
    const obj3 = { style: null, guildId: null };
    obj3[0] = { marginTop: 24 };
    obj3[1] = self.props.guildId;
    items[2] = callback2(NotificationSettingsMessageUnread.NotificationSettingsGuildMessageUnread, obj3);
    obj[0] = items;
    const items1 = [tmp2(View, obj), ];
    const obj4 = { style: null };
    obj4[0] = tmp.separator;
    items1[1] = callback2(View, obj4);
    obj[0] = items1;
    let tmp2Result = tmp2(closure_28, obj);
  } else {
    obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.lprV7V);
    obj[1] = messageNotifications;
    obj[2] = self.handleTypeChange;
    const obj5 = { label: null, disabled: null, value: null, subLabel: null };
    const intl2 = getSystemLocale.intl;
    obj5[0] = intl2.string(getSystemLocale.t["n/bTaY"]);
    obj5[1] = muted;
    obj5[2] = constants2.ALL_MESSAGES;
    let stringResult = null;
    if (null != guildMemberCount) {
      stringResult = null;
      if (guildMemberCount >= closure_21) {
        const intl3 = tmp3(1236).intl;
        stringResult = intl3.string(tmp3(1236).t.Dh5p5j);
      }
    }
    obj5[3] = stringResult;
    const items2 = [callback2(TableRadioRow.TableRadioRow, obj5), , ];
    const obj6 = { label: null, value: null, disabled: null };
    const intl4 = tmp3(1236).intl;
    obj6[0] = intl4.format(getSystemLocale.t.L2hmYy, {});
    obj6[1] = constants2.ONLY_MENTIONS;
    obj6[2] = muted;
    items2[1] = callback2(TableRadioRow.TableRadioRow, obj6);
    const obj7 = { label: null, value: null, disabled: null };
    const intl5 = tmp3(1236).intl;
    obj7[0] = intl5.string(getSystemLocale.t.CtVGyQ);
    obj7[1] = constants2.NO_MESSAGES;
    obj7[2] = muted;
    items2[2] = callback2(TableRadioRow.TableRadioRow, obj7);
    obj[4] = items2;
    tmp2Result = tmp2(context.TableRadioGroup, obj);
  }
  return tmp2Result;
};
prototype["renderNotificationOptions"] = function renderNotificationOptions() {
  const self = this;
  const props = this.props;
  ({ muted, suppressEveryone, suppressRoles, mobilePush, muteEvents, guildId: require } = props);
  let obj = { label: null, value: null, onValueChange: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.format(getSystemLocale.t.OWiWAp, {});
  if (suppressEveryone == null) {
    suppressEveryone = false;
  }
  obj[1] = suppressEveryone;
  obj[2] = function onValueChange(arg0) {
    const NotificationLabel = closure_1_0(closure_1_2[22]).NotificationLabel;
    self.handleToggleChange("suppress_everyone", arg0, NotificationLabel.suppressEveryone(arg0));
  };
  const items = [closure_26(TableSwitchRow.TableSwitchRow, obj), , ];
  obj = { label: null, value: null, onValueChange: null };
  const intl2 = tmp5(1236).intl;
  obj[0] = intl2.string(getSystemLocale.t["O/QdoD"]);
  if (suppressRoles == null) {
    suppressRoles = false;
  }
  obj[1] = suppressRoles;
  obj[2] = function onValueChange(arg0) {
    const NotificationLabel = closure_1_0(closure_1_2[22]).NotificationLabel;
    self.handleToggleChange("suppress_roles", arg0, NotificationLabel.suppressRoles(arg0));
  };
  items[1] = closure_26(TableSwitchRow.TableSwitchRow, obj);
  obj = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl3 = tmp5(1236).intl;
  obj[1] = intl3.string(getSystemLocale.t.gPuteJ);
  let tmp8 = muted;
  if (!muted) {
    tmp8 = props.notifyHighlights === constants6.DISABLED;
  }
  obj1 = { children: null };
  const obj2 = { hasIcons: false, children: null };
  obj[2] = tmp8;
  obj[3] = function onValueChange(arg0) {
    let obj = self(closure_1_2[21]);
    obj = { notify_highlights: arg0 ? tmp3.DISABLED : tmp3.ENABLED };
    const NotificationLabel = closure_1_0(closure_1_2[22]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(closure_0, obj, NotificationLabel.highlights(!arg0));
  };
  items[2] = closure_26(TableSwitchRow.TableSwitchRow, obj);
  obj2[1] = items;
  const items1 = [closure_27(TableRowGroupTitle.TableRowGroup, obj2), , ];
  const obj3 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: null };
  const intl4 = tmp5(1236).intl;
  obj3[3] = intl4.string(getSystemLocale.t["Vw/Xn8"]);
  items1[1] = closure_26(Text.Text, obj3);
  const obj4 = {
    style: callback4(this.context).highlightsLearnMore,
    accessibilityRole: "link",
    onPress() {
      const obj = self(4158);
      return obj.openURL(self(1995).getArticleURL(constants.HIGHLIGHTS));
    },
    children: null
  };
  const intl5 = tmp5(1236).intl;
  obj4[3] = intl5.string(getSystemLocale.t.PRBn9K);
  items1[2] = closure_26(Button.LegacyText, obj4);
  obj1[0] = items1;
  const items2 = [closure_27(View, obj1), ];
  const obj5 = { label: null, value: null, onValueChange: null };
  const intl6 = tmp5(1236).intl;
  obj5[0] = intl6.string(getSystemLocale.t.ONG3Yz);
  if (muteEvents == null) {
    muteEvents = false;
  }
  obj5[1] = muteEvents;
  obj5[2] = function onValueChange(arg0) {
    const NotificationLabel = closure_1_0(closure_1_2[22]).NotificationLabel;
    self.handleToggleChange("mute_scheduled_events", arg0, NotificationLabel.mutedEvents(arg0));
  };
  const items3 = [closure_26(TableSwitchRow.TableSwitchRow, obj5), ];
  const obj6 = { disabled: muted, label: null, value: null, onValueChange: null };
  const intl7 = tmp5(1236).intl;
  obj6[1] = intl7.string(getSystemLocale.t.h1DL66);
  let tmp10 = !muted;
  if (!muted) {
    if (mobilePush == null) {
      mobilePush = false;
    }
    tmp10 = mobilePush;
  }
  const obj7 = { children: null };
  const obj8 = { hasIcons: false, children: null };
  obj6[2] = tmp10;
  obj6[3] = function onValueChange(arg0) {
    const NotificationLabel = closure_1_0(closure_1_2[22]).NotificationLabel;
    self.handleToggleChange("mobile_push", arg0, NotificationLabel.mobilePush(arg0));
  };
  items3[1] = closure_26(TableSwitchRow.TableSwitchRow, obj6);
  obj8[1] = items3;
  items2[1] = closure_27(TableRowGroupTitle.TableRowGroup, obj8);
  obj7[0] = items2;
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
      const intl3 = getSystemLocale.intl;
      obj[0] = intl3.string(getSystemLocale.t.ZSkXJY);
      obj[1] = NotificationSettingsMuteBanner.getMuteBannerSubtitleFromConfig(muteConfig);
      obj[2] = { marginBottom: 16 };
      obj[3] = self.handleMutePress;
      tmp15 = callback2(NotificationSettingsMuteBanner.NotificationSettingsMuteBanner, obj);
      const obj7 = NotificationSettingsMuteBanner;
    }
    return tmp15;
  } else {
    const intl = getSystemLocale.intl;
    const format = intl.format;
    const t = getSystemLocale.t;
    if (muted) {
      let name;
      if (guild != null) {
        name = guild.name;
      }
      obj = { name: null };
      obj[0] = name;
      let formatResult = format(t.e8hzDQ, obj);
      let tmp7 = tmp;
    } else {
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      obj = { name: null };
      obj[0] = name1;
      formatResult = format(t["J+7D9E"], obj);
      tmp7 = tmp;
    }
    obj1 = { helperText: null, hasIcons: false, children: null };
    const intl2 = tmp7(1236).intl;
    obj1[0] = intl2.string(tmp7(1236).t["8wbTQ6"]);
    const obj2 = { label: null, onPress: null, arrow: null };
    obj2[0] = formatResult;
    obj2[1] = self.handleMutePress;
    obj2[2] = !muted;
    obj1[2] = callback2(tmp7(5546).TableRow, obj2);
    const items = [callback2(tmp7(5939).TableRowGroup, obj1, "mute"), ];
    let tmp10Result = null;
    if (muted) {
      const obj3 = { muteConfig: null, type: null };
      obj3[0] = muteConfig;
      obj3[1] = tmp7(10045).MuteSettingType.SERVER;
      tmp10Result = callback2(MutedUntilTextDefault, obj3, "muted-until");
      const tmp14 = MutedUntilTextDefault;
    }
    items[1] = tmp10Result;
    return items;
  }
};
prototype["renderChannels"] = function renderChannels() {
  const self = this;
  let obj = { title: null, hasIcons: true, children: null };
  const intl = self(1236).intl;
  obj[0] = intl.string(self(1236).t.O4TIvi);
  obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: self(12381).PlusMediumIcon };
  obj[0] = callback2(self(5552).TableRowIcon, obj);
  const intl2 = self(1236).intl;
  obj[1] = intl2.string(self(1236).t.quib7R);
  obj[2] = this.handleAddOverride;
  obj[2] = callback2(self(5546).TableRow, obj);
  const items = [callback2(self(5939).TableRowGroup, obj, "override-header"), ];
  obj1 = { hasIcons: true, children: null };
  const overriddenChannels = this.getOverriddenChannels();
  obj1[1] = overriddenChannels.map((parent_id) => self.renderChannel(parent_id));
  items[1] = callback2(self(5939).TableRowGroup, obj1, "override-channels");
  return items;
};
prototype["renderChannel"] = function renderChannel(parent_id) {
  let self = this;
  self = this;
  const _require = parent_id;
  if (null != parent_id) {
    let channel;
    if (null != parent_id.parent_id) {
      channel = channel.getChannel(parent_id.parent_id);
    }
    let obj = _require(4092);
    if (obj.computeIsMuted(self.props.channelOverrides[parent_id.id])) {
      const intl3 = tmp4(1236).intl;
      let stringResult = intl3.string(tmp4(1236).t.fpKdS1);
    } else {
      const message_notifications = tmp.message_notifications;
      if (constants2.ALL_MESSAGES === message_notifications) {
        const intl2 = tmp4(1236).intl;
        stringResult = intl2.string(tmp4(1236).t["n/bTaY"]);
      } else if (tmp6.ONLY_MENTIONS === message_notifications) {
        const intl = tmp4(1236).intl;
        stringResult = intl.string(tmp4(1236).t["6fQPhu"]);
      } else if (tmp6.NO_MESSAGES === message_notifications) {
        const intl4 = tmp4(1236).intl;
        stringResult = intl4.string(tmp4(1236).t.CtVGyQ);
      }
    }
    if (self.props.shouldUseNewNotificationSystem) {
      let tmp4Result = tmp4(4656);
      tmp4Result = tmp4(4656);
      const unreadSetting = closure_14.resolveUnreadSetting(parent_id);
      stringResult = tmp4Result.presetName(tmp4Result.presetFromSettings(unreadSetting, closure_14.resolvedMessageNotifications(parent_id)));
    }
    obj = { icon: null, label: null, onPress: null, subLabel: null, trailing: null, arrow: true };
    obj = { IconComponent: null };
    obj[0] = _require(4932).getChannelIconComponent(parent_id);
    obj[0] = callback2(_require(5552).TableRowIcon, obj);
    const tmp4Result1 = _require(4932);
    obj[1] = _require(4638).computeChannelName(parent_id, closure_15, closure_13);
    obj[2] = function onPress() {
      return self.handleChannelSelect(parent_id.id);
    };
    let channelName = null;
    if (null != channel) {
      channelName = tmp4(4638).computeChannelName(channel, closure_15, closure_13);
      const tmp4Result3 = tmp4(4638);
    }
    obj[3] = channelName;
    let tmp10Result;
    if (null != stringResult) {
      obj1 = { text: null };
      obj1[0] = stringResult;
      tmp10Result = tmp10(tmp4(5546).TableRow.TrailingText, obj1);
    }
    obj[4] = tmp10Result;
    return callback2(_require(5546).TableRow, obj, parent_id.id);
  }
};
prototype["render"] = function render() {
  const self = this;
  const guild = this.props.guild;
  const tmp = callback4(this.context);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants5.HUB);
  }
  const Form = Form2.Form;
  let obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
  if (hasItem) {
    obj = { spacing: null, style: null, children: null };
    obj[0] = ThemesDefault.space.PX_24;
    obj[1] = tmp.formStack;
    obj[2] = self.renderMuteSection();
    obj[1] = tmp4(tmp5(4877).Stack, obj);
    let tmp4Result = tmp4(Form, obj);
  } else {
    obj = { spacing: null, style: null, children: null };
    obj[0] = ThemesDefault.space.PX_24;
    obj[1] = tmp.formStack;
    const items = [self.renderMuteSection(), self.renderServerSettings(), self.renderNotificationOptions(), self.renderChannels()];
    obj[2] = items;
    obj[1] = callback3(tmp5(4877).Stack, obj);
    tmp4Result = tmp4(Form, obj);
  }
  return tmp4Result;
};
prototype["getOverriddenChannels"] = function getOverriddenChannels() {
  const props = this.props;
  const channels = props.channels;
  let obj = set(10046);
  obj = { ignoreNotificationSetting: false, ignoreMute: this.props.shouldUseNewNotificationSystem, ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem };
  set = new Set(obj.filterOverrides(props.channelOverrides, obj));
  const mapped = channels.map((channel) => {
    channel = channel.channel;
    let tmp = null;
    if (set.has(channel.id)) {
      tmp = channel;
    }
    return tmp;
  });
  return mapped.filter((arg0) => null != arg0);
};
NotificationSettings.contextType = require("ManaContext").ThemeContext;
let obj2 = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let result = require("set").fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  let obj = initialize;
  const items = [closure_12];
  let stateFromStores = obj.useStateFromStores(items, () => props.getProps().guildId);
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    obj = { headerLeft: callback(5442).getHeaderCloseButton(callback2(5434).close), title: null, render: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.h850Ss);
    obj[2] = function render(guildId) {
      return callback2(closure_31, { guildId: guildId.guildId });
    };
    obj[constants.OVERVIEW] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = callback(1236).intl;
    obj[0] = intl2.string(callback(1236).t.s7vIQT);
    const obj3 = callback(5442);
    obj[1] = callback(5442).getHeaderBackButton();
    obj[2] = function render(guildId, navigation) {
      return callback2(callback(17223), { guildId: guildId.guildId, navigation });
    };
    obj[constants.ADD_OVERRIDE] = obj;
    obj1 = { headerLeft: null, title: null, render: null };
    const obj5 = callback(5442);
    obj1[0] = callback(5442).getHeaderBackButton();
    const intl3 = callback(1236).intl;
    obj1[1] = intl3.string(callback(1236).t.h850Ss);
    obj1[2] = function render(channelId) {
      return callback2(callback(10040), { channelId: channelId.channelId, inGuildContext: true });
    };
    obj[constants.CHANNEL_OVERRIDE] = obj1;
    return obj;
  }, []);
  obj = { screens: memo, initialRouteStack: null };
  obj = { name: constants3.OVERVIEW, params: null };
  if (stateFromStores == null) {
    stateFromStores = closure_25;
  }
  obj[1] = { guildId: stateFromStores };
  const items1 = [obj];
  obj[1] = items1;
  return closure_26(NavigationStack.Navigator, obj);
};
export { NotificationSettings };