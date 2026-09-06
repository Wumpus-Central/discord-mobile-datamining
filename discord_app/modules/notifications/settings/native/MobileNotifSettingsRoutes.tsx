// === Module 15915: MobileNotifSettingsRoutes ===

// Module 15915 (MobileNotifSettingsRoutes)
import util from "util" /* 1114 */;
import _modDef2722 from "module_2722" /* 2722 */;
import BellIcon from "BellIcon" /* 9776 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14450 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15914 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 15916 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

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
  screen: null
};
obj = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require("RedesignSettingsNotificationScreen").default;
  }
};
obj.screen = obj;
const route = SettingBuilders.createRoute(obj);
const obj1 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("REALTIME");
  },
  screen: {
    route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
    getComponent() {
      return require("RedesignSettingsRealtimeScreen").default;
    }
  }
};
const route1 = SettingBuilders.createRoute(obj1);
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: null
};
const obj2 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require("RedesignSettingsRealtimeScreen").default;
  }
};
obj3.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  }
};
const route2 = SettingBuilders.createRoute(obj3);
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: null
};
const obj4 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  }
};
obj5.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  }
};
const route3 = SettingBuilders.createRoute(obj5);
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2722.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: null
};
const obj6 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  }
};
obj7.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require("RedesignSettingsCategoryOtherScreen").default;
  }
};
const route4 = SettingBuilders.createRoute(obj7);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;