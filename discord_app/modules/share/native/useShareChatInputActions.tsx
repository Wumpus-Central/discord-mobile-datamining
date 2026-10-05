// discord_app/modules/share/native/useShareChatInputActions.tsx
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import openEmojiPickerActionSheet2 from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const EmojiIntention = EmojiConstants.EmojiIntention;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, channel, appEntryKey) => {
      let closure_0;
      let closure_5;
      let first;
      let ref;
      let tmp8;
      let tmp9;
      _require = arg0;
      dependencyMap = channel;
      _slicedToArray = appEntryKey;
      let obj = require("react");
      const cResult = obj.c(14);
      ref = ref.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { start: 0, end: 0 };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      let closure_4 = obj2.useRef(first);
      [r10032, closure_5] = ref.useState(false);
      _slicedToArray(ref.useState(false), 2);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v(nativeEvent) {
          const obj = {};
          const merged = Object.assign(nativeEvent.nativeEvent.selection);
          closure_4.current = obj;
        };
        cResult[1] = fn;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          closure_5(true);
        };
        cResult[2] = fn2;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function k() {
          closure_5(false);
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
            let name;
            if ("" !== id.uniqueName) {
              name = id.uniqueName;
            }
            const _HermesInternal = HermesInternal;
            surrogates = ":" + name + ": ";
          }
          name = id.name;
        };
        cResult[4] = arg0;
        cResult[5] = fn4;
        tmp8 = fn4;
      } else {
        tmp8 = cResult[5];
      }
      const onPressEmoji = tmp8;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        cResult[6] = P;
        tmp9 = P;
      } else {
        class P {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      }
      P = tmp9;
      if (cResult[7] === appEntryKey) {
        class P {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      }
      const fn5 = function q() {
        let guildId;
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
        const obj = {
          onPressEmoji,
          onClose: P,
          pickerIntention: EmojiIntention.CHAT,
          autoFocus: false,
          startExpanded: false,
          channel,
          appEntryKey,
          guildId,
        };
        guildId = undefined;
        const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
        openEmojiPickerActionSheet2;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        const result = openEmojiPickerActionSheet(obj);
      };
      cResult[7] = appEntryKey;
      cResult[8] = channel;
      cResult[9] = tmp8;
      cResult[10] = fn5;
    }
  : (arg0, channel, appEntryKey) => {
      let closure_5;
      let ref;
      let tmp3;
      let closure_0 = arg0;
      _slicedToArray = appEntryKey;
      ref = ref.useRef(null);
      let closure_4 = ref.useRef({ start: 0, end: 0 });
      const tmp2 = _slicedToArray(ref.useState(false), 2);
      [tmp3, closure_5] = tmp2;
      const callback = ref.useCallback((nativeEvent) => {
        const obj = {};
        const merged = Object.assign(nativeEvent.nativeEvent.selection);
        closure_4.current = obj;
      }, []);
      const callback1 = ref.useCallback(() => {
        closure_5(true);
      }, []);
      const items = [arg0];
      const callback2 = ref.useCallback(() => {
        closure_5(false);
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
          let name;
          if ("" !== id.uniqueName) {
            name = id.uniqueName;
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
      let obj = {
        textInputRef: ref,
        isInputFocused: tmp3,
        handleSelectionChange: callback,
        handleMessageFocus: callback1,
        handleMessageBlur: callback2,
        handlePressEmoji: ref.useCallback(() => {
          let guildId;
          const current = ref.current;
          if (current != null) {
            current.blur();
          }
          const obj = {
            onPressEmoji: callback3,
            onClose: callback4,
            pickerIntention: EmojiIntention.CHAT,
            autoFocus: false,
            startExpanded: false,
            channel,
            appEntryKey,
            guildId,
          };
          guildId = undefined;
          const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
          openEmojiPickerActionSheet2;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const result = openEmojiPickerActionSheet(obj);
        }, items1),
      };
      return obj;
    };
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = tmp2;
