// === Module 11016: OrbLottieAnimation ===

// Module 11016 (OrbLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import shared from "shared" /* 4735 */;
import useTheme from "useTheme" /* 4797 */;
import SpendEarnOrbsLightThemeLottie from "SpendEarnOrbsLightThemeLottie" /* 11017 */;
import SpendEarnOrbsLottie2 from "SpendEarnOrbsLottie" /* 11019 */;
import "react";
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let animationType;

let c3;
let closure_4;
let forwardRef;
({ useRef: c3, useEffect: closure_4, forwardRef } = react);
const jsx = Fragment.jsx;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((animationType, arg1) => {
  let SpendEarnOrbsLottie;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  animationType = animationType.animationType;
  const obj2 = useTheme;
  const theme = obj2.useTheme();
  const obj3 = shared;
  const isThemeLightResult = obj3.isThemeLight(theme);
  const tmp6 = _false(null);
  let closure_1 = tmp6;
  if (cResult[0] !== animationType) {
    const fn = function p() {
      if (null !== animationType) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    };
    const items = [animationType];
    cResult[0] = animationType;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  React3(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      return {
        play() {
          const current = ref.current;
          let playResult;
          if (current != null) {
            playResult = current.play();
          }
          return playResult;
        }
      };
    };
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp10);
  if (isThemeLightResult) {
    SpendEarnOrbsLottie = SpendEarnOrbsLightThemeLottie.SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = SpendEarnOrbsLottie2.SpendEarnOrbsLottie;
  }
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  if (cResult[4] === SpendEarnOrbsLottie) {
    let tmp12;
    if (cResult[5] === str) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const tmp13 = <SpendEarnOrbsLottie ref={tmp6} size="custom" width={60} height={60} opacity={0.8} animation={str} useLottieDefaultColors />;
  cResult[4] = SpendEarnOrbsLottie;
  cResult[5] = str;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((animationType, arg1) => {
  animationType = animationType.animationType;
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = shared;
  const isThemeLightResult = obj2.isThemeLight(theme);
  const tmp5 = _false(null);
  let closure_1 = tmp5;
  const items = [animationType];
  React3(() => {
    if (null !== animationType) {
      const current = ref.current;
      if (current != null) {
        current.play();
      }
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({
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
    let SpendEarnOrbsLottie = SpendEarnOrbsLightThemeLottie.SpendEarnOrbsLightThemeLottie;
  } else {
    SpendEarnOrbsLottie = SpendEarnOrbsLottie2.SpendEarnOrbsLottie;
  }
  let str = "spend";
  if (null != animationType) {
    str = animationType;
  }
  return <SpendEarnOrbsLottie ref={tmp5} size="custom" width={60} height={60} opacity={0.8} animation={str} useLottieDefaultColors />;
}));
forwardRefResult.displayName = "OrbsLottieAnimation";
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default forwardRefResult;
export const OrbLottieAnimation = forwardRefResult;