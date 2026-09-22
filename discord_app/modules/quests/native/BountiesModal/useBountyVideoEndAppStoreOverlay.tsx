// === Module 15301: useBountyVideoEndAppStoreOverlay ===

// Module 15301 (useBountyVideoEndAppStoreOverlay)
import timing from "timing" /* 4758 */;
import timingPresets from "timingPresets" /* 4761 */;
import QuestContent from "QuestContent" /* 5668 */;
import AnalyticsActions from "AnalyticsActions" /* 7957 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7967 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 11550 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 15302 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(5663).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export const BountyVideoEndAppStoreProvider = function BountyVideoEndAppStoreProvider(value) {
  return <redux.Provider value={value.value}>{value.children}</redux.Provider>;
};
export const useBountyVideoEndAppStoreContext = function useBountyVideoEndAppStoreContext() {
  return noop.useContext(closure_5);
};
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
export const useBountyVideoEndAppStoreOverlay = function useBountyVideoEndAppStoreOverlay(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  const getQuestImpressionId = bounty(sourceQuestContent[5]).useGetQuestImpressionId();
  const context = isActive.useContext(getQuestImpressionId);
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
    if (endMode === bounty(sourceQuestContent[6]).BountyVideoEndMode.APP_STORE_LOOP) {
      if (isActive) {
        if (!ref.current) {
          if (null != context) {
            tmp4.current = true;
            const current = ref2.current;
            const customAppStoreOverlayContent = bounty(sourceQuestContent[3]).fetchCustomAppStoreOverlayContent(current.cta);
            const tmpResult = bounty(sourceQuestContent[3]);
            customAppStoreOverlayContent.then((appId) => {
              if (current === ref.current) {
                if (null != appId) {
                  const videoEndPeekScale = context.videoEndPeekScale;
                  appId = appId.appId;
                  ({ videoEndPeekTargetScale, showVideoEndAppStoreOverlay } = context);
                  let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                  let result = videoEndPeekScale.set(timing.withTiming(videoEndPeekTargetScale, timingPresets.timingSlow));
                  const obj3 = {
                    metadata: appId,
                    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                        },
                    onOverlaySurfaceClick(dependencyMap) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface: dependencyMap });
                        },
                    onInstallPress(overlaySurface) {
                          trackingCtx = current(7957);
                          const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5670).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          const obj2 = { adContentId: appId.id, adCreativeType: current(5670).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                          const result1 = current(11756).setAppStoreOverlayOpen({
                            trackOverlayEvent(event, timeSpentMs) {
                              trackingCtx = bounty(sourceQuestContent[11]);
                              return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                            }
                          });
                        },
                    onCarouselScroll: null
                  };
                  const obj5 = { adContentId: bounty.id };
                  obj3.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj5, appId);
                  let result1 = showVideoEndAppStoreOverlay(obj3);
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
                  const videoEndPeekScale = context.videoEndPeekScale;
                  appId = appId.appId;
                  ({ videoEndPeekTargetScale, showVideoEndAppStoreOverlay } = context);
                  let trackingCtx = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
                  let result = videoEndPeekScale.set(timing.withTiming(videoEndPeekTargetScale, timingPresets.timingSlow));
                  const obj3 = {
                    metadata: appId,
                    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
                        },
                    onOverlaySurfaceClick(dependencyMap) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface: dependencyMap });
                        },
                    onInstallPress(overlaySurface) {
                          trackingCtx = current(7957);
                          const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: appId.id, adCreativeType: current(5670).AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
                          const obj2 = { adContentId: appId.id, adCreativeType: current(5670).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                          const result1 = current(11756).setAppStoreOverlayOpen({
                            trackOverlayEvent(event, timeSpentMs) {
                              trackingCtx = bounty(sourceQuestContent[11]);
                              return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface });
                            }
                          });
                        },
                    onCarouselScroll: null
                  };
                  const obj5 = { adContentId: bounty.id };
                  obj3.onCarouselScroll = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(obj5, appId);
                  let result1 = showVideoEndAppStoreOverlay(obj3);
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
};