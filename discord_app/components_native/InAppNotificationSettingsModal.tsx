// === Module 10394: InAppNotificationSettingsModal ===

// Module 10394 (InAppNotificationSettingsModal)
import util from "util" /* 1115 */;
import useChannelName from "useChannelName" /* 4909 */;
import NavigatorHeader from "NavigatorHeader" /* 5836 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7354 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7359 */;
import Form from "Form" /* 8870 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 10395 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ConnectedInAppNotificationSettingsScreen(channel) {
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
}
const isMultiUserDM = fn(2045).isMultiUserDM;
const Constants = fn(1074);
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
        const obj = NotificationSettingsModalActionCreatorsDefault;
        const guildId = channel.getGuildId();
        const obj2 = { muted: !isMuted };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj2, NotificationLabel.muted(!isMuted));
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
  return closure_1_12(Form.Form, obj);
};
const size = fn(2);
let result = size.fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default noop.memo((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = noop.useMemo(() => {
    const channel = ChannelStore.getChannel(channelId);
    let obj = { IN_APP_NOTIFICATION_SETTINGS: null };
    const obj2 = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = channelId(1115).intl;
        obj.title = intl.string(channelId(1115).t.h850Ss);
        let channelName = null;
        if (null != closure_0) {
          const tmp3Result = channelId(4909);
          channelName = tmp3Result.computeChannelName(closure_0, UserStore, RelationshipStore, true);
        }
        obj.subtitle = channelName;
        return closure_2_11(channelId(5836).NavigatorHeader, obj);
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
      render() {
        return closure_2_11(ConnectedInAppNotificationSettingsScreen, { channel });
      }
    };
    obj.IN_APP_NOTIFICATION_SETTINGS = obj2;
    return obj;
  }, items);
  return closure_11(channelId(7240).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});