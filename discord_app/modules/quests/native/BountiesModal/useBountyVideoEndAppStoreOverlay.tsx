// === Module 15017: useBountyVideoEndAppStoreOverlay ===

// Module 15017 (useBountyVideoEndAppStoreOverlay)
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import QuestContent from "QuestContent" /* 5449 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 15018 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export const BountyVideoEndAppStoreProvider = function BountyVideoEndAppStoreProvider(value) {
  return <redux.Provider value={arg0.value}>{arg0.children}</redux.Provider>;
};
export const useBountyVideoEndAppStoreContext = function useBountyVideoEndAppStoreContext() {
  return noop.useContext(closure_5);
};
export const canUseBountyVideoEndAppStoreOverlay = function canUseBountyVideoEndAppStoreOverlay(bounty, scrollAffordanceVariant) {
  if ("auto" !== scrollAffordanceVariant) {
    if (obj2.canOpenCustomAppStoreOverlayFromCta(bounty.cta)) {
      const CustomAppStoreSqueezeBackExperiment = tmp6(11489).CustomAppStoreSqueezeBackExperiment;
      const obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
      const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj);
      return config.enabled && tmp4 === tmp6(11489).BountiesCtrExperiment1Variant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
    }
    obj2 = QuestCustomAppStoreOverlayUtils;
  }
  return false;
};
export const useBountyVideoEndAppStoreOverlay = function useBountyVideoEndAppStoreOverlay(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  let obj = bounty(sourceQuestContent[5]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
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
  obj = { onVideoEndForAppStore: null };
  const items2 = [context, bounty, endMode, getQuestImpressionId, isActive, onOverlayUnavailable, sourceQuestContent];
  obj.onVideoEndForAppStore = isActive.useCallback(() => {
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
                  trackingCtx = {
                    metadata: appId,
                    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          trackingCtx = { adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                          return trackingCtx.trackAdContentAppStoreOverlayEvent(trackingCtx);
                        },
                    onInstallPress(overlaySurface) {
                          current(sourceQuestContent[13]);
                          const obj = {
                            trackOverlayEvent(event, timeSpentMs) {
                              trackingCtx = bounty(sourceQuestContent[11]);
                              trackingCtx = { adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                              return trackingCtx.trackAdContentAppStoreOverlayEvent(trackingCtx);
                            }
                          };
                          const result = obj.setAppStoreOverlayOpen(obj);
                        }
                  };
                  const result1 = showVideoEndAppStoreOverlay(trackingCtx);
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
                  trackingCtx = {
                    metadata: appId,
                    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                          trackingCtx = bounty(sourceQuestContent[11]);
                          trackingCtx = { adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                          return trackingCtx.trackAdContentAppStoreOverlayEvent(trackingCtx);
                        },
                    onInstallPress(overlaySurface) {
                          current(sourceQuestContent[13]);
                          const obj = {
                            trackOverlayEvent(event, timeSpentMs) {
                              trackingCtx = bounty(sourceQuestContent[11]);
                              trackingCtx = { adContentId: current.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: bounty(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                              return trackingCtx.trackAdContentAppStoreOverlayEvent(trackingCtx);
                            }
                          };
                          const result = obj.setAppStoreOverlayOpen(obj);
                        }
                  };
                  const result1 = showVideoEndAppStoreOverlay(trackingCtx);
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
  return obj;
};