// === Module 17237: useBountiesRecapScroll ===

// Module 17237 (useBountiesRecapScroll)
import noop from "module_19" /* 19 */;

let items = [{ code: "(function getRevealProgress_useBountiesRecapScrollTsx1(scrollOffset,startOffset,revealHeight){if(revealHeight<=0){return 0;}return(scrollOffset-startOffset)/revealHeight;})" }];
[tmp2] = items;
function getRevealProgress(arg0, arg1, arg2) {
  let num = 0;
  if (arg2 > 0) {
    num = (arg0 - arg1) / arg2;
  }
  return num;
}
getRevealProgress.__workletHash = 7613259850010;
getRevealProgress.__initData = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx");

export const RECAP_SNAP_EPSILON = 2;
export { getRevealProgress };
export function useBountiesRecapScroll(listRef) {
  listRef = listRef.listRef;
  const enabled = listRef.enabled;
  const offsets = listRef.offsets;
  items = [listRef];
  const callback = listRef.useCallback((offset) => {
    if (null != listRef.current) {
      const current = tmp.current;
      const obj = { offset, animated: true };
      current.scrollToOffset(obj);
    }
  }, items);
  const items1 = [offsets.lastBounty, callback];
  const items2 = [enabled, , , , ];
  ({ fullRecap: arr3[1], lastBounty: arr3[2], revealHeight: arr3[3] } = offsets);
  items2[4] = callback;
  const callback1 = listRef.useCallback(() => {
    callback(offsets.lastBounty);
  }, items1);
  const callback2 = listRef.useCallback((arg0) => {
    if (enabled) {
      if (arg0 > offsets.lastBounty) {
        const revealHeight = offsets.revealHeight;
        if (typeof getRevealProgress === "function") {
          let num = 0;
          if (revealHeight > 0) {
            num = (arg0 - tmp8) / revealHeight;
          }
          const tmp3 = num >= 0.25 ? offsets.fullRecap : offsets.lastBounty;
          const _Math = Math;
          if (Math.abs(arg0 - tmp3) >= 2) {
            callback(tmp3);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }, items2);
  let obj = { scrollToLastBounty: callback1, handleRecapMomentumEnd: null };
  const items3 = [enabled, callback2];
  obj.handleRecapMomentumEnd = listRef.useCallback((contentOffset) => {
    if (enabled) {
      callback2(contentOffset.contentOffset.y);
    }
  }, items3);
  return obj;
}