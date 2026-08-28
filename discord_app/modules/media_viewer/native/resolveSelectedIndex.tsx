// === Module 8536: resolveSelectedIndex ===

// Module 8536 (resolveSelectedIndex)
import set from "set" /* 2 */;

function resolveSelectedIndex(arg0) {
  ({ offsetX, pageSize, maxIndex } = arg0);
  if (pageSize > 0) {
    const _Number = Number;
    if (Number.isFinite(offsetX)) {
      if (maxIndex >= 0) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.max(0, Math.min(Math.round(offsetX / pageSize), maxIndex));
        const _Math4 = Math;
        let tmp2 = null;
        if (Math.abs(offsetX - bound * pageSize) <= 1) {
          tmp2 = bound;
        }
        return tmp2;
      }
    }
  }
  return null;
}
resolveSelectedIndex.__closure = { VIEWER_SETTLED_EPSILON_PX: 1 };
resolveSelectedIndex.__workletHash = 17187138168161;
resolveSelectedIndex.__initData = { code: "function resolveSelectedIndex_resolveSelectedIndexTsx1({offsetX:offsetX,pageSize:pageSize,maxIndex:maxIndex}){const{VIEWER_SETTLED_EPSILON_PX}=this.__closure;if(pageSize<=0||!Number.isFinite(offsetX)||maxIndex<0){return null;}const nearest=Math.max(0,Math.min(Math.round(offsetX/pageSize),maxIndex));if(Math.abs(offsetX-nearest*pageSize)>VIEWER_SETTLED_EPSILON_PX){return null;}return nearest;}" };
const result = set.fileFinishedImporting("modules/media_viewer/native/resolveSelectedIndex.tsx");

export const VIEWER_SETTLED_EPSILON_PX = 1;
export { resolveSelectedIndex };