// === Module 10543: StickerPickerList ===

// Module 10543 (StickerPickerList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Text_Text from "Text/Text" /* 4632 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7165 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 10435 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 10436 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 10530 */;
import _modDef10544 from "module_10544" /* 10544 */;
import useStickerPickerListData from "useStickerPickerListData" /* 10545 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5583 */;

require = fn;
const View = fn(17).View;
const useStickerPickerStore = fn(10519).useStickerPickerStore;
const StickerPickerConstants = fn(10402);
({ STICKER_SCROLL_LOAD_DELAY_MS: closure_8, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9, STICKER_SIZE: c10 } = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4636);
let obj = { listPlaceholder: { color: nativeDefault.colors.BACKGROUND_MOD_MUTED }, section: null, sectionSticker: null, nsfwContainer: null, nsfwText: null };
let obj3 = { color: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.section = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.sectionSticker = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.nsfwContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((height) => {
  const tmp = closure_14();
  const obj = { style: null, children: null };
  const items = [tmp.nsfwContainer, { height: height.height }];
  obj.style = items;
  const items1 = [closure_1_11(native.Icon, { source: _modDef10544, size: native.Icon.Sizes.SMALL }), ];
  const obj3 = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.uy25Qz);
  items1[1] = closure_1_11(Text_Text.Text, obj3);
  obj.children = items1;
  return closure_1_12(View, obj);
});
let closure_16 = noop.memo((isSectionNitroLocked) => {
  isSectionNitroLocked = isSectionNitroLocked.isSectionNitroLocked;
  ({ height, label, sectionStyle } = isSectionNitroLocked);
  const obj = { style: null, children: null };
  const items = [closure_14().section, sectionStyle, { height }];
  obj.style = items;
  if (isSectionNitroLocked) {
    isSectionNitroLocked = closure_1_11(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
  }
  const items1 = [isSectionNitroLocked, closure_1_11(Text_Text.Text, { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label })];
  obj.children = items1;
  return closure_1_12(View, obj);
});
let closure_17 = noop.memo((height) => {
  let isSectionNitroLocked = height.isSectionNitroLocked;
  const obj = { style: { height: height.height }, children: null };
  if (isSectionNitroLocked) {
    isSectionNitroLocked = closure_1_11(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
  }
  obj.children = isSectionNitroLocked;
  return closure_1_11(View, obj);
});
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default noop.memo((bottomSheetRef) => {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const setCategoryIndex = bottomSheetRef.setCategoryIndex;
  const searchResults = bottomSheetRef.searchResults;
  const onPressSticker = bottomSheetRef.onPressSticker;
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
    let items = [bottomSheetRef(setCategoryIndex[14]).StickerFormat.PNG, bottomSheetRef(setCategoryIndex[14]).StickerFormat.APNG, bottomSheetRef(setCategoryIndex[14]).StickerFormat.LOTTIE, bottomSheetRef(setCategoryIndex[14]).StickerFormat.GIF];
    stickerFormats = items;
  }
  let ref2;
  sectionFooterSizes = undefined;
  onPressSticker.useRef(null);
  const tmp4 = ref2();
  closure_9 = tmp4;
  let tmp5 = searchResults(onPressSticker.useState(null), 2);
  const focusedSticker = tmp5[0];
  const setFocusedSticker = tmp5[1];
  const sharedValue = bottomSheetRef(setCategoryIndex[15]).useSharedValue(false);
  const ref = onPressSticker.useRef(0);
  ref2 = onPressSticker.useRef(0);
  let obj = bottomSheetRef(setCategoryIndex[15]);
  const isPortalKeyboardInModal = bottomSheetRef(setCategoryIndex[16]).useIsPortalKeyboardInModal();
  const tmp12 = bottomSheetIndex(setCategoryIndex[17])(flag);
  const containerWidth = tmp12;
  let obj2 = bottomSheetRef(setCategoryIndex[16]);
  const items1 = [channel];
  const stateFromStores = bottomSheetRef(setCategoryIndex[18]).useStateFromStores(items1, () => channel.hasLoadedStickerPacks);
  const tmp14 = flag((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  closure_17 = tmp14;
  const items2 = [setCategoryIndex, tmp14, bottomSheetRef];
  const memo = onPressSticker.useMemo(() => {
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
          closure_2_17(null);
        }, delay);
        setCategoryIndex(index);
      },
      cancel() {
        return scrollToCancel;
      }
    };
  }, items2);
  const tmp16 = bottomSheetIndex(setCategoryIndex[19])({ channel, containerWidth: tmp12, searchResults, stickerFormats });
  const sectionHeights = tmp16.sectionHeights;
  const sectionSize = tmp16.sectionSize;
  ({ sectionFooterSize, sectionFooterSizes } = tmp16);
  const sectionDividerPositions = tmp16.sectionDividerPositions;
  const listHeaderDividerPosition = tmp16.listHeaderDividerPosition;
  const sectionLabels = tmp16.sectionLabels;
  const sectionNitroLocked = tmp16.sectionNitroLocked;
  const rowsBySection = tmp16.rowsBySection;
  const rowHeight = tmp16.rowHeight;
  const rowSize = tmp16.rowSize;
  const packToScrollToIndex = tmp16.packToScrollToIndex;
  ({ sections, listHeaderSize } = tmp16);
  const someResult = sectionNitroLocked.some(Boolean);
  c30 = someResult;
  const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
  const effect = onPressSticker.useEffect(() => {
    if (tmp2) {
      if (flag) {
        if (bottomSheetIndex.get() < 1) {
          const obj2 = { index: packToScrollToIndex, delay: delay2, expand: true };
          memo.scroll(obj2);
        }
      }
      const obj = { index: packToScrollToIndex, delay };
      memo.scroll(obj);
    }
    return () => {
      memo.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionNitroLocked, sectionSize, tmp4.sectionSticker];
  const items5 = [sectionDividerPositions, sectionFooterSizes, sectionNitroLocked];
  const callback = onPressSticker.useCallback((arg0) => closure_2_11(closure_16, { label: sectionLabels[arg0], isSectionNitroLocked: sectionNitroLocked[arg0], sectionStyle: closure_9.sectionSticker, height: sectionSize }), items4);
  const items6 = [listHeaderDividerPosition];
  const callback1 = onPressSticker.useCallback((arg0) => {
    if (null != sectionDividerPositions[arg0]) {
      const obj2 = { position: tmp };
      return closure_2_11(PremiumUpsellSectionDividerDefault, obj2);
    } else {
      let tmp3 = true === sectionNitroLocked[arg0];
      if (tmp3) {
        tmp3 = true === tmp2[arg0 + 1];
      }
      const obj = { height: sectionFooterSizes[arg0], isSectionNitroLocked: tmp3 };
      return closure_2_11(closure_17, obj);
    }
  }, items5);
  const items7 = [channel, tmp12, focusedSticker, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection, sectionNitroLocked];
  const callback2 = onPressSticker.useCallback(() => {
    let tmp2 = null;
    if (null != listHeaderDividerPosition) {
      const obj = { position: tmp };
      tmp2 = closure_2_11(PremiumUpsellSectionDividerDefault, obj);
    }
    return tmp2;
  }, items6);
  const items8 = [someResult, sectionHeights, sectionNitroLocked, setCategoryIndex, sharedValue];
  const callback3 = onPressSticker.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (useStickerPickerListData.StickerPickerSectionType.STICKERS === type) {
        const obj2 = { containerWidth, stickers: tmp.stickersByRow[arg1], rowSize, isSectionNitroLocked: sectionNitroLocked[arg0], onPressSticker, onLongPressStickerDetail, focusedSticker, setFocusedSticker, channel };
        let tmp5 = closure_2_11(StickerPickerListRowDefault, obj2);
        let tmp2 = closure_2_11;
      } else if (useStickerPickerListData.StickerPickerSectionType.NSFW === type) {
        tmp2 = closure_2_11;
        const obj = { height: rowHeight };
        tmp5 = closure_2_11(containerWidth, obj);
      } else {
        return null;
      }
      let tmp18 = tmp5;
      if (true === sectionNitroLocked[arg0]) {
        const obj3 = { children: null };
        const items = [tmp2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {}), tmp5];
        obj3.children = items;
        tmp18 = closure_2_12(map1, obj3);
      }
      return tmp18;
    }
  }, items7);
  const memo1 = onPressSticker.useMemo(() => {
    const debounceResult = bottomSheetIndex(setCategoryIndex[22]).debounce((arg0) => {
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
    const obj = bottomSheetIndex(setCategoryIndex[22]);
    const debounceResult1 = bottomSheetIndex(setCategoryIndex[22]).debounce((arg0, arg1) => {
      const sum = arg0 + arg1 / 2;
      let num = 0;
      if (0 < sectionHeights.length) {
        let num3 = 0;
        let num4 = 0;
        num = 0;
        if (sum >= sectionHeights[0]) {
          const sum1 = num4 + 1;
          const sum2 = num3 + 1;
          num = sum1;
          while (sum2 < sectionHeights.length) {
            num3 = sum2;
            num4 = sum1;
            num = sum1;
            if (sum < sectionHeights[sum2]) {
              break;
            }
          }
        }
      }
      const result = sharedValue.set(true === length[Math.min(Math, num, length.length - 1)]);
    }, 100);
    return {
      onScroll(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        ({ contentOffset, layoutMeasurement } = nativeEvent);
        closure_13.current = contentOffset.y;
        const contentSize = nativeEvent.contentSize;
        debounceResult(contentOffset.y);
        if (c30) {
          debounceResult1(contentOffset.y, layoutMeasurement.height);
        }
      },
      setCategory: debounceResult,
      setUpsell: debounceResult1
    };
  }, items8);
  const setCategory = memo1.setCategory;
  const setUpsell = memo1.setUpsell;
  const items9 = [sectionFooterSizes];
  const items10 = [setUpsell];
  const callback4 = onPressSticker.useCallback((arg0) => sectionFooterSizes[arg0], items9);
  const items11 = [tmp4, rowSize];
  const callback5 = onPressSticker.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.layout.height;
    setUpsell(ref.current, ref2.current);
  }, items10);
  const items12 = [setCategory, setUpsell];
  const memo2 = onPressSticker.useMemo(() => {
    const obj = { sectionHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_9.listPlaceholder.color, shape: "rect", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_4 }, sectionItem: null };
    const size = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_9.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: height, height };
    obj.sectionItem = size;
    return obj;
  }, items11);
  const effect1 = onPressSticker.useEffect(() => () => {
    setCategory.cancel();
    setUpsell.cancel();
  }, items12);
  const items13 = [searchResults, setUpsell];
  const effect2 = onPressSticker.useEffect(() => {
    let length;
    if (searchResults != null) {
      length = searchResults.length;
    }
    if (0 === length) {
      ref.current = 0;
    }
    setUpsell(ref.current, ref2.current);
  }, items13);
  const items14 = [memo];
  const effect3 = onPressSticker.useEffect(() => () => {
    memo.cancel();
  }, items14);
  let length;
  if (searchResults != null) {
    length = searchResults.length;
  }
  if (0 === length) {
    const obj4 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    let tmp36Result = setFocusedSticker(tmp11(tmp8[24]), obj4);
  } else {
    const obj5 = { accessibilityLabel: null, estimatedListSize: null, inActionSheet: true, preventNativeModalDismiss: null, insetEnd: null, insetStart: null, itemSize: null, keyboardShouldPersistTaps: "always", listId: "sticker-picker-list", listHeaderSize: null, onLayout: null, onScroll: null, placeholderConfig: null, renderItem: null, renderListHeader: null, renderSectionHeader: null, renderSectionFooter: null, ref: null, scrollReporting: "callbacks", sections: null, sectionHeaderSize: null, sectionFooterSize: null, wrapChildren: null };
    const intl = tmp7(tmp8[12]).intl;
    obj5.accessibilityLabel = intl.string(tmp7(tmp8[12]).t.nf1s3u);
    const tmp11Result = tmp11(tmp8[25]);
    const tmp36 = sharedValue;
    const tmp37 = ref;
    obj5.estimatedListSize = tmp7(tmp8[26]).getCustomKeyboardHeight();
    obj5.preventNativeModalDismiss = isPortalKeyboardInModal;
    obj5.insetEnd = num;
    obj5.insetStart = num2;
    obj5.itemSize = rowHeight;
    obj5.listHeaderSize = listHeaderSize;
    let tmp31;
    if (someResult) {
      tmp31 = callback5;
    }
    obj5.onLayout = tmp31;
    obj5.onScroll = memo1.onScroll;
    obj5.placeholderConfig = memo2;
    obj5.renderItem = callback3;
    obj5.renderListHeader = callback2;
    obj5.renderSectionHeader = callback;
    obj5.renderSectionFooter = callback1;
    obj5.ref = ref;
    obj5.sections = sections;
    obj5.sectionHeaderSize = sectionSize;
    if (someResult) {
      sectionFooterSize = callback4;
    }
    obj5.sectionFooterSize = sectionFooterSize;
    obj5.wrapChildren = someResult;
    const items15 = [setFocusedSticker(tmp11Result, obj5), ];
    let tmp38Result = someResult;
    if (someResult) {
      const obj6 = { bottomSheetIndex, featureName: tmp7(tmp8[28]).EntitlementFeatureNames.STICKERS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: sharedValue };
      tmp38Result = tmp38(tmp11(tmp8[27]), obj6);
      const tmp11Result2 = tmp11(tmp8[27]);
    }
    const obj7 = { children: null };
    items15[1] = tmp38Result;
    obj7.children = items15;
    tmp36Result = tmp36(tmp37, obj7);
    const tmp7Result = tmp7(tmp8[26]);
  }
  return tmp36Result;
});