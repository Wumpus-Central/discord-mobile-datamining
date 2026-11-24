// === Module 12439: useCheckpointCharacterImages ===

// Module 12439 (useCheckpointCharacterImages)
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6293 */;
import useCompositeImagesLoadedDefault from "useCompositeImagesLoaded" /* 12440 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCharacterImages.tsx");

export default function useCheckpointCharacterImages(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  items = [arg0, arg1];
  const memo = noop.useMemo(() => {
    if (null != closure_0) {
      let characterLayerUrls = checkpoint_CheckpointMessageComponentUtils.getCharacterLayerUrls(tmp, closure_1);
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items);
  return useCompositeImagesLoadedDefault(memo);
};