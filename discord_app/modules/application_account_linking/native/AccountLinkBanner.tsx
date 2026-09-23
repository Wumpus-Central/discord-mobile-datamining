// discord_app/modules/application_account_linking/native/AccountLinkBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function AccountLinkLargeBanner(arg0) {
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = closure_18();
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("useStateFromStores");
  analyticsLocations = require("useAnalyticsLocations")(
    require("AnalyticsLocation").MOBILE_ACCOUNT_LINK_LARGE_BANNER,
  ).analyticsLocations;
  const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
  let reward_name;
  if (applicationAccountLinkBenefitConfig != null) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  let tmp8 = null;
  if (null != reward_name) {
    const obj2 = { variant: "secondary", style: tmp.card, children: null };
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
        return require(ContentDismissActionType.USER_DISMISS);
      },
      style: tmp.closeButton,
      children: closure_6(require("XSmallIcon").XSmallIcon, { size: "sm", color: "text-muted" }),
    };
    const items1 = [closure_6(require("Pressables").PressableOpacity, obj3), , , ,];
    const obj4 = { style: tmp.imagesContainer, children: null };
    const obj5 = { game: application, size: NORMAL };
    const items2 = [closure_6(require("GameIcon"), obj5), ,];
    const obj6 = { style: tmp.ellipsisContainer, children: null };
    const obj7 = { style: tmp.ellipsisDot };
    const items3 = [closure_6(View, obj7), ,];
    const obj8 = { style: tmp.ellipsisDot };
    items3[1] = closure_6(View, obj8);
    const obj9 = { style: tmp.ellipsisDot };
    items3[2] = closure_6(View, obj9);
    obj6.children = items3;
    items2[1] = closure_7(View, obj6);
    const obj10 = { user: stateFromStores, size: require("native").AvatarSizes.LARGE_48, guildId: "Array" };
    items2[2] = closure_6(require("native").Avatar, obj10);
    obj4.children = items2;
    items1[1] = closure_7(View, obj4);
    const obj11 = { variant, color: "mobile-text-heading-primary", style: tmp.title, children: null };
    const intl = require("util").intl;
    const obj12 = { gameName: application.name };
    obj11.children = intl.formatToPlainString(require("util").t["3gpxqO"], obj12);
    items1[2] = closure_6(require("Text/Text").Text, obj11);
    const obj13 = { variant: variant2, color: "text-muted", style: tmp.body, children: null };
    const intl2 = require("util").intl;
    const obj14 = { rewardName: reward_name };
    obj13.children = intl2.formatToPlainString(require("util").t.vxvKMm, obj14);
    items1[3] = closure_6(require("Text/Text").Text, obj13);
    const obj15 = { style: tmp.ctaContainer, children: null };
    const obj16 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
    const intl3 = require("util").intl;
    obj16.text = intl3.string(require("util").t["0mvtKL"]);
    obj16.onPress = function onPress() {
      importDefault({ analyticsLocations });
    };
    obj16.icon = closure_6(require("ExperimentalGameControllerLinkIcon").ExperimentalGameControllerLinkIcon, {
      size: "sm",
    });
    obj15.children = closure_6(require("components/Button/Button").Button, obj16);
    items1[4] = closure_6(View, obj15);
    obj2.children = items1;
    tmp8 = closure_7(require("Card").Card, obj2);
  }
  return tmp8;
}
const View = fn(17).View;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
const NORMAL = fn(7503).GameIconSizes.NORMAL;
let closure_14 = fn(7503).GameIconImageSize[NORMAL];
let c15 = "heading-md/bold";
let c16 = "text-sm/medium";
const PX_162 = nativeDefault.space.PX_16;
const createStyles = fn(4827);
let obj = {
  card: { padding: PX_12 },
  closeButton: null,
  imagesContainer: null,
  ellipsisContainer: null,
  ellipsisDot: null,
  title: null,
  body: null,
  ctaContainer: null,
};
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
  width: 24,
  height: 24,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};
obj.closeButton = size;
obj.imagesContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj.ellipsisContainer = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
};
const size1 = {
  width: nativeDefault.space.PX_4,
  height: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.space.PX_4 / 2,
  backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED,
};
obj.ellipsisDot = size1;
obj.title = { marginTop: PX_16, textAlign: "center" };
obj.body = { marginTop: PX_4, textAlign: "center" };
obj.ctaContainer = { marginTop: PX_162 };
let closure_18 = createStyles.createStyles(obj);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default noop.memo((arg0) => {
  const merged = Object.assign(arg0);
  return timestampProducer(AccountLinkLargeBanner, {});
});
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const sum = PX_8 + PX_12 + closure_14 + PX_16;
  const sum1 = sum + useScaledTextLineHeight.scaleTextLineHeight(c15, fontScale) + PX_4;
  const sum2 = sum1 + 2 * useScaledTextLineHeight.scaleTextLineHeight(c16, fontScale) + PX_162;
  return sum2 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
};
