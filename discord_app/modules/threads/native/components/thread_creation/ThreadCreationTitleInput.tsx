// discord_app/modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
import sanitizeThreadNameDefault from "../../../sanitizeThreadName.tsx";
import DraftActionCreatorsDefault from "../../../../../actions/DraftActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = fn;
const MAX_CHANNEL_NAME_LENGTH = fn(1074).MAX_CHANNEL_NAME_LENGTH;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx",
);

export default noop.memo(
  noop.forwardRef((chatInputRef, ref) => {
    chatInputRef = chatInputRef.chatInputRef;
    const threadSettingsDraft = chatInputRef.threadSettingsDraft;
    const optional = chatInputRef.optional;
    ref = undefined;
    dependencyMap = ref;
    chatInputRef(16621);
    let obj = { content: threadSettingsDraft.name };
    ref = ref.useRef(threadSettingsDraft.name);
    const items = [threadSettingsDraft.parentChannelId];
    const items1 = [threadSettingsDraft];
    const callback = ref.useCallback((current) => {
      if (null != threadSettingsDraft.parentChannelId) {
        const obj = { name: sanitizeThreadNameDefault(current, false) };
        obj.changeThreadSettings(tmp.parentChannelId, obj);
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
      chatInputRef(ref[7]);
      const obj = { type: chatInputRef(ref[8]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
      obj.setKeyboardType(obj);
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
    const renderErrorResult = obj.renderError(chatInputRef.threadNameError, obj);
    const items4 = [ChannelStore];
    const stateFromStores = chatInputRef(504).useStateFromStores(items4, () =>
      ChannelStore.getChannel(threadSettingsDraft.parentChannelId),
    );
    let str = "";
    if (null != stateFromStores) {
      str = tmp(9305).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
      const tmpResult = tmp(9305);
    }
    const intl = tmp(1114).intl;
    const string = intl.string;
    const t = tmp(1114).t;
    if (optional) {
      let stringResult = string(t.JPvIiL);
    } else {
      stringResult = string(t.j3XWjD);
    }
    obj = {
      defaultValue: threadSettingsDraft(5586)(ref),
      errorMessage: renderErrorResult,
      label: stringResult,
      accessibilityHint: null,
      required: null,
      isClearable: true,
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
      const intl2 = tmp(1114).intl;
      stringResult1 = intl2.string(tmp(1114).t["/+VEZN"]);
    }
    obj.accessibilityHint = stringResult1;
    obj.required = !optional;
    obj.maxLength = MAX_CHANNEL_NAME_LENGTH;
    obj.onSubmitEditing = callback3;
    obj.onFocus = callback2;
    obj.onBlur = callback1;
    obj.onChange = callback;
    if ("" === str) {
      const intl3 = tmp(1114).intl;
      str = intl3.string(tmp(1114).t["Nb2/RE"]);
    }
    obj.placeholder = str;
    obj.ref = ref;
    return jsx(chatInputRef(6606).TextInput, {
      defaultValue: threadSettingsDraft(5586)(ref),
      errorMessage: renderErrorResult,
      label: stringResult,
      accessibilityHint: null,
      required: null,
      isClearable: true,
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
  }),
);
