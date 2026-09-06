// === Module 10395: StickerPackDetailActionSheet ===

// Module 10395 (StickerPackDetailActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 10401 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const StickerPickerConstants = fn(10273);
({ MIN_MARGIN: hasOwnProperty, STICKER_SIZE: metroRequire } = StickerPickerConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "call" }, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default noop.memo(function StickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  _slicedToArray = undefined;
  let first;
  closure_8 = undefined;
  function onPressSticker(arg0) {
    _undefined(arg0);
  }
  function toggleDisplayingPackDetails() {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    closure_5(!first);
    if (!first) {
      const _setTimeout = setTimeout;
      tmp.current = setTimeout(() => closure_1_5(false), 4000);
    }
  }
  const tmp = closure_12();
  [tmp5, c3] = _slicedToArray(first.useState(null), 2);
  const tmp6 = _slicedToArray(first.useState(false), 2);
  first = tmp6[0];
  closure_5 = tmp6[1];
  const ref = first.useRef(null);
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[7])().width) / (ref + closure_5));
  analyticsPopoutType(onClose[9]);
  const tmp4 = _slicedToArray(first.useState(null), 2);
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
    const obj = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  }, items1);
  let obj = { stickerPack, style: tmp.header, onPress: null, withBanner: true, withDescription: true };
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  let obj2 = stickerPack(onClose[13]);
  let tmp17;
  if (obj2.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  obj = { scrollable: true, startExpanded: true, handleDisabled: true, header: null, children: null };
  const obj1 = { children: null };
  obj.onPress = tmp17;
  const items2 = [onPressSticker(analyticsPopoutType(onClose[12]), obj), onPressSticker(stickerPack(onClose[14]).ActionSheetHeaderBar, { variant: "floating" })];
  obj1.children = items2;
  obj.header = closure_11(closure_10, obj1);
  obj2 = { style: tmp.stickers, contentContainerStyle: null, children: null };
  const tmp16 = analyticsPopoutType(onClose[12]);
  obj2.contentContainerStyle = { paddingBottom: 32 + analyticsPopoutType(onClose[8])().bottom };
  obj2.children = chunkResult.map((stickers, index) => React7(StickerPickerListRowDefault, { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false }, index));
  obj.children = onPressSticker(stickerPack(onClose[15]).BottomSheetScrollView, obj2);
  const children = [onPressSticker(stickerPack(onClose[11]).BottomSheet, obj), , ];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj4 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
          return _undefined(null);
        },
      children: null
    };
    const obj5 = { sticker: tmp5, size: 128 };
    obj4.children = tmp14(tmp2(tmp3[18]), obj5);
    tmp14Result = tmp14(tmp15(tmp3[17]).PressableOpacity, obj4);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj6 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first = tmp14(tmp2(tmp3[13]), obj6);
  }
  children[2] = first;
  return closure_11(closure_10, { children });
});