// === Module 15757: route ===

// Module 15757 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2694 */;
import BellIcon from "BellIcon" /* 9772 */;
import getNamedExperiment from "getNamedExperiment" /* 14344 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15756 */;
import frozen from "frozen" /* 15758 */;
import createToggle from "createToggle" /* 11292 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require(15759).default;
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
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: {
    route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
    getComponent() {
      error = new Error("Not yet supported");
      throw error;
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
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj2 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj3[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
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
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj4 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj5[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
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
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable();
  },
  screen: null
};
const obj6 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj7[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
const route4 = createToggle.createRoute(obj7);
const obj8 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;