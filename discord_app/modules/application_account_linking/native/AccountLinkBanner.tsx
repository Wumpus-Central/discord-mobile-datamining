// === Module 16418: AccountLinkBanner ===

// Module 16418 (AccountLinkBanner)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ButtonConstants from "ButtonConstants" /* 5380 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10490 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
const NORMAL = fn(6851).GameIconSizes.NORMAL;
let closure_14 = fn(6851).GameIconImageSize[NORMAL];
let c15 = "heading-md/bold";
let c16 = "text-sm/medium";
const PX_162 = nativeDefault.space.PX_16;
const createStyles = fn(5090);
let obj = { card: { padding: PX_12 }, closeButton: null, imagesContainer: null, ellipsisContainer: null, ellipsisDot: null, title: null, body: null, ctaContainer: null };
let size = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj.closeButton = size;
obj.imagesContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj.ellipsisContainer = { flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.space.PX_4 / 2, backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED };
obj.ellipsisDot = size1;
obj.title = { marginTop: PX_16, textAlign: "center" };
obj.body = { marginTop: PX_4, textAlign: "center" };
obj.ctaContainer = { marginTop: PX_162 };
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccountLinkLargeBanner(startAuthorization) {
  const cResult = markAsDismissed(analyticsLocations[11]).c(53);
  ({ application, markAsDismissed } = startAuthorization);
  startAuthorization = startAuthorization.startAuthorization;
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function p() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = markAsDismissed(analyticsLocations[11]);
  const stateFromStores = markAsDismissed(analyticsLocations[12]).useStateFromStores(tmp5, tmp6);
  const tmp9 = startAuthorization;
  const tmpResult = markAsDismissed(analyticsLocations[12]);
  analyticsLocations = startAuthorization(analyticsLocations[13])(startAuthorization(tmp2[14]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
  ({ name, applicationAccountLinkBenefitConfig } = application);
  let reward_name;
  if (applicationAccountLinkBenefitConfig != null) {
    reward_name = applicationAccountLinkBenefitConfig.reward_name;
  }
  if (null == reward_name) {
    return null;
  } else {
    const card = tmp4.card;
    if (cResult[2] !== markAsDismissed) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[2] = markAsDismissed;
      cResult[3] = P;
    } else {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      const tmp14 = closure_6(markAsDismissed(tmp2[15]).XSmallIcon, { size: "sm", color: "text-muted" });
      cResult[4] = tmp14;
      const tmp13 = tmp14;
    } else {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[5] === tmp4.closeButton) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
      if (cResult[8] !== application) {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        const obj2 = { game: application, size: NORMAL };
        const tmp20 = closure_6(tmp9(tmp2[6]), obj2);
        cResult[8] = application;
        cResult[9] = tmp20;
      } else {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[10] !== tmp4.ellipsisDot) {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        const obj3 = { style: tmp4.ellipsisDot };
        const tmp25 = closure_6(View, obj3);
        const obj4 = { style: tmp4.ellipsisDot };
        const tmp26 = closure_6(View, obj4);
        const obj5 = { style: tmp4.ellipsisDot };
        const tmp27 = closure_6(View, obj5);
        cResult[10] = tmp4.ellipsisDot;
        cResult[11] = tmp27;
        cResult[12] = tmp25;
        cResult[13] = tmp26;
        let tmp23 = tmp26;
        let tmp22 = tmp25;
      } else {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        tmp22 = cResult[12];
        tmp23 = cResult[13];
      }
      if (cResult[14] === tmp4.ellipsisContainer) {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      const obj6 = { style: tmp4.ellipsisContainer, children: null };
      const items1 = [tmp22, tmp23, tmp21];
      obj6.children = items1;
      const tmp31 = closure_7(View, obj6);
      cResult[14] = tmp4.ellipsisContainer;
      cResult[15] = tmp21;
      cResult[16] = tmp22;
      cResult[17] = tmp23;
      cResult[18] = tmp31;
    }
    const obj7 = { accessibilityRole: "button", onPress: P, style: tmp4.closeButton, children: tmp13 };
    const tmp17 = closure_6(markAsDismissed(tmp2[16]).PressableOpacity, obj7);
    cResult[5] = tmp4.closeButton;
    cResult[6] = P;
    cResult[7] = tmp17;
  }
  const tmp10 = startAuthorization(analyticsLocations[13]);
}) : (function AccountLinkLargeBanner(arg0) {
  ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
  let analyticsLocations;
  const tmp = closure_18();
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("useStateFromStores");
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
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
      children: closure_6(require("XSmallIcon").XSmallIcon, { size: "sm", color: "text-muted" })
    };
    const items1 = [closure_6(require("Pressables").PressableOpacity, obj3), , , , ];
    const obj4 = { style: tmp.imagesContainer, children: null };
    const obj5 = { game: application, size: NORMAL };
    const items2 = [closure_6(require("GameIcon"), obj5), , ];
    const obj6 = { style: tmp.ellipsisContainer, children: null };
    const obj7 = { style: tmp.ellipsisDot };
    const items3 = [closure_6(View, obj7), , ];
    const obj8 = { style: tmp.ellipsisDot };
    items3[1] = closure_6(View, obj8);
    const obj9 = { style: tmp.ellipsisDot };
    items3[2] = closure_6(View, obj9);
    obj6.children = items3;
    items2[1] = closure_7(View, obj6);
    const obj10 = { user: stateFromStores, size: require("native").AvatarSizes.LARGE_48, guildId: "r" };
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
    obj16.icon = closure_6(require("ExperimentalGameControllerLinkIcon").ExperimentalGameControllerLinkIcon, { size: "sm" });
    obj15.children = closure_6(require("components/Button/Button").Button, obj16);
    items1[4] = closure_6(View, obj15);
    obj2.children = items1;
    tmp8 = closure_7(require("Card").Card, obj2);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", marginHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AccountLinkBanner(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = timestampProducer(closure_19, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function AccountLinkBanner(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(closure_19, {});
}));
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const sum = PX_8 + PX_12 + closure_14 + PX_16;
  const sum1 = sum + useScaledTextLineHeight.scaleTextLineHeight(c15, fontScale) + PX_4;
  const sum2 = sum1 + 2 * useScaledTextLineHeight.scaleTextLineHeight(c16, fontScale) + PX_162;
  return sum2 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
};