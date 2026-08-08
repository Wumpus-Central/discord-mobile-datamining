// discord_app/modules/application_account_linking/native/AccountLinkBanner.tsx
import get_ActivityIndicator from "Button";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "ExperimentalGameControllerLinkIcon";
import createCacheKey from "createCacheKey";
import importAllResult from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { apexExperiment } from "../experiments/mobileAccountLinkingExperiment.tsx";

let c3;
let c4;
let c9;
let error;
let metroImportAll;
const require = arg1;
function AccountLinkLargeBanner(arg0) {
  let application;
  let importDefault;
  let require;
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = callback3();
  let obj = require(analyticsLocations[11]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = importDefault(analyticsLocations[12])(importDefault(analyticsLocations[13]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  if (applicationAccountLinkBenefitConfig != null) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  let tmp8 = null;
  if (null != reward_name) {
    obj = { variant: "secondary", style: null, children: null };
    obj[1] = tmp.card;
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = function onPress() {
      return callback(outer1_6.USER_DISMISS);
    };
    obj[2] = tmp.closeButton;
    obj[3] = callback(tmp2(tmp3[16]).XSmallIcon, { size: "sm", color: "text-muted" });
    const items1 = [callback(tmp2(tmp3[15]).PressableOpacity, obj), , , , ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.imagesContainer;
    const obj2 = { game: null, size: null };
    obj2[0] = application;
    obj2[1] = NORMAL;
    const items2 = [callback(importDefault(tmp3[6]), obj2), , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.ellipsisContainer;
    const obj4 = { style: null };
    obj4[0] = tmp.ellipsisDot;
    const items3 = [callback(closure_4, obj4), , ];
    const obj5 = { style: null };
    obj5[0] = tmp.ellipsisDot;
    items3[1] = callback(closure_4, obj5);
    const obj6 = { style: null };
    obj6[0] = tmp.ellipsisDot;
    items3[2] = callback(closure_4, obj6);
    obj3[1] = items3;
    items2[1] = callback2(closure_4, obj3);
    const obj7 = { user: null, size: null, guildId: "Array" };
    obj7[0] = stateFromStores;
    obj7[1] = tmp2(tmp3[17]).AvatarSizes.LARGE_48;
    items2[2] = callback(tmp2(tmp3[17]).Avatar, obj7);
    obj1[1] = items2;
    items1[1] = callback2(closure_4, obj1);
    const obj8 = { variant: null, color: "mobile-text-heading-primary", style: null, children: null };
    obj8[0] = c17;
    obj8[2] = tmp.title;
    const intl = tmp2(tmp3[19]).intl;
    const obj9 = { gameName: null };
    obj9[0] = application.name;
    obj8[3] = intl.formatToPlainString(tmp2(tmp3[19]).t["3gpxqO"], obj9);
    items1[2] = callback(tmp2(tmp3[18]).Text, obj8);
    const obj10 = { variant: null, color: "text-muted", style: null, children: null };
    obj10[0] = c18;
    obj10[2] = tmp.body;
    const intl2 = tmp2(tmp3[19]).intl;
    const obj11 = { rewardName: null };
    obj11[0] = reward_name;
    obj10[3] = intl2.formatToPlainString(tmp2(tmp3[19]).t.vxvKMm, obj11);
    items1[3] = callback(tmp2(tmp3[18]).Text, obj10);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.ctaContainer;
    const obj13 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj13[2] = intl3.string(tmp2(tmp3[19]).t["0mvtKL"]);
    obj13[3] = function onPress() {
      callback2({ analyticsLocations });
    };
    obj13[4] = callback(tmp2(tmp3[21]).ExperimentalGameControllerLinkIcon, { size: "sm" });
    obj12[1] = callback(tmp2(tmp3[20]).Button, obj13);
    items1[4] = callback(closure_4, obj12);
    obj[2] = items1;
    tmp8 = callback2(tmp2(tmp3[14]).Card, obj);
  }
  return tmp8;
}
function AccountLinkMediumBanner(arg0) {
  let application;
  let importDefault;
  let require;
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = callback4();
  analyticsLocations = importDefault(analyticsLocations[12])(importDefault(analyticsLocations[13]).MOBILE_ACCOUNT_LINK_MEDIUM_BANNER).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  if (applicationAccountLinkBenefitConfig != null) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  const applicationAccountLinkBenefitConfig2 = application.applicationAccountLinkBenefitConfig;
  if (applicationAccountLinkBenefitConfig2 != null) {
    const reward_image = applicationAccountLinkBenefitConfig2.reward_image;
  }
  let tmp5 = null;
  if (null != reward_name) {
    tmp5 = null;
    if (null != reward_image) {
      let obj = { variant: "secondary", style: null, children: null };
      obj[1] = tmp.card;
      obj = { style: null, children: null };
      obj[0] = tmp.contentContainer;
      obj = { source: null, style: null, resizeMode: "contain" };
      const obj1 = { uri: null };
      obj1[0] = reward_image;
      obj[0] = obj1;
      obj[1] = tmp.rewardImage;
      const items = [callback(closure_3, obj), , ];
      const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj2[2] = tmp.bodyText;
      const intl = require(tmp2[19]).intl;
      const obj3 = { gameName: null, rewardName: null };
      obj3[0] = application.name;
      obj3[1] = reward_name;
      obj2[3] = intl.formatToPlainString(require(tmp2[19]).t["V/C76E"], obj3);
      items[1] = callback(require(tmp2[18]).Text, obj2);
      const obj4 = { accessibilityRole: "button", onPress: null, style: null, children: null };
      obj4[1] = function onPress() {
        return callback(outer1_6.USER_DISMISS);
      };
      obj4[2] = tmp.closeButton;
      obj4[3] = callback(require(tmp2[16]).XSmallIcon, { size: "sm", color: "text-muted" });
      items[2] = callback(require(tmp2[15]).PressableOpacity, obj4);
      obj[1] = items;
      const items1 = [callback2(closure_4, obj), ];
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.ctaContainer;
      const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null, icon: null };
      const intl2 = require(tmp2[19]).intl;
      obj6[2] = intl2.string(require(tmp2[19]).t["0mvtKL"]);
      obj6[3] = function onPress() {
        callback2({ analyticsLocations });
      };
      obj6[4] = callback(require(tmp2[21]).ExperimentalGameControllerLinkIcon, { size: "xs" });
      obj5[1] = callback(require(tmp2[20]).Button, obj6);
      items1[1] = callback(closure_4, obj5);
      obj[2] = items1;
      tmp5 = callback2(require(tmp2[14]).Card, obj);
    }
  }
  return tmp5;
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
const PX_82 = require("Themes").space.PX_8;
const PX_12 = require("Themes").space.PX_12;
const PX_16 = require("Themes").space.PX_16;
const PX_4 = require("Themes").space.PX_4;
const NORMAL = require("GameIcon").GameIconSizes.NORMAL;
let closure_16 = require("GameIcon").GameIconImageSize[NORMAL];
let c17 = "heading-md/bold";
let c18 = "text-sm/medium";
const PX_162 = require("Themes").space.PX_16;
const PX_122 = require("Themes").space.PX_12;
let obj = { card: { padding: PX_12 }, closeButton: null, imagesContainer: null, ellipsisContainer: null, ellipsisDot: null, title: null, body: null, ctaContainer: null };
obj = { position: "absolute", top: require("Themes").space.PX_12, right: require("Themes").space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj[1] = obj;
obj[2] = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
createCacheKey = { flexDirection: "row", alignItems: "center", marginHorizontal: require("Themes").space.PX_8, gap: require("Themes").space.PX_4 };
obj[3] = createCacheKey;
obj[4] = { width: require("Themes").space.PX_4, height: require("Themes").space.PX_4, borderRadius: require("Themes").space.PX_4 / 2, backgroundColor: require("Themes").colors.INTERACTIVE_MUTED };
obj[5] = { marginTop: PX_16, textAlign: "center" };
obj[6] = { marginTop: PX_4, textAlign: "center" };
obj[7] = { marginTop: PX_162 };
let closure_21 = createCacheKey.createStyles(obj);
let obj3 = { card: { padding: PX_12 }, closeButton: { width: 24, height: 24, alignItems: "center", justifyContent: "center", alignSelf: "flex-start" }, contentContainer: null, rewardImage: null, bodyText: null, ctaContainer: null };
let obj2 = { width: require("Themes").space.PX_4, height: require("Themes").space.PX_4, borderRadius: require("Themes").space.PX_4 / 2, backgroundColor: require("Themes").colors.INTERACTIVE_MUTED };
obj3[2] = { flexDirection: "row", gap: require("Themes").space.PX_12 };
obj3[3] = { width: 48, height: 48 };
obj3[4] = { flexGrow: 1, flexShrink: 1, alignSelf: "center" };
obj3[5] = { marginTop: PX_122, width: "100%" };
let closure_23 = createCacheKey.createStyles(obj3);
let obj4 = { flexDirection: "row", gap: require("Themes").space.PX_12 };
const memoResult = importAllResult.memo((arg0) => {
  let obj = apexExperiment;
  const config = obj.useConfig({ location: "AccountLinkBanner" });
  const bannerSize = config.bannerSize;
  let tmp5Result = null;
  if (config.enabled) {
    let tmp8 = bannerSize === apexExperiment.MobileAccountLinkingBannerSize.LARGE;
    if (tmp8) {
      obj = {};
      const merged = Object.assign(arg0);
      tmp8 = callback(AccountLinkLargeBanner, obj);
    }
    const items = [tmp8, ];
    let tmp14 = bannerSize === apexExperiment.MobileAccountLinkingBannerSize.MEDIUM;
    if (tmp14) {
      obj = {};
      const merged1 = Object.assign(arg0);
      tmp14 = callback(AccountLinkMediumBanner, obj);
    }
    const obj1 = { children: null };
    items[1] = tmp14;
    obj1[0] = items;
    tmp5Result = closure_8(closure_9, obj1);
    const tmp5 = closure_8;
    const tmp6 = closure_9;
    const tmp7 = require;
  }
  return tmp5Result;
});
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  let sum3 = dependencyMap;
  const config = apexExperiment.getConfig({ location: "getScaledAccountLinkBannerHeight" });
  const bannerSize = config.bannerSize;
  if (!config.enabled) {
    return 0;
  } else if (bannerSize === apexExperiment.MobileAccountLinkingBannerSize.LARGE) {
    const sum = PX_8 + PX_12 + closure_16 + PX_16;
    let tmp3Result = tmp3(9452);
    const sum1 = sum + tmp3Result.scaleTextLineHeight(c17, fontScale) + PX_4;
    tmp3Result = tmp3(9452);
    const sum2 = sum1 + 2 * tmp3Result.scaleTextLineHeight(c18, fontScale) + PX_162;
    sum3 = sum2 + tmp3(4718).MEDIUM_BUTTON_HEIGHT + PX_12;
    let num = sum3 + PX_82;
  } else {
    num = 0;
    if (bannerSize === tmp3(15314).MobileAccountLinkingBannerSize.MEDIUM) {
      const sum4 = PX_8 + PX_12 + 48 + PX_122;
      num = sum4 + tmp3(4718).SMALL_BUTTON_HEIGHT + PX_12 + PX_82;
    }
  }
};