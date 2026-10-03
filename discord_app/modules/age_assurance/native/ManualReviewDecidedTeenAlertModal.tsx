// discord_app/modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3109 from "../ManualReview.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ManualReviewInconclusiveCopyExperiment from "../ManualReviewInconclusiveCopyExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(8085).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (teenAgeRange) => {
      const cResult = c.c(8);
      teenAgeRange = teenAgeRange.teenAgeRange;
      const isManualReviewInconclusiveCopyEnabled =
        ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled(
          "manual_review_decided_teen_modal",
        );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(children, id) {
          return jsx(
            Text_Text.Text,
            {
              variant: "text-md/normal",
              color: "text-link",
              onPress() {
                const obj = closure_1_1(8084);
                const intl = closure_1_0(1126).intl;
                return obj.openUrl(closure_1_1(2115).getArticleURL(intl.string(closure_1_1(3109).agiNYw)));
              },
              children,
            },
            id,
          );
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = util.intl;
        const stringResult = intl.string(_modDef3109.AA3xYb);
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
      let obj6 = _modDef3109;
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
    }
  : (teenAgeRange) => {
      teenAgeRange = teenAgeRange.teenAgeRange;
      function contentAndSettingsHook(children, id) {
        return jsx(
          Text_Text.Text,
          {
            variant: "text-md/normal",
            color: "text-link",
            onPress() {
              const obj = closure_1_1(8084);
              const intl = closure_1_0(1126).intl;
              return obj.openUrl(closure_1_1(2115).getArticleURL(intl.string(closure_1_1(3109).agiNYw)));
            },
            children,
          },
          id,
        );
      }
      const isManualReviewInconclusiveCopyEnabled =
        ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled(
          "manual_review_decided_teen_modal",
        );
      const obj2 = { title: null, content: null, actions: null };
      let intl = util.intl;
      obj2.title = intl.string(_modDef3109.AA3xYb);
      const intl2 = util.intl;
      const format = intl2.format;
      const tmp5 = _modDef3109;
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
    };
