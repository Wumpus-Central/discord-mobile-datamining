// === Module 13350: useIsCheckpointWide ===

// Module 13350 (useIsCheckpointWide)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/native/useIsCheckpointWide.tsx");

export default function useIsCheckpointWide() {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return size.width / size.height >= 1.2;
};
export const CHECKPOINT_WIDE_MAX_WIDTH = 880;