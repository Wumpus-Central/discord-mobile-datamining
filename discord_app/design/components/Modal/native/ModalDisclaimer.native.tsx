// === Module 14116: ModalDisclaimer ===

// Module 14116 (ModalDisclaimer)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = ReactCompilerGating.isReactCompilerEnabled() ? (function ModalDisclaimer(children) {
  const cResult = c.c(6);
  children = children.children;
  const tmp4 = closure_4();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.disclaimer) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { style: tmp4.container, children: tmp5 };
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
  const obj3 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.disclaimer, children };
}) : (function ModalDisclaimer(children) {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children }) };
  return <View style={tmp.container}>{jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children })}</View>;
});