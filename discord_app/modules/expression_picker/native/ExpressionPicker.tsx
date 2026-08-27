// === Module 10271: ? ===

// Module 10271
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1338 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { EmojiIntention } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let c3 = importAllResult;
({ ExpressionPickerViewType: c5, ExpressionPickerOrder: closure_6, PADDING_HORIZONTAL } = ExpressionPickerViewType);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { expressionPickerContainer: null, expressionPickerContent: null, segmentedControl: null, segmentedControlUnpadded: null };
obj = { flex: 1, overflow: "hidden", backgroundColor: ThemesDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
obj[0] = obj;
obj[1] = { flex: 1 };
createCacheKey = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
obj[2] = createCacheKey;
obj[3] = { paddingHorizontal: 0 };
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ExpressionPicker(expressionType) {
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
  importDefault = undefined;
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = expressionType);
  const tmp = callback();
  importDefault = memo.useRef(false);
  const tmp4 = importDefault(expressionPickerViewType[8])({ expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const result = channel(expressionPickerViewType[9]).maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj = channel(expressionPickerViewType[10]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[11]).setKeyboardContext(channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, table[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      let obj = { tab: null, badged: false };
      obj[0] = expressionPickerViewType;
      ref(expressionPickerViewType[13]).trackWithMetadata(closure_1_7.EXPRESSION_PICKER_TAB_CLICKED, obj);
      const obj4 = ref(expressionPickerViewType[13]);
    } else if (expressionPickerViewType === closure_1_5.EMOJI) {
      obj = { intention: null };
      obj[0] = closure_1_8.CHAT;
      ref(expressionPickerViewType[14])(obj);
      tmp.current = true;
    } else {
      obj = ref(expressionPickerViewType[13]);
      obj1 = { tab: null, badged: false };
      obj1[0] = tmp2;
      obj.trackWithMetadata(closure_1_7.EXPRESSION_PICKER_OPENED, obj1);
      tmp.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  if (!tmp12) {
    tmp12 = expressionPickerViewType === tmp11.STICKER;
  }
  const tmp10 = importDefault(expressionPickerViewType[15]);
  const tmp10Result = importDefault(expressionPickerViewType[15])({ hasCategories: tmp12 });
  if (tmp7Result.useIsScreenReaderEnabled()) {
    obj = { marginBottom: null };
    obj[0] = tmp10Result.safeAreaBottomKeyboardAware;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  if (tmp16) {
    const obj2 = { height: null };
    obj2[0] = height;
    tmp16 = obj2;
  }
  const obj3 = { style: items3, children: null };
  items3[1] = tmp16;
  const tmp14 = closure_10;
  tmp7Result = channel(expressionPickerViewType[16]);
  const items4 = [closure_9(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[17]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj5 = { style: items5, children: null };
  items5 = [tmp.expressionPickerContent, obj1];
  if (expressionPickerViewType === constants.EMOJI) {
    const obj6 = { bottomSheetIndex: null, bottomSheetRef: null, channel: null, onPressEmoji: null, onBackspace: null, inPortalKeyboard: null };
    obj6[0] = bottomSheetIndex;
    obj6[1] = bottomSheetRef;
    obj6[2] = channel;
    obj6[3] = onPressEmoji;
    obj6[4] = onBackspace;
    obj6[5] = inPortalKeyboard;
    let tmp17Result = tmp17(tmp2(tmp3[18]), obj6);
  } else if (expressionPickerViewType === tmp11.GIF) {
    const obj7 = { bottomSheetRef: null, channelId: null, guildId: null, hideFavorites: null, initialQuery: null, onPressGIF: null };
    obj7[0] = bottomSheetRef;
    ({ id: obj11[1], guild_id: obj11[2] } = channel);
    obj7[3] = flag;
    obj7[4] = initialGifQuery;
    obj7[5] = onPressGIF;
    tmp17Result = tmp17(tmp2(tmp3[19]), obj7);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === tmp11.STICKER) {
      const obj8 = { bottomSheetRef: null, bottomSheetIndex: null, channel: null, onPressSticker: null, stickerFormats: null, inPortalKeyboard: null };
      obj8[0] = bottomSheetRef;
      obj8[1] = bottomSheetIndex;
      obj8[2] = channel;
      obj8[3] = onPressSticker;
      obj8[4] = stickerFormats;
      obj8[5] = inPortalKeyboard;
      tmp17Result = tmp17(tmp2(tmp3[20]), obj8);
    }
  }
  obj5[1] = tmp17Result;
  items4[1] = closure_9(View, obj5);
  obj3[1] = items4;
  return tmp14(View, obj3);
});
let result = require("set").fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;