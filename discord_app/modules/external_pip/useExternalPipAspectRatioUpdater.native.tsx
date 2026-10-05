// discord_app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
import ExternalPipDefault from "ExternalPip.android.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, current) => {
      let closure_0;
      let ref;
      let tmp2;
      let tmp4;
      let tmp5;
      _require = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      dependencyMap = react.useRef(current);
      if (cResult[0] !== current) {
        const fn = function u() {
          ref.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const insertionEffect = react.useInsertionEffect(tmp2);
      if (cResult[2] !== arg1) {
        const fn2 = function c() {
          size = size.getTargetDimensions(ref.current);
          const obj = current(ref[3]);
          obj.setPipAspectRatio(size.width, size.height);
          return size.subscribeFromItem(() => {
            let height;
            let width;
            const targetDimensions = size.getTargetDimensions(ref.current);
            ({ width, height } = targetDimensions);
            const tmp2 = width === size.width && height === size.height;
            if (!tmp2) {
              size = { width, height };
              const obj2 = ExternalPipDefault;
              obj2.setPipAspectRatio(width, height);
            }
          });
        };
        const items = [arg1];
        cResult[2] = arg1;
        cResult[3] = fn2;
        cResult[4] = items;
        tmp5 = items;
        tmp4 = fn2;
      } else {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
    }
  : (arg0, arg1, current) => {
      let closure_0 = arg1;
      const ref = react.useRef(current);
      const insertionEffect = react.useInsertionEffect(() => {
        ref.current = current;
      });
      const items = [arg1];
      const effect = react.useEffect(() => {
        size = size.getTargetDimensions(ref.current);
        const obj = current(ref[3]);
        obj.setPipAspectRatio(size.width, size.height);
        return size.subscribeFromItem(() => {
          let height;
          let width;
          const targetDimensions = size.getTargetDimensions(ref.current);
          ({ width, height } = targetDimensions);
          const tmp2 = width === size.width && height === size.height;
          if (!tmp2) {
            size = { width, height };
            const obj2 = ExternalPipDefault;
            obj2.setPipAspectRatio(width, height);
          }
        });
      }, items);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default tmp2;
