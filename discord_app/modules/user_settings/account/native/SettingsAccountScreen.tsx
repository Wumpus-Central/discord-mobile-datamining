// discord_app/modules/user_settings/account/native/SettingsAccountScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import WebAuthnActionCreators from "../../../webauthn/WebAuthnActionCreators.tsx";
import MFAUtils from "../../../../utils/MFAUtils.tsx";
import SafetyHubActionCreatorsAll from "../../../safety_hub/SafetyHubActionCreators.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import SettingsAccountHeaderDefault from "SettingsAccountHeader.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import WebAuthnStore from "../../../webauthn/WebAuthnStore.tsx";

require = fn;
function PasswordlessUpsell() {
  const tmp = closure_13();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  obj = { style: tmp.upsellPasswordless, children: null };
  obj = { border: "none", shadow: "none", children: null };
  const obj1 = { style: { flexDirection: "row", gap: 8 }, children: null };
  const obj2 = { style: { width: 70, height: 70 }, children: null };
  const obj3 = {
    source: require("../../../../../_runtime/metro/14658__.js"),
    resizeMode: "contain",
    style: tmp.upsellImagePasswordless,
  };
  obj2.children = closure_10(FastImageDefault, obj3);
  const items = [closure_10(View, obj2)];
  const obj4 = { style: { flex: 1 }, children: null };
  const obj5 = { style: { flexShrink: 1, width: "90%", gap: 8 }, children: null };
  const obj6 = { variant: "heading-lg/medium", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj6.children = intl.string(require("util").t["+Svv46"]);
  const items1 = [closure_10(require("Text/Text").Heading, obj6), ,];
  const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(require("util").t.S0g2K9);
  items1[1] = closure_10(require("Text/Text").Text, obj7);
  const obj8 = { style: { flexDirection: "row" }, children: null };
  const obj9 = { text: null, onPress: null, size: "sm" };
  const intl3 = require("util").intl;
  obj9.text = intl3.string(require("util").t.piGf5c);
  obj9.onPress = function onPress() {
    const obj = { navigation, initialRouteName: WebAuthnScreens.REGISTER, showNav: true };
    obj.pushLazy(asyncRequireImpl(14659, dependencyMap.paths), obj);
  };
  const items2 = [closure_10(require("components/Button/Button").Button, obj9), closure_10(View, {})];
  obj8.children = items2;
  items1[2] = closure_11(View, obj8);
  obj5.children = items1;
  obj4.children = closure_11(View, obj5);
  items[1] = closure_10(View, obj4);
  obj1.children = items;
  obj.children = closure_11(View, obj1);
  obj.children = closure_10(require("Card").Card, obj);
  return closure_10(View, obj);
}
function AccountTwoFALabel() {
  let obj = first(504);
  let items = [WebAuthnStore];
  const tmp3 = _slicedToArray(
    obj.useStateFromStoresObject(items, () => {
      const items = [WebAuthnStore.hasCredentials, WebAuthnStore.hasFetchedCredentials()];
      return items;
    }),
    2,
  );
  first = tmp3[0];
  closure_1 = tmp5;
  const isUserVerified = first(14681).useIsUserVerified();
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
  obj = { children: null };
  const items3 = [tmp11];
  obj = { title: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(first(1114).t.fuTmEJ);
  items3[1] = closure_10(first(5687).TableRowGroupTitle, obj);
  obj.children = items3;
  return closure_11(closure_12, obj);
}
function AccountStatusLabel() {
  let obj = TinyBroncoSettingsPredicate;
  const isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  const intl = util.intl;
  const t = util.t;
  obj = { title: intl.string(isTinyBroncoSettingsEnabled ? t.GI2mea : t["16r9jm"]) };
  return closure_1_10(TableRowGroup.TableRowGroupTitle, obj);
}
function AccountSecurityPage() {
  const node = noop.useMemo(() => {
    require("SettingBuilders");
    let obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = require("util").intl;
    obj.label = intl.string(require("util").t.e262Nn);
    const items = [, , , , , ,];
    ({
      ACCOUNT_USERNAME: arr[0],
      ACCOUNT_DISPLAY_NAME: arr[1],
      ACCOUNT_EMAIL: arr[2],
      ACCOUNT_PHONE: arr[3],
      ACCOUNT_AGE_GROUP_ADULT: arr[4],
      ACCOUNT_AGE_GROUP_NON_ADULT: arr[5],
      ACCOUNT_AGE_GROUP_ASSIGNED_ADULT: arr[6],
    } = MobileUserSettings);
    obj.settings = items;
    const items1 = [obj, , ,];
    const obj1 = { label: closure_1_10(AccountTwoFALabel, {}), settings: null };
    const items2 = [, , , , ,];
    ({
      ACCOUNT_CHANGE_PASSWORD: arr3[0],
      ACCOUNT_WEB_AUTHN_VIEW: arr3[1],
      ACCOUNT_ENABLE_2FA: arr3[2],
      ACCOUNT_VIEW_BACKUP_CODES: arr3[3],
      ACCOUNT_REMOVE_2FA: arr3[4],
      ACCOUNT_SMS_BACKUP: arr3[5],
    } = MobileUserSettings);
    obj1.settings = items2;
    items1[1] = obj1;
    const obj2 = { label: closure_1_10(AccountStatusLabel, {}), settings: null };
    const items3 = [,];
    ({ ACCOUNT_AGE_GROUP: arr4[0], ACCOUNT_STANDING: arr4[1] } = MobileUserSettings);
    obj2.settings = items3;
    items1[2] = obj2;
    const obj3 = { label: null, settings: null };
    const intl2 = require("util").intl;
    obj3.label = intl2.string(require("util").t["5V0AkP"]);
    const items4 = [,];
    ({ ACCOUNT_DISABLE: arr5[0], ACCOUNT_DELETE: arr5[1] } = MobileUserSettings);
    obj3.settings = items4;
    items1[3] = obj3;
    obj.sections = items1;
    obj.ListHeaderComponent = SettingsAccountHeaderDefault;
    return obj.createList(obj);
  }, []);
  return closure_1_10(SettingLayoutDefault, { node });
}
const View = fn(17).View;
const MobileUserSettings = fn(7975).MobileUserSettings;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj = { upsellPasswordless: null, upsellImagePasswordless: null };
obj = {
  marginBottom: 16,
  borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
};
obj.upsellPasswordless = obj;
obj.upsellImagePasswordless = { height: "100%", width: "100%" };
let closure_13 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountScreen.tsx");

export default noop.memo(() => {
  useMountEffectDefault(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
  });
  return closure_1_10(AccountSecurityPage, {});
});
