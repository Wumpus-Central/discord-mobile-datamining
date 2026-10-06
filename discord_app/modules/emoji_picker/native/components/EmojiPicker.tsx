// === Module 10100: EmojiPicker ===

// Module 10100 (EmojiPicker)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
({ AnalyticEvents: hasOwnProperty, ChatInputComponentViewedTypes: metroRequire, VerticalGradient: metroImportDefault } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 }, header: obj2, headerGradientColor: obj3, headerGradient: obj4 };
obj2 = { flexDirection: "row", paddingTop: nativeDefault.space.PX_8, paddingBottom: 1, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj4 = { height: nativeDefault.space.PX_8 + 1, bottom: undefined, top: -1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let container;
  let handleTextChange;
  let header;
  let inPortalKeyboard;
  let onBackspace;
  let onPressEmoji;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let searchQueryRef;
  let searchResults;
  let suggestedEmojis;
  let obj = channel(handleTextChange[9]);
  const cResult = obj.c(60);
  ({ bottomSheetRef, bottomSheetIndex, channel } = arg0);
  ({ onPressEmoji, onBackspace, inPortalKeyboard, suggestedEmojis } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === channel.guild_id) {
    let tmp5;
    let tmp6;
    let tmp9;
    let tmp18;
    let tmp24;
    if (cResult[1] === channel.id) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    const tmpResult = channel(handleTextChange[10]);
    const sharedValue = tmpResult.useSharedValue(0);
    if (cResult[4] !== suggestedEmojis) {
      const obj3 = { suggestedEmojis };
      cResult[4] = suggestedEmojis;
      cResult[5] = obj3;
      tmp9 = obj3;
    } else {
      tmp9 = cResult[5];
    }
    const tmpResult2 = channel(handleTextChange[11]);
    const emojiCategories = tmpResult2.useEmojiCategories(EmojiIntention.CHAT, channel, tmp9);
    const ref = react.useRef(null);
    const ref1 = react.useRef(null);
    const tmp16 = ref1(handleTextChange[12]);
    const analyticsLocations = tmp16(ref1(tmp2[13]).EMOJI_PICKER).analyticsLocations;
    const tmp17 = ref1(handleTextChange[14])(channel, sharedValue, EmojiIntention.CHAT);
    handleTextChange = tmp17.handleTextChange;
    ({ searchQueryRef, searchResults } = tmp17);
    if (cResult[6] !== channel) {
      const fn2 = function x() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: metroRequire.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
        obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
      };
      cResult[6] = channel;
      cResult[7] = fn2;
      tmp18 = fn2;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== handleTextChange) {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
      cResult[8] = handleTextChange;
      cResult[9] = H;
    } else {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
      cResult[10] = tmp22;
    } else {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
    }
    ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[15])(tmp22));
    const _Symbol2 = Symbol;
    ({ container, header } = tmp4);
    ref1(handleTextChange[15])(tmp22);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
      const stringResult = obj6.string(channel(handleTextChange[16]).t.KgK5qg);
      cResult[11] = stringResult;
      tmp24 = stringResult;
    } else {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
    }
    if (cResult[12] === tmp18) {
      class H {
        constructor() {
          const current = ref1.current;
          if (current != null) {
            current.setText("");
          }
          handleTextChange("");
        }
      }
      if (cResult[15] === tmp4.header) {
        class H {
          constructor() {
            const current = ref1.current;
            if (current != null) {
              current.setText("");
            }
            handleTextChange("");
          }
        }
        if (cResult[18] === bottomSheetIndex) {
          class H {
            constructor() {
              const current = ref1.current;
              if (current != null) {
                current.setText("");
              }
              handleTextChange("");
            }
          }
        }
        const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: searchResults, onPressEmoji, onLongPressEmoji: channel(handleTextChange[19]).openEmojiActionSheet, channel, emojiPickerIntention: EmojiIntention.CHAT, insetBottom: safeAreaBottomKeyboardAware, inPortalKeyboard, searchQueryRef };
        const tmp15Result = ref1(handleTextChange[18]);
        cResult[18] = bottomSheetIndex;
        cResult[19] = emojiCategories;
        cResult[20] = sharedValue;
        cResult[21] = channel;
        cResult[22] = inPortalKeyboard;
        cResult[23] = onPressEmoji;
        cResult[24] = safeAreaBottomKeyboardAware;
        cResult[25] = searchQueryRef;
        cResult[26] = searchResults;
        cResult[27] = closure_9(tmp15Result, obj4);
        const tmp36 = closure_9(tmp15Result, obj4);
      }
      const obj5 = { style: header, children: tmp26 };
      cResult[15] = tmp4.header;
      cResult[16] = tmp26;
      cResult[17] = closure_9(closure_4, obj5);
      const tmp32 = closure_9(closure_4, obj5);
    }
    const obj7 = { ref: ref1, size: "md", placeholder: tmp24, onChange: handleTextChange, onFocus: tmp18, round: true };
    cResult[12] = tmp18;
    cResult[13] = handleTextChange;
    cResult[14] = closure_9(channel(handleTextChange[17]).SearchField, obj7);
    const tmp28 = closure_9(channel(handleTextChange[17]).SearchField, obj7);
  }
  const fn = function n() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  };
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((inPortalKeyboard) => {
  let SearchField;
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let intl;
  let items3;
  let items4;
  let items5;
  let obj4;
  let obj6;
  let onBackspace;
  let onPressEmoji;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let suggestedEmojis;
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace, suggestedEmojis } = inPortalKeyboard);
  const tmp = closure_11();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items);
  let obj = channel(handleTextChange[10]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = channel(handleTextChange[11]);
  const emojiCategories = obj2.useEmojiCategories(EmojiIntention.CHAT, channel, { suggestedEmojis });
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const tmp7 = ref1(handleTextChange[12]);
  const analyticsLocations = tmp7(ref1(handleTextChange[13]).EMOJI_PICKER).analyticsLocations;
  const tmp8 = ref1(handleTextChange[14])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const searchQueryRef = tmp8.searchQueryRef;
  const items2 = [handleTextChange];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[15])({ hasCategories: true }));
  const obj3 = { value: analyticsLocations, children: closure_10(closure_4, obj4) };
  obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.header, children: closure_9(SearchField, obj6) };
  ref1(handleTextChange[15])({ hasCategories: true });
  const AnalyticsLocationProvider = channel(handleTextChange[12]).AnalyticsLocationProvider;
  obj6 = { ref: ref1, size: "md", placeholder: intl.string(channel(handleTextChange[16]).t.KgK5qg), onChange: handleTextChange, onFocus: callback, round: true };
  SearchField = channel(handleTextChange[17]).SearchField;
  intl = channel(handleTextChange[16]).intl;
  items3 = [closure_9(closure_4, obj5), , ];
  const obj7 = { style: tmp.list, children: items4 };
  const obj8 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji, onLongPressEmoji: channel(handleTextChange[19]).openEmojiActionSheet, channel, emojiPickerIntention: EmojiIntention.CHAT, insetBottom: safeAreaBottomKeyboardAware, inPortalKeyboard, searchQueryRef };
  const tmp12 = ref1(handleTextChange[18]);
  items4 = [closure_9(tmp12, obj8), ];
  const obj9 = { style: tmp.headerGradient, start: constants3.START, end: constants3.END, colors: items5 };
  items5 = [, ];
  const tmp13 = ref1(handleTextChange[21]);
  const obj10 = channel(handleTextChange[20]);
  items5[0] = obj10.hexOpacityToRgba(tmp.headerGradientColor.color, 100);
  const obj11 = channel(handleTextChange[20]);
  items5[1] = obj11.hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  items4[1] = closure_9(tmp13, obj9);
  items3[1] = closure_10(closure_4, obj7);
  const obj12 = { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 };
  items3[2] = closure_9(ref1(handleTextChange[22]), obj12);
  return closure_9(AnalyticsLocationProvider, obj3);
}));
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default memoResult;