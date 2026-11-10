// === Module 18206: HeroBlockOrbsArcadeHeader ===

// Module 18206 (HeroBlockOrbsArcadeHeader)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import shared from "shared" /* 5149 */;
import native from "native" /* 5201 */;
import useThemeDefault from "useTheme" /* 5371 */;
import useToken from "useToken" /* 5726 */;
import Text_Text from "Text/Text" /* 5753 */;
import QuestContent from "QuestContent" /* 6844 */;
import inlineStyles from "inlineStyles" /* 8105 */;
import QuestUtils from "QuestUtils" /* 9775 */;
import _modDef18207 from "module_18207" /* 18207 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;

const inlineStylesDefault = inlineStyles;

require = fn;
function handleTakeMeHere() {
  const obj = QuestUtils;
  obj.openQuestHome({ mergeExistingRoutes: true, fromContent: QuestContent.QuestContent.ORBS_SHOP_HERO_CTA });
}
function RadialGradientLayer(color) {
  ({ id, ellipse } = color);
  ({ cx, cy, rotation } = ellipse);
  color = color.color;
  c0 = undefined;
  ({ rx, ry } = ellipse);
  ({ opacity, frameHeight } = color);
  const tmp = closure_18();
  [size, c0] = noop.useState({ width: 0, height: 0 });
  const obj = {
    style: tmp.gradient,
    onLayout: noop.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      const size = { width: layout.width, height: layout.height };
      _undefined(size);
    }, []),
    children: null
  };
  let tmp6Result = null;
  if (size.width > 0) {
    tmp6Result = null;
    if (size.height > 0) {
      const size1 = { width: null, height: null, viewBox: null, preserveAspectRatio: "none", children: null };
      ({ width: obj2.width, height: obj2.height } = size);
      const _HermesInternal = HermesInternal;
      size1.viewBox = "0 0 375 " + frameHeight;
      const obj3 = { id, gradientUnits: "userSpaceOnUse", cx, cy, rx, ry, gradientTransform: null, children: null };
      let combined;
      if (null != rotation) {
        const _HermesInternal2 = HermesInternal;
        combined = "rotate(" + rotation + " " + cx + " " + cy + ")";
      }
      const obj4 = { children: null };
      obj3.gradientTransform = combined;
      const obj5 = { offset: 0, stopColor: color, stopOpacity: opacity };
      items = [React6(inlineStyles.Stop, obj5), ];
      const obj6 = { offset: 1, stopColor: color, stopOpacity: 0 };
      items[1] = React6(inlineStyles.Stop, obj6);
      obj3.children = items;
      obj4.children = closure_1_10(inlineStyles.RadialGradient, obj3);
      const items1 = [React6(inlineStyles.Defs, obj4), ];
      const size2 = { width: "100%", height: "100%", fill: null };
      const _HermesInternal3 = HermesInternal;
      size2.fill = "url(#" + id + ")";
      items1[1] = React6(inlineStyles.Rect, size2);
      size1.children = items1;
      tmp6Result = closure_1_10(inlineStylesDefault, size1);
    }
  }
  obj.children = tmp6Result;
  return React6(hasOwnProperty, obj);
}
function ArtScrim() {
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX);
  const obj2 = _modDef671(token);
  return React6(RadialGradientLayer, { id: "orbsArcadeShopHeaderScrim", ellipse, color: obj2.hex("rgb"), opacity: obj2.alpha(), frameHeight });
}
function HeroBlockOrbsArcadeHeaderContent(bleedsOntoPage) {
  bleedsOntoPage = bleedsOntoPage.bleedsOntoPage;
  importDefault = undefined;
  first = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let fontScale;
  const tmp = closure_18();
  _require = tmp;
  const token = require("useToken").useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  const obj = require("useToken");
  const obj2 = require("ColorUtils");
  const hexToRgbaStringResult = obj2.hexToRgbaString(require("ColorUtils").hexWithOpacity(token, 0));
  const obj3 = require("ColorUtils");
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = require("initialize");
  [tmp9, c1] = noop.useState(false);
  const tmp10 = require("useIsCarouselInView")();
  const isInView = tmp10.isInView;
  [first, _slicedToArray] = noop.useState(null);
  const callback = noop.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (bleedsOntoPage) {
    let tmp17 = c12;
    let sum = c12;
  } else {
    sum = c12 + PX_16;
    tmp17 = c12;
  }
  noop = sum;
  const items1 = [tmp.header, first, sum];
  const items2 = [sum];
  const memo = obj5.useMemo(() => {
    let num = 1;
    if (null != first) {
      const _Math = Math;
      num = Math.min(tmp / 375, 1.25);
    }
    items = [header.header, { minHeight: c4 * num }];
    return items;
  }, items1);
  const memo1 = obj5.useMemo(() => {
    items = [0.5, 271.6216216216216 / c4];
    return items;
  }, items2);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const isFocused = require("Link").useIsFocused();
  const tmp2Result = require("Link");
  fontScale = require("useFontScale").useFontScale();
  [][0] = fontScale;
  const obj6 = { ref: tmp10.containerRef, style: memo, onLayout: callback, children: null };
  const obj7 = { style: tmp.art, children: null };
  const obj8 = { style: tmp.artFrame, children: null };
  if (!stateFromStores) {
    if (!tmp9) {
      const obj9 = { style: tmp.video, source: null, poster: null, posterResizeMode: "cover", resizeMode: "cover", paused: null, onError: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      const obj10 = { uri: tmp4(tmp3[8]) };
      obj9.source = obj10;
      obj9.poster = metadata;
      let tmp27 = !isInView;
      if (isInView) {
        tmp27 = !isFocused;
      }
      obj9.paused = tmp27;
      obj9.onError = function onError() {
        return _undefined(true);
      };
      let tmp25Result = closure_9(tmp2(tmp3[20]).VideoComponent, obj9);
    }
    obj8.children = tmp25Result;
    const items3 = [closure_9(tmp24, obj8), closure_9(ArtScrim, {}), ];
    const obj11 = { style: tmp.gradient, start: null, end: null, locations: null, colors: null };
    ({ START: obj15.start, END: obj15.end } = closure_8);
    obj11.locations = memo1;
    const items4 = [hexToRgbaStringResult, token];
    obj11.colors = items4;
    items3[2] = closure_9(tmp4(tmp3[23]), obj11);
    obj7.children = items3;
    const items5 = [closure_10(tmp24, obj7), , ];
    const items6 = [tmp.glow, ];
    let glowWithBleed = bleedsOntoPage;
    if (bleedsOntoPage) {
      glowWithBleed = tmp.glowWithBleed;
    }
    const obj12 = { style: null, pointerEvents: "none", children: null };
    items6[1] = glowWithBleed;
    obj12.style = items6;
    const obj13 = { id: "orbsArcadeShopHeaderGlow", ellipse: ellipse2, color: "#5242a3", opacity: 0.55, frameHeight: null };
    let sum1 = tmp17;
    if (bleedsOntoPage) {
      sum1 = tmp17 + PX_48;
    }
    obj13.frameHeight = sum1;
    const items7 = [closure_9(RadialGradientLayer, obj13), ];
    let tmp25Result2 = null;
    if (bleedsOntoPage) {
      const obj14 = { style: tmp.bleedFade, start: null, end: null, colors: null };
      ({ START: obj18.start, END: obj18.end } = closure_8);
      const items8 = [hexToRgbaStringResult, token];
      obj14.colors = items8;
      tmp25Result2 = closure_9(tmp4(tmp3[23]), obj14);
    }
    items7[1] = tmp25Result2;
    obj12.children = items7;
    items5[1] = closure_10(tmp24, obj12);
    const items9 = [tmp.content, ];
    let contentWithPadding = !bleedsOntoPage;
    if (!bleedsOntoPage) {
      contentWithPadding = tmp.contentWithPadding;
    }
    const obj16 = { style: null, children: null };
    items9[1] = contentWithPadding;
    obj16.style = items9;
    const obj17 = { style: tmp22, children: null };
    const obj19 = { variant: "display-sm", color: "text-strong", children: null };
    const intl = tmp2(tmp3[25]).intl;
    obj19.children = intl.string(tmp2(tmp3[25]).t["2L068F"]);
    const items10 = [closure_9(tmp2(tmp3[24]).Heading, obj19), ];
    const obj20 = { variant: "body-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[25]).intl;
    obj20.children = intl2.string(tmp2(tmp3[25]).t.BnpvVU);
    items10[1] = closure_9(tmp2(tmp3[24]).Text, obj20);
    obj17.children = items10;
    const items11 = [closure_10(tmp24, obj17), ];
    const obj21 = { variant: "primary-overlay", size: "sm", grow: false, shrink: true, text: null, onPress: null };
    const intl3 = tmp2(tmp3[25]).intl;
    obj21.text = intl3.string(tmp2(tmp3[25]).t.Yjyv5F);
    obj21.onPress = handleTakeMeHere;
    items11[1] = closure_9(tmp2(tmp3[26]).Button, obj21);
    obj16.children = items11;
    items5[2] = closure_10(tmp24, obj16);
    obj6.children = items5;
    return closure_10(tmp24, obj6);
  }
  const obj22 = { source: null, style: null, accessible: false };
  const obj23 = { uri: null };
  const tmp2Result2 = require("useFontScale");
  obj23.uri = require("module_18208");
  obj22.source = obj23;
  obj22.style = tmp.image;
  tmp25Result = closure_9(require("FastImage"), obj22);
  const tmp4Result = require("FastImage");
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ ThemeTypes: metroImportDefault, VerticalGradient: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let c12 = 289;
const PX_16 = nativeDefault.space.PX_16;
const AssetUtils = fn(9791);
const metadata = AssetUtils.convertVideoToFirstFrameImageWithMediaProxy(_modDef18207);
const PX_48 = nativeDefault.space.PX_48;
const ellipse = { cx: 85.5, cy: 267.5, rx: 329, ry: 217, rotation: 63 };
const ellipse2 = { cx: 67, cy: 231, rx: 185, ry: 155 };
const createStyles = fn(5142);
let obj4 = { header: { justifyContent: "flex-end" }, art: null, artFrame: null, image: null, video: null, gradient: null, glow: null, glowWithBleed: null, bleedFade: null, content: null, contentWithPadding: null, productsTitle: null };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.overflow = "hidden";
obj5.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj4.art = obj5;
obj4.artFrame = { position: "absolute", top: 0, left: 0, right: 0, aspectRatio: 1.3805970149253732 };
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.resizeMode = "cover";
obj4.image = obj6;
({ absoluteFillObject: obj3.video, absoluteFillObject: obj3.gradient, absoluteFillObject: obj3.glow } = StyleSheet);
obj4.glowWithBleed = { bottom: -PX_48 };
obj4.bleedFade = { position: "absolute", left: 0, right: 0, bottom: 0, height: PX_48 };
obj4.content = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj4.contentWithPadding = { paddingBottom: PX_16 };
let obj7 = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj4.productsTitle = { paddingHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj4);
let size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlockOrbsArcadeHeader.tsx");

export default function HeroBlockOrbsArcadeHeader(productsTitle) {
  productsTitle = productsTitle.productsTitle;
  const tmp3 = useThemeDefault();
  const tmp = closure_18();
  const isThemeDarkResult = shared.isThemeDark(tmp3);
  let DARK = tmp3;
  if (!isThemeDarkResult) {
    DARK = constants.DARK;
  }
  const children = [React6(native.ThemeContextProvider, { theme: DARK, children: React6(HeroBlockOrbsArcadeHeaderContent, { bleedsOntoPage: isThemeDarkResult }) }), ];
  let tmp8Result = null;
  if (null != productsTitle) {
    tmp8Result = null;
    if ("" !== productsTitle) {
      const obj3 = { variant: "heading-lg/semibold", style: tmp.productsTitle, children: productsTitle };
      tmp8Result = React6(Text_Text.Heading, obj3);
    }
  }
  children[1] = tmp8Result;
  return closure_1_10(closure_1_11, { children });
};