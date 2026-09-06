// === Module 11940: createAppMessageEmbed ===

// Module 11940 (createAppMessageEmbed)
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1365 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1369 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4258 */;
import getBestActiveInput from "getBestActiveInput" /* 4425 */;
import fetchApplication from "fetchApplication" /* 7163 */;
import _copy from "_copy" /* 7190 */;
import ApplicationCommandSectionType from "ApplicationCommandSectionType" /* 7523 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 9289 */;
import installApplication from "installApplication" /* 9573 */;
import _launchActivityInBotDM from "_launchActivityInBotDM" /* 11519 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11941 */;
import _joinOrStartActivityInChannel from "_joinOrStartActivityInChannel" /* 11945 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import closure_5 from "handleFetchEmbeddedActivityShelfSuccess" /* 8140 */;
import { FetchState } from "handleFetchEmbeddedActivityShelfSuccess" /* 8140 */;
import closure_7 from "addApplication" /* 4788 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1482 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 9511 */;
import { CodedLinkExtendedType } from "CodedLinkExtendedType" /* 11309 */;

require = arg1;
let closure_11 = ["embedded_cover"];
let c12 = 512;
let result = require("set").fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  ({ appId, message } = arg0);
  let obj = store;
  ({ channel, theme } = arg0);
  const application = store.getApplication(appId);
  if (null == application) {
    if (false === obj.isFetchingApplication(appId)) {
      const application1 = fetchApplication.fetchApplication(appId);
      const obj6 = fetchApplication;
    }
    return { state: "unavailable" };
  } else {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let messageResult = dependencyMap;
    obj1 = ContentClassificationVisibility;
    const contentClassificationVisibility = obj1.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let intl = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === tmp3(11941).ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = tmp3(1114).intl;
        let stringResult = intl3.string(tmp3(1114).t.LPOzxB);
      } else {
        const intl2 = tmp3(1114).intl;
        stringResult = intl2.string(tmp3(1114).t.NIZyKq);
      }
      obj = { state: "blocked", model: null };
      obj = {};
      const merged = Object.assign(intl);
      obj.displayType = tmp3(11942).AppMessageEmbedDisplayType.BLOCKED;
      obj.appId = "";
      obj.messageId = message.id;
      obj.title = null;
      intl = tmp3(1114).intl;
      message = intl.string;
      messageResult = message(tmp3(1114).t.bZBN64);
      obj.header = messageResult;
      obj.info = stringResult;
      obj.tagline = null;
      obj.iconSrc = null;
      obj.staticBannerSrc = null;
      obj.bannerRatio = "bot";
      obj.actions = [];
      obj.embedUrl = null;
      obj.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj.gradientColors = [];
      obj.type = null;
      obj.headerText = null;
      obj[1] = obj;
    } else {
      obj1 = { state: "display", app: null };
      obj1[1] = application;
      return obj1;
    }
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  let obj = getShelfBadgeTypeIfActive;
  const isEmbeddedAppResult = obj.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    applicationAssetFetchState = applicationAssetFetchState.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      let tmp2Result = tmp2(8139);
      const assetIds = tmp2Result.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = tmp2(1114).intl;
      obj = { count: null };
      obj[0] = maxParticipants;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      tmp2Result = tmp2(9506);
      if (tmp2Result.canLaunchFrame(app)) {
        obj = { id: "play_frame", label: null };
        const intl6 = tmp2(1114).intl;
        obj[1] = intl6.string(tmp2(1114).t.RscU7I);
        items.push(obj);
      } else {
        const playInContext = tmp2(11943).getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = tmp2(1114).intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = tmp2(1114).intl;
            let stringResult = intl5.string(tmp2(1114).t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = tmp2(1114).intl;
              stringResult = intl4.string(tmp2(1114).t.VJlc0S);
            }
          }
          obj1 = { id: "play_in_channel", label: null, disabled: null };
          obj1[1] = stringResult;
          obj1[2] = isCurrentlyInInstance;
          items.push(obj1);
        } else {
          const obj2 = { id: "play_in_dm", label: null };
          const intl3 = tmp2(1114).intl;
          obj2[1] = intl3.string(tmp2(1114).t.JeK1Wg);
          items.push(obj2);
        }
        const tmp2Result1 = tmp2(11943);
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result2.isEmbeddedApp(app)) {
      let assetIds1 = tmp2(8139).getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = callback(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = tmp2(8139).getAssetImage(id2, first, c12);
        const tmp2Result4 = tmp2(8139);
      }
      if (null != assetImage) {
        const obj3 = { bannerRatio: "activity", staticBannerSrc: null };
        obj3[1] = assetImage;
        let obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = tmp2(11944).getAppIconSrc(id, icon, bot);
        const tmp2Result5 = tmp2(11944);
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      const tmp2Result3 = tmp2(8139);
      const obj4 = {};
      const appGradientColors = tmp2(11944).getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4.displayType = tmp2(11942).AppMessageEmbedDisplayType.DISPLAY;
      obj4.appId = app.id;
      obj4.messageId = message.id;
      obj4.title = null;
      obj4.header = name;
      obj4.info = joined;
      obj4.tagline = formatToPlainStringResult;
      obj4.iconSrc = appIconSrc;
      obj4.actions = items;
      obj4.embedUrl = embedUrl;
      obj4.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj4.gradientColors = appGradientColors;
      obj4.type = null;
      obj4.headerText = null;
      return obj4;
    }
    if (null != bot2) {
      ({ id: obj12[0], banner: obj12[1] } = bot2);
      const userBannerURL = tmp2(1396).getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: null };
        obj6[1] = userBannerURL;
        obj7 = obj6;
      }
      const obj5 = { id: null, banner: null, size: 512, canAnimate: false };
      const tmp2Result7 = tmp2(1396);
    }
    obj7 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result2 = tmp2(9289);
  }
  const intl = tmp2(1114).intl;
  formatToPlainStringResult = intl.string(tmp2(1114).t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = store.getApplication(appId.appId);
  let obj = isDiscordProxiedAssetUrlDefault;
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  let value;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    obj = { appId: null, channelId: null, analyticsLocations: null, referrerId: null, customId: null };
    obj[0] = appId.appId;
    obj[1] = appId.message.channel_id;
    const items = [tmp2(7182).APP_MESSAGE_EMBED];
    obj[2] = items;
    obj[3] = id;
    obj[4] = value;
    const result = _joinOrStartActivityInChannel.joinOrStartActivityInChannel(obj);
    const obj12 = _joinOrStartActivityInChannel;
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: null, botId: null, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      obj[0] = appId.appId;
      obj[1] = application.bot.id;
      const items1 = [tmp2(7182).APP_MESSAGE_EMBED];
      obj[2] = items1;
      obj[3] = ApplicationCommandSectionType.CommandOrigin.APP_MESSAGE_EMBED;
      obj[4] = id;
      obj[5] = value;
      const result1 = _launchActivityInBotDM.launchActivityInBotDM(obj);
      const obj16 = _launchActivityInBotDM;
    }
  } else if ("play_frame" === actionId) {
    obj1 = { applicationId: null, surface: null, analyticsContext: null };
    obj1[0] = appId.appId;
    obj1[1] = MAIN_SURFACE;
    let obj2 = { isStart: true, analyticsLocations: null };
    const items2 = [tmp2(7182).APP_MESSAGE_EMBED];
    obj2[1] = items2;
    obj1[2] = obj2;
    tmp2(9507).launchFrame(obj1);
    const tmp2Result = tmp2(9507);
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = getBestActiveInput.getBestActiveInput();
    if (bestActiveInput != null) {
      let obj3 = { type: null, context: null };
      obj3[0] = tmp14(1609).KeyboardTypes.APP_LAUNCHER;
      let obj4 = { initialRouteName: null, initiallyExpanded: true, applicationId: null, referrerId: null, customId: null };
      obj4[0] = AppLauncherRouteName.APPLICATION_VIEW;
      obj4[2] = appId.appId;
      obj4[3] = id;
      obj4[4] = value;
      obj3[1] = obj4;
      bestActiveInput.openCustomKeyboard(obj3);
    }
    const obj7 = getBestActiveInput;
    tmp14 = require;
  } else if ("add_app" === actionId) {
    if (null != application) {
      obj4 = installApplication;
      ({ id: obj6[0], customInstallUrl: obj6[1], installParams: obj6[2], integrationTypesConfig: obj6[3] } = application);
      obj4.installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" });
      const obj5 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
    }
  } else if ("link_copied" === actionId) {
    obj2 = _copy;
    obj2.copy(appId.embedUrl);
    obj3 = presentAddedFriendToast;
    obj3.presentLinkCopied();
  } else {
    obj1 = isDiscordFrontendDevelopment;
    obj1.assertNever(appId.actionId);
  }
};