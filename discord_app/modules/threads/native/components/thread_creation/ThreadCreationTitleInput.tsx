import importAllResult from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { MAX_CHANNEL_NAME_LENGTH } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(importAllResult.forwardRef((chatInputRef) => {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const optional = chatInputRef.optional;
  let ref;
  const dependencyMap = arg1;
  let obj = chatInputRef(15546);
  obj = { content: threadSettingsDraft.name };
  ref = ref.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      let obj = threadSettingsDraft(ref[5]);
      obj = { name: null };
      obj[0] = threadSettingsDraft(ref[6])(current, false);
      obj.changeThreadSettings(tmp.parentChannelId, obj);
      ref.current = current;
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = ref.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != tmp.parentChannelId) {
        const tmp4 = threadSettingsDraft(ref[6])(tmp.name, true);
        if (tmp4 !== tmp.name) {
          const obj = { name: null };
          obj[0] = tmp4;
          tmp2(tmp3[5]).changeThreadSettings(tmp.parentChannelId, obj);
          const tmp2Result = tmp2(tmp3[5]);
        }
        tmp2 = threadSettingsDraft;
        tmp3 = ref;
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
      tmp2 = null != tmp.name;
    }
    if (tmp2) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.setText(tmp.name);
        }
      }
    }
  }, items3);
  const renderErrorResult = obj.renderError(chatInputRef.threadNameError, obj);
  const items4 = [ensureGuildLoaded];
  const stateFromStores = chatInputRef(589).useStateFromStores(items4, () => outer1_4.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = tmp(8153).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const tmpResult = tmp(8153);
  }
  const intl = tmp(1236).intl;
  const string = intl.string;
  const t = tmp(1236).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  obj = { defaultValue: null, errorMessage: null, label: null, accessibilityLabel: null, accessibilityHint: null, required: null, isClearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" };
  obj[0] = threadSettingsDraft(5244)(ref);
  obj[1] = renderErrorResult;
  obj[2] = stringResult;
  obj[3] = stringResult;
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
  return jsx(chatInputRef(7701).TextInput, { defaultValue: null, errorMessage: null, label: null, accessibilityLabel: null, accessibilityHint: null, required: null, isClearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" });
}));
const result = require("ME").fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;