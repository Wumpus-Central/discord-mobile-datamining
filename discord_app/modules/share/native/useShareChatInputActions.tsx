// === Module 11599: useShareChatInputActions ===

// Module 11599 (useShareChatInputActions)
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9359 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const EmojiIntention = fn(1392).EmojiIntention;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = ReactCompilerGating.isReactCompilerEnabled() ? (function useShareChatInputActions(arg0, channel, appEntryKey) {
  _require = arg0;
  dependencyMap = channel;
  const cResult = require("c").c(14);
  ref = ref.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { start: 0, end: 0 };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  closure_4 = obj2.useRef(first);
  let obj = require("c");
  [r10032, closure_5] = appEntryKey(ref.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(nativeEvent) {
      const merged = Object.assign(nativeEvent.nativeEvent.selection);
      closure_4.current = {};
    };
    cResult[1] = fn;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
    cResult[3] = tmp8;
  } else {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp10;
  } else {
    class E {
      constructor() {
        tmp = closure_5(true);
        return;
      }
    }
  }
  onPressEmoji = tmp10;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        current = closure_3.current;
        if (current != null) {
          focusResult = current.focus();
        }
        return;
      }
    }
    cResult[6] = F;
  } else {
    class F {
      constructor() {
        current = closure_3.current;
        if (current != null) {
          focusResult = current.focus();
        }
        return;
      }
    }
  }
  onClose = F;
  if (cResult[7] === appEntryKey) {
    class F {
      constructor() {
        current = closure_3.current;
        if (current != null) {
          focusResult = current.focus();
        }
        return;
      }
    }
  }
  class R {
    constructor() {
      current = closure_3.current;
      if (current != null) {
        blurResult = current.blur();
      }
      obj = closure_0(closure_1[5]);
      obj1 = { onPressEmoji: closure_6, onClose: closure_7, pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, channel: closure_1, appEntryKey: closure_2, guildId: null };
      obj3 = closure_1;
      guildId = undefined;
      if (closure_1 != null) {
        guildId = obj3.getGuildId();
      }
      obj1.guildId = guildId;
      result = obj.openEmojiPickerActionSheet(obj1);
      return;
    }
  }
  cResult[7] = appEntryKey;
  cResult[8] = channel;
  cResult[9] = tmp10;
  cResult[10] = R;
  const tmp4 = appEntryKey(ref.useState(false), 2);
}) : (function useShareChatInputActions(arg0, channel, appEntryKey) {
  closure_0 = arg0;
  ref = ref.useRef(null);
  closure_4 = ref.useRef({ start: 0, end: 0 });
  [tmp3, closure_5] = appEntryKey(ref.useState(false), 2);
  const callback = ref.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = {};
  }, []);
  const callback1 = ref.useCallback(() => {
    closure_1_5(true);
  }, []);
  const items = [arg0];
  const callback2 = ref.useCallback(() => {
    closure_1_5(false);
  }, []);
  const callback3 = ref.useCallback((id) => {
    let surrogates = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        surrogates = id.surrogates;
      }
      surrogates((arr) => {
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
      surrogates = ":" + name + ": ";
    }
    name = id.name;
  }, items);
  const callback4 = ref.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items1 = [callback4, callback3, channel, appEntryKey];
  const tmp2 = appEntryKey(ref.useState(false), 2);
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
      const obj2 = { onPressEmoji: callback3, onClose: callback4, pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, channel, appEntryKey, guildId: null };
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      obj2.guildId = guildId;
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
    }, items1)
  };
});