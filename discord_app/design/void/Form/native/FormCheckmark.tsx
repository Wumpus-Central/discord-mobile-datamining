// === Module 6649: FormCheckmark ===

// Module 6649 (FormCheckmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6635 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selected;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  selected = selected.selected;
  if (cResult[0] !== selected) {
    let tmp5 = null;
    if (selected) {
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      tmp5 = <CheckmarkSmallIcon color={nativeDefault.unsafe_rawColors.BRAND_500} />;
    }
    cResult[0] = selected;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((selected) => {
  let tmp = null;
  if (selected.selected) {
    const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
    tmp = <CheckmarkSmallIcon color={nativeDefault.unsafe_rawColors.BRAND_500} />;
  }
  return tmp;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default tmp3;