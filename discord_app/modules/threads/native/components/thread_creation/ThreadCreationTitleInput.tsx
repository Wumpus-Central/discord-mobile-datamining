// discord_app/modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
import sanitizeThreadNameDefault from "../../../sanitizeThreadName.tsx";
import DraftActionCreatorsDefault from "../../../../../actions/DraftActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = fn;
const MAX_CHANNEL_NAME_LENGTH = fn(1085).MAX_CHANNEL_NAME_LENGTH;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx",
);

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (chatInputRef, arg1) => {
          const cResult = chatInputRef(576).c(38);
          chatInputRef = chatInputRef.chatInputRef;
          const threadSettingsDraft = chatInputRef.threadSettingsDraft;
          ({ threadNameError, optional } = chatInputRef);
          dependencyMap = arg1;
          if (cResult[0] === threadNameError) {
            ref = ref.useRef(threadSettingsDraft.name);
            if (cResult[3] !== threadSettingsDraft.parentChannelId) {
              const fn = function y(current) {
                if (null != threadSettingsDraft.parentChannelId) {
                  const obj2 = { name: sanitizeThreadNameDefault(current, false) };
                  DraftActionCreatorsDefault.changeThreadSettings(tmp.parentChannelId, obj2);
                  ref.current = current;
                }
              };
              cResult[3] = threadSettingsDraft.parentChannelId;
              cResult[4] = fn;
            }
            if (cResult[5] === threadSettingsDraft.name) {
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function x() {
                  const obj = chatInputRef(ref[9]);
                  obj.setKeyboardType({
                    type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM,
                    context: { keyboardWillOpen: true },
                  });
                };
                cResult[8] = fn2;
              }
              class E {
                constructor() {
                  tmp = threadSettingsDraft;
                  if (null != threadSettingsDraft.name) {
                    if (null != tmp.parentChannelId) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      flag = true;
                      tmp4 = closure_1(closure_2[8])(tmp.name, true);
                      if (tmp4 !== tmp.name) {
                        tmp2Result = tmp2(tmp3[7]);
                        obj1 = { name: null };
                        obj1.name = tmp4;
                        changeThreadSettingsResult = tmp2Result.changeThreadSettings(tmp.parentChannelId, obj1);
                      }
                    }
                  }
                  return;
                }
              }
              if (cResult[11] === threadSettingsDraft.name) {
                if (cResult[12] === arg1) {
                  let tmp11 = cResult[13];
                  let tmp12 = cResult[14];
                }
                const effect = obj4.useEffect(tmp11, tmp12);
                const _Symbol2 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [ChannelStore];
                  cResult[15] = items;
                  let tmp14 = items;
                } else {
                  tmp14 = cResult[15];
                }
                if (cResult[16] !== threadSettingsDraft.parentChannelId) {
                  const fn3 = function k() {
                    return ChannelStore.getChannel(threadSettingsDraft.parentChannelId);
                  };
                  cResult[16] = threadSettingsDraft.parentChannelId;
                  cResult[17] = fn3;
                  let tmp16 = fn3;
                } else {
                  tmp16 = cResult[17];
                }
                class E {
                  constructor() {
                    tmp = threadSettingsDraft;
                    if (null != threadSettingsDraft.name) {
                      if (null != tmp.parentChannelId) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        flag = true;
                        tmp4 = closure_1(closure_2[8])(tmp.name, true);
                        if (tmp4 !== tmp.name) {
                          tmp2Result = tmp2(tmp3[7]);
                          obj1 = { name: null };
                          obj1.name = tmp4;
                          changeThreadSettingsResult = tmp2Result.changeThreadSettings(tmp.parentChannelId, obj1);
                        }
                      }
                    }
                    return;
                  }
                }
                const stateFromStores = obj5.useStateFromStores(tmp14, tmp16);
                class R {
                  constructor() {
                    tmp = threadSettingsDraft;
                    tmp2 = closure_3.current !== threadSettingsDraft.name;
                    if (tmp2) {
                      tmp3 = null;
                      tmp2 = null != tmp.name;
                    }
                    if (tmp2) {
                      tmp4 = null;
                      if (closure_2 != null) {
                        current = closure_2.current;
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
                  str2 = tmp(8810).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
                  const tmpResult = tmp(8810);
                }
                cResult[18] = stateFromStores;
                cResult[19] = threadSettingsDraft.parentMessageId;
                cResult[20] = str2;
              }
              class R {
                constructor() {
                  tmp = threadSettingsDraft;
                  tmp2 = closure_3.current !== threadSettingsDraft.name;
                  if (tmp2) {
                    tmp3 = null;
                    tmp2 = null != tmp.name;
                  }
                  if (tmp2) {
                    tmp4 = null;
                    if (closure_2 != null) {
                      current = closure_2.current;
                      if (current != null) {
                        setTextResult = current.setText(tmp.name);
                      }
                    }
                  }
                  return;
                }
              }
              const items1 = [threadSettingsDraft.name, arg1];
              cResult[11] = threadSettingsDraft.name;
              cResult[12] = arg1;
              cResult[13] = R;
              cResult[14] = items1;
              tmp12 = items1;
              tmp11 = R;
            }
            class E {
              constructor() {
                tmp = threadSettingsDraft;
                if (null != threadSettingsDraft.name) {
                  if (null != tmp.parentChannelId) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    flag = true;
                    tmp4 = closure_1(closure_2[8])(tmp.name, true);
                    if (tmp4 !== tmp.name) {
                      tmp2Result = tmp2(tmp3[7]);
                      obj1 = { name: null };
                      obj1.name = tmp4;
                      changeThreadSettingsResult = tmp2Result.changeThreadSettings(tmp.parentChannelId, obj1);
                    }
                  }
                }
                return;
              }
            }
            cResult[6] = threadSettingsDraft.parentChannelId;
            cResult[7] = E;
            obj4 = ref;
          }
          let obj = chatInputRef(576);
          let obj2 = { content: threadSettingsDraft.name };
          const tmpResult2 = chatInputRef(16764);
          cResult[0] = threadNameError;
          cResult[1] = threadSettingsDraft.name;
          cResult[2] = chatInputRef(16764).renderError(threadNameError, { content: threadSettingsDraft.name });
          const renderErrorResult = chatInputRef(16764).renderError(threadNameError, {
            content: threadSettingsDraft.name,
          });
        }
      : (chatInputRef, ref) => {
          chatInputRef = chatInputRef.chatInputRef;
          const threadSettingsDraft = chatInputRef.threadSettingsDraft;
          const optional = chatInputRef.optional;
          ref = undefined;
          dependencyMap = ref;
          let obj = chatInputRef(16764);
          let obj2 = { content: threadSettingsDraft.name };
          ref = ref.useRef(threadSettingsDraft.name);
          const items = [threadSettingsDraft.parentChannelId];
          const items1 = [threadSettingsDraft];
          const callback = ref.useCallback((current) => {
            if (null != threadSettingsDraft.parentChannelId) {
              const obj2 = { name: sanitizeThreadNameDefault(current, false) };
              DraftActionCreatorsDefault.changeThreadSettings(tmp.parentChannelId, obj2);
              ref.current = current;
            }
          }, items);
          const callback1 = ref.useCallback(() => {
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
          const callback2 = ref.useCallback(() => {
            const obj = chatInputRef(ref[9]);
            obj.setKeyboardType({
              type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM,
              context: { keyboardWillOpen: true },
            });
          }, []);
          const items3 = [threadSettingsDraft.name, ref];
          const callback3 = ref.useCallback(() => {
            const current = chatInputRef.current;
            if (current != null) {
              current.focus();
            }
          }, items2);
          const effect = ref.useEffect(() => {
            let tmp2 = ref.current !== threadSettingsDraft.name;
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
          const renderErrorResult = chatInputRef(16764).renderError(chatInputRef.threadNameError, {
            content: threadSettingsDraft.name,
          });
          const items4 = [ChannelStore];
          const stateFromStores = chatInputRef(504).useStateFromStores(items4, () =>
            ChannelStore.getChannel(threadSettingsDraft.parentChannelId),
          );
          let str = "";
          if (null != stateFromStores) {
            str = tmp(8810).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
            const tmpResult = tmp(8810);
          }
          const intl = tmp(1126).intl;
          const string = intl.string;
          const t = tmp(1126).t;
          if (optional) {
            let stringResult = string(t.JPvIiL);
          } else {
            stringResult = string(t.j3XWjD);
          }
          const obj4 = {
            defaultValue: threadSettingsDraft(5973)(ref),
            errorMessage: renderErrorResult,
            label: stringResult,
            accessibilityHint: null,
            required: null,
            clearable: true,
            autoFocus: true,
            maxLength: null,
            onSubmitEditing: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            placeholder: null,
            ref: null,
            returnKeyType: "next",
            textContentType: "none",
          };
          let stringResult1;
          if (!optional) {
            const intl2 = tmp(1126).intl;
            stringResult1 = intl2.string(tmp(1126).t["/+VEZN"]);
          }
          obj4.accessibilityHint = stringResult1;
          obj4.required = !optional;
          obj4.maxLength = MAX_CHANNEL_NAME_LENGTH;
          obj4.onSubmitEditing = callback3;
          obj4.onFocus = callback2;
          obj4.onBlur = callback1;
          obj4.onChange = callback;
          if ("" === str) {
            const intl3 = tmp(1126).intl;
            str = intl3.string(tmp(1126).t["Nb2/RE"]);
          }
          obj4.placeholder = str;
          obj4.ref = ref;
          return jsx(chatInputRef(6098).TextInput, {
            defaultValue: threadSettingsDraft(5973)(ref),
            errorMessage: renderErrorResult,
            label: stringResult,
            accessibilityHint: null,
            required: null,
            clearable: true,
            autoFocus: true,
            maxLength: null,
            onSubmitEditing: null,
            onFocus: null,
            onBlur: null,
            onChange: null,
            placeholder: null,
            ref: null,
            returnKeyType: "next",
            textContentType: "none",
          });
        },
  ),
);
