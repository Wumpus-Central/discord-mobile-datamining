// === Module 10411: ref ===

// Module 10411 (ref)
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ View: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_6, Fonts: error, HelpdeskArticles: closure_8 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((color) => {
  let obj = { flex: 1, flexDirection: "column", gap: ThemesDefault.space.PX_12, minWidth: "100%", paddingTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
  obj[1] = obj;
  obj1 = { color, fontSize: 36, lineHeight: null, textAlignVertical: "center" };
  let obj4 = obj132;
  let num = 44;
  if (obj4.isAndroid()) {
    num = 36;
  }
  obj1[2] = num;
  obj[2] = obj1;
  obj[3] = { width: "100%", height: "100%", alignItems: "center", flex: 1, marginBottom: ThemesDefault.space.PX_16 };
  obj[4] = { width: "100%", paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_16, alignItems: "center", position: "relative", flexDirection: "column" };
  obj4 = { width: 32, height: 32, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center" };
  obj[5] = obj4;
  obj[6] = { position: "absolute", left: ThemesDefault.space.PX_16, top: ThemesDefault.space.PX_16, zIndex: 10 };
  obj[7] = { position: "absolute", top: 0, left: 0, right: 0, borderRadius: ThemesDefault.radii.xl, bottom: -100 };
  obj[8] = { flex: 1, height: 428 };
  obj[9] = { width: "100%", height: "100%" };
  obj[10] = { width: "100%", height: 144, gap: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_64 };
  obj[11] = { color, fontFamily: constants.PRIMARY_BOLD, fontWeight: "600", fontSize: 16, lineHeight: 20, textAlign: "center" };
  return obj;
});
let result = require("obj132").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetActionSheet.tsx");

export default function _default(balance) {
  let num = balance.balance;
  ({ themeOverride, primaryButtonConfig, secondaryButtonConfig, source: importDefault } = balance);
  let obj = React;
  const ref = React.useRef(null);
  const callback = React.useCallback(() => {
    const tmp = callback(ref[9]);
    tmp(callback(ref[10]).getArticleURL(constants.ORBS_FAQ));
  }, []);
  const enabled = React.useContext(num(ref[11]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const items = [num];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (num > 4100) {
      const obj = { backgroundVideo: null, backgroundImage: null, bannerImage: null, bannerText: null };
      obj[0] = num(ref[5]).default;
      obj[1] = num(ref[6]).default;
      obj[2] = num(ref[7]).default;
      const intl = num(ref[8]).intl;
      obj[3] = intl.string(num(ref[8]).t.LaMEFL);
      tmp = obj;
    }
    return tmp;
  }, items);
  if (tmp6) {
    themeOverride = "dark";
  }
  const token = num(ref[12]).useToken(importDefault(tmp4[13]).colors.MOBILE_TEXT_HEADING_PRIMARY, themeOverride);
  const tmp9 = callback(token);
  const effect = obj.useEffect(() => {
    importDefault(ref[14]);
    let obj = { type: "VIEW", source: closure_1, balance: num };
    obj.track(closure_1_6.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
    if (!obj3.UNSAFE_isDismissibleContentDismissed(num(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL)) {
      obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result = num(ref[15]).UNSAFE_markDismissibleContentAsDismissed(num(ref[16]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL, obj);
      const tmp3Result = num(ref[15]);
    }
    obj3 = num(ref[15]);
  }, []);
  obj = {
    ref,
    startExpanded: true,
    handleComponent() {
      return callback2(closure_4, {});
    },
    handleDisabled: false,
    children: null
  };
  const items1 = [tmp9.content, ];
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
  obj1 = { style: items1, children: null };
  items1[1] = promotionalBackgroundContainer;
  if (!(null != memo && null != memo.backgroundVideo && null != memo.backgroundImage)) {
    const items2 = [tmp14, , , , , ];
    const obj2 = { onPress: null };
    obj2[0] = function onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    };
    items2[1] = callback(tmp3(tmp4[21]).ActionSheetHeaderBar, obj2);
    let obj3 = { style: null, children: null };
    obj3[0] = tmp9.infoIconContainer;
    const obj4 = { onPress: null, accessibilityRole: "link", accessibilityLabel: null, children: null };
    obj4[0] = callback;
    let intl = tmp3(tmp4[8]).intl;
    obj4[2] = intl.string(tmp3(tmp4[8]).t.B1oJtQ);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp9.infoIconBackground;
    const obj6 = { size: "sm", color: null };
    obj6[1] = importDefault(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT;
    obj5[1] = callback(tmp3(tmp4[22]).CircleQuestionIcon, obj6);
    obj4[3] = callback(closure_4, obj5);
    obj3[1] = callback(closure_5, obj4);
    items2[2] = callback(closure_4, obj3);
    const obj7 = { style: null, children: null };
    obj7[0] = tmp9.header;
    const obj8 = { style: null, children: null };
    obj8[0] = tmp9.balanceHeader;
    const obj9 = { size: "lg", color: null };
    obj9[1] = token;
    const items3 = [callback(tmp3(tmp4[23]).OrbsIcon, obj9), ];
    const obj10 = { variant: "display-md", style: null, accessibilityLabel: null, children: null };
    obj10[1] = tmp9.balanceText;
    const intl2 = tmp3(tmp4[8]).intl;
    let num2 = num;
    if (num == null) {
      num2 = 0;
    }
    const obj11 = { orbAmount: null };
    obj11[0] = num2;
    obj10[2] = intl2.formatToPlainString(tmp3(tmp4[8]).t.W4DfeF, obj11);
    if (num == null) {
      num = 0;
    }
    obj10[3] = num;
    items3[1] = callback(tmp3(tmp4[24]).Text, obj10);
    obj8[1] = items3;
    obj7[1] = callback2(closure_4, obj8);
    items2[3] = callback(closure_4, obj7);
    let tmp12Result = null != memo && null != memo.bannerImage;
    if (tmp12Result) {
      const obj12 = { style: null, children: null };
      obj12[0] = tmp9.promotionalBannerContainer;
      const obj13 = { source: null, style: null, resizeMode: "contain" };
      const obj14 = { uri: null };
      obj14[0] = memo.bannerImage;
      obj13[0] = obj14;
      obj13[1] = tmp9.promotionalBannerAsset;
      const items4 = [callback(importDefault(tmp4[19]), obj13), ];
      let tmp11Result = null != memo.bannerText;
      if (tmp11Result) {
        tmp11Result = "" !== memo.bannerText;
      }
      if (tmp11Result) {
        const obj15 = { variant: "heading-xl/medium", style: null, children: null };
        obj15[1] = tmp9.promotionalBannerText;
        obj15[2] = memo.bannerText;
        tmp11Result = callback(tmp3(tmp4[24]).Text, obj15);
      }
      items4[1] = tmp11Result;
      obj12[1] = items4;
      tmp12Result = callback2(closure_4, obj12);
    }
    items2[4] = tmp12Result;
    const obj16 = { style: null, children: null };
    obj16[0] = tmp9.actions;
    ({ buttonText: obj25[0], onButtonPress: obj25[3] } = primaryButtonConfig);
    const items5 = [callback(tmp3(tmp4[25]).Button, { text: null, variant: "primary", size: "lg", onPress: null }), ];
    ({ buttonText: obj26[0], onButtonPress: obj26[3] } = secondaryButtonConfig);
    items5[1] = callback(tmp3(tmp4[25]).Button, { text: null, variant: "tertiary", size: "lg", onPress: null });
    obj16[1] = items5;
    items2[5] = callback2(closure_4, obj16);
    obj1[1] = items2;
    obj[4] = callback2(closure_4, obj1);
    obj[1] = callback(tmp3(tmp4[18]).BottomSheet, obj);
    return callback(tmp3(tmp4[17]).ThemeContextProvider, obj);
  } else if (enabled) {
    const obj19 = { source: null, style: null, resizeMode: "cover" };
    const obj20 = { uri: null };
    obj20[0] = memo.backgroundImage;
    obj19[0] = obj20;
    obj19[1] = tmp9.promotionalBackground;
    tmp11Result = callback(importDefault(tmp4[19]), obj19);
  } else {
    const obj21 = { source: null, poster: null, style: null, muted: true, disableFocus: true, pauseWhileAppInactive: true, paused: null, posterResizeMode: "cover", resizeMode: "cover", preventsDisplaySleepDuringVideoPlayback: false };
    const obj22 = { uri: null };
    obj22[0] = memo.backgroundVideo;
    obj21[0] = obj22;
    obj21[1] = memo.backgroundImage;
    obj21[2] = tmp9.promotionalBackground;
    obj21[6] = enabled;
    tmp11Result = callback(tmp3(tmp4[20]).VideoComponent, obj21);
  }
  let tmp3Result = num(ref[12]);
  tmp6 = undefined === themeOverride && null != memo;
};