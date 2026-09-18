// discord_app/modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _mod11356 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_animated.mp4.js";
import _mod11357 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_static.png.js";
import _mod11358 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_rewards.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Fonts: closure_7, HelpdeskArticles: closure_8, ThemeTypes: closure_9 } = Constants);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4722);
let closure_13 = createStyles.createStyles((color) => {
  const obj = {
    actions: {
      flex: 1,
      flexDirection: "column",
      gap: nativeDefault.space.PX_12,
      minWidth: "100%",
      paddingTop: nativeDefault.space.PX_12,
      paddingHorizontal: nativeDefault.space.PX_16,
    },
    balanceHeader: null,
    balanceText: null,
    content: null,
    header: null,
    infoIconBackground: null,
    infoIconContainer: null,
    promotionalBackground: null,
    promotionalBackgroundContainer: null,
    promotionalBannerAsset: null,
    promotionalBannerContainer: null,
    promotionalBannerText: null,
  };
  const obj2 = {
    flex: 1,
    flexDirection: "column",
    gap: nativeDefault.space.PX_12,
    minWidth: "100%",
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.balanceHeader = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
  };
  const obj4 = { color, fontSize: 36, lineHeight: null, textAlignVertical: "center" };
  const obj3 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
  };
  let num = 44;
  if (obj5.isAndroid()) {
    num = 36;
  }
  obj4.lineHeight = num;
  obj.balanceText = obj4;
  const size = {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
    marginBottom: nativeDefault.space.PX_16,
  };
  obj.content = size;
  obj5 = PlatformUtils;
  obj.header = {
    width: "100%",
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  };
  const size1 = {
    width: 32,
    height: 32,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.infoIconBackground = size1;
  const rect = { position: "absolute", left: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, zIndex: 10 };
  obj.infoIconContainer = rect;
  const rect1 = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: nativeDefault.radii.xl, bottom: -100 };
  obj.promotionalBackground = rect1;
  obj.promotionalBackgroundContainer = { flex: 1, height: 428 };
  obj.promotionalBannerAsset = { width: "100%", height: "100%" };
  const size2 = { width: "100%", height: 144, gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_64 };
  obj.promotionalBannerContainer = size2;
  obj.promotionalBannerText = {
    color,
    fontFamily: constants2.PRIMARY_BOLD,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let num = balance.balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: importDefault } = balance);
  const ref = noop.useRef(null);
  const callback = noop.useCallback(() => {
    const tmp = source(ref[9]);
    tmp(source(ref[10]).getArticleURL(constants.ORBS_FAQ));
  }, []);
  const enabled = noop.useContext(num(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [num];
  const memo = noop.useMemo(() => {
    let tmp = null;
    if (num > 4100) {
      const obj = {
        backgroundVideo: _mod11356.default,
        backgroundImage: _mod11357.default,
        bannerImage: _mod11358.default,
        bannerText: null,
      };
      const intl = util.intl;
      obj.bannerText = intl.string(util.t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp6) {
    themeOverride = constants3.DARK;
  }
  const token = num(ref[12]).useToken(require("native").colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp10 = closure_13(token);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "VIEW", source, balance: num });
    const obj2 = { type: "VIEW", source, balance: num };
    if (
      !obj3.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
      )
    ) {
      const obj4 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
        obj4,
      );
      const tmp3Result = DismissibleContentUnsafeUtils;
    }
    obj3 = DismissibleContentUnsafeUtils;
  }, []);
  let obj2 = { theme: themeOverride, children: null };
  let obj3 = {
    ref,
    startExpanded: true,
    handleComponent() {
      return closure_1_11(closure_1_4, {});
    },
    handleDisabled: false,
    children: null,
  };
  const items1 = [tmp10.content];
  let promotionalBackgroundContainer = null != memo;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp10.promotionalBackgroundContainer;
  }
  let obj4 = { style: items1, children: null };
  items1[1] = promotionalBackgroundContainer;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp15, , , , ,];
    const obj5 = {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      },
    };
    items2[1] = closure_11(tmp3(tmp4[21]).ActionSheetHeaderBar, obj5);
    const obj6 = { style: tmp10.infoIconContainer, children: null };
    const obj7 = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, children: null };
    let intl = tmp3(tmp4[8]).intl;
    obj7.accessibilityLabel = intl.string(tmp3(tmp4[8]).t.B1oJtQ);
    const obj8 = { style: tmp10.infoIconBackground, children: null };
    const obj9 = { size: "sm", color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    obj8.children = closure_11(tmp3(tmp4[22]).CircleQuestionIcon, obj9);
    obj7.children = closure_11(closure_4, obj8);
    obj6.children = closure_11(closure_5, obj7);
    items2[2] = closure_11(closure_4, obj6);
    const obj10 = { style: tmp10.header, children: null };
    const obj11 = { style: tmp10.balanceHeader, children: null };
    const obj12 = { size: "lg", color: token };
    const items3 = [closure_11(tmp3(tmp4[23]).OrbsIcon, obj12)];
    const obj13 = { variant: "display-md", style: tmp10.balanceText, accessibilityLabel: null, children: null };
    const intl2 = tmp3(tmp4[8]).intl;
    let num2 = num;
    if (num == null) {
      num2 = 0;
    }
    const obj14 = { orbAmount: num2 };
    obj13.accessibilityLabel = intl2.formatToPlainString(tmp3(tmp4[8]).t.W4DfeF, obj14);
    if (num == null) {
      num = 0;
    }
    obj13.children = num;
    items3[1] = closure_11(tmp3(tmp4[24]).Text, obj13);
    obj11.children = items3;
    obj10.children = closure_12(closure_4, obj11);
    items2[3] = closure_11(closure_4, obj10);
    let tmp13Result = null != memo && null != memo.bannerImage;
    if (tmp13Result) {
      const obj15 = { style: tmp10.promotionalBannerContainer, children: null };
      const obj16 = { source: null, style: null, resizeMode: "contain" };
      const obj17 = { uri: memo.bannerImage };
      obj16.source = obj17;
      obj16.style = tmp10.promotionalBannerAsset;
      const items4 = [closure_11(require("FastImage"), obj16)];
      let tmp12Result = null != memo.bannerText;
      if (tmp12Result) {
        tmp12Result = "" !== memo.bannerText;
      }
      if (tmp12Result) {
        const obj18 = { variant: "heading-xl/medium", style: tmp10.promotionalBannerText, children: memo.bannerText };
        tmp12Result = closure_11(tmp3(tmp4[24]).Text, obj18);
      }
      items4[1] = tmp12Result;
      obj15.children = items4;
      tmp13Result = closure_12(closure_4, obj15);
    }
    items2[4] = tmp13Result;
    const obj19 = { style: tmp10.actions, children: null };
    ({ buttonText: obj25.text, onButtonPress: obj25.onPress } = primaryButtonConfig);
    const items5 = [closure_11(tmp3(tmp4[25]).Button, { text: null, variant: "primary", size: "lg", onPress: null })];
    ({ buttonText: obj26.text, onButtonPress: obj26.onPress } = secondaryButtonConfig);
    items5[1] = closure_11(tmp3(tmp4[25]).Button, { text: null, variant: "tertiary", size: "lg", onPress: null });
    obj19.children = items5;
    items2[5] = closure_12(closure_4, obj19);
    obj4.children = items2;
    obj3.children = closure_12(closure_4, obj4);
    obj2.children = closure_11(tmp3(tmp4[18]).BottomSheet, obj3);
    return closure_11(tmp3(tmp4[17]).ThemeContextProvider, obj2);
  } else if (enabled) {
    const obj22 = { source: null, style: null, resizeMode: "cover" };
    const obj23 = { uri: memo.backgroundImage };
    obj22.source = obj23;
    obj22.style = tmp10.promotionalBackground;
    let tmp12Result2 = closure_11(require("FastImage"), obj22);
  } else {
    const obj24 = {
      source: null,
      poster: null,
      style: null,
      muted: true,
      disableFocus: true,
      pauseWhileAppInactive: true,
      paused: null,
      posterResizeMode: "cover",
      resizeMode: "cover",
      preventsDisplaySleepDuringVideoPlayback: false,
    };
    const obj50 = { uri: memo.backgroundVideo };
    obj24.source = obj50;
    obj24.poster = memo.backgroundImage;
    obj24.style = tmp10.promotionalBackground;
    obj24.paused = enabled;
    tmp12Result2 = closure_11(tmp3(tmp4[20]).VideoComponent, obj24);
  }
  let tmp3Result = num(ref[12]);
  tmp6 = undefined === themeOverride && null != memo;
}
