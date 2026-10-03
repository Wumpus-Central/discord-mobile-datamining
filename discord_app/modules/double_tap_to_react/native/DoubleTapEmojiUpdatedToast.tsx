// === Module 9879: DoubleTapEmojiUpdatedToast ===

// Module 9879 (DoubleTapEmojiUpdatedToast)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import Text_Text from "Text/Text" /* 4886 */;
import EmojiDefault from "Emoji" /* 6625 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { toastEmoji: { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 }, toastEmojiCustom: { width: 24, height: 24 }, toastEmojiText: null, toastText: null };
let PlatformUtils = fn(1369);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 24;
}
let obj5 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1369);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj5.lineHeight = num2;
obj5.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.toastEmojiText = obj5;
let obj3 = { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
obj2.toastText = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(13);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, E);
  const tmp8 = closure_7();
  if (cResult[2] === emoji.animated) {
    if (cResult[3] === emoji.id) {
      if (cResult[4] === emoji.url) {
        if (cResult[5] === stateFromStores) {
          class E {
            constructor() {
              return closure_1_4.useReducedMotion;
            }
          }
          if (cResult[7] === cResult[6]) {
            if (cResult[8] === tmp8.toastEmoji) {
              if (cResult[9] === tmp8.toastEmojiCustom) {
                if (cResult[10] === tmp8.toastEmojiText) {
                  if (cResult[11] === str) {
                    let tmp13 = cResult[12];
                  }
                  return tmp13;
                }
              }
            }
          }
          const obj2 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
          ({ toastEmoji: obj5.style, toastEmojiCustom: obj5.fastImageStyle, toastEmojiText: obj5.textEmojiStyle } = tmp8);
          obj2.name = "";
          obj2.src = cResult[6];
          const tmp16 = jsx(EmojiDefault, { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
          cResult[7] = cResult[6];
          cResult[8] = tmp8.toastEmoji;
          cResult[9] = tmp8.toastEmojiCustom;
          cResult[10] = tmp8.toastEmojiText;
          cResult[11] = "";
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
  }
  if (null != emoji.id) {
    const obj4 = { id: null, animated: null, size: null };
    class E {
      constructor() {
        return closure_1_4.useReducedMotion;
      }
    }
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj4.animated = animated;
    obj4.size = EMOJI_URL_BASE_SIZE;
    let url = AvatarUtilsDefault.getEmojiURL(obj4);
  } else {
    url = emoji.url;
  }
  cResult[2] = emoji.animated;
  cResult[3] = emoji.id;
  cResult[4] = emoji.url;
  cResult[5] = stateFromStores;
  cResult[6] = url;
  const tmpResult = initialize;
}) : ((emoji) => {
  emoji = emoji.emoji;
  const items = [AccessibilityStore];
  const stateFromStores = emoji(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = closure_7();
  const items1 = [emoji, stateFromStores];
  const memo = noop.useMemo(() => {
    if (null != emoji.id) {
      const obj2 = { id: emoji.id, animated: null, size: null };
      let animated = !stateFromStores;
      if (!stateFromStores) {
        animated = emoji.animated;
      }
      obj2.animated = animated;
      obj2.size = EMOJI_URL_BASE_SIZE;
      let url = AvatarUtilsDefault.getEmojiURL(obj2);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  let obj2 = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText, name: null, src: null };
  let str = "";
  let obj = emoji(504);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj2.name = str;
  obj2.src = memo;
  return jsx(stateFromStores(6625), { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText, name: null, src: null });
});
let closure_8 = tmp2;
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(5);
  emoji = emoji.emoji;
  const tmp4 = closure_7();
  if (cResult[0] !== emoji.name) {
    const intl = util.intl;
    const obj2 = { emojiName: emoji.name };
    const formatResult = intl.format(util.t.nKY0Fl, obj2);
    cResult[0] = emoji.name;
    cResult[1] = formatResult;
    let tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.toastText) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp4.toastText, children: tmp5 });
  cResult[2] = tmp4.toastText;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((emoji) => {
  const obj = { variant: "text-sm/normal", style: closure_7().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.nKY0Fl, { emojiName: emoji.emoji.name });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_7().toastText, children: null });
});
function getToastEmojiEntity(id) {
  if (null != id.id) {
    const obj2 = { id: id.id, animated: null, size: null };
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    let animated = !useReducedMotion;
    if (!useReducedMotion) {
      animated = id.animated;
    }
    const obj4 = { type: "emoji", src: null, alt: null };
    obj2.animated = animated;
    obj2.size = EMOJI_URL_BASE_SIZE;
    obj4.src = AvatarUtilsDefault.getEmojiURL(obj2);
    obj4.alt = id.name;
    return obj4;
  } else {
    const url = id.url;
    if ("" !== url) {
      const obj5 = { type: "emoji", src: url, alt: id.surrogates };
      let obj = obj5;
    } else {
      obj = { type: "emoji", unicode: id.surrogates };
    }
    return obj;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export const ToastEmoji = tmp2;
export { getToastEmojiEntity };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4590).AccessibilityAnnouncer;
    const intl2 = tmp(1126).intl;
    const obj2 = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl2.formatToPlainString(tmp(1126).t.nKY0Fl, obj2));
  } else {
    const designSystemsNotificationComponents = tmp(4574).getDesignSystemsNotificationComponents("showDoubleTapEmojiUpdatedToast");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const obj4 = { text: null, icon: null };
      const intl = tmp(1126).intl;
      const obj5 = { emojiName: emoji.name };
      obj4.text = intl.formatToPlainString(tmp(1126).t.nKY0Fl, obj5);
      if (null != emoji.id) {
        const obj6 = { id: emoji.id, animated: null, size: null };
        const useReducedMotion = AccessibilityStore.useReducedMotion;
        let animated = !useReducedMotion;
        if (!useReducedMotion) {
          animated = emoji.animated;
        }
        const obj7 = { type: "emoji", src: null, alt: null };
        obj6.animated = animated;
        obj6.size = EMOJI_URL_BASE_SIZE;
        obj7.src = AvatarUtilsDefault.getEmojiURL(obj6);
        obj7.alt = emoji.name;
        let obj9 = obj7;
        const tmp4Result = AvatarUtilsDefault;
      } else {
        const url = emoji.url;
        if ("" !== url) {
          const obj8 = { type: "emoji", src: url, alt: emoji.surrogates };
          obj9 = obj8;
        } else {
          obj9 = { type: "emoji", unicode: emoji.surrogates };
        }
      }
      obj4.icon = obj9;
      obj3.openMana("DEFAULT_REACTION_EMOJI_UPDATED", obj4);
    } else {
      const obj10 = {
        key: "DEFAULT_REACTION_EMOJI_UPDATED",
        icon() {
              return <closure_8 emoji={emoji} />;
            },
        content() {
              return <closure_9 emoji={emoji} />;
            },
        toastDurationMs: 3000
      };
      obj3.open(obj10);
    }
    const tmpResult = tmp(4574);
  }
  obj = emoji(5770);
};