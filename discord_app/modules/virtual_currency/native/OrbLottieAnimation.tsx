// discord_app/modules/virtual_currency/native/OrbLottieAnimation.tsx
import noop2 from "../../../../_runtime/00019_noop.js";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
({ useRef: c3, useEffect: c4, forwardRef } = noop);
const forwardRefResult = forwardRef((animationType, ref) => {
  animationType = animationType.animationType;
  let obj = animationType(4310);
  const theme = obj.useTheme();
  const obj2 = animationType(1363);
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
    let SpendEarnOrbsLottie = tmp(10403).SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = tmp(10406).SpendEarnOrbsLottie;
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
const result = require("obj132").fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;