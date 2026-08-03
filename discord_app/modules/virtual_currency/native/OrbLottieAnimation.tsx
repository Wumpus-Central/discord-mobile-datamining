import closure_2 from "noop";
import noop from "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
let forwardRef;
const require = arg1;
({ useRef: c3, useEffect: c4, forwardRef } = noop);
const forwardRefResult = forwardRef((animationType, ref) => {
  animationType = animationType.animationType;
  let dependencyMap;
  let obj = animationType(4129);
  const theme = obj.useTheme();
  const obj2 = animationType(4039);
  const tmp5 = callback(null);
  dependencyMap = tmp5;
  const items = [animationType];
  callback2(() => {
    if (null !== animationType) {
      const current = _undefined.current;
      if (current != null) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = React.useImperativeHandle(ref, () => ({
    play() {
      const current = ref.current;
      let playResult;
      if (current != null) {
        playResult = current.play();
      }
      return playResult;
    }
  }));
  if (isThemeLightResult) {
    let SpendEarnOrbsLottie = tmp(9822).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(9825).SpendEarnOrbsLottie;
  }
  obj = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: null, useLottieDefaultColors: true };
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  obj[5] = str;
  return <SpendEarnOrbsLottie ref={tmp5} size="custom" width={60} height={60} opacity={0.8} animation={null} useLottieDefaultColors />;
});
forwardRefResult.displayName = "OrbsLottieAnimation";
const result = require("useTheme").fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;