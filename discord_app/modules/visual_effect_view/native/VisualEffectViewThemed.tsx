// === Module 8355: VisualEffectViewThemed ===

// Module 8355 (VisualEffectViewThemed)
import c from "c" /* 576 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5364 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VisualEffectViewThemed(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp10 = useThemeDefault();
  let str = "dark";
  if (tmpResult.isThemeLight(tmp10)) {
    str = "light";
  }
  if (cResult[3] === str) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp5) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const obj2 = { ref: tmp5, blurTheme: str };
  tmpResult = shared;
  const merged = Object.assign(tmp4);
  const tmp14 = jsx(VisualEffectViewDefault, { ref: tmp5, blurTheme: str });
  cResult[3] = str;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp14;
  tmp11 = tmp14;
  const tmp9Result = VisualEffectViewDefault;
}) : (function VisualEffectViewThemed(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const tmp4 = useThemeDefault();
  let str = "dark";
  if (obj.isThemeLight(tmp4)) {
    str = "light";
  }
  obj = shared;
  const obj2 = { ref: ref.ref, blurTheme: str };
  const merged1 = Object.assign(merged);
  return jsx(VisualEffectViewDefault, { ref: ref.ref, blurTheme: str });
});