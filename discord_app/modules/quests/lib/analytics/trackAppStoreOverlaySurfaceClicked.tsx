// === Module 14627: trackAppStoreOverlaySurfaceClicked ===

// Module 14627 (trackAppStoreOverlaySurfaceClicked)
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import AnalyticsActions from "AnalyticsActions" /* 7855 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import captureAdUserAction from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import size from "module_2" /* 2 */;

function captureAppStoreOverlaySurfaceClick(overlaySurface, arg1, arg2) {
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK };
    const merged = Object.assign(arg2);
    const merged1 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj);
    const tmpResult = captureAdUserAction;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS };
    const merged2 = Object.assign(arg2);
    const merged3 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult3 = captureAdUserAction;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND };
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
  const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId });
}
export function trackAppStoreOverlaySurfaceClickedForAdContent(trackingCtx) {
  trackingCtx = trackingCtx.trackingCtx;
  ({ adContentId, adCreativeType, overlaySurface } = trackingCtx);
  captureAppStoreOverlaySurfaceClick(overlaySurface, { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId }, { adCreativeType, adCreativeId: adContentId });
}