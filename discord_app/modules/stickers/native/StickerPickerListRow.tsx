// discord_app/modules/stickers/native/StickerPickerListRow.tsx
import _slicedToArray from "_slicedToArray";
import "PressableBase";
import { View } from "__INTERNAL_VIEW_CONFIG";
import mergeGuildAvatar from "mergeGuildAvatar";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx";

const require = arg1;
const STICKER_SIZE = PADDING_HORIZONTAL.STICKER_SIZE;
let closure_10 = createCacheKey.createStyles({ row: { height: PADDING_HORIZONTAL.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let View;
  let arr;
  let _slicedToArray;
  let mergeGuildAvatar;
  let dependencyMap;
  let importDefault;
  let nativeRow;
  let rowSize;
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, onPressSticker: importDefault, onLongPressStickerDetail: dependencyMap, focusedSticker: _slicedToArray, setFocusedSticker: View, channel: mergeGuildAvatar, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(500);
    nativeRow = obj.isAndroid();
  }
  let c6;
  let closure_7;
  let items;
  let callback2;
  function handleOnLongPressSticker(found) {
    if (null != closure_2) {
      const result = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
      tmp(found);
    } else {
      const AnimateStickers = stickers(outer1_2[10]).AnimateStickers;
      if (AnimateStickers.getSetting() === _undefined.ANIMATE_ON_INTERACTION) {
        const result1 = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
        if (callback2 != null) {
          callback2(found);
        }
        const obj = stickers(outer1_2[11]);
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    const items = [stickers(outer1_2[13]).shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == mergeGuildAvatar;
    if (!isSendableStickerResult) {
      isSendableStickerResult = stickers(outer1_2[14]).isSendableSticker(id, outer1_5.getCurrentUser(), tmp5);
      const tmpResult = stickers(outer1_2[14]);
    }
    items[1] = isSendableStickerResult;
    items[2] = null == closure_1;
    return items;
  }
  const tmp6 = callback2();
  c6 = tmp6;
  let AnimateStickers = stickers(3993).AnimateStickers;
  closure_7 = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    let num5 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num5];
        let tmp13 = num5;
        if (undefined !== tmp12) {
          let tmp17 = callback;
          let tmp18 = callback(rowTraits(tmp12), 3);
          let first = tmp18[0];
          obj = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null };
          ({ id: obj4[0], name: obj4[1], format_type: obj4[2] } = tmp12);
          let tmp20 = stickers;
          let tmp21 = dependencyMap;
          let obj4 = stickers(9854);
          let tmp22 = closure_7;
          obj[3] = obj4.getStickerAssetUrl(tmp12, closure_7, first);
          obj[4] = first;
          obj[5] = tmp18[2];
          obj[6] = tmp18[1];
          arr = items.push(obj);
          let tmp15 = dependencyMap;
        } else {
          obj = { stickerId: null, stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          let tmp14 = stickers;
          tmp15 = dependencyMap;
          obj[2] = stickers(4985).StickerFormat.PNG;
          arr = items.push(obj);
        }
        num5 = num5 + 1;
        let tmp7 = tmp15;
      } while (num5 < rowSize);
    }
    try {
      let obj1 = { style: null, rowData: null, onPressSticker: null, onLongPressSticker: null };
      obj1[0] = tmp6.row;
      const obj2 = { rowContentWidth: null, rowContentPaddingVertical: null, itemSize: null, items: null };
      obj2[0] = tmp3;
      obj2[1] = handleOnLongPressSticker;
      obj2[2] = closure_7;
      obj2[3] = items;
      obj1[1] = obj2;
      obj1[2] = function onPressSticker(arg0) {
        const stickers = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = stickers(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
          if (callback != null) {
            callback(found);
          }
          const obj = stickers(outer1_2[11]);
        }
      };
      obj1[3] = function onLongPressSticker(arg0) {
        const stickers = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return items(__INTERNAL_VIEW_CONFIG, obj1);
    } catch (tmp28) {
      const obj3 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      obj4 = { itemLength: null, items: null };
      obj4[0] = arr.length;
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj4[1] = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj3[2] = obj4;
      importDefault(tmp[18]).addBreadcrumb(obj3);
      throw tmp28;
    }
  } else {
    callback2 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          let tmp10;
          let tmp11;
          let tmp12;
          const stickers = tmp2;
          if (undefined === stickers[c10]) {
            let obj = { style: null };
            obj[0] = _undefined.stickerImage;
            items.push(items(outer1_4, obj, tmp));
            return 1;
          } else {
            let id;
            if (user != null) {
              id = user.id;
            }
            items = [stickers(outer1_2[13]).shouldAnimateSticker(closure_7, tmp2.id === id), , ];
            let isSendableStickerResult = null == mergeGuildAvatar;
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp25(tmp26[14]).isSendableSticker(tmp2, outer1_5.getCurrentUser(), tmp4);
              const tmp25Result = tmp25(tmp26[14]);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == closure_1;
            const obj5 = stickers(outer1_2[13]);
            const tmp27 = closure_7;
            [tmp10, tmp11, tmp12] = outer1_3(items, 3);
            obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, disabled: null, onPress: null, onLongPress: null, children: null };
            obj[1] = tmp2.name;
            obj[2] = _undefined.stickerImage;
            obj[3] = tmp12;
            obj[4] = function onPress() {
              const result = tmp2(outer1_2[11]).triggerHapticFeedback(outer1_1(outer1_2[12]).IMPACT_LIGHT);
              if (outer1_1 != null) {
                outer1_1(tmp2);
              }
            };
            obj[5] = function onLongPress() {
              return outer1_8(closure_0);
            };
            const obj1 = { sticker: null, size: null, animated: null, opaque: null };
            obj1[0] = tmp2;
            obj1[1] = closure_7;
            obj1[2] = tmp10;
            obj1[3] = tmp11;
            obj[6] = items(outer1_1(outer1_2[16]), obj1, tmp);
            items.push(items(stickers(outer1_2[19]).PressableOpacity, obj, tmp2.id));
          }
        })();
        sum = num2 + 1;
        callback2 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    let obj5 = { style: null, children: null };
    obj5[0] = tmp6.row;
    obj5[1] = items;
    return items(View, obj5);
  }
};