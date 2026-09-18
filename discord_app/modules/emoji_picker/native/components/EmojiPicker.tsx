// discord_app/modules/emoji_picker/native/components/EmojiPicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({
  AnalyticEvents: hasOwnProperty,
  ChatInputComponentViewedTypes: metroRequire,
  VerticalGradient: closure_7,
} = Constants);
const EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4722);
let obj = {
  container: { flex: 1 },
  list: { overflow: "hidden", flex: 1 },
  header: {
    flexDirection: "row",
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: 1,
    gap: nativeDefault.space.PX_12,
  },
  headerGradientColor: null,
  headerGradient: null,
};
let obj3 = {
  flexDirection: "row",
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: 1,
  gap: nativeDefault.space.PX_12,
};
obj.headerGradientColor = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.height = nativeDefault.space.PX_8 + 1;
obj5.bottom = undefined;
obj5.top = -1;
obj.headerGradient = obj5;
let closure_11 = createStyles.createStyles(obj);
let obj4 = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default noop.memo(function EmojiPicker(inPortalKeyboard) {
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = closure_11();
  const items = [,];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants2.EMOJI,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items);
  const sharedValue = channel(handleTextChange[8]).useSharedValue(0);
  const obj = channel(handleTextChange[8]);
  const emojiCategories = channel(handleTextChange[9]).useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const obj2 = channel(handleTextChange[9]);
  const tmp8 = ref1(handleTextChange[12])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants2.EMOJI_SEARCH,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
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
  const obj3 = { value: tmp7(ref1(handleTextChange[11]).EMOJI_PICKER).analyticsLocations, children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { ref: ref1, size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
  const intl = channel(handleTextChange[15]).intl;
  obj6.placeholder = intl.string(channel(handleTextChange[15]).t.KgK5qg);
  obj6.onChange = handleTextChange;
  obj6.onFocus = callback;
  obj5.children = closure_9(channel(handleTextChange[14]).SearchField, obj6);
  const items3 = [closure_9(closure_4, obj5), ,];
  const obj7 = { style: tmp.list, children: null };
  const obj8 = {
    bottomSheetIndex,
    emojiPickerListRef: ref,
    categories: emojiCategories,
    categoryIndexActive: sharedValue,
    emojis: tmp8.searchResults,
    onPressEmoji,
    onLongPressEmoji: null,
    channel: null,
    emojiPickerIntention: null,
    insetBottom: null,
    inPortalKeyboard: null,
    searchQueryRef: null,
  };
  const tmp11 = ref1(handleTextChange[13])({ hasCategories: true });
  obj8.onLongPressEmoji = channel(handleTextChange[17]).openEmojiActionSheet;
  obj8.channel = channel;
  obj8.emojiPickerIntention = EmojiIntention.CHAT;
  obj8.insetBottom = safeAreaBottomKeyboardAware;
  obj8.inPortalKeyboard = inPortalKeyboard;
  obj8.searchQueryRef = tmp8.searchQueryRef;
  const items4 = [closure_9(ref1(handleTextChange[16]), obj8)];
  const obj9 = { style: tmp.headerGradient, start: constants3.START, end: constants3.END, colors: null };
  const tmp12 = ref1(handleTextChange[16]);
  const tmp13 = ref1(handleTextChange[18]);
  const items5 = [channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 100)];
  const obj10 = channel(handleTextChange[19]);
  items5[1] = channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj9.colors = items5;
  items4[1] = closure_9(tmp13, obj9);
  obj7.children = items4;
  items3[1] = closure_10(closure_4, obj7);
  items3[2] = closure_9(ref1(handleTextChange[20]), {
    bottomSheetRef,
    bottomSheetIndex,
    style: safeAreaStyle,
    emojiPickerListRef: ref,
    categories: emojiCategories,
    categoryIndexActive: sharedValue,
    onBackspace,
    inPortalKeyboard,
    isSearching: null != tmp8.searchResults,
    onClearSearch: callback1,
  });
  obj4.children = items3;
  obj3.children = closure_10(closure_4, obj4);
  return closure_9(channel(handleTextChange[10]).AnalyticsLocationProvider, obj3);
});
