// discord_app/components_native/chat/ImageCarousel.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import ReanimatedRexportDefault from "../../modules/reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../design/animation/reanimated/spring/spring.tsx";
import Upload from "../../lib/uploader/Upload.tsx";
import EyeIcon from "../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import VisualEffectViewThemedDefault from "../../modules/visual_effect_view/native/VisualEffectViewThemed.tsx";
import PlayIcon from "../../design/components/Icon/native/redesign/generated/PlayIcon.tsx";
import UploadAttachmentActionCreatorsDefault from "../../actions/UploadAttachmentActionCreators.tsx";
import AttachmentPreviewDefault from "../../modules/media/native/AttachmentPreview.tsx";
import showUploadPreviewActionSheetDefault from "../../modules/media_uploads/native/showUploadPreviewActionSheet.tsx";
import MediaKeyboardUtils from "../../modules/media_keyboard/native/MediaKeyboardUtils.tsx";
import _modDef10815 from "../../../_runtime/metro/10815__.js";
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
  flag = undefined;
  let stateFromStores;
  let callback;
  let callback1;
  let animatedStyle;
  let tmp = callback();
  const tileContainer = tmp;
  const description = upload.description;
  const id = upload.id;
  const item = upload.item;
  const isVideo = upload.isVideo;
  const isImage = upload.isImage;
  const isThumbnail = upload.isThumbnail;
  onRemove(channelId[12])(
    item.platform === onEdit(channelId[13]).UploadPlatform.REACT_NATIVE,
    "Upload must be a React Native upload item.",
  );
  if (flag) {
    flag = true === isThumbnail;
  }
  const tmp4 = onRemove(channelId[12]);
  let items = [item];
  stateFromStores = onEdit(channelId[14]).useStateFromStores(items, () => {
    upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
    flag = undefined;
    if (upload != null) {
      flag = upload.spoiler;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let items1 = [isVideo, isImage, flag];
  callback = upload.useCallback(() => {
    const width = closure_10;
    let height = closure_10;
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
  const tmp5Result = onEdit(channelId[14]);
  const sharedValue = onEdit(channelId[8]).useSharedValue(0);
  closure_129_0 = sharedValue;
  const items5 = [sharedValue, uri];
  const effect = obj2.useEffect(() => {
    const result = onEdit.set(1);
  }, items5);
  const tmp5Result3 = onEdit(channelId[8]);
  const fn = function o() {
    const obj = { opacity: null, transform: null };
    const obj3 = { duration: 300, easing: null };
    value = onEdit.get();
    obj3.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
    const obj4 = { scale: null };
    obj4.scale = spring.withSpring(onEdit.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  const tmp5Result4 = onEdit(channelId[8]);
  fn.__closure = {
    withTiming: onEdit(channelId[9]).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: onEdit(channelId[10]).STANDARD_EASING,
    withSpring: onEdit(channelId[11]).withSpring,
  };
  fn.__workletHash = 14458898683767;
  fn.__initData = callback1;
  animatedStyle = tmp5Result4.useAnimatedStyle(fn);
  const items6 = [callback, animatedStyle, description, , , , , , ,];
  ({ uri: arr7[3], filename: arr7[4] } = item);
  items6[5] = isImage;
  items6[6] = isThumbnail;
  items6[7] = isVideo;
  items6[8] = stateFromStores;
  items6[9] = tmp;
  let obj3 = { name: "remove", label: null };
  const callback4 = obj2.useCallback(() => {
    const tmp = callback();
    ({ width, height } = tmp);
    const obj = { style: null, children: null };
    const items = [tileContainer.tileContainer, { width, height }, animatedStyle];
    obj.style = items;
    const size = {
      uri: item.uri,
      isImage,
      isVideo,
      width,
      height,
      maxFileWidth: tmp.maxWidth,
      fileName: item.filename,
      borderRadius: nativeDefault.radii.md,
    };
    const items1 = [closure_2_11(AttachmentPreviewDefault, size), ,];
    let tmp6Result = null;
    if (isThumbnail) {
      const obj2 = { style: tileContainer.footerRightContainer, children: null };
      const obj3 = { source: _modDef10815, size: native.Icon.Sizes.SMALL_14 };
      obj2.children = closure_2_11(native.Icon, obj3);
      tmp6Result = closure_2_11(React4, obj2);
    }
    items1[1] = tmp6Result;
    const obj4 = { style: tileContainer.decorationsContainer, children: null };
    let tmp6Result5 = null;
    if (stateFromStores) {
      const obj5 = { style: tileContainer.spoilerOverlay };
      tmp6Result5 = closure_2_11(VisualEffectViewThemedDefault, obj5);
    }
    const items2 = [tmp6Result5, ,];
    let tmp6Result6 = null;
    if (null != description) {
      let length;
      if (description != null) {
        length = description.length;
      }
      tmp6Result6 = null;
      if (length > 0) {
        const obj6 = {
          variant: "text-xs/medium",
          color: "text-overlay-light",
          allowFontScaling: false,
          style: tileContainer.altTagText,
          children: null,
        };
        const intl = util.intl;
        obj6.children = intl.string(util.t.QEW81z);
        tmp6Result6 = closure_2_11(Text_Text.Text, obj6);
      }
    }
    const items3 = [tmp6Result6];
    let tmp6Result7 = null;
    if (isVideo) {
      const obj7 = {
        style: tileContainer.iconContainer,
        children: closure_2_11(PlayIcon.PlayIcon, { size: "xxs", color: "white" }),
      };
      tmp6Result7 = closure_2_11(React4, obj7);
    }
    items3[1] = tmp6Result7;
    items2[1] = closure_2_12(React4, { children: items3 });
    let tmp6Result8 = null;
    if (stateFromStores) {
      const obj8 = {
        style: tileContainer.iconContainer,
        children: closure_2_11(EyeIcon.EyeIcon, { size: "xxs", color: "white" }),
      };
      tmp6Result8 = closure_2_11(React4, obj8);
    }
    items2[2] = tmp6Result8;
    obj4.children = items2;
    items1[2] = closure_2_12(React4, obj4);
    obj.children = items1;
    return closure_2_12(ReanimatedRexportDefault.View, obj);
  }, items6);
  let intl = tmp5(tmp3[20]).intl;
  obj3.label = intl.string(onEdit(channelId[20]).t.kFwAsa);
  const items7 = [obj3];
  const intl2 = tmp5(tmp3[20]).intl;
  let str = item.filename;
  if (str == null) {
    str = "";
  }
  let obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: intl2.formatToPlainString(onEdit(channelId[20]).t.MJHFt9, { name: str }),
    accessibilityHint: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    disabled: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl3 = tmp5(tmp3[20]).intl;
  obj4.accessibilityHint = intl3.string(onEdit(channelId[20]).t.QtJ1c5);
  obj4.accessibilityActions = items7;
  obj4.onAccessibilityAction = callback3;
  let tmp19 = !isImage;
  if (!isImage) {
    tmp19 = !isVideo;
  }
  obj4.disabled = tmp19;
  obj4.onPress = callback2;
  const items8 = [tmp.pressableContainer];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items8[1] = flag;
  obj4.style = items8;
  obj4.children = callback4();
  const items9 = [flag(onEdit(channelId[23]).PressableOpacity, obj4)];
  const intl4 = tmp5(tmp3[20]).intl;
  let str2 = item.filename;
  if (str2 == null) {
    str2 = "";
  }
  let obj5 = { children: null };
  let obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: intl4.formatToPlainString(onEdit(channelId[20]).t.FxKgb3, { name: str2 }),
    style: tmp.closeButton,
    onPress: callback1,
    hitSlop: { top: 4, bottom: 4, left: 4, right: 4 },
    children: null,
  };
  let obj7 = { style: null, children: null };
  const items10 = [tmp.closeContainer, animatedStyle];
  obj7.style = items10;
  let obj = {
    withTiming: onEdit(channelId[9]).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: onEdit(channelId[10]).STANDARD_EASING,
    withSpring: onEdit(channelId[11]).withSpring,
  };
  const tmp16 = stateFromStores;
  const tmp17 = tileContainer;
  obj7.children = flag(onEdit(channelId[10]).Icon, {
    source: onRemove(channelId[24]),
    size: onEdit(channelId[10]).Icon.Sizes.MEDIUM,
    color: onRemove(channelId[7]).unsafe_rawColors.PRIMARY_500,
    style: tmp.closeButtonIcon,
  });
  obj6.children = flag(onRemove(channelId[8]).View, obj7);
  items9[1] = flag(onEdit(channelId[23]).PressableOpacity, obj6);
  obj5.children = items9;
  return tmp16(tmp17, obj5);
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
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(5200).DraftType;
const ImageCarouselConstants = fn(10095);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4836);
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
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}",
};
let obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
const obj9 = {};
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
  let tmp2 = null != attachments;
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
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
  const items2 = [closure_13().container];
  let num2 = 0;
  if (tmp2) {
    num2 = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  }
  const obj = { height: num2, marginTop: null, marginBottom: null };
  let num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  obj.marginTop = num3;
  let num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  const obj2 = { style: items2, children: null };
  obj.marginBottom = num5;
  items2[1] = obj;
  const obj3 = {
    horizontal: true,
    keyboardShouldPersistTaps: "always",
    showsHorizontalScrollIndicator: false,
    accessibilityRole: "list",
    accessibilityLabel: null,
    children: null,
  };
  const intl = channelId(onRemove[20]).intl;
  obj3.accessibilityLabel = intl.string(channelId(onRemove[20]).t.RhtzFe);
  const items3 = [headerElement];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) =>
      closure_2_11(Tile, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId),
    );
  }
  items3[1] = mapped;
  obj3.children = items3;
  obj2.children = closure_12(CustomScrollView, obj3);
  return closure_11(closure_4, obj2);
});
export const useTileEntranceAnimatedStyle = function useTileEntranceAnimatedStyle(arg0) {
  sharedValue = sharedValue(4566).useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = noop.useEffect(() => {
    const result = onEdit.set(1);
  }, items);
  const obj = sharedValue(4566);
  const fn = function o() {
    const obj = { opacity: null, transform: null };
    const obj3 = { duration: 300, easing: null };
    value = onEdit.get();
    obj3.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
    const obj4 = { scale: null };
    obj4.scale = spring.withSpring(onEdit.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  const obj2 = sharedValue(4566);
  fn.__closure = {
    withTiming: sharedValue(4837).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: sharedValue(1177).STANDARD_EASING,
    withSpring: sharedValue(5280).withSpring,
  };
  fn.__workletHash = 14458898683767;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
};
