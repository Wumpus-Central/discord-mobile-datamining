// discord_app/modules/reactions/native/EmojiReactionRowButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiTypes from "../../emojis/EmojiTypes.tsx";
import shared from "../../../design/shared.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ReactionIcon2 from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const Platform = react_native.Platform;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((width) => {
  const obj = { emojiContainer: size };
  size = {
    width,
    height: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.MOBILE_EMOJI_BUTTON_BACKGROUND,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    overflow: "hidden",
  };
  return obj;
});
createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles((width, fontSize, lineHeight) => {
  const obj = { emojiImage: { width, height: width }, emojiText: size };
  size = {
    lineHeight,
    fontSize,
    color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    textAlign: "center",
    width: lineHeight,
    height: lineHeight,
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiContainerSize) => {
      let first;
      let iconSize;
      let onPress;
      let styles;
      const obj = react2;
      const cResult = obj.c(11);
      ({ onPress, iconSize, styles } = emojiContainerSize);
      const tmp4 = closure_6(emojiContainerSize.emojiContainerSize);
      const obj2 = shared;
      const theme = obj2.useThemeContext().theme;
      const obj3 = shared;
      const isThemeLightResult = obj3.isThemeLight(theme);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const tmp6 = isThemeLightResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.lfIHs4);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.emojiContainer) {
        let tmp9;
        if (cResult[2] === styles) {
          tmp9 = cResult[3];
        }
        if (iconSize == null) {
          iconSize = "md";
        }
        if (cResult[4] === tmp6) {
          let tmp11;
          if (cResult[5] === iconSize) {
            tmp11 = cResult[6];
          }
          if (cResult[7] === onPress) {
            if (cResult[8] === tmp9) {
              let tmp14;
              if (cResult[9] === tmp11) {
                tmp14 = cResult[10];
              }
              return tmp14;
            }
          }
          const tmp16 = jsx(Pressables.PressableOpacity, {
            activeOpacity: 0.5,
            accessibilityRole: "button",
            accessibilityLabel: first,
            hitSlop: 4,
            onPress,
            style: tmp9,
            children: tmp11,
          });
          cResult[7] = onPress;
          cResult[8] = tmp9;
          cResult[9] = tmp11;
          cResult[10] = tmp16;
          tmp14 = tmp16;
        }
        const tmp13 = jsx(ReactionIcon2.ReactionIcon, { color: tmp6, size: iconSize });
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
    }
  : (iconSize) => {
      let onPress;
      let styles;
      let str = iconSize.iconSize;
      ({ onPress, styles } = iconSize);
      const tmp = closure_6(iconSize.emojiContainerSize);
      const obj = shared;
      const theme = obj.useThemeContext().theme;
      const obj2 = shared;
      const isThemeLightResult = obj2.isThemeLight(theme);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const tmp5 = isThemeLightResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
      const PressableOpacity = Pressables.PressableOpacity;
      const intl = intl2.intl;
      const items = [tmp.emojiContainer, styles];
      const ReactionIcon = ReactionIcon2.ReactionIcon;
      if (str == null) {
        str = "md";
      }
      return (
        <PressableOpacity
          activeOpacity={0.5}
          accessibilityRole="button"
          accessibilityLabel={intl.string(intl2.t.lfIHs4)}
          hitSlop={4}
          onPress={onPress}
          style={items}
        >
          {null}
        </PressableOpacity>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiContainerSize) => {
      let emoji;
      let emojiFontSize;
      let emojiLineHeight;
      let emojiSize;
      let first;
      let onPress;
      let styles;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(15);
      ({ emoji, onPress, styles } = emojiContainerSize);
      ({ emojiSize, emojiFontSize, emojiLineHeight } = emojiContainerSize);
      const tmp4 = closure_6(emojiContainerSize.emojiContainerSize);
      const tmp5 = closure_7(emojiSize, emojiFontSize, emojiLineHeight);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { foreground: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      let name;
      const tmp7 = cResult[1];
      if (emoji != null) {
        name = emoji.name;
      }
      if (tmp7 !== name) {
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        let name1;
        const prop = intl2.t["/iYSo6"];
        if (emoji != null) {
          name1 = emoji.name;
        }
        const obj3 = { emojiName: name1 };
        const formatToPlainStringResult = formatToPlainString(prop, obj3);
        let name2;
        if (emoji != null) {
          name2 = emoji.name;
        }
        cResult[1] = name2;
        cResult[2] = formatToPlainStringResult;
        tmp9 = formatToPlainStringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === tmp4.emojiContainer) {
        let tmp15;
        if (cResult[4] === styles) {
          tmp15 = cResult[5];
        }
        if (cResult[6] === emoji) {
          let tmp16;
          if (cResult[7] === tmp5) {
            tmp16 = cResult[8];
          }
          if (cResult[9] === onPress) {
            if (cResult[10] === tmp9) {
              if ((cResult[11] === null) == emoji) {
                if (cResult[12] === tmp15) {
                  let tmp22;
                  if (cResult[13] === tmp16) {
                    tmp22 = cResult[14];
                  }
                  return tmp22;
                }
              }
            }
          }
          const tmp24 = jsx(Pressables.PressableOpacity, {
            androidRippleConfig: first,
            activeOpacity: 0.5,
            accessibilityRole: "button",
            accessibilityLabel: tmp9,
            disabled: null == emoji,
            hitSlop: 4,
            onPress,
            style: tmp15,
            children: tmp16,
          });
          cResult[9] = onPress;
          cResult[10] = tmp9;
          cResult[11] = null == emoji;
          cResult[12] = tmp15;
          cResult[13] = tmp16;
          cResult[14] = tmp24;
          tmp22 = tmp24;
        }
        let tmp18Result = null;
        if (null != emoji) {
          let url;
          ({ emojiText: obj4.textEmojiStyle, emojiImage: obj4.fastImageStyle } = tmp5);
          let str = "";
          EmojiDefault;
          if (null == emoji.id) {
            str = emoji.surrogates;
          }
          if (null != emoji.id) {
            const obj12 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj6.id, animated: obj6.animated } = emoji);
            const tmp19Result = AvatarUtilsDefault;
            url = tmp19Result.getEmojiURL(obj12);
          } else {
            url = emoji.url;
          }
          tmp18Result = <tmp20 textEmojiStyle={null} fastImageStyle={null} name={str} src={url} />;
        }
        cResult[6] = emoji;
        cResult[7] = tmp5;
        cResult[8] = tmp18Result;
        tmp16 = tmp18Result;
      }
      const items = [tmp4.emojiContainer, styles];
      cResult[3] = tmp4.emojiContainer;
      cResult[4] = styles;
      cResult[5] = items;
      tmp15 = items;
    }
  : (emoji) => {
      let emojiFontSize;
      let emojiLineHeight;
      let emojiSize;
      let onPress;
      let styles;
      emoji = emoji.emoji;
      ({ emojiSize, emojiFontSize, emojiLineHeight, onPress, styles } = emoji);
      const tmp = closure_6(emoji.emojiContainerSize);
      const tmp2 = closure_7(emojiSize, emojiFontSize, emojiLineHeight);
      const memo = react.useMemo(() => ({ foreground: true }), []);
      const PressableOpacity = Pressables.PressableOpacity;
      const intl = intl2.intl;
      const formatToPlainString = intl.formatToPlainString;
      let name;
      const prop = intl2.t["/iYSo6"];
      if (emoji != null) {
        name = emoji.name;
      }
      const items = [tmp.emojiContainer, styles];
      let tmp4Result = null;
      if (null != emoji) {
        let url;
        ({ emojiText: obj2.textEmojiStyle, emojiImage: obj2.fastImageStyle } = tmp2);
        let str = "";
        EmojiDefault;
        if (null == emoji.id) {
          str = emoji.surrogates;
        }
        if (null != emoji.id) {
          const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj4.id, animated: obj4.animated } = emoji);
          const tmp9Result = AvatarUtilsDefault;
          url = tmp9Result.getEmojiURL(obj6);
        } else {
          url = emoji.url;
        }
        tmp4Result = <tmp10 textEmojiStyle={null} fastImageStyle={null} name={str} src={url} />;
      }
      return (
        <PressableOpacity
          androidRippleConfig={memo}
          activeOpacity={0.5}
          accessibilityRole="button"
          accessibilityLabel={formatToPlainString(prop, { emojiName: name })}
          disabled={null == emoji}
          hitSlop={4}
          onPress={onPress}
          style={items}
        >
          {tmp4Result}
        </PressableOpacity>
      );
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/reactions/native/EmojiReactionRowButton.tsx");

export const EmojiPickerRowButton = tmp2;
export const EmojiReactionRowButton = tmp3;
export const getEmojiKey = function getEmojiKey(type, index) {
  let tmp = index;
  if (null != type) {
    tmp = type.type === EmojiTypes.EmojiTypes.UNICODE ? type.surrogates : type.id;
  }
  return tmp;
};
