// === Module 17479: SettingsOverviewScreen ===

// Module 17479 (SettingsOverviewScreen)
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15842 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8323).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  hasPremiumSubscriptionToDisplay = hasPremiumSubscriptionToDisplay(4483).useHasPremiumSubscriptionToDisplay();
  let items = [hasPremiumSubscriptionToDisplay];
  const node = noop.useMemo(() => {
    const obj2 = { label: null, settings: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.C6COaT);
    let PREMIUM = null;
    if (!hasPremiumSubscriptionToDisplay) {
      PREMIUM = MobileUserSettings.PREMIUM;
    }
    const items = [PREMIUM, , , , , , , , , , ];
    ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], SPONSORED_CONTENT_PREFERENCES: arr[4], FAMILY_CENTER: arr[5], AUTHORIZED_APPS: arr[6], DEVICES: arr[7], CONNECTIONS: arr[8], CLIPS: arr[9], SCAN_QR_CODE: arr[10] } = MobileUserSettings);
    obj2.settings = items.filter(GlobalUtils.isNotNullish);
    const items1 = [obj2, , , , , , , , , ];
    const obj3 = { label: null, settings: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["SuS+RB"]);
    const items2 = [, , , , , , , ];
    ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = MobileUserSettings);
    let PREMIUM1 = null;
    if (hasPremiumSubscriptionToDisplay) {
      PREMIUM1 = MobileUserSettings.PREMIUM;
    }
    const obj4 = { sections: null };
    items2[2] = PREMIUM1;
    ({ PREMIUM_MANAGE_SUBSCRIPTIONS: arr3[3], PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = MobileUserSettings);
    obj3.settings = items2.filter(GlobalUtils.isNotNullish);
    items1[1] = obj3;
    const obj5 = { label: null, settings: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.f2n1TP);
    const items3 = [, , , , , , , , , , ];
    ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], TYPING_INDICATOR: arr4[5], WEB_BROWSER: arr4[6], NOTIFICATIONS: arr4[7] } = MobileUserSettings);
    items3[8] = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
    ({ APP_ICONS: arr4[9], ADVANCED: arr4[10] } = MobileUserSettings);
    obj5.settings = items3.filter(GlobalUtils.isNotNullish);
    items1[2] = obj5;
    const obj6 = { label: null, settings: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["Yl/Riu"]);
    const items4 = [, , ];
    ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = MobileUserSettings);
    obj6.settings = items4;
    items1[3] = obj6;
    const obj7 = { label: null, settings: null };
    const intl5 = util.intl;
    obj7.label = intl5.string(util.t.LRmNAl);
    const items5 = [MobileUserSettings.CHANGE_LOG];
    obj7.settings = items5;
    items1[4] = obj7;
    const obj8 = { settings: null };
    const items6 = [MobileUserSettings.LOGOUT];
    obj8.settings = items6;
    items1[5] = obj8;
    const obj9 = { label: null, settings: null };
    const intl6 = util.intl;
    obj9.label = intl6.string(util.t.CbItOL);
    const items7 = [, , , , , , ];
    ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = MobileUserSettings);
    obj9.settings = items7;
    items1[6] = obj9;
    const obj10 = { label: null, settings: null };
    const intl7 = util.intl;
    obj10.label = intl7.string(util.t["/tZh0A"]);
    const items8 = [, ];
    ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = MobileUserSettings);
    obj10.settings = items8;
    items1[7] = obj10;
    const obj11 = { label: "Build Status", settings: null };
    const items9 = [, , , ];
    ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = MobileUserSettings);
    obj11.settings = items9;
    items1[8] = obj11;
    const obj12 = { label: "Staff Settings", settings: null };
    const items10 = [, , ];
    ({ SHOW_DEV_WIDGET: arr11[0], SHOW_DEV_TOOLS: arr11[1], DESIGN_SYSTEMS: arr11[2] } = MobileUserSettings);
    obj12.settings = items10;
    items1[9] = obj12;
    obj4.sections = items1;
    return SettingBuilders.createList(obj4);
  }, items);
  return jsx(hasPremiumSubscriptionToDisplay(15058).SearchableSettingsList, { node });
};