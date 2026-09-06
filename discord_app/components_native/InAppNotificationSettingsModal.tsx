// === Module 10142: InAppNotificationSettingsModal ===

// Module 10142 (InAppNotificationSettingsModal)
import util from "util" /* 1114 */;
import useChannelName from "useChannelName" /* 4713 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import Form from "Form" /* 8593 */;
import ChannelSettingsNotificationsDefault from "ChannelSettingsNotifications" /* 10143 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [UserGuildSettingsStore];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(obj.type)) {
          isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(obj.getGuildId(), obj.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return closure_11(InAppNotificationSettingsScreen, obj);
}
const isMultiUserDM = fn(1961).isMultiUserDM;
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
        const guildId = channel.getGuildId();
        const obj = { muted: !isMuted };
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      applyArgumentsResult(dependencyMap[14]);
      const obj = { screen: constants.NOTIFICATIONS };
      obj.openUserSettings(obj);
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
    let obj = useChannelName;
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    obj = { children: null };
    obj = { label: null, value: null, onValueChange: null };
    const intl = util.intl;
    const obj1 = { name: channelName };
    obj.label = intl.format(util.t["u/rEuc"], obj1);
    obj.value = tmp2;
    obj.onValueChange = tmp.handleGroupDMMute;
    obj.children = closure_1_11(Form.FormSwitchRow, obj);
    return closure_1_11(Form.FormSection, obj);
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
      if (tmp.GUILD_TEXT !== type) {
        if (tmp.GUILD_ANNOUNCEMENT !== type) {
          if (tmp.GUILD_APP !== type) {
            return null;
          }
        }
      }
      return self.renderTextChannelNotificationSettings();
    }
  }
};
prototype["render"] = function render() {
  let obj = { children: null };
  const items = [this.renderChannelNotificationSettings(), , ];
  obj = { title: null, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.clE4PU);
  obj = { label: null, onPress: null, trailing: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.cHMaba);
  obj.onPress = this.handleOpenUserSettings;
  obj.trailing = closure_1_11(Form.FormRow.Arrow, {});
  obj.children = closure_1_11(Form.FormRow, obj);
  items[1] = closure_1_11(Form.FormSection, obj);
  const obj1 = { children: null };
  const intl3 = util.intl;
  obj1.children = intl3.string(util.t.avgbp1);
  items[2] = closure_1_11(Form.FormHint, obj1);
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
    obj = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = channelId(1114).intl;
        obj.title = intl.string(channelId(1114).t.h850Ss);
        let channelName = null;
        if (null != closure_0) {
          const tmp3Result = channelId(4713);
          channelName = tmp3Result.computeChannelName(tmp, UserStore, RelationshipStore, true);
        }
        obj.subtitle = channelName;
        return closure_2_11(channelId(5624).NavigatorHeader, obj);
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
      render() {
        return closure_2_11(ConnectedInAppNotificationSettingsScreen, { channel });
      }
    };
    obj.IN_APP_NOTIFICATION_SETTINGS = obj;
    return obj;
  }, items);
  return closure_11(channelId(7000).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});