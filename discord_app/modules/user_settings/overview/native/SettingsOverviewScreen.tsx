// === Module 19366: SettingsOverviewScreen ===

// Module 19366 (SettingsOverviewScreen)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17803 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2186 */;

require = fn;
const MobileUserSettings = fn(8503).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/overview/native/SettingsOverviewScreen.tsx");

export default function SettingsOverviewScreen() {
  hasPremiumSubscriptionToDisplay = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[7]).useHasPremiumSubscriptionToDisplay();
  let obj = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[7]);
  staffOrDeveloperSettingPredicate = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[8]).useStaffOrDeveloperSettingPredicate();
  let obj2 = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[8]);
  items = [mapleSyrup3Enabled];
  const stateFromStores = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[9]).useStateFromStores(items, () => mapleSyrup3Enabled.locale);
  let obj3 = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[9]);
  const mapleSyrup1Enabled = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[10]).useMapleSyrup1Enabled("SettingsOverviewScreen");
  let obj4 = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[10]);
  mapleSyrup3Enabled = hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[10]).useMapleSyrup3Enabled("SettingsOverviewScreen");
  let items1 = [hasPremiumSubscriptionToDisplay, staffOrDeveloperSettingPredicate, stateFromStores, mapleSyrup1Enabled, mapleSyrup3Enabled];
  const node = mapleSyrup1Enabled.useMemo(() => {
    const obj2 = { label: null, settings: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.C6COaT);
    let PREMIUM = null;
    if (!hasPremiumSubscriptionToDisplay) {
      PREMIUM = MobileUserSettings.PREMIUM;
    }
    items = [PREMIUM, , , , , , , , , ];
    ({ ACCOUNT: arr[1], CONTENT_AND_SOCIAL: arr[2], DATA_AND_PRIVACY: arr[3], SPONSORED_CONTENT_PREFERENCES: arr[4], FAMILY_CENTER: arr[5], DEVICES: arr[6], CONNECTIONS: arr[7], CLIPS: arr[8], SCAN_QR_CODE: arr[9] } = MobileUserSettings);
    obj2.settings = items.filter(GlobalUtils.isNotNullish);
    const items1 = [obj2, , , , , , , , , ];
    const obj3 = { label: null, settings: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["SuS+RB"]);
    const items2 = [, , , , , , , , ];
    ({ COLLECTIBLES_SHOP: arr3[0], QUEST_HOME: arr3[1] } = MobileUserSettings);
    let PREMIUM1 = null;
    if (hasPremiumSubscriptionToDisplay) {
      PREMIUM1 = null;
      if (!mapleSyrup3Enabled) {
        PREMIUM1 = MobileUserSettings.PREMIUM;
      }
    }
    items2[2] = PREMIUM1;
    let prop = null;
    if (!mapleSyrup1Enabled) {
      prop = MobileUserSettings.PREMIUM_MANAGE_SUBSCRIPTIONS;
    }
    items2[3] = prop;
    ({ PREMIUM_GUILD_BOOSTING: arr3[4], PREMIUM_GIFTING: arr3[5], GUILD_ROLE_SUBSCRIPTIONS: arr3[6], PREMIUM_RESTORE_SUBSCRIPTION: arr3[7] } = MobileUserSettings);
    let prop1 = null;
    if (mapleSyrup1Enabled) {
      prop1 = MobileUserSettings.PREMIUM_MANAGE_SUBSCRIPTIONS;
    }
    items2[8] = prop1;
    obj3.settings = items2.filter(GlobalUtils.isNotNullish);
    items1[1] = obj3;
    const obj4 = { label: null, settings: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.f2n1TP);
    const items3 = [, , , , , , , , , , ];
    ({ VOICE: arr4[0], APPEARANCE: arr4[1], ACCESSIBILITY: arr4[2], LANGUAGE: arr4[3], CHAT: arr4[4], TYPING_INDICATOR: arr4[5], WEB_BROWSER: arr4[6], NOTIFICATIONS: arr4[7] } = MobileUserSettings);
    items3[8] = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
    ({ APP_ICONS: arr4[9], ADVANCED: arr4[10] } = MobileUserSettings);
    obj4.settings = items3.filter(GlobalUtils.isNotNullish);
    items1[2] = obj4;
    const obj5 = { label: null, settings: null };
    const intl4 = util.intl;
    obj5.label = intl4.string(util.t["Yl/Riu"]);
    const items4 = [, , ];
    ({ SUPPORT: arr5[0], UPLOAD_DEBUG_LOGS: arr5[1], ACKNOWLEDGEMENTS: arr5[2] } = MobileUserSettings);
    obj5.settings = items4;
    items1[3] = obj5;
    const obj6 = { label: null, settings: null };
    const intl5 = util.intl;
    obj6.label = intl5.string(util.t.LRmNAl);
    const items5 = [MobileUserSettings.CHANGE_LOG];
    obj6.settings = items5;
    items1[4] = obj6;
    const obj7 = { settings: null };
    const items6 = [MobileUserSettings.LOGOUT];
    obj7.settings = items6;
    items1[5] = obj7;
    const obj8 = { label: null, settings: null };
    const intl6 = util.intl;
    obj8.label = intl6.string(util.t.CbItOL);
    const items7 = [, , , , , , ];
    ({ APP_VERSION: arr8[0], DEVICE_INFO: arr8[1], COPY_CLIENT_INFO: arr8[2], VIEW_DEBUG_LOGS: arr8[3], CACHE_ACTIONS: arr8[4], REACT_COMPILER: arr8[5], UPLOAD_INTL_DATA: arr8[6] } = MobileUserSettings);
    obj8.settings = items7;
    items1[6] = obj8;
    const obj9 = { label: null, settings: null };
    const intl7 = util.intl;
    obj9.label = intl7.string(util.t["/tZh0A"]);
    const items8 = [, ];
    ({ BUG_REPORTER: arr9[0], CREATE_BUG_REPORT: arr9[1] } = MobileUserSettings);
    obj9.settings = items8;
    items1[7] = obj9;
    const obj10 = { label: "Build Status", settings: null };
    const items9 = [, , , ];
    ({ INTERNAL_BUILD_ACTIVE: arr10[0], INTERNAL_BUILD_UPDATE: arr10[1], BUILD_OVERRIDE_ACTIVE: arr10[2], EXPERIMENT_OVERRIDE_ACTIVE: arr10[3] } = MobileUserSettings);
    obj10.settings = items9;
    items1[8] = obj10;
    const items10 = [, , , ];
    ({ SHOW_DEV_WIDGET: arr11[0], BUILD_OVERRIDES: arr11[1], SHOW_DEV_TOOLS: arr11[2] } = MobileUserSettings);
    let DESIGN_SYSTEMS = null;
    if (!staffOrDeveloperSettingPredicate) {
      DESIGN_SYSTEMS = MobileUserSettings.DESIGN_SYSTEMS;
    }
    const obj11 = { sections: null };
    const obj = SettingBuilders;
    items10[3] = DESIGN_SYSTEMS;
    items1[9] = { label: "Staff Settings", settings: items10.filter(GlobalUtils.isNotNullish) };
    obj11.sections = items1;
    return obj.createList(obj11);
  }, items1);
  return jsx(hasPremiumSubscriptionToDisplay(staffOrDeveloperSettingPredicate[12]).SearchableSettingsList, { node });
};