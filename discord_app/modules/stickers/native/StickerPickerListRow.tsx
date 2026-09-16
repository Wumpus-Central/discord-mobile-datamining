// === Module 10541: StickerPickerListRow ===

// Module 10541 (StickerPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import UserSettings from "UserSettings" /* 1936 */;
import HapticUtils from "HapticUtils" /* 4606 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4607 */;
import StickersUtils from "StickersUtils" /* 4977 */;
import LockIcon from "LockIcon" /* 5180 */;
import StickerSendability from "StickerSendability" /* 7447 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function StickerItemLockedOverlay() {
  const tmp = closure_10();
  const obj = { importantForAccessibility: "no-hide-descendants", style: tmp.lockContainer, children: React6(LockIcon.LockIcon, { style: tmp.lock }) };
  return React6(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const StickerAnimationSettings = fn(1939).StickerAnimationSettings;
const StickerPickerConstants = fn(10412);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1218).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE }, disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, lockContainer: null, lock: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj5 = _modDef672("#000000");
obj4.backgroundColor = _modDef672("#000000").alpha(0.2).hex();
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj2.lockContainer = obj4;
obj2.lock = { width: 16, height: 16, tintColor: "white" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, isSectionNitroLocked } = stickers);
  if (isSectionNitroLocked === undefined) {
    isSectionNitroLocked = false;
  }
  ({ onPressSticker: dependencyMap, onLongPressStickerDetail: closure_3, focusedSticker: UserStore, setFocusedSticker: StickerAnimationSettings, channel: STICKER_SIZE, nativeRow } = stickers);
  if (nativeRow === undefined) {
    nativeRow = stickers(1364).isAndroid();
    let obj = stickers(1364);
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
    const obj2 = { isAnimated: StickersUtils.shouldAnimateSticker(closure_8, id.id === id), isOpaque: isSendableStickerResult, isDisabled: null == dependencyMap, isLocked: null };
    let tmp10 = closure_9;
    if (closure_9) {
      tmp10 = !isSendableStickerResult;
    }
    obj2.isLocked = tmp10;
    return obj2;
  }
  const tmp6 = handleOnLongPressSticker();
  rowContentPaddingVertical = tmp6;
  let AnimateStickers = stickers(1936).AnimateStickers;
  closure_8 = AnimateStickers.useSetting();
  closure_9 = stickers(9464).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
  let items = [];
  if (nativeRow) {
    let num4 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num4];
        if (undefined !== tmp12) {
          let rowTraitsResult = rowTraits(tmp12);
          let isAnimated = rowTraitsResult.isAnimated;
          let obj3 = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null, stickerLocked: null };
          ({ id: obj5.stickerId, name: obj5.stickerName, format_type: obj5.stickerType } = tmp12);
          ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
          let obj6 = stickers(10314);
          obj3.stickerUrl = obj6.getStickerAssetUrl(tmp12, STICKER_SIZE, isAnimated);
          obj3.stickerAnimated = isAnimated;
          obj3.stickerDisabled = isDisabled;
          obj3.stickerOpaque = isOpaque;
          obj3.stickerLocked = isLocked;
          let arr2 = items.push(obj3);
        } else {
          let obj4 = { stickerId: "", stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false, stickerLocked: false };
          obj4.stickerType = stickers(5354).StickerFormat.PNG;
          let arr3 = items.push(obj4);
        }
        num4 = num4 + 1;
      } while (num4 < rowSize);
    }
    try {
      const obj7 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      const obj8 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
      obj7.rowData = obj8;
      obj7.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (dependencyMap != null) {
            dependencyMap(found);
          }
        }
      };
      obj7.onLongPressSticker = function onLongPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return closure_8(isSectionNitroLocked(10542), obj7);
    } catch (tmp26) {
      const obj10 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      const obj11 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj11.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj10.data = obj11;
      isSectionNitroLocked(tmp[21]).addBreadcrumb(obj10);
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
            const obj5 = stickers(4977);
            if (!isSectionNitroLocked) {
              isSendableStickerResult = null == closure_6;
            }
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp26(7447).isSendableSticker(tmp2, currentUser.getCurrentUser(), closure_6);
              const tmp26Result = tmp26(7447);
            }
            let tmp11 = closure_9;
            if (closure_9) {
              tmp11 = !isSendableStickerResult;
            }
            const obj2 = { accessibilityRole: "button", accessibilityLabel: tmp2.name, style: null, disabled: null, onPress: null, onLongPress: null, children: null };
            items = [closure_7.stickerImage, ];
            let disabledOverlay = tmp11;
            if (tmp11) {
              disabledOverlay = closure_7.disabledOverlay;
            }
            items[1] = disabledOverlay;
            obj2.style = items;
            obj2.disabled = null == dependencyMap;
            obj2.onPress = function onPress() {
              const result = closure_0(4606).triggerHapticFeedback(isSectionNitroLocked(4607).IMPACT_LIGHT);
              if (dependencyMap != null) {
                dependencyMap(closure_0);
              }
              const obj = closure_0(4606);
            };
            obj2.onLongPress = function onLongPress() {
              return handleOnLongPressSticker(closure_0);
            };
            const obj3 = { sticker: tmp2, size, animated: stickers(4977).shouldAnimateSticker(closure_8, tmp2.id === id), opaque: isSendableStickerResult };
            const items1 = [closure_8(isSectionNitroLocked(10314), obj3, c12), ];
            let tmp17 = null;
            if (tmp11) {
              tmp17 = closure_8(items, {});
            }
            items1[1] = tmp17;
            obj2.children = items1;
            items.push(closure_9(stickers(5208).PressableOpacity, obj2, tmp2.id));
            const shouldAnimateStickerResult = stickers(4977).shouldAnimateSticker(closure_8, tmp2.id === id);
            const tmp10 = null == dependencyMap;
          }
        })();
        sum = num2 + 1;
        c12 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj18 = { style: tmp6.row, children: items };
    return closure_8(closure_3, obj18);
  }
  let obj2 = stickers(9464);
};