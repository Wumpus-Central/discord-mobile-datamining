// discord_app/modules/stickers/native/StickerPickerListRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickerSendability from "../StickerSendability.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function StickerItemLockedOverlay() {
  const tmp = closure_10();
  const obj = {
    importantForAccessibility: "no-hide-descendants",
    style: tmp.lockContainer,
    children: React5(LockIcon.LockIcon, { style: tmp.lock }),
  };
  return React5(React3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const StickerAnimationSettings = fn(5071).StickerAnimationSettings;
const StickerPickerConstants = fn(11183);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1228).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  row: {
    height: StickerPickerConstants.ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE },
  disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" },
  lockContainer: null,
  lock: null,
};
const obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj5 = _modDef671("#000000");
obj4.backgroundColor = _modDef671("#000000").alpha(0.2).hex();
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
  ({
    onPressSticker: dependencyMap,
    onLongPressStickerDetail: closure_3,
    focusedSticker: UserStore,
    setFocusedSticker: StickerAnimationSettings,
    channel: STICKER_SIZE,
    nativeRow,
  } = stickers);
  if (nativeRow === undefined) {
    nativeRow = stickers(1377).isAndroid();
    let obj = stickers(1377);
  }
  items = undefined;
  c11 = undefined;
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
    const shouldAnimateStickerResult = StickersUtils.shouldAnimateSticker(closure_8, id.id === id);
    return {
      isAnimated: StickersUtils.shouldAnimateSticker(closure_8, id.id === id),
      isOpaque: isSendableStickerResult,
      isDisabled: null == dependencyMap,
      isLocked: !isSendableStickerResult,
    };
  }
  const tmp6 = items();
  rowContentPaddingVertical = tmp6;
  let AnimateStickers = stickers(5068).AnimateStickers;
  closure_8 = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    let num4 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num4];
        if (undefined !== tmp12) {
          let rowTraitsResult = rowTraits(tmp12);
          let isAnimated = rowTraitsResult.isAnimated;
          let obj2 = {
            stickerId: null,
            stickerName: null,
            stickerType: null,
            stickerUrl: null,
            stickerAnimated: null,
            stickerDisabled: null,
            stickerOpaque: null,
            stickerLocked: null,
          };
          ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp12);
          ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
          let obj5 = stickers(11030);
          obj2.stickerUrl = obj5.getStickerAssetUrl(tmp12, STICKER_SIZE, isAnimated);
          obj2.stickerAnimated = isAnimated;
          obj2.stickerDisabled = isDisabled;
          obj2.stickerOpaque = isOpaque;
          obj2.stickerLocked = isLocked;
          let arr2 = items.push(obj2);
        } else {
          let obj3 = {
            stickerId: "",
            stickerName: "",
            stickerType: null,
            stickerUrl: "",
            stickerAnimated: false,
            stickerDisabled: true,
            stickerOpaque: false,
            stickerLocked: false,
          };
          obj3.stickerType = stickers(6730).StickerFormat.PNG;
          let arr3 = items.push(obj3);
        }
        num4 = num4 + 1;
      } while (num4 < rowSize);
    }
    try {
      const obj6 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      const obj7 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
      obj6.rowData = obj7;
      obj6.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (dependencyMap != null) {
            dependencyMap(found);
          }
        }
      };
      obj6.onLongPressSticker = function onLongPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return closure_8(isSectionNitroLocked(11312), obj6);
    } catch (tmp26) {
      const obj9 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      const obj10 = { itemLength: arr.length, items: null };
      let found = arr.filter(
        (stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl,
      );
      obj10.items = found.map((stickerId) => ({
        stickerId: stickerId.stickerId,
        stickerName: stickerId.stickerName,
        stickerUrl: stickerId.stickerUrl,
      }));
      obj9.data = obj10;
      isSectionNitroLocked(tmp[20]).addBreadcrumb(obj9);
      throw tmp26;
    }
  } else {
    c11 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c11]) {
            let obj = { style: closure_7.stickerImage };
            items.push(closure_8(closure_1_3, obj, c11));
            return 1;
          } else {
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let isSendableStickerResult = isSectionNitroLocked;
            const obj5 = stickers(6729);
            if (!isSectionNitroLocked) {
              isSendableStickerResult = null == closure_6;
            }
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp25(7162).isSendableSticker(tmp2, currentUser.getCurrentUser(), closure_6);
              const tmp25Result = tmp25(7162);
            }
            let disabledOverlay = !isSendableStickerResult;
            const obj2 = {
              accessibilityRole: "button",
              accessibilityLabel: tmp2.name,
              style: null,
              disabled: null,
              onPress: null,
              onLongPress: null,
              children: null,
            };
            items = [closure_7.stickerImage];
            if (!isSendableStickerResult) {
              disabledOverlay = closure_7.disabledOverlay;
            }
            items[1] = disabledOverlay;
            obj2.style = items;
            obj2.disabled = null == dependencyMap;
            obj2.onPress = function onPress() {
              const result = closure_0(5491).triggerHapticFeedback(isSectionNitroLocked(5492).IMPACT_LIGHT);
              if (dependencyMap != null) {
                dependencyMap(closure_0);
              }
              const obj = closure_0(5491);
            };
            obj2.onLongPress = function onLongPress() {
              return handleOnLongPressSticker(closure_0);
            };
            const obj3 = {
              sticker: tmp2,
              size,
              animated: stickers(6729).shouldAnimateSticker(closure_8, tmp2.id === id),
              opaque: isSendableStickerResult,
            };
            const items1 = [closure_8(isSectionNitroLocked(11030), obj3, c11)];
            let tmp16 = null;
            if (!isSendableStickerResult) {
              tmp16 = closure_8(c11, {});
            }
            items1[1] = tmp16;
            obj2.children = items1;
            items.push(handleOnLongPressSticker(stickers(7364).PressableOpacity, obj2, tmp2.id));
            const shouldAnimateStickerResult = stickers(6729).shouldAnimateSticker(closure_8, tmp2.id === id);
            const tmp10 = null == dependencyMap;
          }
        })();
        sum = num2 + 1;
        c11 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj17 = { style: tmp6.row, children: items };
    return closure_8(closure_3, obj17);
  }
}
