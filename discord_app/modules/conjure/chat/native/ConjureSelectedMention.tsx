// === Module 16677: ConjureSelectedMention ===

// Module 16677 (ConjureSelectedMention)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { chip: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureSelectedMention.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  ({ label, variant } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === label) {
    if (cResult[1] === tmp4.chip) {
      if (cResult[2] === variant) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = jsx(Text_Text.Text, { variant, style: tmp4.chip, children: label });
  cResult[0] = label;
  cResult[1] = tmp4.chip;
  cResult[2] = variant;
  cResult[3] = tmp6;
  tmp5 = tmp6;
  const obj2 = { variant, style: tmp4.chip, children: label };
}) : ((arg0) => {
  ({ label, variant } = arg0);
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, children: label });
});