// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const EmojiPickerListConstants = fn(10290);
({
  ROW_HEIGHT: closure_4,
  LABEL_HEIGHT: hasOwnProperty,
  LABEL_TOP_PADDING: metroRequire,
  LABEL_BOTTOM_PADDING: closure_7,
} = EmojiPickerListConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx");

export default noop.forwardRef((paddingTop, ref) => {
  ({ categoryIndexActive: require, data } = paddingTop);
  const stickyHeaderIndices = data.headerIndices;
  paddingTop = paddingTop.paddingTop;
  const paddingBottom = paddingTop.paddingBottom;
  ({ onShowNitroUpsell, renderItem } = paddingTop);
  ref = paddingBottom.useRef(null);
  const items = [paddingTop, paddingBottom];
  const contentContainerStyle = paddingBottom.useMemo(() => ({ paddingTop, paddingBottom }), items);
  const getItemType = paddingBottom.useCallback((type) => type.type, []);
  const keyExtractor = paddingBottom.useCallback((type, arg1) => "" + type.type + "-" + arg1, []);
  const overrideItemLayout = paddingBottom.useCallback((arg0, type) => {
    type = type.type;
    if (require("useEmojiPickerData").EmojiPickerItemType.PLACEHOLDER === type) {
      arg0.size = 0;
    } else if (tmp(tmp2[3]).EmojiPickerItemType.TITLE === type) {
      arg0.size = closure_1_5 + closure_1_6 + closure_1_7;
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
        const obj = { index: num, animated: flag };
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
      const result = closure_1_0.set(num);
    },
  }));
  const preventNativeModalDismiss = require("PortalKeyboardModalContext").useIsPortalKeyboardInModal();
  return jsx(require("../../../../../discord_common/js/packages/flash-list/index.js").BottomSheetFlashList, {
    contentContainerStyle,
    data: data.data,
    getItemType,
    keyboardShouldPersistTaps: "always",
    keyExtractor,
    onViewableItemsChanged: stickyHeaderIndices(paddingTop[5])(onViewableItemsChanged).onViewableItemsChanged,
    overrideItemLayout,
    preventNativeModalDismiss,
    ref,
    renderItem,
    stickyHeaderIndices,
  });
});
