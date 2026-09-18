// === Module 16159: MobileNotifSettingsRoutes ===

// Module 16159 (MobileNotifSettingsRoutes)
import util from "util" /* 1115 */;
import _modDef2806 from "module_2806" /* 2806 */;
import BellIcon from "BellIcon" /* 10021 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14669 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15701 */;
import MobileNotifSettingsSections from "MobileNotifSettingsSections" /* 16160 */;
import SettingBuilders_mod from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let SettingBuilders = SettingBuilders_mod;
const obj = {
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
    }
  }
};
const route = SettingBuilders.createRoute(obj);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2806.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("REALTIME");
  },
  screen: null
};
const obj2 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require("RedesignSettingsNotificationScreen").default;
  }
};
obj3.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require("RedesignSettingsRealtimeScreen").default;
  }
};
const route1 = SettingBuilders.createRoute(obj3);
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2806["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: null
};
const obj4 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require("RedesignSettingsRealtimeScreen").default;
  }
};
obj5.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  }
};
const route2 = SettingBuilders.createRoute(obj5);
let SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2806.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: null
};
const obj6 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  }
};
obj7.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  }
};
const route3 = SettingBuilders.createRoute(obj7);
let SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2806.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: null
};
const obj8 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  }
};
obj9.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require("RedesignSettingsCategoryOtherScreen").default;
  }
};
const route4 = SettingBuilders.createRoute(obj9);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;