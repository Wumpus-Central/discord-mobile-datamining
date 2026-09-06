// === Module 11940: createAppMessageEmbed ===

// Module 11940 (createAppMessageEmbed)
import util from "util" /* 1114 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7163 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8139 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9289 */;
import canLaunchFrame from "canLaunchFrame" /* 9506 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9507 */;
import ApplicationUtils from "ApplicationUtils" /* 9573 */;
import AppLauncherPlayUtils from "AppLauncherPlayUtils" /* 11519 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11941 */;
import CodedLinksTypes from "CodedLinksTypes" /* 11942 */;
import getPlayInContext from "getPlayInContext" /* 11943 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 11944 */;
import joinOrStartActivityInChannel from "joinOrStartActivityInChannel" /* 11945 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8140 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const FetchState = fn(8140).FetchState;
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const MAIN_SURFACE = fn(9511).MAIN_SURFACE;
const CodedLinkExtendedType = fn(11309).CodedLinkExtendedType;
let closure_11 = ["embedded_cover"];
let c12 = 512;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  ({ appId, message } = arg0);
  let obj = ApplicationStore;
  ({ channel, theme } = arg0);
  const application = ApplicationStore.getApplication(appId);
  if (null == application) {
    if (false === obj.isFetchingApplication(appId)) {
      const application1 = ApplicationActionCreators.fetchApplication(appId);
    }
    return { state: "unavailable" };
  } else {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let messageResult = dependencyMap;
    let obj1 = ContentClassificationVisibility;
    const contentClassificationVisibility = obj1.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let intl = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.LPOzxB);
      } else {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.NIZyKq);
      }
      obj = { state: "blocked", model: null };
      obj = {};
      const merged = Object.assign(intl);
      obj.displayType = CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED;
      obj.appId = "";
      obj.messageId = message.id;
      obj.title = null;
      intl = util.intl;
      message = intl.string;
      messageResult = message(util.t.bZBN64);
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
      obj.model = obj;
    } else {
      obj1 = { state: "display", app: application };
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
  let obj = AppLauncherUtils;
  const isEmbeddedAppResult = obj.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    const applicationAssetFetchState = ApplicationAssetsStore.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      let tmp2Result = ApplicationAssetUtils;
      const assetIds = tmp2Result.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = util.intl;
      obj = { count: maxParticipants };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.z8EAJW, obj);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      tmp2Result = canLaunchFrame;
      if (tmp2Result.canLaunchFrame(app)) {
        obj = { id: "play_frame", label: null };
        const intl6 = util.intl;
        obj.label = intl6.string(util.t.RscU7I);
        items.push(obj);
      } else {
        const playInContext = getPlayInContext.getPlayInContext(id, message.channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          const string = util.intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = util.intl;
            let stringResult = intl5.string(util.t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = util.intl;
              stringResult = intl4.string(util.t.VJlc0S);
            }
          }
          const obj1 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj1);
        } else {
          const obj2 = { id: "play_in_dm", label: null };
          const intl3 = util.intl;
          obj2.label = intl3.string(util.t.JeK1Wg);
          items.push(obj2);
        }
        const tmp2Result1 = getPlayInContext;
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result2.isEmbeddedApp(app)) {
      let assetIds1 = ApplicationAssetUtils.getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = _slicedToArray(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = ApplicationAssetUtils.getAssetImage(id2, first, c12);
        const tmp2Result4 = ApplicationAssetUtils;
      }
      if (null != assetImage) {
        const obj3 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        let obj7 = obj3;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = nativeAppMessageEmbedUtil.getAppIconSrc(id, icon, bot);
        const tmp2Result5 = nativeAppMessageEmbedUtil;
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj7.staticBannerSrc;
      }
      const tmp2Result3 = ApplicationAssetUtils;
      const obj4 = {};
      const appGradientColors = nativeAppMessageEmbedUtil.getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj7);
      obj4.displayType = CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY;
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
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      const userBannerURL = AvatarUtils.getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj6 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        obj7 = obj6;
      }
      const obj5 = { id: null, banner: null, size: 512, canAnimate: false };
      const tmp2Result7 = AvatarUtils;
    }
    obj7 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result2 = AppLauncherUtils;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(util.t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = ApplicationStore.getApplication(appId.appId);
  let obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  value = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    obj = { appId: appId.appId, channelId: appId.message.channel_id, analyticsLocations: null, referrerId: null, customId: null };
    const items = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
    obj.analyticsLocations = items;
    obj.referrerId = id;
    obj.customId = value;
    const result = joinOrStartActivityInChannel.joinOrStartActivityInChannel(obj);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      obj = { appId: appId.appId, botId: application.bot.id, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      const items1 = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
      obj.analyticsLocations = items1;
      obj.commandOrigin = ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED;
      obj.referrerId = id;
      obj.customId = value;
      const result1 = AppLauncherPlayUtils.launchActivityInBotDM(obj);
    }
  } else if ("play_frame" === actionId) {
    let obj1 = { applicationId: appId.appId, surface: MAIN_SURFACE, analyticsContext: null };
    let obj2 = { isStart: true, analyticsLocations: null };
    const items2 = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
    obj2.analyticsLocations = items2;
    obj1.analyticsContext = obj2;
    FramesActionCreatorsDefault.launchFrame(obj1);
    const tmp2Result = FramesActionCreatorsDefault;
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      let obj3 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
      let obj4 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: value };
      obj3.context = obj4;
      bestActiveInput.openCustomKeyboard(obj3);
    }
  } else if ("add_app" === actionId) {
    if (null != application) {
      obj4 = ApplicationUtils;
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      obj4.installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" });
      const obj5 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
    }
  } else if ("link_copied" === actionId) {
    obj2 = ClipboardUtils;
    obj2.copy(appId.embedUrl);
    obj3 = ToastUtils;
    obj3.presentLinkCopied();
  } else {
    obj1 = GlobalUtils;
    obj1.assertNever(appId.actionId);
  }
};