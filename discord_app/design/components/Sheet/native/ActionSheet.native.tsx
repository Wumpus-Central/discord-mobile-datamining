// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_BottomSheet from "BottomSheet.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2, body: { gap: 24 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_3 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const obj = react2;
        const cResult = obj.c(5);
        const tmp4 = closure_3();
        if (cResult[0] === arg0) {
          if (cResult[1] === ref) {
            if (cResult[2] === tmp4.body) {
              let tmp5;
              if (cResult[3] === tmp4.content) {
                tmp5 = cResult[4];
              }
              return tmp5;
            }
          }
        }
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        const merged = Object.assign(arg0);
        ({ content: obj2.contentStyles, body: obj2.bodyStyles } = tmp4);
        const tmp7 = <BottomSheet ref={ref} />;
        cResult[0] = arg0;
        cResult[1] = ref;
        cResult[2] = tmp4.body;
        cResult[3] = tmp4.content;
        cResult[4] = tmp7;
        tmp5 = tmp7;
      }
    : (arg0, ref) => {
        const obj = { ref };
        const tmp = closure_3();
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        const merged = Object.assign(arg0);
        ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp);
        return <BottomSheet ref={ref} />;
      },
);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;
