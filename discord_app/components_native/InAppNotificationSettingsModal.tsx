// discord_app/components_native/InAppNotificationSettingsModal.tsx
import getSystemLocale from "../intl/index.native.tsx";
import computeChannelName from "../modules/channel/useChannelName.tsx";
import Form from "../design/void/Form/native/index.tsx";
import ChannelSettingsNotificationsGuardDefault from "channel_settings/ChannelSettingsNotifications.tsx";
import importAllResult from "../../_runtime/00019_noop.js";
import { isMultiUserDM } from "../records/ChannelRecord.tsx";
import closure_5 from "../stores/ChannelStore.tsx";
import closure_6 from "../stores/RelationshipStore.tsx";
import closure_7 from "../stores/UserGuildSettingsStore.tsx";
import closure_8 from "../stores/UserStore.tsx";
import ME from "../Constants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";

require = arg1;
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  let obj = channel(586);
  const items = [closure_7];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (closure_1_4(obj.type)) {
          isChannelMutedResult = closure_1_7.isChannelMuted(obj.getGuildId(), obj.id);
        }
      }
      return isChannelMutedResult;
    }),
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
        let obj = closure_1_1(closure_1_2[8]);
        const guildId = channel.getGuildId();
        obj = { muted: null };
        obj[0] = !isMuted;
        const NotificationLabel = applyArgumentsResult(closure_1_2[9]).NotificationLabel;
        const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
      }
    };
    applyArgumentsResult.handleOpenUserSettings = function handleOpenUserSettings() {
      let obj = applyArgumentsResult(table[14]);
      obj = { screen: constants.NOTIFICATIONS };
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
    obj = { children: null };
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
  const items = [this.renderChannelNotificationSettings(), ,];
  obj = { title: null, children: null };
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
    let obj = { IN_APP_NOTIFICATION_SETTINGS: null };
    obj = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = callback(closure_1_2[12]).intl;
        obj[0] = intl.string(callback(closure_1_2[12]).t.h850Ss);
        let channelName = null;
        if (null != callback) {
          const tmp3Result = callback(closure_1_2[10]);
          channelName = tmp3Result.computeChannelName(tmp, closure_1_8, closure_1_6, true);
        }
        obj[1] = channelName;
        return closure_1_11(callback(closure_1_2[16]).NavigatorHeader, obj);
      },
      headerLeft: channelId(closure_1_2[16]).getHeaderCloseButton(onClose),
      render() {
        return closure_1_11(closure_1_14, { channel: closure_0 });
      },
    };
    obj[0] = obj;
    return obj;
  }, items);
  return callback(channelId(6017).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
let result = require("set").fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;
