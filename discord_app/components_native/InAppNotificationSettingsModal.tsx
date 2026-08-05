// discord_app/components_native/InAppNotificationSettingsModal.tsx
import importAllResult from "noop";
import { isMultiUserDM } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "jsxProd";
import { Form } from "../design/void/Form/native/index.tsx";
import { getSystemLocale } from "../intl/index.native.tsx";
import { computeChannelName } from "../modules/channel/useChannelName.tsx";
import { ChannelSettingsNotificationsGuard } from "channel_settings/ChannelSettingsNotifications.tsx";

let c10;
let c9;
let closure_12;
let unpackModuleId;
let require = arg1;
function ConnectedInAppNotificationSettingsScreen(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [updateUserGuildSettingsInternal];
  obj = {
    channel,
    isMuted: obj.useStateFromStores(items, () => {
      let isChannelMutedResult;
      if (null != channel) {
        if (outer1_4(obj.type)) {
          isChannelMutedResult = outer1_7.isChannelMuted(obj.getGuildId(), obj.id);
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
      let channel;
      let isMuted;
      ({ channel, isMuted } = applyArgumentsResult.props);
      if (null != channel) {
        let obj = outer1_1(outer1_2[8]);
        const guildId = channel.getGuildId();
        obj = { muted: null };
        obj[0] = !isMuted;
        const NotificationLabel = applyArgumentsResult(outer1_2[9]).NotificationLabel;
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
    let obj = computeChannelName /* computeChannelName */;
    const channelName = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    obj = { children: null };
    obj = { label: null, value: null, onValueChange: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const obj1 = { name: null };
    obj1[0] = channelName;
    obj[0] = intl.format(getSystemLocale /* getSystemLocale */.t["u/rEuc"], obj1);
    obj[1] = tmp2;
    obj[2] = tmp.handleGroupDMMute;
    obj[0] = callback(Form /* Form */.FormSwitchRow, obj);
    return callback(Form /* Form */.FormSection, obj);
  }
};
prototype["renderTextChannelNotificationSettings"] = function renderTextChannelNotificationSettings() {
  const channel = this.props.channel;
  let tmp = null;
  if (null != channel) {
    const obj = { channelId: null };
    obj[0] = channel.id;
    tmp = callback(ChannelSettingsNotificationsGuard, obj);
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
          return null;
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
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.clE4PU);
  obj = { label: null, onPress: null, trailing: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.cHMaba);
  obj[1] = this.handleOpenUserSettings;
  obj[2] = callback(Form /* Form */.FormRow.Arrow, {});
  obj[1] = callback(Form /* Form */.FormRow, obj);
  items[1] = callback(Form /* Form */.FormSection, obj);
  const obj1 = { children: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj1[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.avgbp1);
  items[2] = callback(Form /* Form */.FormHint, obj1);
  obj[0] = items;
  return callback2(Form /* Form */.Form, obj);
};
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const screens = importAllResult.useMemo(() => {
    channel = outer1_5.getChannel(channel);
    let obj = { IN_APP_NOTIFICATION_SETTINGS: null };
    obj = {
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = callback(outer1_2[12]).intl;
        obj[0] = intl.string(callback(outer1_2[12]).t.h850Ss);
        let channelName = null;
        if (null != callback) {
          const tmp3Result = callback(outer1_2[10]);
          channelName = tmp3Result.computeChannelName(tmp, outer1_8, outer1_6, true);
        }
        obj[1] = channelName;
        return outer1_11(callback(outer1_2[16]).NavigatorHeader, obj);
      },
      headerLeft: null,
      render: null
    };
    obj[1] = channelId(outer1_2[16]).getHeaderCloseButton(onClose);
    obj[2] = function render() {
      return outer1_11(outer1_14, { channel: closure_0 });
    };
    obj[0] = obj;
    return obj;
  }, items);
  return callback(channelId(5665).Navigator, { screens, initialRouteName: "IN_APP_NOTIFICATION_SETTINGS" });
});
let result = require("ensureGuildLoaded").fileFinishedImporting("components_native/InAppNotificationSettingsModal.tsx");

export default memoResult;