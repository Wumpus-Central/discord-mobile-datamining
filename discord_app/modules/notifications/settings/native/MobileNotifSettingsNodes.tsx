// === Module 15923: MobileNotifSettingsNodes ===

// Module 15923 (MobileNotifSettingsNodes)
import util from "util" /* 1114 */;
import _modDef2722 from "module_2722" /* 2722 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 13679 */;
import NotifSettings from "NotifSettings" /* 14445 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14450 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15914 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 15924 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.wv4QHR);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle = SettingBuilders.createToggle(obj);
obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle1 = SettingBuilders.createToggle(obj);
const toggle2 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
});
const obj1 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle3 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
});
const obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle4 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
});
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle5 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
});
const obj4 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle6 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT, arg0);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const Reactions = toggle;
export const MissedMessagesLow = toggle1;
export const MissedMessagesDefault = toggle2;
export const VoiceActivityLow = toggle3;
export const VoiceActivityDefault = toggle4;
export const GamingLow = toggle5;
export const GamingDefault = toggle6;