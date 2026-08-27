// === Module 8466: useFramePreviewOverrideFrame ===

// Module 8466 (useFramePreviewOverrideFrame)
import closure_2 from "noop" /* 19 */;
import closure_3 from "fromServer" /* 7227 */;
import { useFramePreviewOverrideStore as closure_4 } from "measure" /* 8467 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default function useFramePreviewOverrideFrame() {
  const tmp = callback((override) => override.override);
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != callback) {
      const obj = { type: null, skuId: "frame-preview-override", label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
      obj[0] = callback(closure_1_1[3]).CollectiblesItemType.PROFILE_FRAME;
      ({ frameKey: obj[2], layers: obj[3], innerWidth: obj[4], overflowTop: obj[5], overflowBottom: obj[6], overflowHorizontal: obj[7] } = callback);
      tmp2 = new closure_1_3(obj);
    }
    return tmp2;
  }, items);
};