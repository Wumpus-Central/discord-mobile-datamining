// discord_app/components_native/channel_settings/ChannelSettingsNotifications.tsx
import importAllResult from "computeChannelName";
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "TableRowInner";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../discord_common/js/packages/tokens/native.tsx";
import { Stack } from "../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TableSwitchRow } from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { Form } from "../../design/void/Form/native/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { collectGuildAnalyticsMetadata } from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import { computeChannelName } from "../../modules/channel/useChannelName.tsx";
import { MutedUntilText } from "../../modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx";
import { getMuteTimeOptions } from "../../modules/notifications/NotificationUtils.tsx";
import { NotificationSettingsChannel } from "../../modules/notifications/settings/native/NotificationSettingsChannel.tsx";

let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let unpackModuleId;
let require = arg1;
function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  let guildId;
  let obj = onClose(stateFromStores[29]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  guildId = undefined;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  let tmpResult = tmp(tmp2[29]);
  const items1 = [updateUserGuildSettingsInternal];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = tmp.parent_id;
    }
    if (null != parent_id) {
      let NULL = outer1_9.getChannelMessageNotifications(guildId, tmp.parent_id);
    } else {
      NULL = outer1_12.NULL;
    }
    const messageNotifications = outer1_9.getMessageNotifications(guildId);
    let tmp8 = messageNotifications;
    if (NULL !== outer1_12.NULL) {
      tmp8 = NULL;
    }
    const obj = { messageNotifications: outer1_9.getChannelMessageNotifications(guildId, channelId), muted: outer1_9.isChannelMuted(guildId, channelId), muteConfig: outer1_9.getChannelMuteConfig(guildId, channelId), guildMuted: outer1_9.isMuted(guildId), guildMessageNotifications: messageNotifications, newForumThreadsCreated: null, defaultSetting: null };
    let newForumThreadsCreated = null != tmp;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = outer1_9.getNewForumThreadsCreated(tmp);
    }
    obj[5] = newForumThreadsCreated;
    obj[6] = tmp8;
    return obj;
  });
  tmpResult = tmp(tmp2[29]);
  const items2 = [handleInviteData];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => outer1_7.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { onClose: null, channel: null };
    obj[0] = onClose;
    obj[1] = stateFromStores;
    const merged = Object.assign(stateFromStoresObject);
    obj.guildMemberCount = stateFromStores1;
    tmp7 = callback2(ChannelSettingsNotifications, obj);
  }
  return tmp7;
}
let c3 = importAllResult;
({ isGuildTextChannelType: c4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: c5 } = createChannelRecord);
({ AnalyticEvents: unpackModuleId, UserNotificationSettings: closure_12, ChannelTypes: map1, SettingsPaneTypes: closure_14, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15 } = ME);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { screenContainer: null, stackPadding: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(arg0) {
    tmp2 = new ChannelSettingsNotifications(global, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    tmp2.radioGroupRef = closure_3.createRef();
    tmp2.updateSetting = function updateSetting(arg0, NotificationLabel) {
      let messageNotifications;
      let mute_config;
      let muted;
      ({ muted, messageNotifications, mute_config } = arg0);
      const channel = tmp2.props.channel;
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
        const obj2 = outer1_1(outer1_2[14]);
        const result = obj2.updateChannelOverrideSettings(channel.getGuildId(), channel.id, obj, NotificationLabel);
        tmp2 = NotificationLabel;
      }
    };
    tmp2.handleToggleMuteChannel = function handleToggleMuteChannel() {
      let obj = muted;
      muted = muted.state.muted;
      const channel = muted.props.channel;
      if (muted) {
        obj = { muted: null };
        obj[0] = !muted;
        obj.setState(obj, () => {
          const NotificationLabel = muted(outer2_2[18]).NotificationLabel;
          return muted.updateSetting({ muted: !muted }, NotificationLabel.muted(!muted));
        });
      } else {
        const _HermesInternal = HermesInternal;
        const obj2 = outer1_1(outer1_2[15]);
        obj = { guildId: null, channelId: null, onOptionPress: null };
        const combined = "muteSettings" + channel.id;
        obj[0] = channel.getGuildId();
        obj[1] = channel.id;
        obj[2] = function onOptionPress(muted) {
          const NotificationLabel = muted(outer1_2[18]).NotificationLabel;
          return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
        };
        obj2.openLazy(outer1_2(outer1_2[17])(outer1_2[16], outer1_2.paths), combined, obj);
        const tmp4 = outer1_2(outer1_2[17])(outer1_2[16], outer1_2.paths);
      }
    };
    tmp2.handleTypeChange = function handleTypeChange(messageNotifications) {
      messageNotifications.setState({ messageNotifications }, () => {
        const NotificationLabel = messageNotifications(outer2_2[18]).NotificationLabel;
        return messageNotifications.updateSetting({ messageNotifications }, NotificationLabel.notifications(messageNotifications));
      });
    };
    tmp2.state = { messageNotifications: global.messageNotifications, muted: global.muted };
    return tmp2;
  }
}
const prototype = ChannelSettingsNotifications.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  let obj = collectGuildAnalyticsMetadata;
  obj = { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
prototype["componentDidUpdate"] = function componentDidUpdate(muted) {
  const self = this;
  if (muted.muted !== this.props.muted) {
    let obj = { muted: null };
    obj[0] = self.props.muted;
    self.setState(obj);
  }
  if (muted.messageNotifications !== self.props.messageNotifications) {
    obj = { messageNotifications: null };
    obj[0] = self.props.messageNotifications;
    self.setState(obj);
  }
};
prototype["renderMuteSection"] = function renderMuteSection() {
  const props = this.props;
  const channel = props.channel;
  const muted = this.state.muted;
  let MuteSettingType = dependencyMap;
  let obj = computeChannelName;
  const channelName = obj.computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale, true);
  obj = { description: null, hasIcons: false, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["6yI+JS"]);
  const intl2 = getSystemLocale.intl;
  const format = intl2.format;
  const t = getSystemLocale.t;
  if (muted) {
    obj = { name: null };
    obj[0] = channelName;
    let formatResult = format(t["eC+9rj"], obj);
  } else {
    const obj1 = { name: null };
    obj1[0] = channelName;
    formatResult = format(t.byjuJm, obj1);
  }
  obj[2] = closure_16(TableRowInner.TableRow, { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted });
  const items = [closure_16(TableRowGroupTitle.TableRowGroup, obj), ];
  if (!muted) {
    const obj3 = { children: null };
    items[1] = null;
    obj3[0] = items;
    return closure_18(closure_17, obj3);
  } else {
    const obj4 = { muteConfig: null, type: null };
    obj4[0] = props.muteConfig;
    if (channel.type === constants3.GUILD_CATEGORY) {
      MuteSettingType = tmp(9883).MuteSettingType;
      let CHANNEL = MuteSettingType.CATEGORY;
    } else {
      CHANNEL = tmp(9883).MuteSettingType.CHANNEL;
    }
    obj4[1] = CHANNEL;
    tmp5(MutedUntilText, obj4);
    const tmp8 = MutedUntilText;
  }
};
prototype["renderForumSettings"] = function renderForumSettings() {
  let newForumThreadsCreated;
  let require;
  const props = this.props;
  ({ channel: require, newForumThreadsCreated } = props);
  let guildMuted = this.state.muted;
  const obj = { label: null, value: null, disabled: null, onValueChange: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Rkgjph);
  obj[1] = newForumThreadsCreated;
  if (!guildMuted) {
    guildMuted = props.guildMuted;
  }
  obj[2] = guildMuted;
  obj[3] = function onValueChange() {
    const result = newForumThreadsCreated(outer1_2[14]).setForumThreadsCreated(closure_0, !newForumThreadsCreated);
  };
  return closure_16(TableSwitchRow.TableSwitchRow, obj);
};
prototype["renderNotificationSettings"] = function renderNotificationSettings() {
  let channel;
  let defaultSetting;
  let guildMemberCount;
  let guildMuted;
  const self = this;
  ({ channel, guildMuted, guildMemberCount, defaultSetting } = this.props);
  const state = this.state;
  let muted = state.muted;
  if (null != channel.parent_id) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.wlrV1c);
    let tmp5 = require;
    let tmp7 = require;
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["1Wn2M4"]);
    tmp5 = require;
    tmp7 = require;
  }
  const TableRadioGroup = tmp7(8051).TableRadioGroup;
  let obj = { value: state.messageNotifications, onChange: self.handleTypeChange, groupRef: self.radioGroupRef, title: null, hasIcons: false, children: null };
  const intl3 = tmp7(1236).intl;
  obj[3] = intl3.string(tmp7(1236).t.h850Ss);
  const TableRadioRow = tmp7(8050).TableRadioRow;
  if (isGuildStageVoiceResult) {
    let tmp22 = muted;
    if (!muted) {
      tmp22 = guildMuted;
    }
    obj = { disabled: null, label: null, subLabel: null, value: null };
    obj[0] = tmp22;
    obj[1] = stringResult;
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl11 = tmp5(1236).intl;
      let stringResult1 = intl11.string(tmp5(1236).t["n/bTaY"]);
    } else if (tmp23.ONLY_MENTIONS === defaultSetting) {
      const intl10 = tmp5(1236).intl;
      stringResult1 = intl10.format(tmp5(1236).t.L2hmYy, {});
    } else if (tmp23.NO_MESSAGES === defaultSetting) {
      const intl15 = tmp5(1236).intl;
      stringResult1 = intl15.string(tmp5(1236).t.CtVGyQ);
    }
    obj[2] = stringResult1;
    obj[3] = constants2.NULL;
    const items = [tmp12(TableRadioRow, obj), , ];
    let tmp25 = muted;
    if (!muted) {
      tmp25 = guildMuted;
    }
    obj = { disabled: null, value: null, label: null };
    obj[0] = tmp25;
    obj[1] = constants2.ONLY_MENTIONS;
    const intl12 = tmp7(1236).intl;
    obj[2] = intl12.string(tmp7(1236).t["BENn/6"]);
    items[1] = tmp12(tmp7(8050).TableRadioRow, obj);
    if (!muted) {
      muted = guildMuted;
    }
    const obj1 = { disabled: null, value: null, label: null };
    obj1[0] = muted;
    obj1[1] = constants2.NO_MESSAGES;
    const intl13 = tmp7(1236).intl;
    obj1[2] = intl13.string(tmp7(1236).t.CtVGyQ);
    items[2] = tmp12(tmp7(8050).TableRadioRow, obj1);
    obj[5] = items;
    let tmp11Result = tmp11(TableRadioGroup, obj);
  } else {
    const obj2 = { label: null, subLabel: null, disabled: null, value: null };
    obj2[0] = stringResult;
    if (constants2.ALL_MESSAGES === defaultSetting) {
      const intl5 = tmp5(1236).intl;
      let stringResult2 = intl5.string(tmp5(1236).t["n/bTaY"]);
    } else if (tmp13.ONLY_MENTIONS === defaultSetting) {
      const intl4 = tmp5(1236).intl;
      stringResult2 = intl4.format(tmp5(1236).t.L2hmYy, {});
    } else if (tmp13.NO_MESSAGES === defaultSetting) {
      const intl14 = tmp5(1236).intl;
      stringResult2 = intl14.string(tmp5(1236).t.CtVGyQ);
    }
    obj2[1] = stringResult2;
    let tmp15 = muted;
    if (!muted) {
      tmp15 = guildMuted;
    }
    obj2[2] = tmp15;
    obj2[3] = constants2.NULL;
    const items1 = [tmp12(TableRadioRow, obj2), , , ];
    const obj3 = { label: null, disabled: null, subLabel: null, value: null };
    const intl6 = tmp7(1236).intl;
    obj3[0] = intl6.string(tmp7(1236).t["n/bTaY"]);
    let tmp16 = muted;
    if (!muted) {
      tmp16 = guildMuted;
    }
    obj3[1] = tmp16;
    let stringResult3 = null;
    if (null != guildMemberCount) {
      stringResult3 = null;
      if (guildMemberCount >= closure_15) {
        const intl7 = tmp7(1236).intl;
        stringResult3 = intl7.string(tmp7(1236).t.Dh5p5j);
      }
    }
    obj3[2] = stringResult3;
    obj3[3] = constants2.ALL_MESSAGES;
    items1[1] = tmp12(tmp7(8050).TableRadioRow, obj3);
    const obj4 = { label: null, disabled: null, value: null };
    const intl8 = tmp7(1236).intl;
    obj4[0] = intl8.format(tmp7(1236).t.L2hmYy, {});
    let tmp19 = muted;
    if (!muted) {
      tmp19 = guildMuted;
    }
    obj4[1] = tmp19;
    obj4[2] = constants2.ONLY_MENTIONS;
    items1[2] = tmp12(tmp7(8050).TableRadioRow, obj4);
    const obj5 = { label: null, disabled: null, value: null };
    const intl9 = tmp7(1236).intl;
    obj5[0] = intl9.string(tmp7(1236).t.CtVGyQ);
    let tmp20 = muted;
    if (!muted) {
      tmp20 = guildMuted;
    }
    obj5[1] = tmp20;
    obj5[2] = constants2.NO_MESSAGES;
    items1[3] = tmp12(tmp7(8050).TableRadioRow, obj5);
    obj[5] = items1;
    tmp11Result = tmp11(TableRadioGroup, obj);
  }
  return tmp11Result;
};
prototype["render"] = function render() {
  let guildMessageNotifications;
  let guildMuted;
  const self = this;
  const tmp = createCacheKey(this.context);
  const props = this.props;
  const channel = props.channel;
  ({ guildMuted, guildMessageNotifications } = props);
  let tmp9Result = null;
  if (null != channel) {
    if (guildMuted) {
      let obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = getSystemLocale.intl;
      obj = { mutedHook: null };
      obj[0] = function mutedHook(children) {
        return callback2(callback(4338).Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
      };
      obj[2] = intl.format(getSystemLocale.t.O34r15, obj);
      let tmp5 = callback2(Text.Text, obj);
    } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl3 = getSystemLocale.intl;
      const obj1 = { notificationHook: null };
      obj1[0] = function notificationHook(children) {
        return callback2(callback(4338).Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
      };
      obj[2] = intl3.format(getSystemLocale.t.nRwUIL, obj1);
      tmp5 = callback2(Text.Text, obj);
    }
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.screenContainer;
    const obj3 = { spacing: null, style: null, children: null };
    obj3[0] = Themes.space.PX_24;
    obj3[1] = tmp.stackPadding;
    let renderMuteSectionResult = null;
    if (tmp2) {
      renderMuteSectionResult = self.renderMuteSection();
    }
    const items = [renderMuteSectionResult, self.renderNotificationSettings(), , ];
    tmp9Result = null;
    if (channel.isForumLikeChannel()) {
      const obj4 = { title: null, hasIcons: false, children: null };
      const intl2 = tmp10(1236).intl;
      obj4[0] = intl2.string(tmp10(1236).t.bK11jO);
      obj4[2] = self.renderForumSettings();
      tmp9Result = tmp9(tmp10(5828).TableRowGroup, obj4);
    }
    items[2] = tmp9Result;
    items[3] = tmp5;
    obj3[2] = items;
    obj2[1] = closure_18(Stack.Stack, obj3);
    tmp9Result = tmp9(Form.Form, obj2);
    const tmp12 = closure_18;
  }
  return tmp9Result;
};
ChannelSettingsNotifications.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
let result = require("ensureGuildLoaded").fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default function ChannelSettingsNotificationsSplit(arg0) {
  let merged1 = arg0;
  const _require = arg0;
  let obj = dependencyMap;
  const items = [ensureGuildLoaded];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_6.getChannel(channelId.channelId));
  _getMuteTimeOptions;
  if (null == stateFromStores) {
    return null;
  } else {
    if (!tmp4) {
      obj = {};
      const merged = Object.assign(merged1);
      let tmp11 = callback2(ChannelSettingsNotificationsGuard, obj);
    }
    obj = { channel: null };
    obj[0] = stateFromStores;
    merged1 = Object.assign(merged1);
    tmp11 = callback2(NotificationSettingsChannel, obj);
    const tmp14 = NotificationSettingsChannel;
  }
};