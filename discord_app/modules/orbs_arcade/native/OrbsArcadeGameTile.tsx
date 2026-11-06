// === Module 17290: OrbsArcadeGameTile ===

// Module 17290 (OrbsArcadeGameTile)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5167 */;
import native from "native" /* 5229 */;
import AssetUtils from "AssetUtils" /* 9801 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17292 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 17293 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17282 */;

require = fn;
function OrbsArcadeGameTileContent(game) {
  game = game.game;
  const surface = game.surface;
  heroVideoAsset = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  ({ asset, heroVideoAsset } = game);
  const instructions = game.instructions;
  let result = null;
  ({ gradientStart, gradientEnd } = closure_14());
  if (null != heroVideoAsset) {
    result = null;
    if (heroVideoAsset.width > 0) {
      result = null;
      if (heroVideoAsset.height > 0) {
        result = heroVideoAsset.width / heroVideoAsset.height;
      }
    }
  }
  const tmp3 = closure_15(result);
  const tmp = closure_14();
  [tmp5, c3] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [size, c4] = noop.useState(null);
  let num2 = 0.52;
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const size = { width: layout.width, height: layout.height };
    _undefined2(size);
  }, []);
  if (null != result) {
    num2 = 0.52;
    if (null != size) {
      num2 = 0.52;
      if (size.height > 0) {
        const _Math = Math;
        num2 = Math.min(0.52, size.width / result / size.height);
      }
    }
  }
  let tmp9 = null;
  if (null != instructions) {
    tmp9 = null;
    if ("" !== instructions) {
      tmp9 = instructions;
    }
  }
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(heroVideoAsset[11]).useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    return null != currentRun;
  }, items1);
  const obj2 = game(heroVideoAsset[11]);
  const items2 = [AccessibilityStore];
  const stateFromStores1 = game(heroVideoAsset[11]).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [heroVideoAsset];
  const memo = obj.useMemo(() => {
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
  const obj3 = game(heroVideoAsset[11]);
  ({ isInView, containerRef } = surface(heroVideoAsset[13])());
  const tmp16 = surface(heroVideoAsset[13])();
  if (isInView) {
    isInView = tmp10Result.useIsFocused();
  }
  surface(heroVideoAsset[15])(game, surface, isInView);
  const items4 = [game, surface];
  const callback1 = obj.useCallback(() => {
    const result = OrbsArcadeAnalytics.trackOrbsArcadeCtaClicked(game, OrbsArcadeAnalytics.OrbsArcadeCta.HOW_TO_PLAY, OrbsArcadeAnalytics.OrbsArcadeCtaLocation.GAME_TILE, surface);
    const result1 = openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id, surface);
  }, items4);
  const obj4 = { style: tmp3.card, radius: 12, border: "faint", children: null };
  const obj5 = { ref: containerRef, style: tmp3.hero, onLayout: callback, children: null };
  const obj6 = { style: tmp3.heroMediaFrame, children: null };
  if (null != heroVideoAsset) {
    if (!stateFromStores1) {
      if (tmp5 !== heroVideoAsset.url) {
        const obj7 = { style: tmp3.heroMedia, source: null, poster: null, posterResizeMode: "cover", resizeMode: "cover", paused: null, onError: null, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
        const obj8 = { uri: heroVideoAsset.url };
        obj7.source = obj8;
        obj7.poster = memo;
        obj7.paused = !isInView;
        obj7.onError = function onError() {
          return _undefined(heroVideoAsset.url);
        };
        let tmp22Result = closure_12(tmp10(tmp11[19]).VideoComponent, obj7);
      }
      obj6.children = tmp22Result;
      const items5 = [closure_12(closure_6, obj6), , ];
      const obj9 = { style: tmp3.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: null, colors: null };
      const items6 = [0, num2];
      obj9.locations = items6;
      const items7 = [gradientStart, gradientEnd];
      obj9.colors = items7;
      items5[1] = closure_12(tmp15(tmp11[21]), obj9);
      const obj10 = { style: tmp3.content, children: null };
      const obj11 = { style: tmp3.copy, children: null };
      const obj12 = { variant: "heading-lg/semibold", color: "text-default", children: game.name };
      const items8 = [closure_12(tmp10(tmp11[22]).Heading, obj12), ];
      let tmp22Result4 = null;
      if (null != tmp9) {
        const obj13 = { variant: "body-xs/medium", color: "text-default", style: tmp3.description, children: tmp9 };
        tmp22Result4 = closure_12(tmp10(tmp11[22]).Text, obj13);
      }
      items8[1] = tmp22Result4;
      obj11.children = items8;
      const items9 = [closure_13(closure_6, obj11), , ];
      const obj14 = { game, surface };
      items9[1] = closure_12(tmp15(tmp11[23]), obj14);
      let str2 = "vertical";
      if (stateFromStores) {
        str2 = "horizontal";
      }
      const obj15 = { direction: str2, size: "md", style: tmp3.buttonGroup, children: null };
      const obj16 = { game, size: "md", location: tmp10(tmp11[16]).OrbsArcadeCtaLocation.GAME_TILE, surface };
      const items10 = [closure_12(tmp15(tmp11[25]), obj16), ];
      if (null != tmp9) {
        if (stateFromStores) {
          const obj17 = { variant: "secondary", size: "md", icon: tmp15(tmp11[27]), accessibilityLabel: null, onPress: null };
          const intl2 = tmp10(tmp11[28]).intl;
          obj17.accessibilityLabel = intl2.string(tmp10(tmp11[28]).t["uz4M/z"]);
          obj17.onPress = callback1;
          let tmp22Result5 = closure_12(tmp10(tmp11[26]).IconButton, obj17);
        }
        items10[1] = tmp22Result5;
        obj15.children = items10;
        items9[2] = closure_13(tmp10(tmp11[24]).ButtonGroup, obj15);
        obj10.children = items9;
        items5[2] = closure_13(closure_6, obj10);
        obj5.children = items5;
        const items11 = [closure_13(closure_6, obj5), ];
        const obj18 = { style: tmp3.overflowButton, children: null };
        const obj19 = { game, surface };
        obj18.children = closure_12(tmp15(tmp11[30]), obj19);
        items11[1] = closure_12(closure_6, obj18);
        obj4.children = items11;
        return closure_13(tmp20, obj4);
      }
      tmp22Result5 = null;
      if (null != tmp9) {
        const obj20 = { grow: true, variant: "secondary", text: null, onPress: null };
        const intl = tmp10(tmp11[28]).intl;
        obj20.text = intl.string(tmp10(tmp11[28]).t["uz4M/z"]);
        obj20.onPress = callback1;
        tmp22Result5 = closure_12(tmp10(tmp11[29]).Button, obj20);
      }
      const tmp15Result = tmp15(tmp11[25]);
    }
  }
  let tmp22Result6 = null;
  if (null != asset) {
    const obj21 = { source: null, style: null, resizeMode: "cover", enableAnimation: null, paused: null, accessible: false };
    const obj22 = { uri: asset };
    obj21.source = obj22;
    obj21.style = tmp3.heroMedia;
    obj21.enableAnimation = !stateFromStores1;
    obj21.paused = !isInView;
    tmp22Result6 = closure_12(tmp15(tmp11[20]), obj21);
  }
  tmp22Result = tmp22Result6;
  tmp10Result = game(heroVideoAsset[14]);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const OrbsArcadeNativeConstants = fn(17285);
({ ORBS_ARCADE_GAME_TILE_MAX_WIDTH: closure_9, ORBS_ARCADE_GAME_TILE_MIN_HEIGHT: closure_10 } = OrbsArcadeNativeConstants);
const ThemeTypes = fn(1072).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(5170);
let result = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(5170);
let result1 = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = fn(5170);
let closure_14 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = fn(5170);
let closure_15 = createStyles.createStyles((aspectRatio) => {
  const obj = { minHeight, width: "100%", maxWidth: null, alignSelf: "center", padding: 0, overflow: "hidden", backgroundColor: null };
  let result = React6;
  if (null != aspectRatio) {
    result = minHeight * aspectRatio;
  }
  const obj3 = { card: null, heroMediaFrame: null, heroMedia: null, heroGradient: null, hero: null, overflowButton: null, content: null, copy: null, description: null, buttonGroup: null };
  obj.maxWidth = Math.min(React6, result);
  obj.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  obj3.card = obj;
  const rect = { position: "absolute", top: 0, left: 0, right: 0, aspectRatio, height: null, overflow: "hidden" };
  let str;
  if (null == aspectRatio) {
    str = "79.567%";
  }
  rect.height = str;
  obj3.heroMediaFrame = rect;
  ({ absoluteFillObject: obj2.heroMedia, absoluteFillObject: obj2.heroGradient } = hasOwnProperty);
  obj3.hero = { flexGrow: 1, justifyContent: "flex-end" };
  const rect1 = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj3.overflowButton = rect1;
  obj3.content = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
  const obj4 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
  obj3.copy = { gap: nativeDefault.space.PX_4 };
  obj3.description = { opacity: 0.8 };
  obj3.buttonGroup = { paddingVertical: 0 };
  return obj3;
});
let size = fn(2);
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default function OrbsArcadeGameTile(arg0) {
  ({ game, surface } = arg0);
  return application_id(native.ThemeContextProvider, { theme: ThemeTypes.ONYX, children: application_id(OrbsArcadeGameTileContent, { game, surface }) });
};