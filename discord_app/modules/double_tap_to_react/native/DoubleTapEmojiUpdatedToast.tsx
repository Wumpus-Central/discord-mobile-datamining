// === Module 11124: DoubleTapEmojiUpdatedToast ===

// Module 11124 (DoubleTapEmojiUpdatedToast)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
class ToastEmoji {
  constructor(arg0) {
    emoji = global.emoji;
    closure_1 = undefined;
    obj = emoji(closure_2[7]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    closure_1 = stateFromStores;
    tmp2 = closure_7();
    items1 = [, ];
    items1[0] = emoji;
    items1[1] = stateFromStores;
    memo = closure_3.useMemo(() => {
      if (null != emoji.id) {
        const obj = { id: emoji.id, animated: null, size: null };
        let animated = !stateFromStores;
        if (!stateFromStores) {
          animated = emoji.animated;
        }
        obj.animated = animated;
        obj.size = EMOJI_URL_BASE_SIZE;
        let url = obj.getEmojiURL(obj);
      } else {
        url = emoji.url;
      }
      return url;
    }, items1);
    tmp4 = jsx;
    obj = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText, name: null, src: null };
    str = "";
    tmp5 = closure_1(closure_2[9]);
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    obj.name = str;
    obj.src = memo;
    return tmp4(tmp5, obj);
  }
}
function ToastText(emoji) {
  let obj = { variant: "text-sm/normal", style: closure_7().toastText, children: null };
  const intl = util.intl;
  obj = { emojiName: emoji.emoji.name };
  obj.children = intl.format(util.t.nKY0Fl, obj);
  return jsx(Text_Text.Text, { emojiName: emoji.emoji.name });
}
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { toastEmoji: null, toastEmojiCustom: null, toastEmojiText: null, toastText: null };
createStyles = { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
createStyles.toastEmoji = createStyles;
createStyles.toastEmojiCustom = { width: 24, height: 24 };
let PlatformUtils = fn(1115);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 24;
}
const obj1 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1115);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj1.lineHeight = num2;
obj1.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
createStyles.toastEmojiText = obj1;
createStyles.toastText = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
const React5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  let obj = emoji(4962);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4272).AccessibilityAnnouncer;
    const intl = tmp(1114).intl;
    obj = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp(1114).t.nKY0Fl, obj));
  } else {
    obj = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
          return <ToastEmoji emoji={emoji} />;
        },
      content() {
          return <ToastText emoji={emoji} />;
        },
      toastDurationMs: 3000
    };
    ToastActionCreatorsDefault.open(obj);
  }
};