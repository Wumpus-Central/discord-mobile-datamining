// === Module 10533: ExpressionPicker ===

// Module 10533 (ExpressionPicker)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4936 */;
import TopEmojisUtils from "TopEmojisUtils" /* 10535 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 10537 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ExpressionPickerConstants = fn(1218);
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj = { expressionPickerContainer: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL }, expressionPickerContent: { flex: 1 }, segmentedControl: { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 }, segmentedControlUnpadded: { paddingHorizontal: 0 } };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
let obj4 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
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
  let obj = channel(expressionPickerViewType[10]);
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[11]).setKeyboardContext(channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  });
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      const obj2 = { tab: expressionPickerViewType, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
    } else if (expressionPickerViewType === constants.EMOJI) {
      const obj3 = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj3);
      ref.current = true;
    } else {
      const obj5 = { tab: tmp2, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
      ref.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  let obj2 = {
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[11]).setKeyboardContext(channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  if (!tmp12) {
    tmp12 = expressionPickerViewType === constants.STICKER;
  }
  const tmp10 = require("useExpressionPickerInsets");
  const tmp10Result = require("useExpressionPickerInsets")({ hasCategories: tmp12 });
  if (tmp7Result.useIsScreenReaderEnabled()) {
    let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  if (tmp16) {
    let obj5 = { height };
    tmp16 = obj5;
  }
  const obj6 = { style: items3, children: null };
  items3[1] = tmp16;
  tmp7Result = channel(expressionPickerViewType[16]);
  const items4 = [closure_9(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[17]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj8 = { style: null, children: null };
  const items5 = [tmp.expressionPickerContent, obj4];
  obj8.style = items5;
  if (expressionPickerViewType === constants.EMOJI) {
    const obj9 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    let tmp17Result = closure_9(tmp2(tmp3[18]), obj9);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj10 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: null, initialQuery: null, onPressGIF: null };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    obj10.hideFavorites = flag;
    obj10.initialQuery = initialGifQuery;
    obj10.onPressGIF = onPressGIF;
    tmp17Result = closure_9(tmp2(tmp3[19]), obj10);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj12 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = closure_9(tmp2(tmp3[20]), obj12);
    }
  }
  obj8.children = tmp17Result;
  items4[1] = closure_9(View, obj8);
  obj6.children = items4;
  return closure_10(View, obj6);
});