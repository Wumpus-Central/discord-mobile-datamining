// === Module 15269: useBountiesRecapScroll ===

// Module 15269 (useBountiesRecapScroll)
import noop from "module_19" /* 19 */;

const require = fn;
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx");

export const RECAP_SNAP_EPSILON = 2;
export { getRevealProgress };
export const useBountiesRecapScroll = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountiesRecapScroll(listRef) {
  const cResult = listRef(enabled[2]).c(17);
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
    cResult[0] = listRef;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  getRevealProgress = tmp2;
  if (cResult[2] === offsets.lastBounty) {
    if (cResult[5] === enabled) {
      if (cResult[6] === offsets.fullRecap) {
        if (cResult[7] === offsets.lastBounty) {
          if (cResult[8] === offsets.revealHeight) {
            if (cResult[9] === tmp2) {
              let tmp4 = cResult[10];
            }
            closure_4 = tmp4;
            class B {
              constructor(arg0) {
                if (enabled) {
                  tmp = listRef;
                  tmp2 = offsets;
                  if (listRef > offsets.lastBounty) {
                    tmp7 = getRevealProgress;
                    revealHeight = tmp2.revealHeight;
                    if (typeof getRevealProgress === "function") {
                      num = 0;
                      if (revealHeight > 0) {
                        num = (listRef - tmp8) / revealHeight;
                      }
                      num2 = 0.25;
                      tmp3 = num >= 0.25 ? tmp2.fullRecap : tmp2.lastBounty;
                      tmp4 = globalThis;
                      _Math = Math;
                      num3 = 2;
                      if (Math.abs(listRef - tmp3) >= 2) {
                        tmp5 = closure_3;
                        tmp6 = closure_3(tmp3);
                      }
                    } else {
                      str = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
                return;
              }
            }
            class R {
              constructor(arg0) {
                if (enabled) {
                  tmp = listRef;
                  tmp2 = closure_4;
                  tmp3 = closure_4(listRef.contentOffset.y);
                }
                return;
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
          tmp = listRef;
          tmp2 = offsets;
          if (listRef > offsets.lastBounty) {
            tmp7 = getRevealProgress;
            revealHeight = tmp2.revealHeight;
            if (typeof getRevealProgress === "function") {
              num = 0;
              if (revealHeight > 0) {
                num = (listRef - tmp8) / revealHeight;
              }
              num2 = 0.25;
              tmp3 = num >= 0.25 ? tmp2.fullRecap : tmp2.lastBounty;
              tmp4 = globalThis;
              _Math = Math;
              num3 = 2;
              if (Math.abs(listRef - tmp3) >= 2) {
                tmp5 = closure_3;
                tmp6 = closure_3(tmp3);
              }
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        return;
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
  const fn2 = function f() {
    closure_3(offsets.lastBounty);
  };
  cResult[2] = offsets.lastBounty;
  cResult[3] = tmp2;
  cResult[4] = fn2;
  let obj = listRef(enabled[2]);
}) : (function useBountiesRecapScroll(listRef) {
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
  obj.handleRecapMomentumEnd = offsets.useCallback((contentOffset) => {
    if (enabled) {
      callback2(contentOffset.contentOffset.y);
    }
  }, items3);
  return obj;
});