// discord_app/modules/stickers/native/StickerPickerListRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import IMPACT_LIGHTDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickerDefault from "Sticker.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { StickerAnimationSettings } from "../StickersConstants.tsx";
import PADDING_HORIZONTAL from "StickerPickerConstants.tsx";
import { PADDING_VERTICAL } from "../../expression_picker/ExpressionPickerConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
const STICKER_SIZE = PADDING_HORIZONTAL.STICKER_SIZE;
let closure_10 = createCacheKey.createStyles({ row: { height: PADDING_HORIZONTAL.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
let result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let arr;
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, onPressSticker: importDefault, onLongPressStickerDetail: dependencyMap, focusedSticker: closure_3, setFocusedSticker: View, channel: closure_5, nativeRow } = stickers);
  if (nativeRow === undefined) {
    let obj = stickers(500);
    nativeRow = obj.isAndroid();
  }
  let callback2;
  function handleOnLongPressSticker(found) {
    if (null != closure_2) {
      const result = stickers(dependencyMap[11]).triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
      tmp(found);
      const obj2 = stickers(dependencyMap[11]);
    } else {
      const AnimateStickers = stickers(dependencyMap[10]).AnimateStickers;
      if (AnimateStickers.getSetting() === closure_6.ANIMATE_ON_INTERACTION) {
        const result1 = stickers(dependencyMap[11]).triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
        if (callback2 != null) {
          callback2(found);
        }
        const obj = stickers(dependencyMap[11]);
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    items = [stickers(dependencyMap[13]).shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == closure_5;
    if (!isSendableStickerResult) {
      isSendableStickerResult = stickers(dependencyMap[14]).isSendableSticker(id, closure_1_5.getCurrentUser(), tmp5);
      const tmpResult = stickers(dependencyMap[14]);
    }
    items[1] = isSendableStickerResult;
    items[2] = null == closure_1;
    return items;
  }
  const tmp6 = callback2();
  closure_6 = tmp6;
  let AnimateStickers = stickers(4066).AnimateStickers;
  closure_7 = AnimateStickers.useSetting();
  let items = [];
  if (nativeRow) {
    let num5 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num5];
        if (undefined !== tmp12) {
          let tmp18 = callback(rowTraits(tmp12), 3);
          let first = tmp18[0];
          obj = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null };
          ({ id: obj4[0], name: obj4[1], format_type: obj4[2] } = tmp12);
          let obj4 = stickers(10119);
          obj[3] = obj4.getStickerAssetUrl(tmp12, closure_7, first);
          obj[4] = first;
          obj[5] = tmp18[2];
          obj[6] = tmp18[1];
          arr = items.push(obj);
        } else {
          obj = { stickerId: null, stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          obj[2] = stickers(4964).StickerFormat.PNG;
          arr = items.push(obj);
        }
        num5 = num5 + 1;
      } while (num5 < rowSize);
    }
    try {
      obj1 = { style: null, rowData: null, onPressSticker: null, onLongPressSticker: null };
      obj1[0] = tmp6.row;
      let obj2 = { rowContentWidth: null, rowContentPaddingVertical: null, itemSize: null, items: null };
      obj2[0] = tmp3;
      obj2[1] = handleOnLongPressSticker;
      obj2[2] = closure_7;
      obj2[3] = items;
      obj1[1] = obj2;
      obj1[2] = function onPressSticker(arg0) {
        stickers = arg0;
        const found = stickers.find((item, index) => item.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = stickers(dependencyMap[11]).triggerHapticFeedback(IMPACT_LIGHTDefault.IMPACT_LIGHT);
          if (callback != null) {
            callback(found);
          }
          const obj = stickers(dependencyMap[11]);
        }
      };
      obj1[3] = function onLongPressSticker(arg0) {
        stickers = arg0;
        const found = stickers.find((item, index) => item.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return items(__INTERNAL_VIEW_CONFIGDefault, obj1);
    } catch (tmp28) {
      const obj3 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      obj4 = { itemLength: null, items: null };
      obj4[0] = arr.length;
      let found = arr.filter((item, index) => null == item.stickerId || null == item.stickerName || null == item.stickerUrl);
      obj4[1] = found.map((item, index) => ({ stickerId: item.stickerId, stickerName: item.stickerName, stickerUrl: item.stickerUrl }));
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
          stickers = tmp2;
          if (undefined === stickers[c10]) {
            let obj = { style: null };
            obj[0] = closure_6.stickerImage;
            items.push(items(View, obj, c10));
            return 1;
          } else {
            let id;
            if (user != null) {
              id = user.id;
            }
            items = [stickers(dependencyMap[13]).shouldAnimateSticker(closure_7, tmp2.id === id), , ];
            let isSendableStickerResult = null == closure_5;
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp25(dependencyMap[14]).isSendableSticker(tmp2, closure_1_5.getCurrentUser(), tmp4);
              const tmp25Result = tmp25(dependencyMap[14]);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == closure_1;
            const obj5 = stickers(dependencyMap[13]);
            [tmp10, tmp11, tmp12] = closure_1_3(items, 3);
            obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, disabled: null, onPress: null, onLongPress: null, children: null };
            obj[1] = tmp2.name;
            obj[2] = closure_6.stickerImage;
            obj[3] = tmp12;
            obj[4] = function onPress() {
              const result = callback(closure_1_2[11]).triggerHapticFeedback(closure_1_1(closure_1_2[12]).IMPACT_LIGHT);
              if (closure_1_1 != null) {
                closure_1_1(callback);
              }
              const obj = callback(closure_1_2[11]);
            };
            obj[5] = function onLongPress() {
              return handleOnLongPressSticker(closure_0);
            };
            obj1 = { sticker: null, size: null, animated: null, opaque: null };
            obj1[0] = tmp2;
            obj1[1] = closure_7;
            obj1[2] = tmp10;
            obj1[3] = tmp11;
            obj[6] = items(StickerDefault, obj1, c10);
            items.push(items(stickers(dependencyMap[19]).PressableOpacity, obj, tmp2.id));
            const tmp9 = closure_1_3(items, 3);
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