// === Module 8842: GameProfileHeader ===

// Module 8842 (GameProfileHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import Text_Text from "Text/Text" /* 4635 */;
import LinearGradientDefault from "LinearGradient" /* 5071 */;
import SKUUtils from "SKUUtils" /* 8843 */;
import GameProfileRankPillDefault from "GameProfileRankPill" /* 8844 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, image: null, titleContainer: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: fn(8840).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: fn(8840).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.coverContainer = size;
const size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.iconContainer = size1;
obj2.image = { width: "100%", height: "100%" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_9();
  const first = _slicedToArray(noop.useState(() => Math.random()), 1)[0];
  if (scrollY == null) {
    scrollY = obj2.useSharedValue(0);
  }
  obj2 = ReanimatedRexport;
  const fn = function x() {
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
    const mapped = genres.map(SKUUtils.getGenreText);
    joined = mapped.join(", ");
  }
  let l30Rank;
  if (game != null) {
    l30Rank = game.l30Rank;
  }
  const items = [game, first];
  const memo = noop.useMemo(() => {
    let bannerURL;
    if (game != null) {
      bannerURL = game.getBannerURL(1024);
    }
    if (null == bannerURL) {
      let screenshotUrls;
      if (game != null) {
        screenshotUrls = game.screenshotUrls;
      }
      let tmp3 = null;
      if (null != screenshotUrls) {
        tmp3 = null;
        if (game.screenshotUrls.length > 0) {
          const _Math = Math;
          tmp3 = game.screenshotUrls[Math.floor(Math, first * game.screenshotUrls.length)];
        }
      }
      bannerURL = tmp3;
    }
    return bannerURL;
  }, items);
  const items1 = [game];
  const memo1 = noop.useMemo(() => {
    let coverURL;
    if (game != null) {
      coverURL = game.getCoverURL(114);
    }
    return coverURL;
  }, items1);
  const items2 = [game];
  const memo2 = noop.useMemo(() => {
    let iconURL;
    if (game != null) {
      iconURL = game.getIconURL(114);
    }
    return iconURL;
  }, items2);
  const items3 = [onHeightMeasured];
  const obj3 = {
    style: tmp.container,
    onLayout: noop.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items3),
    children: null
  };
  const obj4 = { style: null, children: null };
  const items4 = [tmp.artHero, animatedStyle];
  obj4.style = items4;
  let tmp15 = null != memo;
  if (tmp15) {
    const obj5 = { source: null, style: null };
    const obj6 = { uri: memo };
    obj5.source = obj6;
    obj5.style = tmp.artHeroImage;
    tmp15 = React5(timestampProducer, obj5);
  }
  const items5 = [tmp15, ];
  const obj7 = { colors: null, style: tmp.artHeroGradient };
  const items6 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  obj7.colors = items6;
  items5[1] = React5(LinearGradientDefault, obj7);
  obj4.children = items5;
  const items7 = [React6(ReanimatedRexportDefault.View, obj4), ];
  const obj8 = { style: tmp.headerContent, children: null };
  const obj9 = { style: tmp.shadowContainer, children: null };
  if (null != memo1) {
    const obj10 = { style: tmp.coverContainer, children: null };
    const obj11 = { source: null, style: null };
    const obj12 = { uri: memo1 };
    obj11.source = obj12;
    obj11.style = tmp.image;
    obj10.children = React5(timestampProducer, obj11);
    let obj13 = obj10;
  } else {
    obj13 = { style: tmp.iconContainer, children: null };
    let tmp18Result = null != memo2;
    if (tmp18Result) {
      const obj14 = { source: null, style: null };
      const obj15 = { uri: memo2 };
      obj14.source = obj15;
      obj14.style = tmp.image;
      tmp18Result = React5(timestampProducer, obj14);
    }
    obj13.children = tmp18Result;
  }
  obj9.children = React5(hasOwnProperty, obj13);
  const items8 = [React5(hasOwnProperty, obj9), ];
  const obj16 = { style: tmp.titleContainer, children: null };
  let tmp18Result3 = null != l30Rank;
  if (tmp18Result3) {
    const obj17 = { rank: l30Rank };
    tmp18Result3 = React5(GameProfileRankPillDefault, obj17);
  }
  const items9 = [tmp18Result3, React5(Text_Text.Text, { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: name }), ];
  let tmp18Result4 = null;
  if (null != joined) {
    tmp18Result4 = null;
    if ("" !== joined) {
      const obj19 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp18Result4 = React5(Text_Text.Text, obj19);
    }
  }
  items9[2] = tmp18Result4;
  obj16.children = items9;
  items8[1] = React6(hasOwnProperty, obj16);
  obj8.children = items8;
  items7[1] = React6(hasOwnProperty, obj8);
  obj3.children = items7;
  return React6(hasOwnProperty, obj3);
};