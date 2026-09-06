// === Module 11691: ForwardMessageFooter ===

// Module 11691 (ForwardMessageFooter)
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7777 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DraftStore from "DraftStore" /* 4901 */;

const require = fn;
const DraftType = fn(4901).DraftType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = function ForwardMessageFooter(message) {
  message = message.message;
  ({ selectedDestinations, isSending, onSend } = message);
  let trackForwardEditContextMessageOnce;
  let text;
  noop = undefined;
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = message(trackForwardEditContextMessageOnce[4]);
  trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  let obj1 = message(trackForwardEditContextMessageOnce[5]);
  const selectedDestinationChannel = obj1.useSelectedDestinationChannel(selectedDestinations);
  const items = [DraftStore];
  const tmp5 = text(noop.useState(message(trackForwardEditContextMessageOnce[6]).useStateFromStoresObject(items, () => DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage))), 2);
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
  const obj3 = message(trackForwardEditContextMessageOnce[6]);
  const shareChatInputActions = message(trackForwardEditContextMessageOnce[8]).useShareChatInputActions(tmp6, selectedDestinationChannel);
  const items3 = [text, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = noop.useCallback(() => {
    DraftActionCreatorsDefault.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = message(trackForwardEditContextMessageOnce[8]);
  const destinationNamesWithSlowmode = message(trackForwardEditContextMessageOnce[5]).useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (text.length > 0) {
      const intl = tmp(tmp2[9]).intl;
      obj = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[9]).t.xJFpij, obj);
    }
  }
  obj = { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null };
  const obj5 = message(trackForwardEditContextMessageOnce[5]);
  const tmp13 = onSend;
  obj.preview = jsx(message(trackForwardEditContextMessageOnce[11]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
  obj1 = { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null };
  let tmp15;
  if (!isSending) {
    tmp15 = callback1;
  }
  obj1.onPress = tmp15;
  obj1.loading = isSending;
  obj.sendButton = jsx(message(trackForwardEditContextMessageOnce[12]).Button, { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null });
  obj.chatInput = jsx(tmp13(trackForwardEditContextMessageOnce[13]), { inputRef: textInputRef, text, onChange: callback, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback1 });
  obj.warningText = formatToPlainStringResult;
  obj.avoidKeyboard = isInputFocused;
  return jsx(onSend(trackForwardEditContextMessageOnce[10]), { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null });
};