// discord_app/modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import BountiesMobileQuestBarExperiment2 from "../../experiments/BountiesMobileQuestBarExperiment.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import QuestCustomAppStoreOverlayUtils from "../../utils/QuestCustomAppStoreOverlayUtils.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const ComponentActions = fn(1085).ComponentActions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      const cResult = bounty(sourceQuestContent[5]).c(23);
      bounty = bounty.bounty;
      sourceQuestContent = bounty.sourceQuestContent;
      const isActive = bounty.isActive;
      const playerRef = bounty.playerRef;
      let obj = bounty(sourceQuestContent[5]);
      const getQuestImpressionId = bounty(sourceQuestContent[6]).useGetQuestImpressionId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const BountiesMobileQuestBarExperiment = tmp(tmp2[3]).BountiesMobileQuestBarExperiment;
        let obj3 = { location: playerRef.VIDEO_MODAL_MOBILE };
        const config = BountiesMobileQuestBarExperiment.getConfig(obj3);
        const ctrVariant = config.ctrVariant;
        let tmp8 = null;
        if (config.enabled) {
          if (ctrVariant === tmp(tmp2[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
            tmp8 = ctrVariant;
          } else {
            tmp8 = null;
          }
        }
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      isActive.useRef(false);
      isActive.useRef(null);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _() {
          closure_6.current = false;
        };
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === bounty.id) {
        if (cResult[3] === isActive) {
          let tmp10 = cResult[4];
        }
        const effect = obj4.useEffect(tmp9, tmp10);
        if (cResult[5] === bounty.cta) {
          if (cResult[6] === isActive) {
            let tmp12 = cResult[7];
            let tmp13 = cResult[8];
          }
          const effect1 = obj4.useEffect(tmp12, tmp13);
          const _Symbol = Symbol;
          class E {
            constructor() {
              tmp = isActive;
              if (isActive) {
                tmp2 = closure_5;
                tmp3 = null;
                tmp = null != closure_5;
              }
              if (tmp) {
                tmp4 = closure_0;
                tmp5 = closure_1;
                obj = closure_0(closure_1[7]);
                tmp6 = bounty;
                result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
              }
              return;
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
                tmp = isActive;
                if (isActive) {
                  tmp2 = closure_5;
                  tmp3 = null;
                  tmp = null != closure_5;
                }
                if (tmp) {
                  tmp4 = closure_0;
                  tmp5 = closure_1;
                  obj = closure_0(closure_1[7]);
                  tmp6 = bounty;
                  result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                }
                return;
              }
            }
          }
          closure_8 = tmp16;
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function y() {
              return () => closure_1_8();
            };
            const items = [tmp16];
            class E {
              constructor() {
                tmp = isActive;
                if (isActive) {
                  tmp2 = closure_5;
                  tmp3 = null;
                  tmp = null != closure_5;
                }
                if (tmp) {
                  tmp4 = closure_0;
                  tmp5 = closure_1;
                  obj = closure_0(closure_1[7]);
                  tmp6 = bounty;
                  result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                }
                return;
              }
            }
            cResult[10] = fn3;
            cResult[11] = items;
            let tmp18 = items;
            let tmp17 = fn3;
          } else {
            tmp17 = cResult[10];
            tmp18 = cResult[11];
          }
          const effect2 = obj4.useEffect(tmp17, tmp18);
          if (cResult[12] === bounty.cta) {
            if (cResult[13] === bounty.id) {
              if (cResult[14] === getQuestImpressionId) {
                if (cResult[15] === playerRef) {
                  if (cResult[16] === sourceQuestContent) {
                    let tmp20 = cResult[17];
                  }
                  closure_9 = tmp20;
                  if (cResult[18] === isActive) {
                    if (cResult[19] === tmp20) {
                      let tmp21 = cResult[20];
                    }
                    if (cResult[21] !== tmp21) {
                      const obj5 = { handleVideoPausedForAppStore: tmp21 };
                      class E {
                        constructor() {
                          tmp = isActive;
                          if (isActive) {
                            tmp2 = closure_5;
                            tmp3 = null;
                            tmp = null != closure_5;
                          }
                          if (tmp) {
                            tmp4 = closure_0;
                            tmp5 = closure_1;
                            obj = closure_0(closure_1[7]);
                            tmp6 = bounty;
                            result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                          }
                          return;
                        }
                      }
                      cResult[22] = obj5;
                      let tmp23 = obj5;
                    } else {
                      tmp23 = cResult[22];
                    }
                    return tmp23;
                  }
                  class E {
                    constructor() {
                      tmp = isActive;
                      if (isActive) {
                        tmp2 = closure_5;
                        tmp3 = null;
                        tmp = null != closure_5;
                      }
                      if (tmp) {
                        tmp4 = closure_0;
                        tmp5 = closure_1;
                        obj = closure_0(closure_1[7]);
                        tmp6 = bounty;
                        result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
                      }
                      return;
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
              obj = {
                content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE,
                ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK,
                impressionId: closure_4(),
                sourceQuestContent,
              };
              tmp = bounty;
              tmp2 = sourceQuestContent;
              closure_0 = obj;
              obj2 = bounty(sourceQuestContent[11]);
              tmp3 = closure_0;
              directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(closure_0.cta);
              obj3 = bounty(sourceQuestContent[11]);
              url = directAppStoreLinkFromCta;
              if (directAppStoreLinkFromCta == null) {
                url = tmp3.cta.url;
              }
              obj1 = {
                link: url,
                directLink: directAppStoreLinkFromCta,
                inlineStoreParams: null,
                allowExternalOpen: false,
                trackOverlayEvent: null,
                trackOverlaySurfaceClick: null,
                appStoreOverlayCarouselScrollContext: null,
              };
              tmpResult = tmp(tmp2[11]);
              obj1.inlineStoreParams = tmpResult.getInlineStoreParamsFromCta(tmp3.cta);
              obj1.trackOverlayEvent = function trackOverlayEvent(
                event,
                inlineStoreAppId,
                overlayVariant,
                timeSpentMs,
                overlaySurface,
              ) {
                trackingCtx = AnalyticsActions;
                return trackingCtx.trackAdContentAppStoreOverlayEvent({
                  adContentId: bounty.id,
                  adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                  trackingCtx,
                  inlineStoreAppId,
                  overlayVariant,
                  event,
                  timeSpentMs,
                  overlaySurface,
                });
              };
              obj1.trackOverlaySurfaceClick = function trackOverlaySurfaceClick(overlaySurface) {
                trackingCtx = AnalyticsActions;
                return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({
                  adContentId: bounty.id,
                  adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                  trackingCtx,
                  overlaySurface,
                });
              };
              obj1.appStoreOverlayCarouselScrollContext = { adContentId: tmp3.id };
              openAppStoreOrUrlResult = obj3.openAppStoreOrUrl(obj1);
              return openAppStoreOrUrlResult.then((result) => {
                if (result) {
                  let current = ref.current;
                  if (current != null) {
                    current.pause();
                  }
                  closure_1_8();
                  function handleFinished() {
                    closure_1_8();
                    if (!tmp5) {
                      const current = ref.current;
                      if (current != null) {
                        current.play();
                      }
                    }
                    tmp5 =
                      closure_1_5 !==
                        obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.EVERY_PAUSE_APP_STORE_OVERLAY &&
                      closure_1_5 !==
                        obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY;
                  }
                  const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
                  const subscription = ComponentDispatch.subscribe(
                    getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED,
                    handleFinished,
                  );
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
            tmp = isActive;
            if (isActive) {
              tmp2 = closure_5;
              tmp3 = null;
              tmp = null != closure_5;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              obj = closure_0(closure_1[7]);
              tmp6 = bounty;
              result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
            }
            return;
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
    }
  : (bounty) => {
      bounty = bounty.bounty;
      const sourceQuestContent = bounty.sourceQuestContent;
      const isActive = bounty.isActive;
      const playerRef = bounty.playerRef;
      c5 = undefined;
      let callback;
      let callback1;
      const getQuestImpressionId = bounty(sourceQuestContent[6]).useGetQuestImpressionId();
      const BountiesMobileQuestBarExperiment = bounty(sourceQuestContent[3]).BountiesMobileQuestBarExperiment;
      const config = BountiesMobileQuestBarExperiment.getConfig({ location: playerRef.VIDEO_MODAL_MOBILE });
      const ctrVariant = config.ctrVariant;
      let tmp5 = null;
      if (config.enabled) {
        if (ctrVariant === tmp(tmp2[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
          tmp5 = ctrVariant;
        } else {
          tmp5 = null;
        }
      }
      c5 = tmp5;
      isActive.useRef(false);
      isActive.useRef(null);
      const items = [bounty.id, isActive];
      const effect = isActive.useEffect(() => {
        closure_6.current = false;
      }, items);
      const items1 = [bounty.cta, tmp5, isActive];
      const effect1 = isActive.useEffect(() => {
        let tmp = isActive;
        if (isActive) {
          tmp = null != c5;
        }
        if (tmp) {
          const result = QuestCustomAppStoreOverlayUtils.prefetchCustomAppStoreOverlayContent(bounty.cta);
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
        let trackingCtx = {
          content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE,
          ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK,
          impressionId: getQuestImpressionId(),
          sourceQuestContent,
        };
        const directAppStoreLinkFromCta = bounty(sourceQuestContent[11]).getDirectAppStoreLinkFromCta(trackingCtx.cta);
        const obj2 = bounty(sourceQuestContent[11]);
        let url = directAppStoreLinkFromCta;
        if (directAppStoreLinkFromCta == null) {
          url = tmp3.cta.url;
        }
        const obj4 = {
          link: url,
          directLink: directAppStoreLinkFromCta,
          inlineStoreParams: null,
          allowExternalOpen: false,
          trackOverlayEvent: null,
          trackOverlaySurfaceClick: null,
          appStoreOverlayCarouselScrollContext: null,
        };
        const obj3 = bounty(sourceQuestContent[11]);
        obj4.inlineStoreParams = bounty(sourceQuestContent[11]).getInlineStoreParamsFromCta(trackingCtx.cta);
        obj4.trackOverlayEvent = function trackOverlayEvent(
          event,
          inlineStoreAppId,
          overlayVariant,
          timeSpentMs,
          overlaySurface,
        ) {
          trackingCtx = AnalyticsActions;
          return trackingCtx.trackAdContentAppStoreOverlayEvent({
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            trackingCtx,
            inlineStoreAppId,
            overlayVariant,
            event,
            timeSpentMs,
            overlaySurface,
          });
        };
        obj4.trackOverlaySurfaceClick = function trackOverlaySurfaceClick(overlaySurface) {
          trackingCtx = AnalyticsActions;
          return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            trackingCtx,
            overlaySurface,
          });
        };
        obj4.appStoreOverlayCarouselScrollContext = { adContentId: trackingCtx.id };
        const tmpResult = bounty(sourceQuestContent[11]);
        return obj3.openAppStoreOrUrl(obj4).then((result) => {
          if (result) {
            let current = ref.current;
            if (current != null) {
              current.pause();
            }
            function handleFinished() {
              closure_1_8();
              if (!tmp5) {
                const current = ref.current;
                if (current != null) {
                  current.play();
                }
              }
              tmp5 =
                closure_1_5 !==
                  obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.EVERY_PAUSE_APP_STORE_OVERLAY &&
                closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY;
            }
            callback();
            const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
            const subscription = ComponentDispatch.subscribe(
              getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED,
              handleFinished,
            );
            ref2.current = handleFinished;
            return true;
          } else {
            return false;
          }
        });
      }, items3);
      let obj3 = { handleVideoPausedForAppStore: null };
      const items4 = [tmp5, isActive, callback1];
      obj3.handleVideoPausedForAppStore = isActive.useCallback((arg0) => {
        if (isActive) {
          if (arg0 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
            if (null != c5) {
              if (
                tmp4 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY
              ) {
                if (!ref.current) {
                  tmp8.current = true;
                  callback1().then((result) => {
                    if (!result) {
                      ref.current = false;
                    }
                  });
                  const promise = callback1();
                }
              } else {
                callback1();
              }
            }
          }
        }
      }, items4);
      return obj3;
    };
