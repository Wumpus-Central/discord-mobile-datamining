// === Module 14820: useBountyAppStoreOverlayPlayback ===

// Module 14820 (useBountyAppStoreOverlayPlayback)
import c from "c" /* 576 */;
import useBountyVideoEndAppStoreOverlay from "useBountyVideoEndAppStoreOverlay" /* 14821 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 14823 */;
import useBountyPauseAppStoreSheet from "useBountyPauseAppStoreSheet" /* 14824 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyAppStoreOverlayPlayback.tsx");

export const getBountyVideoEndMode = function getBountyVideoEndMode(bounty) {
  const result = useBountyVideoEndAppStoreOverlay.canUseBountyVideoEndAppStoreOverlay(bounty);
  const BountyVideoEndMode = useBountiesModalTiming.BountyVideoEndMode;
  return result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
};
export const useBountyAppStoreOverlayPlayback = ReactCompilerGating.isReactCompilerEnabled() ? ((handleVideoPaused) => {
  const cResult = c.c(26);
  ({ bounty, sourceQuestContent, isActive, endMode, playerRef, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  ({ showEndCard, onPaused } = handleVideoPaused);
  if (cResult[0] === bounty) {
    if (cResult[1] === endMode) {
      if (cResult[2] === isActive) {
        if (cResult[3] === showEndCard) {
          if (cResult[4] === sourceQuestContent) {
            let tmp4 = cResult[5];
          }
          const onVideoEndForAppStore = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreOverlay(tmp4).onVideoEndForAppStore;
          const tmpResult = useBountyVideoEndAppStoreOverlay;
          const bountyVideoEndAppStoreContext = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreContext();
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
                if (cResult[9] === sourceQuestContent) {
                  let tmp7 = cResult[10];
                }
                const handleVideoPausedForAppStore = useBountyPauseAppStoreSheet.useBountyPauseAppStoreSheet(tmp7).handleVideoPausedForAppStore;
                if (cResult[11] === handleVideoPaused) {
                  if (cResult[12] === handleVideoPausedForAppStore) {
                    if (cResult[13] === onPaused) {
                      let tmp8 = cResult[14];
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
                      cResult[24] = endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP;
                      cResult[25] = tmp13;
                      const tmp11 = endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP;
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
                const tmpResult4 = useBountyPauseAppStoreSheet;
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
          const tmpResult3 = useBountyVideoEndAppStoreOverlay;
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
  ({ bounty, sourceQuestContent, isActive, endMode, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  const onPaused = handleVideoPaused.onPaused;
  let handleVideoPausedForAppStore;
  ({ playerRef, showEndCard } = handleVideoPaused);
  const onVideoEndForAppStore = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreOverlay({ bounty, sourceQuestContent, isActive, endMode, onOverlayUnavailable: showEndCard }).onVideoEndForAppStore;
  const bountyVideoEndAppStoreContext = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreContext();
  let flag;
  if (bountyVideoEndAppStoreContext != null) {
    flag = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
  }
  if (flag == null) {
    flag = false;
  }
  handleVideoPausedForAppStore = useBountyPauseAppStoreSheet.useBountyPauseAppStoreSheet({ bounty, sourceQuestContent, isActive, playerRef }).handleVideoPausedForAppStore;
  const items = [handleVideoPaused, handleVideoPausedForAppStore, onPaused];
  const items1 = [handleVideoResumed];
  const callback = noop.useCallback((arg0) => {
    handleVideoPaused(arg0);
    if (onPaused != null) {
      onPaused();
    }
    handleVideoPausedForAppStore(arg0);
  }, items);
  const items2 = [handleVideoEnd, onVideoEndForAppStore];
  const callback1 = noop.useCallback((arg0) => {
    handleVideoResumed(arg0);
  }, items1);
  const obj3 = { isVideoEndAppStoreOverlayVisible: flag, shouldRepeatVideo: null, handlePaused: null, handleResumed: null, handleVideoEndWithAppStore: null };
  const callback2 = noop.useCallback(() => {
    handleVideoEnd();
    onVideoEndForAppStore();
  }, items2);
  obj3.shouldRepeatVideo = endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP;
  obj3.handlePaused = callback;
  obj3.handleResumed = callback1;
  obj3.handleVideoEndWithAppStore = callback2;
  return obj3;
});