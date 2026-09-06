// === Module 11496: QuestPlatformUtils ===

// Module 11496 (QuestPlatformUtils)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import openURLDefault from "openURL" /* 4249 */;
import QuestConstants from "QuestConstants" /* 5444 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5452 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9252 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import apexExperiment from "apexExperiment" /* 11489 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 11493 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    let tmp2 = require;
    if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let arr = items.push(constants2.XBOX);
    } else if (tmp2(5452).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
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
    let tmpResult = tmp(1115);
  }
  tmpResult = tmp(1115);
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
    const tmpResult1 = tmp(1115);
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      obj = { url: null, os: "android", storeAppId: null, appId: null };
      const _HermesInternal2 = HermesInternal;
      obj.url = "https://play.google.com/d?id=" + cta.android.androidAppId;
      obj.storeAppId = cta.android.androidAppId;
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
      obj.url = "https://apps.apple.com/app/id" + substr;
      obj.storeAppId = substr;
      const _parseInt = parseInt;
      obj.appId = parseInt(substr, 10);
      return obj;
    }
  }
  return null;
}
function openAppStoreOrUrl(link) {
  link = link.link;
  ({ directLink: importDefault, inlineStoreParams } = link);
  ({ trackOverlayEvent: QuestTaskPlatform, getIosAttribution } = link);
  let flag = link.allowExternalOpen;
  if (flag === undefined) {
    flag = true;
  }
  closure_7 = undefined;
  function openNativeAppStoreOrUrl() {
    const AppStoreBottomSheetOverlayFeatureGate = apexExperiment.AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != closure_1_1) {
        if (null != inlineStoreParams) {
          if (null != getIosAttribution) {
            const promise3 = getIosAttribution();
            let catchPromise = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[14]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const tmp = link(inlineStoreParams[14]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7718).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1109).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            }).catch(() => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[14]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              const result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, undefined);
              const tmp = link(inlineStoreParams[14]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7718).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1109).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
            const nextPromise = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[14]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const tmp = link(inlineStoreParams[14]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7718).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1109).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
          } else {
            closure_0 = QuestTaskPlatform;
            ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: inlineStoreParams } = tmp(11497));
            ({ url, appId } = inlineStoreParams);
            if (appId != null) {
              let str = appId.toString();
            }
            let result = tmp(4525).openPlayStoreInlineInstall(url, appId, (arg0) => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg0);
              const ComponentDispatch = closure_0(1109).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
            }, undefined);
            const tmpResult = tmp(11497);
            catchPromise = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7718).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                dependencyMap(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            }).catch(() => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
              const ComponentDispatch = closure_0(1109).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              return false;
            });
            const nextPromise1 = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(7718).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7718).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                dependencyMap(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7718).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1109).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            });
          }
        }
        return catchPromise;
      }
    }
    if (flag) {
      openURLDefault(link);
    }
    catchPromise = Promise.resolve(false);
  }
  if (null == getIosAttribution) {
    const CustomAppStoreOverlayExperiment = link(inlineStoreParams[16]).CustomAppStoreOverlayExperiment;
    if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != inlineStoreParams) {
        closure_7 = tmp(tmp2[19]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = tmp(tmp2[18]).getAppStoreOverlayContent(inlineStoreParams, link);
        return appStoreOverlayContent.then((result) => {
          if (null == result) {
            flag = openNativeAppStoreOrUrl();
          } else {
            closure_7(result, QuestTaskPlatform);
            flag = true;
          }
          return flag;
        }).catch(() => openNativeAppStoreOrUrl());
      }
    }
  }
  return openNativeAppStoreOrUrl();
}
function openAdGameLinkDirectlyImpl(adContentId, impressionId, preferExternalAppStore) {
  adContentId = adContentId.adContentId;
  const adCreativeType = adContentId.adCreativeType;
  const cta = adContentId.cta;
  dependencyMap = impressionId;
  impressionId = undefined;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = adContentId(11192);
  if (obj.shouldMigrateToAdAnalyticsInterface(adContentId(11192).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(11193);
    obj = { type: tmp2(11197).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType, adCreativeId: adContentId, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = impressionId);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(7718);
    obj = { adContentId, adCreativeType, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, ctaContent: obj3.questContentCTA, position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = impressionId);
    const result = tmp2Result.trackAdContentClicked(obj);
  }
  const ComponentDispatch = tmp2(1109).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    iosAttributionClickFramework = tmp2(11488).getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, adContentId);
    const tmp2Result1 = tmp2(11488);
  }
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = { impressionId };
        return obj.getStoreKitCredential(obj);
      };
    }
  }
  if (preferExternalAppStore.preferExternalAppStore) {
    if (null == fn) {
      adCreativeType(4249)(url);
    }
  }
  const tmp9 = getInlineStoreParamsFromCta(cta);
  openAppStoreOrUrl({
    link: url,
    directLink: tmp,
    inlineStoreParams: getInlineStoreParamsFromCta(cta),
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = { adContentId, adCreativeType, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAdContentAppStoreOverlayEvent(obj);
    },
    getIosAttribution: fn
  });
}
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({ AnalyticEvents: closure_4, ComponentActions: hasOwnProperty, PlatformTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(quest) {
  let obj = { quest };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    let tmpResult = tmp(7724);
    obj = { quest };
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj);
  }
  if (!hasPlayOnDesktopTaskResult) {
    tmpResult = tmp(7724);
    hasPlayOnDesktopTaskResult = tmpResult.hasAchievementInGameTask(quest);
  }
  const items = [];
  const tmpResult1 = QuestTaskUtils;
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
  let hasWatchVideoTasksResult = QuestTaskUtils.hasWatchVideoTasks(userStatus);
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
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    let tmpResult = tmp(11193);
    obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = { questId: quest.id, questContent: null, sourceQuestContent: null, questContentCTA: null, impressionId: null };
    ({ content: obj3.questContent, sourceQuestContent: obj3.sourceQuestContent, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId } = ctaContent);
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
    let iDiwby = util.t["mytEv+"];
  } else {
    iDiwby = util.t.iDiwby;
  }
  return iDiwby;
};
export { getDirectAppStoreLinkFromCta };
export { getInlineStoreParamsFromCta };
export { openAppStoreOrUrl };
export const openGameLinkDirectly = function openGameLinkDirectly(quest, impressionId) {
  _require = quest;
  const trackingCtx = impressionId;
  let obj = require("QuestCopyUtils");
  const ctaLink = obj.getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    obj = { url: null, android: null, ios: null };
    let tmpResult = tmp(tmp2[12]);
    obj.url = tmpResult.getCtaLink(quest.config);
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj);
  }
  let tmp6 = ctaLink;
  let tmp7 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
    tmp7 = tmp4;
  }
  if ((function urlHasClickId(directAppStoreLinkFromCta) {
    try {
      const _URL = URL;
      const uRL = new URL(directAppStoreLinkFromCta);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  })(tmp7)) {
    tmpResult = tmp(tmp2[20]);
    const v4Result = tmpResult.v4();
    tmp6 = (function setClickIdOnUrl(directAppStoreLinkFromCta, v4Result) {
      try {
        const _URL = URL;
        const str = new URL(directAppStoreLinkFromCta);
        const searchParams = str.searchParams;
        const result = searchParams.set("dclid", v4Result);
        return str.toString();
      } catch (err) {
        return tmp;
      }
    })(tmp7, v4Result);
  }
  if (tmpResult1.shouldMigrateToAdAnalyticsInterface(require("AdAnalyticsInterfaceExperiment").AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
    obj = { type: tmp(tmp2[6]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
    ({ ctaContent: obj9.questContentCTA, content: obj9.surfaceId, sourceQuestContent: obj9.sourceQuestContent, position: obj9.questContentPosition, impressionId: obj9.impressionId } = impressionId);
    obj.clickId = tmp8;
    tmp(tmp2[5]).captureAdUserAction(obj);
    const tmpResult2 = tmp(tmp2[5]);
  } else {
    const obj1 = { questId: quest.id, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null, clickId: null };
    ({ content: obj7.questContent, ctaContent: obj7.questContentCTA, position: obj7.questContentPosition, impressionId: obj7.impressionId, sourceQuestContent: obj7.sourceQuestContent } = impressionId);
    obj1.clickId = tmp8;
    let result = tmp(tmp2[8]).trackQuestContentClicked(obj1);
    const tmpResult3 = tmp(tmp2[8]);
  }
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ctaConfig2 = quest.config.ctaConfig;
    let iosAppId;
    if (ctaConfig2 != null) {
      const ios = ctaConfig2.ios;
      if (ios != null) {
        iosAppId = ios.iosAppId;
      }
    }
    iosAttributionClickFramework = tmp(tmp2[21]).getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, quest.id);
    const tmpResult4 = tmp(tmp2[21]);
  }
  const ComponentDispatch = tmp(tmp2[15]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp15 = null;
  if (null != ctaConfig3) {
    const obj2 = { url: tmp(tmp2[12]).getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj11.android, ios: obj11.ios } = ctaConfig3);
    tmp15 = getInlineStoreParamsFromCta(obj2);
    const tmpResult5 = tmp(tmp2[12]);
  }
  const obj3 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp15,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = { quest, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAppStoreOverlayEvent(obj);
    },
    getIosAttribution: null
  };
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = { impressionId };
        return obj.getStoreKitCredential(obj);
      };
    }
  }
  obj3.getIosAttribution = fn;
  openAppStoreOrUrl(obj3);
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, impressionId) {
  openAdGameLinkDirectlyImpl({ adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta }, impressionId, { preferExternalAppStore: false });
};
export const openAdGameLinkDirectlyFromBountyEntireVideoTap = function openAdGameLinkDirectlyFromBountyEntireVideoTap(adContentId, impressionId) {
  openAdGameLinkDirectlyImpl({ adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta }, impressionId, { preferExternalAppStore: true });
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    let tmpResult = tmp(11193);
    obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = { questId: quest.id, questContent: null, questContentPosition: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    let tmpResult = tmp(11193);
    obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = { questId: quest.id, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj1 = { platformType: arr.at(0) };
    return authorizeConnectionDefault(obj1);
  } else {
    const obj2 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
          return authorizeConnectionDefault({ platformType });
        },
      includedPlatformTypes: null,
      includeApplicationConnections: false
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2.includedPlatformTypes = set;
    DispatcherDefault.dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = tmp(11193);
    obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = { questId: quest.id, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return authorizeConnectionDefault({ platformType });
};