// === Module 9395: SecureFramesVerificationBottomSheet ===

// Module 9395 (SecureFramesVerificationBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import react from "react" /* 19 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9380 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: hasOwnProperty, EPOCH_AUTHENTICATOR_COLUMNS: metroRequire, EPOCH_AUTHENTICATOR_LENGTH: metroImportDefault } = SecureFramesConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { iconContainer: size, icon: { height: 48, width: 48 }, share: { height: 24 }, content: { padding: 16 }, subtitle: { textAlign: "center" }, footer: { textAlign: "center", marginTop: 8 } };
size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_10 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let epochAuthenticator;
  let footer;
  let intl;
  let obj7;
  let onShareClick;
  let subtitle;
  let title;
  let tmp5;
  let obj = onShareClick(576);
  const cResult = obj.c(44);
  ({ title, subtitle, footer, epochAuthenticator, onShareClick } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== epochAuthenticator) {
    let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
    cResult[0] = epochAuthenticator;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = onShareClick(9387);
  const readableSecureFramesFingerprint = tmpResult.useReadableSecureFramesFingerprint(tmp5);
  if (cResult[2] === readableSecureFramesFingerprint) {
    let tmp9;
    let tmp12;
    let tmp16;
    let tmp18;
    if (cResult[3] === onShareClick) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
      cResult[5] = E;
    } else {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
      const obj3 = { onPress: E };
      const tmp13 = closure_8(onShareClick(6703).ActionSheetCloseButton, obj3);
      cResult[6] = tmp13;
      tmp12 = tmp13;
    } else {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
    }
    const _Symbol3 = Symbol;
    const share = tmp4.share;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
      const stringResult = obj5.string(onShareClick(1126).t.RDE0Sc);
      cResult[7] = stringResult;
      tmp16 = stringResult;
    } else {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
      const obj4 = { variant: "text-md/semibold", color: "text-brand", children: intl.string(onShareClick(1126).t.RDE0Sc) };
      const Text = onShareClick(4892).Text;
      intl = onShareClick(1126).intl;
      const tmp19 = closure_8(Text, obj4);
      cResult[8] = tmp19;
      tmp18 = tmp19;
    } else {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
    }
    if (cResult[9] === tmp9) {
      class E {
        constructor() {
          const obj = readableSecureFramesFingerprint(dependencyMap[9]);
          obj.hideActionSheet();
        }
      }
    }
    const obj6 = { title: null, leading: tmp12, trailing: closure_8(onShareClick(5916).PressableOpacity, obj7) };
    const BottomSheetTitleHeader = onShareClick(6651).BottomSheetTitleHeader;
    obj7 = { style: share, hitSlop: 8, onPress: tmp9, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: tmp16, children: tmp18 };
    cResult[9] = tmp9;
    cResult[10] = tmp4.share;
    cResult[11] = null == readableSecureFramesFingerprint;
    cResult[12] = closure_8(BottomSheetTitleHeader, obj6);
    const tmp22 = closure_8(BottomSheetTitleHeader, obj6);
  }
  const fn = function v() {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      onShareClick(joined);
    }
  };
  cResult[2] = readableSecureFramesFingerprint;
  cResult[3] = onShareClick;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((onShareClick) => {
  let BottomSheetTitleHeader;
  let LockIcon;
  let PressableOpacity;
  let Text;
  let epochAuthenticator;
  let footer;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let subtitle;
  let title;
  let tmp7Result;
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = closure_10();
  let obj = onShareClick(9387);
  let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
  const readableSecureFramesFingerprint = obj.useReadableSecureFramesFingerprint(obj2);
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = react.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      onShareClick(joined);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = readableSecureFramesFingerprint(dependencyMap[9]);
    obj.hideActionSheet();
  }, []);
  const obj3 = { startExpanded: true, header: closure_8(BottomSheetTitleHeader, obj4), children: closure_9(View, obj7) };
  BottomSheet = onShareClick(6652).BottomSheet;
  obj4 = { title: null, leading: closure_8(onShareClick(6703).ActionSheetCloseButton, { onPress: callback1 }), trailing: closure_8(PressableOpacity, obj5) };
  BottomSheetTitleHeader = onShareClick(6651).BottomSheetTitleHeader;
  obj5 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: intl.string(onShareClick(1126).t.RDE0Sc), children: closure_8(Text, obj6) };
  PressableOpacity = onShareClick(5916).PressableOpacity;
  intl = onShareClick(1126).intl;
  obj6 = { variant: "text-md/semibold", color: "text-brand", children: intl2.string(onShareClick(1126).t.RDE0Sc) };
  Text = onShareClick(4892).Text;
  intl2 = onShareClick(1126).intl;
  obj7 = { style: tmp.content, children: items2 };
  const obj8 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: items1 };
  const obj9 = { style: tmp.iconContainer, children: closure_8(LockIcon, obj10) };
  const Stack = onShareClick(5600).Stack;
  obj10 = { style: tmp.icon, color: readableSecureFramesFingerprint(587).colors.TEXT_SUBTLE };
  LockIcon = onShareClick(5886).LockIcon;
  items1 = [closure_8(View, obj9), closure_8(onShareClick(4892).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title }), ];
  const obj11 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  items1[2] = closure_8(onShareClick(4892).Text, obj11);
  items2 = [closure_9(Stack, obj8), , ];
  const obj12 = { title: intl3.string(onShareClick(1126).t.cgBTyO), trailing: tmp7Result, chunks: readableSecureFramesFingerprint, columns };
  const tmp11 = readableSecureFramesFingerprint(9393);
  intl3 = onShareClick(1126).intl;
  tmp7Result = null != readableSecureFramesFingerprint;
  const tmp10 = readableSecureFramesFingerprint;
  const tmp2 = onShareClick;
  if (tmp7Result) {
    const obj13 = { chunks: readableSecureFramesFingerprint };
    tmp7Result = closure_8(tmp10(9396), obj13);
  }
  items2[1] = closure_8(tmp11, obj12);
  const obj14 = { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer };
  items2[2] = closure_8(tmp2(4892).Text, obj14);
  return closure_8(BottomSheet, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default tmp4;