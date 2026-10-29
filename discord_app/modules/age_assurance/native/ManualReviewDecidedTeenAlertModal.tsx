// === Module 8154: ManualReviewDecidedTeenAlertModal ===

// Module 8154 (ManualReviewDecidedTeenAlertModal)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import _modDef3188 from "module_3188" /* 3188 */;
import Text_Text from "Text/Text" /* 5271 */;
import AlertModal from "AlertModal" /* 5952 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 8155 */;
import noop from "module_19" /* 19 */;

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(6715).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  const cResult = c.c(9);
  teenAgeRange = teenAgeRange.teenAgeRange;
  const isManualReviewInconclusiveCopyEnabled = ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function contentAndSettingsHook(children, id) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(7941);
          const intl = closure_1_0(1125).intl;
          return obj.openUrl(closure_1_1(2065).getArticleURL(intl.string(closure_1_1(3188).agiNYw)));
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
    const stringResult = intl.string(_modDef3188.AA3xYb);
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
        const tmp16 = jsx(AlertModal.AlertActions, { children: null });
        const obj5 = { impression: null };
        const obj6 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN };
        obj5.impression = obj6;
        cResult[5] = tmp16;
        cResult[6] = obj5;
        let tmp14 = obj5;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[5];
        tmp14 = cResult[6];
      }
      if (cResult[7] !== cResult[4]) {
        const obj7 = { title: tmp6, content: tmp9, actions: tmp13, trackingProps: tmp14 };
        const tmp19 = jsx(AlertModal.AlertModal, { title: tmp6, content: tmp9, actions: tmp13, trackingProps: tmp14 });
        cResult[7] = tmp9;
        cResult[8] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[8];
      }
      return tmp17;
    }
  }
  const intl2 = util.intl;
  const format = intl2.format;
  let obj8 = _modDef3188;
  if (isManualReviewInconclusiveCopyEnabled) {
    obj8 = { contentAndSettingsHook: first };
    let formatResult = format(obj8.UIbYzl, obj8);
  } else {
    let tmp11 = teenAgeRange;
    if (teenAgeRange == null) {
      tmp11 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj9 = { teenAgeRange: tmp11, contentAndSettingsHook: first };
    formatResult = format(obj8["2+f8w1"], obj9);
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
        const obj = closure_1_1(7941);
        const intl = closure_1_0(1125).intl;
        return obj.openUrl(closure_1_1(2065).getArticleURL(intl.string(closure_1_1(3188).agiNYw)));
      },
      children
    }, id);
  }
  const isManualReviewInconclusiveCopyEnabled = ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const obj2 = { title: null, content: null, actions: null, trackingProps: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3188.AA3xYb);
  const intl2 = util.intl;
  const format = intl2.format;
  const tmp5 = _modDef3188;
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
  const obj7 = { impression: null };
  obj7.impression = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN };
  obj2.trackingProps = obj7;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
});