// === Module 19033: InterestGameCover ===

// Module 19033 (InterestGameCover)
import nativeDefault from "native" /* 575 */;
import useInterestCoverColor from "useInterestCoverColor" /* 19034 */;
import InterestPickerPerformance from "InterestPickerPerformance" /* 19036 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function NoCover(imageWidth) {
  ({ game, width, compact } = imageWidth);
  let iconURL;
  closure_1 = undefined;
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
  iconURL = game.getIconURL(Math.min(1024 / hasOwnProperty.get(), imageWidth.imageWidth));
  const iconURL1 = game.getIconURL(16);
  const tmp9 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp9[1];
  let tmp10 = null != iconURL;
  if (tmp10) {
    tmp10 = iconURL !== tmp9[0];
  }
  const tmp11 = tmp4(19034)(game.id, iconURL1);
  let tmp12 = !compact;
  if (!compact) {
    tmp12 = tmp10;
  }
  const tmp13 = closure_12(width, bound, Math.max(width / TILE_ASPECT_RATIO - width, sum), tmp11);
  items = [tmp6.fallback, , ];
  let titleOnly = tmp16;
  if (!tmp10) {
    titleOnly = tmp6.titleOnly;
  }
  items[1] = titleOnly;
  let background = tmp17;
  if (!tmp12) {
    background = tmp13.background;
  }
  const obj = { style: items, children: null };
  items[2] = background;
  let tmp18 = tmp10;
  if (tmp10) {
    tmp18 = null != tmp11;
  }
  if (tmp18) {
    tmp18 = tmp17;
  }
  if (tmp18) {
    const obj2 = { accessible: false, source: null, style: null, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    const obj3 = { uri: iconURL };
    obj2.source = obj3;
    obj2.style = tmp6.texture;
    tmp18 = React5(tmp4(6020), obj2);
  }
  const items1 = [tmp18, , , ];
  let tmp20 = tmp12;
  if (tmp12) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp6.art, tmp13.art];
    obj4.style = items2;
    const obj5 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp13.image;
    obj5.onError = function onError() {
      return closure_1(iconURL);
    };
    obj4.children = React5(tmp4(6020), obj5);
    tmp20 = React5(timestampProducer, obj4);
  }
  items1[1] = tmp20;
  if (tmp10) {
    tmp10 = tmp17;
  }
  if (tmp10) {
    const obj7 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj8 = { uri: iconURL };
    obj7.source = obj8;
    const items3 = [tmp6.icon, tmp13.icon];
    obj7.style = items3;
    obj7.onError = function onError() {
      return closure_1(iconURL);
    };
    tmp10 = React5(tmp4(6020), obj7);
  }
  items1[2] = tmp10;
  let tmp24Result = !compact;
  if (compact) {
    tmp24Result = tmp16;
  }
  if (tmp24Result) {
    let tmp25;
    if (tmp12) {
      const items4 = [tmp6.banner, , ];
      ({ banner: arr5[1], background: arr5[2] } = tmp13);
      tmp25 = items4;
    }
    const obj9 = { style: tmp25, children: null };
    const obj10 = { name: game.name, width: null, maxLines: null };
    const _Math = Math;
    obj10.width = Math.max(0, width - tmp4(575).space.PX_16);
    let num;
    if (tmp12) {
      num = 2;
    }
    obj10.maxLines = num;
    obj9.children = React5(tmp4(19035), obj10);
    tmp24Result = React5(timestampProducer, obj9);
    const tmp4Result = tmp4(19035);
  }
  items1[3] = tmp24Result;
  obj.children = items1;
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, StyleSheet, View: closure_6 } = get_ActivityIndicator);
const TILE_ASPECT_RATIO = fn(19025).TILE_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
const TextVariantsFlat = fn(5930).TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-xs/semibold" === name.name);
let num;
if (found != null) {
  num = found.lineHeight;
}
if (num == null) {
  num = 16;
}
const sum = 2 * num + PX_6 + PX_8;
let createStyles = fn(5306);
let obj2 = { cover: null, image: null, fallback: null, titleOnly: null, icon: null, texture: null, art: null, banner: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj2.cover = obj3;
obj2.image = StyleSheet.absoluteFillObject;
obj2.fallback = { flex: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj2.titleOnly = { paddingBottom: 0 };
let obj4 = { flex: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj2.icon = { borderRadius: nativeDefault.radii.xs };
let obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.opacity = fn(19034).COVER_TEXTURE_OPACITY;
obj2.texture = obj6;
const rect = { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.art = rect;
const rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingTop: PX_6, paddingBottom: PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj2.banner = rect1;
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(5306);
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
    obj4 = { backgroundColor: useInterestCoverColor.coverArtColor(backgroundColor) };
  }
  const merged = Object.assign(obj4);
  obj2.art = { height };
  obj2.image = { width: height, height };
  obj2.icon = { width, height: width };
  obj2.banner = { minHeight };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default function InterestGameCover(game) {
  game = game.game;
  ({ width, compact } = game);
  if (compact === undefined) {
    compact = false;
  }
  let imageWidth = game.imageWidth;
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  ({ performanceTracker: importDefault, gridPosition } = game);
  if (gridPosition === undefined) {
    gridPosition = 0;
  }
  noop = undefined;
  closure_5 = undefined;
  const tmp = closure_11();
  const coverURL = game.getCoverURL(Math.ceil(imageWidth * closure_5.get()));
  const tmp3 = coverURL(noop.useState(null), 2);
  noop = tmp3[1];
  let tmp4 = null == coverURL || coverURL === tmp3[0];
  closure_5 = tmp4;
  items = [coverURL];
  closure_6 = obj.useMemo(() => {
    const interestCoverLoad = new InterestPickerPerformance.InterestCoverLoad(coverURL);
    return interestCoverLoad;
  }, items);
  const effect = obj.useEffect(() => {
    if (closure_5) {
      let str = "error";
      if (null == coverURL) {
        str = "fallback";
      }
      const finishResult = closure_6.finish(str);
      if (null != finishResult) {
        if (importDefault != null) {
          const obj2 = { game_id: game.id, grid_position: gridPosition };
          const merged = Object.assign(finishResult);
          importDefault.settle(obj2);
        }
      }
    }
  });
  let obj2 = { accessible: false, pointerEvents: "none", style: tmp.cover, children: null };
  let tmp8 = !tmp4;
  if (!tmp4) {
    const obj3 = { source: null, style: null, resizeMode: "cover", fadeDuration: 0, onLoadStart: null, onLoad: null, onError: null };
    const obj4 = { uri: coverURL };
    obj3.source = obj4;
    obj3.style = tmp.image;
    obj3.onLoadStart = function onLoadStart() {
      return closure_6.start();
    };
    obj3.onLoad = function onLoad() {
      const finishResult = closure_6.finish("loaded");
      if (null != finishResult) {
        if (importDefault != null) {
          const obj2 = { game_id: game.id, grid_position: gridPosition };
          const merged = Object.assign(finishResult);
          importDefault.settle(obj2);
        }
      }
    };
    obj3.onError = function onError() {
      const finishResult = closure_6.finish("error");
      if (null != finishResult) {
        if (importDefault != null) {
          const obj2 = { game_id: game.id, grid_position: gridPosition };
          const merged = Object.assign(finishResult);
          importDefault.settle(obj2);
        }
      }
      closure_4(coverURL);
    };
    tmp8 = closure_8(require("FastImage"), obj3, coverURL);
  }
  const items1 = [tmp8, ];
  if (tmp4) {
    const obj5 = { game, width, compact, imageWidth };
    tmp4 = closure_8(NoCover, obj5);
  }
  items1[1] = tmp4;
  obj2.children = items1;
  return closure_9(closure_6, obj2);
};
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const BIG_ICON_TITLE_LINES = 2;
export const BIG_ICON_TITLE_AREA_HEIGHT = sum;
export const COVER_TEXTURE_BLUR_RADIUS = 32;