// === Module 11643: ForumPostNewTag ===

// Module 11643 (ForumPostNewTag)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let containerStyle;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((containerStyle) => {
  const obj = react2;
  const cResult = obj.c(3);
  containerStyle = containerStyle.containerStyle;
  const tmp4 = closure_3();
  if (cResult[0] === containerStyle) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [containerStyle, tmp4.container];
  const tmp6 = jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-text-brand" });
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((containerStyle) => {
  containerStyle = containerStyle.containerStyle;
  const items = [containerStyle, closure_3().container];
  closure_3();
  return jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-text-brand" });
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default tmp3;