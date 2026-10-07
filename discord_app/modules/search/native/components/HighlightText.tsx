// === Module 11717: HighlightText ===

// Module 11717 (HighlightText)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { text: null };
const obj3 = { fontFamily: fn(1085).Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
const ColorUtils = fn(4733);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3);
obj3.color = nativeDefault.colors.TEXT_STRONG;
obj2.text = obj3;
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_3();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.text) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(native.LegacyText, { style: tmp4.text, children });
  cResult[0] = children;
  cResult[1] = tmp4.text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.text, children };
}) : ((children) => {
  const tmp = closure_3();
  return jsx(native.LegacyText, { style: closure_3().text, children: children.children });
});