// === Module 9682: Tile ===

// Module 9682 (Tile)
import importAllResult from "Text";
import get_ActivityIndicator from "registerAsset";
import { DraftType } from "handleChanged";
import map from "map";
import IMAGE_CAROUSEL_TILE_HEIGHT from "IMAGE_CAROUSEL_TILE_HEIGHT";
import jsxProd from "PlayIcon";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let closure_12;
let unpackModuleId;
const require = arg1;
function Tile(onEdit) {
  onEdit = onEdit.onEdit;
  let sharedValue = onEdit;
  const onRemove = onEdit.onRemove;
  const channelId = onEdit.channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  let upload = onEdit.upload;
  let c4;
  let description;
  let id;
  let item;
  let isVideo;
  let isImage;
  let isThumbnail;
  flag = undefined;
  let stateFromStores;
  let callback;
  let callback1;
  let animatedStyle;
  let tmp = callback();
  c4 = tmp;
  description = upload.description;
  id = upload.id;
  item = upload.item;
  isVideo = upload.isVideo;
  isImage = upload.isImage;
  isThumbnail = upload.isThumbnail;
  onRemove(channelId[12])(item.platform === sharedValue(channelId[13]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  let tmp5Result = tmp5(tmp3[14]);
  let items = [item];
  stateFromStores = tmp5Result.useStateFromStores(items, () => {
    const upload = item.getUpload(channelId, id, id.ChannelMessage);
    let flag;
    if (upload != null) {
      flag = upload.spoiler;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj1 = upload;
  let items1 = [isVideo, isImage, flag];
  callback = upload.useCallback(() => {
    const width = isThumbnail;
    let height = isThumbnail;
    if (flag) {
      height = width - 4;
    }
    let tmp3 = isVideo;
    if (!isVideo) {
      tmp3 = isImage;
    }
    let maxWidth;
    if (!tmp3) {
      maxWidth = 192;
    }
    return { width, height, maxWidth };
  }, items1);
  let items2 = [onRemove, id];
  callback1 = upload.useCallback(() => {
    let tmpResult;
    if (onRemove != null) {
      tmpResult = tmp(id);
    }
    return tmpResult;
  }, items2);
  let items3 = [channelId, onRemove, onEdit, upload, id];
  const items4 = [callback1];
  const callback2 = upload.useCallback(() => {
    onRemove(channelId[15])({
      channelId,
      onRemove,
      onEdit(arg0) {
        let tmpResult;
        if (closure_0 != null) {
          tmpResult = tmp(closure_6, arg0);
        }
        return tmpResult;
      },
      upload
    });
  }, items3);
  let uri = item.id;
  const callback3 = upload.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      callback1();
    }
  }, items4);
  if (uri == null) {
    uri = item.uri;
  }
  tmp5Result = tmp5(tmp3[8]);
  sharedValue = tmp5Result.useSharedValue(0);
  const items5 = [sharedValue, uri];
  const effect = obj1.useEffect(() => {
    const result = sharedValue.set(1);
  }, items5);
  const tmp4 = onRemove(channelId[12]);
  const fn = function o() {
    let obj = { opacity: null, transform: null };
    obj = { duration: 300, easing: null };
    const value = sharedValue.get();
    obj[1] = sharedValue(channelId[10]).STANDARD_EASING;
    obj[0] = sharedValue(channelId[9]).withTiming(value, obj, "respect-motion-settings");
    obj = { scale: null };
    const obj2 = sharedValue(channelId[9]);
    obj[0] = sharedValue(channelId[11]).withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  let obj = { withTiming: tmp5(tmp3[9]).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: tmp5(tmp3[10]).STANDARD_EASING, withSpring: tmp5(tmp3[11]).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = callback1;
  animatedStyle = sharedValue(channelId[8]).useAnimatedStyle(fn);
  const items6 = [callback, animatedStyle, description, , , , , , , ];
  ({ uri: arr7[3], filename: arr7[4] } = item);
  items6[5] = isImage;
  items6[6] = isThumbnail;
  items6[7] = isVideo;
  items6[8] = stateFromStores;
  items6[9] = tmp;
  obj = { name: "remove", label: null };
  const callback4 = obj1.useCallback(() => {
    let height;
    let width;
    const tmp = callback();
    ({ width, height } = tmp);
    let obj = { style: items, children: null };
    items = [_undefined.tileContainer, { width, height }, animatedStyle];
    obj = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: tmp.maxWidth, fileName: item.filename, borderRadius: null };
    obj[7] = onRemove(channelId[7]).radii.md;
    const items1 = [flag(onRemove(channelId[16]), obj), , ];
    let tmp6Result = null;
    if (isThumbnail) {
      obj = { style: null, children: null };
      obj[0] = tmp5.footerRightContainer;
      const obj1 = { source: null, size: null };
      obj1[0] = tmp3(tmp4[17]);
      obj1[1] = sharedValue(tmp4[10]).Icon.Sizes.SMALL_14;
      obj[1] = tmp6(sharedValue(tmp4[10]).Icon, obj1);
      tmp6Result = tmp6(_undefined, obj);
    }
    items1[1] = tmp6Result;
    const obj2 = { style: _undefined.decorationsContainer, children: null };
    tmp6Result = null;
    if (stateFromStores) {
      const obj3 = { style: null };
      obj3[0] = tmp5.spoilerOverlay;
      tmp6Result = tmp6(tmp3(tmp4[18]), obj3);
    }
    const items2 = [tmp6Result, , ];
    let tmp6Result1 = null;
    if (null != description) {
      let length;
      if (arr4 != null) {
        length = arr4.length;
      }
      tmp6Result1 = null;
      if (length > 0) {
        const obj4 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: null, children: null };
        obj4[3] = tmp5.altTagText;
        const intl = sharedValue(tmp4[20]).intl;
        obj4[4] = intl.string(sharedValue(tmp4[20]).t.QEW81z);
        tmp6Result1 = tmp6(sharedValue(tmp4[19]).Text, obj4);
      }
    }
    const items3 = [tmp6Result1, ];
    let tmp6Result2 = null;
    if (isVideo) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp5.iconContainer;
      obj5[1] = tmp6(sharedValue(tmp4[21]).PlayIcon, { size: "xxs", color: "white" });
      tmp6Result2 = tmp6(tmp12, obj5);
    }
    items3[1] = tmp6Result2;
    items2[1] = stateFromStores(_undefined, { children: items3 });
    let tmp6Result3 = null;
    if (stateFromStores) {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp5.iconContainer;
      obj6[1] = tmp6(sharedValue(tmp4[22]).EyeIcon, { size: "xxs", color: "white" });
      tmp6Result3 = tmp6(tmp12, obj6);
    }
    items2[2] = tmp6Result3;
    obj2[1] = items2;
    items1[2] = stateFromStores(_undefined, obj2);
    obj[1] = items1;
    return stateFromStores(onRemove(channelId[8]).View, obj);
  }, items6);
  let intl = tmp5(tmp3[20]).intl;
  obj[1] = intl.string(sharedValue(channelId[20]).t.kFwAsa);
  const items7 = [obj];
  const intl2 = tmp5(tmp3[20]).intl;
  let str = item.filename;
  if (str == null) {
    str = "";
  }
  obj1 = { accessibilityRole: "button", accessibilityLabel: intl2.formatToPlainString(tmp5(tmp3[20]).t.MJHFt9, { name: str }), accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, onPress: null, style: null, children: null };
  const intl3 = tmp5(tmp3[20]).intl;
  obj1[2] = intl3.string(sharedValue(channelId[20]).t.QtJ1c5);
  obj1[3] = items7;
  obj1[4] = callback3;
  let tmp19 = !isImage;
  if (!isImage) {
    tmp19 = !isVideo;
  }
  obj1[5] = tmp19;
  obj1[6] = callback2;
  const items8 = [tmp.pressableContainer, ];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items8[1] = flag;
  obj1[7] = items8;
  obj1[8] = callback4();
  const items9 = [flag(sharedValue(channelId[23]).PressableOpacity, obj1), ];
  const intl4 = tmp5(tmp3[20]).intl;
  let str2 = item.filename;
  if (str2 == null) {
    str2 = "";
  }
  let obj2 = { children: null };
  let obj3 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(sharedValue(channelId[20]).t.FxKgb3, { name: str2 }), style: tmp.closeButton, onPress: callback1, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: null };
  let obj4 = { style: items10, children: null };
  items10 = [tmp.closeContainer, animatedStyle];
  let obj5 = { source: null, size: null, color: null, style: null };
  obj5[0] = onRemove(channelId[24]);
  obj5[1] = sharedValue(channelId[10]).Icon.Sizes.MEDIUM;
  obj5[2] = onRemove(channelId[7]).unsafe_rawColors.PRIMARY_500;
  obj5[3] = tmp.closeButtonIcon;
  obj4[1] = flag(sharedValue(channelId[10]).Icon, obj5);
  obj3[5] = flag(onRemove(channelId[8]).View, obj4);
  items9[1] = flag(sharedValue(channelId[23]).PressableOpacity, obj3);
  obj2[0] = items9;
  return stateFromStores(c4, obj2);
}
function CustomScrollView(arg0) {
  let closure_0 = importAllResult.useRef(0);
  let closure_1 = importAllResult.useRef(0);
  const ref = importAllResult.useRef(null);
  const callback = importAllResult.useCallback((current) => {
    const obj = ref(ref[25]);
    const tmp = ref;
    if (tmp2) {
      current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }
    tmp.current = current;
  }, []);
  let obj = {};
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
  }, []);
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj.onContentSizeChange = callback;
  obj.onScroll = callback1;
  obj.scrollEventThrottle = 16;
  obj.contentContainerStyle = callback2().scrollview;
  return callback(closure_5, obj);
}
let c3 = importAllResult;
({ View: c4, StyleSheet, ScrollView: c5 } = get_ActivityIndicator);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_TILE_HEIGHT;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { container: { width: "100%" }, pressableContainer: { marginHorizontal: 4 }, tileContainer: null, decorationsContainer: null, highlightedTileContainer: null, closeButton: null, scrollview: null, closeContainer: null, closeButtonIcon: null, altTagText: null, iconContainer: null, spoilerOverlay: null, footerRightContainer: null };
obj = { position: "relative", minWidth: 60, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: require("Themes").radii.md - 1 };
obj[2] = obj;
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flex = 1;
createCacheKey.flexDirection = "row";
createCacheKey.justifyContent = "space-between";
createCacheKey.alignItems = "flex-end";
createCacheKey.padding = 4;
obj[3] = createCacheKey;
obj[4] = { borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
obj[5] = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj[6] = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
let obj2 = { borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
let obj3 = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj[7] = { height: 20, width: 20, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX };
let obj4 = { height: 20, width: 20, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX };
obj[8] = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let obj5 = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
obj[9] = { paddingHorizontal: require("Themes").space.PX_4, lineHeight: 20, backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("Themes").radii.xs, textTransform: "uppercase" };
let obj6 = { paddingHorizontal: require("Themes").space.PX_4, lineHeight: 20, backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("Themes").radii.xs, textTransform: "uppercase" };
obj[10] = { backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj[11] = {};
const obj7 = { backgroundColor: require("Themes").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_4 };
const obj8 = {};
obj[12] = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 4, borderRadius: 20, opacity: 0.85 };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
const obj9 = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 4, borderRadius: 20, opacity: 0.85 };
const memoResult = importAllResult.memo((arg0) => {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  let callback;
  let importAllResult;
  let tmp2 = null != attachments;
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
  }
  let items = [channelId];
  callback = importAllResult.useCallback((arg0) => {
    highlightThumbnails(callback[26]).remove(channelId, arg0, outer1_6.ChannelMessage);
  }, items);
  const items1 = [channelId, callback];
  importAllResult = importAllResult.useCallback((arg0, arg1) => {
    if (callback != null) {
      tmp(arg0);
    }
    const items = [arg1];
    channelId(callback[27]).addImagesFromPicker(channelId, items, channelId(callback[13]).UploadOrigin.IMAGE_EDITOR);
  }, items1);
  const items2 = [callback2().container, ];
  let num2 = 0;
  if (tmp2) {
    num2 = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  }
  let obj = { height: num2, marginTop: null, marginBottom: null };
  let num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  obj[1] = num3;
  let num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  obj = { style: items2, children: null };
  obj[2] = num5;
  items2[1] = obj;
  obj = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: null, children: null };
  const intl = channelId(callback[20]).intl;
  obj[4] = intl.string(channelId(callback[20]).t.RhtzFe);
  const items3 = [headerElement, ];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((uniqueId) => outer1_11(outer1_15, { channelId, highlightThumbnails, onEdit: closure_3, onRemove: callback, upload: uniqueId }, uniqueId.uniqueId));
  }
  items3[1] = mapped;
  obj[5] = items3;
  obj[1] = closure_12(CustomScrollView, obj);
  return closure_11(closure_4, obj);
});
let result = require("handleChanged").fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export const useTileEntranceAnimatedStyle = function useTileEntranceAnimatedStyle(arg0) {
  let obj = sharedValue(4054);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const fn = function o() {
    let obj = { opacity: null, transform: null };
    obj = { duration: 300, easing: null };
    const value = sharedValue.get();
    obj[1] = sharedValue(channelId[10]).STANDARD_EASING;
    obj[0] = sharedValue(channelId[9]).withTiming(value, obj, "respect-motion-settings");
    obj = { scale: null };
    const obj2 = sharedValue(channelId[9]);
    obj[0] = sharedValue(channelId[11]).withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withTiming: sharedValue(4194).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1297).STANDARD_EASING, withSpring: sharedValue(4603).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = closure_14;
  return sharedValue(4054).useAnimatedStyle(fn);
};