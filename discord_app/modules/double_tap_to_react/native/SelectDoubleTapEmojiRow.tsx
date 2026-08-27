// discord_app/modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../action_sheet/native/ActionSheetConstants.tsx";
import set from "../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ EMOJI_URL_BASE_SIZE: error, EmojiIntention: closure_8 } = set);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { emoji: { width: 24, height: 24 }, customEmoji: { width: 24, height: 24 }, textEmoji: null, emojiRow: null, emojiPressable: null, selectedEmojiPressable: null, emojiWrapper: null, selectedEmojiWrapper: null, chooseEmojiButton: null, customReactionOverlay: null, selectedCustomReactionIcon: null };
let num = 20;
if (set.isIOS()) {
  num = 24;
}
obj = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
let num2;
if (set.isIOS()) {
  num2 = 28;
}
obj[1] = num2;
obj[3] = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj[2] = obj;
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8 };
obj[3] = createCacheKey;
obj[4] = { borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
set = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[5] = set;
let obj2 = { borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj[6] = { borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_8, margin: 2 };
set = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
obj[7] = set;
let obj4 = { borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_8, margin: 2 };
obj[8] = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let obj6 = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 24, width: 24, position: "absolute", right: -8, bottom: -8, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderWidth: 2, boxSizing: "content-box" };
let obj7 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 24, width: 24, position: "absolute", right: -8, bottom: -8, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderWidth: 2, boxSizing: "content-box" };
obj[10] = { height: 12, width: 12, color: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo((emoji) => {
  emoji = emoji.emoji;
  ({ onPress: importDefault, selected } = emoji);
  const tmp = callback();
  let obj = emoji(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = {
    accessibilityRole: "button",
    disabled: null == emoji,
    onPress() {
      return callback(emoji);
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
  obj[3] = items1;
  const items2 = [tmp.emojiWrapper, ];
  let selectedEmojiWrapper;
  if (selected) {
    selectedEmojiWrapper = tmp.selectedEmojiWrapper;
  }
  obj = { style: items2, children: null };
  items2[1] = selectedEmojiWrapper;
  obj1 = { style: tmp.emoji, fastImageStyle: tmp.customEmoji, textEmojiStyle: tmp.textEmoji, name: null, src: null };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1[3] = str;
  if (null != emoji.id) {
    const obj2 = { id: null, animated: null, size: null };
    obj2[0] = emoji.id;
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj2[1] = animated;
    obj2[2] = closure_7;
    let url = getAvatarURLDefault.getEmojiURL(obj2);
    const tmp8Result = getAvatarURLDefault;
  } else {
    url = emoji.url;
  }
  obj1[4] = url;
  obj[1] = closure_9(EmojiDefault, obj1);
  obj[4] = closure_9(View, obj);
  return closure_9(emoji(5020).PressableOpacity, obj);
});
const obj8 = { height: 12, width: 12, color: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/SelectDoubleTapEmojiRow.tsx");

export default importAllResult.memo((selectedEmoji) => {
  selectedEmoji = selectedEmoji.selectedEmoji;
  const onPressEmoji = selectedEmoji.onPressEmoji;
  let substr;
  let memo;
  closure_4 = undefined;
  closure_5 = undefined;
  let selectedCustomReactionIcon = callback();
  let ReactionIcon = selectedEmoji;
  let tmp = substr;
  let obj = selectedEmoji(substr[13]);
  const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(undefined);
  let getEmojiURL = onPressEmoji;
  const rounded = Math.floor(Math.min(onPressEmoji(substr[14])().width, ACTION_SHEET_MAX_WIDTH) / 60);
  obj1 = selectedEmoji(substr[9]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const found = frequentlyUsedReactionEmojis.filter((emoji) => {
    let obj = onPressEmoji(substr[15]);
    obj = { emoji, channel: "Array", intention: -1 };
    obj[2] = constants.DEFAULT_REACT_EMOJI;
    return !obj.isEmojiFilteredOrLocked(obj);
  });
  substr = found.slice(0, rounded - 1);
  const items1 = [substr, selectedEmoji];
  memo = memo.useMemo(() => substr.findIndex((emoji) => closure_1_0(closure_1_2[16]).areEmojisEqual(closure_0, emoji)), items1);
  const items2 = [onPressEmoji];
  closure_4 = memo.useCallback((arg0) => {
    onPressEmoji(arg0, true);
  }, items2);
  const items3 = [onPressEmoji];
  closure_5 = memo.useCallback((arg0) => {
    onPressEmoji(arg0, false);
  }, items3);
  obj = { style: items4, children: null };
  items4 = [selectedEmoji.style, selectedCustomReactionIcon.emojiRow];
  const items5 = [
    substr.map((arg0, arg1) => {
      let tmp = null;
      if (null != arg0) {
        const obj = { emoji: null, selected: null, onPress: null };
        obj[0] = arg0;
        obj[1] = arg1 === memo;
        obj[2] = closure_4;
        tmp = closure_1_9(closure_1_13, obj, arg1);
      }
      return tmp;
    }),

  ];
  obj = {
    accessibilityRole: "button",
    onPress() {
      let obj = selectedEmoji(substr[17]);
      obj = { onPressEmoji: closure_5, channel: "r", pickerIntention: true, reactionType: "/assets/.cache/intl/bW9kdWxlcy92aXJ0dWFsX2N1cnJlbmN5L3dlYi9vcmJfd2FsbGV0L21lc3NhZ2Vz", startExpanded: null };
      obj[2] = closure_1_8.DEFAULT_REACT_EMOJI;
      obj[3] = selectedEmoji(substr[18]).ReactionTypes.NORMAL;
      const result = obj.openEmojiPickerActionSheet(obj, "stack");
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
  obj[2] = items6;
  const items7 = [selectedCustomReactionIcon.emojiWrapper, ];
  let selectedEmojiWrapper = tmp8;
  if (-1 === memo) {
    selectedEmojiWrapper = selectedCustomReactionIcon.selectedEmojiWrapper;
  }
  obj1 = { style: items7, children: null };
  items7[1] = selectedEmojiWrapper;
  if (-1 === memo) {
    let emojiURL = getEmojiURL(tmp[11]);
    let obj2 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    ({ emoji: arr12[0], customEmoji: arr12[1], textEmoji: arr12[2] } = selectedCustomReactionIcon);
    let str = "";
    if (null == selectedEmoji.id) {
      str = selectedEmoji.surrogates;
    }
    obj2[3] = str;
    if (null != selectedEmoji.id) {
      const emojiURL1 = getEmojiURL(tmp[12]);
      getEmojiURL = emojiURL1.getEmojiURL;
      const obj3 = { id: null, animated: null, size: null };
      obj3[0] = selectedEmoji.id;
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = selectedEmoji.animated;
      }
      obj3[1] = animated;
      obj3[2] = closure_7;
      let url = getEmojiURL(obj3);
    } else {
      url = selectedEmoji.url;
    }
    const obj4 = { children: null };
    obj2[4] = url;
    obj2 = [, ];
    obj2[0] = tmp7(emojiURL, obj2);
    const obj5 = { style: null, children: null };
    obj5[0] = selectedCustomReactionIcon.customReactionOverlay;
    ReactionIcon = ReactionIcon(tmp[19]).ReactionIcon;
    const obj6 = { color: null, style: null };
    obj6[0] = selectedCustomReactionIcon.selectedCustomReactionIcon.color;
    selectedCustomReactionIcon = selectedCustomReactionIcon.selectedCustomReactionIcon;
    obj6[1] = selectedCustomReactionIcon;
    tmp = tmp7(ReactionIcon, obj6);
    obj5[1] = tmp;
    emojiURL = tmp7(tmp6, obj5);
    obj2[1] = emojiURL;
    obj4[0] = obj2;
    tmp5(closure_10, obj4);
    const tmp7Result = tmp7(emojiURL, obj2);
    const tmp9 = closure_10;
  } else {
    const obj7 = { color: null };
    obj7[0] = selectedCustomReactionIcon.chooseEmojiButton.color;
    obj1[1] = tmp7(ReactionIcon(tmp[19]).ReactionIcon, obj7);
    obj[3] = tmp7(tmp6, obj1);
    items5[1] = tmp7(selectedEmoji(substr[10]).PressableOpacity, obj);
    obj[1] = items5;
    return tmp5(tmp6, obj);
  }
});