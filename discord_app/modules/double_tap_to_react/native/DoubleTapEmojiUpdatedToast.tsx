// === Module 9125: ToastEmoji ===

// Module 9125 (ToastEmoji)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import Text from "Text" /* 4474 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import set from "set" /* 1234 */;

require = arg1;
class ToastEmoji {
  constructor(arg0) {
    emoji = global.emoji;
    closure_1 = undefined;
    obj = require("initialize");
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
        let obj = stateFromStores(closure_1_2[8]);
        obj = { id: null, animated: null, size: null };
        obj[0] = tmp.id;
        let animated = !stateFromStores;
        if (!stateFromStores) {
          animated = tmp.animated;
        }
        obj[1] = animated;
        obj[2] = closure_1_5;
        let url = obj.getEmojiURL(obj);
      } else {
        url = tmp.url;
      }
      return url;
    }, items1);
    tmp4 = jsx;
    obj = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText, name: null, src: null };
    str = "";
    tmp5 = require("Emoji");
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    obj[3] = str;
    obj[4] = memo;
    return tmp4(tmp5, obj);
  }
}
function ToastText(emoji) {
  let obj = { variant: "text-sm/normal", style: callback().toastText, children: null };
  const intl = getSystemLocale.intl;
  obj = { emojiName: emoji.emoji.name };
  obj[2] = intl.format(getSystemLocale.t.nKY0Fl, obj);
  return jsx(Text.Text, { emojiName: emoji.emoji.name });
}
createCacheKey = { toastEmoji: null, toastEmojiCustom: null, toastEmojiText: null, toastText: null };
createCacheKey = { marginLeft: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 24, height: 24 };
let num = 16;
if (set.isIOS()) {
  num = 24;
}
const obj1 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
let num2;
if (set.isIOS()) {
  num2 = 32;
}
obj1[1] = num2;
obj1[3] = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
createCacheKey[2] = obj1;
createCacheKey[3] = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  let obj = emoji(4915);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(1350).AccessibilityAnnouncer;
    const intl = tmp(1233).intl;
    obj = { emojiName: null };
    obj[0] = emoji.name;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp(1233).t.nKY0Fl, obj));
  } else {
    obj = { key: "DEFAULT_REACTION_EMOJI_UPDATED", icon: null, content: null, toastDurationMs: 3000 };
    obj[1] = function icon() {
      return closure_1_6(closure_1_8, { emoji });
    };
    obj[2] = function content() {
      return closure_1_6(closure_1_9, { emoji });
    };
    dispatcherDefault.open(obj);
    const obj2 = dispatcherDefault;
  }
};