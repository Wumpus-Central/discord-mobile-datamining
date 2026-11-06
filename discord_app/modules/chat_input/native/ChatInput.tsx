// === Module 13930: ChatInput ===

// Module 13930 (ChatInput)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7483 */;
import ThreadHooks from "ThreadHooks" /* 7530 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8437 */;
import DiceRollStore from "DiceRollStore" /* 13931 */;
import NativeMenuStore from "NativeMenuStore" /* 10340 */;
import PendingReplyStore from "PendingReplyStore" /* 7921 */;
import DraftStore from "DraftStore" /* 7800 */;
import EditMessageStore from "EditMessageStore" /* 7922 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8298 */;

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
    editable = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    isCoachmarkVisible = undefined;
    dismissCoachmark = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    registerViewTag = undefined;
    unregisterViewTag = undefined;
    closure_20 = undefined;
    tmp = closure_0;
    tmp2 = closure_3;
    ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef, ref } = global);
    obj = closure_0(closure_3[24]);
    mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
    closure_2 = mobileEmojiSuggestionsConfig;
    InlineEmojiSuggestionsEnabled = closure_0(closure_3[25]).InlineEmojiSuggestionsEnabled;
    tmp67Result14 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
    closure_3 = tmp67Result14;
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
    tmpResult4 = tmp(tmp2[27]);
    token2 = gradientValue;
    if (gradientValue == null) {
      token2 = tmpResult4.useToken(screenIndex(tmp2[22]).colors.BACKGROUND_BASE_LOWER);
    }
    tmpResult5 = tmp(tmp2[27]);
    token3 = tmpResult5.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
    tmpResult6 = tmp(tmp2[27]);
    token4 = tmpResult6.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
    tmpResult7 = tmp(tmp2[27]);
    obj10 = closure_6;
    token5 = tmpResult7.useToken(tmp6(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
    tmp15 = closure_5(closure_6.useState(false), 2);
    [floatingInputBoxPressed, closure_4] = tmp15;
    tmp16 = closure_5(closure_6.useState(0), 2);
    [tmp17, closure_5] = tmp16;
    items = [];
    items[0] = screenIndex;
    callback = closure_6.useCallback((nativeEvent) => {
      _undefined3(nativeEvent.nativeEvent.layout.y);
    }, []);
    items1 = [];
    items1[0] = screenIndex;
    callback1 = closure_6.useCallback((arg0) => {
      dependencyMap(screenIndex, arg0);
    }, items);
    effect = closure_6.useEffect(() => () => {
      closure_20(screenIndex, 0);
    }, items1);
    tmp21 = null != threadCreationCallback;
    closure_6 = tmp21;
    tmp22 = channel.isPrivate() && !tmp21;
    tmp23 = editable((channelId) => channelId.channelId === _undefined.id);
    tmpResult8 = tmp(tmp2[28]);
    typingUserIdsForDisplay = tmpResult8.useTypingUserIdsForDisplay(channel.id, 1);
    tmp25 = closure_22(screenIndex);
    closure_7 = tmp25;
    tmpResult9 = tmp(tmp2[28]);
    result1 = tmpResult9.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp25);
    tmp27 = useChatIsAtBottom(screenIndex);
    tmp28 = token1;
    if (tmp27) {
      tmp28 = token5;
    }
    tmp29 = token4;
    if (tmp27) {
      tmp29 = token3;
    }
    tmpResult10 = tmp(tmp2[29]);
    items2 = [];
    items2[0] = closure_16;
    stateFromStores = tmpResult10.useStateFromStores(items2, () => {
      let editingTextValue = null;
      if (!closure_6) {
        editingTextValue = EditMessageStore.getEditingTextValue(_undefined.id);
      }
      return editingTextValue;
    });
    closure_8 = stateFromStores;
    tmpResult11 = tmp(tmp2[29]);
    items3 = [];
    items3[0] = closure_12;
    stateFromStores1 = tmpResult11.useStateFromStores(items3, () => {
      let pendingReply;
      if (!closure_6) {
        pendingReply = PendingReplyStore.getPendingReply(_undefined.id);
      }
      return pendingReply;
    });
    closure_9 = stateFromStores1;
    tmpResult12 = tmp(tmp2[29]);
    items4 = [];
    items4[0] = registerViewTag;
    stateFromStores2 = tmpResult12.useStateFromStores(items4, () => {
      if (closure_6) {
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
    items5 = [, ];
    items5[0] = channel.id;
    items5[1] = tmp21;
    memo = stateFromStores;
    if (stateFromStores == null) {
      memo = obj10.useMemo(() => DraftStore.getDraft(_undefined.id, closure_6 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items5);
    }
    tmpResult13 = tmp(tmp2[29]);
    items6 = [];
    items6[0] = closure_17;
    items7 = [, ];
    items7[0] = channel;
    items7[1] = tmp21;
    stateFromStoresObject = tmpResult13.useStateFromStoresObject(items6, () => {
      let canResult1 = PermissionStore.can(constants3.MENTION_EVERYONE, _private);
      const canResult = PermissionStore.can(constants3.ATTACH_FILES, _private);
      const canResult2 = PermissionStore.can(constants3.SEND_MESSAGES, _private);
      const canResult3 = PermissionStore.can(constants3.SEND_VOICE_MESSAGES, _private);
      const tmp6 = PermissionStore.can(constants3.CREATE_PUBLIC_THREADS, _private) || PermissionStore.can(constants3.CREATE_PRIVATE_THREADS, _private);
      let isPrivateResult = _private.isPrivate();
      const canResult4 = PermissionStore.can(constants3.SEND_MESSAGES_IN_THREADS, _private);
      let tmp11 = canResult4;
      const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(_private);
      if (!closure_6) {
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
        tmp14 = !closure_6;
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
        tmp15 = !closure_6;
      }
      obj4.canUpload = tmp15;
      if (!isPrivateResult) {
        isPrivateResult = canResult3;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp13;
      }
      if (isPrivateResult) {
        isPrivateResult = !closure_6;
      }
      obj4.canSendVoiceMessage = isPrivateResult;
      obj4.editable = !tmp13;
      obj4.canCreateThreads = tmp6;
      return obj4;
    }, items7);
    ({ canUpload, editable } = stateFromStoresObject);
    ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
    analyticsLocations = tmp6(tmp2[31])().analyticsLocations;
    tmp35 = tmp21;
    if (!tmp21) {
      tmp35 = null != stateFromStores;
    }
    if (!tmp35) {
      tmpResult14 = tmp(tmp2[30]);
      tmp35 = !tmpResult14.getIsActiveChannelOrUnarchivableThread(channel);
    }
    tmp36 = null != stateFromStores1;
    tmpResult15 = tmp(tmp2[30]);
    canStartThread = tmpResult15.useCanStartThread(channel);
    if (canStartThread) {
      tmp38 = ChannelTypesSets;
      GUILD_THREADS_ONLY = ChannelTypesSets.GUILD_THREADS_ONLY;
      canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
    }
    if (canStartThread) {
      canStartThread = !tmp21;
    }
    tmpResult16 = tmp(tmp2[32]);
    tmp39 = tmpResult16.useCanPostPollsInChannel(channel) && !tmp21;
    closure_11 = token;
    tmpResult17 = tmp(tmp2[33]);
    sharedValue = tmpResult17.useSharedValue(token);
    closure_12 = sharedValue;
    tmpResult18 = tmp(tmp2[33]);
    sharedValue1 = tmpResult18.useSharedValue(token);
    closure_13 = sharedValue1;
    items8 = [, , ];
    items8[0] = sharedValue1;
    items8[1] = token;
    items8[2] = sharedValue;
    effect1 = obj10.useEffect(() => {
      const result = sharedValue.set(token);
      const result1 = sharedValue1.set(token);
    }, items8);
    tmp43 = tmp6(tmp2[34])();
    tmp44 = closure_13((startTimeMillis) => null != startTimeMillis.startTimeMillis);
    result3 = !tmp21;
    isAppLauncherEnabled = result3;
    if (!tmp21) {
      tmpResult19 = tmp(tmp2[35]);
      isAppLauncherEnabled = tmpResult19.getIsAppLauncherEnabled(channel);
    }
    tmpResult20 = tmp(tmp2[29]);
    items9 = [];
    items9[0] = closure_9;
    stateFromStores3 = tmpResult20.useStateFromStores(items9, () => ApplicationCommandStore.getActiveCommand(_undefined.id));
    obj1 = { channel, isReadonly: !editable, isCreatingThread: tmp21 };
    tmp48 = tmp6(tmp2[36])(obj1);
    ({ placeholder, accessibilityLabel } = tmp48);
    tmpResult21 = tmp(tmp2[33]);
    items10 = [, ];
    items10[0] = closure_41;
    items10[1] = sharedValue1;
    closure_0 = undefined;
    [tmp49, tmp50] = items10;
    class ChatInputTsx1 {
      constructor() {
        obj = { minHeight: closure_0.get() };
        return obj;
      }
    }
    items11 = [];
    items11[0] = tmp50;
    ChatInputTsx1.__closure = items11;
    ChatInputTsx1.__workletHash = 423981813056;
    ChatInputTsx1.__initData = tmp49;
    animatedStyle = tmpResult21.useAnimatedStyle(ChatInputTsx1);
    ref1 = obj10.useRef(null);
    tmpResult22 = tmp(tmp2[37]);
    obj68 = { disabled: !editable };
    refreshChatInputCoachmark = tmpResult22.useRefreshChatInputCoachmark(obj68);
    tmpResult23 = tmp(tmp2[38]);
    tmp54 = editable;
    if (editable) {
      tmp54 = result3;
    }
    if (tmp54) {
      tmp54 = null == refreshChatInputCoachmark;
    }
    scheduledMessageDraftCoachmarkState = tmpResult23.useScheduledMessageDraftCoachmarkState({ isEligible: tmp54 });
    isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
    dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
    obj69 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
    tmp56 = tmp6(tmp2[39])(obj69);
    closure_16 = tmp56;
    items12 = [];
    items12[0] = tmp56;
    effect2 = obj10.useEffect(() => {
      const current = closure_16.chatInput.current;
      current.setText(closure_16.props.current.defaultValue);
    }, items12);
    items13 = [, , , ];
    items13[0] = tmp56;
    items13[1] = channel;
    items13[2] = stateFromStores;
    items13[3] = stateFromStores1;
    effect3 = obj10.useEffect(() => {
      const current = closure_16.propsPrev.current;
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
        const current2 = closure_16.chatInput.current;
        if (current2 != null) {
          current2.focus();
        }
      }
      const id = closure_16.propsPrev.current.channel.id;
      if (id !== _undefined.id) {
        if (id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
          const current4 = closure_16.chatInput.current;
          if (current4 != null) {
            current4.setText(closure_16.props.current.defaultValue);
          }
        }
      }
      if (pendingEdit !== stateFromStores) {
        const current3 = closure_16.chatInput.current;
        if (current3 != null) {
          let str = "";
          if (null != stateFromStores) {
            str = stateFromStores;
          }
          current3.setText(str);
        }
      }
    }, items13);
    items14 = [];
    items14[0] = tmp56;
    effect4 = obj10.useEffect(() => {
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
      let ComponentDispatch = _undefined(closure_3[41]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.TEXTAREA_FOCUS, handleOpenKeyboard);
      };
    }, items14);
    items15 = [, ];
    items15[0] = tmp56;
    items15[1] = sharedValue;
    memo1 = obj10.useMemo(() => {
      let obj = {
        handleBlur(nativeEvent) {
          const result = c0(1626).setIsAnyChatInputFocused(false);
          const result1 = memo1.handleTextOrFocusChange(str, false);
          closure_1_16.state.current.focused = false;
          _undefined2(false);
          const current = closure_1_16.chatInputCover.current;
          if (current != null) {
            current.focused(false);
          }
          const current2 = closure_1_16.chatInputAppCommandManager.current;
          if (current2 != null) {
            current2.updateState();
          }
          const current3 = closure_1_16.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: false, text: str, selectionStart: closure_1_16.state.current.selectionStart, selectionEnd: closure_1_16.state.current.selectionEnd };
            current3.setData(obj2);
          }
          const current4 = closure_1_16.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: false, text: str, selectionStart: closure_1_16.state.current.selectionStart, selectionEnd: closure_1_16.state.current.selectionEnd };
            current4.setData(obj3);
          }
          const current5 = closure_1_16.chatInputSendButton.current;
          if (current5 != null) {
            current5.setHasText(str.trim().length > 0);
          }
          const obj = c0(1626);
        },
        handleFocus(nativeEvent) {
          ({ start, end } = nativeEvent.nativeEvent);
          const result = c0(1626).setIsAnyChatInputFocused(true);
          closure_1_16.state.current.focused = true;
          _undefined2(true);
          closure_1_16.state.current.selectionStart = start;
          closure_1_16.state.current.selectionEnd = end;
          const result1 = memo1.handleTextOrFocusChange(closure_1_16.state.current.text, true);
          const result2 = memo1.trackEmojiSuggestionsExposureIfFocusedWithText(closure_1_16.state.current.text);
          const current = closure_1_16.chatInputAppCommandManager.current;
          if (current != null) {
            current.updateState();
          }
          const current2 = closure_1_16.chatInputCover.current;
          if (current2 != null) {
            current2.focused(true);
          }
          const current3 = closure_1_16.chatInputAutocomplete.current;
          if (current3 != null) {
            const obj2 = { focused: true, text: closure_1_16.state.current.text, selectionStart: start, selectionEnd: end };
            current3.setData(obj2);
          }
          const current4 = closure_1_16.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = { focused: true, text: closure_1_16.state.current.text, selectionStart: start, selectionEnd: end };
            current4.setData(obj3);
          }
          const obj = c0(1626);
        },
        handleChangeContentSize(nativeEvent) {
          const height = nativeEvent.nativeEvent.height;
          closure_1_16.state.current.textFieldContentSize = height;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldHeight = closure_1_16.state.current.textFieldHeight;
            const result = textFieldHeight.set(c0(13003).getChatInputHeightAnimationTiming(height, sharedValue.get()));
            const tmp2Result = c0(13003);
          }
          obj = c0(13999);
        },
        handleLayoutOfInputContainer(arg0) {
          const current = closure_1_16.chatInputAutocomplete.current;
          if (current != null) {
            current.setChatInputHeight(tmp.layout.height);
          }
        },
        handleLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          const height = layout.height;
          if (tmp) {
            if (null == closure_1_16.props.current.threadCreationCallback) {
              const current = closure_1_16.chatInput.current;
              const result = current.updateChatInputContainerHeightDebounced(height);
            }
          }
        },
        handleMaxHeightChanged() {
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldContentSize = closure_1_16.state.current.textFieldContentSize;
            if (0 !== textFieldContentSize) {
              const textFieldHeight = closure_1_16.state.current.textFieldHeight;
              const result = textFieldHeight.set(c0(13003).getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
              const tmpResult = c0(13003);
            }
          }
          obj = c0(13999);
        },
        handleChangeAutoCompleteVisibility(arg0) {
          unregisterViewTag(closure_1_16.props.current.screenIndex, arg0);
        },
        handlePasteCommand(arg0) {
          if (closure_1_16.state.current.focused) {
            const current = closure_1_16.chatInputAppCommandManager.current;
            if (current != null) {
              const applicationCommandManager = current.getApplicationCommandManager();
              if (applicationCommandManager != null) {
                applicationCommandManager.setPastedCommand(tmp, closure_1_16.props.current.channel);
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
      closure_0 = _undefined2(function*(arg0) {
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
                return { value: "flexDirection", done: true };
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
                  if (closure_1_16.state.current.focused) {
                    if (closure_1_16.props.current.canUpload) {
                      c3 = 2;
                      c4 = 1;
                      const obj6 = { value: closure_0(8311).getImageDimensionsIfMissing(closure_129_0, closure_129_1, closure_129_2), done: false };
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
                const obj8 = { channelId: closure_1_16.props.current.channel.id, file: null, draftType: null };
                const size = { uri: closure_129_0, originalUri: closure_129_0, width: closure_129_4.width, height: closure_129_4.height, mimeType: closure_129_3, platform: closure_0(8301).UploadPlatform.REACT_NATIVE, id: null };
                const obj7 = screenIndex(9884);
                size.id = closure_0(1266).v4();
                obj8.file = size;
                obj8.draftType = ChannelMessage.ChannelMessage;
                obj7.addFile(obj8);
                const obj10 = closure_0(1266);
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
          const result = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj21 = c0(5406);
          const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
          screenIndex(1252).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
          const obj22 = screenIndex(1252);
          const keyboardType = c0(5355).getKeyboardType();
          if (keyboardType === c0(1625).KeyboardTypes.APP_LAUNCHER) {
            const obj5 = { type: c0(1625).KeyboardTypes.APP_LAUNCHER };
            memo1.handleToggleKeyboard(obj5);
          } else {
            const keyboardType1 = c0(5355).getKeyboardType();
            if (keyboardType1 === c0(1625).KeyboardTypes.MEDIA) {
              const current = closure_1_16.chatInputActions.current;
              if (current != null) {
                current.focusPhotosButton();
              }
            }
            const obj8 = { type: c0(1625).KeyboardTypes.MEDIA, context: null };
            const obj11 = { target: constants7.CHAT };
            obj8.context = obj11;
            memo1.handleToggleKeyboard(obj8);
            const tmp42Result = c0(5355);
          }
          const obj24 = c0(5355);
        } else {
          let tmp35 = current2;
          if (constants.APPS === arg1) {
            const result1 = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj12 = c0(5406);
            c0(5916).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
            const obj13 = c0(5916);
            const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
            screenIndex(1252).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
            const obj14 = screenIndex(1252);
            const result2 = mobileEmojiSuggestionsConfig(11898).dismissNewActivityIndicator();
            const obj16 = mobileEmojiSuggestionsConfig(11898);
            if (tmp35 == null) {
              tmp35 = null;
            }
            const result3 = c0(12553).setAppLauncherA11yFocusReturnRef(tmp35);
            const obj18 = { type: c0(1625).KeyboardTypes.APP_LAUNCHER, context: null };
            const obj19 = { initialRouteName: constants5.HOME, initialSearchQuery: null };
            const obj17 = c0(12553);
            const appDMApplication = c0(12723).getAppDMApplication(closure_1_16.props.current.channel);
            let name;
            if (appDMApplication != null) {
              name = appDMApplication.name;
            }
            obj19.initialSearchQuery = name;
            obj18.context = obj19;
            memo1.handleToggleKeyboard(obj18);
            const tmp23Result = c0(12723);
          } else if (constants.ALL_PHOTOS === arg1) {
            const result4 = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj9 = c0(5406);
            const obj20 = {
              channel: closure_1_16.props.current.channel,
              uploadLimit,
              onDismissKeyboard() {
                    return closure_1_0(5353).dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    return closure_1_17.handleToggleKeyboard({ type: closure_0(1625).KeyboardTypes.SYSTEM });
                  },
              onSelectFiles(items) {
                    closure_0(10666).addImagesFromPicker(closure_1_16.props.current.channel.id, items, closure_0(8300).UploadOrigin.IMAGE_PICKER);
                  },
              draftType: dismissCoachmark.ChannelMessage
            };
            c0(10666).handleViewAllDialog(obj20);
            const obj10 = c0(10666);
          } else if (constants.CAMERA === arg1) {
            const result5 = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj6 = c0(5406);
            const obj23 = {
              channel: closure_1_16.props.current.channel,
              previewType: constants6.CAMERA_BUTTON,
              onDismissKeyboard() {
                    return closure_1_0(5353).dismissKeyboard();
                  },
              onRestoreKeyboard() {
                    return closure_1_17.handleToggleKeyboard({ type: closure_0(1625).KeyboardTypes.SYSTEM });
                  },
              onSelectFiles(items) {
                    closure_0(10666).addImagesFromPicker(closure_1_16.props.current.channel.id, items, closure_0(8300).UploadOrigin.IMAGE_PICKER);
                  }
            };
            c0(10666).handleCameraDialog(obj23);
            const obj7 = c0(10666);
          } else if (constants.NITRO_GIFT === arg1) {
            const result6 = screenIndex(2016).markPotentialBadState();
            const obj = screenIndex(2016);
            const result7 = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = c0(5406);
            if (obj3.isAndroid()) {
              c0(5353).dismissKeyboard();
              const tmp5Result = c0(5353);
            }
            obj3 = c0(1377);
            c0(10666).handleSelectGift(closure_1_16.props.current.analyticsLocations, closure_1_16.chatInput, tmp35);
            const tmp5Result2 = c0(10666);
          } else if (constants.THREAD === arg1) {
            const result8 = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj28 = c0(5406);
            c0(10666).handleSelectThread(closure_1_16.props.current.channel, closure_1_16.chatInput);
            const obj29 = c0(10666);
          }
        }
      };
      obj.handlePollsPress = function handlePollsPress() {
        const result = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = c0(5406);
        screenIndex(1252).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, { type: constants3.POLLS, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id });
        const obj2 = screenIndex(1252);
        const obj3 = { type: constants3.POLLS, channel_id: closure_1_16.props.current.channel.id, guild_id: closure_1_16.props.current.channel.guild_id };
        c0(5353).dismissKeyboard();
        const obj4 = c0(5353);
        c0(12726).openCreatePollModal({
          channel: closure_1_16.props.current.channel,
          onCancel() {
            return closure_1_17.handleToggleKeyboard({ type: closure_0(1625).KeyboardTypes.SYSTEM });
          }
        });
      };
      obj.handleAttachPress = function handleAttachPress() {
        const result = c0(5406).triggerHapticFeedback(c0(5406).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = c0(5406);
        c0(10666).handleAttachFile({
          channel: closure_1_16.props.current.channel,
          uploadLimit,
          onDismissKeyboard() {
            return closure_1_0(dependencyMap[57]).dismissKeyboard();
          },
          onRestoreKeyboard() {
            return closure_1_17.handleToggleKeyboard({ type: closure_0(1625).KeyboardTypes.SYSTEM });
          },
          onSelectFiles(items) {
            closure_0(10666).addImagesFromPicker(props.props.current.channel.id, items, closure_0(8300).UploadOrigin.FILE_ATTACHMENT);
          }
        });
      };
      obj.handlePressExpression = function handlePressExpression(arg0, unlocked) {
        const result = c0(10078).initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
        let tmp4 = null != unlocked;
        if (tmp4) {
          tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
          const tmp5 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
        }
        let type = arg0;
        if (arg0 == null) {
          type = c0(5355).getKeyboardContextForType(c0(1625).KeyboardTypes.EXPRESSION).type;
          const tmpResult = c0(5355);
        }
        const obj2 = { type: c0(1625).KeyboardTypes.EXPRESSION, context: null };
        const obj3 = { type, suggestedEmojis: null };
        let tmp7;
        if (tmp4) {
          tmp7 = unlocked;
        }
        obj3.suggestedEmojis = tmp7;
        obj2.context = obj3;
        memo1.handleToggleKeyboard(obj2);
        const obj = c0(10078);
      };
      obj.handlePressSend = function handlePressSend() {
        const current = closure_1_16.chatInput.current;
        current.handleSend();
      };
      obj.handleSelectionOrTextChange = function handleSelectionOrTextChange(nativeEvent) {
        ({ start, end, text, editId } = nativeEvent.nativeEvent);
        closure_1_16.state.current.editId = editId;
        closure_1_16.state.current.selectionStart = start;
        closure_1_16.state.current.selectionEnd = end;
        const result = memo1.handleTextOrFocusChange(text, closure_1_16.state.current.focused);
        const result1 = memo1.trackEmojiSuggestionsExposureIfFocusedWithText(text);
        const current = closure_1_16.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = closure_1_16.chatInputAutocomplete.current;
        if (current2 != null) {
          const obj = { focused: closure_1_16.state.current.focused, text, selectionStart: start, selectionEnd: end };
          current2.setData(obj);
        }
        const current3 = closure_1_16.chatInputEmojiSuggestions.current;
        if (current3 != null) {
          const obj2 = { focused: closure_1_16.state.current.focused, text, selectionStart: start, selectionEnd: end };
          current3.setData(obj2);
        }
        const current4 = closure_1_16.chatInputSendButton.current;
        if (current4 != null) {
          current4.setHasText(text.trim().length > 0);
        }
        if (closure_1_16.state.current.editId !== editId) {
          const current5 = closure_1_16.chatInput.current;
          current5.handleTextChanged(text);
          const current6 = closure_1_16.chatInputCharCounter.current;
          if (current6 != null) {
            const result2 = current6.onMessageLengthChanged(text.length);
          }
          c0(10013).hideContextMenu();
          const obj3 = c0(10013);
        }
      };
      obj.handleTapAction = function handleTapAction(nativeEvent) {
        const tapAction = nativeEvent.nativeEvent.tapAction;
        if ("tapAttachment" === tapAction.action) {
          let current = closure_1_16.chatInput.current;
          current.blur();
          const obj = c0(14000);
          const current2 = closure_1_16.chatInput.current;
          const applicationCommandManager = current2.getApplicationCommandManager();
          ({ channelId, optionName } = tapAction);
          let fn;
          if (closure_1_16.state.current.focused) {
            fn = () => {
              const current = chatInput.chatInput.current;
              return current.openSystemKeyboard();
            };
          }
          const result = obj.openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
        }
      };
      obj.trackEmojiSuggestionsExposureIfFocusedWithText = function trackEmojiSuggestionsExposureIfFocusedWithText(text) {
        let focused = closure_1_16.state.current.focused;
        if (focused) {
          focused = text.length > 0;
        }
        if (focused) {
          const result = c0(13934).trackMobileEmojiSuggestionsExposure({ location: "ChatInputFocusedWithText" });
          const obj = c0(13934);
        }
      };
      obj.handleTextOrFocusChange = function handleTextOrFocusChange(text, focused) {
        if (text.length > 0) {
          if (!focused) {
            const maxMessageLength = c0(9881).getMaxMessageLength();
            if (tmp16) {
              screenIndex(1252).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
              const obj3 = screenIndex(1252);
            }
            closure_1_16.state.current.textPrev = closure_1_16.state.current.text;
            closure_1_16.state.current.text = text;
            const obj2 = c0(9881);
            tmp16 = closure_1_16.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
          }
          if (token.isOpen()) {
            screenIndex(10683).hideNativeMenu();
            const obj = screenIndex(10683);
          }
          const current2 = closure_1_16.chatInputActions.current;
          if (current2 != null) {
            current2.onDismissActions(focused);
          }
          const current3 = closure_1_16.chatInputRightActions.current;
          if (current3 != null) {
            current3.onDismissActions(focused);
          }
        }
        if (0 === text.length) {
          const current4 = closure_1_16.chatInputActions.current;
          if (current4 != null) {
            current4.onShowActions(focused);
          }
          const current = closure_1_16.chatInputRightActions.current;
          if (current != null) {
            current.onShowActions(focused);
          }
        }
      };
      obj.handleTextFlushed = function handleTextFlushed(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const current = closure_1_16.chatInputTextFlushedResponses.current;
        value = current.get(nativeEvent.requestId);
        if (value != null) {
          value(nativeEvent.text);
        }
      };
      obj.handleToggleKeyboard = function handleToggleKeyboard(type) {
        if (token.isOpen()) {
          screenIndex(10683).hideNativeMenu();
          const obj = screenIndex(10683);
        }
        if (type.type !== c0(1625).KeyboardTypes.SYSTEM) {
          if (type.type !== tmp4Result.getKeyboardType()) {
            const current = closure_1_16.chatInput.current;
            current.openCustomKeyboard(type);
          }
          tmp4Result = c0(5355);
        }
        const current2 = closure_1_16.chatInput.current;
        current2.openSystemKeyboard();
      };
      return obj;
    }, items15);
    closure_17 = memo1;
    items16 = [, , , ];
    items16[0] = tmp67Result14;
    items16[1] = mobileEmojiSuggestionsConfig.style;
    items16[2] = tmp56;
    items16[3] = tmp25;
    items17 = [, ];
    items17[0] = tmp21;
    items17[1] = tmp56;
    memo2 = obj10.useMemo(() => {
      let tmp;
      if (closure_3) {
        if ("button" === mobileEmojiSuggestionsConfig.style) {
          const obj = { chatInputRef: null, chatInputStateRef: null, suppressed: null };
          ({ chatInput: obj.chatInputRef, state: obj.chatInputStateRef } = closure_16);
          obj.suppressed = suppressed;
          tmp = obj;
        }
      }
      return tmp;
    }, items16);
    callback2 = obj10.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      const height = layout.height;
      if (tmp) {
        if (!closure_6) {
          const current = closure_16.chatInput.current;
          const result = current.updateChatInputContainerHeightDebounced(height);
        }
      }
      tmp = 0 !== height && 0 !== layout.width;
    }, items17);
    tmp63 = tmp6(tmp2[43])({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
    registerViewTag = tmp63.registerViewTag;
    unregisterViewTag = tmp63.unregisterViewTag;
    closure_20 = obj10.useRef(null);
    items18 = [, , ];
    items18[0] = tmp56;
    items18[1] = registerViewTag;
    items18[2] = unregisterViewTag;
    callback3 = obj10.useCallback((current) => {
      if (null != ref.current) {
        unregisterViewTag(ref.current);
        ref.current = null;
      }
      closure_16.chatInputNative.current = current;
      if (null != current) {
        const tmp5 = React5(current);
        if (null != tmp5) {
          ref.current = tmp5;
          registerViewTag(tmp5);
        }
      }
    }, items18);
    items19 = [, ];
    items19[0] = editable;
    items19[1] = tmp56;
    callback4 = obj10.useCallback(() => true, []);
    tmp67 = jsx;
    callback5 = obj10.useCallback(() => {
      if (editable) {
        const current = closure_16.chatInput.current;
        current.openSystemKeyboard();
      }
    }, items19);
    obj70 = { canUpload, channelId: channel.id, screenIndex };
    tmp67Result = null;
    tmp68 = jsx(tmp6(tmp2[66]), obj70);
    if (editable) {
      obj71 = { ref: null, channel: null, onPressAction: null, canStartThreads: null, isAppLauncherEnabled: null, keyboardType: null, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null, onContextMenuOpen: null };
      obj71.ref = tmp56.chatInputActions;
      obj71.channel = channel;
      obj71.onPressAction = memo1.handlePressAction;
      obj71.canStartThreads = canStartThread;
      obj71.isAppLauncherEnabled = isAppLauncherEnabled;
      obj71.keyboardType = tmp43;
      tmp71 = canUpload;
      tmp6Result = tmp6(tmp2[67]);
      if (canUpload) {
        tmp71 = null == stateFromStores3;
      }
      if (!tmp71) {
        tmp71 = tmp39;
      }
      obj71.shouldPhotosButtonBeDisabled = !tmp71;
      obj71.canUpload = canUpload;
      result2 = result3;
      if (!tmp21) {
        tmpResult24 = tmp(tmp2[68]);
        result2 = tmpResult24.isPremiumGiftingSupported();
      }
      obj71.shouldShowGiftButton = result2;
      obj71.canPostPolls = tmp39;
      ({ handlePollsPress: obj31.onPollsPress, handleAttachPress: obj31.onAttachPress } = memo1);
      obj71.photosButtonExternalRef = ref1;
      obj71.onContextMenuOpen = function onContextMenuOpen() {
        if (isCoachmarkVisible) {
          dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
        }
      };
      tmp67Result = tmp67(tmp6Result, obj71);
    }
    tmp73 = jsxs;
    obj72 = { style: null, children: null };
    items20 = [, ];
    items20[0] = tmp10.inputDefault;
    items20[1] = animatedStyle;
    obj72.style = items20;
    obj73 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: 5 };
    tmp6Result1 = tmp6(tmp2[69]);
    obj73.customKeyboard = tmp(tmp2[70]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
    obj73.editable = editable;
    ({ handleFocus: obj34.onBeginFocus, handleBlur: obj34.onEndBlur, handleChangeContentSize: obj34.onChangeContentSize, handleMaxHeightChanged: obj34.onMaxHeightChanged, handleSelectionOrTextChange: obj34.onSelectionOrTextChange, handleTextFlushed: obj34.onTextFlushed, handlePasteImage: obj34.onPasteImage, handlePasteCommand: obj34.onPasteCommand, handleTapAction: obj34.onTapAction, handlePressSend: obj34.onRequestSend } = memo1);
    obj73.placeholder = placeholder;
    obj73.ref = callback3;
    obj73.setNoExtractUI = setNoExtractUI;
    obj73.shouldShowCursor = tmp43 !== tmp(tmp2[51]).KeyboardTypes.MEDIA;
    items21 = [, ];
    items21[0] = tmp67(tmp6Result1, obj73);
    obj74 = { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp56.chatInputCover };
    items21[1] = tmp67(tmp6(tmp2[71]), obj74);
    obj72.children = items21;
    tmp75 = jsxs(tmp6(tmp2[33]).View, obj72);
    if (editable) {
      obj75 = { ref: null, canSendVoiceMessage: null, channel: null, defaultValue: null, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
      obj75.ref = tmp56.chatInputSendButton;
      obj75.canSendVoiceMessage = canSendVoiceMessage;
      obj75.channel = channel;
      obj75.defaultValue = memo;
      tmp6Result2 = tmp6(tmp2[72]);
      if (stateFromStores2) {
        stateFromStores2 = canUpload;
      }
      obj75.hasPendingAttachments = stateFromStores2;
      obj75.hasPendingEdit = null != stateFromStores;
      obj75.onSendMessage = memo1.handlePressSend;
      obj75.requireTextContent = result3;
      tmp67Result1 = tmp67(tmp6Result2, obj75);
    } else {
      tmp67Result1 = null;
    }
    tmp78 = closure_7;
    obj76 = { collapsable: false, onLayout: callback2, style: null, children: null };
    items22 = [, , ];
    items22[0] = tmp6(tmp2[73])({ isCreatingThread: tmp21 });
    items22[1] = tmp10.overflowVisible;
    floatingScrimOverlap = result3;
    if (!tmp21) {
      floatingScrimOverlap = tmp10.floatingScrimOverlap;
    }
    items22[2] = floatingScrimOverlap;
    obj76.style = items22;
    tmp67Result2 = !result1;
    if (!result1) {
      obj77 = { gradientHeight: null, inline: false, scrimBase: null };
      obj77.gradientHeight = tmp28;
      obj77.scrimBase = token2;
      tmp67Result2 = tmp67(tmp(tmp2[74]).ChatInputScrimGradient, obj77);
    }
    items23 = [, , , , , , , , , , , , , ];
    items23[0] = tmp67Result2;
    tmp67Result3 = result1;
    if (result1) {
      tmpResult25 = tmp(tmp2[75]);
      hex2rgbResult = tmpResult25.hex2rgb(token2, 1);
      if (hex2rgbResult == null) {
        hex2rgbResult = token2;
      }
      obj78 = { style: null, pointerEvents: "none" };
      rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
      rect.backgroundColor = hex2rgbResult;
      obj78.style = rect;
      tmp67Result3 = tmp67(tmp78, obj78);
    }
    items23[1] = tmp67Result3;
    items23[2] = tmp67(tmp(tmp2[76]).ChatInputAccessibilityDivider, {});
    tmp67Result4 = null;
    if (tmp22) {
      obj79 = { channel: null, hasInputText: null };
      obj79.channel = channel;
      str = "";
      tmp84 = "" !== memo;
      tmp6Result3 = tmp6(tmp2[77]);
      if (!tmp84) {
        current = tmp56.chatInput.current;
        text = undefined;
        if (current != null) {
          text = current.getText();
        }
        tmp84 = "" !== text;
      }
      obj79.hasInputText = tmp84;
      tmp67Result4 = tmp67(tmp6Result3, obj79);
    }
    items23[3] = tmp67Result4;
    obj80 = { style: tmp10.accessories, children: null };
    tmp67Result5 = result1;
    if (result1) {
      obj81 = { gradientHeight: null, inline: true, scrimBase: null };
      obj81.gradientHeight = tmp29;
      obj81.scrimBase = token2;
      tmp67Result5 = tmp67(tmp(tmp2[74]).ChatInputScrimGradient, obj81);
    }
    items24 = [, , ];
    items24[0] = tmp67Result5;
    tmp67Result6 = null;
    if (!tmp21) {
      obj82 = { channel: null, screenIndex: null };
      obj82.channel = channel;
      obj82.screenIndex = screenIndex;
      tmp67Result6 = tmp67(tmp6(tmp2[28]), obj82);
    }
    items24[1] = tmp67Result6;
    tmpResult26 = tmp(tmp2[23]);
    tmp67Result7 = null;
    if (tmpResult26.isIOS()) {
      obj83 = { channelId: null, screenIndex: null, onJumpToPresent: null };
      obj83.channelId = channel.id;
      obj83.screenIndex = screenIndex;
      obj83.onJumpToPresent = onJumpToPresent;
      tmp67Result7 = tmp67(tmp6(tmp2[78]), obj83);
    }
    items24[2] = tmp67Result7;
    obj80.children = items24;
    items23[4] = tmp73(tmp78, obj80);
    tmp67Result8 = null;
    if (isResourceChannel) {
      obj84 = { channel: null };
      obj84.channel = channel;
      tmp67Result8 = tmp67(tmp6(tmp2[79]), obj84, channel.id);
    }
    items23[5] = tmp67Result8;
    items23[6] = tmp67(tmp(tmp2[80]).MemberActionsChatInputBannerGuardedOuter, { channel });
    items23[7] = tmp67(tmp(tmp2[81]).DoubleTapToReactChatInputBanner, { channel });
    tmp67Result9 = null;
    if (tmp23) {
      obj85 = { channelId: null };
      obj85.channelId = channel.id;
      tmp67Result9 = tmp67(tmp6(tmp2[82]), obj85);
    }
    items23[8] = tmp67Result9;
    tmp67Result10 = null;
    if (tmp43 !== tmp(tmp2[51]).KeyboardTypes.EXPRESSION) {
      obj86 = { ref: null, analyticsLocations: null, channel: null, canMentionEveryone: null, keyboardType: null, onChangeAutoCompleteVisibility: null, commandsDisabled: null, canOnlyUseTextCommands: null, chatInputRef: null, screenIndex: null };
      obj86.ref = tmp56.chatInputAutocomplete;
      obj86.analyticsLocations = analyticsLocations;
      obj86.channel = channel;
      obj86.canMentionEveryone = canMentionEveryone;
      obj86.keyboardType = tmp43;
      obj86.onChangeAutoCompleteVisibility = memo1.handleChangeAutoCompleteVisibility;
      obj86.commandsDisabled = tmp35;
      obj86.canOnlyUseTextCommands = tmp36;
      obj86.chatInputRef = tmp56.chatInput;
      obj86.screenIndex = screenIndex;
      tmp67Result10 = tmp67(tmp6(tmp2[83]), obj86);
    }
    items23[9] = tmp67Result10;
    obj87 = { ref: tmp56.chatInputAppCommandManager, canOnlyUseTextCommands: tmp36, channel, chatInputRef: tmp56.chatInput, chatInputStateRef: tmp56.state, commandsDisabled: tmp35 };
    items23[10] = tmp67(tmp6(tmp2[84]), obj87);
    obj88 = { style: null, onLayout: memo1.handleLayoutOfInputContainer, children: null };
    items25 = [, ];
    ({ container: arr26[0], floatingContainer: arr26[1] } = tmp10);
    obj88.style = items25;
    items26 = [, , , ];
    items26[0] = tmp68;
    tmp6Result4 = tmp6(tmp2[85]);
    tmp93 = Fragment;
    items26[1] = tmp67(tmp6(tmp2[86]), { channel });
    items27 = [, , ];
    items27[0] = tmp10.floatingInputBox;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
    }
    items27[1] = floatingInputBoxPressed;
    floatingInputBoxTyping = result1;
    if (result1) {
      floatingInputBoxTyping = tmp10.floatingInputBoxTyping;
    }
    obj89 = { style: items27, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp44, importantForAccessibility: null, children: null };
    items27[2] = floatingInputBoxTyping;
    str2 = undefined;
    if (tmp44) {
      str2 = "no-hide-descendants";
    }
    obj89.importantForAccessibility = str2;
    obj90 = { channel, chatInputRef: tmp56.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    items28 = [, , ];
    items28[0] = tmp67(tmp6(tmp2[87]), obj90);
    tmp67Result11 = tmp67Result14;
    if (tmp67Result14) {
      str3 = "large";
      tmp67Result11 = "large" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp67Result11) {
      obj91 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
      ({ chatInputEmojiSuggestions: obj55.ref, chatInput: obj55.chatInputRef, state: obj55.chatInputStateRef } = tmp56);
      obj91.channel = channel;
      obj91.suppressed = tmp25;
      tmp67Result11 = tmp67(tmp(tmp2[88]).EmojiSuggestionBarLarge, obj91);
    }
    items28[1] = tmp67Result11;
    obj92 = { style: tmp10.floatingMainContents, children: null };
    tmp67Result12 = null;
    if (null != tmp67Result) {
      obj93 = { style: null, children: null };
      obj94 = { paddingBottom: null, paddingLeft: null };
      obj94.paddingBottom = result;
      obj94.paddingLeft = result;
      obj93.style = obj94;
      obj93.children = tmp67Result;
      tmp67Result12 = tmp67(tmp78, obj93);
    }
    items29 = [, , , , ];
    items29[0] = tmp67Result12;
    obj95 = { style: null, children: null };
    items30 = [, ];
    items30[0] = tmp10.inputFlat;
    items30[1] = { paddingBottom: result };
    obj95.style = items30;
    items31 = [, ];
    items31[0] = tmp67(tmp6(tmp2[89]), {});
    items31[1] = tmp75;
    obj95.children = items31;
    items29[1] = tmp73(tmp78, obj95);
    tmp67Result13 = null;
    if (editable) {
      obj96 = { style: null, children: null };
      obj97 = { paddingBottom: null };
      obj97.paddingBottom = result;
      obj96.style = obj97;
      obj98 = { ref: null, channel: null, keyboardType: null, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null, suggestedExpressions: null, suggestedExpressionsRef: null };
      obj98.ref = tmp56.chatInputRightActions;
      obj98.channel = channel;
      obj98.keyboardType = tmp43;
      tmp6Result5 = tmp6(tmp2[90]);
      if (!tmp21) {
        tmpResult27 = tmp(tmp2[68]);
        result3 = tmpResult27.isPremiumGiftingSupported();
      }
      obj98.shouldShowGiftButton = result3;
      ({ handlePressAction: obj62.onPressAction, handlePressExpression: obj62.onPressExpression } = memo1);
      obj98.suggestedExpressions = memo2;
      obj98.suggestedExpressionsRef = tmp56.chatInputEmojiSuggestions;
      obj96.children = tmp67(tmp6Result5, obj98);
      tmp67Result13 = tmp67(tmp78, obj96);
    }
    items29[2] = tmp67Result13;
    items29[3] = tmp67Result1;
    obj99 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp56.chatInputCharCounter };
    items29[4] = tmp67(tmp6(tmp2[91]), obj99);
    obj92.children = items29;
    items28[2] = tmp73(tmp78, obj92);
    obj89.children = items28;
    items26[2] = tmp73(tmp78, obj89);
    if (tmp67Result14) {
      str4 = "small";
      tmp67Result14 = "small" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp67Result14) {
      obj100 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null, anchorTop: null, onOccupiedHeightChange: null };
      ({ chatInputEmojiSuggestions: obj65.ref, chatInput: obj65.chatInputRef, state: obj65.chatInputStateRef } = tmp56);
      obj100.channel = channel;
      obj100.suppressed = tmp25;
      obj100.anchorTop = tmp17;
      obj100.onOccupiedHeightChange = callback1;
      tmp67Result14 = tmp67(tmp(tmp2[92]).EmojiSuggestionBarSmall, obj100);
    }
    items26[3] = tmp67Result14;
    obj88.children = tmp73(tmp93, { children: items26 });
    items23[11] = tmp67(tmp6Result4, obj88);
    tmp67Result15 = null;
    if (null != refreshChatInputCoachmark) {
      obj101 = { buttonRef: null };
      obj101.buttonRef = ref1;
      tmp100 = obj101;
      tmp101 = refreshChatInputCoachmark;
      tmp6Result6 = tmp6(tmp2[37]);
      merged = Object.assign(refreshChatInputCoachmark);
      tmp67Result15 = tmp67(tmp6Result6, obj101);
    }
    items23[12] = tmp67Result15;
    items23[13] = tmp67(tmp6(tmp2[93]), { buttonRef: ref1, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
    obj76.children = items23;
    tmp73Result = tmp73(tmp78, obj76);
    tmp67Result16 = tmp73Result;
    if (!tmp21) {
      obj102 = { channel: null, screenIndex: null, canSendMessages: null, canCreateThreads: null, onJumpToPresent: null, isReadonly: null, children: null };
      obj102.channel = channel;
      obj102.screenIndex = screenIndex;
      obj102.canSendMessages = editable;
      obj102.canCreateThreads = canCreateThreads;
      obj102.onJumpToPresent = onJumpToPresent;
      obj102.isReadonly = !editable;
      obj102.children = tmp73Result;
      tmp67Result16 = tmp67(tmp6(tmp2[94]), obj102);
    }
    return tmp67Result16;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, findNodeHandle: closure_8 } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(13932).useVoiceMessagesUIStore;
const DraftType = fn(7800).DraftType;
const useChatBottomManagerUIStore = fn(10033);
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
const ChatInputConstants = fn(13000);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: closure_31 } = Constants);
const AppLauncherRouteName = fn(1498).AppLauncherRouteName;
const ContentDismissActionType = fn(5016).ContentDismissActionType;
const EmojiInteractionPoint = fn(1388).EmojiInteractionPoint;
const MediaKeyboardConstants = fn(1623);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
const jsxProd = fn(21);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
const createStyles = fn(5170);
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