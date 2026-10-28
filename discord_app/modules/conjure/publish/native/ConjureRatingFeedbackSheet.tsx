// === Module 12532: ConjureRatingFeedbackSheet ===

// Module 12532 (ConjureRatingFeedbackSheet)
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import _modDef3863 from "module_3863" /* 3863 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureRatingFeedbackSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRatingFeedbackSheet(rating) {
  const cResult = bottomSheetClose(576).c(20);
  const tmp4 = closure_6();
  const obj = bottomSheetClose(576);
  const bottomSheetRef1 = bottomSheetClose(8696).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = bottomSheetClose(8696);
  const conjureRatingFeedback = bottomSheetClose(12531).useConjureRatingFeedback(rating.rating);
  ({ text, setText, send } = conjureRatingFeedback);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = bottomSheetClose(1125).intl;
    const stringResult = intl.string(send(3863).IqkF07);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === bottomSheetClose) {
    if (cResult[2] === send) {
      let tmp10 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: first };
      const tmp13 = closure_4(bottomSheetClose(7284).BottomSheetTitleHeader, obj4);
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = bottomSheetClose(1125).intl;
      const stringResult1 = intl2.string(send(3863).HMGKAV);
      cResult[5] = stringResult1;
      let tmp14 = stringResult1;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === setText) {
      if (cResult[7] === text) {
        let tmp17 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = bottomSheetClose(1125).intl;
        const stringResult2 = intl3.string(send(3863)["sr+mUC"]);
        cResult[9] = stringResult2;
        let tmp20 = stringResult2;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp23) {
          let tmp24 = cResult[12];
        }
        if (cResult[13] === tmp4.content) {
          if (cResult[14] === tmp17) {
            if (cResult[15] === tmp24) {
              let tmp27 = cResult[16];
            }
            if (cResult[17] === bottomSheetRef) {
              if (cResult[18] === tmp27) {
                let tmp31 = cResult[19];
              }
              return tmp31;
            }
            const obj5 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp11, children: tmp27 };
            const tmp33 = closure_4(bottomSheetClose(7334).ActionSheet, obj5);
            cResult[17] = bottomSheetRef;
            cResult[18] = tmp27;
            cResult[19] = tmp33;
            tmp31 = tmp33;
          }
        }
        const obj6 = { style: tmp4.content, children: null };
        const items = [tmp17, tmp24];
        obj6.children = items;
        const tmp30 = closure_5(View, obj6);
        cResult[13] = tmp4.content;
        cResult[14] = tmp17;
        cResult[15] = tmp24;
        cResult[16] = tmp30;
        tmp27 = tmp30;
      }
      const obj7 = { variant: "primary", text: tmp20, disabled: !conjureRatingFeedback.canSend, onPress: tmp10 };
      const tmp26 = closure_4(bottomSheetClose(5280).Button, obj7);
      cResult[10] = tmp10;
      cResult[11] = !conjureRatingFeedback.canSend;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj8 = { accessibilityLabel: first, placeholder: tmp14, maxLength: bottomSheetClose(12531).CONJURE_RATING_FEEDBACK_MAX_LENGTH, value: text, onChange: setText };
    const tmp19 = closure_4(bottomSheetClose(7216).TextArea, obj8);
    cResult[6] = setText;
    cResult[7] = text;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  }
  function handleSend() {
    send();
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    bottomSheetClose();
  }
  cResult[1] = bottomSheetClose;
  cResult[2] = send;
  cResult[3] = handleSend;
  tmp10 = handleSend;
  const obj3 = bottomSheetClose(12531);
}) : (function ConjureRatingFeedbackSheet(rating) {
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_6();
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  ({ bottomSheetClose: c0, bottomSheetRef } = bottomSheetRef1);
  const obj = require("useBottomSheetRef");
  const conjureRatingFeedback = require("conjurePublishRatings").useConjureRatingFeedback(rating.rating);
  ({ send: c1, text, setText, canSend } = conjureRatingFeedback);
  const intl = require("util").intl;
  const stringResult = intl.string(_modDef3863.IqkF07);
  const obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { accessibilityLabel: stringResult, placeholder: null, maxLength: null, value: null, onChange: null };
  const intl2 = require("util").intl;
  obj5.placeholder = intl2.string(_modDef3863.HMGKAV);
  obj5.maxLength = require("conjurePublishRatings").CONJURE_RATING_FEEDBACK_MAX_LENGTH;
  obj5.value = text;
  obj5.onChange = setText;
  const items = [closure_4(require("TextArea").TextArea, obj5), ];
  const obj6 = { variant: "primary", text: null, disabled: null, onPress: null };
  const intl3 = require("util").intl;
  obj6.text = intl3.string(_modDef3863["sr+mUC"]);
  obj6.disabled = !canSend;
  obj6.onPress = function handleSend() {
    _undefined2();
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    _undefined();
  };
  items[1] = closure_4(require("components/Button/Button").Button, obj6);
  obj4.children = items;
  obj3.children = closure_5(View, obj4);
  return closure_4(require("ActionSheet").ActionSheet, obj3);
});
export const CONJURE_RATING_FEEDBACK_SHEET_KEY = "ConjureRatingFeedbackSheet";