// === Module 11319: useDrawerWidth ===

// Module 11319 (useDrawerWidth)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1084 */;
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5192 */;
import useFoldSeamDefault from "useFoldSeam" /* 11320 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DM_WIDTH = Constants.DM_WIDTH;
const sum = 260 + DM_WIDTH;
let closure_5 = 300 + DM_WIDTH;
const result = size.fileFinishedImporting("modules/screen/native/drawer/useDrawerWidth.tsx");

export const DRAWER_LEFT_WIDTH_MIN = sum;
export const useDrawerWidth = ReactCompilerGating.isReactCompilerEnabled() ? (function useDrawerWidth(arg0) {
  let obj = arg0;
  const cResult = c.c(8);
  if (undefined === arg0) {
    obj = {};
  }
  const whileSliding = obj.whileSliding;
  const width = useBaseAppContainerDimensionsDefault().width;
  ({ isChatLockedOpen, isChatBesideChannelList } = useChatLayoutDefault());
  const tmp4 = useFoldSeamDefault();
  if (isChatBesideChannelList) {
    let seam;
    if (tmp4 != null) {
      seam = tmp4.seam;
    }
    if (seam == null) {
      seam = null;
    }
    if (cResult[0] === isChatLockedOpen) {
      if (cResult[1] === seam) {
        if (cResult[2] === width) {
          let tmp7 = cResult[3];
        }
        if (null == whileSliding) {
          return tmp7;
        } else {
          let settledSeam;
          if (tmp4 != null) {
            settledSeam = tmp4.settledSeam;
          }
          if (settledSeam == null) {
            settledSeam = null;
          }
          if (cResult[4] === isChatLockedOpen) {
            if (cResult[5] === settledSeam) {
              if (cResult[6] === width) {
                let tmp15 = cResult[7];
              }
              if ("wider" === whileSliding) {
                const _Math4 = Math;
                let bound = Math.max(tmp7, tmp15);
              } else {
                const _Math3 = Math;
                bound = Math.min(tmp7, tmp15);
              }
              return bound;
            }
          }
          if (null != settledSeam) {
            if (settledSeam > DM_WIDTH + 32) {
              if (settledSeam < width - 32) {
                cResult[4] = isChatLockedOpen;
                cResult[5] = settledSeam;
                cResult[6] = width;
                cResult[7] = settledSeam;
                tmp15 = settledSeam;
              }
            }
          }
          if (isChatLockedOpen) {
            let bound1 = sum;
          } else {
            const _Math2 = Math;
            bound1 = Math.min(closure_5, width - 32);
          }
        }
      }
    }
    if (null != seam) {
      if (seam > DM_WIDTH + 32) {
        if (seam < width - 32) {
          cResult[0] = isChatLockedOpen;
          cResult[1] = seam;
          cResult[2] = width;
          cResult[3] = seam;
          tmp7 = seam;
        }
      }
    }
    if (isChatLockedOpen) {
      let bound2 = sum;
    } else {
      const _Math = Math;
      bound2 = Math.min(closure_5, width - 32);
    }
  } else {
    return width;
  }
  const tmp3 = useChatLayoutDefault();
}) : (function useDrawerWidth() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const whileSliding = obj.whileSliding;
  const width = useBaseAppContainerDimensionsDefault().width;
  ({ isChatLockedOpen, isChatBesideChannelList } = useChatLayoutDefault());
  const tmp2 = useFoldSeamDefault();
  if (isChatBesideChannelList) {
    let seam;
    if (tmp2 != null) {
      seam = tmp2.seam;
    }
    if (seam == null) {
      seam = null;
    }
    if (null != seam) {
      if (seam > DM_WIDTH + 32) {
        if (seam < width - 32) {
          if (null == whileSliding) {
            return seam;
          } else {
            let settledSeam;
            if (tmp2 != null) {
              settledSeam = tmp2.settledSeam;
            }
            if (settledSeam == null) {
              settledSeam = null;
            }
            if (null != settledSeam) {
              if (settledSeam > DM_WIDTH + 32) {
                if (settledSeam < width - 32) {
                  if ("wider" === whileSliding) {
                    const _Math4 = Math;
                    let bound = Math.max(seam, settledSeam);
                  } else {
                    const _Math3 = Math;
                    bound = Math.min(seam, settledSeam);
                  }
                  return bound;
                }
              }
            }
            if (isChatLockedOpen) {
              let bound1 = sum;
            } else {
              const _Math2 = Math;
              bound1 = Math.min(closure_5, width - 32);
            }
          }
        }
      }
    }
    if (isChatLockedOpen) {
      let bound2 = sum;
    } else {
      const _Math = Math;
      bound2 = Math.min(closure_5, width - 32);
    }
  } else {
    return width;
  }
  const tmp = useChatLayoutDefault();
});