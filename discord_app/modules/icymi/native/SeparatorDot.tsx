// === Module 16754: SeparatorDot ===

// Module 16754 (SeparatorDot)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { separatorDot: null };
let size = { width: 4, height: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.separatorDot = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SeparatorDot() {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.separatorDot) {
    const obj2 = { style: tmp2.separatorDot };
    const tmp6 = <View style={tmp2.separatorDot} />;
    cResult[0] = tmp2.separatorDot;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function SeparatorDot() {
  return <View style={closure_4().separatorDot} />;
});