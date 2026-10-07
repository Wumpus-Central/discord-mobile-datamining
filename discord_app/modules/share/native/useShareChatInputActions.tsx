// discord_app/modules/share/native/useShareChatInputActions.tsx
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const EmojiIntention = fn(1380).EmojiIntention;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, channel, appEntryKey) => {
      _require = arg0;
      dependencyMap = channel;
      _slicedToArray = appEntryKey;
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
      [r10032, closure_5] = ref.useState(false);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v(nativeEvent) {
          const merged = Object.assign(nativeEvent.nativeEvent.selection);
          closure_4.current = {};
        };
        cResult[1] = fn;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          closure_1_5(true);
        };
        cResult[2] = fn2;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function k() {
          closure_1_5(false);
        };
        cResult[3] = fn3;
      }
      if (cResult[4] !== arg0) {
        const fn4 = function j(id) {
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
        };
        cResult[4] = arg0;
        cResult[5] = fn4;
        let tmp8 = fn4;
      } else {
        tmp8 = cResult[5];
      }
      const onPressEmoji = tmp8;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            current = closure_3.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
        cResult[6] = P;
      } else {
        class P {
          constructor() {
            current = closure_3.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
      }
      const onClose = P;
      if (cResult[7] === appEntryKey) {
        class P {
          constructor() {
            current = closure_3.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
      }
      const fn5 = function q() {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
        const obj2 = {
          onPressEmoji,
          onClose,
          pickerIntention: EmojiIntention.CHAT,
          autoFocus: false,
          startExpanded: false,
          channel,
          appEntryKey,
          guildId: null,
        };
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        obj2.guildId = guildId;
        const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
      };
      cResult[7] = appEntryKey;
      cResult[8] = channel;
      cResult[9] = tmp8;
      cResult[10] = fn5;
      const tmp4 = _slicedToArray(ref.useState(false), 2);
    }
  : (arg0, channel, appEntryKey) => {
      closure_0 = arg0;
      _slicedToArray = appEntryKey;
      ref = ref.useRef(null);
      closure_4 = ref.useRef({ start: 0, end: 0 });
      [tmp3, closure_5] = ref.useState(false);
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
          const obj2 = {
            onPressEmoji: callback3,
            onClose: callback4,
            pickerIntention: EmojiIntention.CHAT,
            autoFocus: false,
            startExpanded: false,
            channel,
            appEntryKey,
            guildId: null,
          };
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          obj2.guildId = guildId;
          const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
        }, items1),
      };
    };
