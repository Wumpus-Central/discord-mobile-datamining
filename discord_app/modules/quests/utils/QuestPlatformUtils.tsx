// === Module 10689: supportedConsoles ===

// Module 10689 (supportedConsoles)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;
import set2 from "set" /* 6723 */;
import openUserSettings from "openUserSettings" /* 7360 */;
import AdCreativeType from "AdCreativeType" /* 7469 */;
import trackQuestEvent from "trackQuestEvent" /* 7470 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7476 */;
import apexExperiment from "apexExperiment" /* 9502 */;
import emitClickEventWithCreative from "emitClickEventWithCreative" /* 9503 */;
import AdUserActionType from "AdUserActionType" /* 9507 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9779 */;
import ME from "ME" /* 676 */;

function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    if (set2.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let arr = items.push(constants2.XBOX);
    } else if (set2.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
      arr = items.push(constants2.PLAYSTATION);
    }
    continue;
  }
  return items;
}
function getDirectAppStoreLinkFromCta(cta) {
  if (obj.isIOS()) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    if (null != iosAppId) {
      iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        let combined = iosAppId2;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "id" + iosAppId2;
      }
      const _HermesInternal2 = HermesInternal;
      let combined1 = "https://apps.apple.com/app/" + combined;
    }
    return combined1;
  } else {
    let tmpResult = obj1322;
  }
  tmpResult = obj1322;
  if (tmpResult.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    let combined2 = null;
    if (null != androidAppId) {
      const _HermesInternal3 = HermesInternal;
      combined2 = "https://play.google.com/store/apps/details?id=" + cta.android.androidAppId;
    }
  } else {
    obj1322;
    combined2 = null;
  }
  combined1 = combined2;
  obj = obj1322;
}
function getInlineStoreParamsFromCta(cta) {
  let obj = obj1322;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      obj = { url: null, os: "android", storeAppId: null, appId: null };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "https://play.google.com/d?id=" + cta.android.androidAppId;
      obj[2] = cta.android.androidAppId;
      return obj;
    }
  }
  if (tmpResult.isIOS()) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    if (null != iosAppId) {
      iosAppId = cta.ios.iosAppId;
      const iosAppId1 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        let substr = iosAppId1.slice(2);
      } else {
        substr = iosAppId1;
      }
      obj = { url: null, os: "ios", storeAppId: null, appId: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "https://apps.apple.com/app/id" + substr;
      obj[2] = substr;
      const _parseInt = parseInt;
      obj[3] = parseInt(substr, 10);
      return obj;
    }
  }
  return null;
}
const QuestTaskPlatform = QuestsExperimentLocations.QuestTaskPlatform;
({ AnalyticEvents: c4, ComponentActions: c5, PlatformTypes: closure_6, UserSettingsSections: error } = ME);
let result = obj132.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(closure_0) {
  let obj = { quest: closure_0 };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    let tmpResult = getApplicationIdsByTaskTypes;
    obj = { quest: null };
    obj[0] = closure_0;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj);
  }
  if (!hasPlayOnDesktopTaskResult) {
    tmpResult = getApplicationIdsByTaskTypes;
    hasPlayOnDesktopTaskResult = tmpResult.hasAchievementInGameTask(closure_0);
  }
  const items = [];
  const tmpResult1 = getApplicationIdsByTaskTypes;
  if (hasPlayOnDesktopTaskResult) {
    items.push(QuestTaskPlatform.DESKTOP);
  }
  if (hasSomeConsoleTasksResult) {
    items.push(QuestTaskPlatform.CONSOLE);
  }
  return items;
};
export { supportedConsoles };
export const isQuestSupportedOnWeb = function isQuestSupportedOnWeb(userStatus) {
  let hasWatchVideoTasksResult = getApplicationIdsByTaskTypes.hasWatchVideoTasks(userStatus);
  if (!hasWatchVideoTasksResult) {
    hasWatchVideoTasksResult = obj2.hasPlayActivityTask(userStatus);
  }
  return hasWatchVideoTasksResult;
};
export const PlayQuestPlatform = { DESKTOP: "desktop", XBOX: "xbox", PLAYSTATION: "playstation" };
export const getPlatformTypeForHintMessage = function getPlatformTypeForHintMessage(connected_account_type) {
  if ("xbox" === connected_account_type.connected_account_type) {
    let PLAYSTATION = constants2.XBOX;
  } else {
    PLAYSTATION = constants2.PLAYSTATION;
  }
  return PLAYSTATION;
};
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(platformType, ctaContent) {
  const quest = platformType.quest;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    let tmpResult = emitClickEventWithCreative;
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
    obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
    obj[1] = AdCreativeType.AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = trackQuestEvent;
    obj = { questId: null, questContent: null, sourceQuestContent: null, questContentCTA: null, impressionId: null };
    obj[0] = quest.id;
    ({ content: obj3[1], sourceQuestContent: obj3[2], ctaContent: obj3[3], impressionId: obj3[4] } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  authorizeConnectionDefault({ platformType: platformType.platformType, location: ctaContent.ctaContent });
};
export const getExpiredCredentialsHintMessage = function getExpiredCredentialsHintMessage(connected_account_type) {
  if ("xbox" === connected_account_type.connected_account_type) {
    let PLAYSTATION = constants2.XBOX;
    let tmp = constants2;
  } else {
    tmp = constants2;
    PLAYSTATION = constants2.PLAYSTATION;
  }
  if (PLAYSTATION === tmp.XBOX) {
    let iDiwby = getSystemLocale.t["mytEv+"];
  } else {
    iDiwby = getSystemLocale.t.iDiwby;
  }
  return iDiwby;
};
export const openGameLinkDirectly = function openGameLinkDirectly(quest, arg1) {
  let _require = quest;
  closure_1 = arg1;
  let obj = _require(10496);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  const ctaLink = obj.getCtaLink(quest.config);
  if (null != ctaConfig) {
    obj = { url: null, android: null, ios: null };
    let tmpResult = tmp(10496);
    obj[0] = tmpResult.getCtaLink(quest.config);
    ({ android: obj2[1], ios: obj2[2] } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj);
  }
  let tmp6 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
  }
  let tmp7 = tmp6;
  if ((function urlHasClickId(directAppStoreLinkFromCta) {
    try {
      const _URL = URL;
      const uRL = new URL(directAppStoreLinkFromCta);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  })(tmp6)) {
    tmpResult = tmp(514);
    const v4Result = tmpResult.v4();
    tmp7 = (function setClickIdOnUrl(directAppStoreLinkFromCta, v4Result) {
      try {
        const _URL = URL;
        const str = new URL(directAppStoreLinkFromCta);
        const searchParams = str.searchParams;
        const result = searchParams.set("dclid", v4Result);
        return str.toString();
      } catch (err) {
        return tmp;
      }
    })(tmp6, v4Result);
  }
  if (tmpResult1.shouldMigrateToAdAnalyticsInterface(_require(9502).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
    obj[0] = tmp(9507).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = tmp(7469).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj9[3], content: obj9[4], sourceQuestContent: obj9[5], position: obj9[6], impressionId: obj9[7] } = arg1);
    obj[8] = tmp8;
    tmp(9503).captureAdUserAction(obj);
    const tmpResult2 = tmp(9503);
  } else {
    obj1 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null, clickId: null };
    obj1[0] = quest.id;
    ({ content: obj7[1], ctaContent: obj7[2], position: obj7[3], impressionId: obj7[4], sourceQuestContent: obj7[5] } = arg1);
    obj1[6] = tmp8;
    let result = tmp(7470).trackQuestContentClicked(obj1);
    const tmpResult3 = tmp(7470);
  }
  const ComponentDispatch = tmp(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig2 = quest.config.ctaConfig;
  let tmp13 = null;
  if (null != ctaConfig2) {
    const obj2 = { url: null, android: null, ios: null };
    obj2[0] = tmp(10496).getCtaLink(quest.config);
    ({ android: obj10[1], ios: obj10[2] } = ctaConfig2);
    tmp13 = getInlineStoreParamsFromCta(obj2);
    const tmpResult4 = tmp(10496);
  }
  _require = tmp7;
  closure_1 = tmp4;
  dependencyMap = tmp13;
  function trackOverlayEvent(event, arg1, time_spent_ms) {
    return callback(table[8]).trackAppStoreOverlayEvent(callback, closure_1, arg1, event, time_spent_ms);
  }
  function openNativeAppStoreOrUrl() {
    const AppStoreBottomSheetOverlayFeatureGate = url(10691).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != callback) {
        if (null != dependencyMap) {
          closure_0 = str;
          ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = url(10690));
          str = undefined;
          if (str != null) {
            str = str.toString();
          }
          const result = url(4340).openPlayStoreInlineInstall(dependencyMap.url, str, (arg0) => {
            callback2();
            callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
            const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const tmpResult = url(10690);
          result.then((result) => {
            if (result) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          }).catch((error) => {
            callback2();
            callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const nextPromise = result.then((result) => {
            if (result) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          });
        }
      }
    }
    callback(4084)(closure_0);
  }
  const CustomAppStoreOverlayExperiment = tmp(10691).CustomAppStoreOverlayExperiment;
  if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp13) {
      constants = tmp(10695).openAppStoreOverlayBottomSheet;
      const appStoreOverlayContent = tmp(10693).getAppStoreOverlayContent(tmp13, tmp7);
      appStoreOverlayContent.then((result) => {
        if (null != result) {
          callback2(result, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      }).catch((error) => {
        openNativeAppStoreOrUrl();
      });
      const nextPromise = appStoreOverlayContent.then((result) => {
        if (null != result) {
          callback2(result, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      });
    }
  }
  const result1 = openNativeAppStoreOrUrl();
  tmpResult1 = _require(9502);
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, arg1) {
  adContentId = adContentId.adContentId;
  const adCreativeType = adContentId.adCreativeType;
  closure_1 = adCreativeType;
  const cta = adContentId.cta;
  dependencyMap = arg1;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = url(9502);
  if (obj.shouldMigrateToAdAnalyticsInterface(url(9502).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(9503);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp2(9507).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = adCreativeType;
    obj[2] = adContentId;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = arg1);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(7470);
    obj = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    obj[0] = adContentId;
    obj[1] = adCreativeType;
    ({ content: obj3[2], ctaContent: obj3[3], position: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    let result = tmp2Result.trackAdContentClicked(obj);
  }
  let ComponentDispatch = tmp2(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const tmp7 = getInlineStoreParamsFromCta(cta);
  closure_1 = tmp;
  dependencyMap = tmp7;
  function trackOverlayEvent(event, arg1, time_spent_ms) {
    url(7470);
    const obj = { adContentId: url, adCreativeType: closure_1 };
    return obj.trackAdContentAppStoreOverlayEvent(obj, dependencyMap, arg1, event, time_spent_ms);
  }
  constants = undefined;
  function openNativeAppStoreOrUrl() {
    const AppStoreBottomSheetOverlayFeatureGate = url(10691).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != callback) {
        if (null != dependencyMap) {
          closure_0 = str;
          ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = url(10690));
          str = undefined;
          if (str != null) {
            str = str.toString();
          }
          const result = url(4340).openPlayStoreInlineInstall(dependencyMap.url, str, (arg0) => {
            callback2();
            callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
            const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const tmpResult = url(10690);
          result.then((result) => {
            if (result) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          }).catch((error) => {
            callback2();
            callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const nextPromise = result.then((result) => {
            if (result) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(openNativeAppStoreOrUrl.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          });
        }
      }
    }
    callback(4084)(closure_0);
  }
  const CustomAppStoreOverlayExperiment = tmp2(10691).CustomAppStoreOverlayExperiment;
  if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp7) {
      constants = tmp2(10695).openAppStoreOverlayBottomSheet;
      const appStoreOverlayContent = tmp2(10693).getAppStoreOverlayContent(tmp7, url);
      appStoreOverlayContent.then((result) => {
        if (null != result) {
          callback2(result, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      }).catch((error) => {
        openNativeAppStoreOrUrl();
      });
      let nextPromise = appStoreOverlayContent.then((result) => {
        if (null != result) {
          callback2(result, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      });
    }
  }
  const result1 = openNativeAppStoreOrUrl();
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    let tmpResult = emitClickEventWithCreative;
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
    obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
    obj[1] = AdCreativeType.AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = trackQuestEvent;
    obj = { questId: null, questContent: null, questContentPosition: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], ctaContent: obj3[3], impressionId: obj3[4], sourceQuestContent: obj3[5] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    let tmpResult = emitClickEventWithCreative;
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
    obj[1] = AdCreativeType.AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = trackQuestEvent;
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    obj1 = { platformType: null };
    obj1[0] = arr.at(0);
    return authorizeConnectionDefault(obj1);
  } else {
    const obj2 = { type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: null, includedPlatformTypes: null, includeApplicationConnections: false };
    obj2[1] = function onComplete(platformType) {
      return callback(table[9])({ platformType });
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2[2] = set;
    dispatcherDefault.dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = emitClickEventWithCreative;
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = AdUserActionType.AdUserActionType.CLICK_INTERNAL;
    obj[1] = AdCreativeType.AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = trackQuestEvent;
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return authorizeConnectionDefault({ platformType });
};