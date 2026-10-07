// discord_app/modules/user_profile/native/UserProfileCustomStatusBubble.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import inlineStyles from "../../../../_runtime/08169_inlineStyles.js";
import CustomStatusUtils from "../../custom_status/native/CustomStatusUtils.tsx";
import CirclePlusIcon from "../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let createStyles = fn(4896);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { position: "relative" },
    bubble: null,
    statusBubble: null,
    statusBubbleMeasureable: null,
    smallCircle: null,
    largeCircle: null,
    addStatusIconSpacer: null,
    statusBubbleLeftAligned: null,
  };
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
  const obj3 = {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tmp4(587).radii.lg,
  };
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
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ backgroundColor, borderColor, style } = arg0);
      if (cResult[0] !== backgroundColor) {
        const obj2 = { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor };
        const tmp6 = options(inlineStyles.Path, obj2);
        cResult[0] = backgroundColor;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== borderColor) {
        const obj3 = { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 };
        const tmp9 = options(inlineStyles.Path, obj3);
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
      const tmp11 = v65535(inlineStylesDefault, size);
      cResult[4] = style;
      cResult[5] = tmp4;
      cResult[6] = tmp7;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : (arg0) => {
      ({ backgroundColor, borderColor, style } = arg0);
      const size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: null };
      const items = [
        options(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor }),
        options(inlineStyles.Path, {
          d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10",
          fill: "none",
          stroke: borderColor,
          strokeWidth: 1,
        }),
      ];
      size.children = items;
      return v65535(inlineStylesDefault, size);
    };
let closure_14 = {
  textVariant: "text-md/normal",
  emojiOnlyEmojiSize: 32,
  textMinWidth: 42,
  statusBubblePaddingHorizontal: 12,
  statusBubblePaddingVertical: 7,
};
const dependencyMap = {
  [fn(6714).UserProfileThemeTypes.PREVIEW]: {
    textVariant: "text-sm/normal",
    emojiOnlyEmojiSize: 26,
    textMinWidth: 53,
    statusBubblePaddingHorizontal: 10,
    statusBubblePaddingVertical: 6,
  },
};
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
            const tmp18 = options(FastImageDefault, obj4);
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
    }
  : (id) => {
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
      return options(tmp3, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isPlaceholderText) => {
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
          tmpResult = emoji(1369);
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
                  tmp15 = f55949;
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
                  obj10.children = jsx(f55949, obj11);
                  items = [,];
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
                    items1 = [,];
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
            cResult[9] = tmp12Result;
            let tmp13 = tmp12Result;
          } else {
            tmp13 = cResult[9];
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
                tmp15 = f55949;
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
                obj10.children = jsx(f55949, obj11);
                items = [,];
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
                  items1 = [,];
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
          let obj4 = {
            variant: textVariant,
            color: "text-default",
            lineClamp,
            onTextLayout,
            style: tmp10,
            children: null,
          };
          let items = [tmp13, text];
          obj4.children = items;
          const tmp17 = closure_10(emoji(4892).Text, obj4);
          cResult[10] = lineClamp;
          cResult[11] = onTextLayout;
          cResult[12] = tmp13;
          cResult[13] = text;
          cResult[14] = tmp10;
          cResult[15] = textVariant;
          cResult[16] = tmp17;
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
              tmp15 = f55949;
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
              obj10.children = jsx(f55949, obj11);
              items = [,];
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
                items1 = [,];
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
        tmp12 = P;
      }
      let obj5 = { paddingVertical: result };
      const merged = Object.assign(tmp6);
      cResult[2] = result;
      cResult[3] = tmp6;
      cResult[4] = obj5;
      tmp10 = obj5;
      let obj = emoji(576);
    }
  : (arg0) => {
      ({ emoji, lineHeight, isPlaceholderText } = arg0);
      ({ text, textVariant, lineClamp, onTextLayout } = arg0);
      if (isPlaceholderText === undefined) {
        isPlaceholderText = false;
      }
      const obj = { paddingVertical: lineHeight / 10 };
      if (!isPlaceholderText) {
        const merged = Object.assign(isPlaceholderText);
        const obj3 = {
          variant: textVariant,
          color: "text-default",
          lineClamp,
          onTextLayout,
          style: obj,
          children: null,
        };
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
          obj5.children = options(closure_16, obj6);
          const items = [options(timestampProducer, obj5)];
          const obj8 = { style: null };
          const obj9 = { width: 0.5 * lineHeight };
          obj8.style = obj9;
          items[1] = options(timestampProducer, obj8);
          obj4.children = items;
          let tmp8Result = v65535(closure_1_11, obj4);
        } else {
          let name;
          if (emoji != null) {
            name = emoji.name;
          }
          tmp8Result = null;
          if (null != name) {
            const obj10 = { children: null };
            const items1 = [emoji.name];
            const obj11 = { style: null };
            const obj12 = { width: 0.4 * lineHeight };
            obj11.style = obj12;
            items1[1] = options(timestampProducer, obj11);
            obj10.children = items1;
            tmp8Result = v65535(closure_1_11, obj10);
          }
        }
        const items2 = [tmp8Result, text];
        obj3.children = items2;
        return v65535(Text_Text.Text, obj3);
      } else {
        if (obj2.isAndroid()) {
          const obj13 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
        } else {
          const obj14 = { fontStyle: "italic" };
        }
        obj2 = PlatformUtils;
      }
    };
