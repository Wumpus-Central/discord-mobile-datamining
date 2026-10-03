// === Module 4740: useWindowSizeClassifier ===

// Module 4740 (useWindowSizeClassifier)
import c from "c" /* 576 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4741 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const WindowSizeClassifier = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = size.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = c;
  const cResult = obj.c(2);
  const width = useBaseAppContainerDimensionsDefault().width;
  if (cResult[0] !== width) {
    if (width <= 360) {
      let XLARGE = obj.SMALL;
    } else if (width <= 600) {
      XLARGE = obj.NORMAL;
    } else if (width <= 840) {
      XLARGE = obj.LARGE;
    } else {
      XLARGE = obj.XLARGE;
    }
    cResult[0] = width;
    cResult[1] = XLARGE;
  } else {
    return cResult[1];
  }
}) : (() => {
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
});
export const WINDOW_SIZE_THRESHOLD_SMALL = 360;
export const WINDOW_SIZE_THRESHOLD_LARGE = 600;
export const WINDOW_SIZE_THRESHOLD_XLARGE = 840;
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