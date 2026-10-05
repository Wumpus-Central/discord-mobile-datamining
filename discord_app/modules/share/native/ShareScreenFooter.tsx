// === Module 13718: ShareScreenFooter ===

// Module 13718 (ShareScreenFooter)
import c from "c" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11319 */;
import ShareChatInputDefault from "ShareChatInput" /* 11330 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 11331 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((appEntryKey) => {
  const cResult = c.c(20);
  ({ text, setText, preview, sendLabel, canSend, isSending, onSend, disabled } = appEntryKey);
  let tmp4 = undefined !== disabled;
  if (tmp4) {
    tmp4 = disabled;
  }
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(setText, undefined, appEntryKey.appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  let tmp6 = !canSend;
  if (canSend) {
    tmp6 = tmp4;
  }
  let tmp7;
  if (!isSending) {
    tmp7 = onSend;
  }
  if (cResult[0] === isSending) {
    if (cResult[1] === sendLabel) {
      if (cResult[2] === tmp6) {
        if (cResult[3] === tmp7) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === handleMessageBlur) {
            if (cResult[7] === handleMessageFocus) {
              if (cResult[8] === handlePressEmoji) {
                if (cResult[9] === handleSelectionChange) {
                  if (cResult[10] === onSend) {
                    if (cResult[11] === setText) {
                      if (cResult[12] === text) {
                        if (cResult[13] === textInputRef) {
                          let tmp10 = cResult[14];
                        }
                        if (cResult[15] === isInputFocused) {
                          if (cResult[16] === preview) {
                            if (cResult[17] === tmp8) {
                              if (cResult[18] === tmp10) {
                                let tmp14 = cResult[19];
                              }
                              return tmp14;
                            }
                          }
                        }
                        const obj2 = { preview, sendButton: tmp8, chatInput: tmp10, avoidKeyboard: isInputFocused };
                        const tmp17 = jsx(ShareFooterLayoutDefault, { preview, sendButton: tmp8, chatInput: tmp10, avoidKeyboard: isInputFocused });
                        cResult[15] = isInputFocused;
                        cResult[16] = preview;
                        cResult[17] = tmp8;
                        cResult[18] = tmp10;
                        cResult[19] = tmp17;
                        tmp14 = tmp17;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj3 = { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled: tmp4 };
        const tmp13 = jsx(ShareChatInputDefault, { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled: tmp4 });
        cResult[5] = tmp4;
        cResult[6] = handleMessageBlur;
        cResult[7] = handleMessageFocus;
        cResult[8] = handlePressEmoji;
        cResult[9] = handleSelectionChange;
        cResult[10] = onSend;
        cResult[11] = setText;
        cResult[12] = text;
        cResult[13] = textInputRef;
        cResult[14] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const tmp9 = jsx(components_Button_Button.Button, { variant: "primary", size: "md", text: sendLabel, disabled: tmp6, onPress: tmp7, loading: isSending });
  cResult[0] = isSending;
  cResult[1] = sendLabel;
  cResult[2] = tmp6;
  cResult[3] = tmp7;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = useShareChatInputActions;
}) : ((arg0) => {
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
});