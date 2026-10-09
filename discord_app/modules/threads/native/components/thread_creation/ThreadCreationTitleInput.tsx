// === Module 17233: ThreadCreationTitleInput ===

// Module 17233 (ThreadCreationTitleInput)
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6969 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7900 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;

const require = fn;
const MAX_CHANNEL_NAME_LENGTH = fn(1085).MAX_CHANNEL_NAME_LENGTH;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadCreationTitleInput(chatInputRef) {
  const cResult = chatInputRef(ref[5]).c(38);
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  ({ threadNameError, optional, ref } = chatInputRef);
  if (cResult[0] === threadNameError) {
    ref1 = ref1.useRef(threadSettingsDraft.name);
    if (cResult[3] !== threadSettingsDraft.parentChannelId) {
      class T {
        constructor(arg0) {
          if (null != threadSettingsDraft.parentChannelId) {
            tmp2 = chatInputRef;
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            obj1 = { name: null };
            flag = false;
            obj1.name = closure_1(closure_2[8])(chatInputRef, false);
            changeThreadSettingsResult = obj.changeThreadSettings(tmp.parentChannelId, obj1);
            tmp6 = closure_3;
            closure_3.current = chatInputRef;
          }
          return;
        }
      }
      cResult[3] = threadSettingsDraft.parentChannelId;
      cResult[4] = T;
    } else {
      class T {
        constructor(arg0) {
          if (null != threadSettingsDraft.parentChannelId) {
            tmp2 = chatInputRef;
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            obj1 = { name: null };
            flag = false;
            obj1.name = closure_1(closure_2[8])(chatInputRef, false);
            changeThreadSettingsResult = obj.changeThreadSettings(tmp.parentChannelId, obj1);
            tmp6 = closure_3;
            closure_3.current = chatInputRef;
          }
          return;
        }
      }
    }
    if (cResult[5] === threadSettingsDraft.name) {
      class T {
        constructor(arg0) {
          if (null != threadSettingsDraft.parentChannelId) {
            tmp2 = chatInputRef;
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[7]);
            obj1 = { name: null };
            flag = false;
            obj1.name = closure_1(closure_2[8])(chatInputRef, false);
            changeThreadSettingsResult = obj.changeThreadSettings(tmp.parentChannelId, obj1);
            tmp6 = closure_3;
            closure_3.current = chatInputRef;
          }
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            obj = chatInputRef(ref[9]);
            obj1 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            setKeyboardTypeResult = obj.setKeyboardType(obj1);
            return;
          }
        }
        cResult[8] = S;
      } else {
        class S {
          constructor() {
            obj = chatInputRef(ref[9]);
            obj1 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            setKeyboardTypeResult = obj.setKeyboardType(obj1);
            return;
          }
        }
      }
      if (cResult[9] !== chatInputRef) {
        class N {
          constructor() {
            current = chatInputRef.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
        cResult[9] = chatInputRef;
        cResult[10] = N;
      } else {
        class N {
          constructor() {
            current = chatInputRef.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
      }
      if (cResult[11] === threadSettingsDraft.name) {
        class N {
          constructor() {
            current = chatInputRef.current;
            if (current != null) {
              focusResult = current.focus();
            }
            return;
          }
        }
        const effect = obj4.useEffect(M, tmp13);
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              current = chatInputRef.current;
              if (current != null) {
                focusResult = current.focus();
              }
              return;
            }
          }
          const items = [ChannelStore];
          cResult[15] = items;
          const tmp15 = items;
        } else {
          class N {
            constructor() {
              current = chatInputRef.current;
              if (current != null) {
                focusResult = current.focus();
              }
              return;
            }
          }
        }
        if (cResult[16] !== threadSettingsDraft.parentChannelId) {
          class N {
            constructor() {
              current = chatInputRef.current;
              if (current != null) {
                focusResult = current.focus();
              }
              return;
            }
          }
          cResult[16] = threadSettingsDraft.parentChannelId;
          cResult[17] = tmp17;
        } else {
          class N {
            constructor() {
              current = chatInputRef.current;
              if (current != null) {
                focusResult = current.focus();
              }
              return;
            }
          }
        }
        const stateFromStores = tmp(ref[11]).useStateFromStores(tmp15, tmp17);
        class M {
          constructor() {
            tmp = threadSettingsDraft;
            tmp2 = closure_3.current !== threadSettingsDraft.name;
            if (tmp2) {
              tmp3 = null;
              tmp2 = null != tmp.name;
            }
            if (tmp2) {
              tmp4 = null;
              if (ref != null) {
                current = ref.current;
                if (current != null) {
                  setTextResult = current.setText(tmp.name);
                }
              }
            }
            return;
          }
        }
        let str2 = "";
        if (null != stateFromStores) {
          class N {
            constructor() {
              current = chatInputRef.current;
              if (current != null) {
                focusResult = current.focus();
              }
              return;
            }
          }
          str2 = obj6.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
        }
        cResult[18] = stateFromStores;
        cResult[19] = threadSettingsDraft.parentMessageId;
        cResult[20] = str2;
        const tmpResult = tmp(ref[11]);
      }
      class M {
        constructor() {
          tmp = threadSettingsDraft;
          tmp2 = closure_3.current !== threadSettingsDraft.name;
          if (tmp2) {
            tmp3 = null;
            tmp2 = null != tmp.name;
          }
          if (tmp2) {
            tmp4 = null;
            if (ref != null) {
              current = ref.current;
              if (current != null) {
                setTextResult = current.setText(tmp.name);
              }
            }
          }
          return;
        }
      }
      const items1 = [threadSettingsDraft.name, ref];
      cResult[11] = threadSettingsDraft.name;
      cResult[12] = ref;
      cResult[13] = M;
      cResult[14] = items1;
      tmp13 = items1;
    }
    const fn = function v() {
      if (null != threadSettingsDraft.name) {
        if (null != threadSettingsDraft.parentChannelId) {
          const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
          if (tmp4 !== threadSettingsDraft.name) {
            const obj = { name: tmp4 };
            DraftActionCreatorsDefault.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
            const tmp2Result = DraftActionCreatorsDefault;
          }
        }
      }
    };
    cResult[6] = threadSettingsDraft.parentChannelId;
    cResult[7] = fn;
    obj4 = ref1;
  }
  let obj = chatInputRef(ref[5]);
  let obj2 = { content: threadSettingsDraft.name };
  const tmpResult2 = chatInputRef(ref[6]);
  cResult[0] = threadNameError;
  cResult[1] = threadSettingsDraft.name;
  cResult[2] = chatInputRef(ref[6]).renderError(threadNameError, { content: threadSettingsDraft.name });
  const renderErrorResult = chatInputRef(ref[6]).renderError(threadNameError, { content: threadSettingsDraft.name });
}) : (function ThreadCreationTitleInput(chatInputRef) {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  ({ optional, ref } = chatInputRef);
  let ref1;
  let obj = chatInputRef(ref[6]);
  let obj2 = { content: threadSettingsDraft.name };
  ref1 = ref1.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref1.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      const obj2 = { name: sanitizeThreadNameDefault(current, false) };
      DraftActionCreatorsDefault.changeThreadSettings(tmp.parentChannelId, obj2);
      ref1.current = current;
    }
  }, items);
  const callback1 = ref1.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
        if (tmp4 !== threadSettingsDraft.name) {
          const obj = { name: tmp4 };
          DraftActionCreatorsDefault.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
          const tmp2Result = DraftActionCreatorsDefault;
        }
      }
    }
  }, items1);
  const items2 = [chatInputRef];
  const callback2 = ref1.useCallback(() => {
    const obj = chatInputRef(ref[9]);
    obj.setKeyboardType({ type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } });
  }, []);
  const items3 = [threadSettingsDraft.name, ref];
  const callback3 = ref1.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.focus();
    }
  }, items2);
  const effect = ref1.useEffect(() => {
    let tmp2 = ref1.current !== threadSettingsDraft.name;
    if (tmp2) {
      tmp2 = null != threadSettingsDraft.name;
    }
    if (tmp2) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.setText(threadSettingsDraft.name);
        }
      }
    }
  }, items3);
  const renderErrorResult = chatInputRef(ref[6]).renderError(chatInputRef.threadNameError, { content: threadSettingsDraft.name });
  const items4 = [ChannelStore];
  const stateFromStores = chatInputRef(ref[11]).useStateFromStores(items4, () => ChannelStore.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = tmp(ref[12]).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const tmpResult = tmp(ref[12]);
  }
  const intl = tmp(ref[13]).intl;
  const string = intl.string;
  const t = tmp(ref[13]).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  const obj4 = { defaultValue: threadSettingsDraft(ref[14])(ref1), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: null, required: null, clearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onFocus: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" };
  let stringResult1;
  if (!optional) {
    const intl2 = tmp(ref[13]).intl;
    stringResult1 = intl2.string(tmp(ref[13]).t["/+VEZN"]);
  }
  obj4.accessibilityHint = stringResult1;
  obj4.required = !optional;
  obj4.maxLength = MAX_CHANNEL_NAME_LENGTH;
  obj4.onSubmitEditing = callback3;
  obj4.onFocus = callback2;
  obj4.onBlur = callback1;
  obj4.onChange = callback;
  if ("" === str) {
    const intl3 = tmp(ref[13]).intl;
    str = intl3.string(tmp(ref[13]).t["Nb2/RE"]);
  }
  obj4.placeholder = str;
  obj4.ref = ref;
  return jsx(chatInputRef(ref[15]).TextInput, { defaultValue: threadSettingsDraft(ref[14])(ref1), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: null, required: null, clearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onFocus: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" });
}));