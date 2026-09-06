// === Module 8714: GameProfileHeader ===

// Module 8714 (GameProfileHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, image: null, titleContainer: null, textShadow: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.container = createStyles;
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
createStyles.artHero = rect;
createStyles.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
createStyles.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
createStyles.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: 520, alignSelf: "center", width: "100%" };
let obj1 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: 520, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles.coverContainer = size;
const size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles.iconContainer = size1;
createStyles.image = { width: "100%", height: "100%" };
createStyles.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_9 = createStyles.createStyles(createStyles);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_9();
  let obj = noop;
  const first = _slicedToArray(noop.useState(() => Math.random()), 1)[0];
  let obj1 = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj1.useSharedValue(0);
  }
  const fn = function _() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  let name;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (game != null) {
    name = game.name;
  }
  let joined;
  if (game != null) {
    const genres = game.genres;
    const mapped = genres.map(tmp3(8715).getGenreText);
    joined = mapped.join(", ");
  }
  let l30Rank;
  if (game != null) {
    l30Rank = game.l30Rank;
  }
  const items = [game, first];
  const memo = obj.useMemo(() => {
    let bannerURL;
    if (game != null) {
      bannerURL = obj.getBannerURL(1024);
    }
    if (null == bannerURL) {
      let screenshotUrls;
      if (obj != null) {
        screenshotUrls = obj.screenshotUrls;
      }
      let tmp3 = null;
      if (null != screenshotUrls) {
        tmp3 = null;
        if (obj.screenshotUrls.length > 0) {
          const _Math = Math;
          tmp3 = obj.screenshotUrls[Math.floor(Math, first * obj.screenshotUrls.length)];
        }
      }
      bannerURL = tmp3;
    }
    return bannerURL;
  }, items);
  const items1 = [game];
  const memo1 = obj.useMemo(() => {
    let coverURL;
    if (game != null) {
      coverURL = game.getCoverURL(114);
    }
    return coverURL;
  }, items1);
  const items2 = [game];
  const memo2 = obj.useMemo(() => {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(114);
    }
    return iconURL;
  }, items2);
  const items3 = [onHeightMeasured];
  obj = {
    style: tmp.container,
    onLayout: obj.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items3),
    children: null
  };
  obj = { style: null, children: null };
  const items4 = [tmp.artHero, animatedStyle];
  obj.style = items4;
  let tmp15 = null != memo;
  if (tmp15) {
    obj1 = { source: null, style: null };
    const obj2 = { uri: memo };
    obj1.source = obj2;
    obj1.style = tmp.artHeroImage;
    tmp15 = React5(timestampProducer, obj1);
  }
  const items5 = [tmp15, ];
  const obj3 = { colors: null, style: tmp.artHeroGradient };
  const items6 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  obj3.colors = items6;
  items5[1] = React5(LinearGradientDefault, obj3);
  obj.children = items5;
  const items7 = [React6(ReanimatedRexportDefault.View, obj), ];
  const obj4 = { style: tmp.headerContent, children: null };
  const obj5 = { style: tmp.shadowContainer, children: null };
  if (null != memo1) {
    const obj6 = { style: tmp.coverContainer, children: null };
    const obj7 = { source: null, style: null };
    const obj8 = { uri: memo1 };
    obj7.source = obj8;
    obj7.style = tmp.image;
    obj6.children = tmp18(timestampProducer, obj7);
    let obj9 = obj6;
  } else {
    obj9 = { style: tmp.iconContainer, children: null };
    let tmp18Result = null != memo2;
    if (tmp18Result) {
      const obj10 = { source: null, style: null };
      const obj11 = { uri: memo2 };
      obj10.source = obj11;
      obj10.style = tmp.image;
      tmp18Result = tmp18(timestampProducer, obj10);
    }
    obj9.children = tmp18Result;
  }
  obj5.children = React5(hasOwnProperty, obj9);
  const items8 = [React5(hasOwnProperty, obj5), ];
  const obj12 = { style: tmp.titleContainer, children: null };
  tmp18Result = null != l30Rank;
  if (tmp18Result) {
    const obj13 = { rank: l30Rank };
    tmp18Result = tmp18(tmp14(8716), obj13);
  }
  const items9 = [tmp18Result, React5(Text_Text.Text, { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: name }), ];
  let tmp18Result1 = null;
  if (null != joined) {
    tmp18Result1 = null;
    if ("" !== joined) {
      const obj15 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp18Result1 = tmp18(tmp3(4556).Text, obj15);
    }
  }
  items9[2] = tmp18Result1;
  obj12.children = items9;
  items8[1] = React6(hasOwnProperty, obj12);
  obj4.children = items8;
  items7[1] = React6(hasOwnProperty, obj4);
  obj.children = items7;
  return React6(hasOwnProperty, obj);
};