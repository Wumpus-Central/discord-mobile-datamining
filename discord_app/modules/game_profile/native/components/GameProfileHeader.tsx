// === Module 9338: GameProfileHeader ===

// Module 9338 (GameProfileHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import Text_Text from "Text/Text" /* 5271 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import FastImageDefault from "FastImage" /* 5707 */;
import SKUUtils from "SKUUtils" /* 9339 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9340 */;
import GameCoverArt from "GameCoverArt" /* 9341 */;
import GameProfileRankPillDefault from "GameProfileRankPill" /* 9343 */;
import _modDef9345 from "module_9345" /* 9345 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const GameCoverArtDefault = GameCoverArt;

require = fn;
const View = fn(17).View;
const GameProfileConstants = fn(9336);
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "rgba(0,0,0,0.3)";
const createStyles = fn(5005);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, artHero: null, artHeroImage: null, artHeroGradient: null, headerContent: null, shadowContainer: null, coverContainer: null, titleContainer: null, titleRow: null, title: null, wavingWumpus: null, textShadow: null };
const rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj2.artHero = rect;
obj2.artHeroImage = { height: "100%", width: "100%", resizeMode: "cover" };
obj2.artHeroGradient = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.headerContent = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
let obj4 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.shadowContainer = { borderRadius: nativeDefault.radii.sm };
let obj5 = { borderRadius: nativeDefault.radii.sm };
obj2.coverContainer = { aspectRatio: 0.75, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.titleContainer = { flex: 1, flexDirection: "column", alignItems: "flex-start" };
let obj6 = { aspectRatio: 0.75, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj2.titleRow = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.title = { flexShrink: 1 };
obj2.wavingWumpus = { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" };
let obj7 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.textShadow = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const ReactCompilerGating = fn(558);
let obj8 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileHeader(arg0) {
  const cResult = c.c(57);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_9();
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
  const name = game.name;
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(SKUUtils.getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
    let tmp6 = joined;
  } else {
    tmp6 = cResult[1];
  }
  const l30Rank = game.l30Rank;
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== onHeightMeasured) {
    const fn2 = function b(nativeEvent) {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    };
    cResult[2] = onHeightMeasured;
    cResult[3] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === animatedStyle) {
    if (cResult[5] === tmp4.artHero) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      if (cResult[8] === tmp4.artHeroImage) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] !== tmp4.container.backgroundColor) {
        const items = [c8, tmp4.container.backgroundColor];
        cResult[10] = tmp4.container.backgroundColor;
        cResult[11] = items;
        let tmp15 = items;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.artHeroGradient) {
        if (cResult[13] === tmp15) {
          let tmp17 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp17) {
              let tmp20 = cResult[18];
            }
            if (cResult[19] === game) {
              if (cResult[20] === tmp4.coverContainer) {
                let tmp23 = cResult[21];
              }
              if (cResult[22] === tmp4.shadowContainer) {
                if (cResult[23] === tmp23) {
                  let tmp27 = cResult[24];
                }
                if (cResult[25] !== l30Rank) {
                  let tmp32 = null != l30Rank;
                  if (tmp32) {
                    const obj3 = { rank: l30Rank };
                    tmp32 = timestampProducer(GameProfileRankPillDefault, obj3);
                  }
                  cResult[25] = l30Rank;
                  cResult[26] = tmp32;
                  let tmp31 = tmp32;
                } else {
                  tmp31 = cResult[26];
                }
                if (cResult[27] === tmp4.textShadow) {
                  if (cResult[28] === tmp4.title) {
                    let tmp34 = cResult[29];
                  }
                  if (cResult[30] === name) {
                    if (cResult[31] === tmp34) {
                      let tmp35 = cResult[32];
                    }
                    if (cResult[33] === game.id) {
                      if (cResult[34] === tmp4.wavingWumpus) {
                        let tmp38 = cResult[35];
                      }
                      if (cResult[36] === tmp4.titleRow) {
                        if (cResult[37] === tmp35) {
                          if (cResult[38] === tmp38) {
                            let tmp43 = cResult[39];
                          }
                          if (cResult[40] === tmp6) {
                            if (cResult[41] === tmp4.textShadow) {
                              let tmp47 = cResult[42];
                            }
                            if (cResult[43] === tmp4.titleContainer) {
                              if (cResult[44] === tmp31) {
                                if (cResult[45] === tmp43) {
                                  if (cResult[46] === tmp47) {
                                    let tmp50 = cResult[47];
                                  }
                                  if (cResult[48] === tmp4.headerContent) {
                                    if (cResult[49] === tmp50) {
                                      if (cResult[50] === tmp27) {
                                        let tmp54 = cResult[51];
                                      }
                                      if (cResult[52] === tmp10) {
                                        if (cResult[53] === tmp4.container) {
                                          if (cResult[54] === tmp54) {
                                            if (cResult[55] === tmp20) {
                                              let tmp58 = cResult[56];
                                            }
                                            return tmp58;
                                          }
                                        }
                                      }
                                      const obj4 = { style: tmp4.container, onLayout: tmp10, children: null };
                                      const items1 = [tmp20, tmp54];
                                      obj4.children = items1;
                                      const tmp61 = React5(View, obj4);
                                      cResult[52] = tmp10;
                                      cResult[53] = tmp4.container;
                                      cResult[54] = tmp54;
                                      cResult[55] = tmp20;
                                      cResult[56] = tmp61;
                                      tmp58 = tmp61;
                                    }
                                  }
                                  const obj5 = { style: tmp4.headerContent, children: null };
                                  const items2 = [tmp27, tmp50];
                                  obj5.children = items2;
                                  const tmp57 = React5(View, obj5);
                                  cResult[48] = tmp4.headerContent;
                                  cResult[49] = tmp50;
                                  cResult[50] = tmp27;
                                  cResult[51] = tmp57;
                                  tmp54 = tmp57;
                                }
                              }
                            }
                            const obj6 = { style: tmp4.titleContainer, children: null };
                            const items3 = [tmp31, tmp43, tmp47];
                            obj6.children = items3;
                            const tmp53 = React5(View, obj6);
                            cResult[43] = tmp4.titleContainer;
                            cResult[44] = tmp31;
                            cResult[45] = tmp43;
                            cResult[46] = tmp47;
                            cResult[47] = tmp53;
                            tmp50 = tmp53;
                          }
                          let tmp48 = null;
                          if (null != tmp6) {
                            tmp48 = null;
                            if ("" !== tmp6) {
                              const obj7 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp4.textShadow, children: tmp6 };
                              tmp48 = timestampProducer(Text_Text.Text, obj7);
                            }
                          }
                          cResult[40] = tmp6;
                          cResult[41] = tmp4.textShadow;
                          cResult[42] = tmp48;
                          tmp47 = tmp48;
                        }
                      }
                      const obj8 = { style: tmp4.titleRow, children: null };
                      const items4 = [tmp35, tmp38];
                      obj8.children = items4;
                      const tmp46 = React5(View, obj8);
                      cResult[36] = tmp4.titleRow;
                      cResult[37] = tmp35;
                      cResult[38] = tmp38;
                      cResult[39] = tmp46;
                      tmp43 = tmp46;
                    }
                    let tmp40 = game.id === hasOwnProperty;
                    if (tmp40) {
                      const obj9 = { source: _modDef9345, style: tmp4.wavingWumpus, accessible: false, importantForAccessibility: "no" };
                      tmp40 = timestampProducer(FastImageDefault, obj9);
                      const tmp8Result = FastImageDefault;
                    }
                    cResult[33] = game.id;
                    cResult[34] = tmp4.wavingWumpus;
                    cResult[35] = tmp40;
                    tmp38 = tmp40;
                  }
                  const obj10 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp34, children: name };
                  const tmp37 = timestampProducer(Text_Text.Text, obj10);
                  cResult[30] = name;
                  cResult[31] = tmp34;
                  cResult[32] = tmp37;
                  tmp35 = tmp37;
                }
                const items5 = [, ];
                ({ textShadow: arr5[0], title: arr5[1] } = tmp4);
                cResult[27] = tmp4.textShadow;
                cResult[28] = tmp4.title;
                cResult[29] = items5;
                tmp34 = items5;
              }
              const obj11 = { style: tmp4.shadowContainer, children: tmp23 };
              const tmp30 = timestampProducer(View, obj11);
              cResult[22] = tmp4.shadowContainer;
              cResult[23] = tmp23;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            const obj12 = { game, imageSize: 114, size: GameCoverArt.GameCoverArtSize.LARGE, style: tmp4.coverContainer };
            const tmp26 = timestampProducer(GameCoverArtDefault, obj12);
            cResult[19] = game;
            cResult[20] = tmp4.coverContainer;
            cResult[21] = tmp26;
            tmp23 = tmp26;
            const tmp8Result2 = GameCoverArtDefault;
          }
        }
        const obj13 = { style: tmp11, children: null };
        const items6 = [tmp12, tmp17];
        obj13.children = items6;
        const tmp22 = React5(ReanimatedRexportDefault.View, obj13);
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        tmp20 = tmp22;
      }
      const obj14 = { colors: tmp15, style: tmp4.artHeroGradient };
      const tmp19 = timestampProducer(LinearGradientDefault, obj14);
      cResult[12] = tmp4.artHeroGradient;
      cResult[13] = tmp15;
      cResult[14] = tmp19;
      tmp17 = tmp19;
    }
    let tmp13 = null != tmp9;
    if (tmp13) {
      const obj15 = { source: null, style: null };
      const obj16 = { uri: tmp9 };
      obj15.source = obj16;
      obj15.style = tmp4.artHeroImage;
      tmp13 = timestampProducer(FastImageDefault, obj15);
    }
    cResult[7] = tmp9;
    cResult[8] = tmp4.artHeroImage;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  const items7 = [tmp4.artHero, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.artHero;
  cResult[6] = items7;
  tmp11 = items7;
  const tmpResult = ReanimatedRexport;
}) : (function GameProfileHeader(arg0) {
  ({ game, scrollY, onHeightMeasured } = arg0);
  scrollY = undefined;
  const tmp = closure_9();
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
  const items3 = [c8, tmp.container.backgroundColor];
  obj6.colors = items3;
  items2[1] = timestampProducer(LinearGradientDefault, obj6);
  obj3.children = items2;
  const items4 = [React5(ReanimatedRexportDefault.View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: null };
  const obj8 = { style: tmp.shadowContainer, children: null };
  const obj9 = { game, imageSize: 114, size: null, style: null };
  const tmp2Result = ReanimatedRexport;
  obj9.size = GameCoverArt.GameCoverArtSize.LARGE;
  obj9.style = tmp.coverContainer;
  obj8.children = timestampProducer(GameCoverArtDefault, obj9);
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
    const obj14 = { source: _modDef9345, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    tmp12Result3 = timestampProducer(FastImageDefault, obj14);
    const tmp6Result2 = FastImageDefault;
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