// === Module 14863: TwoFASetupLanding ===

// Module 14863 (TwoFASetupLanding)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7175 */;
import TwoFASetupModal from "TwoFASetupModal" /* 14860 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 14864 */;
import _modDef14865 from "module_14865" /* 14865 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4605);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = closure_7();
  let obj = TwoFASetupStyles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { bottom: true, style: tmp.container, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef14865, style: tmp.authIcon }), , ];
  const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["9E74Dx"]);
  items[1] = hasOwnProperty(Text_Text.Heading, obj3);
  const obj4 = { variant: "text-md/normal", style: null, children: null };
  const items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj4.style = items1;
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  obj1.children = items;
  obj.children = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj1);
  obj.children = hasOwnProperty(React4, obj);
  return hasOwnProperty(TwoFASetupModal.TwoFASetupModalScreen, obj);
};