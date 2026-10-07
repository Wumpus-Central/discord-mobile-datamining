// discord_app/modules/stickers/native/StickerPickerList.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import PremiumUpsellSectionDividerDefault from "../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import StickerPickerListRowDefault from "StickerPickerListRow.tsx";
import _modDef10156 from "../../../../_runtime/metro/10156__.js";
import useStickerPickerListData from "useStickerPickerListData.tsx";
import StickerPickerPremiumSearchUpsellDefault from "StickerPickerPremiumSearchUpsell.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../StickersStore.tsx";

require = fn;
const View = fn(17).View;
const useStickerPickerStore = fn(10127).useStickerPickerStore;
const StickerPickerConstants = fn(10095);
({
  STICKER_SCROLL_LOAD_DELAY_MS: closure_8,
  STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9,
  STICKER_SIZE: c10,
} = StickerPickerConstants);
const Constants = fn(1085);
({ AnalyticsPages: closure_11, AnalyticsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  listPlaceholder: { color: nativeDefault.colors.BACKGROUND_MOD_MUTED },
  section: null,
  sectionSticker: null,
  nsfwContainer: null,
  nsfwText: null,
};
let obj3 = { color: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.section = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let obj4 = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj.sectionSticker = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
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
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (height) => {
        const cResult = c.c(12);
        height = height.height;
        const tmp4 = closure_16();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.nsfwContainer) {
          if (cResult[3] === tmp5) {
            let tmp6 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { source: _modDef10156, size: native.Icon.Sizes.SMALL };
            const tmp11 = __initData2(native.Icon, obj3);
            cResult[5] = tmp11;
            let tmp8 = tmp11;
          } else {
            tmp8 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.uy25Qz);
            cResult[6] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== tmp4.nsfwText) {
            const obj4 = {
              style: tmp4.nsfwText,
              variant: "text-sm/normal",
              color: "interactive-text-active",
              children: tmp12,
            };
            const tmp16 = __initData2(Text_Text.Text, obj4);
            cResult[7] = tmp4.nsfwText;
            cResult[8] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp14) {
              let tmp17 = cResult[11];
            }
            return tmp17;
          }
          const obj5 = { style: tmp6, children: null };
          const items = [tmp8, tmp14];
          obj5.children = items;
          const tmp20 = state(View, obj5);
          cResult[9] = tmp6;
          cResult[10] = tmp14;
          cResult[11] = tmp20;
          tmp17 = tmp20;
        }
        const items1 = [tmp4.nsfwContainer, tmp5];
        cResult[2] = tmp4.nsfwContainer;
        cResult[3] = tmp5;
        cResult[4] = items1;
        tmp6 = items1;
      }
    : (height) => {
        const tmp = closure_16();
        const obj = { style: null, children: null };
        const items = [tmp.nsfwContainer, { height: height.height }];
        obj.style = items;
        const items1 = [__initData2(native.Icon, { source: _modDef10156, size: native.Icon.Sizes.SMALL })];
        const obj3 = {
          style: tmp.nsfwText,
          variant: "text-sm/normal",
          color: "interactive-text-active",
          children: null,
        };
        const intl = util.intl;
        obj3.children = intl.string(util.t.uy25Qz);
        items1[1] = __initData2(Text_Text.Text, obj3);
        obj.children = items1;
        return state(View, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(14);
        ({ height, label, isSectionNitroLocked, sectionStyle } = arg0);
        const tmp4 = closure_16();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === sectionStyle) {
          if (cResult[3] === tmp4.section) {
            if (cResult[4] === tmp5) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] !== isSectionNitroLocked) {
              let tmp8 = isSectionNitroLocked;
              if (isSectionNitroLocked) {
                tmp8 = __initData2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
              }
              cResult[6] = isSectionNitroLocked;
              cResult[7] = tmp8;
              let tmp7 = tmp8;
            } else {
              tmp7 = cResult[7];
            }
            if (cResult[8] !== label) {
              const obj3 = {
                lineClamp: 1,
                color: "interactive-text-default",
                variant: "heading-sm/semibold",
                children: label,
              };
              const tmp12 = __initData2(Text_Text.Text, obj3);
              cResult[8] = label;
              cResult[9] = tmp12;
              let tmp10 = tmp12;
            } else {
              tmp10 = cResult[9];
            }
            if (cResult[10] === tmp6) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp10) {
                  let tmp13 = cResult[13];
                }
                return tmp13;
              }
            }
            const obj4 = { style: tmp6, children: null };
            const items = [tmp7, tmp10];
            obj4.children = items;
            const tmp16 = state(View, obj4);
            cResult[10] = tmp6;
            cResult[11] = tmp7;
            cResult[12] = tmp10;
            cResult[13] = tmp16;
            tmp13 = tmp16;
          }
        }
        const items1 = [tmp4.section, sectionStyle, tmp5];
        cResult[2] = sectionStyle;
        cResult[3] = tmp4.section;
        cResult[4] = tmp5;
        cResult[5] = items1;
        tmp6 = items1;
      }
    : (isSectionNitroLocked) => {
        isSectionNitroLocked = isSectionNitroLocked.isSectionNitroLocked;
        ({ height, label, sectionStyle } = isSectionNitroLocked);
        const obj = { style: null, children: null };
        const items = [closure_16().section, sectionStyle, { height }];
        obj.style = items;
        if (isSectionNitroLocked) {
          isSectionNitroLocked = __initData2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
        }
        const items1 = [
          isSectionNitroLocked,
          __initData2(Text_Text.Text, {
            lineClamp: 1,
            color: "interactive-text-default",
            variant: "heading-sm/semibold",
            children: label,
          }),
        ];
        obj.children = items1;
        return state(View, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(7);
        ({ height, isSectionNitroLocked } = arg0);
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          let tmp4 = obj2;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== isSectionNitroLocked) {
          let tmp6 = isSectionNitroLocked;
          if (isSectionNitroLocked) {
            tmp6 = __initData2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
          }
          cResult[2] = isSectionNitroLocked;
          cResult[3] = tmp6;
          let tmp5 = tmp6;
        } else {
          tmp5 = cResult[3];
        }
        if (cResult[4] === tmp4) {
          if (cResult[5] === tmp5) {
            let tmp8 = cResult[6];
          }
          return tmp8;
        }
        const tmp9 = __initData2(View, { style: tmp4, children: tmp5 });
        cResult[4] = tmp4;
        cResult[5] = tmp5;
        cResult[6] = tmp9;
        tmp8 = tmp9;
      }
    : (height) => {
        let isSectionNitroLocked = height.isSectionNitroLocked;
        const obj = { style: { height: height.height }, children: null };
        if (isSectionNitroLocked) {
          isSectionNitroLocked = __initData2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
        }
        obj.children = isSectionNitroLocked;
        return __initData2(View, obj);
      },
);
ReactCompilerGating = fn(558);
let obj6 = {
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

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (bottomSheetRef) => {
        const cResult = bottomSheetRef(setCategoryIndex[11]).c(128);
        bottomSheetRef = bottomSheetRef.bottomSheetRef;
        const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
        setCategoryIndex = bottomSheetRef.setCategoryIndex;
        ({ searchResults, onPressSticker } = bottomSheetRef);
        const onLongPressStickerDetail = bottomSheetRef.onLongPressStickerDetail;
        ({ insetBottom, insetTop, channel } = bottomSheetRef);
        ({ inPortalKeyboard, stickerFormats } = bottomSheetRef);
        closure_6 = tmp6;
        if (cResult[0] !== stickerFormats) {
          let tmp8 = stickerFormats;
          if (undefined === stickerFormats) {
            let items = [
              tmp(tmp2[17]).StickerFormat.PNG,
              tmp(tmp2[17]).StickerFormat.APNG,
              tmp(tmp2[17]).StickerFormat.LOTTIE,
              tmp(tmp2[17]).StickerFormat.GIF,
            ];
            tmp8 = items;
          }
          cResult[0] = stickerFormats;
          cResult[1] = tmp8;
        }
        onLongPressStickerDetail.useRef(null);
        let obj = bottomSheetRef(setCategoryIndex[11]);
        const sectionSticker = closure_16();
        const tmp11 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
        const focusedSticker = tmp11[0];
        const setFocusedSticker = tmp11[1];
        const tmp10 = closure_16();
        const sharedValue = bottomSheetRef(setCategoryIndex[18]).useSharedValue(false);
        const ref = onLongPressStickerDetail.useRef(0);
        onLongPressStickerDetail.useRef(0);
        const tmpResult = bottomSheetRef(setCategoryIndex[18]);
        const isPortalKeyboardInModal = bottomSheetRef(setCategoryIndex[19]).useIsPortalKeyboardInModal();
        const tmpResult3 = bottomSheetRef(setCategoryIndex[19]);
        const containerWidth = bottomSheetIndex(setCategoryIndex[20])(
          undefined !== inPortalKeyboard && inPortalKeyboard,
        );
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [closure_6];
          class K {
            constructor() {
              return inPortalKeyboard.hasLoadedStickerPacks;
            }
          }
          cResult[2] = items1;
          cResult[3] = K;
          let tmp16 = K;
          let tmp15 = items1;
        } else {
          tmp15 = cResult[2];
          tmp16 = cResult[3];
        }
        const tmp14 = bottomSheetIndex(setCategoryIndex[20])(undefined !== inPortalKeyboard && inPortalKeyboard);
        const stateFromStores = bottomSheetRef(setCategoryIndex[21]).useStateFromStores(tmp15, tmp16);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
          cResult[4] = J;
          class K {
            constructor() {
              return inPortalKeyboard.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
        }
        const tmp20 = ref(tmp19);
        closure_16 = tmp20;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
          cResult[5] = tmp22;
          class K {
            constructor() {
              return inPortalKeyboard.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
          cResult[6] = tmp24;
          class K {
            constructor() {
              return inPortalKeyboard.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
        }
        if (cResult[7] === bottomSheetRef) {
          class J {
            constructor(arg0) {
              return bottomSheetRef.setPackToScrollTo;
            }
          }
        }
        function oe(index) {
          index = index.index;
          ({ delay, expand } = index);
          tmp23();
          if (expand) {
            let current = index.current;
            if (current != null) {
              current.expandActionSheet();
            }
          }
          closure_17.scrollTo = setTimeout(() => {
            const current = ref.current;
            if (current != null) {
              const obj = { section: index, item: 0, animated: true };
              current.scrollToLocation(obj);
            }
            closure_16(null);
          }, delay);
          setCategoryIndex(index);
        }
        cResult[7] = bottomSheetRef;
        cResult[8] = setCategoryIndex;
        cResult[9] = tmp20;
        cResult[10] = oe;
        const tmpResult4 = bottomSheetRef(setCategoryIndex[21]);
      }
    : (bottomSheetRef) => {
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
          let items = [
            bottomSheetRef(setCategoryIndex[17]).StickerFormat.PNG,
            bottomSheetRef(setCategoryIndex[17]).StickerFormat.APNG,
            bottomSheetRef(setCategoryIndex[17]).StickerFormat.LOTTIE,
            bottomSheetRef(setCategoryIndex[17]).StickerFormat.GIF,
          ];
          stickerFormats = items;
        }
        closure_16 = undefined;
        sectionFooterSizes = undefined;
        const ref = onLongPressStickerDetail.useRef(null);
        const tmp4 = closure_16();
        closure_8 = tmp4;
        let tmp5 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
        const focusedSticker = tmp5[0];
        const setFocusedSticker = tmp5[1];
        const sharedValue = bottomSheetRef(setCategoryIndex[18]).useSharedValue(false);
        constants = onLongPressStickerDetail.useRef(0);
        const ref2 = onLongPressStickerDetail.useRef(0);
        let obj2 = bottomSheetRef(setCategoryIndex[18]);
        const isPortalKeyboardInModal = bottomSheetRef(setCategoryIndex[19]).useIsPortalKeyboardInModal();
        const tmp12 = bottomSheetIndex(setCategoryIndex[20])(flag);
        const containerWidth = tmp12;
        let obj3 = bottomSheetRef(setCategoryIndex[19]);
        const items1 = [flag];
        const stateFromStores = bottomSheetRef(setCategoryIndex[21]).useStateFromStores(
          items1,
          () => flag.hasLoadedStickerPacks,
        );
        const tmp14 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
        closure_16 = tmp14;
        const items2 = [setCategoryIndex, tmp14, bottomSheetRef];
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
                closure_2_16(null);
              }, delay);
              setCategoryIndex(index);
            },
            cancel() {
              return scrollToCancel;
            },
          };
        }, items2);
        const tmp16 = bottomSheetIndex(setCategoryIndex[22])({
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
        c29 = someResult;
        closure_30 = tmp18;
        const tmp19 =
          null != searchResults && 0 === searchResults.rest.length && 0 === searchResults.nitroLocked.length;
        closure_31 = tmp19;
        const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
        const effect = obj.useEffect(() => {
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
        const callback = obj.useCallback(
          (arg0) =>
            __initData2(closure_18, {
              label: sectionLabels[arg0],
              isSectionNitroLocked: sectionNitroLocked[arg0],
              sectionStyle: closure_8.sectionSticker,
              height: sectionSize,
            }),
          items4,
        );
        const items6 = [listHeaderDividerPosition];
        const callback1 = obj.useCallback((arg0) => {
          if (null != sectionDividerPositions[arg0]) {
            const obj2 = { position: tmp };
            return __initData2(PremiumUpsellSectionDividerDefault, obj2);
          } else {
            let tmp3 = true === sectionNitroLocked[arg0];
            if (tmp3) {
              tmp3 = true === tmp2[arg0 + 1];
            }
            const obj = { height: sectionFooterSizes[arg0], isSectionNitroLocked: tmp3 };
            return __initData2(closure_19, obj);
          }
        }, items5);
        const items7 = [channel.guild_id, null != searchResults && searchResults.nitroLocked.length > 0];
        const callback2 = obj.useCallback(() => {
          let tmp2 = null;
          if (null != listHeaderDividerPosition) {
            const obj = { position: tmp };
            tmp2 = __initData2(PremiumUpsellSectionDividerDefault, obj);
          }
          return tmp2;
        }, items6);
        const items8 = [
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
        const callback3 = obj.useCallback(() => {
          let tmp = null;
          if (closure_30) {
            const obj = { guildId: channel.guild_id };
            tmp = __initData2(StickerPickerPremiumSearchUpsellDefault, obj);
          }
          return tmp;
        }, items7);
        const items9 = [someResult, sectionHeights, sectionNitroLocked, setCategoryIndex, sharedValue];
        const callback4 = obj.useCallback((arg0, arg1) => {
          if (null == rowsBySection[arg0]) {
            return null;
          } else {
            const type = tmp.type;
            if (useStickerPickerListData.StickerPickerSectionType.STICKERS === type) {
              const obj2 = {
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
              let tmp5 = __initData2(StickerPickerListRowDefault, obj2);
              let tmp2 = __initData2;
            } else if (useStickerPickerListData.StickerPickerSectionType.NSFW === type) {
              tmp2 = __initData2;
              const obj = { height: rowHeight };
              tmp5 = __initData2(closure_17, obj);
            } else {
              return null;
            }
            let tmp18 = tmp5;
            if (true === sectionNitroLocked[arg0]) {
              const obj3 = { children: null };
              const items = [tmp2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {}), tmp5];
              obj3.children = items;
              tmp18 = state(closure_2_15, obj3);
            }
            return tmp18;
          }
        }, items8);
        const memo1 = obj.useMemo(() => {
          const debounceResult = bottomSheetIndex(setCategoryIndex[26]).debounce((arg0) => {
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
          const obj = bottomSheetIndex(setCategoryIndex[26]);
          const debounceResult1 = bottomSheetIndex(setCategoryIndex[26]).debounce((arg0, arg1) => {
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
              closure_12.current = contentOffset.y;
              const contentSize = nativeEvent.contentSize;
              debounceResult(contentOffset.y);
              if (c29) {
                debounceResult1(contentOffset.y, layoutMeasurement.height);
              }
            },
            setCategory: debounceResult,
            setUpsell: debounceResult1,
          };
        }, items9);
        const setCategory = memo1.setCategory;
        const setUpsell = memo1.setUpsell;
        const items10 = [sectionFooterSizes];
        const items11 = [setUpsell];
        const callback5 = obj.useCallback((arg0) => sectionFooterSizes[arg0], items10);
        const items12 = [tmp4, rowSize];
        const callback6 = obj.useCallback((nativeEvent) => {
          ref2.current = nativeEvent.nativeEvent.layout.height;
          setUpsell(ref.current, ref2.current);
        }, items11);
        const items13 = [setCategory, setUpsell];
        const memo2 = obj.useMemo(() => {
          const obj = {
            sectionHeader: {
              type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
              colorHex: closure_8.listPlaceholder.color,
              shape: "rect",
              borderRadius: nativeDefault.radii.md,
              paddingVertical: nativeDefault.space.PX_4,
            },
            sectionItem: null,
          };
          const size = {
            type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
            colorHex: closure_8.listPlaceholder.color,
            shape: "circle",
            shapeCount: rowSize,
            width: height,
            height,
          };
          obj.sectionItem = size;
          return obj;
        }, items12);
        const effect1 = obj.useEffect(
          () => () => {
            setCategory.cancel();
            setUpsell.cancel();
          },
          items13,
        );
        const items14 = [tmp19, searchResults, setUpsell];
        const effect2 = obj.useEffect(() => {
          if (closure_31) {
            ref.current = 0;
          }
          setUpsell(ref.current, ref2.current);
        }, items14);
        const items15 = [memo];
        const effect3 = obj.useEffect(
          () => () => {
            memo.cancel();
          },
          items15,
        );
        if (tmp19) {
          const obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
          let tmp33Result = ref2(tmp11(tmp8[28]), obj5);
        } else {
          const obj6 = {
            accessibilityLabel: null,
            estimatedListSize: null,
            inActionSheet: true,
            preventNativeModalDismiss: null,
            insetEnd: null,
            insetStart: null,
            itemSize: null,
            keyboardShouldPersistTaps: "always",
            listId: "sticker-picker-list",
            listFooterSize: null,
            listHeaderSize: null,
            onLayout: null,
            onScroll: null,
            placeholderConfig: null,
            renderItem: null,
            renderListFooter: null,
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
          const intl = tmp7(tmp8[14]).intl;
          obj6.accessibilityLabel = intl.string(tmp7(tmp8[14]).t.nf1s3u);
          const tmp11Result = tmp11(tmp8[31]);
          const tmp33 = containerWidth;
          const tmp34 = stateFromStores;
          obj6.estimatedListSize = tmp7(tmp8[29]).getCustomKeyboardHeight();
          obj6.preventNativeModalDismiss = isPortalKeyboardInModal;
          obj6.insetEnd = num;
          obj6.insetStart = num2;
          obj6.itemSize = rowHeight;
          let num3 = 0;
          if (tmp18) {
            num3 = tmp7(tmp8[30]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
          }
          obj6.listFooterSize = num3;
          obj6.listHeaderSize = listHeaderSize;
          let tmp37;
          if (someResult) {
            tmp37 = callback6;
          }
          obj6.onLayout = tmp37;
          obj6.onScroll = memo1.onScroll;
          obj6.placeholderConfig = memo2;
          obj6.renderItem = callback4;
          obj6.renderListFooter = callback3;
          obj6.renderListHeader = callback2;
          obj6.renderSectionHeader = callback;
          obj6.renderSectionFooter = callback1;
          obj6.ref = ref;
          obj6.sections = sections;
          obj6.sectionHeaderSize = sectionSize;
          if (someResult) {
            sectionFooterSize = callback5;
          }
          obj6.sectionFooterSize = sectionFooterSize;
          obj6.wrapChildren = someResult;
          const items16 = [ref2(tmp11Result, obj6)];
          if (!someResult) {
            const obj7 = { children: null };
            items16[1] = someResult;
            obj7.children = items16;
            tmp33Result = tmp33(tmp34, obj7);
          } else {
            const obj8 = {
              bottomSheetIndex,
              featureName: tmp7(tmp8[33]).EntitlementFeatureNames.STICKERS_EVERYWHERE,
              analyticsLocation: null,
              inPortalKeyboard: null,
              shouldShow: null,
            };
            if (null != channel.guild_id) {
              let DM_CHANNEL = sharedValue.GUILD_CHANNEL;
            } else {
              DM_CHANNEL = sharedValue.DM_CHANNEL;
            }
            const obj9 = { page: DM_CHANNEL, section: constants.STICKER_PICKER_UPSELL };
            obj8.analyticsLocation = obj9;
            obj8.inPortalKeyboard = flag;
            obj8.shouldShow = sharedValue;
            tmp35(tmp11(tmp8[32]), obj8);
            const tmp11Result2 = tmp11(tmp8[32]);
          }
          const tmp7Result = tmp7(tmp8[29]);
        }
        return tmp33Result;
      },
);
