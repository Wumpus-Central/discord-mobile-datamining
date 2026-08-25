// === Module 10082: ? ===

// Module 10082
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { EmojiIntention } from "set" /* 1925 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: c5, ChatInputComponentViewedTypes: closure_6, VerticalGradient: error } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 }, header: null, headerGradientColor: null, headerGradient: null };
obj = { flexDirection: "row", paddingTop: ThemesDefault.space.PX_8, paddingBottom: 1, gap: ThemesDefault.space.PX_12 };
obj[2] = obj;
createCacheKey = { color: ThemesDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj[3] = createCacheKey;
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.height = ThemesDefault.space.PX_8 + 1;
obj2.bottom = undefined;
obj2.top = -1;
obj[4] = obj2;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPicker(inPortalKeyboard) {
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let ref1;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = callback3();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: closure_1_6.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(closure_1_5.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  let obj = channel(handleTextChange[8]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = channel(handleTextChange[9]);
  const emojiCategories = obj1.useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = importAllResult.useRef(null);
  ref1 = importAllResult.useRef(null);
  const tmp8 = ref1(handleTextChange[12])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = importAllResult.useCallback(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: closure_1_6.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(closure_1_5.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const callback1 = importAllResult.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  const tmp7 = ref1(handleTextChange[10]);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[13])({ hasCategories: true }));
  obj = { value: tmp7(ref1(handleTextChange[11]).EMOJI_PICKER).analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { ref: ref1, size: "md", placeholder: null, onChange: null, onFocus: null, isRound: true };
  const intl = channel(handleTextChange[15]).intl;
  obj2[2] = intl.string(channel(handleTextChange[15]).t.KgK5qg);
  obj2[3] = handleTextChange;
  obj2[4] = callback;
  obj1[1] = callback(channel(handleTextChange[14]).SearchField, obj2);
  const items3 = [callback(closure_4, obj1), , ];
  const obj3 = { style: tmp.list, children: null };
  const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji, onLongPressEmoji: null, channel: null, emojiPickerIntention: null, insetBottom: null, inPortalKeyboard: null, searchQueryRef: null };
  const tmp11 = ref1(handleTextChange[13])({ hasCategories: true });
  obj4[6] = channel(handleTextChange[17]).openEmojiActionSheet;
  obj4[7] = channel;
  obj4[8] = EmojiIntention.CHAT;
  obj4[9] = safeAreaBottomKeyboardAware;
  obj4[10] = inPortalKeyboard;
  obj4[11] = tmp8.searchQueryRef;
  const items4 = [callback(ref1(handleTextChange[16]), obj4), ];
  const obj5 = { style: tmp.headerGradient, start: constants.START, end: constants.END, colors: null };
  const tmp12 = ref1(handleTextChange[16]);
  const tmp13 = ref1(handleTextChange[18]);
  const items5 = [channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 100), ];
  const obj10 = channel(handleTextChange[19]);
  items5[1] = channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj5[3] = items5;
  items4[1] = callback(tmp13, obj5);
  obj3[1] = items4;
  items3[1] = callback2(closure_4, obj3);
  items3[2] = callback(ref1(handleTextChange[20]), { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 });
  obj[1] = items3;
  obj[1] = callback2(closure_4, obj);
  return callback(channel(handleTextChange[10]).AnalyticsLocationProvider, obj);
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default memoResult;