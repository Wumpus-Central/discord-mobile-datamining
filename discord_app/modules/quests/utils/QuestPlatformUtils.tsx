// discord_app/modules/quests/utils/QuestPlatformUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import openURLDefault from "../../../lib/openURL.tsx";
import BrowserManager from "../../links/native/BrowserManager.tsx";
import QuestConstants from "../QuestConstants.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import FirstPartyQuestTaskTypes from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import QuestTaskUtils from "QuestTaskUtils.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import apexExperiment from "../experiments/index.tsx";
import IosAttributionImpressionRegistry from "../../ads/ios_attribution/IosAttributionImpressionRegistry.tsx";
import AppStoreOverlayTelemetryManager from "../native/AppStoreOverlayTelemetryManager.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let arr = items.push(constants2.XBOX);
    } else if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
      let arr3 = items.push(constants2.PLAYSTATION);
    }
    continue;
  }
  return items;
}
function getDirectAppStoreLinkFromCta(cta) {
  if (obj.isIOS()) {
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      const iosAppId = cta.ios.iosAppId;
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
    PlatformUtils;
  }
  obj = PlatformUtils;
  if (tmpResult3.isAndroid()) {
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
    PlatformUtils;
    combined2 = null;
  }
  combined1 = combined2;
  tmpResult3 = PlatformUtils;
}
function getInlineStoreParamsFromCta(cta) {
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      const obj2 = { url: null, os: "android", storeAppId: null, appId: null };
      const _HermesInternal2 = HermesInternal;
      obj2.url = "https://play.google.com/d?id=" + cta.android.androidAppId;
      obj2.storeAppId = cta.android.androidAppId;
      return obj2;
    }
  }
  obj = PlatformUtils;
  if (tmpResult.isIOS()) {
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      const iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        let substr = iosAppId2.slice(2);
      } else {
        substr = iosAppId2;
      }
      const obj3 = { url: null, os: "ios", storeAppId: null, appId: null };
      const _HermesInternal = HermesInternal;
      obj3.url = "https://apps.apple.com/app/id" + substr;
      obj3.storeAppId = substr;
      const _parseInt = parseInt;
      obj3.appId = parseInt(substr, 10);
      return obj3;
    }
  }
  return null;
}
function openAppStoreOrUrl(link) {
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
  closure_9 = undefined;
  function openNativeAppStoreOrUrl() {
    const AppStoreBottomSheetOverlayFeatureGate = apexExperiment.AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != closure_1_1) {
        if (null != inlineStoreParams) {
          if (null != getIosAttribution) {
            const promise3 = getIosAttribution();
            let catchPromise = getIosAttribution()
              .then((result) => {
                closure_0 = str;
                ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(
                  inlineStoreParams[14],
                ));
                ({ url, appId } = dependencyMap);
                str = undefined;
                if (appId != null) {
                  str = appId.toString();
                }
                result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(
                  url,
                  appId,
                  (arg0) => {
                    closure_1_1();
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      arg0,
                    );
                    const ComponentDispatch = closure_0(1110).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                  },
                  result,
                );
                const tmp = link(inlineStoreParams[14]);
                return result
                  .then((result) => {
                    if (result) {
                      const obj = {
                        trackOverlayEvent(arg0, arg1) {
                          return closure_1_0(
                            arg0,
                            str,
                            closure_0(8041).AppStoreOverlayVariant.NATIVE,
                            arg1,
                            closure_0(8041).AppStoreOverlaySurfaces.MAIN_CTA,
                          );
                        },
                      };
                      dependencyMap(obj);
                      closure_0(
                        constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                        str,
                        closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      );
                    } else {
                      closure_1_1();
                      closure_0(
                        constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                        str,
                        closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      );
                      const ComponentDispatch = closure_0(1110).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                    }
                    return result;
                  })
                  .catch(() => {
                    closure_1_1();
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = closure_0(1110).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                    return false;
                  });
              })
              .catch(() => {
                closure_0 = str;
                ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(
                  inlineStoreParams[14],
                ));
                ({ url, appId } = dependencyMap);
                str = undefined;
                if (appId != null) {
                  str = appId.toString();
                }
                const result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(
                  url,
                  appId,
                  (arg0) => {
                    closure_1_1();
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      arg0,
                    );
                    const ComponentDispatch = closure_0(1110).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                  },
                  undefined,
                );
                const tmp = link(inlineStoreParams[14]);
                return result
                  .then((result) => {
                    if (result) {
                      const obj = {
                        trackOverlayEvent(arg0, arg1) {
                          return closure_1_0(
                            arg0,
                            str,
                            closure_0(8041).AppStoreOverlayVariant.NATIVE,
                            arg1,
                            closure_0(8041).AppStoreOverlaySurfaces.MAIN_CTA,
                          );
                        },
                      };
                      dependencyMap(obj);
                      closure_0(
                        constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                        str,
                        closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      );
                    } else {
                      closure_1_1();
                      closure_0(
                        constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                        str,
                        closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      );
                      const ComponentDispatch = closure_0(1110).ComponentDispatch;
                      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                    }
                    return result;
                  })
                  .catch(() => {
                    closure_1_1();
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = closure_0(1110).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                    return false;
                  });
              });
            const nextPromise = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(
                inlineStoreParams[14],
              ));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[13]).openPlayStoreInlineInstall(
                url,
                appId,
                (arg0) => {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                    str,
                    closure_0(8041).AppStoreOverlayVariant.NATIVE,
                    arg0,
                  );
                  const ComponentDispatch = closure_0(1110).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                },
                result,
              );
              const tmp = link(inlineStoreParams[14]);
              return result
                .then((result) => {
                  if (result) {
                    const obj = {
                      trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(
                          arg0,
                          str,
                          closure_0(8041).AppStoreOverlayVariant.NATIVE,
                          arg1,
                          closure_0(8041).AppStoreOverlaySurfaces.MAIN_CTA,
                        );
                      },
                    };
                    dependencyMap(obj);
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                    );
                  } else {
                    closure_1_1();
                    closure_0(
                      constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = closure_0(1110).ComponentDispatch;
                    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                  }
                  return result;
                })
                .catch(() => {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    closure_0(8041).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = closure_0(1110).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                  return false;
                });
            });
          } else {
            closure_0 = QuestTaskPlatform;
            ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: inlineStoreParams } =
              AppStoreOverlayTelemetryManager);
            ({ url, appId } = inlineStoreParams);
            if (appId != null) {
              appId.toString();
            }
            let result = BrowserManager.openPlayStoreInlineInstall(
              url,
              appId,
              (arg0) => {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_CLOSED,
                  str,
                  closure_0(8041).AppStoreOverlayVariant.NATIVE,
                  arg0,
                );
                const ComponentDispatch = closure_0(1110).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              },
              undefined,
            );
            const tmpResult = AppStoreOverlayTelemetryManager;
            catchPromise = result
              .then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(
                        arg0,
                        str,
                        closure_0(8041).AppStoreOverlayVariant.NATIVE,
                        arg1,
                        closure_0(8041).AppStoreOverlaySurfaces.MAIN_CTA,
                      );
                    },
                  };
                  dependencyMap(obj);
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    str,
                    closure_0(8041).AppStoreOverlayVariant.NATIVE,
                  );
                } else {
                  closure_1_1();
                  closure_0(
                    constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    closure_0(8041).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = closure_0(1110).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              })
              .catch(() => {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  closure_0(8041).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = closure_0(1110).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            const nextPromise1 = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                    return closure_1_0(
                      arg0,
                      str,
                      closure_0(8041).AppStoreOverlayVariant.NATIVE,
                      arg1,
                      closure_0(8041).AppStoreOverlaySurfaces.MAIN_CTA,
                    );
                  },
                };
                dependencyMap(obj);
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                  str,
                  closure_0(8041).AppStoreOverlayVariant.NATIVE,
                );
              } else {
                closure_1_1();
                closure_0(
                  constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  closure_0(8041).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = closure_0(1110).ComponentDispatch;
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
        closure_9 = tmp(tmp2[19]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = tmp(tmp2[18]).getAppStoreOverlayContent(inlineStoreParams, link);
        return appStoreOverlayContent
          .then((result) => {
            if (null == result) {
              flag = openNativeAppStoreOrUrl();
            } else {
              let appStoreOverlayCarouselScrollTracker;
              if (null != constants) {
                appStoreOverlayCarouselScrollTracker = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(
                  tmp4,
                  result,
                );
              }
              closure_9(result, QuestTaskPlatform, closure_1_4, appStoreOverlayCarouselScrollTracker);
              flag = true;
            }
            return flag;
          })
          .catch(() => openNativeAppStoreOrUrl());
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
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      adContentId(8063).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_ad_game_link_directly",
    )
  ) {
    const obj2 = {
      type: tmp2(8062).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      adCreativeType,
      adCreativeId: adContentId,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
    };
    ({
      ctaContent: obj5.questContentCTA,
      content: obj5.surfaceId,
      sourceQuestContent: obj5.sourceQuestContent,
      position: obj5.questContentPosition,
      impressionId: obj5.impressionId,
    } = impressionId);
    tmp2(8052).captureAdUserAction(obj2);
    const tmp2Result = tmp2(8052);
  } else {
    const obj4 = {
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
    const result = tmp2(8041).trackAdContentClicked(obj4);
    const tmp2Result3 = tmp2(8041);
  }
  const ComponentDispatch = tmp2(1110).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    iosAttributionClickFramework = tmp2(11831).getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      adContentId,
    );
    const tmp2Result4 = tmp2(11831);
  }
  let fn;
  obj = adContentId(8063);
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => IosAttributionImpressionRegistry.getStoreKitCredential({ impressionId });
    }
  }
  if (preferExternalAppStore.preferExternalAppStore) {
    if (null == fn) {
      adCreativeType(4514)(url);
    }
  }
  const tmp9 = getInlineStoreParamsFromCta(cta);
  openAppStoreOrUrl({
    link: url,
    directLink: tmp,
    inlineStoreParams: getInlineStoreParamsFromCta(cta),
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAdContentAppStoreOverlayEvent({
        adContentId,
        adCreativeType,
        trackingCtx,
        inlineStoreAppId,
        overlayVariant,
        event,
        timeSpentMs,
        overlaySurface,
      });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return AnalyticsActions.trackAppStoreOverlaySurfaceClickedForAdContent({
        adContentId,
        adCreativeType,
        trackingCtx,
        overlaySurface,
      });
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn,
  });
}
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({
  AnalyticEvents: closure_4,
  ComponentActions: hasOwnProperty,
  PlatformTypes: metroRequire,
  UserSettingsSections: closure_7,
} = Constants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(quest) {
  let hasPlayOnDesktopTaskResult = QuestTaskUtils.hasPlayOnDesktopTask({ quest });
  if (!hasPlayOnDesktopTaskResult) {
    const obj3 = { quest };
    hasPlayOnDesktopTaskResult = QuestTaskUtils.hasStreamOnDesktopTask(obj3);
    const tmpResult = QuestTaskUtils;
  }
  if (!hasPlayOnDesktopTaskResult) {
    hasPlayOnDesktopTaskResult = QuestTaskUtils.hasAchievementInGameTask(quest);
    const tmpResult3 = QuestTaskUtils;
  }
  const obj2 = { quest };
  const items = [];
  const tmpResult4 = QuestTaskUtils;
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
    ({
      ctaContent: obj5.questContentCTA,
      content: obj5.surfaceId,
      sourceQuestContent: obj5.sourceQuestContent,
      impressionId: obj5.impressionId,
    } = ctaContent);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult = captureAdUserAction;
  } else {
    const obj4 = {
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
    const result = AnalyticsActions.trackQuestContentClicked(obj4);
    const tmpResult2 = AnalyticsActions;
  }
  authorizeConnectionDefault({ platformType: platformType.platformType, location: ctaContent.ctaContent });
  obj = AdAnalyticsInterfaceExperiment;
  const obj6 = { platformType: platformType.platformType, location: ctaContent.ctaContent };
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
  const ctaLink = require("QuestCopyUtils").getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    const obj3 = { url: tmp(tmp2[12]).getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj3);
    const tmpResult = tmp(tmp2[12]);
  }
  let tmp6 = ctaLink;
  let tmp7 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
    tmp7 = tmp4;
  }
  if (
    (function urlHasClickId(directAppStoreLinkFromCta) {
      try {
        const _URL = URL;
        const uRL = new URL(directAppStoreLinkFromCta);
        const searchParams = uRL.searchParams;
        return searchParams.has("dclid");
      } catch (err) {
        return false;
      }
    })(tmp7)
  ) {
    const v4Result = tmp(tmp2[20]).v4();
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
    const tmpResult7 = tmp(tmp2[20]);
  }
  const obj = require("QuestCopyUtils");
  if (
    tmpResult8.shouldMigrateToAdAnalyticsInterface(
      require("AdAnalyticsInterfaceExperiment").AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_game_link_directly",
    )
  ) {
    const obj4 = {
      type: tmp(tmp2[6]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST,
      adCreativeId: quest.id,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
      clickId: null,
    };
    ({
      ctaContent: obj9.questContentCTA,
      content: obj9.surfaceId,
      sourceQuestContent: obj9.sourceQuestContent,
      position: obj9.questContentPosition,
      impressionId: obj9.impressionId,
    } = impressionId);
    obj4.clickId = tmp8;
    tmp(tmp2[5]).captureAdUserAction(obj4);
    const tmpResult9 = tmp(tmp2[5]);
  } else {
    const obj5 = {
      questId: quest.id,
      questContent: null,
      questContentCTA: null,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
      clickId: null,
    };
    ({
      content: obj7.questContent,
      ctaContent: obj7.questContentCTA,
      position: obj7.questContentPosition,
      impressionId: obj7.impressionId,
      sourceQuestContent: obj7.sourceQuestContent,
    } = impressionId);
    obj5.clickId = tmp8;
    let result = tmp(tmp2[8]).trackQuestContentClicked(obj5);
    const tmpResult10 = tmp(tmp2[8]);
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
    iosAttributionClickFramework = tmp(tmp2[21]).getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      quest.id,
    );
    const tmpResult11 = tmp(tmp2[21]);
  }
  const ComponentDispatch = tmp(tmp2[15]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp15 = null;
  if (null != ctaConfig3) {
    const obj6 = { url: tmp(tmp2[12]).getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj11.android, ios: obj11.ios } = ctaConfig3);
    tmp15 = getInlineStoreParamsFromCta(obj6);
    const tmpResult12 = tmp(tmp2[12]);
  }
  const obj8 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp15,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAppStoreOverlayEvent({
        quest,
        trackingCtx,
        inlineStoreAppId,
        overlayVariant,
        event,
        timeSpentMs,
        overlaySurface,
      });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return AnalyticsActions.trackAppStoreOverlaySurfaceClickedForQuest({
        questId: quest.id,
        trackingCtx,
        overlaySurface,
      });
    },
    appStoreOverlayCarouselScrollContext: { questId: quest.id },
    getIosAttribution: null,
  };
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => IosAttributionImpressionRegistry.getStoreKitCredential({ impressionId });
    }
  }
  obj8.getIosAttribution = fn;
  openAppStoreOrUrl(obj8);
  tmpResult8 = require("AdAnalyticsInterfaceExperiment");
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, impressionId) {
  openAdGameLinkDirectlyImpl(
    { adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta },
    impressionId,
    { preferExternalAppStore: false },
  );
};
export const openAdGameLinkDirectlyFromBountyEntireVideoTap = function openAdGameLinkDirectlyFromBountyEntireVideoTap(
  adContentId,
  impressionId,
) {
  openAdGameLinkDirectlyImpl(
    { adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta },
    impressionId,
    { preferExternalAppStore: true },
  );
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
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
    ({
      ctaContent: obj5.questContentCTA,
      content: obj5.surfaceId,
      sourceQuestContent: obj5.sourceQuestContent,
      impressionId: obj5.impressionId,
      position: obj5.questContentPosition,
    } = arg1);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult = captureAdUserAction;
  } else {
    const obj4 = {
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
    const result = AnalyticsActions.trackQuestContentClicked(obj4);
    const tmpResult2 = AnalyticsActions;
  }
  openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
  obj = AdAnalyticsInterfaceExperiment;
  const obj6 = { screen: constants3.CONNECTIONS };
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
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
    ({
      ctaContent: obj5.questContentCTA,
      content: obj5.surfaceId,
      sourceQuestContent: obj5.sourceQuestContent,
      impressionId: obj5.impressionId,
      position: obj5.questContentPosition,
      rowIndex: obj5.questContentRowIndex,
    } = arg1);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult = captureAdUserAction;
  } else {
    const obj4 = {
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
    const result = AnalyticsActions.trackQuestContentClicked(obj4);
    const tmpResult2 = AnalyticsActions;
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj7 = { platformType: arr.at(0) };
    return authorizeConnectionDefault(obj7);
  } else {
    const obj8 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
        return authorizeConnectionDefault({ platformType });
      },
      includedPlatformTypes: null,
      includeApplicationConnections: false,
    };
    const _Set = Set;
    const set = new Set(arr);
    obj8.includedPlatformTypes = set;
    DispatcherDefault.dispatch(obj8);
  }
  obj = AdAnalyticsInterfaceExperiment;
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
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
    ({
      ctaContent: obj5.questContentCTA,
      content: obj5.surfaceId,
      sourceQuestContent: obj5.sourceQuestContent,
      impressionId: obj5.impressionId,
      position: obj5.questContentPosition,
      rowIndex: obj5.questContentRowIndex,
    } = arg1);
    captureAdUserAction.captureAdUserAction(obj2);
    const tmpResult = captureAdUserAction;
  } else {
    const obj4 = {
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
    const result = AnalyticsActions.trackQuestContentClicked(obj4);
    const tmpResult2 = AnalyticsActions;
  }
  return authorizeConnectionDefault({ platformType });
};
