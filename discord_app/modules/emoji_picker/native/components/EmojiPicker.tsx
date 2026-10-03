// === Module 10087: EmojiPicker ===

// Module 10087 (EmojiPicker)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, ChatInputComponentViewedTypes: metroRequire, VerticalGradient: closure_7 } = Constants);
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 }, header: { flexDirection: "row", paddingTop: nativeDefault.space.PX_8, paddingBottom: 1, gap: nativeDefault.space.PX_12 }, headerGradientColor: null, headerGradient: null };
let obj3 = { flexDirection: "row", paddingTop: nativeDefault.space.PX_8, paddingBottom: 1, gap: nativeDefault.space.PX_12 };
obj.headerGradientColor = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.height = nativeDefault.space.PX_8 + 1;
obj5.bottom = undefined;
obj5.top = -1;
obj.headerGradient = obj5;
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channel(handleTextChange[9]).c(60);
  ({ bottomSheetRef, bottomSheetIndex, channel } = arg0);
  ({ onPressEmoji, onBackspace, inPortalKeyboard, suggestedEmojis } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === channel.id) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    const sharedValue = channel(tmp2[10]).useSharedValue(0);
    if (cResult[4] !== suggestedEmojis) {
      const obj3 = { suggestedEmojis };
      cResult[4] = suggestedEmojis;
      cResult[5] = obj3;
      let tmp9 = obj3;
    } else {
      tmp9 = cResult[5];
    }
    const tmpResult = channel(tmp2[10]);
    const emojiCategories = channel(tmp2[11]).useEmojiCategories(EmojiIntention.CHAT, channel, tmp9);
    const tmpResult2 = channel(tmp2[11]);
    const ref1 = noop.useRef(null);
    const ref = noop.useRef(null);
    const analyticsLocations = ref1(tmp2[12])(ref1(tmp2[13]).EMOJI_PICKER).analyticsLocations;
    const tmp17 = ref1(tmp2[14])(channel, sharedValue, EmojiIntention.CHAT);
    handleTextChange = tmp17.handleTextChange;
    ({ searchQueryRef, searchResults } = tmp17);
    if (cResult[6] !== channel) {
      const fn2 = function x() {
        AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
      };
      cResult[6] = channel;
      cResult[7] = fn2;
      let tmp18 = fn2;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== handleTextChange) {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
      cResult[8] = handleTextChange;
      cResult[9] = H;
    } else {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
      cResult[10] = tmp22;
    } else {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
    }
    const tmp16 = ref1(tmp2[12]);
    ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(tmp2[15])(tmp22));
    const _Symbol2 = Symbol;
    ({ container, header } = tmp4);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
      const stringResult = obj6.string(channel(tmp2[16]).t.KgK5qg);
      cResult[11] = stringResult;
      const tmp24 = stringResult;
    } else {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
    }
    if (cResult[12] === tmp18) {
      class H {
        constructor() {
          current = closure_1.current;
          if (current != null) {
            str = "";
            setTextResult = current.setText("");
          }
          tmp2 = handleTextChange("");
          return;
        }
      }
      if (cResult[15] === tmp4.header) {
        class H {
          constructor() {
            current = closure_1.current;
            if (current != null) {
              str = "";
              setTextResult = current.setText("");
            }
            tmp2 = handleTextChange("");
            return;
          }
        }
        if (cResult[18] === bottomSheetIndex) {
          class H {
            constructor() {
              current = closure_1.current;
              if (current != null) {
                str = "";
                setTextResult = current.setText("");
              }
              tmp2 = handleTextChange("");
              return;
            }
          }
        }
        const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: searchResults, onPressEmoji, onLongPressEmoji: channel(tmp2[19]).openEmojiActionSheet, channel, emojiPickerIntention: EmojiIntention.CHAT, insetBottom: safeAreaBottomKeyboardAware, inPortalKeyboard, searchQueryRef };
        const tmp36 = closure_9(tmp15(tmp2[18]), obj4);
        cResult[18] = bottomSheetIndex;
        cResult[19] = emojiCategories;
        cResult[20] = sharedValue;
        cResult[21] = channel;
        cResult[22] = inPortalKeyboard;
        cResult[23] = onPressEmoji;
        cResult[24] = safeAreaBottomKeyboardAware;
        cResult[25] = searchQueryRef;
        cResult[26] = searchResults;
        cResult[27] = tmp36;
        const tmp15Result = tmp15(tmp2[18]);
      }
      const obj5 = { style: header, children: tmp26 };
      const tmp32 = closure_9(closure_4, obj5);
      cResult[15] = tmp4.header;
      cResult[16] = tmp26;
      cResult[17] = tmp32;
    }
    const obj7 = { ref: ref1, size: "md", placeholder: tmp24, onChange: handleTextChange, onFocus: tmp18, round: true };
    const tmp28 = closure_9(channel(tmp2[17]).SearchField, obj7);
    cResult[12] = tmp18;
    cResult[13] = handleTextChange;
    cResult[14] = tmp28;
    const tmp23 = ref1(tmp2[15])(tmp22);
  }
  const fn = function n() {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.EMOJI, channel_id: channel.id, guild_id: channel.guild_id });
  };
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
  const obj = channel(handleTextChange[9]);
}) : ((inPortalKeyboard) => {
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace, suggestedEmojis } = inPortalKeyboard);
  const tmp = closure_11();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.EMOJI, channel_id: channel.id, guild_id: channel.guild_id });
  }, items);
  const sharedValue = channel(handleTextChange[10]).useSharedValue(0);
  const obj = channel(handleTextChange[10]);
  const emojiCategories = channel(handleTextChange[11]).useEmojiCategories(EmojiIntention.CHAT, channel, { suggestedEmojis });
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const obj2 = channel(handleTextChange[11]);
  const tmp8 = ref1(handleTextChange[14])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
  }, items1);
  const callback1 = noop.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  const tmp7 = ref1(handleTextChange[12]);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[15])({ hasCategories: true }));
  const obj3 = { value: tmp7(ref1(handleTextChange[13]).EMOJI_PICKER).analyticsLocations, children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { ref: ref1, size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
  const intl = channel(handleTextChange[16]).intl;
  obj6.placeholder = intl.string(channel(handleTextChange[16]).t.KgK5qg);
  obj6.onChange = handleTextChange;
  obj6.onFocus = callback;
  obj5.children = closure_9(channel(handleTextChange[17]).SearchField, obj6);
  const items3 = [closure_9(closure_4, obj5), , ];
  const obj7 = { style: tmp.list, children: null };
  const obj8 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji, onLongPressEmoji: null, channel: null, emojiPickerIntention: null, insetBottom: null, inPortalKeyboard: null, searchQueryRef: null };
  const tmp11 = ref1(handleTextChange[15])({ hasCategories: true });
  obj8.onLongPressEmoji = channel(handleTextChange[19]).openEmojiActionSheet;
  obj8.channel = channel;
  obj8.emojiPickerIntention = EmojiIntention.CHAT;
  obj8.insetBottom = safeAreaBottomKeyboardAware;
  obj8.inPortalKeyboard = inPortalKeyboard;
  obj8.searchQueryRef = tmp8.searchQueryRef;
  const items4 = [closure_9(ref1(handleTextChange[18]), obj8), ];
  const obj9 = { style: tmp.headerGradient, start: constants3.START, end: constants3.END, colors: null };
  const tmp12 = ref1(handleTextChange[18]);
  const tmp13 = ref1(handleTextChange[21]);
  const items5 = [channel(handleTextChange[20]).hexOpacityToRgba(tmp.headerGradientColor.color, 100), ];
  const obj10 = channel(handleTextChange[20]);
  items5[1] = channel(handleTextChange[20]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj9.colors = items5;
  items4[1] = closure_9(tmp13, obj9);
  obj7.children = items4;
  items3[1] = closure_10(closure_4, obj7);
  items3[2] = closure_9(ref1(handleTextChange[22]), { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 });
  obj4.children = items3;
  obj3.children = closure_10(closure_4, obj4);
  return closure_9(channel(handleTextChange[12]).AnalyticsLocationProvider, obj3);
}));