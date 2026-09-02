// discord_app/modules/notifications/settings/native/MobileNotifSettingsNodes.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../NotificationSettings.messages.js";
import b64ToDeclarativeSettingsProto from "../NotifSettingsUtils.tsx";
import NotifSettings from "../../../../../discord_common/js/shared/shared-constants/NotifSettings.tsx";
import getNamedExperiment from "../../NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import updateNotifSettingValue from "../NotifSettingsActionCreators.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.wv4QHR);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle1 = createToggle.createToggle(obj);
const toggle2 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
    );
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
      arg0,
    );
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
    );
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
      arg0,
    );
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle3 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const obj2 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle4 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
      arg0,
    );
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const obj3 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
      arg0,
    );
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle5 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const obj4 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle6 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return b64ToDeclarativeSettingsProto.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return updateNotifSettingValue.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT, arg0);
  },
  usePredicate() {
    return getNamedExperiment.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const Reactions = toggle;
export const MissedMessagesLow = toggle1;
export const MissedMessagesDefault = toggle2;
export const VoiceActivityLow = toggle3;
export const VoiceActivityDefault = toggle4;
export const GamingLow = toggle5;
export const GamingDefault = toggle6;
