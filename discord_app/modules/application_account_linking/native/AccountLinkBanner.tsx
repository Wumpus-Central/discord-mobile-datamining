// discord_app/modules/application_account_linking/native/AccountLinkBanner.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import GameIcon from "../../game_detection/native/GameIcon.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let startAuthorization;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_82 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
const NORMAL = GameIcon.GameIconSizes.NORMAL;
let closure_14 = GameIcon.GameIconImageSize[NORMAL];
let c15 = "heading-md/bold";
let c16 = "text-sm/medium";
const PX_162 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = {
  card: { padding: PX_12 },
  closeButton: size,
  imagesContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  ellipsisContainer: obj2,
  ellipsisDot: size1,
  title: { marginTop: PX_16, textAlign: "center" },
  body: { marginTop: PX_4, textAlign: "center" },
  ctaContainer: { marginTop: PX_162 },
};
size = {
  position: "absolute",
  top: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
  width: 24,
  height: 24,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};
createStyles = createStyles.createStyles;
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
};
size1 = {
  width: nativeDefault.space.PX_4,
  height: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.space.PX_4 / 2,
  backgroundColor: nativeDefault.colors.INTERACTIVE_MUTED,
};
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (startAuthorization) => {
      let analyticsLocations;
      let application;
      let applicationAccountLinkBenefitConfig;
      let currentUser;
      let items1;
      let markAsDismissed;
      let name;
      let tmp5;
      let tmp6;
      let obj = markAsDismissed(analyticsLocations[11]);
      const cResult = obj.c(53);
      ({ application, markAsDismissed } = startAuthorization);
      startAuthorization = startAuthorization.startAuthorization;
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = markAsDismissed(analyticsLocations[12]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmp10 = startAuthorization(analyticsLocations[13]);
      analyticsLocations = tmp10(startAuthorization(tmp2[14]).MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
      ({ name, applicationAccountLinkBenefitConfig } = application);
      let reward_name;
      const tmp9 = startAuthorization;
      if (applicationAccountLinkBenefitConfig != null) {
        reward_name = applicationAccountLinkBenefitConfig.reward_name;
      }
      if (null == reward_name) {
        return null;
      } else {
        let tmp13;
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
          const tmp14 = closure_6(markAsDismissed(analyticsLocations[15]).XSmallIcon, {
            size: "sm",
            color: "text-muted",
          });
          cResult[4] = tmp14;
          tmp13 = tmp14;
        } else {
          class P {
            constructor() {
              return markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[5] === tmp4.closeButton) {
          let tmp23;
          let tmp22;
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
            cResult[8] = application;
            cResult[9] = closure_6(tmp9(analyticsLocations[6]), obj2);
            const tmp20 = closure_6(tmp9(analyticsLocations[6]), obj2);
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
            cResult[10] = tmp4.ellipsisDot;
            cResult[11] = closure_6(View, obj5);
            cResult[12] = tmp25;
            cResult[13] = tmp26;
            tmp23 = tmp26;
            tmp22 = tmp25;
            const tmp27 = closure_6(View, obj5);
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
          const obj6 = { style: tmp4.ellipsisContainer, children: items1 };
          items1 = [tmp22, tmp23, tmp21];
          cResult[14] = tmp4.ellipsisContainer;
          cResult[15] = tmp21;
          cResult[16] = tmp22;
          cResult[17] = tmp23;
          cResult[18] = closure_7(View, obj6);
          const tmp31 = closure_7(View, obj6);
        }
        const obj7 = { accessibilityRole: "button", onPress: P, style: tmp4.closeButton, children: tmp13 };
        cResult[5] = tmp4.closeButton;
        cResult[6] = P;
        cResult[7] = closure_6(markAsDismissed(analyticsLocations[16]).PressableOpacity, obj7);
        const tmp17 = closure_6(markAsDismissed(analyticsLocations[16]).PressableOpacity, obj7);
      }
    }
  : (arg0) => {
      let Button;
      let application;
      let currentUser;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let items3;
      let obj12;
      let obj14;
      let obj16;
      ({ application, markAsDismissed: require, startAuthorization: importDefault } = arg0);
      let analyticsLocations;
      const tmp = closure_18();
      let obj = require("useStateFromStores");
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const tmp6 = require("useAnalyticsLocations");
      analyticsLocations = tmp6(require("AnalyticsLocation").MOBILE_ACCOUNT_LINK_LARGE_BANNER).analyticsLocations;
      const applicationAccountLinkBenefitConfig = application.applicationAccountLinkBenefitConfig;
      let reward_name;
      const name = application.name;
      if (applicationAccountLinkBenefitConfig != null) {
        reward_name = applicationAccountLinkBenefitConfig.reward_name;
      }
      let tmp8 = null;
      if (null != reward_name) {
        const obj2 = { variant: "secondary", style: tmp.card, children: items1 };
        const Card = require("Card/Card").Card;
        const obj3 = {
          accessibilityRole: "button",
          onPress() {
            return require(ContentDismissActionType.USER_DISMISS);
          },
          style: tmp.closeButton,
          children: closure_6(require("XSmallIcon").XSmallIcon, { size: "sm", color: "text-muted" }),
        };
        const PressableOpacity = require("Pressables").PressableOpacity;
        items1 = [closure_6(PressableOpacity, obj3), , , ,];
        const obj4 = { style: tmp.imagesContainer, children: items2 };
        const obj5 = { game: application, size: NORMAL };
        items2 = [closure_6(require("GameIcon"), obj5), ,];
        const obj6 = { style: tmp.ellipsisContainer, children: items3 };
        const obj7 = { style: tmp.ellipsisDot };
        items3 = [closure_6(View, obj7), ,];
        const obj8 = { style: tmp.ellipsisDot };
        items3[1] = closure_6(View, obj8);
        const obj9 = { style: tmp.ellipsisDot };
        items3[2] = closure_6(View, obj9);
        items2[1] = closure_7(View, obj6);
        const obj10 = { user: stateFromStores, size: require("native").AvatarSizes.LARGE_48, guildId: "r" };
        const Avatar = require("native").Avatar;
        items2[2] = closure_6(Avatar, obj10);
        items1[1] = closure_7(View, obj4);
        const obj11 = {
          variant,
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: intl.formatToPlainString(require("intl").t["3gpxqO"], obj12),
        };
        const Text = require("Text/Text").Text;
        intl = require("intl").intl;
        obj12 = { gameName: name };
        items1[2] = closure_6(Text, obj11);
        const obj13 = {
          variant: variant2,
          color: "text-muted",
          style: tmp.body,
          children: intl2.formatToPlainString(require("intl").t.vxvKMm, obj14),
        };
        const Text2 = require("Text/Text").Text;
        intl2 = require("intl").intl;
        obj14 = { rewardName: reward_name };
        items1[3] = closure_6(Text2, obj13);
        const obj15 = { style: tmp.ctaContainer, children: closure_6(Button, obj16) };
        obj16 = {
          variant: "secondary",
          size: "md",
          text: intl3.string(require("intl").t["0mvtKL"]),
          onPress() {
            const obj = { analyticsLocations };
            importDefault(obj);
          },
          icon: closure_6(require("ExperimentalGameControllerLinkIcon").ExperimentalGameControllerLinkIcon, {
            size: "sm",
          }),
        };
        Button = require("components/Button/Button").Button;
        intl3 = require("intl").intl;
        items1[4] = closure_6(View, obj15);
        tmp8 = closure_7(Card, obj2);
      }
      return tmp8;
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let tmp2;
        const obj = react2;
        const cResult = obj.c(2);
        if (cResult[0] !== arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          const tmp8 = metroRequire(closure_19, obj2);
          cResult[0] = arg0;
          cResult[1] = tmp8;
          tmp2 = tmp8;
        } else {
          tmp2 = cResult[1];
        }
        return tmp2;
      }
    : (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        return metroRequire(closure_19, obj);
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkBanner.tsx");

export default memoResult;
export const ACCOUNT_LINK_BANNER_MARGIN_TOP = PX_8;
export const ACCOUNT_LINK_BANNER_MARGIN_BOTTOM = PX_82;
export const getScaledAccountLinkBannerHeight = function getScaledAccountLinkBannerHeight(fontScale) {
  const sum = PX_8 + PX_12 + closure_14 + PX_16;
  const obj = useScaledTextLineHeight;
  const sum1 = sum + obj.scaleTextLineHeight(c15, fontScale) + PX_4;
  const obj2 = useScaledTextLineHeight;
  const sum2 = sum1 + 2 * obj2.scaleTextLineHeight(c16, fontScale) + PX_162;
  return sum2 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + PX_12 + PX_82;
};
