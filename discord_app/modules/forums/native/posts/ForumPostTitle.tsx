// === Module 11644: ForumPostTitle ===

// Module 11644 (ForumPostTitle)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
const PlatformUtils = fn(1370);
let obj3 = null;
if (PlatformUtils.isIOS()) {
  obj3 = { lineHeight: 22 };
}
const obj4 = { title: null };
const merged = Object.assign(obj3);
obj4.title = { marginBottom: 6 };
let closure_3 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hasUnreads) => {
  const cResult = c.c(7);
  ({ title, lineClamp, ellipsizeMode, onTextLayout } = hasUnreads);
  const tmp4 = closure_3();
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  if (cResult[0] === str) {
    if (cResult[1] === ellipsizeMode) {
      if (cResult[2] === lineClamp) {
        if (cResult[3] === onTextLayout) {
          if (cResult[4] === tmp4.title) {
            if (cResult[5] === title) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
        }
      }
    }
  }
  const tmp6 = jsx(Text_Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: tmp4.title, onTextLayout, children: title });
  cResult[0] = str;
  cResult[1] = ellipsizeMode;
  cResult[2] = lineClamp;
  cResult[3] = onTextLayout;
  cResult[4] = tmp4.title;
  cResult[5] = title;
  cResult[6] = tmp6;
  tmp5 = tmp6;
  const obj2 = { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: tmp4.title, onTextLayout, children: title };
}) : ((arg0) => {
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: closure_3().title, onTextLayout, children: title });
});