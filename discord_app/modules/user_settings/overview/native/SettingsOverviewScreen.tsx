// discord_app/modules/user_settings/overview/native/SettingsOverviewScreen.tsx
import noop from "noop";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  hasPremiumSubscriptionToDisplay = hasPremiumSubscriptionToDisplay(3931).useHasPremiumSubscriptionToDisplay();
  let items = [hasPremiumSubscriptionToDisplay];
  const node = React.useMemo(() => {
    let obj = hasPremiumSubscriptionToDisplay(outer1_1[6]);
    obj = { label: null, settings: null };
    const intl = hasPremiumSubscriptionToDisplay(outer1_1[3]).intl;
    obj[0] = intl.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t.C6COaT);
    let PREMIUM = null;
    if (!hasPremiumSubscriptionToDisplay) {
      PREMIUM = outer1_3.PREMIUM;
    }
    const items = [PREMIUM, , , , , , , , , ];
    ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], FAMILY_CENTER: arr[4], AUTHORIZED_APPS: arr[5], DEVICES: arr[6], CONNECTIONS: arr[7], CLIPS: arr[8], SCAN_QR_CODE: arr[9] } = outer1_3);
    obj[1] = items.filter(hasPremiumSubscriptionToDisplay(outer1_1[4]).isNotNullish);
    const items1 = [obj, , , , , , , , , ];
    obj = { label: null, settings: null };
    const intl2 = tmp(tmp2[3]).intl;
    obj[0] = intl2.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t["SuS+RB"]);
    const items2 = [, , , , , , , ];
    ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = outer1_3);
    let PREMIUM1 = null;
    if (hasPremiumSubscriptionToDisplay) {
      PREMIUM1 = tmp6.PREMIUM;
    }
    const obj1 = { sections: null };
    items2[2] = PREMIUM1;
    ({ PREMIUM_MANAGE_SUBSCRIPTIONS: arr3[3], PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = outer1_3);
    obj[1] = items2.filter(hasPremiumSubscriptionToDisplay(outer1_1[4]).isNotNullish);
    items1[1] = obj;
    const obj2 = { label: null, settings: null };
    const intl3 = tmp(tmp2[3]).intl;
    obj2[0] = intl3.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t.f2n1TP);
    const items3 = [, , , , , , , , ];
    ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], WEB_BROWSER: arr4[5], NOTIFICATIONS: arr4[6], APP_ICONS: arr4[7], ADVANCED: arr4[8] } = outer1_3);
    obj2[1] = items3.filter(hasPremiumSubscriptionToDisplay(outer1_1[4]).isNotNullish);
    items1[2] = obj2;
    const obj3 = { label: null, settings: null };
    const intl4 = tmp(tmp2[3]).intl;
    obj3[0] = intl4.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t["Yl/Riu"]);
    const items4 = [, , ];
    ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = outer1_3);
    obj3[1] = items4;
    items1[3] = obj3;
    const obj4 = { label: null, settings: null };
    const intl5 = tmp(tmp2[3]).intl;
    obj4[0] = intl5.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t.LRmNAl);
    const items5 = [outer1_3.CHANGE_LOG];
    obj4[1] = items5;
    items1[4] = obj4;
    const items6 = [outer1_3.LOGOUT];
    items1[5] = { settings: items6 };
    const obj5 = { label: null, settings: null };
    const intl6 = tmp(tmp2[3]).intl;
    obj5[0] = intl6.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t.CbItOL);
    const items7 = [, , , , , , ];
    ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = outer1_3);
    obj5[1] = items7;
    items1[6] = obj5;
    const obj6 = { label: null, settings: null };
    const intl7 = tmp(tmp2[3]).intl;
    obj6[0] = intl7.string(hasPremiumSubscriptionToDisplay(outer1_1[3]).t["/tZh0A"]);
    const items8 = [, ];
    ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = outer1_3);
    obj6[1] = items8;
    items1[7] = obj6;
    const items9 = [, , , ];
    ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = outer1_3);
    items1[8] = { label: "Build Status", settings: items9 };
    const items10 = [, , ];
    ({ SHOW_DEV_WIDGET: arr11[0], SHOW_DEV_TOOLS: arr11[1], DESIGN_SYSTEMS: arr11[2] } = outer1_3);
    items1[9] = { label: "Staff Settings", settings: items10 };
    obj1[0] = items1;
    return obj.createList(obj1);
  }, items);
  return jsx(hasPremiumSubscriptionToDisplay(13794).SearchableSettingsList, { node });
};