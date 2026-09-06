// === Module 10276: ExpressionPicker ===

// Module 10276 (ExpressionPicker)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import TopEmojisUtils from "TopEmojisUtils" /* 10278 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 10280 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ExpressionPickerConstants = fn(1219);
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let obj = { expressionPickerContainer: null, expressionPickerContent: null, segmentedControl: null, segmentedControlUnpadded: null };
obj = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
obj.expressionPickerContainer = obj;
obj.expressionPickerContent = { flex: 1 };
const createStyles = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
obj.segmentedControl = createStyles;
obj.segmentedControlUnpadded = { paddingHorizontal: 0 };
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default noop.memo(function ExpressionPicker(expressionType) {
  ({ bottomSheetRef, bottomSheetIndex, channel } = expressionType);
  let flag = expressionType.hideGifFavorites;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = expressionType);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = expressionType);
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = expressionType);
  const tmp = closure_11();
  importDefault = memo.useRef(false);
  const tmp4 = require("useExpressionPickerTabData")({ expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(memo);
  }, items1);
  channel(expressionPickerViewType[10]);
  let obj = {
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[11]).setKeyboardContext(channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      let obj = { tab: expressionPickerViewType, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj);
    } else if (expressionPickerViewType === constants.EMOJI) {
      obj = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj);
      ref.current = true;
    } else {
      obj = AppAnalyticsUtilsDefault;
      const obj1 = { tab: tmp2, badged: false };
      obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj1);
      ref.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  if (!tmp12) {
    tmp12 = expressionPickerViewType === constants.STICKER;
  }
  const tmp10 = require("useExpressionPickerInsets");
  const tmp10Result = require("useExpressionPickerInsets")({ hasCategories: tmp12 });
  if (tmp7Result.useIsScreenReaderEnabled()) {
    obj = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  if (tmp16) {
    const obj2 = { height };
    tmp16 = obj2;
  }
  const obj3 = { style: items3, children: null };
  items3[1] = tmp16;
  tmp7Result = channel(expressionPickerViewType[16]);
  const items4 = [closure_9(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[17]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj5 = { style: null, children: null };
  const items5 = [tmp.expressionPickerContent, obj1];
  obj5.style = items5;
  if (expressionPickerViewType === constants.EMOJI) {
    const obj6 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    let tmp17Result = closure_9(tmp2(tmp3[18]), obj6);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj7 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: null, initialQuery: null, onPressGIF: null };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    obj7.hideFavorites = flag;
    obj7.initialQuery = initialGifQuery;
    obj7.onPressGIF = onPressGIF;
    tmp17Result = closure_9(tmp2(tmp3[19]), obj7);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj8 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = closure_9(tmp2(tmp3[20]), obj8);
    }
  }
  obj5.children = tmp17Result;
  items4[1] = closure_9(View, obj5);
  obj3.children = items4;
  return closure_10(View, obj3);
});