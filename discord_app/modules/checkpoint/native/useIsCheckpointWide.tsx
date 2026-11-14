// discord_app/modules/checkpoint/native/useIsCheckpointWide.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/checkpoint/native/useIsCheckpointWide.tsx");

export default function useIsCheckpointWide() {
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return size.width / size.height >= 1.2;
}
export const CHECKPOINT_WIDE_MAX_WIDTH = 880;
