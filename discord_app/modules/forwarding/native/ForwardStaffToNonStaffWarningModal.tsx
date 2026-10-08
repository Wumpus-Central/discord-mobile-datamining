// discord_app/modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ jsx: c2, Fragment: c3, jsxs: closure_4 } = jsxProd);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForwardStaffToNonStaffWarningModal(arg0) {
      const cResult = c.c(11);
      ({ onConfirm, onBack } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.YrV3I9);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.MXSMtl);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.X7eUJq);
        cResult[2] = stringResult2;
        let tmp8 = stringResult2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== onConfirm) {
        const obj2 = { text: tmp8, onPress: onConfirm };
        const tmp12 = React2(AlertModal.AlertActionButton, obj2, "confirm");
        cResult[3] = onConfirm;
        cResult[4] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult3 = intl4.string(util.t["13/7kX"]);
        cResult[5] = stringResult3;
        let tmp13 = stringResult3;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== onBack) {
        const obj3 = { variant: "secondary", text: tmp13, onPress: onBack };
        const tmp17 = React2(AlertModal.AlertActionButton, obj3, "back");
        cResult[6] = onBack;
        cResult[7] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp15) {
          let tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj4 = { title: tmp4, content: tmp5, actions: null };
      const obj5 = { children: null };
      const items = [tmp10, tmp15];
      obj5.children = items;
      obj4.actions = React4(React3, obj5);
      const tmp19 = React2(AlertModal.AlertModal, obj4);
      cResult[8] = tmp10;
      cResult[9] = tmp15;
      cResult[10] = tmp19;
      tmp18 = tmp19;
    }
  : function ForwardStaffToNonStaffWarningModal(arg0) {
      ({ onConfirm, onBack } = arg0);
      const obj = { title: null, content: null, actions: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.YrV3I9);
      const intl2 = util.intl;
      obj.content = intl2.string(util.t.MXSMtl);
      const obj2 = { children: null };
      const obj3 = { text: null, onPress: null };
      const intl3 = util.intl;
      obj3.text = intl3.string(util.t.X7eUJq);
      obj3.onPress = onConfirm;
      const items = [React2(AlertModal.AlertActionButton, obj3, "confirm")];
      const obj4 = { variant: "secondary", text: null, onPress: null };
      const intl4 = util.intl;
      obj4.text = intl4.string(util.t["13/7kX"]);
      obj4.onPress = onBack;
      items[1] = React2(AlertModal.AlertActionButton, obj4, "back");
      obj2.children = items;
      obj.actions = React4(React3, obj2);
      return React2(AlertModal.AlertModal, obj);
    };
