// discord_app/modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl5 from "../../../intl/index.native.tsx";
import _modDef3137 from "../ManualReview.messages.js";
import AlertModal2 from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ManualReviewActionCreators from "../ManualReviewActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let AlertActions;
      let intl3;
      let intl4;
      let items;
      let obj4;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(_modDef3137["+c5sxg"]);
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(_modDef3137["RFLH++"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { text: intl3.string(intl5.t["NX+WJN"]) };
        const AlertActionButton = AlertModal2.AlertActionButton;
        intl3 = intl5.intl;
        const tmp11 = _false(AlertActionButton, obj2, "got-it");
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: tmp4, content: tmp5, actions: React3(AlertActions, obj4) };
        const AlertModal = AlertModal2.AlertModal;
        obj4 = { children: items };
        items = [tmp9];
        AlertActions = AlertModal2.AlertActions;
        const obj5 = {
          variant: "secondary",
          text: intl4.string(_modDef3137.Z61nkt),
          onPress() {
            const obj = ManualReviewActionCreators;
            return obj.handleManualReviewCta();
          },
        };
        const AlertActionButton2 = AlertModal2.AlertActionButton;
        intl4 = intl5.intl;
        items[1] = _false(AlertActionButton2, obj5, "request-manual-review");
        const tmp16 = _false(AlertModal, obj3);
        cResult[3] = tmp16;
        tmp12 = tmp16;
      } else {
        tmp12 = cResult[3];
      }
      return tmp12;
    }
  : () => {
      let AlertActions;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      let obj = {
        title: intl.string(_modDef3137["+c5sxg"]),
        content: intl2.string(_modDef3137["RFLH++"]),
        actions: React3(AlertActions, obj2),
      };
      const AlertModal = AlertModal2.AlertModal;
      intl = intl5.intl;
      intl2 = intl5.intl;
      obj2 = { children: items };
      AlertActions = AlertModal2.AlertActions;
      const obj3 = { text: intl3.string(intl5.t["NX+WJN"]) };
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl5.intl;
      items = [_false(AlertActionButton, obj3, "got-it")];
      const obj4 = {
        variant: "secondary",
        text: intl4.string(_modDef3137.Z61nkt),
        onPress() {
          const obj = ManualReviewActionCreators;
          return obj.handleManualReviewCta();
        },
      };
      const AlertActionButton2 = AlertModal2.AlertActionButton;
      intl4 = intl5.intl;
      items[1] = _false(AlertActionButton2, obj4, "request-manual-review");
      return _false(AlertModal, obj);
    };
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default tmp4;
