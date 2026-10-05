// === Module 14825: useBountyVideoEndAppStoreOverlay ===

// Module 14825 (useBountyVideoEndAppStoreOverlay)
import c from "c" /* 576 */;
import QuestContent from "QuestContent" /* 5628 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 9998 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 14826 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const useBountyVideoEndAppStoreContext = () => noop.useContext(closure_5);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ value, children } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === value) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <redux.Provider value={value}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((value) => <redux.Provider value={value.value}>{value.children}</redux.Provider>);
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export const BountyVideoEndAppStoreProvider = tmp2;
export { useBountyVideoEndAppStoreContext };
export const canUseBountyVideoEndAppStoreOverlay = function canUseBountyVideoEndAppStoreOverlay(cta) {
  if (obj.canOpenCustomAppStoreOverlayFromCta(cta.cta)) {
    const BountiesMobileQuestBarExperiment = BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarExperiment;
    const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
    return config.enabled && tmp6 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
  } else {
    return false;
  }
  obj = QuestCustomAppStoreOverlayUtils;
};
export const useBountyVideoEndAppStoreOverlay = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = bounty(sourceQuestContent[4]).c(17);
  bounty = bounty.bounty;
  sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  const obj = bounty(sourceQuestContent[4]);
  const getQuestImpressionId = bounty(sourceQuestContent[7]).useGetQuestImpressionId();
  if (typeof context === "function") {
    context = isActive.useContext(getQuestImpressionId);
    isActive.useRef(false);
    isActive.useRef(0);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o() {
        ref2.current = ref2.current + 1;
        closure_7.current = false;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== bounty.id) {
      const items = [bounty.id];
      cResult[1] = bounty.id;
      cResult[2] = items;
      let tmp7 = items;
    } else {
      tmp7 = cResult[2];
    }
    const effect = obj3.useEffect(first, tmp7);
    if (cResult[3] !== isActive) {
      const fn2 = function u() {
        if (!isActive) {
          ref2.current = ref2.current + 1;
          closure_7.current = false;
        }
      };
      const items1 = [isActive];
      cResult[3] = isActive;
      cResult[4] = fn2;
      cResult[5] = items1;
      let tmp10 = items1;
      let tmp9 = fn2;
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
                  if (cResult[13] === sourceQuestContent) {
                    let tmp12 = cResult[14];
                  }
                  if (cResult[15] !== tmp12) {
                    let obj4 = { onVideoEndForAppStore: tmp12 };
                    cResult[15] = tmp12;
                    cResult[16] = obj4;
                    let tmp13 = obj4;
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
              const customAppStoreOverlayContent = bounty(sourceQuestContent[5]).fetchCustomAppStoreOverlayContent(current.cta);
              const tmpResult = bounty(sourceQuestContent[5]);
              customAppStoreOverlayContent.then((appId) => {
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                          },
                      onOverlaySurfaceClick(overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(7202);
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                            const obj2 = { adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result1 = current(10919).setAppStoreOverlayOpen({
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = bounty(sourceQuestContent[11]);
                                return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                              }
                            });
                          },
                      onCarouselScroll: null
                    };
                    const obj4 = { adContentId: bounty.id };
                    obj2.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj4, appId);
                    let result = context.showVideoEndAppStoreOverlay(obj2);
                  } else {
                    onOverlayUnavailable();
                  }
                }
              }).catch(() => {
                if (current === ref.current) {
                  onOverlayUnavailable();
                }
              });
              const nextPromise = customAppStoreOverlayContent.then((appId) => {
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                          },
                      onOverlaySurfaceClick(overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(7202);
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                            const obj2 = { adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result1 = current(10919).setAppStoreOverlayOpen({
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = bounty(sourceQuestContent[11]);
                                return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                              }
                            });
                          },
                      onCarouselScroll: null
                    };
                    const obj4 = { adContentId: bounty.id };
                    obj2.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj4, appId);
                    let result = context.showVideoEndAppStoreOverlay(obj2);
                  } else {
                    onOverlayUnavailable();
                  }
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
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  let context;
  const getQuestImpressionId = bounty(sourceQuestContent[7]).useGetQuestImpressionId();
  if (typeof context === "function") {
    context = isActive.useContext(getQuestImpressionId);
    isActive.useRef(false);
    isActive.useRef(0);
    const items = [bounty.id];
    const effect = isActive.useEffect(() => {
      ref2.current = ref2.current + 1;
      closure_7.current = false;
    }, items);
    const items1 = [isActive];
    const effect1 = isActive.useEffect(() => {
      if (!isActive) {
        ref2.current = ref2.current + 1;
        closure_7.current = false;
      }
    }, items1);
    let obj2 = { onVideoEndForAppStore: null };
    const items2 = [context, bounty, endMode, getQuestImpressionId, isActive, onOverlayUnavailable, sourceQuestContent];
    obj2.onVideoEndForAppStore = isActive.useCallback(() => {
      if (endMode === bounty(sourceQuestContent[8]).BountyVideoEndMode.APP_STORE_LOOP) {
        if (isActive) {
          if (!ref.current) {
            if (null != context) {
              tmp4.current = true;
              const current = ref2.current;
              const customAppStoreOverlayContent = bounty(sourceQuestContent[5]).fetchCustomAppStoreOverlayContent(current.cta);
              const tmpResult = bounty(sourceQuestContent[5]);
              customAppStoreOverlayContent.then((appId) => {
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                          },
                      onOverlaySurfaceClick(overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(7202);
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                            const obj2 = { adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result1 = current(10919).setAppStoreOverlayOpen({
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = bounty(sourceQuestContent[11]);
                                return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                              }
                            });
                          },
                      onCarouselScroll: null
                    };
                    const obj4 = { adContentId: bounty.id };
                    obj2.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj4, appId);
                    let result = context.showVideoEndAppStoreOverlay(obj2);
                  } else {
                    onOverlayUnavailable();
                  }
                }
              }).catch(() => {
                if (current === ref.current) {
                  onOverlayUnavailable();
                }
              });
              const nextPromise = customAppStoreOverlayContent.then((appId) => {
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                          },
                      onOverlaySurfaceClick(overlaySurface) {
                            trackingCtx = bounty(sourceQuestContent[11]);
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(7202);
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                            const obj2 = { adContentId: appId.id, adCreativeType: current(5630).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result1 = current(10919).setAppStoreOverlayOpen({
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = bounty(sourceQuestContent[11]);
                                return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                              }
                            });
                          },
                      onCarouselScroll: null
                    };
                    const obj4 = { adContentId: bounty.id };
                    obj2.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj4, appId);
                    let result = context.showVideoEndAppStoreOverlay(obj2);
                  } else {
                    onOverlayUnavailable();
                  }
                }
              });
            }
          }
        }
      }
    }, items2);
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj = bounty(sourceQuestContent[7]);
});