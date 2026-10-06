// discord_app/modules/chat_input/native/useChatInputRefs.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import MessageConstants from "../../messages/MessageConstants.tsx";
import StickersUtils from "../../stickers/StickersUtils.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import DraftStore2 from "../../../stores/DraftStore.tsx";
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore.tsx";
import LongPressMessageActionSheetUtils from "../../messages/native/long_press/LongPressMessageActionSheetUtils.tsx";
import PendingReplyActionCreators from "../../replies/PendingReplyActionCreators.tsx";
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands.tsx";
import ChatInputSendUtils from "accessories/ChatInputSendUtils.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import StickersStore from "../../stickers/StickersStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import SlowmodeStore from "../../../stores/SlowmodeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const DraftStore = DraftStore2;
let chatInputActions, closure_12, dependencyMap, map, scheduledMessage;

let react = react_mod;
const DraftType = DraftStore2.DraftType;
let closure_11 = useChatBottomManagerUIStore.updateChatInputContainerHeight;
const AnalyticEvents = Constants.AnalyticEvents;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputRefs.tsx");

export default function useChatInputRefs(chatInputProps) {
  let chatInputRightActions;
  chatInputProps = chatInputProps.chatInputProps;
  const chatInputTextFieldHeight = chatInputProps.chatInputTextFieldHeight;
  react = undefined;
  dependencyMap = react.useRef(null);
  react = react.useRef(null);
  const chatInputAppCommandManager = react.useRef(null);
  const chatInputAutocomplete = react.useRef(null);
  const chatInputCharCounter = react.useRef(null);
  const chatInputCover = react.useRef(null);
  const chatInputEmojiSuggestions = react.useRef(null);
  const chatInputNative = react.useRef(null);
  const chatInputSendButton = react.useRef(null);
  const useRef = react.useRef;
  map = new Map();
  const chatInputTextFlushedResponses = useRef(map);
  const tmp2 = chatInputTextFieldHeight(5991)(() => {
    const obj = ChatInputUtils;
    return obj.createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex);
  });
  closure_12 = tmp2;
  const propsPrev = react.useRef(chatInputProps);
  const props = react.useRef(chatInputProps);
  let items = [chatInputProps];
  const effect = react.useEffect(() => {
    if (props.current.channel.id !== chatInputProps.channel.id) {
      const current = chatInput.current;
      if (current != null) {
        const result = current.flushPendingDraftSave();
      }
    }
    propsPrev.current = props.current;
    props.current = chatInputProps;
  }, items);
  let items1 = [chatInputProps.channel.id];
  const effect1 = react.useEffect(() => {
    ref.current.handledHereMention = false;
  }, items1);
  const items2 = [tmp2, chatInputProps.channel.id];
  const effect2 = react.useEffect(() => {
    let channel;
    closure_12.handleRef(chatInput.current, chatInputProps.channel.id);
    return () => {
      closure_1_12.handleRef(null, channel.channel.id);
    };
  }, items2);
  const state = react.useRef(
    chatInputTextFieldHeight(5991)(() => ({
      editId: null,
      focused: false,
      selectionStart: 0,
      selectionEnd: 0,
      text: chatInputProps.defaultValue,
      textPrev: chatInputProps.defaultValue,
      textFieldContentSize: 0,
      textFieldHeight: chatInputTextFieldHeight,
    })),
  );
  const ref = react.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = react.useMemo(() => {
    let chatInputNativeRef;
    let chatInputRef;
    let ref2;
    let ref3;
    let ref4;
    let obj = chatInputTextFieldHeight(chatInputActions[13]);
    let closure_0 = obj.throttle((arg0, arg1) => {
      const obj = chatInputTextFieldHeight(ref[14]);
      obj.updateTextBlocks(chatInputNativeRef.current, arg0, arg1);
    }, 200);
    let obj2 = chatInputTextFieldHeight(chatInputActions[13]);
    let closure_1 = obj2.throttle((text) => {
      const current = props.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (text.length > 0) {
          if (!text.startsWith(propsPrev)) {
            const obj = chatInputTextFieldHeight(ref[15]);
            obj.startTyping(channel.id);
          }
          const current2 = ref2.current;
          let applicationCommandManager;
          if (current2 != null) {
            applicationCommandManager = current2.getApplicationCommandManager();
          }
          let mentionGames;
          if (applicationCommandManager != null) {
            mentionGames = applicationCommandManager.getMentionGames();
          }
          let mentionTimestamps;
          if (applicationCommandManager != null) {
            mentionTimestamps = applicationCommandManager.getMentionTimestamps();
          }
          let result = text;
          if (null != mentionGames) {
            result = text;
            if (mentionGames.size > 0) {
              const obj3 = chatInputProps(ref[16]);
              result = obj3.serializeComposerGameMentions(text, mentionGames);
            }
          }
          let result1 = result;
          const tmp16 = null != mentionTimestamps && mentionTimestamps.size > 0;
          if (tmp16) {
            obj4 = chatInputProps(ref[16]);
            result1 = obj4.serializeComposerTimestampMentions(result, mentionTimestamps);
          }
          const obj5 = chatInputProps(ref[17]);
          const toDraftCommandResult = obj5.toDraftCommand(ref2.getActiveCommand(channel.id), result1);
          if (null == tmp) {
            if (!ref4.current.handledHereMention) {
              const tryUpdateSubscriptionForHereMention = chatInputProps(ref[18]).tryUpdateSubscriptionForHereMention;
              const tmp34 = chatInputProps(ref[18]);
              const obj7 = chatInputProps(ref[19]);
              if (tryUpdateSubscriptionForHereMention(text, obj7.getMaxMessageLength(), channel.guild_id, channel.id)) {
                tmp31.current.handledHereMention = true;
              }
            }
            const obj8 = chatInputTextFieldHeight(ref[20]);
            obj8.saveDraft(channel.id, result1, chatInputCover.ChannelMessage, toDraftCommandResult);
          } else {
            const obj6 = chatInputTextFieldHeight(ref[20]);
            obj6.saveDraft(channel.id, result1, chatInputCover.FirstThreadMessage, toDraftCommandResult);
          }
        }
        const obj2 = chatInputTextFieldHeight(ref[15]);
        obj2.stopTyping(channel.id);
      }
    }, 500);
    let obj3 = chatInputTextFieldHeight(chatInputActions[13]);
    chatInputActions = obj3.debounce((arg0) => {
      ref3(props.current.screenIndex, arg0);
    }, 32);
    let obj4 = {
      backspace() {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.backspace(chatInputNativeRef.current);
      },
      blur() {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.blur(chatInputNativeRef.current);
      },
      chatInputTrackerRegister() {
        closure_1_12.register();
      },
      chatInputTrackerUnregister() {
        closure_1_12.unregister();
      },
      clearText() {
        const current = chatInputRef.current;
        if (current != null) {
          current.setText("");
        }
      },
      closeCustomKeyboard() {
        const obj = chatInputProps(ref[21]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== chatInputProps(ref[22]).KeyboardTypes.SYSTEM) {
          const obj2 = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM };
          const setKeyboardType = chatInputProps(ref[23]).setKeyboardType;
          chatInputProps(ref[23]);
          setKeyboardType(obj2);
        }
        const tmpResult3 = chatInputProps(ref[24]);
        if (!tmpResult3.isAndroid()) {
          obj4 = chatInputTextFieldHeight(ref[14]);
          obj4.closeCustomKeyboard(chatInputNativeRef.current);
        }
        const tmpResult4 = chatInputProps(ref[25]);
        const result = tmpResult4.closePortalKeyboardRequest();
      },
      dismissKeyboard() {
        const obj = chatInputProps(ref[26]);
        const result = obj.dismissGlobalKeyboard();
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        closure_1.flush();
      },
      focus() {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.focus(chatInputNativeRef.current);
      },
      focusPhotosButton() {
        const current = ref.current;
        if (current != null) {
          current.focusPhotosButton();
        }
      },
      getApplicationCommandManager() {
        const current = ref2.current;
        let applicationCommandManager;
        if (current != null) {
          applicationCommandManager = current.getApplicationCommandManager();
        }
        return applicationCommandManager;
      },
      getText() {
        return state.current.text;
      },
      handleCancelEditing() {
        let id;
        let obj3;
        const channel = props.current.channel;
        closure_1.cancel();
        const editingMessage = EditMessageStore.getEditingMessage(channel.id);
        if (null != editingMessage) {
          ({ id: obj2.channel_id, guild_id: obj2.guild_id } = channel);
          const obj = {
            message_id: editingMessage.id,
            channel_id: null,
            guild_id: null,
            context_action: "edit",
            reason: obj3.getContextBarCancelReason("edit", "cancel"),
            is_own_message: id === editingMessage.author.id,
          };
          const track = AnalyticsUtilsDefault.track;
          const CHAT_CONTEXT_BAR_ACTION_CANCELED = AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED;
          AnalyticsUtilsDefault;
          obj3 = LongPressMessageActionSheetUtils;
          const currentUser = UserStore.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
          track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          const tmp6Result = MessageActionCreatorsDefault;
          tmp6Result.endEditMessage(channel.id);
        }
      },
      handlePressKey(arg0) {
        let channel;
        let pendingEdit;
        const current = props.current;
        ({ pendingEdit, channel } = current);
        const pendingReply = current.pendingReply;
        if ("\r" === arg0) {
          const current3 = chatInputRef.current;
          let str2;
          if (current3 != null) {
            str2 = current3.getText();
          }
          if (str2 == null) {
            str2 = "";
          }
          if (str2.trim().length > 0) {
            if (null != pendingEdit) {
              const current5 = chatInputRef.current;
              if (current5 != null) {
                current5.handleSaveEditing();
              }
            }
          }
          if (!tmp) {
            const current4 = chatInputRef.current;
            if (current4 != null) {
              current4.handleSend();
            }
          }
        } else if ("UIKeyInputEscape" === arg0) {
          if (null != pendingEdit) {
            const current2 = chatInputRef.current;
            if (current2 != null) {
              current2.handleCancelEditing();
            }
          } else if (null != pendingReply) {
            const obj = chatInputProps(ref[30]);
            obj.deletePendingReply(channel.id);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = props.current.channel;
          closure_1_1.cancel();
          const obj = editingMessage;
          editingMessage = editingMessage.getEditingMessage(channel.id);
          if (null != editingMessage) {
            const obj2 = { channel, isEdit: true };
            const obj6 = chatInputProps(chatInputActions[31]);
            const handleLegacyCommandsResult = obj6.handleLegacyCommands(text, obj2);
            let content1;
            if (handleLegacyCommandsResult != null) {
              content1 = handleLegacyCommandsResult.content;
            }
            let content = text;
            if (null != content1) {
              content = handleLegacyCommandsResult.content;
            }
            if (content !== obj.getEditingTextValue(channel.id)) {
              const current2 = chatInputRef.current;
              let applicationCommandManager;
              if (current2 != null) {
                applicationCommandManager = current2.getApplicationCommandManager();
              }
              let mentionGames;
              if (applicationCommandManager != null) {
                mentionGames = applicationCommandManager.getMentionGames();
              }
              let mentionTimestamps;
              if (applicationCommandManager != null) {
                mentionTimestamps = applicationCommandManager.getMentionTimestamps();
              }
              let result = content;
              if (null != mentionTimestamps) {
                result = content;
                if (mentionTimestamps.size > 0) {
                  const tmp21Result = chatInputProps(chatInputActions[16]);
                  result = tmp21Result.serializeComposerTimestampMentions(content, mentionTimestamps);
                }
              }
              const obj3 = chatInputTextFieldHeight(chatInputActions[32]);
              const parsed = obj3.parse(channel, result, undefined, mentionGames);
              if (parsed.content !== editingMessage.content) {
                const tmp8Result = chatInputTextFieldHeight(chatInputActions[29]);
                tmp8Result.editMessage(channel.id, editingMessage.id, parsed);
              }
              if (applicationCommandManager != null) {
                const result1 = applicationCommandManager.clearTimestampMentions();
              }
            }
            const obj5 = chatInputTextFieldHeight(chatInputActions[29]);
            obj5.endEditMessage(channel.id);
            const current = chatInputRef.current;
            if (current != null) {
              current.showSideActions();
            }
          }
        }
        if (null == text) {
          let obj = ChatInputNativeCommandsDefault;
          text = obj.getText(chatInputNativeRef.current, ref3.current, handleSaveEditing);
        } else {
          handleSaveEditing(text);
        }
      },
      handleSend() {
        let threadCreationCallback;
        if (!ref4.current.sending) {
          ref4.current.sending = true;
          threadCreationCallback.cancel();
          threadCreationCallback = props.current.threadCreationCallback;
          if (null != threadCreationCallback) {
            let obj2 = chatInputTextFieldHeight(ref[14]);
            const text = obj2.getText(chatInputNativeRef.current, ref3.current, (text) => {
              let obj2;
              const obj = { text, params: obj2 };
              obj2 = { chatInputRef };
              const chatInputValidateContentLength = ChatInputSendUtils.chatInputValidateContentLength;
              ChatInputSendUtils;
              const merged = Object.assign(ref.current);
              const result = chatInputValidateContentLength(obj);
              if (null != result) {
                const obj3 = { text: result.content, threadCreationCallback };
                const tmpResult = ChatInputSendUtils;
                const result1 = tmpResult.chatInputCreateThread(obj3);
                const current = chatInputRef.current;
                if (current != null) {
                  const applicationCommandManager = current.getApplicationCommandManager();
                  if (applicationCommandManager != null) {
                    const result2 = applicationCommandManager.clearTimestampMentions();
                  }
                }
              }
            });
            ref4.current.sending = false;
          } else {
            let current = chatInputRef.current;
            let applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (applicationCommandManager != null) {
              sendCommandResult = applicationCommandManager.sendCommand(
                state.current.text,
                tmp4.current.channel,
                (command, optionValues) => {
                  let obj2;
                  let obj3;
                  const obj = { applicationCommand: obj2, params: obj3 };
                  obj2 = { command, optionValues };
                  obj3 = { chatInputRef };
                  const chatInputSendApplicationCommand = threadCreationCallback(
                    closure_2[33],
                  ).chatInputSendApplicationCommand;
                  threadCreationCallback(closure_2[33]);
                  const merged = Object.assign(ref.current);
                  const result = chatInputSendApplicationCommand(obj);
                },
              );
            }
            if (!sendCommandResult) {
              let obj = chatInputTextFieldHeight(ref[14]);
              const text1 = obj.getText(chatInputNativeRef.current, ref3.current, (text) => {
                let obj2;
                let tmp9;
                if (null != props.current.pendingEdit) {
                  closure_1_1.cancel();
                  const current = chatInputRef.current;
                  tmp9 = chatInputRef;
                  if (current != null) {
                    current.handleSaveEditing(text);
                    tmp9 = tmp13;
                  }
                } else {
                  closure_1_1.cancel();
                  const obj = { text, params: obj2 };
                  obj2 = { chatInputRef };
                  const chatInputHandleSendText = chatInputProps(chatInputActions[33]).chatInputHandleSendText;
                  chatInputProps(chatInputActions[33]);
                  const merged = Object.assign(tmp.current);
                  tmp9 = chatInputRef;
                  const result = chatInputHandleSendText(obj);
                }
                const obj3 = chatInputProps(chatInputActions[21]);
                const keyboardType = obj3.getKeyboardType();
                if (keyboardType === chatInputProps(chatInputActions[22]).KeyboardTypes.SYSTEM) {
                  const current2 = tmp9.current;
                  current2.focus();
                }
              });
            }
            ref4.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        let channel;
        let scheduledTimestamp;
        let threadCreationCallback;
        url = url.url;
        const current = ref.current;
        ({ channel, threadCreationCallback } = current);
        const pendingReply = current.pendingReply;
        const isChannelOnCooldownResult = chatInputNativeRef.isChannelOnCooldown(channel) || 0 === url.length;
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            const id = channel.id;
            const sendMessage = chatInputTextFieldHeight(ref[29]).sendMessage;
            const tmp16 = chatInputTextFieldHeight(ref[29]);
            const obj2 = chatInputTextFieldHeight(ref[32]);
            const parsed = obj2.parse(channel, url);
            const obj3 = { location: ref.GIF_REPLY, scheduledTimestamp };
            obj4 = chatInputTextFieldHeight(ref[29]);
            const merged = Object.assign(obj4.getSendMessageOptionsForReply(pendingReply));
            scheduledMessage = scheduledMessage.getScheduledMessage(channel.id);
            scheduledTimestamp = undefined;
            if (scheduledMessage != null) {
              scheduledTimestamp = scheduledMessage.scheduledTimestamp;
            }
            sendMessage(id, parsed, true, obj3);
            const obj = chatInputProps(ref[30]);
            obj.deletePendingReply(channel.id);
          }
          const current2 = chatInputRef.current;
          current2.dismissKeyboard();
        }
      },
      handleSelectSticker(sticker, tokenStart) {
        let channel;
        let obj2;
        let scheduledTimestamp;
        let threadCreationCallback;
        const current = props.current;
        ({ channel, threadCreationCallback } = current);
        const pendingReply = current.pendingReply;
        if (!SlowmodeStore.isChannelOnCooldown(channel)) {
          if (null != sticker) {
            const obj6 = StickersUtils;
            if (!obj6.isStandardSticker(sticker)) {
              const text = state.current.text;
              let sum = text;
              if (null != tokenStart) {
                const substr = text.slice(0, tokenStart);
                sum = substr + text.slice(tmp7);
              }
              const obj = { text: sum, params: obj2 };
              obj2 = { chatInputRef };
              const chatInputValidateContentLength = ChatInputSendUtils.chatInputValidateContentLength;
              ChatInputSendUtils;
              const merged = Object.assign(props.current);
              const result = chatInputValidateContentLength(obj);
              if (null != result) {
                closure_1.cancel();
                if (null != threadCreationCallback) {
                  const items = [sticker.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const id = channel.id;
                  const items1 = [sticker.id];
                  const sendStickers = MessageActionCreatorsDefault.sendStickers;
                  const obj3 = { location: MessageSendLocation.STICKER_REPLY, scheduledTimestamp };
                  const obj8 = MessageActionCreatorsDefault;
                  const merged1 = Object.assign(obj8.getSendMessageOptionsForReply(pendingReply));
                  scheduledMessage = DraftStore.getScheduledMessage(channel.id);
                  scheduledTimestamp = undefined;
                  if (scheduledMessage != null) {
                    scheduledTimestamp = scheduledMessage.scheduledTimestamp;
                  }
                  sendStickers(id, items1, result, obj3);
                  const current2 = chatInputRef.current;
                  if (current2 != null) {
                    const applicationCommandManager = current2.getApplicationCommandManager();
                    if (applicationCommandManager != null) {
                      const result2 = applicationCommandManager.clearTimestampMentions();
                    }
                  }
                  const tmp30Result2 = PendingReplyActionCreators;
                  tmp30Result2.deletePendingReply(channel.id);
                  const tmp34Result = DraftActionCreatorsDefault;
                  tmp34Result.saveDraft(channel.id, "", DraftType.ChannelMessage);
                  const current3 = chatInputRef.current;
                  if (current3 != null) {
                    current3.clearText();
                  }
                  const current4 = chatInputRef.current;
                  if (current4 != null) {
                    current4.showSideActions();
                  }
                }
                const current5 = chatInputRef.current;
                current5.dismissKeyboard();
              }
            }
          }
        }
      },
      hideSideActions() {
        const current = ref.current;
        if (current != null) {
          current.onDismissActions(state.current.focused);
        }
        const current2 = obj4.current;
        if (current2 != null) {
          current2.onDismissActions(state.current.focused);
        }
      },
      handleTextChanged(text) {
        closure_1(text);
      },
      insertText(addTimestampMentionResult, tokenStart, flag, items1, selectionEnd) {
        let editId;
        let text;
        let selectionStart = tokenStart;
        if (null == tokenStart) {
          selectionStart = state.current.selectionStart;
        }
        if (selectionEnd == null) {
          selectionEnd = state.current.selectionEnd;
        }
        const current = chatInputRef.current;
        const replaceRange = current.replaceRange;
        const obj = {
          location: selectionStart,
          length: Math.max(0, selectionEnd - selectionStart),
          text,
          nodes: items1,
          editId,
        };
        text = addTimestampMentionResult;
        if (flag) {
          text = `${addTimestampMentionResult} `;
        }
        editId = state.current.editId;
        replaceRange(obj);
      },
      isFocused() {
        return state.current.focused;
      },
      openCustomKeyboard(keyboardParams) {
        let channel;
        let secondaryTextFieldRef;
        ({ channel, secondaryTextFieldRef } = props.current);
        const obj = { channelId: channel.id, chatInputRef, chatInputNativeRef, keyboardParams, secondaryTextFieldRef };
        chatInputTextFieldHeight(ref[35])(obj);
      },
      openSystemKeyboard() {
        const obj = chatInputProps(ref[21]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === chatInputProps(ref[22]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          const tmpResult = chatInputProps(ref[36]);
          keyboardIsOpen = tmpResult.getKeyboardIsOpen({ includeCustomKeyboard: false });
        }
        if (!keyboardIsOpen) {
          const obj2 = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
          const setKeyboardType = chatInputProps(ref[23]).setKeyboardType;
          chatInputProps(ref[23]);
          setKeyboardType(obj2);
          obj4 = chatInputTextFieldHeight(ref[14]);
          obj4.openSystemKeyboard(chatInputNativeRef.current);
        }
      },
      replaceRange(arg0) {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.replaceRange(chatInputNativeRef.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.setSelectedRange(chatInputNativeRef.current, arg0, arg1);
      },
      setText(arg0) {
        const obj = chatInputTextFieldHeight(ref[14]);
        obj.setText(chatInputNativeRef.current, arg0);
      },
      showSideActions() {
        const current = ref.current;
        if (current != null) {
          current.onShowActions(state.current.focused);
        }
        const current2 = obj4.current;
        if (current2 != null) {
          current2.onShowActions(state.current.focused);
        }
      },
      updateNativeTextBlocksThrottled(chatInputNodes, editId) {
        closure_0(chatInputNodes, editId);
      },
      updateChatInputContainerHeightDebounced(height) {
        ref(height);
      },
    };
    let obj5 = {
      chatInputRefObject: obj4,
      chatInputRefObjectCallback() {
        return obj4;
      },
    };
    return obj5;
  }, items3);
  const chatInputRefObjectCallback = memo.chatInputRefObjectCallback;
  const chatInput = react.useRef(memo.chatInputRefObject);
  const imperativeHandle = react.useImperativeHandle(ref, chatInputRefObjectCallback);
  return react.useMemo(
    () => ({
      chatInput,
      chatInputCharCounter,
      chatInputCover,
      chatInputActions,
      chatInputRightActions,
      chatInputAutocomplete,
      chatInputEmojiSuggestions,
      chatInputAppCommandManager,
      chatInputNative,
      chatInputSendButton,
      chatInputTextFlushedResponses,
      props,
      propsPrev,
      state,
    }),
    [],
  );
}
