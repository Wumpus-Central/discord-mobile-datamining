// discord_app/modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
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
}
