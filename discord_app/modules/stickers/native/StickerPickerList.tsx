// discord_app/modules/stickers/native/StickerPickerList.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/10245_registerAsset.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import loadSavedGuildStickers from "../StickersStore.tsx";
import { useStickerPickerStore } from "StickerPickerStore.tsx";
import PADDING_HORIZONTAL from "StickerPickerConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
let c4 = importAllResult;
({ STICKER_SCROLL_LOAD_DELAY_MS: closure_8, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: c9, STICKER_SIZE: c10 } = PADDING_HORIZONTAL);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { color: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
obj[0] = obj;
const createCacheKey = { justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: ThemesDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj[3] = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
obj[4] = { marginLeft: 4, textAlign: "center" };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo((height) => {
  const tmp = callback3();
  const items = [tmp.nsfwContainer, { height: height.height }];
  let obj = { source: registerAssetDefault, size: Button.Icon.Sizes.SMALL };
  const items1 = [callback(Button.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.uy25Qz);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  ({ height, label, sectionStyle } = arg0);
  const obj = { style: null, children: null };
  const items = [callback3().section, sectionStyle, { height }];
  obj[0] = items;
  obj[1] = callback(Text.Text, { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label });
  return callback(View, obj);
});
let closure_16 = importAllResult.memo((height) => {
  const style = { height: height.height };
  return callback(View, { style });
});
const memoResult = importAllResult.memo((bottomSheetRef) => {
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
  let callback3;
  const ref = onLongPressStickerDetail.useRef(null);
  const tmp4 = callback3();
  closure_8 = tmp4;
  const tmp5 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
  const first = tmp5[0];
  closure_10 = tmp5[1];
  let obj = bottomSheetRef(setCategoryIndex[14]);
  const isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
  const tmp11 = bottomSheetIndex(setCategoryIndex[15])(flag);
  const items1 = [flag];
  const stateFromStores = bottomSheetRef(setCategoryIndex[16]).useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
  const tmp13 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  callback3 = tmp13;
  const items2 = [setCategoryIndex, tmp13, bottomSheetRef];
  const memo = onLongPressStickerDetail.useMemo(() => {
    function scrollToCancel() {
      return clearTimeout(ref.scrollTo);
    }
    closure_0 = { scrollTo: -1 };
    return {
      scroll(layout) {
        const index = layout.index;
        ({ delay, expand } = layout);
        clearTimeout(index.scrollTo);
        if (expand) {
          let current = ref.current;
          if (current != null) {
            current.expandActionSheet();
          }
        }
        index.scrollTo = setTimeout(() => {
          const current = closure_1_7.current;
          if (current != null) {
            const obj = { section: null, item: 0, animated: true };
            obj[0] = index;
            current.scrollToLocation(obj);
          }
          closure_1_13(null);
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
          let obj = { index: null, delay: null, expand: true };
          obj[0] = packToScrollToIndex;
          obj[1] = first;
          memo.scroll(obj);
        }
      }
      obj = { index: null, delay: null };
      obj[0] = packToScrollToIndex;
      obj[1] = closure_8;
      memo.scroll(obj);
    }
    return () => {
      closure_14.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionSize, tmp4.sectionSticker];
  const items5 = [sectionFooterSize];
  const callback = onLongPressStickerDetail.useCallback((arg0) => callback(sectionHeights, { label: sectionLabels[arg0], sectionStyle: closure_8.sectionSticker, height: sectionSize }), items4);
  const items6 = [channel, tmp11, first, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection];
  const callback1 = onLongPressStickerDetail.useCallback(() => callback(sectionSize, { height: sectionFooterSize }), items5);
  const items7 = [setCategoryIndex, sectionHeights];
  const callback2 = onLongPressStickerDetail.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (bottomSheetRef(setCategoryIndex[17]).StickerPickerSectionType.STICKERS === type) {
        let obj = { containerWidth: null, stickers: null, rowSize: null, onPressSticker: null, onLongPressStickerDetail: null, focusedSticker: null, setFocusedSticker: null, channel: null };
        obj[0] = callback;
        obj[1] = tmp.stickersByRow[arg1];
        obj[2] = rowSize;
        obj[3] = onPressSticker;
        obj[4] = onLongPressStickerDetail;
        obj[5] = first;
        obj[6] = closure_10;
        obj[7] = channel;
        return callback(bottomSheetIndex(setCategoryIndex[18]), obj);
      } else if (bottomSheetRef(setCategoryIndex[17]).StickerPickerSectionType.NSFW === type) {
        obj = { height: null };
        obj[0] = rowHeight;
        return callback(memo, obj);
      } else {
        return null;
      }
    }
  }, items6);
  const memo1 = onLongPressStickerDetail.useMemo(() => {
    let obj = bottomSheetIndex(setCategoryIndex[19]);
    const debounceResult = obj.debounce((arg0) => {
      let num = 0;
      if (0 < closure_15.length) {
        let num3 = 0;
        let num4 = 0;
        num = 0;
        if (arg0 >= tmp[0]) {
          const sum = num4 + 1;
          const sum1 = num3 + 1;
          num = sum;
          while (sum1 < closure_15.length) {
            num3 = sum1;
            num4 = sum;
            num = sum;
            if (arg0 < closure_15[sum1]) {
              break;
            }
          }
        }
      }
      callback(num);
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
    let obj = { type: bottomSheetRef(setCategoryIndex[20]).FastestListPropsPlaceholderType.SHAPE, colorHex: closure_8.listPlaceholder.color, shape: "rect", borderRadius: bottomSheetIndex(setCategoryIndex[8]).radii.md, paddingVertical: bottomSheetIndex(setCategoryIndex[8]).space.PX_4 };
    obj[0] = obj;
    obj = { type: bottomSheetRef(setCategoryIndex[20]).FastestListPropsPlaceholderType.SHAPE, colorHex: closure_8.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: closure_10, height: closure_10 };
    obj[1] = obj;
    return obj;
  }, items8);
  const effect1 = onLongPressStickerDetail.useEffect(() => () => closure_23.cancel(), items9);
  const items10 = [memo];
  const effect2 = onLongPressStickerDetail.useEffect(() => () => {
    closure_14.cancel();
  }, items10);
  let length;
  if (searchResults != null) {
    length = searchResults.length;
  }
  if (0 === length) {
    obj = { inActionSheet: true, insetTop: null, insetBottom: null };
    obj[1] = num2;
    obj[2] = num;
    let tmp26 = callback(tmp10(tmp8[21]), obj);
  } else {
    obj = { accessibilityLabel: null, estimatedListSize: null, inActionSheet: true, preventNativeModalDismiss: null, insetEnd: null, insetStart: null, itemSize: null, keyboardShouldPersistTaps: "always", listId: "sticker-picker-list", onScroll: null, placeholderConfig: null, renderItem: null, renderSectionHeader: null, renderSectionFooter: null, ref: null, scrollReporting: "callbacks", sections: null, sectionHeaderSize: null, sectionFooterSize: null };
    const intl = tmp7(tmp8[12]).intl;
    obj[0] = intl.string(tmp7(tmp8[12]).t.nf1s3u);
    const tmp10Result = tmp10(tmp8[22]);
    obj[1] = tmp7(tmp8[23]).getCustomKeyboardHeight();
    obj[3] = isPortalKeyboardInModal;
    obj[4] = num;
    obj[5] = num2;
    obj[6] = rowHeight;
    obj[9] = memo1.onScroll;
    obj[10] = memo2;
    obj[11] = callback2;
    obj[12] = callback;
    obj[13] = callback1;
    obj[14] = ref;
    obj[16] = tmp15.sections;
    obj[17] = sectionSize;
    obj[18] = sectionFooterSize;
    tmp26 = callback(tmp10Result, obj);
    const tmp7Result = tmp7(tmp8[23]);
  }
  return tmp26;
});
const result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default memoResult;