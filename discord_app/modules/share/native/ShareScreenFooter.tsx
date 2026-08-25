// === Module 13458: ShareScreenFooter ===

// Module 13458 (ShareScreenFooter)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 4815 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11252 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 11253 */;
import ShareChatInputDefault from "ShareChatInput" /* 11261 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

export default function ShareScreenFooter(arg0) {
  ({ setText, canSend, isSending, onSend, disabled } = arg0);
  ({ text, preview, sendLabel, appEntryKey } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let obj = useShareChatInputActions;
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  obj = { preview, sendButton: null, chatInput: null, avoidKeyboard: null };
  obj = { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null };
  let tmp6 = !canSend;
  if (canSend) {
    tmp6 = disabled;
  }
  obj[3] = tmp6;
  let tmp7;
  if (!isSending) {
    tmp7 = onSend;
  }
  obj[4] = tmp7;
  obj[5] = isSending;
  obj[1] = jsx(Button.Button, { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
  obj[2] = jsx(ShareChatInputDefault, { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled });
  obj[3] = isInputFocused;
  return jsx(ShareFooterLayoutDefault, { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
};