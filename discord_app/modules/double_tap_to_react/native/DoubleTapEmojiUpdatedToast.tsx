// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

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
    items1 = [,];
    items1[0] = emoji;
    items1[1] = stateFromStores;
    memo = closure_3.useMemo(() => {
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
    tmp4 = jsx;
    obj1 = {
      style: tmp2.toastEmoji,
      fastImageStyle: tmp2.toastEmojiCustom,
      textEmojiStyle: tmp2.toastEmojiText,
      name: null,
      src: null,
    };
    str = "";
    tmp5 = closure_1(closure_2[9]);
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    obj1.name = str;
    obj1.src = memo;
    return tmp4(tmp5, obj1);
  }
}
function ToastText(emoji) {
  const obj = { variant: "text-sm/normal", style: closure_7().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.nKY0Fl, { emojiName: emoji.emoji.name });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_7().toastText, children: null });
}
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = {
  toastEmoji: { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 },
  toastEmojiCustom: { width: 24, height: 24 },
  toastEmojiText: null,
  toastText: null,
};
let PlatformUtils = fn(1364);
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 24;
}
const obj5 = { fontSize: num, lineHeight: null, textAlign: "center", color: null };
PlatformUtils = fn(1364);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj5.lineHeight = num2;
obj5.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.toastEmojiText = obj5;
let obj3 = { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
obj2.toastText = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
const React5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4467).AccessibilityAnnouncer;
    const intl = tmp(1115).intl;
    const obj3 = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp(1115).t.nKY0Fl, obj3));
  } else {
    const obj4 = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
        return <ToastEmoji emoji={emoji} />;
      },
      content() {
        return <ToastText emoji={emoji} />;
      },
      toastDurationMs: 3000,
    };
    ToastActionCreatorsDefault.open(obj4);
  }
  obj = emoji(5171);
};
