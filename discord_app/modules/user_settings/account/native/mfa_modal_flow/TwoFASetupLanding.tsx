// === Module 15069: TwoFASetupLanding ===

// Module 15069 (TwoFASetupLanding)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7370 */;
import TwoFASetupModal from "TwoFASetupModal" /* 15066 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 15070 */;
import _modDef15071 from "module_15071" /* 15071 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = closure_7();
  const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { bottom: true, style: tmp.container, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef15071, style: tmp.authIcon }), , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["9E74Dx"]);
  items[1] = hasOwnProperty(Text_Text.Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: null, children: null };
  const items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj7.style = items1;
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = hasOwnProperty(Text_Text.Text, obj7);
  obj4.children = items;
  obj3.children = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj2.children = hasOwnProperty(React4, obj3);
  return hasOwnProperty(TwoFASetupModal.TwoFASetupModalScreen, obj2);
};