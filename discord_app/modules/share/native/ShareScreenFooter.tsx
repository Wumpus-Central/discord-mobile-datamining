// === Module 13736: ShareScreenFooter ===

// Module 13736 (ShareScreenFooter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11332 */;
import ShareChatInputDefault from "ShareChatInput" /* 11343 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 11344 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((appEntryKey) => {
  let canSend;
  let disabled;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let preview;
  let sendLabel;
  let setText;
  let text;
  let textInputRef;
  const obj = react2;
  const cResult = obj.c(20);
  ({ text, setText, preview, sendLabel, canSend, isSending, onSend, disabled } = appEntryKey);
  let tmp4 = undefined !== disabled;
  appEntryKey = appEntryKey.appEntryKey;
  if (tmp4) {
    tmp4 = disabled;
  }
  const tmpResult = useShareChatInputActions;
  const shareChatInputActions = tmpResult.useShareChatInputActions(setText, undefined, appEntryKey);
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
        let tmp8;
        if (cResult[3] === tmp7) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === handleMessageBlur) {
            if (cResult[7] === handleMessageFocus) {
              if (cResult[8] === handlePressEmoji) {
                if (cResult[9] === handleSelectionChange) {
                  if (cResult[10] === onSend) {
                    if (cResult[11] === setText) {
                      if (cResult[12] === text) {
                        let tmp10;
                        if (cResult[13] === textInputRef) {
                          tmp10 = cResult[14];
                        }
                        if (cResult[15] === isInputFocused) {
                          if (cResult[16] === preview) {
                            if (cResult[17] === tmp8) {
                              let tmp14;
                              if (cResult[18] === tmp10) {
                                tmp14 = cResult[19];
                              }
                              return tmp14;
                            }
                          }
                        }
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
}) : ((arg0) => {
  let appEntryKey;
  let canSend;
  let disabled;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let preview;
  let sendLabel;
  let setText;
  let text;
  let textInputRef;
  ({ setText, canSend, isSending, onSend, disabled } = arg0);
  ({ text, preview, sendLabel, appEntryKey } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = useShareChatInputActions;
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const tmp6 = !canSend;
  ShareFooterLayoutDefault;
  const Button = components_Button_Button.Button;
  return <tmp5 preview={preview} sendButton={null} chatInput={null} avoidKeyboard={isInputFocused} />;
});
const result = size.fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

export default tmp3;