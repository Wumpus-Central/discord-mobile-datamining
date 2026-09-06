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
import _modDef11245 from "../../../_runtime/metro/11245__.js";
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
  let tmp5Result = tmp5(tmp3[14]);
  let items = [item];
  stateFromStores = tmp5Result.useStateFromStores(items, () => {
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
  let obj1 = upload;
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
  tmp5Result = tmp5(tmp3[8]);
  const sharedValue = tmp5Result.useSharedValue(0);
  closure_129_0 = sharedValue;
  const items5 = [sharedValue, uri];
  const effect = obj1.useEffect(() => {
    const result = onEdit.set(1);
  }, items5);
  const tmp4 = onRemove(channelId[12]);
  const fn = function o() {
    let obj = { opacity: null, transform: null };
    obj = { duration: 300, easing: null };
    value = onEdit.get();
    obj.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj, "respect-motion-settings");
    obj = { scale: null };
    obj.scale = spring.withSpring(onEdit.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  let obj = {
    withTiming: tmp5(tmp3[9]).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: tmp5(tmp3[10]).STANDARD_EASING,
    withSpring: tmp5(tmp3[11]).withSpring,
  };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = callback1;
  animatedStyle = onEdit(channelId[8]).useAnimatedStyle(fn);
  const items6 = [callback, animatedStyle, description, , , , , , ,];
  ({ uri: arr7[3], filename: arr7[4] } = item);
  items6[5] = isImage;
  items6[6] = isThumbnail;
  items6[7] = isVideo;
  items6[8] = stateFromStores;
  items6[9] = tmp;
  obj = { name: "remove", label: null };
  const callback4 = obj1.useCallback(() => {
    const tmp = callback();
    ({ width, height } = tmp);
    let obj = { style: null, children: null };
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
      obj = { style: tileContainer.footerRightContainer, children: null };
      obj = { source: _modDef11245, size: native.Icon.Sizes.SMALL_14 };
      obj.children = closure_2_11(native.Icon, obj);
      tmp6Result = closure_2_11(React4, obj);
    }
    items1[1] = tmp6Result;
    const obj1 = { style: tileContainer.decorationsContainer, children: null };
    tmp6Result = null;
    if (stateFromStores) {
      const obj2 = { style: tileContainer.spoilerOverlay };
      tmp6Result = closure_2_11(VisualEffectViewThemedDefault, obj2);
    }
    const items2 = [tmp6Result, ,];
    let tmp6Result1 = null;
    if (null != description) {
      let length;
      if (description != null) {
        length = description.length;
      }
      tmp6Result1 = null;
      if (length > 0) {
        const obj3 = {
          variant: "text-xs/medium",
          color: "text-overlay-light",
          allowFontScaling: false,
          style: tileContainer.altTagText,
          children: null,
        };
        const intl = util.intl;
        obj3.children = intl.string(util.t.QEW81z);
        tmp6Result1 = closure_2_11(Text_Text.Text, obj3);
      }
    }
    const items3 = [tmp6Result1];
    let tmp6Result2 = null;
    if (isVideo) {
      const obj4 = {
        style: tileContainer.iconContainer,
        children: closure_2_11(PlayIcon.PlayIcon, { size: "xxs", color: "white" }),
      };
      tmp6Result2 = closure_2_11(React4, obj4);
    }
    items3[1] = tmp6Result2;
    items2[1] = closure_2_12(React4, { children: items3 });
    let tmp6Result3 = null;
    if (stateFromStores) {
      const obj5 = {
        style: tileContainer.iconContainer,
        children: closure_2_11(EyeIcon.EyeIcon, { size: "xxs", color: "white" }),
      };
      tmp6Result3 = closure_2_11(React4, obj5);
    }
    items2[2] = tmp6Result3;
    obj1.children = items2;
    items1[2] = closure_2_12(React4, obj1);
    obj.children = items1;
    return closure_2_12(ReanimatedRexportDefault.View, obj);
  }, items6);
  let intl = tmp5(tmp3[20]).intl;
  obj.label = intl.string(onEdit(channelId[20]).t.kFwAsa);
  const items7 = [obj];
  const intl2 = tmp5(tmp3[20]).intl;
  let str = item.filename;
  if (str == null) {
    str = "";
  }
  obj1 = {
    accessibilityRole: "button",
    accessibilityLabel: intl2.formatToPlainString(tmp5(tmp3[20]).t.MJHFt9, { name: str }),
    accessibilityHint: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    disabled: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl3 = tmp5(tmp3[20]).intl;
  obj1.accessibilityHint = intl3.string(onEdit(channelId[20]).t.QtJ1c5);
  obj1.accessibilityActions = items7;
  obj1.onAccessibilityAction = callback3;
  let tmp19 = !isImage;
  if (!isImage) {
    tmp19 = !isVideo;
  }
  obj1.disabled = tmp19;
  obj1.onPress = callback2;
  const items8 = [tmp.pressableContainer];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items8[1] = flag;
  obj1.style = items8;
  obj1.children = callback4();
  const items9 = [flag(onEdit(channelId[23]).PressableOpacity, obj1)];
  const intl4 = tmp5(tmp3[20]).intl;
  let str2 = item.filename;
  if (str2 == null) {
    str2 = "";
  }
  let obj2 = { children: null };
  let obj3 = {
    accessibilityRole: "button",
    accessibilityLabel: intl4.formatToPlainString(onEdit(channelId[20]).t.FxKgb3, { name: str2 }),
    style: tmp.closeButton,
    onPress: callback1,
    hitSlop: { top: 4, bottom: 4, left: 4, right: 4 },
    children: null,
  };
  let obj4 = { style: null, children: null };
  const items10 = [tmp.closeContainer, animatedStyle];
  obj4.style = items10;
  const tmp16 = stateFromStores;
  const tmp17 = tileContainer;
  const tmp5Result1 = onEdit(channelId[8]);
  obj4.children = flag(onEdit(channelId[10]).Icon, {
    source: onRemove(channelId[24]),
    size: onEdit(channelId[10]).Icon.Sizes.MEDIUM,
    color: onRemove(channelId[7]).unsafe_rawColors.PRIMARY_500,
    style: tmp.closeButtonIcon,
  });
  obj3.children = flag(onRemove(channelId[8]).View, obj4);
  items9[1] = flag(onEdit(channelId[23]).PressableOpacity, obj3);
  obj2.children = items9;
  return tmp16(tmp17, obj2);
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
const DraftType = fn(4901).DraftType;
const ImageCarouselConstants = fn(10632);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let obj = {
  container: { width: "100%" },
  pressableContainer: { marginHorizontal: 4 },
  tileContainer: null,
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
obj = {
  position: "relative",
  minWidth: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.md - 1,
};
obj.tileContainer = obj;
const createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flex = 1;
createStyles.flexDirection = "row";
createStyles.justifyContent = "space-between";
createStyles.alignItems = "flex-end";
createStyles.padding = 4;
obj.decorationsContainer = createStyles;
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
let obj2 = {
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
let obj3 = {
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
let obj4 = {
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
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
const obj6 = {};
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
  let obj = { height: num2, marginTop: null, marginBottom: null };
  let num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  obj.marginTop = num3;
  let num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  obj = { style: items2, children: null, marginBottom: num5 };
  items2[1] = obj;
  obj = {
    horizontal: true,
    keyboardShouldPersistTaps: "always",
    showsHorizontalScrollIndicator: false,
    accessibilityRole: "list",
    accessibilityLabel: null,
    children: null,
  };
  const intl = channelId(onRemove[20]).intl;
  obj.accessibilityLabel = intl.string(channelId(onRemove[20]).t.RhtzFe);
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
  obj.children = items3;
  obj.children = closure_12(CustomScrollView, obj);
  return closure_11(closure_4, obj);
});
export const useTileEntranceAnimatedStyle = function useTileEntranceAnimatedStyle(arg0) {
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = noop.useEffect(() => {
    const result = onEdit.set(1);
  }, items);
  const fn = function o() {
    let obj = { opacity: null, transform: null };
    obj = { duration: 300, easing: null };
    value = onEdit.get();
    obj.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj, "respect-motion-settings");
    obj = { scale: null };
    obj.scale = spring.withSpring(onEdit.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = {
    withTiming: sharedValue(4561).withTiming,
    animatedStylePropValue: sharedValue,
    STANDARD_EASING: sharedValue(1178).STANDARD_EASING,
    withSpring: sharedValue(4974).withSpring,
  };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = __initData;
  return sharedValue(4296).useAnimatedStyle(fn);
};
