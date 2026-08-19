// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import obj132 from "../../../utils/PlatformUtils.tsx";

require = fn;
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
        stateFromStores(dependencyMap[8]);
        const obj = { id: null, animated: null, size: null };
        obj[0] = emoji.id;
        let animated = !stateFromStores;
        if (!stateFromStores) {
          animated = emoji.animated;
        }
        obj[1] = animated;
        obj[2] = EMOJI_URL_BASE_SIZE;
        let url = obj.getEmojiURL(obj);
      } else {
        url = emoji.url;
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
  { variant: "text-sm/normal", style: callback().toastText, children: null };
  const intl = getSystemLocale.intl;
  const obj = { emojiName: emoji.emoji.name };
  obj[2] = intl.format(getSystemLocale.t.nKY0Fl, obj);
  return jsx(Text.Text, { emojiName: emoji.emoji.name });
}
const createCacheKey = { marginLeft: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 24, height: 24 };
let num = 16;
if (obj132.isIOS()) {
  num = 24;
}
const obj1 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
let num2;
if (obj132.isIOS()) {
  num2 = 32;
}
obj1[1] = num2;
obj1[3] = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
createCacheKey[2] = obj1;
createCacheKey[3] = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = obj132.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  let obj = emoji(4721);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(1351).AccessibilityAnnouncer;
    const intl = tmp(1236).intl;
    obj = { emojiName: null };
    obj[0] = emoji.name;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp(1236).t.nKY0Fl, obj));
  } else {
    obj = { key: "DEFAULT_REACTION_EMOJI_UPDATED", icon: null, content: null, toastDurationMs: 3000 };
    obj[1] = function icon() {
      return <ToastEmoji emoji={emoji} />;
    };
    obj[2] = function content() {
      return <ToastText emoji={emoji} />;
    };
    dispatcherDefault.open(obj);
  }
};