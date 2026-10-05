// === Module 12495: InAppNotificationSettingsModal ===

// Module 12495 (InAppNotificationSettingsModal)
import intl4 from "intl" /* 1126 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import useChannelName from "useChannelName" /* 5043 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6010 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import Form2 from "Form" /* 8895 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 12496 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

let c10;
let c9;
let closure_12;
let unpackModuleId;
const isMultiUserDM = ChannelRecord.isMultiUserDM;
({ ChannelTypes: c9, UserSettingsSections: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PureComponent = react.PureComponent;
class InAppNotificationSettingsScreen extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.handleGroupDMMute = function handleGroupDMMute() {
      let NotificationLabel;
      let channel;
      let isMuted;
      let obj2;
      ({ channel, isMuted } = require.props);
      if (null != channel) {
        const obj = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj2, label: NotificationLabel.muted(!isMuted) };
        const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
        NotificationSettingsModalActionCreatorsDefault;
        obj2 = { muted: !isMuted };
        NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateChannelOverrideSettings(obj);
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      const obj = openUserSettings;
      const obj2 = { screen: constants.NOTIFICATIONS };
      obj.openUserSettings(obj2);
    };
    return applyArgumentsResult;
  }
  renderGroupDMNotificationSettings() {
    let FormSwitchRow;
    let intl;
    let obj3;
    let obj4;
    const channel = this.props.channel;
    if (null == channel) {
      return null;
    } else {
      const obj = useChannelName;
      const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      const obj2 = { children: unpackModuleId(FormSwitchRow, obj3) };
      const FormSection = Form2.FormSection;
      obj3 = { label: intl.format(intl4.t["u/rEuc"], obj4), value: tmp2, onValueChange: tmp.handleGroupDMMute };
      FormSwitchRow = Form2.FormSwitchRow;
      intl = intl4.intl;
      obj4 = { name: channelName };
      return unpackModuleId(FormSection, obj2);
    }
  }
  renderTextChannelNotificationSettings() {
    const channel = this.props.channel;
    let tmp = null;
    if (null != channel) {
      const obj = { channelId: channel.id };
      tmp = unpackModuleId(ChannelSettingsNotificationsDefault, obj);
    }
    return tmp;
  }
  renderChannelNotificationSettings() {
    const self = this;
    const channel = this.props.channel;
    if (null == channel) {
      return null;
    } else {
      const type = channel.type;
      if (constants.GROUP_DM === type) {
        return self.renderGroupDMNotificationSettings();
      } else {
        if (constants.GUILD_TEXT !== type) {
          if (constants.GUILD_ANNOUNCEMENT !== type) {
            if (constants.GUILD_APP !== type) {
              return null;
            }
          }
        }
        return self.renderTextChannelNotificationSettings();
      }
    }
  }
  render() {
    let FormRow;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj3;
    const obj = { children: items };
    const Form = Form2.Form;
    items = [this.renderChannelNotificationSettings(), , ];
    const obj2 = { title: intl.string(intl4.t.clE4PU), children: unpackModuleId(FormRow, obj3) };
    const FormSection = Form2.FormSection;
    intl = intl4.intl;
    obj3 = { label: intl2.string(intl4.t.cHMaba), onPress: this.handleOpenUserSettings, trailing: unpackModuleId(Form2.FormRow.Arrow, {}) };
    FormRow = Form2.FormRow;
    intl2 = intl4.intl;
    items[1] = unpackModuleId(FormSection, obj2);
    const obj4 = { children: intl3.string(intl4.t.avgbp1) };
    const FormHint = Form2.FormHint;
    intl3 = intl4.intl;
    items[2] = unpackModuleId(FormHint, obj4);
    return closure_12(Form, obj);
  }
}
const prototype = InAppNotificationSettingsScreen.prototype;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp6;
  const obj = channel(576);
  const cResult = obj.c(6);
  const tmp = channel;
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(channel.type)) {
          isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === channel) {
    let tmp8;
    if (cResult[4] === stateFromStores) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const tmp9 = closure_11(InAppNotificationSettingsScreen, { channel, isMuted: stateFromStores });
  cResult[3] = channel;
  cResult[4] = stateFromStores;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((channel) => {
  channel = channel.channel;
  const items = [UserGuildSettingsStore];
  const obj = channel(504);
  const obj2 = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(channel.type)) {
          isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return closure_11(InAppNotificationSettingsScreen, obj2);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let closure_0;
  let obj4;
  let onClose;
  let tmpResult;
  const obj = require("react");
  const cResult = obj.c(5);
  ({ channelId, onClose } = arg0);
  if (cResult[0] === channelId) {
    let tmp4;
    let tmp5;
    if (cResult[1] === onClose) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" };
      const tmp7 = closure_11(require("Navigator").Navigator, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  _require = ChannelStore.getChannel(channelId);
  const obj3 = { IN_APP_NOTIFICATION_SETTINGS: obj4 };
  obj4 = {
    headerTitle() {
      let channelName;
      let intl;
      const obj = { title: intl.string(channelId(closure_2_2[12]).t.h850Ss), subtitle: channelName };
      const NavigatorHeader = channelId(closure_2_2[18]).NavigatorHeader;
      intl = channelId(closure_2_2[12]).intl;
      channelName = null;
      if (null != channel) {
        const tmp3Result = channelId(closure_2_2[10]);
        channelName = tmp3Result.computeChannelName(channel, closure_2_8, closure_2_6, true);
      }
      return closure_2_11(NavigatorHeader, obj);
    },
    headerLeft: tmpResult.getHeaderCloseButton(onClose),
    render() {
      const obj = { channel };
      return closure_2_11(closure_2_14, obj);
    }
  };
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
  tmpResult = require("NavigatorHeader");
}) : ((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = react.useMemo(() => {
    let obj2;
    let obj3;
    const channel = ChannelStore.getChannel(channelId);
    let obj = { IN_APP_NOTIFICATION_SETTINGS: obj2 };
    obj2 = {
      headerTitle() {
        let channelName;
        let intl;
        const obj = { title: intl.string(channelId(closure_2_2[12]).t.h850Ss), subtitle: channelName };
        const NavigatorHeader = channelId(closure_2_2[18]).NavigatorHeader;
        intl = channelId(closure_2_2[12]).intl;
        channelName = null;
        if (null != channel) {
          const tmp3Result = channelId(closure_2_2[10]);
          channelName = tmp3Result.computeChannelName(channel, closure_2_8, closure_2_6, true);
        }
        return closure_2_11(NavigatorHeader, obj);
      },
      headerLeft: obj3.getHeaderCloseButton(onClose),
      render() {
        const obj = { channel };
        return closure_2_11(closure_2_14, obj);
      }
    };
    obj3 = NavigatorHeader2;
    return obj;
  }, items);
  return closure_11(channelId(6496).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
}));
let result = size.fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;