createStyles = fn(4896);
let closure_18 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ emoji, size } = arg0);
      const tmp3 = closure_18();
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
              const tmp23 = options(timestampProducer, obj4);
              cResult[11] = tmp3.container;
              cResult[12] = tmp16;
              cResult[13] = tmp23;
              tmp20 = tmp23;
            }
          }
        }
        const obj5 = { textEmojiStyle: tmp13, fastImageStyle: tmp14, src: tmp5, name: str };
        const tmp19 = options(EmojiDefault, obj5);
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
    }
  : (arg0) => {
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
      const obj3 = { style: closure_18().container, children: null };
      const obj4 = {
        textEmojiStyle: { fontSize: size },
        fastImageStyle: { width: size, height: size },
        src: emojiURL,
        name: null,
      };
      let str;
      const tmp = closure_18();
      if (emoji != null) {
        str = emoji.name;
      }
      if (str == null) {
        str = "";
      }
      obj4.name = str;
      obj3.children = options(EmojiDefault, obj4);
      return options(timestampProducer, obj3);
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (prompt, arg1) => {
        const cResult = onPressTruncatedStatus(_prompt[10]).c(21);
        ({
          customStatusActivity,
          themeType,
          hasCustomProfileTheme,
          editEnabled,
          showFullStatus,
          onPressTruncatedStatus,
        } = prompt);
        ({ style, previewEmoji, previewText, placeholderText } = prompt);
        _prompt = prompt.prompt;
        let tmp4 = undefined !== editEnabled;
        if (tmp4) {
          tmp4 = editEnabled;
        }
        editEnabled = tmp4;
        noop = tmp5;
        const tmp6 = gameMentionsAsPlainText(hasCustomProfileTheme);
        const addStatusIconSpacer = tmp6;
        let obj = onPressTruncatedStatus(_prompt[10]);
        const colors = placeholderText(tmp2[8]).colors;
        if (hasCustomProfileTheme) {
          let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
          let tmp8 = placeholderText;
        } else {
          BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
          tmp8 = placeholderText;
        }
        const token = onPressTruncatedStatus(_prompt[18]).useToken(BACKGROUND_SURFACE_HIGH);
        const tmpResult = onPressTruncatedStatus(_prompt[18]);
        const colors2 = tmp8(tmp2[8]).colors;
        const token1 = onPressTruncatedStatus(_prompt[18]).useToken(
          hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE,
        );
        let tmp11;
        if (null != themeType) {
          tmp11 = dependencyMap[themeType];
        }
        if (tmp11 == null) {
          tmp11 = editEnabled;
        }
        const textVariant = tmp11.textVariant;
        const emojiOnlyEmojiSize = tmp11.emojiOnlyEmojiSize;
        ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp11);
        const tmpResult5 = onPressTruncatedStatus(_prompt[18]);
        const trackUserProfileAction = onPressTruncatedStatus(_prompt[19]).useUserProfileAnalyticsContext()
          .trackUserProfileAction;
        const tmpResult6 = onPressTruncatedStatus(_prompt[19]);
        if (undefined === previewText) {
          state = undefined;
          if (customStatusActivity != null) {
            state = customStatusActivity.state;
          }
          previewText = state;
        }
        gameMentionsAsPlainText = onPressTruncatedStatus(_prompt[20]).useGameMentionsAsPlainText(previewText);
        let tmp15 = null != gameMentionsAsPlainText;
        if (tmp15) {
          tmp15 = "" !== gameMentionsAsPlainText;
        }
        if (undefined === previewEmoji) {
          let emoji;
          if (customStatusActivity != null) {
            emoji = customStatusActivity.emoji;
          }
          previewEmoji = emoji;
        }
        let tmp18 = tmp17;
        if (null != previewEmoji) {
          tmp18 = !tmp15;
        }
        closure_10 = tmp18;
        let tmp19 = !tmp15;
        if (!tmp15) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = undefined !== placeholderText;
        }
        if (tmp19) {
          tmp19 = "" !== placeholderText;
        }
        const isPlaceholderText = tmp19;
        if (tmp19) {
          gameMentionsAsPlainText = placeholderText;
        }
        let tmp20 = null != gameMentionsAsPlainText;
        if (tmp20) {
          tmp20 = "" !== gameMentionsAsPlainText;
        }
        closure_13 = tmp20;
        if (!tmp15) {
          tmp15 = tmp17;
        }
        if (!tmp15) {
          let tmp21 = !tmp4;
          if (!tmp4) {
            tmp21 = tmp19;
          }
          tmp15 = tmp21;
        }
        let tmp22 = !tmp15;
        if (!tmp15) {
          tmp22 = tmp4;
        }
        editEnabled = tmp22;
        const tmpResult7 = onPressTruncatedStatus(_prompt[20]);
        [closure_15, closure_16] = editEnabled(noop.useState(false), 2);
        let num = 0;
        if (tmp20) {
          num = textMinWidth;
        }
        let obj2 = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
        let num2 = 0;
        if (tmp18) {
          num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
        }
        obj2.minHeight = num2;
        if (tmp20) {
          let num3 = statusBubblePaddingVertical;
        } else {
          num3 = 0;
        }
        obj2.paddingVertical = num3;
        obj2.paddingHorizontal = statusBubblePaddingHorizontal;
        const hitSlop = {
          top: statusBubblePaddingVertical,
          bottom: statusBubblePaddingVertical,
          left: statusBubblePaddingHorizontal,
          right: statusBubblePaddingHorizontal,
        };
        const tmp23 = editEnabled(noop.useState(false), 2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s() {
            return ref.current;
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        const imperativeHandle = obj6.useImperativeHandle(arg1, first);
        const ref = noop.useRef(null);
        const scaledTextLineHeight = onPressTruncatedStatus(_prompt[21]).useScaledTextLineHeight(textVariant);
        if (!tmp15) {
          if (!tmp22) {
            return null;
          }
        }
        if (cResult[1] === _prompt) {
          if (cResult[2] === trackUserProfileAction) {
            let tmp28 = cResult[3];
          }
          const onPress = tmp28;
          function renderStatusContent() {
            if (closure_13) {
              const obj2 = {
                text: gameMentionsAsPlainText,
                isPlaceholderText,
                emoji: previewEmoji,
                textVariant,
                lineClamp: null,
                lineHeight: null,
              };
              let rounded;
              if (!closure_4) {
                const _Math = Math;
                rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
              }
              obj2.lineClamp = rounded;
              obj2.lineHeight = scaledTextLineHeight;
              let tmp7Result = options(closure_17, obj2);
            } else if (closure_10) {
              const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
              tmp7Result = options(closure_19, obj);
            }
            return tmp7Result;
          }
          let name;
          if (previewEmoji != null) {
            name = previewEmoji.name;
          }
          if (cResult[4] === name) {
            if (cResult[5] === gameMentionsAsPlainText) {
              let obj9 = cResult[6];
            }
            const joined = obj9.join(" ");
            if (cResult[7] !== joined) {
              let obj3 = { text: joined };
              cResult[7] = joined;
              cResult[8] = obj3;
              let tmp32 = obj3;
            } else {
              tmp32 = cResult[8];
            }
            const accessibilityValue = tmp32;
            let emojiOnlyStyle;
            if (tmp18) {
              emojiOnlyStyle = prompt.emojiOnlyStyle;
            }
            if (cResult[9] === style) {
              if (cResult[10] === emojiOnlyStyle) {
                let tmp34 = cResult[11];
              }
              if (cResult[12] === tmp6.bubble) {
                if (cResult[13] === tmp6.smallCircle) {
                  let tmp35 = cResult[14];
                }
                if (null != onPressTruncatedStatus) {
                  if (!tmp5) {
                    if (tmp20) {
                      let obj4 = { style: null, children: null };
                      let items = [, , ,];
                      ({ bubble: arr4[0], statusBubble: arr4[1] } = tmp6);
                      items[2] = obj2;
                      items[3] = tmp6.statusBubbleMeasureable;
                      obj4.style = items;
                      let obj5 = {
                        text: gameMentionsAsPlainText,
                        isPlaceholderText: tmp19,
                        emoji: previewEmoji,
                        textVariant,
                        onTextLayout(nativeEvent) {
                          closure_1_16(
                            nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()),
                          );
                        },
                        lineHeight: scaledTextLineHeight,
                      };
                      obj4.children = previewEmoji(hitSlop, obj5);
                      const tmp39 = previewEmoji(textVariant, obj4);
                    }
                  }
                }
                if (cResult[15] === token) {
                  if (cResult[16] === token1) {
                    if (cResult[17] === tmp6.largeCircle) {
                      let tmp43 = cResult[18];
                    }
                    function renderStatusContentMaybeWithPressable() {
                      if (editEnabled) {
                        if (closure_11) {
                          let stringResult = placeholderText;
                        } else {
                          const intl3 = util.intl;
                          stringResult = intl3.string(util.t.Vq4UmS);
                        }
                        const obj2 = {
                          accessibilityRole: "button",
                          accessibilityLabel: null,
                          accessibilityHint: null,
                          onPress: null,
                          hitSlop: null,
                          children: null,
                        };
                        const intl4 = util.intl;
                        obj2.accessibilityLabel = intl4.string(util.t["zrpF/b"]);
                        let formatToPlainStringResult;
                        if (closure_11) {
                          const intl5 = util.intl;
                          const obj3 = { prompt: placeholderText };
                          formatToPlainStringResult = intl5.formatToPlainString(util.t.ioWOMP, obj3);
                        }
                        obj2.accessibilityHint = formatToPlainStringResult;
                        obj2.onPress = onPress;
                        obj2.hitSlop = hitSlop;
                        let str3 = "text-md/medium";
                        if (closure_11) {
                          str3 = "text-md/normal";
                        }
                        const obj4 = {
                          variant: str3,
                          color: "control-secondary-text-default",
                          lineClamp: null,
                          style: null,
                          children: null,
                        };
                        const _Math = Math;
                        obj4.lineClamp = Math.ceil(2 * hasOwnProperty.getFontScale());
                        const obj5 = { paddingVertical: scaledTextLineHeight / 10 };
                        if (!closure_11) {
                          const merged = Object.assign(closure_11);
                          obj4.style = obj5;
                          const obj6 = {
                            color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
                            size: "xs",
                            style: null,
                          };
                          let tmp70;
                          if (obj12.isAndroid()) {
                            const obj7 = { marginBottom: 0.1 * -tmp53 };
                            tmp70 = obj7;
                          }
                          const obj9 = { children: null };
                          obj6.style = tmp70;
                          obj9.children = options(CirclePlusIcon.CirclePlusIcon, obj6);
                          const items = [options(timestampProducer, obj9), ,];
                          const obj10 = { style: addStatusIconSpacer.addStatusIconSpacer };
                          items[1] = options(timestampProducer, obj10);
                          items[2] = stringResult;
                          obj4.children = items;
                          obj2.children = v65535(Text_Text.Text, obj4);
                          return options(Pressables.PressableOpacity, obj2);
                        } else {
                          if (obj8.isAndroid()) {
                            const obj11 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
                          } else {
                            const obj13 = { fontStyle: "italic" };
                          }
                          obj8 = PlatformUtils;
                        }
                      } else {
                        if (editEnabled) {
                          const obj14 = {
                            accessibilityRole: "button",
                            accessibilityLabel: null,
                            accessibilityValue: null,
                            onPress: null,
                            hitSlop: null,
                            children: null,
                          };
                          const intl2 = util.intl;
                          obj14.accessibilityLabel = intl2.string(util.t.QdHxos);
                          obj14.accessibilityValue = accessibilityValue;
                          obj14.onPress = onPress;
                          obj14.hitSlop = hitSlop;
                          obj14.children = renderStatusContent();
                          let tmp5Result = options(Pressables.PressableOpacity, obj14);
                        } else {
                          if (null != onPressTruncatedStatus) {
                            if (dependencyMap) {
                              if (!closure_11) {
                                const intl = util.intl;
                                let str;
                                if (previewEmoji != null) {
                                  str = previewEmoji.name;
                                }
                                if (str == null) {
                                  str = "";
                                }
                                const obj = { emoji: str, status: null };
                                let str2 = gameMentionsAsPlainText;
                                if (gameMentionsAsPlainText == null) {
                                  str2 = "";
                                }
                                const obj15 = {
                                  accessibilityRole: "button",
                                  accessibilityLabel: null,
                                  onPress: null,
                                  hitSlop: null,
                                  children: null,
                                };
                                obj.status = str2;
                                obj15.accessibilityLabel = intl.formatToPlainString(util.t.UpF5Qa, obj);
                                obj15.onPress = tmp2;
                                obj15.hitSlop = hitSlop;
                                obj15.children = renderStatusContent();
                                tmp5Result = options(Pressables.PressableOpacity, obj15);
                              }
                            }
                          }
                          tmp5Result = renderStatusContent();
                        }
                        return tmp5Result;
                      }
                    }
                    if (cResult[19] !== renderStatusContentMaybeWithPressable) {
                      let result = renderStatusContentMaybeWithPressable();
                      cResult[19] = renderStatusContentMaybeWithPressable;
                      cResult[20] = result;
                      let tmp47 = result;
                    } else {
                      tmp47 = cResult[20];
                    }
                    let obj7 = { style: tmp34, children: null };
                    const items1 = [tmp35, tmp39];
                    const items2 = [, , ,];
                    ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp6);
                    items2[2] = obj2;
                    let statusBubbleLeftAligned = !tmp18;
                    if (!tmp18) {
                      statusBubbleLeftAligned = tmp6.statusBubbleLeftAligned;
                    }
                    let obj8 = { style: null, ref: null, children: null };
                    items2[3] = statusBubbleLeftAligned;
                    obj8.style = items2;
                    obj8.ref = ref;
                    const items3 = [tmp43, tmp47];
                    obj8.children = items3;
                    items1[2] = closure_10(textVariant, obj8);
                    obj7.children = items1;
                    return closure_10(textVariant, obj7);
                  }
                }
                let obj10 = { style: tmp6.largeCircle, backgroundColor: token, borderColor: token1 };
                const tmp46 = previewEmoji(closure_13, obj10);
                cResult[15] = token;
                cResult[16] = token1;
                cResult[17] = tmp6.largeCircle;
                cResult[18] = tmp46;
                tmp43 = tmp46;
              }
              let obj11 = { style: null };
              const items4 = [,];
              ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp6);
              obj11.style = items4;
              const tmp38 = previewEmoji(textVariant, obj11);
              cResult[12] = tmp6.bubble;
              cResult[13] = tmp6.smallCircle;
              cResult[14] = tmp38;
              tmp35 = tmp38;
            }
            const items5 = [style, emojiOnlyStyle];
            cResult[9] = style;
            cResult[10] = emojiOnlyStyle;
            cResult[11] = items5;
            tmp34 = items5;
          }
          const items6 = [name, gameMentionsAsPlainText];
          const found = items6.filter((item) => null != item);
          cResult[4] = name;
          cResult[5] = gameMentionsAsPlainText;
          cResult[6] = found;
          obj9 = found;
        }
        function re() {
          trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj3 = { analyticsLocations: null, prompt: null };
          const items = [AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE];
          obj3.analyticsLocations = items;
          obj3.prompt = _prompt;
          const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
        }
        cResult[1] = _prompt;
        cResult[2] = trackUserProfileAction;
        cResult[3] = re;
        tmp28 = re;
        const tmpResult8 = onPressTruncatedStatus(_prompt[21]);
      }
    : (showFullStatus, arg1) => {
        ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = showFullStatus);
        showFullStatus = showFullStatus.showFullStatus;
        _require = tmp2;
        ({
          onPressTruncatedStatus,
          previewEmoji,
          previewText,
          placeholderText,
          prompt: importDefault,
        } = showFullStatus);
        ({ style, emojiOnlyStyle } = showFullStatus);
        const tmp3 = scaledTextLineHeight(hasCustomProfileTheme);
        const colors = require("native").colors;
        if (hasCustomProfileTheme) {
          let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
          let tmp7 = importDefault;
          let tmp8 = importDefault;
        } else {
          BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
          tmp7 = importDefault;
          tmp8 = importDefault;
        }
        const token = require("useToken").useToken(BACKGROUND_SURFACE_HIGH);
        let obj = require("useToken");
        const colors2 = tmp8(tmp5[8]).colors;
        let tmp11;
        const token1 = require("useToken").useToken(
          hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE,
        );
        if (null != themeType) {
          tmp11 = dependencyMap[themeType];
        }
        if (tmp11 == null) {
          tmp11 = closure_14;
        }
        textVariant = tmp11.textVariant;
        const emojiOnlyEmojiSize = tmp11.emojiOnlyEmojiSize;
        ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp11);
        const tmp4Result = require("useToken");
        const trackUserProfileAction =
          require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
        const tmp4Result6 = require("UserProfileAnalyticsContext");
        if (undefined === previewText) {
          state = undefined;
          if (customStatusActivity != null) {
            state = customStatusActivity.state;
          }
          previewText = state;
        }
        const gameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(previewText);
        let tmp15 = null != gameMentionsAsPlainText;
        if (tmp15) {
          tmp15 = "" !== gameMentionsAsPlainText;
        }
        if (undefined === previewEmoji) {
          let emoji;
          if (customStatusActivity != null) {
            emoji = customStatusActivity.emoji;
          }
          previewEmoji = emoji;
        }
        let tmp18 = tmp17;
        if (null != previewEmoji) {
          tmp18 = !tmp15;
        }
        closure_6 = tmp18;
        let tmp19 = !tmp15;
        if (!tmp15) {
          tmp19 = !tmp17;
        }
        if (tmp19) {
          tmp19 = undefined !== placeholderText;
        }
        if (tmp19) {
          tmp19 = "" !== placeholderText;
        }
        const isPlaceholderText = tmp19;
        let str4 = gameMentionsAsPlainText;
        if (tmp19) {
          str4 = placeholderText;
        }
        let tmp20 = null != str4;
        if (tmp20) {
          tmp20 = "" !== str4;
        }
        closure_9 = tmp20;
        if (!tmp15) {
          tmp15 = tmp17;
        }
        if (!tmp15) {
          let tmp21 = !tmp;
          if (!tmp) {
            tmp21 = tmp19;
          }
          tmp15 = tmp21;
        }
        let tmp22 = !tmp15;
        if (!tmp15) {
          tmp22 = tmp;
        }
        const tmp23 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
        closure_10 = tmp23[1];
        let num = 0;
        if (tmp20) {
          num = textMinWidth;
        }
        let obj2 = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
        let num2 = 0;
        if (tmp18) {
          num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
        }
        obj2.minHeight = num2;
        if (tmp20) {
          let num3 = statusBubblePaddingVertical;
        } else {
          num3 = 0;
        }
        obj2.paddingVertical = num3;
        obj2.paddingHorizontal = statusBubblePaddingHorizontal;
        const rect = {
          top: statusBubblePaddingVertical,
          bottom: statusBubblePaddingVertical,
          left: statusBubblePaddingHorizontal,
          right: statusBubblePaddingHorizontal,
        };
        const tmp4Result7 = require("useGameMentionsAsPlainText");
        const imperativeHandle = obj5.useImperativeHandle(arg1, () => ref.current);
        const ref = trackUserProfileAction.useRef(null);
        scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(textVariant);
        if (!tmp15) {
          if (!tmp22) {
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
        const items1 = [style];
        let tmp30;
        if (tmp18) {
          tmp30 = emojiOnlyStyle;
        }
        const obj4 = { style: items1, children: null };
        items1[1] = tmp30;
        const obj6 = { style: null };
        const items2 = [,];
        ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp3);
        obj6.style = items2;
        const items3 = [closure_9(closure_6, obj6), ,];
        let tmp31Result;
        if (null != onPressTruncatedStatus) {
          if (!tmp2) {
            if (tmp20) {
              const obj7 = { style: null, children: null };
              const items4 = [, , ,];
              ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp3);
              items4[2] = obj2;
              items4[3] = tmp3.statusBubbleMeasureable;
              obj7.style = items4;
              const obj8 = {
                text: str4,
                isPlaceholderText: tmp19,
                emoji: previewEmoji,
                textVariant,
                onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                },
                lineHeight: scaledTextLineHeight,
              };
              obj7.children = tmp31(closure_17, obj8);
              tmp31Result = tmp31(tmp29, obj7);
            }
          }
        }
        items3[1] = tmp31Result;
        const items5 = [, , ,];
        ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp3);
        items5[2] = obj2;
        let statusBubbleLeftAligned = !tmp18;
        if (!tmp18) {
          statusBubbleLeftAligned = tmp3.statusBubbleLeftAligned;
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
        const items6 = [
          closure_9(closure_13, { style: tmp3.largeCircle, backgroundColor: token, borderColor: token1 }),
        ];
        if (tmp22) {
          let stringResult = placeholderText;
          if (!tmp19) {
            const intl3 = tmp4(tmp5[25]).intl;
            stringResult = intl3.string(tmp4(tmp5[25]).t.Vq4UmS);
          }
          const obj11 = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            accessibilityHint: null,
            onPress: null,
            hitSlop: null,
            children: null,
          };
          const intl4 = tmp4(tmp5[25]).intl;
          obj11.accessibilityLabel = intl4.string(tmp4(tmp5[25]).t["zrpF/b"]);
          let formatToPlainStringResult;
          if (tmp19) {
            const intl5 = tmp4(tmp5[25]).intl;
            const obj12 = { prompt: placeholderText };
            formatToPlainStringResult = intl5.formatToPlainString(tmp4(tmp5[25]).t.ioWOMP, obj12);
          }
          obj11.accessibilityHint = formatToPlainStringResult;
          obj11.onPress = handlePressAddOrEditStatus;
          obj11.hitSlop = rect;
          let str7 = "text-md/medium";
          if (tmp19) {
            str7 = "text-md/normal";
          }
          const obj13 = {
            variant: str7,
            color: "control-secondary-text-default",
            lineClamp: null,
            style: null,
            children: null,
          };
          let _Math = Math;
          obj13.lineClamp = Math.ceil(2 * previewEmoji.getFontScale());
          const obj14 = { paddingVertical: scaledTextLineHeight / 10 };
          if (!tmp19) {
            const merged = Object.assign(tmp19);
            obj13.style = obj14;
            const obj15 = { color: tmp7(tmp5[8]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: null };
            let tmp44;
            if (tmp4Result9.isAndroid()) {
              const obj16 = { marginBottom: 0.1 * -scaledTextLineHeight };
              tmp44 = obj16;
            }
            const obj17 = { children: null };
            obj15.style = tmp44;
            obj17.children = tmp31(tmp4(tmp5[27]).CirclePlusIcon, obj15);
            const items7 = [tmp31(tmp29, obj17), ,];
            const obj18 = { style: tmp3.addStatusIconSpacer };
            items7[1] = tmp31(tmp29, obj18);
            items7[2] = stringResult;
            obj13.children = items7;
            obj11.children = tmp28(tmp4(tmp5[16]).Text, obj13);
            let tmp31Result2 = tmp31(tmp4(tmp5[26]).PressableOpacity, obj11);
            tmp4Result9 = tmp4(tmp5[15]);
          } else {
            if (tmp4Result10.isAndroid()) {
              const obj19 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
            } else {
              const obj20 = { fontStyle: "italic" };
            }
            tmp4Result10 = tmp4(tmp5[15]);
          }
        } else {
          function renderStatusContent() {
            if (closure_9) {
              const obj2 = {
                text: str4,
                isPlaceholderText,
                emoji: previewEmoji,
                textVariant,
                lineClamp: null,
                lineHeight: null,
              };
              let rounded;
              if (!closure_0) {
                const _Math = Math;
                rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
              }
              obj2.lineClamp = rounded;
              obj2.lineHeight = scaledTextLineHeight;
              let tmp7Result = options(closure_17, obj2);
            } else if (closure_6) {
              const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
              tmp7Result = options(closure_19, obj);
            }
            return tmp7Result;
          }
          if (tmp) {
            const obj21 = {
              accessibilityRole: "button",
              accessibilityLabel: null,
              accessibilityValue: null,
              onPress: null,
              hitSlop: null,
              children: null,
            };
            const intl2 = tmp4(tmp5[25]).intl;
            obj21.accessibilityLabel = intl2.string(tmp4(tmp5[25]).t.QdHxos);
            obj21.accessibilityValue = obj3;
            obj21.onPress = handlePressAddOrEditStatus;
            obj21.hitSlop = rect;
            obj21.children = renderStatusContent();
            tmp31Result2 = tmp31(tmp4(tmp5[26]).PressableOpacity, obj21);
          } else {
            if (null != onPressTruncatedStatus) {
              if (tmp23[0]) {
                if (!tmp19) {
                  const intl = tmp4(tmp5[25]).intl;
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
                  const obj23 = {
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    onPress: null,
                    hitSlop: null,
                    children: null,
                  };
                  obj22.status = str4;
                  obj23.accessibilityLabel = intl.formatToPlainString(tmp4(tmp5[25]).t.UpF5Qa, obj22);
                  obj23.onPress = onPressTruncatedStatus;
                  obj23.hitSlop = rect;
                  obj23.children = renderStatusContent();
                  tmp31Result2 = tmp31(tmp4(tmp5[26]).PressableOpacity, obj23);
                }
              }
            }
            tmp31Result2 = renderStatusContent();
          }
        }
        items6[1] = tmp31Result2;
        obj9.children = items6;
        items3[2] = closure_10(closure_6, obj9);
        obj4.children = items3;
        return closure_10(closure_6, obj4);
      },
);
