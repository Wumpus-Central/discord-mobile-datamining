// discord_app/modules/screen/native/useBaseAppContainerDimensions.tsx
import useWindowDimensions from "../useWindowDimensions.native.tsx";
import useSafeAreaInsets from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  const windowDimensions = useWindowDimensions.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = useSafeAreaInsets.getSafeAreaInsets();
  const size = { width: width - rect.left - rect.right, height };
  return size;
};
