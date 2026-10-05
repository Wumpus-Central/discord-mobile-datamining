// discord_app/modules/video_calls/native/components/usePipPosition.tsx
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import PictureInPicture from "PictureInPicture.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const CameraPreviewPosition = "CameraPreviewPosition";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const Storage = Storage2.Storage;
          return Storage.get(CameraPreviewPosition, PictureInPicture.DEFAULT_PIP_POSITION);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [tmp4, require] = react.useState(first);
      _slicedToArray(react.useState(first), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l(arg0) {
          const Storage = Storage2.Storage;
          const result = Storage.set(CameraPreviewPosition, arg0);
          require(arg0);
        };
        cResult[1] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const items = [tmp4, tmp5];
        cResult[2] = tmp4;
        cResult[3] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : () => {
      const tmp = _slicedToArray(
        react.useState(() => {
          const Storage = closure_0(dependencyMap[4]).Storage;
          return Storage.get(CameraPreviewPosition, closure_0(dependencyMap[5]).DEFAULT_PIP_POSITION);
        }),
        2,
      );
      let closure_0 = tmp[1];
      const items = [
        tmp[0],
        react.useCallback((arg0) => {
          const Storage = Storage2.Storage;
          const result = Storage.set(CameraPreviewPosition, arg0);
          closure_0(arg0);
        }, []),
      ];
      return items;
    };
let result = size.fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default tmp2;
