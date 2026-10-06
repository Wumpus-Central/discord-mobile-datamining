// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let num2;
let obj2;
let obj3;
let obj4;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { toastEmoji: obj2, toastEmojiCustom: { width: 24, height: 24 }, toastEmojiText: obj3, toastText: obj4 };
obj2 = { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj3 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj4 = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      let animated;
      let tmp4;
      let tmp5;
      let url;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(13);
      emoji = emoji.emoji;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        class E {
          constructor() {
            return closure_1_4.useReducedMotion;
          }
        }
        cResult[0] = items;
        cResult[1] = E;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, E);
      const tmp8 = closure_7();
      if (cResult[2] === emoji.animated) {
        if (cResult[3] === emoji.id) {
          if (cResult[4] === emoji.url) {
            let tmp9;
            if (cResult[5] === stateFromStores) {
              tmp9 = cResult[6];
            }
            class E {
              constructor() {
                return closure_1_4.useReducedMotion;
              }
            }
            if (cResult[7] === tmp9) {
              if (cResult[8] === tmp8.toastEmoji) {
                if (cResult[9] === tmp8.toastEmojiCustom) {
                  if (cResult[10] === tmp8.toastEmojiText) {
                    let tmp14;
                    if (cResult[11] === "") {
                      tmp14 = cResult[12];
                    }
                    return tmp14;
                  }
                }
              }
            }
            ({
              toastEmoji: obj4.style,
              toastEmojiCustom: obj4.fastImageStyle,
              toastEmojiText: obj4.textEmojiStyle,
            } = tmp8);
            const tmp17 = jsx(EmojiDefault, {
              style: null,
              fastImageStyle: null,
              textEmojiStyle: null,
              name: "",
              src: tmp9,
            });
            cResult[7] = tmp9;
            cResult[8] = tmp8.toastEmoji;
            cResult[9] = tmp8.toastEmojiCustom;
            cResult[10] = tmp8.toastEmojiText;
            cResult[11] = "";
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
        }
      }
      if (null != emoji.id) {
        const obj3 = { id: null, animated, size: EMOJI_URL_BASE_SIZE };
        const tmp11 = AvatarUtilsDefault;
        class E {
          constructor() {
            return closure_1_4.useReducedMotion;
          }
        }
        animated = !stateFromStores;
        const getEmojiURL = tmp11.getEmojiURL;
        if (!stateFromStores) {
          animated = emoji.animated;
        }
        url = getEmojiURL(obj3);
      } else {
        url = emoji.url;
      }
      cResult[2] = emoji.animated;
      cResult[3] = emoji.id;
      cResult[4] = emoji.url;
      cResult[5] = stateFromStores;
      cResult[6] = url;
      tmp9 = url;
    }
  : (emoji) => {
      let useReducedMotion;
      emoji = emoji.emoji;
      let obj = emoji(504);
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const tmp2 = closure_7();
      const items1 = [emoji, stateFromStores];
      const memo = react.useMemo(() => {
        let animated;
        let url;
        if (null != emoji.id) {
          const obj = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
          animated = !stateFromStores;
          const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
          AvatarUtilsDefault;
          if (!stateFromStores) {
            animated = emoji.animated;
          }
          url = getEmojiURL(obj);
        } else {
          url = emoji.url;
        }
        return url;
      }, items1);
      let str = "";
      stateFromStores(6632);
      if (null == emoji.id) {
        str = emoji.surrogates;
      }
      return (
        <tmp5
          style={tmp2.toastEmoji}
          fastImageStyle={tmp2.toastEmojiCustom}
          textEmojiStyle={tmp2.toastEmojiText}
          name={str}
          src={memo}
        />
      );
    };
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      emoji = emoji.emoji;
      const tmp4 = closure_7();
      const toastText = tmp4.toastText;
      if (cResult[0] !== emoji.name) {
        const intl = intl3.intl;
        const obj2 = { emojiName: emoji.name };
        const formatResult = intl.format(intl3.t.nKY0Fl, obj2);
        cResult[0] = emoji.name;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.toastText) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: toastText, children: tmp5 });
      cResult[2] = tmp4.toastText;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (emoji) => {
      emoji = emoji.emoji;
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      const obj2 = { emojiName: emoji.name };
      return (
        <Text variant="text-sm/normal" style={closure_7().toastText}>
          {intl.format(intl3.t.nKY0Fl, obj2)}
        </Text>
      );
    };
function getToastEmojiEntity(id) {
  let animated;
  if (null != id.id) {
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    const obj2 = { id: id.id, animated, size: EMOJI_URL_BASE_SIZE };
    animated = !useReducedMotion;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!useReducedMotion) {
      animated = id.animated;
    }
    const obj3 = { type: "emoji", src: getEmojiURL(obj2), alt: id.name };
    return obj3;
  } else {
    let obj;
    const url = id.url;
    if ("" !== url) {
      obj = { type: "emoji", src: url, alt: id.surrogates };
      const obj4 = { type: "emoji", src: url, alt: id.surrogates };
    } else {
      obj = { type: "emoji", unicode: id.surrogates };
    }
    return obj;
  }
}
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export const ToastEmoji = tmp3;
export { getToastEmojiEntity };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  let animated;
  let intl;
  let obj5;
  let obj9;
  emoji = emoji.emoji;
  const obj = emoji(5777);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4596).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl2 = tmp(1126).intl;
    const obj2 = { emojiName: emoji.name };
    announce(intl2.formatToPlainString(emoji(1126).t.nKY0Fl, obj2));
  } else {
    const tmpResult = emoji(4580);
    const designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents(
      "showDoubleTapEmojiUpdatedToast",
    );
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const openMana = obj3.openMana;
      const obj4 = { text: intl.formatToPlainString(emoji(1126).t.nKY0Fl, obj5), icon: obj9 };
      intl = tmp(1126).intl;
      obj5 = { emojiName: emoji.name };
      if (null != emoji.id) {
        const useReducedMotion = AccessibilityStore.useReducedMotion;
        const obj6 = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
        animated = !useReducedMotion;
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (!useReducedMotion) {
          animated = emoji.animated;
        }
        obj9 = { type: "emoji", src: getEmojiURL(obj6), alt: emoji.name };
        const obj7 = { type: "emoji", src: getEmojiURL(obj6), alt: emoji.name };
      } else {
        const url = emoji.url;
        if ("" !== url) {
          obj9 = { type: "emoji", src: url, alt: emoji.surrogates };
          const obj8 = { type: "emoji", src: url, alt: emoji.surrogates };
        } else {
          obj9 = { type: "emoji", unicode: emoji.surrogates };
        }
      }
      openMana("DEFAULT_REACTION_EMOJI_UPDATED", obj4);
    } else {
      const obj10 = {
        key: "DEFAULT_REACTION_EMOJI_UPDATED",
        icon() {
          return <closure_8 emoji={emoji} />;
        },
        content() {
          return <closure_9 emoji={emoji} />;
        },
        toastDurationMs: 3000,
      };
      obj3.open(obj10);
    }
  }
};
