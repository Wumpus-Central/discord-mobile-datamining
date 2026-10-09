// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import TwoFASetupModal from "TwoFASetupModal.tsx";
import TwoFASetupStyles from "TwoFASetupStyles.tsx";
import _modDef14957 from "../../../../../../_runtime/metro/14957__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  authIcon: { width: 120, height: 120, marginBottom: 32 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TwoFASetupLanding() {
      const cResult = c.c(16);
      const tmp4 = closure_6();
      const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
      ({ container, container: container2 } = tmp4);
      if (cResult[0] !== tmp4.authIcon) {
        const obj3 = { source: _modDef14957, style: tmp4.authIcon };
        const tmp10 = React4(FastImageDefault, obj3);
        cResult[0] = tmp4.authIcon;
        cResult[1] = tmp10;
        let tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl = util.intl;
        obj4.children = intl.string(util.t["9E74Dx"]);
        const tmp13 = React4(Text_Text.Heading, obj4);
        cResult[2] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === twoFASetupStyles.modalBody) {
        if (cResult[4] === twoFASetupStyles.text) {
          let tmp14 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const formatResult = intl2.format(util.t.A7Aehw, {
            googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
            authyURL: "https://www.authy.com/",
          });
          cResult[6] = formatResult;
          let tmp15 = formatResult;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== tmp14) {
          const obj5 = { variant: "text-md/normal", style: tmp14, children: tmp15 };
          const tmp19 = React4(Text_Text.Text, obj5);
          cResult[7] = tmp14;
          cResult[8] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp17) {
              let tmp20 = cResult[12];
            }
            if (cResult[13] === tmp4.container) {
              if (cResult[14] === tmp20) {
                let tmp23 = cResult[15];
              }
              return tmp23;
            }
            const obj6 = { children: null };
            const obj7 = { style: container, children: tmp20 };
            obj6.children = React4(View, obj7);
            const tmp26 = React4(TwoFASetupModal.TwoFASetupModalScreen, obj6);
            cResult[13] = tmp4.container;
            cResult[14] = tmp20;
            cResult[15] = tmp26;
            tmp23 = tmp26;
          }
        }
        const obj8 = { bottom: true, style: container2, children: null };
        const items = [tmp6, tmp11, tmp17];
        obj8.children = items;
        const tmp22 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj8);
        cResult[9] = tmp4.container;
        cResult[10] = tmp6;
        cResult[11] = tmp17;
        cResult[12] = tmp22;
        tmp20 = tmp22;
      }
      const items1 = [,];
      ({ modalBody: arr[0], text: arr[1] } = twoFASetupStyles);
      cResult[3] = twoFASetupStyles.modalBody;
      cResult[4] = twoFASetupStyles.text;
      cResult[5] = items1;
      tmp14 = items1;
    }
  : function TwoFASetupLanding() {
      const tmp = closure_6();
      const twoFASetupStyles = TwoFASetupStyles.useTwoFASetupStyles();
      const obj2 = { children: null };
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { bottom: true, style: tmp.container, children: null };
      const obj5 = { source: null, style: null };
      obj5.source = _modDef14957;
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
    };
