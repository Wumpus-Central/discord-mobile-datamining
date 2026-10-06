// === Module 14840: useBountyAppStoreOverlayPlayback ===

// Module 14840 (useBountyAppStoreOverlayPlayback)
import react2 from "react" /* 576 */;
import useBountyVideoEndAppStoreOverlay from "useBountyVideoEndAppStoreOverlay" /* 14841 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 14843 */;
import useBountyPauseAppStoreSheet from "useBountyPauseAppStoreSheet" /* 14844 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let handleVideoPaused, tmp, tmp3;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((handleVideoPaused) => {
  let bounty;
  let endMode;
  let handleVideoEnd;
  let isActive;
  let onPaused;
  let playerRef;
  let showEndCard;
  let sourceQuestContent;
  const obj = react2;
  const cResult = obj.c(26);
  ({ bounty, sourceQuestContent, isActive, endMode, playerRef, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  ({ showEndCard, onPaused } = handleVideoPaused);
  if (cResult[0] === bounty) {
    if (cResult[1] === endMode) {
      if (cResult[2] === isActive) {
        if (cResult[3] === showEndCard) {
          let tmp4;
          if (cResult[4] === sourceQuestContent) {
            tmp4 = cResult[5];
          }
          const tmpResult = useBountyVideoEndAppStoreOverlay;
          const onVideoEndForAppStore = tmpResult.useBountyVideoEndAppStoreOverlay(tmp4).onVideoEndForAppStore;
          const tmpResult3 = useBountyVideoEndAppStoreOverlay;
          const bountyVideoEndAppStoreContext = tmpResult3.useBountyVideoEndAppStoreContext();
          let flag;
          if (bountyVideoEndAppStoreContext != null) {
            flag = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
          }
          if (flag == null) {
            flag = false;
          }
          if (cResult[6] === bounty) {
            if (cResult[7] === isActive) {
              if (cResult[8] === playerRef) {
                let tmp7;
                if (cResult[9] === sourceQuestContent) {
                  tmp7 = cResult[10];
                }
                const tmpResult4 = useBountyPauseAppStoreSheet;
                const handleVideoPausedForAppStore = tmpResult4.useBountyPauseAppStoreSheet(tmp7).handleVideoPausedForAppStore;
                if (cResult[11] === handleVideoPaused) {
                  if (cResult[12] === handleVideoPausedForAppStore) {
                    let tmp8;
                    if (cResult[13] === onPaused) {
                      tmp8 = cResult[14];
                    }
                    if (cResult[15] !== handleVideoResumed) {
                      class B {
                        constructor(arg0) {
                          tmp = handleVideoResumed(handleVideoPaused);
                          return;
                        }
                      }
                      cResult[15] = handleVideoResumed;
                      class R {
                        constructor() {
                          tmp = handleVideoEnd();
                          tmp2 = onVideoEndForAppStore();
                          return;
                        }
                      }
                      cResult[16] = B;
                      class O {
                        constructor(arg0) {
                          tmp = handleVideoPaused(handleVideoPaused);
                          if (onPaused != null) {
                            tmp2 = onPaused();
                          }
                          tmp3 = closure_5(handleVideoPaused);
                          return;
                        }
                      }
                    } else {
                      class B {
                        constructor(arg0) {
                          tmp = handleVideoResumed(handleVideoPaused);
                          return;
                        }
                      }
                    }
                    if (cResult[17] === handleVideoEnd) {
                      class B {
                        constructor(arg0) {
                          tmp = handleVideoResumed(handleVideoPaused);
                          return;
                        }
                      }
                      const tmp11 = endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP;
                      if (cResult[20] === tmp8) {
                        class B {
                          constructor(arg0) {
                            tmp = handleVideoResumed(handleVideoPaused);
                            return;
                          }
                        }
                      }
                      class R {
                        constructor() {
                          tmp = handleVideoEnd();
                          tmp2 = onVideoEndForAppStore();
                          return;
                        }
                      }
                      tmp13[0] = flag;
                      class O {
                        constructor(arg0) {
                          tmp = handleVideoPaused(handleVideoPaused);
                          if (onPaused != null) {
                            tmp2 = onPaused();
                          }
                          tmp3 = closure_5(handleVideoPaused);
                          return;
                        }
                      }
                      tmp13[2] = tmp8;
                      tmp13[3] = tmp9;
                      tmp13[4] = R;
                      cResult[20] = tmp8;
                      cResult[21] = tmp9;
                      cResult[22] = R;
                      cResult[23] = flag;
                      cResult[24] = tmp11;
                      cResult[25] = tmp13;
                    }
                    class R {
                      constructor() {
                        tmp = handleVideoEnd();
                        tmp2 = onVideoEndForAppStore();
                        return;
                      }
                    }
                    class O {
                      constructor(arg0) {
                        tmp = handleVideoPaused(handleVideoPaused);
                        if (onPaused != null) {
                          tmp2 = onPaused();
                        }
                        tmp3 = closure_5(handleVideoPaused);
                        return;
                      }
                    }
                    cResult[18] = onVideoEndForAppStore;
                    cResult[19] = R;
                  }
                }
                class O {
                  constructor(arg0) {
                    tmp = handleVideoPaused(handleVideoPaused);
                    if (onPaused != null) {
                      tmp2 = onPaused();
                    }
                    tmp3 = closure_5(handleVideoPaused);
                    return;
                  }
                }
                cResult[11] = handleVideoPaused;
                cResult[12] = handleVideoPausedForAppStore;
                cResult[13] = onPaused;
                cResult[14] = O;
                tmp8 = O;
              }
            }
          }
          const obj2 = { bounty, sourceQuestContent, isActive, playerRef };
          cResult[6] = bounty;
          cResult[7] = isActive;
          cResult[8] = playerRef;
          cResult[9] = sourceQuestContent;
          cResult[10] = obj2;
          tmp7 = obj2;
        }
      }
    }
  }
  const obj3 = { bounty, sourceQuestContent, isActive, endMode, onOverlayUnavailable: showEndCard };
  cResult[0] = bounty;
  cResult[1] = endMode;
  cResult[2] = isActive;
  cResult[3] = showEndCard;
  cResult[4] = sourceQuestContent;
  cResult[5] = obj3;
  tmp4 = obj3;
}) : ((handleVideoPaused) => {
  let bounty;
  let callback2;
  let endMode;
  let handleVideoEnd;
  let isActive;
  let playerRef;
  let showEndCard;
  let sourceQuestContent;
  ({ bounty, sourceQuestContent, isActive, endMode, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  const onPaused = handleVideoPaused.onPaused;
  let handleVideoPausedForAppStore;
  ({ playerRef, showEndCard } = handleVideoPaused);
  const obj = useBountyVideoEndAppStoreOverlay;
  const onVideoEndForAppStore = obj.useBountyVideoEndAppStoreOverlay({ bounty, sourceQuestContent, isActive, endMode, onOverlayUnavailable: showEndCard }).onVideoEndForAppStore;
  const obj2 = useBountyVideoEndAppStoreOverlay;
  const bountyVideoEndAppStoreContext = obj2.useBountyVideoEndAppStoreContext();
  let flag;
  if (bountyVideoEndAppStoreContext != null) {
    flag = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult = useBountyPauseAppStoreSheet;
  handleVideoPausedForAppStore = tmpResult.useBountyPauseAppStoreSheet({ bounty, sourceQuestContent, isActive, playerRef }).handleVideoPausedForAppStore;
  const items = [handleVideoPaused, handleVideoPausedForAppStore, onPaused];
  const items1 = [handleVideoResumed];
  const callback = react.useCallback((arg0) => {
    handleVideoPaused(arg0);
    if (onPaused != null) {
      onPaused();
    }
    handleVideoPausedForAppStore(arg0);
  }, items);
  const items2 = [handleVideoEnd, onVideoEndForAppStore];
  const callback1 = react.useCallback((arg0) => {
    handleVideoResumed(arg0);
  }, items1);
  const obj3 = { isVideoEndAppStoreOverlayVisible: flag, shouldRepeatVideo: endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP, handlePaused: callback, handleResumed: callback1, handleVideoEndWithAppStore: callback2 };
  callback2 = react.useCallback(() => {
    handleVideoEnd();
    onVideoEndForAppStore();
  }, items2);
  return obj3;
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyAppStoreOverlayPlayback.tsx");

export const getBountyVideoEndMode = function getBountyVideoEndMode(bounty) {
  const obj = useBountyVideoEndAppStoreOverlay;
  const result = obj.canUseBountyVideoEndAppStoreOverlay(bounty);
  const BountyVideoEndMode = useBountiesModalTiming.BountyVideoEndMode;
  return result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
};
export const useBountyAppStoreOverlayPlayback = tmp2;