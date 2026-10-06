// === Module 14586: TwoFASetupLanding ===

// Module 14586 (TwoFASetupLanding)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import TwoFASetupModal from "TwoFASetupModal" /* 14583 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 14587 */;
import AssetRegistryDefault from "AssetRegistry" /* 14588 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let container;
  let container2;
  let intl;
  let items;
  let obj7;
  let tmp11;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  const obj2 = TwoFASetupStyles;
  const twoFASetupStyles = obj2.useTwoFASetupStyles();
  ({ container, container: container2 } = tmp4);
  if (cResult[0] !== tmp4.authIcon) {
    const obj3 = { source: AssetRegistryDefault, style: tmp4.authIcon };
    const tmp10 = hasOwnProperty(_false, obj3);
    cResult[0] = tmp4.authIcon;
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9E74Dx"]) };
    const Heading = Text_Text.Heading;
    intl = intl3.intl;
    const tmp13 = hasOwnProperty(Heading, obj4);
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === twoFASetupStyles.modalBody) {
    let tmp14;
    let tmp15;
    let tmp17;
    if (cResult[4] === twoFASetupStyles.text) {
      tmp14 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const formatResult = intl2.format(intl3.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" });
      cResult[6] = formatResult;
      tmp15 = formatResult;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== tmp14) {
      const obj5 = { variant: "text-md/normal", style: tmp14, children: tmp15 };
      const tmp19 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[7] = tmp14;
      cResult[8] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      if (cResult[10] === tmp6) {
        let tmp20;
        if (cResult[11] === tmp17) {
          tmp20 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          let tmp23;
          if (cResult[14] === tmp20) {
            tmp23 = cResult[15];
          }
          return tmp23;
        }
        const obj6 = { children: hasOwnProperty(React3, obj7) };
        obj7 = { style: container, children: tmp20 };
        const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
        const tmp26 = hasOwnProperty(TwoFASetupModalScreen, obj6);
        cResult[13] = tmp4.container;
        cResult[14] = tmp20;
        cResult[15] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj8 = { bottom: true, style: container2, children: items };
    items = [tmp6, tmp11, tmp17];
    const tmp22 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, obj8);
    cResult[9] = tmp4.container;
    cResult[10] = tmp6;
    cResult[11] = tmp17;
    cResult[12] = tmp22;
    tmp20 = tmp22;
  }
  const items1 = [, ];
  ({ modalBody: arr[0], text: arr[1] } = twoFASetupStyles);
  cResult[3] = twoFASetupStyles.modalBody;
  cResult[4] = twoFASetupStyles.text;
  cResult[5] = items1;
  tmp14 = items1;
}) : (() => {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  let obj4;
  const tmp = closure_7();
  const obj = TwoFASetupStyles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const obj2 = { children: hasOwnProperty(React3, obj3) };
  obj3 = { style: tmp.container, children: metroRequire(SafeAreaPaddingView, obj4) };
  const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
  obj4 = { bottom: true, style: tmp.container, children: items };
  const obj5 = { source: AssetRegistryDefault, style: tmp.authIcon };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [hasOwnProperty(_false, obj5), , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9E74Dx"]) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items[1] = hasOwnProperty(Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: items1, children: intl2.format(intl3.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" }) };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[2] = hasOwnProperty(Text, obj7);
  return hasOwnProperty(TwoFASetupModalScreen, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default tmp5;