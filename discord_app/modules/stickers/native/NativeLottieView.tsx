// discord_app/modules/stickers/native/NativeLottieView.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import codegenNativeCommandsDefault from "../../../../_runtime/00113_codegenNativeCommands.js";
import LottieNodeNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let current;

let c2;
let c3;
let importDefaultResult;
let react = react_mod;
({ useEffect: c2, useRef: c3 } = react);
react = react_mod;
const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
if (PlatformUtils.isAndroid()) {
  importDefaultResult = LottieNodeNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("NativeLottieNode");
}
const metroRequire = importDefaultResult;
let closure_7 = codegenNativeCommandsDefault({ supportedCommands: ["setup"] });
const NativeLottieRenderMode = { LOOP: 0, [0]: "LOOP", STILL: 1, [1]: "STILL", ONCE: 2, [2]: "ONCE" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let animating;
      let asset;
      let first;
      let height;
      let opacity;
      let ref;
      let renderMode;
      let url;
      let width;
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
      ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          let accessibilityLabel;
          let animating;
          let asset;
          let height;
          let url;
          let width;
          ({ asset, url, width, height, renderMode, animating, accessibilityLabel } = arg0);
          const tmp = "" !== url && 0 !== width && 0 !== height;
          if (tmp) {
            closure_7.setup(ref.current, asset, url, width, height, renderMode, animating, accessibilityLabel);
          }
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === accessibilityLabel) {
        if (cResult[2] === (undefined === animating || animating)) {
          if (cResult[3] === asset) {
            if (cResult[4] === height) {
              if (cResult[5] === url) {
                let tmp6;
                let tmp13;
                if (cResult[6] === width) {
                  tmp6 = cResult[7];
                }
                current = tmp6;
                react = current(tmp6);
                if (cResult[8] !== tmp6) {
                  class S {
                    constructor() {
                      ref.current = current;
                    }
                  }
                  cResult[8] = tmp6;
                  cResult[9] = S;
                } else {
                  class S {
                    constructor() {
                      ref.current = current;
                    }
                  }
                }
                first(S);
                const tmp10 = first;
                if (cResult[10] !== renderMode) {
                  class S {
                    constructor() {
                      ref.current = current;
                    }
                  }
                  const items = [renderMode];
                  cResult[10] = renderMode;
                  cResult[11] = tmp14;
                  cResult[12] = items;
                  tmp13 = items;
                } else {
                  class S {
                    constructor() {
                      ref.current = current;
                    }
                  }
                  tmp13 = cResult[12];
                }
                tmp10(tmp14, tmp13);
                if (cResult[13] === height) {
                  class S {
                    constructor() {
                      ref.current = current;
                    }
                  }
                }
                size = { width, height, opacity: num };
                const tmp19 = <closure_6 ref={ref} style={size} />;
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
  : (renderMode) => {
      let asset;
      let height;
      let opacity;
      let url;
      let width;
      ({ width, height, opacity } = renderMode);
      ({ asset, url } = renderMode);
      if (opacity === undefined) {
        opacity = 1;
      }
      let LOOP = renderMode.renderMode;
      if (LOOP === undefined) {
        LOOP = obj.LOOP;
      }
      let flag = renderMode.animating;
      if (flag === undefined) {
        flag = true;
      }
      current = undefined;
      const accessibilityLabel = renderMode.accessibilityLabel;
      const ref = react.useRef(null);
      size = { asset, url, width, height, animating: flag, accessibilityLabel };
      current = current(size);
      size(() => {
        ref.current = size;
      });
      const items = [LOOP];
      size(() => {
        let accessibilityLabel;
        let animating;
        let asset;
        let height;
        let url;
        let width;
        ({ asset, url, width, height, animating, accessibilityLabel } = ref.current);
        const tmp2 = "" !== url && 0 !== width && 0 !== height;
        if (tmp2) {
          closure_7.setup(ref.current, asset, url, width, height, LOOP, animating, accessibilityLabel);
        }
      }, items);
      return <closure_6 ref={ref} style={{ width, height, opacity }} />;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/stickers/native/NativeLottieView.tsx");

export default tmp4;
export { NativeLottieRenderMode };
