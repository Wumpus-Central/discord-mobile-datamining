// discord_app/modules/waterwheels/native/GameCover.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useCoverColor from "useCoverColor.tsx";
import InterestPickerPerformance from "../interest/native/InterestPickerPerformance.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function NoCover(arg0) {
  ({ game, width, compact } = arg0);
  let iconURL;
  closure_1 = undefined;
  ({ gameId, name, imageWidth, aspectRatio } = arg0);
  const space = nativeDefault.space;
  if (compact) {
    let PX_32 = space.PX_24;
    let tmp4 = importDefault;
  } else {
    PX_32 = space.PX_32;
    tmp4 = importDefault;
  }
  const bound = Math.min(PX_32, Math.max(0, width - tmp4(575).space.PX_16));
  const tmp6 = closure_11();
  iconURL = undefined;
  if (game != null) {
    const _Math = Math;
    iconURL = game.getIconURL(Math.min(1024 / hasOwnProperty.get(), imageWidth));
  }
  if (iconURL == null) {
    iconURL = null;
  }
  let iconURL1;
  if (game != null) {
    iconURL1 = game.getIconURL(16);
  }
  if (iconURL1 == null) {
    iconURL1 = null;
  }
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp10[1];
  let tmp11 = null != iconURL && iconURL !== tmp10[0];
  const tmp12 = tmp4(17974)(gameId, iconURL1);
  let tmp13 = !compact;
  if (!compact) {
    tmp13 = tmp11;
  }
  const tmp14 = closure_12(width, bound, Math.max(width / aspectRatio - width, sum), tmp12);
  items = [tmp6.fallback, ,];
  let titleOnly = tmp17;
  if (!tmp11) {
    titleOnly = tmp6.titleOnly;
  }
  items[1] = titleOnly;
  let background = tmp18;
  if (!tmp13) {
    background = tmp14.background;
  }
  const obj = { style: items, children: null };
  items[2] = background;
  let tmp19 = tmp11;
  if (tmp11) {
    tmp19 = null != tmp12;
  }
  if (tmp19) {
    tmp19 = tmp18;
  }
  if (tmp19) {
    const obj2 = { accessible: false, source: null, style: null, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    const obj3 = { uri: iconURL };
    obj2.source = obj3;
    obj2.style = tmp6.texture;
    tmp19 = React5(tmp4(5699), obj2);
  }
  const items1 = [tmp19, , ,];
  let tmp21 = tmp13;
  if (tmp13) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp6.art, tmp14.art];
    obj4.style = items2;
    const obj5 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp14.image;
    obj5.onError = function onError() {
      return closure_1(iconURL);
    };
    obj4.children = React5(tmp4(5699), obj5);
    tmp21 = React5(timestampProducer, obj4);
  }
  items1[1] = tmp21;
  if (tmp11) {
    tmp11 = tmp18;
  }
  if (tmp11) {
    const obj7 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj8 = { uri: iconURL };
    obj7.source = obj8;
    const items3 = [tmp6.icon, tmp14.icon];
    obj7.style = items3;
    obj7.onError = function onError() {
      return closure_1(iconURL);
    };
    tmp11 = React5(tmp4(5699), obj7);
  }
  items1[2] = tmp11;
  let tmp25Result = !compact;
  if (compact) {
    tmp25Result = tmp17;
  }
  if (tmp25Result) {
    let tmp26;
    if (tmp13) {
      const items4 = [tmp6.banner, ,];
      ({ banner: arr5[1], background: arr5[2] } = tmp14);
      tmp26 = items4;
    }
    const obj9 = { style: tmp26, children: null };
    const obj10 = { name, width: null, maxLines: null };
    const _Math2 = Math;
    obj10.width = Math.max(0, width - tmp4(575).space.PX_16);
    let num3;
    if (tmp13) {
      num3 = 2;
    }
    obj10.maxLines = num3;
    obj9.children = React5(tmp4(17975), obj10);
    tmp25Result = React5(timestampProducer, obj9);
    const tmp4Result = tmp4(17975);
  }
  items1[3] = tmp25Result;
  obj.children = items1;
  return React6(timestampProducer, obj);
}
function GameCoverImage(gameId) {
  gameId = gameId.gameId;
  const coverUrl = gameId.coverUrl;
  ({ width, compact } = gameId);
  ({ name, iconGame } = gameId);
  if (compact === undefined) {
    compact = false;
  }
  let aspectRatio = gameId.aspectRatio;
  if (aspectRatio === undefined) {
    aspectRatio = TILE_ASPECT_RATIO;
  }
  let imageWidth = gameId.imageWidth;
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  const pickerInstrumentation = gameId.pickerInstrumentation;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_11();
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp2[1];
  let tmp3 = null == coverUrl || coverUrl === tmp2[0];
  noop = tmp3;
  closure_5 = tmp4;
  items = [coverUrl, null != pickerInstrumentation];
  closure_6 = obj.useMemo(() => {
    let interestCoverLoad = null;
    if (closure_5) {
      interestCoverLoad = new InterestPickerPerformance.InterestCoverLoad(coverUrl);
    }
    return interestCoverLoad;
  }, items);
  const effect = obj.useEffect(() => {
    if (closure_4) {
      let str = "error";
      if (null == coverUrl) {
        str = "fallback";
      }
      let finishResult;
      if (closure_6 != null) {
        finishResult = closure_6.finish(str);
      }
      if (null != finishResult) {
        if (pickerInstrumentation != null) {
          const performanceTracker = pickerInstrumentation.performanceTracker;
          if (performanceTracker != null) {
            const obj2 = { game_id: gameId, grid_position: null };
            let num = pickerInstrumentation.gridPosition;
            if (num == null) {
              num = 0;
            }
            obj2.grid_position = num;
            const merged = Object.assign(finishResult);
            performanceTracker.settle(obj2);
          }
        }
      }
    }
  });
  let obj2 = { accessible: false, pointerEvents: "none", style: tmp.cover, children: null };
  let tmp8 = !tmp3;
  if (!tmp3) {
    const obj3 = {
      source: null,
      style: null,
      resizeMode: "cover",
      fadeDuration: 0,
      onLoadStart: null,
      onLoad: null,
      onError: null,
    };
    const obj4 = { uri: coverUrl };
    obj3.source = obj4;
    obj3.style = tmp.image;
    obj3.onLoadStart = function onLoadStart() {
      let startResult;
      if (closure_6 != null) {
        startResult = closure_6.start();
      }
      return startResult;
    };
    obj3.onLoad = function onLoad() {
      let finishResult;
      if (closure_6 != null) {
        finishResult = closure_6.finish("loaded");
      }
      if (null != finishResult) {
        if (pickerInstrumentation != null) {
          const performanceTracker = pickerInstrumentation.performanceTracker;
          if (performanceTracker != null) {
            const obj2 = { game_id: gameId, grid_position: null };
            let num = pickerInstrumentation.gridPosition;
            if (num == null) {
              num = 0;
            }
            obj2.grid_position = num;
            const merged = Object.assign(finishResult);
            performanceTracker.settle(obj2);
          }
        }
      }
    };
    obj3.onError = function onError() {
      let finishResult;
      if (closure_6 != null) {
        finishResult = closure_6.finish("error");
      }
      if (null != finishResult) {
        if (pickerInstrumentation != null) {
          const performanceTracker = pickerInstrumentation.performanceTracker;
          if (performanceTracker != null) {
            const obj2 = { game_id: gameId, grid_position: null };
            let num = pickerInstrumentation.gridPosition;
            if (num == null) {
              num = 0;
            }
            obj2.grid_position = num;
            const merged = Object.assign(finishResult);
            performanceTracker.settle(obj2);
          }
        }
      }
      closure_3(coverUrl);
    };
    tmp8 = closure_8(coverUrl(pickerInstrumentation[9]), obj3, coverUrl);
  }
  const items1 = [tmp8];
  if (tmp3) {
    const obj5 = { game: iconGame, gameId, name, width, compact, imageWidth, aspectRatio };
    tmp3 = closure_8(NoCover, obj5);
  }
  items1[1] = tmp3;
  obj2.children = items1;
  return closure_9(closure_6, obj2);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, StyleSheet, View: closure_6 } = get_ActivityIndicator);
