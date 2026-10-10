// === Module 7712: ManualReviewDecidedTeenAlertModal ===

// Module 7712 (ManualReviewDecidedTeenAlertModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3184 from "module_3184" /* 3184 */;
import Text_Text from "Text/Text" /* 5088 */;
import AlertModal from "AlertModal" /* 5305 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 7713 */;
import noop from "module_19" /* 19 */;

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(5917).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  const cResult = c.c(8);
  teenAgeRange = teenAgeRange.teenAgeRange;
  const isManualReviewInconclusiveCopyEnabled = ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function contentAndSettingsHook(children, id) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(7497);
          const intl = closure_1_0(1126).intl;
          return obj.openUrl(closure_1_1(2128).getArticleURL(intl.string(closure_1_1(3184).agiNYw)));
        },
        children
      }, id);
    }
    cResult[0] = contentAndSettingsHook;
    let first = contentAndSettingsHook;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = util.intl;
    const stringResult = intl.string(_modDef3184.AA3xYb);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === isManualReviewInconclusiveCopyEnabled) {
    if (cResult[3] === teenAgeRange) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const obj4 = { text: null };
        const intl3 = util.intl;
        obj4.text = intl3.string(util.t["NX+WJN"]);
        obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
        const tmp15 = jsx(AlertModal.AlertActions, { children: null });
        cResult[5] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== cResult[4]) {
        const obj5 = { title: tmp6, content: tmp9, actions: tmp13 };
        const tmp18 = jsx(AlertModal.AlertModal, { title: tmp6, content: tmp9, actions: tmp13 });
        cResult[6] = tmp9;
        cResult[7] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      return tmp16;
    }
  }
  const intl2 = util.intl;
  const format = intl2.format;
  let obj6 = _modDef3184;
  if (isManualReviewInconclusiveCopyEnabled) {
    obj6 = { contentAndSettingsHook: first };
    let formatResult = format(obj6.UIbYzl, obj6);
  } else {
    let tmp11 = teenAgeRange;
    if (teenAgeRange == null) {
      tmp11 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj7 = { teenAgeRange: tmp11, contentAndSettingsHook: first };
    formatResult = format(obj6["2+f8w1"], obj7);
  }
  cResult[2] = isManualReviewInconclusiveCopyEnabled;
  cResult[3] = teenAgeRange;
  cResult[4] = formatResult;
}) : (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, id) {
    return jsx(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-link",
      onPress() {
        const obj = closure_1_1(7497);
        const intl = closure_1_0(1126).intl;
        return obj.openUrl(closure_1_1(2128).getArticleURL(intl.string(closure_1_1(3184).agiNYw)));
      },
      children
    }, id);
  }
  const isManualReviewInconclusiveCopyEnabled = ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const obj2 = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3184.AA3xYb);
  const intl2 = util.intl;
  const format = intl2.format;
  const tmp5 = _modDef3184;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj3 = { contentAndSettingsHook };
    let formatResult = format(tmp5.UIbYzl, obj3);
  } else {
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj4 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(tmp5["2+f8w1"], obj4);
  }
  obj2.content = formatResult;
  const obj5 = { children: null };
  const obj6 = { text: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["NX+WJN"]);
  obj5.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj2.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
});