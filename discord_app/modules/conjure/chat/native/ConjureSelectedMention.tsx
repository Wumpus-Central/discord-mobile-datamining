// === Module 16677: ConjureSelectedMention ===

// Module 16677 (ConjureSelectedMention)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { chip: obj2 };
obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2 };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let label;
  let variant;
  const obj = react2;
  const cResult = obj.c(4);
  ({ label, variant } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === label) {
    if (cResult[1] === tmp4.chip) {
      let tmp5;
      if (cResult[2] === variant) {
        tmp5 = cResult[3];
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
}) : ((arg0) => {
  let label;
  let variant;
  ({ label, variant } = arg0);
  return jsx(Text_Text.Text, { variant, style: closure_3().chip, children: label });
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureSelectedMention.tsx");

export default tmp3;