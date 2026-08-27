// === Module 8765: GameProfileHeader ===

// Module 8765 (GameProfileHeader)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, image: null, titleContainer: null, textShadow: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", position: "absolute", top: 0, bottom: -ThemesDefault.space.PX_80, left: 0, right: 0 };
createCacheKey[2] = { height: "100%", width: "100%", resizeMode: "cover" };
createCacheKey[3] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj1 = { width: "100%", position: "absolute", top: 0, bottom: -ThemesDefault.space.PX_80, left: 0, right: 0 };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_32, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: 520, alignSelf: "center", width: "100%" };
let obj2 = { paddingTop: ThemesDefault.space.PX_32, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: 520, alignSelf: "center", width: "100%" };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[5] = { borderRadius: ThemesDefault.radii.sm };
const obj3 = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { width: 85, height: 114, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
let obj4 = { width: 85, height: 114, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[7] = { width: 85, height: 85, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[8] = { width: "100%", height: "100%" };
createCacheKey[9] = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { width: 85, height: 85, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createCacheKey[10] = { textShadowColor: ThemesDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
let obj6 = { textShadowColor: ThemesDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  let first;
  scrollY = undefined;
  const tmp = callback2();
  let obj = React;
  first = scrollY(React.useState(() => Math.random()), 1)[0];
  obj1 = game(first[6]);
  if (scrollY == null) {
    scrollY = obj1.useSharedValue(0);
  }
  const fn = function _() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = closure_10;
  let name;
  const animatedStyle = game(first[6]).useAnimatedStyle(fn);
  if (game != null) {
    name = game.name;
  }
  let joined;
  if (game != null) {
    const genres = game.genres;
    const mapped = genres.map(tmp3(tmp4[7]).getGenreText);
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
  obj = { style: items4, children: null };
  items4 = [tmp.artHero, animatedStyle];
  let tmp15 = null != memo;
  if (tmp15) {
    obj1 = { source: null, style: null };
    const obj2 = { uri: null };
    obj2[0] = memo;
    obj1[0] = obj2;
    obj1[1] = tmp.artHeroImage;
    tmp15 = callback(closure_6, obj1);
  }
  const items5 = [tmp15, ];
  const items6 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  items5[1] = callback(onHeightMeasured(first[8]), { colors: items6, style: tmp.artHeroGradient });
  obj[1] = items5;
  const items7 = [closure_8(onHeightMeasured(first[6]).View, obj), ];
  const obj4 = { style: tmp.headerContent, children: null };
  const obj5 = { style: tmp.shadowContainer, children: null };
  if (null != memo1) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.coverContainer;
    const obj7 = { source: null, style: null };
    const obj8 = { uri: null };
    obj8[0] = memo1;
    obj7[0] = obj8;
    obj7[1] = tmp.image;
    obj6[1] = tmp18(closure_6, obj7);
    let obj9 = obj6;
  } else {
    obj9 = { style: null, children: null };
    obj9[0] = tmp.iconContainer;
    let tmp18Result = null != memo2;
    if (tmp18Result) {
      const obj10 = { source: null, style: null };
      const obj11 = { uri: null };
      obj11[0] = memo2;
      obj10[0] = obj11;
      obj10[1] = tmp.image;
      tmp18Result = tmp18(closure_6, obj10);
    }
    obj9[1] = tmp18Result;
  }
  obj5[1] = callback(closure_5, obj9);
  const items8 = [callback(closure_5, obj5), ];
  const obj12 = { style: tmp.titleContainer, children: null };
  tmp18Result = null != l30Rank;
  if (tmp18Result) {
    const obj13 = { rank: null };
    obj13[0] = l30Rank;
    tmp18Result = tmp18(tmp14(tmp4[9]), obj13);
  }
  const items9 = [tmp18Result, callback(game(first[10]).Text, { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: name }), ];
  let tmp18Result1 = null;
  if (null != joined) {
    tmp18Result1 = null;
    if ("" !== joined) {
      const obj15 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: null, children: null };
      obj15[3] = tmp.textShadow;
      obj15[4] = joined;
      tmp18Result1 = tmp18(tmp3(tmp4[10]).Text, obj15);
    }
  }
  items9[2] = tmp18Result1;
  obj12[1] = items9;
  items8[1] = closure_8(closure_5, obj12);
  obj4[1] = items8;
  items7[1] = closure_8(closure_5, obj4);
  obj[2] = items7;
  return closure_8(closure_5, obj);
};