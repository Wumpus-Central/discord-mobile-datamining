// === Module 14274: ModalDisclaimer ===

// Module 14274 (ModalDisclaimer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(6);
  children = children.children;
  const tmp4 = closure_4();
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.disclaimer) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
    cResult[3] = tmp4.container;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp4.disclaimer, children });
  cResult[0] = children;
  cResult[1] = tmp4.disclaimer;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((children) => {
  children = children.children;
  const tmp = closure_4();
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = tmp3;