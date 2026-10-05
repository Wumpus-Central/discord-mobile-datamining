// discord_app/components_native/channel_settings/ChannelSettingsNotifications.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl16 from "../../intl/index.native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AppAnalyticsUtilsDefault from "../../modules/app_analytics/AppAnalyticsUtils.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import TableRow2 from "../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import TableSwitchRow2 from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import Form2 from "../../design/void/Form/native/index.tsx";
import MutedUntilText from "../../modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx";
import NotificationSettingsChannelDefault from "../../modules/notifications/settings/native/NotificationSettingsChannel.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const MutedUntilTextDefault = MutedUntilText;
let _require, onClose;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ isGuildTextChannelType: closure_4, CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: hasOwnProperty } = ChannelRecord);
({
  AnalyticEvents: unpackModuleId,
  UserNotificationSettings: closure_12,
  ChannelTypes: map1,
  SettingsPaneTypes: closure_14,
  MAX_MEMBERS_NOTIFY_ALL_MESSAGES: closure_15,
} = Constants);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { screenContainer: obj2, stackPadding: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_19 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class ChannelSettingsNotifications extends PureComponent {
  constructor(messageNotifications) {
    let paths;
    const tmp2 = new ChannelSettingsNotifications(messageNotifications, new.target, tmp);
    let state = tmp2;
    tmp2.radioGroupRef = react.createRef();
    tmp2.updateSetting = function updateSetting(arg0, label) {
      let messageNotifications;
      let mute_config;
      let muted;
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
        const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj, label };
        const updateChannelOverrideSettings =
          NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
        NotificationSettingsModalActionCreatorsDefault;
        const result = updateChannelOverrideSettings(obj2);
      }
    };
    tmp2.handleToggleMuteChannel = function handleToggleMuteChannel() {
      let muted;
      let obj = muted;
      muted = muted.state.muted;
      const channel = muted.props.channel;
      if (muted) {
        const obj2 = { muted: !muted };
        obj.setState(obj2, () => {
          const updateSetting = muted.updateSetting;
          const obj = { muted: !muted };
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          return updateSetting(obj, NotificationLabel.muted(!muted));
        });
      } else {
        const openLazy = require("ActionSheetActionCreators").openLazy;
        const _HermesInternal = HermesInternal;
        require("ActionSheetActionCreators");
        const obj3 = {
          guildId: channel.getGuildId(),
          channelId: channel.id,
          onOptionPress(muted) {
            const updateSetting = muted.updateSetting;
            const NotificationLabel = muted(paths[18]).NotificationLabel;
            return updateSetting(muted, NotificationLabel.muted(muted.muted));
          },
        };
        const tmp5 = state(paths[17])(paths[16], paths.paths);
        const combined = "muteSettings" + channel.id;
        openLazy(tmp5, combined, obj3);
      }
    };
    tmp2.handleTypeChange = function handleTypeChange(messageNotifications) {
      state = messageNotifications;
      let obj = { messageNotifications };
      state.setState(obj, () => {
        const updateSetting = messageNotifications.updateSetting;
        const obj = { messageNotifications };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        return updateSetting(obj, NotificationLabel.notifications(messageNotifications));
      });
    };
    tmp2.state = { messageNotifications: messageNotifications.messageNotifications, muted: messageNotifications.muted };
    return tmp2;
  }
  componentDidMount() {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "channel", destination_pane: constants4.CHANNEL_NOTIFICATION_SETTINGS };
    obj.trackWithMetadata(unpackModuleId.SETTINGS_PANE_VIEWED, obj2);
  }
  componentDidUpdate(muted) {
    const self = this;
    if (muted.muted !== this.props.muted) {
      const obj = { muted: self.props.muted };
      self.setState(obj);
    }
    if (muted.messageNotifications !== self.props.messageNotifications) {
      const obj2 = { messageNotifications: self.props.messageNotifications };
      self.setState(obj2);
    }
  }
  renderMuteSection() {
    let CHANNEL;
    let TableRow;
    let formatResult;
    let intl;
    let obj5;
    const props = this.props;
    const channel = props.channel;
    const muted = this.state.muted;
    const muteConfig = props.muteConfig;
    const obj = useChannelName;
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true);
    const obj2 = {
      description: intl.string(intl16.t["6yI+JS"]),
      hasIcons: false,
      children: authStore3(TableRow, obj5),
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl = intl16.intl;
    TableRow = TableRow2.TableRow;
    const intl2 = intl16.intl;
    const format = intl2.format;
    const t = intl16.t;
    if (muted) {
      const obj3 = { name: channelName };
      formatResult = format(t["eC+9rj"], obj3);
    } else {
      const obj4 = { name: channelName };
      formatResult = format(t.byjuJm, obj4);
    }
    obj5 = { label: formatResult, onPress: this.handleToggleMuteChannel, arrow: !muted };
    const children = [authStore3(TableRowGroup, obj2)];
    let tmp6Result = null;
    if (muted) {
      const obj6 = { muteConfig, type: CHANNEL };
      const tmp10 = MutedUntilTextDefault;
      if (channel.type === map1.GUILD_CATEGORY) {
        CHANNEL = MutedUntilText.MuteSettingType.CATEGORY;
      } else {
        CHANNEL = MutedUntilText.MuteSettingType.CHANNEL;
      }
      tmp6Result = authStore3(tmp10, obj6);
    }
    children[1] = tmp6Result;
    return authStore4(closure_17, { children });
  }
  renderForumSettings() {
    let intl;
    let newForumThreadsCreated;
    let require;
    const props = this.props;
    ({ channel: require, newForumThreadsCreated } = props);
    let muted = this.state.muted;
    const guildMuted = props.guildMuted;
    let obj = {
      label: intl.string(intl16.t.Rkgjph),
      value: newForumThreadsCreated,
      disabled: muted,
      onValueChange() {
        const obj = NotificationSettingsModalActionCreatorsDefault;
        const result = obj.setForumThreadsCreated(_require, !newForumThreadsCreated);
      },
    };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl16.intl;
    if (!muted) {
      muted = guildMuted;
    }
    return closure_16(TableSwitchRow, obj);
  }
  renderNotificationSettings() {
    let channel;
    let defaultSetting;
    let guildMemberCount;
    let guildMuted;
    let intl12;
    let intl13;
    let intl3;
    let intl6;
    let intl8;
    let intl9;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let tmp11Result;
    let tmp18;
    let tmp5;
    let tmp7;
    const self = this;
    ({ channel, guildMuted, guildMemberCount, defaultSetting } = this.props);
    const state = this.state;
    let muted = state.muted;
    const messageNotifications = state.messageNotifications;
    if (null != channel.parent_id) {
      const intl2 = intl16.intl;
      stringResult = intl2.string(intl16.t.wlrV1c);
      tmp5 = require;
      tmp7 = require;
    } else {
      const intl = intl16.intl;
      stringResult = intl.string(intl16.t["1Wn2M4"]);
      tmp5 = require;
      tmp7 = require;
    }
    const isGuildStageVoiceResult = channel.isGuildStageVoice();
    const TableRadioGroup = tmp7(6072).TableRadioGroup;
    const obj = {
      value: messageNotifications,
      onChange: self.handleTypeChange,
      groupRef: self.radioGroupRef,
      title: intl3.string(tmp7(1126).t.h850Ss),
      hasIcons: false,
      children: null,
    };
    intl3 = tmp7(1126).intl;
    const TableRadioRow = tmp7(6071).TableRadioRow;
    if (isGuildStageVoiceResult) {
      const obj2 = { disabled: tmp18, label: stringResult, subLabel: stringResult1, value: constants2.NULL };
      tmp18 = muted || guildMuted;
      if (constants2.ALL_MESSAGES === defaultSetting) {
        const intl11 = tmp5(1126).intl;
        stringResult1 = intl11.string(tmp5(1126).t["n/bTaY"]);
      } else if (constants2.ONLY_MENTIONS === defaultSetting) {
        const intl10 = tmp5(1126).intl;
        stringResult1 = intl10.format(tmp5(1126).t.L2hmYy, {});
      } else if (constants2.NO_MESSAGES === defaultSetting) {
        const intl15 = tmp5(1126).intl;
        stringResult1 = intl15.string(tmp5(1126).t.CtVGyQ);
      }
      const items = [authStore3(TableRadioRow, obj2), ,];
      let tmp21 = muted;
      const TableRadioRow5 = tmp7(6071).TableRadioRow;
      if (!muted) {
        tmp21 = guildMuted;
      }
      const obj3 = { disabled: tmp21, value: constants2.ONLY_MENTIONS, label: intl12.string(tmp7(1126).t["BENn/6"]) };
      intl12 = tmp7(1126).intl;
      items[1] = authStore3(TableRadioRow5, obj3);
      const TableRadioRow6 = tmp7(6071).TableRadioRow;
      if (!muted) {
        muted = guildMuted;
      }
      const obj4 = { disabled: muted, value: constants2.NO_MESSAGES, label: intl13.string(tmp7(1126).t.CtVGyQ) };
      intl13 = tmp7(1126).intl;
      items[2] = authStore3(TableRadioRow6, obj4);
      obj.children = items;
      tmp11Result = authStore4(TableRadioGroup, obj);
    } else {
      const obj5 = {
        label: stringResult,
        subLabel: stringResult2,
        disabled: muted || guildMuted,
        value: constants2.NULL,
      };
      if (constants2.ALL_MESSAGES === defaultSetting) {
        const intl5 = tmp5(1126).intl;
        stringResult2 = intl5.string(tmp5(1126).t["n/bTaY"]);
      } else if (constants2.ONLY_MENTIONS === defaultSetting) {
        const intl4 = tmp5(1126).intl;
        stringResult2 = intl4.format(tmp5(1126).t.L2hmYy, {});
      } else if (constants2.NO_MESSAGES === defaultSetting) {
        const intl14 = tmp5(1126).intl;
        stringResult2 = intl14.string(tmp5(1126).t.CtVGyQ);
      }
      const items1 = [authStore3(TableRadioRow, obj5), , ,];
      const obj6 = {
        label: intl6.string(tmp7(1126).t["n/bTaY"]),
        disabled: muted || guildMuted,
        subLabel: stringResult3,
        value: constants2.ALL_MESSAGES,
      };
      const TableRadioRow2 = tmp7(6071).TableRadioRow;
      intl6 = tmp7(1126).intl;
      stringResult3 = null;
      if (null != guildMemberCount) {
        stringResult3 = null;
        if (guildMemberCount >= closure_15) {
          const intl7 = tmp7(1126).intl;
          stringResult3 = intl7.string(tmp7(1126).t.Dh5p5j);
        }
      }
      items1[1] = authStore3(TableRadioRow2, obj6);
      const obj7 = {
        label: intl8.format(tmp7(1126).t.L2hmYy, {}),
        disabled: muted || guildMuted,
        value: constants2.ONLY_MENTIONS,
      };
      const TableRadioRow3 = tmp7(6071).TableRadioRow;
      intl8 = tmp7(1126).intl;
      items1[2] = authStore3(TableRadioRow3, obj7);
      const obj8 = {
        label: intl9.string(tmp7(1126).t.CtVGyQ),
        disabled: muted || guildMuted,
        value: constants2.NO_MESSAGES,
      };
      const TableRadioRow4 = tmp7(6071).TableRadioRow;
      intl9 = tmp7(1126).intl;
      items1[3] = authStore3(TableRadioRow4, obj8);
      obj.children = items1;
      tmp11Result = authStore4(TableRadioGroup, obj);
    }
    return tmp11Result;
  }
  render() {
    let Stack;
    let guildMessageNotifications;
    let guildMuted;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    let obj4;
    let obj6;
    const self = this;
    const tmp = closure_19(this.context);
    const props = this.props;
    const channel = props.channel;
    ({ guildMuted, guildMessageNotifications } = props);
    let tmp9Result2 = null;
    const tmp2 = React3(channel.type) || channel.isForumLikeChannel();
    if (null != channel) {
      let tmp5;
      if (guildMuted) {
        let obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(intl16.t.O34r15, obj2) };
        const Text = Text_Text.Text;
        intl = intl16.intl;
        obj2 = {
          mutedHook(children, arg1) {
            const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
            return closure_1_16(require("Text/Text").Text, obj, arg1);
          },
        };
        tmp5 = authStore3(Text, obj);
      } else if (guildMessageNotifications === constants2.NO_MESSAGES) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl3.format(intl16.t.nRwUIL, obj4) };
        const Text2 = Text_Text.Text;
        intl3 = intl16.intl;
        obj4 = {
          notificationHook(children, arg1) {
            const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
            return closure_1_16(require("Text/Text").Text, obj, arg1);
          },
        };
        tmp5 = authStore3(Text2, obj3);
      }
      const obj5 = { style: tmp.screenContainer, children: authStore4(Stack, obj6) };
      const Form = Form2.Form;
      obj6 = { spacing: nativeDefault.space.PX_24, style: tmp.stackPadding, children: items };
      Stack = Stack_Stack.Stack;
      let renderMuteSectionResult = null;
      if (tmp2) {
        renderMuteSectionResult = self.renderMuteSection();
      }
      items = [renderMuteSectionResult, self.renderNotificationSettings(), ,];
      let tmp9Result = null;
      if (channel.isForumLikeChannel()) {
        const obj7 = { title: intl2.string(intl16.t.bK11jO), hasIcons: false, children: self.renderForumSettings() };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        intl2 = intl16.intl;
        tmp9Result = authStore3(TableRowGroup, obj7);
      }
      items[2] = tmp9Result;
      items[3] = tmp5;
      tmp9Result2 = authStore3(Form, obj5);
    }
    return tmp9Result2;
  }
}
const prototype = ChannelSettingsNotifications.prototype;
ChannelSettingsNotifications.contextType = native.ThemeContext;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let closure_3;
      let first;
      let stateFromStores;
      let tmp10;
      let tmp19;
      let tmp6;
      let tmp7;
      const tmp = onClose;
      let obj = onClose(stateFromStores[30]);
      const cResult = obj.c(22);
      onClose = onClose.onClose;
      const channelId = onClose.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[31]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        let tmp8 = null;
        let guildId;
        if (stateFromStores != null) {
          guildId = stateFromStores.getGuildId();
        }
        cResult[3] = stateFromStores;
        cResult[4] = guildId;
        tmp7 = guildId;
      } else {
        tmp7 = cResult[4];
      }
      react = tmp7;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserGuildSettingsStore];
        cResult[5] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === channelId) {
          let tmp12;
          let tmp14;
          if (cResult[8] === tmp7) {
            tmp12 = cResult[9];
          }
          const tmpResult3 = tmp(stateFromStores[31]);
          const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp10, tmp12);
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [GuildMemberCountStore];
            cResult[10] = items2;
            tmp14 = items2;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== tmp7) {
            class E {
              constructor() {
                return GuildMemberCountStore.getMemberCount(closure_3);
              }
            }
            cResult[11] = tmp7;
            cResult[12] = E;
          } else {
            class E {
              constructor() {
                return GuildMemberCountStore.getMemberCount(closure_3);
              }
            }
          }
          const tmpResult4 = tmp(stateFromStores[31]);
          const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, E);
          if (cResult[13] === stateFromStores) {
            class E {
              constructor() {
                return GuildMemberCountStore.getMemberCount(closure_3);
              }
            }
            const effect = react.useEffect(R, tmp19);
            if (cResult[17] === stateFromStores) {
              class E {
                constructor() {
                  return GuildMemberCountStore.getMemberCount(closure_3);
                }
              }
            }
            let tmp23 = null;
            if (null != stateFromStores) {
              class E {
                constructor() {
                  return GuildMemberCountStore.getMemberCount(closure_3);
                }
              }
              const obj2 = { onClose, channel: stateFromStores, guildMemberCount: stateFromStores1 };
              const merged = Object.assign(stateFromStoresObject);
              tmp23 = closure_16(ChannelSettingsNotifications, obj2);
            }
            cResult[17] = stateFromStores;
            cResult[18] = stateFromStores1;
            class R {
              constructor() {
                if (null == stateFromStores) {
                  if (onClose != null) {
                    tmp();
                  }
                }
              }
            }
            cResult[19] = onClose;
            cResult[20] = stateFromStoresObject;
            cResult[21] = tmp23;
          }
          class R {
            constructor() {
              if (null == stateFromStores) {
                if (onClose != null) {
                  tmp();
                }
              }
            }
          }
          const items3 = [stateFromStores, onClose];
          cResult[13] = stateFromStores;
          cResult[14] = onClose;
          cResult[15] = R;
          cResult[16] = items3;
          tmp19 = items3;
        }
      }
      class T {
        constructor() {
          let NULL;
          let newForumThreadsCreated;
          let parent_id;
          if (stateFromStores != null) {
            parent_id = stateFromStores.parent_id;
          }
          if (null != parent_id) {
            NULL = UserGuildSettingsStore.getChannelMessageNotifications(closure_3, stateFromStores.parent_id);
          } else {
            NULL = constants.NULL;
          }
          const messageNotifications = UserGuildSettingsStore.getMessageNotifications(closure_3);
          let tmp8 = messageNotifications;
          if (NULL !== constants.NULL) {
            tmp8 = NULL;
          }
          const obj = {
            messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(closure_3, channelId),
            muted: UserGuildSettingsStore.isChannelMuted(closure_3, channelId),
            muteConfig: UserGuildSettingsStore.getChannelMuteConfig(closure_3, channelId),
            guildMuted: UserGuildSettingsStore.isMuted(closure_3),
            guildMessageNotifications: messageNotifications,
            newForumThreadsCreated,
            defaultSetting: tmp8,
          };
          newForumThreadsCreated =
            null != stateFromStores && UserGuildSettingsStore.getNewForumThreadsCreated(stateFromStores);
          return obj;
        }
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = tmp7;
      cResult[9] = T;
      tmp12 = T;
    }
  : (onClose) => {
      onClose = onClose.onClose;
      const channelId = onClose.channelId;
      let stateFromStores;
      const tmp = onClose;
      let obj = onClose(stateFromStores[31]);
      const items = [ChannelStore];
      stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let guildId;
      if (stateFromStores != null) {
        guildId = stateFromStores.getGuildId();
      }
      const items1 = [UserGuildSettingsStore];
      const tmpResult = tmp(tmp2[31]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
        let NULL;
        let newForumThreadsCreated;
        let parent_id;
        if (stateFromStores != null) {
          parent_id = stateFromStores.parent_id;
        }
        if (null != parent_id) {
          NULL = UserGuildSettingsStore.getChannelMessageNotifications(guildId, stateFromStores.parent_id);
        } else {
          NULL = constants.NULL;
        }
        const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
        let tmp8 = messageNotifications;
        if (NULL !== constants.NULL) {
          tmp8 = NULL;
        }
        const obj = {
          messageNotifications: UserGuildSettingsStore.getChannelMessageNotifications(guildId, channelId),
          muted: UserGuildSettingsStore.isChannelMuted(guildId, channelId),
          muteConfig: UserGuildSettingsStore.getChannelMuteConfig(guildId, channelId),
          guildMuted: UserGuildSettingsStore.isMuted(guildId),
          guildMessageNotifications: messageNotifications,
          newForumThreadsCreated,
          defaultSetting: tmp8,
        };
        newForumThreadsCreated =
          null != stateFromStores && UserGuildSettingsStore.getNewForumThreadsCreated(stateFromStores);
        return obj;
      });
      const items2 = [GuildMemberCountStore];
      const items3 = [stateFromStores, onClose];
      const tmpResult2 = tmp(stateFromStores[31]);
      const stateFromStores1 = tmpResult2.useStateFromStores(items2, () =>
        GuildMemberCountStore.getMemberCount(guildId),
      );
      const effect = guildId.useEffect(() => {
        if (null == stateFromStores) {
          if (onClose != null) {
            tmp();
          }
        }
      }, items3);
      let tmp7 = null;
      if (null != stateFromStores) {
        const obj2 = { onClose, channel: stateFromStores, guildMemberCount: stateFromStores1 };
        const merged = Object.assign(stateFromStoresObject);
        tmp7 = closure_16(ChannelSettingsNotifications, obj2);
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      _require = channelId;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId.channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId.channelId);
        };
        cResult[1] = channelId.channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      const tmpResult2 = require("notifications/NotificationUtils");
      if (null != stateFromStores) {
        let tmp10;
        if (tmpResult2.useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative")) {
          if (set.has(stateFromStores.type)) {
            if (cResult[3] === stateFromStores) {
              let tmp17;
              if (cResult[4] === channelId) {
                tmp17 = cResult[5];
              }
              tmp10 = tmp17;
            }
            const obj2 = { channel: stateFromStores };
            const tmp20 = NotificationSettingsChannelDefault;
            const merged = Object.assign(channelId);
            const tmp24 = closure_16(tmp20, obj2);
            cResult[3] = stateFromStores;
            cResult[4] = channelId;
            cResult[5] = tmp24;
            tmp17 = tmp24;
          }
          tmp8 = tmp10;
        }
        if (cResult[6] !== channelId) {
          const obj3 = {};
          const merged1 = Object.assign(channelId);
          const tmp16 = closure_16(closure_21, obj3);
          cResult[6] = channelId;
          cResult[7] = tmp16;
          tmp10 = tmp16;
        } else {
          tmp10 = cResult[7];
        }
      }
      return tmp8;
    }
  : (arg0) => {
      let channelId;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId.channelId));
      let tmp3 = null;
      const obj2 = require("notifications/NotificationUtils");
      if (null != stateFromStores) {
        if (obj2.useShouldUseNewNotificationSystem("ChannelSettingsNotificationsNative")) {
          let tmp10;
          if (set.has(stateFromStores.type)) {
            const obj3 = { channel: stateFromStores };
            const tmp13 = NotificationSettingsChannelDefault;
            const merged = Object.assign(arg0);
            tmp10 = closure_16(tmp13, obj3);
          }
          tmp3 = tmp10;
        }
        const obj4 = {};
        const merged1 = Object.assign(arg0);
        tmp10 = closure_16(closure_21, obj4);
      }
      return tmp3;
    };
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsNotifications.tsx");

export default tmp7;
