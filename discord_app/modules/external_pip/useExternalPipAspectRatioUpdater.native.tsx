// discord_app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
import ExternalPipDefault from "ExternalPip.android.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useExternalPipAspectRatioUpdater(arg0, arg1, current) {
      _require = arg1;
      const cResult = require("c").c(5);
      dependencyMap = noop.useRef(current);
      if (cResult[0] !== current) {
        const fn = function c() {
          closure_2.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const insertionEffect = noop.useInsertionEffect(tmp2);
      if (cResult[2] !== arg1) {
        const fn2 = function h() {
          size = size.getTargetDimensions(ref.current);
          current(ref[3]).setPipAspectRatio(size.width, size.height);
          return size.subscribeFromItem(() => {
            const targetDimensions = size.getTargetDimensions(ref.current);
            ({ width, height } = targetDimensions);
            let tmp2 = width === size.width;
            if (tmp2) {
              tmp2 = height === size.height;
            }
            if (!tmp2) {
              size = { width, height };
              ExternalPipDefault.setPipAspectRatio(width, height);
            }
          });
        };
        const items = [arg1];
        cResult[2] = arg1;
        cResult[3] = fn2;
        cResult[4] = items;
        let tmp5 = items;
        let tmp4 = fn2;
      } else {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      const obj = require("c");
    }
  : function useExternalPipAspectRatioUpdater(arg0, arg1, current) {
      closure_0 = arg1;
      noop.useRef(current);
      const insertionEffect = noop.useInsertionEffect(() => {
        closure_2.current = current;
      });
      const items = [arg1];
      const effect = noop.useEffect(() => {
        size = size.getTargetDimensions(ref.current);
        current(ref[3]).setPipAspectRatio(size.width, size.height);
        return size.subscribeFromItem(() => {
          const targetDimensions = size.getTargetDimensions(ref.current);
          ({ width, height } = targetDimensions);
          let tmp2 = width === size.width;
          if (tmp2) {
            tmp2 = height === size.height;
          }
          if (!tmp2) {
            size = { width, height };
            ExternalPipDefault.setPipAspectRatio(width, height);
          }
        });
      }, items);
    };
