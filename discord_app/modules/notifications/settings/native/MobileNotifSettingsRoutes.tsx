// discord_app/modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3029 from "../../NotificationSettings.messages.js";
import BellIcon from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import settings_NotifSettingsUtils from "../NotifSettingsUtils.tsx";
import NotifSettings from "../../../../../discord_common/js/shared/shared-constants/NotifSettings.tsx";
import notifications_NotificationSettingsUtils from "../../NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import MobileNotifSettingsSections from "../../../user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RootRoute");
  },
  screen: {
    route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
    getComponent() {
      return require("RedesignSettingsNotificationScreen").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029.gbaIfD);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3029.MjXONr);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_CALLS_MESSAGES");
  },
  screen: null,
};
const obj2 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require("RedesignSettingsNotificationScreen").default;
  },
};
obj3.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_CALLS_MESSAGES,
  getComponent() {
    return require("RedesignSettingsCategoryCallsMessagesScreen").default;
  },
};
const route1 = SettingBuilders.createRoute(obj3);
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029["ZwNQS+"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3029.BBFiVq);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_DISCOVERY_HIGHLIGHTS");
  },
  screen: null,
};
const obj4 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_CALLS_MESSAGES,
  getComponent() {
    return require("RedesignSettingsCategoryCallsMessagesScreen").default;
  },
};
obj5.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  getComponent() {
    return require("RedesignSettingsCategoryDiscoveryHighlightsScreen").default;
  },
};
const route2 = SettingBuilders.createRoute(obj5);
let SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029.BBcVf5);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3029.eI4aPM);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_FRIENDS_ACTIVITY");
  },
  screen: null,
};
const obj6 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  getComponent() {
    return require("RedesignSettingsCategoryDiscoveryHighlightsScreen").default;
  },
};
obj7.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  getComponent() {
    return require("RedesignSettingsCategoryFriendsActivityScreen").default;
  },
};
const route3 = SettingBuilders.createRoute(obj7);
let SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029.vcrTV5);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("FRIEND_ACTIVITY_TITLE");
  },
  screen: null,
};
const obj8 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  getComponent() {
    return require("RedesignSettingsCategoryFriendsActivityScreen").default;
  },
};
obj9.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_FRIEND_ACTIVITY_TITLE,
  getComponent() {
    return require("RedesignSettingsFriendActivityTitleScreen").default;
  },
};
const route4 = SettingBuilders.createRoute(obj9);
let SettingBuilders = SettingBuilders_mod;
const obj11 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029.qxdDqr);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3029.r60oLi);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SERVERS");
  },
  screen: null,
};
const obj10 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_FRIEND_ACTIVITY_TITLE,
  getComponent() {
    return require("RedesignSettingsFriendActivityTitleScreen").default;
  },
};
obj11.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVERS,
  getComponent() {
    return require("RedesignSettingsCategoryServersScreen").default;
  },
};
const route5 = SettingBuilders.createRoute(obj11);
let SettingBuilders = SettingBuilders_mod;
const obj13 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3029.wv4QHR);
  },
  useTrailing() {
    const notifSettingRadioValue = settings_NotifSettingsUtils.useNotifSettingRadioValue(
      NotifSettings.NotifSettings.REACTIONS_CHOICE,
    );
    if (2 === notifSettingRadioValue) {
      const intl3 = util.intl;
      return intl3.string(_modDef3029.jUZVYn);
    } else if (1 === notifSettingRadioValue) {
      const intl2 = util.intl;
      return intl2.string(_modDef3029.qggLZW);
    } else if (0 === notifSettingRadioValue) {
      const intl = util.intl;
      return intl.string(_modDef3029.FLSQ8z);
    } else {
      return null;
    }
  },
  unsearchable: true,
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifSettingVisibility(
      NotifSettings.NotifSettings.REACTIONS_CHOICE,
    );
  },
  screen: null,
};
const obj12 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVERS,
  getComponent() {
    return require("RedesignSettingsCategoryServersScreen").default;
  },
};
obj13.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REACTIONS_CHOICE_ROUTE,
  getComponent() {
    return require("RedesignSettingsReactionsChoiceScreen").default;
  },
};
const route6 = SettingBuilders.createRoute(obj13);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const CategoryCallsMessagesRoute = route1;
export const CategoryDiscoveryHighlightsRoute = route2;
export const CategoryFriendsActivityRoute = route3;
export const FriendActivityTitleRoute = route4;
export const CategoryServersRoute = route5;
export const ReactionsChoiceRoute = route6;
