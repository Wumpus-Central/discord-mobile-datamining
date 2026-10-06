// discord_app/modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import _modDef3073 from "../AgeAssurance.messages.js";
import AlertModal2 from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl3;
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(_modDef3073.gUqXQN);
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(_modDef3073.yBHwMy);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const AlertModal = AlertModal2.AlertModal;
        const AlertActions = AlertModal2.AlertActions;
        ({ text: intl3.string(intl4.t["NX+WJN"]) });
        const AlertActionButton = AlertModal2.AlertActionButton;
        intl3 = intl4.intl;
        const tmp11 = <AlertModal title={tmp4} content={tmp5} actions={null} />;
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      let intl3;
      const AlertModal = AlertModal2.AlertModal;
      const intl = intl4.intl;
      const intl2 = intl4.intl;
      const AlertActions = AlertModal2.AlertActions;
      ({ text: intl3.string(intl4.t["NX+WJN"]) });
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl4.intl;
      return (
        <AlertModal title={intl.string(_modDef3073.gUqXQN)} content={intl2.string(_modDef3073.yBHwMy)} actions={null} />
      );
    };
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default tmp3;
