// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/14034_registerAsset.js";
import { SafeAreaPaddingView } from "../../../../../components_native/common/SafeAreaView.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { TwoFAModalSetupSections } from "TwoFASetupModal.tsx";
import { styles } from "TwoFASetupStyles.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = callback3();
  let obj = styles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { bottom: true, style: tmp.container, children: null };
  const obj2 = { source: null, style: null };
  obj2[0] = registerAsset;
  obj2[1] = tmp.authIcon;
  const items = [callback(closure_3, obj2), , ];
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