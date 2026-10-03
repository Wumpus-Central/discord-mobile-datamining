// discord_app/modules/stickers/native/NativeLottieView.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import codegenNativeCommandsDefault from "../../../../_runtime/00113_codegenNativeCommands.js";
import LottieNodeNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx";
import noop_mod from "../../../../_runtime/metro/00019__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let noop = noop_mod;
({ useEffect: c2, useRef: c3 } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = LottieNodeNativeComponentDefault;
} else {
  importDefaultResult = _mod17.requireNativeComponent("NativeLottieNode");
}
const metroRequire = importDefaultResult;
let closure_7 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
const NativeLottieRenderMode = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const result = size.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = renderMode(ref[7]);
      const cResult = obj.c(17);
      ({ asset, url, width, height, opacity, renderMode, animating, accessibilityLabel } = arg0);
      let num = 1;
      if (undefined !== opacity) {
        num = opacity;
      }
      if (undefined === renderMode) {
        renderMode = obj.LOOP;
      }
      ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          ({ asset, url, width, height, renderMode, animating, accessibilityLabel } = arg0);
          let tmp = "" !== url;
          if (tmp) {
            tmp = 0 !== width;
          }
          if (tmp) {
            tmp = 0 !== height;
          }
          if (tmp) {
            closure_7.setup(ref.current, asset, url, width, height, renderMode, animating, accessibilityLabel);
          }
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === accessibilityLabel) {
        if (cResult[2] === tmp3) {
          if (cResult[3] === asset) {
            if (cResult[4] === height) {
              if (cResult[5] === url) {
                if (cResult[6] === width) {
                  let tmp6 = cResult[7];
                }
                current = tmp6;
                noop = current(tmp6);
                if (cResult[8] !== tmp6) {
                  class S {
                    constructor() {
                      closure_4.current = closure_3;
                      return;
                    }
                  }
                  cResult[8] = tmp6;
                  cResult[9] = S;
                } else {
                  class S {
                    constructor() {
                      closure_4.current = closure_3;
                      return;
                    }
                  }
                }
                first(S);
                if (cResult[10] !== renderMode) {
                  class S {
                    constructor() {
                      closure_4.current = closure_3;
                      return;
                    }
                  }
                  const items = [renderMode];
                  cResult[10] = renderMode;
                  cResult[11] = tmp14;
                  cResult[12] = items;
                  let tmp13 = items;
                } else {
                  class S {
                    constructor() {
                      closure_4.current = closure_3;
                      return;
                    }
                  }
                  tmp13 = cResult[12];
                }
                first(tmp14, tmp13);
                if (cResult[13] === height) {
                  class S {
                    constructor() {
                      closure_4.current = closure_3;
                      return;
                    }
                  }
                }
                const obj2 = { ref, style: null };
                let size = { width, height, opacity: num };
                obj2.style = size;
                const tmp19 = <closure_6 ref={ref} style={null} />;
                cResult[13] = height;
                cResult[14] = num;
                cResult[15] = width;
                cResult[16] = tmp19;
              }
            }
          }
        }
      }
      const size1 = { asset, url, width, height, animating: tmp3, accessibilityLabel };
      cResult[1] = accessibilityLabel;
      cResult[2] = undefined === animating || animating;
      cResult[3] = asset;
      cResult[4] = height;
      cResult[5] = url;
      cResult[6] = width;
      cResult[7] = size1;
      tmp6 = size1;
    }
  : (accessibilityLabel) => {
      ({ width, height, opacity } = accessibilityLabel);
      ({ asset, url } = accessibilityLabel);
      if (opacity === undefined) {
        opacity = 1;
      }
      let LOOP = accessibilityLabel.renderMode;
      if (LOOP === undefined) {
        LOOP = obj.LOOP;
      }
      let flag = accessibilityLabel.animating;
      if (flag === undefined) {
        flag = true;
      }
      current = undefined;
      const ref = noop.useRef(null);
      const size = {
        asset,
        url,
        width,
        height,
        animating: flag,
        accessibilityLabel: accessibilityLabel.accessibilityLabel,
      };
      current = current(size);
      size(() => {
        closure_3.current = size;
      });
      const items = [LOOP];
      size(() => {
        ({ asset, url, width, height, animating, accessibilityLabel } = ref.current);
        let tmp2 = "" !== url;
        if (tmp2) {
          tmp2 = 0 !== width;
        }
        if (tmp2) {
          tmp2 = 0 !== height;
        }
        if (tmp2) {
          closure_7.setup(ref.current, asset, url, width, height, LOOP, animating, accessibilityLabel);
        }
      }, items);
      obj = { ref, style: { width, height, opacity } };
      return <closure_6 ref={ref} style={{ width, height, opacity }} />;
    };
export { NativeLottieRenderMode };
