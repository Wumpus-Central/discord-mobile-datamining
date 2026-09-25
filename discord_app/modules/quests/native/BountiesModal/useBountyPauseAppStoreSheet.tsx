// discord_app/modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import BountiesMobileQuestBarExperiment2 from "../../experiments/BountiesMobileQuestBarExperiment.tsx";
import AdsVideoTypes from "../AdsVideoTypes.tsx";
import QuestCustomAppStoreOverlayUtils from "../../utils/QuestCustomAppStoreOverlayUtils.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestsExperimentLocations = fn(5751).QuestsExperimentLocations;
const ComponentActions = fn(1074).ComponentActions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = function useBountyPauseAppStoreSheet(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  c5 = undefined;
  let callback;
  let callback1;
  const getQuestImpressionId = bounty(sourceQuestContent[4]).useGetQuestImpressionId();
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
  const items3 = [bounty, getQuestImpressionId, playerRef, sourceQuestContent, callback];
  callback1 = isActive.useCallback(() => {
    let trackingCtx = {
      content: bounty(sourceQuestContent[7]).QuestContent.VIDEO_MODAL_MOBILE,
      ctaContent: bounty(sourceQuestContent[8]).QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    };
    const directAppStoreLinkFromCta = bounty(sourceQuestContent[9]).getDirectAppStoreLinkFromCta(trackingCtx.cta);
    const obj2 = bounty(sourceQuestContent[9]);
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
    const obj3 = bounty(sourceQuestContent[9]);
    obj4.inlineStoreParams = bounty(sourceQuestContent[9]).getInlineStoreParamsFromCta(trackingCtx.cta);
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
    const tmpResult = bounty(sourceQuestContent[9]);
    return obj3.openAppStoreOrUrl(obj4).then((result) => {
      if (result) {
        const current = ref.current;
        if (current != null) {
          current.pause();
        }
        function handleFinished() {
          closure_1_8();
        }
        callback();
        const ComponentDispatch = bounty(sourceQuestContent[6]).ComponentDispatch;
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
          if (tmp4 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
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
