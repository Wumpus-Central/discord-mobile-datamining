// === Module 11318: openEmojiActionSheet ===

// Module 11318 (openEmojiActionSheet)
import EmojiConstants from "EmojiConstants" /* 1389 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2018 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export function openEmojiActionSheet(uniqueName) {
  if (null != uniqueName.uniqueName) {
    if ("" !== uniqueName.uniqueName) {
      let name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      if (null != uniqueName.surrogates) {
        const obj4 = { surrogate: uniqueName.surrogates, content: null };
        const _HermesInternal = HermesInternal;
        obj4.content = ":" + name + ":";
        let obj = obj4;
      }
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
      const obj6 = ActionSheetActionCreatorsDefault;
      const obj7 = { emojiNode: obj };
      obj6.openLazy(asyncRequireImpl(11319, dependencyMap.paths), "MessageEmojiActionSheet", obj7, "stack");
    }
    obj = { id: uniqueName.id, alt: name, src: null };
    if (null != uniqueName.id) {
      const obj10 = { id: null, animated: null, size: null };
      ({ id: obj3.id, animated: obj3.animated } = uniqueName);
      obj10.size = EMOJI_URL_BASE_SIZE;
      let url = AvatarUtilsDefault.getEmojiURL(obj10);
    } else {
      url = uniqueName.url;
    }
    obj.src = url;
  }
  name = uniqueName.name;
}