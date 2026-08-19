// discord_app/modules/screen/native/useBaseAppContainerDimensions.tsx
import useWindowDimensions from "../useWindowDimensions.native.tsx";
import useSafeAreaInsets from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/00019_noop.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default function useBaseAppContainerDimensions() {
  const size = height(left[1])();
  const width = size.width;
  height = size.height;
  const rect = height(left[2])();
  left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return right.useMemo(() => ({ width: width - left - right, height }), items);
};
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  let obj = useWindowDimensions;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = useSafeAreaInsets.getSafeAreaInsets();
  obj = { width: width - rect.left - rect.right, height };
  return obj;
};