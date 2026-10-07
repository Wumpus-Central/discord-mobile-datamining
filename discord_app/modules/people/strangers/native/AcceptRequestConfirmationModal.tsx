// discord_app/modules/people/strangers/native/AcceptRequestConfirmationModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  bodyText: { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 },
  text: { textAlign: "center" },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onConfirm(576).c(18);
      ({ onCancel, onConfirm } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onConfirm(1126).intl;
        const stringResult = intl.string(onConfirm(1126).t.MMlhsr);
        const intl2 = onConfirm(1126).intl;
        const stringResult1 = intl2.string(onConfirm(1126).t["ETE/oC"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== onConfirm) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
        cResult[2] = onConfirm;
        cResult[3] = T;
      } else {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      ({ bodyText, text } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
        const stringResult2 = obj2.string(onConfirm(1126).t.eJzSDT);
        cResult[4] = stringResult2;
        const tmp10 = stringResult2;
      } else {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      if (cResult[5] !== tmp4.text) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
        const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: text, children: tmp10 };
        const tmp13 = closure_4(onConfirm(4892).Text, obj3);
        cResult[5] = tmp4.text;
        cResult[6] = tmp13;
      } else {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
        const stringResult3 = obj4.string(onConfirm(1126).t.GB4jUw);
        cResult[7] = stringResult3;
        const tmp14 = stringResult3;
      } else {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      if (cResult[8] !== tmp4.text) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
        const obj5 = { variant: "text-md/medium", color: "text-subtle", style: tmp4.text, children: tmp14 };
        const tmp17 = closure_4(onConfirm(4892).Text, obj5);
        cResult[8] = tmp4.text;
        cResult[9] = tmp17;
      } else {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      if (cResult[10] === tmp4.bodyText) {
        class T {
          constructor() {
            tmp = onConfirm();
            obj = closure_1(closure_2[8]);
            closeResult = obj.close();
            return;
          }
        }
      }
      const obj6 = { style: bodyText, children: null };
      const items = [tmp12, tmp16];
      obj6.children = items;
      const obj = onConfirm(576);
      cResult[10] = tmp4.bodyText;
      cResult[11] = tmp16;
      cResult[12] = tmp12;
      cResult[13] = closure_5(View, obj6);
      const tmp18 = closure_5(View, obj6);
    }
  : (onConfirm) => {
      onConfirm = onConfirm.onConfirm;
      const tmp = closure_6();
      const obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
      const intl = onConfirm(1126).intl;
      obj.confirmText = intl.string(onConfirm(1126).t.MMlhsr);
      const intl2 = onConfirm(1126).intl;
      obj.cancelText = intl2.string(onConfirm(1126).t["ETE/oC"]);
      obj.onConfirm = function onConfirm() {
        onConfirm();
        AlertActionCreatorsDefault.close();
      };
      obj.onCancel = onConfirm.onCancel;
      const obj2 = { style: tmp.bodyText, children: null };
      const obj3 = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
      const intl3 = onConfirm(1126).intl;
      obj3.children = intl3.string(onConfirm(1126).t.eJzSDT);
      const items = [closure_4(onConfirm(4892).Text, obj3)];
      const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
      const intl4 = onConfirm(1126).intl;
      obj4.children = intl4.string(onConfirm(1126).t.GB4jUw);
      items[1] = closure_4(onConfirm(4892).Text, obj4);
      obj2.children = items;
      obj.children = closure_5(View, obj2);
      return closure_4(common_AlertDefault, obj);
    };
