// === Module 8816: SecureFramesVerificationBottomSheet ===

// Module 8816 (SecureFramesVerificationBottomSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const SecureFramesConstants = fn(8801);
({ EPOCH_AUTHENTICATOR_CHUNK_SIZE: hasOwnProperty, EPOCH_AUTHENTICATOR_COLUMNS: metroRequire, EPOCH_AUTHENTICATOR_LENGTH: closure_7 } = SecureFramesConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { iconContainer: null, icon: null, share: null, content: null, subtitle: null, footer: null };
let size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.iconContainer = size;
obj2.icon = { height: 48, width: 48 };
obj2.share = { height: 24 };
obj2.content = { padding: 16 };
obj2.subtitle = { textAlign: "center" };
obj2.footer = { textAlign: "center", marginTop: 8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesVerificationBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SecureFramesVerificationBottomSheet(arg0) {
  const cResult = onShareClick(576).c(44);
  ({ title, subtitle, footer, epochAuthenticator, onShareClick } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== epochAuthenticator) {
    let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
    cResult[0] = epochAuthenticator;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const obj = onShareClick(576);
  const readableSecureFramesFingerprint = onShareClick(8808).useReadableSecureFramesFingerprint(tmp5);
  if (cResult[2] === readableSecureFramesFingerprint) {
    if (cResult[3] === onShareClick) {
      let tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      cResult[5] = E;
    } else {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const obj3 = { onPress: E };
      const tmp13 = closure_8(onShareClick(6880).ActionSheetCloseButton, obj3);
      cResult[6] = tmp13;
      const tmp12 = tmp13;
    } else {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const stringResult = obj5.string(onShareClick(1126).t.RDE0Sc);
      cResult[7] = stringResult;
      const tmp16 = stringResult;
    } else {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
      const obj4 = { variant: "text-md/semibold", color: "text-brand", children: null };
      const intl = onShareClick(1126).intl;
      obj4.children = intl.string(onShareClick(1126).t.RDE0Sc);
      const tmp19 = closure_8(onShareClick(5086).Text, obj4);
      cResult[8] = tmp19;
      const tmp18 = tmp19;
    } else {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    if (cResult[9] === tmp9) {
      class E {
        constructor() {
          obj = closure_1(closure_1_2[9]);
          hideActionSheetResult = obj.hideActionSheet();
          return;
        }
      }
    }
    const obj6 = { title: null, leading: tmp12, trailing: null };
    const obj7 = { style: tmp4.share, hitSlop: 8, onPress: tmp9, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: tmp16, children: tmp18 };
    obj6.trailing = closure_8(onShareClick(6189).PressableOpacity, obj7);
    const tmp22 = closure_8(onShareClick(6828).BottomSheetTitleHeader, obj6);
    cResult[9] = tmp9;
    cResult[10] = tmp4.share;
    cResult[11] = null == readableSecureFramesFingerprint;
    cResult[12] = tmp22;
  }
  const fn = function v() {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onShareClick(joined);
    }
  };
  cResult[2] = readableSecureFramesFingerprint;
  cResult[3] = onShareClick;
  cResult[4] = fn;
  tmp9 = fn;
  const tmpResult = onShareClick(8808);
}) : (function SecureFramesVerificationBottomSheet(onShareClick) {
  onShareClick = onShareClick.onShareClick;
  ({ title, subtitle, footer, epochAuthenticator } = onShareClick);
  const tmp = closure_10();
  const readableSecureFramesFingerprint = onShareClick(8808).useReadableSecureFramesFingerprint({ fingerprintBase64: epochAuthenticator, chunkSize, desiredLength });
  const items = [readableSecureFramesFingerprint, onShareClick];
  const callback = noop.useCallback(() => {
    if (null != readableSecureFramesFingerprint) {
      const joined = readableSecureFramesFingerprint.join(" ");
      ActionSheetActionCreatorsDefault.hideActionSheet();
      onShareClick(joined);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    readableSecureFramesFingerprint(dependencyMap[9]).hideActionSheet();
  }, []);
  const obj3 = { startExpanded: true, header: null, children: null };
  const obj4 = { title: null, leading: closure_8(onShareClick(6880).ActionSheetCloseButton, { onPress: callback1 }), trailing: null };
  const obj5 = { style: tmp.share, hitSlop: 8, onPress: callback, disabled: null == readableSecureFramesFingerprint, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onShareClick(1126).intl;
  obj5.accessibilityLabel = intl.string(onShareClick(1126).t.RDE0Sc);
  const obj6 = { variant: "text-md/semibold", color: "text-brand", children: null };
  const intl2 = onShareClick(1126).intl;
  obj6.children = intl2.string(onShareClick(1126).t.RDE0Sc);
  obj5.children = closure_8(onShareClick(5086).Text, obj6);
  obj4.trailing = closure_8(onShareClick(6189).PressableOpacity, obj5);
  obj3.header = closure_8(onShareClick(6828).BottomSheetTitleHeader, obj4);
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: null };
  const obj9 = { style: tmp.iconContainer, children: null };
  const obj = onShareClick(8808);
  let obj2 = { fingerprintBase64: epochAuthenticator, chunkSize, desiredLength };
  const tmp2 = onShareClick;
  obj9.children = closure_8(onShareClick(8198).LockIcon, { style: tmp.icon, color: readableSecureFramesFingerprint(587).colors.TEXT_SUBTLE });
  const items1 = [closure_8(View, obj9), closure_8(onShareClick(5086).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: title }), closure_8(onShareClick(5086).Text, { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle })];
  obj8.children = items1;
  const items2 = [closure_9(onShareClick(5373).Stack, obj8), , ];
  const obj12 = { title: null, trailing: null, chunks: null, columns: null };
  const obj10 = { style: tmp.icon, color: readableSecureFramesFingerprint(587).colors.TEXT_SUBTLE };
  const obj11 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
  const tmp10 = readableSecureFramesFingerprint;
  const intl3 = onShareClick(1126).intl;
  obj12.title = intl3.string(onShareClick(1126).t.cgBTyO);
  let tmp7Result = null != readableSecureFramesFingerprint;
  if (tmp7Result) {
    const obj13 = { chunks: readableSecureFramesFingerprint };
    tmp7Result = closure_8(tmp10(8817), obj13);
  }
  obj12.trailing = tmp7Result;
  obj12.chunks = readableSecureFramesFingerprint;
  obj12.columns = columns;
  items2[1] = closure_8(readableSecureFramesFingerprint(8814), obj12);
  items2[2] = closure_8(tmp2(5086).Text, { style: tmp.footer, variant: "text-xs/normal", color: "text-muted", children: footer });
  obj7.children = items2;
  obj3.children = closure_9(View, obj7);
  return closure_8(onShareClick(6829).BottomSheet, obj3);
});