// discord_app/modules/applications/message_embed/native/createAppMessageEmbed.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import isDiscordFrontendDevelopment from "../../../../utils/GlobalUtils.tsx";
import getAvatarURL from "../../../../utils/AvatarUtils.tsx";
import isDiscordProxiedAssetUrlDefault from "../../../../utils/URLUtils.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import presentAddedFriendToast from "../../../toast/native/ToastUtils.tsx";
import getBestActiveInput from "../../../../utils/native/ChatInputUtils.tsx";
import ApplicationCommandSectionType from "../../../application_commands/ApplicationCommandTypes.tsx";
import fetchApplication from "../../ApplicationActionCreators.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import _copy from "../../../../utils/ClipboardUtils.native.tsx";
import updateAssets from "../../../../utils/ApplicationAssetUtils.tsx";
import getEmbedThemeColorsDefault from "../../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import getShelfBadgeTypeIfActive from "../../../app_launcher/utils/AppLauncherUtils.tsx";
import canLaunchFrame from "../../../frames/utils/canLaunchFrame.tsx";
import _launchFrameOnNativeDefault from "../../../frames/FramesActionCreators.native.tsx";
import installApplication from "../../../../utils/native/ApplicationUtils.tsx";
import _launchActivityInBotDM from "../../../app_launcher/utils/AppLauncherPlayUtils.tsx";
import ContentClassificationVisibility from "../../../content_classification/ContentClassificationVisibility.tsx";
import AppMessageEmbedDisplayType from "../../../messages/native/renderer/row_data/embeds/coded_links/CodedLinksTypes.tsx";
import usePlayInContext from "../utils/getPlayInContext.tsx";
import items2 from "utils/nativeAppMessageEmbedUtil.tsx";
import _joinOrStartActivityInChannel from "utils/joinOrStartActivityInChannel.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import handleFetchEmbeddedActivityShelfSuccess from "../../ApplicationAssetsStore.tsx";
import { FetchState } from "../../ApplicationAssetsStore.tsx";
import addApplication from "../../ApplicationStore.tsx";
import { AppLauncherRouteName } from "../../../app_launcher/native/AppLauncherNativeConstants.tsx";
import { MAIN_SURFACE } from "../../../frames/FramesConstants.tsx";
import { CodedLinkExtendedType } from "../../../messages/native/renderer/row_data/embeds/coded_links/CodedLinksConstants.tsx";

require = fn;
let closure_11 = ["embedded_cover"];
let c12 = 512;
let result = require("obj132").fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  ({ appId, message } = arg0);
  let obj = store;
  ({ channel, theme } = arg0);
  const application = store.getApplication(appId);
  if (null == application) {
    if (false === obj.isFetchingApplication(appId)) {
      const application1 = fetchApplication.fetchApplication(appId);
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
      if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = getSystemLocale.intl;
        let stringResult = intl3.string(getSystemLocale.t.LPOzxB);
      } else {
        const intl2 = getSystemLocale.intl;
        stringResult = intl2.string(getSystemLocale.t.NIZyKq);
      }
      obj = {};
      const merged = Object.assign(intl);
      obj.displayType = AppMessageEmbedDisplayType.AppMessageEmbedDisplayType.BLOCKED;
      obj.appId = "";
      obj.messageId = message.id;
      obj.title = null;
      intl = getSystemLocale.intl;
      message = intl.string;
      messageResult = message(getSystemLocale.t.bZBN64);
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
      let tmp2Result = updateAssets;
      const assetIds = tmp2Result.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = getSystemLocale.intl;
      obj = { count: null };
      obj[0] = maxParticipants;
      let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      tmp2Result = canLaunchFrame;
      if (tmp2Result.canLaunchFrame(app)) {
        obj = { id: "play_frame", label: null };
        const intl6 = getSystemLocale.intl;
        obj[1] = intl6.string(getSystemLocale.t.RscU7I);
        items.push(obj);
      } else {
        const playInContext = usePlayInContext.getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = getSystemLocale.intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = getSystemLocale.intl;
            let stringResult = intl5.string(getSystemLocale.t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = getSystemLocale.intl;
              stringResult = intl4.string(getSystemLocale.t.VJlc0S);
            }
          }
          obj1 = { id: "play_in_channel", label: null, disabled: null };
          obj1[1] = stringResult;
          obj1[2] = isCurrentlyInInstance;
          items.push(obj1);
        } else {
          const obj2 = { id: "play_in_dm", label: null };
          const intl3 = getSystemLocale.intl;
          obj2[1] = intl3.string(getSystemLocale.t.JeK1Wg);
          items.push(obj2);
        }
        const tmp2Result1 = usePlayInContext;
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result2.isEmbeddedApp(app)) {
      let assetIds1 = updateAssets.getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = callback(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = updateAssets.getAssetImage(id2, first, c12);
        const tmp2Result4 = updateAssets;
      }
      if (null != assetImage) {
        const obj3 = { bannerRatio: "activity", staticBannerSrc: null };
        obj3[1] = assetImage;
        let obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = items2.getAppIconSrc(id, icon, bot);
        const tmp2Result5 = items2;
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      const tmp2Result3 = updateAssets;
      const obj4 = {};
      const appGradientColors = items2.getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4.displayType = AppMessageEmbedDisplayType.AppMessageEmbedDisplayType.DISPLAY;
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
      const userBannerURL = getAvatarURL.getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: null };
        obj6[1] = userBannerURL;
        obj7 = obj6;
      }
      const tmp2Result7 = getAvatarURL;
    }
    obj7 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result2 = getShelfBadgeTypeIfActive;
  }
  const intl = getSystemLocale.intl;
  formatToPlainStringResult = intl.string(getSystemLocale.t.RjceQU);
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
    const items = [QUICK_SWITCHERDefault.APP_MESSAGE_EMBED];
    obj[2] = items;
    obj[3] = id;
    obj[4] = value;
    const result = _joinOrStartActivityInChannel.joinOrStartActivityInChannel(obj);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: null, botId: null, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      obj[0] = appId.appId;
      obj[1] = application.bot.id;
      const items1 = [QUICK_SWITCHERDefault.APP_MESSAGE_EMBED];
      obj[2] = items1;
      obj[3] = ApplicationCommandSectionType.CommandOrigin.APP_MESSAGE_EMBED;
      obj[4] = id;
      obj[5] = value;
      const result1 = _launchActivityInBotDM.launchActivityInBotDM(obj);
    }
  } else if ("play_frame" === actionId) {
    obj1 = { applicationId: null, surface: null };
    obj1[0] = appId.appId;
    obj1[1] = MAIN_SURFACE;
    _launchFrameOnNativeDefault.launchFrame(obj1);
    const tmp2Result = _launchFrameOnNativeDefault;
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = getBestActiveInput.getBestActiveInput();
    if (bestActiveInput != null) {
      let obj2 = { type: null, context: null };
      obj2[0] = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
      let obj3 = { initialRouteName: null, initiallyExpanded: true, applicationId: null, referrerId: null, customId: null };
      obj3[0] = AppLauncherRouteName.APPLICATION_VIEW;
      obj3[2] = appId.appId;
      obj3[3] = id;
      obj3[4] = value;
      obj2[1] = obj3;
      bestActiveInput.openCustomKeyboard(obj2);
    }
  } else if ("add_app" === actionId) {
    if (null != application) {
      const obj4 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
      ({ id: obj6[0], customInstallUrl: obj6[1], installParams: obj6[2], integrationTypesConfig: obj6[3] } = application);
      obj4.installApplication(obj4);
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