// discord_app/modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2723 from "../../NotificationSettings.messages.js";
import BellIcon from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import notifications_NotificationSettingsUtils from "../../NotificationSettingsUtils.tsx";
import MobileNotifSettings from "../../../user_settings/notifications/native/codegen/MobileNotifSettings.tsx";
import MobileNotifSettingsSections from "../../../user_settings/notifications/native/codegen/MobileNotifSettingsSections.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
};
const route = SettingBuilders.createRoute(obj);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2723.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("REALTIME");
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
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require("RedesignSettingsRealtimeScreen").default;
  },
};
const route1 = SettingBuilders.createRoute(obj3);
let SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2723["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: null,
};
const obj4 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require("RedesignSettingsRealtimeScreen").default;
  },
};
obj5.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  },
};
const route2 = SettingBuilders.createRoute(obj5);
let SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2723.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: null,
};
const obj6 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require("RedesignSettingsCategorySocialScreen").default;
  },
};
obj7.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  },
};
const route3 = SettingBuilders.createRoute(obj7);
let SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2723.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return notifications_NotificationSettingsUtils.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: null,
};
const obj8 = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require("RedesignSettingsCategoryServerScreen").default;
  },
};
obj9.screen = {
  route: MobileNotifSettingsSections.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require("RedesignSettingsCategoryOtherScreen").default;
  },
};
const route4 = SettingBuilders.createRoute(obj9);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;
