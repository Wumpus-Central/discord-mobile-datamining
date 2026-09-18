// discord_app/modules/chat_input/native/useChatInputRefs.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import StickersUtils from "../../stickers/StickersUtils.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import LongPressMessageActionSheetUtils from "../../messages/native/long_press/LongPressMessageActionSheetUtils.tsx";
import PendingReplyActionCreators from "../../replies/PendingReplyActionCreators.tsx";
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands.tsx";
import ChatInputSendUtils from "accessories/ChatInputSendUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import StickersStore from "../../stickers/StickersStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import SlowmodeStore from "../../../stores/SlowmodeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const DraftType = fn(5063).DraftType;
let closure_11 = fn(9723).updateChatInputContainerHeight;
const AnalyticEvents = fn(1074).AnalyticEvents;
const COMMAND_SENTINEL = fn(5169).COMMAND_SENTINEL;
const MessageSendLocation = fn(4715).MessageSendLocation;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputRefs.tsx");

export default function useChatInputRefs(chatInputProps) {
  chatInputProps = chatInputProps.chatInputProps;
  const chatInputTextFieldHeight = chatInputProps.chatInputTextFieldHeight;
  noop = undefined;
  dependencyMap = noop.useRef(null);
  noop = noop.useRef(null);
  const chatInputAppCommandManager = noop.useRef(null);
  const chatInputAutocomplete = noop.useRef(null);
  const chatInputCharCounter = noop.useRef(null);
  const chatInputCover = noop.useRef(null);
  const chatInputEmojiSuggestions = noop.useRef(null);
  const chatInputNative = noop.useRef(null);
  const chatInputSendButton = noop.useRef(null);
  const chatInputTextFlushedResponses = noop.useRef(new Map());
  const tmp2 = chatInputTextFieldHeight(5768)(() =>
    ChatInputUtils.createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex),
  );
  closure_12 = tmp2;
  const propsPrev = noop.useRef(chatInputProps);
  const props = noop.useRef(chatInputProps);
  let items = [chatInputProps];
  const effect = noop.useEffect(() => {
    if (props.current.channel.id !== chatInputProps.channel.id) {
      const current = chatInput.current;
      if (current != null) {
        const result = current.flushPendingDraftSave();
      }
    }
    closure_13.current = props.current;
    props.current = chatInputProps;
  }, items);
  let items1 = [chatInputProps.channel.id];
  const effect1 = noop.useEffect(() => {
    ref.current.handledHereMention = false;
  }, items1);
  const items2 = [tmp2, chatInputProps.channel.id];
  const effect2 = noop.useEffect(() => {
    closure_12.handleRef(chatInput.current, chatInputProps.channel.id);
    return () => {
      closure_1_12.handleRef(null, channel.channel.id);
    };
  }, items2);
  const state = noop.useRef(
    chatInputTextFieldHeight(5768)(() => ({
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
  noop.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = noop.useMemo(() => {
    closure_0 = chatInputTextFieldHeight(chatInputActions[13]).throttle((arg0, arg1) => {
      chatInputTextFieldHeight(ref[14]).updateTextBlocks(chatInputNativeRef.current, arg0, arg1);
    }, 200);
    let obj = chatInputTextFieldHeight(chatInputActions[13]);
    closure_1 = chatInputTextFieldHeight(chatInputActions[13]).throttle((text) => {
      const current = props.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (text.length > 0) {
          if (!text.startsWith(closure_13)) {
            chatInputTextFieldHeight(ref[15]).startTyping(channel.id);
            const obj = chatInputTextFieldHeight(ref[15]);
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
              result = chatInputProps(ref[16]).serializeComposerGameMentions(text, mentionGames);
              const obj3 = chatInputProps(ref[16]);
            }
          }
          let result1 = result;
          if (tmp16) {
            result1 = chatInputProps(ref[16]).serializeComposerTimestampMentions(result, mentionTimestamps);
            obj4 = chatInputProps(ref[16]);
          }
          const toDraftCommandResult = chatInputProps(ref[17]).toDraftCommand(
            ref2.getActiveCommand(channel.id),
            result1,
          );
          if (null == tmp) {
            if (!ref4.current.handledHereMention) {
              const obj7 = chatInputProps(ref[18]);
              if (
                obj7.tryUpdateSubscriptionForHereMention(text, obj8.getMaxMessageLength(), channel.guild_id, channel.id)
              ) {
                tmp31.current.handledHereMention = true;
              }
              obj8 = chatInputProps(ref[19]);
            }
            const obj9 = chatInputTextFieldHeight(ref[20]);
            obj9.saveDraft(channel.id, result1, closure_7.ChannelMessage, toDraftCommandResult);
          } else {
            const obj6 = chatInputTextFieldHeight(ref[20]);
            obj6.saveDraft(channel.id, result1, closure_7.FirstThreadMessage, toDraftCommandResult);
          }
          const obj5 = chatInputProps(ref[17]);
          tmp16 = null != mentionTimestamps && mentionTimestamps.size > 0;
        }
        chatInputTextFieldHeight(ref[15]).stopTyping(channel.id);
        const obj2 = chatInputTextFieldHeight(ref[15]);
      }
    }, 500);
    let obj2 = chatInputTextFieldHeight(chatInputActions[13]);
    chatInputActions = chatInputTextFieldHeight(chatInputActions[13]).debounce((arg0) => {
      ref3(props.current.screenIndex, arg0);
    }, 32);
    let obj4 = {
      backspace() {
        chatInputTextFieldHeight(ref[14]).backspace(chatInputNativeRef.current);
      },
      blur() {
        chatInputTextFieldHeight(ref[14]).blur(chatInputNativeRef.current);
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
        const keyboardType = chatInputProps(ref[21]).getKeyboardType();
        if (keyboardType !== chatInputProps(ref[22]).KeyboardTypes.SYSTEM) {
          const obj2 = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM };
          chatInputProps(ref[23]).setKeyboardType(obj2);
          const tmpResult = chatInputProps(ref[23]);
        }
        const obj = chatInputProps(ref[21]);
        if (!tmpResult3.isAndroid()) {
          chatInputTextFieldHeight(ref[14]).closeCustomKeyboard(chatInputNativeRef.current);
          const obj5 = chatInputTextFieldHeight(ref[14]);
        }
        tmpResult3 = chatInputProps(ref[24]);
        const result = chatInputProps(ref[25]).closePortalKeyboardRequest();
        const tmpResult4 = chatInputProps(ref[25]);
      },
      dismissKeyboard() {
        const result = chatInputProps(ref[26]).dismissGlobalKeyboard();
        const current = chatInputRef.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        closure_1.flush();
      },
      focus() {
        chatInputTextFieldHeight(ref[14]).focus(chatInputNativeRef.current);
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
        const channel = closure_14.current.channel;
        closure_1.cancel();
        const editingMessage = EditMessageStore.getEditingMessage(channel.id);
        if (null != editingMessage) {
          const obj = {
            message_id: editingMessage.id,
            channel_id: null,
            guild_id: null,
            context_action: "edit",
            reason: null,
            is_own_message: null,
          };
          ({ id: obj3.channel_id, guild_id: obj3.guild_id } = channel);
          const obj2 = AnalyticsUtilsDefault;
          obj.reason = LongPressMessageActionSheetUtils.getContextBarCancelReason("edit", "cancel");
          const currentUser = UserStore.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          obj.is_own_message = id === editingMessage.author.id;
          obj2.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          MessageActionCreatorsDefault.endEditMessage(channel.id);
          const tmp6Result = MessageActionCreatorsDefault;
        }
      },
      handlePressKey(arg0) {
        const current = props.current;
        ({ pendingEdit, channel } = current);
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
          } else if (null != current.pendingReply) {
            chatInputProps(ref[30]).deletePendingReply(channel.id);
            const obj = chatInputProps(ref[30]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = props.current.channel;
          closure_1_1.cancel();
          editingMessage = editingMessage.getEditingMessage(channel.id);
          if (null != editingMessage) {
            const obj2 = { channel, isEdit: true };
            const handleLegacyCommandsResult = chatInputProps(dependencyMap[31]).handleLegacyCommands(text, obj2);
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
                  result = chatInputProps(dependencyMap[16]).serializeComposerTimestampMentions(
                    content,
                    mentionTimestamps,
                  );
                  const tmp21Result = chatInputProps(dependencyMap[16]);
                }
              }
              const obj3 = chatInputTextFieldHeight(dependencyMap[32]);
              const parsed = obj3.parse(channel, result, undefined, mentionGames);
              if (parsed.content !== editingMessage.content) {
                chatInputTextFieldHeight(dependencyMap[29]).editMessage(channel.id, editingMessage.id, parsed);
                const tmp8Result = chatInputTextFieldHeight(dependencyMap[29]);
              }
              if (applicationCommandManager != null) {
                const result1 = applicationCommandManager.clearTimestampMentions();
              }
            }
            const obj6 = chatInputProps(dependencyMap[31]);
            chatInputTextFieldHeight(dependencyMap[29]).endEditMessage(channel.id);
            const current = chatInputRef.current;
            if (current != null) {
              current.showSideActions();
            }
            const obj5 = chatInputTextFieldHeight(dependencyMap[29]);
          }
          obj = editingMessage;
        }
        if (null == text) {
          text = ChatInputNativeCommandsDefault.getText(chatInputNativeRef.current, ref3.current, handleSaveEditing);
        } else {
          handleSaveEditing(text);
        }
      },
      handleSend() {
        if (!ref4.current.sending) {
          ref4.current.sending = true;
          threadCreationCallback.cancel();
          if (null != props.current.threadCreationCallback) {
            const text = chatInputTextFieldHeight(ref[14]).getText(chatInputNativeRef.current, ref3.current, (text) => {
              const obj2 = { text, params: null };
              const obj3 = {};
              const merged = Object.assign(ref.current);
              obj3.chatInputRef = chatInputRef;
              obj2.params = obj3;
              const result = ChatInputSendUtils.chatInputValidateContentLength(obj2);
              if (null != result) {
                obj4 = { text: result.content, threadCreationCallback };
                const result1 = ChatInputSendUtils.chatInputCreateThread(obj4);
                const current = chatInputRef.current;
                if (current != null) {
                  const applicationCommandManager = current.getApplicationCommandManager();
                  if (applicationCommandManager != null) {
                    const result2 = applicationCommandManager.clearTimestampMentions();
                  }
                }
                const tmpResult = ChatInputSendUtils;
              }
            });
            ref4.current.sending = false;
            let obj2 = chatInputTextFieldHeight(ref[14]);
          } else {
            let current = chatInputRef.current;
            let applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (applicationCommandManager != null) {
              sendCommandResult = applicationCommandManager.sendCommand(
                state.current.text,
                tmp4.current.channel,
                (command, optionValues) => {
                  const obj2 = { applicationCommand: { command, optionValues }, params: null };
                  obj4 = {};
                  const merged = Object.assign(ref.current);
                  obj4.chatInputRef = chatInputRef;
                  obj2.params = obj4;
                  const result = threadCreationCallback(12239).chatInputSendApplicationCommand(obj2);
                },
              );
            }
            if (!sendCommandResult) {
              const text1 = chatInputTextFieldHeight(ref[14]).getText(
                chatInputNativeRef.current,
                ref3.current,
                (text) => {
                  if (null != props.current.pendingEdit) {
                    closure_1_1.cancel();
                    const current = chatInputRef.current;
                    let tmp8 = chatInputRef;
                    if (current != null) {
                      current.handleSaveEditing(text);
                      tmp8 = tmp12;
                    }
                  } else {
                    closure_1_1.cancel();
                    const obj2 = { text, params: null };
                    const obj3 = {};
                    const merged = Object.assign(tmp.current);
                    tmp8 = chatInputRef;
                    obj3.chatInputRef = chatInputRef;
                    obj2.params = obj3;
                    const result = chatInputProps(12239).chatInputHandleSendText(obj2);
                    const obj = chatInputProps(12239);
                  }
                  const keyboardType = chatInputProps(4590).getKeyboardType();
                  if (keyboardType === chatInputProps(1610).KeyboardTypes.SYSTEM) {
                    const current2 = tmp8.current;
                    current2.focus();
                  }
                  obj4 = chatInputProps(4590);
                },
              );
              let obj = chatInputTextFieldHeight(ref[14]);
            }
            ref4.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        url = url.url;
        const current = props.current;
        ({ channel, threadCreationCallback } = current);
        let isChannelOnCooldownResult = chatInputNativeRef.isChannelOnCooldown(channel);
        if (!isChannelOnCooldownResult) {
          isChannelOnCooldownResult = 0 === url.length;
        }
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            const obj2 = chatInputTextFieldHeight(ref[29]);
            const id = channel.id;
            const parsed = chatInputTextFieldHeight(ref[32]).parse(channel, url);
            obj4 = {};
            const obj3 = chatInputTextFieldHeight(ref[32]);
            const merged = Object.assign(
              chatInputTextFieldHeight(ref[29]).getSendMessageOptionsForReply(current.pendingReply),
            );
            obj4.location = closure_14.GIF_REPLY;
            scheduledMessage = scheduledMessage.getScheduledMessage(channel.id);
            let scheduledTimestamp;
            if (scheduledMessage != null) {
              scheduledTimestamp = scheduledMessage.scheduledTimestamp;
            }
            obj4.scheduledTimestamp = scheduledTimestamp;
            obj2.sendMessage(id, parsed, true, obj4);
            const obj5 = chatInputTextFieldHeight(ref[29]);
            chatInputProps(ref[30]).deletePendingReply(channel.id);
            const obj = chatInputProps(ref[30]);
          }
          chatInputRef.current.dismissKeyboard();
        }
      },
      handleSelectSticker(sticker, tokenStart) {
        const current = closure_14.current;
        ({ channel, threadCreationCallback } = current);
        if (!SlowmodeStore.isChannelOnCooldown(channel)) {
          let current2 = sticker;
          if (null != sticker) {
            if (!obj7.isStandardSticker(current2)) {
              const text = ref.current.text;
              let sum = text;
              if (null != tokenStart) {
                const substr = text.slice(0, tokenStart);
                sum = substr + text.slice(tmp6);
              }
              const obj = { text: sum, params: null };
              const obj2 = {};
              const merged = Object.assign(closure_14.current);
              let dismissKeyboardResult = chatInputRef;
              obj2.chatInputRef = chatInputRef;
              obj.params = obj2;
              const result = ChatInputSendUtils.chatInputValidateContentLength(obj);
              if (null != result) {
                closure_1.cancel();
                if (null != threadCreationCallback) {
                  const items = [current2.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj8 = MessageActionCreatorsDefault;
                  const id = channel.id;
                  const items1 = [current2.id];
                  const obj3 = {};
                  const merged1 = Object.assign(
                    MessageActionCreatorsDefault.getSendMessageOptionsForReply(current.pendingReply),
                  );
                  obj3.location = MessageSendLocation.STICKER_REPLY;
                  scheduledMessage = DraftStore.getScheduledMessage(channel.id);
                  let scheduledTimestamp;
                  if (scheduledMessage != null) {
                    scheduledTimestamp = scheduledMessage.scheduledTimestamp;
                  }
                  obj3.scheduledTimestamp = scheduledTimestamp;
                  obj8.sendStickers(id, items1, result, obj3);
                  const current3 = dismissKeyboardResult.current;
                  if (current3 != null) {
                    const applicationCommandManager = current3.getApplicationCommandManager();
                    if (applicationCommandManager != null) {
                      const result2 = applicationCommandManager.clearTimestampMentions();
                    }
                  }
                  PendingReplyActionCreators.deletePendingReply(channel.id);
                  const tmp27Result2 = PendingReplyActionCreators;
                  DraftActionCreatorsDefault.saveDraft(channel.id, "", DraftType.ChannelMessage);
                  const current4 = dismissKeyboardResult.current;
                  if (current4 != null) {
                    current4.clearText();
                  }
                  const current5 = dismissKeyboardResult.current;
                  if (current5 != null) {
                    current5.showSideActions();
                  }
                  const tmp31Result = DraftActionCreatorsDefault;
                }
                current2 = dismissKeyboardResult.current;
                dismissKeyboardResult = current2.dismissKeyboard();
              }
              const tmp27Result = ChatInputSendUtils;
            }
            obj7 = StickersUtils;
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
        let selectionStart = tokenStart;
        if (null == tokenStart) {
          selectionStart = state.current.selectionStart;
        }
        if (selectionEnd == null) {
          selectionEnd = state.current.selectionEnd;
        }
        const current = chatInputRef.current;
        const obj = {
          location: selectionStart,
          length: Math.max(0, selectionEnd - selectionStart),
          text: null,
          nodes: null,
          editId: null,
        };
        let text = addTimestampMentionResult;
        if (flag) {
          text = `${addTimestampMentionResult} `;
        }
        obj.text = text;
        obj.nodes = items1;
        const editId = state.current.editId;
        obj.editId = editId;
        current.replaceRange(obj);
      },
      isFocused() {
        return state.current.focused;
      },
      openCustomKeyboard(keyboardParams) {
        ({ channel, secondaryTextFieldRef } = props.current);
        chatInputTextFieldHeight(ref[35])({
          channelId: channel.id,
          chatInputRef,
          chatInputNativeRef,
          keyboardParams,
          secondaryTextFieldRef,
        });
      },
      openSystemKeyboard() {
        const keyboardType = chatInputProps(ref[21]).getKeyboardType();
        let keyboardIsOpen = keyboardType === chatInputProps(ref[22]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          keyboardIsOpen = chatInputProps(ref[36]).getKeyboardIsOpen({ includeCustomKeyboard: false });
          const tmpResult = chatInputProps(ref[36]);
        }
        if (!keyboardIsOpen) {
          const obj2 = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
          chatInputProps(ref[23]).setKeyboardType(obj2);
          const tmpResult2 = chatInputProps(ref[23]);
          chatInputTextFieldHeight(ref[14]).openSystemKeyboard(chatInputNativeRef.current);
          const obj5 = chatInputTextFieldHeight(ref[14]);
        }
        const obj = chatInputProps(ref[21]);
      },
      replaceRange(arg0) {
        chatInputTextFieldHeight(ref[14]).replaceRange(chatInputNativeRef.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        chatInputTextFieldHeight(ref[14]).setSelectedRange(chatInputNativeRef.current, arg0, arg1);
      },
      setText(arg0) {
        chatInputTextFieldHeight(ref[14]).setText(chatInputNativeRef.current, arg0);
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
    return {
      chatInputRefObject: obj4,
      chatInputRefObjectCallback() {
        return obj4;
      },
    };
  }, items3);
  const chatInput = noop.useRef(memo.chatInputRefObject);
  const imperativeHandle = noop.useImperativeHandle(chatInputProps.ref, memo.chatInputRefObjectCallback);
  return noop.useMemo(
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
