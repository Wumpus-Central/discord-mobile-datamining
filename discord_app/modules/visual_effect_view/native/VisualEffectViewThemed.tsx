// === Module 7928: VisualEffectViewThemed ===

// Module 7928 (VisualEffectViewThemed)
import c from "c" /* 576 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5780 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(4);
  const tmp4 = useThemeDefault();
  let str = "dark";
  if (obj2.isThemeLight(tmp4)) {
    str = "light";
  }
  if (cResult[0] === str) {
    if (cResult[1] === arg0) {
      if (cResult[2] === ref) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  obj2 = shared;
  const obj3 = { ref, blurTheme: str };
  const merged = Object.assign(arg0);
  const tmp8 = jsx(VisualEffectViewDefault, { ref, blurTheme: str });
  cResult[0] = str;
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp5 = tmp8;
  const tmp3Result = VisualEffectViewDefault;
}) : ((arg0, ref) => {
  const tmp3 = useThemeDefault();
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = shared;
  const obj2 = { ref, blurTheme: str };
  const merged = Object.assign(arg0);
  return jsx(VisualEffectViewDefault, { ref, blurTheme: str });
}));