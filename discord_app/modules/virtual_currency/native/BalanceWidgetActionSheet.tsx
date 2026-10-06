// discord_app/modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _mod11025 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_animated.mp4.js";
import _mod11026 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_static.png.js";
import _mod11027 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_rewards.png.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
({
  AnalyticEvents: metroRequire,
  Fonts: metroImportDefault,
  HelpdeskArticles: metroImportAll,
  ThemeTypes: c9,
} = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((color) => {
  let num;
  let obj4;
  let rect;
  let rect1;
  let size1;
  let size2;
  const obj = {
    actions: {
      flex: 1,
      flexDirection: "column",
      gap: nativeDefault.space.PX_12,
      minWidth: "100%",
      paddingTop: nativeDefault.space.PX_12,
      paddingHorizontal: nativeDefault.space.PX_16,
    },
    balanceHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: nativeDefault.space.PX_8,
      flexWrap: "wrap",
    },
    balanceText: obj4,
    content: size,
    header: {
      width: "100%",
      paddingTop: nativeDefault.space.PX_12,
      paddingBottom: nativeDefault.space.PX_16,
      alignItems: "center",
      position: "relative",
      flexDirection: "column",
    },
    infoIconBackground: size1,
    infoIconContainer: rect,
    promotionalBackground: rect1,
    promotionalBackgroundContainer: { flex: 1, height: 428 },
    promotionalBannerAsset: { width: "100%", height: "100%" },
    promotionalBannerContainer: size2,
    promotionalBannerText: obj7,
  };
  ({
    flex: 1,
    flexDirection: "column",
    gap: nativeDefault.space.PX_12,
    minWidth: "100%",
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  });
  obj4 = { color, fontSize: 36, lineHeight: num, textAlignVertical: "center" };
  ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
  });
  num = 44;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    num = 36;
  }
  size = { width: "100%", height: "100%", alignItems: "center", flex: 1, marginBottom: nativeDefault.space.PX_16 };
  ({
    width: "100%",
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  });
  size1 = {
    width: 32,
    height: 32,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
  };
  rect = { position: "absolute", left: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, zIndex: 10 };
  rect1 = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: nativeDefault.radii.xl, bottom: -100 };
  size2 = { width: "100%", height: 144, gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_64 };
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let CircleQuestionIcon;
  let W4DfeF;
  let formatToPlainString;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let num2;
  let obj11;
  let obj12;
  let obj13;
  let obj15;
  let obj19;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let primaryButtonConfig;
  let secondaryButtonConfig;
  let source;
  let themeOverride;
  let num = balance.balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: importDefault } = balance);
  const ref = react.useRef(null);
  const callback = react.useCallback(() => {
    const tmp = require("openURL");
    const obj = require("HelpdeskUtils");
    tmp(obj.getArticleURL(constants.ORBS_FAQ));
  }, []);
  const enabled = react.useContext(num(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [num];
  const memo = react.useMemo(() => {
    let intl;
    let tmp = null;
    if (num > 4100) {
      const obj = {
        backgroundVideo: _mod11025.default,
        backgroundImage: _mod11026.default,
        bannerImage: _mod11027.default,
        bannerText: intl.string(intl3.t.LaMEFL),
      };
      intl = intl3.intl;
      tmp = obj;
    }
    return tmp;
  }, items);
  const tmp6 = undefined === themeOverride && null != memo;
  if (tmp6) {
    themeOverride = constants3.DARK;
  }
  let tmp3Result = tmp3(tmp4[12]);
  const token = tmp3Result.useToken(require("native").colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp10 = closure_13(token);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "VIEW", source: importDefault, balance: num };
    obj.track(metroRequire.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
    const obj3 = DismissibleContentUnsafeUtils;
    if (
      !obj3.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
      )
    ) {
      const obj4 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const tmp3Result = DismissibleContentUnsafeUtils;
      const result = tmp3Result.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
        obj4,
      );
    }
  }, []);
  let obj2 = { theme: themeOverride, children: closure_11(BottomSheet, obj3) };
  const ThemeContextProvider = tmp3(tmp4[17]).ThemeContextProvider;
  obj3 = {
    ref,
    startExpanded: true,
    handleComponent() {
      return closure_1_11(closure_1_4, {});
    },
    handleDisabled: false,
    children: closure_12(closure_4, obj4),
  };
  const items1 = [tmp10.content];
  let promotionalBackgroundContainer = null != memo;
  BottomSheet = tmp3(tmp4[18]).BottomSheet;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp10.promotionalBackgroundContainer;
  }
  obj4 = { style: items1, children: items2 };
  items1[1] = promotionalBackgroundContainer;
  let tmp15 = null != memo && null != memo.backgroundVideo && null != memo.backgroundImage;
  if (tmp15) {
    let tmp12Result;
    if (enabled) {
      const obj5 = { source: obj6, style: tmp10.promotionalBackground, resizeMode: "cover" };
      obj6 = { uri: memo.backgroundImage };
      tmp12Result = closure_11(require("FastImage"), obj5);
    } else {
      const obj7 = {
        source: obj8,
        poster: memo.backgroundImage,
        style: tmp10.promotionalBackground,
        muted: true,
        disableFocus: true,
        pauseWhileAppInactive: true,
        paused: enabled,
        posterResizeMode: "cover",
        resizeMode: "cover",
        preventsDisplaySleepDuringVideoPlayback: false,
      };
      obj8 = { uri: memo.backgroundVideo };
      tmp12Result = closure_11(tmp3(tmp4[20]).VideoComponent, obj7);
    }
    tmp15 = tmp12Result;
  }
  items2 = [tmp15, , , , ,];
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    },
  };
  items2[1] = closure_11(num(ref[21]).ActionSheetHeaderBar, obj9);
  const obj10 = { style: tmp10.infoIconContainer, children: closure_11(closure_5, obj11) };
  obj11 = {
    onPress: callback,
    accessibilityRole: "link",
    accessibilityLabel: intl.string(num(ref[8]).t.B1oJtQ),
    children: closure_11(closure_4, obj12),
  };
  intl = tmp3(tmp4[8]).intl;
  obj12 = { style: tmp10.infoIconBackground, children: closure_11(CircleQuestionIcon, obj13) };
  obj13 = { size: "sm", color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
  CircleQuestionIcon = tmp3(tmp4[22]).CircleQuestionIcon;
  items2[2] = closure_11(closure_4, obj10);
  const obj14 = { style: tmp10.header, children: closure_12(closure_4, obj15) };
  obj15 = { style: tmp10.balanceHeader, children: items3 };
  items3 = [closure_11(num(ref[23]).OrbsIcon, { size: "lg", color: token })];
  const obj16 = {
    variant: "display-md",
    style: tmp10.balanceText,
    accessibilityLabel: formatToPlainString(W4DfeF, { orbAmount: num2 }),
    children: num,
  };
  const Text = tmp3(tmp4[24]).Text;
  const intl2 = tmp3(tmp4[8]).intl;
  formatToPlainString = intl2.formatToPlainString;
  num2 = num;
  W4DfeF = tmp3(tmp4[8]).t.W4DfeF;
  if (num == null) {
    num2 = 0;
  }
  if (num == null) {
    num = 0;
  }
  items3[1] = closure_11(Text, obj16);
  items2[3] = closure_11(closure_4, obj14);
  let tmp13Result = null != memo && null != memo.bannerImage;
  if (tmp13Result) {
    const obj18 = { source: obj19, style: tmp10.promotionalBannerAsset, resizeMode: "contain" };
    const obj17 = { style: tmp10.promotionalBannerContainer, children: items4 };
    obj19 = { uri: memo.bannerImage };
    items4 = [closure_11(require("FastImage"), obj18)];
    let tmp12Result2 = null != memo.bannerText && "" !== memo.bannerText;
    if (tmp12Result2) {
      const obj20 = { variant: "heading-xl/medium", style: tmp10.promotionalBannerText, children: memo.bannerText };
      tmp12Result2 = closure_11(tmp3(tmp4[24]).Text, obj20);
    }
    items4[1] = tmp12Result2;
    tmp13Result = closure_12(closure_4, obj17);
  }
  items2[4] = tmp13Result;
  const obj21 = { style: tmp10.actions, children: items5 };
  items5 = [,];
  const obj22 = {
    text: primaryButtonConfig.buttonText,
    variant: "primary",
    size: "lg",
    onPress: primaryButtonConfig.onButtonPress,
  };
  items5[0] = closure_11(num(ref[25]).Button, obj22);
  const obj23 = {
    text: secondaryButtonConfig.buttonText,
    variant: "tertiary",
    size: "lg",
    onPress: secondaryButtonConfig.onButtonPress,
  };
  items5[1] = closure_11(num(ref[25]).Button, obj23);
  items2[5] = closure_12(closure_4, obj21);
  return closure_11(ThemeContextProvider, obj2);
}
