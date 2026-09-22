// === Module 10402: ChannelSettingsNotifications ===

// Module 10402 (ChannelSettingsNotifications)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import useChannelName from "useChannelName" /* 4910 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4937 */;
import Stack_Stack from "Stack/Stack" /* 5185 */;
import TableRow from "TableRow" /* 5824 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import TableSwitchRow from "TableSwitchRow" /* 7447 */;
import Form from "Form" /* 8876 */;
import MutedUntilText from "MutedUntilText" /* 10407 */;
import NotificationSettingsChannelDefault from "NotificationSettingsChannel" /* 10409 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4676 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;
const MutedUntilTextDefault = MutedUntilText;

require = fn;
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = onClose(stateFromStores[29]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guildId;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  let obj = onClose(stateFromStores[29]);
  const items1 = [UserGuildSettingsStore];
  const stateFromStoresObject = onClose(stateFromStores[29]).useStateFromStoresObject(items1, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    if (null != parent_id) {
      let NULL = UserGuildSettingsStore.getChannelMessageNotifications(guildId, stateFromStores.parent_id);
    } else {
      NULL = constants2.NULL;
    }
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== constants2.NULL) {
      tmp8 = NULL;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId), muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId), guildMuted: UserGuildSettingsStore.isMuted(guildId), guildMessageNotifications: messageNotifications, newForumThreadsCreated: null, defaultSetting: null };
    let newForumThreadsCreated = null != stateFromStores;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = UserGuildSettingsStore.getNewForumThreadsCreated(stateFromStores);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    return obj;
  });
  const tmpResult = onClose(stateFromStores[29]);
  const items2 = [GuildMemberCountStore];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = onClose(stateFromStores[29]).useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { onClose, channel: stateFromStores };
    const merged = Object.assign(stateFromStoresObject);
    obj2.guildMemberCount = stateFromStores1;
    tmp7 = closure_16(ChannelSettingsNotifications, obj2);
  }
  return tmp7;
}
const ChannelRecord = fn(2046);
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, UserNotificationSettings: closure_12, ChannelTypes: map1, SettingsPaneTypes: closure_14, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_19 = createStyles.createLegacyClassComponentStyles(obj2);
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
      muted = muted.state.muted;
      const channel = muted.props.channel;
      if (muted) {
        const obj3 = { muted: !muted };
        obj.setState(obj3, () => {
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          return muted.updateSetting({ muted: !muted }, NotificationLabel.muted(!muted));
        });
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = require("ActionSheetActionCreators");
        const obj4 = { guildId: null, channelId: null, onOptionPress: null };
        const combined = "muteSettings" + channel.id;
        obj4.guildId = channel.getGuildId();
        obj4.channelId = channel.id;
        obj4.onOptionPress = function onOptionPress(muted) {
          const NotificationLabel = muted(paths[18]).NotificationLabel;
          return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
        };
        obj2.openLazy(state(paths[17])(paths[16], paths.paths), combined, obj4);
        const tmp4 = state(paths[17])(paths[16], paths.paths);
      }
      obj = muted;
    };
    tmp2.handleTypeChange = function handleTypeChange(messageNotifications) {
      state = messageNotifications;
      state.setState({ messageNotifications }, () => {
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        return messageNotifications.updateSetting({ messageNotifications }, NotificationLabel.notifications(messageNotifications));
      });
    };
    tmp2.state = { messageNotifications: global.messageNotifications, muted: global.muted };
    return tmp2;
  }
}
const prototype = ChannelSettingsNotifications.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS });
};
prototype["componentDidUpdate"] = function componentDidUpdate(muted) {
  const self = this;
  if (muted.muted !== this.props.muted) {
    const obj = { muted: self.props.muted };
    self.setState(obj);
  }
  if (muted.messageNotifications !== self.props.messageNotifications) {
    const obj2 = { messageNotifications: self.props.messageNotifications };
    self.setState(obj2);
  }
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const props = this.props;
  const channel = props.channel;
  const muted = this.state.muted;
  let MuteSettingType = dependencyMap;
  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore, true);
  const obj2 = { description: null, hasIcons: false, children: null };
  const intl = util.intl;
  obj2.description = intl.string(util.t["6yI+JS"]);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (muted) {
    const obj3 = { name: channelName };
    let formatResult = format(t["eC+9rj"], obj3);
  } else {
    const obj4 = { name: channelName };
    formatResult = format(t.byjuJm, obj4);
  }
  obj2.children = value2(TableRow.TableRow, { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted });
  const items = [value2(TableRowGroup.TableRowGroup, obj2), ];
  if (!muted) {
    const obj6 = { children: null };
    items[1] = null;
    obj6.children = items;
    return collapsedCategories(closure_1_17, obj6);
  } else {
    const obj7 = { muteConfig: props.muteConfig, type: null };
    if (channel.type === constants3.GUILD_CATEGORY) {
      MuteSettingType = MutedUntilText.MuteSettingType;
      let CHANNEL = MuteSettingType.CATEGORY;
    } else {
      CHANNEL = MutedUntilText.MuteSettingType.CHANNEL;
    }
    obj7.type = CHANNEL;
    value2(MutedUntilTextDefault, obj7);
  }
  const obj5 = { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted };
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
    const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(_require, !newForumThreadsCreated);
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
  const TableRadioGroup = tmp7(5904).TableRadioGroup;
  const obj = { value: state.messageNotifications, onChange: self.handleTypeChange, groupRef: self.radioGroupRef, title: null, hasIcons: false, children: null };
  const intl3 = tmp7(1115).intl;
  obj.title = intl3.string(tmp7(1115).t.h850Ss);
  const TableRadioRow = tmp7(5907).TableRadioRow;
  if (isGuildStageVoiceResult) {
    let tmp22 = muted;
    if (!muted) {
      tmp22 = guildMuted;
    }
    const obj2 = { disabled: tmp22, label: stringResult, subLabel: null, value: null };
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl11 = tmp5(1115).intl;
      let stringResult1 = intl11.string(tmp5(1115).t["n/bTaY"]);
    } else if (constants2.ONLY_MENTIONS === defaultSetting) {
      const intl10 = tmp5(1115).intl;
      stringResult1 = intl10.format(tmp5(1115).t.L2hmYy, {});
    } else if (constants2.NO_MESSAGES === defaultSetting) {
      const intl15 = tmp5(1115).intl;
      stringResult1 = intl15.string(tmp5(1115).t.CtVGyQ);
    }
    obj2.subLabel = stringResult1;
    obj2.value = constants2.NULL;
    const items = [value2(TableRadioRow, obj2), , ];
    let tmp25 = muted;
    if (!muted) {
      tmp25 = guildMuted;
    }
    const obj3 = { disabled: tmp25, value: constants2.ONLY_MENTIONS, label: null };
    const intl12 = tmp7(1115).intl;
    obj3.label = intl12.string(tmp7(1115).t["BENn/6"]);
    items[1] = value2(tmp7(5907).TableRadioRow, obj3);
    if (!muted) {
      muted = guildMuted;
    }
    const obj4 = { disabled: muted, value: constants2.NO_MESSAGES, label: null };
    const intl13 = tmp7(1115).intl;
    obj4.label = intl13.string(tmp7(1115).t.CtVGyQ);
    items[2] = value2(tmp7(5907).TableRadioRow, obj4);
    obj.children = items;
    let tmp11Result = collapsedCategories(TableRadioGroup, obj);
  } else {
    const obj5 = { label: stringResult, subLabel: null, disabled: null, value: null };
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl5 = tmp5(1115).intl;
      let stringResult2 = intl5.string(tmp5(1115).t["n/bTaY"]);
    } else if (constants2.ONLY_MENTIONS === defaultSetting) {
      const intl4 = tmp5(1115).intl;
      stringResult2 = intl4.format(tmp5(1115).t.L2hmYy, {});
    } else if (constants2.NO_MESSAGES === defaultSetting) {
      const intl14 = tmp5(1115).intl;
      stringResult2 = intl14.string(tmp5(1115).t.CtVGyQ);
    }
    obj5.subLabel = stringResult2;
    let tmp15 = muted;
    if (!muted) {
      tmp15 = guildMuted;
    }
    obj5.disabled = tmp15;
    obj5.value = constants2.NULL;
    const items1 = [value2(TableRadioRow, obj5), , , ];
    const obj6 = { label: null, disabled: null, subLabel: null, value: null };
    const intl6 = tmp7(1115).intl;
    obj6.label = intl6.string(tmp7(1115).t["n/bTaY"]);
    let tmp16 = muted;
    if (!muted) {
      tmp16 = guildMuted;
    }
    obj6.disabled = tmp16;
    let stringResult3 = null;
    if (null != guildMemberCount) {
      stringResult3 = null;
      if (guildMemberCount >= __initData) {
        const intl7 = tmp7(1115).intl;
        stringResult3 = intl7.string(tmp7(1115).t.Dh5p5j);
      }
    }
    obj6.subLabel = stringResult3;
    obj6.value = constants2.ALL_MESSAGES;
    items1[1] = value2(tmp7(5907).TableRadioRow, obj6);
    const obj7 = { label: null, disabled: null, value: null };
    const intl8 = tmp7(1115).intl;
    obj7.label = intl8.format(tmp7(1115).t.L2hmYy, {});
    let tmp19 = muted;
    if (!muted) {
      tmp19 = guildMuted;
    }
    obj7.disabled = tmp19;
    obj7.value = constants2.ONLY_MENTIONS;
    items1[2] = value2(tmp7(5907).TableRadioRow, obj7);
    const obj8 = { label: null, disabled: null, value: null };
    const intl9 = tmp7(1115).intl;
    obj8.label = intl9.string(tmp7(1115).t.CtVGyQ);
    let tmp20 = muted;
    if (!muted) {
      tmp20 = guildMuted;
    }
    obj8.disabled = tmp20;
    obj8.value = constants2.NO_MESSAGES;
    items1[3] = value2(tmp7(5907).TableRadioRow, obj8);
    obj.children = items1;
    tmp11Result = collapsedCategories(TableRadioGroup, obj);
  }
  return tmp11Result;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_19(this.context);
  const props = this.props;
  const channel = props.channel;
  ({ guildMuted, guildMessageNotifications } = props);
  let tmp9Result2 = null;
  if (null != channel) {
    if (guildMuted) {
      const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj2 = {
        mutedHook(children, arg1) {
              return closure_1_16(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
            }
      };
      obj.children = intl.format(util.t.O34r15, obj2);
      let tmp5 = value2(Text_Text.Text, obj);
    } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl3 = util.intl;
      const obj4 = {
        notificationHook(children, arg1) {
              return closure_1_16(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
            }
      };
      obj3.children = intl3.format(util.t.nRwUIL, obj4);
      tmp5 = value2(Text_Text.Text, obj3);
    }
    const obj5 = { style: tmp.screenContainer, children: null };
    const obj6 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: null };
    let renderMuteSectionResult = null;
    if (tmp2) {
      renderMuteSectionResult = self.renderMuteSection();
    }
    const items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
    let tmp9Result = null;
    if (channel.isForumLikeChannel()) {
      const obj7 = { title: null, hasIcons: false, children: null };
      const intl2 = util.intl;
      obj7.title = intl2.string(util.t.bK11jO);
      obj7.children = self.renderForumSettings();
      tmp9Result = value2(TableRowGroup.TableRowGroup, obj7);
    }
    items[2] = tmp9Result;
    items[3] = tmp5;
    obj6.children = items;
    obj5.children = collapsedCategories(Stack_Stack.Stack, obj6);
    tmp9Result2 = value2(Form.Form, obj5);
  }
  return tmp9Result2;
};
ChannelSettingsNotifications.contextType = fn(4467).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let merged1 = arg0;
  _require = arg0;
  let obj = dependencyMap;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId.channelId));
  require("notifications/NotificationUtils");
  if (null == stateFromStores) {
    return null;
  } else {
    if (!tmp4) {
      const obj3 = {};
      const merged = Object.assign(merged1);
      let tmp11 = closure_16(ChannelSettingsNotificationsGuard, obj3);
    }
    obj = { channel: stateFromStores };
    merged1 = Object.assign(merged1);
    tmp11 = closure_16(NotificationSettingsChannelDefault, obj);
  }
  const obj2 = require("initialize");
};