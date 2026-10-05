// discord_app/modules/frames/utils/useFrameBySurface.tsx
import FramesStore from "../FramesStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FramesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg1) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp6, tmp7);
      }
      const fn = function s() {
        if (null != closure_0) {
          return FramesStore.getFrameBySurface(tmp, closure_1);
        }
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const items = [FramesStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          if (null != closure_0) {
            return FramesStore.getFrameBySurface(tmp, closure_1);
          }
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default tmp2;
