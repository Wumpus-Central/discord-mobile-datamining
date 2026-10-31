// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import TwoFASetupModal from "TwoFASetupModal.tsx";
import TwoFASetupStyles from "TwoFASetupStyles.tsx";
import _modDef16649 from "../../../../../../_runtime/metro/16649__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  authIcon: { width: 120, height: 120, marginBottom: 32 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = closure_6();
  const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { bottom: true, style: tmp.container, children: null };
  const obj5 = { source: null, style: null };
  obj5.source = _modDef16649;
  obj5.style = tmp.authIcon;
  const items = [React4(FastImageDefault, obj5), ,];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["9E74Dx"]);
  items[1] = React4(Text_Text.Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: null, children: null };
  const items1 = [,];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj7.style = items1;
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.A7Aehw, {
    googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
    authyURL: "https://www.authy.com/",
  });
  items[2] = React4(Text_Text.Text, obj7);
  obj4.children = items;
  obj3.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj2.children = React4(View, obj3);
  return React4(TwoFASetupModal.TwoFASetupModalScreen, obj2);
}
