// discord_app/modules/chat_input/native/useChatInputRefs.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../application_commands/ApplicationCommandStore.tsx";
import closure_5 from "../../stickers/StickersStore.tsx";
import closure_6 from "../../../stores/DraftStore.tsx";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_8 from "../../../stores/EditMessageStore.tsx";
import closure_9 from "../../../stores/SlowmodeStore.tsx";
import closure_10 from "../../../stores/UserStore.tsx";
import { updateChatInputContainerHeight as closure_11 } from "useChatBottomManagerUIStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { COMMAND_SENTINEL } from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/chat_input/native/useChatInputRefs.tsx");

export default function useChatInputRefs(chatInputProps) {
  chatInputProps = chatInputProps.chatInputProps;
  const chatInputTextFieldHeight = chatInputProps.chatInputTextFieldHeight;
  dependencyMap = undefined;
  let React;
  closure_4 = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  closure_16 = undefined;
  dependencyMap = React.useRef(null);
  React = React.useRef(null);
  closure_4 = React.useRef(null);
  closure_5 = React.useRef(null);
  closure_6 = React.useRef(null);
  closure_7 = React.useRef(null);
  closure_8 = React.useRef(null);
  closure_9 = React.useRef(null);
  closure_10 = React.useRef(new Map());
  const tmp2 = chatInputTextFieldHeight(5941)(() =>
    chatInputProps(4340).createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex),
  );
  closure_11 = tmp2;
  closure_12 = React.useRef(chatInputProps);
  closure_13 = React.useRef(chatInputProps);
  let items = [chatInputProps];
  const effect = React.useEffect(() => {
    if (ref.current.channel.id !== chatInputProps.channel.id) {
      const current = ref3.current;
      if (current != null) {
        const result = current.flushPendingDraftSave();
      }
    }
    closure_12.current = ref.current;
    ref.current = chatInputProps;
  }, items);
  let items1 = [chatInputProps.channel.id];
  const effect1 = React.useEffect(() => {
    ref2.current.handledHereMention = false;
  }, items1);
  const items2 = [tmp2, chatInputProps.channel.id];
  const effect2 = React.useEffect(() => {
    closure_11.handleRef(ref3.current, chatInputProps.channel.id);
    return () => {
      closure_11.handleRef(null, channel.channel.id);
    };
  }, items2);
  closure_14 = React.useRef(
    chatInputTextFieldHeight(5941)(() => ({
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
  closure_15 = React.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = React.useMemo(() => {
    let obj = chatInputTextFieldHeight(12);
    closure_0 = obj.throttle((arg0, arg1) => {
      lib(ref[14]).updateTextBlocks(editingMessage.current, arg0, arg1);
    }, 200);
    closure_1 = chatInputTextFieldHeight(12).throttle((result) => {
      const current = closure_13.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (result.length > 0) {
          if (!result.startsWith(closure_1_13)) {
            lib(ref[15]).startTyping(channel.id);
            obj = lib(ref[15]);
          }
          const current2 = ref2.current;
          let mentionGames;
          if (current2 != null) {
            const applicationCommandManager = current2.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              mentionGames = applicationCommandManager.getMentionGames();
            }
          }
          if (null != mentionGames) {
            if (mentionGames.size > 0) {
              result = callback(ref[16]).serializeComposerGameMentions(result, mentionGames);
              const obj4 = callback(ref[16]);
            }
          }
          const toDraftCommandResult = callback(ref[17]).toDraftCommand(
            closure_1_4.getActiveCommand(channel.id),
            result,
          );
          if (null == tmp) {
            if (!ref3.current.handledHereMention) {
              const obj7 = callback(ref[18]);
              if (
                obj7.tryUpdateSubscriptionForHereMention(
                  result,
                  obj8.getMaxMessageLength(),
                  channel.guild_id,
                  channel.id,
                )
              ) {
                tmp25.current.handledHereMention = true;
              }
              obj8 = callback(ref[19]);
            }
            const obj9 = lib(ref[20]);
            obj9.saveDraft(channel.id, result, closure_1_7.ChannelMessage, toDraftCommandResult);
          } else {
            const obj6 = lib(ref[20]);
            obj6.saveDraft(channel.id, result, closure_1_7.FirstThreadMessage, toDraftCommandResult);
          }
          const obj5 = callback(ref[17]);
        }
        lib(ref[15]).stopTyping(channel.id);
        const obj2 = lib(ref[15]);
      }
    }, 500);
    let obj2 = chatInputTextFieldHeight(12);
    dependencyMap = chatInputTextFieldHeight(12).debounce((arg0) => {
      closure_1_11(closure_13.current.screenIndex, arg0);
    }, 32);
    obj = {
      backspace() {
        lib(ref[14]).backspace(editingMessage.current);
      },
      blur() {
        lib(ref[14]).blur(editingMessage.current);
      },
      chatInputTrackerRegister() {
        closure_11.register();
      },
      chatInputTrackerUnregister() {
        closure_11.unregister();
      },
      clearText() {
        const current = closure_16.current;
        if (current != null) {
          current.setText("");
        }
      },
      closeCustomKeyboard() {
        obj = callback(ref[21]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== callback(ref[22]).KeyboardTypes.SYSTEM) {
          let tmpResult = tmp(tmp2[23]);
          obj = { type: null };
          obj[0] = tmp(tmp2[22]).KeyboardTypes.SYSTEM;
          tmpResult.setKeyboardType(obj);
        }
        tmpResult = tmp(tmp2[24]);
        if (!tmpResult.isAndroid()) {
          lib(tmp2[14]).closeCustomKeyboard(editingMessage.current);
          const obj5 = lib(tmp2[14]);
        }
        const result = callback(ref[25]).closePortalKeyboardRequest();
      },
      dismissKeyboard() {
        const result = callback(ref[26]).dismissGlobalKeyboard();
        const current = closure_16.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        lib.flush();
      },
      focus() {
        lib(ref[14]).focus(editingMessage.current);
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
        return closure_14.current.text;
      },
      handleCancelEditing() {
        const channel = closure_1_13.current.channel;
        lib.cancel();
        editingMessage = editingMessage.getEditingMessage(channel.id);
        if (null != editingMessage) {
          obj = {
            message_id: null,
            channel_id: null,
            guild_id: null,
            context_action: "edit",
            reason: null,
            is_own_message: null,
          };
          obj[0] = editingMessage.id;
          ({ id: obj3[1], guild_id: obj3[2] } = channel);
          const obj2 = chatInputTextFieldHeight(ref[27]);
          const tmp6 = chatInputTextFieldHeight;
          const tmp7 = ref;
          obj[4] = chatInputProps(ref[28]).getContextBarCancelReason("edit", "cancel");
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          obj[5] = id === editingMessage.author.id;
          obj2.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          const obj4 = chatInputProps(ref[28]);
          tmp6(tmp7[29]).endEditMessage(channel.id);
          const tmp6Result = tmp6(tmp7[29]);
        }
      },
      handlePressKey(arg0) {
        const current = closure_13.current;
        ({ pendingEdit, channel } = current);
        if ("\r" === arg0) {
          const current3 = closure_16.current;
          let str2;
          if (current3 != null) {
            str2 = current3.getText();
          }
          if (str2 == null) {
            str2 = "";
          }
          if (str2.trim().length > 0) {
            if (null != pendingEdit) {
              const current5 = tmp4.current;
              if (current5 != null) {
                current5.handleSaveEditing();
              }
            }
          }
          if (!tmp) {
            const current4 = tmp4.current;
            if (current4 != null) {
              current4.handleSend();
            }
          }
        } else if ("UIKeyInputEscape" === arg0) {
          if (null != pendingEdit) {
            const current2 = closure_16.current;
            if (current2 != null) {
              current2.handleCancelEditing();
            }
          } else if (null != current.pendingReply) {
            callback(ref[30]).deletePendingReply(channel.id);
            obj = callback(ref[30]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = closure_1_13.current.channel;
          lib.cancel();
          obj = closure_2_8;
          const editingMessage = closure_2_8.getEditingMessage(channel.id);
          if (null != editingMessage) {
            obj = { channel: null, isEdit: true };
            obj[0] = channel;
            const handleLegacyCommandsResult = callback(table[31]).handleLegacyCommands(text, obj);
            let content;
            if (handleLegacyCommandsResult != null) {
              content = handleLegacyCommandsResult.content;
            }
            content = text;
            if (null != content) {
              content = handleLegacyCommandsResult.content;
            }
            if (content !== obj.getEditingTextValue(channel.id)) {
              const current2 = closure_1_16.current;
              let mentionGames;
              if (current2 != null) {
                const applicationCommandManager = current2.getApplicationCommandManager();
                if (applicationCommandManager != null) {
                  mentionGames = applicationCommandManager.getMentionGames();
                }
              }
              const obj3 = lib(tmp18[32]);
              const parsed = obj3.parse(channel, content, undefined, mentionGames);
              if (parsed.content !== editingMessage.content) {
                tmp5(tmp18[29]).editMessage(channel.id, editingMessage.id, parsed);
                const tmp5Result = tmp5(tmp18[29]);
              }
              tmp5 = lib;
            }
            const obj6 = callback(table[31]);
            lib(table[29]).endEditMessage(channel.id);
            const current = closure_1_16.current;
            if (current != null) {
              current.showSideActions();
            }
            const obj5 = lib(table[29]);
          }
        }
        if (null == text) {
          text = chatInputTextFieldHeight(ref[14]).getText(
            closure_1_8.current,
            closure_1_10.current,
            handleSaveEditing,
          );
          obj = chatInputTextFieldHeight(ref[14]);
        } else {
          handleSaveEditing(text);
        }
      },
      handleSend() {
        if (!closure_1_15.current.sending) {
          tmp.current.sending = true;
          threadCreationCallback.cancel();
          threadCreationCallback = closure_1_13.current.threadCreationCallback;
          if (null != threadCreationCallback) {
            const text = chatInputTextFieldHeight(ref[14]).getText(
              closure_1_8.current,
              closure_1_10.current,
              (text) => {
                obj = chatInputProps(11569);
                obj = { text, params: null };
                obj = {};
                const merged = Object.assign(closure_2_13.current);
                obj.chatInputRef = closure_2_16;
                obj[1] = obj;
                const result = obj.chatInputValidateContentLength(obj);
                if (null != result) {
                  obj1 = { text: null, threadCreationCallback: null };
                  obj1[0] = result.content;
                  obj1[1] = threadCreationCallback;
                  const result1 = chatInputProps(11569).chatInputCreateThread(obj1);
                  const tmpResult = chatInputProps(11569);
                }
              },
            );
            tmp.current.sending = false;
          } else {
            let current = closure_1_16.current;
            const applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (applicationCommandManager != null) {
              sendCommandResult = applicationCommandManager.sendCommand(
                closure_1_14.current.text,
                tmp4.current.channel,
                (command, optionValues) => {
                  obj = threadCreationCallback(closure_1_2[33]);
                  obj = { applicationCommand: obj, params: null };
                  obj = { command, optionValues };
                  obj1 = {};
                  const merged = Object.assign(ref.current);
                  obj1.chatInputRef = closure_16;
                  obj[1] = obj1;
                  const result = obj.chatInputSendApplicationCommand(obj);
                },
              );
            }
            if (!sendCommandResult) {
              const text1 = chatInputTextFieldHeight(ref[14]).getText(
                closure_1_8.current,
                closure_1_10.current,
                (arg0) => {
                  if (null != closure_1_13.current.pendingEdit) {
                    closure_1.cancel();
                    const current = closure_1_16.current;
                    let tmp8 = closure_1_16;
                    if (current != null) {
                      current.handleSaveEditing(arg0);
                      tmp8 = tmp12;
                    }
                  } else {
                    closure_1.cancel();
                    obj = threadCreationCallback(11569);
                    obj = { text: null, params: null };
                    obj[0] = arg0;
                    obj = {};
                    const merged = Object.assign(tmp.current);
                    tmp8 = closure_1_16;
                    obj.chatInputRef = closure_1_16;
                    obj[1] = obj;
                    const result = obj.chatInputHandleSendText(obj);
                  }
                  const keyboardType = threadCreationCallback(4342).getKeyboardType();
                  if (keyboardType === threadCreationCallback(1626).KeyboardTypes.SYSTEM) {
                    const current2 = tmp8.current;
                    current2.focus();
                  }
                },
              );
              obj = chatInputTextFieldHeight(ref[14]);
            }
            tmp.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        url = url.url;
        const current = closure_13.current;
        ({ channel, threadCreationCallback } = current);
        let isChannelOnCooldownResult = closure_1_9.isChannelOnCooldown(channel);
        if (!isChannelOnCooldownResult) {
          isChannelOnCooldownResult = 0 === url.length;
        }
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            const obj2 = lib(ref[29]);
            const id = channel.id;
            const parsed = lib(ref[32]).parse(channel, url);
            obj = {};
            const obj3 = lib(ref[32]);
            const tmp15 = ref;
            const merged = Object.assign(lib(ref[29]).getSendMessageOptionsForReply(current.pendingReply));
            obj.location = closure_1_14.GIF_REPLY;
            const scheduledMessage = closure_1_6.getScheduledMessage(channel.id);
            let scheduledTimestamp;
            if (scheduledMessage != null) {
              scheduledTimestamp = scheduledMessage.scheduledTimestamp;
            }
            obj.scheduledTimestamp = scheduledTimestamp;
            obj2.sendMessage(id, parsed, true, obj);
            obj = callback(tmp15[30]);
            obj.deletePendingReply(channel.id);
            const obj5 = lib(ref[29]);
          }
          closure_16.current.dismissKeyboard();
        }
      },
      handleSelectSticker(sticker, tokenStart) {
        const current = closure_1_13.current;
        ({ channel, threadCreationCallback } = current);
        if (!channelOnCooldown.isChannelOnCooldown(channel)) {
          let current2 = sticker;
          if (null != sticker) {
            if (!obj6.isStandardSticker(current2)) {
              const text = closure_1_14.current.text;
              let sum = text;
              if (null != tokenStart) {
                const substr = text.slice(0, tokenStart);
                sum = substr + text.slice(tmp6);
              }
              let tmp26Result = tmp26(tmp27[33]);
              obj = { text: null, params: null };
              obj[0] = sum;
              obj = {};
              const merged = Object.assign(closure_1_13.current);
              let dismissKeyboardResult = closure_1_16;
              obj.chatInputRef = closure_1_16;
              obj[1] = obj;
              const result = tmp26Result.chatInputValidateContentLength(obj);
              if (null != result) {
                lib.cancel();
                if (null != threadCreationCallback) {
                  const items = [current2.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj7 = chatInputTextFieldHeight(tmp27[29]);
                  const id = channel.id;
                  const items1 = [current2.id];
                  obj1 = {};
                  const merged1 = Object.assign(
                    chatInputTextFieldHeight(tmp27[29]).getSendMessageOptionsForReply(current.pendingReply),
                  );
                  obj1.location = closure_14.STICKER_REPLY;
                  scheduledMessage = scheduledMessage.getScheduledMessage(channel.id);
                  let scheduledTimestamp;
                  if (scheduledMessage != null) {
                    scheduledTimestamp = scheduledMessage.scheduledTimestamp;
                  }
                  obj1.scheduledTimestamp = scheduledTimestamp;
                  obj7.sendStickers(id, items1, result, obj1);
                  tmp26Result = tmp26(tmp27[30]);
                  tmp26Result.deletePendingReply(channel.id);
                  const obj9 = chatInputTextFieldHeight(tmp27[29]);
                  const tmp30 = chatInputTextFieldHeight;
                  chatInputTextFieldHeight(tmp27[20]).saveDraft(channel.id, "", ChannelMessage.ChannelMessage);
                  const current3 = dismissKeyboardResult.current;
                  if (current3 != null) {
                    current3.clearText();
                  }
                  const current4 = dismissKeyboardResult.current;
                  if (current4 != null) {
                    current4.showSideActions();
                  }
                  const tmp30Result = chatInputTextFieldHeight(tmp27[20]);
                }
                current2 = dismissKeyboardResult.current;
                dismissKeyboardResult = current2.dismissKeyboard();
              }
            }
            obj6 = chatInputProps(ref[34]);
          }
        }
      },
      hideSideActions() {
        const current = ref.current;
        if (current != null) {
          current.onDismissActions(closure_14.current.focused);
        }
        const current2 = obj.current;
        if (current2 != null) {
          current2.onDismissActions(closure_14.current.focused);
        }
      },
      handleTextChanged(text) {
        lib(text);
      },
      insertText(c22, tokenStart, arg2, arg3, arg4) {
        let selectionStart = tokenStart;
        if (null == tokenStart) {
          selectionStart = closure_14.current.selectionStart;
        }
        let selectionEnd = arg4;
        if (arg4 == null) {
          selectionEnd = closure_14.current.selectionEnd;
        }
        const current = closure_16.current;
        obj = {
          location: selectionStart,
          length: Math.max(0, selectionEnd - selectionStart),
          text: null,
          nodes: null,
          editId: null,
        };
        let text = c22;
        if (arg2) {
          text = `${c22} `;
        }
        obj[2] = text;
        obj[3] = arg3;
        const editId = closure_14.current.editId;
        obj[4] = editId;
        current.replaceRange(obj);
      },
      isFocused() {
        return closure_14.current.focused;
      },
      openCustomKeyboard(keyboardParams) {
        ({ channel, secondaryTextFieldRef } = closure_13.current);
        lib(ref[35])({
          channelId: channel.id,
          chatInputRef: closure_16,
          chatInputNativeRef: closure_8,
          keyboardParams,
          secondaryTextFieldRef,
        });
      },
      openSystemKeyboard() {
        obj = callback(ref[21]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === callback(ref[22]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          let tmpResult = tmp(tmp2[36]);
          keyboardIsOpen = tmpResult.getKeyboardIsOpen({ includeCustomKeyboard: false });
        }
        if (!keyboardIsOpen) {
          tmpResult = tmp(tmp2[23]);
          obj = { type: null, context: null };
          obj[0] = tmp(tmp2[22]).KeyboardTypes.SYSTEM;
          obj[1] = { keyboardWillOpen: true };
          tmpResult.setKeyboardType(obj);
          lib(tmp2[14]).openSystemKeyboard(editingMessage.current);
          const obj5 = lib(tmp2[14]);
        }
      },
      replaceRange(arg0) {
        lib(ref[14]).replaceRange(editingMessage.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        lib(ref[14]).setSelectedRange(editingMessage.current, arg0, arg1);
      },
      setText(arg0) {
        lib(ref[14]).setText(editingMessage.current, arg0);
      },
      showSideActions() {
        const current = ref.current;
        if (current != null) {
          current.onShowActions(closure_14.current.focused);
        }
        const current2 = obj.current;
        if (current2 != null) {
          current2.onShowActions(closure_14.current.focused);
        }
      },
      updateNativeTextBlocksThrottled(chatInputNodes, editId) {
        callback(chatInputNodes, editId);
      },
      updateChatInputContainerHeightDebounced(height) {
        ref(height);
      },
    };
    obj = {
      chatInputRefObject: obj,
      chatInputRefObjectCallback() {
        return obj;
      },
    };
    return obj;
  }, items3);
  closure_16 = React.useRef(memo.chatInputRefObject);
  const imperativeHandle = React.useImperativeHandle(chatInputProps.ref, memo.chatInputRefObjectCallback);
  return React.useMemo(
    () => ({
      chatInput: closure_16,
      chatInputCharCounter: closure_6,
      chatInputCover: closure_7,
      chatInputActions: closure_2,
      chatInputRightActions: closure_3,
      chatInputAutocomplete: closure_5,
      chatInputAppCommandManager: closure_4,
      chatInputNative: closure_8,
      chatInputSendButton: closure_9,
      chatInputTextFlushedResponses: closure_10,
      props: closure_13,
      propsPrev: closure_12,
      state: closure_14,
    }),
    [],
  );
}
