// discord_app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  return callback(React.useState(() => {
    if ("windowSize" !== closure_0) {
      return closure_0;
    } else {
      const size = closure_1_0(closure_1_1[2]).getWindowDimensions();
      const obj = closure_1_0(closure_1_1[2]);
    }
  }), 2)[0];
};