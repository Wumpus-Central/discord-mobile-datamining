// discord_app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

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