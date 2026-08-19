// === Module 10895: EmojiPickerRowButton ===

// Module 10895 (EmojiPickerRowButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import EmojiTypes from "EmojiTypes" /* 4037 */;
import PressableBase from "PressableBase" /* 5433 */;
import EmojiDefault from "Emoji" /* 6930 */;
import ReactionIcon from "ReactionIcon" /* 7939 */;
import noop from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
let closure_6 = createCacheKey.createStyles((width) => {
  const obj = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj[0] = obj;
  return obj;
});
let closure_7 = createCacheKey.createStyles((width, fontSize, lineHeight) => {
  let tmp = width;
  if (arg3) {
    tmp = lineHeight;
  }
  const obj = { lineHeight, fontSize, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: tmp, height: tmp };
  const merged = Object.assign(tmp2);
  obj[1] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = AccessibilityAnnouncer;
  const tmp = callback(iconSize.emojiContainerSize);
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  const isThemeLightResult = AccessibilityAnnouncer.isThemeLight(obj.useThemeContext().theme);
  obj = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
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
  const tmp = callback(emojiContainerSize.emojiContainerSize);
  const memo = React.useMemo(() => ({ foreground: true }), []);
  let obj = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4, onPress: null, style: null, children: null };
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
    return jsx(PressableBase.PressableOpacity, obj);
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
    <emojiURL textEmojiStyle={null} fastImageStyle={null} name={null} src={null} />;
  }
  tmp2 = callback2(emojiSize, emojiFontSize, emojiLineHeight, useIsMobileVisualRefreshExperimentEnabledDefault("EmojiReactionRowButton"));
};
export const getEmojiKey = function getEmojiKey(type, index) {
  if (null == type) {
    return index;
  } else {
    type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};