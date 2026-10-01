// discord_app/modules/notifications/settings/native/MobileNotifSettingsNodes.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2812 from "../../NotificationSettings.messages.js";
import settings_NotifSettingsUtils from "../NotifSettingsUtils.tsx";
import NotifSettings from "../../../../../discord_common/js/shared/shared-constants/NotifSettings.tsx";
import notifications_NotificationSettingsUtils from "../../NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import NotifSettingsActionCreators from "../NotifSettingsActionCreators.tsx";
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let SettingBuilders = SettingBuilders_mod;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.wv4QHR);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.REACTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.wv4QHR);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.REACTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle1 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle2 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.n0Wp6j);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle3 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle4 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
      arg0,
    );
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle5 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GAMING_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
let SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GAMING_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
};
const toggle6 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2812["9EDo+/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.GAMING_DEFAULT,
    );
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const Reactions = toggle;
export const MissedMessagesLow = toggle1;
export const MissedMessagesDefault = toggle2;
export const VoiceActivityLow = toggle3;
export const VoiceActivityDefault = toggle4;
export const GamingLow = toggle5;
export const GamingDefault = toggle6;
