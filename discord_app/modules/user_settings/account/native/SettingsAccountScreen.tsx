// === Module 14507: SettingsAccountScreen ===

// Module 14507 (SettingsAccountScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import FastImageDefault from "FastImage" /* 5981 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6093 */;
import MFAUtils from "MFAUtils" /* 6446 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11506 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14511 */;
import SettingsAccountHeaderDefault from "SettingsAccountHeader" /* 14512 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 14508 */;

require = fn;
function getAccountSettings() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.e262Nn);
  const items = [, , , , , , ];
  ({ ACCOUNT_USERNAME: arr[0], ACCOUNT_DISPLAY_NAME: arr[1], ACCOUNT_EMAIL: arr[2], ACCOUNT_PHONE: arr[3], ACCOUNT_AGE_GROUP_ADULT: arr[4], ACCOUNT_AGE_GROUP_NON_ADULT: arr[5], ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6] } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , ];
  const obj2 = { label: v65535(closure_15, {}), settings: null };
  const items2 = [, , , , , ];
  ({ ACCOUNT_CHANGE_PASSWORD: arr3[0], ACCOUNT_WEB_AUTHN_VIEW: arr3[1], ACCOUNT_ENABLE_2FA: arr3[2], ACCOUNT_VIEW_BACKUP_CODES: arr3[3], ACCOUNT_REMOVE_2FA: arr3[4], ACCOUNT_SMS_BACKUP: arr3[5] } = MobileUserSettings);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = { label: v65535(closure_16, {}), settings: null };
  const items3 = [, ];
  ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { label: null, settings: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t["5V0AkP"]);
  const items4 = [, ];
  ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
  obj4.settings = items4;
  items1[3] = obj4;
  return items1;
}
const View = fn(17).View;
const MobileUserSettings = fn(7645).MobileUserSettings;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj = { upsellPasswordless: { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, upsellImagePasswordless: { height: "100%", width: "100%" } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(576).c(23);
  const tmp4 = closure_13();
  const obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      navigation.push(UserSettingsSections.WEBAUTHN_REGISTER);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { flexDirection: "row", gap: 8 };
    cResult[2] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: 70, height: 70 };
    cResult[3] = size;
    let tmp8 = size;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4.upsellImagePasswordless) {
    const obj4 = { style: tmp8, children: null };
    const obj5 = { source: tmp(14509), resizeMode: "contain", style: tmp4.upsellImagePasswordless };
    obj4.children = closure_10(FastImageDefault, obj5);
    const tmp14 = closure_10(View, obj4);
    cResult[4] = tmp4.upsellImagePasswordless;
    cResult[5] = tmp14;
    let tmp9 = tmp14;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { flex: 1 };
    cResult[6] = obj6;
    let tmp15 = obj6;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { flexShrink: 1, width: "90%", gap: 8 };
    cResult[7] = obj7;
    let tmp16 = obj7;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1126).intl;
    obj8.children = intl.string(tmp(1126).t["+Svv46"]);
    const tmp19 = closure_10(tmp(4892).Heading, obj8);
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl2 = tmp(1126).intl;
    obj9.children = intl2.string(tmp(1126).t.S0g2K9);
    const tmp22 = closure_10(tmp(4892).Text, obj9);
    cResult[9] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { flexDirection: "row" };
    cResult[10] = obj10;
    let tmp23 = obj10;
  } else {
    tmp23 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult = intl3.string(tmp(1126).t.piGf5c);
    cResult[11] = stringResult;
    let tmp24 = stringResult;
  } else {
    tmp24 = cResult[11];
  }
  if (cResult[12] !== tmp6) {
    const obj11 = { text: tmp24, onPress: tmp6, size: "sm" };
    const tmp28 = closure_10(tmp(5601).Button, obj11);
    cResult[12] = tmp6;
    cResult[13] = tmp28;
    let tmp26 = tmp28;
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp32 = closure_10(View, {});
    cResult[14] = tmp32;
    let tmp29 = tmp32;
  } else {
    tmp29 = cResult[14];
  }
  if (cResult[15] !== tmp26) {
    const obj12 = { style: tmp15, children: null };
    const obj13 = { style: tmp16, children: null };
    const items = [tmp17, tmp20, ];
    const obj14 = { style: tmp23, children: null };
    const items1 = [tmp26, tmp29];
    obj14.children = items1;
    items[2] = closure_11(View, obj14);
    obj13.children = items;
    obj12.children = closure_11(View, obj13);
    const tmp37 = closure_10(View, obj12);
    cResult[15] = tmp26;
    cResult[16] = tmp37;
    let tmp33 = tmp37;
  } else {
    tmp33 = cResult[16];
  }
  if (cResult[17] === tmp33) {
    if (cResult[18] === tmp9) {
      let tmp38 = cResult[19];
    }
    if (cResult[20] === tmp4.upsellPasswordless) {
      if (cResult[21] === tmp38) {
        let tmp40 = cResult[22];
      }
      return tmp40;
    }
    const obj15 = { style: tmp4.upsellPasswordless, children: tmp38 };
    const tmp43 = closure_10(View, obj15);
    cResult[20] = tmp4.upsellPasswordless;
    cResult[21] = tmp38;
    cResult[22] = tmp43;
    tmp40 = tmp43;
  }
  const obj16 = { border: "none", shadow: "none", children: null };
  const obj17 = { style: tmp7, children: null };
  const items2 = [tmp9, tmp33];
  obj17.children = items2;
  obj16.children = closure_11(View, obj17);
  const tmp39 = closure_10(navigation(6002).Card, obj16);
  cResult[17] = tmp33;
  cResult[18] = tmp9;
  cResult[19] = tmp39;
  tmp38 = tmp39;
  const obj2 = navigation(1490);
}) : (() => {
  const tmp = closure_13();
  _require = require("useNavigation").useNavigation();
  const obj2 = { style: tmp.upsellPasswordless, children: null };
  const obj3 = { border: "none", shadow: "none", children: null };
  const obj4 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj5 = { style: { width: 70, height: 70 }, children: null };
  const obj6 = { source: null, resizeMode: "contain", style: null };
  const obj = require("useNavigation");
  obj6.source = require("module_14509");
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
    closure_0.push(UserSettingsSections.WEBAUTHN_REGISTER);
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
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [WebAuthnStore];
    const fn = function o() {
      const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const tmp7 = _slicedToArray(require("initialize").useStateFromStoresObject(tmp4, tmp5), 2);
  _require = tmp8;
  const tmpResult = require("initialize");
  const isUserVerified = require("SettingsAccountUtils").useIsUserVerified();
  const tmp10 = require("MFAUtils").hasWebAuthn && isUserVerified && tmp7[1] && !tmp7[0];
  if (cResult[2] !== tmp7[1]) {
    const fn2 = function u() {
      if (!closure_0) {
        const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
      }
    };
    const items1 = [tmp8];
    cResult[2] = tmp8;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  if (cResult[5] !== tmp10) {
    let tmp15 = tmp10;
    if (tmp10) {
      tmp15 = closure_10(closure_14, {});
    }
    cResult[5] = tmp10;
    cResult[6] = tmp15;
    let tmp14 = tmp15;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = tmp(1126).intl;
    obj2.title = intl.string(tmp(1126).t.fuTmEJ);
    const tmp20 = closure_10(tmp(6081).TableRowGroupTitle, obj2);
    cResult[7] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp14) {
    const obj3 = { children: null };
    const items2 = [tmp14, tmp18];
    obj3.children = items2;
    const tmp24 = closure_11(closure_12, obj3);
    cResult[8] = tmp14;
    cResult[9] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  return tmp21;
}) : (() => {
  let items = [WebAuthnStore];
  const tmp3 = _slicedToArray(first(504).useStateFromStoresObject(items, () => {
    const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
    return items;
  }), 2);
  first = tmp3[0];
  closure_1 = tmp5;
  let obj = first(504);
  const isUserVerified = first(14510).useIsUserVerified();
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
    tmp11 = closure_10(closure_14, {});
  }
  const obj3 = { children: null };
  const items3 = [tmp11, ];
  const obj4 = { title: null };
  const intl = tmp(1126).intl;
  obj4.title = intl.string(first(1126).t.fuTmEJ);
  items3[1] = closure_10(first(6081).TableRowGroupTitle, obj4);
  obj3.children = items3;
  return closure_11(closure_12, obj3);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  if (cResult[0] !== isTinyBroncoSettingsEnabled) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]);
    cResult[0] = isTinyBroncoSettingsEnabled;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj3 = { title: tmp5 };
      const tmp10 = v65535(TableRowGroup.TableRowGroupTitle, obj3);
      cResult[2] = tmp5;
      cResult[3] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    return tmp8;
  }
}) : (() => {
  const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
  const intl = util.intl;
  const t = util.t;
  return v65535(TableRowGroup.TableRowGroupTitle, { title: intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault };
    const list = SettingBuilders.createList(obj2);
    cResult[0] = list;
    let first = list;
    const tmpResult = SettingBuilders;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { node: first };
    const tmp11 = v65535(SettingLayoutDefault, obj3);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  return tmp8;
}) : (() => {
  const node = noop.useMemo(() => {
    const obj = require("SettingBuilders");
    return obj.createList({ sections: getAccountSettings(), ListHeaderComponent: SettingsAccountHeaderDefault });
  }, []);
  return v65535(SettingLayoutDefault, { node });
});
ReactCompilerGating = fn(558);
let obj3 = { marginBottom: 16, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = v65535(closure_18, {});
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  useMountEffectDefault(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
  });
  return v65535(closure_18, {});
}));