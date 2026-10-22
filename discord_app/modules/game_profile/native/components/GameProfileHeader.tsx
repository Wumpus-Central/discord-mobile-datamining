// === Module 9271: GameProfileHeader ===

// Module 9271 (GameProfileHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import Text_Text from "Text/Text" /* 5220 */;
import LinearGradientDefault from "LinearGradient" /* 5244 */;
import FastImageDefault from "FastImage" /* 5655 */;
import SKUUtils from "SKUUtils" /* 9272 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9273 */;
import GameCoverArtDefault from "GameCoverArt" /* 9274 */;
import GameProfileRankPillDefault from "GameProfileRankPill" /* 9276 */;
import _modDef9278 from "module_9278" /* 9278 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const GameProfileConstants = fn(9269);
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 114;
let c9 = "rgba(0,0,0,0.3)";
const createStyles = fn(4969);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, iconContainer: null, titleContainer: null, titleRow: null, title: null, wavingWumpus: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.coverContainer = size;
const size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.iconContainer = size1;
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.titleRow = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.title = { flexShrink: 1 };
obj2.wavingWumpus = { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" };
let obj6 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const ReactCompilerGating = fn(558);
let obj7 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileHeader(arg0) {
  const cResult = c.c(58);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_10();
  if (scrollY == null) {
    scrollY = obj2.useSharedValue(0);
  }
  obj2 = ReanimatedRexport;
  const fn = function o() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(SKUUtils.getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
  }
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== onHeightMeasured) {
    class I {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    cResult[2] = onHeightMeasured;
    cResult[3] = I;
  } else {
    class I {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class I {
      constructor(arg0) {
        if (onHeightMeasured != null) {
          tmp2 = arg0;
          tmpResult = tmp(arg0.nativeEvent.layout.height);
        }
        return;
      }
    }
    if (cResult[7] === tmp9) {
      class I {
        constructor(arg0) {
          if (onHeightMeasured != null) {
            tmp2 = arg0;
            tmpResult = tmp(arg0.nativeEvent.layout.height);
          }
          return;
        }
      }
      if (cResult[10] !== tmp4.container.backgroundColor) {
        class I {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        const items = [c9, tmp4.container.backgroundColor];
        cResult[10] = tmp4.container.backgroundColor;
        cResult[11] = items;
      } else {
        class I {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
      }
      if (cResult[12] === tmp4.artHeroGradient) {
        class I {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        if (cResult[15] === tmp11) {
          class I {
            constructor(arg0) {
              if (onHeightMeasured != null) {
                tmp2 = arg0;
                tmpResult = tmp(arg0.nativeEvent.layout.height);
              }
              return;
            }
          }
        }
        const obj3 = { style: tmp11, children: null };
        const items1 = [tmp12, tmp15];
        obj3.children = items1;
        const tmp20 = React5(ReanimatedRexportDefault.View, obj3);
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp15;
        cResult[18] = tmp20;
      }
      const obj4 = { colors: tmp14, style: tmp4.artHeroGradient };
      const tmp17 = timestampProducer(LinearGradientDefault, obj4);
      cResult[12] = tmp4.artHeroGradient;
      cResult[13] = tmp14;
      cResult[14] = tmp17;
    }
    let tmp13 = null != tmp9;
    if (tmp13) {
      class I {
        constructor(arg0) {
          if (onHeightMeasured != null) {
            tmp2 = arg0;
            tmpResult = tmp(arg0.nativeEvent.layout.height);
          }
          return;
        }
      }
      const obj5 = { source: null, style: null };
      const obj6 = { uri: tmp9 };
      obj5.source = obj6;
      obj5.style = tmp4.artHeroImage;
      tmp13 = timestampProducer(FastImageDefault, obj5);
    }
    cResult[7] = tmp9;
    cResult[8] = tmp4.artHeroImage;
    cResult[9] = tmp13;
  }
  const items2 = [tmp4.artHero, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.artHero;
  cResult[6] = items2;
  const tmpResult = ReanimatedRexport;
}) : (function GameProfileHeader(arg0) {
  ({ game, scrollY, onHeightMeasured } = arg0);
  scrollY = undefined;
  const tmp = closure_10();
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  obj = ReanimatedRexport;
  const fn = function f() {
    return { top: -Math.max(0, -scrollY.get()) };
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 17327557152577;
  fn.__initData = __initData2;
  const genres = game.genres;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const mapped = genres.map(SKUUtils.getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items = [onHeightMeasured];
  const obj2 = {
    style: tmp.container,
    onLayout: noop.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items),
    children: null
  };
  const obj3 = { style: null, children: null };
  const items1 = [tmp.artHero, animatedStyle];
  obj3.style = items1;
  let tmp10 = null != tmp7;
  if (tmp10) {
    const obj4 = { source: null, style: null };
    const obj5 = { uri: tmp7 };
    obj4.source = obj5;
    obj4.style = tmp.artHeroImage;
    tmp10 = timestampProducer(FastImageDefault, obj4);
  }
  const items2 = [tmp10, ];
  const obj6 = { colors: null, style: tmp.artHeroGradient };
  const items3 = [c9, tmp.container.backgroundColor];
  obj6.colors = items3;
  items2[1] = timestampProducer(LinearGradientDefault, obj6);
  obj3.children = items2;
  const items4 = [React5(ReanimatedRexportDefault.View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: null };
  const obj8 = { style: tmp.shadowContainer, children: timestampProducer(GameCoverArtDefault, { game, coverImageSize: v114, iconImageSize: v114, coverContainerStyle: tmp.coverContainer, iconContainerStyle: tmp.iconContainer }) };
  const items5 = [timestampProducer(View, obj8), ];
  const obj10 = { style: tmp.titleContainer, children: null };
  let tmp12Result = null != l30Rank;
  if (tmp12Result) {
    const obj11 = { rank: l30Rank };
    tmp12Result = timestampProducer(GameProfileRankPillDefault, obj11);
  }
  const items6 = [tmp12Result, , ];
  const obj12 = { style: tmp.titleRow, children: null };
  const obj13 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: null, children: game.name };
  const items7 = [, ];
  ({ textShadow: arr9[0], title: arr9[1] } = tmp);
  obj13.style = items7;
  const items8 = [timestampProducer(Text_Text.Text, obj13), ];
  let tmp12Result3 = game.id === hasOwnProperty;
  if (tmp12Result3) {
    const obj14 = { source: _modDef9278, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    tmp12Result3 = timestampProducer(FastImageDefault, obj14);
    const tmp6Result = FastImageDefault;
  }
  items8[1] = tmp12Result3;
  obj12.children = items8;
  items6[1] = React5(View, obj12);
  let tmp12Result4 = null;
  if (null != joined) {
    tmp12Result4 = null;
    if ("" !== joined) {
      const obj15 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp12Result4 = timestampProducer(Text_Text.Text, obj15);
    }
  }
  items6[2] = tmp12Result4;
  obj10.children = items6;
  items5[1] = React5(View, obj10);
  obj7.children = items5;
  items4[1] = React5(View, obj7);
  obj2.children = items4;
  return React5(View, obj2);
});