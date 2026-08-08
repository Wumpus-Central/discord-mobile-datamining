// discord_app/modules/stickers/native/StickerPickerList.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "apply";
import { View } from "useStickerPickerListData";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import { useStickerPickerStore } from "useStickerPickerStore";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import jsxProd from "module_9986";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/09984_registerAsset.js";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ STICKER_SCROLL_LOAD_DELAY_MS: metroImportAll, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: c9, STICKER_SIZE: c10 } = PADDING_HORIZONTAL);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { listPlaceholder: null, section: null, sectionSticker: null, nsfwContainer: null, nsfwText: null };
obj = { color: require("Themes").colors.BACKGROUND_MOD_MUTED };
obj[0] = obj;
createCacheKey = { justifyContent: "center", overflow: "hidden", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj2 = { backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj[3] = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
obj[4] = { marginLeft: 4, textAlign: "center" };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = importAllResult.memo((height) => {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.nsfwContainer, { height: height.height }];
  obj = { source: null, size: null };
  obj[0] = registerAsset;
  obj[1] = Button.Icon.Sizes.SMALL;
  const items1 = [callback(Button.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.uy25Qz);
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  let height;
  let label;
  let sectionStyle;
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
const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
const memoResult = importAllResult.memo((bottomSheetRef) => {
  let onPressSticker;
  let searchResults;
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
  let ref;
  let c8;
  let first;
  let closure_10;
  let callback;
  let stateFromStores;
  let callback3;
  let memo;
  let sectionHeights;
  let sectionSize;
  let sectionFooterSize;
  let sectionLabels;
  let rowsBySection;
  let rowHeight;
  let rowSize;
  let packToScrollToIndex;
  let setCategory;
  ref = onLongPressStickerDetail.useRef(null);
  const tmp4 = callback3();
  c8 = tmp4;
  const tmp5 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
  first = tmp5[0];
  closure_10 = tmp5[1];
  let obj = bottomSheetRef(setCategoryIndex[14]);
  const isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
  const tmp11 = bottomSheetIndex(setCategoryIndex[15])(flag);
  callback = tmp11;
  const items1 = [flag];
  stateFromStores = bottomSheetRef(setCategoryIndex[16]).useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
  const tmp13 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  callback3 = tmp13;
  const items2 = [setCategoryIndex, tmp13, bottomSheetRef];
  memo = onLongPressStickerDetail.useMemo(() => {
    function scrollToCancel() {
      return clearTimeout(ref.scrollTo);
    }
    let closure_0 = { scrollTo: -1 };
    return {
      scroll(index) {
        let delay;
        let expand;
        index = index.index;
        ({ delay, expand } = index);
        clearTimeout(index.scrollTo);
        if (expand) {
          let current = ref.current;
          if (current != null) {
            current.expandActionSheet();
          }
        }
        index.scrollTo = setTimeout(() => {
          const current = outer1_7.current;
          if (current != null) {
            const obj = { section: null, item: 0, animated: true };
            obj[0] = index;
            current.scrollToLocation(obj);
          }
          outer1_13(null);
        }, delay);
        outer1_2(index);
      },
      cancel() {
        return scrollToCancel;
      }
    };
  }, items2);
  let tmp15 = bottomSheetIndex(setCategoryIndex[17])({ channel, containerWidth: tmp11, searchResults, stickerFormats });
  sectionHeights = tmp15.sectionHeights;
  sectionSize = tmp15.sectionSize;
  sectionFooterSize = tmp15.sectionFooterSize;
  sectionLabels = tmp15.sectionLabels;
  rowsBySection = tmp15.rowsBySection;
  rowHeight = tmp15.rowHeight;
  rowSize = tmp15.rowSize;
  packToScrollToIndex = tmp15.packToScrollToIndex;
  const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
  const effect = onLongPressStickerDetail.useEffect(() => {
    if (tmp2) {
      if (flag) {
        if (bottomSheetIndex.get() < 1) {
          let obj = { index: null, delay: null, expand: true };
          obj[0] = tmp;
          obj[1] = first;
          memo.scroll(obj);
        }
      }
      obj = { index: null, delay: null };
      obj[0] = tmp;
      obj[1] = c8;
      memo.scroll(obj);
    }
    return () => {
      closure_14.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionSize, tmp4.sectionSticker];
  const items5 = [sectionFooterSize];
  callback = onLongPressStickerDetail.useCallback((arg0) => _undefined2(sectionHeights, { label: sectionLabels[arg0], sectionStyle: _undefined.sectionSticker, height: sectionSize }), items4);
  const items6 = [channel, tmp11, first, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection];
  const callback1 = onLongPressStickerDetail.useCallback(() => _undefined2(sectionSize, { height: sectionFooterSize }), items5);
  const items7 = [setCategoryIndex, sectionHeights];
  const callback2 = onLongPressStickerDetail.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (bottomSheetRef(setCategoryIndex[17]).StickerPickerSectionType.STICKERS === type) {
        let obj = { containerWidth: null, stickers: null, rowSize: null, onPressSticker: null, onLongPressStickerDetail: null, focusedSticker: null, setFocusedSticker: null, channel: null };
        obj[0] = _undefined2;
        obj[1] = tmp.stickersByRow[arg1];
        obj[2] = rowSize;
        obj[3] = onPressSticker;
        obj[4] = onLongPressStickerDetail;
        obj[5] = first;
        obj[6] = closure_10;
        obj[7] = channel;
        return _undefined2(bottomSheetIndex(tmp16[18]), obj);
      } else if (tmp15(tmp16[17]).StickerPickerSectionType.NSFW === type) {
        obj = { height: null };
        obj[0] = rowHeight;
        return _undefined2(memo, obj);
      } else {
        return null;
      }
      tmp15 = bottomSheetRef;
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
    const bottomSheetRef = debounceResult;
    obj = {
      onScroll(nativeEvent) {
        debounceResult(nativeEvent.nativeEvent.contentOffset.y);
      },
      setCategory: debounceResult
    };
    return obj;
  }, items7);
  setCategory = memo1.setCategory;
  const items8 = [tmp4, rowSize];
  const items9 = [setCategory];
  const memo2 = onLongPressStickerDetail.useMemo(() => {
    let obj = { sectionHeader: null, sectionItem: null };
    obj = { type: bottomSheetRef(setCategoryIndex[20]).FastestListPropsPlaceholderType.SHAPE, colorHex: _undefined.listPlaceholder.color, shape: "rect", borderRadius: bottomSheetIndex(setCategoryIndex[8]).radii.md, paddingVertical: bottomSheetIndex(setCategoryIndex[8]).space.PX_4 };
    obj[0] = obj;
    obj = { type: bottomSheetRef(setCategoryIndex[20]).FastestListPropsPlaceholderType.SHAPE, colorHex: _undefined.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: closure_10, height: closure_10 };
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default memoResult;