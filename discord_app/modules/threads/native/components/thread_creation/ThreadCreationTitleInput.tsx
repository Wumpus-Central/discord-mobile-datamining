// discord_app/modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import sanitizeThreadNameDefault from "../../../sanitizeThreadName.tsx";
import DraftActionCreatorsDefault from "../../../../../actions/DraftActionCreators.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let chatInputRef, dependencyMap;

const MAX_CHANNEL_NAME_LENGTH = Constants.MAX_CHANNEL_NAME_LENGTH;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const memoResult = react.memo(
  forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (chatInputRef, arg1) => {
          let optional;
          let ref;
          let threadNameError;
          const tmp = chatInputRef;
          let tmp2 = dependencyMap;
          let obj = chatInputRef(576);
          const cResult = obj.c(38);
          chatInputRef = chatInputRef.chatInputRef;
          const threadSettingsDraft = chatInputRef.threadSettingsDraft;
          ({ threadNameError, optional } = chatInputRef);
          dependencyMap = arg1;
          if (cResult[0] === threadNameError) {
            if (cResult[1] === threadSettingsDraft.name) {
              let tmp4 = cResult[2];
            }
            const obj4 = ref;
            ref = ref.useRef(threadSettingsDraft.name);
            if (cResult[3] !== threadSettingsDraft.parentChannelId) {
              const fn = function y(current) {
                if (null != threadSettingsDraft.parentChannelId) {
                  const obj = { name: sanitizeThreadNameDefault(current, false) };
                  const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
                  const parentChannelId = tmp.parentChannelId;
                  DraftActionCreatorsDefault;
                  changeThreadSettings(parentChannelId, obj);
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
                  const obj2 = {
                    type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM,
                    context: { keyboardWillOpen: true },
                  };
                  obj.setKeyboardType(obj2);
                };
                cResult[8] = fn2;
              }
              class E {
                constructor() {
                  if (null != threadSettingsDraft.name) {
                    if (null != threadSettingsDraft.parentChannelId) {
                      const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
                      if (tmp4 !== threadSettingsDraft.name) {
                        const obj = { name: tmp4 };
                        const tmp2Result = DraftActionCreatorsDefault;
                        tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
                      }
                    }
                  }
                }
              }
              if (cResult[11] === threadSettingsDraft.name) {
                let tmp11;
                let tmp12;
                let tmp14;
                let tmp16;
                if (cResult[12] === arg1) {
                  tmp11 = cResult[13];
                  tmp12 = cResult[14];
                }
                const effect = obj4.useEffect(tmp11, tmp12);
                const _Symbol2 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [ChannelStore];
                  cResult[15] = items;
                  tmp14 = items;
                } else {
                  tmp14 = cResult[15];
                }
                if (cResult[16] !== threadSettingsDraft.parentChannelId) {
                  const fn3 = function k() {
                    return ChannelStore.getChannel(threadSettingsDraft.parentChannelId);
                  };
                  cResult[16] = threadSettingsDraft.parentChannelId;
                  cResult[17] = fn3;
                  tmp16 = fn3;
                } else {
                  tmp16 = cResult[17];
                }
                class E {
                  constructor() {
                    if (null != threadSettingsDraft.name) {
                      if (null != threadSettingsDraft.parentChannelId) {
                        const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
                        if (tmp4 !== threadSettingsDraft.name) {
                          const obj = { name: tmp4 };
                          const tmp2Result = DraftActionCreatorsDefault;
                          tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
                        }
                      }
                    }
                  }
                }
                const stateFromStores = obj5.useStateFromStores(tmp14, tmp16);
                class R {
                  constructor() {
                    const tmp2 = ref.current !== threadSettingsDraft.name && null != threadSettingsDraft.name;
                    if (tmp2) {
                      if (ref != null) {
                        const current = ref.current;
                        if (current != null) {
                          current.setText(threadSettingsDraft.name);
                        }
                      }
                    }
                  }
                }
                let str2 = "";
                if (null != stateFromStores) {
                  const tmpResult = tmp(8810);
                  str2 = tmpResult.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
                }
                cResult[18] = stateFromStores;
                cResult[19] = threadSettingsDraft.parentMessageId;
                cResult[20] = str2;
              }
              class R {
                constructor() {
                  const tmp2 = ref.current !== threadSettingsDraft.name && null != threadSettingsDraft.name;
                  if (tmp2) {
                    if (ref != null) {
                      const current = ref.current;
                      if (current != null) {
                        current.setText(threadSettingsDraft.name);
                      }
                    }
                  }
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
                if (null != threadSettingsDraft.name) {
                  if (null != threadSettingsDraft.parentChannelId) {
                    const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
                    if (tmp4 !== threadSettingsDraft.name) {
                      const obj = { name: tmp4 };
                      const tmp2Result = DraftActionCreatorsDefault;
                      tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
                    }
                  }
                }
              }
            }
            cResult[6] = threadSettingsDraft.parentChannelId;
            cResult[7] = E;
          }
          let obj2 = { content: threadSettingsDraft.name };
          const tmpResult2 = tmp(16783);
          cResult[0] = threadNameError;
          cResult[1] = threadSettingsDraft.name;
          cResult[2] = tmpResult2.renderError(threadNameError, obj2);
          tmpResult2.renderError(threadNameError, obj2);
        }
      : (chatInputRef, ref) => {
          let stringResult;
          chatInputRef = chatInputRef.chatInputRef;
          const threadSettingsDraft = chatInputRef.threadSettingsDraft;
          const optional = chatInputRef.optional;
          ref = undefined;
          dependencyMap = ref;
          const tmp = chatInputRef;
          let tmp2 = dependencyMap;
          const threadNameError = chatInputRef.threadNameError;
          let obj = chatInputRef(16783);
          let obj2 = { content: threadSettingsDraft.name };
          const renderErrorResult = obj.renderError(threadNameError, obj2);
          ref = ref.useRef(threadSettingsDraft.name);
          const items = [threadSettingsDraft.parentChannelId];
          const items1 = [threadSettingsDraft];
          const callback = ref.useCallback((current) => {
            if (null != threadSettingsDraft.parentChannelId) {
              const obj = { name: sanitizeThreadNameDefault(current, false) };
              const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
              const parentChannelId = tmp.parentChannelId;
              DraftActionCreatorsDefault;
              changeThreadSettings(parentChannelId, obj);
              ref.current = current;
            }
          }, items);
          const callback1 = ref.useCallback(() => {
            if (null != threadSettingsDraft.name) {
              if (null != threadSettingsDraft.parentChannelId) {
                const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
                if (tmp4 !== threadSettingsDraft.name) {
                  const obj = { name: tmp4 };
                  const tmp2Result = DraftActionCreatorsDefault;
                  tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
                }
              }
            }
          }, items1);
          const items2 = [chatInputRef];
          const callback2 = ref.useCallback(() => {
            const obj = chatInputRef(ref[9]);
            const obj2 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            obj.setKeyboardType(obj2);
          }, []);
          const items3 = [threadSettingsDraft.name, ref];
          const callback3 = ref.useCallback(() => {
            const current = chatInputRef.current;
            if (current != null) {
              current.focus();
            }
          }, items2);
          const effect = ref.useEffect(() => {
            const tmp2 = ref.current !== threadSettingsDraft.name && null != threadSettingsDraft.name;
            if (tmp2) {
              if (ref != null) {
                const current = ref.current;
                if (current != null) {
                  current.setText(threadSettingsDraft.name);
                }
              }
            }
          }, items3);
          const items4 = [ChannelStore];
          const obj3 = chatInputRef(504);
          const stateFromStores = obj3.useStateFromStores(items4, () =>
            ChannelStore.getChannel(threadSettingsDraft.parentChannelId),
          );
          let str = "";
          if (null != stateFromStores) {
            const tmpResult = tmp(8810);
            str = tmpResult.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
          }
          const intl = tmp(1126).intl;
          const string = intl.string;
          const t = tmp(1126).t;
          if (optional) {
            stringResult = string(t.JPvIiL);
          } else {
            stringResult = string(t.j3XWjD);
          }
          const TextInput = tmp(6098).TextInput;
          let stringResult1;
          if (!optional) {
            const intl2 = tmp(1126).intl;
            stringResult1 = intl2.string(tmp(1126).t["/+VEZN"]);
          }
          if ("" === str) {
            const intl3 = tmp(1126).intl;
            str = intl3.string(tmp(1126).t["Nb2/RE"]);
          }
          return (
            <TextInput
              defaultValue={threadSettingsDraft(5973)(ref)}
              errorMessage={renderErrorResult}
              label={stringResult}
              accessibilityHint={stringResult1}
              required={!optional}
              clearable
              autoFocus
              maxLength={MAX_CHANNEL_NAME_LENGTH}
              onSubmitEditing={callback3}
              onFocus={callback2}
              onBlur={callback1}
              onChange={callback}
              placeholder={str}
              ref={ref}
              returnKeyType="next"
              textContentType="none"
            />
          );
        },
  ),
);
const result = size.fileFinishedImporting(
  "modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx",
);

export default memoResult;
