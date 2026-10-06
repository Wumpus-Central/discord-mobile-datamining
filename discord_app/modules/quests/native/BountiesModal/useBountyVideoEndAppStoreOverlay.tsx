// === Module 14841: useBountyVideoEndAppStoreOverlay ===

// Module 14841 (useBountyVideoEndAppStoreOverlay)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestContent from "QuestContent" /* 5635 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 10011 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 14842 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let appId, bounty, trackingCtx;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let value;
  const obj = react2;
  const cResult = obj.c(3);
  ({ value, children } = arg0);
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === value) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <redux.Provider value={value}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((value) => <redux.Provider value={value.value}>{value.children}</redux.Provider>);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useBountyVideoEndAppStoreContext = () => react.useContext(redux);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  let context;
  let sourceQuestContent;
  const obj = bounty(sourceQuestContent[4]);
  const cResult = obj.c(17);
  bounty = bounty.bounty;
  sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  let obj2 = bounty(sourceQuestContent[7]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (typeof context === "function") {
    let first;
    let tmp7;
    let tmp10;
    let tmp9;
    let obj3 = isActive;
    context = isActive.useContext(getQuestImpressionId);
    const ref = isActive.useRef(false);
    const ref2 = isActive.useRef(0);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o() {
        ref2.current = ref2.current + 1;
        ref.current = false;
      };
      cResult[0] = fn;
      first = fn;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== bounty.id) {
      const items = [bounty.id];
      cResult[1] = bounty.id;
      cResult[2] = items;
      tmp7 = items;
    } else {
      tmp7 = cResult[2];
    }
    const effect = obj3.useEffect(first, tmp7);
    if (cResult[3] !== isActive) {
      const fn2 = function u() {
        if (!isActive) {
          ref2.current = ref2.current + 1;
          ref.current = false;
        }
      };
      const items1 = [isActive];
      cResult[3] = isActive;
      cResult[4] = fn2;
      cResult[5] = items1;
      tmp10 = items1;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect1 = obj3.useEffect(tmp9, tmp10);
    if (cResult[6] === context) {
      if (cResult[7] === bounty.cta) {
        if (cResult[8] === bounty.id) {
          if (cResult[9] === endMode) {
            if (cResult[10] === getQuestImpressionId) {
              if (cResult[11] === isActive) {
                if (cResult[12] === onOverlayUnavailable) {
                  let tmp12;
                  let tmp13;
                  if (cResult[13] === sourceQuestContent) {
                    tmp12 = cResult[14];
                  }
                  if (cResult[15] !== tmp12) {
                    let obj4 = { onVideoEndForAppStore: tmp12 };
                    cResult[15] = tmp12;
                    cResult[16] = obj4;
                    tmp13 = obj4;
                  } else {
                    tmp13 = cResult[16];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
      }
    }
    const fn3 = function v() {
      if (endMode === bounty(sourceQuestContent[8]).BountyVideoEndMode.APP_STORE_LOOP) {
        if (isActive) {
          if (!ref.current) {
            if (null != context) {
              tmp4.current = true;
              const current = ref2.current;
              const tmpResult = bounty(sourceQuestContent[5]);
              const customAppStoreOverlayContent = tmpResult.fetchCustomAppStoreOverlayContent(current.cta);
              const nextPromise = customAppStoreOverlayContent.then((appId) => {
                let obj3;
                let obj4;
                let user;
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    const showVideoEndAppStoreOverlay = context.showVideoEndAppStoreOverlay;
                    ({ content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = current(sourceQuestContent[11]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                            return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                          },
                      onOverlaySurfaceClick(overlaySurface) {
                            trackingCtx = current(sourceQuestContent[11]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(closure_2_1[11]);
                            let obj2 = { adContentId: appId.id, adCreativeType: current(closure_2_1[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                            const obj3 = current(closure_2_1[13]);
                            const obj4 = {
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = current(sourceQuestContent[11]);
                                const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: current(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                                return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                              }
                            };
                            const result1 = obj3.setAppStoreOverlayOpen(obj4);
                          },
                      onCarouselScroll: obj3.createAppStoreOverlayCarouselScrollTracker(obj4, appId)
                    };
                    obj3 = AnalyticsActions;
                    obj4 = { adContentId: bounty.id };
                    let result = showVideoEndAppStoreOverlay(obj2);
                  } else {
                    onOverlayUnavailable();
                  }
                }
              });
              nextPromise.catch(() => {
                if (current === ref.current) {
                  onOverlayUnavailable();
                }
              });
            }
          }
        }
      }
    };
    cResult[6] = context;
    cResult[7] = bounty.cta;
    cResult[8] = bounty.id;
    cResult[9] = endMode;
    cResult[10] = getQuestImpressionId;
    cResult[11] = isActive;
    cResult[12] = onOverlayUnavailable;
    cResult[13] = sourceQuestContent;
    cResult[14] = fn3;
    tmp12 = fn3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : ((bounty) => {
  let items2;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  let context;
  let ref;
  let ref2;
  const obj = bounty(sourceQuestContent[7]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  if (typeof context === "function") {
    context = isActive.useContext(getQuestImpressionId);
    ref = isActive.useRef(false);
    ref2 = isActive.useRef(0);
    const items = [bounty.id];
    const effect = isActive.useEffect(() => {
      ref2.current = ref2.current + 1;
      ref.current = false;
    }, items);
    const items1 = [isActive];
    const effect1 = isActive.useEffect(() => {
      if (!isActive) {
        ref2.current = ref2.current + 1;
        ref.current = false;
      }
    }, items1);
    let obj2 = {
      onVideoEndForAppStore: isActive.useCallback(() => {
          if (endMode === bounty(sourceQuestContent[8]).BountyVideoEndMode.APP_STORE_LOOP) {
            if (isActive) {
              if (!ref.current) {
                if (null != context) {
                  tmp4.current = true;
                  const current = ref2.current;
                  const tmpResult = bounty(sourceQuestContent[5]);
                  const customAppStoreOverlayContent = tmpResult.fetchCustomAppStoreOverlayContent(current.cta);
                  const nextPromise = customAppStoreOverlayContent.then((appId) => {
                    let obj3;
                    let obj4;
                    let user;
                    if (current === ref.current) {
                      if (null != appId) {
                        appId = appId.appId;
                        const showVideoEndAppStoreOverlay = context.showVideoEndAppStoreOverlay;
                        ({ content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
                        let obj2 = {
                          metadata: appId,
                          trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                                trackingCtx = current(sourceQuestContent[11]);
                                const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                                return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                              },
                          onOverlaySurfaceClick(overlaySurface) {
                                trackingCtx = current(sourceQuestContent[11]);
                                const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                                return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                              },
                          onInstallPress(overlaySurface) {
                                trackingCtx = current(closure_2_1[11]);
                                let obj2 = { adContentId: appId.id, adCreativeType: current(closure_2_1[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                                const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                                const obj3 = current(closure_2_1[13]);
                                const obj4 = {
                                  trackOverlayEvent(event, timeSpentMs) {
                                    trackingCtx = current(sourceQuestContent[11]);
                                    const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: current(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                                    return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                                  }
                                };
                                const result1 = obj3.setAppStoreOverlayOpen(obj4);
                              },
                          onCarouselScroll: obj3.createAppStoreOverlayCarouselScrollTracker(obj4, appId)
                        };
                        obj3 = AnalyticsActions;
                        obj4 = { adContentId: bounty.id };
                        let result = showVideoEndAppStoreOverlay(obj2);
                      } else {
                        onOverlayUnavailable();
                      }
                    }
                  });
                  nextPromise.catch(() => {
                    if (current === ref.current) {
                      onOverlayUnavailable();
                    }
                  });
                }
              }
            }
          }
        }, items2)
    };
    items2 = [context, bounty, endMode, getQuestImpressionId, isActive, onOverlayUnavailable, sourceQuestContent];
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export const BountyVideoEndAppStoreProvider = tmp2;
export { useBountyVideoEndAppStoreContext };
export const canUseBountyVideoEndAppStoreOverlay = function canUseBountyVideoEndAppStoreOverlay(cta) {
  const obj = QuestCustomAppStoreOverlayUtils;
  if (obj.canOpenCustomAppStoreOverlayFromCta(cta.cta)) {
    const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
    const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
    const tmp5 = config.enabled && tmp6 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
    return tmp5;
  } else {
    return false;
  }
};
export const useBountyVideoEndAppStoreOverlay = tmp4;