// discord_app/modules/chat_input/native/useChatInputRefs.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "loadSavedGuildStickers" /* 6769 */;
import { DraftType } from "handleChanged" /* 4825 */;
import closure_6 from "initialize" /* 7435 */;
import closure_7 from "setCooldown" /* 7440 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { updateChatInputContainerHeight as closure_9 } from "updateChatInputContainerHeight" /* 8682 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { COMMAND_SENTINEL } from "regExp" /* 6810 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4663 */;

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
  const tmp2 = chatInputTextFieldHeight(7127)(() => chatInputProps(4237).createInputRefTracker(chatInputProps.channel.id, chatInputProps.screenIndex));
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
  closure_14 = React.useRef(chatInputTextFieldHeight(7127)(() => ({ editId: null, focused: false, selectionStart: 0, selectionEnd: 0, text: chatInputProps.defaultValue, textPrev: chatInputProps.defaultValue, textFieldContentSize: 0, textFieldHeight: chatInputTextFieldHeight })));
  closure_15 = React.useRef({ handledHereMention: false, sending: false });
  const items3 = [tmp2];
  const memo = React.useMemo(() => {
    let obj = chatInputTextFieldHeight(12);
    closure_0 = obj.throttle((arg0, arg1) => {
      lib(ref[13]).updateTextBlocks(currentUser.current, arg0, arg1);
    }, 200);
    closure_1 = chatInputTextFieldHeight(12).throttle((result) => {
      const current = closure_13.current;
      const channel = current.channel;
      if (null == current.pendingEdit) {
        if (result.length > 0) {
          if (!result.startsWith(closure_1_11)) {
            lib(ref[14]).startTyping(channel.id);
            obj = lib(ref[14]);
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
              result = callback(ref[15]).serializeComposerGameMentions(result, mentionGames);
              const obj4 = callback(ref[15]);
            }
          }
          if (null == tmp) {
            if (!ref3.current.handledHereMention) {
              const obj6 = callback(ref[16]);
              if (obj6.tryUpdateSubscriptionForHereMention(result, obj7.getMaxMessageLength(), channel.guild_id, channel.id)) {
                tmp18.current.handledHereMention = true;
              }
              obj7 = callback(ref[17]);
            }
            lib(ref[18]).saveDraft(channel.id, result, closure_1_5.ChannelMessage);
            const obj8 = lib(ref[18]);
          } else {
            lib(ref[18]).saveDraft(channel.id, result, closure_1_5.FirstThreadMessage);
            const obj5 = lib(ref[18]);
          }
        }
        lib(ref[14]).stopTyping(channel.id);
        const obj2 = lib(ref[14]);
      }
    }, 500);
    let obj2 = chatInputTextFieldHeight(12);
    dependencyMap = chatInputTextFieldHeight(12).debounce((arg0) => {
      closure_1_9(closure_13.current.screenIndex, arg0);
    }, 32);
    obj = {
      backspace() {
        lib(ref[13]).backspace(currentUser.current);
      },
      blur() {
        lib(ref[13]).blur(currentUser.current);
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
        obj = callback(ref[19]);
        const keyboardType = obj.getKeyboardType();
        if (keyboardType !== callback(ref[20]).KeyboardTypes.SYSTEM) {
          let tmpResult = tmp(tmp2[21]);
          obj = { type: null };
          obj[0] = tmp(tmp2[20]).KeyboardTypes.SYSTEM;
          tmpResult.setKeyboardType(obj);
        }
        tmpResult = tmp(tmp2[22]);
        if (!tmpResult.isAndroid()) {
          lib(tmp2[13]).closeCustomKeyboard(currentUser.current);
          const obj5 = lib(tmp2[13]);
        }
        const result = callback(ref[23]).closePortalKeyboardRequest();
      },
      dismissKeyboard() {
        const result = callback(ref[24]).dismissGlobalKeyboard();
        const current = closure_16.current;
        if (current != null) {
          current.closeCustomKeyboard();
        }
      },
      flushPendingDraftSave() {
        lib.flush();
      },
      focus() {
        lib(ref[13]).focus(currentUser.current);
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
          obj = { message_id: null, channel_id: null, guild_id: null, context_action: "edit", reason: null, is_own_message: null };
          obj[0] = editingMessage.id;
          ({ id: obj3[1], guild_id: obj3[2] } = channel);
          const obj2 = chatInputTextFieldHeight(ref[25]);
          const tmp6 = chatInputTextFieldHeight;
          const tmp7 = ref;
          obj[4] = chatInputProps(ref[26]).getContextBarCancelReason("edit", "cancel");
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          obj[5] = id === editingMessage.author.id;
          obj2.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          const obj4 = chatInputProps(ref[26]);
          tmp6(tmp7[27]).endEditMessage(channel.id);
          const tmp6Result = tmp6(tmp7[27]);
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
            callback(ref[28]).deletePendingReply(channel.id);
            obj = callback(ref[28]);
          }
        }
      },
      handleSaveEditing(text) {
        function handleSaveEditing(text) {
          const channel = closure_1_13.current.channel;
          lib.cancel();
          obj = closure_2_6;
          const editingMessage = closure_2_6.getEditingMessage(channel.id);
          if (null != editingMessage) {
            obj = { channel: null, isEdit: true };
            obj[0] = channel;
            const handleLegacyCommandsResult = callback(table[29]).handleLegacyCommands(text, obj);
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
              const obj3 = lib(tmp18[30]);
              const parsed = obj3.parse(channel, content, undefined, mentionGames);
              if (parsed.content !== editingMessage.content) {
                tmp5(tmp18[27]).editMessage(channel.id, editingMessage.id, parsed);
                const tmp5Result = tmp5(tmp18[27]);
              }
              tmp5 = lib;
            }
            const obj6 = callback(table[29]);
            lib(table[27]).endEditMessage(channel.id);
            const current = closure_1_16.current;
            if (current != null) {
              current.showSideActions();
            }
            const obj5 = lib(table[27]);
          }
        }
        if (null == text) {
          text = chatInputTextFieldHeight(ref[13]).getText(closure_1_8.current, closure_1_10.current, handleSaveEditing);
          obj = chatInputTextFieldHeight(ref[13]);
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
            const text = chatInputTextFieldHeight(ref[13]).getText(closure_1_8.current, closure_1_10.current, (text) => {
              obj = chatInputProps(11168);
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
                const result1 = chatInputProps(11168).chatInputCreateThread(obj1);
                const tmpResult = chatInputProps(11168);
              }
            });
            tmp.current.sending = false;
          } else {
            let current = closure_1_16.current;
            const applicationCommandManager = current.getApplicationCommandManager();
            let sendCommandResult;
            if (applicationCommandManager != null) {
              sendCommandResult = applicationCommandManager.sendCommand(closure_1_14.current.text, tmp4.current.channel, (command, optionValues) => {
                obj = threadCreationCallback(closure_1_2[31]);
                obj = { applicationCommand: obj, params: null };
                obj = { command, optionValues };
                obj1 = {};
                const merged = Object.assign(ref.current);
                obj1.chatInputRef = closure_16;
                obj[1] = obj1;
                const result = obj.chatInputSendApplicationCommand(obj);
              });
            }
            if (!sendCommandResult) {
              const text1 = chatInputTextFieldHeight(ref[13]).getText(closure_1_8.current, closure_1_10.current, (arg0) => {
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
                  obj = threadCreationCallback(11168);
                  obj = { text: null, params: null };
                  obj[0] = arg0;
                  obj = {};
                  const merged = Object.assign(tmp.current);
                  tmp8 = closure_1_16;
                  obj.chatInputRef = closure_1_16;
                  obj[1] = obj;
                  const result = obj.chatInputHandleSendText(obj);
                }
                const keyboardType = threadCreationCallback(4239).getKeyboardType();
                if (keyboardType === threadCreationCallback(1627).KeyboardTypes.SYSTEM) {
                  const current2 = tmp8.current;
                  current2.focus();
                }
              });
              obj = chatInputTextFieldHeight(ref[13]);
            }
            tmp.current.sending = false;
          }
        }
      },
      handleSelectGIF(url) {
        url = url.url;
        const current = closure_13.current;
        ({ channel, threadCreationCallback } = current);
        let isChannelOnCooldownResult = closure_1_7.isChannelOnCooldown(channel);
        if (!isChannelOnCooldownResult) {
          isChannelOnCooldownResult = 0 === url.length;
        }
        if (!isChannelOnCooldownResult) {
          if (null != threadCreationCallback) {
            const result = threadCreationCallback(url);
          } else {
            obj = lib(ref[27]);
            const id = channel.id;
            const parsed = lib(ref[30]).parse(channel, url);
            obj = {};
            const obj2 = lib(ref[30]);
            const merged = Object.assign(lib(ref[27]).getSendMessageOptionsForReply(current.pendingReply));
            obj.location = closure_1_12.GIF_REPLY;
            obj.sendMessage(id, parsed, true, obj);
            const obj4 = lib(ref[27]);
            callback(ref[28]).deletePendingReply(channel.id);
            const obj5 = callback(ref[28]);
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
            if (!obj4.isStandardSticker(current2)) {
              const text = closure_1_14.current.text;
              let sum = text;
              if (null != tokenStart) {
                const substr = text.slice(0, tokenStart);
                sum = substr + text.slice(tmp6);
              }
              let tmp16Result = tmp16(tmp17[31]);
              obj = { text: null, params: null };
              obj[0] = sum;
              obj = {};
              const merged = Object.assign(closure_1_13.current);
              let dismissKeyboardResult = closure_1_16;
              obj.chatInputRef = closure_1_16;
              obj[1] = obj;
              const result = tmp16Result.chatInputValidateContentLength(obj);
              if (null != result) {
                lib.cancel();
                if (null != threadCreationCallback) {
                  const items = [current2.id];
                  const result1 = threadCreationCallback(sum, items);
                } else {
                  const obj5 = chatInputTextFieldHeight(tmp17[27]);
                  const id = channel.id;
                  const items1 = [current2.id];
                  obj1 = {};
                  const merged1 = Object.assign(chatInputTextFieldHeight(tmp17[27]).getSendMessageOptionsForReply(current.pendingReply));
                  obj1.location = constants2.STICKER_REPLY;
                  obj5.sendStickers(id, items1, result, obj1);
                  tmp16Result = tmp16(tmp17[28]);
                  tmp16Result.deletePendingReply(channel.id);
                  const obj7 = chatInputTextFieldHeight(tmp17[27]);
                  chatInputTextFieldHeight(tmp17[18]).saveDraft(channel.id, "", ChannelMessage.ChannelMessage);
                  const current4 = dismissKeyboardResult.current;
                  if (current4 != null) {
                    current4.clearText();
                  }
                  const current3 = dismissKeyboardResult.current;
                  if (current3 != null) {
                    current3.showSideActions();
                  }
                  const obj9 = chatInputTextFieldHeight(tmp17[18]);
                }
                current2 = dismissKeyboardResult.current;
                dismissKeyboardResult = current2.dismissKeyboard();
              }
            }
            obj4 = chatInputProps(ref[32]);
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
      insertText(focused, tokenStart, flag, arg3, arg4) {
        let selectionStart = tokenStart;
        if (null == tokenStart) {
          selectionStart = closure_14.current.selectionStart;
        }
        let selectionEnd = arg4;
        if (arg4 == null) {
          selectionEnd = closure_14.current.selectionEnd;
        }
        const current = closure_16.current;
        obj = { location: selectionStart, length: Math.max(0, selectionEnd - selectionStart), text: null, nodes: null, editId: null };
        let text = focused;
        if (flag) {
          text = `${focused} `;
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
        lib(ref[33])({ channelId: channel.id, chatInputRef: closure_16, chatInputNativeRef: closure_8, keyboardParams, secondaryTextFieldRef });
      },
      openSystemKeyboard() {
        obj = callback(ref[19]);
        const keyboardType = obj.getKeyboardType();
        let keyboardIsOpen = keyboardType === callback(ref[20]).KeyboardTypes.SYSTEM;
        if (keyboardIsOpen) {
          let tmpResult = tmp(tmp2[34]);
          keyboardIsOpen = tmpResult.getKeyboardIsOpen({ includeCustomKeyboard: false });
        }
        if (!keyboardIsOpen) {
          tmpResult = tmp(tmp2[21]);
          obj = { type: null, context: null };
          obj[0] = tmp(tmp2[20]).KeyboardTypes.SYSTEM;
          obj[1] = { keyboardWillOpen: true };
          tmpResult.setKeyboardType(obj);
          lib(tmp2[13]).openSystemKeyboard(currentUser.current);
          const obj5 = lib(tmp2[13]);
        }
      },
      replaceRange(arg0) {
        lib(ref[13]).replaceRange(currentUser.current, arg0);
      },
      setSelectedRange(arg0, arg1) {
        lib(ref[13]).setSelectedRange(currentUser.current, arg0, arg1);
      },
      setText(arg0) {
        lib(ref[13]).setText(currentUser.current, arg0);
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
      }
    };
    obj = {
      chatInputRefObject: obj,
      chatInputRefObjectCallback() {
        return obj;
      }
    };
    return obj;
  }, items3);
  closure_16 = React.useRef(memo.chatInputRefObject);
  const imperativeHandle = React.useImperativeHandle(chatInputProps.ref, memo.chatInputRefObjectCallback);
  return React.useMemo(() => ({ chatInput: closure_16, chatInputCharCounter: closure_6, chatInputCover: closure_7, chatInputActions: closure_2, chatInputRightActions: closure_3, chatInputAutocomplete: closure_5, chatInputAppCommandManager: closure_4, chatInputNative: closure_8, chatInputSendButton: closure_9, chatInputTextFlushedResponses: closure_10, props: closure_13, propsPrev: closure_12, state: closure_14 }), []);
};