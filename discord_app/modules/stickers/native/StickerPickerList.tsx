// === Module 10414: StickerPickerList ===

// Module 10414 (StickerPickerList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7062 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 10401 */;
import _modDef10415 from "module_10415" /* 10415 */;
import useStickerPickerListData from "useStickerPickerListData" /* 10416 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5502 */;

require = fn;
const View = fn(17).View;
const useStickerPickerStore = fn(10390).useStickerPickerStore;
const StickerPickerConstants = fn(10273);
({ STICKER_SCROLL_LOAD_DELAY_MS: closure_8, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9, STICKER_SIZE: c10 } = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let obj = { listPlaceholder: null, section: null, sectionSticker: null, nsfwContainer: null, nsfwText: null };
obj = { color: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
const createStyles = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.section = createStyles;
obj.sectionSticker = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.nsfwContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((height) => {
  const tmp = closure_13();
  let obj = { style: null, children: null };
  const items = [tmp.nsfwContainer, { height: height.height }];
  obj.style = items;
  obj = { source: _modDef10415, size: native.Icon.Sizes.SMALL };
  const items1 = [closure_1_11(native.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.uy25Qz);
  items1[1] = closure_1_11(Text_Text.Text, obj);
  obj.children = items1;
  return closure_1_12(View, obj);
});
let closure_15 = noop.memo((arg0) => {
  ({ height, label, sectionStyle } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_13().section, sectionStyle, { height }];
  obj.style = items;
  obj.children = closure_1_11(Text_Text.Text, { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label });
  return closure_1_11(View, obj);
});
let closure_16 = noop.memo((height) => closure_1_11(View, { style: { height: height.height } }));
const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default noop.memo((bottomSheetRef) => {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const setCategoryIndex = bottomSheetRef.setCategoryIndex;
  ({ searchResults, onPressSticker } = bottomSheetRef);
  const onLongPressStickerDetail = bottomSheetRef.onLongPressStickerDetail;
  let num = bottomSheetRef.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  let num2 = bottomSheetRef.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  const channel = bottomSheetRef.channel;
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let stickerFormats = bottomSheetRef.stickerFormats;
  if (stickerFormats === undefined) {
    const items = [bottomSheetRef(setCategoryIndex[13]).StickerFormat.PNG, bottomSheetRef(setCategoryIndex[13]).StickerFormat.APNG, bottomSheetRef(setCategoryIndex[13]).StickerFormat.LOTTIE, bottomSheetRef(setCategoryIndex[13]).StickerFormat.GIF];
    stickerFormats = items;
  }
  closure_13 = undefined;
  const ref = onLongPressStickerDetail.useRef(null);
  const tmp4 = closure_13();
  closure_8 = tmp4;
  const tmp5 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
  const focusedSticker = tmp5[0];
  const setFocusedSticker = tmp5[1];
  let obj = bottomSheetRef(setCategoryIndex[14]);
  const isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
  const tmp11 = bottomSheetIndex(setCategoryIndex[15])(flag);
  const containerWidth = tmp11;
  const items1 = [flag];
  const stateFromStores = bottomSheetRef(setCategoryIndex[16]).useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
  const tmp13 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  closure_13 = tmp13;
  const items2 = [setCategoryIndex, tmp13, bottomSheetRef];
  const memo = onLongPressStickerDetail.useMemo(() => {
    function scrollToCancel() {
      return clearTimeout(closure_0.scrollTo);
    }
    closure_0 = { scrollTo: -1 };
    return {
      scroll(layout) {
        const index = layout.index;
        ({ delay, expand } = layout);
        clearTimeout(closure_0.scrollTo);
        if (expand) {
          let current = bottomSheetRef.current;
          if (current != null) {
            current.expandActionSheet();
          }
        }
        closure_0.scrollTo = setTimeout(() => {
          const current = ref.current;
          if (current != null) {
            const obj = { section: index, item: 0, animated: true };
            current.scrollToLocation(obj);
          }
          closure_2_13(null);
        }, delay);
        setCategoryIndex(index);
      },
      cancel() {
        return scrollToCancel;
      }
    };
  }, items2);
  const tmp15 = bottomSheetIndex(setCategoryIndex[17])({ channel, containerWidth: tmp11, searchResults, stickerFormats });
  const sectionHeights = tmp15.sectionHeights;
  const sectionSize = tmp15.sectionSize;
  const sectionFooterSize = tmp15.sectionFooterSize;
  const sectionLabels = tmp15.sectionLabels;
  const rowsBySection = tmp15.rowsBySection;
  const rowHeight = tmp15.rowHeight;
  const rowSize = tmp15.rowSize;
  const packToScrollToIndex = tmp15.packToScrollToIndex;
  const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
  const effect = onLongPressStickerDetail.useEffect(() => {
    if (tmp2) {
      if (flag) {
        if (bottomSheetIndex.get() < 1) {
          let obj = { index: packToScrollToIndex, delay: delay2, expand: true };
          memo.scroll(obj);
        }
      }
      obj = { index: packToScrollToIndex, delay };
      memo.scroll(obj);
    }
    return () => {
      memo.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionSize, tmp4.sectionSticker];
  const items5 = [sectionFooterSize];
  const callback = onLongPressStickerDetail.useCallback((arg0) => closure_2_11(closure_15, { label: sectionLabels[arg0], sectionStyle: closure_8.sectionSticker, height: sectionSize }), items4);
  const items6 = [channel, tmp11, focusedSticker, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection];
  const callback1 = onLongPressStickerDetail.useCallback(() => closure_2_11(closure_16, { height: sectionFooterSize }), items5);
  const items7 = [setCategoryIndex, sectionHeights];
  const callback2 = onLongPressStickerDetail.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (useStickerPickerListData.StickerPickerSectionType.STICKERS === type) {
        let obj = { containerWidth, stickers: tmp.stickersByRow[arg1], rowSize, onPressSticker, onLongPressStickerDetail, focusedSticker, setFocusedSticker, channel };
        return closure_2_11(StickerPickerListRowDefault, obj);
      } else if (useStickerPickerListData.StickerPickerSectionType.NSFW === type) {
        obj = { height: rowHeight };
        return closure_2_11(closure_14, obj);
      } else {
        return null;
      }
    }
  }, items6);
  const memo1 = onLongPressStickerDetail.useMemo(() => {
    let obj = bottomSheetIndex(setCategoryIndex[19]);
    const debounceResult = obj.debounce((arg0) => {
      let num = 0;
      if (0 < sectionHeights.length) {
        let num3 = 0;
        let num4 = 0;
        num = 0;
        if (arg0 >= tmp[0]) {
          const sum = num4 + 1;
          const sum1 = num3 + 1;
          num = sum;
          while (sum1 < sectionHeights.length) {
            num3 = sum1;
            num4 = sum;
            num = sum;
            if (arg0 < sectionHeights[sum1]) {
              break;
            }
          }
        }
      }
      setCategoryIndex(num);
    }, 100);
    bottomSheetRef = debounceResult;
    obj = {
      onScroll(nativeEvent) {
        debounceResult(nativeEvent.nativeEvent.contentOffset.y);
      },
      setCategory: debounceResult
    };
    return obj;
  }, items7);
  const setCategory = memo1.setCategory;
  const items8 = [tmp4, rowSize];
  const items9 = [setCategory];
  const memo2 = onLongPressStickerDetail.useMemo(() => {
    let obj = { sectionHeader: null, sectionItem: null };
    obj = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_8.listPlaceholder.color, shape: "rect", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4 };
    obj.sectionHeader = obj;
    const size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_8.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: height, height };
    obj.sectionItem = size;
    return obj;
  }, items8);
  const effect1 = onLongPressStickerDetail.useEffect(() => () => setCategory.cancel(), items9);
  const items10 = [memo];
  const effect2 = onLongPressStickerDetail.useEffect(() => () => {
    memo.cancel();
  }, items10);
  let length;
  if (searchResults != null) {
    length = searchResults.length;
  }
  if (0 === length) {
    obj = { inActionSheet: true, insetTop: num2, insetBottom: num };
    let tmp26 = containerWidth(tmp10(tmp8[21]), obj);
  } else {
    obj = { accessibilityLabel: null, estimatedListSize: null, inActionSheet: true, preventNativeModalDismiss: null, insetEnd: null, insetStart: null, itemSize: null, keyboardShouldPersistTaps: "always", listId: "sticker-picker-list", onScroll: null, placeholderConfig: null, renderItem: null, renderSectionHeader: null, renderSectionFooter: null, ref: null, scrollReporting: "callbacks", sections: null, sectionHeaderSize: null, sectionFooterSize: null };
    const intl = tmp7(tmp8[12]).intl;
    obj.accessibilityLabel = intl.string(tmp7(tmp8[12]).t.nf1s3u);
    const tmp10Result = tmp10(tmp8[22]);
    obj.estimatedListSize = tmp7(tmp8[23]).getCustomKeyboardHeight();
    obj.preventNativeModalDismiss = isPortalKeyboardInModal;
    obj.insetEnd = num;
    obj.insetStart = num2;
    obj.itemSize = rowHeight;
    obj.onScroll = memo1.onScroll;
    obj.placeholderConfig = memo2;
    obj.renderItem = callback2;
    obj.renderSectionHeader = callback;
    obj.renderSectionFooter = callback1;
    obj.ref = ref;
    obj.sections = tmp15.sections;
    obj.sectionHeaderSize = sectionSize;
    obj.sectionFooterSize = sectionFooterSize;
    tmp26 = containerWidth(tmp10Result, obj);
    const tmp7Result = tmp7(tmp8[23]);
  }
  return tmp26;
});