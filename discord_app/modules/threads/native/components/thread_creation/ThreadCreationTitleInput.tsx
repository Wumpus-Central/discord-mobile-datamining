// === Module 15842: ? ===

// Module 15842
import importAllResult from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { MAX_CHANNEL_NAME_LENGTH } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(importAllResult.forwardRef((chatInputRef) => {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const optional = chatInputRef.optional;
  let ref;
  dependencyMap = arg1;
  chatInputRef(15843);
  let obj = { content: threadSettingsDraft.name };
  ref = ref.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      threadSettingsDraft(ref[5]);
      const obj = { name: null };
      obj[0] = threadSettingsDraft(ref[6])(current, false);
      obj.changeThreadSettings(tmp.parentChannelId, obj);
      ref.current = current;
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = ref.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp4 = threadSettingsDraft(ref[6])(threadSettingsDraft.name, true);
        if (tmp4 !== threadSettingsDraft.name) {
          const obj = { name: null };
          obj[0] = tmp4;
          threadSettingsDraft(ref[5]).changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
          const tmp2Result = threadSettingsDraft(ref[5]);
        }
      }
    }
  }, items1);
  const items3 = [threadSettingsDraft.name, arg1];
  const callback2 = ref.useCallback(() => {
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
  const items4 = [closure_4];
  const stateFromStores = chatInputRef(589).useStateFromStores(items4, () => closure_1_4.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = tmp(8463).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const tmpResult = tmp(8463);
  }
  const intl = tmp(1236).intl;
  const string = intl.string;
  const t = tmp(1236).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  obj = { defaultValue: threadSettingsDraft(6804)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityLabel: stringResult, accessibilityHint: null, required: null, isClearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" };
  let stringResult1;
  if (!optional) {
    const intl2 = tmp(1236).intl;
    stringResult1 = intl2.string(tmp(1236).t["/+VEZN"]);
  }
  obj[4] = stringResult1;
  obj[5] = !optional;
  obj[8] = MAX_CHANNEL_NAME_LENGTH;
  obj[9] = callback2;
  obj[10] = callback1;
  obj[11] = callback;
  if ("" === str) {
    const intl3 = tmp(1236).intl;
    str = intl3.string(tmp(1236).t["Nb2/RE"]);
  }
  obj[12] = str;
  obj[13] = arg1;
  return jsx(chatInputRef(8071).TextInput, { defaultValue: threadSettingsDraft(6804)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityLabel: stringResult, accessibilityHint: null, required: null, isClearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" });
}));
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;