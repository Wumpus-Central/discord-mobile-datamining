// === Module 8087: useFramePreviewOverrideFrame ===

// Module 8087 (useFramePreviewOverrideFrame)
import noop from "noop";
import fromServer from "fromServer";
import { useFramePreviewOverrideStore as closure_4 } from "measure";

let require = arg1;
const result = require("measure").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default function useFramePreviewOverrideFrame() {
  const tmp = callback((override) => override.override);
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != tmp) {
      const obj = { type: null, skuId: "frame-preview-override", label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
      obj[0] = tmp(outer1_1[3]).CollectiblesItemType.PROFILE_FRAME;
      ({ frameKey: obj[2], layers: obj[3], innerWidth: obj[4], overflowTop: obj[5], overflowBottom: obj[6], overflowHorizontal: obj[7] } = tmp);
      tmp2 = new outer1_3(obj);
    }
    return tmp2;
  }, items);
};