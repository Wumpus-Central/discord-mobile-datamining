// === Module 14463: getRevealProgress ===

// Module 14463 (getRevealProgress)
import closure_0 from "noop" /* 19 */;

function getRevealProgress(scrollY, lastBountyScrollOffset, height3) {
  let num = 0;
  if (height3 > 0) {
    num = (scrollY - lastBountyScrollOffset) / height3;
  }
  return num;
}
getRevealProgress.__closure = {};
getRevealProgress.__workletHash = 9769647749947;
getRevealProgress.__initData = { code: "function getRevealProgress_useBountiesRecapScrollTsx1(scrollOffset,startOffset,revealHeight){if(revealHeight<=0){return 0;}return(scrollOffset-startOffset)/revealHeight;}" };
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx");

export const RECAP_SNAP_EPSILON = 2;
export { getRevealProgress };
export const useBountiesRecapScroll = function useBountiesRecapScroll(listRef) {
  listRef = listRef.listRef;
  const enabled = listRef.enabled;
  const offsets = listRef.offsets;
  let callback;
  let callback2;
  const items = [listRef];
  callback = listRef.useCallback((arg0) => {
    if (null != listRef.current) {
      const current = tmp.current;
      const obj = { offset: null, animated: true };
      obj[0] = arg0;
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
  callback2 = listRef.useCallback((arg0) => {
    if (enabled) {
      if (arg0 > offsets.lastBounty) {
        ({ revealHeight, lastBounty } = tmp2);
        if (typeof enabled !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let num = 0;
        if (revealHeight > 0) {
          num = (arg0 - lastBounty) / revealHeight;
        }
        const tmp3 = num >= 0.25 ? tmp2.fullRecap : tmp2.lastBounty;
        const _Math = Math;
        if (Math.abs(arg0 - tmp3) >= 2) {
          callback(tmp3);
        }
      }
    }
  }, items2);
  const items3 = [enabled, callback2];
  return {
    scrollToLastBounty: callback1,
    handleRecapMomentumEnd: listRef.useCallback((contentOffset) => {
      if (enabled) {
        callback2(contentOffset.contentOffset.y);
      }
    }, items3)
  };
};