// === Module 11192: SpendEarnOrbsLightThemeLottie ===

// Module 11192 (SpendEarnOrbsLightThemeLottie)
import c from "c" /* 576 */;
import LottieIcon from "LottieIcon" /* 10837 */;
import _mod11193 from "module_11193" /* 11193 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = ReactCompilerGating.isReactCompilerEnabled() ? (function SpendEarnOrbsLightThemeLottie(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod11193;
    cResult[3] = tmpResult;
    let tmp9 = tmpResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp5) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const merged = Object.assign(tmp4);
  const tmp13 = jsx(LottieIcon.LottieIcon, { dotLottie: tmp9, ref: tmp5, layers, markers: items });
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
  const obj2 = { dotLottie: tmp9, ref: tmp5, layers, markers: items };
}) : (function SpendEarnOrbsLightThemeLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11193, ref: ref.ref, layers, markers: items });
});