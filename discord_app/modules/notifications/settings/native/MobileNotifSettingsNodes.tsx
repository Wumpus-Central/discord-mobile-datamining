// === Module 17640: MobileNotifSettingsNodes ===

// Module 17640 (MobileNotifSettingsNodes)
import util from "util" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 15148 */;
import NotifSettings from "NotifSettings" /* 15850 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15853 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17102 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17641 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 17642 */;
import SettingBuilders_mod from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.XPZ3MF);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
});
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.XPZ3MF);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
};
const toggle1 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.vKk8Pc);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.CALLS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.CALLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.KBUNsG);
  }
});
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.vKk8Pc);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.CALLS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.CALLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.KBUNsG);
  }
};
const toggle2 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
});
let SettingBuilders = SettingBuilders_mod;
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
};
const toggle3 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
};
const toggle4 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Hqhepa);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  usePredicate() {
    let showSettingsToggle = notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.SUMMARY_REMINDER);
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useSummaryReminderNotificationExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
});
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Hqhepa);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  usePredicate() {
    let showSettingsToggle = notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.SUMMARY_REMINDER);
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useSummaryReminderNotificationExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
};
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.XIPvOz);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE, Number(arg0));
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS_CHOICE_ROUTE,
  hideTitle: true,
  useOptions() {
    const obj = { label: null, value: 2 };
    const intl = util.intl;
    obj.label = intl.string(_modDef3207.Lq41PP);
    items = [obj, , ];
    const obj2 = { label: null, value: 1 };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3207.RoC4aT);
    items[1] = obj2;
    const obj3 = { label: null, value: 0 };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3207.kKc6Gs);
    items[2] = obj3;
    return items;
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.XIPvOz);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE, Number(arg0));
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS_CHOICE_ROUTE,
  hideTitle: true,
  useOptions() {
    const obj = { label: null, value: 2 };
    const intl = util.intl;
    obj.label = intl.string(_modDef3207.Lq41PP);
    items = [obj, , ];
    const obj2 = { label: null, value: 1 };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3207.RoC4aT);
    items[1] = obj2;
    const obj3 = { label: null, value: 0 };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3207.kKc6Gs);
    items[2] = obj3;
    return items;
  }
};
const toggle5 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.MKPw1A);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.PYWa6a);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.MKPw1A);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.PYWa6a);
  }
};
const toggle6 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["9JqFYO"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207["lFEv+c"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj8 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["9JqFYO"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207["lFEv+c"]);
  }
};
const toggle7 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.iRfEpH);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.KqazEl);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.iRfEpH);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.KqazEl);
  }
};
const toggle8 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omDugL);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj10 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omDugL);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle9 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omHz4g);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj11 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omHz4g);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle10 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omHz4g);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj12 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.omHz4g);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle11 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Rx1V00);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj13 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Rx1V00);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle12 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4qUGgX"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.Va86jv);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj14 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["4qUGgX"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.Va86jv);
  }
};
const toggle13 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["2IvWoE"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.PKfGnH);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj15 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["2IvWoE"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.PKfGnH);
  }
};
const toggle14 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.YO9vGc);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207["058DO3"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj16 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.YO9vGc);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207["058DO3"]);
  }
};
const toggle15 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.LbsHO0);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.kfH3uY);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj17 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.LbsHO0);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.kfH3uY);
  }
};
const toggle16 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.MrF66q);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GO_LIVE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GO_LIVE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj18 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.MrF66q);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GO_LIVE);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GO_LIVE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle17 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj19 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle18 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj20 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.Iy9grw);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle19 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["3aMhP8"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj21 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["3aMhP8"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle20 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.HS0Ss8);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.POLLS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.POLLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj22 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.HS0Ss8);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.POLLS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.POLLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle21 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["yuHcW/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
});
let SettingBuilders = SettingBuilders_mod;
const obj23 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["yuHcW/"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle22 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.wv4QHR);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.wmNqrk);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj24 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.wv4QHR);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.wmNqrk);
  }
};
const toggle23 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["41yM9h"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.XDPHgU);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj25 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["41yM9h"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.XDPHgU);
  }
};
const toggle24 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.q0w8p2);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  usePredicate() {
    let showSettingsToggle = notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.dreUaR);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj26 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.q0w8p2);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  usePredicate() {
    let showSettingsToggle = notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.dreUaR);
  }
};
const toggle25 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["49F8Gz"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.mQ1mtE);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj27 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207["49F8Gz"]);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.mQ1mtE);
  }
};
const toggle26 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.CdsMVG);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.pM2Bdy);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj28 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.CdsMVG);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.pM2Bdy);
  }
};
const toggle27 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.quwpKF);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.zKIYjm);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj29 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.quwpKF);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3207.zKIYjm);
  }
};
const toggle28 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3207.gFDQiO);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const FriendRequests = toggle;
export const Calls = toggle1;
export const MissedMessagesLow = toggle2;
export const MissedMessagesDefault = toggle3;
export const SummaryReminder = toggle4;
export const ReactionsChoice = radio;
export const InvitesReconnecting = toggle5;
export const TrendingSuggestions = toggle6;
export const UpdatesOffers = toggle7;
export const FriendOnline = toggle8;
export const FriendsGamingLow = toggle9;
export const FriendsGamingDefault = toggle10;
export const CustomStatusUpdate = toggle11;
export const ProfileUpdates = toggle12;
export const FriendRequestReminder = toggle13;
export const NudgeNewFriendDm = toggle14;
export const FriendSuggestions = toggle15;
export const GoLive = toggle16;
export const VoiceActivityLow = toggle17;
export const VoiceActivityDefault = toggle18;
export const VoiceChannelActivity = toggle19;
export const Polls = toggle20;
export const GamingOther = toggle21;
export const Reactions = toggle22;
export const GuildEventNotifications = toggle23;
export const UpcomingServerEvent = toggle24;
export const ForumNotifications = toggle25;
export const OtherGuild = toggle26;
export const SafetyAlerts = toggle27;
export const StageNotifications = toggle28;