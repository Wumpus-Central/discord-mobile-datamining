// discord_app/modules/game_profile/native/components/GameProfileHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import SKUUtils from "../../../../utils/SKUUtils.tsx";
import useGameProfileHeroBackgroundURLDefault from "../../hooks/useGameProfileHeroBackgroundURL.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const GameProfileConstants = fn(8391);
({ DISCORD_APP_GAME_ID: metroRequire, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 114;
let c10 = "rgba(0,0,0,0.3)";
const createStyles = fn(4896);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  artHero: null,
  artHeroImage: null,
  artHeroGradient: null,
  headerContent: null,
  shadowContainer: null,
  coverContainer: null,
  iconContainer: null,
  image: null,
  titleContainer: null,
  titleRow: null,
  title: null,
  wavingWumpus: null,
  textShadow: null,
};
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = {
  paddingTop: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "flex-end",
  maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
let obj4 = {
  paddingTop: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "flex-end",
  maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let size = {
  width: 85,
  height: 114,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
};
obj2.coverContainer = size;
const size1 = {
  width: 85,
  height: 85,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
};
obj2.iconContainer = size1;
obj2.image = { width: "100%", height: "100%" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.titleRow = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.title = { flexShrink: 1 };
obj2.wavingWumpus = { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" };
let obj6 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.textShadow = {
  textShadowColor: nativeDefault.colors.BLACK,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 1,
};
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}",
};
const __initData2 = {
  code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}",
};
const ReactCompilerGating = fn(558);
let obj7 = {
  textShadowColor: nativeDefault.colors.BLACK,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 1,
};
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(64);
      ({ game, scrollY, onHeightMeasured } = arg0);
      const tmp4 = closure_11();
      if (scrollY == null) {
        scrollY = obj2.useSharedValue(0);
      }
      obj2 = ReanimatedRexport;
      const fn = function t() {
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
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        cResult[6] = onHeightMeasured;
        cResult[7] = L;
      } else {
        class L {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
      }
      if (cResult[8] === animatedStyle) {
        class L {
          constructor(arg0) {
            if (onHeightMeasured != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0.nativeEvent.layout.height);
            }
            return;
          }
        }
        if (cResult[11] === tmp9) {
          class L {
            constructor(arg0) {
              if (onHeightMeasured != null) {
                tmp2 = arg0;
                tmpResult = tmp(arg0.nativeEvent.layout.height);
              }
              return;
            }
          }
          if (cResult[14] !== tmp4.container.backgroundColor) {
            class L {
              constructor(arg0) {
                if (onHeightMeasured != null) {
                  tmp2 = arg0;
                  tmpResult = tmp(arg0.nativeEvent.layout.height);
                }
                return;
              }
            }
            const items = [c10, tmp4.container.backgroundColor];
            cResult[14] = tmp4.container.backgroundColor;
            cResult[15] = items;
          } else {
            class L {
              constructor(arg0) {
                if (onHeightMeasured != null) {
                  tmp2 = arg0;
                  tmpResult = tmp(arg0.nativeEvent.layout.height);
                }
                return;
              }
            }
          }
          if (cResult[16] === tmp4.artHeroGradient) {
            class L {
              constructor(arg0) {
                if (onHeightMeasured != null) {
                  tmp2 = arg0;
                  tmpResult = tmp(arg0.nativeEvent.layout.height);
                }
                return;
              }
            }
            if (cResult[19] === tmp17) {
              class L {
                constructor(arg0) {
                  if (onHeightMeasured != null) {
                    tmp2 = arg0;
                    tmpResult = tmp(arg0.nativeEvent.layout.height);
                  }
                  return;
                }
              }
            }
            const obj3 = { style: tmp17, children: null };
            const items1 = [tmp18, tmp22];
            obj3.children = items1;
            const tmp27 = closure_1_8(ReanimatedRexportDefault.View, obj3);
            cResult[19] = tmp17;
            cResult[20] = tmp18;
            cResult[21] = tmp22;
            cResult[22] = tmp27;
          }
          const obj4 = { colors: tmp21, style: tmp4.artHeroGradient };
          const tmp24 = React5(LinearGradientDefault, obj4);
          cResult[16] = tmp4.artHeroGradient;
          cResult[17] = tmp21;
          cResult[18] = tmp24;
        }
        let tmp19 = null != tmp9;
        if (tmp19) {
          class L {
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
          tmp19 = React5(hasOwnProperty, obj5);
        }
        cResult[11] = tmp9;
        cResult[12] = tmp4.artHeroImage;
        cResult[13] = tmp19;
      }
      const items2 = [tmp4.artHero, animatedStyle];
      cResult[8] = animatedStyle;
      cResult[9] = tmp4.artHero;
      cResult[10] = items2;
      const tmpResult = ReanimatedRexport;
    }
  : (game) => {
      game = game.game;
      ({ scrollY, onHeightMeasured } = game);
      scrollY = undefined;
      const tmp = closure_11();
      if (scrollY == null) {
        scrollY = obj.useSharedValue(0);
      }
      obj = game(scrollY[8]);
      const fn = function h() {
        return { top: -Math.max(0, -scrollY.get()) };
      };
      fn.__closure = { effectiveScrollY: scrollY };
      fn.__workletHash = 17327557152577;
      fn.__initData = __initData2;
      const genres = game.genres;
      const animatedStyle = game(scrollY[8]).useAnimatedStyle(fn);
      const mapped = genres.map(tmp2(tmp3[9]).getGenreText);
      const joined = mapped.join(", ");
      const l30Rank = game.l30Rank;
      const tmp7 = onHeightMeasured(scrollY[10])(game, 1024);
      const items = [game];
      const memo = noop.useMemo(() => game.getCoverURL(c9), items);
      const items1 = [game];
      const memo1 = noop.useMemo(() => game.getIconURL(c9), items1);
      const items2 = [onHeightMeasured];
      const obj2 = {
        style: tmp.container,
        onLayout: noop.useCallback((nativeEvent) => {
          if (onHeightMeasured != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        }, items2),
        children: null,
      };
      const obj3 = { style: null, children: null };
      const items3 = [tmp.artHero, animatedStyle];
      obj3.style = items3;
      let tmp12 = null != tmp7;
      if (tmp12) {
        const obj4 = { source: null, style: null };
        const obj5 = { uri: tmp7 };
        obj4.source = obj5;
        obj4.style = tmp.artHeroImage;
        tmp12 = closure_7(closure_5, obj4);
      }
      const items4 = [tmp12];
      const obj6 = { colors: null, style: tmp.artHeroGradient };
      const items5 = [c10, tmp.container.backgroundColor];
      obj6.colors = items5;
      items4[1] = closure_7(onHeightMeasured(scrollY[11]), obj6);
      obj3.children = items4;
      const items6 = [closure_8(onHeightMeasured(scrollY[8]).View, obj3)];
      const obj7 = { style: tmp.headerContent, children: null };
      const obj8 = { style: tmp.shadowContainer, children: null };
      if (null != memo) {
        const obj9 = { style: tmp.coverContainer, children: null };
        const obj10 = { source: null, style: null };
        const obj11 = { uri: memo };
        obj10.source = obj11;
        obj10.style = tmp.image;
        obj9.children = closure_7(closure_5, obj10);
        let obj12 = obj9;
      } else {
        obj12 = { style: tmp.iconContainer, children: null };
        let tmp15Result = null != memo1;
        if (tmp15Result) {
          const obj13 = { source: null, style: null };
          const obj14 = { uri: memo1 };
          obj13.source = obj14;
          obj13.style = tmp.image;
          tmp15Result = closure_7(closure_5, obj13);
        }
        obj12.children = tmp15Result;
      }
      obj8.children = closure_7(closure_4, obj12);
      const items7 = [closure_7(closure_4, obj8)];
      const obj15 = { style: tmp.titleContainer, children: null };
      let tmp15Result4 = null != l30Rank;
      if (tmp15Result4) {
        const obj16 = { rank: l30Rank };
        tmp15Result4 = closure_7(onHeightMeasured(tmp3[12]), obj16);
      }
      const items8 = [tmp15Result4, ,];
      const obj17 = { style: tmp.titleRow, children: null };
      const obj18 = {
        variant: "heading-xxl/semibold",
        color: "text-overlay-light",
        lineClamp: 2,
        style: null,
        children: game.name,
      };
      const items9 = [,];
      ({ textShadow: arr11[0], title: arr11[1] } = tmp);
      obj18.style = items9;
      const items10 = [closure_7(game(scrollY[13]).Text, obj18)];
      let tmp15Result5 = game.id === closure_6;
      if (tmp15Result5) {
        const obj19 = {
          source: onHeightMeasured(tmp3[14]),
          style: tmp.wavingWumpus,
          accessible: false,
          importantForAccessibility: "no",
        };
        tmp15Result5 = closure_7(closure_5, obj19);
      }
      items10[1] = tmp15Result5;
      obj17.children = items10;
      items8[1] = closure_8(closure_4, obj17);
      let tmp15Result6 = null;
      if (null != joined) {
        tmp15Result6 = null;
        if ("" !== joined) {
          const obj20 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            lineClamp: 2,
            style: tmp.textShadow,
            children: joined,
          };
          tmp15Result6 = closure_7(tmp2(tmp3[13]).Text, obj20);
        }
      }
      items8[2] = tmp15Result6;
      obj15.children = items8;
      items7[1] = closure_8(closure_4, obj15);
      obj7.children = items7;
      items6[1] = closure_8(closure_4, obj7);
      obj2.children = items6;
      return closure_8(closure_4, obj2);
    };
