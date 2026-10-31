// discord_app/modules/notification_settings/native/NotificationSettingsModal.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import MuteTimers from "../../../lib/MuteTimers.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRadioGroup from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Navigator from "../../../design/components/Navigator/native/Navigator.native.tsx";
import getFlattedChannelListDefault from "../../channel/getFlattedChannelList.tsx";
import NotificationSettingsUtils from "../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../actions/NotificationSettingsModalActionCreators.tsx";
import TableSwitchRow from "../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import Form2 from "../../../design/void/Form/native/index.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import notificationSettingsFlagUtils from "../../notifications/settings/utils/notificationSettingsFlagUtils.tsx";
import MutedUntilTextDefault from "../../main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx";
import notifications_NotificationUtils from "../../notifications/NotificationUtils.tsx";
import PlusMediumIcon from "../../../design/components/Icon/native/redesign/generated/PlusMediumIcon.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../../stores/GuildCategoryStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import NotificationSettingsModalStore from "../../../stores/NotificationSettingsModalStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function ConnectedNotificationSettings(guildId) {
  guildId = guildId.guildId;
  let memo;
  let shouldUseNewNotificationSystem;
  const navigation = guildId(1497).useNavigation();
  let obj = guildId(1497);
  const items = [UserGuildSettingsStore, GuildStore, GuildCategoryStore, GuildMemberCountStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items, () => ({
    guild: GuildStore.getGuild(guildId),
    suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId),
    suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(guildId),
    mobilePush: UserGuildSettingsStore.isMobilePushEnabled(guildId),
    muteEvents: UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId),
    muted: UserGuildSettingsStore.isMuted(guildId),
    muteConfig: UserGuildSettingsStore.getMuteConfig(guildId),
    messageNotifications: UserGuildSettingsStore.getMessageNotifications(guildId),
    unreadSetting: UserGuildSettingsStore.getGuildUnreadSetting(guildId),
    channelOverrides: UserGuildSettingsStore.getChannelOverrides(guildId),
    categories: GuildCategoryStore.getCategories(guildId),
    guildMemberCount: GuildMemberCountStore.getMemberCount(guildId),
    notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId),
  }));
  const categories = stateFromStoresObject.categories;
  const tmp3 = shouldUseNewNotificationSystem(stateFromStoresObject, memo);
  dependencyMap = tmp3;
  const items1 = [categories];
  memo = noop.useMemo(
    () =>
      getFlattedChannelListDefault(categories._categories, categories, (channel) => {
        const type = channel.channel.type;
        let tmp = closure_1_8(type);
        if (!tmp) {
          tmp = type === constants.GUILD_CATEGORY;
        }
        return tmp;
      }),
    items1,
  );
  const obj2 = guildId(504);
  shouldUseNewNotificationSystem = guildId(11075).useShouldUseNewNotificationSystem("NotificationSettingsModalNative");
  const obj3 = guildId(11075);
  const items2 = [UserGuildSettingsStore];
  const items3 = [shouldUseNewNotificationSystem, memo, tmp3.channelOverrides];
  const obj5 = { children: null };
  const obj4 = guildId(504);
  const merged = Object.assign(tmp3);
  const items4 = [
    closure_29(NotificationSettings, {
      guildId,
      channels: memo,
      channelNotificationOptions: guildId(504).useStateFromStoresObject(
        items2,
        () => {
          const obj = {};
          if (shouldUseNewNotificationSystem) {
            const iter = memo[Symbol.iterator]();
            while (iter !== undefined) {
              let channel = iter.next().channel;
              let tmp6 = channel;
              if (null != channelOverrides.channelOverrides[channel.id]) {
                if (set.has(tmp6.type)) {
                  let result = UserGuildSettingsStore.resolvedMessageNotifications(tmp6);
                  if (result !== constants2.ONLY_MENTIONS) {
                    obj[tmp13] = result;
                  }
                }
              }
              continue;
            }
          }
          return obj;
        },
        items3,
      ),
      navigation,
      shouldUseNewNotificationSystem,
    }),
    closure_29(guildId(5606).NavScrim, {}),
  ];
  obj5.children = items4;
  return closure_30(closure_31, obj5);
}
let closure_3 = ["categories"];
const View = fn(17).View;
const ChannelRecord = fn(4867);
({ CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: closure_7, isGuildReadableType: closure_8 } = ChannelRecord);
const Constants = fn(1072);
({
  AnalyticEvents: closure_17,
  UserNotificationSettings: closure_18,
  ChannelTypes: closure_19,
  NotificationSettingsSections: closure_20,
  SettingsPaneTypes: closure_21,
  MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_22,
  GuildFeatures: closure_23,
  HighlightSettings: closure_24,
  HelpdeskArticles: closure_25,
  EMPTY_STRING_SNOWFLAKE_ID: closure_26,
} = Constants);
const UnreadSetting = fn(6776).UnreadSetting;
let closure_28 = fn(1082).GuildNotificationSettingsFlags;
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = jsxProd);
const hybrid = "hybrid";
const createStyles = fn(5014);
let obj2 = {
  highlightsLearnMore: { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 },
  formStack: null,
};
let obj3 = { fontSize: 12, color: nativeDefault.unsafe_rawColors.BLUE_345, marginTop: 4 };
obj2.formStack = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_33 = createStyles.createLegacyClassComponentStyles(obj2);
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
        const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
          guildId,
          obj,
          NotificationLabel.muted(!muted),
        );
        const tmpResult = NotificationSettingsModalActionCreatorsDefault;
      } else {
        const _HermesInternal = HermesInternal;
        const tmpResult2 = ActionSheetActionCreatorsDefault;
        const obj2 = { guildId };
        tmpResult2.openLazy(asyncRequireImpl(11070, dependencyMap.paths), "muteSettings" + guildId, obj2);
        const tmp7 = asyncRequireImpl(11070, dependencyMap.paths);
      }
    };
    applyArgumentsResult.handleToggleChange = function handleToggleChange(mobile_push, arg1, NotificationLabel) {
      const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
        applyArgumentsResult.props.guildId,
        { [mobile_push]: arg1 },
        NotificationLabel,
      );
    };
    applyArgumentsResult.handleTypeChange = function handleTypeChange(ONLY_MENTIONS) {
      const props = applyArgumentsResult.props;
      const guildId = props.guildId;
      if (ONLY_MENTIONS === hybrid) {
        ONLY_MENTIONS = constants2.ONLY_MENTIONS;
      }
      if (ONLY_MENTIONS !== hybrid) {
        if (ONLY_MENTIONS !== constants2.ALL_MESSAGES) {
          let UNREADS_ALL_MESSAGES = constants.UNREADS_ONLY_MENTIONS;
        }
        const obj2 = { message_notifications: ONLY_MENTIONS };
        if (props.shouldUseNewNotificationSystem) {
          const obj3 = {
            flags: notificationSettingsFlagUtils.withGuildUnreadFlags(
              UserGuildSettingsStore.getGuildFlags(guildId),
              UNREADS_ALL_MESSAGES,
            ),
          };
          let obj4 = obj3;
        } else {
          obj4 = {};
        }
        const merged = Object.assign(obj4);
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
          guildId,
          obj2,
          NotificationLabel.notifications(ONLY_MENTIONS),
        );
      }
      UNREADS_ALL_MESSAGES = constants.UNREADS_ALL_MESSAGES;
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
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    destination_pane: constants4.GUILD_NOTIFICATION_SETTINGS,
  });
};
prototype["renderServerSettings"] = function renderServerSettings() {
  ({ messageNotifications, muted, guildMemberCount, shouldUseNewNotificationSystem } = this.props);
  let tmp2 = messageNotifications;
  if (shouldUseNewNotificationSystem) {
    tmp2 = messageNotifications;
    if (messageNotifications === constants2.ONLY_MENTIONS) {
      tmp2 = messageNotifications;
      if (tmp === UnreadSetting.ALL_MESSAGES) {
        tmp2 = hybrid;
      }
    }
  }
  const obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.lprV7V);
  obj.value = tmp2;
  obj.onChange = this.handleTypeChange;
  const obj2 = { label: null, disabled: null, value: null, subLabel: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["n/bTaY"]);
  obj2.disabled = muted;
  obj2.value = constants2.ALL_MESSAGES;
  let stringResult = null;
  if (null != guildMemberCount) {
    stringResult = null;
    if (guildMemberCount >= __initData2) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.Dh5p5j);
    }
  }
  obj2.subLabel = stringResult;
  const items = [__initData7(TableRadioRow.TableRadioRow, obj2), , ,];
  if (shouldUseNewNotificationSystem) {
    const obj3 = { label: null, value: null, disabled: null };
    const intl4 = util.intl;
    obj3.label = intl4.string(util.t.JzbSEY);
    obj3.value = hybrid;
    obj3.disabled = muted;
    const items1 = [__initData7(TableRadioRow.TableRadioRow, obj3, hybrid)];
    let items2 = items1;
  } else {
    items2 = [];
  }
  items[1] = items2;
  const obj4 = { label: null, value: null, disabled: null };
  const intl5 = util.intl;
  obj4.label = intl5.format(util.t.L2hmYy, {});
  obj4.value = constants2.ONLY_MENTIONS;
  obj4.disabled = muted;
  items[2] = __initData7(TableRadioRow.TableRadioRow, obj4);
  const obj5 = { label: null, value: null, disabled: null };
  const intl6 = util.intl;
  obj5.label = intl6.string(util.t.CtVGyQ);
  obj5.value = constants2.NO_MESSAGES;
  obj5.disabled = muted;
  items[3] = __initData7(TableRadioRow.TableRadioRow, obj5);
  obj.children = items;
  return __initData8(TableRadioGroup.TableRadioGroup, obj);
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
  const items = [closure_29(TableSwitchRow.TableSwitchRow, obj), ,];
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
  items[1] = closure_29(TableSwitchRow.TableSwitchRow, obj2);
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
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(
      closure_1_0,
      { notify_highlights: arg0 ? constants6.DISABLED : constants6.ENABLED },
      NotificationLabel.highlights(!arg0),
    );
    const obj2 = { notify_highlights: arg0 ? constants6.DISABLED : constants6.ENABLED };
  };
  items[2] = closure_29(TableSwitchRow.TableSwitchRow, obj3);
  obj5.children = items;
  const items1 = [closure_30(TableRowGroup.TableRowGroup, obj5), ,];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: { marginTop: 8 }, children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["Vw/Xn8"]);
  items1[1] = closure_29(Text_Text.Text, obj6);
  const obj7 = {
    style: closure_33(this.context).highlightsLearnMore,
    accessibilityRole: "link",
    onPress() {
      const obj = self(5709);
      return obj.openURL(self(2061).getArticleURL(constants.HIGHLIGHTS));
    },
    children: null,
  };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t.PRBn9K);
  items1[2] = closure_29(native.LegacyText, obj7);
  obj4.children = items1;
  const items2 = [closure_30(View, obj4)];
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
  const items3 = [closure_29(TableSwitchRow.TableSwitchRow, obj8)];
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
  items3[1] = closure_29(TableSwitchRow.TableSwitchRow, obj9);
  obj11.children = items3;
  items2[1] = closure_30(TableRowGroup.TableRowGroup, obj11);
  obj10.children = items2;
  return closure_30(closure_31, obj10);
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const props = this.props;
  ({ muted, guild } = props);
  const intl = util.intl;
  const format = intl.format;
  const t = util.t;
  if (muted) {
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj2 = { name };
    let formatResult = format(t.e8hzDQ, obj2);
    let tmp6 = require;
  } else {
    let name1;
    if (guild != null) {
      name1 = guild.name;
    }
    const obj = { name: name1 };
    formatResult = format(t["J+7D9E"], obj);
    tmp6 = require;
  }
  const obj3 = { helperText: null, hasIcons: false, children: null };
  const intl2 = tmp6(1113).intl;
  obj3.helperText = intl2.string(tmp6(1113).t["8wbTQ6"]);
  obj3.children = __initData7(tmp6(6975).TableRow, {
    label: formatResult,
    onPress: this.handleMutePress,
    arrow: !muted,
  });
  const items = [__initData7(tmp6(7060).TableRowGroup, obj3, "mute")];
  let tmp10Result = null;
  if (muted) {
    const obj5 = { muteConfig: props.muteConfig, type: tmp6(11074).MuteSettingType.SERVER };
    tmp10Result = __initData7(MutedUntilTextDefault, obj5, "muted-until");
  }
  items[1] = tmp10Result;
  return items;
};
prototype["renderChannels"] = function renderChannels() {
  const self = this;
  const obj = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.O4TIvi);
  const obj2 = {
    icon: __initData7(TableRowIcon.TableRowIcon, { IconComponent: PlusMediumIcon.PlusMediumIcon }),
    label: null,
    onPress: null,
  };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.quib7R);
  obj2.onPress = this.handleAddOverride;
  obj.children = __initData7(TableRow.TableRow, obj2);
  const items = [__initData7(TableRowGroup.TableRowGroup, obj, "override-header")];
  const obj4 = { hasIcons: true, children: null };
  const overriddenChannels = this.getOverriddenChannels();
  obj4.children = overriddenChannels.map((item) => self.renderChannel(item));
  items[1] = __initData7(TableRowGroup.TableRowGroup, obj4, "override-channels");
  return items;
};
prototype["renderChannel"] = function renderChannel(parent_id) {
  const self = this;
  if (null != parent_id) {
    const props = this.props;
    let channel;
    if (null != parent_id.parent_id) {
      channel = ChannelStore.getChannel(parent_id.parent_id);
    }
    if (obj.computeIsMuted(props.channelOverrides[parent_id.id])) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.fpKdS1);
    } else {
      let message_notifications = props.channelNotificationOptions[parent_id.id];
      if (message_notifications == null) {
        message_notifications = tmp.message_notifications;
      }
      if (constants2.ALL_MESSAGES === message_notifications) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t["n/bTaY"]);
      } else if (hybrid === message_notifications) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.JzbSEY);
      } else if (constants2.ONLY_MENTIONS === message_notifications) {
        const intl = util.intl;
        stringResult = intl.string(util.t["6fQPhu"]);
      } else if (constants2.NO_MESSAGES === message_notifications) {
        const intl5 = util.intl;
        stringResult = intl5.string(util.t.CtVGyQ);
      }
    }
    const obj2 = { icon: null, label: null, onPress: null, subLabel: null, trailing: null, arrow: true };
    const obj3 = { IconComponent: null };
    obj = MuteTimers;
    obj3.IconComponent = utils_ChannelUtils.getChannelIconComponent(parent_id);
    obj2.icon = __initData7(TableRowIcon.TableRowIcon, obj3);
    const tmp4Result = utils_ChannelUtils;
    obj2.label = useChannelName.computeChannelName(parent_id, UserStore, RelationshipStore);
    obj2.onPress = function onPress() {
      return self.handleChannelSelect(parent_id.id);
    };
    let channelName = null;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp4Result4 = useChannelName;
    }
    obj2.subLabel = channelName;
    let tmp8Result;
    if (null != stringResult) {
      const obj4 = { text: stringResult };
      tmp8Result = __initData7(TableRow.TableRow.TrailingText, obj4);
    }
    obj2.trailing = tmp8Result;
    return __initData7(TableRow.TableRow, obj2, parent_id.id);
  }
};
prototype["render"] = function render() {
  const self = this;
  const guild = this.props.guild;
  const tmp = closure_33(this.context);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants5.HUB);
  }
  const Form = Form2.Form;
  const obj = { contentContainerStyle: { paddingTop: 16 }, children: null };
  if (hasItem) {
    const obj2 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: self.renderMuteSection() };
    obj.children = __initData7(Stack_Stack.Stack, obj2);
    let tmp4Result = __initData7(Form, obj);
  } else {
    const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.formStack, children: null };
    const items = [
      self.renderMuteSection(),
      self.renderServerSettings(),
      self.renderNotificationOptions(),
      self.renderChannels(),
    ];
    obj3.children = items;
    obj.children = __initData8(Stack_Stack.Stack, obj3);
    tmp4Result = __initData7(Form, obj);
  }
  return tmp4Result;
};
prototype["getOverriddenChannels"] = function getOverriddenChannels() {
  const props = this.props;
  const channels = props.channels;
  set = new Set(
    notifications_NotificationUtils.filterOverrides(props.channelOverrides, {
      ignoreNotificationSetting: false,
      ignoreMute: false,
      ignoreUnreadSetting: !this.props.shouldUseNewNotificationSystem,
    }),
  );
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
NotificationSettings.contextType = fn(5080).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingsModal.native.tsx");

export default function NotificationSettingsModal() {
  const items = [NotificationSettingsModalStore];
  let stateFromStores = initialize.useStateFromStores(items, () => props.getProps().guildId);
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(NotificationSettingsModalActionCreatorsDefault.close),
      title: null,
      render: null,
    };
    const intl = util.intl;
    obj2.title = intl.string(util.t.h850Ss);
    obj2.render = function render(guildId) {
      return closure_1_29(closure_1_35, { guildId: guildId.guildId });
    };
    obj[constants.OVERVIEW] = obj2;
    const obj4 = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t.s7vIQT);
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render(guildId, navigation) {
      return closure_1_29(closure_1_1(20002), { guildId: guildId.guildId, navigation });
    };
    obj[constants.ADD_OVERRIDE] = obj4;
    const obj6 = { headerLeft: null, title: null, render: null };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton();
    const intl3 = util.intl;
    obj6.title = intl3.string(util.t.h850Ss);
    obj6.render = function render(channelId) {
      return closure_1_29(closure_1_1(11068), { channelId: channelId.channelId });
    };
    obj[constants.CHANNEL_OVERRIDE] = obj6;
    return obj;
  }, []);
  let obj2 = { screens: memo, initialRouteStack: null };
  let obj3 = { name: constants3.OVERVIEW, params: null };
  if (stateFromStores == null) {
    stateFromStores = closure_1_26;
  }
  obj3.params = { guildId: stateFromStores };
  const items1 = [obj3];
  obj2.initialRouteStack = items1;
  return __initData7(Navigator.Navigator, obj2);
}
export { NotificationSettings };
