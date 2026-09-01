// discord_app/modules/notifications/settings/native/MobileNotifSettingsNodes.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../NotificationSettings.messages.js";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.wv4QHR);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle1 = createToggle.createToggle(obj);
const toggle2 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
});
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.n0Wp6j);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle3 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
});
const obj2 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle4 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
});
const obj3 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Iy9grw);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle5 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
});
const obj4 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const toggle6 = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
});
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["9EDo+/"]);
  },
  useValue() {
    return true;
  },
  onValueChange() {},
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL,
  usePredicate() {
    return false;
  },
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const Reactions = toggle;
export const MissedMessagesLow = toggle1;
export const MissedMessagesDefault = toggle2;
export const VoiceActivityLow = toggle3;
export const VoiceActivityDefault = toggle4;
export const GamingLow = toggle5;
export const GamingDefault = toggle6;
