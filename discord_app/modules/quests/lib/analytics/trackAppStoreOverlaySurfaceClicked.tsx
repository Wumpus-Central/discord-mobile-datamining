// === Module 12959: trackAppStoreOverlaySurfaceClicked ===

// Module 12959 (trackAppStoreOverlaySurfaceClicked)
import QuestTypes from "QuestTypes" /* 5975 */;
import AdCreativeType from "AdCreativeType" /* 5979 */;
import AnalyticsActions from "AnalyticsActions" /* 7406 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7415 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 9173 */;
import captureAdUserAction from "captureAdUserAction" /* 9174 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9177 */;
import size from "module_2" /* 2 */;

function captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, arg1, arg2) {
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
let result = size.fileFinishedImporting("modules/quests/lib/analytics/trackAppStoreOverlaySurfaceClicked.tsx");

export const trackAppStoreOverlaySurfaceClickedForQuest = function trackAppStoreOverlaySurfaceClickedForQuest(arg0) {
  ({ questId, trackingCtx, overlaySurface } = arg0);
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    let EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  if (tmpResult.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    ({ sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = trackingCtx);
    const obj2 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj, obj2);
  } else {
    const obj5 = { questId, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = trackingCtx);
    const result = AnalyticsActions.trackQuestContentClicked(obj5);
    const tmpResult2 = AnalyticsActions;
  }
  tmpResult = AdAnalyticsInterfaceExperiment;
};
export const trackAppStoreOverlaySurfaceClickedForAdContent = function trackAppStoreOverlaySurfaceClickedForAdContent(relatedQuestId) {
  ({ adContentId, adCreativeType, trackingCtx, overlaySurface } = relatedQuestId);
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    let EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  if (tmpResult.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    ({ sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = trackingCtx);
    const obj2 = { adCreativeType, adCreativeId: adContentId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj, obj2);
  } else {
    const obj5 = { adContentId, relatedQuestId: relatedQuestId.relatedQuestId, adCreativeType, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = trackingCtx);
    const result = AnalyticsActions.trackAdContentClicked(obj5);
    const tmpResult2 = AnalyticsActions;
  }
  tmpResult = AdAnalyticsInterfaceExperiment;
};