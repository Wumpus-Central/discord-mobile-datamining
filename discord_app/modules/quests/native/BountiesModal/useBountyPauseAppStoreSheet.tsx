// === Module 14828: useBountyPauseAppStoreSheet ===

// Module 14828 (useBountyPauseAppStoreSheet)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 9998 */;
import AdsVideoTypes from "AdsVideoTypes" /* 14823 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 14826 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let bounty, closure_0, obj1, tmp3;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const ComponentActions = Constants.ComponentActions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  let first;
  let sourceQuestContent;
  let tmp9;
  let tmp = bounty;
  let obj = bounty(sourceQuestContent[5]);
  const cResult = obj.c(23);
  bounty = bounty.bounty;
  sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let obj2 = bounty(sourceQuestContent[6]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BountiesMobileQuestBarExperiment = tmp(tmp2[3]).BountiesMobileQuestBarExperiment;
    let obj3 = { location: playerRef.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj3);
    const ctrVariant = config.ctrVariant;
    let tmp8 = null;
    if (config.enabled) {
      if (ctrVariant === tmp(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
        tmp8 = ctrVariant;
      } else {
        tmp8 = null;
      }
    }
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const ref = isActive.useRef(false);
  const ref2 = isActive.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _() {
      ref.current = false;
    };
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === bounty.id) {
    let tmp10;
    if (cResult[3] === isActive) {
      tmp10 = cResult[4];
    }
    const effect = obj4.useEffect(tmp9, tmp10);
    if (cResult[5] === bounty.cta) {
      let tmp12;
      let tmp13;
      let tmp18;
      let tmp17;
      if (cResult[6] === isActive) {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      const effect1 = obj4.useEffect(tmp12, tmp13);
      const _Symbol = Symbol;
      class E {
        constructor() {
          const tmp = isActive && null != first;
          if (tmp) {
            const obj = QuestCustomAppStoreOverlayUtils;
            const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
          }
        }
      }
      if (tmp15 === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v() {
          if (null != ref2.current) {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, ref2.current);
            ref2.current = null;
          }
        };
        cResult[9] = fn2;
        class E {
          constructor() {
            const tmp = isActive && null != first;
            if (tmp) {
              const obj = QuestCustomAppStoreOverlayUtils;
              const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
            }
          }
        }
      }
      let closure_8 = tmp16;
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function y() {
          return () => closure_1_8();
        };
        const items = [tmp16];
        class E {
          constructor() {
            const tmp = isActive && null != first;
            if (tmp) {
              const obj = QuestCustomAppStoreOverlayUtils;
              const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
            }
          }
        }
        cResult[10] = fn3;
        cResult[11] = items;
        tmp18 = items;
        tmp17 = fn3;
      } else {
        tmp17 = cResult[10];
        tmp18 = cResult[11];
      }
      const effect2 = obj4.useEffect(tmp17, tmp18);
      if (cResult[12] === bounty.cta) {
        if (cResult[13] === bounty.id) {
          if (cResult[14] === getQuestImpressionId) {
            if (cResult[15] === playerRef) {
              let tmp20;
              if (cResult[16] === sourceQuestContent) {
                tmp20 = cResult[17];
              }
              let closure_9 = tmp20;
              if (cResult[18] === isActive) {
                let tmp21;
                let tmp23;
                if (cResult[19] === tmp20) {
                  tmp21 = cResult[20];
                }
                if (cResult[21] !== tmp21) {
                  const obj5 = { handleVideoPausedForAppStore: tmp21 };
                  class E {
                    constructor() {
                      const tmp = isActive && null != first;
                      if (tmp) {
                        const obj = QuestCustomAppStoreOverlayUtils;
                        const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                      }
                    }
                  }
                  cResult[22] = obj5;
                  tmp23 = obj5;
                } else {
                  tmp23 = cResult[22];
                }
                return tmp23;
              }
              class E {
                constructor() {
                  const tmp = isActive && null != first;
                  if (tmp) {
                    const obj = QuestCustomAppStoreOverlayUtils;
                    const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                  }
                }
              }
              cResult[18] = isActive;
              cResult[19] = tmp20;
              cResult[20] = tmp22;
              tmp21 = tmp22;
            }
          }
        }
      }
      class I {
        constructor() {
          obj = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_4(), sourceQuestContent };
          tmp = bounty;
          tmp2 = sourceQuestContent;
          closure_0 = obj;
          obj2 = bounty(sourceQuestContent[11]);
          tmp3 = closure_0;
          directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(closure_0.cta);
          tmp5 = bounty(sourceQuestContent[11]);
          url = directAppStoreLinkFromCta;
          openAppStoreOrUrl = tmp5.openAppStoreOrUrl;
          if (directAppStoreLinkFromCta == null) {
            url = tmp3.cta.url;
          }
          obj1 = { link: url, directLink: directAppStoreLinkFromCta, inlineStoreParams: null, allowExternalOpen: false, trackOverlayEvent: null, trackOverlaySurfaceClick: null, appStoreOverlayCarouselScrollContext: null };
          tmpResult = tmp(tmp2[11]);
          obj1.inlineStoreParams = tmpResult.getInlineStoreParamsFromCta(tmp3.cta);
          obj1.trackOverlayEvent = function trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
            trackingCtx = AnalyticsActions;
            const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
            return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
          };
          obj1.trackOverlaySurfaceClick = function trackOverlaySurfaceClick(overlaySurface) {
            trackingCtx = AnalyticsActions;
            const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
          };
          obj1.appStoreOverlayCarouselScrollContext = { adContentId: tmp3.id };
          openAppStoreOrUrlResult = openAppStoreOrUrl(obj1);
          return openAppStoreOrUrlResult.then((result) => {
            const tmp = result;
            if (tmp) {
              let current = ref.current;
              if (current != null) {
                current.pause();
              }
              closure_1_8();
              function handleFinished() {
                closure_1_8();
                const tmp5 = closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.EVERY_PAUSE_APP_STORE_OVERLAY && closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY;
                if (!tmp5) {
                  const current = ref.current;
                  if (current != null) {
                    current.play();
                  }
                }
              }
              const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
              const subscription = ComponentDispatch.subscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
              ref2.current = handleFinished;
              return true;
            } else {
              return false;
            }
          });
        }
      }
      cResult[12] = bounty.cta;
      cResult[13] = bounty.id;
      cResult[14] = getQuestImpressionId;
      cResult[15] = playerRef;
      cResult[16] = sourceQuestContent;
      cResult[17] = I;
      tmp20 = I;
    }
    class E {
      constructor() {
        const tmp = isActive && null != first;
        if (tmp) {
          const obj = QuestCustomAppStoreOverlayUtils;
          const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
        }
      }
    }
    const items1 = [bounty.cta, first, isActive];
    cResult[5] = bounty.cta;
    cResult[7] = E;
    cResult[8] = items1;
    tmp13 = items1;
    tmp12 = E;
  }
  const items2 = [bounty.id, isActive];
  cResult[2] = bounty.id;
  cResult[3] = isActive;
  cResult[4] = items2;
  tmp10 = items2;
}) : ((bounty) => {
  let items4;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let c5;
  let ref;
  let ref2;
  let callback;
  let callback1;
  let tmp = bounty;
  let obj = bounty(sourceQuestContent[6]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const BountiesMobileQuestBarExperiment = bounty(sourceQuestContent[3]).BountiesMobileQuestBarExperiment;
  let obj2 = { location: playerRef.VIDEO_MODAL_MOBILE };
  const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
  const ctrVariant = config.ctrVariant;
  let tmp5 = null;
  if (config.enabled) {
    if (ctrVariant === tmp(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
      tmp5 = ctrVariant;
    } else {
      tmp5 = null;
    }
  }
  c5 = tmp5;
  ref = isActive.useRef(false);
  ref2 = isActive.useRef(null);
  const items = [bounty.id, isActive];
  const effect = isActive.useEffect(() => {
    ref.current = false;
  }, items);
  const items1 = [bounty.cta, tmp5, isActive];
  const effect1 = isActive.useEffect(() => {
    const tmp = isActive && null != c5;
    if (tmp) {
      const obj = QuestCustomAppStoreOverlayUtils;
      const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
    }
  }, items1);
  callback = isActive.useCallback(() => {
    if (null != ref2.current) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, ref2.current);
      ref2.current = null;
    }
  }, []);
  const items2 = [callback];
  const effect2 = isActive.useEffect(() => () => callback(), items2);
  const items3 = [bounty, getQuestImpressionId, playerRef, sourceQuestContent, callback, tmp5];
  callback1 = isActive.useCallback(() => {
    let tmpResult;
    let trackingCtx = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    let obj2 = bounty(sourceQuestContent[11]);
    const directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(trackingCtx.cta);
    let tmp5 = bounty(sourceQuestContent[11]);
    let url = directAppStoreLinkFromCta;
    const openAppStoreOrUrl = tmp5.openAppStoreOrUrl;
    if (directAppStoreLinkFromCta == null) {
      url = tmp3.cta.url;
    }
    const obj3 = {
      link: url,
      directLink: directAppStoreLinkFromCta,
      inlineStoreParams: tmpResult.getInlineStoreParamsFromCta(trackingCtx.cta),
      allowExternalOpen: false,
      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
        trackingCtx = AnalyticsActions;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
        return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
      },
      trackOverlaySurfaceClick(overlaySurface) {
        trackingCtx = AnalyticsActions;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
        return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
      },
      appStoreOverlayCarouselScrollContext: { adContentId: trackingCtx.id }
    };
    tmpResult = bounty(sourceQuestContent[11]);
    const openAppStoreOrUrlResult = openAppStoreOrUrl(obj3);
    return openAppStoreOrUrlResult.then((result) => {
      const tmp = result;
      if (tmp) {
        let current = ref.current;
        if (current != null) {
          current.pause();
        }
        function handleFinished() {
          closure_1_8();
          const tmp5 = closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.EVERY_PAUSE_APP_STORE_OVERLAY && closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY;
          if (!tmp5) {
            const current = ref.current;
            if (current != null) {
              current.play();
            }
          }
        }
        callback();
        const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
        ref2.current = handleFinished;
        return true;
      } else {
        return false;
      }
    });
  }, items3);
  let obj3 = {
    handleVideoPausedForAppStore: isActive.useCallback((arg0) => {
      if (isActive) {
        if (arg0 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
          if (null != c5) {
            if (tmp5 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
              if (!ref.current) {
                tmp9.current = true;
                const promise = callback1();
                promise.then((result) => {
                  const tmp = result;
                  if (!tmp) {
                    ref.current = false;
                  }
                });
              }
            } else {
              callback1();
            }
          }
        }
      }
    }, items4)
  };
  items4 = [tmp5, isActive, callback1];
  return obj3;
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = tmp2;