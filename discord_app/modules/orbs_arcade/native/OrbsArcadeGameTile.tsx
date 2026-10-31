// discord_app/modules/orbs_arcade/native/OrbsArcadeGameTile.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import AssetUtils from "../../quests/lib/AssetUtils.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
function OrbsArcadeGameTileContent(game) {
  game = game.game;
  heroVideoAsset = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
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
  [tmp5, c2] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [size, c3] = noop.useState(null);
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
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = game(504).useStateFromStores(
    items,
    () => {
      const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
      let currentRun;
      if (gameStateForGame != null) {
        currentRun = gameStateForGame.currentRun;
      }
      return null != currentRun;
    },
    items1,
  );
  const obj2 = game(504);
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
  const obj3 = game(504);
  ({ isInView, containerRef } = heroVideoAsset(16986)());
  const tmp16 = heroVideoAsset(16986)();
  let tmp17 = !isInView;
  if (isInView) {
    tmp17 = !tmp10Result.useIsFocused();
  }
  const obj4 = { style: tmp3.card, radius: 12, border: "faint", children: null };
  const obj5 = { ref: containerRef, style: tmp3.hero, onLayout: callback, children: null };
  const obj6 = { style: tmp3.heroMediaFrame, children: null };
  if (null != heroVideoAsset) {
    if (!stateFromStores1) {
      if (tmp5 !== heroVideoAsset.url) {
        const obj7 = {
          style: tmp3.heroMedia,
          source: null,
          poster: null,
          posterResizeMode: "cover",
          resizeMode: "cover",
          paused: null,
          onError: null,
          muted: true,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants",
        };
        const obj8 = { uri: heroVideoAsset.url };
        obj7.source = obj8;
        obj7.poster = memo;
        obj7.paused = tmp17;
        obj7.onError = function onError() {
          return _undefined(heroVideoAsset.url);
        };
        let tmp21Result = closure_12(tmp10(8873).VideoComponent, obj7);
      }
      obj6.children = tmp21Result;
      const items4 = [closure_12(closure_6, obj6), ,];
      const obj9 = {
        style: tmp3.heroGradient,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
        locations: null,
        colors: null,
      };
      const items5 = [0, num2];
      obj9.locations = items5;
      const items6 = [gradientStart, gradientEnd];
      obj9.colors = items6;
      items4[1] = closure_12(tmp15(5587), obj9);
      const obj10 = { style: tmp3.content, children: null };
      const obj11 = { style: tmp3.copy, children: null };
      const obj12 = { variant: "heading-lg/semibold", color: "text-default", children: game.name };
      const items7 = [closure_12(tmp10(5624).Heading, obj12)];
      let tmp21Result4 = null;
      if (null != tmp9) {
        const obj13 = { variant: "text-xs/medium", color: "text-default", style: tmp3.description, children: tmp9 };
        tmp21Result4 = closure_12(tmp10(5624).Text, obj13);
      }
      items7[1] = tmp21Result4;
      obj11.children = items7;
      const items8 = [closure_13(closure_6, obj11), ,];
      const obj14 = { game };
      items8[1] = closure_12(tmp15(17019), obj14);
      let str2 = "vertical";
      if (stateFromStores) {
        str2 = "horizontal";
      }
      const obj15 = { direction: str2, size: "md", style: tmp3.buttonGroup, children: null };
      const obj16 = { game, size: "md" };
      const items9 = [closure_12(tmp15(17035), obj16)];
      if (null != tmp9) {
        if (stateFromStores) {
          const obj17 = {
            variant: "secondary",
            size: "md",
            icon: tmp15(17050),
            accessibilityLabel: null,
            onPress: null,
          };
          const intl2 = tmp10(1113).intl;
          obj17.accessibilityLabel = intl2.string(tmp10(1113).t["uz4M/z"]);
          obj17.onPress = function onPress() {
            return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
          };
          let tmp21Result5 = closure_12(tmp10(8028).IconButton, obj17);
        }
        items9[1] = tmp21Result5;
        obj15.children = items9;
        items8[2] = closure_13(tmp10(6767).ButtonGroup, obj15);
        obj10.children = items8;
        items4[2] = closure_13(closure_6, obj10);
        obj5.children = items4;
        const items10 = [closure_13(closure_6, obj5)];
        const obj18 = { style: tmp3.overflowButton, children: null };
        const obj19 = { game };
        obj18.children = closure_12(tmp15(17051), obj19);
        items10[1] = closure_12(closure_6, obj18);
        obj4.children = items10;
        return closure_13(tmp19, obj4);
      }
      tmp21Result5 = null;
      if (null != tmp9) {
        const obj20 = { grow: true, variant: "secondary", text: null, onPress: null };
        const intl = tmp10(1113).intl;
        obj20.text = intl.string(tmp10(1113).t["uz4M/z"]);
        obj20.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        tmp21Result5 = closure_12(tmp10(5634).Button, obj20);
      }
    }
  }
  let tmp21Result6 = null;
  if (null != asset) {
    const obj21 = {
      source: null,
      style: null,
      resizeMode: "cover",
      enableAnimation: null,
      paused: null,
      accessible: false,
    };
    const obj22 = { uri: asset };
    obj21.source = obj22;
    obj21.style = tmp3.heroMedia;
    obj21.enableAnimation = !stateFromStores1;
    obj21.paused = tmp17;
    tmp21Result6 = closure_12(tmp15(5717), obj21);
  }
  tmp21Result = tmp21Result6;
  tmp10Result = game(1498);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const OrbsArcadeNativeConstants = fn(17013);
({ ORBS_ARCADE_GAME_TILE_MAX_WIDTH: closure_9, ORBS_ARCADE_GAME_TILE_MIN_HEIGHT: c10 } = OrbsArcadeNativeConstants);
const ThemeTypes = fn(1072).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(5014);
let result = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(5014);
const result1 = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = fn(5014);
let closure_14 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = fn(5014);
let closure_15 = createStyles.createStyles((aspectRatio) => {
  const obj = {
    minHeight,
    width: "100%",
    maxWidth: null,
    alignSelf: "center",
    padding: 0,
    overflow: "hidden",
    backgroundColor: null,
  };
  let result = React7;
  if (null != aspectRatio) {
    result = minHeight * aspectRatio;
  }
  const obj3 = {
    card: null,
    heroMediaFrame: null,
    heroMedia: null,
    heroGradient: null,
    hero: null,
    overflowButton: null,
    content: null,
    copy: null,
    description: null,
    buttonGroup: null,
  };
  obj.maxWidth = Math.min(React7, result);
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

export default function OrbsArcadeGameTile(game) {
  return closure_1_12(native.ThemeContextProvider, {
    theme: ThemeTypes.ONYX,
    children: closure_1_12(OrbsArcadeGameTileContent, { game: game.game }),
  });
}
