// === Module 18706: InterestGameCover ===

// Module 18706 (InterestGameCover)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5872 */;
import useInterestCoverColor from "useInterestCoverColor" /* 18707 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NoCover(arg0) {
  ({ game, width, compact } = arg0);
  let iconURL;
  c1 = undefined;
  const space = nativeDefault.space;
  if (compact) {
    let PX_32 = space.PX_24;
    let tmp4 = importDefault;
  } else {
    PX_32 = space.PX_32;
    tmp4 = importDefault;
  }
  const bound = Math.min(PX_32, Math.max(0, width - tmp4(575).space.PX_16));
  const tmp6 = closure_13();
  let tmp7 = width;
  if (compact) {
    tmp7 = bound;
  }
  iconURL = game.getIconURL(tmp7);
  const iconURL1 = game.getIconURL(16);
  [tmp11, c1] = noop.useState(null);
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  let tmp15 = null != iconURL;
  [tmp13, tmp14] = noop.useState(0);
  if (tmp15) {
    tmp15 = iconURL !== tmp11;
  }
  const tmp16 = tmp4(18707)(game.id, iconURL1);
  let tmp17 = !compact;
  if (!compact) {
    tmp17 = tmp15;
  }
  const tmp18 = closure_14(width, bound, Math.max(width / TILE_ASPECT_RATIO - width + closure_12, tmp13 + PX_6 + PX_8), tmp16);
  items = [tmp6.fallback, , ];
  let titleOnly = tmp21;
  if (!tmp15) {
    titleOnly = tmp6.titleOnly;
  }
  items[1] = titleOnly;
  let background = tmp22;
  if (!tmp17) {
    background = tmp18.background;
  }
  const obj = { style: items, children: null };
  items[2] = background;
  let tmp23 = tmp15;
  if (tmp15) {
    tmp23 = null != tmp16;
  }
  if (tmp23) {
    tmp23 = tmp22;
  }
  if (tmp23) {
    const obj2 = { accessible: false, source: null, style: null, blurRadius: 32, resizeMode: "cover", fadeDuration: 0 };
    const obj3 = { uri: iconURL };
    obj2.source = obj3;
    obj2.style = tmp6.texture;
    tmp23 = React5(tmp4(5872), obj2);
  }
  const items1 = [tmp23, , , ];
  let tmp25 = tmp17;
  if (tmp17) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp6.art, tmp18.art];
    obj4.style = items2;
    const obj5 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp18.image;
    obj5.onError = function onError() {
      return _undefined(iconURL);
    };
    obj4.children = React5(tmp4(5872), obj5);
    tmp25 = React5(timestampProducer, obj4);
  }
  items1[1] = tmp25;
  if (tmp15) {
    tmp15 = tmp22;
  }
  if (tmp15) {
    const obj7 = { source: null, style: null, resizeMode: "contain", onError: null };
    const obj8 = { uri: iconURL };
    obj7.source = obj8;
    const items3 = [tmp6.icon, tmp18.icon];
    obj7.style = items3;
    obj7.onError = function onError() {
      return _undefined(iconURL);
    };
    tmp15 = React5(tmp4(5872), obj7);
  }
  items1[2] = tmp15;
  let tmp29Result = !compact;
  if (compact) {
    tmp29Result = tmp21;
  }
  if (tmp29Result) {
    let tmp30;
    if (tmp17) {
      const items4 = [tmp6.banner, , ];
      ({ banner: arr5[1], background: arr5[2] } = tmp18);
      tmp30 = items4;
    }
    const obj9 = { style: tmp30, children: null };
    const obj10 = { name: game.name, width: null, alignLastBaseline: null, onHeightChange: null };
    const _Math = Math;
    obj10.width = Math.max(0, width - tmp4(575).space.PX_16);
    obj10.alignLastBaseline = tmp17;
    let tmp32;
    if (tmp17) {
      tmp32 = tmp14;
    }
    obj10.onHeightChange = tmp32;
    obj9.children = React5(tmp4(18708), obj10);
    tmp29Result = React5(timestampProducer, obj9);
    const tmp4Result = tmp4(18708);
  }
  items1[3] = tmp29Result;
  obj.children = items1;
  return React6(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, StyleSheet, View: closure_6 } = get_ActivityIndicator);
const TILE_ASPECT_RATIO = fn(18705).TILE_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
const PX_8 = nativeDefault.space.PX_8;
let closure_12 = nativeDefault.space.PX_4 / 2;
let createStyles = fn(5170);
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
obj6.opacity = fn(18707).COVER_TEXTURE_OPACITY;
obj2.texture = obj6;
const rect = { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.art = rect;
const rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, justifyContent: "flex-end", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingTop: PX_6, paddingBottom: PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_ACCENT };
obj2.banner = rect1;
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5170);
let closure_14 = createStyles.createStyles((height, width, height2, backgroundColor) => {
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
  obj2.banner = { height: height2 };
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default function InterestGameCover(arg0) {
  ({ game, width, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_13();
  const coverURL = game.getCoverURL(Math.ceil(width * hasOwnProperty.get()));
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
  items = [tmp7, ];
  if (tmp4) {
    const obj4 = { game, width, compact };
    tmp4 = React5(NoCover, obj4);
  }
  items[1] = tmp4;
  obj.children = items;
  return React6(timestampProducer, obj);
};
export const BIG_ICON_BANNER_PADDING_TOP = PX_6;
export const BIG_ICON_BANNER_PADDING_BOTTOM = PX_8;
export const COVER_TEXTURE_BLUR_RADIUS = 32;