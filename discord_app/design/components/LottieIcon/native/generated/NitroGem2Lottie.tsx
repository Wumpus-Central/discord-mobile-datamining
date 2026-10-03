// discord_app/design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx
import c from "../../../../../../_runtime/00576_c.js";
import LottieIcon from "../LottieIcon.tsx";
import _mod14230 from "../../../../../../_runtime/metro/14230__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmpResult = _mod14230;
          cResult[0] = tmpResult;
          let first = tmpResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === arg0) {
          if (cResult[2] === ref) {
            let tmp6 = cResult[3];
          }
          return tmp6;
        }
        const merged = Object.assign(arg0);
        const tmp8 = jsx(LottieIcon.LottieIcon, { dotLottie: first, animation: "all", ref, layers, markers: items });
        cResult[1] = arg0;
        cResult[2] = ref;
        cResult[3] = tmp8;
        tmp6 = tmp8;
        const obj2 = { dotLottie: first, animation: "all", ref, layers, markers: items };
      }
    : (arg0, ref) => {
        const merged = Object.assign(arg0);
        return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14230, animation: "all", ref, layers, markers: items });
      },
);
