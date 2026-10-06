// === Module 9640: CameraLottie ===

// Module 9640 (CameraLottie)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AssetRegistry from "AssetRegistry" /* 9641 */;
import LottieIcon2 from "LottieIcon" /* 9642 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AssetRegistry;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    if (cResult[2] === ref) {
      tmp6 = cResult[3];
    }
    return tmp6;
  }
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  const tmp8 = <LottieIcon dotLottie={first} ref={ref} layers={layers} markers={items} />;
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : ((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} ref={ref} layers={layers} markers={items} />;
}));
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;