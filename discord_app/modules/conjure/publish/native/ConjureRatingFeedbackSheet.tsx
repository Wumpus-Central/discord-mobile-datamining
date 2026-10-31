// discord_app/modules/conjure/publish/native/ConjureRatingFeedbackSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../utils/native/KeyboardManagerUtils.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
const obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureRatingFeedbackSheet.tsx");

export default function ConjureRatingFeedbackSheet(rating) {
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_6();
  const bottomSheetRef1 = require("useBottomSheetRef").useBottomSheetRef();
  ({ bottomSheetClose: c0, bottomSheetRef } = bottomSheetRef1);
  const obj = require("useBottomSheetRef");
  const conjureRatingFeedback = require("conjurePublishRatings").useConjureRatingFeedback(rating.rating);
  ({ send: c1, text, setText, canSend } = conjureRatingFeedback);
  const intl = require("util").intl;
  const stringResult = intl.string(_modDef3868.IqkF07);
  const obj3 = {
    ref: bottomSheetRef,
    startExpanded: true,
    keyboardShouldPersistTaps: "handled",
    header: closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }),
    children: null,
  };
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { accessibilityLabel: stringResult, placeholder: null, maxLength: null, value: null, onChange: null };
  const intl2 = require("util").intl;
  obj5.placeholder = intl2.string(_modDef3868.HMGKAV);
  obj5.maxLength = require("conjurePublishRatings").CONJURE_RATING_FEEDBACK_MAX_LENGTH;
  obj5.value = text;
  obj5.onChange = setText;
  const items = [closure_4(require("TextArea").TextArea, obj5)];
  const obj6 = { variant: "primary", text: null, disabled: null, onPress: null };
  const intl3 = require("util").intl;
  obj6.text = intl3.string(_modDef3868["sr+mUC"]);
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
}
export const CONJURE_RATING_FEEDBACK_SHEET_KEY = "ConjureRatingFeedbackSheet";
