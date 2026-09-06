// discord_app/modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx
import fetchCustomAppStoreOverlayContent from "../../utils/QuestCustomAppStoreOverlayUtils.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { QuestsExperimentLocations } from "../../QuestConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let context = importAllResult.createContext(null);
let result = require("set").fileFinishedImporting(
  "modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx",
);

export const BountyVideoEndAppStoreProvider = function BountyVideoEndAppStoreProvider(value) {
  return <redux.Provider value={arg0.value}>{arg0.children}</redux.Provider>;
};
export const useBountyVideoEndAppStoreContext = function useBountyVideoEndAppStoreContext() {
  return importAllResult.useContext(closure_5);
};
export const canUseBountyVideoEndAppStoreOverlay = function canUseBountyVideoEndAppStoreOverlay(
  bounty,
  scrollAffordanceVariant,
) {
  if ("auto" !== scrollAffordanceVariant) {
    if (obj2.canOpenCustomAppStoreOverlayFromCta(bounty.cta)) {
      const CustomAppStoreSqueezeBackExperiment = tmp6(11489).CustomAppStoreSqueezeBackExperiment;
      const obj = { location: null };
      obj[0] = QuestsExperimentLocations.VIDEO_MODAL_MOBILE;
      const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj);
      return config.enabled && tmp4 === tmp6(11489).BountiesCtrExperiment1Variant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
    }
    obj2 = fetchCustomAppStoreOverlayContent;
  }
  return false;
};
export const useBountyVideoEndAppStoreOverlay = function useBountyVideoEndAppStoreOverlay(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  let getQuestImpressionId;
  let context;
  closure_7 = undefined;
  closure_8 = undefined;
  let obj = bounty(sourceQuestContent[5]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  context = isActive.useContext(getQuestImpressionId);
  closure_7 = isActive.useRef(false);
  closure_8 = isActive.useRef(0);
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
  obj = {
    onVideoEndForAppStore: isActive.useCallback(() => {
      if (endMode === bounty(sourceQuestContent[6]).BountyVideoEndMode.APP_STORE_LOOP) {
        if (isActive) {
          if (!ref.current) {
            if (null != context) {
              tmp4.current = true;
              const current = ref2.current;
              const customAppStoreOverlayContent = bounty(sourceQuestContent[3]).fetchCustomAppStoreOverlayContent(
                current.cta,
              );
              const tmpResult = bounty(sourceQuestContent[3]);
              customAppStoreOverlayContent
                .then((appId) => {
                  if (appId === closure_1_8.current) {
                    if (null != appId) {
                      const videoEndPeekScale = closure_1_6.videoEndPeekScale;
                      appId = appId.appId;
                      ({ videoEndPeekTargetScale, showVideoEndAppStoreOverlay } = closure_1_6);
                      let obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
                      obj[0] = bounty(sourceQuestContent[7]).QuestContent.VIDEO_MODAL_END_CARD;
                      obj[1] = bounty(sourceQuestContent[8]).QuestContentCTA.OPEN_GAME_LINK;
                      obj[2] = closure_1_5();
                      obj[3] = closure_1_1;
                      let result = videoEndPeekScale.set(
                        bounty(sourceQuestContent[9]).withTiming(
                          videoEndPeekTargetScale,
                          bounty(sourceQuestContent[10]).timingSlow,
                        ),
                      );
                      obj = { metadata: null, trackOverlayEvent: null, onInstallPress: null };
                      obj[0] = appId;
                      obj[1] = function trackOverlayEvent(
                        event,
                        inlineStoreAppId,
                        overlayVariant,
                        timeSpentMs,
                        overlaySurface,
                      ) {
                        obj = current(closure_2_1[11]);
                        obj = {
                          adContentId: appId.id,
                          adCreativeType: current(closure_2_1[12]).AdCreativeType.BOUNTY,
                          trackingCtx: obj,
                          inlineStoreAppId,
                          overlayVariant,
                          event,
                          timeSpentMs,
                          overlaySurface,
                        };
                        return obj.trackAdContentAppStoreOverlayEvent(obj);
                      };
                      obj[2] = function onInstallPress(arg0) {
                        closure_0 = arg0;
                        obj = current(closure_2_1[13]);
                        obj = {
                          trackOverlayEvent(event, timeSpentMs) {
                            obj = current(closure_3_1[11]);
                            obj = {
                              adContentId: appId.id,
                              adCreativeType: current(closure_3_1[12]).AdCreativeType.BOUNTY,
                              trackingCtx: closure_1_1,
                              inlineStoreAppId: closure_0,
                              overlayVariant: current(closure_3_1[11]).AppStoreOverlayVariant.CUSTOM,
                              event,
                              timeSpentMs,
                              overlaySurface: closure_0,
                            };
                            return obj.trackAdContentAppStoreOverlayEvent(obj);
                          },
                        };
                        const result = obj.setAppStoreOverlayOpen(obj);
                      };
                      const result1 = showVideoEndAppStoreOverlay(obj);
                      const obj2 = bounty(sourceQuestContent[9]);
                    } else {
                      closure_1_4();
                    }
                  }
                })
                .catch(() => {
                  if (current === closure_1_8.current) {
                    closure_1_4();
                  }
                });
              const nextPromise = customAppStoreOverlayContent.then((appId) => {
                if (appId === closure_1_8.current) {
                  if (null != appId) {
                    const videoEndPeekScale = closure_1_6.videoEndPeekScale;
                    appId = appId.appId;
                    ({ videoEndPeekTargetScale, showVideoEndAppStoreOverlay } = closure_1_6);
                    let obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
                    obj[0] = bounty(sourceQuestContent[7]).QuestContent.VIDEO_MODAL_END_CARD;
                    obj[1] = bounty(sourceQuestContent[8]).QuestContentCTA.OPEN_GAME_LINK;
                    obj[2] = closure_1_5();
                    obj[3] = closure_1_1;
                    let result = videoEndPeekScale.set(
                      bounty(sourceQuestContent[9]).withTiming(
                        videoEndPeekTargetScale,
                        bounty(sourceQuestContent[10]).timingSlow,
                      ),
                    );
                    obj = { metadata: null, trackOverlayEvent: null, onInstallPress: null };
                    obj[0] = appId;
                    obj[1] = function trackOverlayEvent(
                      event,
                      inlineStoreAppId,
                      overlayVariant,
                      timeSpentMs,
                      overlaySurface,
                    ) {
                      obj = current(closure_2_1[11]);
                      obj = {
                        adContentId: appId.id,
                        adCreativeType: current(closure_2_1[12]).AdCreativeType.BOUNTY,
                        trackingCtx: obj,
                        inlineStoreAppId,
                        overlayVariant,
                        event,
                        timeSpentMs,
                        overlaySurface,
                      };
                      return obj.trackAdContentAppStoreOverlayEvent(obj);
                    };
                    obj[2] = function onInstallPress(arg0) {
                      closure_0 = arg0;
                      obj = current(closure_2_1[13]);
                      obj = {
                        trackOverlayEvent(event, timeSpentMs) {
                          obj = current(closure_3_1[11]);
                          obj = {
                            adContentId: appId.id,
                            adCreativeType: current(closure_3_1[12]).AdCreativeType.BOUNTY,
                            trackingCtx: closure_1_1,
                            inlineStoreAppId: closure_0,
                            overlayVariant: current(closure_3_1[11]).AppStoreOverlayVariant.CUSTOM,
                            event,
                            timeSpentMs,
                            overlaySurface: closure_0,
                          };
                          return obj.trackAdContentAppStoreOverlayEvent(obj);
                        },
                      };
                      const result = obj.setAppStoreOverlayOpen(obj);
                    };
                    const result1 = showVideoEndAppStoreOverlay(obj);
                    const obj2 = bounty(sourceQuestContent[9]);
                  } else {
                    closure_1_4();
                  }
                }
              });
            }
          }
        }
      }
    }, items2),
  };
  items2 = [context, bounty, endMode, getQuestImpressionId, isActive, onOverlayUnavailable, sourceQuestContent];
  return obj;
};
