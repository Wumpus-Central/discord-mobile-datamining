// === Module 12197: createAppMessageEmbed ===

// Module 12197 (createAppMessageEmbed)
import util from "util" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import ToastUtils from "ToastUtils" /* 4454 */;
import ChatInputUtils from "ChatInputUtils" /* 4623 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7410 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7768 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8207 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8412 */;
import ApplicationUtils from "ApplicationUtils" /* 9325 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9409 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9577 */;
import canLaunchFrame from "canLaunchFrame" /* 9600 */;
import AppLauncherPlayUtils from "AppLauncherPlayUtils" /* 11776 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 12198 */;
import CodedLinksTypes from "CodedLinksTypes" /* 12199 */;
import getPlayInContext from "getPlayInContext" /* 12200 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 12201 */;
import joinOrStartActivityInChannel from "joinOrStartActivityInChannel" /* 12202 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1372 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8413 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;

require = fn;
const FetchState = fn(8413).FetchState;
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const MAIN_SURFACE = fn(9319).MAIN_SURFACE;
const CodedLinkExtendedType = fn(11576).CodedLinkExtendedType;
let closure_11 = ["embedded_cover"];
let c12 = 512;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(arg0) {
  ({ appId, message } = arg0);
  ({ channel, theme } = arg0);
  const application = ApplicationStore.getApplication(appId);
  if (null == application) {
    if (false === ApplicationStore.isFetchingApplication(appId)) {
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
    const contentClassificationVisibility = ContentClassificationVisibility.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let intl = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.LPOzxB);
      } else {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.NIZyKq);
      }
      const obj3 = { state: "blocked", model: null };
      const obj4 = {};
      const merged = Object.assign(intl);
      obj4.displayType = CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED;
      obj4.appId = "";
      obj4.messageId = message.id;
      obj4.title = null;
      intl = util.intl;
      message = intl.string;
      messageResult = message(util.t.bZBN64);
      obj4.header = messageResult;
      obj4.info = stringResult;
      obj4.tagline = null;
      obj4.iconSrc = null;
      obj4.staticBannerSrc = null;
      obj4.bannerRatio = "bot";
      obj4.actions = [];
      obj4.embedUrl = null;
      obj4.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj4.gradientColors = [];
      obj4.type = null;
      obj4.headerText = null;
      obj3.model = obj4;
    } else {
      const obj5 = { state: "display", app: application };
      return obj5;
    }
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  ({ name, bot } = app);
  const isEmbeddedAppResult = AppLauncherUtils.isEmbeddedApp(app);
  if (isEmbeddedAppResult) {
    const applicationAssetFetchState = ApplicationAssetsStore.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const assetIds = ApplicationAssetUtils.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    if (maxParticipants > 0) {
      const intl2 = util.intl;
      const obj2 = { count: maxParticipants };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.z8EAJW, obj2);
    }
    const items = [];
    if (isEmbeddedAppResult) {
      if (tmp2Result9.canLaunchFrame(app)) {
        const obj3 = { id: "play_frame", label: null };
        const intl6 = util.intl;
        obj3.label = intl6.string(util.t.RscU7I);
        items.push(obj3);
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
          const obj4 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj4);
        } else {
          const obj5 = { id: "play_in_dm", label: null };
          const intl3 = util.intl;
          obj5.label = intl3.string(util.t.JeK1Wg);
          items.push(obj5);
        }
        const tmp2Result10 = getPlayInContext;
      }
      tmp2Result9 = canLaunchFrame;
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    if (tmp2Result11.isEmbeddedApp(app)) {
      let assetIds1 = ApplicationAssetUtils.getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = _slicedToArray(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        assetImage = ApplicationAssetUtils.getAssetImage(id2, first, c12);
        const tmp2Result13 = ApplicationAssetUtils;
      }
      if (null != assetImage) {
        const obj6 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        let obj10 = obj6;
      }
      let appIconSrc = null;
      if (null != icon) {
        appIconSrc = nativeAppMessageEmbedUtil.getAppIconSrc(id, icon, bot);
        const tmp2Result14 = nativeAppMessageEmbedUtil;
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj10.staticBannerSrc;
      }
      const tmp2Result12 = ApplicationAssetUtils;
      const obj7 = {};
      const appGradientColors = nativeAppMessageEmbedUtil.getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj10);
      obj7.displayType = CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY;
      obj7.appId = app.id;
      obj7.messageId = message.id;
      obj7.title = null;
      obj7.header = name;
      obj7.info = joined;
      obj7.tagline = formatToPlainStringResult;
      obj7.iconSrc = appIconSrc;
      obj7.actions = items;
      obj7.embedUrl = embedUrl;
      obj7.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
      obj7.gradientColors = appGradientColors;
      obj7.type = null;
      obj7.headerText = null;
      return obj7;
    }
    if (null != bot2) {
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      const userBannerURL = AvatarUtils.getUserBannerURL({ id: null, banner: null, size: 512, canAnimate: false });
      if (null != userBannerURL) {
        const obj9 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        obj10 = obj9;
      }
      const obj8 = { id: null, banner: null, size: 512, canAnimate: false };
      const tmp2Result16 = AvatarUtils;
    }
    obj10 = { bannerRatio: "bot", staticBannerSrc: null };
    tmp2Result11 = AppLauncherUtils;
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(util.t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  const application = ApplicationStore.getApplication(appId.appId);
  const toURLSafeResult = URLUtilsDefault.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  value2 = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value2 = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    const obj8 = { appId: appId.appId, channelId: appId.message.channel_id, analyticsLocations: null, referrerId: null, customId: null };
    const items = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
    obj8.analyticsLocations = items;
    obj8.referrerId = id;
    obj8.customId = value2;
    const result = joinOrStartActivityInChannel.joinOrStartActivityInChannel(obj8);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      const obj9 = { appId: appId.appId, botId: application.bot.id, analyticsLocations: null, commandOrigin: null, referrerId: null, customId: null };
      const items1 = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
      obj9.analyticsLocations = items1;
      obj9.commandOrigin = ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED;
      obj9.referrerId = id;
      obj9.customId = value2;
      const result1 = AppLauncherPlayUtils.launchActivityInBotDM(obj9);
    }
  } else if ("play_frame" === actionId) {
    const obj10 = { applicationId: appId.appId, surface: MAIN_SURFACE, analyticsContext: null };
    const obj11 = { isStart: true, analyticsLocations: null };
    const items2 = [AnalyticsLocationDefault.APP_MESSAGE_EMBED];
    obj11.analyticsLocations = items2;
    obj10.analyticsContext = obj11;
    FramesActionCreatorsDefault.launchFrame(obj10);
    const tmp2Result = FramesActionCreatorsDefault;
  } else if ("view_in_app_launcher" === actionId) {
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      const obj13 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: null };
      const obj14 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: value2 };
      obj13.context = obj14;
      bestActiveInput.openCustomKeyboard(obj13);
    }
  } else if ("add_app" === actionId) {
    if (null != application) {
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      ApplicationUtils.installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" });
      const obj15 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
    }
  } else if ("link_copied" === actionId) {
    ClipboardUtils.copy(appId.embedUrl);
    ToastUtils.presentLinkCopied();
  } else {
    GlobalUtils.assertNever(appId.actionId);
  }
};