// === Module 10827: UserProfileCustomStatusBubble ===

// Module 10827 (UserProfileCustomStatusBubble)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl6 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2028 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import EmojiDefault from "Emoji" /* 6625 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import Constants2 from "Constants" /* 6707 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import CustomStatusUtils from "CustomStatusUtils" /* 10828 */;
import CirclePlusIcon2 from "CirclePlusIcon" /* 10983 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, num4, obj1;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const Fonts = Constants.Fonts;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles((arg0) => {
  let BACKGROUND_SURFACE_HIGH;
  let colors2;
  let obj2;
  let obj3;
  let tmp4;
  const obj = { container: { position: "relative" }, bubble: obj2, statusBubble: obj3, statusBubbleMeasureable: { position: "absolute", top: 0, left: 0, opacity: 0 }, smallCircle: size, largeCircle: { position: "absolute", top: -10, left: 12, width: 20, height: 11 }, addStatusIconSpacer: { width: 6 }, statusBubbleLeftAligned: { alignItems: "flex-start" } };
  const colors = nativeDefault.colors;
  if (arg0) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  obj2 = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE, borderWidth: 1 };
  colors2 = tmp4(587).colors;
  obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(587).radii.lg, top: -14 };
  const merged = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(587).radii.round };
  const merged1 = Object.assign(tmp4(587).shadows.SHADOW_LOW);
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColor;
  let borderColor;
  let items;
  let style;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ backgroundColor, borderColor, style } = arg0);
  if (cResult[0] !== backgroundColor) {
    const obj2 = { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor };
    const tmp6 = React4(inlineStyles.Path, obj2);
    cResult[0] = backgroundColor;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== borderColor) {
    const obj3 = { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 };
    const tmp9 = React4(inlineStyles.Path, obj3);
    cResult[2] = borderColor;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp4) {
      let tmp10;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: items };
  items = [tmp4, tmp7];
  const tmp11 = authStore(inlineStylesDefault, size);
  cResult[4] = style;
  cResult[5] = tmp4;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let backgroundColor;
  let borderColor;
  let items;
  let style;
  ({ backgroundColor, borderColor, style } = arg0);
  size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: items };
  items = [, ];
  const tmp = inlineStylesDefault;
  items[0] = React4(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor });
  items[1] = React4(inlineStyles.Path, { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 });
  return authStore(tmp, size);
});
let closure_14 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_15 = { [UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animated;
  let emojiId;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(14);
  ({ emojiId, size, animated, style } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] !== size) {
    const size1 = { height: size, width: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp6 = size1;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp7;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === setting) {
      if (cResult[6] === (undefined !== animated && animated)) {
        let tmp8;
        let tmp15;
        if (cResult[7] === emojiId) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp8) {
          const obj2 = { uri: tmp8 };
          cResult[9] = tmp8;
          cResult[10] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp7) {
          let tmp16;
          if (cResult[12] === tmp15) {
            tmp16 = cResult[13];
          }
          return tmp16;
        }
        const obj3 = { style: tmp7, source: tmp15, resizeMode: "contain" };
        const tmp19 = React4(FastImageDefault, obj3);
        cResult[11] = tmp7;
        cResult[12] = tmp15;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
    }
    const _Boolean = Boolean;
    const obj4 = { id: emojiId, animated: Boolean(undefined !== animated && animated) && setting, size: EMOJI_URL_BASE_SIZE };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    Boolean(undefined !== animated && animated) && setting;
    const emojiURL = getEmojiURL(obj4);
    cResult[5] = setting;
    cResult[6] = undefined !== animated && animated;
    cResult[7] = emojiId;
    cResult[8] = emojiURL;
    tmp8 = emojiURL;
  }
  const items = [tmp6, style];
  cResult[2] = style;
  cResult[3] = tmp6;
  cResult[4] = items;
  tmp7 = items;
}) : ((emojiId) => {
  let animated;
  let getEmojiURL;
  let items;
  let obj2;
  let tmp5;
  ({ size, animated } = emojiId);
  emojiId = emojiId.emojiId;
  if (animated === undefined) {
    animated = false;
  }
  const style = emojiId.style;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = { style: items, source: { uri: getEmojiURL(obj2) }, resizeMode: "contain" };
  items = [{ height: size, width: size }, style];
  obj2 = { id: emojiId, animated: tmp5, size: EMOJI_URL_BASE_SIZE };
  const tmp3 = FastImageDefault;
  getEmojiURL = AvatarUtilsDefault.getEmojiURL;
  AvatarUtilsDefault;
  tmp5 = Boolean(animated) && setting;
  ({ uri: getEmojiURL(obj2) });
  return React4(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((isPlaceholderText) => {
  let emoji;
  let items;
  let lineClamp;
  let lineHeight;
  let onTextLayout;
  let text;
  let textVariant;
  let tmp6;
  let obj = emoji(576);
  const cResult = obj.c(17);
  ({ text, emoji } = isPlaceholderText);
  ({ textVariant, lineClamp, onTextLayout, lineHeight } = isPlaceholderText);
  isPlaceholderText = isPlaceholderText.isPlaceholderText;
  let tmp4 = undefined !== isPlaceholderText && isPlaceholderText;
  const result = lineHeight / 10;
  if (cResult[0] !== tmp4) {
    let tmp7 = tmp4;
    if (tmp7) {
      let obj3;
      const tmpResult = emoji(1369);
      if (tmpResult.isAndroid()) {
        let obj2 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
        obj3 = obj2;
      } else {
        obj3 = { fontStyle: "italic" };
      }
      tmp7 = obj3;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === result) {
    let tmp9;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === emoji) {
      let tmp11;
      let tmp12;
      if (cResult[6] === lineHeight) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp11) {
        const tmp11Result = tmp11();
        class P {
          constructor() {
            tmp = emoji;
            id = undefined;
            if (emoji != null) {
              id = tmp.id;
            }
            if (null != id) {
              tmp10 = jsxs;
              tmp11 = Fragment;
              obj1 = { children: null };
              tmp12 = jsx;
              tmp13 = View;
              obj10 = { children: null };
              tmp14 = jsx;
              tmp15 = f55896;
              obj11 = { emojiId: null, size: null, animated: null, style: null };
              obj11.emojiId = tmp.id;
              tmp16 = lineHeight;
              num2 = 0.9;
              obj11.size = 0.9 * lineHeight;
              obj11.animated = tmp.animated;
              obj12 = { marginBottom: null };
              num3 = 0.1;
              obj12.marginBottom = 0.1 * -lineHeight;
              obj11.style = obj12;
              obj10.children = jsx(f55896, obj11);
              items = [, ];
              items[0] = jsx(View, obj10);
              tmp17 = jsx;
              tmp18 = View;
              obj13 = { style: null };
              obj14 = { width: null };
              num4 = 0.5;
              obj14.width = 0.5 * lineHeight;
              obj13.style = obj14;
              items[1] = jsx(View, obj13);
              obj1.children = items;
              tmp4 = jsxs(Fragment, obj1);
            } else {
              name = undefined;
              if (tmp != null) {
                name = tmp.name;
              }
              tmp4 = null;
              if (null != name) {
                tmp5 = jsxs;
                tmp6 = Fragment;
                obj = { children: null };
                items1 = [, ];
                items1[0] = tmp.name;
                tmp7 = jsx;
                tmp8 = View;
                obj15 = { style: null };
                obj16 = { width: null };
                tmp9 = lineHeight;
                num = 0.4;
                obj16.width = 0.4 * lineHeight;
                obj15.style = obj16;
                items1[1] = jsx(View, obj15);
                obj.children = items1;
                tmp4 = jsxs(Fragment, obj);
              }
            }
            return tmp4;
          }
        }
        cResult[9] = tmp11Result;
        tmp12 = tmp11Result;
      } else {
        tmp12 = cResult[9];
      }
      class P {
        constructor() {
          tmp = emoji;
          id = undefined;
          if (emoji != null) {
            id = tmp.id;
          }
          if (null != id) {
            tmp10 = jsxs;
            tmp11 = Fragment;
            obj1 = { children: null };
            tmp12 = jsx;
            tmp13 = View;
            obj10 = { children: null };
            tmp14 = jsx;
            tmp15 = f55896;
            obj11 = { emojiId: null, size: null, animated: null, style: null };
            obj11.emojiId = tmp.id;
            tmp16 = lineHeight;
            num2 = 0.9;
            obj11.size = 0.9 * lineHeight;
            obj11.animated = tmp.animated;
            obj12 = { marginBottom: null };
            num3 = 0.1;
            obj12.marginBottom = 0.1 * -lineHeight;
            obj11.style = obj12;
            obj10.children = jsx(f55896, obj11);
            items = [, ];
            items[0] = jsx(View, obj10);
            tmp17 = jsx;
            tmp18 = View;
            obj13 = { style: null };
            obj14 = { width: null };
            num4 = 0.5;
            obj14.width = 0.5 * lineHeight;
            obj13.style = obj14;
            items[1] = jsx(View, obj13);
            obj1.children = items;
            tmp4 = jsxs(Fragment, obj1);
          } else {
            name = undefined;
            if (tmp != null) {
              name = tmp.name;
            }
            tmp4 = null;
            if (null != name) {
              tmp5 = jsxs;
              tmp6 = Fragment;
              obj = { children: null };
              items1 = [, ];
              items1[0] = tmp.name;
              tmp7 = jsx;
              tmp8 = View;
              obj15 = { style: null };
              obj16 = { width: null };
              tmp9 = lineHeight;
              num = 0.4;
              obj16.width = 0.4 * lineHeight;
              obj15.style = obj16;
              items1[1] = jsx(View, obj15);
              obj.children = items1;
              tmp4 = jsxs(Fragment, obj);
            }
          }
          return tmp4;
        }
      }
      let obj4 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: tmp9, children: items };
      items = [tmp12, text];
      cResult[10] = lineClamp;
      cResult[11] = onTextLayout;
      cResult[12] = tmp12;
      cResult[13] = text;
      cResult[14] = tmp9;
      cResult[15] = textVariant;
      cResult[16] = closure_10(emoji(4886).Text, obj4);
      const tmp16 = closure_10(emoji(4886).Text, obj4);
    }
    class P {
      constructor() {
        tmp = emoji;
        id = undefined;
        if (emoji != null) {
          id = tmp.id;
        }
        if (null != id) {
          tmp10 = jsxs;
          tmp11 = Fragment;
          obj1 = { children: null };
          tmp12 = jsx;
          tmp13 = View;
          obj10 = { children: null };
          tmp14 = jsx;
          tmp15 = f55896;
          obj11 = { emojiId: null, size: null, animated: null, style: null };
          obj11.emojiId = tmp.id;
          tmp16 = lineHeight;
          num2 = 0.9;
          obj11.size = 0.9 * lineHeight;
          obj11.animated = tmp.animated;
          obj12 = { marginBottom: null };
          num3 = 0.1;
          obj12.marginBottom = 0.1 * -lineHeight;
          obj11.style = obj12;
          obj10.children = jsx(f55896, obj11);
          items = [, ];
          items[0] = jsx(View, obj10);
          tmp17 = jsx;
          tmp18 = View;
          obj13 = { style: null };
          obj14 = { width: null };
          num4 = 0.5;
          obj14.width = 0.5 * lineHeight;
          obj13.style = obj14;
          items[1] = jsx(View, obj13);
          obj1.children = items;
          tmp4 = jsxs(Fragment, obj1);
        } else {
          name = undefined;
          if (tmp != null) {
            name = tmp.name;
          }
          tmp4 = null;
          if (null != name) {
            tmp5 = jsxs;
            tmp6 = Fragment;
            obj = { children: null };
            items1 = [, ];
            items1[0] = tmp.name;
            tmp7 = jsx;
            tmp8 = View;
            obj15 = { style: null };
            obj16 = { width: null };
            tmp9 = lineHeight;
            num = 0.4;
            obj16.width = 0.4 * lineHeight;
            obj15.style = obj16;
            items1[1] = jsx(View, obj15);
            obj.children = items1;
            tmp4 = jsxs(Fragment, obj);
          }
        }
        return tmp4;
      }
    }
    cResult[5] = emoji;
    cResult[6] = lineHeight;
    cResult[7] = P;
    tmp11 = P;
  }
  let obj5 = { paddingVertical: result };
  const merged = Object.assign(tmp6);
  cResult[2] = result;
  cResult[3] = tmp6;
  cResult[4] = obj5;
  tmp9 = obj5;
}) : ((arg0) => {
  let emoji;
  let isPlaceholderText;
  let items;
  let items1;
  let items2;
  let lineClamp;
  let lineHeight;
  let obj11;
  let obj14;
  let obj8;
  let obj9;
  let onTextLayout;
  let text;
  let textVariant;
  let tmp5Result;
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  const obj = { paddingVertical: lineHeight / 10 };
  if (isPlaceholderText) {
    let obj4;
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      obj4 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
      const obj3 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      obj4 = { fontStyle: "italic" };
    }
    isPlaceholderText = obj4;
  }
  const merged = Object.assign(isPlaceholderText);
  let id;
  const obj5 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: obj, children: items2 };
  const Text = Text_Text.Text;
  if (emoji != null) {
    id = emoji.id;
  }
  if (null != id) {
    const obj6 = { children: items };
    const obj7 = { children: React4(closure_16, obj8) };
    obj8 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: obj9 };
    obj9 = { marginBottom: 0.1 * -lineHeight };
    items = [React4(metroRequire, obj7), ];
    const obj10 = { style: obj11 };
    obj11 = { width: 0.5 * lineHeight };
    items[1] = React4(metroRequire, obj10);
    tmp5Result = authStore(unpackModuleId, obj6);
  } else {
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    tmp5Result = null;
    if (null != name) {
      const obj12 = { children: items1 };
      items1 = [emoji.name, ];
      const obj13 = { style: obj14 };
      obj14 = { width: 0.4 * lineHeight };
      items1[1] = React4(metroRequire, obj13);
      tmp5Result = authStore(unpackModuleId, obj12);
    }
  }
  items2 = [tmp5Result, text];
  return authStore(Text, obj5);
});
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _Boolean;
  let animated;
  let emoji;
  const obj = react2;
  const cResult = obj.c(14);
  ({ emoji, size } = arg0);
  const tmp3 = closure_18();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  if (cResult[0] === setting) {
    let tmp5;
    let tmp15;
    let tmp14;
    if (cResult[1] === emoji) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== size) {
      const obj2 = { fontSize: size };
      const size1 = { width: size, height: size };
      cResult[3] = size;
      cResult[4] = obj2;
      cResult[5] = size1;
      tmp15 = size1;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    let str;
    if (emoji != null) {
      str = emoji.name;
    }
    if (str == null) {
      str = "";
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp14) {
        if (cResult[8] === tmp15) {
          let tmp17;
          if (cResult[9] === str) {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp3.container) {
            let tmp21;
            if (cResult[12] === tmp17) {
              tmp21 = cResult[13];
            }
            return tmp21;
          }
          const obj3 = { style: tmp3.container, children: tmp17 };
          const tmp24 = React4(metroRequire, obj3);
          cResult[11] = tmp3.container;
          cResult[12] = tmp17;
          cResult[13] = tmp24;
          tmp21 = tmp24;
        }
      }
    }
    const obj4 = { textEmojiStyle: tmp14, fastImageStyle: tmp15, src: tmp5, name: str };
    const tmp20 = React4(EmojiDefault, obj4);
    cResult[6] = tmp5;
    cResult[7] = tmp14;
    cResult[8] = tmp15;
    cResult[9] = str;
    cResult[10] = tmp20;
    tmp17 = tmp20;
  }
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj5 = { id: emoji.id, animated: _Boolean(animated) && setting, size: EMOJI_URL_BASE_SIZE };
    animated = undefined;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    _Boolean = Boolean;
    AvatarUtilsDefault;
    if (emoji != null) {
      animated = emoji.animated;
    }
    _Boolean(animated) && setting;
    emojiURL = getEmojiURL(obj5);
  }
  cResult[0] = setting;
  cResult[1] = emoji;
  cResult[2] = emojiURL;
  tmp5 = emojiURL;
}) : ((arg0) => {
  let _Boolean;
  let animated;
  let emoji;
  let obj3;
  let str;
  let tmp14;
  ({ emoji, size } = arg0);
  const tmp = closure_18();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj = { id: emoji.id, animated: _Boolean(animated) && setting, size: EMOJI_URL_BASE_SIZE };
    animated = undefined;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    _Boolean = Boolean;
    AvatarUtilsDefault;
    if (emoji != null) {
      animated = emoji.animated;
    }
    _Boolean(animated) && setting;
    emojiURL = getEmojiURL(obj);
  }
  const obj2 = { style: tmp.container, children: React4(tmp14, obj3) };
  obj3 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: str };
  str = undefined;
  tmp14 = EmojiDefault;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  return React4(metroRequire, obj2);
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((prompt, arg1) => {
  let BACKGROUND_SURFACE_HIGH;
  let _prompt;
  let closure_4;
  let customStatusActivity;
  let editEnabled;
  let first;
  let gameMentionsAsPlainText;
  let hasCustomProfileTheme;
  let items;
  let items1;
  let items3;
  let items4;
  let num2;
  let num3;
  let obj7;
  let onPressTruncatedStatus;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let showFullStatus;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let textMinWidth;
  let themeType;
  let tmp9;
  let obj = onPressTruncatedStatus(_prompt[10]);
  const cResult = obj.c(21);
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled, showFullStatus, onPressTruncatedStatus } = prompt);
  ({ style, previewEmoji, previewText, placeholderText } = prompt);
  _prompt = prompt.prompt;
  let tmp4 = undefined !== editEnabled;
  const emojiOnlyStyle = prompt.emojiOnlyStyle;
  if (tmp4) {
    tmp4 = editEnabled;
  }
  editEnabled = tmp4;
  react = tmp5;
  const tmp6 = gameMentionsAsPlainText(hasCustomProfileTheme);
  const addStatusIconSpacer = tmp6;
  const useToken = onPressTruncatedStatus(_prompt[18]).useToken;
  onPressTruncatedStatus(_prompt[18]);
  const colors = placeholderText(tmp2[8]).colors;
  if (hasCustomProfileTheme) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp9 = placeholderText;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp9 = placeholderText;
  }
  const token = useToken(BACKGROUND_SURFACE_HIGH);
  const useToken2 = onPressTruncatedStatus(_prompt[18]).useToken;
  onPressTruncatedStatus(_prompt[18]);
  const colors2 = tmp9(tmp2[8]).colors;
  const token2 = useToken2(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  let tmp13;
  if (null != themeType) {
    tmp13 = closure_15[themeType];
  }
  if (tmp13 == null) {
    tmp13 = closure_14;
  }
  const textVariant = tmp13.textVariant;
  const emojiOnlyEmojiSize = tmp13.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp13);
  const tmpResult6 = onPressTruncatedStatus(_prompt[19]);
  const trackUserProfileAction = tmpResult6.useUserProfileAnalyticsContext().trackUserProfileAction;
  const useGameMentionsAsPlainText = onPressTruncatedStatus(_prompt[20]).useGameMentionsAsPlainText;
  onPressTruncatedStatus(_prompt[20]);
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  } else {
    let str = "";
  }
  gameMentionsAsPlainText = useGameMentionsAsPlainText(previewText);
  let tmp18 = null != gameMentionsAsPlainText;
  if (tmp18) {
    let str2 = "";
    tmp18 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let closure_10 = tmp21;
  let tmp22 = !tmp18 && !tmp20 && undefined !== placeholderText;
  if (tmp22) {
    let str3 = "";
    tmp22 = "" !== placeholderText;
  }
  const isPlaceholderText = tmp22;
  if (isPlaceholderText) {
    gameMentionsAsPlainText = placeholderText;
  }
  closure_13 = tmp23;
  if (!tmp18) {
    tmp18 = tmp20;
  }
  if (!tmp18) {
    tmp18 = !tmp4 && tmp22;
  }
  closure_14 = tmp25;
  let obj3 = react;
  [closure_15, closure_16] = editEnabled(react.useState(false), 2);
  let num = 0;
  editEnabled(react.useState(false), 2);
  if (null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText) {
    num = textMinWidth;
  }
  let obj2 = { minWidth: num, minHeight: num2, paddingVertical: num3, paddingHorizontal: statusBubblePaddingHorizontal };
  num2 = 0;
  if (null != previewEmoji && !tmp18) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  if (null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText) {
    num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  const hitSlop = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const ref = obj3.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return ref.current;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const imperativeHandle = obj3.useImperativeHandle(arg1, first);
  const tmpResult8 = onPressTruncatedStatus(_prompt[21]);
  const scaledTextLineHeight = tmpResult8.useScaledTextLineHeight(textVariant);
  if (!tmp18) {
    if (!(!tmp18 && tmp4)) {
      return null;
    }
  }
  if (cResult[1] === _prompt) {
    let tmp31;
    if (cResult[2] === trackUserProfileAction) {
      tmp31 = cResult[3];
    }
    const onPress = tmp31;
    function renderStatusContent() {
      let rounded;
      let tmp8Result;
      if (closure_13) {
        const obj2 = { text: gameMentionsAsPlainText, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: rounded, lineHeight: scaledTextLineHeight };
        rounded = undefined;
        if (!closure_4) {
          const _Math = Math;
          rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
        }
        tmp8Result = React4(closure_17, obj2);
      } else if (closure_10) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp8Result = React4(closure_19, obj);
      }
      return tmp8Result;
    }
    let name;
    if (previewEmoji != null) {
      name = previewEmoji.name;
    }
    if (cResult[4] === name) {
      let obj6;
      let tmp35;
      if (cResult[5] === gameMentionsAsPlainText) {
        obj6 = cResult[6];
      }
      const joined = obj6.join(" ");
      if (cResult[7] !== joined) {
        let obj4 = { text: joined };
        cResult[7] = joined;
        cResult[8] = obj4;
        tmp35 = obj4;
      } else {
        tmp35 = cResult[8];
      }
      const accessibilityValue = tmp35;
      let tmp36;
      if (null != previewEmoji && !tmp18) {
        tmp36 = emojiOnlyStyle;
      }
      if (cResult[9] === style) {
        let tmp37;
        if (cResult[10] === tmp36) {
          tmp37 = cResult[11];
        }
        if (cResult[12] === tmp6.bubble) {
          let tmp38;
          let tmp42;
          if (cResult[13] === tmp6.smallCircle) {
            tmp38 = cResult[14];
          }
          if (null != onPressTruncatedStatus) {
            if (!(undefined !== showFullStatus && showFullStatus)) {
              if (null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText) {
                let obj5 = { style: items, children: previewEmoji(hitSlop, obj7) };
                items = [, , , ];
                ({ bubble: arr4[0], statusBubble: arr4[1] } = tmp6);
                items[2] = obj2;
                items[3] = tmp6.statusBubbleMeasureable;
                obj7 = {
                  text: gameMentionsAsPlainText,
                  isPlaceholderText: tmp22,
                  emoji: previewEmoji,
                  textVariant,
                  onTextLayout(nativeEvent) {
                                  closure_16(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                                },
                  lineHeight: scaledTextLineHeight
                };
                tmp42 = previewEmoji(textVariant, obj5);
              }
            }
          }
          if (cResult[15] === token) {
            if (cResult[16] === token2) {
              let tmp46;
              let tmp50;
              if (cResult[17] === tmp6.largeCircle) {
                tmp46 = cResult[18];
              }
              function renderStatusContentMaybeWithPressable() {
                let Text;
                let formatToPlainStringResult;
                let intl2;
                let intl4;
                let items;
                let obj4;
                let obj5;
                let str2;
                let tmp70;
                if (closure_14) {
                  let stringResult;
                  let tmp28 = isPlaceholderText;
                  if (tmp28) {
                    stringResult = placeholderText;
                  } else {
                    const intl3 = intl6.intl;
                    stringResult = intl3.string(intl6.t.Vq4UmS);
                  }
                  const obj2 = { accessibilityRole: "button", accessibilityLabel: intl4.string(intl6.t["zrpF/b"]), accessibilityHint: formatToPlainStringResult, onPress, hitSlop, children: authStore(Text, obj4) };
                  const PressableOpacity3 = Pressables.PressableOpacity;
                  intl4 = intl6.intl;
                  formatToPlainStringResult = undefined;
                  if (tmp28) {
                    const intl5 = intl6.intl;
                    const obj3 = { prompt: placeholderText };
                    formatToPlainStringResult = intl5.formatToPlainString(intl6.t.ioWOMP, obj3);
                  }
                  let str3 = "text-md/medium";
                  Text = Text_Text.Text;
                  if (tmp28) {
                    str3 = "text-md/normal";
                  }
                  const _Math = Math;
                  obj4 = { variant: str3, color: "control-secondary-text-default", lineClamp: Math.ceil(2 * hasOwnProperty.getFontScale()), style: obj5, children: items };
                  obj5 = { paddingVertical: scaledTextLineHeight / 10 };
                  if (tmp28) {
                    let obj7;
                    const obj8 = PlatformUtils;
                    if (obj8.isAndroid()) {
                      obj7 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
                      const obj6 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
                    } else {
                      obj7 = { fontStyle: "italic" };
                    }
                    tmp28 = obj7;
                  }
                  const merged = Object.assign(tmp28);
                  const obj9 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: tmp70 };
                  const CirclePlusIcon = CirclePlusIcon2.CirclePlusIcon;
                  tmp70 = undefined;
                  const obj12 = PlatformUtils;
                  if (obj12.isAndroid()) {
                    tmp70 = { marginBottom: 0.1 * -scaledTextLineHeight };
                    const obj10 = { marginBottom: 0.1 * -scaledTextLineHeight };
                  }
                  const obj11 = { children: React4(CirclePlusIcon, obj9) };
                  items = [React4(metroRequire, obj11), , ];
                  const obj13 = { style: addStatusIconSpacer.addStatusIconSpacer };
                  items[1] = React4(metroRequire, obj13);
                  items[2] = stringResult;
                  return React4(PressableOpacity3, obj2);
                } else {
                  let tmp6Result;
                  if (editEnabled) {
                    const obj14 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl6.t.QdHxos), accessibilityValue, onPress, hitSlop, children: renderStatusContent() };
                    const PressableOpacity2 = Pressables.PressableOpacity;
                    intl2 = intl6.intl;
                    tmp6Result = React4(PressableOpacity2, obj14);
                  } else {
                    if (null != onPressTruncatedStatus) {
                      if (closure_15) {
                        if (!isPlaceholderText) {
                          const PressableOpacity = Pressables.PressableOpacity;
                          const intl = intl6.intl;
                          const formatToPlainString = intl.formatToPlainString;
                          let str;
                          const UpF5Qa = intl6.t.UpF5Qa;
                          if (previewEmoji != null) {
                            str = previewEmoji.name;
                          }
                          if (str == null) {
                            str = "";
                          }
                          const obj = { emoji: str, status: str2 };
                          str2 = gameMentionsAsPlainText;
                          if (gameMentionsAsPlainText == null) {
                            str2 = "";
                          }
                          const obj15 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(UpF5Qa, obj), onPress: tmp3, hitSlop, children: renderStatusContent() };
                          tmp6Result = React4(PressableOpacity, obj15);
                        }
                      }
                    }
                    tmp6Result = renderStatusContent();
                  }
                  return tmp6Result;
                }
              }
              if (cResult[19] !== renderStatusContentMaybeWithPressable) {
                let result = renderStatusContentMaybeWithPressable();
                cResult[19] = renderStatusContentMaybeWithPressable;
                cResult[20] = result;
                tmp50 = result;
              } else {
                tmp50 = cResult[20];
              }
              let obj8 = { style: tmp37, children: items1 };
              items1 = [tmp38, tmp42, ];
              const items2 = [, , , ];
              ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp6);
              items2[2] = obj2;
              let obj9 = { style: items2, ref, children: items3 };
              const tmp54 = !(null != previewEmoji && !tmp18) && tmp6.statusBubbleLeftAligned;
              items2[3] = tmp54;
              items3 = [tmp46, tmp50];
              items1[2] = closure_10(textVariant, obj9);
              return closure_10(textVariant, obj8);
            }
          }
          let obj10 = { style: tmp6.largeCircle, backgroundColor: token, borderColor: token2 };
          const tmp49 = previewEmoji(closure_13, obj10);
          cResult[15] = token;
          cResult[16] = token2;
          cResult[17] = tmp6.largeCircle;
          cResult[18] = tmp49;
          tmp46 = tmp49;
        }
        let obj11 = { style: items4 };
        items4 = [, ];
        ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp6);
        const tmp41 = previewEmoji(textVariant, obj11);
        cResult[12] = tmp6.bubble;
        cResult[13] = tmp6.smallCircle;
        cResult[14] = tmp41;
        tmp38 = tmp41;
      }
      const items5 = [style, tmp36];
      cResult[9] = style;
      cResult[10] = tmp36;
      cResult[11] = items5;
      tmp37 = items5;
    }
    const items6 = [name, gameMentionsAsPlainText];
    const found = items6.filter((item) => null != item);
    cResult[4] = name;
    cResult[5] = gameMentionsAsPlainText;
    cResult[6] = found;
    obj6 = found;
  }
  function re() {
    let items;
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { analyticsLocations: items, prompt: _prompt };
    const openEditCustomStatusModal = CustomStatusUtils.openEditCustomStatusModal;
    items = [];
    CustomStatusUtils;
    items[0] = AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
    const result = openEditCustomStatusModal(obj2);
  }
  cResult[1] = _prompt;
  cResult[2] = trackUserProfileAction;
  cResult[3] = re;
  tmp31 = re;
}) : ((showFullStatus, arg1) => {
  let BACKGROUND_SURFACE_HIGH;
  let Text;
  let _prompt;
  let closure_0;
  let customStatusActivity;
  let editEnabled;
  let emojiOnlyStyle;
  let formatToPlainStringResult;
  let found;
  let hasCustomProfileTheme;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let num2;
  let num3;
  let obj12;
  let obj13;
  let obj7;
  let onPressTruncatedStatus;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let scaledTextLineHeight;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let textMinWidth;
  let textVariant;
  let themeType;
  let tmp35Result2;
  let tmp48;
  let tmp8;
  let tmp9;
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = showFullStatus);
  showFullStatus = showFullStatus.showFullStatus;
  _require = tmp2;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: importDefault } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp3 = scaledTextLineHeight(hasCustomProfileTheme);
  const useToken = require("useToken").useToken;
  require("useToken");
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    tmp8 = importDefault;
    tmp9 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp8 = importDefault;
    tmp9 = importDefault;
  }
  const token = useToken(BACKGROUND_SURFACE_HIGH);
  const useToken2 = require("useToken").useToken;
  require("useToken");
  const colors2 = tmp9(tmp5[8]).colors;
  let tmp13;
  const token2 = useToken2(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp13 = closure_15[themeType];
  }
  if (tmp13 == null) {
    tmp13 = closure_14;
  }
  textVariant = tmp13.textVariant;
  const emojiOnlyEmojiSize = tmp13.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp13);
  const tmp4Result6 = require("UserProfileAnalyticsContext");
  const trackUserProfileAction = tmp4Result6.useUserProfileAnalyticsContext().trackUserProfileAction;
  const useGameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText;
  require("useGameMentionsAsPlainText");
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(previewText);
  let tmp18 = null != gameMentionsAsPlainText && "" !== gameMentionsAsPlainText;
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let closure_6 = tmp21;
  let tmp22 = !tmp18 && !tmp20 && undefined !== placeholderText && "" !== placeholderText;
  const isPlaceholderText = tmp22;
  let str4 = gameMentionsAsPlainText;
  if (tmp22) {
    str4 = placeholderText;
  }
  let closure_9 = tmp23;
  if (!tmp18) {
    tmp18 = tmp20;
  }
  if (!tmp18) {
    tmp18 = !tmp && tmp22;
  }
  let obj2 = trackUserProfileAction;
  const tmp26 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
  let closure_10 = tmp26[1];
  let num = 0;
  const first = tmp26[0];
  if (null != str4 && "" !== str4) {
    num = textMinWidth;
  }
  let obj = { minWidth: num, minHeight: num2, paddingVertical: num3, paddingHorizontal: statusBubblePaddingHorizontal };
  num2 = 0;
  if (null != previewEmoji && !tmp18) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  if (null != str4 && "" !== str4) {
    num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const ref = obj2.useRef(null);
  const imperativeHandle = obj2.useImperativeHandle(arg1, () => ref.current);
  const tmp4Result8 = require("useScaledTextLineHeight");
  scaledTextLineHeight = tmp4Result8.useScaledTextLineHeight(textVariant);
  if (!tmp18) {
    if (!(!tmp18 && (undefined !== editEnabled && editEnabled))) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let items = [name, str4];
  const obj3 = { text: found.join(" ") };
  found = items.filter((item) => null != item);
  const items1 = [style, ];
  let tmp34;
  if (null != previewEmoji && !tmp18) {
    tmp34 = emojiOnlyStyle;
  }
  const obj4 = { style: items1, children: items3 };
  items1[1] = tmp34;
  const obj5 = { style: items2 };
  items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp3);
  items3 = [closure_9(closure_6, obj5), , ];
  let tmp35Result;
  if (null != onPressTruncatedStatus) {
    if (!(undefined !== showFullStatus && showFullStatus)) {
      if (null != str4 && "" !== str4) {
        const obj6 = { style: items4, children: closure_9(closure_17, obj7) };
        items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp3);
        items4[2] = obj;
        items4[3] = tmp3.statusBubbleMeasureable;
        obj7 = {
          text: str4,
          isPlaceholderText: tmp22,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                },
          lineHeight: scaledTextLineHeight
        };
        tmp35Result = tmp35(tmp33, obj6);
      }
    }
  }
  items3[1] = tmp35Result;
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp3);
  items5[2] = obj;
  function handlePressAddOrEditStatus() {
    let items;
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { analyticsLocations: items, prompt: importDefault };
    const openEditCustomStatusModal = CustomStatusUtils.openEditCustomStatusModal;
    items = [];
    CustomStatusUtils;
    items[0] = AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
    const result = openEditCustomStatusModal(obj2);
  }
  const obj8 = { style: items5, ref, children: items6 };
  const tmp38 = !(null != previewEmoji && !tmp18) && tmp3.statusBubbleLeftAligned;
  items5[3] = tmp38;
  items6 = [, ];
  const obj9 = { style: tmp3.largeCircle, backgroundColor: token, borderColor: token2 };
  items6[0] = closure_9(closure_13, obj9);
  if (!tmp18 && (undefined !== editEnabled && editEnabled)) {
    let stringResult = placeholderText;
    if (!tmp22) {
      const intl3 = tmp4(tmp5[25]).intl;
      stringResult = intl3.string(tmp4(tmp5[25]).t.Vq4UmS);
    }
    const obj10 = { accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t["zrpF/b"]), accessibilityHint: formatToPlainStringResult, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: closure_10(Text, obj12) };
    const PressableOpacity3 = tmp4(tmp5[26]).PressableOpacity;
    intl4 = tmp4(tmp5[25]).intl;
    formatToPlainStringResult = undefined;
    if (tmp22) {
      const intl5 = tmp4(tmp5[25]).intl;
      const obj11 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp4(tmp5[25]).t.ioWOMP, obj11);
    }
    let str7 = "text-md/medium";
    Text = tmp4(tmp5[16]).Text;
    if (tmp22) {
      str7 = "text-md/normal";
    }
    let _Math = Math;
    obj12 = { variant: str7, color: "control-secondary-text-default", lineClamp: Math.ceil(2 * previewEmoji.getFontScale()), style: obj13, children: items7 };
    obj13 = { paddingVertical: scaledTextLineHeight / 10 };
    if (tmp22) {
      let obj15;
      const tmp4Result9 = require("PlatformUtils");
      if (tmp4Result9.isAndroid()) {
        obj15 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
        const obj14 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
      } else {
        obj15 = { fontStyle: "italic" };
      }
      tmp22 = obj15;
    }
    const merged = Object.assign(tmp22);
    const obj16 = { color: tmp8(textVariant[8]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: tmp48 };
    const CirclePlusIcon = tmp4(tmp5[27]).CirclePlusIcon;
    tmp48 = undefined;
    const tmp4Result10 = require("PlatformUtils");
    if (tmp4Result10.isAndroid()) {
      tmp48 = { marginBottom: 0.1 * -scaledTextLineHeight };
      const obj17 = { marginBottom: 0.1 * -scaledTextLineHeight };
    }
    const obj18 = { children: closure_9(CirclePlusIcon, obj16) };
    items7 = [closure_9(closure_6, obj18), , ];
    const obj19 = { style: tmp3.addStatusIconSpacer };
    items7[1] = closure_9(closure_6, obj19);
    items7[2] = stringResult;
    tmp35Result2 = tmp35(PressableOpacity3, obj10);
  } else {
    function renderStatusContent() {
      let rounded;
      let tmp8Result;
      if (c9) {
        const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: rounded, lineHeight: scaledTextLineHeight };
        rounded = undefined;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
        }
        tmp8Result = React4(closure_17, obj2);
      } else if (closure_6) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp8Result = React4(closure_19, obj);
      }
      return tmp8Result;
    }
    if (undefined !== editEnabled && editEnabled) {
      const obj20 = { accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.QdHxos), accessibilityValue: obj3, onPress: handlePressAddOrEditStatus, hitSlop: rect, children: renderStatusContent() };
      const PressableOpacity2 = tmp4(tmp5[26]).PressableOpacity;
      intl2 = tmp4(tmp5[25]).intl;
      tmp35Result2 = tmp35(PressableOpacity2, obj20);
    } else {
      if (null != onPressTruncatedStatus) {
        if (first) {
          if (!tmp22) {
            const PressableOpacity = tmp4(tmp5[26]).PressableOpacity;
            const intl = tmp4(tmp5[25]).intl;
            const formatToPlainString = intl.formatToPlainString;
            let str6;
            const UpF5Qa = tmp4(tmp5[25]).t.UpF5Qa;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj21 = { emoji: str6, status: str4 };
            if (str4 == null) {
              str4 = "";
            }
            const obj22 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(UpF5Qa, obj21), onPress: onPressTruncatedStatus, hitSlop: rect, children: renderStatusContent() };
            tmp35Result2 = tmp35(PressableOpacity, obj22);
          }
        }
      }
      tmp35Result2 = renderStatusContent();
    }
  }
  items6[1] = tmp35Result2;
  items3[2] = closure_10(closure_6, obj8);
  return closure_10(closure_6, obj4);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default forwardRefResult;