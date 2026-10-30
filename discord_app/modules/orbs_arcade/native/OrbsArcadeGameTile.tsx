// discord_app/modules/orbs_arcade/native/OrbsArcadeGameTile.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import AssetUtils from "../../quests/lib/AssetUtils.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import OrbsArcadeStore from "../OrbsArcadeStore.tsx";

require = fn;
function OrbsArcadeGameTileContent(game) {
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
  ({ isInView, containerRef } = heroVideoAsset(16930)());
  const tmp10 = heroVideoAsset(16930)();
  let tmp11 = !isInView;
  if (isInView) {
    tmp11 = !tmp4Result.useIsFocused();
  }
  const obj3 = { style: tmp.card, radius: 12, border: "subtle", children: null };
  const obj4 = { ref: containerRef, style: tmp.hero, children: null };
  if (null != heroVideoAsset) {
    if (!stateFromStores1) {
      const obj5 = {
        style: null,
        source: null,
        poster: null,
        posterResizeMode: "cover",
        resizeMode: "cover",
        paused: null,
        muted: true,
        disableFocus: true,
        preventsDisplaySleepDuringVideoPlayback: false,
        importantForAccessibility: "no-hide-descendants",
      };
      const items4 = [tmp.heroVideo];
      const obj6 = { aspectRatio: heroVideoAsset.width / heroVideoAsset.height };
      items4[1] = obj6;
      obj5.style = items4;
      const obj7 = { uri: heroVideoAsset.url };
      obj5.source = obj7;
      obj5.poster = memo;
      obj5.paused = tmp11;
      let tmp15Result = closure_8(tmp4(8864).VideoComponent, obj5);
    }
    const items5 = [tmp15Result, ,];
    const obj8 = {
      style: tmp.heroGradient,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      locations: [0, 0.55],
      colors: null,
    };
    const items6 = [gradientStart, gradientEnd];
    obj8.colors = items6;
    items5[1] = closure_8(tmp9(5582), obj8);
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { style: tmp.copy, children: null };
    const obj11 = { variant: "heading-lg/semibold", color: "text-strong", children: game.name };
    const items7 = [closure_8(tmp4(5619).Heading, obj11)];
    let tmp19Result = null;
    if (null != tmp3) {
      const obj12 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
      tmp19Result = closure_8(tmp4(5619).Text, obj12);
    }
    items7[1] = tmp19Result;
    obj10.children = items7;
    const items8 = [closure_9(closure_4, obj10), ,];
    const obj13 = { game };
    items8[1] = closure_8(tmp9(16963), obj13);
    let str2 = "vertical";
    if (stateFromStores) {
      str2 = "horizontal";
    }
    const obj14 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
    const obj15 = { game, size: "md" };
    const items9 = [closure_8(tmp9(16978), obj15)];
    if (null != tmp3) {
      if (stateFromStores) {
        const obj16 = { variant: "secondary", size: "md", icon: tmp9(16992), accessibilityLabel: null, onPress: null };
        const intl2 = tmp4(1114).intl;
        obj16.accessibilityLabel = intl2.string(tmp4(1114).t["uz4M/z"]);
        obj16.onPress = function onPress() {
          return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
        };
        let tmp19Result2 = closure_8(tmp4(8020).IconButton, obj16);
      }
      items9[1] = tmp19Result2;
      obj14.children = items9;
      items8[2] = closure_9(tmp4(6761).ButtonGroup, obj14);
      obj9.children = items8;
      items5[2] = closure_9(closure_4, obj9);
      obj4.children = items5;
      const items10 = [closure_9(closure_4, obj4)];
      const obj17 = { style: tmp.overflowButton, children: null };
      const obj18 = { game };
      obj17.children = closure_8(tmp9(16993), obj18);
      items10[1] = closure_8(closure_4, obj17);
      obj3.children = items10;
      return closure_9(tmp13, obj3);
    }
    tmp19Result2 = null;
    if (null != tmp3) {
      const obj19 = { grow: true, variant: "secondary", text: null, onPress: null };
      const intl = tmp4(1114).intl;
      obj19.text = intl.string(tmp4(1114).t["uz4M/z"]);
      obj19.onPress = function onPress() {
        return openOrbsArcadeSheets.openOrbsArcadeHowToPlaySheet(game.id);
      };
      tmp19Result2 = closure_8(tmp4(5629).Button, obj19);
    }
  }
  let tmp17 = null;
  if (null != asset) {
    const obj20 = {
      source: null,
      style: null,
      resizeMode: "cover",
      enableAnimation: null,
      paused: null,
      accessible: false,
    };
    const obj21 = { uri: asset };
    obj20.source = obj21;
    obj20.style = tmp.heroMedia;
    obj20.enableAnimation = !stateFromStores1;
    obj20.paused = tmp11;
    tmp17 = closure_8(tmp9(5712), obj20);
  }
  tmp15Result = tmp17;
  tmp4Result = game(1499);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ThemeTypes = fn(1072).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5009);
let result = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  return ColorUtils.hexOpacityToRgba(semanticColor, 0);
});
createStyles = fn(5009);
const result1 = createStyles.experimental_createToken((theme) => {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = fn(5009);
let closure_10 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = fn(5009);
let obj5 = {
  card: { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  heroMedia: { position: "absolute", top: 0, left: 0, right: 0, height: "79.567%" },
  heroVideo: { position: "absolute", top: 0, left: 0, right: 0 },
  heroGradient: StyleSheet.absoluteFillObject,
  hero: { minHeight: fn(16957).ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, justifyContent: "flex-end" },
  overflowButton: null,
  content: null,
  copy: null,
  buttonGroup: null,
};
const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
obj5.overflowButton = rect;
let obj6 = { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.content = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
let obj7 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj5.copy = { gap: nativeDefault.space.PX_4 };
obj5.buttonGroup = { paddingVertical: 0 };
let closure_11 = createStyles.createStyles(obj5);
let size = fn(2);
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default function OrbsArcadeGameTile(game) {
  return React6(native.ThemeContextProvider, {
    theme: ThemeTypes.ONYX,
    children: React6(OrbsArcadeGameTileContent, { game: game.game }),
  });
}
