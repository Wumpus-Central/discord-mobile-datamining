// === Module 10401: StickerPickerListRow ===

// Module 10401 (StickerPickerListRow)
import UserSettings from "UserSettings" /* 1935 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import StickerSendability from "StickerSendability" /* 7337 */;
import StickerDefault from "Sticker" /* 10176 */;
import StickerPickerListRowNativeComponentDefault from "StickerPickerListRowNativeComponent" /* 10402 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const StickerPickerConstants = fn(10273);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let arr;
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, onPressSticker: importDefault, onLongPressStickerDetail: dependencyMap, focusedSticker: _slicedToArray, setFocusedSticker: View, channel: UserStore, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(1115);
    nativeRow = obj.isAndroid();
  }
  c10 = undefined;
  function handleOnLongPressSticker(found) {
    if (null != dependencyMap) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(found);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (View != null) {
          View(found);
        }
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (_slicedToArray != null) {
      id = _slicedToArray.id;
    }
    items = [StickersUtils.shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == currentUser;
    if (!isSendableStickerResult) {
      isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), tmp5);
      const tmpResult = StickerSendability;
    }
    items[1] = isSendableStickerResult;
    items[2] = null == importDefault;
    return items;
  }
  const tmp6 = c10();
  closure_6 = tmp6;
  let AnimateStickers = stickers(1935).AnimateStickers;
  itemSize = AnimateStickers.useSetting();
  let items = [];
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
          let obj4 = stickers(10176);
          obj.stickerUrl = obj4.getStickerAssetUrl(tmp12, itemSize, first);
          obj.stickerAnimated = first;
          obj.stickerDisabled = tmp18[2];
          obj.stickerOpaque = tmp18[1];
          arr = items.push(obj);
        } else {
          obj = { stickerId: null, stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          obj.stickerType = stickers(5268).StickerFormat.PNG;
          arr = items.push(obj);
        }
        num5 = num5 + 1;
      } while (num5 < rowSize);
    }
    try {
      let obj1 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      let obj2 = { rowContentWidth: tmp3, rowContentPaddingVertical: handleOnLongPressSticker, itemSize, items };
      obj1.rowData = obj2;
      obj1.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (closure_1_1 != null) {
            closure_1_1(found);
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
      return items(StickerPickerListRowNativeComponentDefault, obj1);
    } catch (tmp28) {
      const obj3 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      obj4 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj4.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj3.data = obj4;
      require("SentryUtils").addBreadcrumb(obj3);
      throw tmp28;
    }
  } else {
    c10 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c10]) {
            let obj = { style: closure_6.stickerImage };
            items.push(items(View, obj, c10));
            return 1;
          } else {
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            items = [stickers(dependencyMap[13]).shouldAnimateSticker(size, tmp2.id === id), , ];
            let isSendableStickerResult = null == closure_5;
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp25(dependencyMap[14]).isSendableSticker(tmp2, currentUser.getCurrentUser(), tmp4);
              const tmp25Result = tmp25(dependencyMap[14]);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == closure_1;
            const obj5 = stickers(dependencyMap[13]);
            [tmp10, tmp11, tmp12] = _slicedToArray(items, 3);
            obj = {
              accessibilityRole: "button",
              accessibilityLabel: tmp2.name,
              style: closure_6.stickerImage,
              disabled: tmp12,
              onPress() {
                  const result = closure_0(4528).triggerHapticFeedback(closure_1_1(4529).IMPACT_LIGHT);
                  if (importDefault != null) {
                    importDefault(closure_0);
                  }
                  const obj = closure_0(4528);
                },
              onLongPress() {
                  return handleOnLongPressSticker(closure_0);
                },
              children: null
            };
            const obj1 = { sticker: tmp2, size, animated: tmp10, opaque: tmp11 };
            obj.children = items(StickerDefault, obj1, c10);
            items.push(items(stickers(dependencyMap[19]).PressableOpacity, obj, tmp2.id));
            const tmp9 = _slicedToArray(items, 3);
          }
        })();
        sum = num2 + 1;
        c10 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    let obj5 = { style: tmp6.row, children: items };
    return items(View, obj5);
  }
};