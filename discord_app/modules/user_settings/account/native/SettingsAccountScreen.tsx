// === Module 14753: SettingsAccountScreen ===

// Module 14753 (SettingsAccountScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import useMountEffectDefault from "useMountEffect" /* 5076 */;
import FastImageDefault from "FastImage" /* 5672 */;
import TableRowGroup from "TableRowGroup" /* 5772 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6702 */;
import MFAUtils from "MFAUtils" /* 7056 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12016 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14779 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 14783 */;
import SettingLayoutDefault from "SettingLayout" /* 14786 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14754 */;

require = fn;
function PasswordlessUpsell() {
  const tmp = closure_13();
  _require = require("useNavigation").useNavigation();
  const obj2 = { style: tmp.upsellPasswordless, children: null };
  const obj3 = { border: "none", shadow: "none", children: null };
  const obj4 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj5 = { style: { width: 70, height: 70 }, children: null };
  const obj6 = { source: null, resizeMode: "contain", style: null };
  const obj = require("useNavigation");
  obj6.source = require("module_14756");
  obj6.style = tmp.upsellImagePasswordless;
  obj5.children = closure_10(FastImageDefault, obj6);
  const items = [closure_10(View, obj5), ];
  const obj7 = { style: { flex: 1 }, children: null };
  const obj8 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: null };
  const obj9 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj9.children = intl.string(require("util").t["+Svv46"]);
  const items1 = [closure_10(require("Text/Text").Heading, obj9), , ];
  const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj10.children = intl2.string(require("util").t.S0g2K9);
  items1[1] = closure_10(require("Text/Text").Text, obj10);
  const obj11 = { style: { flexDirection: "row" }, children: null };
  const obj12 = { text: null, onPress: null, size: "sm" };
  const intl3 = require("util").intl;
  obj12.text = intl3.string(require("util").t.piGf5c);
  obj12.onPress = function onPress() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14757, dependencyMap.paths), { navigation, initialRouteName: WebAuthnScreens.REGISTER, showNav: true });
  };
  const items2 = [closure_10(require("components/Button/Button").Button, obj12), closure_10(View, {})];
  obj11.children = items2;
  items1[2] = closure_11(View, obj11);
  obj8.children = items1;
  obj7.children = closure_11(View, obj8);
  items[1] = closure_10(View, obj7);
  obj4.children = items;
  obj3.children = closure_11(View, obj4);
  obj2.children = closure_10(require("Card").Card, obj3);
  return closure_10(View, obj2);
}
function AccountTwoFALabel() {
  let items = [WebAuthnStore];
  const tmp3 = _slicedToArray(first(504).useStateFromStoresObject(items, () => {
    const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  let obj = first(504);
  const isUserVerified = first(14778).useIsUserVerified();
  const items1 = [tmp3[1], first, isUserVerified];
  const memo = noop.useMemo(() => {
    let tmp = MFAUtils.hasWebAuthn && isUserVerified && closure_1;
    if (tmp) {
      tmp = !first;
    }
    return tmp;
  }, items1);
  const items2 = [tmp3[1]];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
  }, items2);
  let tmp11 = memo;
  if (memo) {
    tmp11 = closure_10(PasswordlessUpsell, {});
  }
  const obj3 = { children: null };
  const items3 = [tmp11, ];
  const obj4 = { title: null };
  const intl = tmp(1115).intl;
  obj4.title = intl.string(first(1115).t.fuTmEJ);
  items3[1] = closure_10(first(5772).TableRowGroupTitle, obj4);
  obj3.children = items3;
  return closure_11(closure_12, obj3);
}
function AccountStatusLabel() {
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  const intl = util.intl;
  const t = util.t;
  return closure_1_10(TableRowGroup.TableRowGroupTitle, { title: intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) });
}
function AccountSecurityPage() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null };
    const intl = require("util").intl;
    obj3.label = intl.string(require("util").t.e262Nn);
    const items = [, , , , , , ];
    ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = MobileUserSettings);
    obj3.settings = items;
    const items1 = [obj3, , , ];
    const obj4 = { label: closure_1_10(AccountTwoFALabel, {}), settings: null };
    const items2 = [, , , , , ];
    ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = MobileUserSettings);
    obj4.settings = items2;
    items1[1] = obj4;
    const obj5 = { label: closure_1_10(AccountStatusLabel, {}), settings: null };
    const items3 = [, ];
    ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { label: null, settings: null };
    const intl2 = require("util").intl;
    obj6.label = intl2.string(require("util").t["5V0AkP"]);
    const items4 = [, ];
    ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
    obj6.settings = items4;
    items1[3] = obj6;
    obj2.sections = items1;
    obj2.ListHeaderComponent = SettingsAccountHeaderDefault;
    return require("SettingBuilders").createList(obj2);
  }, []);
  return closure_1_10(SettingLayoutDefault, { node });
}
const View = fn(17).View;
const MobileUserSettings = fn(8082).MobileUserSettings;
const WebAuthnScreens = fn(14755).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4639);
let obj = { upsellPasswordless: { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, upsellImagePasswordless: { height: "100%", width: "100%" } };
let closure_13 = createStyles.createStyles(obj);
let obj3 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default noop.memo(() => {
  useMountEffectDefault(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
  });
  return closure_1_10(AccountSecurityPage, {});
});