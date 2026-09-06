// === Module 11692: useShareChatInputActions ===

// Module 11692 (useShareChatInputActions)
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiIntention = fn(1374).EmojiIntention;
const size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = function useShareChatInputActions(setText, selectedDestinationChannel, appEntryKey) {
  const channel = selectedDestinationChannel;
  _slicedToArray = appEntryKey;
  ref = ref.useRef(null);
  closure_4 = ref.useRef({ start: 0, end: 0 });
  [tmp3, closure_5] = _slicedToArray(ref.useState(false), 2);
  const callback = ref.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = {};
  }, []);
  const callback1 = ref.useCallback(() => {
    closure_1_5(true);
  }, []);
  const items = [setText];
  const callback2 = ref.useCallback(() => {
    closure_1_5(false);
  }, []);
  const callback3 = ref.useCallback((id) => {
    setText = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        setText = id.surrogates;
      }
      setText((arr) => {
        const sum = arr.slice(0, ref.current.start) + closure_0;
        return sum + arr.slice(ref.current.end);
      });
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      if ("" !== id.uniqueName) {
        let name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      setText = ":" + name + ": ";
    }
    name = id.name;
  }, items);
  const callback4 = ref.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items1 = [callback4, callback3, selectedDestinationChannel, appEntryKey];
  const tmp2 = _slicedToArray(ref.useState(false), 2);
  return {
    textInputRef: ref,
    isInputFocused: tmp3,
    handleSelectionChange: callback,
    handleMessageFocus: callback1,
    handleMessageBlur: callback2,
    handlePressEmoji: ref.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.blur();
      }
      const obj = { onPressEmoji: callback3, onClose: callback4, pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, channel, appEntryKey, guildId: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      obj.guildId = guildId;
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items1)
  };
};