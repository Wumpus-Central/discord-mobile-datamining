// === Module 12495: InAppNotificationSettingsModal ===

// Module 12495 (InAppNotificationSettingsModal)
import util from "util" /* 1126 */;
import useChannelName from "useChannelName" /* 5043 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import Form from "Form" /* 8895 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 12496 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const isMultiUserDM = fn(2055).isMultiUserDM;
const Constants = fn(1085);
({ ChannelTypes: closure_9, UserSettingsSections: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PureComponent = noop.PureComponent;
class InAppNotificationSettingsScreen extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleGroupDMMute = function handleGroupDMMute() {
      ({ channel, isMuted } = applyArgumentsResult.props);
      if (null != channel) {
        const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: null, label: null };
        const obj3 = { muted: !isMuted };
        obj2.settings = obj3;
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        obj2.label = NotificationLabel.muted(!isMuted);
        const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      applyArgumentsResult(dependencyMap[14]).openUserSettings({ screen: constants.NOTIFICATIONS });
    };
    return applyArgumentsResult;
  }
}
const prototype = InAppNotificationSettingsScreen.prototype;
prototype["renderGroupDMNotificationSettings"] = function renderGroupDMNotificationSettings() {
  const channel = this.props.channel;
  if (null == channel) {
    return null;
  } else {
    const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    const obj2 = { children: null };
    const obj3 = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    const obj4 = { name: channelName };
    obj3.label = intl.format(util.t["u/rEuc"], obj4);
    obj3.value = tmp2;
    obj3.onValueChange = tmp.handleGroupDMMute;
    obj2.children = closure_1_11(Form.FormSwitchRow, obj3);
    return closure_1_11(Form.FormSection, obj2);
  }
};
prototype["renderTextChannelNotificationSettings"] = function renderTextChannelNotificationSettings() {
  const channel = this.props.channel;
  let tmp = null;
  if (null != channel) {
    const obj = { channelId: channel.id };
    tmp = closure_1_11(ChannelSettingsNotificationsDefault, obj);
  }
  return tmp;
};
prototype["renderChannelNotificationSettings"] = function renderChannelNotificationSettings() {
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
};
prototype["render"] = function render() {
  const obj = { children: null };
  const items = [this.renderChannelNotificationSettings(), , ];
  const obj2 = { title: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.clE4PU);
  const obj3 = { label: null, onPress: null, trailing: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.cHMaba);
  obj3.onPress = this.handleOpenUserSettings;
  obj3.trailing = closure_1_11(Form.FormRow.Arrow, {});
  obj2.children = closure_1_11(Form.FormRow, obj3);
  items[1] = closure_1_11(Form.FormSection, obj2);
  const obj4 = { children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.avgbp1);
  items[2] = closure_1_11(Form.FormHint, obj4);
  obj.children = items;
  return __initData(Form.Form, obj);
};
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(6);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp6);
  if (cResult[3] === channel) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  const tmp9 = closure_11(InAppNotificationSettingsScreen, { channel, isMuted: stateFromStores });
  cResult[3] = channel;
  cResult[4] = stateFromStores;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  const tmpResult = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  const items = [UserGuildSettingsStore];
  const obj = channel(504);
  return closure_11(InAppNotificationSettingsScreen, {
    channel,
    isMuted: channel(504).useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(channel.type)) {
          isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    })
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(5);
  ({ channelId, onClose } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === onClose) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" };
      const tmp7 = closure_11(tmp(6496).Navigator, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  _require = ChannelStore.getChannel(channelId);
  const obj3 = { IN_APP_NOTIFICATION_SETTINGS: null };
  const obj4 = {
    headerTitle() {
      const obj = { title: null, subtitle: null };
      const intl = channelId(1126).intl;
      obj.title = intl.string(channelId(1126).t.h850Ss);
      let channelName = null;
      if (null != closure_0) {
        const tmp3Result = channelId(5043);
        channelName = tmp3Result.computeChannelName(closure_0, UserStore, RelationshipStore, true);
      }
      obj.subtitle = channelName;
      return closure_2_11(channelId(6010).NavigatorHeader, obj);
    },
    headerLeft: null,
    render: null
  };
  const obj = require("c");
  obj4.headerLeft = require("NavigatorHeader").getHeaderCloseButton(onClose);
  obj4.render = function render() {
    return closure_2_11(closure_2_14, { channel });
  };
  obj3.IN_APP_NOTIFICATION_SETTINGS = obj4;
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
  const tmpResult = require("NavigatorHeader");
}) : ((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = noop.useMemo(() => {
    const channel = ChannelStore.getChannel(channelId);
    let obj = { IN_APP_NOTIFICATION_SETTINGS: null };
    const obj2 = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = channelId(1126).intl;
        obj.title = intl.string(channelId(1126).t.h850Ss);
        let channelName = null;
        if (null != closure_0) {
          const tmp3Result = channelId(5043);
          channelName = tmp3Result.computeChannelName(closure_0, UserStore, RelationshipStore, true);
        }
        obj.subtitle = channelName;
        return closure_2_11(channelId(6010).NavigatorHeader, obj);
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
      render() {
        return closure_2_11(closure_2_14, { channel });
      }
    };
    obj.IN_APP_NOTIFICATION_SETTINGS = obj2;
    return obj;
  }, items);
  return closure_11(channelId(6496).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
}));