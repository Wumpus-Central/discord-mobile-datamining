// discord_app/modules/stickers/native/StickerPackDetailActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import StickerPickerListRowDefault from "StickerPickerListRow.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const StickerPickerConstants = fn(9736);
({ MIN_MARGIN: hasOwnProperty, STICKER_SIZE: metroRequire } = StickerPickerConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = fn(6572).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4836);
let closure_12 = createStyles.createStyles({
  focusedStickerPreviewContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "sa" },
  stickers: { paddingHorizontal: 16, marginBottom: 16 },
  popoutContainer: { position: "absolute", bottom: 50 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default noop.memo(function StickerPackDetailActionSheet(stickerPack) {
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
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[7])().width) / (ref + closure_5));
  const tmp4 = _slicedToArray(first.useState(null), 2);
  const obj = analyticsPopoutType(onClose[9]);
  closure_8 = first.useRef(onClose);
  const items = [onClose];
  const effect = first.useEffect(() => {
    closure_8.current = onClose;
  }, items);
  const effect1 = first.useEffect(
    () => () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    },
    [],
  );
  const items1 = [analyticsPopoutType, stickerPack.id];
  const effect2 = first.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, {
      type: analyticsPopoutType,
      sticker_pack_id: stickerPack.id,
    });
  }, items1);
  const obj2 = { stickerPack, style: tmp.header, onPress: null, withBanner: true, withDescription: true };
  const chunkResult = analyticsPopoutType(onClose[9]).chunk(stickerPack.stickers, rounded);
  const tmp16 = analyticsPopoutType(onClose[12]);
  let tmp17;
  if (obj3.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  const obj4 = { scrollable: true, startExpanded: true, handleDisabled: true, header: null, children: null };
  const obj5 = { children: null };
  obj2.onPress = tmp17;
  const items2 = [
    onPressSticker(tmp16, obj2),
    onPressSticker(stickerPack(onClose[14]).ActionSheetHeaderBar, { variant: "floating" }),
  ];
  obj5.children = items2;
  obj4.header = closure_11(closure_10, obj5);
  const obj6 = { style: tmp.stickers, contentContainerStyle: null, children: null };
  obj3 = stickerPack(onClose[13]);
  obj6.contentContainerStyle = { paddingBottom: 32 + analyticsPopoutType(onClose[8])().bottom };
  obj6.children = chunkResult.map((stickers, index) =>
    React7(
      StickerPickerListRowDefault,
      { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false },
      index,
    ),
  );
  obj4.children = onPressSticker(stickerPack(onClose[15]).BottomSheetScrollView, obj6);
  const children = [onPressSticker(stickerPack(onClose[11]).BottomSheet, obj4), ,];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj8 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
        return _undefined(null);
      },
      children: null,
    };
    const obj9 = { sticker: tmp5, size: 128 };
    obj8.children = tmp14(tmp2(tmp3[18]), obj9);
    tmp14Result = tmp14(tmp15(tmp3[17]).PressableOpacity, obj8);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj10 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first = tmp14(tmp2(tmp3[13]), obj10);
  }
  children[2] = first;
  return closure_11(closure_10, { children });
});
