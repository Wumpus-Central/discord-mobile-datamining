// === Module 14655: PasswordlessUpsell ===

// Module 14655 (PasswordlessUpsell)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4992 */;
import preloadDefault from "preload" /* 5587 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5687 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14682 */;
import _modDef14689 from "module_14689" /* 14689 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "hasFetchedCredentials" /* 14656 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7975 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14657 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function PasswordlessUpsell() {
  const tmp = callback4();
  let obj = _require(1483);
  _require = obj.useNavigation();
  obj = { style: tmp.upsellPasswordless, children: null };
  obj = { border: "none", shadow: "none", children: null };
  obj1 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj2 = { style: { width: 70, height: 70 }, children: null };
  const obj3 = { source: _require(14658), resizeMode: "contain", style: tmp.upsellImagePasswordless };
  obj2[1] = callback2(preloadDefault, obj3);
  const items = [callback2(View, obj2), ];
  const obj4 = { style: { flex: 1 }, children: null };
  const obj5 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: null };
  const obj6 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1114).intl;
  obj6[2] = intl.string(_require(1114).t["+Svv46"]);
  const items1 = [callback2(_require(4556).Heading, obj6), , ];
  const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = _require(1114).intl;
  obj7[2] = intl2.string(_require(1114).t.S0g2K9);
  items1[1] = callback2(_require(4556).Text, obj7);
  const obj8 = { style: { flexDirection: "row" }, children: null };
  const obj9 = { text: null, onPress: null, size: "sm" };
  const intl3 = _require(1114).intl;
  obj9[0] = intl3.string(_require(1114).t.piGf5c);
  obj9[1] = function onPress() {
    let obj = closure_1_1(closure_1_3[16]);
    obj = { navigation: callback, initialRouteName: closure_1_9.REGISTER, showNav: true };
    obj.pushLazy(callback(closure_1_3[18])(closure_1_3[17], closure_1_3.paths), obj);
  };
  const items2 = [callback2(_require(4975).Button, obj9), callback2(View, {})];
  obj8[1] = items2;
  items1[2] = callback3(View, obj8);
  obj5[1] = items1;
  obj4[1] = callback3(View, obj5);
  items[1] = callback2(View, obj4);
  obj1[1] = items;
  obj[2] = callback3(View, obj1);
  obj[1] = callback2(_require(5607).Card, obj);
  return callback2(View, obj);
}
function AccountTwoFALabel() {
  let obj = first(504);
  let items = [closure_7];
  const tmp3 = callback(obj.useStateFromStoresObject(items, () => {
    const items = [closure_7.hasCredentials, closure_7.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  const isUserVerified = first(14681).useIsUserVerified();
  const items1 = [tmp3[1], first, isUserVerified];
  const memo = importAllResult.useMemo(() => {
    let tmp = first(closure_1_3[21]).hasWebAuthn && isUserVerified && closure_1;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp3[1]];
  const effect = importAllResult.useEffect(() => {
    if (!closure_1) {
      const webAuthnCredentials = first(closure_1_3[22]).fetchWebAuthnCredentials();
      const obj = first(closure_1_3[22]);
    }
  }, items2);
  let tmp11 = memo;
  if (memo) {
    tmp11 = callback2(PasswordlessUpsell, {});
  }
  obj = { children: null };
  const items3 = [tmp11, ];
  obj = { title: null };
  const intl = tmp(1114).intl;
  obj[0] = intl.string(first(1114).t.fuTmEJ);
  items3[1] = callback2(first(5687).TableRowGroupTitle, obj);
  obj[0] = items3;
  return closure_11(closure_12, obj);
}
function AccountStatusLabel() {
  let obj = useIsTinyBroncoSettingsEnabled;
  const isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  const intl = getSystemLocale.intl;
  const t = getSystemLocale.t;
  obj = { title: intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) };
  return closure_10(TableRowGroupTitle.TableRowGroupTitle, obj);
}
function AccountSecurityPage() {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11468);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = callback(1114).intl;
    obj[0] = intl.string(callback(1114).t.e262Nn);
    const items = [, , , , , , ];
    ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = closure_8);
    obj[1] = items;
    const items1 = [obj, , , ];
    const items2 = [, , , , , ];
    ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = closure_8);
    items1[1] = { label: callback3(closure_15, {}), settings: items2 };
    obj1 = { label: callback3(closure_15, {}), settings: items2 };
    const items3 = [, ];
    ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = closure_8);
    items1[2] = { label: callback3(closure_16, {}), settings: items3 };
    const obj3 = { label: null, settings: null };
    const intl2 = callback(1114).intl;
    obj3[0] = intl2.string(callback(1114).t["5V0AkP"]);
    const items4 = [, ];
    ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = closure_8);
    obj3[1] = items4;
    items1[3] = obj3;
    obj[0] = items1;
    obj[1] = callback2(14686);
    return obj.createList(obj);
  }, []);
  return callback2(_modDef14689, { node });
}
let c5 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { upsellPasswordless: null, upsellImagePasswordless: null };
obj = { marginBottom: 16, borderColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { height: "100%", width: "100%" };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  useMountLayoutEffectDefault(() => {
    const safetyHubData = callback(table[29]).getSafetyHubData();
  });
  return callback2(AccountSecurityPage, {});
});
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default memoResult;