// === Module 15023: useBountyPauseAppStoreSheet ===

// Module 15023 (useBountyPauseAppStoreSheet)
import closure_2 from "noop" /* 19 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5444 */;
import { ComponentActions } from "ME" /* 1074 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = function useBountyPauseAppStoreSheet(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let getQuestImpressionId;
  closure_5 = undefined;
  let callback;
  let obj = bounty(sourceQuestContent[4]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [bounty.cta, isActive];
  const effect = isActive.useEffect(() => {
    let tmp = isActive;
    if (isActive) {
      const CustomAppStoreSqueezeBackExperiment = bounty(sourceQuestContent[3]).CustomAppStoreSqueezeBackExperiment;
      const obj = { location: null };
      obj[0] = playerRef.VIDEO_MODAL_MOBILE;
      const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj);
      tmp = config.enabled && tmp7 === bounty(sourceQuestContent[3]).BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
      const tmp2 = bounty;
      const tmp3 = sourceQuestContent;
      const tmp6 = config.enabled && tmp7 === bounty(sourceQuestContent[3]).BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
    }
    if (tmp) {
      const result = bounty(sourceQuestContent[5]).prefetchCustomAppStoreOverlayContent(bounty.cta);
      const obj2 = bounty(sourceQuestContent[5]);
    }
  }, items);
  closure_5 = isActive.useRef(null);
  callback = isActive.useCallback(() => {
    if (null != ref.current) {
      const ComponentDispatch = bounty(sourceQuestContent[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, tmp.current);
      tmp.current = null;
    }
  }, []);
  const items1 = [bounty.id, callback];
  const effect1 = isActive.useEffect(() => () => callback(), items1);
  obj = {
    onPausedForAppStore: isActive.useCallback((arg0) => {
      if (isActive) {
        if (arg0 === bounty(sourceQuestContent[7]).PlaybackTriggerSource.USER_INTERACTION) {
          const CustomAppStoreSqueezeBackExperiment = tmp2(tmp3[3]).CustomAppStoreSqueezeBackExperiment;
          let obj = { location: null };
          obj[0] = playerRef.VIDEO_MODAL_MOBILE;
          const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj);
          if (tmp4) {
            obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
            obj[0] = tmp2(tmp3[8]).QuestContent.VIDEO_MODAL_MOBILE;
            obj[1] = tmp2(tmp3[9]).QuestContentCTA.OPEN_GAME_LINK;
            obj[2] = getQuestImpressionId();
            obj[3] = sourceQuestContent;
            let tmp2Result = tmp2(tmp3[10]);
            const directAppStoreLinkFromCta = tmp2Result.getDirectAppStoreLinkFromCta(obj.cta);
            tmp2Result = tmp2(tmp3[10]);
            let url = directAppStoreLinkFromCta;
            if (directAppStoreLinkFromCta == null) {
              url = tmp7.cta.url;
            }
            obj = { link: null, directLink: null, inlineStoreParams: null, allowExternalOpen: false, trackOverlayEvent: null };
            obj[0] = url;
            obj[1] = directAppStoreLinkFromCta;
            obj[2] = tmp2(tmp3[10]).getInlineStoreParamsFromCta(obj.cta);
            obj[4] = function trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
              obj = bounty(sourceQuestContent[11]);
              obj = { adContentId: obj.id, adCreativeType: bounty(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx: obj, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
              return obj.trackAdContentAppStoreOverlayEvent(obj);
            };
            const tmp2Result1 = tmp2(tmp3[10]);
            tmp2Result.openAppStoreOrUrl(obj).then((arg0) => {
              if (arg0) {
                let current = ref.current;
                if (current != null) {
                  current.pause();
                }
                function handleFinished() {
                  callback();
                  const current = ref.current;
                  if (current != null) {
                    current.play();
                  }
                }
                callback();
                const ComponentDispatch = obj(closure_1_1[6]).ComponentDispatch;
                const subscription = ComponentDispatch.subscribe(closure_1_4.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
                closure_5.current = handleFinished;
              }
            });
            const openAppStoreOrUrlResult = tmp2Result.openAppStoreOrUrl(obj);
          }
          tmp4 = config.enabled && tmp13 === tmp2(tmp3[3]).BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
        }
      }
    }, items2)
  };
  items2 = [bounty, getQuestImpressionId, isActive, playerRef, sourceQuestContent, callback];
  return obj;
};