// === Module 10529: StickerPickerListRow ===

// Module 10529 (StickerPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import UserSettings from "UserSettings" /* 1935 */;
import HapticUtils from "HapticUtils" /* 4604 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4605 */;
import StickersUtils from "StickersUtils" /* 4975 */;
import LockIcon from "LockIcon" /* 5176 */;
import StickerSendability from "StickerSendability" /* 7440 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function StickerItemLockedOverlay() {
  const tmp = closure_10();
  let obj = { importantForAccessibility: "no-hide-descendants", style: tmp.lockContainer, children: null };
  obj = { style: tmp.lock };
  obj.children = React6(LockIcon.LockIcon, obj);
  return React6(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const StickerPickerConstants = fn(10401);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4636);
let createStyles = { row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE }, disabledOverlay: null, lockContainer: null, lock: null };
createStyles = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.disabledOverlay = createStyles;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let obj5 = _modDef672("#000000");
obj1.backgroundColor = _modDef672("#000000").alpha(0.2).hex();
obj1.alignItems = "center";
obj1.justifyContent = "center";
createStyles.lockContainer = obj1;
createStyles.lock = { width: 16, height: 16, tintColor: "white" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let arr;
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, isSectionNitroLocked } = stickers);
  if (isSectionNitroLocked === undefined) {
    isSectionNitroLocked = false;
  }
  ({ onPressSticker: dependencyMap, onLongPressStickerDetail: closure_3, focusedSticker: UserStore, setFocusedSticker: StickerAnimationSettings, channel: STICKER_SIZE, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(1150);
    nativeRow = obj.isAndroid();
  }
  c12 = undefined;
  function handleOnLongPressSticker(found) {
    if (null != closure_1_3) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(found);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (closure_1_5 != null) {
          closure_1_5(found);
        }
      }
    }
  }
  function rowTraits(id) {
    let obj = StickersUtils;
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let isSendableStickerResult = isSectionNitroLocked;
    if (!isSectionNitroLocked) {
      isSendableStickerResult = null == size;
    }
    if (!isSendableStickerResult) {
      isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), size);
      const tmpResult = StickerSendability;
    }
    obj = { isAnimated: obj.shouldAnimateSticker(closure_8, id.id === id), isOpaque: isSendableStickerResult, isDisabled: null == dependencyMap, isLocked: null };
    let tmp10 = closure_9;
    if (closure_9) {
      tmp10 = !isSendableStickerResult;
    }
    obj.isLocked = tmp10;
    return obj;
  }
  const tmp6 = handleOnLongPressSticker();
  rowContentPaddingVertical = tmp6;
  let AnimateStickers = stickers(1935).AnimateStickers;
  closure_8 = AnimateStickers.useSetting();
  let obj1 = stickers(9451);
  closure_9 = obj1.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
  let items = [];
  if (nativeRow) {
    let num4 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num4];
        if (undefined !== tmp12) {
          let rowTraitsResult = rowTraits(tmp12);
          let isAnimated = rowTraitsResult.isAnimated;
          obj = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null, stickerLocked: null };
          ({ id: obj5.stickerId, name: obj5.stickerName, format_type: obj5.stickerType } = tmp12);
          ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
          let obj5 = stickers(10304);
          obj.stickerUrl = obj5.getStickerAssetUrl(tmp12, STICKER_SIZE, isAnimated);
          obj.stickerAnimated = isAnimated;
          obj.stickerDisabled = isDisabled;
          obj.stickerOpaque = isOpaque;
          obj.stickerLocked = isLocked;
          arr = items.push(obj);
        } else {
          obj = { stickerId: "", stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false, stickerLocked: false };
          obj.stickerType = stickers(5349).StickerFormat.PNG;
          arr = items.push(obj);
        }
        num4 = num4 + 1;
      } while (num4 < rowSize);
    }
    try {
      obj1 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      let obj2 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
      obj1.rowData = obj2;
      obj1.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (dependencyMap != null) {
            dependencyMap(found);
          }
        }
      };
      obj1.onLongPressSticker = function onLongPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return closure_8(isSectionNitroLocked(10530), obj1);
    } catch (tmp26) {
      const obj3 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      const obj4 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj4.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj3.data = obj4;
      isSectionNitroLocked(tmp[21]).addBreadcrumb(obj3);
      throw tmp26;
    }
  } else {
    c12 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c12]) {
            let obj = { style: closure_7.stickerImage };
            items.push(closure_8(closure_1_3, obj, c12));
            return 1;
          } else {
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let isSendableStickerResult = isSectionNitroLocked;
            const obj5 = stickers(4975);
            if (!isSectionNitroLocked) {
              isSendableStickerResult = null == closure_6;
            }
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp26(7440).isSendableSticker(tmp2, currentUser.getCurrentUser(), closure_6);
              const tmp26Result = tmp26(7440);
            }
            let tmp11 = closure_9;
            if (closure_9) {
              tmp11 = !isSendableStickerResult;
            }
            obj = { accessibilityRole: "button", accessibilityLabel: tmp2.name, style: null, disabled: null, onPress: null, onLongPress: null, children: null };
            items = [closure_7.stickerImage, ];
            let disabledOverlay = tmp11;
            if (tmp11) {
              disabledOverlay = closure_7.disabledOverlay;
            }
            items[1] = disabledOverlay;
            obj.style = items;
            obj.disabled = null == dependencyMap;
            obj.onPress = function onPress() {
              const result = closure_0(4604).triggerHapticFeedback(isSectionNitroLocked(4605).IMPACT_LIGHT);
              if (dependencyMap != null) {
                dependencyMap(closure_0);
              }
              const obj = closure_0(4604);
            };
            obj.onLongPress = function onLongPress() {
              return handleOnLongPressSticker(closure_0);
            };
            const obj1 = { sticker: tmp2, size, animated: stickers(4975).shouldAnimateSticker(closure_8, tmp2.id === id), opaque: isSendableStickerResult };
            const items1 = [closure_8(isSectionNitroLocked(10304), obj1, c12), ];
            let tmp17 = null;
            if (tmp11) {
              tmp17 = closure_8(items, {});
            }
            items1[1] = tmp17;
            obj.children = items1;
            items.push(closure_9(stickers(5204).PressableOpacity, obj, tmp2.id));
            const shouldAnimateStickerResult = stickers(4975).shouldAnimateSticker(closure_8, tmp2.id === id);
            const tmp10 = null == dependencyMap;
          }
        })();
        sum = num2 + 1;
        c12 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    obj5 = { style: tmp6.row, children: items };
    return closure_8(closure_3, obj5);
  }
};