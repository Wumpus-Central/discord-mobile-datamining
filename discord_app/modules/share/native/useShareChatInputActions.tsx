// === Module 11191: useShareChatInputActions ===

// Module 11191 (useShareChatInputActions)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { EmojiIntention } from "set" /* 1925 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = function useShareChatInputActions(setText, selectedDestinationChannel, appEntryKey) {
  closure_0 = setText;
  closure_1 = selectedDestinationChannel;
  let callback = appEntryKey;
  ref = ref.useRef(null);
  closure_4 = ref.useRef({ start: 0, end: 0 });
  [tmp3, closure_5] = callback(ref.useState(false), 2);
  callback = ref.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = {};
  }, []);
  const callback1 = ref.useCallback(() => {
    callback(true);
  }, []);
  const items = [setText];
  const callback2 = ref.useCallback(() => {
    callback(false);
  }, []);
  const callback3 = ref.useCallback((id) => {
    setText = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        setText = id.surrogates;
      }
      setText((arr) => {
        const sum = arr.slice(0, closure_1_4.current.start) + closure_0;
        return sum + arr.slice(closure_1_4.current.end);
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
  const tmp2 = callback(ref.useState(false), 2);
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
      let obj = setText(selectedDestinationChannel[3]);
      obj = { onPressEmoji: callback3, onClose: callback4, pickerIntention: constants.CHAT, autoFocus: false, startExpanded: false, channel: selectedDestinationChannel, appEntryKey: closure_2, guildId: null };
      let guildId;
      if (selectedDestinationChannel != null) {
        guildId = selectedDestinationChannel.getGuildId();
      }
      obj[7] = guildId;
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items1)
  };
};