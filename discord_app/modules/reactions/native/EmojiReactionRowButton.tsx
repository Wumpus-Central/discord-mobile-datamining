// discord_app/modules/reactions/native/EmojiReactionRowButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import EmojiTypes from "../../emojis/EmojiTypes.tsx";
import shared from "../../../design/shared.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Platform = fn(17).Platform;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
let createStyles = fn(4756);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: null };
  const size = {
    width,
    height: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    overflow: "hidden",
  };
  obj.emojiContainer = size;
  return obj;
});
createStyles = fn(4756);
let closure_7 = createStyles.createStyles((width, fontSize, lineHeight) => {
  const obj = { emojiImage: { width, height: width }, emojiText: null };
  const size = {
    lineHeight,
    fontSize,
    color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    textAlign: "center",
    width: lineHeight,
    height: lineHeight,
  };
  obj.emojiText = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  const tmp = closure_6(iconSize.emojiContainerSize);
  const obj = shared;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const isThemeLightResult = shared.isThemeLight(obj.useThemeContext().theme);
  const obj3 = {
    activeOpacity: 0.5,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: 4,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.lfIHs4);
  obj3.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj3.style = items;
  const obj4 = {
    color: shared.isThemeLight(obj.useThemeContext().theme)
      ? unsafe_rawColors.PRIMARY_500
      : unsafe_rawColors.PRIMARY_300,
    size: null,
  };
  if (str == null) {
    str = "md";
  }
  obj4.size = str;
  obj3.children = jsx(ReactionIcon.ReactionIcon, {
    color: shared.isThemeLight(obj.useThemeContext().theme)
      ? unsafe_rawColors.PRIMARY_500
      : unsafe_rawColors.PRIMARY_300,
    size: null,
  });
  return jsx(Pressables.PressableOpacity, {
    activeOpacity: 0.5,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: 4,
    onPress: null,
    style: null,
    children: null,
  });
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emoji) {
  animated = emoji.emoji;
  ({ emojiSize, emojiFontSize, emojiLineHeight, onPress, styles } = emoji);
  const tmp = closure_6(emoji.emojiContainerSize);
  let obj = dependencyMap;
  const memo = noop.useMemo(() => ({ foreground: true }), []);
  const obj2 = {
    androidRippleConfig: memo,
    activeOpacity: 0.5,
    accessibilityRole: "button",
    accessibilityLabel: null,
    disabled: null,
    hitSlop: 4,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = util.intl;
  let name;
  if (animated != null) {
    name = animated.name;
  }
  obj2.accessibilityLabel = intl.formatToPlainString(util.t["/iYSo6"], { emojiName: name });
  obj2.disabled = null == animated;
  obj2.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj2.style = items;
  if (null == animated) {
    obj2.children = null;
    return jsx(Pressables.PressableOpacity, obj2);
  } else {
    let getEmojiURL = importDefault;
    const obj5 = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
    ({ emojiText: obj3.textEmojiStyle, emojiImage: obj3.fastImageStyle } = tmp2);
    let str = "";
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj5.name = str;
    if (null != animated.id) {
      const emojiURL = getEmojiURL(1397);
      getEmojiURL = emojiURL.getEmojiURL;
      obj = { id: null, animated: null, size: null };
      ({ id: obj.id, animated } = animated);
      obj.animated = animated;
      obj.size = EMOJI_URL_BASE_SIZE;
      let url = getEmojiURL(obj);
    } else {
      url = animated.url;
    }
    obj5.src = url;
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
