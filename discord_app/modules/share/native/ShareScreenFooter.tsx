// discord_app/modules/share/native/ShareScreenFooter.tsx
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useShareChatInputActions from "useShareChatInputActions.tsx";
import ShareFooterLayoutDefault from "ShareFooterLayout.tsx";
import ShareChatInputDefault from "ShareChatInput.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj.disabled = tmp6;
  let tmp7;
  if (!isSending) {
    tmp7 = onSend;
  }
  obj.onPress = tmp7;
  obj.loading = isSending;
  obj.sendButton = jsx(components_Button_Button.Button, {
    variant: "primary",
    size: "md",
    text: sendLabel,
    disabled: null,
    onPress: null,
    loading: null,
  });
  obj.chatInput = jsx(ShareChatInputDefault, {
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
  obj.avoidKeyboard = isInputFocused;
  return jsx(ShareFooterLayoutDefault, {
    variant: "primary",
    size: "md",
    text: sendLabel,
    disabled: null,
    onPress: null,
    loading: null,
  });
}
