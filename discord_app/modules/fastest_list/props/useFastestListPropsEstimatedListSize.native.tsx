// discord_app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFastestListPropsEstimatedListSize(estimatedListSize) {
      const cResult = estimatedListSize(horizontal[3]).c(3);
      estimatedListSize = estimatedListSize.estimatedListSize;
      horizontal = estimatedListSize.horizontal;
      if (cResult[0] === estimatedListSize) {
        if (cResult[1] === horizontal) {
          let tmp2 = cResult[2];
        }
        return _slicedToArray(noop.useState(tmp2), 1)[0];
      }
      const fn = function o() {
        if ("windowSize" !== estimatedListSize) {
          return estimatedListSize;
        } else {
          const size = useWindowDimensions.getWindowDimensions();
        }
      };
      cResult[0] = estimatedListSize;
      cResult[1] = horizontal;
      cResult[2] = fn;
      tmp2 = fn;
      let obj = estimatedListSize(horizontal[3]);
    }
  : function useFastestListPropsEstimatedListSize(arg0) {
      ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
      return _slicedToArray(
        noop.useState(() => {
          if ("windowSize" !== closure_1_0) {
            return closure_1_0;
          } else {
            const size = useWindowDimensions.getWindowDimensions();
          }
        }),
        2,
      )[0];
    };
