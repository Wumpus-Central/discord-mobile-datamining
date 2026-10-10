// === Module 11048: CameraLottie ===

// Module 11048 (CameraLottie)
import c from "c" /* 576 */;
import _mod11049 from "module_11049" /* 11049 */;
import LottieIcon from "LottieIcon" /* 11050 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = ReactCompilerGating.isReactCompilerEnabled() ? (function CameraLottie(ref) {
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
    const tmpResult = _mod11049;
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
}) : (function CameraLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11049, ref: ref.ref, layers, markers: items });
});