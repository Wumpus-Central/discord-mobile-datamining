// === Module 14568: ChatInput ===

// Module 14568 (ChatInput)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7241 */;
import ThreadHooks from "ThreadHooks" /* 7287 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 9007 */;
import DiceRollStore from "DiceRollStore" /* 14569 */;
import NativeMenuStore from "NativeMenuStore" /* 11041 */;
import PendingReplyStore from "PendingReplyStore" /* 8784 */;
import DraftStore from "DraftStore" /* 8725 */;
import EditMessageStore from "EditMessageStore" /* 8785 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8872 */;

require = fn;
class ChatInput {
  constructor(arg0) {
    channel = global.channel;
    closure_0 = channel;
    screenIndex = global.screenIndex;
    ({ threadCreationCallback, onJumpToPresent } = global);
    closure_2 = undefined;
    closure_3 = undefined;
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
    editable = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    isCoachmarkVisible = undefined;
    dismissCoachmark = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    registerViewTag = undefined;
    unregisterViewTag = undefined;
    closure_24 = undefined;
    tmp = closure_0;
    tmp2 = closure_3;
    ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef, ref } = global);
    obj = closure_0(closure_3[24]);
    mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
    closure_2 = mobileEmojiSuggestionsConfig;
    InlineEmojiSuggestionsEnabled = closure_0(closure_3[25]).InlineEmojiSuggestionsEnabled;
    tmp72Result15 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
    closure_3 = tmp72Result15;
    tmpResult = tmp(tmp2[26]);
    gradientValue = tmpResult.useGradientValue(tmp(tmp2[26]).GradientPercentage.END);
    tmpResult1 = tmp(tmp2[27]);
    tmp6 = screenIndex;
    token = tmpResult1.useToken(screenIndex(tmp2[22]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
    tmpResult2 = tmp(tmp2[27]);
    result = (tmpResult2.useToken(screenIndex(tmp2[22]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
    tmpResult3 = tmp(tmp2[27]);
    token1 = tmpResult3.useToken(screenIndex(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
    tmp10 = closure_40(gradientValue, token1);
    tmpResult4 = tmp(tmp2[28]);
    isMobileRTCV2Enabled = tmpResult4.useIsMobileRTCV2Enabled("ChatInput");
    closure_4 = isMobileRTCV2Enabled;
    tmpResult5 = tmp(tmp2[29]);
    tmp12 = tmpResult5.useChatDockHeight() > 0;
    closure_5 = tmp12;
    tmpResult6 = tmp(tmp2[27]);
    token2 = gradientValue;
    if (gradientValue == null) {
      token2 = tmpResult6.useToken(screenIndex(tmp2[22]).colors.BACKGROUND_BASE_LOWER);
    }
    tmpResult7 = tmp(tmp2[27]);
    token3 = tmpResult7.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
    tmpResult8 = tmp(tmp2[27]);
    token4 = tmpResult8.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
    tmpResult9 = tmp(tmp2[27]);
    obj12 = closure_6;
    token5 = tmpResult9.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
    tmp17 = closure_5(closure_6.useState(false), 2);
    [floatingInputBoxPressed, closure_6] = tmp17;
    tmp18 = closure_5(closure_6.useState(0), 2);
    [tmp19, closure_7] = tmp18;
    tmp20 = closure_5(closure_6.useState(null), 2);
    first = tmp20[0];
    closure_8 = first;
    closure_9 = tmp20[1];
    items = [];
    items[0] = isMobileRTCV2Enabled;
    items1 = [, ];
    items1[0] = first;
    items1[1] = tmp12;
    callback = closure_6.useCallback((nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      _undefined2(nativeEvent.layout.y);
      if (isMobileRTCV2Enabled) {
        ({ x: c0, y: c1, width: c2, height: c3 } = nativeEvent.layout);
        closure_9((arg0) => {
          let size = arg0;
          let x;
          if (arg0 != null) {
            x = size.x;
          }
          if (x === x) {
            if (size.y === y) {
              return size;
            }
          }
          const size1 = { x, y, width, height };
          size = size1;
        });
      }
    }, items);
    memo = closure_6.useMemo(() => {
      let tmp = null;
      if (closure_5) {
        tmp = null;
        if (null != first) {
          const rect = { top: first.y + first.height - 1, left: null, width: null };
          ({ x: obj.left, width: obj.width } = first);
          tmp = rect;
        }
      }
      return tmp;
    }, items1);
    items2 = [];
    items2[0] = screenIndex;
    items3 = [];
    items3[0] = screenIndex;
    callback1 = closure_6.useCallback((arg0) => {
      dependencyMap(screenIndex, arg0);
    }, items2);
    effect = closure_6.useEffect(() => () => {
      closure_20(screenIndex, 0);
    }, items3);
    tmp26 = null != threadCreationCallback;
    closure_10 = tmp26;
    tmp27 = channel.isPrivate() && !tmp26;
    tmp28 = closure_10((channelId) => channelId.channelId === _undefined.id);
    tmpResult10 = tmp(tmp2[30]);
    typingUserIdsForDisplay = tmpResult10.useTypingUserIdsForDisplay(channel.id, 1);
    tmp30 = registerViewTag(screenIndex);
    closure_11 = tmp30;
    tmpResult11 = tmp(tmp2[30]);
    result1 = tmpResult11.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp30);
    tmp32 = closure_21(screenIndex);
    tmp33 = token1;
    if (tmp32) {
      tmp33 = token5;
    }
    tmp34 = token4;
    if (tmp32) {
      tmp34 = token3;
    }
    tmpResult12 = tmp(tmp2[31]);
    items4 = [];
    items4[0] = closure_16;
    stateFromStores = tmpResult12.useStateFromStores(items4, () => {
      let editingTextValue = null;
      if (!closure_10) {
        editingTextValue = EditMessageStore.getEditingTextValue(_undefined.id);
      }
      return editingTextValue;
    });
    closure_12 = stateFromStores;
    tmpResult13 = tmp(tmp2[31]);
    items5 = [];
    items5[0] = closure_12;
    stateFromStores1 = tmpResult13.useStateFromStores(items5, () => {
      let pendingReply;
      if (!closure_10) {
        pendingReply = PendingReplyStore.getPendingReply(_undefined.id);
      }
      return pendingReply;
    });
    closure_13 = stateFromStores1;
    tmpResult14 = tmp(tmp2[31]);
    items6 = [];
    items6[0] = isCoachmarkVisible;
    stateFromStores2 = tmpResult14.useStateFromStores(items6, () => {
      if (closure_10) {
        return false;
      } else {
        const uploads = UploadAttachmentStore.getUploads(_undefined.id, DraftType.ChannelMessage);
        let tmp5 = null != uploads;
        if (tmp5) {
          tmp5 = uploads.length > 0;
        }
        return tmp5;
      }
    });
    items7 = [, ];
    items7[0] = channel.id;
    items7[1] = tmp26;
    memo1 = stateFromStores;
    if (stateFromStores == null) {
      memo1 = obj12.useMemo(() => DraftStore.getDraft(_undefined.id, closure_10 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items7);
    }
    tmpResult15 = tmp(tmp2[31]);
    items8 = [];
    items8[0] = closure_17;
    items9 = [, ];
    items9[0] = channel;
    items9[1] = tmp26;
    stateFromStoresObject = tmpResult15.useStateFromStoresObject(items8, () => {
      let canResult1 = PermissionStore.can(constants3.MENTION_EVERYONE, _private);
      const canResult = PermissionStore.can(constants3.ATTACH_FILES, _private);
      const canResult2 = PermissionStore.can(constants3.SEND_MESSAGES, _private);
      const canResult3 = PermissionStore.can(constants3.SEND_VOICE_MESSAGES, _private);
      const tmp6 = PermissionStore.can(constants3.CREATE_PUBLIC_THREADS, _private) || PermissionStore.can(constants3.CREATE_PRIVATE_THREADS, _private);
      let isPrivateResult = _private.isPrivate();
      const canResult4 = PermissionStore.can(constants3.SEND_MESSAGES_IN_THREADS, _private);
      let tmp11 = canResult4;
      const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(_private);
      if (!closure_10) {
        let tmp12 = isPrivateResult;
        if (!isPrivateResult) {
          tmp12 = canResult2;
        }
        tmp11 = tmp12;
      }
      let tmp13 = !tmp11;
      if (tmp11) {
        tmp13 = isReadOnlyThread;
      }
      let tmp14 = isPrivateResult;
      if (!isPrivateResult) {
        if (canResult1) {
          canResult1 = !tmp13;
        }
        tmp14 = canResult1;
      }
      if (tmp14) {
        tmp14 = !closure_10;
      }
      const obj4 = { canMentionEveryone: tmp14, canUpload: null, canSendVoiceMessage: null, editable: null, canCreateThreads: null };
      let tmp15 = isPrivateResult;
      if (!isPrivateResult) {
        tmp15 = canResult;
      }
      if (tmp15) {
        tmp15 = !tmp13;
      }
      if (tmp15) {
        tmp15 = !closure_10;
      }
      obj4.canUpload = tmp15;
      if (!isPrivateResult) {
        isPrivateResult = canResult3;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp13;
      }
      if (isPrivateResult) {
        isPrivateResult = !closure_10;
      }
      obj4.canSendVoiceMessage = isPrivateResult;
      obj4.editable = !tmp13;
      obj4.canCreateThreads = tmp6;
      return obj4;
    }, items9);
    ({ canUpload, editable } = stateFromStoresObject);
    ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
    analyticsLocations = tmp6(tmp2[33])().analyticsLocations;
    tmp40 = tmp26;
    if (!tmp26) {
      tmp40 = null != stateFromStores;
    }
    if (!tmp40) {
      tmpResult16 = tmp(tmp2[32]);
      tmp40 = !tmpResult16.getIsActiveChannelOrUnarchivableThread(channel);
    }
    tmp41 = null != stateFromStores1;
    tmpResult17 = tmp(tmp2[32]);
    canStartThread = tmpResult17.useCanStartThread(channel);
    if (canStartThread) {
      tmp43 = ChannelTypesSets;
      GUILD_THREADS_ONLY = ChannelTypesSets.GUILD_THREADS_ONLY;
      canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (canStartThread) {
      canStartThread = !tmp26;
    }
    tmpResult18 = tmp(tmp2[34]);
    tmp44 = tmpResult18.useCanPostPollsInChannel(channel) && !tmp26;
    closure_15 = token;
    tmpResult19 = tmp(tmp2[35]);
    sharedValue = tmpResult19.useSharedValue(token);
    closure_16 = sharedValue;
    tmpResult20 = tmp(tmp2[35]);
    sharedValue1 = tmpResult20.useSharedValue(token);
    closure_17 = sharedValue1;
    items10 = [, , ];
    items10[0] = sharedValue1;
    items10[1] = token;
    items10[2] = sharedValue;
    effect1 = obj12.useEffect(() => {
      const result = sharedValue.set(token);
      const result1 = sharedValue1.set(token);
    }, items10);
    tmp48 = tmp6(tmp2[36])();
    tmp49 = closure_13((startTimeMillis) => null != startTimeMillis.startTimeMillis);
    result3 = !tmp26;
    isAppLauncherEnabled = result3;
    if (!tmp26) {
      tmpResult21 = tmp(tmp2[37]);
      isAppLauncherEnabled = tmpResult21.getIsAppLauncherEnabled(channel);
    }
    tmpResult22 = tmp(tmp2[31]);
    items11 = [];
    items11[0] = closure_9;
    stateFromStores3 = tmpResult22.useStateFromStores(items11, () => ApplicationCommandStore.getActiveCommand(_undefined.id));
    obj1 = { channel, isReadonly: !editable, isCreatingThread: tmp26 };
    tmp53 = tmp6(tmp2[38])(obj1);
    ({ placeholder, accessibilityLabel } = tmp53);
    tmpResult23 = tmp(tmp2[35]);
    items12 = [, ];
    items12[0] = closure_41;
    items12[1] = sharedValue1;
    closure_0 = undefined;
    [tmp54, tmp55] = items12;
    class ChatInputTsx1 {
      constructor() {
        obj = { minHeight: closure_0.get() };
        return obj;
      }
    }
    items13 = [];
    items13[0] = tmp55;
    ChatInputTsx1.__closure = items13;
    ChatInputTsx1.__workletHash = 423981813056;
    ChatInputTsx1.__initData = tmp54;
    animatedStyle = tmpResult23.useAnimatedStyle(ChatInputTsx1);
    ref1 = obj12.useRef(null);
    tmpResult24 = tmp(tmp2[39]);
    obj71 = { disabled: !editable };
    refreshChatInputCoachmark = tmpResult24.useRefreshChatInputCoachmark(obj71);
    tmpResult25 = tmp(tmp2[40]);
    tmp59 = editable;
    if (editable) {
      tmp59 = result3;
    }
    if (tmp59) {
      tmp59 = null == refreshChatInputCoachmark;
    }
    scheduledMessageDraftCoachmarkState = tmpResult25.useScheduledMessageDraftCoachmarkState({ isEligible: tmp59 });
    isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
    dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
    obj72 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo1, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
    tmp61 = tmp6(tmp2[41])(obj72);
    closure_20 = tmp61;
    items14 = [];
    items14[0] = tmp61;
    effect2 = obj12.useEffect(() => {
      const current = closure_20.chatInput.current;
      current.setText(closure_20.props.current.defaultValue);
    }, items14);
    items15 = [, , , ];
    items15[0] = tmp61;
    items15[1] = channel;
    items15[2] = stateFromStores;
    items15[3] = stateFromStores1;
    effect3 = obj12.useEffect(() => {
      const current = closure_20.propsPrev.current;
      const pendingEdit = current.pendingEdit;
      let tmp2 = null == current.pendingReply;
      if (tmp2) {
        tmp2 = null != stateFromStores1;
      }
      if (!tmp2) {
        let tmp4 = null == pendingEdit;
        if (tmp4) {
          tmp4 = null != stateFromStores;
        }
        tmp2 = tmp4;
      }
      if (tmp2) {
        const current2 = closure_20.chatInput.current;
        if (current2 != null) {
          current2.focus();
        }
      }
      const id = closure_20.propsPrev.current.channel.id;
      if (id !== _undefined.id) {
        if (id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          const current4 = closure_20.chatInput.current;
          if (current4 != null) {
            current4.setText(closure_20.props.current.defaultValue);
          }
        }
      }
      if (pendingEdit !== stateFromStores) {
        const current3 = closure_20.chatInput.current;
        if (current3 != null) {
          let str = "";
          if (null != stateFromStores) {
            str = stateFromStores;
          }
          current3.setText(str);
        }
      }
    }, items15);
    items16 = [];
    items16[0] = tmp61;
    effect4 = obj12.useEffect(() => {
      function handleOpenKeyboard(channelId) {
        channelId = undefined;
        if (channelId != null) {
          channelId = channelId.channelId;
        }
        const current = props.props.current;
        let id;
        if (current != null) {
          id = current.channel.id;
        }
        if (channelId === id) {
          const current2 = props.chatInput.current;
          if (current2 != null) {
            current2.openSystemKeyboard();
          }
        }
      }
      let ComponentDispatch = _undefined(closure_3[43]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.TEXTAREA_FOCUS, handleOpenKeyboard);
      };
    }, items16);
    items17 = [, ];
    items17[0] = tmp61;
    items17[1] = sharedValue;
    memo2 = obj12.useMemo(() => {
      let obj = {
        handleBlur(nativeEvent) {
          const result = c0(1629).setIsAnyChatInputFocused(false);
          const result1 = memo2.handleTextOrFocusChange(str, false);
          closure_1_20.state.current.focused = false;
          closure_1_6(false);
          const current = closure_1_20.chatInputCover.current;
          if (current != null) {
            current.focused(false);
          }
          const current2 = closure_1_20.chatInputAppCommandManager.current;
          if (current2 != null) {
            current2.updateState();
          }
          const current3 = closure_1_20.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: false, text: str, selectionStart: closure_1_20.state.current.selectionStart, selectionEnd: closure_1_20.state.current.selectionEnd };
            current3.setData(obj2);
          }
          const current4 = closure_1_20.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: false, text: str, selectionStart: closure_1_20.state.current.selectionStart, selectionEnd: closure_1_20.state.current.selectionEnd };
            current4.setData(obj3);
          }
          const current5 = closure_1_20.chatInputSendButton.current;
          if (current5 != null) {
            current5.setHasText(str.trim().length > 0);
          }
          const obj = c0(1629);
        },
        handleFocus(nativeEvent) {
          ({ start, end } = nativeEvent.nativeEvent);
          const result = c0(1629).setIsAnyChatInputFocused(true);
          closure_1_20.state.current.focused = true;
          closure_1_6(true);
          closure_1_20.state.current.selectionStart = start;
          closure_1_20.state.current.selectionEnd = end;
          const result1 = memo2.handleTextOrFocusChange(closure_1_20.state.current.text, true);
          const result2 = memo2.trackEmojiSuggestionsExposureIfFocusedWithText(closure_1_20.state.current.text);
          const current = closure_1_20.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = closure_1_20.chatInputCover.current;
          if (current2 != null) {
            current2.focused(true);
          }
          const current3 = closure_1_20.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: true, text: closure_1_20.state.current.text, selectionStart: start, selectionEnd: end };
            current3.setData(obj2);
          }
          const current4 = closure_1_20.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: true, text: closure_1_20.state.current.text, selectionStart: start, selectionEnd: end };
            current4.setData(obj3);
          }
          const obj = c0(1629);
        },
        handleChangeContentSize(nativeEvent) {
          const height = nativeEvent.nativeEvent.height;
          closure_1_20.state.current.textFieldContentSize = height;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldHeight = closure_1_20.state.current.textFieldHeight;
            const result = textFieldHeight.set(c0(13807).getChatInputHeightAnimationTiming(height, sharedValue.get()));
            const tmp2Result = c0(13807);
          }
          obj = c0(14639);
        },
        handleLayoutOfInputContainer(arg0) {
          const current = closure_1_20.chatInputAutocomplete.current;
          if (current != null) {
            current.setChatInputHeight(tmp.layout.height);
          }
        },
        handleLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const height = layout.height;
          if (tmp) {
            if (null == closure_1_20.props.current.threadCreationCallback) {
              const current = closure_1_20.chatInput.current;
              const result = current.updateChatInputContainerHeightDebounced(height);
            }
          }
        },
        handleMaxHeightChanged() {
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldContentSize = closure_1_20.state.current.textFieldContentSize;
            if (0 !== textFieldContentSize) {
              const textFieldHeight = closure_1_20.state.current.textFieldHeight;
              const result = textFieldHeight.set(c0(13807).getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
              const tmpResult = c0(13807);
            }
          }
          obj = c0(14639);
        },
        handleChangeAutoCompleteVisibility(arg0) {
          dismissCoachmark(closure_1_20.props.current.screenIndex, arg0);
        },
        handlePasteCommand(arg0) {
          if (closure_1_20.state.current.focused) {
            const current = closure_1_20.chatInputAppCommandManager.current;
            if (current != null) {
              const applicationCommandManager = current.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                applicationCommandManager.setPastedCommand(tmp, closure_1_20.props.current.channel);
              }
            }
          }
        },
        handlePasteImage: null,
        handlePressAction: null,
        handlePollsPress: null,
        handleAttachPress: null,
        handlePressExpression: null,
        handlePressSend: null,
        handleSelectionOrTextChange: null,
        handleTapAction: null,
        trackEmojiSuggestionsExposureIfFocusedWithText: null,
        handleTextOrFocusChange: null,
        handleTextFlushed: null,
        handleToggleKeyboard: null
      };
      closure_0 = isMobileRTCV2Enabled(function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2 = tmp5;
                closure_1 = tmp2;
                closure_129_0 = undefined;
                closure_129_1 = undefined;
                closure_129_2 = undefined;
                closure_129_3 = undefined;
                ({ url: closure_129_0, width: closure_129_1, height: closure_129_2, type: closure_129_3 } = closure_0.nativeEvent);
                closure_129_4 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "Path", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  if (closure_1_20.state.current.focused) {
                    if (closure_1_20.props.current.canUpload) {
                      c3 = 2;
                      c4 = 1;
                      const obj6 = { value: closure_0(8879).getImageDimensionsIfMissing(closure_129_0, closure_129_1, closure_129_2), done: false };
                      return obj6;
                    }
                  }
                  c4 = 3;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_129_4 = value;
                const obj8 = { channelId: closure_1_20.props.current.channel.id, file: null, draftType: null };
                const size = { uri: closure_129_0, originalUri: closure_129_0, width: closure_129_4.width, height: closure_129_4.height, mimeType: closure_129_3, platform: closure_0(8850).UploadPlatform.REACT_NATIVE, id: null };
                const obj7 = screenIndex(11153);
                size.id = closure_0(1269).v4();
                obj8.file = size;
                obj8.draftType = ChannelMessage.ChannelMessage;
                obj7.addFile(obj8);
                const obj10 = closure_0(1269);
              }
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            }
          } catch (tmp16) {
            c4 = tmp;
            throw tmp16;
          }
        }
      });
      obj.handlePasteImage = function handlePasteImage() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.handlePressAction = function handlePressAction(arg0, arg1, current2) {
        if (constants.PHOTOS === arg1) {
          const result = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj21 = c0(5554);
          const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
          screenIndex(1256).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
          const obj22 = screenIndex(1256);
          const keyboardType = c0(5503).getKeyboardType();
          if (keyboardType === c0(1628).KeyboardTypes.APP_LAUNCHER) {
            const obj5 = { type: c0(1628).KeyboardTypes.APP_LAUNCHER };
            memo2.handleToggleKeyboard(obj5);
          } else {
            const keyboardType1 = c0(5503).getKeyboardType();
            if (keyboardType1 === c0(1628).KeyboardTypes.MEDIA) {
              const current = closure_1_20.chatInputActions.current;
              if (current != null) {
                current.focusPhotosButton();
              }
            }
            const obj8 = { type: c0(1628).KeyboardTypes.MEDIA, context: null };
            const obj11 = { target: constants7.CHAT };
            obj8.context = obj11;
            memo2.handleToggleKeyboard(obj8);
            const tmp42Result = c0(5503);
          }
          const obj24 = c0(5503);
        } else {
          let tmp35 = current2;
          if (constants.APPS === arg1) {
            const result1 = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj12 = c0(5554);
            c0(6067).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
            const obj13 = c0(6067);
            const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
            screenIndex(1256).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
            const obj14 = screenIndex(1256);
            const result2 = mobileEmojiSuggestionsConfig(12741).dismissNewActivityIndicator();
            const obj16 = mobileEmojiSuggestionsConfig(12741);
            if (tmp35 == null) {
              tmp35 = null;
            }
            const result3 = c0(13367).setAppLauncherA11yFocusReturnRef(tmp35);
            const obj18 = { type: c0(1628).KeyboardTypes.APP_LAUNCHER, context: null };
            const obj19 = { initialRouteName: constants5.HOME, initialSearchQuery: null };
            const obj17 = c0(13367);
            const appDMApplication = c0(13534).getAppDMApplication(closure_1_20.props.current.channel);
            let name;
            if (appDMApplication != null) {
              name = appDMApplication.name;
            }
            obj19.initialSearchQuery = name;
            obj18.context = obj19;
            memo2.handleToggleKeyboard(obj18);
            const tmp23Result = c0(13534);
          } else if (constants.ALL_PHOTOS === arg1) {
            const result4 = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj9 = c0(5554);
            const obj20 = {
              channel: closure_1_20.props.current.channel,
              uploadLimit,
              onDismissKeyboard() {
                    return closure_1_0(5501).dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    return closure_1_21.handleToggleKeyboard({ type: closure_0(1628).KeyboardTypes.SYSTEM });
                  },
              onSelectFiles(items) {
                    closure_0(11635).addImagesFromPicker(closure_1_20.props.current.channel.id, items, closure_0(8874).UploadOrigin.IMAGE_PICKER);
                  },
              draftType: token.ChannelMessage
            };
            c0(11635).handleViewAllDialog(obj20);
            const obj10 = c0(11635);
          } else if (constants.CAMERA === arg1) {
            const result5 = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj6 = c0(5554);
            const obj23 = {
              channel: closure_1_20.props.current.channel,
              previewType: constants6.CAMERA_BUTTON,
              onDismissKeyboard() {
                    return closure_1_0(5501).dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    return closure_1_21.handleToggleKeyboard({ type: closure_0(1628).KeyboardTypes.SYSTEM });
                  },
              onSelectFiles(items) {
                    closure_0(11635).addImagesFromPicker(closure_1_20.props.current.channel.id, items, closure_0(8874).UploadOrigin.IMAGE_PICKER);
                  }
            };
            c0(11635).handleCameraDialog(obj23);
            const obj7 = c0(11635);
          } else if (constants.NITRO_GIFT === arg1) {
            const result6 = screenIndex(2019).markPotentialBadState();
            const obj = screenIndex(2019);
            const result7 = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = c0(5554);
            if (obj3.isAndroid()) {
              c0(5501).dismissKeyboard();
              const tmp5Result = c0(5501);
            }
            obj3 = c0(1380);
            c0(11635).handleSelectGift(closure_1_20.props.current.analyticsLocations, closure_1_20.chatInput, tmp35);
            const tmp5Result2 = c0(11635);
          } else if (constants.THREAD === arg1) {
            const result8 = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj28 = c0(5554);
            c0(11635).handleSelectThread(closure_1_20.props.current.channel, closure_1_20.chatInput);
            const obj29 = c0(11635);
          }
        }
      };
      obj.handlePollsPress = function handlePollsPress() {
        const result = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = c0(5554);
        screenIndex(1256).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, { type: constants3.POLLS, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id });
        const obj2 = screenIndex(1256);
        const obj3 = { type: constants3.POLLS, channel_id: closure_1_20.props.current.channel.id, guild_id: closure_1_20.props.current.channel.guild_id };
        c0(5501).dismissKeyboard();
        const obj4 = c0(5501);
        c0(13537).openCreatePollModal({
          channel: closure_1_20.props.current.channel,
          onCancel() {
            return closure_1_21.handleToggleKeyboard({ type: closure_0(1628).KeyboardTypes.SYSTEM });
          }
        });
      };
      obj.handleAttachPress = function handleAttachPress() {
        const result = c0(5554).triggerHapticFeedback(c0(5554).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = c0(5554);
        c0(11635).handleAttachFile({
          channel: closure_1_20.props.current.channel,
          uploadLimit,
          onDismissKeyboard() {
            return closure_1_0(dependencyMap[59]).dismissKeyboard();
          },
          onRestoreKeyboard() {
            return closure_1_21.handleToggleKeyboard({ type: closure_0(1628).KeyboardTypes.SYSTEM });
          },
          onSelectFiles(items) {
            closure_0(11635).addImagesFromPicker(props.props.current.channel.id, items, closure_0(8874).UploadOrigin.FILE_ATTACHMENT);
          }
        });
      };
      obj.handlePressExpression = function handlePressExpression(arg0, unlocked) {
        const result = c0(9544).initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
        let tmp4 = null != unlocked;
        if (tmp4) {
          tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
          const tmp5 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
        }
        let type = arg0;
        if (arg0 == null) {
          type = c0(5503).getKeyboardContextForType(c0(1628).KeyboardTypes.EXPRESSION).type;
          const tmpResult = c0(5503);
        }
        const obj2 = { type: c0(1628).KeyboardTypes.EXPRESSION, context: null };
        const obj3 = { type, suggestedEmojis: null };
        let tmp7;
        if (tmp4) {
          tmp7 = unlocked;
        }
        obj3.suggestedEmojis = tmp7;
        obj2.context = obj3;
        memo2.handleToggleKeyboard(obj2);
        const obj = c0(9544);
      };
      obj.handlePressSend = function handlePressSend() {
        const current = closure_1_20.chatInput.current;
        current.handleSend();
      };
      obj.handleSelectionOrTextChange = function handleSelectionOrTextChange(nativeEvent) {
        ({ start, end, text, editId } = nativeEvent.nativeEvent);
        closure_1_20.state.current.editId = editId;
        closure_1_20.state.current.selectionStart = start;
        closure_1_20.state.current.selectionEnd = end;
        const result = memo2.handleTextOrFocusChange(text, closure_1_20.state.current.focused);
        const result1 = memo2.trackEmojiSuggestionsExposureIfFocusedWithText(text);
        const current = closure_1_20.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = closure_1_20.chatInputAutocomplete.current;
        if (current2 != null) {
          const obj = { focused: closure_1_20.state.current.focused, text, selectionStart: start, selectionEnd: end };
          current2.setData(obj);
        }
        const current3 = closure_1_20.chatInputEmojiSuggestions.current;
        if (current3 != null) {
          const obj2 = { focused: closure_1_20.state.current.focused, text, selectionStart: start, selectionEnd: end };
          current3.setData(obj2);
        }
        const current4 = closure_1_20.chatInputSendButton.current;
        if (current4 != null) {
          current4.setHasText(text.trim().length > 0);
        }
        if (closure_1_20.state.current.editId !== editId) {
          const current5 = closure_1_20.chatInput.current;
          current5.handleTextChanged(text);
          const current6 = closure_1_20.chatInputCharCounter.current;
          if (current6 != null) {
            const result2 = current6.onMessageLengthChanged(text.length);
          }
          c0(9149).hideContextMenu();
          const obj3 = c0(9149);
        }
      };
      obj.handleTapAction = function handleTapAction(nativeEvent) {
        const tapAction = nativeEvent.nativeEvent.tapAction;
        if ("tapAttachment" === tapAction.action) {
          let current = closure_1_20.chatInput.current;
          current.blur();
          const obj = c0(14640);
          const current2 = closure_1_20.chatInput.current;
          const applicationCommandManager = current2.getApplicationCommandManager();
          ({ channelId, optionName } = tapAction);
          let fn;
          if (closure_1_20.state.current.focused) {
            fn = () => {
              const current = chatInput.chatInput.current;
              return current.openSystemKeyboard();
            };
          }
          const result = obj.openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
        }
      };
      obj.trackEmojiSuggestionsExposureIfFocusedWithText = function trackEmojiSuggestionsExposureIfFocusedWithText(text) {
        let focused = closure_1_20.state.current.focused;
        if (focused) {
          focused = text.length > 0;
        }
        if (focused) {
          const result = c0(14572).trackMobileEmojiSuggestionsExposure({ location: "ChatInputFocusedWithText" });
          const obj = c0(14572);
        }
      };
      obj.handleTextOrFocusChange = function handleTextOrFocusChange(text, focused) {
        if (text.length > 0) {
          if (!focused) {
            const maxMessageLength = c0(11157).getMaxMessageLength();
            if (tmp16) {
              screenIndex(1256).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
              const obj3 = screenIndex(1256);
            }
            closure_1_20.state.current.textPrev = closure_1_20.state.current.text;
            closure_1_20.state.current.text = text;
            const obj2 = c0(11157);
            tmp16 = closure_1_20.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
          }
          if (closure_11.isOpen()) {
            screenIndex(11650).hideNativeMenu();
            const obj = screenIndex(11650);
          }
          const current2 = closure_1_20.chatInputActions.current;
          if (current2 != null) {
            current2.onDismissActions(focused);
          }
          const current3 = closure_1_20.chatInputRightActions.current;
          if (current3 != null) {
            current3.onDismissActions(focused);
          }
        }
        if (0 === text.length) {
          const current4 = closure_1_20.chatInputActions.current;
          if (current4 != null) {
            current4.onShowActions(focused);
          }
          const current = closure_1_20.chatInputRightActions.current;
          if (current != null) {
            current.onShowActions(focused);
          }
        }
      };
      obj.handleTextFlushed = function handleTextFlushed(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const current = closure_1_20.chatInputTextFlushedResponses.current;
        value = current.get(nativeEvent.requestId);
        if (value != null) {
          value(nativeEvent.text);
        }
      };
      obj.handleToggleKeyboard = function handleToggleKeyboard(type) {
        if (closure_11.isOpen()) {
          screenIndex(11650).hideNativeMenu();
          const obj = screenIndex(11650);
        }
        if (type.type !== c0(1628).KeyboardTypes.SYSTEM) {
          if (type.type !== tmp4Result.getKeyboardType()) {
            const current = closure_1_20.chatInput.current;
            current.openCustomKeyboard(type);
          }
          tmp4Result = c0(5503);
        }
        const current2 = closure_1_20.chatInput.current;
        current2.openSystemKeyboard();
      };
      return obj;
    }, items17);
    closure_21 = memo2;
    items18 = [, , , ];
    items18[0] = tmp72Result15;
    items18[1] = mobileEmojiSuggestionsConfig.style;
    items18[2] = tmp61;
    items18[3] = tmp30;
    items19 = [, ];
    items19[0] = tmp26;
    items19[1] = tmp61;
    memo3 = obj12.useMemo(() => {
      let tmp;
      if (closure_3) {
        if ("button" === mobileEmojiSuggestionsConfig.style) {
          const obj = { chatInputRef: null, chatInputStateRef: null, suppressed: null };
          ({ chatInput: obj.chatInputRef, state: obj.chatInputStateRef } = closure_20);
          obj.suppressed = suppressed;
          tmp = obj;
        }
      }
      return tmp;
    }, items18);
    callback2 = obj12.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      const height = layout.height;
      if (tmp) {
        if (!closure_10) {
          const current = closure_20.chatInput.current;
          const result = current.updateChatInputContainerHeightDebounced(height);
        }
      }
      tmp = 0 !== height && 0 !== layout.width;
    }, items19);
    tmp68 = tmp6(tmp2[45])({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
    registerViewTag = tmp68.registerViewTag;
    unregisterViewTag = tmp68.unregisterViewTag;
    closure_24 = obj12.useRef(null);
    items20 = [, , ];
    items20[0] = tmp61;
    items20[1] = registerViewTag;
    items20[2] = unregisterViewTag;
    callback3 = obj12.useCallback((current) => {
      if (null != ref.current) {
        unregisterViewTag(ref.current);
        ref.current = null;
      }
      closure_20.chatInputNative.current = current;
      if (null != current) {
        const tmp5 = React5(current);
        if (null != tmp5) {
          ref.current = tmp5;
          registerViewTag(tmp5);
        }
      }
    }, items20);
    items21 = [, ];
    items21[0] = editable;
    items21[1] = tmp61;
    callback4 = obj12.useCallback(() => true, []);
    tmp72 = jsx;
    callback5 = obj12.useCallback(() => {
      if (editable) {
        const current = closure_20.chatInput.current;
        current.openSystemKeyboard();
      }
    }, items21);
    obj73 = { canUpload, channelId: channel.id, screenIndex };
    tmp72Result = null;
    tmp73 = jsx(tmp6(tmp2[68]), obj73);
    if (editable) {
      obj74 = { ref: null, channel: null, onPressAction: null, canStartThreads: null, isAppLauncherEnabled: null, keyboardType: null, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null, onContextMenuOpen: null };
      obj74.ref = tmp61.chatInputActions;
      obj74.channel = channel;
      obj74.onPressAction = memo2.handlePressAction;
      obj74.canStartThreads = canStartThread;
      obj74.isAppLauncherEnabled = isAppLauncherEnabled;
      obj74.keyboardType = tmp48;
      tmp76 = canUpload;
      tmp6Result = tmp6(tmp2[69]);
      if (canUpload) {
        tmp76 = null == stateFromStores3;
      }
      if (!tmp76) {
        tmp76 = tmp44;
      }
      obj74.shouldPhotosButtonBeDisabled = !tmp76;
      obj74.canUpload = canUpload;
      result2 = result3;
      if (!tmp26) {
        tmpResult26 = tmp(tmp2[70]);
        result2 = tmpResult26.isPremiumGiftingSupported();
      }
      obj74.shouldShowGiftButton = result2;
      obj74.canPostPolls = tmp44;
      ({ handlePollsPress: obj33.onPollsPress, handleAttachPress: obj33.onAttachPress } = memo2);
      obj74.photosButtonExternalRef = ref1;
      obj74.onContextMenuOpen = function onContextMenuOpen() {
        if (isCoachmarkVisible) {
          dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
        }
      };
      tmp72Result = tmp72(tmp6Result, obj74);
    }
    tmp78 = jsxs;
    obj75 = { style: null, children: null };
    items22 = [, ];
    items22[0] = tmp10.inputDefault;
    items22[1] = animatedStyle;
    obj75.style = items22;
    obj76 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: 5 };
    tmp6Result1 = tmp6(tmp2[71]);
    obj76.customKeyboard = tmp(tmp2[72]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
    obj76.editable = editable;
    ({ handleFocus: obj36.onBeginFocus, handleBlur: obj36.onEndBlur, handleChangeContentSize: obj36.onChangeContentSize, handleMaxHeightChanged: obj36.onMaxHeightChanged, handleSelectionOrTextChange: obj36.onSelectionOrTextChange, handleTextFlushed: obj36.onTextFlushed, handlePasteImage: obj36.onPasteImage, handlePasteCommand: obj36.onPasteCommand, handleTapAction: obj36.onTapAction, handlePressSend: obj36.onRequestSend } = memo2);
    obj76.placeholder = placeholder;
    obj76.ref = callback3;
    obj76.setNoExtractUI = setNoExtractUI;
    obj76.shouldShowCursor = tmp48 !== tmp(tmp2[53]).KeyboardTypes.MEDIA;
    items23 = [, ];
    items23[0] = tmp72(tmp6Result1, obj76);
    obj77 = { keyboardType: tmp48, onSelectKeyboard: memo2.handleToggleKeyboard, ref: tmp61.chatInputCover };
    items23[1] = tmp72(tmp6(tmp2[73]), obj77);
    obj75.children = items23;
    tmp80 = jsxs(tmp6(tmp2[35]).View, obj75);
    if (editable) {
      obj78 = { ref: null, canSendVoiceMessage: null, channel: null, defaultValue: null, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
      obj78.ref = tmp61.chatInputSendButton;
      obj78.canSendVoiceMessage = canSendVoiceMessage;
      obj78.channel = channel;
      obj78.defaultValue = memo1;
      tmp6Result2 = tmp6(tmp2[74]);
      if (stateFromStores2) {
        stateFromStores2 = canUpload;
      }
      obj78.hasPendingAttachments = stateFromStores2;
      obj78.hasPendingEdit = null != stateFromStores;
      obj78.onSendMessage = memo2.handlePressSend;
      obj78.requireTextContent = result3;
      tmp72Result1 = tmp72(tmp6Result2, obj78);
    } else {
      tmp72Result1 = null;
    }
    tmp83 = closure_7;
    obj79 = { collapsable: false, onLayout: callback2, style: null, children: null };
    items24 = [, , ];
    items24[0] = tmp6(tmp2[75])({ isCreatingThread: tmp26 });
    items24[1] = tmp10.overflowVisible;
    floatingScrimOverlap = result3;
    if (!tmp26) {
      floatingScrimOverlap = tmp10.floatingScrimOverlap;
    }
    items24[2] = floatingScrimOverlap;
    obj79.style = items24;
    tmp72Result2 = !result1;
    if (!result1) {
      obj80 = { gradientHeight: null, inline: false, scrimBase: null };
      obj80.gradientHeight = tmp33;
      obj80.scrimBase = token2;
      tmp72Result2 = tmp72(tmp(tmp2[76]).ChatInputScrimGradient, obj80);
    }
    items25 = [, , , , , , , , , , , , , ];
    items25[0] = tmp72Result2;
    tmp72Result3 = result1;
    if (result1) {
      tmpResult27 = tmp(tmp2[77]);
      hex2rgbResult = tmpResult27.hex2rgb(token2, 1);
      if (hex2rgbResult == null) {
        hex2rgbResult = token2;
      }
      obj81 = { style: null, pointerEvents: "none" };
      rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
      rect.backgroundColor = hex2rgbResult;
      obj81.style = rect;
      tmp72Result3 = tmp72(tmp83, obj81);
    }
    items25[1] = tmp72Result3;
    items25[2] = tmp72(tmp(tmp2[78]).ChatInputAccessibilityDivider, {});
    tmp72Result4 = null;
    if (tmp27) {
      obj82 = { channel: null, hasInputText: null };
      obj82.channel = channel;
      str = "";
      tmp89 = "" !== memo1;
      tmp6Result3 = tmp6(tmp2[79]);
      if (!tmp89) {
        current = tmp61.chatInput.current;
        text = undefined;
        if (current != null) {
          text = current.getText();
        }
        tmp89 = "" !== text;
      }
      obj82.hasInputText = tmp89;
      tmp72Result4 = tmp72(tmp6Result3, obj82);
    }
    items25[3] = tmp72Result4;
    obj83 = { style: tmp10.accessories, children: null };
    tmp72Result5 = result1;
    if (result1) {
      obj84 = { gradientHeight: null, inline: true, scrimBase: null };
      obj84.gradientHeight = tmp34;
      obj84.scrimBase = token2;
      tmp72Result5 = tmp72(tmp(tmp2[76]).ChatInputScrimGradient, obj84);
    }
    items26 = [, , ];
    items26[0] = tmp72Result5;
    tmp72Result6 = null;
    if (!tmp26) {
      obj85 = { channel: null, screenIndex: null };
      obj85.channel = channel;
      obj85.screenIndex = screenIndex;
      tmp72Result6 = tmp72(tmp6(tmp2[30]), obj85);
    }
    items26[1] = tmp72Result6;
    tmpResult28 = tmp(tmp2[23]);
    tmp72Result7 = null;
    if (tmpResult28.isIOS()) {
      obj86 = { channelId: null, screenIndex: null, onJumpToPresent: null };
      obj86.channelId = channel.id;
      obj86.screenIndex = screenIndex;
      obj86.onJumpToPresent = onJumpToPresent;
      tmp72Result7 = tmp72(tmp6(tmp2[80]), obj86);
    }
    items26[2] = tmp72Result7;
    obj83.children = items26;
    items25[4] = tmp78(tmp83, obj83);
    tmp72Result8 = null;
    if (isResourceChannel) {
      obj87 = { channel: null };
      obj87.channel = channel;
      tmp72Result8 = tmp72(tmp6(tmp2[81]), obj87, channel.id);
    }
    items25[5] = tmp72Result8;
    items25[6] = tmp72(tmp(tmp2[82]).MemberActionsChatInputBannerGuardedOuter, { channel });
    items25[7] = tmp72(tmp(tmp2[83]).DoubleTapToReactChatInputBanner, { channel });
    tmp72Result9 = null;
    if (tmp28) {
      obj88 = { channelId: null };
      obj88.channelId = channel.id;
      tmp72Result9 = tmp72(tmp6(tmp2[84]), obj88);
    }
    items25[8] = tmp72Result9;
    tmp72Result10 = null;
    if (tmp48 !== tmp(tmp2[53]).KeyboardTypes.EXPRESSION) {
      obj89 = { ref: null, analyticsLocations: null, channel: null, canMentionEveryone: null, keyboardType: null, onChangeAutoCompleteVisibility: null, commandsDisabled: null, canOnlyUseTextCommands: null, chatInputRef: null, screenIndex: null };
      obj89.ref = tmp61.chatInputAutocomplete;
      obj89.analyticsLocations = analyticsLocations;
      obj89.channel = channel;
      obj89.canMentionEveryone = canMentionEveryone;
      obj89.keyboardType = tmp48;
      obj89.onChangeAutoCompleteVisibility = memo2.handleChangeAutoCompleteVisibility;
      obj89.commandsDisabled = tmp40;
      obj89.canOnlyUseTextCommands = tmp41;
      obj89.chatInputRef = tmp61.chatInput;
      obj89.screenIndex = screenIndex;
      tmp72Result10 = tmp72(tmp6(tmp2[85]), obj89);
    }
    items25[9] = tmp72Result10;
    obj90 = { ref: tmp61.chatInputAppCommandManager, canOnlyUseTextCommands: tmp41, channel, chatInputRef: tmp61.chatInput, chatInputStateRef: tmp61.state, commandsDisabled: tmp40 };
    items25[10] = tmp72(tmp6(tmp2[86]), obj90);
    obj91 = { style: null, onLayout: memo2.handleLayoutOfInputContainer, children: null };
    items27 = [, ];
    ({ container: arr28[0], floatingContainer: arr28[1] } = tmp10);
    obj91.style = items27;
    items28 = [, , , , ];
    items28[0] = tmp73;
    tmp6Result4 = tmp6(tmp2[87]);
    tmp98 = Fragment;
    items28[1] = tmp72(tmp6(tmp2[88]), { channel });
    items29 = [, , ];
    items29[0] = tmp10.floatingInputBox;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
    }
    items29[1] = floatingInputBoxPressed;
    floatingInputBoxTyping = result1;
    if (result1) {
      floatingInputBoxTyping = tmp10.floatingInputBoxTyping;
    }
    obj92 = { style: items29, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp49, importantForAccessibility: null, children: null };
    items29[2] = floatingInputBoxTyping;
    str2 = undefined;
    if (tmp49) {
      str2 = "no-hide-descendants";
    }
    obj92.importantForAccessibility = str2;
    obj93 = { channel, chatInputRef: tmp61.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    items30 = [, , ];
    items30[0] = tmp72(tmp6(tmp2[89]), obj93);
    tmp72Result11 = tmp72Result15;
    if (tmp72Result15) {
      str3 = "large";
      tmp72Result11 = "large" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp72Result11) {
      obj94 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
      ({ chatInputEmojiSuggestions: obj57.ref, chatInput: obj57.chatInputRef, state: obj57.chatInputStateRef } = tmp61);
      obj94.channel = channel;
      obj94.suppressed = tmp30;
      tmp72Result11 = tmp72(tmp(tmp2[90]).EmojiSuggestionBarLarge, obj94);
    }
    items30[1] = tmp72Result11;
    obj95 = { style: tmp10.floatingMainContents, children: null };
    tmp72Result12 = null;
    if (null != tmp72Result) {
      obj96 = { style: null, children: null };
      obj97 = { paddingBottom: null, paddingLeft: null };
      obj97.paddingBottom = result;
      obj97.paddingLeft = result;
      obj96.style = obj97;
      obj96.children = tmp72Result;
      tmp72Result12 = tmp72(tmp83, obj96);
    }
    items31 = [, , , , ];
    items31[0] = tmp72Result12;
    obj98 = { style: null, children: null };
    items32 = [, ];
    items32[0] = tmp10.inputFlat;
    items32[1] = { paddingBottom: result };
    obj98.style = items32;
    items33 = [, ];
    items33[0] = tmp72(tmp6(tmp2[91]), {});
    items33[1] = tmp80;
    obj98.children = items33;
    items31[1] = tmp78(tmp83, obj98);
    tmp72Result13 = null;
    if (editable) {
      obj99 = { style: null, children: null };
      obj100 = { paddingBottom: null };
      obj100.paddingBottom = result;
      obj99.style = obj100;
      obj101 = { ref: null, channel: null, keyboardType: null, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null, suggestedExpressions: null, suggestedExpressionsRef: null };
      obj101.ref = tmp61.chatInputRightActions;
      obj101.channel = channel;
      obj101.keyboardType = tmp48;
      tmp6Result5 = tmp6(tmp2[92]);
      if (!tmp26) {
        tmpResult29 = tmp(tmp2[70]);
        result3 = tmpResult29.isPremiumGiftingSupported();
      }
      obj101.shouldShowGiftButton = result3;
      ({ handlePressAction: obj64.onPressAction, handlePressExpression: obj64.onPressExpression } = memo2);
      obj101.suggestedExpressions = memo3;
      obj101.suggestedExpressionsRef = tmp61.chatInputEmojiSuggestions;
      obj99.children = tmp72(tmp6Result5, obj101);
      tmp72Result13 = tmp72(tmp83, obj99);
    }
    items31[2] = tmp72Result13;
    items31[3] = tmp72Result1;
    obj102 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp61.chatInputCharCounter };
    items31[4] = tmp72(tmp6(tmp2[93]), obj102);
    obj95.children = items31;
    items30[2] = tmp78(tmp83, obj95);
    obj92.children = items30;
    items28[2] = tmp78(tmp83, obj92);
    tmp72Result14 = null != memo;
    if (tmp72Result14) {
      obj103 = { style: null };
      obj103.style = memo;
      tmp72Result14 = tmp72(tmp6(tmp2[94]), obj103);
    }
    items28[3] = tmp72Result14;
    if (tmp72Result15) {
      str4 = "small";
      tmp72Result15 = "small" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp72Result15) {
      obj104 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null, anchorTop: null, onOccupiedHeightChange: null };
      ({ chatInputEmojiSuggestions: obj68.ref, chatInput: obj68.chatInputRef, state: obj68.chatInputStateRef } = tmp61);
      obj104.channel = channel;
      obj104.suppressed = tmp30;
      obj104.anchorTop = tmp19;
      obj104.onOccupiedHeightChange = callback1;
      tmp72Result15 = tmp72(tmp(tmp2[95]).EmojiSuggestionBarSmall, obj104);
    }
    items28[4] = tmp72Result15;
    obj91.children = tmp78(tmp98, { children: items28 });
    items25[11] = tmp72(tmp6Result4, obj91);
    tmp72Result16 = null;
    if (null != refreshChatInputCoachmark) {
      obj105 = { buttonRef: null };
      obj105.buttonRef = ref1;
      tmp106 = obj105;
      tmp107 = refreshChatInputCoachmark;
      tmp6Result6 = tmp6(tmp2[39]);
      merged = Object.assign(refreshChatInputCoachmark);
      tmp72Result16 = tmp72(tmp6Result6, obj105);
    }
    items25[12] = tmp72Result16;
    items25[13] = tmp72(tmp6(tmp2[96]), { buttonRef: ref1, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
    obj79.children = items25;
    tmp78Result = tmp78(tmp83, obj79);
    tmp72Result17 = tmp78Result;
    if (!tmp26) {
      obj106 = { channel: null, screenIndex: null, canSendMessages: null, canCreateThreads: null, onJumpToPresent: null, isReadonly: null, children: null };
      obj106.channel = channel;
      obj106.screenIndex = screenIndex;
      obj106.canSendMessages = editable;
      obj106.canCreateThreads = canCreateThreads;
      obj106.onJumpToPresent = onJumpToPresent;
      obj106.isReadonly = !editable;
      obj106.children = tmp78Result;
      tmp72Result17 = tmp72(tmp6(tmp2[97]), obj106);
    }
    return tmp72Result17;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, findNodeHandle: closure_8 } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(14570).useVoiceMessagesUIStore;
const DraftType = fn(8725).DraftType;
const useChatBottomManagerUIStore = fn(11865);
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
const ChatInputConstants = fn(13804);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: closure_31 } = Constants);
const AppLauncherRouteName = fn(1501).AppLauncherRouteName;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const EmojiInteractionPoint = fn(1391).EmojiInteractionPoint;
const MediaKeyboardConstants = fn(1626);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
const jsxProd = fn(21);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
const createStyles = fn(5306);
let closure_40 = createStyles.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  const obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: dependencyMap2 - dependencyMap3, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { container: null, inputDefault: null, accessories: null, floatingContainer: null, floatingInputBox: null, floatingInputBoxPressed: null, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null, characterCounter: null };
  obj.backgroundColor = BACKGROUND_BASE_LOW;
  obj.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj2.container = obj;
  obj2.inputDefault = { alignSelf: "stretch", marginLeft: 0, marginTop: 0 };
  obj2.accessories = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  obj2.floatingContainer = { borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  const obj3 = { borderTopWidth: 0, borderColor: "transparent", borderRadius: nativeDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj2.floatingInputBox = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj2.floatingInputBoxPressed = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj2.floatingInputBoxTyping = { shadowOpacity: 0, elevation: 0 };
  const obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj2.floatingMainContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  const obj6 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  let num = -6;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj2.inputFlat = { flex: 1, justifyContent: "center", marginLeft: num };
  obj2.floatingScrimOverlap = { marginTop: -arg1 / 2 };
  obj2.overflowVisible = { overflow: "visible" };
  const rect = { position: "absolute", top: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, right: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL };
  obj2.characterCounter = rect;
  return obj2;
});
let closure_41 = { code: "(function ChatInputTsx1(){let[textFieldHeight]=this.__closure;return{minHeight:textFieldHeight.get()};})" };
ChatInput.displayName = "ChatInput";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default noop.memo(ChatInput);