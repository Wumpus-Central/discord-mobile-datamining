// === Module 10081: ConnectedInAppNotificationSettingsScreen ===

// Module 10081 (ConnectedInAppNotificationSettingsScreen)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import _modDef6798 from "module_6798" /* 6798 */;
import Form from "Form" /* 8083 */;
import ChannelSettingsNotificationsGuardDefault from "ChannelSettingsNotificationsGuard" /* 10082 */;
import importAllResult from "noop" /* 19 */;
import { isMultiUserDM } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [closure_7];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (isMultiUserDM(channel.type)) {
          isChannelMutedResult = closure_1_7.isChannelMuted(channel.getGuildId(), channel.id);
        }
      }
      return isChannelMutedResult;
    })
  };
  return callback(InAppNotificationSettingsScreen, obj);
}
let c3 = importAllResult;
({ ChannelTypes: c9, UserSettingsSections: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const PureComponent = importAllResult.PureComponent;
class InAppNotificationSettingsScreen extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleGroupDMMute = function handleGroupDMMute() {
      ({ channel, isMuted } = applyArgumentsResult.props);
      if (null != channel) {
        const guildId = channel.getGuildId();
        const obj = { muted: null };
        obj[0] = !isMuted;
        const NotificationLabel = applyArgumentsResult(dependencyMap[9]).NotificationLabel;
        const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      applyArgumentsResult(table[14]);
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
    let obj = computeChannelName;
    const channelName = obj.computeChannelName(channel, closure_8, closure_6);
    obj = { label: null, value: null, onValueChange: null };
    const intl = getSystemLocale.intl;
    obj1 = { name: null };
    obj1[0] = channelName;
    obj[0] = intl.format(getSystemLocale.t["u/rEuc"], obj1);
    obj[1] = tmp2;
    obj[2] = tmp.handleGroupDMMute;
    obj[0] = callback(Form.FormSwitchRow, obj);
    return callback(Form.FormSection, obj);
  }
};
prototype["renderTextChannelNotificationSettings"] = function renderTextChannelNotificationSettings() {
  const channel = this.props.channel;
  let tmp = null;
  if (null != channel) {
    const obj = { channelId: null };
    obj[0] = channel.id;
    tmp = callback(ChannelSettingsNotificationsGuardDefault, obj);
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
          return null;
        }
      }
      return self.renderTextChannelNotificationSettings();
    }
  }
};
prototype["render"] = function render() {
  const items = [this.renderChannelNotificationSettings(), , ];
  let obj = { title: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.clE4PU);
  obj = { label: null, onPress: null, trailing: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.cHMaba);
  obj[1] = this.handleOpenUserSettings;
  obj[2] = callback(Form.FormRow.Arrow, {});
  obj[1] = callback(Form.FormRow, obj);
  items[1] = callback(Form.FormSection, obj);
  obj1 = { children: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.avgbp1);
  items[2] = callback(Form.FormHint, obj1);
  obj[0] = items;
  return callback2(Form.Form, obj);
};
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = importAllResult.useMemo(() => {
    channel = closure_1_5.getChannel(channel);
    let obj = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = callback(closure_1_2[12]).intl;
        obj[0] = intl.string(callback(closure_1_2[12]).t.h850Ss);
        let channelName = null;
        if (null != callback) {
          const tmp3Result = callback(closure_1_2[10]);
          channelName = tmp3Result.computeChannelName(callback, closure_1_8, closure_1_6, true);
        }
        obj[1] = channelName;
        return closure_1_11(callback(closure_1_2[16]).NavigatorHeader, obj);
      },
      headerLeft: channelId(dependencyMap[16]).getHeaderCloseButton(onClose),
      render() {
        return closure_1_11(closure_1_14, { channel: closure_0 });
      }
    };
    obj[0] = obj;
    return obj;
  }, items);
  return callback(channelId(6312).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
let result = require("obj132").fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;