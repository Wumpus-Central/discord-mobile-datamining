// === Module 14490: OrbLottieAnimation ===

// Module 14490 (OrbLottieAnimation)
import shared from "shared" /* 5021 */;
import useTheme from "useTheme" /* 5253 */;
import SpendEarnOrbsLightThemeLottie from "SpendEarnOrbsLightThemeLottie" /* 14491 */;
import SpendEarnOrbsLottie2 from "SpendEarnOrbsLottie" /* 14493 */;
import "module_19";

require = fn;
class OrbLottieAnimation {
  constructor(arg0) {
    animationType = global.animationType;
    closure_1 = undefined;
    tmp = closure_0;
    tmp2 = closure_1;
    obj = closure_0(closure_1[2]);
    theme = obj.useTheme();
    obj2 = closure_0(closure_1[3]);
    isThemeLightResult = obj2.isThemeLight(theme);
    tmp5 = useRef(null);
    closure_1 = tmp5;
    items = [];
    items[0] = animationType;
    tmp6 = useEffect(() => {
      if (null !== animationType) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }, items);
    imperativeHandle = closure_2.useImperativeHandle(global.ref, () => ({
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
      SpendEarnOrbsLottie = tmp(tmp2[4]).SpendEarnOrbsLightThemeLottie;
    } else {
      SpendEarnOrbsLottie = tmp(tmp2[5]).SpendEarnOrbsLottie;
    }
    size = { ref: tmp5, size: "custom", width: 60, height: 60, opacity: 0.8, animation: null, useLottieDefaultColors: true };
    str = "spend";
    tmp8 = jsx;
    if (null != animationType) {
      str = animationType;
    }
    size.animation = str;
    return tmp8(SpendEarnOrbsLottie, size);
  }
}
const noop = fn(19);
({ useRef: c3, useEffect: closure_4 } = noop);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default OrbLottieAnimation;
export { OrbLottieAnimation };