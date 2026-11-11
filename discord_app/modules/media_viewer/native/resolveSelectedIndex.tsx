// === Module 10129: resolveSelectedIndex ===

// Module 10129 (resolveSelectedIndex)
import size from "module_2" /* 2 */;

const items = [{ code: "(function resolveSelectedIndex_resolveSelectedIndexTsx1({offsetX:offsetX,pageSize:pageSize,maxIndex:maxIndex}){let[VIEWER_SETTLED_EPSILON_PX]=this.__closure;if(pageSize<=0||!Number.isFinite(offsetX)||maxIndex<0){return null;}const nearest=Math.max(0,Math.min(Math.round(offsetX/pageSize),maxIndex));if(Math.abs(offsetX-nearest*pageSize)>VIEWER_SETTLED_EPSILON_PX){return null;}return nearest;})" }, 1];
let c0;
[tmp2, tmp3] = items;
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
        let tmp3 = null;
        if (Math.abs(offsetX - bound * pageSize) <= c0) {
          tmp3 = bound;
        }
        return tmp3;
      }
    }
  }
  return null;
}
const items1 = [tmp3];
resolveSelectedIndex.__closure = items1;
resolveSelectedIndex.__workletHash = 1676088784760;
resolveSelectedIndex.__initData = tmp2;
const result = size.fileFinishedImporting("modules/media_viewer/native/resolveSelectedIndex.tsx");

export const VIEWER_SETTLED_EPSILON_PX = 1;
export { resolveSelectedIndex };