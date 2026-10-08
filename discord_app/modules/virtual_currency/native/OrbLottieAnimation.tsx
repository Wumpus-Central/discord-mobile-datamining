// discord_app/modules/virtual_currency/native/OrbLottieAnimation.tsx
import c from "../../../../_runtime/00576_c.js";
import shared from "../../../design/shared.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import SpendEarnOrbsLightThemeLottie from "../../../design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx";
import SpendEarnOrbsLottie2 from "../../../design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx";
import "module_19";

require = fn;
const noop = fn(19);
({ useRef: c3, useEffect: closure_4 } = noop);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbLottieAnimation(animationType) {
      const cResult = c.c(7);
      animationType = animationType.animationType;
      const theme = useTheme.useTheme();
      const tmp6 = React3(null);
      if (cResult[0] !== animationType) {
        const fn = function s() {
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
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      React4(tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p() {
          return {
            play() {
              const current = ref.current;
              let playResult;
              if (current != null) {
                playResult = current.play();
              }
              return playResult;
            },
          };
        };
        cResult[3] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      const imperativeHandle = noop.useImperativeHandle(animationType.ref, tmp10);
      if (isThemeLightResult) {
        let SpendEarnOrbsLottie = SpendEarnOrbsLightThemeLottie.SpendEarnOrbsLightThemeLottie;
      } else {
        SpendEarnOrbsLottie = SpendEarnOrbsLottie2.SpendEarnOrbsLottie;
      }
      let str = "spend";
      if (null != animationType) {
        str = animationType;
      }
      if (cResult[4] === SpendEarnOrbsLottie) {
        if (cResult[5] === str) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const tmp13 = (
        <SpendEarnOrbsLottie
          ref={tmp6}
          size="custom"
          width={60}
          height={60}
          opacity={0.8}
          animation={str}
          useLottieDefaultColors
        />
      );
      cResult[4] = SpendEarnOrbsLottie;
      cResult[5] = str;
      cResult[6] = tmp13;
      tmp12 = tmp13;
      isThemeLightResult = shared.isThemeLight(theme);
    }
  : function OrbLottieAnimation(animationType) {
      animationType = animationType.animationType;
      const theme = useTheme.useTheme();
      const tmp5 = React3(null);
      const items = [animationType];
      React4(() => {
        if (null !== animationType) {
          const current = ref.current;
          if (current != null) {
            current.play();
          }
        }
      }, items);
      const imperativeHandle = noop.useImperativeHandle(animationType.ref, () => ({
        play() {
          const current = ref.current;
          let playResult;
          if (current != null) {
            playResult = current.play();
          }
          return playResult;
        },
      }));
      if (isThemeLightResult) {
        let SpendEarnOrbsLottie = SpendEarnOrbsLightThemeLottie.SpendEarnOrbsLightThemeLottie;
      } else {
        SpendEarnOrbsLottie = SpendEarnOrbsLottie2.SpendEarnOrbsLottie;
      }
      const size = {
        ref: tmp5,
        size: "custom",
        width: 60,
        height: 60,
        opacity: 0.8,
        animation: null,
        useLottieDefaultColors: true,
      };
      let str = "spend";
      if (null != animationType) {
        str = animationType;
      }
      size.animation = str;
      return (
        <SpendEarnOrbsLottie
          ref={tmp5}
          size="custom"
          width={60}
          height={60}
          opacity={0.8}
          animation={null}
          useLottieDefaultColors
        />
      );
    };
let size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbLottieAnimation.tsx");

export default tmp3;
export const OrbLottieAnimation = tmp3;
