// === Module 11318: ForwardMessageFooter ===

// Module 11318 (ForwardMessageFooter)
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7405 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DraftStore from "DraftStore" /* 7031 */;

const require = fn;
const DraftType = fn(7031).DraftType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = message(trackForwardEditContextMessageOnce[5]).c(42);
  message = message.message;
  ({ forwardOptions, sendLabel, selectedDestinations, isSending, onSend } = message);
  const obj = message(trackForwardEditContextMessageOnce[5]);
  trackForwardEditContextMessageOnce = message(trackForwardEditContextMessageOnce[6]).useTrackForwardEditContextMessageOnce();
  const obj2 = message(trackForwardEditContextMessageOnce[6]);
  const selectedDestinationChannel = message(trackForwardEditContextMessageOnce[7]).useSelectedDestinationChannel(selectedDestinations);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message.channel_id) {
    const fn = function u() {
      return DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage);
    };
    cResult[1] = message.channel_id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj3 = message(trackForwardEditContextMessageOnce[7]);
  const tmp9 = first1(noop.useState(message(trackForwardEditContextMessageOnce[8]).useStateFromStoresObject(first, tmp8)), 2);
  first1 = tmp9[0];
  noop = tmp10;
  if (cResult[3] === message.channel_id) {
    if (cResult[4] === message.id) {
      if (cResult[5] === trackForwardEditContextMessageOnce) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === first1) {
        if (cResult[8] === message.channel_id) {
          let tmp12 = cResult[9];
          let tmp13 = cResult[10];
        }
        const effect = obj5.useEffect(tmp12, tmp13);
        class O {
          constructor() {
            obj = closure_1(closure_2[9]);
            saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
            return;
          }
        }
        const shareChatInputActions = obj6.useShareChatInputActions(tmp10, selectedDestinationChannel);
        ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
        if (cResult[11] === first1) {
          if (cResult[12] === message.channel_id) {
            if (cResult[13] === onSend) {
              let tmp16 = cResult[14];
            }
            tmp(tmp2[7]);
            class O {
              constructor() {
                obj = closure_1(closure_2[9]);
                saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                return;
              }
            }
            if (cResult[15] === arr4) {
              if (cResult[16] === first1) {
                let tmp18 = cResult[17];
              }
              if (cResult[18] === selectedDestinationChannel) {
                if (cResult[19] === forwardOptions) {
                  if (cResult[20] === message) {
                    let tmp21 = cResult[21];
                  }
                  class O {
                    constructor() {
                      obj = closure_1(closure_2[9]);
                      saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                      return;
                    }
                  }
                  if (cResult[22] === isSending) {
                    if (cResult[23] === sendLabel) {
                      if (cResult[24] === tmp24) {
                        if (cResult[25] === tmp23) {
                          let tmp25 = cResult[26];
                        }
                        if (cResult[27] === first1) {
                          if (cResult[28] === tmp11) {
                            if (cResult[29] === handleMessageBlur) {
                              if (cResult[30] === handleMessageFocus) {
                                if (cResult[31] === handlePressEmoji) {
                                  if (cResult[32] === handleSelectionChange) {
                                    if (cResult[33] === tmp16) {
                                      if (cResult[34] === textInputRef) {
                                        let tmp28 = cResult[35];
                                      }
                                      if (cResult[36] === isInputFocused) {
                                        if (cResult[37] === tmp18) {
                                          if (cResult[38] === tmp25) {
                                            if (cResult[39] === tmp28) {
                                              if (cResult[40] === tmp21) {
                                                let tmp31 = cResult[41];
                                              }
                                              return tmp31;
                                            }
                                          }
                                        }
                                      }
                                      class O {
                                        constructor() {
                                          obj = closure_1(closure_2[9]);
                                          saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                                          return;
                                        }
                                      }
                                      const obj4 = { preview: tmp21, sendButton: tmp25, chatInput: tmp28, warningText: tmp18, avoidKeyboard: isInputFocused };
                                      const tmp33 = jsx(onSend(tmp2[15]), { preview: tmp21, sendButton: tmp25, chatInput: tmp28, warningText: tmp18, avoidKeyboard: isInputFocused });
                                      class T {
                                        constructor() {
                                          obj = closure_1(closure_2[9]);
                                          clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                                          tmp2 = onSend(closure_3);
                                          return;
                                        }
                                      }
                                      cResult[36] = isInputFocused;
                                      cResult[37] = tmp18;
                                      cResult[38] = tmp25;
                                      cResult[39] = tmp28;
                                      cResult[40] = tmp21;
                                      cResult[41] = tmp33;
                                      tmp31 = tmp33;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class O {
                          constructor() {
                            obj = closure_1(closure_2[9]);
                            saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                            return;
                          }
                        }
                        const obj7 = { inputRef: textInputRef, text: first1, onChange: tmp11, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: null, onSend: null };
                        class T {
                          constructor() {
                            obj = closure_1(closure_2[9]);
                            clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                            tmp2 = onSend(closure_3);
                            return;
                          }
                        }
                        obj7.onSend = tmp16;
                        const tmp30 = jsx(onSend(tmp2[14]), { inputRef: textInputRef, text: first1, onChange: tmp11, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: null, onSend: null });
                        cResult[27] = first1;
                        cResult[28] = tmp11;
                        cResult[29] = handleMessageBlur;
                        cResult[30] = handleMessageFocus;
                        cResult[31] = handlePressEmoji;
                        cResult[32] = handleSelectionChange;
                        cResult[33] = tmp16;
                        cResult[34] = textInputRef;
                        cResult[35] = tmp30;
                        tmp28 = tmp30;
                      }
                    }
                  }
                  const obj8 = { variant: "primary", size: "md", text: sendLabel, disabled: !message.canSend, onPress: tmp24, loading: isSending };
                  class T {
                    constructor() {
                      obj = closure_1(closure_2[9]);
                      clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                      tmp2 = onSend(closure_3);
                      return;
                    }
                  }
                  cResult[22] = isSending;
                  cResult[23] = sendLabel;
                  cResult[24] = tmp24;
                  cResult[25] = !message.canSend;
                  cResult[26] = tmp27;
                  tmp25 = tmp27;
                }
              }
              class O {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                  return;
                }
              }
              const obj9 = { message, channel: selectedDestinationChannel, forwardOptions };
              const tmp22 = jsx(tmp(tmp2[12]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
              cResult[18] = selectedDestinationChannel;
              class T {
                constructor() {
                  obj = closure_1(closure_2[9]);
                  clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                  tmp2 = onSend(closure_3);
                  return;
                }
              }
              cResult[20] = message;
              cResult[21] = tmp22;
              tmp21 = tmp22;
            }
            let formatToPlainStringResult;
            if (arr4.length > 0) {
              if (first1.length > 0) {
                const intl = tmp(tmp2[11]).intl;
                class O {
                  constructor() {
                    obj = closure_1(closure_2[9]);
                    saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
                    return;
                  }
                }
                tmp20[0] = arr4.length;
                tmp20[1] = arr4.join(", ");
                formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.xJFpij, tmp20);
              }
            }
            cResult[15] = arr4;
            cResult[16] = first1;
            class T {
              constructor() {
                obj = closure_1(closure_2[9]);
                clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                tmp2 = onSend(closure_3);
                return;
              }
            }
            cResult[17] = formatToPlainStringResult;
            tmp18 = formatToPlainStringResult;
          }
        }
        class T {
          constructor() {
            obj = closure_1(closure_2[9]);
            clearDraftResult = obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
            tmp2 = onSend(closure_3);
            return;
          }
        }
        cResult[11] = first1;
        cResult[12] = message.channel_id;
        cResult[13] = onSend;
        cResult[14] = T;
        tmp16 = T;
      }
      class O {
        constructor() {
          obj = closure_1(closure_2[9]);
          saveDraftResult = obj.saveDraft(message.channel_id, closure_3, DraftType.ForwardContextMessage);
          return;
        }
      }
      const items1 = [first1, message.channel_id];
      cResult[7] = first1;
      cResult[8] = message.channel_id;
      cResult[10] = items1;
      tmp13 = items1;
      tmp12 = O;
    }
  }
  const fn2 = function b(arg0) {
    closure_4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  };
  cResult[3] = message.channel_id;
  cResult[4] = message.id;
  cResult[5] = trackForwardEditContextMessageOnce;
  cResult[6] = fn2;
  tmp11 = fn2;
  obj5 = noop;
  const tmpResult = message(trackForwardEditContextMessageOnce[8]);
}) : ((message) => {
  message = message.message;
  ({ selectedDestinations, isSending, onSend } = message);
  let trackForwardEditContextMessageOnce;
  let text;
  noop = undefined;
  ({ forwardOptions, sendLabel, canSend } = message);
  trackForwardEditContextMessageOnce = message(trackForwardEditContextMessageOnce[6]).useTrackForwardEditContextMessageOnce();
  const obj = message(trackForwardEditContextMessageOnce[6]);
  const selectedDestinationChannel = message(trackForwardEditContextMessageOnce[7]).useSelectedDestinationChannel(selectedDestinations);
  const obj2 = message(trackForwardEditContextMessageOnce[7]);
  const items = [DraftStore];
  const tmp5 = text(noop.useState(message(trackForwardEditContextMessageOnce[8]).useStateFromStoresObject(items, () => DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage))), 2);
  text = tmp5[0];
  noop = tmp6;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [text, message.channel_id];
  const callback = noop.useCallback((arg0) => {
    closure_4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = noop.useEffect(() => {
    DraftActionCreatorsDefault.saveDraft(message.channel_id, first, DraftType.ForwardContextMessage);
  }, items2);
  const obj3 = message(trackForwardEditContextMessageOnce[8]);
  const shareChatInputActions = message(trackForwardEditContextMessageOnce[10]).useShareChatInputActions(tmp6, selectedDestinationChannel);
  const items3 = [text, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = noop.useCallback(() => {
    DraftActionCreatorsDefault.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = message(trackForwardEditContextMessageOnce[10]);
  const destinationNamesWithSlowmode = message(trackForwardEditContextMessageOnce[7]).useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (text.length > 0) {
      const intl = tmp(tmp2[11]).intl;
      const obj6 = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[11]).t.xJFpij, obj6);
    }
  }
  const obj7 = { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null };
  const obj5 = message(trackForwardEditContextMessageOnce[7]);
  obj7.preview = jsx(message(trackForwardEditContextMessageOnce[12]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
  const obj8 = { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null };
  let tmp15;
  if (!isSending) {
    tmp15 = callback1;
  }
  obj8.onPress = tmp15;
  obj8.loading = isSending;
  obj7.sendButton = jsx(message(trackForwardEditContextMessageOnce[13]).Button, { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null });
  obj7.chatInput = jsx(onSend(trackForwardEditContextMessageOnce[14]), { inputRef: textInputRef, text, onChange: callback, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback1 });
  obj7.warningText = formatToPlainStringResult;
  obj7.avoidKeyboard = isInputFocused;
  return jsx(onSend(trackForwardEditContextMessageOnce[15]), { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null });
});