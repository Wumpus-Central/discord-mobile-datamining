// discord_app/modules/icymi/native/media/ICYMIMediaMosaic.tsx
import apply from "apply";
import preload from "preload";
import get_ActivityIndicator from "CONFIG_NEVER_ANIMATE_TIMING";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import filterStaffGuild from "filterStaffGuild";
import ME from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { VideoComponent } from "../../../../components_native/common/Video.tsx";
import { context } from "../ICYMIContext.tsx";

let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let map1;
const require = arg1;
function MediaMosaicVideo(source) {
  let autoplay;
  let height;
  let style;
  let width;
  source = source.source;
  ({ height, width, autoplay, style } = source);
  const tmp = callback4();
  let obj = initialize;
  const items = [filterStaffGuild];
  let isGIFV = obj.useStateFromStores(items, () => filterStaffGuild.videosMuted());
  let uri = source.videoURI;
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  obj = { src: { videoURI: uri }, height, width, postponeRender: false, paused: !autoplay, muted: isGIFV, resizeMode: "cover", style: items1, videoStyle: tmp.video, disableFocus: null };
  items1 = [tmp.media, style];
  if (!isGIFV) {
    isGIFV = source.isGIFV;
  }
  obj[9] = isGIFV;
  return closure_15(VideoComponent, obj);
}
function MediaMosaicImage(source) {
  let dimensions;
  let style;
  source = source.source;
  ({ dimensions, style } = source);
  let first;
  let dependencyMap;
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = source(4036);
  const fn = function c() {
    let obj = source(4304);
    let num = 1;
    if (first) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num, { duration: 150 }) };
    return obj;
  };
  obj = { withTiming: source(4304).withTiming, imageFinishedLoading: first };
  fn.__closure = obj;
  fn.__workletHash = 7803531897566;
  fn.__initData = closure_20;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  const memo = React.useMemo(() => {
    if (null != source.placeholder) {
      const obj = { uri: null, width: null, height: null };
      obj[0] = source(15605).createThumbhashImageFromPlaceholder(tmp.placeholder);
      ({ width: obj[1], height: obj[2] } = tmp);
      return obj;
    }
  }, items);
  obj = { style: items1, children: null };
  items1 = [animatedStyle, tmp.thumbhashMedia];
  const items2 = [style, tmp.media, dimensions];
  obj[1] = callback2(first(5268), { source: memo, style: items2 });
  const items3 = [callback2(first(4036).View, obj), ];
  const obj1 = {
    source,
    style: items4,
    onLoadEnd() {
      return dependencyMap(true);
    },
    blurRadius: null
  };
  items4 = [tmp.media, style, dimensions];
  let num = 0;
  if (source.isSpoiler) {
    num = 100;
  }
  const obj2 = { children: null };
  obj1[3] = num;
  items3[1] = callback2(first(4036).Image, obj1, source.uri);
  obj2[0] = items3;
  return closure_17(closure_16, obj2);
}
function Media(handlePressMedia) {
  let dimensions;
  let initialIndex;
  let source;
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const style = handlePressMedia.style;
  let ref;
  let first;
  let React;
  let stateFromStores;
  const tmp = callback4();
  let obj = React;
  ref = React.useRef(null);
  let flag = source.spoiler;
  if (flag == null) {
    flag = false;
  }
  const tmp3 = first(React.useState(flag), 2);
  first = tmp3[0];
  React = tmp3[1];
  const items = [handlePressMedia, initialIndex, first];
  const callback = obj.useCallback(() => {
    if (first) {
      callback(false);
    } else {
      const obj = { ref: null, initialIndex: null };
      obj[0] = ref;
      obj[1] = initialIndex;
      handlePressMedia(obj);
    }
  }, items);
  let obj1 = initialIndex(ref[14]);
  const items1 = [filterStaffGuild];
  stateFromStores = obj1.useStateFromStores(items1, () => filterStaffGuild.videosMuted());
  let obj2 = initialIndex(ref[14]);
  const items2 = [maybeApplyNoTextColorForLightCustomTheme];
  obj = { ref, onPress: callback, style: dimensions, children: null };
  let tmp12 = first;
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (first) {
    obj = { style: null, children: null };
    obj[0] = tmp.centerContainer;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.spoilerText;
    obj2 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp6(tmp7[21]).intl;
    obj2[3] = intl.string(tmp6(tmp7[21]).t["F+x38C"]).toUpperCase();
    obj1[1] = callback2(tmp6(tmp7[20]).Text, obj2);
    obj[1] = callback2(closure_6, obj1);
    tmp12 = callback2(closure_6, obj);
    const str = intl.string(tmp6(tmp7[21]).t["F+x38C"]);
  }
  const items3 = [tmp12, , , ];
  let tmp15 = null != source.videoURI && !first;
  if (tmp15) {
    let isGIFV = source.isGIFV;
    if (!isGIFV) {
      let tmp6Result = tmp6(tmp7[12]);
      isGIFV = tmp6Result.urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
    }
    tmp15 = !isGIFV;
  }
  if (tmp15) {
    tmp15 = stateFromStores1;
  }
  if (tmp15) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.centerContainer;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.videoIcon;
    const obj5 = { color: null, size: "lg" };
    obj5[0] = handlePressMedia(tmp7[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT;
    obj4[1] = callback2(tmp6(tmp7[22]).PlayIcon, obj5);
    obj3[1] = callback2(closure_6, obj4);
    tmp15 = callback2(closure_6, obj3);
  }
  items3[1] = tmp15;
  tmp6Result = tmp6(tmp7[23]);
  let tmp19 = null;
  if (tmp6Result.isVideo(source.uri)) {
    let isGIFV2 = source.isGIFV;
    if (!isGIFV2) {
      isGIFV2 = tmp6(tmp7[12]).urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
      const tmp6Result1 = tmp6(tmp7[12]);
    }
    tmp19 = null;
    if (!isGIFV2) {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.absoluteContainer;
      const items4 = [tmp.muteIcon, ];
      let obj7 = { style: null, onPress: null, activeOpacity: 0.8, children: null };
      items4[1] = stateFromStores ? tmp.iconBg : tmp.iconBgSelected;
      obj7[0] = items4;
      obj7[1] = function onPress() {
        return handlePressMedia(ref[25]).setVideosMuted(!stateFromStores);
      };
      if (stateFromStores) {
        const obj8 = { color: null, size: "sm" };
        obj8[0] = handlePressMedia(tmp7[11]).colors.INTERACTIVE_TEXT_DEFAULT;
        let tmp20Result = tmp20(tmp6(tmp7[26]).VoiceXIcon, obj8);
      } else {
        const obj9 = { color: null, size: "sm" };
        obj9[0] = handlePressMedia(tmp7[11]).colors.BLACK;
        tmp20Result = tmp20(tmp6(tmp7[27]).VoiceNormalIcon, obj9);
      }
      obj7[3] = tmp20Result;
      obj7 = tmp20(tmp6(tmp7[24]).PressableOpacity, obj7);
      obj6[1] = obj7;
      tmp20Result = tmp20(closure_6, obj6);
      const tmp21 = closure_6;
    }
  }
  items3[2] = tmp19;
  if (tmp6Result2.isVideo(source.uri)) {
    if (null != source.videoURI) {
      const obj10 = { source: null, height: null, width: null, style: null, autoplay: null };
      obj10[0] = source;
      ({ height: obj20[1], width: obj20[2] } = dimensions);
      obj10[3] = style;
      obj10[4] = handlePressMedia.visible;
      let tmp26 = callback2(MediaMosaicVideo, obj10);
    }
    items3[3] = tmp26;
    obj[3] = items3;
    return closure_17(stateFromStores, obj);
  } else {
    let isGIFV3 = source.isGIFV;
    if (!isGIFV3) {
      isGIFV3 = tmp6(tmp7[12]).urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
      const tmp6Result3 = tmp6(tmp7[12]);
    }
  }
  tmp26 = callback2(MediaMosaicImage, { source, style, dimensions, isSpoiler: first });
}
function OneImageRow(widthOverride) {
  let handlePressMedia;
  let source;
  widthOverride = widthOverride.widthOverride;
  ({ source, handlePressMedia } = widthOverride);
  const context = React.useContext(context.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  obj = { style: items, children: callback2(Media, { handlePressMedia, initialIndex: 0, source, dimensions: obj }) };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = callback4());
  obj = { width: widthOverride, height: widthOverride / 1.5 };
  return callback2(closure_6, obj);
}
function ThreeImagesRow(arg0) {
  let end;
  let importDefault;
  let require;
  let sources;
  let start;
  let widthOverride;
  ({ sources, start, end, offset: require, handlePressMedia: importDefault, widthOverride } = arg0);
  widthOverride = undefined;
  const tmp = callback4();
  const context = React.useContext(require(widthOverride[28]).ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const items = [tmp.imageRow, , ];
  if (start) {
    start = tmp.topRow;
  }
  items[1] = start;
  if (end) {
    end = tmp.bottomRow;
  }
  items[2] = end;
  return closure_15(closure_6, {
    style: items,
    children: sources.map((source) => {
      obj = { handlePressMedia: closure_1, initialIndex: closure_0 + arg1, source, dimensions: obj };
      obj = { width: (widthOverride - 8) / 3, height: (widthOverride - 8) / 3 };
      return outer1_15(outer1_22, obj, closure_0 + arg1);
    })
  });
}
function TwoImagesRow(arg0) {
  let end;
  let require;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia: require, end, widthOverride } = arg0);
  let obj;
  const tmp = callback4();
  const context = React.useContext(context.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  obj = { width: (widthOverride - 4) / 2, height: (widthOverride - 4) / 2 / 0.75 };
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  if (end) {
    end = tmp.bottomRow;
  }
  obj = {
    style: items,
    children: sources.map((source, initialIndex) => {
      obj = { handlePressMedia: closure_0, initialIndex, source, dimensions: obj };
      return outer1_15(outer1_22, obj, initialIndex);
    })
  };
  items[2] = end;
  return closure_15(closure_6, obj);
}
function ThreeImages(arg0) {
  let handlePressMedia;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = callback4();
  const context = React.useContext(context.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  let obj = { style: items, children: null };
  items = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
  obj = { style: tmp.leftColumn, children: callback2(Media, obj) };
  obj = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: obj1 };
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = { style: tmp.rightColumn, children: null };
  const items2 = [callback2(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: obj4 }), callback2(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: obj6 })];
  obj2[1] = items2;
  items1[1] = callback3(closure_6, obj2);
  obj[1] = items1;
  return callback3(closure_6, obj);
}
function FourImages(arg0) {
  let handlePressMedia;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = callback4();
  const context = React.useContext(context.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  let obj = { width: widthOverride / 2 - 4, height: (widthOverride / 2 - 4) / 1.5 };
  obj = { style: tmp.imagesContainer, children: null };
  obj = { style: items, children: null };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  const items1 = [callback2(Media, { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: obj }), callback2(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: obj })];
  obj[1] = items1;
  const items2 = [callback3(closure_6, obj), ];
  const obj3 = { style: items3, children: null };
  items3 = [, ];
  ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
  const items4 = [callback2(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: obj }), callback2(Media, { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: obj })];
  obj3[1] = items4;
  items2[1] = callback3(closure_6, obj3);
  obj[1] = items2;
  return callback3(closure_6, obj);
}
function SingleImage(source) {
  let handlePressMedia;
  let initialIndex;
  let visible;
  source = source.source;
  let widthOverride = source.widthOverride;
  widthOverride = undefined;
  ({ initialIndex, handlePressMedia, visible } = source);
  const tmp = callback4();
  let obj = React;
  const context = React.useContext(source(15560).ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const items = [, , ];
  ({ width: arr[0], height: arr[1] } = source);
  items[2] = widthOverride;
  obj = { style: tmp.imagesContainer, children: null };
  obj = {
    handlePressMedia,
    initialIndex,
    source,
    dimensions: obj.useMemo(() => {
      const size = source;
      const result = source.width / source.height;
      if (result >= 1) {
        const _Math2 = Math;
        const bound = Math.min(size.width, widthOverride);
        let obj = { height: null, width: null };
        obj[0] = bound / result;
        obj[1] = bound;
        return obj;
      } else {
        const _Math = Math;
        const bound1 = Math.min(size.height, 330);
        const result1 = bound1 * result;
        if (result1 > widthOverride) {
          obj = { width: null, height: null };
          obj[0] = tmp5;
          obj[1] = tmp5 / result;
        } else {
          obj = { width: null, height: null };
          obj[0] = result1;
          obj[1] = bound1;
        }
        return obj;
      }
    }, items),
    style: tmp.singleImage,
    visible
  };
  obj[1] = callback2(Media, obj);
  return callback2(closure_6, obj);
}
class GravityAttachmentMediaMosaic {
  constructor(arg0) {
    sources = global.sources;
    handlePressMedia = global.handlePressMedia;
    widthOverride = global.widthOverride;
    length = undefined;
    c4 = undefined;
    length = sources.length;
    items = [, ];
    items[0] = length;
    items[1] = sources;
    tmp = f62180();
    memo = c4.useMemo(() => {
      let sum;
      const result = length % 3;
      let num = 3;
      if (0 !== result) {
        num = result;
      }
      const items = [];
      items.push(sources.slice(0, num));
      if (num < length) {
        do {
          let tmp4 = sources;
          sum = num + 3;
          let arr = items.push(sources.slice(num, sum));
          let tmp7 = length;
          num = sum;
        } while (sum < length);
      }
      return items;
    }, items);
    c4 = memo;
    if (0 === length) {
      return null;
    } else {
      num2 = 1;
      if (1 === length) {
        tmp9 = jsx;
        tmp10 = SingleImage;
        obj = { widthOverride: null, initialIndex: 0, handlePressMedia: null, source: null, visible: null };
        obj[0] = widthOverride;
        obj[2] = handlePressMedia;
        sources = sources[0];
        obj[3] = sources;
        obj[4] = global.visible;
        tmp4 = jsx(SingleImage, obj);
      } else {
        num3 = 3;
        if (3 === length) {
          tmp7 = jsx;
          tmp8 = ThreeImages;
          obj1 = { widthOverride: null, handlePressMedia: null, sources: null };
          obj1[0] = widthOverride;
          obj1[1] = handlePressMedia;
          obj1[2] = sources;
          tmp4 = jsx(ThreeImages, obj1);
        } else {
          num = 4;
          if (4 === length) {
            tmp5 = jsx;
            tmp6 = FourImages;
            obj2 = { widthOverride: null, handlePressMedia: null, sources: null };
            obj2[0] = widthOverride;
            obj2[1] = handlePressMedia;
            obj2[2] = sources;
            tmp4 = jsx(FourImages, obj2);
          } else {
            tmp2 = jsx;
            tmp3 = View;
            obj = { style: null, children: null };
            obj[0] = tmp.imagesContainer;
            obj[1] = memo.map((arg0, arg1) => {
              if (1 === arg0.length) {
                let obj = { handlePressMedia: null, source: null };
                obj[0] = handlePressMedia;
                obj[1] = arg0[0];
                return outer1_15(outer1_23, obj, arg1);
              } else if (2 === arg0.length) {
                obj = { widthOverride: null, sources: null, handlePressMedia: null, end: null };
                obj[0] = widthOverride;
                obj[1] = arg0;
                obj[2] = handlePressMedia;
                obj[3] = arg1 === memo.length - 1;
                return outer1_15(outer1_25, obj, arg1);
              } else {
                let num = 0;
                if (0 !== arg1) {
                  num = memo[0].length + 3 * (arg1 - 1);
                }
                obj = { widthOverride: null, handlePressMedia: null, offset: null, sources: null, start: null, end: null };
                obj[0] = widthOverride;
                obj[1] = handlePressMedia;
                obj[2] = num;
                obj[3] = arg0;
                obj[4] = 0 === arg1;
                obj[5] = arg1 === memo.length - 1;
                return outer1_15(outer1_24, obj, arg1);
              }
            });
            tmp4 = jsx(View, obj);
          }
        }
      }
      tmp11 = tmp4;
    }
    return;
  }
}
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: map1, AnalyticsPages: closure_14 } = ME);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = createCacheKey.createStyles(() => {
  let obj = { media: null, video: null, thumbhashMedia: null, container: null, imagesContainer: null, imageRow: null, topRow: null, bottomRow: null, videoIcon: null, muteIcon: null, spoilerText: null, leftColumn: null, rightColumn: null, singleImage: null, centerContainer: null, absoluteContainer: null, iconBg: null, iconBgSelected: null };
  obj = { borderRadius: Themes.radii.xs };
  obj[0] = obj;
  obj = { backgroundColor: Themes.colors.BACKGROUND_SURFACE_HIGH };
  obj[1] = obj;
  obj[2] = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  obj[3] = { gap: 4 };
  obj[4] = { justifyContent: "center", gap: 4, width: "100%" };
  obj[5] = { flexDirection: "row", gap: 4 };
  obj[6] = { overflow: "hidden", borderTopEndRadius: Themes.radii.lg, borderTopStartRadius: Themes.radii.lg };
  const obj1 = { overflow: "hidden", borderTopEndRadius: Themes.radii.lg, borderTopStartRadius: Themes.radii.lg };
  obj[7] = { overflow: "hidden", borderBottomEndRadius: Themes.radii.lg, borderBottomStartRadius: Themes.radii.lg };
  const obj2 = { overflow: "hidden", borderBottomEndRadius: Themes.radii.lg, borderBottomStartRadius: Themes.radii.lg };
  obj[8] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, borderRadius: Themes.radii.round, padding: 16 };
  const obj3 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, borderRadius: Themes.radii.round, padding: 16 };
  obj[9] = { position: "absolute", borderRadius: Themes.radii.round, padding: Themes.space.PX_4, bottom: 8, right: 8 };
  const obj4 = { position: "absolute", borderRadius: Themes.radii.round, padding: Themes.space.PX_4, bottom: 8, right: 8 };
  obj[10] = { backgroundColor: Themes.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: Themes.radii.lg, paddingHorizontal: Themes.space.PX_12, paddingVertical: 6 };
  const obj5 = { backgroundColor: Themes.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: Themes.radii.lg, paddingHorizontal: Themes.space.PX_12, paddingVertical: 6 };
  obj[11] = { overflow: "hidden", borderTopStartRadius: Themes.radii.lg, borderBottomStartRadius: Themes.radii.lg };
  const obj6 = { overflow: "hidden", borderTopStartRadius: Themes.radii.lg, borderBottomStartRadius: Themes.radii.lg };
  obj[12] = { overflow: "hidden", borderTopEndRadius: Themes.radii.lg, borderBottomEndRadius: Themes.radii.lg, gap: 4 };
  const obj7 = { overflow: "hidden", borderTopEndRadius: Themes.radii.lg, borderBottomEndRadius: Themes.radii.lg, gap: 4 };
  obj[13] = { overflow: "hidden", borderRadius: Themes.radii.lg };
  obj[14] = { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 2 };
  obj[15] = { position: "absolute", width: "100%", height: "100%", zIndex: 2 };
  const obj8 = { overflow: "hidden", borderRadius: Themes.radii.lg };
  obj[16] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWER };
  const obj9 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWER };
  obj[17] = { backgroundColor: Themes.colors.WHITE };
  return obj;
});
let closure_20 = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default function ICYMIMediaMosaic(message) {
  let c4;
  let tmp4;
  message = message.message;
  const widthOverride = message.widthOverride;
  const itemType = message.itemType;
  let stateFromStores;
  let React;
  let visible;
  let allMediaSources;
  let nonEmbedSources;
  let callback;
  let obj = message(itemType[14]);
  let items = [callback];
  stateFromStores = obj.useStateFromStores(items, () => callback.getChannel(message.getChannelId()));
  let tmp = callback4();
  [tmp4, c4] = stateFromStores(React.useState(false), 2);
  visible = !tmp4;
  if (!tmp4) {
    visible = message.visible;
  }
  const items1 = [message];
  const memo = obj2.useMemo(() => {
    let obj = message(itemType[29]);
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, message(itemType[30]).GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((closure_1) => callback(table[29]).flattenSource(closure_1));
    const found = mapped.filter(message(itemType[31]).isNotNullish);
    const tmp2 = stateFromStores(message(itemType[32]).partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
    obj = { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
    return obj;
  }, items1);
  allMediaSources = memo.allMediaSources;
  nonEmbedSources = memo.nonEmbedSources;
  const embedSources = memo.embedSources;
  const items2 = [, , , , ];
  ({ channel_id: arr5[0], id: arr5[1] } = message);
  items2[2] = allMediaSources;
  items2[3] = stateFromStores;
  items2[4] = itemType;
  callback = obj2.useCallback((arg0) => {
    let initialIndex;
    let ref;
    let items;
    ({ ref, initialIndex } = arg0);
    let obj = widthOverride(itemType[25]);
    obj.itemInteracted(items.id, "message", "press_media");
    let obj1 = widthOverride(itemType[25]);
    obj = { itemId: items.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "media_mosaic", actionIntentType: "open", actionDestinationType: null } };
    obj1.feedItemActioned(obj);
    obj = { page: outer1_14.ICYMI, object: outer1_13.ACK_MEDIA_VIEWED, objectType: outer1_12.ACK_SEMI_AUTOMATIC };
    message(itemType[33]).ack(items.channel_id, obj, true, true, items.id);
    items = [];
    const item = allMediaSources.forEach((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.embedURI = undefined;
      items.push(obj);
    });
    _undefined(true);
    const obj4 = message(itemType[33]);
    const tmp = itemType;
    const tmp4 = message;
    obj1 = { disableDownload: false, initialSources: items, initialIndex, analyticsSource: "Channel", channelId: items.channel_id, contextName: null, contextIcon: "r", originViewOrOriginLayout: 0, onClose: "absolute" };
    let str = "";
    if (null != stateFromStores) {
      str = tmp4(tmp[35]).computeChannelName(tmp8, outer1_10, outer1_9);
      const tmp4Result = tmp4(tmp[35]);
    }
    obj1[5] = str;
    obj1[7] = ref.current;
    obj1[8] = function onClose() {
      return callback(false);
    };
    message(itemType[34]).openMediaModal(obj1);
  }, items2);
  if (0 !== nonEmbedSources.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { widthOverride: null, sources: null, handlePressMedia: null, visible: null };
    obj[0] = widthOverride;
    obj[1] = nonEmbedSources;
    obj[2] = callback;
    obj[3] = visible;
    const items3 = [callback2(GravityAttachmentMediaMosaic, obj), ];
    let mapped;
    if (embedSources != null) {
      mapped = embedSources.map((source) => outer1_15(outer1_28, { widthOverride, handlePressMedia: callback, initialIndex: arg1 + nonEmbedSources.length, source, visible }, "gif-" + arg1));
    }
    items3[1] = mapped;
    obj[1] = items3;
    const _HermesInternal = HermesInternal;
    let tmp8Result = closure_17(allMediaSources, obj, "message-image-" + message.id);
    const tmp8 = closure_17;
    const tmp9 = allMediaSources;
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
export { GravityAttachmentMediaMosaic };