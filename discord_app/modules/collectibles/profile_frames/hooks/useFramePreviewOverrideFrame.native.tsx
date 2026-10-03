// === Module 7873: useFramePreviewOverrideFrame ===

// Module 7873 (useFramePreviewOverrideFrame)
import c from "c" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import noop from "module_19" /* 19 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7060 */;

require = fn;
let closure_4 = fn(7874).useFramePreviewOverrideStore;
let c5 = "frame-preview-override";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let PROFILE_FRAME = dependencyMap;
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(override) {
      return override.override;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  overflowTop = closure_4(first);
  if (null == overflowTop) {
    return null;
  } else {
    if (cResult[1] === overflowTop.frameKey) {
      if (cResult[2] === overflowTop.innerWidth) {
        if (cResult[3] === overflowTop.layers) {
          if (cResult[4] === overflowTop.overflowBottom) {
            if (cResult[5] === overflowTop.overflowHorizontal) {
            }
          }
        }
      }
    }
    const obj3 = { type: null, skuId: null, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
    PROFILE_FRAME = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
    obj3.type = PROFILE_FRAME;
    obj3.skuId = skuId;
    ({ frameKey: obj2.label, layers: obj2.layers, innerWidth: obj2.innerWidth, overflowTop: obj2.overflowTop, overflowBottom: obj2.overflowBottom, overflowHorizontal: obj2.overflowHorizontal } = overflowTop);
    const tmp10 = new ProfileFrameRecord(obj3);
    cResult[1] = overflowTop.frameKey;
    cResult[2] = overflowTop.innerWidth;
    cResult[3] = overflowTop.layers;
    cResult[4] = overflowTop.overflowBottom;
    ({ overflowHorizontal: tmp2[5], overflowTop } = overflowTop);
    cResult[6] = overflowTop;
    cResult[7] = tmp10;
  }
}) : (() => {
  const tmp = closure_4((override) => override.override);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      const obj = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME, skuId, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
      ({ frameKey: obj.label, layers: obj.layers, innerWidth: obj.innerWidth, overflowTop: obj.overflowTop, overflowBottom: obj.overflowBottom, overflowHorizontal: obj.overflowHorizontal } = closure_0);
      tmp2 = new ProfileFrameRecord(obj);
    }
    return tmp2;
  }, items);
});