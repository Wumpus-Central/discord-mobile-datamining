import importAllResult from "registerAsset";
import get_ActivityIndicator from "openImagePickerUnhandled";
import map from "map";
import frozen from "frozen";
import jsxProd from "useWindowDimensions";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4146";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import createCacheKey from "createCacheKey";

let Pressable;
let c10;
let c4;
let c9;
let error;
let metroImportAll;
const require = arg1;
function NewCaption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.labelContainer, style];
  obj = { source: null, style: null };
  obj[0] = importDefault(9882);
  obj[1] = tmp.icon;
  const items1 = [callback(require(1297) /* Button */.Icon, obj), callback(require(4281) /* Text */.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label })];
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function MediaKeyboardImage(draftType) {
  let channelId;
  let disableWhenReachedLimit;
  let disabled;
  let index;
  let numItemsPerRow;
  let size;
  let totalNumItems;
  let uploadLimit;
  draftType = draftType.draftType;
  index = draftType;
  const item = draftType.item;
  numItemsPerRow = item;
  ({ index, totalNumItems, numItemsPerRow, size, channelId } = draftType);
  totalNumItems = channelId;
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  let image;
  let constants;
  ({ disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp = callback3();
  const node = item.node;
  image = node.image;
  const type = node.type;
  let obj = index(totalNumItems[12]);
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {
      upload: image.findUpload(totalNumItems, index, (id) => {
        let doesImageMatchUploadResult = outer1_0(outer1_2[13]).doesImageMatchUpload(map, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == closure_5 || closure_5.includes(id.id);
          const obj2 = closure_5;
          const tmp3 = null == closure_5 || closure_5.includes(id.id);
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
      length = image.getUploadCount(totalNumItems, index);
    }
    obj[1] = length;
    return obj;
  }, items1);
  constants = tmp5;
  let obj1 = onPressItem;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(() => ({
    onPress() {
      let obj = outer1_1(outer1_2[14]);
      obj.hideNativeMenu();
      obj = { channelId: closure_2, item: closure_1, isIncluded: closure_7 };
      callback(obj);
    },
    onLongPress() {
      let obj = outer1_1(outer1_2[14]);
      obj.hideNativeMenu();
      if (closure_4 != null) {
        obj = { channelId: null, item: null, isIncluded: null };
        obj[0] = closure_2;
        obj[1] = closure_1;
        obj[2] = closure_7;
        tmp2(obj);
      }
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
          let tmp2Result = tmp2(tmp3[17]);
          let tmp12 = null;
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            obj = { style: null, label: "GIF" };
            obj[0] = tmp.mediaKeyboardItemLabelContainer;
            tmp12 = callback(tmp2(tmp3[18]).Caption, obj);
          }
        } else {
          tmp12 = null;
        }
      }
      let tmp16 = !tmp5;
      if (!tmp5) {
        tmp16 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
        const tmp17 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      obj = { style: null, children: null };
      obj[0] = tmp.checkIconContainer;
      obj1 = { source: null, disableColor: false, color: null, style: null };
      obj1[0] = numItemsPerRow(tmp3[19]);
      obj1[2] = tmp.checkIcon.color;
      obj1[3] = tmp.checkIcon;
      obj[1] = callback(tmp2(tmp3[9]).Icon, obj1);
      const items3 = [index, numItemsPerRow, totalNumItems];
      let obj2 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      obj2[1] = stringResult;
      const obj3 = { selected: null };
      obj3[0] = tmp5;
      obj2[2] = obj3;
      obj2[3] = tmp7;
      obj2[4] = tmp8;
      obj2[5] = tmp16;
      const items4 = [tmp.imageContainer, , ];
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
        const obj = { borderTopLeftRadius: num4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, marginLeft: null };
        if (totalNumItems >= numItemsPerRow) {
          let tmp7 = tmp4 === tmp5 - 1;
        } else {
          tmp7 = tmp4 === tmp - 1;
        }
        let num7 = num3;
        if (tmp7) {
          num7 = 16;
        }
        obj[1] = num7;
        let num8 = num3;
        if (rounded === num) {
          num8 = num3;
          if (tmp4 % tmp5 == 0) {
            num8 = 16;
          }
        }
        obj[2] = num8;
        if (index === totalNumItems - 1) {
          let num9 = 16;
        } else {
          num9 = num3;
          if (tmp % tmp5 != 0) {
            num9 = num3;
          }
        }
        obj[3] = num9;
        if (index % numItemsPerRow == 0) {
          num3 = 0;
        }
        obj[4] = num3;
        return obj;
      }, items3);
      if (tmp16) {
        imageDisabled = tmp.imageDisabled;
      }
      items4[1] = imageDisabled;
      items4[2] = memo1;
      obj2[6] = items4;
      const obj4 = { resizeMode: "cover", resizeMethod: "resize", style: null, source: null, localImageSource: null };
      const items5 = [tmp.image, ];
      const obj5 = { height: null, width: null };
      obj5[0] = size;
      obj5[1] = size;
      items5[1] = obj5;
      obj4[2] = items5;
      const obj6 = { uri: null, width: null, height: null, cache: "force-cache" };
      obj6[0] = image.uri;
      obj6[1] = size;
      obj6[2] = size;
      obj4[3] = obj6;
      const obj7 = { uri: null, width: null, height: null };
      obj7[0] = image.uri;
      obj7[1] = size;
      obj7[2] = size;
      obj4[4] = obj7;
      const items6 = [callback(tmp2(tmp3[9]).ThumbnailImage, obj4), tmp12, , ];
      let tmp18Result = null;
      if (tmp5) {
        const obj8 = { style: null };
        const items7 = [tmp.selectedOverlay, ];
        const obj9 = { height: null, width: null };
        obj9[0] = size;
        obj9[1] = size;
        items7[1] = obj9;
        obj8[0] = items7;
        tmp18Result = tmp18(onLongPressItem, obj8);
      }
      items6[2] = tmp18Result;
      let tmp27 = null;
      if (tmp5) {
        tmp27 = tmp20;
      }
      items6[3] = tmp27;
      obj2[7] = items6;
      return closure_10(includedUploadIds, obj2);
    }
    const obj10 = { label: null };
    tmp2Result = tmp2(tmp3[16]);
    obj10[0] = tmp2Result.getTimeFormat(image.playableDuration);
    tmp12 = callback(NewCaption, obj10);
  }
  const intl2 = tmp2(tmp3[15]).intl;
  stringResult = intl2.string(tmp2(tmp3[15]).t.SkfkEJ);
}
function MediaKeyboardDummy(arg0) {
  let isFirstInRow;
  let size;
  ({ size, isFirstInRow } = arg0);
  const tmp = callback3();
  const items = [tmp.imageContainer, ];
  let obj = !isFirstInRow;
  if (!isFirstInRow) {
    obj = { marginLeft: 4 };
  }
  obj = { style: items, children: tmp2(tmp3, { style: items1 }) };
  items[1] = obj;
  items1 = [tmp.image, { height: size, width: size }];
  return closure_9(closure_4, obj);
}
function MediaKeyboardSpecialButton(arg0) {
  let accessibilityLabel;
  let children;
  let disabled;
  let index;
  let numItemsPerRow;
  let onPress;
  let size;
  let totalNumItems;
  ({ size, disabled, index, totalNumItems, numItemsPerRow } = arg0);
  index = undefined;
  numItemsPerRow = undefined;
  totalNumItems = undefined;
  ({ onPress, accessibilityLabel, children } = arg0);
  const tmp = callback3();
  let obj = index(totalNumItems[5]);
  const sharedValue = obj.useSharedValue(0);
  index = sharedValue;
  const tmp3 = hexToRgba();
  const backgroundColor = tmp3.backgroundColor;
  numItemsPerRow = backgroundColor;
  const pressedBackgroundColor = tmp3.pressedBackgroundColor;
  totalNumItems = pressedBackgroundColor;
  const fn = function h() {
    let obj = { backgroundColor: null };
    const obj2 = index(totalNumItems[20]);
    const items = [numItemsPerRow, totalNumItems];
    obj = { duration: 200, easing: null };
    const obj3 = index(totalNumItems[5]);
    const Easing = index(totalNumItems[5]).Easing;
    obj[1] = Easing.out(index(totalNumItems[5]).Easing.quad);
    obj[0] = obj2.withTiming(index(totalNumItems[5]).interpolateColor(index.get(), [0, 1], items), obj);
    return obj;
  };
  obj = { withTiming: index(totalNumItems[20]).withTiming, interpolateColor: index(totalNumItems[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: index(totalNumItems[5]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 15924448581794;
  fn.__initData = closure_17;
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
    children: null
  };
  const items1 = [animatedStyle, , , , , ];
  ({ imageContainer: arr2[1], specialButton: arr2[2] } = tmp);
  items1[3] = { width: size, height: size };
  items1[4] = importAllResult.useMemo(() => {
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
    const obj = { borderTopLeftRadius: num4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, marginLeft: null };
    if (totalNumItems >= numItemsPerRow) {
      let tmp7 = tmp4 === tmp5 - 1;
    } else {
      tmp7 = tmp4 === tmp - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj[1] = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (tmp4 % tmp5 == 0) {
        num8 = 16;
      }
    }
    obj[2] = num8;
    if (index === totalNumItems - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (tmp % tmp5 != 0) {
        num9 = num3;
      }
    }
    obj[3] = num9;
    if (index % numItemsPerRow == 0) {
      num3 = 0;
    }
    obj[4] = num3;
    return obj;
  }, items);
  disabled = undefined;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items1[5] = disabled;
  obj[6] = items1;
  obj[7] = children;
  return closure_9(closure_11, obj);
}
let c3 = importAllResult;
({ View: c4, Pressable } = get_ActivityIndicator);
({ ALAssetsType: error, DeviceMediaType: metroImportAll } = frozen);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = require("module_4146").createAnimatedComponent(Pressable);
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" }, image: null, imageContainer: null, labelContainer: null, mediaKeyboardItemLabelContainer: null, icon: null, checkIcon: null, checkIconContainer: null, selectedOverlay: null, specialButton: null, disabled: null, imageDisabled: null };
obj = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj[1] = obj;
obj[2] = { borderRadius: require("Themes").radii.xs, overflow: "hidden", position: "relative" };
createCacheKey = { flexDirection: "row", alignItems: "center", backgroundColor: null, borderRadius: null, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
createCacheKey[2] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.PRIMARY_700, 0.6);
createCacheKey[3] = require("Themes").radii.xs;
obj[3] = createCacheKey;
obj[4] = { right: 10 };
let obj1 = { borderRadius: require("Themes").radii.xs, overflow: "hidden", position: "relative" };
obj[5] = { width: 12, height: 12, tintColor: require("Themes").colors.WHITE, marginEnd: 4 };
let obj3 = { width: 12, height: 12, tintColor: require("Themes").colors.WHITE, marginEnd: 4 };
obj[6] = { width: 14, height: 14, color: require("Themes").colors.BACKGROUND_BRAND };
let obj5 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.WHITE, borderWidth: 1, borderColor: null };
obj5[10] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.1);
obj[7] = obj5;
let obj6 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj6.borderRadius = require("Themes").radii.xs;
obj6.backgroundColor = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.3);
obj[8] = obj6;
obj[9] = { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 };
obj[10] = { opacity: 0.4 };
obj[11] = { opacity: 0.2 };
let closure_12 = createCacheKey.createStyles(obj);
hexToRgba = { backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
hexToRgba = createCacheKey.createStyleProperties(hexToRgba);
let closure_17 = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
let obj4 = { width: 14, height: 14, color: require("Themes").colors.BACKGROUND_BRAND };
const memoResult = importAllResult.memo((arg0) => {
  let Pressable;
  let closure_10;
  let closure_3;
  let closure_4;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let importDefault;
  let items;
  let numPerRow;
  let require;
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: closure_3, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  let closure_11;
  let obj;
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  closure_11 = (importDefault(1474)().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  obj = { camera: null, allphotos: null, attach: null };
  obj = { text: require(1236) /* getSystemLocale */.t.uje3P9, onPress: handleCameraPress, Icon: require(9941) /* CameraIcon */.CameraIcon };
  obj[0] = obj;
  obj = { text: require(1236) /* getSystemLocale */.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: require(4796) /* ImageIcon */.ImageIcon };
  obj[1] = obj;
  const tmp = obj();
  obj[2] = { text: require(1236) /* getSystemLocale */.t["8Hvr3+"], onPress: handleAttachPress, Icon: require(9706) /* AttachmentIcon */.AttachmentIcon };
  let obj1 = { text: require(1236) /* getSystemLocale */.t["8Hvr3+"], onPress: handleAttachPress, Icon: require(9706) /* AttachmentIcon */.AttachmentIcon };
  return callback(closure_4, {
    style: tmp.container,
    children: items.map((type) => {
      if (null == type) {
        let obj = { size: null, isFirstInRow: null };
        obj[0] = closure_11;
        obj[1] = 0 === arg1;
        return outer1_9(outer1_15, obj, arg1);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          obj = { size: null, onPress: null, disabled: null, accessibilityLabel: null, index: null, totalNumItems: null, numItemsPerRow: null, children: null };
          obj[0] = closure_11;
          obj[1] = obj[type.type].onPress;
          obj[2] = closure_10;
          const intl = outer1_0(outer1_2[15]).intl;
          obj[3] = intl.string(obj[type.type].text);
          obj[4] = closure_4 * numPerRow + arg1;
          obj[5] = closure_5;
          obj[6] = numPerRow;
          const obj1 = { color: null, size: "lg" };
          obj1[0] = outer1_1(outer1_2[7]).colors.ICON_SUBTLE;
          obj[7] = outer1_9(obj[type.type].Icon, obj1);
          return outer1_9(outer1_18, obj, arg1);
        } else {
          obj = { channelId: null, draftType: null, index: null, totalNumItems: null, numItemsPerRow: null, item: null, includedUploadIds: null, uploadLimit: null, disableWhenReachedLimit: null, size: null, onPressItem: null, onLongPressItem: null, disabled: null };
          obj[0] = id.id;
          obj[1] = closure_1;
          obj[2] = closure_4 * numPerRow + arg1;
          obj[3] = closure_5;
          obj[4] = numPerRow;
          obj[5] = type;
          obj[6] = closure_7;
          obj[7] = closure_8;
          obj[8] = closure_9;
          obj[9] = closure_11;
          obj[10] = closure_2;
          obj[11] = closure_3;
          obj[12] = closure_10;
          return outer1_9(outer1_14, obj, arg1);
        }
      }
    })
  });
});
let result = require("map").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default memoResult;
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