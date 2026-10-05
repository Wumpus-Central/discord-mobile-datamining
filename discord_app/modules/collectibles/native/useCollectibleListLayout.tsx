// discord_app/modules/collectibles/native/useCollectibleListLayout.tsx
import react2 from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ useCallback: c3, useState: closure_4 } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_0;
      let first;
      let tmp3;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp3, closure_129_0] = React3(0);
      _slicedToArray(React3(0), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(nativeEvent) {
          closure_1_0((nativeEvent.nativeEvent.layout.width - 64) / 3);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const obj2 = { size: tmp3, onLayout: first };
        cResult[1] = tmp3;
        cResult[2] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : () => {
      const tmp = _slicedToArray(React3(0), 2);
      let closure_0 = tmp[1];
      const obj = {
        size: tmp[0],
        onLayout: _false((nativeEvent) => {
          closure_0((nativeEvent.nativeEvent.layout.width - 64) / 3);
        }, []),
      };
      return obj;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default tmp3;
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;
