// discord_app/modules/quests/utils/QuestPlatformUtils.tsx
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import ME from "ME";

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
    if (require(5044) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let tmp6 = constants2;
      let arr = items.push(constants2.XBOX);
    } else if (tmp2(5044).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
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
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      obj = { url: null, appId: null };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "https://play.google.com/d?id=" + cta.android.androidAppId;
      let tmp5 = obj;
    }
    return tmp5;
  }
  tmp5 = null;
  if (tmpResult.isIOS()) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    tmp5 = null;
    if (null != iosAppId) {
      obj = { url: null, appId: null };
      const _HermesInternal = HermesInternal;
      obj[0] = "https://apps.apple.com/app/id" + cta.ios.iosAppId;
      const _parseInt = parseInt;
      obj[1] = parseInt(cta.ios.iosAppId, 10);
      tmp5 = obj;
    }
  }
}
({ AnalyticEvents: c4, ComponentActions: c5, PlatformTypes: closure_6, UserSettingsSections: error } = ME);
let result = require("getApplicationIdsByTaskTypes").fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(closure_0) {
  let obj = require(6012) /* getApplicationIdsByTaskTypes */;
  obj = { quest: closure_0 };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    let tmpResult = tmp(6012);
    obj = { quest: null };
    obj[0] = closure_0;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj);
  }
  if (!hasPlayOnDesktopTaskResult) {
    tmpResult = tmp(6012);
    hasPlayOnDesktopTaskResult = tmpResult.hasAchievementInGameTask(closure_0);
  }
  const items = [];
  const tmpResult1 = require(6012) /* getApplicationIdsByTaskTypes */;
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
  let hasWatchVideoTasksResult = require(6012) /* getApplicationIdsByTaskTypes */.hasWatchVideoTasks(userStatus);
  const obj = require(6012) /* getApplicationIdsByTaskTypes */;
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
  let obj = require(8455) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(8455) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    let tmpResult = tmp(8456);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
    obj[0] = tmp(8460).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(6017).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6006);
    obj = { questId: null, questContent: null, sourceQuestContent: null, questContentCTA: null, impressionId: null };
    obj[0] = quest.id;
    ({ content: obj3[1], sourceQuestContent: obj3[2], ctaContent: obj3[3], impressionId: obj3[4] } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  importDefault(8974)({ platformType: platformType.platformType, location: ctaContent.ctaContent });
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
    let iDiwby = require(1236) /* getSystemLocale */.t["mytEv+"];
  } else {
    iDiwby = require(1236) /* getSystemLocale */.t.iDiwby;
  }
  return iDiwby;
};
export const openGameLinkDirectly = function openGameLinkDirectly(quest, arg1) {
  let closure_1;
  let dependencyMap;
  let f85128 = quest;
  const importDefault = arg1;
  let obj = f85128(9500);
  let ctaLink = obj.getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    obj = { url: null, android: null, ios: null };
    let tmpResult = tmp(9500);
    obj[0] = tmpResult.getCtaLink(quest.config);
    ({ android: obj2[1], ios: obj2[2] } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj);
  }
  if (null != tmp4) {
    ctaLink = tmp4;
  }
  let tmp6 = ctaLink;
  if ((function urlHasClickId(ctaLink) {
    try {
      const _URL = URL;
      const uRL = new URL(ctaLink);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  })(ctaLink)) {
    tmpResult = tmp(514);
    const v4Result = tmpResult.v4();
    tmp6 = (function setClickIdOnUrl(ctaLink, v4Result) {
      try {
        const _URL = URL;
        const str = new URL(ctaLink);
        const searchParams = str.searchParams;
        const result = searchParams.set("dclid", v4Result);
        return str.toString();
      } catch (err) {
        return tmp;
      }
    })(ctaLink, v4Result);
  }
  if (tmpResult1.shouldMigrateToAdAnalyticsInterface(f85128(8455).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
    obj[0] = tmp(8460).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = tmp(6017).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj9[3], content: obj9[4], sourceQuestContent: obj9[5], position: obj9[6], impressionId: obj9[7] } = arg1);
    obj[8] = tmp7;
    tmp(8456).captureAdUserAction(obj);
    const tmpResult2 = tmp(8456);
  } else {
    const obj1 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null, clickId: null };
    obj1[0] = quest.id;
    ({ content: obj7[1], ctaContent: obj7[2], position: obj7[3], impressionId: obj7[4], sourceQuestContent: obj7[5] } = arg1);
    obj1[6] = tmp7;
    let result = tmp(6006).trackQuestContentClicked(obj1);
    const tmpResult3 = tmp(6006);
  }
  const ComponentDispatch = tmp(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const AppStoreBottomSheetOverlayFeatureGate = tmp(10512).AppStoreBottomSheetOverlayFeatureGate;
  if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp4) {
      const ctaConfig2 = quest.config.ctaConfig;
      let tmp13 = null;
      if (null != ctaConfig2) {
        const obj2 = { url: null, android: null, ios: null };
        obj2[0] = tmp(9500).getCtaLink(quest.config);
        ({ android: obj10[1], ios: obj10[2] } = ctaConfig2);
        tmp13 = getInlineStoreParamsFromCta(obj2);
        const tmpResult4 = tmp(9500);
      }
      if (null != tmp13) {
        f85128 = (event, arg1, time_spent_ms) => f85128(outer1_2[8]).trackAppStoreOverlayEvent(f85128, closure_1, arg1, event, time_spent_ms);
        ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: dependencyMap } = tmp(10511));
        let str = tmp13.appId;
        str = undefined;
        if (str != null) {
          str = str.toString();
        }
        const result1 = tmp(4159).openPlayStoreInlineInstall(tmp13.url, str, (arg0) => {
          adCreativeType();
          f85129(outer1_4.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
          const ComponentDispatch = f85129(1231).ComponentDispatch;
          ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
        });
        const tmpResult5 = tmp(10511);
        result1.then((arg0) => {
          if (arg0) {
            const obj = { trackOverlayEvent: null };
            obj[0] = function trackOverlayEvent(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, arg1) {
              return callback(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, closure_3, arg1);
            };
            dependencyMap(obj);
            f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
          } else {
            adCreativeType();
            f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = f85129(1231).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          }
        }).catch(() => {
          adCreativeType();
          f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
          const ComponentDispatch = f85129(1231).ComponentDispatch;
          ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
        });
      }
    }
  }
  importDefault(3884)(tmp6);
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, arg1) {
  let adCreativeType;
  let closure_2;
  adContentId = adContentId.adContentId;
  let f85129 = adContentId;
  adCreativeType = adContentId.adCreativeType;
  const cta = adContentId.cta;
  const dependencyMap = arg1;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = f85129(8455);
  if (obj.shouldMigrateToAdAnalyticsInterface(f85129(8455).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(8456);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    obj[0] = tmp2(8460).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = adCreativeType;
    obj[2] = adContentId;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], position: obj5[6], impressionId: obj5[7] } = arg1);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(6006);
    obj = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    obj[0] = adContentId;
    obj[1] = adCreativeType;
    ({ content: obj3[2], ctaContent: obj3[3], position: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmp2Result.trackAdContentClicked(obj);
  }
  let ComponentDispatch = tmp2(1231).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const AppStoreBottomSheetOverlayFeatureGate = tmp2(10512).AppStoreBottomSheetOverlayFeatureGate;
  if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp) {
      const tmp11 = getInlineStoreParamsFromCta(cta);
      if (null != tmp11) {
        f85129 = (event, arg1, time_spent_ms) => {
          let obj = f85129(6006);
          obj = { adContentId: f85129, adCreativeType };
          return obj.trackAdContentAppStoreOverlayEvent(obj, dependencyMap, arg1, event, time_spent_ms);
        };
        ({ clearAppStoreOverlayOpen: adCreativeType, setAppStoreOverlayOpen: closure_2 } = tmp2(10511));
        let str = tmp11.appId;
        str = undefined;
        if (str != null) {
          str = str.toString();
        }
        const result1 = tmp2(4159).openPlayStoreInlineInstall(tmp11.url, str, (arg0) => {
          adCreativeType();
          f85129(outer1_4.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
          const ComponentDispatch = f85129(1231).ComponentDispatch;
          ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
        });
        const tmp2Result1 = tmp2(10511);
        result1.then((arg0) => {
          if (arg0) {
            const obj = { trackOverlayEvent: null };
            obj[0] = function trackOverlayEvent(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, arg1) {
              return callback(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, closure_3, arg1);
            };
            dependencyMap(obj);
            f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
          } else {
            adCreativeType();
            f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
            const ComponentDispatch = f85129(1231).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
          }
        }).catch(() => {
          adCreativeType();
          f85129(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
          const ComponentDispatch = f85129(1231).ComponentDispatch;
          ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
        });
      }
    }
  }
  adCreativeType(3884)(url);
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  let obj = require(8455) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(8455) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    let tmpResult = tmp(8456);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
    obj[0] = tmp(8460).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(6017).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6006);
    obj = { questId: null, questContent: null, questContentPosition: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], ctaContent: obj3[3], impressionId: obj3[4], sourceQuestContent: obj3[5] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  require(6614) /* openUserSettings */.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = require(8455) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(8455) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    let tmpResult = tmp(8456);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = tmp(8460).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(6017).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6006);
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj1 = { platformType: null };
    obj1[0] = arr.at(0);
    return importDefault(8974)(obj1);
  } else {
    const obj2 = { type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: null, includedPlatformTypes: null, includeApplicationConnections: false };
    obj2[1] = function onComplete(platformType) {
      return callback(table[9])({ platformType });
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2[2] = set;
    importDefault(709).dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = require(8455) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(8455) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = tmp(8456);
    obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    obj[0] = tmp(8460).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(6017).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6], position: obj5[7], rowIndex: obj5[8] } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6006);
    obj = { questId: null, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    obj[0] = quest.id;
    ({ content: obj3[1], position: obj3[2], rowIndex: obj3[3], ctaContent: obj3[4], impressionId: obj3[5], sourceQuestContent: obj3[6] } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return importDefault(8974)({ platformType });
};