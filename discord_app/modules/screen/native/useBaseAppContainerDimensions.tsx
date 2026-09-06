// === Module 4422: useBaseAppContainerDimensions ===

// Module 4422 (useBaseAppContainerDimensions)
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1611 */;
import noop from "module_19" /* 19 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;

require = fn;
let size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default function useBaseAppContainerDimensions() {
  let size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return noop.useMemo(() => {
    const size = { width: width - left - right, height };
    return size;
  }, items);
};
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  const windowDimensions = useWindowDimensions.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = useSafeAreaInsets.getSafeAreaInsets();
  const size = { width: width - rect.left - rect.right, height };
  return size;
};