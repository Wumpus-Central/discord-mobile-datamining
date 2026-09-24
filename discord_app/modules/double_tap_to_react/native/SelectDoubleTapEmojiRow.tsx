// === Module 12731: SelectDoubleTapEmojiRow ===

// Module 12731 (SelectDoubleTapEmojiRow)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiDefault from "Emoji" /* 7463 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8092 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11474 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7484).ACTION_SHEET_MAX_WIDTH;
const EmojiConstants = fn(1375);
({ EMOJI_URL_BASE_SIZE: closure_7, EmojiIntention: closure_8 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj = { emoji: { width: 24, height: 24 }, customEmoji: { width: 24, height: 24 }, textEmoji: null, emojiRow: null, emojiPressable: null, selectedEmojiPressable: null, emojiWrapper: null, selectedEmojiWrapper: null, chooseEmojiButton: null, customReactionOverlay: null, selectedCustomReactionIcon: null };
let PlatformUtils = fn(1364);
let num = 20;
if (PlatformUtils.isIOS()) {
  num = 24;
}
let obj3 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1364);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 28;
}
obj3.lineHeight = num2;
obj3.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj3;
obj.emojiRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.emojiPressable = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
let obj7 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.selectedEmojiPressable = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj8 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.emojiWrapper = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
let obj9 = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
obj.selectedEmojiWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.chooseEmojiButton = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 24, width: 24, position: "absolute", right: -8, bottom: -8, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderWidth: 2, boxSizing: "content-box" };
obj.customReactionOverlay = size;
const size1 = { height: 12, width: 12, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.selectedCustomReactionIcon = size1;
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((emoji) => {
  emoji = emoji.emoji;
  ({ onPress: importDefault, selected } = emoji);
  const tmp = closure_12();
  const items = [AccessibilityStore];
  const stateFromStores = emoji(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = {
    accessibilityRole: "button",
    disabled: null == emoji,
    onPress() {
      return importDefault(emoji);
    },
    style: null,
    children: null
  };
  const items1 = [tmp.emojiPressable, ];
  let prop;
  if (selected) {
    prop = tmp.selectedEmojiPressable;
  }
  items1[1] = prop;
  obj2.style = items1;
  const items2 = [tmp.emojiWrapper, ];
  let selectedEmojiWrapper;
  if (selected) {
    selectedEmojiWrapper = tmp.selectedEmojiWrapper;
  }
  const obj3 = { style: items2, children: null };
  items2[1] = selectedEmojiWrapper;
  const obj4 = { style: tmp.emoji, fastImageStyle: tmp.customEmoji, textEmojiStyle: tmp.textEmoji, name: null, src: null };
  let str = "";
  const obj = emoji(504);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj4.name = str;
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated: null, size: null };
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj5.animated = animated;
    obj5.size = size;
    let url = AvatarUtilsDefault.getEmojiURL(obj5);
    const tmp8Result = AvatarUtilsDefault;
  } else {
    url = emoji.url;
  }
  obj4.src = url;
  obj3.children = closure_9(EmojiDefault, obj4);
  obj2.children = closure_9(View, obj3);
  return closure_9(emoji(5427).PressableOpacity, obj2);
});
const obj11 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default noop.memo((selectedEmoji) => {
  selectedEmoji = selectedEmoji.selectedEmoji;
  let substr;
  let memo;
  let onPressEmoji;
  let selectedCustomReactionIcon = closure_12();
  let ReactionIcon = selectedEmoji;
  let tmp = substr;
  const frequentlyUsedReactionEmojis = selectedEmoji(substr[13]).useFrequentlyUsedReactionEmojis(undefined);
  let getEmojiURL = onPressEmoji;
  const rounded = Math.floor(Math.min(onPressEmoji(substr[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  let obj = selectedEmoji(substr[13]);
  const items = [onPressEmoji];
  const stateFromStores = selectedEmoji(substr[9]).useStateFromStores(items, () => onPressEmoji.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    const obj2 = { emoji, channel: "Array", intention: constants.DEFAULT_REACT_EMOJI };
    return !onPressEmoji(substr[15]).isEmojiFilteredOrLocked(obj2);
  });
  substr = found.slice(0, rounded - 1);
  const items1 = [substr, selectedEmoji];
  memo = memo.useMemo(() => substr.findIndex((item) => selectedEmoji(substr[16]).areEmojisEqual(closure_1_0, item)), items1);
  const items2 = [onPressEmoji];
  const onPress = memo.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  onPressEmoji = memo.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  const obj3 = { style: null, children: null };
  const items4 = [selectedEmoji.style, selectedCustomReactionIcon.emojiRow];
  obj3.style = items4;
  const items5 = [
    substr.map((emoji, index) => {
      let tmp = null;
      if (null != emoji) {
        const obj = { emoji, selected: index === memo, onPress };
        tmp = React7(closure_13, obj, index);
      }
      return tmp;
    }),

  ];
  const obj4 = {
    accessibilityRole: "button",
    onPress() {
      const obj2 = { onPressEmoji, channel: "r", pickerIntention: constants.DEFAULT_REACT_EMOJI, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL, startExpanded: null };
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2, "stack");
    },
    style: null,
    children: null
  };
  const items6 = [selectedCustomReactionIcon.emojiPressable, ];
  let selectedEmojiPressable = tmp8;
  if (-1 === memo) {
    selectedEmojiPressable = selectedCustomReactionIcon.selectedEmojiPressable;
  }
  items6[1] = selectedEmojiPressable;
  obj4.style = items6;
  const items7 = [selectedCustomReactionIcon.emojiWrapper, ];
  let selectedEmojiWrapper = tmp8;
  if (-1 === memo) {
    selectedEmojiWrapper = selectedCustomReactionIcon.selectedEmojiWrapper;
  }
  const obj5 = { style: items7, children: null };
  items7[1] = selectedEmojiWrapper;
  if (-1 === memo) {
    let emojiURL = getEmojiURL(tmp[11]);
    let obj6 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    ({ emoji: arr12.style, customEmoji: arr12.fastImageStyle, textEmoji: arr12.textEmojiStyle } = selectedCustomReactionIcon);
    let str = "";
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    obj6.name = str;
    if (null != selectedEmoji.id) {
      const emojiURL1 = getEmojiURL(tmp[12]);
      getEmojiURL = emojiURL1.getEmojiURL;
      const obj7 = { id: selectedEmoji.id, animated: null, size: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = selectedEmoji.animated;
      }
      obj7.animated = animated;
      obj7.size = size;
      let url = getEmojiURL(obj7);
    } else {
      url = selectedEmoji.url;
    }
    const obj8 = { children: null };
    obj6.src = url;
    obj6 = [, ];
    obj6[0] = closure_9(emojiURL, obj6);
    const obj9 = { style: selectedCustomReactionIcon.customReactionOverlay, children: null };
    ReactionIcon = ReactionIcon(tmp[19]).ReactionIcon;
    const obj10 = { color: selectedCustomReactionIcon.selectedCustomReactionIcon.color, style: null };
    selectedCustomReactionIcon = selectedCustomReactionIcon.selectedCustomReactionIcon;
    obj10.style = selectedCustomReactionIcon;
    tmp = closure_9(ReactionIcon, obj10);
    obj9.children = tmp;
    emojiURL = closure_9(tmp6, obj9);
    obj6[1] = emojiURL;
    obj8.children = obj6;
    closure_11(closure_10, obj8);
    const tmp7Result = closure_9(emojiURL, obj6);
  } else {
    const obj19 = { color: selectedCustomReactionIcon.chooseEmojiButton.color };
    obj5.children = closure_9(ReactionIcon(tmp[19]).ReactionIcon, obj19);
    obj4.children = closure_9(tmp6, obj5);
    items5[1] = closure_9(selectedEmoji(substr[10]).PressableOpacity, obj4);
    obj3.children = items5;
    return closure_11(tmp6, obj3);
  }
  let obj2 = selectedEmoji(substr[9]);
});