// discord_app/modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3117 from "../AgeAssurance.messages.js";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AgeVerificationQuestUnsupportedAlertModal() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3117.gUqXQN);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef3117.yBHwMy);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: tmp4, content: tmp5, actions: null };
        const obj3 = { children: null };
        const obj4 = { text: null };
        const intl3 = util.intl;
        obj4.text = intl3.string(util.t["NX+WJN"]);
        obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
        obj2.actions = jsx(AlertModal.AlertActions, { children: null });
        const tmp11 = jsx(AlertModal.AlertModal, { title: tmp4, content: tmp5, actions: null });
        cResult[2] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : function AgeVerificationQuestUnsupportedAlertModal() {
      const obj = { title: null, content: null, actions: null };
      const intl = util.intl;
      obj.title = intl.string(_modDef3117.gUqXQN);
      const intl2 = util.intl;
      obj.content = intl2.string(_modDef3117.yBHwMy);
      const obj2 = { children: null };
      const obj3 = { text: null };
      const intl3 = util.intl;
      obj3.text = intl3.string(util.t["NX+WJN"]);
      obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
      obj.actions = jsx(AlertModal.AlertActions, { children: null });
      return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
    };
