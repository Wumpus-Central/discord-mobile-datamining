// === Module 10225: ? ===

// Module 10225
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL" /* 10187 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c4 = importAllResult;
({ MIN_MARGIN: c5, STICKER_SIZE: closure_6 } = PADDING_HORIZONTAL);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "disabled" }, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const memoResult = importAllResult.memo(function StickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  let callback;
  let first;
  closure_8 = undefined;
  function onPressSticker(arg0) {
    _undefined(arg0);
  }
  function toggleDisplayingPackDetails() {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    callback(!first);
    if (!first) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => callback(false), 4000);
    }
  }
  const tmp = callback2();
  [tmp5, c3] = callback(first.useState(null), 2);
  const tmp6 = callback(first.useState(false), 2);
  first = tmp6[0];
  closure_5 = tmp6[1];
  closure_6 = first.useRef(null);
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[7])().width) / (closure_6 + closure_5));
  analyticsPopoutType(onClose[9]);
  const tmp4 = callback(first.useState(null), 2);
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
    analyticsPopoutType(onClose[10]);
    const obj = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(rounded.OPEN_POPOUT, obj);
  }, items1);
  let obj = { stickerPack, style: tmp.header, onPress: null, withBanner: true, withDescription: true };
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  let obj2 = stickerPack(onClose[13]);
  let tmp17;
  if (obj2.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  obj = { scrollable: true, startExpanded: true, handleDisabled: true, header: null, children: null };
  obj1 = { children: null };
  obj[2] = tmp17;
  const items2 = [onPressSticker(analyticsPopoutType(onClose[12]), obj), onPressSticker(stickerPack(onClose[14]).ActionSheetHeaderBar, { variant: "floating" })];
  obj1[0] = items2;
  obj[3] = callback(closure_10, obj1);
  obj2 = { style: tmp.stickers, contentContainerStyle: obj3, children: null };
  const tmp16 = analyticsPopoutType(onClose[12]);
  obj2[2] = chunkResult.map((item, index) => onPressSticker(analyticsPopoutType(onClose[16]), { containerWidth: rounded, stickers: item, rowSize: rounded, onPressSticker, nativeRow: false }, index));
  obj[4] = onPressSticker(stickerPack(onClose[15]).BottomSheetScrollView, obj2);
  const children = [onPressSticker(stickerPack(onClose[11]).BottomSheet, obj), , ];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj4 = { accessibilityRole: "none", style: null, onPress: null, children: null };
    obj4[1] = tmp.focusedStickerPreviewContainer;
    obj4[2] = function onPress() {
      return _undefined(null);
    };
    const obj5 = { sticker: null, size: 128 };
    obj5[0] = tmp5;
    obj4[3] = tmp14(tmp2(tmp3[18]), obj5);
    tmp14Result = tmp14(tmp15(tmp3[17]).PressableOpacity, obj4);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj6 = { stickerPack: null, style: null, onClose: null };
    obj6[0] = stickerPack;
    obj6[1] = tmp.popoutContainer;
    obj6[2] = toggleDisplayingPackDetails;
    first = tmp14(tmp2(tmp3[13]), obj6);
  }
  children[2] = first;
  return callback(closure_10, { children });
});
const result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default memoResult;