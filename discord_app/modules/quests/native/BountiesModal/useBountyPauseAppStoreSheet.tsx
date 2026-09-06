// discord_app/modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import apexExperiment from "../../experiments/index.tsx";
import QuestCustomAppStoreOverlayUtils from "../../utils/QuestCustomAppStoreOverlayUtils.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const ComponentActions = fn(1074).ComponentActions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = function useBountyPauseAppStoreSheet(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let obj = bounty(sourceQuestContent[4]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [bounty.cta, isActive];
  const effect = isActive.useEffect(() => {
    let tmp = isActive;
    if (isActive) {
      const CustomAppStoreSqueezeBackExperiment = apexExperiment.CustomAppStoreSqueezeBackExperiment;
      const obj = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
      const config = CustomAppStoreSqueezeBackExperiment.getConfig(obj);
      tmp = config.enabled && tmp7 === apexExperiment.BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
      const tmp6 = config.enabled && tmp7 === apexExperiment.BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
    }
    if (tmp) {
      const result = QuestCustomAppStoreOverlayUtils.prefetchCustomAppStoreOverlayContent(bounty.cta);
    }
  }, items);
  isActive.useRef(null);
  const callback = isActive.useCallback(() => {
    if (null != ref.current) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, tmp.current);
      tmp.current = null;
    }
  }, []);
  const items1 = [bounty.id, callback];
  const effect1 = isActive.useEffect(() => () => callback(), items1);
  obj = { onPausedForAppStore: null };
  const items2 = [bounty, getQuestImpressionId, isActive, playerRef, sourceQuestContent, callback];
  obj.onPausedForAppStore = isActive.useCallback((arg0) => {
    if (isActive) {
      if (arg0 === bounty(sourceQuestContent[7]).PlaybackTriggerSource.USER_INTERACTION) {
        const CustomAppStoreSqueezeBackExperiment = tmp2(tmp3[3]).CustomAppStoreSqueezeBackExperiment;
        let trackingCtx = { location: playerRef.VIDEO_MODAL_MOBILE };
        const config = CustomAppStoreSqueezeBackExperiment.getConfig(trackingCtx);
        if (tmp4) {
          trackingCtx = {
            content: tmp2(tmp3[8]).QuestContent.VIDEO_MODAL_MOBILE,
            ctaContent: tmp2(tmp3[9]).QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent,
          };
          let tmp2Result = tmp2(tmp3[10]);
          const directAppStoreLinkFromCta = tmp2Result.getDirectAppStoreLinkFromCta(trackingCtx.cta);
          tmp2Result = tmp2(tmp3[10]);
          let url = directAppStoreLinkFromCta;
          if (directAppStoreLinkFromCta == null) {
            url = tmp7.cta.url;
          }
          trackingCtx = {
            link: url,
            directLink: directAppStoreLinkFromCta,
            inlineStoreParams: null,
            allowExternalOpen: false,
            trackOverlayEvent: null,
          };
          trackingCtx.inlineStoreParams = tmp2(tmp3[10]).getInlineStoreParamsFromCta(trackingCtx.cta);
          trackingCtx.trackOverlayEvent = function trackOverlayEvent(
            event,
            inlineStoreAppId,
            overlayVariant,
            timeSpentMs,
            overlaySurface,
          ) {
            trackingCtx = AnalyticsActions;
            trackingCtx = {
              adContentId: bounty.id,
              adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
              trackingCtx,
              inlineStoreAppId,
              overlayVariant,
              event,
              timeSpentMs,
              overlaySurface,
            };
            return trackingCtx.trackAdContentAppStoreOverlayEvent(trackingCtx);
          };
          const tmp2Result1 = tmp2(tmp3[10]);
          tmp2Result.openAppStoreOrUrl(trackingCtx).then((result) => {
            if (result) {
              let current = ref.current;
              if (current != null) {
                current.pause();
              }
              function handleFinished() {
                closure_1_6();
                const current = ref.current;
                if (current != null) {
                  current.play();
                }
              }
              callback();
              const ComponentDispatch = bounty(sourceQuestContent[6]).ComponentDispatch;
              const subscription = ComponentDispatch.subscribe(
                getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED,
                handleFinished,
              );
              closure_1_5.current = handleFinished;
            }
          });
          const openAppStoreOrUrlResult = tmp2Result.openAppStoreOrUrl(trackingCtx);
        }
        tmp4 = config.enabled && tmp13 === tmp2(tmp3[3]).BountiesCtrExperiment1Variant.OPEN_APP_SHEET_ON_PAUSE;
      }
    }
  }, items2);
  return obj;
};
