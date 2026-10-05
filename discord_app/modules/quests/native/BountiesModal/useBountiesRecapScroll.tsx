// === Module 14820: useBountiesRecapScroll ===

// Module 14820 (useBountiesRecapScroll)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let listRef;

function getRevealProgress(scrollY, lastBountyScrollOffset, height2) {
  let num = 0;
  if (height2 > 0) {
    num = (scrollY - lastBountyScrollOffset) / height2;
  }
  return num;
}
getRevealProgress.__closure = {};
getRevealProgress.__workletHash = 9769647749947;
getRevealProgress.__initData = { code: "function getRevealProgress_useBountiesRecapScrollTsx1(scrollOffset,startOffset,revealHeight){if(revealHeight<=0){return 0;}return(scrollOffset-startOffset)/revealHeight;}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((listRef) => {
  let closure_3;
  let enabled;
  let tmp2;
  let obj = listRef(enabled[2]);
  const cResult = obj.c(17);
  listRef = listRef.listRef;
  enabled = listRef.enabled;
  const offsets = listRef.offsets;
  if (cResult[0] !== listRef) {
    const fn = function l(offset) {
      if (null != listRef.current) {
        const current = tmp.current;
        const obj = { offset, animated: true };
        current.scrollToOffset(obj);
      }
    };
    let num = 0;
    cResult[0] = listRef;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  getRevealProgress = tmp2;
  if (cResult[2] === offsets.lastBounty) {
    if (cResult[5] === enabled) {
      if (cResult[6] === offsets.fullRecap) {
        if (cResult[7] === offsets.lastBounty) {
          if (cResult[8] === offsets.revealHeight) {
            let tmp4;
            if (cResult[9] === tmp2) {
              tmp4 = cResult[10];
            }
            let closure_4 = tmp4;
            class B {
              constructor(arg0) {
                if (enabled) {
                  if (arg0 > offsets.lastBounty) {
                    const revealHeight = offsets.revealHeight;
                    if (typeof getRevealProgress === "function") {
                      let num = 0;
                      if (revealHeight > 0) {
                        num = (arg0 - tmp9) / revealHeight;
                      }
                      const tmp4 = num >= 0.25 ? offsets.fullRecap : offsets.lastBounty;
                      const _Math = Math;
                      if (Math.abs(arg0 - tmp4) >= 2) {
                        closure_3(tmp4);
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              }
            }
            class R {
              constructor(contentOffset) {
                if (enabled) {
                  closure_4(contentOffset.contentOffset.y);
                }
              }
            }
            cResult[11] = enabled;
            cResult[12] = tmp4;
            cResult[13] = R;
          }
        }
      }
    }
    class B {
      constructor(arg0) {
        if (enabled) {
          if (arg0 > offsets.lastBounty) {
            const revealHeight = offsets.revealHeight;
            if (typeof getRevealProgress === "function") {
              let num = 0;
              if (revealHeight > 0) {
                num = (arg0 - tmp9) / revealHeight;
              }
              const tmp4 = num >= 0.25 ? offsets.fullRecap : offsets.lastBounty;
              const _Math = Math;
              if (Math.abs(arg0 - tmp4) >= 2) {
                closure_3(tmp4);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
      }
    }
    cResult[5] = enabled;
    cResult[6] = offsets.fullRecap;
    cResult[7] = offsets.lastBounty;
    cResult[8] = offsets.revealHeight;
    cResult[9] = tmp2;
    cResult[10] = B;
    tmp4 = B;
  }
  const fn2 = function c() {
    closure_3(offsets.lastBounty);
  };
  cResult[2] = offsets.lastBounty;
  cResult[3] = tmp2;
  cResult[4] = fn2;
}) : ((listRef) => {
  let items3;
  listRef = listRef.listRef;
  const enabled = listRef.enabled;
  const offsets = listRef.offsets;
  const items = [listRef];
  const callback = offsets.useCallback((offset) => {
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
  const callback1 = offsets.useCallback(() => {
    callback(offsets.lastBounty);
  }, items1);
  const callback2 = offsets.useCallback((arg0) => {
    if (enabled) {
      if (arg0 > offsets.lastBounty) {
        const revealHeight = offsets.revealHeight;
        if (typeof getRevealProgress === "function") {
          let num = 0;
          if (revealHeight > 0) {
            num = (arg0 - tmp9) / revealHeight;
          }
          const tmp4 = num >= 0.25 ? offsets.fullRecap : offsets.lastBounty;
          const _Math = Math;
          if (Math.abs(arg0 - tmp4) >= 2) {
            callback(tmp4);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }, items2);
  let obj = {
    scrollToLastBounty: callback1,
    handleRecapMomentumEnd: offsets.useCallback((contentOffset) => {
      if (enabled) {
        callback2(contentOffset.contentOffset.y);
      }
    }, items3)
  };
  items3 = [enabled, callback2];
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx");

export const RECAP_SNAP_EPSILON = 2;
export { getRevealProgress };
export const useBountiesRecapScroll = tmp2;