// discord_app/modules/screen/native/useWindowSizeClassifier.tsx
import react from "../../../../_runtime/00576_react.js";
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const WindowSizeClassifier = {
  SMALL: 0,
  [0]: "SMALL",
  NORMAL: 1,
  [1]: "NORMAL",
  LARGE: 2,
  [2]: "LARGE",
  XLARGE: 3,
  [3]: "XLARGE",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      const width = useBaseAppContainerDimensionsDefault().width;
      if (cResult[0] !== width) {
        let XLARGE;
        if (width <= 360) {
          XLARGE = obj.SMALL;
        } else if (width <= 600) {
          XLARGE = obj.NORMAL;
        } else if (width <= 840) {
          XLARGE = obj.LARGE;
        } else {
          XLARGE = obj.XLARGE;
        }
        cResult[0] = width;
        cResult[1] = XLARGE;
        tmp2 = XLARGE;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : () => {
      let XLARGE;
      const width = useBaseAppContainerDimensionsDefault().width;
      if (width <= 360) {
        XLARGE = obj.SMALL;
      } else if (width <= 600) {
        XLARGE = obj.NORMAL;
      } else if (width <= 840) {
        XLARGE = obj.LARGE;
      } else {
        XLARGE = obj.XLARGE;
      }
      return XLARGE;
    };
const result = size.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default tmp2;
export const WINDOW_SIZE_THRESHOLD_SMALL = 360;
export const WINDOW_SIZE_THRESHOLD_LARGE = 600;
export const WINDOW_SIZE_THRESHOLD_XLARGE = 840;
export { WindowSizeClassifier };
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  let XLARGE;
  const obj = useBaseAppContainerDimensions;
  const width = obj.getBaseAppContainerDimensions().width;
  if (width <= 360) {
    XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};
