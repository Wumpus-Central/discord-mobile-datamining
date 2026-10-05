// === Module 11536: ModalFooter ===

// Module 11536 (ModalFooter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp2 = closure_4();
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === tmp2.footer) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <View style={tmp2.footer}>{children}</View>;
  cResult[0] = children;
  cResult[1] = tmp2.footer;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => <View style={closure_4().footer}>{children.children}</View>);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = tmp3;