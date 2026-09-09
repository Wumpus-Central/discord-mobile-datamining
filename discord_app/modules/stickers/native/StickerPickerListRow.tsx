// === Module 10433: StickerPickerListRow ===

// Module 10433 (StickerPickerListRow)
import UserSettings from "UserSettings" /* 1935 */;
import HapticUtils from "HapticUtils" /* 4542 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4543 */;
import StickersUtils from "StickersUtils" /* 4913 */;
import StickerSendability from "StickerSendability" /* 7351 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const StickerPickerConstants = fn(10305);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsx = fn(21).jsx;
fn(4574);
const createStyles = { row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } };
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
  ({ onPressSticker: dependencyMap, onLongPressStickerDetail: _slicedToArray, focusedSticker: View, setFocusedSticker: UserStore, channel: StickerAnimationSettings, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(1115);
    nativeRow = obj.isAndroid();
  }
  let items;
  c11 = undefined;
  function handleOnLongPressSticker(PressableOpacity) {
    if (null != _slicedToArray) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(PressableOpacity);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (currentUser != null) {
          currentUser(PressableOpacity);
        }
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    items = [StickersUtils.shouldAnimateSticker(closure_8, id.id === id), , ];
    let isSendableStickerResult = isSectionNitroLocked;
    if (!isSectionNitroLocked) {
      isSendableStickerResult = null == StickerAnimationSettings;
    }
    if (!isSendableStickerResult) {
      isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), StickerAnimationSettings);
      const tmpResult = StickerSendability;
    }
    items[1] = isSendableStickerResult;
    items[2] = null == dependencyMap;
    return items;
  }
  const tmp6 = items();
  itemSize = tmp6;
  let AnimateStickers = stickers(1935).AnimateStickers;
  rowContentPaddingVertical = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    let num5 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num5];
        if (undefined !== tmp12) {
          let tmp18 = _slicedToArray(rowTraits(tmp12), 3);
          let first = tmp18[0];
          obj = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null };
          ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp12);
          let obj4 = stickers(10208);
          obj.stickerUrl = obj4.getStickerAssetUrl(tmp12, itemSize, first);
          obj.stickerAnimated = first;
          obj.stickerDisabled = tmp18[2];
          obj.stickerOpaque = tmp18[1];
          arr = items.push(obj);
        } else {
          obj = { stickerId: null, stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          obj.stickerType = stickers(5282).StickerFormat.PNG;
          arr = items.push(obj);
        }
        num5 = num5 + 1;
      } while (num5 < rowSize);
    }
    try {
      let obj1 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      let obj2 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize, items };
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
      return handleOnLongPressSticker(isSectionNitroLocked(10434), obj1);
    } catch (tmp28) {
      const obj3 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      obj4 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj4.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj3.data = obj4;
      isSectionNitroLocked(tmp[18]).addBreadcrumb(obj3);
      throw tmp28;
    }
  } else {
    c11 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c11]) {
            let obj = { style: size.stickerImage };
            items.push(handleOnLongPressSticker(closure_1_4, obj, c11));
            return 1;
          } else {
            let id;
            if (user != null) {
              id = user.id;
            }
            items = [stickers(4913).shouldAnimateSticker(closure_8, tmp2.id === id), , ];
            let isSendableStickerResult = isSectionNitroLocked;
            if (!isSectionNitroLocked) {
              isSendableStickerResult = null == closure_6;
            }
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp26(7351).isSendableSticker(tmp2, currentUser.getCurrentUser(), closure_6);
              const tmp26Result = tmp26(7351);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == dependencyMap;
            const obj5 = stickers(4913);
            [tmp11, tmp12, tmp13] = _slicedToArray(items, 3);
            obj = {
              accessibilityRole: "button",
              accessibilityLabel: tmp2.name,
              style: size.stickerImage,
              disabled: tmp13,
              onPress() {
                  const result = closure_0(4542).triggerHapticFeedback(isSectionNitroLocked(4543).IMPACT_LIGHT);
                  if (dependencyMap != null) {
                    dependencyMap(closure_0);
                  }
                  const obj = closure_0(4542);
                },
              onLongPress() {
                  return handleOnLongPressSticker(closure_0);
                },
              children: null
            };
            const obj1 = { sticker: tmp2, size, animated: tmp11, opaque: tmp12 };
            obj.children = handleOnLongPressSticker(isSectionNitroLocked(10208), obj1, c11);
            items.push(handleOnLongPressSticker(stickers(5137).PressableOpacity, obj, tmp2.id));
            const tmp10 = _slicedToArray(items, 3);
          }
        })();
        sum = num2 + 1;
        c11 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    let obj5 = { style: tmp6.row, children: items };
    return handleOnLongPressSticker(View, obj5);
  }
};