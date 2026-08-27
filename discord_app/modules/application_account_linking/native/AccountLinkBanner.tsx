// === Module 15695: AccountLinkLargeBanner ===

// Module 15695 (AccountLinkLargeBanner)
import ThemesDefault from "Themes" /* 712 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4885 */;
import map from "map" /* 9009 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
function AccountLinkLargeBanner(arg0) {
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = callback3();
  let obj = require(analyticsLocations[10]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations = importDefault(analyticsLocations[11])(importDefault(analyticsLocations[12]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
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
      return callback(closure_1_5.USER_DISMISS);
    };
    obj[2] = tmp.closeButton;
    obj[3] = callback(tmp2(tmp3[15]).XSmallIcon, { size: "sm", color: "text-muted" });
    const items1 = [callback(tmp2(tmp3[14]).PressableOpacity, obj), , , , ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.imagesContainer;
    const obj2 = { game: null, size: null };
    obj2[0] = application;
    obj2[1] = NORMAL;
    const items2 = [callback(importDefault(tmp3[6]), obj2), , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.ellipsisContainer;
    const obj4 = { style: null };
    obj4[0] = tmp.ellipsisDot;
    const items3 = [callback(View, obj4), , ];
    const obj5 = { style: null };
    obj5[0] = tmp.ellipsisDot;
    items3[1] = callback(View, obj5);
    const obj6 = { style: null };
    obj6[0] = tmp.ellipsisDot;
    items3[2] = callback(View, obj6);
    obj3[1] = items3;
    items2[1] = callback2(View, obj3);
    const obj7 = { user: null, size: null, guildId: "r" };
    obj7[0] = stateFromStores;
    obj7[1] = tmp2(tmp3[16]).AvatarSizes.LARGE_48;
    items2[2] = callback(tmp2(tmp3[16]).Avatar, obj7);
    obj1[1] = items2;
    items1[1] = callback2(View, obj1);
    const obj8 = { variant: null, color: "mobile-text-heading-primary", style: null, children: null };
    obj8[0] = c15;
    obj8[2] = tmp.title;
    const intl = tmp2(tmp3[18]).intl;
    const obj9 = { gameName: null };
    obj9[0] = application.name;
    obj8[3] = intl.formatToPlainString(tmp2(tmp3[18]).t["3gpxqO"], obj9);
    items1[2] = callback(tmp2(tmp3[17]).Text, obj8);
    const obj10 = { variant: null, color: "text-muted", style: null, children: null };
    obj10[0] = c16;
    obj10[2] = tmp.body;
    const intl2 = tmp2(tmp3[18]).intl;
    const obj11 = { rewardName: null };
    obj11[0] = reward_name;
    obj10[3] = intl2.formatToPlainString(tmp2(tmp3[18]).t.vxvKMm, obj11);
    items1[3] = callback(tmp2(tmp3[17]).Text, obj10);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.ctaContainer;
    const obj13 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
    const intl3 = tmp2(tmp3[18]).intl;
    obj13[2] = intl3.string(tmp2(tmp3[18]).t["0mvtKL"]);
    obj13[3] = function onPress() {
      callback2({ analyticsLocations });
    };
    obj13[4] = callback(tmp2(tmp3[20]).ExperimentalGameControllerLinkIcon, { size: "sm" });
    obj12[1] = callback(tmp2(tmp3[19]).Button, obj13);
    items1[4] = callback(View, obj12);
    obj[2] = items1;
    tmp8 = callback2(tmp2(tmp3[13]).Card, obj);
  }
  return tmp8;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_82 = ThemesDefault.space.PX_8;
const PX_12 = ThemesDefault.space.PX_12;
const PX_16 = ThemesDefault.space.PX_16;
const PX_4 = ThemesDefault.space.PX_4;
const NORMAL = require("GameIcon").GameIconSizes.NORMAL;
let closure_14 = require("GameIcon").GameIconImageSize[NORMAL];
let c15 = "heading-md/bold";
let c16 = "text-sm/medium";
const PX_162 = ThemesDefault.space.PX_16;
let obj = { card: { padding: PX_12 }, closeButton: null, imagesContainer: null, ellipsisContainer: null, ellipsisDot: null, title: null, body: null, ctaContainer: null };
obj = { position: "absolute", top: ThemesDefault.space.PX_12, right: ThemesDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj[1] = obj;
obj[2] = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
createCacheKey = { flexDirection: "row", alignItems: "center", marginHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
obj[3] = createCacheKey;
obj[4] = { width: ThemesDefault.space.PX_4, height: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.space.PX_4 / 2, backgroundColor: ThemesDefault.colors.INTERACTIVE_MUTED };
obj[5] = { marginTop: PX_16, textAlign: "center" };
obj[6] = { marginTop: PX_4, textAlign: "center" };
obj[7] = { marginTop: PX_162 };
let closure_18 = createCacheKey.createStyles(obj);
let obj2 = { width: ThemesDefault.space.PX_4, height: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.space.PX_4 / 2, backgroundColor: ThemesDefault.colors.INTERACTIVE_MUTED };
const memoResult = importAllResult.memo((arg0) => {
  const merged = Object.assign(arg0);
  return callback(AccountLinkLargeBanner, {});
});
const result = require("set").fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const sum = PX_8 + PX_12 + closure_14 + PX_16;
  const sum1 = sum + map.scaleTextLineHeight(c15, fontScale) + PX_4;
  const obj = map;
  const sum2 = sum1 + 2 * map.scaleTextLineHeight(c16, fontScale) + PX_162;
  return sum2 + MINIMUM_HIT_AREA.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
};