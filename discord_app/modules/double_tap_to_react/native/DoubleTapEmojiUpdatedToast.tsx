// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "set";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";

const require = arg1;
class ToastEmoji {
  constructor(arg0) {
    emoji = global.emoji;
    c1 = undefined;
    obj = require("initialize");
    items = [];
    items[0] = maybeApplyNoTextColorForLightCustomTheme;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    c1 = stateFromStores;
    tmp2 = jsx();
    items1 = [, ];
    items1[0] = emoji;
    items1[1] = stateFromStores;
    memo = noop.useMemo(() => {
      if (null != emoji.id) {
        let obj = stateFromStores(outer1_2[8]);
        obj = { id: null, animated: null, size: null };
        obj[0] = tmp.id;
        let animated = !stateFromStores;
        if (!stateFromStores) {
          animated = tmp.animated;
        }
        obj[1] = animated;
        obj[2] = outer1_5;
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
  let obj = { variant: "text-sm/normal", style: createCacheKey().toastText, children: null };
  const intl = getSystemLocale.intl;
  obj = { emojiName: emoji.emoji.name };
  obj[2] = intl.format(getSystemLocale.t.nKY0Fl, obj);
  return jsx(Text.Text, { emojiName: emoji.emoji.name });
}
createCacheKey = { toastEmoji: null, toastEmojiCustom: null, toastEmojiText: null, toastText: null };
createCacheKey = { marginLeft: require("Themes").space.PX_8, marginVertical: require("Themes").space.PX_8 };
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
obj1[3] = require("Themes").colors.INTERACTIVE_TEXT_DEFAULT;
createCacheKey[2] = obj1;
createCacheKey[3] = { marginRight: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  let obj = emoji(4700);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4014).AccessibilityAnnouncer;
    const intl = tmp(1236).intl;
    obj = { emojiName: null };
    obj[0] = emoji.name;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp(1236).t.nKY0Fl, obj));
  } else {
    obj = { key: "DEFAULT_REACTION_EMOJI_UPDATED", icon: null, content: null, toastDurationMs: 3000 };
    obj[1] = function icon() {
      return outer1_6(outer1_8, { emoji });
    };
    obj[2] = function content() {
      return outer1_6(outer1_9, { emoji });
    };
    dispatcher.open(obj);
    const obj2 = dispatcher;
  }
};