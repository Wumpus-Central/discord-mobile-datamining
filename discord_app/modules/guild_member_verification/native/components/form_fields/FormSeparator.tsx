// === Module 5982: form_fields/FormSeparator ===

// Module 5982 (form_fields/FormSeparator)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { separator: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(6);
  const tmp2 = closure_4();
  if (cResult[0] === style.style) {
    if (cResult[1] === tmp2.separator) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === style) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = {};
    const merged = Object.assign(style);
    obj2.style = tmp3;
    const tmp10 = <View />;
    cResult[3] = style;
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    tmp4 = tmp10;
  }
  const items = [tmp2.separator, style.style];
  cResult[0] = style.style;
  cResult[1] = tmp2.separator;
  cResult[2] = items;
  tmp3 = items;
}) : ((style) => {
  const obj = {};
  const merged = Object.assign(style);
  const items = [closure_4().separator, style.style];
  obj.style = items;
  return <View />;
});