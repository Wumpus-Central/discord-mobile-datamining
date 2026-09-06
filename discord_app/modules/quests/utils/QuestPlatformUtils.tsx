// discord_app/modules/quests/utils/QuestPlatformUtils.tsx
import set2 from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import set3 from "../../../utils/PlatformUtils.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";
import set4 from "../../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import getApplicationIdsByTaskTypes from "QuestTaskUtils.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import apexExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import ME from "../../../Constants.tsx";

function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    let tmp2 = require;
    let tmp3 = dependencyMap;
    if (set4.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let tmp6 = constants2;
      let arr = items.push(constants2.XBOX);
    } else if (tmp2(5452).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
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
  let obj = set3;
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
    const AppStoreBottomSheetOverlayFeatureGate = link(inlineStoreParams[16]).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != closure_1) {
        if (null != inlineStoreParams) {
          if (null != getIosAttribution) {
            const promise3 = getIosAttribution();
            let catchPromise = getIosAttribution()
              .then((impressionToken) => {
                const callback = str;
                ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = callback(
                  closure_1_2[14],
                ));
                ({ url, appId } = closure_2);
                str = undefined;
                if (appId != null) {
                  str = appId.toString();
                }
                const result = callback(closure_1_2[13]).openPlayStoreInlineInstall(
                  url,
                  appId,
                  (arg0) => {
                    callback2();
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_CLOSED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      arg0,
                    );
                    const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                  },
                  impressionToken,
                );
                const tmp = callback(closure_1_2[14]);
                return result
                  .then((arg0) => {
                    if (arg0) {
                      const obj = { trackOverlayEvent: null };
                      obj[0] = function trackOverlayEvent(arg0, arg1) {
                        return callback(
                          arg0,
                          closure_3,
                          closure_1_0(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                          arg1,
                          closure_1_0(closure_1_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                        );
                      };
                      callback3(obj);
                      callback(
                        closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                        str,
                        callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      );
                    } else {
                      callback2();
                      callback(
                        closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                        str,
                        callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      );
                      const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                      ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                    }
                    return arg0;
                  })
                  .catch(() => {
                    callback2();
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                    return false;
                  });
              })
              .catch(() => {
                const callback = str;
                ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = callback(
                  closure_1_2[14],
                ));
                ({ url, appId } = closure_2);
                str = undefined;
                if (appId != null) {
                  str = appId.toString();
                }
                const result = callback(closure_1_2[13]).openPlayStoreInlineInstall(
                  url,
                  appId,
                  (arg0) => {
                    callback2();
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_CLOSED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      arg0,
                    );
                    const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                  },
                  undefined,
                );
                const tmp = callback(closure_1_2[14]);
                return result
                  .then((arg0) => {
                    if (arg0) {
                      const obj = { trackOverlayEvent: null };
                      obj[0] = function trackOverlayEvent(arg0, arg1) {
                        return callback(
                          arg0,
                          closure_3,
                          closure_1_0(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                          arg1,
                          closure_1_0(closure_1_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                        );
                      };
                      callback3(obj);
                      callback(
                        closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                        str,
                        callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      );
                    } else {
                      callback2();
                      callback(
                        closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                        str,
                        callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      );
                      const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                      ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                    }
                    return arg0;
                  })
                  .catch(() => {
                    callback2();
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                    return false;
                  });
              });
            const nextPromise = getIosAttribution().then((impressionToken) => {
              const callback = str;
              ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = callback(closure_1_2[14]));
              ({ url, appId } = closure_2);
              str = undefined;
              if (appId != null) {
                str = appId.toString();
              }
              const result = callback(closure_1_2[13]).openPlayStoreInlineInstall(
                url,
                appId,
                (arg0) => {
                  callback2();
                  callback(
                    closure_1_4.QUEST_APP_STORE_OVERLAY_CLOSED,
                    str,
                    callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    arg0,
                  );
                  const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                },
                impressionToken,
              );
              const tmp = callback(closure_1_2[14]);
              return result
                .then((arg0) => {
                  if (arg0) {
                    const obj = { trackOverlayEvent: null };
                    obj[0] = function trackOverlayEvent(arg0, arg1) {
                      return callback(
                        arg0,
                        closure_3,
                        closure_1_0(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                        arg1,
                        closure_1_0(closure_1_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                      );
                    };
                    callback3(obj);
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    );
                  } else {
                    callback2();
                    callback(
                      closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                      str,
                      callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    );
                    const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                    ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                  }
                  return arg0;
                })
                .catch(() => {
                  callback2();
                  callback(
                    closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                  return false;
                });
            });
          } else {
            closure_0 = str;
            ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: inlineStoreParams } = tmp(tmp2[14]));
            ({ url, appId } = inlineStoreParams);
            str = undefined;
            if (appId != null) {
              str = appId.toString();
            }
            let result = tmp(tmp2[13]).openPlayStoreInlineInstall(
              url,
              appId,
              (arg0) => {
                callback2();
                callback(
                  closure_1_4.QUEST_APP_STORE_OVERLAY_CLOSED,
                  str,
                  callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                  arg0,
                );
                const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
              },
              undefined,
            );
            const tmpResult = tmp(tmp2[14]);
            catchPromise = result
              .then((arg0) => {
                if (arg0) {
                  const obj = { trackOverlayEvent: null };
                  obj[0] = function trackOverlayEvent(arg0, arg1) {
                    return callback(
                      arg0,
                      closure_3,
                      closure_1_0(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                      arg1,
                      closure_1_0(closure_1_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                    );
                  };
                  callback3(obj);
                  callback(
                    closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                    str,
                    callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                } else {
                  callback2();
                  callback(
                    closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                    str,
                    callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                  );
                  const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return arg0;
              })
              .catch(() => {
                callback2();
                callback(
                  closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            const nextPromise1 = result.then((arg0) => {
              if (arg0) {
                const obj = { trackOverlayEvent: null };
                obj[0] = function trackOverlayEvent(arg0, arg1) {
                  return callback(
                    arg0,
                    closure_3,
                    closure_1_0(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                    arg1,
                    closure_1_0(closure_1_2[8]).AppStoreOverlaySurfaces.MAIN_CTA,
                  );
                };
                callback3(obj);
                callback(
                  closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED,
                  str,
                  callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                );
              } else {
                callback2();
                callback(
                  closure_1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED,
                  str,
                  callback(closure_1_2[8]).AppStoreOverlayVariant.NATIVE,
                );
                const ComponentDispatch = callback(closure_1_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(closure_1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return arg0;
            });
          }
        }
        return catchPromise;
      }
    }
    if (flag) {
      closure_1_1(tmp2[17])(closure_0);
    }
    catchPromise = Promise.resolve(false);
  }
  if (null == getIosAttribution) {
    const CustomAppStoreOverlayExperiment = link(inlineStoreParams[16]).CustomAppStoreOverlayExperiment;
    if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != inlineStoreParams) {
        closure_7 = tmp(tmp2[19]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = tmp(tmp2[18]).getAppStoreOverlayContent(inlineStoreParams, link);
        return appStoreOverlayContent
          .then((arg0) => {
            if (null == arg0) {
              flag = openNativeAppStoreOrUrl();
            } else {
              callback(arg0, closure_3);
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
  let obj = adContentId(11192);
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      adContentId(11192).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_ad_game_link_directly",
    )
  ) {
    let tmp2Result = tmp2(11193);
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
    };
    obj[0] = tmp2(11197).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = adCreativeType;
    obj[2] = adContentId;
    ({
      ctaContent: obj5[3],
      content: obj5[4],
      sourceQuestContent: obj5[5],
      position: obj5[6],
      impressionId: obj5[7],
    } = impressionId);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(7718);
    obj = {
      adContentId: null,
      adCreativeType: null,
      questContent: null,
      questContentCTA: null,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    obj[0] = adContentId;
    obj[1] = adCreativeType;
    ({
      content: obj3[2],
      ctaContent: obj3[3],
      position: obj3[4],
      impressionId: obj3[5],
      sourceQuestContent: obj3[6],
    } = impressionId);
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
    iosAttributionClickFramework = tmp2(11488).getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      adContentId,
    );
    const tmp2Result1 = tmp2(11488);
  }
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        let obj = adContentId(impressionId[22]);
        obj = { impressionId };
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
      let obj = adContentId(impressionId[8]);
      obj = {
        adContentId,
        adCreativeType,
        trackingCtx: impressionId,
        inlineStoreAppId,
        overlayVariant,
        event,
        timeSpentMs,
        overlaySurface,
      };
      return obj.trackAdContentAppStoreOverlayEvent(obj);
    },
    getIosAttribution: fn,
  });
}
const QuestTaskPlatform = QuestsExperimentLocations.QuestTaskPlatform;
({ AnalyticEvents: c4, ComponentActions: c5, PlatformTypes: closure_6, UserSettingsSections: error } = ME);
let result = set2.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(closure_0) {
  let obj = getApplicationIdsByTaskTypes;
  obj = { quest: closure_0 };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    let tmpResult = tmp(7724);
    obj = { quest: null };
    obj[0] = closure_0;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj);
  }
  if (!hasPlayOnDesktopTaskResult) {
    tmpResult = tmp(7724);
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
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_authorization_connection_modal",
    )
  ) {
    let tmpResult = tmp(11193);
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
    };
    obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(5451).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({ ctaContent: obj5[3], content: obj5[4], sourceQuestContent: obj5[5], impressionId: obj5[6] } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
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
export { getDirectAppStoreLinkFromCta };
export { getInlineStoreParamsFromCta };
export { openAppStoreOrUrl };
export const openGameLinkDirectly = function openGameLinkDirectly(quest, impressionId) {
  const _require = quest;
  closure_1 = impressionId;
  let obj = _require(impressionId[12]);
  const ctaLink = obj.getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    obj = { url: null, android: null, ios: null };
    let tmpResult = tmp(tmp2[12]);
    obj[0] = tmpResult.getCtaLink(quest.config);
    ({ android: obj2[1], ios: obj2[2] } = ctaConfig);
    tmp4 = getDirectAppStoreLinkFromCta(obj);
  }
  let tmp6 = ctaLink;
  let tmp7 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
    tmp7 = tmp4;
  }
  if (
    (function urlHasClickId(arg0) {
      try {
        const _URL = URL;
        const uRL = new URL(arg0);
        const searchParams = uRL.searchParams;
        return searchParams.has("dclid");
      } catch (err) {
        return false;
      }
    })(tmp7)
  ) {
    tmpResult = tmp(tmp2[20]);
    const v4Result = tmpResult.v4();
    tmp6 = (function setClickIdOnUrl(arg0, v4Result) {
      try {
        const _URL = URL;
        const str = new URL(arg0);
        const searchParams = str.searchParams;
        const result = searchParams.set("dclid", v4Result);
        return str.toString();
      } catch (err) {
        return tmp;
      }
    })(tmp7, v4Result);
  }
  if (
    tmpResult1.shouldMigrateToAdAnalyticsInterface(
      _require(impressionId[4]).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "open_game_link_directly",
    )
  ) {
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
      clickId: null,
    };
    obj[0] = tmp(tmp2[6]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
    obj[1] = tmp(tmp2[7]).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({
      ctaContent: obj9[3],
      content: obj9[4],
      sourceQuestContent: obj9[5],
      position: obj9[6],
      impressionId: obj9[7],
    } = impressionId);
    obj[8] = tmp8;
    tmp(tmp2[5]).captureAdUserAction(obj);
    const tmpResult2 = tmp(tmp2[5]);
  } else {
    obj1 = {
      questId: null,
      questContent: null,
      questContentCTA: null,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
      clickId: null,
    };
    obj1[0] = quest.id;
    ({
      content: obj7[1],
      ctaContent: obj7[2],
      position: obj7[3],
      impressionId: obj7[4],
      sourceQuestContent: obj7[5],
    } = impressionId);
    obj1[6] = tmp8;
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
    iosAttributionClickFramework = tmp(tmp2[21]).getIosAttributionClickFramework(
      null != iosAppId,
      impressionId.sourceQuestContent,
      quest.id,
    );
    const tmpResult4 = tmp(tmp2[21]);
  }
  const ComponentDispatch = tmp(tmp2[15]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp15 = null;
  if (null != ctaConfig3) {
    const obj2 = { url: null, android: null, ios: null };
    obj2[0] = tmp(tmp2[12]).getCtaLink(quest.config);
    ({ android: obj11[1], ios: obj11[2] } = ctaConfig3);
    tmp15 = getInlineStoreParamsFromCta(obj2);
    const tmpResult5 = tmp(tmp2[12]);
  }
  const obj3 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp15,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      let obj = quest(impressionId[8]);
      obj = { quest, trackingCtx: closure_1, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAppStoreOverlayEvent(obj);
    },
    getIosAttribution: null,
  };
  let fn;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        let obj = quest(impressionId[22]);
        obj = { impressionId };
        return obj.getStoreKitCredential(obj);
      };
    }
  }
  obj3[4] = fn;
  openAppStoreOrUrl(obj3);
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
  let obj = apexExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_console_connection_settings",
    )
  ) {
    let tmpResult = tmp(11193);
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
    };
    obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(5451).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({
      ctaContent: obj5[3],
      content: obj5[4],
      sourceQuestContent: obj5[5],
      impressionId: obj5[6],
      position: obj5[7],
    } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = {
      questId: null,
      questContent: null,
      questContentPosition: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    obj[0] = quest.id;
    ({
      content: obj3[1],
      position: obj3[2],
      ctaContent: obj3[3],
      impressionId: obj3[4],
      sourceQuestContent: obj3[5],
    } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = apexExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_add_console_connection_modal",
    )
  ) {
    let tmpResult = tmp(11193);
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
      questContentRowIndex: null,
    };
    obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(5451).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({
      ctaContent: obj5[3],
      content: obj5[4],
      sourceQuestContent: obj5[5],
      impressionId: obj5[6],
      position: obj5[7],
      rowIndex: obj5[8],
    } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = {
      questId: null,
      questContent: null,
      questContentPosition: null,
      questContentRowIndex: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    obj[0] = quest.id;
    ({
      content: obj3[1],
      position: obj3[2],
      rowIndex: obj3[3],
      ctaContent: obj3[4],
      impressionId: obj3[5],
      sourceQuestContent: obj3[6],
    } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    obj1 = { platformType: null };
    obj1[0] = arr.at(0);
    return authorizeConnectionDefault(obj1);
  } else {
    const obj2 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: null,
      includedPlatformTypes: null,
      includeApplicationConnections: false,
    };
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
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      apexExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
      "open_single_console_connection_modal",
    )
  ) {
    let tmpResult = tmp(11193);
    obj = {
      type: null,
      adCreativeType: null,
      adCreativeId: null,
      questContentCTA: null,
      surfaceId: null,
      sourceQuestContent: null,
      impressionId: null,
      questContentPosition: null,
      questContentRowIndex: null,
    };
    obj[0] = tmp(11197).AdUserActionType.CLICK_INTERNAL;
    obj[1] = tmp(5451).AdCreativeType.QUEST;
    obj[2] = quest.id;
    ({
      ctaContent: obj5[3],
      content: obj5[4],
      sourceQuestContent: obj5[5],
      impressionId: obj5[6],
      position: obj5[7],
      rowIndex: obj5[8],
    } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(7718);
    obj = {
      questId: null,
      questContent: null,
      questContentPosition: null,
      questContentRowIndex: null,
      questContentCTA: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    obj[0] = quest.id;
    ({
      content: obj3[1],
      position: obj3[2],
      rowIndex: obj3[3],
      ctaContent: obj3[4],
      impressionId: obj3[5],
      sourceQuestContent: obj3[6],
    } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return authorizeConnectionDefault({ platformType });
};
