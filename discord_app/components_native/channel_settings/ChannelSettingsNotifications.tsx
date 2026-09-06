// discord_app/components_native/channel_settings/ChannelSettingsNotifications.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import TableSwitchRow from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import MutedUntilTextDefault from "../../modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx";
import NotificationSettingsChannelDefault from "../../modules/notifications/settings/native/NotificationSettingsChannel.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  let obj = onClose(stateFromStores[29]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guildId;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  let tmpResult = tmp(tmp2[29]);
  const items1 = [UserGuildSettingsStore];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = tmp.parent_id;
    }
    if (null != parent_id) {
      let NULL = UserGuildSettingsStore.getChannelMessageNotifications(guildId, tmp.parent_id);
    } else {
      NULL = constants2.NULL;
    }
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== constants2.NULL) {
      tmp8 = NULL;
    }
    const obj = {
      messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId),
      muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId),
      muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId),
      guildMuted: UserGuildSettingsStore.isMuted(guildId),
      guildMessageNotifications: messageNotifications,
      newForumThreadsCreated: null,
      defaultSetting: null,
    };
    let newForumThreadsCreated = null != tmp;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = UserGuildSettingsStore.getNewForumThreadsCreated(tmp);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    return obj;
  });
  tmpResult = tmp(tmp2[29]);
  const items2 = [GuildMemberCountStore];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { onClose, channel: stateFromStores };
    const merged = Object.assign(stateFromStoresObject);
    obj.guildMemberCount = stateFromStores1;
    tmp7 = closure_16(ChannelSettingsNotifications, obj);
  }
  return tmp7;
}
const ChannelRecord = fn(1961);
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
const Constants = fn(1074);
({
  AnalyticEvents: closure_11,
  UserNotificationSettings: closure_12,
  ChannelTypes: map1,
  SettingsPaneTypes: closure_14,
  MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = { screenContainer: null, stackPadding: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingTop: nativeDefault.space.PX_16,
};
createStyles.screenContainer = createStyles;
createStyles.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_19 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(arg0) {
    tmp2 = new ChannelSettingsNotifications(global, new.target, tmp);
    closure_0 = tmp2;
    tmp2.radioGroupRef = closure_3.createRef();
    tmp2.updateSetting = function updateSetting(arg0, NotificationLabel) {
      ({ muted, messageNotifications, mute_config } = arg0);
      const channel = state.props.channel;
      const obj = {};
      let flag = false;
      if (undefined !== muted) {
        obj.muted = muted;
        if (mute_config == null) {
          mute_config = null;
        }
        obj.mute_config = mute_config;
        flag = true;
      }
      if (undefined !== messageNotifications) {
        obj.message_notifications = messageNotifications;
        flag = true;
      }
      if (flag) {
        const obj2 = NotificationSettingsModalActionCreatorsDefault;
        const result = obj2.updateChannelOverrideSettings(channel.getGuildId(), channel.id, obj, NotificationLabel);
      }
    };
    tmp2.handleToggleMuteChannel = function handleToggleMuteChannel() {
      let obj = muted;
      muted = muted.state.muted;
      const channel = muted.props.channel;
      if (muted) {
        obj = { muted: !muted };
        obj.setState(obj, () => {
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          return muted.updateSetting({ muted: !muted }, NotificationLabel.muted(!muted));
        });
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = require("ActionSheetActionCreators");
        obj = { guildId: null, channelId: null, onOptionPress: null };
        const combined = "muteSettings" + channel.id;
        obj.guildId = channel.getGuildId();
        obj.channelId = channel.id;
        obj.onOptionPress = function onOptionPress(muted) {
          const NotificationLabel = muted(paths[18]).NotificationLabel;
          return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
        };
        obj2.openLazy(state(paths[17])(paths[16], paths.paths), combined, obj);
        const tmp4 = state(paths[17])(paths[16], paths.paths);
      }
    };
    tmp2.handleTypeChange = function handleTypeChange(messageNotifications) {
      state = messageNotifications;
      state.setState({ messageNotifications }, () => {
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        return messageNotifications.updateSetting(
          { messageNotifications },
          NotificationLabel.notifications(messageNotifications),
        );
      });
    };
    tmp2.state = { messageNotifications: global.messageNotifications, muted: global.muted };
    return tmp2;
  }
}
const prototype = ChannelSettingsNotifications.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const obj = { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
prototype["componentDidUpdate"] = function componentDidUpdate(muted) {
  const self = this;
  if (muted.muted !== this.props.muted) {
    let obj = { muted: self.props.muted };
    self.setState(obj);
  }
  if (muted.messageNotifications !== self.props.messageNotifications) {
    obj = { messageNotifications: self.props.messageNotifications };
    self.setState(obj);
  }
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const props = this.props;
  const channel = props.channel;
  const muted = this.state.muted;
  let MuteSettingType = dependencyMap;
  let obj = useChannelName;
  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
  obj = { description: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj.description = intl.string(util.t["6yI+JS"]);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (muted) {
    obj = { name: channelName };
    let formatResult = format(t["eC+9rj"], obj);
  } else {
    const obj1 = { name: channelName };
    formatResult = format(t.byjuJm, obj1);
  }
  obj.children = value2(TableRow.TableRow, {
    label: formatResult,
    onPress: this.handleToggleMuteChannel,
    arrow: !muted,
  });
  const items = [value2(TableRowGroup.TableRowGroup, obj)];
  if (!muted) {
    const obj3 = { children: null };
    items[1] = null;
    obj3.children = items;
    return collapsedCategories(closure_1_17, obj3);
  } else {
    const obj4 = { muteConfig: props.muteConfig, type: null };
    if (channel.type === constants3.GUILD_CATEGORY) {
      MuteSettingType = tmp(10146).MuteSettingType;
      let CHANNEL = MuteSettingType.CATEGORY;
    } else {
      CHANNEL = tmp(10146).MuteSettingType.CHANNEL;
    }
    obj4.type = CHANNEL;
    tmp5(MutedUntilTextDefault, obj4);
  }
};
prototype["renderForumSettings"] = function renderForumSettings() {
  const props = this.props;
  ({ channel: require, newForumThreadsCreated } = props);
  let guildMuted = this.state.muted;
  const obj = { label: null, value: null, disabled: null, onValueChange: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.Rkgjph);
  obj.value = newForumThreadsCreated;
  if (!guildMuted) {
    guildMuted = props.guildMuted;
  }
  obj.disabled = guildMuted;
  obj.onValueChange = function onValueChange() {
    const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(
      _require,
      !newForumThreadsCreated,
    );
  };
  return closure_16(TableSwitchRow.TableSwitchRow, obj);
};
prototype["renderNotificationSettings"] = function renderNotificationSettings() {
  const self = this;
  ({ channel, guildMuted, guildMemberCount, defaultSetting } = this.props);
  const state = this.state;
  let muted = state.muted;
  if (null != channel.parent_id) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.wlrV1c);
    let tmp5 = require;
    let tmp7 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["1Wn2M4"]);
    tmp5 = require;
    tmp7 = require;
  }
  const TableRadioGroup = tmp7(5685).TableRadioGroup;
  let obj = {
    value: state.messageNotifications,
    onChange: self.handleTypeChange,
    groupRef: self.radioGroupRef,
    title: null,
    hasIcons: false,
    children: null,
  };
  const intl3 = tmp7(1114).intl;
  obj.title = intl3.string(tmp7(1114).t.h850Ss);
  const TableRadioRow = tmp7(5688).TableRadioRow;
  if (isGuildStageVoiceResult) {
    let tmp22 = muted;
    if (!muted) {
      tmp22 = guildMuted;
    }
    obj = { disabled: tmp22, label: stringResult, subLabel: null, value: null };
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl11 = tmp5(1114).intl;
      let stringResult1 = intl11.string(tmp5(1114).t["n/bTaY"]);
    } else if (tmp23.ONLY_MENTIONS === defaultSetting) {
      const intl10 = tmp5(1114).intl;
      stringResult1 = intl10.format(tmp5(1114).t.L2hmYy, {});
    } else if (tmp23.NO_MESSAGES === defaultSetting) {
      const intl15 = tmp5(1114).intl;
      stringResult1 = intl15.string(tmp5(1114).t.CtVGyQ);
    }
    obj.subLabel = stringResult1;
    obj.value = constants2.NULL;
    const items = [tmp12(TableRadioRow, obj), ,];
    let tmp25 = muted;
    if (!muted) {
      tmp25 = guildMuted;
    }
    obj = { disabled: tmp25, value: constants2.ONLY_MENTIONS, label: null };
    const intl12 = tmp7(1114).intl;
    obj.label = intl12.string(tmp7(1114).t["BENn/6"]);
    items[1] = tmp12(tmp7(5688).TableRadioRow, obj);
    if (!muted) {
      muted = guildMuted;
    }
    const obj1 = { disabled: muted, value: constants2.NO_MESSAGES, label: null };
    const intl13 = tmp7(1114).intl;
    obj1.label = intl13.string(tmp7(1114).t.CtVGyQ);
    items[2] = tmp12(tmp7(5688).TableRadioRow, obj1);
    obj.children = items;
    let tmp11Result = tmp11(TableRadioGroup, obj);
  } else {
    const obj2 = { label: stringResult, subLabel: null, disabled: null, value: null };
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl5 = tmp5(1114).intl;
      let stringResult2 = intl5.string(tmp5(1114).t["n/bTaY"]);
    } else if (tmp13.ONLY_MENTIONS === defaultSetting) {
      const intl4 = tmp5(1114).intl;
      stringResult2 = intl4.format(tmp5(1114).t.L2hmYy, {});
    } else if (tmp13.NO_MESSAGES === defaultSetting) {
      const intl14 = tmp5(1114).intl;
      stringResult2 = intl14.string(tmp5(1114).t.CtVGyQ);
    }
    obj2.subLabel = stringResult2;
    let tmp15 = muted;
    if (!muted) {
      tmp15 = guildMuted;
    }
    obj2.disabled = tmp15;
    obj2.value = constants2.NULL;
    const items1 = [tmp12(TableRadioRow, obj2), , ,];
    const obj3 = { label: null, disabled: null, subLabel: null, value: null };
    const intl6 = tmp7(1114).intl;
    obj3.label = intl6.string(tmp7(1114).t["n/bTaY"]);
    let tmp16 = muted;
    if (!muted) {
      tmp16 = guildMuted;
    }
    obj3.disabled = tmp16;
    let stringResult3 = null;
    if (null != guildMemberCount) {
      stringResult3 = null;
      if (guildMemberCount >= __initData) {
        const intl7 = tmp7(1114).intl;
        stringResult3 = intl7.string(tmp7(1114).t.Dh5p5j);
      }
    }
    obj3.subLabel = stringResult3;
    obj3.value = constants2.ALL_MESSAGES;
    items1[1] = tmp12(tmp7(5688).TableRadioRow, obj3);
    const obj4 = { label: null, disabled: null, value: null };
    const intl8 = tmp7(1114).intl;
    obj4.label = intl8.format(tmp7(1114).t.L2hmYy, {});
    let tmp19 = muted;
    if (!muted) {
      tmp19 = guildMuted;
    }
    obj4.disabled = tmp19;
    obj4.value = constants2.ONLY_MENTIONS;
    items1[2] = tmp12(tmp7(5688).TableRadioRow, obj4);
    const obj5 = { label: null, disabled: null, value: null };
    const intl9 = tmp7(1114).intl;
    obj5.label = intl9.string(tmp7(1114).t.CtVGyQ);
    let tmp20 = muted;
    if (!muted) {
      tmp20 = guildMuted;
    }
    obj5.disabled = tmp20;
    obj5.value = constants2.NO_MESSAGES;
    items1[3] = tmp12(tmp7(5688).TableRadioRow, obj5);
    obj.children = items1;
    tmp11Result = tmp11(TableRadioGroup, obj);
  }
  return tmp11Result;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_19(this.context);
  const props = this.props;
  const channel = props.channel;
  ({ guildMuted, guildMessageNotifications } = props);
  let tmp9Result = null;
  if (null != channel) {
    if (guildMuted) {
      let obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      obj = {
        mutedHook(children, arg1) {
          return closure_1_16(
            require("Text/Text").Text,
            { variant: "text-sm/medium", color: "text-feedback-critical", children },
            arg1,
          );
        },
      };
      obj.children = intl.format(util.t.O34r15, obj);
      let tmp5 = value2(Text_Text.Text, obj);
    } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl3 = util.intl;
      const obj1 = {
        notificationHook(children, arg1) {
          return closure_1_16(
            require("Text/Text").Text,
            { variant: "text-sm/medium", color: "text-feedback-warning", children },
            arg1,
          );
        },
      };
      obj.children = intl3.format(util.t.nRwUIL, obj1);
      tmp5 = value2(Text_Text.Text, obj);
    }
    const obj2 = { style: tmp.screenContainer, children: null };
    const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: null };
    let renderMuteSectionResult = null;
    if (tmp2) {
      renderMuteSectionResult = self.renderMuteSection();
    }
    const items = [renderMuteSectionResult, self.renderNotificationSettings(), ,];
    tmp9Result = null;
    if (channel.isForumLikeChannel()) {
      const obj4 = { title: null, hasIcons: false, children: null };
      const intl2 = tmp10(1114).intl;
      obj4.title = intl2.string(tmp10(1114).t.bK11jO);
      obj4.children = self.renderForumSettings();
      tmp9Result = tmp9(tmp10(5687).TableRowGroup, obj4);
    }
    items[2] = tmp9Result;
    items[3] = tmp5;
    obj3.children = items;
    obj2.children = collapsedCategories(Stack_Stack.Stack, obj3);
    tmp9Result = tmp9(Form.Form, obj2);
  }
  return tmp9Result;
};
ChannelSettingsNotifications.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let merged1 = arg0;
  _require = arg0;
  let obj = dependencyMap;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId.channelId),
  );
  require("notifications/NotificationUtils");
  if (null == stateFromStores) {
    return null;
  } else {
    if (!tmp4) {
      obj = {};
      const merged = Object.assign(merged1);
      let tmp11 = closure_16(ChannelSettingsNotificationsGuard, obj);
    }
    obj = { channel: stateFromStores };
    merged1 = Object.assign(merged1);
    tmp11 = closure_16(NotificationSettingsChannelDefault, obj);
  }
}
