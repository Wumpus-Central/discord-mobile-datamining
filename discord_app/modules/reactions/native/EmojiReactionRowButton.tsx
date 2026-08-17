// discord_app/modules/reactions/native/EmojiReactionRowButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import EmojiTypes from "../../emojis/EmojiTypes.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { Platform } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let closure_6 = createCacheKey.createStyles((width) => {
  let obj = { emojiContainer: null };
  obj = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj[0] = obj;
  return obj;
});
let closure_7 = createCacheKey.createStyles((width, fontSize, lineHeight) => {
  let tmp = width;
  if (arg3) {
    tmp = lineHeight;
  }
  obj = { emojiImage: obj, emojiText: null };
  obj = { width, height: width };
  obj = { lineHeight, fontSize, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: tmp, height: tmp };
  const merged = Object.assign(tmp2);
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = AccessibilityAnnouncer;
  const tmp = callback(iconSize.emojiContainerSize);
  const obj2 = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const isThemeLightResult = AccessibilityAnnouncer.isThemeLight(obj.useThemeContext().theme);
  obj = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(getSystemLocale.t.lfIHs4);
  obj[4] = onPress;
  const items = [tmp.emojiContainer, styles];
  obj[5] = items;
  obj = { color: AccessibilityAnnouncer.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null };
  if (str == null) {
    str = "md";
  }
  obj[1] = str;
  obj[6] = jsx(ReactionIcon.ReactionIcon, { color: AccessibilityAnnouncer.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
  return jsx(PressableBase.PressableOpacity, { color: AccessibilityAnnouncer.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emojiContainerSize) {
  ({ emoji: animated, emojiSize } = emojiContainerSize);
  ({ emojiFontSize, emojiLineHeight, onPress, styles } = emojiContainerSize);
  let getEmojiURL = importDefault;
  let obj = dependencyMap;
  const tmp = callback(emojiContainerSize.emojiContainerSize);
  const memo = React.useMemo(() => ({ foreground: true }), []);
  obj = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  let name;
  if (animated != null) {
    name = animated.name;
  }
  obj[3] = intl.formatToPlainString(getSystemLocale.t["/iYSo6"], { emojiName: name });
  obj[4] = null == animated;
  obj[6] = onPress;
  const items = [tmp.emojiContainer, styles];
  obj[7] = items;
  if (null == animated) {
    obj[8] = null;
    return tmp4(PressableBase.PressableOpacity, obj);
  } else {
    obj = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
    ({ emojiText: obj3[0], emojiImage: obj3[1] } = tmp2);
    let str = "";
    const emojiURL = EmojiDefault;
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj[2] = str;
    if (null != animated.id) {
      const emojiURL1 = getAvatarURLDefault;
      getEmojiURL = emojiURL1.getEmojiURL;
      obj = { id: null, animated: null, size: null };
      ({ id: obj[0], animated } = animated);
      obj[1] = animated;
      obj[2] = EMOJI_URL_BASE_SIZE;
      let url = getEmojiURL(obj);
    } else {
      url = animated.url;
    }
    obj[3] = url;
    tmp4(emojiURL, obj);
  }
};
export const getEmojiKey = function getEmojiKey(type, arg1) {
  if (null == type) {
    return arg1;
  } else {
    type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};