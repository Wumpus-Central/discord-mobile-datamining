// === Module 9428: ? ===

// Module 9428
import importAllResult from "noop" /* 19 */;
import IMAGE_SIZE from "IMAGE_SIZE" /* 9338 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ ROW_HEIGHT: c4, LABEL_HEIGHT: c5, LABEL_TOP_PADDING: closure_6, LABEL_BOTTOM_PADDING: error } = IMAGE_SIZE);
const forwardRefResult = importAllResult.forwardRef((paddingTop, ref) => {
  ({ categoryIndexActive: require, data } = paddingTop);
  const stickyHeaderIndices = data.headerIndices;
  paddingTop = paddingTop.paddingTop;
  const paddingBottom = paddingTop.paddingBottom;
  ref = undefined;
  ({ onShowNitroUpsell, renderItem } = paddingTop);
  ref = paddingBottom.useRef(null);
  const items = [paddingTop, paddingBottom];
  const contentContainerStyle = paddingBottom.useMemo(() => ({ paddingTop, paddingBottom }), items);
  const getItemType = paddingBottom.useCallback((type) => type.type, []);
  const keyExtractor = paddingBottom.useCallback((type) => "" + type.type + "-" + arg1, []);
  const overrideItemLayout = paddingBottom.useCallback((arg0, type) => {
    type = type.type;
    if (callback(paddingTop[3]).EmojiPickerItemType.PLACEHOLDER === type) {
      arg0.size = 0;
    } else if (tmp(tmp2[3]).EmojiPickerItemType.TITLE === type) {
      arg0.size = closure_5 + closure_6 + closure_7;
    } else {
      if (tmp(tmp2[3]).EmojiPickerItemType.EMOJI_ROW !== type) {
        if (tmp(tmp2[3]).EmojiPickerItemType.EMOJI_ROW_NSFW !== type) {
          if (tmp(tmp2[3]).EmojiPickerItemType.FOOTER_UPSELL === type) {
            arg0.size = tmp(tmp2[4]).EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT;
          }
        }
      }
      arg0.size = ref;
    }
  }, []);
  const imperativeHandle = paddingBottom.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      const current = ref.current;
      if (current != null) {
        let num = length[animated.index];
        if (num == null) {
          num = 0;
        }
        const obj = { index: null, animated: null };
        obj[0] = num;
        obj[1] = flag;
        current.scrollToIndex(obj);
      }
    },
    forceUpdate() {
      const current = ref.current;
      if (null != current.forceUpdate) {
        current.forceUpdate();
      }
    },
    onStickyHeaderRendered(arg0) {
      let arr;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 < length.length) {
        do {
          let tmp = num2;
          let tmp2 = num3;
          arr = length;
          if (arg0 >= length[num2]) {
            tmp2 = num2;
          }
          num2 = num2 + 1;
          num3 = tmp2;
          num = tmp2;
        } while (num2 < arr.length);
      }
      const result = closure_0.set(num);
    }
  }));
  const preventNativeModalDismiss = require(paddingTop[6]).useIsPortalKeyboardInModal();
  return jsx(require(paddingTop[7]).BottomSheetFlashList, { contentContainerStyle, data: data.data, getItemType, keyboardShouldPersistTaps: "always", keyExtractor, onViewableItemsChanged: stickyHeaderIndices(paddingTop[5])(onViewableItemsChanged).onViewableItemsChanged, overrideItemLayout, preventNativeModalDismiss, ref, renderItem, stickyHeaderIndices });
});
let result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default forwardRefResult;