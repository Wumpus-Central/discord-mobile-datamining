// discord_app/modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import useIsScreenReaderEnabled from "../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export const getToastEmojiEntity = function getToastEmojiEntity(id) {
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
};
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl2 = util.intl;
    const obj3 = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl2.formatToPlainString(util.t.nKY0Fl, obj3));
  } else {
    const obj4 = { text: null, icon: null };
    const intl = util.intl;
    const obj5 = { emojiName: emoji.name };
    obj4.text = intl.formatToPlainString(util.t.nKY0Fl, obj5);
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
      const tmp3Result = AvatarUtilsDefault;
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
    ToastActionCreatorsDefault.open("DEFAULT_REACTION_EMOJI_UPDATED", obj4);
  }
  obj = useIsScreenReaderEnabled;
};
