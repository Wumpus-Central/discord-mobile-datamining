// === Module 14548: PasswordlessUpsell ===

// Module 14548 (PasswordlessUpsell)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import preloadDefault from "preload" /* 5502 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7169 */;
import useSegmentedControlState from "useSegmentedControlState" /* 9277 */;
import SegmentedControlPage from "SegmentedControlPage" /* 9285 */;
import SegmentedControl from "SegmentedControl" /* 9788 */;
import _modDef14578 from "module_14578" /* 14578 */;
import handleLogInClick from "handleLogInClick" /* 14593 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "hasFetchedCredentials" /* 14549 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7896 */;
import { AccountSettingsTabs } from "AccountSettingsTabs" /* 11680 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14550 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function PasswordlessUpsell() {
  const tmp = callback4();
  let obj = _require(1498);
  _require = obj.useNavigation();
  obj = { style: tmp.upsellPasswordless, children: null };
  obj = { border: "none", shadow: "none", children: null };
  obj1 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj2 = { style: { width: 70, height: 70 }, children: null };
  const obj3 = { source: _require(14551), resizeMode: "contain", style: tmp.upsellImagePasswordless };
  obj2[1] = callback2(preloadDefault, obj3);
  const items = [callback2(View, obj2), ];
  const obj4 = { style: { flex: 1 }, children: null };
  const obj5 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: null };
  const obj6 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1233).intl;
  obj6[2] = intl.string(_require(1233).t["+Svv46"]);
  const items1 = [callback2(_require(4474).Heading, obj6), , ];
  const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = _require(1233).intl;
  obj7[2] = intl2.string(_require(1233).t.S0g2K9);
  items1[1] = callback2(_require(4474).Text, obj7);
  const obj8 = { style: { flexDirection: "row" }, children: null };
  const obj9 = { text: null, onPress: null, size: "sm" };
  const intl3 = _require(1233).intl;
  obj9[0] = intl3.string(_require(1233).t.piGf5c);
  obj9[1] = function onPress() {
    let obj = closure_1_1(closure_1_2[18]);
    obj = { navigation: callback, initialRouteName: closure_1_10.REGISTER, showNav: true };
    obj.pushLazy(callback(closure_1_2[20])(closure_1_2[19], closure_1_2.paths), obj);
  };
  const items2 = [callback2(_require(4929).Button, obj9), callback2(View, {})];
  obj8[1] = items2;
  items1[2] = callback3(View, obj8);
  obj5[1] = items1;
  obj4[1] = callback3(View, obj5);
  items[1] = callback2(View, obj4);
  obj1[1] = items;
  obj[2] = callback3(View, obj1);
  obj[1] = callback2(_require(5610).Card, obj);
  return callback2(View, obj);
}
function AccountTwoFALabel() {
  let obj = first(isUserVerified[21]);
  let items = [closure_6];
  const tmp3 = callback(obj.useStateFromStoresObject(items, () => {
    const items = [closure_6.hasCredentials, closure_6.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  isUserVerified = first(isUserVerified[22]).useIsUserVerified();
  const items1 = [tmp3[1], first, isUserVerified];
  const memo = importAllResult.useMemo(() => {
    let tmp = first(isUserVerified[23]).hasWebAuthn && isUserVerified && closure_1;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp3[1]];
  const effect = importAllResult.useEffect(() => {
    if (!closure_1) {
      const webAuthnCredentials = first(isUserVerified[24]).fetchWebAuthnCredentials();
      const obj = first(isUserVerified[24]);
    }
  }, items2);
  let tmp11 = memo;
  if (memo) {
    tmp11 = callback2(PasswordlessUpsell, {});
  }
  obj = { children: null };
  const items3 = [tmp11, ];
  obj = { title: null };
  const intl = tmp(tmp2[16]).intl;
  obj[0] = intl.string(first(isUserVerified[16]).t.fuTmEJ);
  items3[1] = callback2(first(isUserVerified[25]).TableRowGroupTitle, obj);
  obj[0] = items3;
  return closure_12(closure_13, obj);
}
function AccountSecurityPage() {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11292);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = callback(1233).intl;
    obj[0] = intl.string(callback(1233).t.e262Nn);
    const items = [, , , , , , ];
    ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = closure_7);
    obj[1] = items;
    const items1 = [obj, , ];
    const items2 = [, , , , , ];
    ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = closure_7);
    items1[1] = { label: callback3(closure_16, {}), settings: items2 };
    const obj2 = { label: null, settings: null };
    const intl2 = callback(1233).intl;
    obj2[0] = intl2.string(callback(1233).t["5V0AkP"]);
    const items3 = [, ];
    ({ ACCOUNT_DISABLE: arr4[0], ACCOUNT_DELETE: arr4[1] } = closure_7);
    obj2[1] = items3;
    items1[2] = obj2;
    obj[0] = items1.filter(Boolean);
    obj[1] = callback2(14575);
    return obj.createList(obj);
  }, []);
  return callback2(_modDef14578, { node });
}
function AccountStandingPage() {
  return callback2(handleLogInClick.default, { visible: true });
}
let c4 = importAllResult;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = { upsellPasswordless: null, upsellImagePasswordless: null, controlContainer: null, pageContainer: null, standingPage: null };
obj = { marginBottom: 16, borderColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { height: "100%", width: "100%" };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16 };
obj[2] = createCacheKey;
obj[3] = { flex: 1 };
obj[4] = { paddingTop: ThemesDefault.space.PX_24 };
let closure_14 = createCacheKey.createStyles(obj);
let obj2 = { paddingTop: ThemesDefault.space.PX_24 };
const memoResult = importAllResult.memo(() => {
  const tmp = callback4();
  [tmp3, require] = callback(importAllResult.useState(0), 2);
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = useSettingNavigationRoute;
  const params = obj.useSettingNavigationRoute().params;
  let initialTab;
  if (params != null) {
    initialTab = params.initialTab;
  }
  const tmp2 = callback(importAllResult.useState(0), 2);
  obj = { items: null, pageWidth: null, defaultIndex: null, onSetActiveIndex: null };
  obj = { label: null, id: null, page: null };
  const intl = tmp5(1233).intl;
  obj[0] = intl.string(getSystemLocale.t.Am9YHi);
  obj[1] = AccountSettingsTabs.SECURITY;
  obj[2] = callback2(AccountSecurityPage, {});
  const items = [obj, ];
  obj1 = { label: null, id: null, page: null };
  const intl2 = tmp5(1233).intl;
  obj1[0] = intl2.string(getSystemLocale.t["00Sfl/"]);
  obj1[1] = AccountSettingsTabs.STANDING;
  const tmp5Result = useSegmentedControlState;
  obj1[2] = callback2(View, { style: tmp.standingPage, children: callback2(AccountStandingPage, {}) });
  items[1] = obj1;
  obj[0] = items;
  obj[1] = tmp3;
  let num = 0;
  if (initialTab === AccountSettingsTabs.STANDING) {
    num = 1;
  }
  obj[2] = num;
  obj[3] = function onSetActiveIndex(arg0) {
    if (0 === arg0) {
      let STANDING = constants.SECURITY;
    } else {
      STANDING = constants.STANDING;
    }
    callback2(table[32]).track(constants2.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: STANDING });
  };
  const segmentedControlState = tmp5Result.useSegmentedControlState(obj);
  const obj3 = { children: null };
  const obj2 = { style: tmp.standingPage, children: callback2(AccountStandingPage, {}) };
  const items1 = [callback2(View, { style: tmp.controlContainer, onLayout: callback, children: callback2(SegmentedControl.SegmentedControl, { state: segmentedControlState }) }), ];
  const obj4 = { style: tmp.controlContainer, onLayout: callback, children: callback2(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(SegmentedControlPage.SegmentedControlPages, { state: segmentedControlState }) });
  obj3[0] = items1;
  return callback3(closure_13, obj3);
});
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;