// discord_app/modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RedesignSkipAvatarUploadAlertModal(onConfirm) {
      const cResult = c.c(8);
      onConfirm = onConfirm.onConfirm;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.DnKHuV);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["1EPySE"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.nhJ8OC);
        cResult[2] = stringResult2;
        let tmp8 = stringResult2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== onConfirm) {
        const obj2 = { onPress: onConfirm, text: tmp8 };
        const tmp12 = React2(AlertModal.AlertActionButton, obj2, "confirm");
        cResult[3] = onConfirm;
        cResult[4] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "secondary", text: null };
        const intl4 = util.intl;
        obj3.text = intl4.string(util.t["7eZ3ji"]);
        const tmp15 = React2(AlertModal.AlertActionButton, obj3, "add-profile-picture");
        cResult[5] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== tmp10) {
        const obj4 = { title: tmp4, content: tmp5, actions: null };
        const obj5 = { children: null };
        const items = [tmp10, tmp13];
        obj5.children = items;
        obj4.actions = React3(AlertModal.AlertActions, obj5);
        const tmp19 = React2(AlertModal.AlertModal, obj4);
        cResult[6] = tmp10;
        cResult[7] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      return tmp16;
    }
  : function RedesignSkipAvatarUploadAlertModal(onConfirm) {
      const obj = { title: null, content: null, actions: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.DnKHuV);
      const intl2 = util.intl;
      obj.content = intl2.string(util.t["1EPySE"]);
      const obj2 = { children: null };
      const obj3 = { onPress: onConfirm.onConfirm, text: null };
      const intl3 = util.intl;
      obj3.text = intl3.string(util.t.nhJ8OC);
      const items = [React2(AlertModal.AlertActionButton, obj3, "confirm")];
      const obj4 = { variant: "secondary", text: null };
      const intl4 = util.intl;
      obj4.text = intl4.string(util.t["7eZ3ji"]);
      items[1] = React2(AlertModal.AlertActionButton, obj4, "add-profile-picture");
      obj2.children = items;
      obj.actions = React3(AlertModal.AlertActions, obj2);
      return React2(AlertModal.AlertModal, obj);
    };
