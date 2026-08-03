// === Module 9255: useFastestListPropsEstimatedListSize ===

// Module 9255 (useFastestListPropsEstimatedListSize)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("useWindowDimensions").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  let dependencyMap;
  let require;
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  return callback(React.useState(() => {
    if ("windowSize" !== closure_0) {
      return closure_0;
    } else {
      const size = outer1_0(outer1_1[2]).getWindowDimensions();
      const obj = outer1_0(outer1_1[2]);
    }
  }), 2)[0];
};