// === Module 14313: TwoFASetupLanding ===

// Module 14313 (TwoFASetupLanding)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5500 */;
import TwoFAModalSetupSections from "TwoFAModalSetupSections" /* 14310 */;
import styles from "styles" /* 14314 */;
import registerAssetDefault from "registerAsset" /* 14315 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = callback3();
  let obj = styles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { bottom: true, style: tmp.container, children: null };
  const items = [callback(closure_3, { source: registerAssetDefault, style: tmp.authIcon }), , ];
  const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj3[2] = intl.string(getSystemLocale.t["9E74Dx"]);
  items[1] = callback(Text.Heading, obj3);
  const obj4 = { variant: "text-md/normal", style: items1, children: null };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl2 = getSystemLocale.intl;
  obj4[2] = intl2.format(getSystemLocale.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = callback(Text.Text, obj4);
  obj1[2] = items;
  obj[1] = callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj1);
  obj[0] = callback(closure_4, obj);
  return callback(TwoFAModalSetupSections.TwoFASetupModalScreen, obj);
};