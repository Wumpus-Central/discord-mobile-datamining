// === Module 10489: UserProfileCustomStatusBubble ===

// Module 10489 (UserProfileCustomStatusBubble)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserSettings from "UserSettings" /* 2040 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import FastImageDefault from "FastImage" /* 6164 */;
import EmojiDefault from "Emoji" /* 6809 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import CustomStatusUtils from "CustomStatusUtils" /* 10492 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_7, View: closure_8 } = get_ActivityIndicator);
const EMOJI_URL_BASE_SIZE = fn(1392).EMOJI_URL_BASE_SIZE;
let Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(5090);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { container: { position: "relative" }, bubble: null, statusBubble: null, statusBubbleMeasureable: null, smallCircle: null, largeCircle: null, addStatusIconSpacer: null, statusBubbleLeftAligned: null };
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  const obj2 = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: null, borderWidth: 1 };
  const colors2 = tmp4(587).colors;
  obj2.borderColor = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj.bubble = obj2;
  const obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(587).radii.lg };
  const merged = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  obj3.top = -14;
  obj.statusBubble = obj3;
  obj.statusBubbleMeasureable = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(587).radii.round };
  const merged1 = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  obj.smallCircle = size;
  obj.largeCircle = { position: "absolute", top: -10, left: 12, width: 20, height: 11 };
  obj.addStatusIconSpacer = { width: 6 };
  obj.statusBubbleLeftAligned = { alignItems: "flex-start" };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusBubbleConnector(arg0) {
  const cResult = c.c(8);
  ({ backgroundColor, borderColor, style } = arg0);
  if (cResult[0] !== backgroundColor) {
    const obj2 = { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor };
    const tmp6 = closure_1_11(inlineStyles.Path, obj2);
    cResult[0] = backgroundColor;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== borderColor) {
    const obj3 = { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 };
    const tmp9 = closure_1_11(inlineStyles.Path, obj3);
    cResult[2] = borderColor;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp7) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: null };
  const items = [tmp4, tmp7];
  size.children = items;
  const tmp11 = __initData(inlineStylesDefault, size);
  cResult[4] = style;
  cResult[5] = tmp4;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : (function StatusBubbleConnector(arg0) {
  ({ backgroundColor, borderColor, style } = arg0);
  const size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: null };
  const items = [closure_1_11(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor }), closure_1_11(inlineStyles.Path, { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 })];
  size.children = items;
  return __initData(inlineStylesDefault, size);
});
let closure_16 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
const dependencyMap = { [fn(6891).UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiImage(arg0) {
  const cResult = c.c(14);
  ({ emojiId, size, animated, style } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] !== size) {
    const size1 = { height: size, width: size };
    cResult[0] = size;
    cResult[1] = size1;
    let tmp6 = size1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === setting) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === emojiId) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp8) {
          const obj2 = { uri: tmp8 };
          cResult[9] = tmp8;
          cResult[10] = obj2;
          let tmp14 = obj2;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp14) {
            let tmp15 = cResult[13];
          }
          return tmp15;
        }
        const obj4 = { style: tmp7, source: tmp14, resizeMode: "contain" };
        const tmp18 = closure_1_11(FastImageDefault, obj4);
        cResult[11] = tmp7;
        cResult[12] = tmp14;
        cResult[13] = tmp18;
        tmp15 = tmp18;
      }
    }
    const obj5 = { id: emojiId, animated: null, size: null };
    const _Boolean = Boolean;
    const obj3 = AvatarUtilsDefault;
    obj5.animated = Boolean(tmp4) && setting;
    obj5.size = EMOJI_URL_BASE_SIZE;
    const emojiURL = obj3.getEmojiURL(obj5);
    cResult[5] = setting;
    cResult[6] = tmp4;
    cResult[7] = emojiId;
    cResult[8] = emojiURL;
    tmp8 = emojiURL;
    const tmp11 = Boolean(tmp4) && setting;
  }
  const items = [tmp6, style];
  cResult[2] = style;
  cResult[3] = tmp6;
  cResult[4] = items;
  tmp7 = items;
}) : (function EmojiImage(id) {
  ({ size, animated } = id);
  if (animated === undefined) {
    animated = false;
  }
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = { style: null, source: null, resizeMode: "contain" };
  const items = [{ height: size, width: size }, id.style];
  obj.style = items;
  const tmp3 = FastImageDefault;
  const obj3 = { id: id.emojiId, animated: null, size: null };
  const obj2 = AvatarUtilsDefault;
  const tmp4 = Boolean(animated) && setting;
  obj3.animated = tmp4;
  obj3.size = EMOJI_URL_BASE_SIZE;
  obj.source = { uri: obj2.getEmojiURL(obj3) };
  return closure_1_11(tmp3, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextStatusContent(isPlaceholderText) {
  const cResult = emoji(576).c(17);
  ({ text, emoji } = isPlaceholderText);
  ({ textVariant, lineClamp, onTextLayout, lineHeight } = isPlaceholderText);
  isPlaceholderText = isPlaceholderText.isPlaceholderText;
  const result = lineHeight / 10;
  if (cResult[0] !== (undefined !== isPlaceholderText && isPlaceholderText)) {
    if (!tmp4) {
      cResult[0] = tmp4;
      cResult[1] = tmp4;
      let tmp6 = tmp4;
    } else {
      if (tmpResult.isAndroid()) {
        let obj2 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      } else {
        let obj3 = { fontStyle: "italic" };
      }
      tmpResult = emoji(1381);
    }
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === result) {
    if (cResult[3] === tmp6) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === emoji) {
      if (cResult[6] === lineHeight) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] !== tmp12) {
        const tmp12Result = tmp12();
        cResult[8] = tmp12;
        cResult[9] = tmp12Result;
        let tmp13 = tmp12Result;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === lineClamp) {
        if (cResult[11] === onTextLayout) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === text) {
              if (cResult[14] === tmp10) {
                if (cResult[15] === textVariant) {
                  let tmp15 = cResult[16];
                }
                return tmp15;
              }
            }
          }
        }
      }
      let obj4 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: tmp10, children: null };
      let items = [tmp13, text];
      obj4.children = items;
      const tmp17 = closure_12(emoji(5086).Text, obj4);
      cResult[10] = lineClamp;
      cResult[11] = onTextLayout;
      cResult[12] = tmp13;
      cResult[13] = text;
      cResult[14] = tmp10;
      cResult[15] = textVariant;
      cResult[16] = tmp17;
      tmp15 = tmp17;
    }
    function renderInlineEmojiWithSpacer() {
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      if (null != id) {
        const obj2 = { children: null };
        const obj3 = { children: null };
        const obj4 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: null };
        const obj5 = { marginBottom: 0.1 * -lineHeight };
        obj4.style = obj5;
        obj3.children = closure_2_11(closure_18, obj4);
        const items = [closure_2_11(closure_2_8, obj3), ];
        const obj6 = { style: null };
        const obj7 = { width: 0.5 * lineHeight };
        obj6.style = obj7;
        items[1] = closure_2_11(closure_2_8, obj6);
        obj2.children = items;
        let tmp4 = __initData(__initData2, obj2);
      } else {
        let name;
        if (emoji != null) {
          name = emoji.name;
        }
        tmp4 = null;
        if (null != name) {
          const obj = { children: null };
          const items1 = [emoji.name, ];
          const obj8 = { style: null };
          const obj9 = { width: 0.4 * lineHeight };
          obj8.style = obj9;
          items1[1] = closure_2_11(closure_2_8, obj8);
          obj.children = items1;
          tmp4 = __initData(__initData2, obj);
        }
      }
      return tmp4;
    }
    cResult[5] = emoji;
    cResult[6] = lineHeight;
    cResult[7] = renderInlineEmojiWithSpacer;
    tmp12 = renderInlineEmojiWithSpacer;
  }
  let obj5 = { paddingVertical: result };
  const merged = Object.assign(tmp6);
  cResult[2] = result;
  cResult[3] = tmp6;
  cResult[4] = obj5;
  tmp10 = obj5;
  let obj = emoji(576);
}) : (function TextStatusContent(arg0) {
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  const obj = { paddingVertical: lineHeight / 10 };
  if (!isPlaceholderText) {
    const merged = Object.assign(isPlaceholderText);
    const obj3 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: obj, children: null };
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    if (null != id) {
      const obj4 = { children: null };
      const obj5 = { children: null };
      const obj6 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: null };
      const obj7 = { marginBottom: 0.1 * -lineHeight };
      obj6.style = obj7;
      obj5.children = closure_1_11(closure_18, obj6);
      const items = [closure_1_11(closure_1_8, obj5), ];
      const obj8 = { style: null };
      const obj9 = { width: 0.5 * lineHeight };
      obj8.style = obj9;
      items[1] = closure_1_11(closure_1_8, obj8);
      obj4.children = items;
      let tmp8Result = __initData(__initData2, obj4);
    } else {
      let name;
      if (emoji != null) {
        name = emoji.name;
      }
      tmp8Result = null;
      if (null != name) {
        const obj10 = { children: null };
        const items1 = [emoji.name, ];
        const obj11 = { style: null };
        const obj12 = { width: 0.4 * lineHeight };
        obj11.style = obj12;
        items1[1] = closure_1_11(closure_1_8, obj11);
        obj10.children = items1;
        tmp8Result = __initData(__initData2, obj10);
      }
    }
    const items2 = [tmp8Result, text];
    obj3.children = items2;
    return __initData(Text_Text.Text, obj3);
  } else {
    if (obj2.isAndroid()) {
      const obj13 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      const obj14 = { fontStyle: "italic" };
    }
    obj2 = PlatformUtils;
  }
});
createStyles = fn(5090);
let closure_20 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiOnlyStatusContent(arg0) {
  const cResult = c.c(14);
  ({ emoji, size } = arg0);
  const tmp3 = closure_20();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] === setting) {
    if (cResult[1] === emoji) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== size) {
      const obj3 = { fontSize: size };
      const size1 = { width: size, height: size };
      cResult[3] = size;
      cResult[4] = obj3;
      cResult[5] = size1;
      let tmp14 = size1;
      let tmp13 = obj3;
    } else {
      tmp13 = cResult[4];
      tmp14 = cResult[5];
    }
    let str;
    if (emoji != null) {
      str = emoji.name;
    }
    if (str == null) {
      str = "";
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp13) {
        if (cResult[8] === tmp14) {
          if (cResult[9] === str) {
            let tmp16 = cResult[10];
          }
          if (cResult[11] === tmp3.container) {
            if (cResult[12] === tmp16) {
              let tmp20 = cResult[13];
            }
            return tmp20;
          }
          const obj4 = { style: tmp3.container, children: tmp16 };
          const tmp23 = closure_1_11(closure_1_8, obj4);
          cResult[11] = tmp3.container;
          cResult[12] = tmp16;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
      }
    }
    const obj5 = { textEmojiStyle: tmp13, fastImageStyle: tmp14, src: tmp5, name: str };
    const tmp19 = closure_1_11(EmojiDefault, obj5);
    cResult[6] = tmp5;
    cResult[7] = tmp13;
    cResult[8] = tmp14;
    cResult[9] = str;
    cResult[10] = tmp19;
    tmp16 = tmp19;
  }
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj6 = { id: emoji.id, animated: null, size: null };
    let animated;
    if (emoji != null) {
      animated = emoji.animated;
    }
    const obj2 = AvatarUtilsDefault;
    obj6.animated = Boolean(animated) && setting;
    obj6.size = EMOJI_URL_BASE_SIZE;
    emojiURL = obj2.getEmojiURL(obj6);
    const tmp11 = Boolean(animated) && setting;
  }
  cResult[0] = setting;
  cResult[1] = emoji;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : (function EmojiOnlyStatusContent(arg0) {
  ({ emoji, size } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj2 = { id: emoji.id, animated: null, size: null };
    let animated;
    if (emoji != null) {
      animated = emoji.animated;
    }
    const obj = AvatarUtilsDefault;
    obj2.animated = Boolean(animated) && setting;
    obj2.size = EMOJI_URL_BASE_SIZE;
    emojiURL = obj.getEmojiURL(obj2);
    const tmp9 = Boolean(animated) && setting;
  }
  const obj3 = { style: closure_20().container, children: null };
  const obj4 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: null };
  let str;
  const tmp = closure_20();
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj4.name = str;
  obj3.children = closure_1_11(EmojiDefault, obj4);
  return closure_1_11(closure_1_8, obj3);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileCustomStatusBubble(ref) {
  const cResult = require("c").c(10);
  const tmp4 = previewEmoji(ref, emojiOnlyEmojiSize);
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled, showFullStatus, onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: require } = tmp4);
  let tmp5 = undefined !== editEnabled;
  ({ style, emojiOnlyStyle } = tmp4);
  if (tmp5) {
    tmp5 = editEnabled;
  }
  importDefault = tmp6;
  const tmp7 = closure_14(hasCustomProfileTheme);
  let obj = require("c");
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp9 = tmp8;
    let tmp10 = tmp8;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp9 = tmp8;
    tmp10 = tmp8;
  }
  const token = require("useToken").useToken(BACKGROUND_SURFACE_HIGH);
  const tmpResult = require("useToken");
  const colors2 = tmp10(tmp2[9]).colors;
  const token1 = require("useToken").useToken(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  let tmp13;
  if (null != themeType) {
    tmp13 = dependencyMap[themeType];
  }
  if (tmp13 == null) {
    tmp13 = closure_16;
  }
  textVariant = tmp13.textVariant;
  emojiOnlyEmojiSize = tmp13.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp13);
  const tmpResult7 = require("useToken");
  const trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmpResult8 = require("UserProfileAnalyticsContext");
  if (undefined === previewText) {
    state = undefined;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(previewText);
  let tmp17 = null != gameMentionsAsPlainText;
  if (tmp17) {
    tmp17 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let tmp20 = tmp19;
  if (null != previewEmoji) {
    tmp20 = !tmp17;
  }
  noop = tmp20;
  let tmp21 = !tmp17;
  if (!tmp17) {
    tmp21 = !tmp19;
  }
  if (tmp21) {
    tmp21 = undefined !== placeholderText;
  }
  if (tmp21) {
    tmp21 = "" !== placeholderText;
  }
  const isPlaceholderText = tmp21;
  let str4 = gameMentionsAsPlainText;
  if (tmp21) {
    str4 = placeholderText;
  }
  let tmp22 = null != str4;
  if (tmp22) {
    tmp22 = "" !== str4;
  }
  closure_9 = tmp22;
  if (!tmp17) {
    tmp17 = tmp19;
  }
  if (!tmp17) {
    let tmp23 = !tmp5;
    if (!tmp5) {
      tmp23 = tmp21;
    }
    tmp17 = tmp23;
  }
  let tmp24 = !tmp17;
  if (!tmp17) {
    tmp24 = tmp5;
  }
  const tmp25 = trackUserProfileAction(noop.useState(false), 2);
  Fonts = tmp25[1];
  let num = 0;
  if (tmp22) {
    num = textMinWidth;
  }
  let obj2 = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
  let num2 = 0;
  if (tmp20) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj2.minHeight = num2;
  if (tmp22) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj2.paddingVertical = num3;
  obj2.paddingHorizontal = statusBubblePaddingHorizontal;
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return ref.current;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const imperativeHandle = obj6.useImperativeHandle(ref.ref, first);
  const tmpResult9 = require("useGameMentionsAsPlainText");
  const scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(textVariant);
  if (!tmp17) {
    if (!tmp24) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let items = [name, str4];
  const found = items.filter((item) => null != item);
  const joined = found.join(" ");
  if (cResult[1] !== joined) {
    let obj3 = { text: joined };
    cResult[1] = joined;
    cResult[2] = obj3;
    let tmp32 = obj3;
  } else {
    tmp32 = cResult[2];
  }
  if (cResult[3] === tmp7.bubble) {
    if (cResult[4] === tmp7.smallCircle) {
      let tmp33 = cResult[5];
    }
    if (cResult[6] === token) {
      if (cResult[7] === token1) {
        if (cResult[8] === tmp7.largeCircle) {
          let tmp35 = cResult[9];
        }
        const items1 = [style, ];
        let tmp41;
        if (tmp20) {
          tmp41 = emojiOnlyStyle;
        }
        const obj4 = { style: null, children: null };
        items1[1] = tmp41;
        obj4.style = items1;
        const items2 = [tmp33, , ];
        let tmp42;
        if (null != onPressTruncatedStatus) {
          if (!tmp6) {
            if (tmp22) {
              const obj5 = { style: null, children: null };
              const items3 = [, , , ];
              ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp7);
              items3[2] = obj2;
              items3[3] = tmp7.statusBubbleMeasureable;
              obj5.style = items3;
              const obj7 = {
                text: str4,
                isPlaceholderText: tmp21,
                emoji: previewEmoji,
                textVariant,
                onTextLayout(nativeEvent) {
                              closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * React5.getFontScale()));
                            },
                lineHeight: scaledTextLineHeight
              };
              obj5.children = ref(closure_19, obj7);
              tmp42 = ref(tmp40, obj5);
            }
          }
        }
        items2[1] = tmp42;
        const items4 = [, , , ];
        ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp7);
        items4[2] = obj2;
        let statusBubbleLeftAligned = !tmp20;
        if (!tmp20) {
          statusBubbleLeftAligned = tmp7.statusBubbleLeftAligned;
        }
        function handlePressAddOrEditStatus() {
          trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj3 = { analyticsLocations: null, prompt: null };
          const items = [AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE];
          obj3.analyticsLocations = items;
          obj3.prompt = _prompt;
          const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
        }
        const obj8 = { style: null, ref: null, children: null };
        items4[3] = statusBubbleLeftAligned;
        obj8.style = items4;
        obj8.ref = ref;
        const items5 = [tmp35, ];
        if (tmp24) {
          let stringResult = placeholderText;
          if (!tmp21) {
            const intl3 = require("util").intl;
            stringResult = intl3.string(require("util").t.Vq4UmS);
          }
          const obj9 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, hitSlop: null, children: null };
          const intl4 = require("util").intl;
          obj9.accessibilityLabel = intl4.string(require("util").t["zrpF/b"]);
          let formatToPlainStringResult;
          if (tmp21) {
            const intl5 = require("util").intl;
            const obj10 = { prompt: placeholderText };
            formatToPlainStringResult = intl5.formatToPlainString(require("util").t.ioWOMP, obj10);
          }
          obj9.accessibilityHint = formatToPlainStringResult;
          obj9.onPress = handlePressAddOrEditStatus;
          obj9.hitSlop = rect;
          let str7 = "text-md/medium";
          if (tmp21) {
            str7 = "text-md/normal";
          }
          const obj11 = { variant: str7, color: "control-secondary-text-default", lineClamp: null, style: null, children: null };
          let _Math = Math;
          obj11.lineClamp = Math.ceil(2 * isPlaceholderText.getFontScale());
          const obj12 = { paddingVertical: scaledTextLineHeight / 10 };
          if (!tmp21) {
            const merged = Object.assign(tmp21);
            obj11.style = obj12;
            const obj13 = { color: tmp9(tmp2[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: null };
            let tmp57;
            if (tmpResult11.isAndroid()) {
              const obj14 = { marginBottom: 0.1 * -scaledTextLineHeight };
              tmp57 = obj14;
            }
            const obj15 = { children: null };
            obj13.style = tmp57;
            obj15.children = tmp49(require("CirclePlusIcon").CirclePlusIcon, obj13);
            const items6 = [tmp49(tmp40, obj15), , ];
            const obj16 = { style: tmp7.addStatusIconSpacer };
            items6[1] = tmp49(tmp40, obj16);
            items6[2] = stringResult;
            obj11.children = items6;
            obj9.children = tmp39(require("Text/Text").Text, obj11);
            let tmp45Result = tmp49(require("Pressables").PressableOpacity, obj9);
            tmpResult11 = require("PlatformUtils");
          } else {
            if (tmpResult12.isAndroid()) {
              const obj17 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
            } else {
              const obj18 = { fontStyle: "italic" };
            }
            tmpResult12 = require("PlatformUtils");
          }
        } else {
          function renderStatusContent() {
            if (closure_9) {
              const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: null, lineHeight: null };
              let rounded;
              if (!closure_1) {
                const _Math = Math;
                rounded = Math.ceil(2 * React5.getFontScale());
              }
              obj2.lineClamp = rounded;
              obj2.lineHeight = scaledTextLineHeight;
              let tmp7Result = closure_2_11(closure_19, obj2);
            } else if (closure_6) {
              const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
              tmp7Result = closure_2_11(closure_21, obj);
            }
            return tmp7Result;
          }
          if (tmp5) {
            const obj19 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
            const intl2 = require("util").intl;
            obj19.accessibilityLabel = intl2.string(require("util").t.QdHxos);
            obj19.accessibilityValue = tmp32;
            obj19.onPress = handlePressAddOrEditStatus;
            obj19.hitSlop = rect;
            obj19.children = renderStatusContent();
            tmp45Result = ref(require("Pressables").PressableOpacity, obj19);
          } else {
            if (null != onPressTruncatedStatus) {
              if (tmp25[0]) {
                if (!tmp21) {
                  const intl = require("util").intl;
                  let str6;
                  if (previewEmoji != null) {
                    str6 = previewEmoji.name;
                  }
                  if (str6 == null) {
                    str6 = "";
                  }
                  const obj20 = { emoji: str6, status: null };
                  if (str4 == null) {
                    str4 = "";
                  }
                  const obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
                  obj20.status = str4;
                  obj21.accessibilityLabel = intl.formatToPlainString(require("util").t.UpF5Qa, obj20);
                  obj21.onPress = onPressTruncatedStatus;
                  obj21.hitSlop = rect;
                  obj21.children = renderStatusContent();
                  tmp45Result = ref(require("Pressables").PressableOpacity, obj21);
                }
              }
            }
            tmp45Result = renderStatusContent();
          }
        }
        items5[1] = tmp45Result;
        obj8.children = items5;
        items2[2] = scaledTextLineHeight(str4, obj8);
        obj4.children = items2;
        return scaledTextLineHeight(str4, obj4);
      }
    }
    const obj22 = { style: tmp7.largeCircle, backgroundColor: token, borderColor: token1 };
    const tmp38 = ref(closure_15, obj22);
    cResult[6] = token;
    cResult[7] = token1;
    cResult[8] = tmp7.largeCircle;
    cResult[9] = tmp38;
    tmp35 = tmp38;
  }
  const obj23 = { style: null };
  const items7 = [, ];
  ({ bubble: arr2[0], smallCircle: arr2[1] } = tmp7);
  obj23.style = items7;
  const tmp34 = ref(str4, obj23);
  cResult[3] = tmp7.bubble;
  cResult[4] = tmp7.smallCircle;
  cResult[5] = tmp34;
  tmp33 = tmp34;
  const tmpResult10 = require("useScaledTextLineHeight");
}) : (function UserProfileCustomStatusBubble(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  importDefault = undefined;
  let textVariant;
  let emojiOnlyEmojiSize;
  let trackUserProfileAction;
  previewEmoji = undefined;
  noop = undefined;
  let isPlaceholderText;
  let str4;
  closure_9 = undefined;
  Fonts = undefined;
  ref = undefined;
  let scaledTextLineHeight;
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = merged);
  const showFullStatus = merged.showFullStatus;
  _require = tmp3;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: c1 } = merged);
  ({ style, emojiOnlyStyle } = merged);
  const tmp4 = closure_14(hasCustomProfileTheme);
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp8 = tmp7;
    let tmp9 = tmp7;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp8 = tmp7;
    tmp9 = tmp7;
  }
  const token = require("useToken").useToken(BACKGROUND_SURFACE_HIGH);
  let obj = require("useToken");
  const colors2 = tmp9(tmp6[9]).colors;
  let tmp12;
  const token1 = require("useToken").useToken(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp12 = dependencyMap[themeType];
  }
  if (tmp12 == null) {
    tmp12 = closure_16;
  }
  textVariant = tmp12.textVariant;
  emojiOnlyEmojiSize = tmp12.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp12);
  const tmp5Result = require("useToken");
  trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5Result6 = require("UserProfileAnalyticsContext");
  if (undefined === previewText) {
    state = undefined;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(previewText);
  let tmp16 = null != gameMentionsAsPlainText;
  if (tmp16) {
    tmp16 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let tmp19 = tmp18;
  if (null != previewEmoji) {
    tmp19 = !tmp16;
  }
  noop = tmp19;
  let tmp20 = !tmp16;
  if (!tmp16) {
    tmp20 = !tmp18;
  }
  if (tmp20) {
    tmp20 = undefined !== placeholderText;
  }
  if (tmp20) {
    tmp20 = "" !== placeholderText;
  }
  isPlaceholderText = tmp20;
  str4 = gameMentionsAsPlainText;
  if (tmp20) {
    str4 = placeholderText;
  }
  let tmp21 = null != str4;
  if (tmp21) {
    tmp21 = "" !== str4;
  }
  closure_9 = tmp21;
  if (!tmp16) {
    tmp16 = tmp18;
  }
  if (!tmp16) {
    let tmp22 = !tmp2;
    if (!tmp2) {
      tmp22 = tmp20;
    }
    tmp16 = tmp22;
  }
  let tmp23 = !tmp16;
  if (!tmp16) {
    tmp23 = tmp2;
  }
  const tmp24 = trackUserProfileAction(noop.useState(false), 2);
  Fonts = tmp24[1];
  let num = 0;
  if (tmp21) {
    num = textMinWidth;
  }
  let obj2 = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
  let num2 = 0;
  if (tmp19) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj2.minHeight = num2;
  if (tmp21) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj2.paddingVertical = num3;
  obj2.paddingHorizontal = statusBubblePaddingHorizontal;
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  ref = obj5.useRef(null);
  const imperativeHandle = obj5.useImperativeHandle(ref.ref, () => ref.current);
  const tmp5Result7 = require("useGameMentionsAsPlainText");
  scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(textVariant);
  if (!tmp16) {
    if (!tmp23) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let obj3 = { text: null };
  let items = [name, str4];
  const found = items.filter((item) => null != item);
  obj3.text = found.join(" ");
  const items1 = [style, ];
  let tmp31;
  if (tmp19) {
    tmp31 = emojiOnlyStyle;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = tmp31;
  const obj6 = { style: null };
  const items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp4);
  obj6.style = items2;
  const items3 = [ref(str4, obj6), , ];
  let tmp32Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp3) {
      if (tmp21) {
        const obj7 = { style: null, children: null };
        const items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp4);
        items4[2] = obj2;
        items4[3] = tmp4.statusBubbleMeasureable;
        obj7.style = items4;
        const obj8 = {
          text: str4,
          isPlaceholderText: tmp20,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * React5.getFontScale()));
                },
          lineHeight: scaledTextLineHeight
        };
        obj7.children = tmp32(closure_19, obj8);
        tmp32Result = tmp32(tmp30, obj7);
      }
    }
  }
  items3[1] = tmp32Result;
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp4);
  items5[2] = obj2;
  let statusBubbleLeftAligned = !tmp19;
  if (!tmp19) {
    statusBubbleLeftAligned = tmp4.statusBubbleLeftAligned;
  }
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { analyticsLocations: null, prompt: null };
    const items = [AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj3.analyticsLocations = items;
    obj3.prompt = _prompt;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  }
  const obj9 = { style: items5, ref, children: null };
  items5[3] = statusBubbleLeftAligned;
  const items6 = [ref(closure_15, { style: tmp4.largeCircle, backgroundColor: token, borderColor: token1 }), ];
  if (tmp23) {
    let stringResult = placeholderText;
    if (!tmp20) {
      const intl3 = tmp5(tmp6[26]).intl;
      stringResult = intl3.string(tmp5(tmp6[26]).t.Vq4UmS);
    }
    const obj11 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, hitSlop: null, children: null };
    const intl4 = tmp5(tmp6[26]).intl;
    obj11.accessibilityLabel = intl4.string(tmp5(tmp6[26]).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp20) {
      const intl5 = tmp5(tmp6[26]).intl;
      const obj12 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp5(tmp6[26]).t.ioWOMP, obj12);
    }
    obj11.accessibilityHint = formatToPlainStringResult;
    obj11.onPress = handlePressAddOrEditStatus;
    obj11.hitSlop = rect;
    let str7 = "text-md/medium";
    if (tmp20) {
      str7 = "text-md/normal";
    }
    const obj13 = { variant: str7, color: "control-secondary-text-default", lineClamp: null, style: null, children: null };
    let _Math = Math;
    obj13.lineClamp = Math.ceil(2 * isPlaceholderText.getFontScale());
    const obj14 = { paddingVertical: scaledTextLineHeight / 10 };
    if (!tmp20) {
      const merged1 = Object.assign(tmp20);
      obj13.style = obj14;
      const obj15 = { color: tmp8(tmp6[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: null };
      let tmp45;
      if (tmp5Result9.isAndroid()) {
        const obj16 = { marginBottom: 0.1 * -scaledTextLineHeight };
        tmp45 = obj16;
      }
      const obj17 = { children: null };
      obj15.style = tmp45;
      obj17.children = tmp32(tmp5(tmp6[28]).CirclePlusIcon, obj15);
      const items7 = [tmp32(tmp30, obj17), , ];
      const obj18 = { style: tmp4.addStatusIconSpacer };
      items7[1] = tmp32(tmp30, obj18);
      items7[2] = stringResult;
      obj13.children = items7;
      obj11.children = tmp29(tmp5(tmp6[17]).Text, obj13);
      let tmp32Result2 = tmp32(tmp5(tmp6[27]).PressableOpacity, obj11);
      tmp5Result9 = tmp5(tmp6[16]);
    } else {
      if (tmp5Result10.isAndroid()) {
        const obj19 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      } else {
        const obj20 = { fontStyle: "italic" };
      }
      tmp5Result10 = tmp5(tmp6[16]);
    }
  } else {
    function renderStatusContent() {
      if (closure_9) {
        const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: null, lineHeight: null };
        let rounded;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * React5.getFontScale());
        }
        obj2.lineClamp = rounded;
        obj2.lineHeight = scaledTextLineHeight;
        let tmp7Result = closure_2_11(closure_19, obj2);
      } else if (closure_6) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp7Result = closure_2_11(closure_21, obj);
      }
      return tmp7Result;
    }
    if (tmp2) {
      const obj21 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
      const intl2 = tmp5(tmp6[26]).intl;
      obj21.accessibilityLabel = intl2.string(tmp5(tmp6[26]).t.QdHxos);
      obj21.accessibilityValue = obj3;
      obj21.onPress = handlePressAddOrEditStatus;
      obj21.hitSlop = rect;
      obj21.children = renderStatusContent();
      tmp32Result2 = tmp32(tmp5(tmp6[27]).PressableOpacity, obj21);
    } else {
      if (null != onPressTruncatedStatus) {
        if (tmp24[0]) {
          if (!tmp20) {
            const intl = tmp5(tmp6[26]).intl;
            let str6;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj22 = { emoji: str6, status: null };
            if (str4 == null) {
              str4 = "";
            }
            const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
            obj22.status = str4;
            obj23.accessibilityLabel = intl.formatToPlainString(tmp5(tmp6[26]).t.UpF5Qa, obj22);
            obj23.onPress = onPressTruncatedStatus;
            obj23.hitSlop = rect;
            obj23.children = renderStatusContent();
            tmp32Result2 = tmp32(tmp5(tmp6[27]).PressableOpacity, obj23);
          }
        }
      }
      tmp32Result2 = renderStatusContent();
    }
  }
  items6[1] = tmp32Result2;
  obj9.children = items6;
  items3[2] = scaledTextLineHeight(str4, obj9);
  obj4.children = items3;
  return scaledTextLineHeight(str4, obj4);
});