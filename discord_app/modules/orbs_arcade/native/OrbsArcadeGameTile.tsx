// discord_app/modules/orbs_arcade/native/OrbsArcadeGameTile.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05295_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AssetUtils from "../../quests/lib/AssetUtils.tsx";
import useIsCarouselInViewDefault from "../../quests/native/useIsCarouselInView.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1084).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5005);
let result = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(5005);
const result1 = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = fn(5005);
let closure_10 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = fn(5005);
let obj5 = { card: { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, heroMedia: { position: "absolute", top: 0, left: 0, right: 0, height: "79.567%" }, heroVideo: { position: "absolute", top: 0, left: 0, right: 0 }, heroGradient: StyleSheet.absoluteFillObject, hero: { minHeight: fn(16903).ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, justifyContent: "flex-end" }, overflowButton: null, content: null, copy: null, buttonGroup: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
obj5.overflowButton = rect;
let obj6 = { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.content = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj5.copy = { gap: nativeDefault.space.PX_4 };
obj5.buttonGroup = { paddingVertical: 0 };
let closure_11 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTileContent(game) {
  const cResult = game(576).c(66);
  game = game.game;
  const tmp4 = closure_11();
  const obj = game(576);
  ({ gradientStart, gradientEnd } = closure_10());
  ({ name, asset, heroVideoAsset, instructions } = game);
  let tmp6 = null;
  if (null != instructions) {
    tmp6 = null;
    if ("" !== instructions) {
      tmp6 = instructions;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function n() {
      const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
      let currentRun;
      if (gameStateForGame != null) {
        currentRun = gameStateForGame.currentRun;
      }
      return null != currentRun;
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmp5 = closure_10();
  const stateFromStores = game(504).useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[4] = items2;
    cResult[5] = F;
    let tmp13 = F;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult = game(504);
  heroVideo = game(504).useStateFromStores(tmp12, tmp13);
  if (cResult[6] !== heroVideoAsset) {
    let result = null;
    if (null != heroVideoAsset) {
      const size = { width: heroVideoAsset.width, height: null };
      class F {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      result = tmp(9650).convertVideoToFirstFrameImageWithMediaProxy(heroVideoAsset.url, size);
      const tmpResult5 = tmp(9650);
    }
    class F {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[7] = result;
    let tmp15 = result;
  } else {
    tmp15 = cResult[7];
  }
  if (asset == null) {
    asset = tmp15;
  }
  const tmpResult4 = game(504);
  ({ containerRef, isInView } = useIsCarouselInViewDefault());
  const tmp18 = useIsCarouselInViewDefault();
  let tmp19 = !isInView;
  if (isInView) {
    tmp19 = !tmpResult6.useIsFocused();
  }
  if (cResult[8] === asset) {
    if (cResult[9] === heroVideoAsset) {
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp19) {
          if (cResult[12] === heroVideo) {
            if (cResult[13] === tmp4.heroMedia) {
              if (cResult[14] === tmp4.heroVideo) {
                const _Symbol = Symbol;
                class F {
                  constructor() {
                    return closure_1_5.useReducedMotion;
                  }
                }
                if (cResult[19] === gradientEnd) {
                  if (cResult[20] === gradientStart) {
                    let tmp31 = cResult[21];
                  }
                  if (cResult[22] === tmp4.heroGradient) {
                    if (cResult[25] !== name) {
                      { variant: "heading-lg/semibold", color: "text-strong", children: null }.children = name;
                      class F {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      cResult[25] = name;
                      cResult[26] = tmp38;
                      let tmp36 = tmp38;
                      const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: null };
                    } else {
                      tmp36 = cResult[26];
                    }
                    if (cResult[27] !== tmp6) {
                      if (null != tmp6) {
                        { variant: "text-xs/medium", color: "text-subtle", children: null }.children = tmp6;
                        class F {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      }
                      class F {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      cResult[28] = null;
                      let tmp39 = tmp40;
                    } else {
                      tmp39 = cResult[28];
                    }
                    class F {
                      constructor() {
                        return closure_1_5.useReducedMotion;
                      }
                    }
                    const obj4 = { style: tmp4.copy, children: null };
                    const items3 = [tmp36, tmp39];
                    obj4.children = items3;
                    const tmp45 = closure_9(closure_4, obj4);
                    cResult[29] = tmp4.copy;
                    cResult[30] = tmp36;
                    cResult[31] = tmp39;
                    cResult[32] = tmp45;
                  }
                  class F {
                    constructor() {
                      return closure_1_5.useReducedMotion;
                    }
                  }
                  tmp34[0] = tmp4.heroGradient;
                  tmp34[1] = tmp29;
                  tmp34[2] = tmp30;
                  tmp34[3] = tmp28;
                  tmp34[4] = tmp31;
                  const tmp35 = closure_8(LinearGradientDefault, tmp34);
                  cResult[22] = tmp4.heroGradient;
                  cResult[23] = tmp31;
                  cResult[24] = tmp35;
                }
                const items4 = [gradientStart, gradientEnd];
                cResult[19] = gradientEnd;
                cResult[20] = gradientStart;
                cResult[21] = items4;
                tmp31 = items4;
              }
            }
          }
        }
      }
    }
  }
  if (null != heroVideoAsset) {
    if (!heroVideo) {
      const obj5 = { style: null, source: null, poster: null, posterResizeMode: "cover", resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      const items5 = [, ];
      class F {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const obj6 = { aspectRatio: heroVideoAsset.width / heroVideoAsset.height };
      items5[1] = obj6;
      obj5.style = items5;
      const obj7 = { uri: heroVideoAsset.url };
      obj5.source = obj7;
      obj5.poster = tmp15;
      obj5.paused = tmp19;
      let tmp21Result = closure_8(tmp(8830).VideoComponent, obj5);
    }
    cResult[8] = asset;
    class F {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[9] = heroVideoAsset;
    cResult[10] = tmp15;
    cResult[11] = tmp19;
    cResult[12] = heroVideo;
    ({ heroMedia: tmp3[13], heroVideo } = tmp4);
    cResult[14] = heroVideo;
    cResult[15] = tmp21Result;
  }
  let tmp24 = null;
  if (null != asset) {
    const obj8 = { source: null, style: null, resizeMode: "cover", enableAnimation: null, paused: null, accessible: false };
    class F {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    obj8.source = { uri: null };
    obj8.style = tmp4.heroMedia;
    obj8.enableAnimation = !heroVideo;
    obj8.paused = tmp19;
    tmp24 = closure_8(FastImageDefault, obj8);
    const obj9 = { uri: null };
  }
  tmp21Result = tmp24;
  tmpResult6 = game(1504);
}) : (function OrbsArcadeGameTileContent(game) {
  game = game.game;
  heroVideoAsset = undefined;
  const tmp = closure_11();
  ({ asset, heroVideoAsset } = game);
  const instructions = game.instructions;
  let tmp3 = null;
  ({ gradientStart, gradientEnd } = closure_10());
  if (null != instructions) {
    tmp3 = null;
    if ("" !== instructions) {
      tmp3 = instructions;
    }
  }
  const tmp2 = closure_10();
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    return null != currentRun;
  }, items1);
  let obj = game(504);
  const items2 = [AccessibilityStore];
  const stateFromStores1 = game(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [heroVideoAsset];
  const memo = noop.useMemo(() => {
    let result = null;
    if (null != heroVideoAsset) {
      const size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = heroVideoAsset);
      result = AssetUtils.convertVideoToFirstFrameImageWithMediaProxy(heroVideoAsset.url, size);
    }
    return result;
  }, items3);
  if (asset == null) {
    asset = memo;
  }
  const obj2 = game(504);
  ({ isInView, containerRef } = heroVideoAsset(16876)());
  const tmp10 = heroVideoAsset(16876)();
  let tmp11 = !isInView;
  if (isInView) {
    tmp11 = !tmp4Result.useIsFocused();
  }
  const obj3 = { style: tmp.card, radius: 12, border: "subtle", children: null };
  const obj4 = { ref: containerRef, style: tmp.hero, children: null };
  if (null != heroVideoAsset) {
    if (!stateFromStores1) {
      const obj5 = { style: null, source: null, poster: null, posterResizeMode: "cover", resizeMode: "cover", paused: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      const items4 = [tmp.heroVideo, ];
      const obj6 = { aspectRatio: heroVideoAsset.width / heroVideoAsset.height };
      items4[1] = obj6;
      obj5.style = items4;
      const obj7 = { uri: heroVideoAsset.url };
      obj5.source = obj7;
      obj5.poster = memo;
      obj5.paused = tmp11;
      let tmp15Result = closure_8(tmp4(8830).VideoComponent, obj5);
    }
    const items5 = [tmp15Result, , ];
    const obj8 = { style: tmp.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 0.55], colors: null };
    const items6 = [gradientStart, gradientEnd];
    obj8.colors = items6;
    items5[1] = closure_8(tmp9(5295), obj8);
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { style: tmp.copy, children: null };
    const obj11 = { variant: "heading-lg/semibold", color: "text-strong", children: game.name };
    const items7 = [closure_8(tmp4(5271).Heading, obj11), ];
    let tmp19Result = null;
    if (null != tmp3) {
      const obj12 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
      tmp19Result = closure_8(tmp4(5271).Text, obj12);
    }
    items7[1] = tmp19Result;
    obj10.children = items7;
    const items8 = [closure_9(closure_4, obj10), , ];
    const obj13 = { game };
    items8[1] = closure_8(tmp9(16909), obj13);
    let str2 = "vertical";
    if (stateFromStores) {
      str2 = "horizontal";
    }
    const obj14 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
    const obj15 = { game, size: "md" };
    const items9 = [closure_8(tmp9(16924), obj15), ];
    if (null != tmp3) {
      if (stateFromStores) {
        const obj16 = { variant: "secondary", size: "md", icon: tmp9(16938), accessibilityLabel: null, onPress: null };
        const intl2 = tmp4(1125).intl;
        obj16.accessibilityLabel = intl2.string(tmp4(1125).t["uz4M/z"]);
        obj16.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        let tmp19Result2 = closure_8(tmp4(8014).IconButton, obj16);
      }
      items9[1] = tmp19Result2;
      obj14.children = items9;
      items8[2] = closure_9(tmp4(6754).ButtonGroup, obj14);
      obj9.children = items8;
      items5[2] = closure_9(closure_4, obj9);
      obj4.children = items5;
      const items10 = [closure_9(closure_4, obj4), ];
      const obj17 = { style: tmp.overflowButton, children: null };
      const obj18 = { game };
      obj17.children = closure_8(tmp9(16939), obj18);
      items10[1] = closure_8(closure_4, obj17);
      obj3.children = items10;
      return closure_9(tmp13, obj3);
    }
    tmp19Result2 = null;
    if (null != tmp3) {
      const obj19 = { grow: true, variant: "secondary", text: null, onPress: null };
      const intl = tmp4(1125).intl;
      obj19.text = intl.string(tmp4(1125).t["uz4M/z"]);
      obj19.onPress = function onPress() {
        return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
      };
      tmp19Result2 = closure_8(tmp4(5281).Button, obj19);
    }
  }
  let tmp17 = null;
  if (null != asset) {
    const obj20 = { source: null, style: null, resizeMode: "cover", enableAnimation: null, paused: null, accessible: false };
    const obj21 = { uri: asset };
    obj20.source = obj21;
    obj20.style = tmp.heroMedia;
    obj20.enableAnimation = !stateFromStores1;
    obj20.paused = tmp11;
    tmp17 = closure_8(tmp9(5707), obj20);
  }
  tmp15Result = tmp17;
  tmp4Result = game(1504);
});
ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_4 };
let size = fn(2);
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTile(game) {
  const cResult = c.c(2);
  game = game.game;
  if (cResult[0] !== game) {
    const obj2 = { theme: ThemeTypes.ONYX, children: null };
    const obj3 = { game };
    obj2.children = closure_1_8(closure_12, obj3);
    const tmp8 = closure_1_8(native.ThemeContextProvider, obj2);
    cResult[0] = game;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function OrbsArcadeGameTile(game) {
  return closure_1_8(native.ThemeContextProvider, { theme: ThemeTypes.ONYX, children: closure_1_8(closure_12, { game: game.game }) });
});