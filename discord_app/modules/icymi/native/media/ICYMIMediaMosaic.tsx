// === Module 16497: ICYMIMediaMosaic ===

// Module 16497 (ICYMIMediaMosaic)
import _mod12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import timing from "timing" /* 4561 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import common_VideoDefault from "common/Video" /* 8307 */;
import ICYMITypes from "ICYMITypes" /* 8348 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIContext from "ICYMIContext" /* 16453 */;
import ThumbhashUtils from "ThumbhashUtils" /* 16498 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
function MediaMosaicVideo(source) {
  source = source.source;
  ({ height, width, autoplay, style } = source);
  const tmp = closure_18();
  const items = [ICYMIStore];
  let isGIFV = initialize.useStateFromStores(items, () => ICYMIStore.videosMuted());
  let uri = source.videoURI;
  const tmp2 = __initData;
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  const size = { src: { videoURI: uri }, height, width, postponeRender: false, paused: !autoplay, muted: isGIFV, resizeMode: "cover", style: null, videoStyle: tmp.video, disableFocus: null };
  const items1 = [tmp.media, style];
  size.style = items1;
  if (!isGIFV) {
    isGIFV = source.isGIFV;
  }
  size.disableFocus = isGIFV;
  return tmp2(common_VideoDefault, size);
}
function MediaMosaicImage(source) {
  source = source.source;
  ({ dimensions, style } = source);
  const tmp = closure_18();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const imageFinishedLoading = tmp2[0];
  dependencyMap = tmp2[1];
  source(4296);
  const fn = function c() {
    let obj = timing;
    let num = 1;
    if (first) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num, { duration: 150 }) };
    return obj;
  };
  let obj = { withTiming: source(4561).withTiming, imageFinishedLoading };
  fn.__closure = obj;
  fn.__workletHash = 7803531897566;
  fn.__initData = __initData;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  const memo = noop.useMemo(() => {
    if (null != source.placeholder) {
      const size = { uri: ThumbhashUtils.createThumbhashImageFromPlaceholder(tmp.placeholder), width: null, height: null };
      ({ width: obj.width, height: obj.height } = tmp);
      return size;
    }
  }, items);
  obj = { style: null, children: null };
  const items1 = [animatedStyle, tmp.thumbhashMedia];
  obj.style = items1;
  const obj1 = { source: memo, style: null };
  const items2 = [style, tmp.media, dimensions];
  obj1.style = items2;
  obj.children = closure_15(imageFinishedLoading(5587), obj1);
  const items3 = [closure_15(imageFinishedLoading(4296).View, obj), ];
  const obj2 = {
    source,
    style: null,
    onLoadEnd() {
      return closure_2(true);
    },
    blurRadius: null
  };
  const items4 = [tmp.media, style, dimensions];
  obj2.style = items4;
  let num = 0;
  if (source.isSpoiler) {
    num = 100;
  }
  const obj3 = { children: null };
  obj2.blurRadius = num;
  items3[1] = closure_15(imageFinishedLoading(4296).Image, obj2, source.uri);
  obj3.children = items3;
  return closure_17(closure_16, obj3);
}
function Media(handlePressMedia) {
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const style = handlePressMedia.style;
  let isSpoiler;
  noop = undefined;
  let stateFromStores;
  const tmp = closure_18();
  let obj = noop;
  const ref = noop.useRef(null);
  let flag = source.spoiler;
  if (flag == null) {
    flag = false;
  }
  const tmp3 = isSpoiler(noop.useState(flag), 2);
  isSpoiler = tmp3[0];
  noop = tmp3[1];
  const items = [handlePressMedia, initialIndex, isSpoiler];
  const callback = obj.useCallback(() => {
    if (first) {
      closure_4(false);
    } else {
      const obj = { ref, initialIndex };
      handlePressMedia(obj);
    }
  }, items);
  let obj1 = initialIndex(ref[14]);
  const items1 = [ICYMIStore];
  stateFromStores = obj1.useStateFromStores(items1, () => ICYMIStore.videosMuted());
  let obj2 = initialIndex(ref[14]);
  const items2 = [AccessibilityStore];
  obj = { ref, onPress: callback, style: dimensions, children: null };
  let tmp12 = isSpoiler;
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (isSpoiler) {
    obj = { style: tmp.centerContainer, children: null };
    obj1 = { style: tmp.spoilerText, children: null };
    obj2 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp6(tmp7[21]).intl;
    obj2.children = intl.string(tmp6(tmp7[21]).t["F+x38C"]).toUpperCase();
    obj1.children = closure_15(tmp6(tmp7[20]).Text, obj2);
    obj.children = closure_15(closure_6, obj1);
    tmp12 = closure_15(closure_6, obj);
    const str = intl.string(tmp6(tmp7[21]).t["F+x38C"]);
  }
  const items3 = [tmp12, , , ];
  let tmp15 = null != source.videoURI && !isSpoiler;
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
    const obj3 = { style: tmp.centerContainer, children: null };
    const obj4 = { style: tmp.videoIcon, children: null };
    const obj5 = { color: handlePressMedia(tmp7[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
    obj4.children = closure_15(tmp6(tmp7[22]).PlayIcon, obj5);
    obj3.children = closure_15(closure_6, obj4);
    tmp15 = closure_15(closure_6, obj3);
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
      const obj6 = { style: tmp.absoluteContainer, children: null };
      const items4 = [tmp.muteIcon, ];
      let obj7 = { style: null, onPress: null, activeOpacity: 0.8, children: null };
      items4[1] = stateFromStores ? tmp.iconBg : tmp.iconBgSelected;
      obj7.style = items4;
      obj7.onPress = function onPress() {
        return ICYMIActionCreatorsDefault.setVideosMuted(!stateFromStores);
      };
      if (stateFromStores) {
        const obj8 = { color: handlePressMedia(tmp7[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
        let tmp20Result = tmp20(tmp6(tmp7[26]).VoiceXIcon, obj8);
      } else {
        const obj9 = { color: handlePressMedia(tmp7[11]).colors.BLACK, size: "sm" };
        tmp20Result = tmp20(tmp6(tmp7[27]).VoiceNormalIcon, obj9);
      }
      obj7.children = tmp20Result;
      obj7 = tmp20(tmp6(tmp7[24]).PressableOpacity, obj7);
      obj6.children = obj7;
      tmp20Result = tmp20(closure_6, obj6);
    }
  }
  items3[2] = tmp19;
  if (tmp6Result2.isVideo(source.uri)) {
    if (null != source.videoURI) {
      const size = { source, height: null, width: null, style: null, autoplay: null };
      ({ height: obj20.height, width: obj20.width } = dimensions);
      size.style = style;
      size.autoplay = handlePressMedia.visible;
      let tmp26 = closure_15(MediaMosaicVideo, size);
    }
    items3[3] = tmp26;
    obj.children = items3;
    return closure_17(stateFromStores, obj);
  } else {
    let isGIFV3 = source.isGIFV;
    if (!isGIFV3) {
      isGIFV3 = tmp6(tmp7[12]).urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
      const tmp6Result3 = tmp6(tmp7[12]);
    }
  }
  tmp26 = closure_15(MediaMosaicImage, { source, style, dimensions, isSpoiler });
}
function OneImageRow(widthOverride) {
  widthOverride = widthOverride.widthOverride;
  ({ source, handlePressMedia } = widthOverride);
  const context = noop.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  let obj = { style: null, children: null };
  const items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = closure_18());
  obj.style = items;
  obj = { handlePressMedia, initialIndex: 0, source, dimensions: null };
  const size = { width: widthOverride, height: widthOverride / 1.5 };
  obj.dimensions = size;
  obj.children = __initData(Media, obj);
  return __initData(timestampProducer, obj);
}
function ThreeImagesRow(arg0) {
  ({ sources, start, end, offset: require, handlePressMedia: importDefault, widthOverride } = arg0);
  widthOverride = undefined;
  const tmp = closure_18();
  const context = noop.useContext(require("ICYMIContext").ICYMIContext);
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
    children: sources.map((source, index) => {
      const obj = { handlePressMedia, initialIndex: require + index, source, dimensions: null };
      const size = { width: (widthOverride - 8) / 3, height: (widthOverride - 8) / 3 };
      obj.dimensions = size;
      return __initData(Media, obj, require + index);
    })
  });
}
function TwoImagesRow(arg0) {
  ({ sources, handlePressMedia: require, end, widthOverride } = arg0);
  let size;
  const tmp = closure_18();
  const context = noop.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  size = { width: (widthOverride - 4) / 2, height: (widthOverride - 4) / 2 / 0.75 };
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  if (end) {
    end = tmp.bottomRow;
  }
  items[2] = end;
  return closure_15(closure_6, { style: items, children: sources.map((source, initialIndex) => __initData(Media, { handlePressMedia, initialIndex, source, dimensions: size }, initialIndex)) });
}
function ThreeImages(arg0) {
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = closure_18();
  const context = noop.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  let obj = { style: null, children: null };
  const items = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
  obj.style = items;
  obj = { style: tmp.leftColumn, children: null };
  obj = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: null };
  const size = { width: 2 * widthOverride / 3 - 4, height: 2 * widthOverride / 3 };
  obj.dimensions = size;
  obj.children = __initData(Media, obj);
  const items1 = [__initData(timestampProducer, obj), ];
  const obj1 = { style: tmp.rightColumn, children: null };
  const items2 = [__initData(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: { width: widthOverride / 3, height: widthOverride / 3 } }), __initData(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: { width: widthOverride / 3, height: widthOverride / 3 } })];
  obj1.children = items2;
  items1[1] = closure_1_17(timestampProducer, obj1);
  obj.children = items1;
  return closure_1_17(timestampProducer, obj);
}
function FourImages(arg0) {
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = closure_18();
  const context = noop.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const size = { width: widthOverride / 2 - 4, height: (widthOverride / 2 - 4) / 1.5 };
  let obj = { style: tmp.imagesContainer, children: null };
  obj = { style: null, children: null };
  const items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  obj.style = items;
  const items1 = [__initData(Media, { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size }), __initData(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: size })];
  obj.children = items1;
  const items2 = [closure_1_17(timestampProducer, obj), ];
  const obj3 = { style: null, children: null };
  const items3 = [, ];
  ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
  obj3.style = items3;
  const items4 = [__initData(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: size }), __initData(Media, { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: size })];
  obj3.children = items4;
  items2[1] = closure_1_17(timestampProducer, obj3);
  obj.children = items2;
  return closure_1_17(timestampProducer, obj);
}
function SingleImage(source) {
  source = source.source;
  let widthOverride;
  ({ initialIndex, handlePressMedia, visible } = source);
  const tmp = closure_18();
  let obj = noop;
  const context = noop.useContext(ICYMIContext.ICYMIContext);
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
      let size = source;
      const result = source.width / source.height;
      if (result >= 1) {
        const _Math2 = Math;
        const bound = Math.min(size.width, widthOverride);
        size = { height: bound / result, width: bound };
        return size;
      } else {
        const _Math = Math;
        const bound1 = Math.min(size.height, 330);
        const result1 = bound1 * result;
        if (result1 > widthOverride) {
          const size1 = { width: tmp5, height: tmp5 / result };
          let size2 = size1;
        } else {
          size2 = { width: result1, height: bound1 };
        }
        return size2;
      }
    }, items),
    style: tmp.singleImage,
    visible
  };
  obj.children = __initData(Media, obj);
  return __initData(timestampProducer, obj);
}
class GravityAttachmentMediaMosaic {
  constructor(arg0) {
    sources = global.sources;
    handlePressMedia = global.handlePressMedia;
    widthOverride = global.widthOverride;
    length = undefined;
    closure_4 = undefined;
    length = sources.length;
    items = [, ];
    items[0] = length;
    items[1] = sources;
    tmp = closure_18();
    memo = closure_4.useMemo(() => {
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
          sum = num + 3;
          let arr = items.push(sources.slice(num, sum));
          num = sum;
        } while (sum < length);
      }
      return items;
    }, items);
    closure_4 = memo;
    if (0 === length) {
      return null;
    } else {
      num2 = 1;
      if (1 === length) {
        tmp9 = jsx;
        tmp10 = SingleImage;
        obj = { widthOverride: null, initialIndex: 0, handlePressMedia: null, source: null, visible: null };
        obj.widthOverride = widthOverride;
        obj.handlePressMedia = handlePressMedia;
        sources = sources[0];
        obj.source = sources;
        obj.visible = global.visible;
        tmp4 = jsx(SingleImage, obj);
      } else {
        num3 = 3;
        if (3 === length) {
          tmp7 = jsx;
          tmp8 = ThreeImages;
          obj1 = { widthOverride: null, handlePressMedia: null, sources: null };
          obj1.widthOverride = widthOverride;
          obj1.handlePressMedia = handlePressMedia;
          obj1.sources = sources;
          tmp4 = jsx(ThreeImages, obj1);
        } else {
          num = 4;
          if (4 === length) {
            tmp5 = jsx;
            tmp6 = FourImages;
            obj2 = { widthOverride: null, handlePressMedia: null, sources: null };
            obj2.widthOverride = widthOverride;
            obj2.handlePressMedia = handlePressMedia;
            obj2.sources = sources;
            tmp4 = jsx(FourImages, obj2);
          } else {
            tmp2 = jsx;
            tmp3 = View;
            obj = { style: null, children: null };
            obj.style = tmp.imagesContainer;
            obj.children = memo.map((sources, index) => {
              if (1 === sources.length) {
                let obj = { handlePressMedia, source: sources[0] };
                return __initData(OneImageRow, obj, index);
              } else if (2 === sources.length) {
                obj = { widthOverride, sources, handlePressMedia, end: index === memo.length - 1 };
                return __initData(TwoImagesRow, obj, index);
              } else {
                let num = 0;
                if (0 !== index) {
                  num = memo[0].length + 3 * (index - 1);
                }
                obj = { widthOverride, handlePressMedia, offset: num, sources, start: 0 === index, end: index === memo.length - 1 };
                return __initData(ThreeImagesRow, obj, index);
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
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: map1, AnalyticsPages: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4560);
const collapsedCategories = createStyles.createStyles(() => {
  let obj = { media: null, video: null, thumbhashMedia: null, container: null, imagesContainer: null, imageRow: null, topRow: null, bottomRow: null, videoIcon: null, muteIcon: null, spoilerText: null, leftColumn: null, rightColumn: null, singleImage: null, centerContainer: null, absoluteContainer: null, iconBg: null, iconBgSelected: null };
  obj = { borderRadius: nativeDefault.radii.xs };
  obj.media = obj;
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.video = obj;
  obj.thumbhashMedia = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  obj.container = { gap: 4 };
  obj.imagesContainer = { justifyContent: "center", gap: 4, width: "100%" };
  obj.imageRow = { flexDirection: "row", gap: 4 };
  obj.topRow = { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg };
  const obj1 = { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg };
  obj.bottomRow = { overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg };
  const obj2 = { overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg };
  obj.videoIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 };
  const rect = { position: "absolute", borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, bottom: 8, right: 8 };
  obj.muteIcon = rect;
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 };
  obj.spoilerText = { backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 };
  const obj4 = { backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 };
  obj.leftColumn = { overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg };
  const obj5 = { overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg };
  obj.rightColumn = { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 };
  const obj6 = { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 };
  obj.singleImage = { overflow: "hidden", borderRadius: nativeDefault.radii.lg };
  obj.centerContainer = { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 2 };
  obj.absoluteContainer = { position: "absolute", width: "100%", height: "100%", zIndex: 2 };
  const obj7 = { overflow: "hidden", borderRadius: nativeDefault.radii.lg };
  obj.iconBg = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  const obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.iconBgSelected = { backgroundColor: nativeDefault.colors.WHITE };
  return obj;
});
const __initData = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default function ICYMIMediaMosaic(message) {
  message = message.message;
  const widthOverride = message.widthOverride;
  const itemType = message.itemType;
  noop = undefined;
  let allMediaSources;
  let nonEmbedSources;
  let handlePressMedia;
  let obj = message(itemType[14]);
  let items = [handlePressMedia];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  let tmp = closure_18();
  [tmp4, c4] = stateFromStores(noop.useState(false), 2);
  let visible = !tmp4;
  if (!tmp4) {
    visible = message.visible;
  }
  const items1 = [message];
  const memo = obj2.useMemo(() => {
    let obj = MediaSourceUtil;
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, ICYMITypes.GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((item) => message(itemType[29]).flattenSource(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const tmp2 = _slicedToArray(_mod12.partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
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
  handlePressMedia = obj2.useCallback((arg0) => {
    let items;
    ({ ref, initialIndex } = arg0);
    let obj = widthOverride(itemType[25]);
    obj.itemInteracted(items.id, "message", "press_media");
    let obj1 = widthOverride(itemType[25]);
    obj = { itemId: items.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "media_mosaic", actionIntentType: "open", actionDestinationType: null } };
    obj1.feedItemActioned(obj);
    obj = { page: constants3.ICYMI, object: constants2.ACK_MEDIA_VIEWED, objectType: constants.ACK_SEMI_AUTOMATIC };
    message(itemType[33]).ack(items.channel_id, obj, true, true, items.id);
    items = [];
    const item = allMediaSources.forEach((item) => {
      const obj = {};
      const merged = Object.assign(item);
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
      str = tmp4(tmp[35]).computeChannelName(tmp8, UserStore, RelationshipStore);
      const tmp4Result = tmp4(tmp[35]);
    }
    obj1.contextName = str;
    obj1.originViewOrOriginLayout = ref.current;
    obj1.onClose = function onClose() {
      return _undefined(false);
    };
    message(itemType[34]).openMediaModal(obj1);
  }, items2);
  if (0 !== nonEmbedSources.length) {
    obj = { style: tmp.container, children: null };
    obj = { widthOverride, sources: nonEmbedSources, handlePressMedia, visible };
    const items3 = [closure_15(GravityAttachmentMediaMosaic, obj), ];
    let mapped;
    if (embedSources != null) {
      mapped = embedSources.map((source, index) => __initData(SingleImage, { widthOverride, handlePressMedia, initialIndex: index + nonEmbedSources.length, source, visible }, "gif-" + index));
    }
    items3[1] = mapped;
    obj.children = items3;
    const _HermesInternal = HermesInternal;
    let tmp8Result = closure_17(allMediaSources, obj, "message-image-" + message.id);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
export { GravityAttachmentMediaMosaic };