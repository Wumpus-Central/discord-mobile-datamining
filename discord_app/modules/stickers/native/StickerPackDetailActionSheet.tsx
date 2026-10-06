// === Module 10133: StickerPackDetailActionSheet ===

// Module 10133 (StickerPackDetailActionSheet)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 10139 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StickerPickerConstants from "StickerPickerConstants" /* 10095 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, stickerPack;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ MIN_MARGIN: hasOwnProperty, STICKER_SIZE: metroRequire } = StickerPickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "applicationId" }, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stickerPack) => {
  let closure_5;
  let first;
  let first1;
  let items2;
  let onClose;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let obj = stickerPack(onClose[8]);
  const cResult = obj.c(47);
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  onClose = stickerPack.onClose;
  const tmp4 = closure_12();
  let obj2 = first;
  const width = analyticsPopoutType(onClose[9])().width;
  const tmp6 = _slicedToArray(first.useState(null), 2);
  [r10026, _slicedToArray] = tmp6;
  [first, closure_5] = first.useState(false);
  const ref = first.useRef(null);
  const bottom = analyticsPopoutType(onClose[10])().bottom;
  const rounded = Math.floor(Math.min(closure_8, width) / (ref + closure_5));
  const obj3 = analyticsPopoutType(onClose[11]);
  obj3.chunk(stickerPack.stickers, rounded);
  closure_8 = first.useRef(onClose);
  const tmp5 = analyticsPopoutType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      _slicedToArray(arg0);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== first) {
    const fn2 = function x() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      closure_5(!first);
      if (!first) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => closure_1_5(false), 4000);
      }
    };
    cResult[1] = first;
    cResult[2] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== onClose) {
    const fn3 = function j() {
      closure_8.current = onClose;
    };
    const items = [onClose];
    cResult[3] = onClose;
    cResult[4] = fn3;
    cResult[5] = items;
    tmp14 = items;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const effect = obj2.useEffect(tmp13, tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        return () => {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        };
      }
    }
    const items1 = [];
    cResult[6] = W;
    cResult[7] = items1;
    tmp17 = items1;
  } else {
    class W {
      constructor() {
        return () => {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        };
      }
    }
    tmp17 = cResult[7];
  }
  const effect1 = obj2.useEffect(W, tmp17);
  if (cResult[8] === analyticsPopoutType) {
    class W {
      constructor() {
        return () => {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        };
      }
    }
    const effect2 = obj2.useEffect(U, items2);
    BottomSheet = tmp(tmp2[13]).BottomSheet;
    if (cResult[12] === stickerPack) {
      class W {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      if (cResult[15] === stickerPack) {
        class W {
          constructor() {
            return () => {
              const current = ref.current;
              let currentResult;
              if (current != null) {
                currentResult = current();
              }
              return currentResult;
            };
          }
        }
      }
      const obj4 = { stickerPack, style: tmp4.header, onPress: tmp20, withBanner: true, withDescription: true };
      cResult[15] = stickerPack;
      cResult[16] = tmp4.header;
      cResult[17] = tmp20;
      cResult[18] = first1(tmp5(onClose[15]), obj4);
      const tmp24 = first1(tmp5(onClose[15]), obj4);
    }
    const tmpResult = stickerPack(onClose[14]);
    if (tmpResult.doesStickerPackHavePopoutInformation(stickerPack)) {
      class W {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
    }
    cResult[12] = stickerPack;
    cResult[13] = tmp12;
    cResult[14] = undefined;
  }
  class U {
    constructor() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
      obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
    }
  }
  items2 = [analyticsPopoutType, stickerPack.id];
  cResult[8] = analyticsPopoutType;
  cResult[9] = stickerPack.id;
  cResult[10] = U;
  cResult[11] = items2;
}) : ((stickerPack) => {
  let BottomSheetScrollView;
  let _undefined;
  let c3;
  let closure_5;
  let first;
  let items2;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let tmp17;
  let tmp5;
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  let closure_8;
  function onPressSticker(arg0) {
    _undefined(arg0);
  }
  function toggleDisplayingPackDetails() {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    closure_5(!first);
    if (!first) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => closure_1_5(false), 4000);
    }
  }
  const tmp = closure_12();
  const width = analyticsPopoutType(onClose[9])().width;
  [tmp5, c3] = _slicedToArray(first.useState(null), 2);
  const tmp4 = _slicedToArray(first.useState(null), 2);
  [first, closure_5] = first.useState(false);
  const ref = first.useRef(null);
  const bottom = analyticsPopoutType(onClose[10])().bottom;
  const rounded = Math.floor(Math.min(closure_8, width) / (ref + closure_5));
  let obj = analyticsPopoutType(onClose[11]);
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  closure_8 = first.useRef(onClose);
  const items = [onClose];
  const effect = first.useEffect(() => {
    closure_8.current = onClose;
  }, items);
  const effect1 = first.useEffect(() => () => {
    const current = ref.current;
    let currentResult;
    if (current != null) {
      currentResult = current();
    }
    return currentResult;
  }, []);
  const items1 = [analyticsPopoutType, stickerPack.id];
  const effect2 = first.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }, items1);
  BottomSheet = stickerPack(onClose[13]).BottomSheet;
  let obj2 = { stickerPack, style: tmp.header, onPress: tmp17, withBanner: true, withDescription: true };
  tmp17 = undefined;
  const tmp16 = analyticsPopoutType(onClose[15]);
  const obj3 = stickerPack(onClose[14]);
  if (obj3.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  const obj4 = { scrollable: true, startExpanded: true, handleDisabled: true, header: closure_11(closure_10, obj5), children: onPressSticker(BottomSheetScrollView, obj6) };
  obj5 = { children: items2 };
  items2 = [onPressSticker(tmp16, obj2), onPressSticker(stickerPack(onClose[16]).ActionSheetHeaderBar, { variant: "floating" })];
  obj6 = {
    style: tmp.stickers,
    contentContainerStyle: obj7,
    children: chunkResult.map((stickers, index) => {
      const obj = { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false };
      return React4(StickerPickerListRowDefault, obj, index);
    })
  };
  obj7 = { paddingBottom: 32 + bottom };
  BottomSheetScrollView = tmp15(tmp3[17]).BottomSheetScrollView;
  const children = [onPressSticker(BottomSheet, obj4), , ];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj8 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
          return _undefined(null);
        },
      children: onPressSticker(analyticsPopoutType(onClose[20]), obj9)
    };
    const PressableOpacity = tmp15(tmp3[19]).PressableOpacity;
    obj9 = { sticker: tmp5, size: 128 };
    tmp14Result = tmp14(PressableOpacity, obj8);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj10 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first = tmp14(tmp2(tmp3[14]), obj10);
  }
  children[2] = first;
  return closure_11(closure_10, { children });
}));
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default memoResult;