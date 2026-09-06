// discord_app/modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import MessageReactionsTypes from "../../messages/MessageReactionsTypes.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const EmojiConstants = fn(1374);
({ EMOJI_URL_BASE_SIZE: closure_7, EmojiIntention: closure_8 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4560);
let obj = {
  emoji: { width: 24, height: 24 },
  customEmoji: { width: 24, height: 24 },
  textEmoji: null,
  emojiRow: null,
  emojiPressable: null,
  selectedEmojiPressable: null,
  emojiWrapper: null,
  selectedEmojiWrapper: null,
  chooseEmojiButton: null,
  customReactionOverlay: null,
  selectedCustomReactionIcon: null,
};
let PlatformUtils = fn(1115);
let num = 20;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1115);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 28;
}
obj.lineHeight = num2;
obj.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.textEmoji = obj;
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.emojiRow = createStyles;
obj.emojiPressable = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
PlatformUtils = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.selectedEmojiPressable = PlatformUtils;
let obj2 = { borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.emojiWrapper = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
PlatformUtils = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.selectedEmojiWrapper = PlatformUtils;
let obj4 = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: 2 };
obj.chooseEmojiButton = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  height: 24,
  width: 24,
  position: "absolute",
  right: -8,
  bottom: -8,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  borderWidth: 2,
  boxSizing: "content-box",
};
obj.customReactionOverlay = size;
const size1 = { height: 12, width: 12, color: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
obj.selectedCustomReactionIcon = size1;
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((emoji) => {
  emoji = emoji.emoji;
  ({ onPress: importDefault, selected } = emoji);
  const tmp = closure_12();
  let obj = emoji(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = {
    accessibilityRole: "button",
    disabled: null == emoji,
    onPress() {
      return importDefault(emoji);
    },
    style: null,
    children: null,
  };
  const items1 = [tmp.emojiPressable];
  let prop;
  if (selected) {
    prop = tmp.selectedEmojiPressable;
  }
  items1[1] = prop;
  obj.style = items1;
  const items2 = [tmp.emojiWrapper];
  let selectedEmojiWrapper;
  if (selected) {
    selectedEmojiWrapper = tmp.selectedEmojiWrapper;
  }
  obj = { style: items2, children: null };
  items2[1] = selectedEmojiWrapper;
  const obj1 = {
    style: tmp.emoji,
    fastImageStyle: tmp.customEmoji,
    textEmojiStyle: tmp.textEmoji,
    name: null,
    src: null,
  };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, animated: null, size: null };
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj2.animated = animated;
    obj2.size = size;
    let url = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp8Result = AvatarUtilsDefault;
  } else {
    url = emoji.url;
  }
  obj1.src = url;
  obj.children = closure_9(EmojiDefault, obj1);
  obj.children = closure_9(View, obj);
  return closure_9(emoji(5123).PressableOpacity, obj);
});
let obj6 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
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
  let obj = selectedEmoji(substr[13]);
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
  let getEmojiURL = onPressEmoji;
  const rounded = Math.floor(Math.min(onPressEmoji(substr[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  let obj1 = selectedEmoji(substr[9]);
  const items = [onPressEmoji];
  const stateFromStores = obj1.useStateFromStores(items, () => onPressEmoji.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    onPressEmoji(substr[15]);
    const obj = { emoji, channel: "Array", intention: constants.DEFAULT_REACT_EMOJI };
    return !obj.isEmojiFilteredOrLocked(obj);
  });
  substr = found.slice(0, rounded - 1);
  const items1 = [substr, selectedEmoji];
  memo = memo.useMemo(
    () => substr.findIndex((item) => selectedEmoji(substr[16]).areEmojisEqual(closure_1_0, item)),
    items1,
  );
  const items2 = [onPressEmoji];
  const onPress = memo.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  onPressEmoji = memo.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  obj = { style: null, children: null };
  const items4 = [selectedEmoji.style, selectedCustomReactionIcon.emojiRow];
  obj.style = items4;
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
  obj = {
    accessibilityRole: "button",
    onPress() {
      const obj = {
        onPressEmoji,
        channel: "r",
        pickerIntention: constants.DEFAULT_REACT_EMOJI,
        reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
        startExpanded: null,
      };
      const result = obj.openEmojiPickerActionSheet(obj, "stack");
    },
    style: null,
    children: null,
  };
  const items6 = [selectedCustomReactionIcon.emojiPressable];
  let selectedEmojiPressable = tmp8;
  if (-1 === memo) {
    selectedEmojiPressable = selectedCustomReactionIcon.selectedEmojiPressable;
  }
  items6[1] = selectedEmojiPressable;
  obj.style = items6;
  const items7 = [selectedCustomReactionIcon.emojiWrapper];
  let selectedEmojiWrapper = tmp8;
  if (-1 === memo) {
    selectedEmojiWrapper = selectedCustomReactionIcon.selectedEmojiWrapper;
  }
  obj1 = { style: items7, children: null };
  items7[1] = selectedEmojiWrapper;
  if (-1 === memo) {
    let emojiURL = getEmojiURL(tmp[11]);
    let obj2 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    ({
      emoji: arr12.style,
      customEmoji: arr12.fastImageStyle,
      textEmoji: arr12.textEmojiStyle,
    } = selectedCustomReactionIcon);
    let str = "";
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    obj2.name = str;
    if (null != selectedEmoji.id) {
      const emojiURL1 = getEmojiURL(tmp[12]);
      getEmojiURL = emojiURL1.getEmojiURL;
      const obj3 = { id: selectedEmoji.id, animated: null, size: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = selectedEmoji.animated;
      }
      obj3.animated = animated;
      obj3.size = size;
      let url = getEmojiURL(obj3);
    } else {
      url = selectedEmoji.url;
    }
    const obj4 = { children: null };
    obj2.src = url;
    obj2 = [,];
    obj2[0] = tmp7(emojiURL, obj2);
    const obj5 = { style: selectedCustomReactionIcon.customReactionOverlay, children: null };
    ReactionIcon = ReactionIcon(tmp[19]).ReactionIcon;
    const obj6 = { color: selectedCustomReactionIcon.selectedCustomReactionIcon.color, style: null };
    selectedCustomReactionIcon = selectedCustomReactionIcon.selectedCustomReactionIcon;
    obj6.style = selectedCustomReactionIcon;
    tmp = tmp7(ReactionIcon, obj6);
    obj5.children = tmp;
    emojiURL = tmp7(tmp6, obj5);
    obj2[1] = emojiURL;
    obj4.children = obj2;
    tmp5(closure_10, obj4);
    const tmp7Result = tmp7(emojiURL, obj2);
  } else {
    const obj7 = { color: selectedCustomReactionIcon.chooseEmojiButton.color };
    obj1.children = tmp7(ReactionIcon(tmp[19]).ReactionIcon, obj7);
    obj.children = tmp7(tmp6, obj1);
    items5[1] = tmp7(selectedEmoji(substr[10]).PressableOpacity, obj);
    obj.children = items5;
    return tmp5(tmp6, obj);
  }
});
