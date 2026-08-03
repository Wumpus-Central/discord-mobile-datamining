// === Module 9929: ForwardMessageFooter ===

// Module 9929 (ForwardMessageFooter)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("handleChanged").fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = function ForwardMessageFooter(message) {
  let canSend;
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
  let first;
  let React;
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = message(trackForwardEditContextMessageOnce[4]);
  trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  let obj1 = message(trackForwardEditContextMessageOnce[5]);
  const selectedDestinationChannel = obj1.useSelectedDestinationChannel(selectedDestinations);
  const items = [handleChanged];
  const tmp5 = first(React.useState(message(trackForwardEditContextMessageOnce[6]).useStateFromStoresObject(items, () => outer1_5.getDraft(message.channel_id, outer1_6.ForwardContextMessage))), 2);
  first = tmp5[0];
  React = tmp6;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [first, message.channel_id];
  const callback = React.useCallback((arg0) => {
    _undefined(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = React.useEffect(() => {
    onSend(trackForwardEditContextMessageOnce[7]).saveDraft(message.channel_id, first, outer1_6.ForwardContextMessage);
  }, items2);
  const obj3 = message(trackForwardEditContextMessageOnce[6]);
  const shareChatInputActions = message(trackForwardEditContextMessageOnce[8]).useShareChatInputActions(tmp6, selectedDestinationChannel);
  const items3 = [first, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = React.useCallback(() => {
    onSend(trackForwardEditContextMessageOnce[7]).clearDraft(message.channel_id, outer1_6.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = message(trackForwardEditContextMessageOnce[8]);
  const destinationNamesWithSlowmode = message(trackForwardEditContextMessageOnce[5]).useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (first.length > 0) {
      const intl = tmp(tmp2[9]).intl;
      obj = { count: null, channelNames: null };
      obj[0] = destinationNamesWithSlowmode.length;
      obj[1] = destinationNamesWithSlowmode.join(", ");
      formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[9]).t.xJFpij, obj);
    }
  }
  obj = { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null };
  const obj5 = message(trackForwardEditContextMessageOnce[5]);
  const tmp13 = onSend;
  obj[0] = jsx(message(trackForwardEditContextMessageOnce[11]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
  obj1 = { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null };
  let tmp15;
  if (!isSending) {
    tmp15 = callback1;
  }
  obj1[4] = tmp15;
  obj1[5] = isSending;
  obj[1] = jsx(message(trackForwardEditContextMessageOnce[12]).Button, { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null });
  obj[2] = jsx(tmp13(trackForwardEditContextMessageOnce[13]), { inputRef: textInputRef, text: first, onChange: callback, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback1 });
  obj[3] = formatToPlainStringResult;
  obj[4] = isInputFocused;
  return jsx(onSend(trackForwardEditContextMessageOnce[10]), { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null });
};