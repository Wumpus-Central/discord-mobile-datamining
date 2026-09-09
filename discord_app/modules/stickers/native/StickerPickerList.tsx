// discord_app/modules/stickers/native/StickerPickerList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import PremiumUpsellSectionDividerDefault from "../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import StickerPickerListRowDefault from "StickerPickerListRow.tsx";
import _modDef10447 from "../../../../_runtime/metro/10447__.js";
import useStickerPickerListData from "useStickerPickerListData.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../StickersStore.tsx";

require = fn;
const View = fn(17).View;
const useStickerPickerStore = fn(10422).useStickerPickerStore;
const StickerPickerConstants = fn(10305);
({
  STICKER_SCROLL_LOAD_DELAY_MS: closure_8,
  STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9,
  STICKER_SIZE: c10,
} = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4574);
let obj = { listPlaceholder: null, section: null, sectionSticker: null, nsfwContainer: null, nsfwText: null };
obj = { color: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
const createStyles = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj.section = createStyles;
obj.sectionSticker = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.nsfwContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((height) => {
  const tmp = closure_14();
  let obj = { style: null, children: null };
  const items = [tmp.nsfwContainer, { height: height.height }];
  obj.style = items;
  obj = { source: _modDef10447, size: native.Icon.Sizes.SMALL };
  const items1 = [closure_1_11(native.Icon, obj)];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.uy25Qz);
  items1[1] = closure_1_11(Text_Text.Text, obj);
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
  const items1 = [
    isSectionNitroLocked,
    closure_1_11(Text_Text.Text, {
      lineClamp: 1,
      color: "interactive-text-default",
      variant: "heading-sm/semibold",
      children: label,
    }),
  ];
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
const obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
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
    let items = [
      bottomSheetRef(setCategoryIndex[14]).StickerFormat.PNG,
      bottomSheetRef(setCategoryIndex[14]).StickerFormat.APNG,
      bottomSheetRef(setCategoryIndex[14]).StickerFormat.LOTTIE,
      bottomSheetRef(setCategoryIndex[14]).StickerFormat.GIF,
    ];
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
  let obj = bottomSheetRef(setCategoryIndex[15]);
  const sharedValue = obj.useSharedValue(false);
  const ref = onPressSticker.useRef(0);
  ref2 = onPressSticker.useRef(0);
  let obj1 = bottomSheetRef(setCategoryIndex[16]);
  const isPortalKeyboardInModal = obj1.useIsPortalKeyboardInModal();
  const tmp12 = bottomSheetIndex(setCategoryIndex[17])(flag);
  const containerWidth = tmp12;
  let obj2 = bottomSheetRef(setCategoryIndex[18]);
  const items1 = [channel];
  const stateFromStores = obj2.useStateFromStores(items1, () => channel.hasLoadedStickerPacks);
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
      },
    };
  }, items2);
  const tmp16 = bottomSheetIndex(setCategoryIndex[19])({
    channel,
    containerWidth: tmp12,
    searchResults,
    stickerFormats,
  });
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
  const items4 = [sectionLabels, sectionNitroLocked, sectionSize, tmp4.sectionSticker];
  const items5 = [sectionDividerPositions, sectionFooterSizes, sectionNitroLocked];
  const callback = onPressSticker.useCallback(
    (arg0) =>
      closure_2_11(closure_16, {
        label: sectionLabels[arg0],
        isSectionNitroLocked: sectionNitroLocked[arg0],
        sectionStyle: closure_9.sectionSticker,
        height: sectionSize,
      }),
    items4,
  );
  const items6 = [listHeaderDividerPosition];
  const callback1 = onPressSticker.useCallback((arg0) => {
    if (null != sectionDividerPositions[arg0]) {
      let obj = { position: tmp };
      return closure_2_11(PremiumUpsellSectionDividerDefault, obj);
    } else {
      let tmp3 = true === sectionNitroLocked[arg0];
      if (tmp3) {
        tmp3 = true === tmp2[arg0 + 1];
      }
      obj = { height: sectionFooterSizes[arg0], isSectionNitroLocked: tmp3 };
      return closure_2_11(closure_17, obj);
    }
  }, items5);
  const items7 = [
    channel,
    tmp12,
    focusedSticker,
    onLongPressStickerDetail,
    onPressSticker,
    rowHeight,
    rowSize,
    rowsBySection,
    sectionNitroLocked,
  ];
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
        let obj = {
          containerWidth,
          stickers: tmp.stickersByRow[arg1],
          rowSize,
          isSectionNitroLocked: sectionNitroLocked[arg0],
          onPressSticker,
          onLongPressStickerDetail,
          focusedSticker,
          setFocusedSticker,
          channel,
        };
        let tmp5 = closure_2_11(StickerPickerListRowDefault, obj);
        let tmp2 = closure_2_11;
      } else if (useStickerPickerListData.StickerPickerSectionType.NSFW === type) {
        tmp2 = closure_2_11;
        obj = { height: rowHeight };
        tmp5 = closure_2_11(containerWidth, obj);
      } else {
        return null;
      }
      let tmp18 = tmp5;
      if (true === sectionNitroLocked[arg0]) {
        obj = { children: null };
        const items = [tmp2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {}), tmp5];
        obj.children = items;
        tmp18 = closure_2_12(map1, obj);
      }
      return tmp18;
    }
  }, items7);
  const memo1 = onPressSticker.useMemo(() => {
    let obj = bottomSheetIndex(setCategoryIndex[22]);
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
    obj = {
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
      setUpsell: debounceResult1,
    };
    return obj;
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
    let obj = { sectionHeader: null, sectionItem: null };
    obj = {
      type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
      colorHex: closure_9.listPlaceholder.color,
      shape: "rect",
      borderRadius: nativeDefault.radii.md,
      paddingVertical: nativeDefault.space.PX_4,
    };
    obj.sectionHeader = obj;
    const size = {
      type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
      colorHex: closure_9.listPlaceholder.color,
      shape: "circle",
      shapeCount: rowSize,
      width: height,
      height,
    };
    obj.sectionItem = size;
    return obj;
  }, items11);
  const effect1 = onPressSticker.useEffect(
    () => () => {
      setCategory.cancel();
      setUpsell.cancel();
    },
    items12,
  );
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
  const effect3 = onPressSticker.useEffect(
    () => () => {
      memo.cancel();
    },
    items14,
  );
  let length;
  if (searchResults != null) {
    length = searchResults.length;
  }
  if (0 === length) {
    obj = { inActionSheet: true, insetTop: num2, insetBottom: num };
    let tmp36Result = setFocusedSticker(tmp11(tmp8[24]), obj);
  } else {
    obj = {
      accessibilityLabel: null,
      estimatedListSize: null,
      inActionSheet: true,
      preventNativeModalDismiss: null,
      insetEnd: null,
      insetStart: null,
      itemSize: null,
      keyboardShouldPersistTaps: "always",
      listId: "sticker-picker-list",
      listHeaderSize: null,
      onLayout: null,
      onScroll: null,
      placeholderConfig: null,
      renderItem: null,
      renderListHeader: null,
      renderSectionHeader: null,
      renderSectionFooter: null,
      ref: null,
      scrollReporting: "callbacks",
      sections: null,
      sectionHeaderSize: null,
      sectionFooterSize: null,
      wrapChildren: null,
    };
    let tmp11Result = tmp11(tmp8[25]);
    const intl = tmp7(tmp8[12]).intl;
    obj.accessibilityLabel = intl.string(tmp7(tmp8[12]).t.nf1s3u);
    obj.estimatedListSize = tmp7(tmp8[26]).getCustomKeyboardHeight();
    obj.preventNativeModalDismiss = isPortalKeyboardInModal;
    obj.insetEnd = num;
    obj.insetStart = num2;
    obj.itemSize = rowHeight;
    obj.listHeaderSize = listHeaderSize;
    let tmp31;
    if (someResult) {
      tmp31 = callback5;
    }
    obj.onLayout = tmp31;
    obj.onScroll = memo1.onScroll;
    obj.placeholderConfig = memo2;
    obj.renderItem = callback3;
    obj.renderListHeader = callback2;
    obj.renderSectionHeader = callback;
    obj.renderSectionFooter = callback1;
    obj.ref = ref;
    obj.sections = sections;
    obj.sectionHeaderSize = sectionSize;
    if (someResult) {
      sectionFooterSize = callback4;
    }
    obj.sectionFooterSize = sectionFooterSize;
    obj.wrapChildren = someResult;
    const items15 = [setFocusedSticker(tmp11Result, obj)];
    let tmp38Result = someResult;
    if (someResult) {
      obj1 = { bottomSheetIndex, featureName: null, inPortalKeyboard: null, shouldShow: null };
      tmp11Result = tmp11(tmp8[27]);
      obj1.featureName = tmp7(tmp8[28]).EntitlementFeatureNames.STICKERS_EVERYWHERE;
      obj1.inPortalKeyboard = flag;
      obj1.shouldShow = sharedValue;
      tmp38Result = tmp38(tmp11Result, obj1);
    }
    obj2 = { children: null };
    items15[1] = tmp38Result;
    obj2.children = items15;
    tmp36Result = sharedValue(ref, obj2);
    const tmp7Result = tmp7(tmp8[26]);
  }
  return tmp36Result;
});
