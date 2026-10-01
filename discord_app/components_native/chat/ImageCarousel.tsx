// discord_app/components_native/chat/ImageCarousel.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import ReanimatedRexportDefault from "../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../design/animation/reanimated/spring/spring.tsx";
import Upload from "../../lib/uploader/Upload.tsx";
import _modDef6545 from "../../../_runtime/metro/06545__.js";
import UploadAttachmentActionCreatorsDefault from "../../actions/UploadAttachmentActionCreators.tsx";
import AttachmentPreviewDefault from "../../modules/media/native/AttachmentPreview.tsx";
import showUploadPreviewActionSheetDefault from "../../modules/media_uploads/native/showUploadPreviewActionSheet.tsx";
import MediaKeyboardUtils from "../../modules/media_keyboard/native/MediaKeyboardUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../stores/UploadAttachmentStore.tsx";

require = fn;
function Tile(onEdit) {
  onEdit = onEdit.onEdit;
  const onRemove = onEdit.onRemove;
  const channelId = onEdit.channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  let upload = onEdit.upload;
  id = undefined;
  const tmp = closure_13();
  ({ description, id } = upload);
  ({ item, isVideo, isImage, isThumbnail } = upload);
  onRemove(channelId[12])(
    item.platform === onEdit(channelId[13]).UploadPlatform.REACT_NATIVE,
    "Upload must be a React Native upload item.",
  );
  const tmp4 = onRemove(channelId[12]);
  const items = [UploadAttachmentStore];
  const stateFromStores = onEdit(channelId[14]).useStateFromStores(items, () => {
    upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
    let flag;
    if (upload != null) {
      flag = upload.spoiler;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [onRemove, id];
  const items2 = [channelId, onRemove, onEdit, upload, id];
  const callback = upload.useCallback(() => {
    let tmpResult;
    if (onRemove != null) {
      tmpResult = tmp(id);
    }
    return tmpResult;
  }, items1);
  let uri = item.id;
  const callback1 = upload.useCallback(() => {
    showUploadPreviewActionSheetDefault({
      channelId,
      onRemove,
      onEdit(arg0) {
        let tmpResult;
        if (onEdit != null) {
          tmpResult = tmp(id, arg0);
        }
        return tmpResult;
      },
      upload,
    });
  }, items2);
  if (uri == null) {
    uri = item.uri;
  }
  const obj2 = {
    itemKey: uri,
    uri: item.uri,
    fileName: item.filename,
    isImage,
    isVideo,
    isHighlighted: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    removeAccessibilityLabel: null,
    onPress: null,
    onRemove: null,
    children: null,
  };
  if (flag) {
    flag = true === isThumbnail;
  }
  obj2.isHighlighted = flag;
  const intl = tmp5(tmp3[16]).intl;
  let str = item.filename;
  if (str == null) {
    str = "";
  }
  obj2.accessibilityLabel = intl.formatToPlainString(onEdit(channelId[16]).t.MJHFt9, { name: str });
  const intl2 = tmp5(tmp3[16]).intl;
  obj2.accessibilityHint = intl2.string(onEdit(channelId[16]).t.QtJ1c5);
  const intl3 = tmp5(tmp3[16]).intl;
  let str2 = item.filename;
  if (str2 == null) {
    str2 = "";
  }
  obj2.removeAccessibilityLabel = intl3.formatToPlainString(onEdit(channelId[16]).t.FxKgb3, { name: str2 });
  if (isImage) {
    const tmp12 = callback1;
  }
  obj2.onPress = tmp12;
  obj2.onRemove = callback;
  let tmp13 = null;
  if (isThumbnail) {
    const obj3 = { style: tmp.footerRightContainer, children: null };
    const obj4 = { source: tmp2(tmp3[17]), size: tmp5(tmp3[10]).Icon.Sizes.SMALL_14 };
    obj3.children = closure_11(tmp5(tmp3[10]).Icon, obj4);
    tmp13 = closure_11(id, obj3);
  }
  const items3 = [tmp13];
  const obj5 = { style: tmp.decorationsContainer, children: null };
  let tmp17 = null;
  if (stateFromStores) {
    const obj6 = { style: tmp.spoilerOverlay };
    tmp17 = closure_11(tmp2(tmp3[18]), obj6);
  }
  const items4 = [tmp17, ,];
  let tmp19 = null;
  if (null != description) {
    let length;
    if (description != null) {
      length = description.length;
    }
    tmp19 = null;
    if (length > 0) {
      const obj7 = {
        variant: "text-xs/medium",
        color: "text-overlay-light",
        allowFontScaling: false,
        style: tmp.altTagText,
        children: null,
      };
      const intl4 = tmp5(tmp3[16]).intl;
      obj7.children = intl4.string(tmp5(tmp3[16]).t.QEW81z);
      tmp19 = closure_11(tmp5(tmp3[19]).Text, obj7);
    }
  }
  const items5 = [tmp19];
  let tmp22 = null;
  if (isVideo) {
    const obj8 = {
      style: tmp.iconContainer,
      children: closure_11(tmp5(tmp3[20]).PlayIcon, { size: "xxs", color: "white" }),
    };
    tmp22 = closure_11(tmp16, obj8);
  }
  items5[1] = tmp22;
  items4[1] = closure_12(id, { children: items5 });
  let tmp24 = null;
  if (stateFromStores) {
    const obj9 = {
      style: tmp.iconContainer,
      children: closure_11(tmp5(tmp3[21]).EyeIcon, { size: "xxs", color: "white" }),
    };
    tmp24 = closure_11(tmp16, obj9);
  }
  items4[2] = tmp24;
  obj5.children = items4;
  items3[1] = closure_12(id, obj5);
  obj2.children = items3;
  return closure_12(ImageCarouselTile, obj2);
}
class ImageCarouselTile {
  constructor(arg0) {
    ({ isImage, isVideo, isHighlighted } = global);
    ({ itemKey, uri, fileName } = global);
    if (isHighlighted === undefined) {
      isHighlighted = false;
    }
    ({ onPress, onRemove } = global);
    closure_0 = onRemove;
    ({ accessibilityLabel, accessibilityHint, removeAccessibilityLabel, children } = global);
    tmp = closure_13();
    tmp2 = isImage;
    if (!isImage) {
      tmp2 = isVideo;
    }
    tmp3 = closure_10;
    if (isHighlighted) {
      num = 4;
      diff = tmp3 - 4;
      tmp4 = tmp3;
    } else {
      tmp4 = tmp3;
      diff = tmp3;
    }
    tmp6 = undefined;
    if (tmp2) {
      tmp6 = tmp4;
    }
    num2 = 192;
    items = [];
    items[0] = onRemove;
    closure_0 = undefined;
    tmp8 = closure_0;
    tmp9 = closure_2;
    callback = closure_3.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        sharedValue();
      }
    }, items);
    obj = closure_0(closure_2[8]);
    sharedValue = obj.useSharedValue(0);
    closure_0 = sharedValue;
    items1 = [,];
    items1[0] = sharedValue;
    items1[1] = itemKey;
    effect = closure_3.useEffect(() => {
      const result = sharedValue.set(1);
    }, items1);
    obj2 = closure_0(closure_2[8]);
    fn = function l() {
      const obj = { opacity: null, transform: null };
      const obj3 = { duration: 300, easing: null };
      value = sharedValue.get();
      obj3.easing = native.STANDARD_EASING;
      obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
      const obj4 = { scale: null };
      obj4.scale = spring.withSpring(
        sharedValue.get(),
        { stiffness: 80, damping: 6, mass: 0.3 },
        "respect-motion-settings",
      );
      const items = [obj4];
      obj.transform = items;
      return obj;
    };
    obj1 = {
      withTiming: closure_0(closure_2[9]).withTiming,
      animatedStylePropValue: sharedValue,
      STANDARD_EASING: closure_0(closure_2[10]).STANDARD_EASING,
      withSpring: closure_0(closure_2[11]).withSpring,
    };
    fn.__closure = obj1;
    fn.__workletHash = 14458898683767;
    fn.__initData = closure_14;
    animatedStyle = obj2.useAnimatedStyle(fn);
    obj12 = { name: "remove", label: null };
    intl = closure_0(closure_2[16]).intl;
    obj12.label = intl.string(closure_0(closure_2[16]).t.kFwAsa);
    items2 = [];
    items2[0] = obj12;
    tmp13 = jsxs;
    tmp15 = jsx;
    tmp14 = View;
    obj13 = {
      accessibilityRole: "button",
      accessibilityLabel,
      accessibilityHint,
      accessibilityActions: items2,
      onAccessibilityAction: callback,
      disabled: null == onPress,
      onPress,
      style: null,
      children: null,
    };
    items3 = [,];
    items3[0] = tmp.pressableContainer;
    if (isHighlighted) {
      isHighlighted = tmp.highlightedTileContainer;
    }
    obj14 = { children: null };
    items3[1] = isHighlighted;
    obj13.style = items3;
    obj15 = { style: null, children: null };
    items4 = [, ,];
    items4[0] = tmp.tileContainer;
    items4[1] = { width: tmp6, height: diff };
    items4[2] = animatedStyle;
    obj15.style = items4;
    size = { uri, isImage, isVideo, width: tmp6, height: diff, maxFileWidth: num2, fileName, borderRadius: null };
    tmp16 = closure_1(tmp9[23]);
    size.borderRadius = closure_1(tmp9[7]).radii.md;
    items5 = [,];
    items5[0] = tmp15(tmp16, size);
    items5[1] = children;
    obj15.children = items5;
    obj13.children = tmp13(closure_1(tmp9[8]).View, obj15);
    items6 = [,];
    items6[0] = tmp15(closure_0(closure_2[22]).PressableOpacity, obj13);
    obj16 = {
      accessibilityRole: "button",
      accessibilityLabel: removeAccessibilityLabel,
      style: tmp.closeButton,
      onPress: onRemove,
      hitSlop: { top: 4, bottom: 4, left: 4, right: 4 },
      children: null,
    };
    obj17 = { style: null, children: null };
    items7 = [,];
    items7[0] = tmp.closeContainer;
    items7[1] = animatedStyle;
    obj17.style = items7;
    obj18 = {
      source: closure_1(tmp9[24]),
      size: tmp8(tmp9[10]).Icon.Sizes.MEDIUM,
      color: closure_1(tmp9[7]).unsafe_rawColors.PRIMARY_500,
      style: tmp.closeButtonIcon,
    };
    obj17.children = tmp15(tmp8(tmp9[10]).Icon, obj18);
    obj16.children = tmp15(closure_1(tmp9[8]).View, obj17);
    items6[1] = tmp15(tmp8(tmp9[22]).PressableOpacity, obj16);
    obj14.children = items6;
    return tmp13(tmp14, obj14);
  }
}
function CustomScrollView(arg0) {
  noop.useRef(0);
  noop.useRef(0);
  const ref = noop.useRef(null);
  const callback = noop.useCallback((current) => {
    if (tmp2) {
      current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }
    ref.current = current;
    tmp2 = current > ref.current || ref2.current + useWindowDimensions.getWindowDimensions().width > current;
  }, []);
  let obj = {};
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
  }, []);
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj.onContentSizeChange = callback;
  obj.onScroll = callback1;
  obj.scrollEventThrottle = 16;
  obj.contentContainerStyle = closure_13().scrollview;
  return closure_11(closure_5, obj);
}
class ImageCarouselRow {
  constructor(arg0) {
    visible = global.visible;
    ({ style, children } = global);
    tmp = jsx;
    items = [, ,];
    items[0] = closure_13().container;
    num = 0;
    tmp2 = View;
    if (visible) {
      tmp3 = closure_10;
      tmp4 = closure_9;
      num = closure_10 + closure_9;
    }
    obj = { height: num, marginTop: null, marginBottom: null };
    num2 = 0;
    if (visible) {
      tmp5 = closure_9;
      tmp6 = closure_8;
      num3 = -1;
      num2 = -1 * (closure_9 - closure_8);
    }
    obj.marginTop = num2;
    num4 = 0;
    if (visible) {
      tmp7 = closure_8;
      num5 = 2;
      num4 = 2 * closure_8;
    }
    obj1 = { style: items, children: null };
    obj.marginBottom = num4;
    items[1] = obj;
    items[2] = style;
    obj4 = {
      horizontal: true,
      keyboardShouldPersistTaps: "always",
      showsHorizontalScrollIndicator: false,
      accessibilityRole: "list",
      accessibilityLabel: null,
      children: null,
    };
    intl = closure_0(closure_2[16]).intl;
    obj4.accessibilityLabel = intl.string(closure_0(closure_2[16]).t.RhtzFe);
    obj4.children = children;
    obj1.children = tmp(CustomScrollView, obj4);
    return tmp(tmp2, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(5384).DraftType;
const ImageCarouselConstants = fn(10288);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4845);
let obj = {
  container: { width: "100%" },
  pressableContainer: { marginHorizontal: 4 },
  tileContainer: {
    position: "relative",
    minWidth: 60,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    overflow: "hidden",
    borderRadius: nativeDefault.radii.md - 1,
  },
  decorationsContainer: null,
  highlightedTileContainer: null,
  closeButton: null,
  scrollview: null,
  closeContainer: null,
  closeButtonIcon: null,
  altTagText: null,
  iconContainer: null,
  spoilerOverlay: null,
  footerRightContainer: null,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.flexDirection = "row";
obj4.justifyContent = "space-between";
obj4.alignItems = "flex-end";
obj4.padding = 4;
obj.decorationsContainer = obj4;
let obj3 = {
  position: "relative",
  minWidth: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.md - 1,
};
obj.highlightedTileContainer = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 10,
};
const rect = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj.closeButton = rect;
obj.scrollview = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
let size = {
  height: 20,
  width: 20,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
};
obj.closeContainer = size;
let obj5 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 10,
};
obj.closeButtonIcon = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
let obj6 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj.altTagText = {
  paddingHorizontal: nativeDefault.space.PX_4,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.xs,
  textTransform: "uppercase",
};
let obj7 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.xs,
  textTransform: "uppercase",
};
obj.iconContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.spoilerOverlay = {};
const rect1 = {
  position: "absolute",
  bottom: 4,
  right: 4,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: 4,
  borderRadius: 20,
  opacity: 0.85,
};
obj.footerRightContainer = rect1;
createStyles.createStyles(obj);
const __initData = {
  code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}",
};
let obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
let obj9 = {};
size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default noop.memo((arg0) => {
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  let onRemove;
  noop = undefined;
  let tmp = null != attachments;
  if (tmp) {
    tmp = attachments.length > 0;
  }
  let items = [channelId];
  onRemove = noop.useCallback((arg0) => {
    UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.ChannelMessage);
  }, items);
  const items1 = [channelId, onRemove];
  noop = noop.useCallback((arg0, arg1) => {
    if (callback != null) {
      tmp(arg0);
    }
    const items = [arg1];
    MediaKeyboardUtils.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
  }, items1);
  if (!tmp) {
    tmp = null != headerElement;
  }
  const obj = { visible: tmp, children: null };
  const items2 = [headerElement];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) =>
      closure_2_11(Tile, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId),
    );
  }
  items2[1] = mapped;
  obj.children = items2;
  return closure_12(ImageCarouselRow, obj);
});
export const useTileEntranceAnimatedStyle = function useTileEntranceAnimatedStyle(arg0) {
  sharedValue = sharedValue(4595).useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const obj = sharedValue(4595);
  const fn = function l() {
    const obj = { opacity: null, transform: null };
    const obj3 = { duration: 300, easing: null };
    value = sharedValue.get();
    obj3.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
    const obj4 = { scale: null };
    obj4.scale = spring.withSpring(
      sharedValue.get(),
      { stiffness: 80, damping: 6, mass: 0.3 },
      "respect-motion-settings",
    );
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  const obj2 = sharedValue(4595);
  fn.__closure = {
    withTiming: sharedValue(4846).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: sharedValue(1177).STANDARD_EASING,
    withSpring: sharedValue(5464).withSpring,
  };
  fn.__workletHash = 14458898683767;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
};
export { ImageCarouselTile };
export { ImageCarouselRow };
