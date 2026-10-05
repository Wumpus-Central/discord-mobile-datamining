// === Module 11551: createAppMessageEmbed ===

// Module 11551 (createAppMessageEmbed)
import intl7 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7604 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7821 */;
import ApplicationAssetsStore2 from "ApplicationAssetsStore" /* 7822 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import ApplicationUtils from "ApplicationUtils" /* 8709 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8986 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10024 */;
import AppLauncherPlayUtils from "AppLauncherPlayUtils" /* 10945 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11552 */;
import CodedLinksTypes from "CodedLinksTypes" /* 11553 */;
import getPlayInContext from "getPlayInContext" /* 11554 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 11555 */;
import joinOrStartActivityInChannel2 from "joinOrStartActivityInChannel" /* 11556 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1377 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import size from "module_2" /* 2 */;

const ApplicationAssetsStore = ApplicationAssetsStore2;

const FetchState = ApplicationAssetsStore2.FetchState;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let closure_11 = ["embedded_cover"];
let c12 = 512;
let result = size.fileFinishedImporting("modules/applications/message_embed/native/createAppMessageEmbed.tsx");

export const getAppLinkGateResult = function getAppLinkGateResult(appId) {
  let channel;
  let intl3;
  let message;
  let obj4;
  let theme;
  appId = appId.appId;
  ({ channel, message, theme } = appId);
  const application = ApplicationStore.getApplication(appId);
  if (null == application) {
    if (false === ApplicationStore.isFetchingApplication(appId)) {
      const obj6 = ApplicationActionCreators;
      const application1 = obj6.fetchApplication(appId);
    }
    return { state: "unavailable" };
  } else {
    let obj5;
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj2 = ContentClassificationVisibility;
    const contentClassificationVisibility = obj2.getContentClassificationVisibility(application.contentClassification, channel, nsfwAllowed);
    if (contentClassificationVisibility !== ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY) {
      let stringResult;
      const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
      if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
        const intl2 = intl7.intl;
        stringResult = intl2.string(intl7.t.LPOzxB);
      } else {
        const intl = intl7.intl;
        stringResult = intl.string(intl7.t.NIZyKq);
      }
      const obj3 = { state: "blocked", model: obj4 };
      obj4 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED, appId: "", messageId: message.id, title: null, header: intl3.string(intl7.t.bZBN64), info: stringResult, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: [], embedUrl: null, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: [], type: null, headerText: null };
      const merged = Object.assign(baseColors);
      intl3 = intl7.intl;
      obj5 = obj3;
    } else {
      obj5 = { state: "display", app: application };
    }
    return obj5;
  }
};
export const createAppMessageEmbed = function createAppMessageEmbed(arg0) {
  let app;
  let appGradientColors;
  let bot;
  let bot2;
  let embedUrl;
  let icon;
  let id;
  let id2;
  let intl3;
  let intl6;
  let maxParticipants;
  let message;
  let name;
  let tags;
  let theme;
  ({ message, app } = arg0);
  ({ theme, embedUrl } = arg0);
  const baseColors = getEmbedThemeColorsDefault(theme).baseColors;
  ({ id, tags, maxParticipants, icon } = app);
  const channel_id = message.channel_id;
  ({ name, bot } = app);
  const obj = AppLauncherUtils;
  const isActivityAppResult = obj.isActivityApp(app);
  if (isActivityAppResult) {
    const applicationAssetFetchState = ApplicationAssetsStore.getApplicationAssetFetchState(id);
    if (applicationAssetFetchState === FetchState.NOT_FETCHED) {
      const tmp2Result = ApplicationAssetUtils;
      const assetIds = tmp2Result.fetchAssetIds(id, closure_11);
      return null;
    } else if (applicationAssetFetchState === tmp6.FETCHING) {
      return null;
    }
  }
  if (null != maxParticipants) {
    let formatToPlainStringResult;
    let obj10;
    if (maxParticipants > 0) {
      const intl2 = intl7.intl;
      const obj2 = { count: maxParticipants };
      formatToPlainStringResult = intl2.formatToPlainString(intl7.t.z8EAJW, obj2);
    }
    const items = [];
    if (isActivityAppResult) {
      const tmp2Result9 = canLaunchContextlessFrame;
      if (tmp2Result9.canLaunchContextlessFrame(app)) {
        const push2 = items.push;
        const obj3 = { id: "play_frame", label: intl6.string(intl7.t.RscU7I) };
        intl6 = intl7.intl;
        push2(obj3);
      } else {
        const tmp2Result10 = getPlayInContext;
        const playInContext = tmp2Result10.getPlayInContext(id, channel_id);
        const isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
        if (playInContext.canLaunchInChannel) {
          let stringResult;
          const string = intl7.intl.string;
          if (isCurrentlyInInstance) {
            const intl5 = intl7.intl;
            stringResult = intl5.string(intl7.t.DPfdsq);
          } else {
            stringResult = tmp11;
            if (null != tmp9) {
              const intl4 = intl7.intl;
              stringResult = intl4.string(intl7.t.VJlc0S);
            }
          }
          const obj4 = { id: "play_in_channel", label: stringResult, disabled: isCurrentlyInInstance };
          items.push(obj4);
        } else {
          const push = items.push;
          const obj5 = { id: "play_in_dm", label: intl3.string(intl7.t.JeK1Wg) };
          intl3 = intl7.intl;
          push(obj5);
        }
      }
    }
    ({ id: id2, bot: bot2 } = app);
    const joined = tags.join(" \u2219 ");
    const tmp2Result11 = AppLauncherUtils;
    if (tmp2Result11.isActivityApp(app)) {
      const tmp2Result12 = ApplicationAssetUtils;
      let assetIds1 = tmp2Result12.getAssetIds(id2, closure_11);
      if (assetIds1 == null) {
        assetIds1 = [];
      }
      const first = _slicedToArray(assetIds1, 1)[0];
      let assetImage = null;
      if (null != first) {
        const tmp2Result13 = ApplicationAssetUtils;
        assetImage = tmp2Result13.getAssetImage(id2, first, c12);
      }
      if (null != assetImage) {
        obj10 = { bannerRatio: "activity", staticBannerSrc: assetImage };
        const obj6 = { bannerRatio: "activity", staticBannerSrc: assetImage };
      }
      let appIconSrc = null;
      if (null != icon) {
        const tmp2Result14 = nativeAppMessageEmbedUtil;
        appIconSrc = tmp2Result14.getAppIconSrc(id, icon, bot);
      }
      let staticBannerSrc = appIconSrc;
      if (appIconSrc == null) {
        staticBannerSrc = obj10.staticBannerSrc;
      }
      const obj7 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY, appId: app.id, messageId: message.id, title: null, header: name, info: joined, tagline: formatToPlainStringResult, iconSrc: appIconSrc, actions: items, embedUrl, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: appGradientColors, type: null, headerText: null };
      const tmp2Result15 = nativeAppMessageEmbedUtil;
      appGradientColors = tmp2Result15.getAppGradientColors(staticBannerSrc);
      const merged = Object.assign(baseColors);
      const merged1 = Object.assign(obj10);
      return obj7;
    }
    if (null != bot2) {
      const obj8 = { id: null, banner: null, size: 512, canAnimate: false };
      ({ id: obj12.id, banner: obj12.banner } = bot2);
      const tmp2Result16 = AvatarUtils;
      const userBannerURL = tmp2Result16.getUserBannerURL(obj8);
      if (null != userBannerURL) {
        obj10 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
        const obj9 = { bannerRatio: "bot", staticBannerSrc: userBannerURL };
      }
    }
    obj10 = { bannerRatio: "bot", staticBannerSrc: null };
  }
  const intl = intl7.intl;
  formatToPlainStringResult = intl.string(intl7.t.RjceQU);
};
export const handleTapAppMessageEmbed = function handleTapAppMessageEmbed(appId) {
  let items;
  let items1;
  let items2;
  let obj11;
  let obj13;
  const application = ApplicationStore.getApplication(appId.appId);
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(appId.embedUrl);
  let id;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    id = searchParams.get("referrer_id");
  }
  if (id == null) {
    id = appId.message.author.id;
  }
  let value2;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value2 = searchParams2.get("custom_id");
  }
  const actionId = appId.actionId;
  if ("play_in_channel" === actionId) {
    const channel_id = appId.message.channel_id;
    const obj8 = { appId: appId.appId, channelId: channel_id, analyticsLocations: items, referrerId: id, customId: value2 };
    const joinOrStartActivityInChannel = joinOrStartActivityInChannel2.joinOrStartActivityInChannel;
    items = [];
    joinOrStartActivityInChannel2;
    items[0] = AnalyticsLocationDefault.APP_MESSAGE_EMBED;
    const result = joinOrStartActivityInChannel(obj8);
  } else if ("play_in_dm" === actionId) {
    let bot;
    if (application != null) {
      bot = application.bot;
    }
    if (null != bot) {
      const obj9 = { appId: appId.appId, botId: application.bot.id, analyticsLocations: items1, commandOrigin: ApplicationCommandTypes.CommandOrigin.APP_MESSAGE_EMBED, referrerId: id, customId: value2 };
      const launchActivityInBotDM = AppLauncherPlayUtils.launchActivityInBotDM;
      items1 = [];
      AppLauncherPlayUtils;
      items1[0] = AnalyticsLocationDefault.APP_MESSAGE_EMBED;
      const result1 = launchActivityInBotDM(obj9);
    }
  } else if ("play_frame" === actionId) {
    const obj10 = { applicationId: appId.appId, surface: MAIN_SURFACE, analyticsContext: obj11 };
    obj11 = { isStart: true, analyticsLocations: items2 };
    const launchFrame = FramesActionCreatorsDefault.launchFrame;
    items2 = [];
    FramesActionCreatorsDefault;
    items2[0] = AnalyticsLocationDefault.APP_MESSAGE_EMBED;
    launchFrame(obj10);
  } else if ("view_in_app_launcher" === actionId) {
    const obj7 = ChatInputUtils;
    const bestActiveInput = obj7.getBestActiveInput();
    if (bestActiveInput != null) {
      const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
      const obj12 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj13 };
      obj13 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: appId.appId, referrerId: id, customId: value2 };
      openCustomKeyboard(obj12);
    }
  } else if ("add_app" === actionId) {
    if (null != application) {
      const obj20 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_message_embed" };
      ({ id: obj6.applicationId, customInstallUrl: obj6.customInstallUrl, installParams: obj6.installParams, integrationTypesConfig: obj6.integrationTypesConfig } = application);
      const obj5 = ApplicationUtils;
      obj5.installApplication(obj20);
    }
  } else if ("link_copied" === actionId) {
    const obj3 = ClipboardUtils;
    obj3.copy(appId.embedUrl);
    const obj4 = ToastUtils;
    obj4.presentLinkCopied();
  } else {
    const obj2 = GlobalUtils;
    obj2.assertNever(appId.actionId);
  }
};