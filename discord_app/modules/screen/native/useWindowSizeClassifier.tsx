// === Module 4421: useWindowSizeClassifier ===

// Module 4421 (useWindowSizeClassifier)
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4422 */;
import size from "module_2" /* 2 */;

const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const WindowSizeClassifier = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = size.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  const width = useBaseAppContainerDimensionsDefault().width;
  if (width <= 360) {
    let XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};
export { WindowSizeClassifier };
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  const obj = useBaseAppContainerDimensions;
  const width = obj.getBaseAppContainerDimensions().width;
  if (width <= 360) {
    let XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};