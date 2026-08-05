// discord_app/modules/emoji_picker/native/components/openEmojiActionSheet.tsx
import { EMOJI_URL_BASE_SIZE } from "set";

let result = require("dismissGlobalKeyboard").fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export const openEmojiActionSheet = function openEmojiActionSheet(uniqueName) {
  if (null != uniqueName.uniqueName) {
    if ("" !== uniqueName.uniqueName) {
      let name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      if (null != uniqueName.surrogates) {
        let obj = { surrogate: null, content: null };
        obj[0] = uniqueName.surrogates;
        const _HermesInternal = HermesInternal;
        obj[1] = ":" + name + ":";
      }
      const result = require("../../../../utils/native/KeyboardManagerUtils.tsx") /* dismissGlobalKeyboard */.dismissGlobalKeyboard();
      const obj6 = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
      obj = { emojiNode: null };
      obj[0] = obj;
      obj6.openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8656, dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: null, alt: null, src: null };
    obj[0] = uniqueName.id;
    obj[1] = name;
    if (null != uniqueName.id) {
      let obj1 = require("../../../../utils/AvatarUtils.tsx");
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj3[0], animated: obj3[1] } = uniqueName);
      obj1[2] = EMOJI_URL_BASE_SIZE;
      let url = obj1.getEmojiURL(obj1);
    } else {
      url = uniqueName.url;
    }
    obj[2] = url;
  }
  name = uniqueName.name;
};