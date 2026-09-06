// discord_app/modules/collectibles/native/useCollectibleListLayout.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const noop = fn(19);
({ useCallback: closure_1, useState: c2 } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default function useCollectibleListLayout() {
  const tmp = _slicedToArray(React2(0), 2);
  closure_0 = tmp[1];
  return {
    size: tmp[0],
    onLayout: framebus((nativeEvent) => {
      closure_0((nativeEvent.nativeEvent.layout.width - 64) / 3);
    }, []),
  };
}
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;
