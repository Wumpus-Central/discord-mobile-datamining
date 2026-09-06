// === Module 11987: useChatInputRefs ===

// Module 11987 (useChatInputRefs)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7777 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11667 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11669 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11988 */;
import ChatInputSendUtils from "ChatInputSendUtils" /* 11997 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7780 */;
import StickersStore from "StickersStore" /* 5502 */;
import DraftStore from "DraftStore" /* 4901 */;
import EditMessageStore from "EditMessageStore" /* 7681 */;
import SlowmodeStore from "SlowmodeStore" /* 7687 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const DraftType = fn(4901).DraftType;
let closure_11 = fn(9485).updateChatInputContainerHeight;
const AnalyticEvents = fn(1074).AnalyticEvents;
const COMMAND_SENTINEL = fn(5000).COMMAND_SENTINEL;
const MessageSendLocation = fn(4553).MessageSendLocation;
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
  const tmp2 = chatInputTextFieldHeight(5598)(() => ChatInputUtils.createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex));
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
  const state = noop.useRef(chatInputTextFieldHeight(5598)(() => ({ editId: null, focused: false, selectionStart: 0, selectionEnd: 0, text: chatInputProps.defaultValue, textPrev: chatInputProps.defaultValue, textFieldContentSize: 0, textFieldHeight: chatInputTextFieldHeight })));
  noop.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = noop.useMemo(() => {
    let chatInputRefObject = chatInputTextFieldHeight(chatInputActions[13]);
    closure_0 = chatInputRefObject.throttle((arg0, arg1) => {
      chatInputTextFieldHeight(ref[14]).updateTextBlocks(chatInputNativeRef.current, arg0, arg1);
    }, 200);
    closure_1 = chatInputTextFieldHeight(chatInputActions[13]).throttle((text) => {
      const current = props.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (text.length > 0) {
          if (!text.startsWith(closure_13)) {
            chatInputTextFieldHeight(ref[15]).startTyping(channel.id);
            obj = chatInputTextFieldHeight(ref[15]);
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
            const obj4 = chatInputProps(ref[16]);
          }
          const toDraftCommandResult = chatInputProps(ref[17]).toDraftCommand(ref2.getActiveCommand(channel.id), result1);
          if (null == tmp) {
            if (!ref4.current.handledHereMention) {
              const obj7 = chatInputProps(ref[18]);
              if (obj7.tryUpdateSubscriptionForHereMention(text, obj8.getMaxMessageLength(), channel.guild_id, channel.id)) {
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
    chatInputRefObject = {
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
        obj = chatInputProps(ref[21]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== chatInputProps(ref[22]).KeyboardTypes.SYSTEM) {
          let tmpResult = chatInputProps(ref[23]);
          obj = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM };
          tmpResult.setKeyboardType(obj);
        }
        tmpResult = chatInputProps(ref[24]);
        if (!tmpResult.isAndroid()) {
          chatInputTextFieldHeight(ref[14]).closeCustomKeyboard(chatInputNativeRef.current);
          const obj5 = chatInputTextFieldHeight(ref[14]);
        }
        const result = chatInputProps(ref[25]).closePortalKeyboardRequest();
        const tmpResult1 = chatInputProps(ref[25]);
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
          obj = { message_id: editingMessage.id, channel_id: null, guild_id: null, context_action: "edit", reason: null, is_own_message: null };
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
            obj = chatInputProps(ref[30]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = props.current.channel;
          closure_1_1.cancel();
          obj = editingMessage;
          editingMessage = editingMessage.getEditingMessage(channel.id);
          if (null != editingMessage) {
            obj = { channel, isEdit: true };
            const handleLegacyCommandsResult = chatInputProps(dependencyMap[31]).handleLegacyCommands(text, obj);
            let content;
            if (handleLegacyCommandsResult != null) {
              content = handleLegacyCommandsResult.content;
            }
            content = text;
            if (null != content) {
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
                  result = chatInputProps(dependencyMap[16]).serializeComposerTimestampMentions(content, mentionTimestamps);
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
              let params = { text, params: null };
              params = {};
              const merged = Object.assign(ref.current);
              params.chatInputRef = chatInputRef;
              params.params = params;
              const result = params.chatInputValidateContentLength(params);
              if (null != result) {
                const obj1 = { text: result.content, threadCreationCallback };
                const result1 = ChatInputSendUtils.chatInputCreateThread(obj1);
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
            const obj2 = chatInputTextFieldHeight(ref[14]);
          } else {
            let current = chatInputRef.current;
            let applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (applicationCommandManager != null) {
              sendCommandResult = applicationCommandManager.sendCommand(state.current.text, tmp4.current.channel, (command, optionValues) => {
                threadCreationCallback(11997);
                let applicationCommand = { applicationCommand: null, params: null };
                applicationCommand = { command, optionValues };
                applicationCommand.applicationCommand = applicationCommand;
                const obj1 = {};
                const merged = Object.assign(ref.current);
                obj1.chatInputRef = chatInputRef;
                applicationCommand.params = obj1;
                const result = applicationCommand.chatInputSendApplicationCommand(applicationCommand);
              });
            }
            if (!sendCommandResult) {
              const text1 = chatInputTextFieldHeight(ref[14]).getText(chatInputNativeRef.current, ref3.current, (text) => {
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
                  chatInputProps(11997);
                  let params = { text, params: null };
                  params = {};
                  const merged = Object.assign(tmp.current);
                  tmp8 = chatInputRef;
                  params.chatInputRef = chatInputRef;
                  params.params = params;
                  const result = params.chatInputHandleSendText(params);
                }
                const keyboardType = chatInputProps(4427).getKeyboardType();
                if (keyboardType === chatInputProps(1609).KeyboardTypes.SYSTEM) {
                  const current2 = tmp8.current;
                  current2.focus();
                }
                const obj4 = chatInputProps(4427);
              });
              obj = chatInputTextFieldHeight(ref[14]);
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
            obj = {};
            const obj3 = chatInputTextFieldHeight(ref[32]);
            const merged = Object.assign(chatInputTextFieldHeight(ref[29]).getSendMessageOptionsForReply(current.pendingReply));
            obj.location = closure_14.GIF_REPLY;
            scheduledMessage = scheduledMessage.getScheduledMessage(channel.id);
            let scheduledTimestamp;
            if (scheduledMessage != null) {
              scheduledTimestamp = scheduledMessage.scheduledTimestamp;
            }
            obj.scheduledTimestamp = scheduledTimestamp;
            obj2.sendMessage(id, parsed, true, obj);
            obj = chatInputProps(ref[30]);
            obj.deletePendingReply(channel.id);
            const obj5 = chatInputTextFieldHeight(ref[29]);
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
              let tmp27Result = ChatInputSendUtils;
              let params = { text: sum, params: null };
              params = {};
              const merged = Object.assign(closure_14.current);
              let dismissKeyboardResult = chatInputRef;
              params.chatInputRef = chatInputRef;
              params.params = params;
              const result = tmp27Result.chatInputValidateContentLength(params);
              if (null != result) {
                closure_1.cancel();
                if (null != threadCreationCallback) {
                  const items = [current2.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj8 = MessageActionCreatorsDefault;
                  const id = channel.id;
                  const items1 = [current2.id];
                  const obj1 = {};
                  const merged1 = Object.assign(MessageActionCreatorsDefault.getSendMessageOptionsForReply(current.pendingReply));
                  obj1.location = MessageSendLocation.STICKER_REPLY;
                  scheduledMessage = DraftStore.getScheduledMessage(channel.id);
                  let scheduledTimestamp;
                  if (scheduledMessage != null) {
                    scheduledTimestamp = scheduledMessage.scheduledTimestamp;
                  }
                  obj1.scheduledTimestamp = scheduledTimestamp;
                  obj8.sendStickers(id, items1, result, obj1);
                  const current3 = dismissKeyboardResult.current;
                  if (current3 != null) {
                    const applicationCommandManager = current3.getApplicationCommandManager();
                    if (applicationCommandManager != null) {
                      const result2 = applicationCommandManager.clearTimestampMentions();
                    }
                  }
                  tmp27Result = PendingReplyActionCreators;
                  tmp27Result.deletePendingReply(channel.id);
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
        const current2 = obj.current;
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
        obj = { location: selectionStart, length: Math.max(0, selectionEnd - selectionStart), text: null, nodes: null, editId: null };
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
        chatInputTextFieldHeight(ref[35])({ channelId: channel.id, chatInputRef, chatInputNativeRef, keyboardParams, secondaryTextFieldRef });
      },
      openSystemKeyboard() {
        obj = chatInputProps(ref[21]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === chatInputProps(ref[22]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          let tmpResult = chatInputProps(ref[36]);
          keyboardIsOpen = tmpResult.getKeyboardIsOpen({ includeCustomKeyboard: false });
        }
        if (!keyboardIsOpen) {
          tmpResult = chatInputProps(ref[23]);
          obj = { type: chatInputProps(ref[22]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
          tmpResult.setKeyboardType(obj);
          chatInputTextFieldHeight(ref[14]).openSystemKeyboard(chatInputNativeRef.current);
          const obj5 = chatInputTextFieldHeight(ref[14]);
        }
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
        const current2 = obj.current;
        if (current2 != null) {
          current2.onShowActions(state.current.focused);
        }
      },
      updateNativeTextBlocksThrottled(chatInputNodes, editId) {
        closure_0(chatInputNodes, editId);
      },
      updateChatInputContainerHeightDebounced(height) {
        ref(height);
      }
    };
    chatInputRefObject = {
      chatInputRefObject,
      chatInputRefObjectCallback() {
        return obj;
      }
    };
    return chatInputRefObject;
  }, items3);
  const chatInput = noop.useRef(memo.chatInputRefObject);
  const imperativeHandle = noop.useImperativeHandle(chatInputProps.ref, memo.chatInputRefObjectCallback);
  return noop.useMemo(() => ({ chatInput, chatInputCharCounter, chatInputCover, chatInputActions, chatInputRightActions, chatInputAutocomplete, chatInputEmojiSuggestions, chatInputAppCommandManager, chatInputNative, chatInputSendButton, chatInputTextFlushedResponses, props, propsPrev, state }), []);
};