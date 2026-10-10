// === Module 12829: EmojiReactionRowButton ===

// Module 12829 (EmojiReactionRowButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import EmojiTypes from "EmojiTypes" /* 4767 */;
import shared from "shared" /* 4969 */;
import Pressables from "Pressables" /* 6184 */;
import EmojiDefault from "Emoji" /* 6819 */;
import ReactionIcon from "ReactionIcon" /* 8960 */;
import noop from "module_19" /* 19 */;

require = fn;
const Platform = fn(17).Platform;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
let createStyles = fn(5092);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: null };
  const size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
  obj.emojiContainer = size;
  return obj;
});
createStyles = fn(5092);
let closure_7 = createStyles.createStyles((width, fontSize, lineHeight) => {
  const obj = { emojiImage: { width, height: width }, emojiText: null };
  const size = { lineHeight, fontSize, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center", width: lineHeight, height: lineHeight };
  obj.emojiText = size;
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerRowButton(emojiContainerSize) {
  const cResult = c.c(11);
  ({ onPress, iconSize, styles } = emojiContainerSize);
  const tmp4 = closure_6(emojiContainerSize.emojiContainerSize);
  const obj2 = shared;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const tmp6 = shared.isThemeLight(obj2.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.lfIHs4);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.emojiContainer) {
    if (cResult[2] === styles) {
      let tmp9 = cResult[3];
    }
    if (iconSize == null) {
      iconSize = "md";
    }
    if (cResult[4] === tmp6) {
      if (cResult[5] === iconSize) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === onPress) {
        if (cResult[8] === tmp9) {
          if (cResult[9] === tmp11) {
            let tmp14 = cResult[10];
          }
          return tmp14;
        }
      }
      const obj4 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: first, hitSlop: 4, onPress, style: tmp9, children: tmp11 };
      const tmp16 = jsx(Pressables.PressableOpacity, { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: first, hitSlop: 4, onPress, style: tmp9, children: tmp11 });
      cResult[7] = onPress;
      cResult[8] = tmp9;
      cResult[9] = tmp11;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    }
    const obj5 = { color: tmp6, size: iconSize };
    const tmp13 = jsx(ReactionIcon.ReactionIcon, { color: tmp6, size: iconSize });
    cResult[4] = tmp6;
    cResult[5] = iconSize;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const items = [tmp4.emojiContainer, styles];
  cResult[1] = tmp4.emojiContainer;
  cResult[2] = styles;
  cResult[3] = items;
  tmp9 = items;
  const isThemeLightResult = shared.isThemeLight(obj2.useThemeContext().theme);
}) : (function EmojiPickerRowButton(iconSize) {
  let str = iconSize.iconSize;
  ({ onPress, styles } = iconSize);
  const tmp = closure_6(iconSize.emojiContainerSize);
  const obj = shared;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  const isThemeLightResult = shared.isThemeLight(obj.useThemeContext().theme);
  const obj3 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.lfIHs4);
  obj3.onPress = onPress;
  const items = [tmp.emojiContainer, styles];
  obj3.style = items;
  const obj4 = { color: shared.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null };
  if (str == null) {
    str = "md";
  }
  obj4.size = str;
  obj3.children = jsx(ReactionIcon.ReactionIcon, { color: shared.isThemeLight(obj.useThemeContext().theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300, size: null });
  return jsx(Pressables.PressableOpacity, { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, style: null, children: null });
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = tmp2;
export const EmojiReactionRowButton = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiReactionRowButton(emojiContainerSize) {
  const cResult = c.c(15);
  ({ emoji, onPress, styles } = emojiContainerSize);
  ({ emojiSize, emojiFontSize, emojiLineHeight } = emojiContainerSize);
  const tmp4 = closure_6(emojiContainerSize.emojiContainerSize);
  const tmp5 = closure_7(emojiSize, emojiFontSize, emojiLineHeight);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { foreground: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let name;
  if (emoji != null) {
    name = emoji.name;
  }
  if (cResult[1] !== name) {
    const intl = util.intl;
    let name1;
    if (emoji != null) {
      name1 = emoji.name;
    }
    const obj3 = { emojiName: name1 };
    const formatToPlainStringResult = intl.formatToPlainString(util.t["/iYSo6"], obj3);
    let name2;
    if (emoji != null) {
      name2 = emoji.name;
    }
    cResult[1] = name2;
    cResult[2] = formatToPlainStringResult;
    let tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.emojiContainer) {
    if (cResult[4] === styles) {
      let tmp13 = cResult[5];
    }
    if (cResult[6] === emoji) {
      if (cResult[7] === tmp5) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] === onPress) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp14) {
                let tmp21 = cResult[14];
              }
              return tmp21;
            }
          }
        }
      }
      const obj6 = { androidRippleConfig: first, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: tmp8, disabled: tmp12, hitSlop: 4, onPress, style: tmp13, children: tmp14 };
      const tmp23 = jsx(Pressables.PressableOpacity, { androidRippleConfig: first, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: tmp8, disabled: tmp12, hitSlop: 4, onPress, style: tmp13, children: tmp14 });
      cResult[9] = onPress;
      cResult[10] = tmp8;
      cResult[11] = tmp12;
      cResult[12] = tmp13;
      cResult[13] = tmp14;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
    if (null == emoji) {
      cResult[6] = emoji;
      cResult[7] = tmp5;
      cResult[8] = null;
      tmp14 = null;
    } else {
      let getEmojiURL = importDefault;
      const obj11 = { textEmojiStyle: null, fastImageStyle: null, name: null, src: null };
      ({ emojiText: obj4.textEmojiStyle, emojiImage: obj4.fastImageStyle } = tmp5);
      let str = "";
      if (null == emoji.id) {
        str = emoji.surrogates;
      }
      obj11.name = str;
      if (null != emoji.id) {
        const emojiURL = getEmojiURL(1415);
        getEmojiURL = emojiURL.getEmojiURL;
        const obj12 = { id: null, animated: null, size: null };
        ({ id: obj5.id, animated: obj5.animated } = emoji);
        obj12.size = EMOJI_URL_BASE_SIZE;
        let url = getEmojiURL(obj12);
      } else {
        url = emoji.url;
      }
      obj11.src = url;
      jsx(EmojiDefault, { textEmojiStyle: null, fastImageStyle: null, name: null, src: null });
    }
  }
  const items = [tmp4.emojiContainer, styles];
  cResult[3] = tmp4.emojiContainer;
  cResult[4] = styles;
  cResult[5] = items;
  tmp13 = items;
}) : (function EmojiReactionRowButton(emoji) {
  animated = emoji.emoji;
  ({ emojiSize, emojiFontSize, emojiLineHeight, onPress, styles } = emoji);
  const tmp = closure_6(emoji.emojiContainerSize);
  let obj = dependencyMap;
  const memo = noop.useMemo(() => ({ foreground: true }), []);
  const obj2 = { androidRippleConfig: memo, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, disabled: null, hitSlop: 4, onPress: null, style: null, children: null };
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
      const emojiURL = getEmojiURL(1415);
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
});
export const getEmojiKey = function getEmojiKey(type, index) {
  if (null == type) {
    return index;
  } else {
    type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
};