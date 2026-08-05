// discord_app/modules/reactions/native/EmojiReactionRowButton.tsx
import noop from "noop";
import { Platform } from "get ActivityIndicator";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles((width) => {
  let obj = { emojiContainer: null };
  obj = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: importDefault(712).colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: importDefault(712).modules.button.BORDER_RADIUS, overflow: "hidden" };
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
  obj = { lineHeight, fontSize, color: importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: tmp, height: tmp };
  const merged = Object.assign(tmp2);
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = function EmojiPickerRowButton(iconSize) {
  let onPress;
  let styles;
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  let obj = require(4131) /* AccessibilityAnnouncer */;
  const tmp = callback(iconSize.emojiContainerSize);
  const obj2 = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  const isThemeLightResult = require(4131) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme);
  obj = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.lfIHs4);
  obj[4] = onPress;
  const items = [tmp.emojiContainer, styles];
  obj[5] = items;
  obj = { color: require(4131) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null };
  if (str == null) {
    str = "md";
  }
  obj[1] = str;
  obj[6] = jsx(require(7576) /* ReactionIcon */.ReactionIcon, { color: require(4131) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
  return jsx(require(4812) /* PressableBase */.PressableOpacity, { color: require(4131) /* AccessibilityAnnouncer */.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
};
export const EmojiReactionRowButton = function EmojiReactionRowButton(emojiContainerSize) {
  let animated;
  let emojiFontSize;
  let emojiLineHeight;
  let emojiSize;
  let onPress;
  let styles;
  ({ emoji: animated, emojiSize } = emojiContainerSize);
  ({ emojiFontSize, emojiLineHeight, onPress, styles } = emojiContainerSize);
  let getEmojiURL = importDefault;
  let obj = dependencyMap;
  const tmp = callback(emojiContainerSize.emojiContainerSize);
  const memo = React.useMemo(() => ({ foreground: true }), []);
  obj = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  let name;
  if (animated != null) {
    name = animated.name;
  }
  obj[3] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["/iYSo6"], { emojiName: name });
  obj[4] = null == animated;
  obj[6] = onPress;
  const items = [tmp.emojiContainer, styles];
  obj[7] = items;
  if (null == animated) {
    obj[8] = null;
    return tmp4(require(4812) /* PressableBase */.PressableOpacity, obj);
  } else {
    obj = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
    ({ emojiText: obj3[0], emojiImage: obj3[1] } = tmp2);
    let str = "";
    const emojiURL = getEmojiURL(5301);
    if (null == animated.id) {
      str = animated.surrogates;
    }
    obj[2] = str;
    if (null != animated.id) {
      const emojiURL1 = getEmojiURL(1416);
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
    type.type === require(3929) /* EmojiTypes */.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};