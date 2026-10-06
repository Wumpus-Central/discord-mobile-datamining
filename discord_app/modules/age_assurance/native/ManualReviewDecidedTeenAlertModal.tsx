// === Module 8303: ManualReviewDecidedTeenAlertModal ===

// Module 8303 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef3137 from "module_3137" /* 3137 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8118 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 8304 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let teenAgeRange;

const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((teenAgeRange) => {
  let first;
  let formatResult;
  let intl3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  teenAgeRange = teenAgeRange.teenAgeRange;
  const obj2 = ManualReviewInconclusiveCopyExperiment;
  const isManualReviewInconclusiveCopyEnabled = obj2.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(children, id) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const openUrl = closure_1_1(closure_1_2[7]).openUrl;
          closure_1_1(closure_1_2[7]);
          const getArticleURL = closure_1_1(closure_1_2[8]).getArticleURL;
          closure_1_1(closure_1_2[8]);
          const intl = closure_1_0(closure_1_2[9]).intl;
          return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[10]).agiNYw)));
        },
        children
      }, id);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl4.intl;
    const stringResult = intl.string(_modDef3137.AA3xYb);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === isManualReviewInconclusiveCopyEnabled) {
    let tmp9;
    let tmp15;
    let tmp18;
    if (cResult[3] === teenAgeRange) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const AlertActions = AlertModal2.AlertActions;
      ({ text: intl3.string(intl4.t["NX+WJN"]) });
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl4.intl;
      const tmp17 = <AlertActions>{null}</AlertActions>;
      cResult[5] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const tmp20 = jsx(AlertModal2.AlertModal, { title: tmp6, content: tmp9, actions: tmp15 });
      cResult[6] = tmp9;
      cResult[7] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    return tmp18;
  }
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp10 = _modDef3137;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj6 = { contentAndSettingsHook: first };
    formatResult = format(tmp10.UIbYzl, obj6);
  } else {
    let tmp13 = teenAgeRange;
    const prop = tmp10["2+f8w1"];
    if (teenAgeRange == null) {
      tmp13 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj7 = { teenAgeRange: tmp13, contentAndSettingsHook: first };
    formatResult = format(prop, obj7);
  }
  cResult[2] = isManualReviewInconclusiveCopyEnabled;
  cResult[3] = teenAgeRange;
  cResult[4] = formatResult;
  tmp9 = formatResult;
}) : ((teenAgeRange) => {
  let formatResult;
  let intl3;
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, id) {
    return jsx(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-link",
      onPress() {
        const openUrl = closure_1_1(closure_1_2[7]).openUrl;
        closure_1_1(closure_1_2[7]);
        const getArticleURL = closure_1_1(closure_1_2[8]).getArticleURL;
        closure_1_1(closure_1_2[8]);
        const intl = closure_1_0(closure_1_2[9]).intl;
        return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[10]).agiNYw)));
      },
      children
    }, id);
  }
  const obj = ManualReviewInconclusiveCopyExperiment;
  const isManualReviewInconclusiveCopyEnabled = obj.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const AlertModal = AlertModal2.AlertModal;
  let intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp5 = _modDef3137;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj3 = { contentAndSettingsHook };
    formatResult = format(tmp5.UIbYzl, obj3);
  } else {
    const prop = tmp5["2+f8w1"];
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj4 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(prop, obj4);
  }
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(_modDef3137.AA3xYb)} content={formatResult} actions={null} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default tmp3;