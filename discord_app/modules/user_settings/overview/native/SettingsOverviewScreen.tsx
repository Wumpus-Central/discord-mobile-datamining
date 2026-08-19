// === Module 16122: SettingsOverviewScreen ===

// Module 16122 (SettingsOverviewScreen)
import noop from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  hasPremiumSubscriptionToDisplay = hasPremiumSubscriptionToDisplay(4039).useHasPremiumSubscriptionToDisplay();
  let items = [hasPremiumSubscriptionToDisplay];
  const node = React.useMemo(() => {
    hasPremiumSubscriptionToDisplay(dependencyMap[6]);
    let obj = { label: null, settings: null };
    const intl = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj[0] = intl.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t.C6COaT);
    let PREMIUM = null;
    if (!hasPremiumSubscriptionToDisplay) {
      PREMIUM = MobileUserSettings.PREMIUM;
    }
    const items = [PREMIUM, , , , , , , , , , ];
    ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], SPONSORED_CONTENT_PREFERENCES: arr[4], FAMILY_CENTER: arr[5], AUTHORIZED_APPS: arr[6], DEVICES: arr[7], CONNECTIONS: arr[8], CLIPS: arr[9], SCAN_QR_CODE: arr[10] } = MobileUserSettings);
    obj[1] = items.filter(hasPremiumSubscriptionToDisplay(dependencyMap[4]).isNotNullish);
    const items1 = [obj, , , , , , , , , ];
    obj = { label: null, settings: null };
    const intl2 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj[0] = intl2.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t["SuS+RB"]);
    const items2 = [, , , , , , , ];
    ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = MobileUserSettings);
    let PREMIUM1 = null;
    if (hasPremiumSubscriptionToDisplay) {
      PREMIUM1 = MobileUserSettings.PREMIUM;
    }
    obj1 = { sections: null };
    items2[2] = PREMIUM1;
    ({ PREMIUM_MANAGE_SUBSCRIPTIONS: arr3[3], PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = MobileUserSettings);
    obj[1] = items2.filter(hasPremiumSubscriptionToDisplay(dependencyMap[4]).isNotNullish);
    items1[1] = obj;
    const obj2 = { label: null, settings: null };
    const intl3 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj2[0] = intl3.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t.f2n1TP);
    const items3 = [, , , , , , , , , ];
    ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], TYPING_INDICATOR: arr4[5], WEB_BROWSER: arr4[6], NOTIFICATIONS: arr4[7], APP_ICONS: arr4[8], ADVANCED: arr4[9] } = MobileUserSettings);
    obj2[1] = items3.filter(hasPremiumSubscriptionToDisplay(dependencyMap[4]).isNotNullish);
    items1[2] = obj2;
    const obj3 = { label: null, settings: null };
    const intl4 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj3[0] = intl4.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t["Yl/Riu"]);
    const items4 = [, , ];
    ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = MobileUserSettings);
    obj3[1] = items4;
    items1[3] = obj3;
    const obj4 = { label: null, settings: null };
    const intl5 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj4[0] = intl5.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t.LRmNAl);
    const items5 = [MobileUserSettings.CHANGE_LOG];
    obj4[1] = items5;
    items1[4] = obj4;
    const items6 = [MobileUserSettings.LOGOUT];
    items1[5] = { settings: items6 };
    const obj5 = { label: null, settings: null };
    const intl6 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj5[0] = intl6.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t.CbItOL);
    const items7 = [, , , , , , ];
    ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = MobileUserSettings);
    obj5[1] = items7;
    items1[6] = obj5;
    const obj6 = { label: null, settings: null };
    const intl7 = hasPremiumSubscriptionToDisplay(dependencyMap[3]).intl;
    obj6[0] = intl7.string(hasPremiumSubscriptionToDisplay(dependencyMap[3]).t["/tZh0A"]);
    const items8 = [, ];
    ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = MobileUserSettings);
    obj6[1] = items8;
    items1[7] = obj6;
    const items9 = [, , , ];
    ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = MobileUserSettings);
    items1[8] = { label: "Build Status", settings: items9 };
    const items10 = [, , ];
    ({ SHOW_DEV_WIDGET: arr11[0], SHOW_DEV_TOOLS: arr11[1], DESIGN_SYSTEMS: arr11[2] } = MobileUserSettings);
    items1[9] = { label: "Staff Settings", settings: items10 };
    obj1[0] = items1;
    return obj.createList(obj1);
  }, items);
  return jsx(hasPremiumSubscriptionToDisplay(13992).SearchableSettingsList, { node });
};