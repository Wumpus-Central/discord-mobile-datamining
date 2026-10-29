// discord_app/modules/quests/lib/analytics/trackAppStoreOverlaySurfaceClicked.tsx
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "AnalyticsActions.tsx";
import AnalyticsTypes from "AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function captureAppStoreOverlaySurfaceClick(overlaySurface, arg1, arg2) {
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    const obj = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK,
    };
    const merged = Object.assign(arg2);
    const merged1 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj);
    const tmpResult = captureAdUserAction;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS,
    };
    const merged2 = Object.assign(arg2);
    const merged3 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult3 = captureAdUserAction;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    const obj3 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND,
    };
    const merged4 = Object.assign(arg2);
    const merged5 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj3);
    const tmpResult4 = captureAdUserAction;
  }
}
const result = size.fileFinishedImporting("modules/quests/lib/analytics/trackAppStoreOverlaySurfaceClicked.tsx");

export function trackAppStoreOverlaySurfaceClickedForQuest(trackingCtx) {
  trackingCtx = trackingCtx.trackingCtx;
  ({ questId, overlaySurface } = trackingCtx);
  const obj = {
    surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
    sourceQuestContent: trackingCtx.sourceQuestContent,
    questContentPosition: trackingCtx.position,
    impressionId: trackingCtx.impressionId,
  };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, {
    adCreativeType: AdCreativeType.AdCreativeType.QUEST,
    adCreativeId: questId,
  });
}
export function trackAppStoreOverlaySurfaceClickedForAdContent(trackingCtx) {
  trackingCtx = trackingCtx.trackingCtx;
  ({ adContentId, adCreativeType, overlaySurface } = trackingCtx);
  captureAppStoreOverlaySurfaceClick(
    overlaySurface,
    {
      surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
      sourceQuestContent: trackingCtx.sourceQuestContent,
      questContentPosition: trackingCtx.position,
      impressionId: trackingCtx.impressionId,
    },
    { adCreativeType, adCreativeId: adContentId },
  );
}
