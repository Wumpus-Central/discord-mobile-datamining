// discord_app/modules/screen/native/useWindowSizeClassifier.tsx
import set from "set" /* 2 */;
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 4234 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4234 */;

let obj = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = set.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

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
export const WindowSizeClassifier = obj;
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  obj = useBaseAppContainerDimensions;
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