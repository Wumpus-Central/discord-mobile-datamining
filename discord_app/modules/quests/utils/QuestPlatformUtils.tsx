// discord_app/modules/quests/utils/QuestPlatformUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import intl from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import openURLDefault from "../../../lib/openURL.tsx";
import BrowserManager from "../../links/native/BrowserManager.tsx";
import QuestConstants from "../QuestConstants.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import FirstPartyQuestTaskTypes from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import captureAdUserAction2 from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import apexExperiment from "../experiments/index.tsx";
import AppStoreOverlayTelemetryManager from "../native/AppStoreOverlayTelemetryManager.tsx";
import IosAttributionImpressionRegistry from "../../ads/ios_attribution/IosAttributionImpressionRegistry.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let arr = items.push(metroRequire.XBOX);
    } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
      let arr3 = items.push(metroRequire.PLAYSTATION);
    }
    continue;
  }
  return items;
}
function getDirectAppStoreLinkFromCta(cta) {
  let combined2;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    let combined1;
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      let combined;
      const iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        combined = iosAppId2;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "id" + iosAppId2;
      }
      const _HermesInternal2 = HermesInternal;
      combined1 = "https://apps.apple.com/app/" + combined;
    }
    return combined1;
  } else {
    PlatformUtils;
  }
  const tmpResult3 = PlatformUtils;
  if (tmpResult3.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    combined2 = null;
    if (null != androidAppId) {
      const _HermesInternal3 = HermesInternal;
      combined2 = "https://play.google.com/store/apps/details?id=" + cta.android.androidAppId;
    }
  } else {
    PlatformUtils;
    combined2 = null;
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      const _HermesInternal2 = HermesInternal;
      const obj2 = {
        url: "https://play.google.com/d?id=" + cta.android.androidAppId,
        os: "android",
        storeAppId: cta.android.androidAppId,
        appId: null,
      };
      return obj2;
    }
  }
  const tmpResult = PlatformUtils;
  if (tmpResult.isIOS()) {
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      let substr;
      const iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        substr = iosAppId2.slice(2);
      } else {
        substr = iosAppId2;
      }
      const _HermesInternal = HermesInternal;
      const _parseInt = parseInt;
      const obj3 = {
        url: "https://apps.apple.com/app/id" + substr,
        os: "ios",
        storeAppId: substr,
        appId: parseInt(substr, 10),
      };
      return obj3;
    }
  }
  return null;
}
function openAppStoreOrUrl(link) {
  let closure_4;
  let closure_5;
  let getIosAttribution;
  let inlineStoreParams;
  link = link.link;
  ({ directLink: importDefault, inlineStoreParams } = link);
  ({
    trackOverlayEvent: QuestTaskPlatform,
    trackOverlaySurfaceClick: closure_4,
    appStoreOverlayCarouselScrollContext: closure_5,
    getIosAttribution,
  } = link);
  let flag = link.allowExternalOpen;
  if (flag === undefined) {
    flag = true;
  }
  let closure_9;
  function openNativeAppStoreOrUrl() {
    let appId;
    let closure_129_1;
    let closure_129_2;
    let url;
    const AppStoreBottomSheetOverlayFeatureGate = apexExperiment.AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != importDefault) {
        let catchPromise;
        if (null != inlineStoreParams) {
          if (null != getIosAttribution) {
            const promise3 = getIosAttribution();
            let nextPromise = promise3.then((result) => {
              let appId;
              let closure_129_1;
              let closure_129_2;
              let url;
              let closure_0 = closure_1_3;
              const openPlayStoreInlineInstall = link(inlineStoreParams[13]).openPlayStoreInlineInstall;
              ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } = link(
                inlineStoreParams[14],
              ));
              ({ url, appId } = closure_1_2);
              link(inlineStoreParams[14]);
              if (appId != null) {
                appId.toString();
              }
              result = openPlayStoreInlineInstall(
                url,
                appId,
                (arg0) => {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                    arg0,
                  );
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                },
                result,
              );
              const nextPromise = result.then((result) => {
                const tmp = result;
                if (tmp) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(
                        arg0,
                        str,
                        closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                        arg1,
                        closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                      );
                    },
                  };
                  closure_1_2(obj);
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                } else {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              });
              return nextPromise.catch(() => {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
            catchPromise = nextPromise.catch(() => {
              let appId;
              let closure_129_1;
              let closure_129_2;
              let url;
              let closure_0 = closure_1_3;
              const openPlayStoreInlineInstall = link(inlineStoreParams[13]).openPlayStoreInlineInstall;
              let tmp = link(inlineStoreParams[14]);
              ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } = tmp);
              ({ url, appId } = closure_1_2);
              let str;
              if (appId != null) {
                str = appId.toString();
              }
              const result = openPlayStoreInlineInstall(
                url,
                appId,
                (arg0) => {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                    arg0,
                  );
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                },
                undefined,
              );
              const nextPromise = result.then((result) => {
                const tmp = result;
                if (tmp) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(
                        arg0,
                        str,
                        closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                        arg1,
                        closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                      );
                    },
                  };
                  closure_1_2(obj);
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                } else {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              });
              return nextPromise.catch(() => {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
          } else {
            let closure_0 = QuestTaskPlatform;
            let openPlayStoreInlineInstall = BrowserManager.openPlayStoreInlineInstall;
            ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } =
              AppStoreOverlayTelemetryManager);
            ({ url, appId } = inlineStoreParams);
            let str;
            AppStoreOverlayTelemetryManager;
            if (appId != null) {
              str = appId.toString();
            }
            let result = openPlayStoreInlineInstall(
              url,
              appId,
              (arg0) => {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                  str,
                  closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                  arg0,
                );
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              },
              undefined,
            );
            const nextPromise1 = result.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                    return closure_1_0(
                      arg0,
                      str,
                      closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                      arg1,
                      closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                    );
                  },
                };
                closure_1_2(obj);
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                  str,
                  closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                );
              } else {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            });
            catchPromise = nextPromise1.catch(() => {
              closure_1_1();
              closure_0(
                constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                str,
                closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE,
              );
              const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              return false;
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
    let tmp = link;
    const CustomAppStoreOverlayExperiment = link(inlineStoreParams[16]).CustomAppStoreOverlayExperiment;
    if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != inlineStoreParams) {
        const getAppStoreOverlayContent = tmp(tmp2[18]).getAppStoreOverlayContent;
        closure_9 = tmp(tmp2[19]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = getAppStoreOverlayContent(inlineStoreParams, link);
        let nextPromise = appStoreOverlayContent.then((result) => {
          if (null == result) {
            flag = openNativeAppStoreOrUrl();
          } else {
            let appStoreOverlayCarouselScrollTracker;
            if (null != constants) {
              const obj = AnalyticsActions;
              appStoreOverlayCarouselScrollTracker = obj.createAppStoreOverlayCarouselScrollTracker(tmp4, result);
            }
            closure_9(result, QuestTaskPlatform, closure_4, appStoreOverlayCarouselScrollTracker);
            flag = true;
          }
          return flag;
        });
        return nextPromise.catch(() => openNativeAppStoreOrUrl());
      }
    }
  }
  return openNativeAppStoreOrUrl();
}
function openAdGameLinkDirectlyImpl(adContentId, impressionId, preferExternalAppStore) {
  let trackingCtx;
  adContentId = adContentId.adContentId;
  const adCreativeType = adContentId.adCreativeType;
  const cta = adContentId.cta;
  dependencyMap = impressionId;
  impressionId = undefined;
  let url = cta.url;
  preferExternalAppStore = preferExternalAppStore.preferExternalAppStore;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = adContentId(7224);
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      adContentId(7224).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_ad_game_link_directly",
    )
  ) {
    let obj2 = {
      type: adContentId(7223).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      adCreativeType,
      adCreativeId: adContentId,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
    };
    const captureAdUserAction = adContentId(7213).captureAdUserAction;
    adContentId(7213);
    ({
      ctaContent: obj4.questContentCTA,
      content: obj4.surfaceId,
      sourceQuestContent: obj4.sourceQuestContent,
      position: obj4.questContentPosition,
      impressionId: obj4.impressionId,
    } = impressionId);
    captureAdUserAction(obj2);
  } else {
    const obj5 = {
      adContentId,
      adCreativeType,
      questContent: null,
      questContentCTA: null,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      content: obj3.questContent,
      ctaContent: obj3.questContentCTA,
      position: obj3.questContentPosition,
      impressionId: obj3.impressionId,
      sourceQuestContent: obj3.sourceQuestContent,
    } = impressionId);
    const tmp2Result3 = adContentId(7202);
    const result = tmp2Result3.trackAdContentClicked(obj5);
  }
  const ComponentDispatch = tmp2(1121).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ios = cta.ios;
    let iosAppId;
    const getIosAttributionClickFramework = adContentId(10934).getIosAttributionClickFramework;
    adContentId(10934);
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    iosAttributionClickFramework = getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      adContentId,
    );
  }
  let fn;
  const tmp11 = getInlineStoreParamsFromCta(cta);
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = IosAttributionImpressionRegistry;
        const obj2 = { impressionId };
        return obj.getStoreKitCredential(obj2);
      };
    }
  }
  if (preferExternalAppStore) {
    if (null == fn) {
      adCreativeType(4559)(url);
    }
  }
  const obj8 = {
    link: url,
    directLink: tmp,
    inlineStoreParams: tmp11,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = {
        adContentId,
        adCreativeType,
        trackingCtx,
        inlineStoreAppId,
        overlayVariant,
        event,
        timeSpentMs,
        overlaySurface,
      };
      return obj.trackAdContentAppStoreOverlayEvent(obj2);
    },
    trackOverlaySurfaceClick(overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { adContentId, adCreativeType, trackingCtx, overlaySurface };
      return obj.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn,
  };
  openAppStoreOrUrl(obj8);
}
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({
  AnalyticEvents: closure_4,
  ComponentActions: hasOwnProperty,
  PlatformTypes: metroRequire,
  UserSettingsSections: metroImportDefault,
} = Constants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(quest) {
  const obj = QuestTaskUtils;
  const obj2 = { quest };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj2);
  if (!hasPlayOnDesktopTaskResult) {
    const obj3 = { quest };
    const tmpResult = QuestTaskUtils;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj3);
  }
  if (!hasPlayOnDesktopTaskResult) {
    const tmpResult3 = QuestTaskUtils;
    hasPlayOnDesktopTaskResult = tmpResult3.hasAchievementInGameTask(quest);
  }
  const items = [];
  const tmpResult4 = QuestTaskUtils;
  const hasSomeConsoleTasksResult = tmpResult4.hasSomeConsoleTasks(quest);
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
  const obj = QuestTaskUtils;
  let hasWatchVideoTasksResult = obj.hasWatchVideoTasks(userStatus);
  const obj2 = QuestTaskUtils;
  if (!hasWatchVideoTasksResult) {
    hasWatchVideoTasksResult = obj2.hasPlayActivityTask(userStatus);
  }
  return hasWatchVideoTasksResult;
};
export const PlayQuestPlatform = { DESKTOP: "desktop", XBOX: "xbox", PLAYSTATION: "playstation" };
export const getPlatformTypeForHintMessage = function getPlatformTypeForHintMessage(connected_account_type) {
  let PLAYSTATION;
  if ("xbox" === connected_account_type.connected_account_type) {
    PLAYSTATION = metroRequire.XBOX;
  } else {
    PLAYSTATION = metroRequire.PLAYSTATION;
  }
  return PLAYSTATION;
};
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(quest, ctaContent) {
  quest = quest.quest;
  const platformType = quest.platformType;
  const obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_authorization_connection_modal",
    )
  ) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
    };
    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
    captureAdUserAction2;
    ({
      ctaContent: obj4.questContentCTA,
      content: obj4.surfaceId,
      sourceQuestContent: obj4.sourceQuestContent,
      impressionId: obj4.impressionId,
    } = ctaContent);
    captureAdUserAction(obj2);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      sourceQuestContent: null,
      questContentCTA: null,
      impressionId: null,
    };
    ({
      content: obj3.questContent,
      sourceQuestContent: obj3.sourceQuestContent,
      ctaContent: obj3.questContentCTA,
      impressionId: obj3.impressionId,
    } = ctaContent);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { platformType, location: ctaContent.ctaContent };
  authorizeConnectionDefault(obj8);
};
export const getExpiredCredentialsHintMessage = function getExpiredCredentialsHintMessage(connected_account_type) {
  let PLAYSTATION;
  let iDiwby;
  let tmp;
  if ("xbox" === connected_account_type.connected_account_type) {
    PLAYSTATION = metroRequire.XBOX;
    tmp = metroRequire;
  } else {
    tmp = metroRequire;
    PLAYSTATION = metroRequire.PLAYSTATION;
  }
  if (PLAYSTATION === tmp.XBOX) {
    iDiwby = intl.t["mytEv+"];
  } else {
    iDiwby = intl.t.iDiwby;
  }
  return iDiwby;
};
export { getDirectAppStoreLinkFromCta };
export { getInlineStoreParamsFromCta };
export { openAppStoreOrUrl };
export const openGameLinkDirectly = function openGameLinkDirectly(quest, impressionId) {
  let fn;
  let tmpResult;
  let tmpResult12;
  function urlHasClickId(directAppStoreLinkFromCta) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(directAppStoreLinkFromCta);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  }
  function setClickIdOnUrl(directAppStoreLinkFromCta, v4Result) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const str = new URL(directAppStoreLinkFromCta);
      const searchParams = str.searchParams;
      const result = searchParams.set("dclid", v4Result);
      return str.toString();
    } catch (err) {
      return directAppStoreLinkFromCta;
    }
  }
  _require = quest;
  const trackingCtx = impressionId;
  let obj = require("QuestCopyUtils");
  const ctaLink = obj.getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    const obj3 = { url: tmpResult.getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmpResult = require("QuestCopyUtils");
    tmp4 = getDirectAppStoreLinkFromCta(obj3);
  }
  let tmp6 = ctaLink;
  let tmp7 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
    tmp7 = tmp4;
  }
  if (urlHasClickId(tmp7)) {
    const tmpResult7 = require("v1");
    const v4Result = tmpResult7.v4();
    tmp6 = setClickIdOnUrl(tmp7, v4Result);
  }
  const tmpResult8 = require("AdAnalyticsInterfaceExperiment");
  if (
    tmpResult8.shouldMigrateToAdAnalyticsInterface(
      require("AdAnalyticsInterfaceExperiment").AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_game_link_directly",
    )
  ) {
    const obj4 = {
      type: require("captureAdUserActionTypes").AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      adCreativeType: require("AdCreativeType").AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
      clickId: tmp8,
    };
    const captureAdUserAction = tmp(tmp2[5]).captureAdUserAction;
    require("captureAdUserAction");
    ({
      ctaContent: obj8.questContentCTA,
      content: obj8.surfaceId,
      sourceQuestContent: obj8.sourceQuestContent,
      position: obj8.questContentPosition,
      impressionId: obj8.impressionId,
    } = impressionId);
    captureAdUserAction(obj4);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      questContentCTA: null,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
      clickId: tmp8,
    };
    ({
      content: obj7.questContent,
      ctaContent: obj7.questContentCTA,
      position: obj7.questContentPosition,
      impressionId: obj7.impressionId,
      sourceQuestContent: obj7.sourceQuestContent,
    } = impressionId);
    const tmpResult10 = require("AnalyticsActions");
    let result = tmpResult10.trackQuestContentClicked(obj5);
  }
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ctaConfig2 = quest.config.ctaConfig;
    let iosAppId;
    const getIosAttributionClickFramework = tmp(tmp2[21]).getIosAttributionClickFramework;
    require("IosAttributionEligibility");
    if (ctaConfig2 != null) {
      const ios = ctaConfig2.ios;
      if (ios != null) {
        iosAppId = ios.iosAppId;
      }
    }
    iosAttributionClickFramework = getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      quest.id,
    );
  }
  const ComponentDispatch = tmp(tmp2[15]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp17 = null;
  if (null != ctaConfig3) {
    const obj6 = { url: tmpResult12.getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj9.android, ios: obj9.ios } = ctaConfig3);
    tmpResult12 = require("QuestCopyUtils");
    tmp17 = getInlineStoreParamsFromCta(obj6);
  }
  const obj10 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp17,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { quest, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAppStoreOverlayEvent(obj2);
    },
    trackOverlaySurfaceClick(overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { questId: quest.id, trackingCtx, overlaySurface };
      return obj.trackAppStoreOverlaySurfaceClickedForQuest(obj2);
    },
    appStoreOverlayCarouselScrollContext: { questId: quest.id },
    getIosAttribution: fn,
  };
  fn = undefined;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = IosAttributionImpressionRegistry;
        const obj2 = { impressionId };
        return obj.getStoreKitCredential(obj2);
      };
    }
  }
  openAppStoreOrUrl(obj10);
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, impressionId) {
  const obj = {
    adContentId: adContentId.adContentId,
    adCreativeType: adContentId.adCreativeType,
    cta: adContentId.cta,
  };
  openAdGameLinkDirectlyImpl(obj, impressionId, { preferExternalAppStore: false });
};
export const openAdGameLinkDirectlyFromBountyEntireVideoTap = function openAdGameLinkDirectlyFromBountyEntireVideoTap(
  adContentId,
  impressionId,
) {
  const obj = {
    adContentId: adContentId.adContentId,
    adCreativeType: adContentId.adCreativeType,
    cta: adContentId.cta,
  };
  openAdGameLinkDirectlyImpl(obj, impressionId, { preferExternalAppStore: true });
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  const obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_console_connection_settings",
    )
  ) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
    };
    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
    captureAdUserAction2;
    ({
      ctaContent: obj4.questContentCTA,
      content: obj4.surfaceId,
      sourceQuestContent: obj4.sourceQuestContent,
      impressionId: obj4.impressionId,
      position: obj4.questContentPosition,
    } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      questContentPosition: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      content: obj3.questContent,
      position: obj3.questContentPosition,
      ctaContent: obj3.questContentCTA,
      impressionId: obj3.impressionId,
      sourceQuestContent: obj3.sourceQuestContent,
    } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { screen: metroImportDefault.CONNECTIONS };
  openUserSettings.openUserSettings(obj8);
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_add_console_connection_modal",
    )
  ) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
      questContentRowIndex: null,
    };
    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
    captureAdUserAction2;
    ({
      ctaContent: obj4.questContentCTA,
      content: obj4.surfaceId,
      sourceQuestContent: obj4.sourceQuestContent,
      impressionId: obj4.impressionId,
      position: obj4.questContentPosition,
      rowIndex: obj4.questContentRowIndex,
    } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      questContentPosition: null,
      questContentRowIndex: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      content: obj3.questContent,
      position: obj3.questContentPosition,
      rowIndex: obj3.questContentRowIndex,
      ctaContent: obj3.questContentCTA,
      impressionId: obj3.impressionId,
      sourceQuestContent: obj3.sourceQuestContent,
    } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj6 = { platformType: arr.at(0) };
    const tmp14 = authorizeConnectionDefault;
    return tmp14(obj6);
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const obj10 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
        const obj = { platformType };
        return authorizeConnectionDefault(obj);
      },
      includedPlatformTypes: set,
      includeApplicationConnections: false,
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    set = new Set(arr);
    dispatch(obj10);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  const obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_single_console_connection_modal",
    )
  ) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      adCreativeType: AdCreativeType.AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
      questContentRowIndex: null,
    };
    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
    captureAdUserAction2;
    ({
      ctaContent: obj4.questContentCTA,
      content: obj4.surfaceId,
      sourceQuestContent: obj4.sourceQuestContent,
      impressionId: obj4.impressionId,
      position: obj4.questContentPosition,
      rowIndex: obj4.questContentRowIndex,
    } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      questContentPosition: null,
      questContentRowIndex: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      content: obj3.questContent,
      position: obj3.questContentPosition,
      rowIndex: obj3.questContentRowIndex,
      ctaContent: obj3.questContentCTA,
      impressionId: obj3.impressionId,
      sourceQuestContent: obj3.sourceQuestContent,
    } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { platformType };
  return authorizeConnectionDefault(obj8);
};
