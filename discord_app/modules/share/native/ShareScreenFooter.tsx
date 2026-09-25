// === Module 13433: ShareScreenFooter ===

// Module 13433 (ShareScreenFooter)
import components_Button_Button from "components/Button/Button" /* 5274 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11175 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 11176 */;
import ShareChatInputDefault from "ShareChatInput" /* 11187 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

export default function ShareScreenFooter(arg0) {
  ({ setText, canSend, isSending, onSend, disabled } = arg0);
  ({ text, preview, sendLabel, appEntryKey } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const obj2 = { preview, sendButton: null, chatInput: null, avoidKeyboard: null };
  const obj3 = { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null };
  let tmp6 = !canSend;
  if (canSend) {
    tmp6 = disabled;
  }
  obj3.disabled = tmp6;
  let tmp7;
  if (!isSending) {
    tmp7 = onSend;
  }
  obj3.onPress = tmp7;
  obj3.loading = isSending;
  obj2.sendButton = jsx(components_Button_Button.Button, { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
  obj2.chatInput = jsx(ShareChatInputDefault, { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled });
  obj2.avoidKeyboard = isInputFocused;
  return jsx(ShareFooterLayoutDefault, { preview, sendButton: null, chatInput: null, avoidKeyboard: null });
};