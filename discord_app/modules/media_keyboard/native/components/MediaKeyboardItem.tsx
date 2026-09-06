// discord_app/modules/media_keyboard/native/components/MediaKeyboardItem.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import _modDef10397 from "../../../../../_runtime/metro/10397__.js";
import CameraIcon from "../../../../design/components/Icon/native/redesign/generated/CameraIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NewCaption(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = closure_12();
  let obj = { style: null, children: null };
  const items = [tmp.labelContainer, style];
  obj.style = items;
  obj = { source: _modDef10397, style: tmp.icon };
  const items1 = [
    React7(native.Icon, obj),
    React7(Text_Text.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label }),
  ];
  obj.children = items1;
  return closure_1_10(React4, obj);
}
function MediaKeyboardImage(draftType) {
  draftType = draftType.draftType;
  index = draftType;
  const item = draftType.item;
  numItemsPerRow = item;
  ({ index, totalNumItems, numItemsPerRow, size, channelId } = draftType);
  totalNumItems = channelId;
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  ({ disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp = closure_12();
  const node = item.node;
  const image = node.image;
  const type = node.type;
  let obj = index(totalNumItems[12]);
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      const obj = {
        upload: UploadAttachmentStore.findUpload(totalNumItems, index, (id) => {
          let doesImageMatchUploadResult = index(totalNumItems[13]).doesImageMatchUpload(image, id);
          if (doesImageMatchUploadResult) {
            doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
            const tmp3 = null == includedUploadIds || includedUploadIds.includes(id.id);
          }
          return doesImageMatchUploadResult;
        }),
        uploadCount: null,
      };
      let length;
      if (includedUploadIds != null) {
        length = includedUploadIds.length;
      }
      if (length == null) {
        length = UploadAttachmentStore.getUploadCount(totalNumItems, index);
      }
      obj.uploadCount = length;
      return obj;
    },
    items1,
  );
  constants = tmp5;
  let obj1 = onPressItem;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(
    () => ({
      onPress() {
        let obj = numItemsPerRow(totalNumItems[14]);
        obj.hideNativeMenu();
        obj = { channelId, item, isIncluded };
        onPressItem(obj);
      },
      onLongPress() {
        let obj = numItemsPerRow(totalNumItems[14]);
        obj.hideNativeMenu();
        if (onLongPressItem != null) {
          obj = { channelId, item, isIncluded };
          tmp2(obj);
        }
      },
    }),
    items2,
  );
  if (constants.PHOTO !== type) {
    if (constants2.IMAGE !== type) {
      if (tmp9.VIDEO === type) {
        const intl = tmp2(tmp3[15]).intl;
        let stringResult = intl.string(tmp2(tmp3[15]).t.FlNoSV);
      }
    }
    if (tmp9.VIDEO !== type) {
      if (constants2.VIDEO !== type) {
        if (tmp9.PHOTO === type) {
          let tmp2Result = tmp2(tmp3[17]);
          let tmp12 = null;
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            obj = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp12 = closure_9(tmp2(tmp3[18]).Caption, obj);
          }
        } else {
          tmp12 = null;
        }
      }
      let tmp16 = !tmp5;
      if (!tmp5) {
        tmp16 = (stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit) || disabled;
        const tmp17 = (stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit) || disabled;
      }
      obj = { style: tmp.checkIconContainer, children: null };
      obj1 = {
        source: numItemsPerRow(tmp3[19]),
        disableColor: false,
        color: tmp.checkIcon.color,
        style: tmp.checkIcon,
      };
      obj.children = closure_9(tmp2(tmp3[9]).Icon, obj1);
      const items3 = [index, numItemsPerRow, totalNumItems];
      let obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: null,
        onPress: null,
        onLongPress: null,
        disabled: null,
        style: null,
        children: null,
      };
      const obj3 = { selected: tmp5 };
      obj2.accessibilityState = obj3;
      obj2.onPress = tmp7;
      obj2.onLongPress = tmp8;
      obj2.disabled = tmp16;
      const items4 = [tmp.imageContainer, ,];
      let imageDisabled;
      const memo1 = obj1.useMemo(() => {
        let num = 0;
        if (0 !== totalNumItems) {
          const _Math = Math;
          num = Math.floor((tmp - 1) / numItemsPerRow);
        }
        let num3 = 4;
        let num4 = 4;
        const rounded = Math.floor(index / numItemsPerRow);
        if (0 === index) {
          num4 = 16;
        }
        const obj = {
          borderTopLeftRadius: num4,
          borderTopRightRadius: null,
          borderBottomLeftRadius: null,
          borderBottomRightRadius: null,
          marginLeft: null,
        };
        if (totalNumItems >= numItemsPerRow) {
          let tmp7 = tmp4 === tmp5 - 1;
        } else {
          tmp7 = tmp4 === tmp - 1;
        }
        let num7 = num3;
        if (tmp7) {
          num7 = 16;
        }
        obj.borderTopRightRadius = num7;
        let num8 = num3;
        if (rounded === num) {
          num8 = num3;
          if (tmp4 % tmp5 == 0) {
            num8 = 16;
          }
        }
        obj.borderBottomLeftRadius = num8;
        if (index === totalNumItems - 1) {
          let num9 = 16;
        } else {
          num9 = num3;
          if (tmp % tmp5 != 0) {
            num9 = num3;
          }
        }
        obj.borderBottomRightRadius = num9;
        if (index % numItemsPerRow == 0) {
          num3 = 0;
        }
        obj.marginLeft = num3;
        return obj;
      }, items3);
      if (tmp16) {
        imageDisabled = tmp.imageDisabled;
      }
      items4[1] = imageDisabled;
      items4[2] = memo1;
      obj2.style = items4;
      const obj4 = { resizeMode: "cover", resizeMethod: "resize", style: null, source: null, localImageSource: null };
      const items5 = [tmp.image];
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      items5[1] = size;
      obj4.style = items5;
      const size1 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      obj4.source = size1;
      const size2 = { uri: image.uri, width: size, height: size };
      obj4.localImageSource = size2;
      const items6 = [closure_9(tmp2(tmp3[9]).ThumbnailImage, obj4), tmp12, ,];
      let tmp18Result = null;
      if (tmp5) {
        const obj5 = { style: null };
        const items7 = [tmp.selectedOverlay];
        const size3 = { height: size, width: size };
        items7[1] = size3;
        obj5.style = items7;
        tmp18Result = tmp18(onLongPressItem, obj5);
      }
      items6[2] = tmp18Result;
      let tmp27 = null;
      if (tmp5) {
        tmp27 = tmp20;
      }
      items6[3] = tmp27;
      obj2.children = items6;
      return closure_10(includedUploadIds, obj2);
    }
    const obj6 = { label: null };
    tmp2Result = tmp2(tmp3[16]);
    obj6.label = tmp2Result.getTimeFormat(image.playableDuration);
    tmp12 = closure_9(NewCaption, obj6);
  }
  const intl2 = tmp2(tmp3[15]).intl;
  stringResult = intl2.string(tmp2(tmp3[15]).t.SkfkEJ);
}
function MediaKeyboardDummy(arg0) {
  ({ size, isFirstInRow } = arg0);
  const tmp = closure_12();
  const items = [tmp.imageContainer];
  let obj = !isFirstInRow;
  if (!isFirstInRow) {
    obj = { marginLeft: 4 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  obj = { style: null };
  const items1 = [tmp.image, { height: size, width: size }];
  obj.style = items1;
  obj.children = React7(React4, obj);
  return React7(React4, obj);
}
function MediaKeyboardSpecialButton(arg0) {
  ({ size, disabled, index, totalNumItems, numItemsPerRow } = arg0);
  index = undefined;
  totalNumItems = undefined;
  ({ onPress, accessibilityLabel, children } = arg0);
  const tmp = closure_12();
  let obj = index(totalNumItems[5]);
  const sharedValue = obj.useSharedValue(0);
  index = sharedValue;
  const tmp3 = closure_16();
  const backgroundColor = tmp3.backgroundColor;
  numItemsPerRow = backgroundColor;
  const pressedBackgroundColor = tmp3.pressedBackgroundColor;
  totalNumItems = pressedBackgroundColor;
  const fn = function h() {
    let obj = { backgroundColor: null };
    const obj2 = timing;
    const items = [numItemsPerRow, totalNumItems];
    obj = { duration: 200, easing: null };
    const Easing = ReanimatedRexport2.Easing;
    obj.easing = Easing.out(ReanimatedRexport2.Easing.quad);
    obj.backgroundColor = obj2.withTiming(ReanimatedRexport2.interpolateColor(index.get(), [0, 1], items), obj);
    return obj;
  };
  obj = {
    withTiming: index(totalNumItems[20]).withTiming,
    interpolateColor: index(totalNumItems[5]).interpolateColor,
    pressed: sharedValue,
    backgroundColor,
    pressedBackgroundColor,
    Easing: index(totalNumItems[5]).Easing,
  };
  fn.__closure = obj;
  fn.__workletHash = 15924448581794;
  fn.__initData = __initData;
  let items = [index, numItemsPerRow, totalNumItems];
  const animatedStyle = index(totalNumItems[5]).useAnimatedStyle(fn);
  obj = {
    disabled,
    accessibilityRole: "button",
    accessibilityLabel,
    onPressIn() {
      const result = index.set(1);
    },
    onPressOut() {
      const result = index.set(0);
    },
    onPress,
    style: null,
    children: null,
  };
  const items1 = [animatedStyle, , , , ,];
  ({ imageContainer: arr2[1], specialButton: arr2[2] } = tmp);
  items1[3] = { width: size, height: size };
  items1[4] = noop.useMemo(() => {
    let num = 0;
    if (0 !== totalNumItems) {
      const _Math = Math;
      num = Math.floor((tmp - 1) / numItemsPerRow);
    }
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(index / numItemsPerRow);
    if (0 === index) {
      num4 = 16;
    }
    const obj = {
      borderTopLeftRadius: num4,
      borderTopRightRadius: null,
      borderBottomLeftRadius: null,
      borderBottomRightRadius: null,
      marginLeft: null,
    };
    if (totalNumItems >= numItemsPerRow) {
      let tmp7 = tmp4 === tmp5 - 1;
    } else {
      tmp7 = tmp4 === tmp - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj.borderTopRightRadius = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (tmp4 % tmp5 == 0) {
        num8 = 16;
      }
    }
    obj.borderBottomLeftRadius = num8;
    if (index === totalNumItems - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (tmp % tmp5 != 0) {
        num9 = num3;
      }
    }
    obj.borderBottomRightRadius = num9;
    if (index % numItemsPerRow == 0) {
      num3 = 0;
    }
    obj.marginLeft = num3;
    return obj;
  }, items);
  disabled = undefined;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items1[5] = disabled;
  obj.style = items1;
  obj.children = children;
  return closure_9(closure_11, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const DeviceConstants = fn(10649);
({ ALAssetsType: closure_7, DeviceMediaType: closure_8 } = DeviceConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(Pressable);
fn(4560);
let obj = {
  container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" },
  image: null,
  imageContainer: null,
  labelContainer: null,
  mediaKeyboardItemLabelContainer: null,
  icon: null,
  checkIcon: null,
  checkIconContainer: null,
  selectedOverlay: null,
  specialButton: null,
  disabled: null,
  imageDisabled: null,
};
obj = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.image = obj;
obj.imageContainer = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
const rect = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: null,
  borderRadius: null,
  paddingHorizontal: 5,
  paddingVertical: 4,
  position: "absolute",
  left: 8,
  bottom: 8,
};
let ColorUtils = fn(4409);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.6);
rect.borderRadius = nativeDefault.radii.xs;
obj.labelContainer = rect;
obj.mediaKeyboardItemLabelContainer = { right: 10 };
let size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE, marginEnd: 4 };
obj.icon = size;
let size1 = { width: 14, height: 14, color: nativeDefault.colors.BACKGROUND_BRAND };
obj.checkIcon = size1;
let size2 = {
  width: 24,
  height: 24,
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  right: 6,
  top: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.WHITE,
  borderWidth: 1,
  borderColor: null,
};
ColorUtils = fn(4409);
size2.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.1);
obj.checkIconContainer = size2;
let createStyles = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
createStyles.borderRadius = nativeDefault.radii.xs;
ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3);
obj.selectedOverlay = createStyles;
obj.specialButton = { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 };
obj.disabled = { opacity: 0.4 };
obj.imageDisabled = { opacity: 0.2 };
let closure_12 = createStyles.createStyles(obj);
createStyles = fn(4560);
let obj1 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
let closure_16 = createStyles.createStyleProperties({
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
});
const __initData = {
  code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}",
};
let obj3 = {
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default noop.memo((arg0) => {
  ({
    items,
    channel: require,
    draftType: importDefault,
    onPressItem: dependencyMap,
    onLongPressItem: noop,
    rowIndex: closure_4,
    totalNumItems: Pressable,
    numPerRow,
  } = arg0);
  ({
    includedUploadIds: closure_7,
    uploadLimit: closure_8,
    disableWhenReachedLimit: closure_9,
    disabled: closure_10,
  } = arg0);
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  const size = (useWindowDimensionsDefault().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  let allphotos = { camera: null, allphotos: null, attach: null };
  allphotos = { text: util.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  allphotos.camera = allphotos;
  allphotos = { text: util.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  allphotos.allphotos = allphotos;
  const tmp = allphotos();
  allphotos.attach = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  let obj1 = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  return disableWhenReachedLimit(closure_4, {
    style: tmp.container,
    children: items.map((type, index) => {
      if (null == type) {
        obj = { size, isFirstInRow: 0 === index };
        return React7(MediaKeyboardDummy, obj, index);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          obj = {
            size,
            onPress: null,
            disabled: null,
            accessibilityLabel: null,
            index: null,
            totalNumItems: null,
            numItemsPerRow: null,
            children: null,
          };
          obj.onPress = obj[type.type].onPress;
          obj.disabled = disabled;
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(obj[type.type].text);
          obj.index = closure_1_4 * numPerRow + index;
          obj.totalNumItems = totalNumItems;
          obj.numItemsPerRow = numPerRow;
          const obj1 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
          obj.children = React7(obj[type.type].Icon, obj1);
          return React7(MediaKeyboardSpecialButton, obj, index);
        } else {
          obj = {
            channelId: id.id,
            draftType,
            index: closure_1_4 * numPerRow + index,
            totalNumItems,
            numItemsPerRow: numPerRow,
            item: type,
            includedUploadIds,
            uploadLimit,
            disableWhenReachedLimit,
            size,
            onPressItem,
            onLongPressItem,
            disabled,
          };
          return React7(MediaKeyboardImage, obj, index);
        }
      }
    }),
  });
});
export const PARENT_PADDING = 24;
export const CHILD_PADDING = 4;
export const SEPARATOR_SIZE = 4;
export const isMediaCameraNode = function isMediaCameraNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "camera" === type.type;
  }
  return tmp;
};
export const isAttachFilesNode = function isAttachFilesNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "attach" === type.type;
  }
  return tmp;
};
export const isViewAllPhotosNode = function isViewAllPhotosNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "allphotos" === type.type;
  }
  return tmp;
};
export const isSpecialMediaGridNode = function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = ["allphotos", "attach", "camera"];
    hasItem = items.includes(type.type);
  }
  return hasItem;
};
