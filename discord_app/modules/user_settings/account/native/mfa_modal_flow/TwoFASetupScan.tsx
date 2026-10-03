// === Module 14569: TwoFASetupScan ===

// Module 14569 (TwoFASetupScan)
import nativeDefault from "native" /* 587 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, copy: { color: nativeDefault.colors.TEXT_BRAND } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((totpSecret) => {
  const cResult = totpSecret(576).c(31);
  totpSecret = totpSecret.totpSecret;
  const tmp4 = closure_6();
  const obj = totpSecret(576);
  [tmp6, dependencyMap] = noop.useState(false);
  if (cResult[0] !== totpSecret) {
    const fn = function y() {
      dependencyMap(true);
      ClipboardUtils.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
    };
    cResult[0] = totpSecret;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const twoFASetupStyles = totpSecret(14567).useTwoFASetupStyles();
  if (cResult[2] === twoFASetupStyles.modalHeader) {
    if (cResult[3] === twoFASetupStyles.text) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["hg/+aT"]);
      cResult[5] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj2 = { style: tmp10, children: tmp12 };
      const tmp16 = closure_4(tmp(1188).LegacyText, obj2);
      cResult[6] = tmp10;
      cResult[7] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] === twoFASetupStyles.modalBody) {
      if (cResult[9] === twoFASetupStyles.text) {
        let tmp17 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["UQR+Qy"]);
        cResult[11] = stringResult1;
        let tmp18 = stringResult1;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp17) {
        const obj3 = { style: tmp17, children: tmp18 };
        const tmp22 = closure_4(tmp(1188).LegacyText, obj3);
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[13];
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { textAlign: "center" };
        cResult[14] = obj4;
        let tmp23 = obj4;
      } else {
        tmp23 = cResult[14];
      }
      if (cResult[15] !== totpSecret) {
        const obj5 = { variant: "text-md/bold", style: tmp23, children: totpSecret };
        const tmp26 = closure_4(tmp(4886).Text, obj5);
        cResult[15] = totpSecret;
        cResult[16] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[16];
      }
      if (cResult[17] !== tmp6) {
        const intl3 = tmp(1126).intl;
        const string = intl3.string;
        let mGZ66D = tmp(1126).t;
        if (tmp6) {
          mGZ66D = mGZ66D.mGZ66D;
          let stringResult2 = string(mGZ66D);
        } else {
          stringResult2 = string(mGZ66D.OpuAlK);
        }
        cResult[17] = tmp6;
        cResult[18] = stringResult2;
      } else {
        if (cResult[19] === tmp4.copy) {
          if (cResult[20] === tmp27) {
            let tmp30 = cResult[21];
          }
          if (cResult[22] === tmp7) {
            if (cResult[23] === tmp30) {
              let tmp33 = cResult[24];
            }
            if (cResult[25] === tmp4.container) {
              if (cResult[26] === tmp24) {
                if (cResult[27] === tmp33) {
                  if (cResult[28] === tmp14) {
                    if (cResult[29] === tmp20) {
                      let tmp36 = cResult[30];
                    }
                    return tmp36;
                  }
                }
              }
            }
            const obj6 = { children: null };
            const obj7 = { bottom: true, style: tmp9, children: null };
            const items = [tmp14, tmp20, tmp24, tmp33];
            obj7.children = items;
            obj6.children = closure_5(tmp(6619).SafeAreaPaddingView, obj7);
            const tmp39 = closure_4(tmp(14563).TwoFASetupModalScreen, obj6);
            cResult[25] = tmp4.container;
            cResult[26] = tmp24;
            cResult[27] = tmp33;
            cResult[28] = tmp14;
            cResult[29] = tmp20;
            cResult[30] = tmp39;
            tmp36 = tmp39;
          }
          const obj8 = { accessibilityRole: "button", onPress: tmp7, children: tmp30 };
          const tmp35 = closure_4(tmp(5909).PressableOpacity, obj8);
          cResult[22] = tmp7;
          cResult[23] = tmp30;
          cResult[24] = tmp35;
          tmp33 = tmp35;
        }
        const obj9 = { style: tmp4.copy, children: cResult[18] };
        const tmp32 = closure_4(tmp(1188).LegacyText, obj9);
        cResult[19] = tmp4.copy;
        cResult[20] = cResult[18];
        cResult[21] = tmp32;
        tmp30 = tmp32;
      }
    }
    const items1 = [, ];
    ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
    cResult[8] = twoFASetupStyles.modalBody;
    cResult[9] = twoFASetupStyles.text;
    cResult[10] = items1;
    tmp17 = items1;
  }
  const items2 = [, ];
  ({ modalHeader: arr[0], text: arr[1], modalHeader: tmp3[2] } = twoFASetupStyles);
  cResult[3] = twoFASetupStyles.text;
  cResult[4] = items2;
  tmp10 = items2;
  const tmpResult = totpSecret(14567);
}) : ((totpSecret) => {
  totpSecret = totpSecret.totpSecret;
  const tmp = closure_6();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp2[1];
  const items = [totpSecret];
  const callback = noop.useCallback(() => {
    closure_1(true);
    ClipboardUtils.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  const twoFASetupStyles = totpSecret(14567).useTwoFASetupStyles();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { style: null, children: null };
  const items1 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj3.style = items1;
  const intl = totpSecret(1126).intl;
  obj3.children = intl.string(totpSecret(1126).t["hg/+aT"]);
  const items2 = [closure_4(totpSecret(1188).LegacyText, obj3), , , ];
  const obj4 = { style: null, children: null };
  const items3 = [, ];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  obj4.style = items3;
  const intl2 = totpSecret(1126).intl;
  obj4.children = intl2.string(totpSecret(1126).t["UQR+Qy"]);
  items2[1] = closure_4(totpSecret(1188).LegacyText, obj4);
  items2[2] = closure_4(totpSecret(4886).Text, { variant: "text-md/bold", style: { textAlign: "center" }, children: totpSecret });
  const obj5 = { accessibilityRole: "button", onPress: callback, children: null };
  const obj6 = { style: tmp.copy, children: null };
  const intl3 = totpSecret(1126).intl;
  const string = intl3.string;
  const t = totpSecret(1126).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj7 = { children: null };
  obj6.children = stringResult;
  obj5.children = closure_4(totpSecret(1188).LegacyText, obj6);
  items2[3] = closure_4(totpSecret(5909).PressableOpacity, obj5);
  obj2.children = items2;
  obj7.children = closure_5(totpSecret(6619).SafeAreaPaddingView, obj2);
  return closure_4(totpSecret(14563).TwoFASetupModalScreen, obj7);
});