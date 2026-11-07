// discord_app/modules/waterwheels/interest/native/InterestGameCover.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useInterestCoverColor from "useInterestCoverColor.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const tmp11 = tmp4(18754)(game.id, iconURL1);
  let tmp12 = !compact;
  if (!compact) {
    tmp12 = tmp10;
  }
  const tmp13 = closure_12(width, bound, Math.max(width / TILE_ASPECT_RATIO - width, sum), tmp11);
  items = [tmp6.fallback, ,];
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
    tmp18 = React5(tmp4(5842), obj2);
  }
  const items1 = [tmp18, , ,];
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
    obj4.children = React5(tmp4(5842), obj5);
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
    tmp10 = React5(tmp4(5842), obj7);
  }
  items1[2] = tmp10;
  let tmp24Result = !compact;
  if (compact) {
    tmp24Result = tmp16;
  }
  if (tmp24Result) {
    let tmp25;
    if (tmp12) {
      const items4 = [tmp6.banner, ,];
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
    obj9.children = React5(tmp4(18755), obj10);
    tmp24Result = React5(timestampProducer, obj9);
    const tmp4Result = tmp4(18755);
  }
  items1[3] = tmp24Result;
  obj.children = items1;
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, StyleSheet, View: closure_6 } = get_ActivityIndicator);
const TILE_ASPECT_RATIO = fn(18752).TILE_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
const TextVariantsFlat = fn(5752).TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-xs/semibold" === name.name);
let num;
if (found != null) {
  num = found.lineHeight;
}
if (num == null) {
  num = 16;
}
const sum = 2 * num + PX_6 + PX_8;
let createStyles = fn(5140);
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
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6.opacity = fn(18754).COVER_TEXTURE_OPACITY;
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
createStyles = fn(5140);
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

export default function InterestGameCover(imageWidth) {
  ({ game, width, compact } = imageWidth);
  if (compact === undefined) {
    compact = false;
  }
  imageWidth = imageWidth.imageWidth;
  if (imageWidth === undefined) {
    imageWidth = width;
  }
  const tmp = closure_11();
  const coverURL = game.getCoverURL(Math.ceil(imageWidth * hasOwnProperty.get()));
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp3[1];
  let tmp4 = null == coverURL || coverURL === tmp3[0];
  const obj = { accessible: false, pointerEvents: "none", style: tmp.cover, children: null };
  let tmp7 = !tmp4;
  if (!tmp4) {
    const obj2 = { source: null, style: null, resizeMode: "cover", fadeDuration: 0, onError: null };
    const obj3 = { uri: coverURL };
    obj2.source = obj3;
    obj2.style = tmp.image;
    obj2.onError = function onError() {
      return closure_1(coverURL);
    };
    tmp7 = React5(FastImageDefault, obj2);
  }
  items = [tmp7];
  if (tmp4) {
    const obj4 = { game, width, compact, imageWidth };
    tmp4 = React5(NoCover, obj4);
  }
  items[1] = tmp4;
  obj.children = items;
  return React6(timestampProducer, obj);
}
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const BIG_ICON_TITLE_LINES = 2;
export const BIG_ICON_TITLE_AREA_HEIGHT = sum;
export const COVER_TEXTURE_BLUR_RADIUS = 32;
