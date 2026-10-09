// === Module 9737: StickerPackDetailActionSheet ===

// Module 9737 (StickerPackDetailActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 9743 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const StickerPickerConstants = fn(9698);
({ MIN_MARGIN: hasOwnProperty, STICKER_SIZE: metroRequire } = StickerPickerConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = fn(6837).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let closure_12 = createStyles.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "ao" }, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackDetailActionSheet(stickerPack) {
  const cResult = stickerPack(onClose[8]).c(47);
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  onClose = stickerPack.onClose;
  const tmp4 = closure_12();
  const obj = stickerPack(onClose[8]);
  const tmp5 = analyticsPopoutType;
  [r10026, _slicedToArray] = first.useState(null);
  [first, closure_5] = first.useState(false);
  const tmp6 = _slicedToArray(first.useState(null), 2);
  const bottom = analyticsPopoutType(onClose[10])().bottom;
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[9])().width) / (first.useRef(null) + closure_5));
  const ref = first.useRef(null);
  analyticsPopoutType(onClose[11]).chunk(stickerPack.stickers, rounded);
  closure_8 = first.useRef(onClose);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onPressSticker(arg0) {
      _slicedToArray(arg0);
    }
    cResult[0] = onPressSticker;
    let first1 = onPressSticker;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== first) {
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
    cResult[1] = first;
    cResult[2] = toggleDisplayingPackDetails;
    let tmp12 = toggleDisplayingPackDetails;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== onClose) {
    const fn = function j() {
      closure_8.current = onClose;
    };
    const items = [onClose];
    cResult[3] = onClose;
    cResult[4] = fn;
    cResult[5] = items;
    let tmp14 = items;
    let tmp13 = fn;
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
    let tmp17 = items1;
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
      const tmp24 = first1(tmp5(tmp2[15]), obj4);
      cResult[15] = stickerPack;
      cResult[16] = tmp4.header;
      cResult[17] = tmp20;
      cResult[18] = tmp24;
    }
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
    tmpResult = tmp(tmp2[14]);
  }
  class U {
    constructor() {
      obj = closure_1(closure_2[12]);
      obj1 = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
      trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
      return;
    }
  }
  items2 = [analyticsPopoutType, stickerPack.id];
  cResult[8] = analyticsPopoutType;
  cResult[9] = stickerPack.id;
  cResult[10] = U;
  cResult[11] = items2;
  const obj3 = analyticsPopoutType(onClose[11]);
}) : (function StickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  closure_8 = undefined;
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
  [tmp5, c3] = first.useState(null);
  [first, closure_5] = first.useState(false);
  const ref = first.useRef(null);
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[9])().width) / (ref + closure_5));
  const tmp4 = _slicedToArray(first.useState(null), 2);
  const obj = analyticsPopoutType(onClose[11]);
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
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, { type: analyticsPopoutType, sticker_pack_id: stickerPack.id });
  }, items1);
  const obj2 = { stickerPack, style: tmp.header, onPress: null, withBanner: true, withDescription: true };
  const chunkResult = analyticsPopoutType(onClose[11]).chunk(stickerPack.stickers, rounded);
  const tmp16 = analyticsPopoutType(onClose[15]);
  let tmp17;
  if (obj3.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  const obj4 = { scrollable: true, startExpanded: true, handleDisabled: true, header: null, children: null };
  const obj5 = { children: null };
  obj2.onPress = tmp17;
  const items2 = [onPressSticker(tmp16, obj2), onPressSticker(stickerPack(onClose[16]).ActionSheetHeaderBar, { variant: "floating" })];
  obj5.children = items2;
  obj4.header = closure_11(closure_10, obj5);
  const obj6 = { style: tmp.stickers, contentContainerStyle: null, children: null };
  obj3 = stickerPack(onClose[14]);
  obj6.contentContainerStyle = { paddingBottom: 32 + analyticsPopoutType(onClose[10])().bottom };
  obj6.children = chunkResult.map((stickers, index) => options(StickerPickerListRowDefault, { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false }, index));
  obj4.children = onPressSticker(stickerPack(onClose[17]).BottomSheetScrollView, obj6);
  const children = [onPressSticker(stickerPack(onClose[13]).BottomSheet, obj4), , ];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj8 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
          return _undefined(null);
        },
      children: null
    };
    const obj9 = { sticker: tmp5, size: 128 };
    obj8.children = tmp14(tmp2(tmp3[20]), obj9);
    tmp14Result = tmp14(tmp15(tmp3[19]).PressableOpacity, obj8);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj10 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first = tmp14(tmp2(tmp3[14]), obj10);
  }
  children[2] = first;
  return closure_11(closure_10, { children });
}));