const TILE_ASPECT_RATIO = fn(17973).TILE_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
const TextVariantsFlat = fn(5604).TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-xs/semibold" === name.name);
let num;
if (found != null) {
  num = found.lineHeight;
}
if (num == null) {
  num = 16;
}
const sum = 2 * num + PX_6 + PX_8;
let createStyles = fn(5012);
let obj2 = {
  cover: null,
  image: null,
  fallback: null,
  titleOnly: null,
  icon: null,
  texture: null,
  art: null,
  banner: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj2.cover = obj3;
obj2.image = StyleSheet.absoluteFillObject;
obj2.fallback = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT,
};
obj2.titleOnly = { paddingBottom: 0 };
let obj4 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT,
};
obj2.icon = { borderRadius: nativeDefault.radii.xs };
let obj6 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.opacity = fn(17974).COVER_TEXTURE_OPACITY;
obj2.texture = obj6;
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.art = rect;
const rect1 = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingTop: PX_6,
  paddingBottom: PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT,
};
obj2.banner = rect1;
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(5012);
let closure_12 = createStyles.createStyles((height, width, minHeight, backgroundColor) => {
  if (null == backgroundColor) {
    let obj = {};
  } else {
    obj = { backgroundColor };
  }
  const obj2 = { background: obj, art: null, image: null, icon: null, banner: null };
  if (null == backgroundColor) {
    let obj4 = {};
  } else {
    obj4 = { backgroundColor: useCoverColor.coverArtColor(backgroundColor) };
  }
  const merged = Object.assign(obj4);
  obj2.art = { height };
  obj2.image = { width: height, height };
  obj2.icon = { width, height: width };
  obj2.banner = { minHeight };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/native/GameCover.tsx");

export default function GameCover(arg0) {
  ({ game, width, imageWidth } = arg0);
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  ({ performanceTracker, gridPosition } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ game: 0, width: 0, imageWidth: 0, performanceTracker: 0, gridPosition: 0 }),
  );
  const obj = {};
  const rounded = Math.ceil(imageWidth * hasOwnProperty.get());
  const merged1 = Object.assign(merged);
  obj.pickerInstrumentation = { performanceTracker, gridPosition };
  ({ id: obj.gameId, name: obj.name } = game);
  obj.coverUrl = game.getCoverURL(rounded);
  obj.iconGame = game;
  obj.width = width;
  obj.imageWidth = imageWidth;
  return React5(GameCoverImage, obj);
}
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const BIG_ICON_TITLE_LINES = 2;
export const BIG_ICON_TITLE_AREA_HEIGHT = sum;
export const COVER_TEXTURE_BLUR_RADIUS = 32;
export function GameCoverFromURLs(arg0) {
  const merged = Object.assign(arg0);
  return React5(GameCoverImage, {});
}
