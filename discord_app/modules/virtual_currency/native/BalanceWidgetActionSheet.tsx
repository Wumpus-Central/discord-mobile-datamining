// discord_app/modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _mod11102 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_animated.mp4.js";
import _mod11103 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_bg_static.png.js";
import _mod11104 from "../../../../discord_assets/assets/virtual_currency/images/native/balancePromotion_rewards.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Fonts: closure_7, HelpdeskArticles: closure_8 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((color) => {
  let obj = {
    actions: null,
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
  obj = {
    flex: 1,
    flexDirection: "column",
    gap: nativeDefault.space.PX_12,
    minWidth: "100%",
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.actions = obj;
  obj = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
  };
  obj.balanceHeader = obj;
  const obj1 = { color, fontSize: 36, lineHeight: null, textAlignVertical: "center" };
  let num = 44;
  if (obj5.isAndroid()) {
    num = 36;
  }
  obj1.lineHeight = num;
  obj.balanceText = obj1;
  const size = { width: "100%", height: "100%", alignItems: "center", flex: 1, marginBottom: tmp(576).space.PX_16 };
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
    backgroundColor: tmp(576).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: tmp(576).radii.round,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.infoIconBackground = size1;
  const rect = { position: "absolute", left: tmp(576).space.PX_16, top: tmp(576).space.PX_16, zIndex: 10 };
  obj.infoIconContainer = rect;
  const rect1 = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: tmp(576).radii.xl, bottom: -100 };
  obj.promotionalBackground = rect1;
  obj.promotionalBackgroundContainer = { flex: 1, height: 428 };
  obj.promotionalBannerAsset = { width: "100%", height: "100%" };
  const size2 = { width: "100%", height: 144, gap: tmp(576).space.PX_12, marginBottom: tmp(576).space.PX_64 };
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
  let obj = noop;
  const ref = noop.useRef(null);
  const callback = noop.useCallback(() => {
    const tmp = source(ref[9]);
    tmp(source(ref[10]).getArticleURL(constants.ORBS_FAQ));
  }, []);
  const enabled = noop.useContext(num(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [num];
  const memo = noop.useMemo(() => {
    if (num == null) {
      num = 0;
    }
    let tmp = null;
    if (num > 4100) {
      const obj = {
        backgroundVideo: _mod11102.default,
        backgroundImage: _mod11103.default,
        bannerImage: _mod11104.default,
        bannerText: null,
      };
      const intl = util.intl;
      obj.bannerText = intl.string(util.t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp6) {
    themeOverride = "dark";
  }
  const token = num(ref[12]).useToken(require("native").colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp9 = closure_12(token);
  const effect = obj.useEffect(() => {
    let obj = { type: "VIEW", source, balance: num };
    obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
    if (
      !obj3.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
      )
    ) {
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = tmp3(4380).UNSAFE_markDismissibleContentAsDismissed(
        tmp3(1943).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
        obj,
      );
      const tmp3Result = tmp3(4380);
    }
  }, []);
  obj = { theme: themeOverride, children: null };
  obj = {
    ref,
    startExpanded: true,
    handleComponent() {
      return closure_1_10(closure_1_4, {});
    },
    handleDisabled: false,
    children: null,
  };
  const items1 = [tmp9.content];
  let promotionalBackgroundContainer = null != memo;
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundVideo;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = null != memo.backgroundImage;
  }
  if (promotionalBackgroundContainer) {
    promotionalBackgroundContainer = tmp9.promotionalBackgroundContainer;
  }
  const obj1 = { style: items1, children: null };
  items1[1] = promotionalBackgroundContainer;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp14, , , , ,];
    const obj2 = {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
      },
    };
    items2[1] = tmp11(tmp3(tmp4[21]).ActionSheetHeaderBar, obj2);
    const obj3 = { style: tmp9.infoIconContainer, children: null };
    const obj4 = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, children: null };
    let intl = tmp3(tmp4[8]).intl;
    obj4.accessibilityLabel = intl.string(tmp3(tmp4[8]).t.B1oJtQ);
    const obj5 = { style: tmp9.infoIconBackground, children: null };
    const obj6 = { size: "sm", color: tmp7(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj5.children = tmp11(tmp3(tmp4[22]).CircleQuestionIcon, obj6);
    obj4.children = tmp11(tmp13, obj5);
    obj3.children = tmp11(closure_5, obj4);
    items2[2] = tmp11(tmp13, obj3);
    const obj7 = { style: tmp9.header, children: null };
    const obj8 = { style: tmp9.balanceHeader, children: null };
    const obj9 = { size: "lg", color: token };
    const items3 = [tmp11(tmp3(tmp4[23]).OrbsIcon, obj9)];
    const obj10 = { variant: "display-md", style: tmp9.balanceText, accessibilityLabel: null, children: null };
    const intl2 = tmp3(tmp4[8]).intl;
    let num2 = num;
    if (num == null) {
      num2 = 0;
    }
    const obj11 = { orbAmount: num2 };
    obj10.accessibilityLabel = intl2.formatToPlainString(tmp3(tmp4[8]).t.W4DfeF, obj11);
    if (num == null) {
      num = 0;
    }
    obj10.children = num;
    items3[1] = tmp11(tmp3(tmp4[24]).Text, obj10);
    obj8.children = items3;
    obj7.children = tmp12(tmp13, obj8);
    items2[3] = tmp11(tmp13, obj7);
    let tmp12Result = null != memo && null != memo.bannerImage;
    if (tmp12Result) {
      const obj12 = { style: tmp9.promotionalBannerContainer, children: null };
      const obj13 = { source: null, style: null, resizeMode: "contain" };
      const obj14 = { uri: memo.bannerImage };
      obj13.source = obj14;
      obj13.style = tmp9.promotionalBannerAsset;
      const items4 = [tmp11(tmp7(tmp4[19]), obj13)];
      let tmp11Result = null != memo.bannerText;
      if (tmp11Result) {
        tmp11Result = "" !== memo.bannerText;
      }
      if (tmp11Result) {
        const obj15 = { variant: "heading-xl/medium", style: tmp9.promotionalBannerText, children: memo.bannerText };
        tmp11Result = tmp11(tmp3(tmp4[24]).Text, obj15);
      }
      items4[1] = tmp11Result;
      obj12.children = items4;
      tmp12Result = tmp12(tmp13, obj12);
    }
    items2[4] = tmp12Result;
    const obj16 = { style: tmp9.actions, children: null };
    ({ buttonText: obj25.text, onButtonPress: obj25.onPress } = primaryButtonConfig);
    const items5 = [tmp11(tmp3(tmp4[25]).Button, { text: null, variant: "primary", size: "lg", onPress: null })];
    ({ buttonText: obj26.text, onButtonPress: obj26.onPress } = secondaryButtonConfig);
    items5[1] = tmp11(tmp3(tmp4[25]).Button, { text: null, variant: "tertiary", size: "lg", onPress: null });
    obj16.children = items5;
    items2[5] = tmp12(tmp13, obj16);
    obj1.children = items2;
    obj.children = tmp12(tmp13, obj1);
    obj.children = tmp11(tmp3(tmp4[18]).BottomSheet, obj);
    return tmp11(tmp3(tmp4[17]).ThemeContextProvider, obj);
  } else if (enabled) {
    const obj19 = { source: null, style: null, resizeMode: "cover" };
    const obj20 = { uri: memo.backgroundImage };
    obj19.source = obj20;
    obj19.style = tmp9.promotionalBackground;
    tmp11Result = tmp11(tmp7(tmp4[19]), obj19);
  } else {
    const obj21 = {
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
    const obj22 = { uri: memo.backgroundVideo };
    obj21.source = obj22;
    obj21.poster = memo.backgroundImage;
    obj21.style = tmp9.promotionalBackground;
    obj21.paused = enabled;
    tmp11Result = tmp11(tmp3(tmp4[20]).VideoComponent, obj21);
  }
}
