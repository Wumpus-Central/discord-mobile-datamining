// === Module 13791: ChannelSettingsNotifications ===

// Module 13791 (ChannelSettingsNotifications)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5235 */;
import useChannelName from "useChannelName" /* 5605 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5712 */;
import Stack_Stack from "Stack/Stack" /* 5978 */;
import TableRow from "TableRow" /* 6905 */;
import TableRowGroup from "TableRowGroup" /* 6989 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7212 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7217 */;
import TableSwitchRow from "TableSwitchRow" /* 7297 */;
import Form from "Form" /* 8951 */;
import MutedUntilText from "MutedUntilText" /* 11013 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5195 */;
import RelationshipStore from "RelationshipStore" /* 4914 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6705 */;
import UserStore from "UserStore" /* 1389 */;

const MutedUntilTextDefault = MutedUntilText;

require = fn;
const ChannelRecord = fn(4828);
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
const Constants = fn(1084);
({ AnalyticEvents: closure_11, UserNotificationSettings: closure_12, ChannelTypes: map1, SettingsPaneTypes: closure_14, MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15 } = Constants);
const UnreadSetting = fn(6706).UnreadSetting;
let closure_17 = fn(1094).ChannelNotificationSettingsFlags;
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const hybrid = "hybrid";
const createStyles = fn(4972);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_22 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(arg0) {
    tmp2 = new ChannelSettingsNotifications(global, new.target, tmp);
    closure_0 = tmp2;
    tmp2.radioGroupRef = closure_3.createRef();
    tmp2.updateSetting = function updateSetting(arg0, label) {
      ({ muted, messageNotifications, flags, mute_config } = arg0);
      const channel = props.props.channel;
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
      if (undefined !== flags) {
        obj.flags = flags;
      }
      if (flag) {
        const obj3 = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj, label };
        const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj3);
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
          const NotificationLabel = muted(paths[21]).NotificationLabel;
          return muted.updateSetting(muted, NotificationLabel.muted(muted.muted));
        };
        obj2.openLazy(muted(paths[20])(paths[19], paths.paths), combined, obj4);
        const tmp4 = muted(paths[20])(paths[19], paths.paths);
      }
      obj = muted;
    };
    tmp2.handleTypeChange = function handleTypeChange(arg0) {
      props = ONLY_MENTIONS.props;
      const channel = props.channel;
      ONLY_MENTIONS = arg0;
      if (arg0 === hybrid) {
        ONLY_MENTIONS = constants.ONLY_MENTIONS;
      }
      if (!props.useNewNotifications) {
        c1 = undefined;
        const obj3 = { messageNotifications: ONLY_MENTIONS };
        obj.setState(obj3, () => {
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          return ONLY_MENTIONS.updateSetting({ messageNotifications: ONLY_MENTIONS, flags }, NotificationLabel.notifications(ONLY_MENTIONS));
        });
      } else {
        channelIdFlags = channelIdFlags.getChannelIdFlags(channel.getGuildId(), channel.id);
        if (ONLY_MENTIONS === constants.NULL) {
          let result = ONLY_MENTIONS(paths[12]).resetChannelUnreadFlags(channelIdFlags);
          const obj2 = ONLY_MENTIONS(paths[12]);
        } else {
          ONLY_MENTIONS(paths[12]);
          if (arg0 !== hybrid) {
            if (ONLY_MENTIONS !== tmp5.ALL_MESSAGES) {
              let UNREADS_ALL_MESSAGES = constants2.UNREADS_ONLY_MENTIONS;
            }
            result = tmp9(channelIdFlags, UNREADS_ALL_MESSAGES);
          }
          UNREADS_ALL_MESSAGES = constants2.UNREADS_ALL_MESSAGES;
        }
      }
      obj = ONLY_MENTIONS;
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
  obj2.children = collapsedCategories(TableRow.TableRow, { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted });
  const items = [collapsedCategories(TableRowGroup.TableRowGroup, obj2), ];
  if (!muted) {
    const obj6 = { children: null };
    items[1] = null;
    obj6.children = items;
    return closure_1_20(closure_1_19, obj6);
  } else {
    const obj7 = { muteConfig: props.muteConfig, type: null };
    if (channel.type === constants3.GUILD_CATEGORY) {
      MuteSettingType = MutedUntilText.MuteSettingType;
      let CHANNEL = MuteSettingType.CATEGORY;
    } else {
      CHANNEL = MutedUntilText.MuteSettingType.CHANNEL;
    }
    obj7.type = CHANNEL;
    collapsedCategories(MutedUntilTextDefault, obj7);
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
    const result = NotificationSettingsModalActionCreatorsDefault.setForumThreadsCreated(require, !newForumThreadsCreated);
  };
  return closure_18(TableSwitchRow.TableSwitchRow, obj);
};
prototype["renderNotificationSettings"] = function renderNotificationSettings() {
  const self = this;
  const props = this.props;
  ({ channel, guildMuted, guildMemberCount, defaultSetting, useNewNotifications } = props);
  ({ muted, messageNotifications } = this.state);
  ({ unreadSetting, defaultUnreadSetting } = props);
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
  let tmp10 = useNewNotifications;
  if (useNewNotifications) {
    tmp10 = defaultSetting === constants2.ONLY_MENTIONS;
  }
  if (tmp10) {
    tmp10 = defaultUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  if (tmp10) {
    const intl5 = tmp5(1125).intl;
    let stringResult1 = intl5.string(tmp5(1125).t.JzbSEY);
  } else if (constants2.ALL_MESSAGES === defaultSetting) {
    const intl4 = tmp5(1125).intl;
    stringResult1 = intl4.string(tmp5(1125).t["n/bTaY"]);
  } else if (constants2.ONLY_MENTIONS === defaultSetting) {
    const intl3 = tmp5(1125).intl;
    stringResult1 = intl3.format(tmp5(1125).t.L2hmYy, {});
  } else if (constants2.NO_MESSAGES === defaultSetting) {
    const intl15 = tmp5(1125).intl;
    stringResult1 = intl15.string(tmp5(1125).t.CtVGyQ);
  }
  if (channel.isGuildStageVoice()) {
    const obj2 = { value: messageNotifications, onChange: null, groupRef: null, title: null, hasIcons: false, children: null };
    ({ handleTypeChange: obj7.onChange, radioGroupRef: obj7.groupRef } = self);
    const intl12 = tmp7(1125).intl;
    obj2.title = intl12.string(tmp7(1125).t.h850Ss);
    let tmp32 = muted;
    if (!muted) {
      tmp32 = guildMuted;
    }
    const obj3 = { disabled: tmp32, label: stringResult, subLabel: stringResult1, value: constants2.NULL };
    const items = [collapsedCategories(tmp7(6986).TableRadioRow, obj3), , ];
    let tmp34 = muted;
    if (!muted) {
      tmp34 = guildMuted;
    }
    const obj4 = { disabled: tmp34, value: constants2.ONLY_MENTIONS, label: null };
    const intl13 = tmp7(1125).intl;
    obj4.label = intl13.string(tmp7(1125).t["BENn/6"]);
    items[1] = collapsedCategories(tmp7(6986).TableRadioRow, obj4);
    if (!muted) {
      muted = guildMuted;
    }
    const obj5 = { disabled: muted, value: constants2.NO_MESSAGES, label: null };
    const intl14 = tmp7(1125).intl;
    obj5.label = intl14.string(tmp7(1125).t.CtVGyQ);
    items[2] = collapsedCategories(tmp7(6986).TableRadioRow, obj5);
    obj2.children = items;
    return closure_1_20(tmp7(6987).TableRadioGroup, obj2);
  } else {
    let tmp15 = messageNotifications;
    if (useNewNotifications) {
      tmp15 = messageNotifications;
      if (messageNotifications === constants2.ONLY_MENTIONS) {
        tmp15 = messageNotifications;
        if (unreadSetting === UnreadSetting.ALL_MESSAGES) {
          tmp15 = hybrid;
        }
      }
    }
    const obj = { value: tmp15, onChange: null, groupRef: null, title: null, hasIcons: false, children: null };
    ({ handleTypeChange: obj.onChange, radioGroupRef: obj.groupRef } = self);
    const intl6 = tmp7(1125).intl;
    obj.title = intl6.string(tmp7(1125).t.h850Ss);
    const obj6 = { label: stringResult, subLabel: stringResult1, disabled: null, value: null };
    let tmp20 = muted;
    if (!muted) {
      tmp20 = guildMuted;
    }
    obj6.disabled = tmp20;
    obj6.value = constants2.NULL;
    const items1 = [collapsedCategories(tmp7(6986).TableRadioRow, obj6), , , , ];
    const obj8 = { label: null, disabled: null, subLabel: null, value: null };
    const intl7 = tmp7(1125).intl;
    obj8.label = intl7.string(tmp7(1125).t["n/bTaY"]);
    let tmp22 = muted;
    if (!muted) {
      tmp22 = guildMuted;
    }
    obj8.disabled = tmp22;
    let stringResult2 = null;
    if (null != guildMemberCount) {
      stringResult2 = null;
      if (guildMemberCount >= value2) {
        const intl8 = tmp7(1125).intl;
        stringResult2 = intl8.string(tmp7(1125).t.Dh5p5j);
      }
    }
    obj8.subLabel = stringResult2;
    obj8.value = constants2.ALL_MESSAGES;
    items1[1] = collapsedCategories(tmp7(6986).TableRadioRow, obj8);
    let tmp19Result = null;
    if (useNewNotifications) {
      const obj9 = { label: null, disabled: null, value: null };
      const intl9 = tmp7(1125).intl;
      obj9.label = intl9.string(tmp7(1125).t.JzbSEY);
      let tmp26 = muted;
      if (!muted) {
        tmp26 = guildMuted;
      }
      obj9.disabled = tmp26;
      obj9.value = hybrid;
      tmp19Result = collapsedCategories(tmp7(6986).TableRadioRow, obj9);
    }
    items1[2] = tmp19Result;
    const obj10 = { label: null, disabled: null, value: null };
    const intl10 = tmp7(1125).intl;
    obj10.label = intl10.format(tmp7(1125).t.L2hmYy, {});
    let tmp28 = muted;
    if (!muted) {
      tmp28 = guildMuted;
    }
    obj10.disabled = tmp28;
    obj10.value = constants2.ONLY_MENTIONS;
    items1[3] = collapsedCategories(tmp7(6986).TableRadioRow, obj10);
    const obj19 = { label: null, disabled: null, value: null };
    const intl11 = tmp7(1125).intl;
    obj19.label = intl11.string(tmp7(1125).t.CtVGyQ);
    let tmp29 = muted;
    if (!muted) {
      tmp29 = guildMuted;
    }
    obj19.disabled = tmp29;
    obj19.value = constants2.NO_MESSAGES;
    items1[4] = collapsedCategories(tmp7(6986).TableRadioRow, obj19);
    obj.children = items1;
    return closure_1_20(tmp7(6987).TableRadioGroup, obj);
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_22(this.context);
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
              return closure_1_18(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
            }
      };
      obj.children = intl.format(util.t.O34r15, obj2);
      let tmp5 = collapsedCategories(Text_Text.Text, obj);
    } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl3 = util.intl;
      const obj4 = {
        notificationHook(children, arg1) {
              return closure_1_18(Text_Text.Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
            }
      };
      obj3.children = intl3.format(util.t.nRwUIL, obj4);
      tmp5 = collapsedCategories(Text_Text.Text, obj3);
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
      tmp9Result = collapsedCategories(TableRowGroup.TableRowGroup, obj7);
    }
    items[2] = tmp9Result;
    items[3] = tmp5;
    obj6.children = items;
    obj5.children = closure_1_20(Stack_Stack.Stack, obj6);
    tmp9Result2 = collapsedCategories(Form.Form, obj5);
  }
  return tmp9Result2;
};
ChannelSettingsNotifications.contextType = fn(5038).ThemeContext;
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSettingsNotificationsGuard(onClose) {
  const cResult = onClose(stateFromStores[33]).c(23);
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = onClose(stateFromStores[33]);
  stateFromStores = onClose(stateFromStores[34]).useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let guildId;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    cResult[3] = stateFromStores;
    cResult[4] = guildId;
    let tmp7 = guildId;
  } else {
    tmp7 = cResult[4];
  }
  noop = tmp7;
  const tmpResult = onClose(stateFromStores[34]);
  let shouldUseNewNotificationSystem = onClose(stateFromStores[35]).useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative");
  if (shouldUseNewNotificationSystem) {
    shouldUseNewNotificationSystem = null != stateFromStores;
  }
  if (shouldUseNewNotificationSystem) {
    shouldUseNewNotificationSystem = set.has(stateFromStores.type);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[5] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === channelId) {
      if (cResult[8] === tmp7) {
        let tmp15 = cResult[9];
      }
      const stateFromStoresObject = tmp(tmp2[34]).useStateFromStoresObject(tmp13, tmp15);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberCountStore];
        cResult[10] = items2;
        let tmp17 = items2;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== tmp7) {
        class R {
          constructor() {
            return closure_7.getMemberCount(closure_3);
          }
        }
        cResult[11] = tmp7;
        cResult[12] = R;
      } else {
        class R {
          constructor() {
            return closure_7.getMemberCount(closure_3);
          }
        }
      }
      const tmpResult5 = tmp(tmp2[34]);
      const stateFromStores1 = tmp(tmp2[34]).useStateFromStores(tmp17, R);
      if (cResult[13] === stateFromStores) {
        class R {
          constructor() {
            return closure_7.getMemberCount(closure_3);
          }
        }
        const effect = noop.useEffect(U, tmp22);
        if (cResult[17] === stateFromStores) {
          class R {
            constructor() {
              return closure_7.getMemberCount(closure_3);
            }
          }
        }
        if (null != stateFromStores) {
          class R {
            constructor() {
              return closure_7.getMemberCount(closure_3);
            }
          }
          const obj2 = { onClose, channel: stateFromStores };
          const merged = Object.assign(stateFromStoresObject);
          obj2.guildMemberCount = stateFromStores1;
          obj2.useNewNotifications = shouldUseNewNotificationSystem;
          class U {
            constructor() {
              if (null == closure_2) {
                if (onClose != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
        }
        cResult[17] = stateFromStores;
        cResult[18] = stateFromStores1;
        class U {
          constructor() {
            if (null == closure_2) {
              if (onClose != null) {
                tmpResult = tmp();
              }
            }
            return;
          }
        }
        cResult[19] = onClose;
        cResult[20] = stateFromStoresObject;
        cResult[21] = shouldUseNewNotificationSystem;
        cResult[22] = null;
      }
      class U {
        constructor() {
          if (null == closure_2) {
            if (onClose != null) {
              tmpResult = tmp();
            }
          }
          return;
        }
      }
      const items3 = [stateFromStores, onClose];
      cResult[13] = stateFromStores;
      cResult[14] = onClose;
      cResult[15] = U;
      cResult[16] = items3;
      tmp22 = items3;
      const tmpResult6 = tmp(tmp2[34]);
    }
  }
  const fn2 = function _() {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    if (null != parent_id) {
      let NULL = UserGuildSettingsStore.getChannelMessageNotifications(closure_3, stateFromStores.parent_id);
    } else {
      NULL = constants2.NULL;
    }
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(closure_3);
    let tmp8 = messageNotifications;
    if (NULL !== constants2.NULL) {
      tmp8 = NULL;
    }
    let parent_id1;
    if (stateFromStores != null) {
      parent_id1 = stateFromStores.parent_id;
    }
    if (null != parent_id1) {
      let UNSET = UserGuildSettingsStore.getChannelUnreadSetting(closure_3, stateFromStores.parent_id);
    } else {
      UNSET = UnreadSetting.UNSET;
    }
    if (null != closure_3) {
      let UNSET2 = UserGuildSettingsStore.getGuildUnreadSetting(closure_3);
    } else {
      UNSET2 = UnreadSetting.UNSET;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(closure_3, channelId), muted: UserGuildSettingsStore.isChannelMuted(closure_3, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(closure_3, channelId), guildMuted: UserGuildSettingsStore.isMuted(closure_3), guildMessageNotifications: messageNotifications, newForumThreadsCreated: null, defaultSetting: null, unreadSetting: null, defaultUnreadSetting: null };
    let newForumThreadsCreated = null != stateFromStores;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = UserGuildSettingsStore.getNewForumThreadsCreated(stateFromStores);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    if (null != stateFromStores) {
      let UNSET3 = UserGuildSettingsStore.resolveUnreadSetting(stateFromStores);
    } else {
      UNSET3 = UnreadSetting.UNSET;
    }
    obj.unreadSetting = UNSET3;
    if (UNSET !== UnreadSetting.UNSET) {
      UNSET2 = UNSET;
    }
    obj.defaultUnreadSetting = UNSET2;
    return obj;
  };
  cResult[6] = stateFromStores;
  cResult[7] = channelId;
  cResult[8] = tmp7;
  cResult[9] = fn2;
  tmp15 = fn2;
  const tmpResult4 = onClose(stateFromStores[35]);
}) : (function ChannelSettingsNotificationsGuard(onClose) {
  onClose = onClose.onClose;
  const channelId = onClose.channelId;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = onClose(stateFromStores[34]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guildId;
  if (stateFromStores != null) {
    guildId = stateFromStores.getGuildId();
  }
  let obj = onClose(stateFromStores[34]);
  let hasItem = onClose(stateFromStores[35]).useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative") && null != stateFromStores;
  if (hasItem) {
    hasItem = set.has(stateFromStores.type);
  }
  const tmpResult = onClose(stateFromStores[35]);
  const items1 = [UserGuildSettingsStore];
  const stateFromStoresObject = onClose(stateFromStores[34]).useStateFromStoresObject(items1, () => {
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
    let parent_id1;
    if (stateFromStores != null) {
      parent_id1 = stateFromStores.parent_id;
    }
    if (null != parent_id1) {
      let UNSET = UserGuildSettingsStore.getChannelUnreadSetting(guildId, stateFromStores.parent_id);
    } else {
      UNSET = UnreadSetting.UNSET;
    }
    if (null != guildId) {
      let UNSET2 = UserGuildSettingsStore.getGuildUnreadSetting(guildId);
    } else {
      UNSET2 = UnreadSetting.UNSET;
    }
    const obj = { messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId), muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId), muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId), guildMuted: UserGuildSettingsStore.isMuted(guildId), guildMessageNotifications: messageNotifications, newForumThreadsCreated: null, defaultSetting: null, unreadSetting: null, defaultUnreadSetting: null };
    let newForumThreadsCreated = null != stateFromStores;
    if (newForumThreadsCreated) {
      newForumThreadsCreated = UserGuildSettingsStore.getNewForumThreadsCreated(stateFromStores);
    }
    obj.newForumThreadsCreated = newForumThreadsCreated;
    obj.defaultSetting = tmp8;
    if (null != stateFromStores) {
      let UNSET3 = UserGuildSettingsStore.resolveUnreadSetting(stateFromStores);
    } else {
      UNSET3 = UnreadSetting.UNSET;
    }
    obj.unreadSetting = UNSET3;
    if (UNSET !== UnreadSetting.UNSET) {
      UNSET2 = UNSET;
    }
    obj.defaultUnreadSetting = UNSET2;
    return obj;
  });
  const tmpResult3 = onClose(stateFromStores[34]);
  const items2 = [GuildMemberCountStore];
  const items3 = [stateFromStores, onClose];
  const stateFromStores1 = onClose(stateFromStores[34]).useStateFromStores(items2, () => GuildMemberCountStore.getMemberCount(guildId));
  const effect = guildId.useEffect(() => {
    if (null == stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj2 = { onClose, channel: stateFromStores };
    const merged = Object.assign(stateFromStoresObject);
    obj2.guildMemberCount = stateFromStores1;
    obj2.useNewNotifications = hasItem;
    tmp9 = closure_18(ChannelSettingsNotifications, obj2);
  }
  return tmp9;
});