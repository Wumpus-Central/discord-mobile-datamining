// === Module 10328: openEmojiActionSheet ===

// Module 10328 (openEmojiActionSheet)
import EmojiConstants from "EmojiConstants" /* 1374 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export const openEmojiActionSheet = function openEmojiActionSheet(uniqueName) {
  if (null != uniqueName.uniqueName) {
    if ("" !== uniqueName.uniqueName) {
      let name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      if (null != uniqueName.surrogates) {
        let obj = { surrogate: uniqueName.surrogates, content: null };
        const _HermesInternal = HermesInternal;
        obj.content = ":" + name + ":";
      }
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
      const obj6 = ActionSheetActionCreatorsDefault;
      obj = { emojiNode: null };
      obj.emojiNode = obj;
      obj6.openLazy(asyncRequireImpl(10329, dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: uniqueName.id, alt: name, src: null };
    if (null != uniqueName.id) {
      const obj1 = { id: null, animated: null, size: null };
      ({ id: obj3.id, animated: obj3.animated } = uniqueName);
      obj1.size = EMOJI_URL_BASE_SIZE;
      let url = obj1.getEmojiURL(obj1);
    } else {
      url = uniqueName.url;
    }
    obj.src = url;
  }
  name = uniqueName.name;
};