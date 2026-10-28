// === Module 9642: QuestPlatformUtils ===

// Module 9642 (QuestPlatformUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import openURLDefault from "openURL" /* 5692 */;
import BrowserManager from "BrowserManager" /* 5729 */;
import QuestConstants from "QuestConstants" /* 6745 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 6753 */;
import openUserSettings from "openUserSettings" /* 7526 */;
import AnalyticsActions from "AnalyticsActions" /* 7827 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7833 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7836 */;
import captureAdUserAction from "captureAdUserAction" /* 9607 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9610 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9643 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 14343 */;
import trackAppStoreOverlaySurfaceClicked from "trackAppStoreOverlaySurfaceClicked" /* 14360 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 14361 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

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
  ({ trackOverlayEvent: QuestTaskPlatform, trackOverlaySurfaceClick: closure_4, appStoreOverlayCarouselScrollContext: closure_5, getIosAttribution } = link);
  let flag = link.allowExternalOpen;
  if (flag === undefined) {
    flag = true;
  }
  closure_9 = undefined;
  function openNativeAppStoreOrUrl() {
    const AppStoreBottomSheetOverlayFeatureGate = link(inlineStoreParams[15]).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != closure_1) {
        if (null != inlineStoreParams) {
          function toResult(result) {
            return result && "native";
          }
          closure_0 = toResult;
          if (null != getIosAttribution) {
            const promise4 = getIosAttribution();
            let nextPromise = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[12]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[11]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const tmp = link(inlineStoreParams[12]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1120).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
            let catchPromise = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[12]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[11]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const tmp = link(inlineStoreParams[12]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1120).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            }).then(toResult).catch(() => {
              closure_0 = QuestTaskPlatform;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = AppStoreOverlayTelemetryManager);
              ({ url, appId } = inlineStoreParams);
              if (appId != null) {
                str = appId.toString();
              }
              const result = BrowserManager.openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, undefined);
              const nextPromise = result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1120).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              });
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1120).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              }).then(closure_0);
            });
            const nextPromise1 = getIosAttribution().then((result) => {
              closure_0 = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = link(inlineStoreParams[12]));
              ({ url, appId } = dependencyMap);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              result = link(inlineStoreParams[11]).openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const tmp = link(inlineStoreParams[12]);
              return result.then((result) => {
                if (result) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  dependencyMap(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_0(1120).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              }).catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            }).then(toResult);
          } else {
            closure_0 = str;
            ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: inlineStoreParams } = link(inlineStoreParams[12]));
            ({ url, appId } = inlineStoreParams);
            str = undefined;
            if (appId != null) {
              str = appId.toString();
            }
            let result = link(inlineStoreParams[11]).openPlayStoreInlineInstall(url, appId, (arg0) => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg0);
              const ComponentDispatch = closure_0(1120).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
            }, undefined);
            const tmpResult = link(inlineStoreParams[12]);
            const nextPromise2 = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                dependencyMap(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            });
            catchPromise = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                dependencyMap(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            }).catch(() => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
              const ComponentDispatch = closure_0(1120).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              return false;
            }).then(toResult);
            const catchPromise1 = result.then((result) => {
              if (result) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(7827).AppStoreOverlayVariant.NATIVE, arg1, closure_0(7827).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                dependencyMap(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_0(1120).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            }).catch(() => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_0(7827).AppStoreOverlayVariant.NATIVE);
              const ComponentDispatch = closure_0(1120).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              return false;
            });
          }
          return catchPromise;
        }
      }
    }
    if (flag) {
      require("openURL")(closure_0);
    }
    return Promise.resolve(false);
  }
  if (null == getIosAttribution) {
    const CustomAppStoreOverlayExperiment = link(inlineStoreParams[15]).CustomAppStoreOverlayExperiment;
    if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != inlineStoreParams) {
        closure_9 = tmp(tmp2[18]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = tmp(tmp2[17]).getAppStoreOverlayContent(inlineStoreParams, link);
        return appStoreOverlayContent.then((result) => {
          if (null == result) {
            let str = openNativeAppStoreOrUrl();
          } else {
            let appStoreOverlayCarouselScrollTracker;
            if (null != constants) {
              appStoreOverlayCarouselScrollTracker = AnalyticsActions.createAppStoreOverlayCarouselScrollTracker(tmp4, result);
            }
            closure_9(result, QuestTaskPlatform, closure_1_4, appStoreOverlayCarouselScrollTracker);
            str = "custom";
          }
          return str;
        }).catch(() => openNativeAppStoreOrUrl());
      }
    }
  }
  return openNativeAppStoreOrUrl();
}
function openAdGameLinkDirectlyImpl(adContentId, impressionId, preferExternalAppStore) {
  adContentId = adContentId.adContentId;
  ({ adCreativeType: importDefault, cta } = adContentId);
  dependencyMap = impressionId;
  impressionId = undefined;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  const ComponentDispatch = adContentId(1120).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ios = cta.ios;
    let iosAppId;
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    iosAttributionClickFramework = tmp2(14358).getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, adContentId);
    const tmp2Result = tmp2(14358);
  }
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => IosAttributionImpressionRegistry.getStoreKitCredential({ impressionId });
    }
  }
  function trackClick(result) {
    if ("custom" !== result) {
      const obj6 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType, adCreativeId: adContentId, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
      ({ ctaContent: obj2.questContentCTA, content: obj2.surfaceId, sourceQuestContent: obj2.sourceQuestContent, position: obj2.questContentPosition, impressionId: obj2.impressionId } = closure_2);
      captureAdUserAction.captureAdUserAction(obj6);
    } else {
      const obj7 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType, adCreativeId: adContentId, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CUSTOM_APP_STORE, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
      ({ content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = closure_2);
      captureAdUserAction.captureAdUserAction(obj7);
    }
  }
  if (preferExternalAppStore.preferExternalAppStore) {
    if (null == fn) {
      openURLDefault(url);
      trackClick(false);
    }
  }
  tmp2 = adContentId;
  const tmp7 = getInlineStoreParamsFromCta(cta);
  let obj = {
    link: url,
    directLink: tmp,
    inlineStoreParams: getInlineStoreParamsFromCta(cta),
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAdContentAppStoreOverlayEvent({ adContentId, adCreativeType, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return trackAppStoreOverlaySurfaceClicked.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId, adCreativeType, trackingCtx, overlaySurface });
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn
  };
  openAppStoreOrUrl({
    link: url,
    directLink: tmp,
    inlineStoreParams: getInlineStoreParamsFromCta(cta),
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAdContentAppStoreOverlayEvent({ adContentId, adCreativeType, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return trackAppStoreOverlaySurfaceClicked.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId, adCreativeType, trackingCtx, overlaySurface });
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn
  }).then(trackClick);
  const promise = openAppStoreOrUrl({
    link: url,
    directLink: tmp,
    inlineStoreParams: getInlineStoreParamsFromCta(cta),
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAdContentAppStoreOverlayEvent({ adContentId, adCreativeType, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return trackAppStoreOverlaySurfaceClicked.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId, adCreativeType, trackingCtx, overlaySurface });
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn
  });
}
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({ AnalyticEvents: closure_4, ComponentActions: hasOwnProperty, PlatformTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
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
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(arg0, ctaContent) {
  ({ platformType, quest } = arg0);
  const obj = captureAdUserAction;
  obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: ctaContent.ctaContent, surfaceId: ctaContent.content, sourceQuestContent: ctaContent.sourceQuestContent, impressionId: ctaContent.impressionId });
  authorizeConnectionDefault({ platformType, location: ctaContent.ctaContent });
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
    let obj3 = { url: tmp(9628).getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj3);
    const tmpResult = tmp(9628);
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
    const v4Result = tmp(1278).v4();
    dependencyMap = v4Result;
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
    const tmpResult4 = tmp(1278);
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
    iosAttributionClickFramework = tmp(14358).getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, quest.id);
    const tmpResult5 = tmp(14358);
  }
  const ComponentDispatch = tmp(1120).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp12 = null;
  if (null != ctaConfig3) {
    const obj4 = { url: tmp(9628).getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj6.android, ios: obj6.ios } = ctaConfig3);
    tmp12 = getInlineStoreParamsFromCta(obj4);
    const tmpResult6 = tmp(9628);
  }
  const obj5 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp12,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      return AnalyticsActions.trackAppStoreOverlayEvent({ quest, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
    },
    trackOverlaySurfaceClick(overlaySurface) {
      return trackAppStoreOverlaySurfaceClicked.trackAppStoreOverlaySurfaceClickedForQuest({ questId: quest.id, trackingCtx, overlaySurface });
    },
    appStoreOverlayCarouselScrollContext: { questId: quest.id },
    getIosAttribution: null
  };
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => IosAttributionImpressionRegistry.getStoreKitCredential({ impressionId });
    }
  }
  obj5.getIosAttribution = fn;
  let obj = require("QuestCopyUtils");
  openAppStoreOrUrl(obj5).then((result) => {
    if ("custom" !== result) {
      const obj6 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
      ({ ctaContent: obj2.questContentCTA, content: obj2.surfaceId, sourceQuestContent: obj2.sourceQuestContent, position: obj2.questContentPosition, impressionId: obj2.impressionId } = closure_1);
      obj6.clickId = v4Result;
      captureAdUserAction.captureAdUserAction(obj6);
    } else {
      const obj7 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CUSTOM_APP_STORE, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: null };
      ({ content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = closure_1);
      obj7.clickId = v4Result;
      captureAdUserAction.captureAdUserAction(obj7);
    }
  });
  const tmp14Result = openAppStoreOrUrl(obj5);
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, impressionId) {
  openAdGameLinkDirectlyImpl({ adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta }, impressionId, { preferExternalAppStore: false });
};
export const openAdGameLinkDirectlyFromBountyEntireVideoTap = function openAdGameLinkDirectlyFromBountyEntireVideoTap(adContentId, impressionId) {
  openAdGameLinkDirectlyImpl({ adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta }, impressionId, { preferExternalAppStore: true });
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(adCreativeId, ctaContent) {
  const obj = captureAdUserAction;
  obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: adCreativeId.quest.id, questContentCTA: ctaContent.ctaContent, surfaceId: ctaContent.content, sourceQuestContent: ctaContent.sourceQuestContent, impressionId: ctaContent.impressionId, questContentPosition: ctaContent.position });
  openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, ctaContent) {
  quest = quest.quest;
  const obj = captureAdUserAction;
  obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: ctaContent.ctaContent, surfaceId: ctaContent.content, sourceQuestContent: ctaContent.sourceQuestContent, impressionId: ctaContent.impressionId, questContentPosition: ctaContent.position, questContentRowIndex: ctaContent.rowIndex });
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj4 = { platformType: arr.at(0) };
    return authorizeConnectionDefault(obj4);
  } else {
    const obj5 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
          return authorizeConnectionDefault({ platformType });
        },
      includedPlatformTypes: null,
      includeApplicationConnections: false
    };
    const _Set = Set;
    const set = new Set(arr);
    obj5.includedPlatformTypes = set;
    DispatcherDefault.dispatch(obj5);
  }
  const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: ctaContent.ctaContent, surfaceId: ctaContent.content, sourceQuestContent: ctaContent.sourceQuestContent, impressionId: ctaContent.impressionId, questContentPosition: ctaContent.position, questContentRowIndex: ctaContent.rowIndex };
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(adCreativeId, ctaContent, platformType) {
  const obj = captureAdUserAction;
  obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: adCreativeId.quest.id, questContentCTA: ctaContent.ctaContent, surfaceId: ctaContent.content, sourceQuestContent: ctaContent.sourceQuestContent, impressionId: ctaContent.impressionId, questContentPosition: ctaContent.position, questContentRowIndex: ctaContent.rowIndex });
  return authorizeConnectionDefault({ platformType });
};