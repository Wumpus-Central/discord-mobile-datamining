// === Module 10777: MediaKeyboardItem ===

// Module 10777 (MediaKeyboardItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4373 */;
import Text_Text from "Text/Text" /* 4632 */;
import timing from "timing" /* 4637 */;
import ImageIcon from "ImageIcon" /* 5168 */;
import AttachmentIcon from "AttachmentIcon" /* 10240 */;
import _modDef10526 from "module_10526" /* 10526 */;
import CameraIcon from "CameraIcon" /* 10782 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4976 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NewCaption(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = closure_12();
  const obj = { style: null, children: null };
  const items = [tmp.labelContainer, style];
  obj.style = items;
  const items1 = [React7(native.Icon, { source: _modDef10526, style: tmp.icon }), React7(Text_Text.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label })];
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
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = index(totalNumItems[12]).useStateFromStoresObject(items, () => {
    const obj = {
      upload: UploadAttachmentStore.findUpload(totalNumItems, index, (id) => {
        let doesImageMatchUploadResult = index(totalNumItems[13]).doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          const tmp3 = null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: null
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
  }, items1);
  constants = tmp5;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(() => ({
    onPress() {
      numItemsPerRow(totalNumItems[14]).hideNativeMenu();
      onPressItem({ channelId, item, isIncluded });
    },
    onLongPress() {
      numItemsPerRow(totalNumItems[14]).hideNativeMenu();
      if (onLongPressItem != null) {
        const obj2 = { channelId, item, isIncluded };
        tmp2(obj2);
      }
      const obj = numItemsPerRow(totalNumItems[14]);
    }
  }), items2);
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
          let tmp13 = null;
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            const obj3 = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp13 = closure_9(tmp2(tmp3[18]).Caption, obj3);
          }
          tmp2Result = tmp2(tmp3[17]);
        } else {
          tmp13 = null;
        }
      }
      let tmp17 = !tmp5;
      if (!tmp5) {
        tmp17 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
        const tmp18 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      const obj4 = { style: tmp.checkIconContainer, children: null };
      const obj5 = { source: numItemsPerRow(tmp3[19]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      obj4.children = closure_9(tmp2(tmp3[9]).Icon, obj5);
      const items3 = [index, numItemsPerRow, totalNumItems];
      const obj6 = { accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      const obj7 = { selected: tmp5 };
      obj6.accessibilityState = obj7;
      obj6.onPress = tmp7;
      obj6.onLongPress = tmp8;
      obj6.disabled = tmp17;
      const items4 = [tmp.imageContainer, , ];
      let imageDisabled;
      const memo1 = obj2.useMemo(() => {
        let num = 0;
        if (0 !== totalNumItems) {
          const _Math = Math;
          num = Math.floor((totalNumItems - 1) / numItemsPerRow);
        }
        let num3 = 4;
        let num4 = 4;
        const rounded = Math.floor(index / numItemsPerRow);
        if (0 === index) {
          num4 = 16;
        }
        const obj = { borderTopLeftRadius: num4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, marginLeft: null };
        if (totalNumItems >= numItemsPerRow) {
          let tmp7 = index === numItemsPerRow - 1;
        } else {
          tmp7 = index === totalNumItems - 1;
        }
        let num7 = num3;
        if (tmp7) {
          num7 = 16;
        }
        obj.borderTopRightRadius = num7;
        let num8 = num3;
        if (rounded === num) {
          num8 = num3;
          if (index % numItemsPerRow == 0) {
            num8 = 16;
          }
        }
        obj.borderBottomLeftRadius = num8;
        if (index === totalNumItems - 1) {
          let num9 = 16;
        } else {
          num9 = num3;
          if (totalNumItems % numItemsPerRow != 0) {
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
      if (tmp17) {
        imageDisabled = tmp.imageDisabled;
      }
      items4[1] = imageDisabled;
      items4[2] = memo1;
      obj6.style = items4;
      const obj8 = { resizeMode: "cover", resizeMethod: "resize", style: null, source: null, localImageSource: null };
      const items5 = [tmp.image, ];
      const size1 = { height: size, width: size };
      items5[1] = size1;
      obj8.style = items5;
      const size2 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      obj8.source = size2;
      const size3 = { uri: image.uri, width: size, height: size };
      obj8.localImageSource = size3;
      const items6 = [closure_9(tmp2(tmp3[9]).ThumbnailImage, obj8), tmp13, , ];
      let tmp19Result = null;
      if (tmp5) {
        const obj9 = { style: null };
        const items7 = [tmp.selectedOverlay, ];
        const size4 = { height: size, width: size };
        items7[1] = size4;
        obj9.style = items7;
        tmp19Result = closure_9(onLongPressItem, obj9);
      }
      items6[2] = tmp19Result;
      let tmp28 = null;
      if (tmp5) {
        tmp28 = tmp21;
      }
      items6[3] = tmp28;
      obj6.children = items6;
      return closure_10(includedUploadIds, obj6);
    }
    const obj10 = { label: tmp2(tmp3[16]).getTimeFormat(image.playableDuration) };
    tmp13 = closure_9(NewCaption, obj10);
    const tmp2Result2 = tmp2(tmp3[16]);
  }
  const intl2 = tmp2(tmp3[15]).intl;
  stringResult = intl2.string(tmp2(tmp3[15]).t.SkfkEJ);
  let obj = index(totalNumItems[12]);
  obj2 = onPressItem;
}
function MediaKeyboardDummy(arg0) {
  ({ size, isFirstInRow } = arg0);
  const tmp = closure_12();
  const items = [tmp.imageContainer, ];
  let obj = !isFirstInRow;
  if (!isFirstInRow) {
    obj = { marginLeft: 4 };
  }
  const obj2 = { style: items, children: null };
  items[1] = obj;
  const obj3 = { style: null };
  const items1 = [tmp.image, { height: size, width: size }];
  obj3.style = items1;
  obj2.children = React7(React4, obj3);
  return React7(React4, obj2);
}
function MediaKeyboardSpecialButton(arg0) {
  ({ size, disabled, index, totalNumItems, numItemsPerRow } = arg0);
  index = undefined;
  totalNumItems = undefined;
  ({ onPress, accessibilityLabel, children } = arg0);
  const tmp = closure_12();
  const sharedValue = index(totalNumItems[5]).useSharedValue(0);
  index = sharedValue;
  const tmp3 = closure_16();
  const backgroundColor = tmp3.backgroundColor;
  numItemsPerRow = backgroundColor;
  const pressedBackgroundColor = tmp3.pressedBackgroundColor;
  totalNumItems = pressedBackgroundColor;
  let obj = index(totalNumItems[5]);
  const fn = function h() {
    const obj = { backgroundColor: null };
    const obj2 = timing;
    const items = [numItemsPerRow, totalNumItems];
    const obj4 = { duration: 200, easing: null };
    const Easing = ReanimatedRexport2.Easing;
    obj4.easing = Easing.out(ReanimatedRexport2.Easing.quad);
    obj.backgroundColor = obj2.withTiming(ReanimatedRexport2.interpolateColor(index.get(), [0, 1], items), obj4);
    return obj;
  };
  let obj2 = index(totalNumItems[5]);
  fn.__closure = { withTiming: index(totalNumItems[20]).withTiming, interpolateColor: index(totalNumItems[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: index(totalNumItems[5]).Easing };
  fn.__workletHash = 15924448581794;
  fn.__initData = __initData;
  let items = [index, numItemsPerRow, totalNumItems];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = {
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
    children: null
  };
  const items1 = [animatedStyle, , , , , ];
  ({ imageContainer: arr2[1], specialButton: arr2[2] } = tmp);
  items1[3] = { width: size, height: size };
  items1[4] = noop.useMemo(() => {
    let num = 0;
    if (0 !== totalNumItems) {
      const _Math = Math;
      num = Math.floor((totalNumItems - 1) / numItemsPerRow);
    }
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(index / numItemsPerRow);
    if (0 === index) {
      num4 = 16;
    }
    const obj = { borderTopLeftRadius: num4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, marginLeft: null };
    if (totalNumItems >= numItemsPerRow) {
      let tmp7 = index === numItemsPerRow - 1;
    } else {
      tmp7 = index === totalNumItems - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj.borderTopRightRadius = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (index % numItemsPerRow == 0) {
        num8 = 16;
      }
    }
    obj.borderBottomLeftRadius = num8;
    if (index === totalNumItems - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (totalNumItems % numItemsPerRow != 0) {
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
  let disabled1;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items1[5] = disabled1;
  obj4.style = items1;
  obj4.children = children;
  return closure_9(closure_11, obj4);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const DeviceConstants = fn(10778);
({ ALAssetsType: closure_7, DeviceMediaType: closure_8 } = DeviceConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = fn(4636);
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" }, image: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, imageContainer: null, labelContainer: null, mediaKeyboardItemLabelContainer: null, icon: null, checkIcon: null, checkIconContainer: null, selectedOverlay: null, specialButton: null, disabled: null, imageDisabled: null };
let obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.imageContainer = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
const rect = { flexDirection: "row", alignItems: "center", backgroundColor: null, borderRadius: null, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
let ColorUtils = fn(4486);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.6);
rect.borderRadius = nativeDefault.radii.xs;
obj.labelContainer = rect;
obj.mediaKeyboardItemLabelContainer = { right: 10 };
let size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE, marginEnd: 4 };
obj.icon = size;
let size1 = { width: 14, height: 14, color: nativeDefault.colors.BACKGROUND_BRAND };
obj.checkIcon = size1;
let size2 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE, borderWidth: 1, borderColor: null };
ColorUtils = fn(4486);
size2.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.1);
obj.checkIconContainer = size2;
let obj5 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj5.borderRadius = nativeDefault.radii.xs;
ColorUtils = fn(4486);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3);
obj.selectedOverlay = obj5;
obj.specialButton = { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 };
obj.disabled = { opacity: 0.4 };
obj.imageDisabled = { opacity: 0.2 };
let closure_12 = createStyles.createStyles(obj);
createStyles = fn(4636);
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
let closure_16 = createStyles.createStyleProperties({ backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE });
const __initData = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
let obj6 = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default noop.memo((arg0) => {
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: noop, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  const size = (useWindowDimensionsDefault().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  let obj = { camera: null, allphotos: null, attach: null };
  const tmp = obj();
  obj.camera = { text: util.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  let obj2 = { text: util.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  obj.allphotos = { text: util.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  let obj3 = { text: util.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  obj.attach = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  let obj4 = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  return disableWhenReachedLimit(closure_4, {
    style: tmp.container,
    children: items.map((type, index) => {
      if (null == type) {
        const obj2 = { size, isFirstInRow: 0 === index };
        return React7(MediaKeyboardDummy, obj2, index);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          const obj3 = { size, onPress: obj[type.type].onPress, disabled, accessibilityLabel: null, index: null, totalNumItems: null, numItemsPerRow: null, children: null };
          const intl = util.intl;
          obj3.accessibilityLabel = intl.string(obj[type.type].text);
          obj3.index = closure_1_4 * numPerRow + index;
          obj3.totalNumItems = totalNumItems;
          obj3.numItemsPerRow = numPerRow;
          const obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
          obj3.children = React7(obj[type.type].Icon, obj4);
          return React7(MediaKeyboardSpecialButton, obj3, index);
        } else {
          obj = { channelId: id.id, draftType, index: closure_1_4 * numPerRow + index, totalNumItems, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size, onPressItem, onLongPressItem, disabled };
          return React7(MediaKeyboardImage, obj, index);
        }
      }
    })
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