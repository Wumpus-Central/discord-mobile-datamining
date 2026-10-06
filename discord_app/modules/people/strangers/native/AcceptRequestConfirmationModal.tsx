// discord_app/modules/people/strangers/native/AcceptRequestConfirmationModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closeResult;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { bodyText: obj2, text: { textAlign: "center" } };
obj2 = { textAlign: "center", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bodyText;
      let items;
      let onCancel;
      let onConfirm;
      let text;
      let tmp10;
      let tmp14;
      let tmp5;
      let tmp6;
      let obj = onConfirm(576);
      const cResult = obj.c(18);
      ({ onCancel, onConfirm } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onConfirm(1126).intl;
        const stringResult = intl.string(onConfirm(1126).t.MMlhsr);
        const intl2 = onConfirm(1126).intl;
        cResult[0] = stringResult;
        cResult[1] = intl2.string(onConfirm(1126).t["ETE/oC"]);
        const stringResult1 = intl2.string(onConfirm(1126).t["ETE/oC"]);
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
        tmp10 = stringResult2;
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
        cResult[5] = tmp4.text;
        cResult[6] = closure_4(onConfirm(4892).Text, obj3);
        const tmp13 = closure_4(onConfirm(4892).Text, obj3);
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
      const text2 = tmp4.text;
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
        tmp14 = stringResult3;
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
        const obj5 = { variant: "text-md/medium", color: "text-subtle", style: text2, children: tmp14 };
        cResult[8] = tmp4.text;
        cResult[9] = closure_4(onConfirm(4892).Text, obj5);
        const tmp17 = closure_4(onConfirm(4892).Text, obj5);
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
      const obj6 = { style: bodyText, children: items };
      items = [tmp12, tmp16];
      cResult[10] = tmp4.bodyText;
      cResult[11] = tmp16;
      cResult[12] = tmp12;
      cResult[13] = closure_5(View, obj6);
      closure_5(View, obj6);
    }
  : (onConfirm) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      onConfirm = onConfirm.onConfirm;
      const onCancel = onConfirm.onCancel;
      const tmp = closure_6();
      let obj = {
        confirmText: intl.string(onConfirm(1126).t.MMlhsr),
        cancelText: intl2.string(onConfirm(1126).t["ETE/oC"]),
        onConfirm() {
          onConfirm();
          const obj = AlertActionCreatorsDefault;
          obj.close();
        },
        onCancel,
        children: closure_5(View, obj2),
      };
      const tmp2 = AlertDefault;
      intl = onConfirm(1126).intl;
      intl2 = onConfirm(1126).intl;
      obj2 = { style: tmp.bodyText, children: items };
      const obj3 = {
        variant: "heading-lg/bold",
        color: "text-strong",
        style: tmp.text,
        children: intl3.string(onConfirm(1126).t.eJzSDT),
      };
      const Text = onConfirm(4892).Text;
      intl3 = onConfirm(1126).intl;
      items = [closure_4(Text, obj3)];
      const obj4 = {
        variant: "text-md/medium",
        color: "text-subtle",
        style: tmp.text,
        children: intl4.string(onConfirm(1126).t.GB4jUw),
      };
      const Text2 = onConfirm(4892).Text;
      intl4 = onConfirm(1126).intl;
      items[1] = closure_4(Text2, obj4);
      return closure_4(tmp2, obj);
    };
const result = size.fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default tmp4;
