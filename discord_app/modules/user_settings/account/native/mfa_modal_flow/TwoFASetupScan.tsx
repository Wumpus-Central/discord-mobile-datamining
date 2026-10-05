// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, totpSecret;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, copy: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (totpSecret) => {
      let items;
      let obj7;
      let tmp6;
      let tmp7;
      let obj = totpSecret(576);
      const cResult = obj.c(31);
      totpSecret = totpSecret.totpSecret;
      const tmp4 = closure_6();
      [tmp6, dependencyMap] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] !== totpSecret) {
        const fn = function y() {
          dependencyMap(true);
          const obj = ClipboardUtils;
          obj.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
        };
        cResult[0] = totpSecret;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = totpSecret(14571);
      const twoFASetupStyles = tmpResult.useTwoFASetupStyles();
      if (cResult[2] === twoFASetupStyles.modalHeader) {
        let tmp10;
        let tmp12;
        let tmp14;
        if (cResult[3] === twoFASetupStyles.text) {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(totpSecret(1126).t["hg/+aT"]);
          cResult[5] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== tmp10) {
          const obj2 = { style: tmp10, children: tmp12 };
          const tmp16 = closure_4(totpSecret(1188).LegacyText, obj2);
          cResult[6] = tmp10;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === twoFASetupStyles.modalBody) {
          let tmp17;
          let tmp18;
          let tmp20;
          let tmp23;
          let tmp24;
          let tmp27;
          if (cResult[9] === twoFASetupStyles.text) {
            tmp17 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(totpSecret(1126).t["UQR+Qy"]);
            cResult[11] = stringResult1;
            tmp18 = stringResult1;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== tmp17) {
            const obj3 = { style: tmp17, children: tmp18 };
            const tmp22 = closure_4(totpSecret(1188).LegacyText, obj3);
            cResult[12] = tmp17;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { textAlign: "center" };
            cResult[14] = obj4;
            tmp23 = obj4;
          } else {
            tmp23 = cResult[14];
          }
          if (cResult[15] !== totpSecret) {
            const obj5 = { variant: "text-md/bold", style: tmp23, children: totpSecret };
            const tmp26 = closure_4(totpSecret(4886).Text, obj5);
            cResult[15] = totpSecret;
            cResult[16] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[16];
          }
          if (cResult[17] !== tmp6) {
            let stringResult2;
            const intl3 = tmp(1126).intl;
            const string = intl3.string;
            const t = tmp(1126).t;
            if (tmp6) {
              stringResult2 = string(t.mGZ66D);
            } else {
              stringResult2 = string(t.OpuAlK);
            }
            cResult[17] = tmp6;
            cResult[18] = stringResult2;
            tmp27 = stringResult2;
          } else {
            tmp27 = cResult[18];
          }
          if (cResult[19] === tmp4.copy) {
            let tmp29;
            if (cResult[20] === tmp27) {
              tmp29 = cResult[21];
            }
            if (cResult[22] === tmp7) {
              let tmp32;
              if (cResult[23] === tmp29) {
                tmp32 = cResult[24];
              }
              if (cResult[25] === tmp4.container) {
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp32) {
                    if (cResult[28] === tmp14) {
                      let tmp35;
                      if (cResult[29] === tmp20) {
                        tmp35 = cResult[30];
                      }
                      return tmp35;
                    }
                  }
                }
              }
              const obj6 = { children: closure_5(totpSecret(6619).SafeAreaPaddingView, obj7) };
              const TwoFASetupModalScreen = tmp(14567).TwoFASetupModalScreen;
              obj7 = { bottom: true, style: tmp9, children: items };
              items = [tmp14, tmp20, tmp24, tmp32];
              const tmp38 = closure_4(TwoFASetupModalScreen, obj6);
              cResult[25] = tmp4.container;
              cResult[26] = tmp24;
              cResult[27] = tmp32;
              cResult[28] = tmp14;
              cResult[29] = tmp20;
              cResult[30] = tmp38;
              tmp35 = tmp38;
            }
            const obj8 = { accessibilityRole: "button", onPress: tmp7, children: tmp29 };
            const tmp34 = closure_4(totpSecret(5909).PressableOpacity, obj8);
            cResult[22] = tmp7;
            cResult[23] = tmp29;
            cResult[24] = tmp34;
            tmp32 = tmp34;
          }
          const obj9 = { style: tmp4.copy, children: tmp27 };
          const tmp31 = closure_4(totpSecret(1188).LegacyText, obj9);
          cResult[19] = tmp4.copy;
          cResult[20] = tmp27;
          cResult[21] = tmp31;
          tmp29 = tmp31;
        }
        const items1 = [,];
        ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
        cResult[8] = twoFASetupStyles.modalBody;
        cResult[9] = twoFASetupStyles.text;
        cResult[10] = items1;
        tmp17 = items1;
      }
      const items2 = [,];
      ({ modalHeader: arr[0], text: arr[1], modalHeader: tmp3[2] } = twoFASetupStyles);
      cResult[3] = twoFASetupStyles.text;
      cResult[4] = items2;
      tmp10 = items2;
    }
  : (totpSecret) => {
      let LegacyText3;
      let closure_1;
      let first;
      let intl;
      let intl2;
      let items1;
      let items2;
      let items3;
      let obj6;
      let stringResult;
      totpSecret = totpSecret.totpSecret;
      dependencyMap = undefined;
      const tmp = closure_6();
      [first, dependencyMap] = react.useState(false);
      const items = [totpSecret];
      const callback = react.useCallback(() => {
        closure_1(true);
        const obj = ClipboardUtils;
        obj.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
      }, items);
      let obj = totpSecret(14571);
      const twoFASetupStyles = obj.useTwoFASetupStyles();
      const TwoFASetupModalScreen = totpSecret(14567).TwoFASetupModalScreen;
      const obj2 = { bottom: true, style: tmp.container, children: items2 };
      const SafeAreaPaddingView = totpSecret(6619).SafeAreaPaddingView;
      const obj3 = { style: items1, children: intl.string(totpSecret(1126).t["hg/+aT"]) };
      items1 = [,];
      ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
      const LegacyText = totpSecret(1188).LegacyText;
      intl = totpSecret(1126).intl;
      items2 = [closure_4(LegacyText, obj3), , ,];
      const obj4 = { style: items3, children: intl2.string(totpSecret(1126).t["UQR+Qy"]) };
      items3 = [,];
      ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
      const LegacyText2 = totpSecret(1188).LegacyText;
      intl2 = totpSecret(1126).intl;
      items2[1] = closure_4(LegacyText2, obj4);
      items2[2] = closure_4(totpSecret(4886).Text, {
        variant: "text-md/bold",
        style: { textAlign: "center" },
        children: totpSecret,
      });
      const obj5 = { accessibilityRole: "button", onPress: callback, children: closure_4(LegacyText3, obj6) };
      const PressableOpacity = totpSecret(5909).PressableOpacity;
      obj6 = { style: tmp.copy, children: stringResult };
      LegacyText3 = totpSecret(1188).LegacyText;
      const intl3 = totpSecret(1126).intl;
      const string = intl3.string;
      const t = totpSecret(1126).t;
      if (first) {
        stringResult = string(t.mGZ66D);
      } else {
        stringResult = string(t.OpuAlK);
      }
      const obj7 = { children: closure_5(SafeAreaPaddingView, obj2) };
      items2[3] = closure_4(PressableOpacity, obj5);
      return closure_4(TwoFASetupModalScreen, obj7);
    };
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default tmp3;
