// discord_app/modules/quests/utils/QuestPlatformUtils.tsx
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import ME from "ME";
import { set } from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { authorizeConnection } from "../../connections/authorizeConnection.native.tsx";
import { openUserSettings } from "../../user_settings/core/native/openUserSettings.tsx";
import { apexExperiment } from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import { getContextualEntrypointHeading } from "QuestCopyUtils.tsx";
import { getApplicationIdsByTaskTypes } from "QuestTaskUtils.tsx";

let c4;
let c5;
let closure_6;
let error;
function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    let tmp2 = require;
    let tmp3 = dependencyMap;
    if (set.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let tmp6 = constants2;
      let arr = items.push(constants2.XBOX);
    } else if (tmp2(5230).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
      let tmp4 = constants2;
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
    let tmpResult = tmp(500);
  }
  tmpResult = tmp(500);
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
    combined2 = null;
    const tmpResult1 = tmp(500);
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  let obj = set;
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
({ AnalyticEvents: c4, ComponentActions: c5, PlatformTypes: closure_6, UserSettingsSections: error } = ME);
let result = require("getApplicationIdsByTaskTypes").fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(closure_0) {
  let obj = getApplicationIdsByTaskTypes;
  obj = { quest: closure_0 };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    let tmpResult = tmp(7251);
    obj = { quest: null };
    obj[0] = closure_0;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj);
  }
  if (!hasPlayOnDesktopTaskResult) {
    tmpResult = tmp(7251);
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
  const obj = getApplicationIdsByTaskTypes;
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
    let tmpResult = tmp(9580);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
    obj[0] = tmp(9584).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7244).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7245);
    obj = { questId: null, questContent: null, sourceQuestContent: null, questContentCTA: null, impressionId: null };
    obj[0] = quest.id;
    ({ content: obj3[1], sourceQuestContent: obj3[2], ctaContent: obj3[3], impressionId: obj3[4] } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  authorizeConnection({ platformType: platformType.platformType, location: ctaContent.ctaContent });
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
  let closure_1 = arg1;
  let obj = _getContextualEntrypointHeading;
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  const ctaLink = obj.getCtaLink(quest.config);
  if (null != ctaConfig) {
    obj = { url: null, android: null, ios: null };
    let tmpResult = tmp(10457);
    obj[0] = tmpResult.getCtaLink(quest.config);
    ({ android: obj2[1], ios: obj2[2] } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj);
  }
  let tmp6 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
  }
  let tmp7 = tmp6;
  if ((function urlHasClickId(arg0) {
    try {
      const _URL = URL;
      const uRL = new URL(arg0);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  })(tmp6)) {
    tmpResult = tmp(514);
    const v4Result = tmpResult.v4();
    tmp7 = (function setClickIdOnUrl(arg0, v4Result) {
      try {
        const _URL = URL;
        const str = new URL(arg0);
        const searchParams = str.searchParams;
        const result = searchParams.set("dclid", v4Result);
        return str.toString();
      } catch (err) {
        return tmp;
      }
    })(tmp6, v4Result);
  }
  if (tmpResult1.shouldMigrateToAdAnalyticsInterface(_apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
    obj[0] = tmp(9584).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = tmp(7244).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj9[3], content: obj9[4], sourceQuestContent: obj9[5], position: obj9[6], impressionId: obj9[7] } = arg1);
    obj[8] = tmp8;
    tmp(9580).captureAdUserAction(obj);
    const tmpResult2 = tmp(9580);
  } else {
    const obj1 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null, clickId: null };
    obj1[0] = quest.id;
    ({ content: obj7[1], ctaContent: obj7[2], position: obj7[3], impressionId: obj7[4], sourceQuestContent: obj7[5] } = arg1);
    obj1[6] = tmp8;
    let result = tmp(7245).trackQuestContentClicked(obj1);
    const tmpResult3 = tmp(7245);
  }
  const ComponentDispatch = tmp(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig2 = quest.config.ctaConfig;
  let tmp13 = null;
  if (null != ctaConfig2) {
    const obj2 = { url: null, android: null, ios: null };
    obj2[0] = tmp(10457).getCtaLink(quest.config);
    ({ android: obj10[1], ios: obj10[2] } = ctaConfig2);
    tmp13 = getInlineStoreParamsFromCta(obj2);
    const tmpResult4 = tmp(10457);
  }
  _require = tmp7;
  closure_1 = tmp4;
  const dependencyMap = tmp13;
  function trackOverlayEvent(event, arg1, time_spent_ms) {
    return quest(tmp13[8]).trackAppStoreOverlayEvent(quest, closure_1, arg1, event, time_spent_ms);
  }
  function openNativeAppStoreOrUrl() {
    let adCreativeType;
    let closure_2;
    const AppStoreBottomSheetOverlayFeatureGate = url(10563).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != adCreativeType) {
        if (null != dependencyMap) {
          let closure_0 = str;
          ({ clearAppStoreOverlayOpen: adCreativeType, setAppStoreOverlayOpen: closure_2 } = tmp(10562));
          str = tmp8.appId;
          str = undefined;
          if (str != null) {
            str = str.toString();
          }
          const result = tmp(4308).openPlayStoreInlineInstall(tmp8.url, str, (arg0) => {
            callback2();
            callback(outer1_4.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
            const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const tmpResult = tmp(10562);
          result.then((arg0) => {
            if (arg0) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          }).catch(() => {
            callback2();
            callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const nextPromise = result.then((arg0) => {
            if (arg0) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          });
        }
      }
    }
    adCreativeType(4052)(closure_0);
  }
  const CustomAppStoreOverlayExperiment = tmp(10563).CustomAppStoreOverlayExperiment;
  if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp13) {
      constants = tmp(10567).openAppStoreOverlayBottomSheet;
      const appStoreOverlayContent = tmp(10565).getAppStoreOverlayContent(tmp13, tmp7);
      appStoreOverlayContent.then((arg0) => {
        if (null != arg0) {
          callback(arg0, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      }).catch(() => {
        openNativeAppStoreOrUrl();
      });
      const nextPromise = appStoreOverlayContent.then((arg0) => {
        if (null != arg0) {
          callback(arg0, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      });
    }
  }
  const result1 = openNativeAppStoreOrUrl();
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, arg1) {
  adContentId = adContentId.adContentId;
  let url = adContentId;
  let adCreativeType = adContentId.adCreativeType;
  const cta = adContentId.cta;
  let dependencyMap = arg1;
  url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = url(9579);
  if (obj.shouldMigrateToAdAnalyticsInterface(url(9579).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(9580);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp2(9584).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = adCreativeType;
    obj[2] = adContentId;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = arg1);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(7245);
    obj = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    obj[0] = adContentId;
    obj[1] = adCreativeType;
    ({ content: obj3[2], ctaContent: obj3[3], position: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    let result = tmp2Result.trackAdContentClicked(obj);
  }
  let ComponentDispatch = tmp2(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const tmp7 = getInlineStoreParamsFromCta(cta);
  adCreativeType = tmp;
  dependencyMap = tmp7;
  function trackOverlayEvent(event, arg1, time_spent_ms) {
    let obj = url(7245);
    obj = { adContentId: url, adCreativeType };
    return obj.trackAdContentAppStoreOverlayEvent(obj, dependencyMap, arg1, event, time_spent_ms);
  }
  constants = undefined;
  function openNativeAppStoreOrUrl() {
    let adCreativeType;
    let closure_2;
    const AppStoreBottomSheetOverlayFeatureGate = url(10563).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != adCreativeType) {
        if (null != dependencyMap) {
          let closure_0 = str;
          ({ clearAppStoreOverlayOpen: adCreativeType, setAppStoreOverlayOpen: closure_2 } = tmp(10562));
          str = tmp8.appId;
          str = undefined;
          if (str != null) {
            str = str.toString();
          }
          const result = tmp(4308).openPlayStoreInlineInstall(tmp8.url, str, (arg0) => {
            callback2();
            callback(outer1_4.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
            const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const tmpResult = tmp(10562);
          result.then((arg0) => {
            if (arg0) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          }).catch(() => {
            callback2();
            callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          });
          const nextPromise = result.then((arg0) => {
            if (arg0) {
              const obj = { trackOverlayEvent: null };
              obj[0] = function trackOverlayEvent(arg0, arg1) {
                return callback(arg0, closure_3, arg1);
              };
              callback3(obj);
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
            } else {
              callback2();
              callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
              const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
            }
          });
        }
      }
    }
    adCreativeType(4052)(closure_0);
  }
  const CustomAppStoreOverlayExperiment = tmp2(10563).CustomAppStoreOverlayExperiment;
  if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp7) {
      constants = tmp2(10567).openAppStoreOverlayBottomSheet;
      const appStoreOverlayContent = tmp2(10565).getAppStoreOverlayContent(tmp7, url);
      appStoreOverlayContent.then((arg0) => {
        if (null != arg0) {
          callback(arg0, trackOverlayEvent);
        } else {
          openNativeAppStoreOrUrl();
        }
      }).catch(() => {
        openNativeAppStoreOrUrl();
      });
      let nextPromise = appStoreOverlayContent.then((arg0) => {
        if (null != arg0) {
          callback(arg0, trackOverlayEvent);
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
    let tmpResult = tmp(9580);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
    obj[0] = tmp(9584).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7244).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7245);
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
    let tmpResult = tmp(9580);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = tmp(9584).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7244).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7245);
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj1 = { platformType: null };
    obj1[0] = arr.at(0);
    return authorizeConnection(obj1);
  } else {
    const obj2 = { type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: null, includedPlatformTypes: null, includeApplicationConnections: false };
    obj2[1] = function onComplete(platformType) {
      return callback(table[9])({ platformType });
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2[2] = set;
    dispatcher.dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = apexExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = tmp(9580);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = tmp(9584).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(7244).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7245);
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return authorizeConnection({ platformType });
};