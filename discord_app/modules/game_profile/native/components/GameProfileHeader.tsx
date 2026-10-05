// === Module 8360: GameProfileHeader ===

// Module 8360 (GameProfileHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import SKUUtils from "SKUUtils" /* 8361 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 8362 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameProfileConstants from "GameProfileConstants" /* 8358 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let MOBILE_GAME_PROFILE_MAX_WIDTH;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
let size1;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ DISCORD_APP_GAME_ID: metroRequire, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 114;
let c10 = "rgba(0,0,0,0.3)";
let createStyles = createStyles_mod;
let obj = { container: obj2, artHero: rect, artHeroImage: { height: "100%", width: "100%", resizeMode: "cover" }, artHeroGradient: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, headerContent: obj3, shadowContainer: obj4, coverContainer: size, iconContainer: size1, image: { width: "100%", height: "100%" }, titleContainer: { flex: 1, flexDirection: "column", alignItems: "flex-start" }, titleRow: obj5, title: { flexShrink: 1 }, wavingWumpus: { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" }, textShadow: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj3 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj4 = { borderRadius: nativeDefault.radii.sm };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj5 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj6 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_11 = createStyles(obj);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let game;
  let items1;
  let obj6;
  let onHeightMeasured;
  let scrollY;
  let obj = react2;
  const cResult = obj.c(64);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_11();
  const obj2 = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj2.useSharedValue(0);
  }
  const fn = function t() {
    const obj = { top: -Math.max(0, -scrollY.get()) };
    return obj;
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const tmpResult = ReanimatedRexport;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(SKUUtils.getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
  }
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== game) {
    const coverURL = game.getCoverURL(c9);
    cResult[2] = game;
    cResult[3] = coverURL;
  }
  if (cResult[4] !== game) {
    const iconURL = game.getIconURL(c9);
    cResult[4] = game;
    cResult[5] = iconURL;
  }
  if (cResult[6] !== onHeightMeasured) {
    class L {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    cResult[6] = onHeightMeasured;
    cResult[7] = L;
  } else {
    class L {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
  }
  if (cResult[8] === animatedStyle) {
    class L {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (cResult[11] === tmp9) {
      class L {
        constructor(nativeEvent) {
          if (onHeightMeasured != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      if (cResult[14] !== tmp4.container.backgroundColor) {
        class L {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        const items = [c10, tmp4.container.backgroundColor];
        cResult[14] = tmp4.container.backgroundColor;
        cResult[15] = items;
      } else {
        class L {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
      }
      if (cResult[16] === tmp4.artHeroGradient) {
        class L {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        if (cResult[19] === tmp17) {
          class L {
            constructor(nativeEvent) {
              if (onHeightMeasured != null) {
                tmp(nativeEvent.nativeEvent.layout.height);
              }
            }
          }
        }
        const obj3 = { style: tmp17, children: items1 };
        items1 = [tmp18, tmp22];
        cResult[19] = tmp17;
        cResult[20] = tmp18;
        cResult[21] = tmp22;
        cResult[22] = metroImportAll(ReanimatedRexportDefault.View, obj3);
        const tmp27 = metroImportAll(ReanimatedRexportDefault.View, obj3);
      }
      const obj4 = { colors: tmp21, style: tmp4.artHeroGradient };
      cResult[16] = tmp4.artHeroGradient;
      cResult[17] = tmp21;
      cResult[18] = metroImportDefault(LinearGradientDefault, obj4);
      const tmp24 = metroImportDefault(LinearGradientDefault, obj4);
    }
    let tmp19 = null != tmp9;
    if (tmp19) {
      class L {
        constructor(nativeEvent) {
          if (onHeightMeasured != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      const obj5 = { source: obj6, style: tmp4.artHeroImage };
      obj6 = { uri: tmp9 };
      tmp19 = metroImportDefault(hasOwnProperty, obj5);
    }
    cResult[11] = tmp9;
    cResult[12] = tmp4.artHeroImage;
    cResult[13] = tmp19;
  }
  const items2 = [tmp4.artHero, animatedStyle];
  cResult[8] = animatedStyle;
  cResult[9] = tmp4.artHero;
  cResult[10] = items2;
}) : ((game) => {
  let items10;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj5;
  let onHeightMeasured;
  let scrollY;
  let tmp15Result;
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_11();
  let obj = game(scrollY[8]);
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  const fn = function h() {
    const obj = { top: -Math.max(0, -scrollY.get()) };
    return obj;
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 17327557152577;
  fn.__initData = __initData2;
  const genres = game.genres;
  const tmp2Result = game(scrollY[8]);
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const name = game.name;
  const mapped = genres.map(tmp2(tmp3[9]).getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = onHeightMeasured(scrollY[10])(game, 1024);
  const items = [game];
  const memo = react.useMemo(() => game.getCoverURL(c9), items);
  const items1 = [game];
  const memo1 = react.useMemo(() => game.getIconURL(c9), items1);
  const items2 = [onHeightMeasured];
  const obj3 = { style: items3, children: items4 };
  items3 = [tmp.artHero, animatedStyle];
  let tmp12 = null != tmp7;
  const obj2 = {
    style: tmp.container,
    onLayout: react.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: items6
  };
  const View = onHeightMeasured(tmp3[8]).View;
  if (tmp12) {
    const obj4 = { source: obj5, style: tmp.artHeroImage };
    obj5 = { uri: tmp7 };
    tmp12 = closure_7(closure_5, obj4);
  }
  items4 = [tmp12, ];
  const obj6 = { colors: items5, style: tmp.artHeroGradient };
  items5 = [c10, tmp.container.backgroundColor];
  items4[1] = closure_7(onHeightMeasured(scrollY[11]), obj6);
  items6 = [closure_8(View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: items7 };
  const obj8 = { style: tmp.shadowContainer, children: closure_7(closure_4, obj12) };
  if (null != memo) {
    const obj9 = { style: tmp.coverContainer, children: closure_7(closure_5, obj10) };
    obj10 = { source: obj11, style: tmp.image };
    obj12 = obj9;
    obj11 = { uri: memo };
  } else {
    obj12 = { style: tmp.iconContainer, children: tmp15Result };
    tmp15Result = null != memo1;
    if (tmp15Result) {
      const obj13 = { source: obj14, style: tmp.image };
      obj14 = { uri: memo1 };
      tmp15Result = closure_7(closure_5, obj13);
    }
  }
  items7 = [closure_7(closure_4, obj8), ];
  let tmp15Result4 = null != l30Rank;
  const obj15 = { style: tmp.titleContainer, children: items8 };
  if (tmp15Result4) {
    const obj16 = { rank: l30Rank };
    tmp15Result4 = closure_7(onHeightMeasured(tmp3[12]), obj16);
  }
  items8 = [tmp15Result4, , ];
  const obj18 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: items9, children: name };
  items9 = [, ];
  const obj17 = { style: tmp.titleRow, children: items10 };
  ({ textShadow: arr11[0], title: arr11[1] } = tmp);
  items10 = [closure_7(tmp2(scrollY[13]).Text, obj18), ];
  let tmp15Result5 = game.id === closure_6;
  if (tmp15Result5) {
    const obj19 = { source: onHeightMeasured(scrollY[14]), style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    tmp15Result5 = closure_7(closure_5, obj19);
  }
  items10[1] = tmp15Result5;
  items8[1] = closure_8(closure_4, obj17);
  let tmp15Result6 = null;
  if (null != joined) {
    tmp15Result6 = null;
    if ("" !== joined) {
      const obj20 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp15Result6 = closure_7(tmp2(tmp3[13]).Text, obj20);
    }
  }
  items8[2] = tmp15Result6;
  items7[1] = closure_8(closure_4, obj15);
  items6[1] = closure_8(closure_4, obj7);
  return closure_8(closure_4, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default tmp7;