// === Module 13902: TwoFASetupLanding ===

// Module 13902 (TwoFASetupLanding)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  let obj = require(13903) /* styles */;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { bottom: true, style: tmp.container, children: null };
  const obj2 = { source: null, style: null };
  obj2[0] = importDefault(13904);
  obj2[1] = tmp.authIcon;
  const items = [callback(closure_3, obj2), , ];
  const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj3[2] = intl.string(require(1236) /* getSystemLocale */.t["9E74Dx"]);
  items[1] = callback(require(4251) /* Text */.Heading, obj3);
  const obj4 = { variant: "text-md/normal", style: items1, children: null };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[2] = intl2.format(require(1236) /* getSystemLocale */.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = callback(require(4251) /* Text */.Text, obj4);
  obj1[2] = items;
  obj[1] = callback2(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj1);
  obj[0] = callback(closure_4, obj);
  return callback(require(13899) /* TwoFAModalSetupSections */.TwoFASetupModalScreen, obj);
};