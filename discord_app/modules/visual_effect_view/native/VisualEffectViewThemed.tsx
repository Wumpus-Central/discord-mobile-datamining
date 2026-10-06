// === Module 7928: VisualEffectViewThemed ===

// Module 7928 (VisualEffectViewThemed)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5780 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const obj = react2;
  const cResult = obj.c(4);
  let str = "dark";
  const tmp4 = useThemeDefault();
  const obj2 = shared;
  if (obj2.isThemeLight(tmp4)) {
    str = "light";
  }
  if (cResult[0] === str) {
    if (cResult[1] === arg0) {
      let tmp5;
      if (cResult[2] === ref) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  VisualEffectViewDefault;
  const merged = Object.assign(arg0);
  const tmp8 = <tmp3Result ref={ref} blurTheme={str} />;
  cResult[0] = str;
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp5 = tmp8;
}) : ((arg0, ref) => {
  let str = "dark";
  const tmp3 = useThemeDefault();
  const obj = shared;
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  VisualEffectViewDefault;
  const merged = Object.assign(arg0);
  return <tmpResult ref={ref} blurTheme={str} />;
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;