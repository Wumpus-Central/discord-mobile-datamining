// === Module 17297: MobileNotifSettingsNodes ===

// Module 17297 (MobileNotifSettingsNodes)
import util from "util" /* 1128 */;
import _modDef2864 from "module_2864" /* 2864 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 14965 */;
import NotifSettings from "NotifSettings" /* 15669 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15673 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16808 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17298 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 17299 */;
import SettingBuilders_mod from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.NxgGZA);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["4McnAv"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.NxgGZA);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["4McnAv"]);
  }
};
const toggle1 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["IUH/Oe"]);
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
    return intl.string(_modDef2864.YvbYqb);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj2 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["IUH/Oe"]);
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
    return intl.string(_modDef2864.YvbYqb);
  }
};
const toggle2 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.n0Wp6j);
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
    return intl.string(_modDef2864.N14gsO);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.n0Wp6j);
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
    return intl.string(_modDef2864.N14gsO);
  }
};
const toggle3 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.n0Wp6j);
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
    return intl.string(_modDef2864.N14gsO);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.n0Wp6j);
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
    return intl.string(_modDef2864.N14gsO);
  }
};
const toggle4 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.S9Z8aG);
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
    return intl.string(_modDef2864["70621N"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.S9Z8aG);
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
    return intl.string(_modDef2864["70621N"]);
  }
};
const toggle5 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.roU6W6);
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
    return intl.string(_modDef2864["AKm6+k"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.roU6W6);
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
    return intl.string(_modDef2864["AKm6+k"]);
  }
};
const toggle6 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.nLISld);
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
    return intl.string(_modDef2864.rCdFq6);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.nLISld);
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
    return intl.string(_modDef2864.rCdFq6);
  }
};
const toggle7 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.AAZKLL);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.ReIwY3);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj8 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.AAZKLL);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.ReIwY3);
  }
};
const toggle8 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["/aEaD/"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.UamA9K);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["/aEaD/"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.UamA9K);
  }
};
const toggle9 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.nDMkO6);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.FpYT36);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj10 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.nDMkO6);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.FpYT36);
  }
};
const toggle10 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["8t+tz0"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.AgSgnj);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj11 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["8t+tz0"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.AgSgnj);
  }
};
const toggle11 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.semyB9);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.cmBiIi);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj12 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.semyB9);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.cmBiIi);
  }
};
const toggle12 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.tQCxJ5);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.IvKJa3);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj13 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.tQCxJ5);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.IvKJa3);
  }
};
const toggle13 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.LjJQt7);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.BDz0u9);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj14 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.LjJQt7);
  },
  useValue() {
    return settings_NotifSettingsUtils.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  onValueChange(arg0) {
    return NotifSettingsActionCreators.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING, arg0);
  },
  useIsDisabled() {
    return useIsNotifSettingDisabledDefault(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.BDz0u9);
  }
};
const toggle14 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
const obj15 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
const toggle15 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
const obj16 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
const toggle16 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.Xb2n2D);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj17 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["9EDo+/"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.Xb2n2D);
  }
};
const toggle17 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.Yv02mS);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.bt8V96);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj18 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.Yv02mS);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.bt8V96);
  }
};
const toggle18 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.Iy9grw);
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
    return intl.string(_modDef2864.Iy9grw);
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
const toggle19 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.Iy9grw);
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
    return intl.string(_modDef2864.Iy9grw);
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
const toggle20 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.DxG4wK);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["0fxqGh"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj21 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.DxG4wK);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["0fxqGh"]);
  }
};
const toggle21 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.MOjygY);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["Rb3xh+"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj22 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.MOjygY);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864["Rb3xh+"]);
  }
};
const toggle22 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.wv4QHR);
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
    return intl.string(_modDef2864.wmNqrk);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj23 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.wv4QHR);
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
    return intl.string(_modDef2864.wmNqrk);
  }
};
const toggle23 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["40TIqW"]);
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
    return intl.string(_modDef2864.nuXMqX);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj24 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["40TIqW"]);
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
    return intl.string(_modDef2864.nuXMqX);
  }
};
const toggle24 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.HibKoy);
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
    return intl.string(_modDef2864.CHkkuK);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj25 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.HibKoy);
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
    return intl.string(_modDef2864.CHkkuK);
  }
};
const toggle25 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.kIrLfg);
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
    return intl.string(_modDef2864["izT+u4"]);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj26 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.kIrLfg);
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
    return intl.string(_modDef2864["izT+u4"]);
  }
};
const toggle26 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.tP1neL);
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
    return intl.string(_modDef2864.F3W6x5);
  }
});
let SettingBuilders = SettingBuilders_mod;
const obj27 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864.tP1neL);
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
    return intl.string(_modDef2864.F3W6x5);
  }
};
const toggle27 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2864["4n388K"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2864.Pb4RGX);
  }
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const FriendRequests = toggle;
export const Calls = toggle1;
export const MissedMessagesLow = toggle2;
export const MissedMessagesDefault = toggle3;
export const InvitesReconnecting = toggle4;
export const TrendingSuggestions = toggle5;
export const UpdatesOffers = toggle6;
export const CustomStatusUpdate = toggle7;
export const FriendOnline = toggle8;
export const FriendRequestReminder = toggle9;
export const FriendSuggestions = toggle10;
export const NudgeNewFriendDm = toggle11;
export const ProfileUpdates = toggle12;
export const FriendsGaming = toggle13;
export const FriendsGamingLow = toggle14;
export const FriendsGamingDefault = toggle15;
export const GamingOther = toggle16;
export const GoLive = toggle17;
export const VoiceActivityLow = toggle18;
export const VoiceActivityDefault = toggle19;
export const VoiceChannelActivity = toggle20;
export const Polls = toggle21;
export const Reactions = toggle22;
export const GuildEventNotifications = toggle23;
export const ForumNotifications = toggle24;
export const OtherGuild = toggle25;
export const SafetyAlerts = toggle26;
export const StageNotifications = toggle27;