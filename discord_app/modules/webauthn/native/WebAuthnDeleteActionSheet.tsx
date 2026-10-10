// === Module 15036: WebAuthnDeleteActionSheet ===

// Module 15036 (WebAuthnDeleteActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 5939 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { content: { alignItems: "center" }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_16 }, sheetContent: null, sheetBody: null };
let obj3 = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
obj2.sheetContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.sheetBody = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WebAuthnDeleteActionSheet(credential) {
  const cResult = credential(onPress[6]).c(26);
  credential = credential.credential;
  ({ deleting, setDeleting } = credential);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleClose() {
      setDeleting(first[7]).hideActionSheet();
    }
    cResult[0] = handleClose;
    onPress = handleClose;
  } else {
    onPress = cResult[0];
  }
  if (cResult[1] === credential) {
    if (cResult[2] === setDeleting) {
      let tmp6 = cResult[3];
    }
    ({ sheetContent, sheetBody } = tmp4);
    if (cResult[4] !== credential.name) {
      let intl = tmp(tmp2[10]).intl;
      let obj2 = { keyName: credential.name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[10]).t.mI3CoL, obj2);
      cResult[4] = credential.name;
      cResult[5] = formatToPlainStringResult;
      let tmp7 = formatToPlainStringResult;
    } else {
      tmp7 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { onPress };
      const tmp11 = closure_4(tmp(tmp2[11]).ActionSheetCloseButton, obj3);
      cResult[6] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp7) {
      const obj4 = { title: tmp7, trailing: tmp9 };
      const tmp14 = closure_4(tmp(tmp2[12]).BottomSheetTitleHeader, obj4);
      cResult[7] = tmp7;
      cResult[8] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    const _Symbol2 = Symbol;
    ({ content, subtitle } = tmp4);
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[10]).intl;
      const stringResult = intl2.string(tmp(tmp2[10]).t.IfTbc1);
      cResult[9] = stringResult;
      let tmp15 = stringResult;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== tmp4.subtitle) {
      const obj5 = { variant: "heading-md/normal", style: subtitle, children: tmp15 };
      const tmp19 = closure_4(tmp(tmp2[13]).Text, obj5);
      cResult[10] = tmp4.subtitle;
      cResult[11] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[11];
    }
    if (cResult[12] === tmp4.content) {
      if (cResult[13] === tmp17) {
        let tmp20 = cResult[14];
      }
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { children: null };
        const obj7 = { text: null, onPress: null, variant: "primary", grow: true };
        const intl3 = tmp(tmp2[10]).intl;
        obj7.text = intl3.string(tmp(tmp2[10]).t["lqK//z"]);
        obj7.onPress = onPress;
        obj6.children = closure_4(tmp(tmp2[14]).Button, obj7);
        const tmp27 = closure_4(View, obj6);
        cResult[15] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[15];
      }
      const _Symbol4 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[10]).intl;
        const stringResult1 = intl4.string(tmp(tmp2[10]).t.zYOk0f);
        cResult[16] = stringResult1;
        let tmp28 = stringResult1;
      } else {
        tmp28 = cResult[16];
      }
      if (cResult[17] === deleting) {
        if (cResult[18] === tmp6) {
          let tmp30 = cResult[19];
        }
        if (cResult[20] === tmp4.sheetBody) {
          if (cResult[21] === tmp4.sheetContent) {
            if (cResult[22] === tmp20) {
              if (cResult[23] === tmp30) {
                if (cResult[24] === tmp12) {
                  let tmp34 = cResult[25];
                }
                return tmp34;
              }
            }
          }
        }
        const obj8 = { contentStyles: sheetContent, bodyStyles: sheetBody, children: null };
        const items = [tmp12, tmp20, tmp24, tmp30];
        obj8.children = items;
        const tmp36 = closure_5(tmp(tmp2[15]).BottomSheet, obj8);
        cResult[20] = tmp4.sheetBody;
        cResult[21] = tmp4.sheetContent;
        cResult[22] = tmp20;
        cResult[23] = tmp30;
        cResult[24] = tmp12;
        cResult[25] = tmp36;
        tmp34 = tmp36;
      }
      const obj9 = { children: null };
      const obj10 = { text: tmp28, onPress: tmp6, variant: "destructive", disabled: deleting, loading: deleting, grow: true };
      obj9.children = closure_4(tmp(tmp2[14]).Button, obj10);
      const tmp33 = closure_4(View, obj9);
      cResult[17] = deleting;
      cResult[18] = tmp6;
      cResult[19] = tmp33;
      tmp30 = tmp33;
    }
    const obj11 = { style: content, children: tmp17 };
    const tmp23 = closure_4(View, obj11);
    cResult[12] = tmp4.content;
    cResult[13] = tmp17;
    cResult[14] = tmp23;
    tmp20 = tmp23;
  }
  function handleDelete() {
    setDeleting(true);
    first();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      const obj2 = { text: null, variant: "success" };
      const intl = credential(1126).intl;
      obj2.text = intl.string(credential(1126).t.ZnkeXs);
      setDeleting(4809).open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj2);
    });
    result.then(() => {
      const obj2 = { text: null, variant: "success" };
      const intl = credential(1126).intl;
      obj2.text = intl.string(credential(1126).t.ZnkeXs);
      setDeleting(4809).open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj2);
    }).catch((error) => {
      setDeleting(4809).open("WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", { text: error.message, variant: "critical" });
    }).finally(() => {
      setDeleting(false);
    });
  }
  cResult[1] = credential;
  cResult[2] = setDeleting;
  cResult[3] = handleDelete;
  tmp6 = handleDelete;
  let obj = credential(onPress[6]);
}) : (function WebAuthnDeleteActionSheet(credential) {
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_6();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: null };
  let obj2 = { title: null, trailing: null };
  let intl = credential(1126).intl;
  obj2.title = intl.formatToPlainString(credential(1126).t.mI3CoL, { keyName: credential.name });
  obj2.trailing = closure_4(credential(6893).ActionSheetCloseButton, { onPress: handleClose });
  const items = [closure_4(credential(6838).BottomSheetTitleHeader, obj2), , , ];
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1126).intl;
  obj5.children = intl2.string(credential(1126).t.IfTbc1);
  obj4.children = closure_4(credential(5088).Text, obj5);
  items[1] = closure_4(View, obj4);
  const obj6 = { children: null };
  const obj7 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1126).intl;
  obj7.text = intl3.string(credential(1126).t["lqK//z"]);
  obj7.onPress = handleClose;
  obj6.children = closure_4(credential(5379).Button, obj7);
  items[2] = closure_4(View, obj6);
  const obj8 = { children: null };
  const obj9 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1126).intl;
  obj9.text = intl4.string(credential(1126).t.zYOk0f);
  obj9.onPress = function handleDelete() {
    closure_1_1(true);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = WebAuthnActionCreators.deleteWebAuthnCredential(credential);
    const nextPromise = result.then(() => {
      const obj2 = { text: null, variant: "success" };
      const intl = credential(1126).intl;
      obj2.text = intl.string(credential(1126).t.ZnkeXs);
      closure_1_1(4809).open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj2);
    });
    result.then(() => {
      const obj2 = { text: null, variant: "success" };
      const intl = credential(1126).intl;
      obj2.text = intl.string(credential(1126).t.ZnkeXs);
      closure_1_1(4809).open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj2);
    }).catch((error) => {
      closure_1_1(4809).open("WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", { text: error.message, variant: "critical" });
    }).finally(() => {
      closure_1_1(false);
    });
  };
  obj9.disabled = deleting;
  obj9.loading = deleting;
  obj8.children = closure_4(credential(5379).Button, obj9);
  items[3] = closure_4(View, obj8);
  obj.children = items;
  return closure_5(credential(6839).BottomSheet, obj);
});