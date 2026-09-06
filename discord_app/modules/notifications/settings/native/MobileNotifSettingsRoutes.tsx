// === Module 15915: route ===

// Module 15915 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2722 */;
import BellIcon from "BellIcon" /* 9776 */;
import getNamedExperiment from "getNamedExperiment" /* 14450 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15914 */;
import frozen from "frozen" /* 15916 */;
import createToggle from "createToggle" /* 11468 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable("RootRoute");
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require(15917).default;
  }
};
obj[4] = obj;
const route = createToggle.createRoute(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("REALTIME");
  },
  screen: {
    route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
    getComponent() {
      return require(15919).default;
    }
  }
};
const route1 = createToggle.createRoute(obj1);
const obj3 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: null
};
const obj2 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require(15919).default;
  }
};
obj3[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15920).default;
  }
};
const route2 = createToggle.createRoute(obj3);
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: null
};
const obj4 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15920).default;
  }
};
obj5[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15921).default;
  }
};
const route3 = createToggle.createRoute(obj5);
const obj7 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: null
};
const obj6 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15921).default;
  }
};
obj7[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15922).default;
  }
};
const route4 = createToggle.createRoute(obj7);
const obj8 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15922).default;
  }
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;