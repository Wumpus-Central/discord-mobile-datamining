// === Module 15479: route ===

// Module 15479 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2665 */;
import MobileUserSettings2 from "MobileUserSettings" /* 7852 */;
import frozen from "frozen" /* 15480 */;
import createToggle from "createToggle" /* 11031 */;

const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.S5cB9e);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj[3] = obj;
const route = createToggle.createRoute(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["UzRF+8"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: {
    route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
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
    return intl.string(messagesProxyDefault.zRKbpz);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
const obj2 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj3[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
const route2 = createToggle.createRoute(obj3);
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.q5M7HV);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
const obj4 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
obj5[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
const route3 = createToggle.createRoute(obj5);
const obj6 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    error = new Error("Not yet supported");
    throw error;
  }
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RealtimeRoute = route;
export const CategorySocialRoute = route1;
export const CategoryServerRoute = route2;
export const CategoryOtherRoute = route3;