// discord_app/modules/forwarding/native/ForwardMessageFooter.tsx
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DraftStore from "../../../stores/DraftStore.tsx";

const require = fn;
const DraftType = fn(5192).DraftType;
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
  trackForwardEditContextMessageOnce = message(
    trackForwardEditContextMessageOnce[4],
  ).useTrackForwardEditContextMessageOnce();
  const obj = message(trackForwardEditContextMessageOnce[4]);
  const selectedDestinationChannel = message(trackForwardEditContextMessageOnce[5]).useSelectedDestinationChannel(
    selectedDestinations,
  );
  const obj2 = message(trackForwardEditContextMessageOnce[5]);
  const items = [DraftStore];
  const tmp5 = text(
    noop.useState(
      message(trackForwardEditContextMessageOnce[6]).useStateFromStoresObject(items, () =>
        DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage),
      ),
    ),
    2,
  );
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
  const shareChatInputActions = message(trackForwardEditContextMessageOnce[8]).useShareChatInputActions(
    tmp6,
    selectedDestinationChannel,
  );
  const items3 = [text, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } =
    shareChatInputActions);
  const callback1 = noop.useCallback(() => {
    DraftActionCreatorsDefault.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = message(trackForwardEditContextMessageOnce[8]);
  const destinationNamesWithSlowmode = message(trackForwardEditContextMessageOnce[5]).useDestinationNamesWithSlowmode(
    selectedDestinations,
  );
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (text.length > 0) {
      const intl = tmp(tmp2[9]).intl;
      const obj6 = {
        count: destinationNamesWithSlowmode.length,
        channelNames: destinationNamesWithSlowmode.join(", "),
      };
      formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[9]).t.xJFpij, obj6);
    }
  }
  const obj7 = { preview: null, sendButton: null, chatInput: null, warningText: null, avoidKeyboard: null };
  const obj5 = message(trackForwardEditContextMessageOnce[5]);
  obj7.preview = jsx(message(trackForwardEditContextMessageOnce[11]).ForwardPreview, {
    message,
    channel: selectedDestinationChannel,
    forwardOptions,
  });
  const obj8 = { variant: "primary", size: "md", text: sendLabel, disabled: !canSend, onPress: null, loading: null };
  let tmp15;
  if (!isSending) {
    tmp15 = callback1;
  }
  obj8.onPress = tmp15;
  obj8.loading = isSending;
  obj7.sendButton = jsx(message(trackForwardEditContextMessageOnce[12]).Button, {
    variant: "primary",
    size: "md",
    text: sendLabel,
    disabled: !canSend,
    onPress: null,
    loading: null,
  });
  obj7.chatInput = jsx(onSend(trackForwardEditContextMessageOnce[13]), {
    inputRef: textInputRef,
    text,
    onChange: callback,
    onSelectionChange: handleSelectionChange,
    onFocus: handleMessageFocus,
    onBlur: handleMessageBlur,
    onPressEmoji: handlePressEmoji,
    onSend: callback1,
  });
  obj7.warningText = formatToPlainStringResult;
  obj7.avoidKeyboard = isInputFocused;
  return jsx(onSend(trackForwardEditContextMessageOnce[10]), {
    preview: null,
    sendButton: null,
    chatInput: null,
    warningText: null,
    avoidKeyboard: null,
  });
};
