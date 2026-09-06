// === Module 10284: EmojiPicker ===

// Module 10284 (EmojiPicker)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, ChatInputComponentViewedTypes: metroRequire, VerticalGradient: closure_7 } = Constants);
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 }, header: null, headerGradientColor: null, headerGradient: null };
obj = { flexDirection: "row", paddingTop: nativeDefault.space.PX_8, paddingBottom: 1, gap: nativeDefault.space.PX_12 };
obj.header = obj;
const createStyles = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.headerGradientColor = createStyles;
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.height = nativeDefault.space.PX_8 + 1;
obj2.bottom = undefined;
obj2.top = -1;
obj.headerGradient = obj2;
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default noop.memo(function EmojiPicker(inPortalKeyboard) {
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = closure_11();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = noop.useEffect(() => {
    const obj = { type: constants2.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  let obj = channel(handleTextChange[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = channel(handleTextChange[9]);
  const emojiCategories = obj1.useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const tmp8 = ref1(handleTextChange[12])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = noop.useCallback(() => {
    const obj = { type: constants2.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const callback1 = noop.useCallback(() => {
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
  obj2.placeholder = intl.string(channel(handleTextChange[15]).t.KgK5qg);
  obj2.onChange = handleTextChange;
  obj2.onFocus = callback;
  obj1.children = closure_9(channel(handleTextChange[14]).SearchField, obj2);
  const items3 = [closure_9(closure_4, obj1), , ];
  const obj3 = { style: tmp.list, children: null };
  const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji, onLongPressEmoji: null, channel: null, emojiPickerIntention: null, insetBottom: null, inPortalKeyboard: null, searchQueryRef: null };
  const tmp11 = ref1(handleTextChange[13])({ hasCategories: true });
  obj4.onLongPressEmoji = channel(handleTextChange[17]).openEmojiActionSheet;
  obj4.channel = channel;
  obj4.emojiPickerIntention = EmojiIntention.CHAT;
  obj4.insetBottom = safeAreaBottomKeyboardAware;
  obj4.inPortalKeyboard = inPortalKeyboard;
  obj4.searchQueryRef = tmp8.searchQueryRef;
  const items4 = [closure_9(ref1(handleTextChange[16]), obj4), ];
  const obj5 = { style: tmp.headerGradient, start: constants3.START, end: constants3.END, colors: null };
  const tmp12 = ref1(handleTextChange[16]);
  const tmp13 = ref1(handleTextChange[18]);
  const items5 = [channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 100), ];
  const obj10 = channel(handleTextChange[19]);
  items5[1] = channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj5.colors = items5;
  items4[1] = closure_9(tmp13, obj5);
  obj3.children = items4;
  items3[1] = closure_10(closure_4, obj3);
  items3[2] = closure_9(ref1(handleTextChange[20]), { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 });
  obj.children = items3;
  obj.children = closure_10(closure_4, obj);
  return closure_9(channel(handleTextChange[10]).AnalyticsLocationProvider, obj);
});