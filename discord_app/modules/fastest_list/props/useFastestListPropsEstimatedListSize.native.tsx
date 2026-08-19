// === Module 8641: useFastestListPropsEstimatedListSize ===

// Module 8641 (useFastestListPropsEstimatedListSize)
import useWindowDimensions from "useWindowDimensions" /* 1494 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  return callback(React.useState(() => {
    if ("windowSize" !== closure_0) {
      return closure_0;
    } else {
      const size = useWindowDimensions.getWindowDimensions();
    }
  }), 2)[0];
};