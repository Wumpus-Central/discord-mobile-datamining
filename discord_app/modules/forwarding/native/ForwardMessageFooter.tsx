// === Module 11318: ForwardMessageFooter ===

// Module 11318 (ForwardMessageFooter)
import Fragment from "Fragment" /* 21 */;
import DraftStore2 from "DraftStore" /* 7031 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7405 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let message;

let react = react_mod;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let closure_4;
  let first;
  let first1;
  let forwardOptions;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let selectedDestinations;
  let sendLabel;
  let textInputRef;
  let tmp8;
  let trackForwardEditContextMessageOnce;
  let obj = message(trackForwardEditContextMessageOnce[5]);
  const cResult = obj.c(42);
  message = message.message;
  ({ forwardOptions, sendLabel, selectedDestinations, isSending, onSend } = message);
  const canSend = message.canSend;
  const obj2 = message(trackForwardEditContextMessageOnce[6]);
  trackForwardEditContextMessageOnce = obj2.useTrackForwardEditContextMessageOnce();
  const obj3 = message(trackForwardEditContextMessageOnce[7]);
  const selectedDestinationChannel = obj3.useSelectedDestinationChannel(selectedDestinations);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message.channel_id) {
    const fn = function u() {
      return DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage);
    };
    cResult[1] = message.channel_id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = message(trackForwardEditContextMessageOnce[8]);
  const tmp9 = first1(react.useState(tmpResult.useStateFromStoresObject(first, tmp8)), 2);
  first1 = tmp9[0];
  const obj5 = react;
  react = tmp10;
  if (cResult[3] === message.channel_id) {
    if (cResult[4] === message.id) {
      let tmp11;
      if (cResult[5] === trackForwardEditContextMessageOnce) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === first1) {
        let tmp12;
        let tmp13;
        if (cResult[8] === message.channel_id) {
          tmp12 = cResult[9];
          tmp13 = cResult[10];
        }
        const effect = obj5.useEffect(tmp12, tmp13);
        class O {
          constructor() {
            const obj = DraftActionCreatorsDefault;
            obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
          }
        }
        const shareChatInputActions = obj6.useShareChatInputActions(tmp10, selectedDestinationChannel);
        ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
        if (cResult[11] === first1) {
          if (cResult[12] === message.channel_id) {
            let tmp16;
            if (cResult[13] === onSend) {
              tmp16 = cResult[14];
            }
            message(trackForwardEditContextMessageOnce[7]);
            class O {
              constructor() {
                const obj = DraftActionCreatorsDefault;
                obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
              }
            }
            if (cResult[15] === arr4) {
              let tmp18;
              if (cResult[16] === first1) {
                tmp18 = cResult[17];
              }
              if (cResult[18] === selectedDestinationChannel) {
                if (cResult[19] === forwardOptions) {
                  let tmp21;
                  if (cResult[20] === message) {
                    tmp21 = cResult[21];
                  }
                  class O {
                    constructor() {
                      const obj = DraftActionCreatorsDefault;
                      obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
                    }
                  }
                  if (cResult[22] === isSending) {
                    if (cResult[23] === sendLabel) {
                      if (cResult[24] === tmp24) {
                        let tmp25;
                        if (cResult[25] === !canSend) {
                          tmp25 = cResult[26];
                        }
                        if (cResult[27] === first1) {
                          if (cResult[28] === tmp11) {
                            if (cResult[29] === handleMessageBlur) {
                              if (cResult[30] === handleMessageFocus) {
                                if (cResult[31] === handlePressEmoji) {
                                  if (cResult[32] === handleSelectionChange) {
                                    if (cResult[33] === tmp16) {
                                      let tmp28;
                                      if (cResult[34] === textInputRef) {
                                        tmp28 = cResult[35];
                                      }
                                      if (cResult[36] === isInputFocused) {
                                        if (cResult[37] === tmp18) {
                                          if (cResult[38] === tmp25) {
                                            if (cResult[39] === tmp28) {
                                              let tmp31;
                                              if (cResult[40] === tmp21) {
                                                tmp31 = cResult[41];
                                              }
                                              return tmp31;
                                            }
                                          }
                                        }
                                      }
                                      class O {
                                        constructor() {
                                          const obj = DraftActionCreatorsDefault;
                                          obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
                                        }
                                      }
                                      const tmp33 = jsx(onSend(trackForwardEditContextMessageOnce[15]), { preview: tmp21, sendButton: tmp25, chatInput: tmp28, warningText: tmp18, avoidKeyboard: isInputFocused });
                                      class T {
                                        constructor() {
                                          const obj = DraftActionCreatorsDefault;
                                          obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                                          onSend(first1);
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
                            const obj = DraftActionCreatorsDefault;
                            obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
                          }
                        }
                        class T {
                          constructor() {
                            const obj = DraftActionCreatorsDefault;
                            obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                            onSend(first1);
                          }
                        }
                        const tmp30 = jsx(onSend(trackForwardEditContextMessageOnce[14]), { inputRef: textInputRef, text: first1, onChange: tmp11, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: null, onSend: tmp16 });
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
                  class T {
                    constructor() {
                      const obj = DraftActionCreatorsDefault;
                      obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                      onSend(first1);
                    }
                  }
                  cResult[22] = isSending;
                  cResult[23] = sendLabel;
                  cResult[24] = tmp24;
                  cResult[25] = !canSend;
                  cResult[26] = tmp27;
                  tmp25 = tmp27;
                }
              }
              class O {
                constructor() {
                  const obj = DraftActionCreatorsDefault;
                  obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
                }
              }
              const tmp22 = jsx(message(trackForwardEditContextMessageOnce[12]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
              cResult[18] = selectedDestinationChannel;
              class T {
                constructor() {
                  const obj = DraftActionCreatorsDefault;
                  obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                  onSend(first1);
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
                const formatToPlainString = intl.formatToPlainString;
                class O {
                  constructor() {
                    const obj = DraftActionCreatorsDefault;
                    obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
                  }
                }
                tmp20[0] = arr4.length;
                const xJFpij = tmp(tmp2[11]).t.xJFpij;
                tmp20[1] = arr4.join(", ");
                formatToPlainStringResult = formatToPlainString(xJFpij, tmp20);
              }
            }
            cResult[15] = arr4;
            cResult[16] = first1;
            class T {
              constructor() {
                const obj = DraftActionCreatorsDefault;
                obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
                onSend(first1);
              }
            }
            cResult[17] = formatToPlainStringResult;
            tmp18 = formatToPlainStringResult;
          }
        }
        class T {
          constructor() {
            const obj = DraftActionCreatorsDefault;
            obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
            onSend(first1);
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
          const obj = DraftActionCreatorsDefault;
          obj.saveDraft(message.channel_id, first1, DraftType.ForwardContextMessage);
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
}) : ((message) => {
  let canSend;
  let closure_4;
  let forwardOptions;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let selectedDestinations;
  let sendLabel;
  let textInputRef;
  message = message.message;
  ({ selectedDestinations, isSending, onSend } = message);
  let trackForwardEditContextMessageOnce;
  let text;
  react = undefined;
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = message(trackForwardEditContextMessageOnce[6]);
  trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  const obj2 = message(trackForwardEditContextMessageOnce[7]);
  const selectedDestinationChannel = obj2.useSelectedDestinationChannel(selectedDestinations);
  const items = [DraftStore];
  const obj3 = message(trackForwardEditContextMessageOnce[8]);
  const tmp5 = text(react.useState(obj3.useStateFromStoresObject(items, () => DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage))), 2);
  text = tmp5[0];
  react = tmp6;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [text, message.channel_id];
  const callback = react.useCallback((arg0) => {
    closure_4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = react.useEffect(() => {
    const obj = DraftActionCreatorsDefault;
    obj.saveDraft(message.channel_id, first, DraftType.ForwardContextMessage);
  }, items2);
  const obj4 = message(trackForwardEditContextMessageOnce[10]);
  const shareChatInputActions = obj4.useShareChatInputActions(tmp6, selectedDestinationChannel);
  const items3 = [text, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = react.useCallback(() => {
    const obj = DraftActionCreatorsDefault;
    obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj5 = message(trackForwardEditContextMessageOnce[7]);
  const destinationNamesWithSlowmode = obj5.useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (text.length > 0) {
      const intl = tmp(tmp2[11]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj6 = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      const xJFpij = tmp(tmp2[11]).t.xJFpij;
      formatToPlainStringResult = formatToPlainString(xJFpij, obj6);
    }
  }
  onSend(trackForwardEditContextMessageOnce[15]);
  const Button = tmp(tmp2[13]).Button;
  return <tmp14 preview={null} sendButton={null} chatInput={null} warningText={formatToPlainStringResult} avoidKeyboard={isInputFocused} />;
});
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = tmp2;