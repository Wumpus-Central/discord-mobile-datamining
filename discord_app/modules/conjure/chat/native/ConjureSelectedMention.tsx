// === Module 17072: ConjureSelectedMention ===

// Module 17072 (ConjureSelectedMention)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { chip: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 } };
let closure_3 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureSelectedMention.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectedMention(arg0) {
  const cResult = c.c(6);
  ({ label, variant, onPress } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === label) {
    if (cResult[1] === onPress) {
      if (cResult[2] === tmp4.chip) {
        if (cResult[3] === str) {
          if (cResult[4] === variant) {
            let tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  const tmp6 = jsx(Text_Text.Text, { variant, style: tmp4.chip, onPress, accessibilityRole: "button", children: label });
  cResult[0] = label;
  cResult[1] = onPress;
  cResult[2] = tmp4.chip;
  cResult[3] = "button";
  cResult[4] = variant;
  cResult[5] = tmp6;
  tmp5 = tmp6;
  const obj2 = { variant, style: tmp4.chip, onPress, accessibilityRole: "button", children: label };
}) : (function ConjureSelectedMention(onPress) {
  onPress = onPress.onPress;
  ({ label, variant } = onPress);
  const obj = { variant, style: closure_3().chip, onPress, accessibilityRole: "button", children: label };
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, onPress, accessibilityRole: "button", children: label });
});