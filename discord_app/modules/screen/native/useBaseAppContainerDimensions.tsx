// === Module 4741: useBaseAppContainerDimensions ===

// Module 4741 (useBaseAppContainerDimensions)
import react2 from "react" /* 576 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1618 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(3);
  ({ height, width } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  if (cResult[0] === height) {
    let tmp4;
    if (cResult[1] === diff) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  size = { width: diff, height };
  cResult[0] = height;
  cResult[1] = diff;
  cResult[2] = size;
  tmp4 = size;
}) : (() => {
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return react.useMemo(() => {
    size = { width: width - left - right, height };
    return size;
  }, items);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default tmp2;
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  let height;
  let width;
  const obj = useWindowDimensions;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const obj2 = useSafeAreaInsets;
  const rect = obj2.getSafeAreaInsets();
  size = { width: width - rect.left - rect.right, height };
  return size;
};