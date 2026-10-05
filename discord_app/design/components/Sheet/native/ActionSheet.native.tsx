// === Module 6701: ActionSheet ===

// Module 6701 (ActionSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2, body: { gap: 24 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_3 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
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
}) : ((arg0, ref) => {
  const obj = { ref };
  const tmp = closure_3();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = tmp);
  return <BottomSheet ref={ref} />;
}));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;