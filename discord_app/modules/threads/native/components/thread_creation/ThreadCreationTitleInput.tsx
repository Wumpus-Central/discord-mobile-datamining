// discord_app/modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
import sanitizeThreadNameDefault from "../../../sanitizeThreadName.tsx";
import DraftActionCreatorsDefault from "../../../../../actions/DraftActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = fn;
const MAX_CHANNEL_NAME_LENGTH = fn(1072).MAX_CHANNEL_NAME_LENGTH;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx",
);

export default noop.memo(function ThreadCreationTitleInput(chatInputRef) {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  ({ optional, ref } = chatInputRef);
  let ref1;
  let obj = chatInputRef(ref[4]);
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
    const obj = chatInputRef(ref[7]);
    obj.setKeyboardType({ type: chatInputRef(ref[8]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } });
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
  const renderErrorResult = chatInputRef(ref[4]).renderError(chatInputRef.threadNameError, {
    content: threadSettingsDraft.name,
  });
  const items4 = [ChannelStore];
  const stateFromStores = chatInputRef(ref[9]).useStateFromStores(items4, () =>
    ChannelStore.getChannel(threadSettingsDraft.parentChannelId),
  );
  let str = "";
  if (null != stateFromStores) {
    str = tmp(ref[10]).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const tmpResult = tmp(ref[10]);
  }
  const intl = tmp(ref[11]).intl;
  const string = intl.string;
  const t = tmp(ref[11]).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  const obj4 = {
    defaultValue: threadSettingsDraft(ref[13])(ref1),
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
    const intl2 = tmp(ref[11]).intl;
    stringResult1 = intl2.string(tmp(ref[11]).t["/+VEZN"]);
  }
  obj4.accessibilityHint = stringResult1;
  obj4.required = !optional;
  obj4.maxLength = MAX_CHANNEL_NAME_LENGTH;
  obj4.onSubmitEditing = callback3;
  obj4.onFocus = callback2;
  obj4.onBlur = callback1;
  obj4.onChange = callback;
  if ("" === str) {
    const intl3 = tmp(ref[11]).intl;
    str = intl3.string(tmp(ref[11]).t["Nb2/RE"]);
  }
  obj4.placeholder = str;
  obj4.ref = ref;
  return jsx(chatInputRef(ref[12]).TextInput, {
    defaultValue: threadSettingsDraft(ref[13])(ref1),
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
});
