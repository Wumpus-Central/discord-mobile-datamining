// discord_app/modules/stickers/native/StickerPickerList.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastestListPropsPlaceholder from "../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import PremiumUpsellSectionDividerDefault from "../../premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx";
import PremiumUpsellGradientBackground from "../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import StickerPickerStore from "StickerPickerStore.tsx";
import StickerPickerListRowDefault from "StickerPickerListRow.tsx";
import AssetRegistryDefault from "../../../../_runtime/10143_AssetRegistry.js";
import useStickerPickerListData from "useStickerPickerListData.tsx";
import StickerPickerPremiumSearchUpsellDefault from "StickerPickerPremiumSearchUpsell.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import StickersStore from "../StickersStore.tsx";
import StickerPickerConstants from "StickerPickerConstants.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let bottomSheetRef, constants;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
const View = react_native.View;
const useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
({
  STICKER_SCROLL_LOAD_DELAY_MS: metroImportAll,
  STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: c9,
  STICKER_SIZE: c10,
} = StickerPickerConstants);
({ AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  listPlaceholder: obj2,
  section: obj3,
  sectionSticker: obj4,
  nsfwContainer: obj5,
  nsfwText: { marginLeft: 4, textAlign: "center" },
};
obj2 = { color: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
obj3 = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_16 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (height) => {
        let items;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(12);
        height = height.height;
        const tmp4 = closure_16();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.nsfwContainer) {
          let tmp6;
          let tmp8;
          let tmp12;
          let tmp14;
          if (cResult[3] === tmp5) {
            tmp6 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL };
            const Icon = native.Icon;
            const tmp11 = map1(Icon, obj3);
            cResult[5] = tmp11;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[5];
          }
          const _Symbol2 = Symbol;
          const nsfwText = tmp4.nsfwText;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t.uy25Qz);
            cResult[6] = stringResult;
            tmp12 = stringResult;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== tmp4.nsfwText) {
            const obj4 = {
              style: nsfwText,
              variant: "text-sm/normal",
              color: "interactive-text-active",
              children: tmp12,
            };
            const tmp16 = map1(Text_Text.Text, obj4);
            cResult[7] = tmp4.nsfwText;
            cResult[8] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            let tmp17;
            if (cResult[10] === tmp14) {
              tmp17 = cResult[11];
            }
            return tmp17;
          }
          const obj5 = { style: tmp6, children: items };
          items = [tmp8, tmp14];
          const tmp20 = authStore2(View, obj5);
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
        let intl;
        let items;
        let items1;
        height = height.height;
        const tmp = closure_16();
        const obj = { style: items, children: items1 };
        items = [tmp.nsfwContainer, { height }];
        const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL };
        const Icon = native.Icon;
        items1 = [map1(Icon, obj2)];
        const obj3 = {
          style: tmp.nsfwText,
          variant: "text-sm/normal",
          color: "interactive-text-active",
          children: intl.string(intl2.t.uy25Qz),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = map1(Text, obj3);
        return authStore2(View, obj);
      },
);
let memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let height;
        let isSectionNitroLocked;
        let items;
        let label;
        let sectionStyle;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(14);
        ({ height, label, isSectionNitroLocked, sectionStyle } = arg0);
        const tmp4 = closure_16();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === sectionStyle) {
          if (cResult[3] === tmp4.section) {
            let tmp6;
            let tmp7;
            let tmp10;
            if (cResult[4] === tmp5) {
              tmp6 = cResult[5];
            }
            if (cResult[6] !== isSectionNitroLocked) {
              const tmp8 =
                isSectionNitroLocked && map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
              cResult[6] = isSectionNitroLocked;
              cResult[7] = tmp8;
              tmp7 = tmp8;
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
              const tmp12 = map1(Text_Text.Text, obj3);
              cResult[8] = label;
              cResult[9] = tmp12;
              tmp10 = tmp12;
            } else {
              tmp10 = cResult[9];
            }
            if (cResult[10] === tmp6) {
              if (cResult[11] === tmp7) {
                let tmp13;
                if (cResult[12] === tmp10) {
                  tmp13 = cResult[13];
                }
                return tmp13;
              }
            }
            const obj4 = { style: tmp6, children: items };
            items = [tmp7, tmp10];
            const tmp16 = authStore2(View, obj4);
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
        let height;
        let items;
        let items1;
        let label;
        let sectionStyle;
        isSectionNitroLocked = isSectionNitroLocked.isSectionNitroLocked;
        ({ height, label, sectionStyle } = isSectionNitroLocked);
        const obj = { style: items, children: items1 };
        items = [closure_16().section, sectionStyle, { height }];
        if (isSectionNitroLocked) {
          isSectionNitroLocked = map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
        }
        items1 = [
          isSectionNitroLocked,
          map1(Text_Text.Text, {
            lineClamp: 1,
            color: "interactive-text-default",
            variant: "heading-sm/semibold",
            children: label,
          }),
        ];
        return authStore2(View, obj);
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let height;
        let isSectionNitroLocked;
        let tmp4;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(7);
        ({ height, isSectionNitroLocked } = arg0);
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          tmp4 = obj2;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== isSectionNitroLocked) {
          const tmp6 =
            isSectionNitroLocked && map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
          cResult[2] = isSectionNitroLocked;
          cResult[3] = tmp6;
          tmp5 = tmp6;
        } else {
          tmp5 = cResult[3];
        }
        if (cResult[4] === tmp4) {
          let tmp8;
          if (cResult[5] === tmp5) {
            tmp8 = cResult[6];
          }
          return tmp8;
        }
        const tmp9 = map1(View, { style: tmp4, children: tmp5 });
        cResult[4] = tmp4;
        cResult[5] = tmp5;
        cResult[6] = tmp9;
        tmp8 = tmp9;
      }
    : (height) => {
        let isSectionNitroLocked = height.isSectionNitroLocked;
        const obj = { style: { height: height.height }, children: isSectionNitroLocked };
        if (isSectionNitroLocked) {
          isSectionNitroLocked = map1(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
        }
        return map1(View, obj);
      },
);
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo4Result = memo4(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (bottomSheetRef) => {
        let channel;
        let height;
        let height2;
        let inPortalKeyboard;
        let insetBottom;
        let insetTop;
        let length;
        let onPressSticker;
        let rowSize;
        let searchResults;
        let setCategoryIndex;
        let stickerFormats;
        let tmp15;
        let tmp16;
        let tmp = bottomSheetRef;
        let tmp2 = setCategoryIndex;
        let obj = bottomSheetRef(setCategoryIndex[11]);
        const cResult = obj.c(128);
        bottomSheetRef = bottomSheetRef.bottomSheetRef;
        const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
        setCategoryIndex = bottomSheetRef.setCategoryIndex;
        ({ searchResults, onPressSticker } = bottomSheetRef);
        const onLongPressStickerDetail = bottomSheetRef.onLongPressStickerDetail;
        ({ insetBottom, insetTop, channel } = bottomSheetRef);
        ({ inPortalKeyboard, stickerFormats } = bottomSheetRef);
        let closure_6 = tmp6;
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
          let num = 1;
          cResult[1] = tmp8;
        }
        onLongPressStickerDetail.useRef(null);
        const sectionSticker = closure_16();
        closure_16();
        const tmp11 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
        const focusedSticker = tmp11[0];
        const setFocusedSticker = tmp11[1];
        const tmpResult = tmp(tmp2[18]);
        const sharedValue = tmpResult.useSharedValue(false);
        const ref = onLongPressStickerDetail.useRef(0);
        const ref2 = onLongPressStickerDetail.useRef(0);
        const tmpResult3 = tmp(tmp2[19]);
        const isPortalKeyboardInModal = tmpResult3.useIsPortalKeyboardInModal();
        const containerWidth = bottomSheetIndex(tmp2[20])(tmp6);
        bottomSheetIndex(tmp2[20])(undefined !== inPortalKeyboard && inPortalKeyboard);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [closure_6];
          class K {
            constructor() {
              return closure_6.hasLoadedStickerPacks;
            }
          }
          cResult[2] = items1;
          cResult[3] = K;
          tmp16 = K;
          tmp15 = items1;
        } else {
          tmp15 = cResult[2];
          tmp16 = cResult[3];
        }
        const tmpResult4 = tmp(tmp2[21]);
        const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
          let num3 = 4;
          cResult[4] = J;
          class K {
            constructor() {
              return closure_6.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
        }
        const tmp20 = ref(tmp19);
        closure_16 = tmp20;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
          let num4 = 5;
          cResult[5] = tmp22;
          class K {
            constructor() {
              return closure_6.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
        }
        const scrollTo = tmp21;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
          cResult[6] = tmp24;
          class K {
            constructor() {
              return closure_6.hasLoadedStickerPacks;
            }
          }
        } else {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
        }
        if (cResult[7] === bottomSheetRef) {
          class J {
            constructor(setPackToScrollTo) {
              return setPackToScrollTo.setPackToScrollTo;
            }
          }
        }
        function oe(index) {
          let expand;
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
      }
    : (bottomSheetRef) => {
        let intl;
        let listHeaderSize;
        let num3;
        let obj8;
        let onPressSticker;
        let searchResults;
        let sectionFooterSize;
        let sectionFooterSizes;
        let sections;
        let tmp33Result;
        let tmp37;
        let tmp7Result;
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
          let tmp = bottomSheetRef;
          let tmp2 = setCategoryIndex;
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
        let obj = onLongPressStickerDetail;
        const ref = onLongPressStickerDetail.useRef(null);
        const tmp4 = closure_16();
        let closure_8 = tmp4;
        let tmp5 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
        const focusedSticker = tmp5[0];
        const setFocusedSticker = tmp5[1];
        let obj2 = bottomSheetRef(setCategoryIndex[18]);
        const sharedValue = obj2.useSharedValue(false);
        constants = onLongPressStickerDetail.useRef(0);
        const ref2 = onLongPressStickerDetail.useRef(0);
        let obj3 = bottomSheetRef(setCategoryIndex[19]);
        const isPortalKeyboardInModal = obj3.useIsPortalKeyboardInModal();
        const tmp12 = bottomSheetIndex(setCategoryIndex[20])(flag);
        const containerWidth = tmp12;
        const items1 = [flag];
        const obj4 = bottomSheetRef(setCategoryIndex[21]);
        const stateFromStores = obj4.useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
        const tmp14 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
        closure_16 = tmp14;
        const items2 = [setCategoryIndex, tmp14, bottomSheetRef];
        const memo = onLongPressStickerDetail.useMemo(() => {
          function scrollToCancel() {
            return clearTimeout(closure_0.scrollTo);
          }
          let closure_0 = { scrollTo: -1 };
          let obj = {
            scroll(layout) {
              let expand;
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
          return obj;
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
        let c29 = someResult;
        let tmp18 = null != searchResults && searchResults.nitroLocked.length > 0;
        let closure_30 = tmp18;
        const tmp19 =
          null != searchResults && 0 === searchResults.rest.length && 0 === searchResults.nitroLocked.length;
        let closure_31 = tmp19;
        const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
        const effect = obj.useEffect(() => {
          const tmp2 = null != packToScrollToIndex && stateFromStores;
          if (tmp2) {
            if (flag) {
              if (bottomSheetIndex.get() < 1) {
                const obj2 = { index: packToScrollToIndex, delay, expand: true };
                memo.scroll(obj2);
              }
            }
            const obj = { index: packToScrollToIndex, delay: metroImportAll };
            memo.scroll(obj);
          }
          return () => {
            memo.cancel();
          };
        }, items3);
        const items4 = [sectionLabels, sectionNitroLocked, sectionSize, tmp4.sectionSticker];
        const items5 = [sectionDividerPositions, sectionFooterSizes, sectionNitroLocked];
        const callback = obj.useCallback((arg0) => {
          const obj = {
            label: sectionLabels[arg0],
            isSectionNitroLocked: sectionNitroLocked[arg0],
            sectionStyle: closure_8.sectionSticker,
            height: sectionSize,
          };
          return map1(closure_18, obj);
        }, items4);
        const items6 = [listHeaderDividerPosition];
        const callback1 = obj.useCallback((arg0) => {
          if (null != sectionDividerPositions[arg0]) {
            const obj2 = { position: sectionDividerPositions[arg0] };
            return map1(PremiumUpsellSectionDividerDefault, obj2);
          } else {
            const obj = {
              height: sectionFooterSizes[arg0],
              isSectionNitroLocked: true === sectionNitroLocked[arg0] && true === tmp2[arg0 + 1],
            };
            return map1(closure_19, obj);
          }
        }, items5);
        const items7 = [channel.guild_id, tmp18];
        const callback2 = obj.useCallback(() => {
          let tmp2 = null;
          if (null != listHeaderDividerPosition) {
            const obj = { position: tmp };
            tmp2 = map1(PremiumUpsellSectionDividerDefault, obj);
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
            tmp = map1(StickerPickerPremiumSearchUpsellDefault, obj);
          }
          return tmp;
        }, items7);
        const items9 = [someResult, sectionHeights, sectionNitroLocked, setCategoryIndex, sharedValue];
        const callback4 = obj.useCallback((arg0, arg1) => {
          let items;
          if (null == rowsBySection[arg0]) {
            return null;
          } else {
            let tmp5;
            let tmp2;
            const type = tmp.type;
            if (useStickerPickerListData.StickerPickerSectionType.STICKERS === type) {
              const obj2 = {
                containerWidth,
                stickers: rowsBySection[arg0].stickersByRow[arg1],
                rowSize,
                isSectionNitroLocked: sectionNitroLocked[arg0],
                onPressSticker,
                onLongPressStickerDetail,
                focusedSticker,
                setFocusedSticker,
                channel,
              };
              tmp5 = map1(StickerPickerListRowDefault, obj2);
              tmp2 = map1;
            } else if (useStickerPickerListData.StickerPickerSectionType.NSFW === type) {
              tmp2 = map1;
              const obj = { height: rowHeight };
              tmp5 = map1(closure_17, obj);
            } else {
              return null;
            }
            let tmp18 = tmp5;
            if (true === sectionNitroLocked[arg0]) {
              const obj3 = { children: items };
              items = [tmp2(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {}), tmp5];
              tmp18 = authStore2(closure_15, obj3);
            }
            return tmp18;
          }
        }, items8);
        const memo1 = obj.useMemo(() => {
          let length;
          const obj = bottomSheetIndex(setCategoryIndex[26]);
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
          const obj2 = bottomSheetIndex(setCategoryIndex[26]);
          const debounceResult1 = obj2.debounce((arg0, arg1) => {
            const sum = arg0 + arg1 / 2;
            let num = 0;
            const _Math = Math;
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
            const result = sharedValue.set(true === length[min(_Math, num, length.length - 1)]);
          }, 100);
          return {
            onScroll(nativeEvent) {
              let contentOffset;
              let layoutMeasurement;
              nativeEvent = nativeEvent.nativeEvent;
              ({ contentOffset, layoutMeasurement } = nativeEvent);
              ref.current = contentOffset.y;
              const contentSize = nativeEvent.contentSize;
              bottomSheetRef(contentOffset.y);
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
        const onScroll = memo1.onScroll;
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
            sectionItem: size,
          };
          ({
            type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
            colorHex: closure_8.listPlaceholder.color,
            shape: "rect",
            borderRadius: nativeDefault.radii.md,
            paddingVertical: nativeDefault.space.PX_4,
          });
          size = {
            type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
            colorHex: closure_8.listPlaceholder.color,
            shape: "circle",
            shapeCount: rowSize,
            width: height,
            height,
          };
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
          tmp33Result = ref2(tmp11(tmp8[28]), obj5);
        } else {
          const obj6 = {
            accessibilityLabel: intl.string(bottomSheetRef(setCategoryIndex[14]).t.nf1s3u),
            estimatedListSize: tmp7Result.getCustomKeyboardHeight(),
            inActionSheet: true,
            preventNativeModalDismiss: isPortalKeyboardInModal,
            insetEnd: num,
            insetStart: num2,
            itemSize: rowHeight,
            keyboardShouldPersistTaps: "always",
            listId: "sticker-picker-list",
            listFooterSize: num3,
            listHeaderSize,
            onLayout: tmp37,
            onScroll,
            placeholderConfig: memo2,
            renderItem: callback4,
            renderListFooter: callback3,
            renderListHeader: callback2,
            renderSectionHeader: callback,
            renderSectionFooter: callback1,
            ref,
            scrollReporting: "callbacks",
            sections,
            sectionHeaderSize: sectionSize,
            sectionFooterSize,
            wrapChildren: someResult,
          };
          const tmp11Result = bottomSheetIndex(setCategoryIndex[31]);
          intl = tmp7(tmp8[14]).intl;
          num3 = 0;
          const tmp33 = containerWidth;
          const tmp34 = stateFromStores;
          tmp7Result = bottomSheetRef(setCategoryIndex[29]);
          if (tmp18) {
            num3 = tmp7(tmp8[30]).PREMIUM_EXPRESSION_PICKER_SEARCH_UPSELL_HEIGHT;
          }
          tmp37 = undefined;
          if (someResult) {
            tmp37 = callback6;
          }
          if (someResult) {
            sectionFooterSize = callback5;
          }
          const items16 = [ref2(tmp11Result, obj6)];
          let tmp35Result = someResult;
          if (tmp35Result) {
            let DM_CHANNEL;
            const obj7 = {
              bottomSheetIndex,
              featureName: bottomSheetRef(setCategoryIndex[33]).EntitlementFeatureNames.STICKERS_EVERYWHERE,
              analyticsLocation: obj8,
              inPortalKeyboard: flag,
              shouldShow: sharedValue,
            };
            const tmp11Result2 = bottomSheetIndex(setCategoryIndex[32]);
            if (null != channel.guild_id) {
              DM_CHANNEL = sharedValue.GUILD_CHANNEL;
            } else {
              DM_CHANNEL = sharedValue.DM_CHANNEL;
            }
            obj8 = { page: DM_CHANNEL, section: constants.STICKER_PICKER_UPSELL };
            tmp35Result = tmp35(tmp11Result2, obj7);
          }
          const obj9 = { children: items16 };
          items16[1] = tmp35Result;
          tmp33Result = tmp33(tmp34, obj9);
        }
        return tmp33Result;
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default memo4Result;
