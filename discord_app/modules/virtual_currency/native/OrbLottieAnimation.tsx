// === Module 11066: forwardRef ===

// Module 11066 (forwardRef)
import closure_2 from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ useRef: c3, useEffect: c4, forwardRef } = noop);
const forwardRefResult = forwardRef((animationType, ref) => {
  animationType = animationType.animationType;
  dependencyMap = undefined;
  let obj = animationType(4413);
  const theme = obj.useTheme();
  const obj2 = animationType(1362);
  const tmp5 = callback(null);
  dependencyMap = tmp5;
  const items = [animationType];
  callback2(() => {
    if (null !== animationType) {
      const current = ref.current;
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
    let SpendEarnOrbsLottie = tmp(11067).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(11069).SpendEarnOrbsLottie;
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
const result = require("set").fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;