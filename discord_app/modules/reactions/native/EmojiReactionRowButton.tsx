// === Module 11732: EmojiReactionRowButton ===

// Module 11732 (EmojiReactionRowButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import EmojiTypes from "EmojiTypes" /* 4216 */;
import shared from "shared" /* 4411 */;
import Pressables from "Pressables" /* 5123 */;
import EmojiDefault from "Emoji" /* 7130 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: null };
  const size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj.emojiContainer = size;
  return obj;
});
createStyles = fn(4560);
let closure_7 = createStyles.createStyles((width, fontSize, lineHeight) => {
  const obj = { emojiImage: { width, height: width }, emojiText: null };
  const size = { lineHeight, fontSize, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: lineHeight, height: lineHeight };
  obj.emojiText = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = shared;
  const tmp = closure_6(iconSize.emojiContainerSize);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const isThemeLightResult = shared.isThemeLight(obj.useThemeContext().theme);
  obj = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.lfIHs4);
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  obj = { color: shared.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null };
  if (str == null) {
    str = "md";
  }
  obj.size = str;
  obj.children = jsx(ReactionIcon.ReactionIcon, { color: shared.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
  return jsx(Pressables.PressableOpacity, { color: shared.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emoji) {
  animated = emoji.emoji;
  ({ emojiSize, emojiFontSize, emojiLineHeight, onPress, styles } = emoji);
  const tmp = closure_6(emoji.emojiContainerSize);
  const memo = noop.useMemo(() => ({ foreground: true }), []);
  let obj = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = util.intl;
  let name;
  if (animated != null) {
    name = animated.name;
  }
  obj.accessibilityLabel = intl.formatToPlainString(util.t["/iYSo6"], { emojiName: name });
  obj.disabled = null == animated;
  obj.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj.style = items;
  if (null == animated) {
    obj.children = null;
    return jsx(Pressables.PressableOpacity, obj);
  } else {
    let getEmojiURL = importDefault;
    obj = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
    ({ emojiText: obj3.textEmojiStyle, emojiImage: obj3.fastImageStyle } = tmp2);
    let str = "";
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj.name = str;
    if (null != animated.id) {
      const emojiURL = getEmojiURL(1396);
      getEmojiURL = emojiURL.getEmojiURL;
      obj = { id: null, animated: null, size: null };
      ({ id: obj.id, animated } = animated);
      obj.animated = animated;
      obj.size = EMOJI_URL_BASE_SIZE;
      let url = getEmojiURL(obj);
    } else {
      url = animated.url;
    }
    obj.src = url;
    jsx(EmojiDefault, { textEmojiStyle: null, fastImageStyle: null, name: null, src: null });
  }
  tmp2 = closure_7(emojiSize, emojiFontSize, emojiLineHeight);
};
export const getEmojiKey = function getEmojiKey(type, index) {
  if (null == type) {
    return index;
  } else {
    type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};