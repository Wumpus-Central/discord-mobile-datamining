// discord_app/modules/share/native/ShareScreenFooter.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import useShareChatInputActions from "useShareChatInputActions.tsx";
import ShareFooterLayoutDefault from "ShareFooterLayout.tsx";
import ShareChatInputDefault from "ShareChatInput.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
    shareChatInputActions);
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
  obj[1] = jsx(Button.Button, {
    variant: "primary",
    size: "md",
    text: sendLabel,
    disabled: null,
    onPress: null,
    loading: null,
  });
  obj[2] = jsx(ShareChatInputDefault, {
    inputRef: textInputRef,
    text,
    onChange: setText,
    onSelectionChange: handleSelectionChange,
    onFocus: handleMessageFocus,
    onBlur: handleMessageBlur,
    onPressEmoji: handlePressEmoji,
    onSend,
    disabled,
  });
  obj[3] = isInputFocused;
  return jsx(ShareFooterLayoutDefault, {
    variant: "primary",
    size: "md",
    text: sendLabel,
    disabled: null,
    onPress: null,
    loading: null,
  });
}
