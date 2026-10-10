// discord_app/modules/chat_input/native/ChatInput.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import FakePlaceholderPrivateChannel from "../../channel/FakePlaceholderPrivateChannel.tsx";
import ThreadHooks from "../../threads/ThreadHooks.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import DiceRollStore from "../../dice_roll/DiceRollStore.tsx";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";
import PendingReplyStore from "../../replies/PendingReplyStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

require = fn;
class ChatInput {
  constructor(arg0) {
    channel = global.channel;
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
    tmp = channel;
    tmp2 = closure_3;
    ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef, ref } = global);
    obj = channel(closure_3[24]);
    mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
    closure_2 = mobileEmojiSuggestionsConfig;
    InlineEmojiSuggestionsEnabled = channel(closure_3[25]).InlineEmojiSuggestionsEnabled;
    tmp65Result14 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
    closure_3 = tmp65Result14;
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
      _undefined2(nativeEvent.nativeEvent.layout.y);
    }, []);
    items1 = [];
    items1[0] = screenIndex;
    callback1 = closure_6.useCallback((arg0) => {
      constants2(screenIndex, arg0);
    }, items);
    effect = closure_6.useEffect(
      () => () => {
        closure_20(screenIndex, 0);
      },
      items1,
    );
    tmp21 = null != threadCreationCallback;
    closure_6 = tmp21;
    tmp22 = channel.isPrivate() && !tmp21;
    tmp23 = editable((channelId) => channelId.channelId === channel.id);
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
        editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
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
        pendingReply = PendingReplyStore.getPendingReply(channel.id);
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
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        let tmp5 = null != uploads;
        if (tmp5) {
          tmp5 = uploads.length > 0;
        }
        return tmp5;
      }
    });
    items5 = [,];
    items5[0] = channel.id;
    items5[1] = tmp21;
    memo = stateFromStores;
    if (stateFromStores == null) {
      memo = obj10.useMemo(
        () => DraftStore.getDraft(channel.id, closure_6 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage),
        items5,
      );
    }
    tmpResult13 = tmp(tmp2[29]);
    items6 = [];
    items6[0] = closure_17;
    items7 = [,];
    items7[0] = channel;
    items7[1] = tmp21;
    stateFromStoresObject = tmpResult13.useStateFromStoresObject(
      items6,
      () => {
        let canResult1 = PermissionStore.can(constants3.MENTION_EVERYONE, channel);
        const canResult = PermissionStore.can(constants3.ATTACH_FILES, channel);
        const canResult2 = PermissionStore.can(constants3.SEND_MESSAGES, channel);
        const canResult3 = PermissionStore.can(constants3.SEND_VOICE_MESSAGES, channel);
        const tmp6 =
          PermissionStore.can(constants3.CREATE_PUBLIC_THREADS, channel) ||
          PermissionStore.can(constants3.CREATE_PRIVATE_THREADS, channel);
        let isPrivateResult = channel.isPrivate();
        const canResult4 = PermissionStore.can(constants3.SEND_MESSAGES_IN_THREADS, channel);
        let tmp11 = canResult4;
        const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(channel);
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
        const obj4 = {
          canMentionEveryone: tmp14,
          canUpload: null,
          canSendVoiceMessage: null,
          editable: null,
          canCreateThreads: null,
        };
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
      },
      items7,
    );
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
    items8 = [, ,];
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
    stateFromStores3 = tmpResult20.useStateFromStores(items9, () =>
      ApplicationCommandStore.getActiveCommand(channel.id),
    );
    obj1 = { channel, isReadonly: !editable, isCreatingThread: tmp21 };
    tmp48 = tmp6(tmp2[36])(obj1);
    ({ placeholder, accessibilityLabel } = tmp48);
    tmpResult21 = tmp(tmp2[33]);
    class Ze {
      constructor() {
        obj = { minHeight: closure_13.get() };
        return obj;
      }
    }
    Ze.__closure = { textFieldHeight: sharedValue1 };
    Ze.__workletHash = 11048691841625;
    Ze.__initData = closure_41;
    animatedStyle = tmpResult21.useAnimatedStyle(Ze);
    ref1 = obj10.useRef(null);
    tmpResult22 = tmp(tmp2[37]);
    obj69 = { disabled: !editable };
    refreshChatInputCoachmark = tmpResult22.useRefreshChatInputCoachmark(obj69);
    tmpResult23 = tmp(tmp2[38]);
    canUseScheduledMessages = tmpResult23.useCanUseScheduledMessages();
    tmpResult24 = tmp(tmp2[39]);
    if (canUseScheduledMessages) {
      canUseScheduledMessages = editable;
    }
    if (canUseScheduledMessages) {
      canUseScheduledMessages = result3;
    }
    if (canUseScheduledMessages) {
      canUseScheduledMessages = null == refreshChatInputCoachmark;
    }
    scheduledMessageDraftCoachmarkState = tmpResult24.useScheduledMessageDraftCoachmarkState({
      isEligible: canUseScheduledMessages,
    });
    isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
    dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
    obj70 = {
      chatInputProps: {
        analyticsLocations,
        canUpload,
        channel,
        defaultValue: memo,
        hasAttachmentsToUpload: stateFromStores2,
        pendingEdit: stateFromStores,
        pendingReply: stateFromStores1,
        screenIndex,
        secondaryTextFieldRef,
        threadCreationCallback,
      },
      chatInputTextFieldHeight: sharedValue1,
      ref,
    };
    tmp54 = tmp6(tmp2[40])(obj70);
    closure_16 = tmp54;
    items10 = [];
    items10[0] = tmp54;
    effect2 = obj10.useEffect(() => {
      const current = closure_16.chatInput.current;
      current.setText(closure_16.props.current.defaultValue);
    }, items10);
    items11 = [, , ,];
    items11[0] = tmp54;
    items11[1] = channel;
    items11[2] = stateFromStores;
    items11[3] = stateFromStores1;
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
      if (id !== channel.id) {
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
    }, items11);
    items12 = [];
    items12[0] = tmp54;
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
      let ComponentDispatch = channel(closure_3[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.TEXTAREA_FOCUS, handleOpenKeyboard);
      };
    }, items12);
    items13 = [,];
    items13[0] = tmp54;
    items13[1] = sharedValue;
    memo1 = obj10.useMemo(() => {
      let obj = {
        handleBlur(nativeEvent) {
          const result = channel(1630).setIsAnyChatInputFocused(false);
          const result1 = memo1.handleTextOrFocusChange(str, false);
          closure_1_16.state.current.focused = false;
          _undefined(false);
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
            const obj2 = {
              focused: false,
              text: str,
              selectionStart: closure_1_16.state.current.selectionStart,
              selectionEnd: closure_1_16.state.current.selectionEnd,
            };
            current3.setData(obj2);
          }
          const current4 = closure_1_16.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = {
              focused: false,
              text: str,
              selectionStart: closure_1_16.state.current.selectionStart,
              selectionEnd: closure_1_16.state.current.selectionEnd,
            };
            current4.setData(obj3);
          }
          const current5 = closure_1_16.chatInputSendButton.current;
          if (current5 != null) {
            current5.setHasText(str.trim().length > 0);
          }
          const obj = channel(1630);
        },
        handleFocus(nativeEvent) {
          ({ start, end } = nativeEvent.nativeEvent);
          const result = channel(1630).setIsAnyChatInputFocused(true);
          closure_1_16.state.current.focused = true;
          _undefined(true);
          closure_1_16.state.current.selectionStart = start;
          closure_1_16.state.current.selectionEnd = end;
          const result1 = memo1.handleTextOrFocusChange(closure_1_16.state.current.text, true);
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
            const obj2 = {
              focused: true,
              text: closure_1_16.state.current.text,
              selectionStart: start,
              selectionEnd: end,
            };
            current3.setData(obj2);
          }
          const current4 = closure_1_16.chatInputEmojiSuggestions.current;
          if (current4 != null) {
            const obj3 = {
              focused: true,
              text: closure_1_16.state.current.text,
              selectionStart: start,
              selectionEnd: end,
            };
            current4.setData(obj3);
          }
          const obj = channel(1630);
        },
        handleChangeContentSize(nativeEvent) {
          const height = nativeEvent.nativeEvent.height;
          closure_1_16.state.current.textFieldContentSize = height;
          if (!obj.getIsChatInputHeightWorkletEnabled()) {
            const textFieldHeight = closure_1_16.state.current.textFieldHeight;
            const result = textFieldHeight.set(
              channel(11706).getChatInputHeightAnimationTiming(height, sharedValue.get()),
            );
            const tmp2Result = channel(11706);
          }
          obj = channel(11705);
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
              const result = textFieldHeight.set(
                channel(11706).getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()),
              );
              const tmpResult = channel(11706);
            }
          }
          obj = channel(11705);
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
        handleTextOrFocusChange: null,
        handleTextFlushed: null,
        handleToggleKeyboard: null,
      };
      closure_0 = _undefined(function* (arg0) {
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
            return { value: "IconComponent", done: "+51" };
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
                ({
                  url: closure_129_0,
                  width: closure_129_1,
                  height: closure_129_2,
                  type: closure_129_3,
                } = closure_0.nativeEvent);
                closure_129_4 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "Set", done: true };
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
                      const obj6 = {
                        value: closure_0(7768).getImageDimensionsIfMissing(closure_129_0, closure_129_1, closure_129_2),
                        done: false,
                      };
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
                const size = {
                  uri: closure_129_0,
                  originalUri: closure_129_0,
                  width: closure_129_4.width,
                  height: closure_129_4.height,
                  mimeType: closure_129_3,
                  platform: closure_0(7758).UploadPlatform.REACT_NATIVE,
                  id: null,
                };
                const obj7 = screenIndex(9262);
                size.id = closure_0(1279).v4();
                obj8.file = size;
                obj8.draftType = ChannelMessage.ChannelMessage;
                obj7.addFile(obj8);
                const obj10 = closure_0(1279);
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
          const result = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj21 = channel(5057);
          const obj4 = {
            type: constants3.ADD_BUTTON,
            channel_id: closure_1_16.props.current.channel.id,
            guild_id: closure_1_16.props.current.channel.guild_id,
          };
          screenIndex(1265).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
          const obj22 = screenIndex(1265);
          const keyboardType = channel(4987).getKeyboardType();
          if (keyboardType === channel(1629).KeyboardTypes.APP_LAUNCHER) {
            const obj5 = { type: channel(1629).KeyboardTypes.APP_LAUNCHER };
            memo1.handleToggleKeyboard(obj5);
          } else {
            const keyboardType1 = channel(4987).getKeyboardType();
            if (keyboardType1 === channel(1629).KeyboardTypes.MEDIA) {
              const current = closure_1_16.chatInputActions.current;
              if (current != null) {
                current.focusPhotosButton();
              }
            }
            const obj8 = { type: channel(1629).KeyboardTypes.MEDIA, context: null };
            const obj11 = { target: constants7.CHAT };
            obj8.context = obj11;
            memo1.handleToggleKeyboard(obj8);
            const tmp42Result = channel(4987);
          }
          const obj24 = channel(4987);
        } else {
          let tmp35 = current2;
          if (constants.APPS === arg1) {
            const result1 = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj12 = channel(5057);
            channel(5107).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
            const obj13 = channel(5107);
            const obj15 = {
              type: constants3.APPS_BUTTON,
              channel_id: closure_1_16.props.current.channel.id,
              guild_id: closure_1_16.props.current.channel.guild_id,
            };
            screenIndex(1265).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
            const obj14 = screenIndex(1265);
            const result2 = mobileEmojiSuggestionsConfig(10853).dismissNewActivityIndicator();
            const obj16 = mobileEmojiSuggestionsConfig(10853);
            if (tmp35 == null) {
              tmp35 = null;
            }
            const result3 = channel(11710).setAppLauncherA11yFocusReturnRef(tmp35);
            const obj18 = { type: channel(1629).KeyboardTypes.APP_LAUNCHER, context: null };
            const obj19 = { initialRouteName: constants5.HOME, initialSearchQuery: null };
            const obj17 = channel(11710);
            const appDMApplication = channel(11905).getAppDMApplication(closure_1_16.props.current.channel);
            let name;
            if (appDMApplication != null) {
              name = appDMApplication.name;
            }
            obj19.initialSearchQuery = name;
            obj18.context = obj19;
            memo1.handleToggleKeyboard(obj18);
            const tmp23Result = channel(11905);
          } else if (constants.ALL_PHOTOS === arg1) {
            const result4 = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj9 = channel(5057);
            const obj20 = {
              channel: closure_1_16.props.current.channel,
              uploadLimit,
              onDismissKeyboard() {
                return closure_1_0(4985).dismissKeyboard();
              },
              onRestoreKeyboard() {
                return closure_1_17.handleToggleKeyboard({ type: closure_0(1629).KeyboardTypes.SYSTEM });
              },
              onSelectFiles(items) {
                closure_0(10022).addImagesFromPicker(
                  closure_1_16.props.current.channel.id,
                  items,
                  closure_0(7757).UploadOrigin.IMAGE_PICKER,
                );
              },
              draftType: dismissCoachmark.ChannelMessage,
            };
            channel(10022).handleViewAllDialog(obj20);
            const obj10 = channel(10022);
          } else if (constants.CAMERA === arg1) {
            const result5 = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj6 = channel(5057);
            const obj23 = {
              channel: closure_1_16.props.current.channel,
              previewType: constants6.CAMERA_BUTTON,
              onDismissKeyboard() {
                return closure_1_0(4985).dismissKeyboard();
              },
              onRestoreKeyboard() {
                return closure_1_17.handleToggleKeyboard({ type: closure_0(1629).KeyboardTypes.SYSTEM });
              },
              onSelectFiles(items) {
                closure_0(10022).addImagesFromPicker(
                  closure_1_16.props.current.channel.id,
                  items,
                  closure_0(7757).UploadOrigin.IMAGE_PICKER,
                );
              },
            };
            channel(10022).handleCameraDialog(obj23);
            const obj7 = channel(10022);
          } else if (constants.NITRO_GIFT === arg1) {
            const result6 = screenIndex(1893).markPotentialBadState();
            const obj = screenIndex(1893);
            const result7 = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = channel(5057);
            if (obj3.isAndroid()) {
              channel(4985).dismissKeyboard();
              const tmp5Result = channel(4985);
            }
            obj3 = channel(1382);
            channel(10022).handleSelectGift(
              closure_1_16.props.current.analyticsLocations,
              closure_1_16.chatInput,
              tmp35,
            );
            const tmp5Result2 = channel(10022);
          } else if (constants.THREAD === arg1) {
            const result8 = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj28 = channel(5057);
            channel(10022).handleSelectThread(closure_1_16.props.current.channel, closure_1_16.chatInput);
            const obj29 = channel(10022);
          }
        }
      };
      obj.handlePollsPress = function handlePollsPress() {
        const result = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = channel(5057);
        screenIndex(1265).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, {
          type: constants3.POLLS,
          channel_id: closure_1_16.props.current.channel.id,
          guild_id: closure_1_16.props.current.channel.guild_id,
        });
        const obj2 = screenIndex(1265);
        const obj3 = {
          type: constants3.POLLS,
          channel_id: closure_1_16.props.current.channel.id,
          guild_id: closure_1_16.props.current.channel.guild_id,
        };
        channel(4985).dismissKeyboard();
        const obj4 = channel(4985);
        channel(11906).openCreatePollModal({
          channel: closure_1_16.props.current.channel,
          onCancel() {
            return closure_1_17.handleToggleKeyboard({ type: closure_0(1629).KeyboardTypes.SYSTEM });
          },
        });
      };
      obj.handleAttachPress = function handleAttachPress() {
        const result = channel(5057).triggerHapticFeedback(channel(5057).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = channel(5057);
        channel(10022).handleAttachFile({
          channel: closure_1_16.props.current.channel,
          uploadLimit,
          onDismissKeyboard() {
            return closure_1_0(dependencyMap[58]).dismissKeyboard();
          },
          onRestoreKeyboard() {
            return closure_1_17.handleToggleKeyboard({ type: closure_0(1629).KeyboardTypes.SYSTEM });
          },
          onSelectFiles(items) {
            closure_0(10022).addImagesFromPicker(
              props.props.current.channel.id,
              items,
              closure_0(7757).UploadOrigin.FILE_ATTACHMENT,
            );
          },
        });
      };
      obj.handlePressExpression = function handlePressExpression(arg0, unlocked) {
        const result = channel(9427).initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
        let tmp4 = null != unlocked;
        if (tmp4) {
          tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
          const tmp5 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
        }
        let type = arg0;
        if (arg0 == null) {
          type = channel(4987).getKeyboardContextForType(channel(1629).KeyboardTypes.EXPRESSION).type;
          const tmpResult = channel(4987);
        }
        const obj2 = { type: channel(1629).KeyboardTypes.EXPRESSION, context: null };
        const obj3 = { type, suggestedEmojis: null };
        let tmp7;
        if (tmp4) {
          tmp7 = unlocked;
        }
        obj3.suggestedEmojis = tmp7;
        obj2.context = obj3;
        memo1.handleToggleKeyboard(obj2);
        const obj = channel(9427);
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
            const result1 = current6.onMessageLengthChanged(text.length);
          }
          channel(9363).hideContextMenu();
          const obj3 = channel(9363);
        }
      };
      obj.handleTapAction = function handleTapAction(nativeEvent) {
        const tapAction = nativeEvent.nativeEvent.tapAction;
        if ("tapAttachment" === tapAction.action) {
          let current = closure_1_16.chatInput.current;
          current.blur();
          const obj = channel(11927);
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
      obj.handleTextOrFocusChange = function handleTextOrFocusChange(text, focused) {
        if (text.length > 0) {
          if (!focused) {
            const maxMessageLength = channel(9259).getMaxMessageLength();
            if (tmp16) {
              screenIndex(1265).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
              const obj3 = screenIndex(1265);
            }
            closure_1_16.state.current.textPrev = closure_1_16.state.current.text;
            closure_1_16.state.current.text = text;
            const obj2 = channel(9259);
            tmp16 = closure_1_16.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
          }
          if (token.isOpen()) {
            screenIndex(10039).hideNativeMenu();
            const obj = screenIndex(10039);
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
          screenIndex(10039).hideNativeMenu();
          const obj = screenIndex(10039);
        }
        if (type.type !== channel(1629).KeyboardTypes.SYSTEM) {
          if (type.type !== tmp4Result.getKeyboardType()) {
            const current = closure_1_16.chatInput.current;
            current.openCustomKeyboard(type);
          }
          tmp4Result = channel(4987);
        }
        const current2 = closure_1_16.chatInput.current;
        current2.openSystemKeyboard();
      };
      return obj;
    }, items13);
    closure_17 = memo1;
    items14 = [, , ,];
    items14[0] = tmp65Result14;
    items14[1] = mobileEmojiSuggestionsConfig.style;
    items14[2] = tmp54;
    items14[3] = tmp25;
    items15 = [,];
    items15[0] = tmp21;
    items15[1] = tmp54;
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
    }, items14);
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
    }, items15);
    tmp61 = tmp6(tmp2[44])({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
    registerViewTag = tmp61.registerViewTag;
    unregisterViewTag = tmp61.unregisterViewTag;
    closure_20 = obj10.useRef(null);
    items16 = [, ,];
    items16[0] = tmp54;
    items16[1] = registerViewTag;
    items16[2] = unregisterViewTag;
    callback3 = obj10.useCallback((current) => {
      if (null != ref.current) {
        unregisterViewTag(ref.current);
        ref.current = null;
      }
      closure_16.chatInputNative.current = current;
      if (null != current) {
        const tmp5 = closure_2_8(current);
        if (null != tmp5) {
          ref.current = tmp5;
          registerViewTag(tmp5);
        }
      }
    }, items16);
    items17 = [,];
    items17[0] = editable;
    items17[1] = tmp54;
    callback4 = obj10.useCallback(() => true, []);
    tmp65 = jsx;
    callback5 = obj10.useCallback(() => {
      if (editable) {
        const current = closure_16.chatInput.current;
        current.openSystemKeyboard();
      }
    }, items17);
    obj71 = { canUpload, channelId: channel.id, screenIndex };
    tmp65Result = null;
    tmp66 = jsx(tmp6(tmp2[67]), obj71);
    if (editable) {
      obj72 = {
        ref: null,
        channel: null,
        onPressAction: null,
        canStartThreads: null,
        isAppLauncherEnabled: null,
        keyboardType: null,
        shouldPhotosButtonBeDisabled: null,
        canUpload: null,
        shouldShowGiftButton: null,
        canPostPolls: null,
        onPollsPress: null,
        onAttachPress: null,
        photosButtonExternalRef: null,
        onContextMenuOpen: null,
      };
      obj72.ref = tmp54.chatInputActions;
      obj72.channel = channel;
      obj72.onPressAction = memo1.handlePressAction;
      obj72.canStartThreads = canStartThread;
      obj72.isAppLauncherEnabled = isAppLauncherEnabled;
      obj72.keyboardType = tmp43;
      tmp69 = canUpload;
      tmp6Result = tmp6(tmp2[68]);
      if (canUpload) {
        tmp69 = null == stateFromStores3;
      }
      if (!tmp69) {
        tmp69 = tmp39;
      }
      obj72.shouldPhotosButtonBeDisabled = !tmp69;
      obj72.canUpload = canUpload;
      result2 = result3;
      if (!tmp21) {
        tmpResult25 = tmp(tmp2[69]);
        result2 = tmpResult25.isPremiumGiftingSupported();
      }
      obj72.shouldShowGiftButton = result2;
      obj72.canPostPolls = tmp39;
      ({ handlePollsPress: obj32.onPollsPress, handleAttachPress: obj32.onAttachPress } = memo1);
      obj72.photosButtonExternalRef = ref1;
      obj72.onContextMenuOpen = function onContextMenuOpen() {
        if (isCoachmarkVisible) {
          dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
        }
      };
      tmp65Result = tmp65(tmp6Result, obj72);
    }
    tmp71 = jsxs;
    obj73 = { style: null, children: null };
    items18 = [,];
    items18[0] = tmp10.inputDefault;
    items18[1] = animatedStyle;
    obj73.style = items18;
    obj74 = {
      accessibilityLabel,
      customKeyboard: null,
      editable: null,
      onBeginFocus: null,
      onEndBlur: null,
      onChangeContentSize: null,
      onMaxHeightChanged: null,
      onSelectionOrTextChange: null,
      onTextFlushed: null,
      onPasteImage: null,
      onPasteCommand: null,
      onTapAction: null,
      onRequestSend: null,
      placeholder: null,
      ref: null,
      setNoExtractUI: null,
      shouldShowCursor: null,
      verticalInset: 5,
    };
    tmp6Result1 = tmp6(tmp2[70]);
    obj74.customKeyboard = tmp(tmp2[71]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
    obj74.editable = editable;
    ({
      handleFocus: obj35.onBeginFocus,
      handleBlur: obj35.onEndBlur,
      handleChangeContentSize: obj35.onChangeContentSize,
      handleMaxHeightChanged: obj35.onMaxHeightChanged,
      handleSelectionOrTextChange: obj35.onSelectionOrTextChange,
      handleTextFlushed: obj35.onTextFlushed,
      handlePasteImage: obj35.onPasteImage,
      handlePasteCommand: obj35.onPasteCommand,
      handleTapAction: obj35.onTapAction,
      handlePressSend: obj35.onRequestSend,
    } = memo1);
    obj74.placeholder = placeholder;
    obj74.ref = callback3;
    obj74.setNoExtractUI = setNoExtractUI;
    obj74.shouldShowCursor = tmp43 !== tmp(tmp2[52]).KeyboardTypes.MEDIA;
    items19 = [,];
    items19[0] = tmp65(tmp6Result1, obj74);
    obj75 = { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp54.chatInputCover };
    items19[1] = tmp65(tmp6(tmp2[72]), obj75);
    obj73.children = items19;
    tmp73 = jsxs(tmp6(tmp2[33]).View, obj73);
    if (editable) {
      obj76 = {
        ref: null,
        canSendVoiceMessage: null,
        channel: null,
        defaultValue: null,
        hasPendingAttachments: null,
        hasPendingEdit: null,
        onSendMessage: null,
        requireTextContent: null,
      };
      obj76.ref = tmp54.chatInputSendButton;
      obj76.canSendVoiceMessage = canSendVoiceMessage;
      obj76.channel = channel;
      obj76.defaultValue = memo;
      tmp6Result2 = tmp6(tmp2[73]);
      if (stateFromStores2) {
        stateFromStores2 = canUpload;
      }
      obj76.hasPendingAttachments = stateFromStores2;
      obj76.hasPendingEdit = null != stateFromStores;
      obj76.onSendMessage = memo1.handlePressSend;
      obj76.requireTextContent = result3;
      tmp65Result1 = tmp65(tmp6Result2, obj76);
    } else {
      tmp65Result1 = null;
    }
    tmp76 = closure_7;
    obj77 = { collapsable: false, onLayout: callback2, style: null, children: null };
    items20 = [, ,];
    items20[0] = tmp6(tmp2[74])({ isCreatingThread: tmp21 });
    items20[1] = tmp10.overflowVisible;
    floatingScrimOverlap = result3;
    if (!tmp21) {
      floatingScrimOverlap = tmp10.floatingScrimOverlap;
    }
    items20[2] = floatingScrimOverlap;
    obj77.style = items20;
    tmp65Result2 = !result1;
    if (!result1) {
      obj78 = { gradientHeight: null, inline: false, scrimBase: null };
      obj78.gradientHeight = tmp28;
      obj78.scrimBase = token2;
      tmp65Result2 = tmp65(tmp(tmp2[75]).ChatInputScrimGradient, obj78);
    }
    items21 = [, , , , , , , , , , , , ,];
    items21[0] = tmp65Result2;
    tmp65Result3 = result1;
    if (result1) {
      tmpResult26 = tmp(tmp2[76]);
      hex2rgbResult = tmpResult26.hex2rgb(token2, 1);
      if (hex2rgbResult == null) {
        hex2rgbResult = token2;
      }
      obj79 = { style: null, pointerEvents: "none" };
      rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
      rect.backgroundColor = hex2rgbResult;
      obj79.style = rect;
      tmp65Result3 = tmp65(tmp76, obj79);
    }
    items21[1] = tmp65Result3;
    items21[2] = tmp65(tmp(tmp2[77]).ChatInputAccessibilityDivider, {});
    tmp65Result4 = null;
    if (tmp22) {
      obj80 = { channel: null, hasInputText: null };
      obj80.channel = channel;
      str = "";
      tmp82 = "" !== memo;
      tmp6Result3 = tmp6(tmp2[78]);
      if (!tmp82) {
        current = tmp54.chatInput.current;
        text = undefined;
        if (current != null) {
          text = current.getText();
        }
        tmp82 = "" !== text;
      }
      obj80.hasInputText = tmp82;
      tmp65Result4 = tmp65(tmp6Result3, obj80);
    }
    items21[3] = tmp65Result4;
    obj81 = { style: tmp10.accessories, children: null };
    tmp65Result5 = result1;
    if (result1) {
      obj82 = { gradientHeight: null, inline: true, scrimBase: null };
      obj82.gradientHeight = tmp29;
      obj82.scrimBase = token2;
      tmp65Result5 = tmp65(tmp(tmp2[75]).ChatInputScrimGradient, obj82);
    }
    items22 = [, ,];
    items22[0] = tmp65Result5;
    tmp65Result6 = null;
    if (!tmp21) {
      obj83 = { channel: null, screenIndex: null };
      obj83.channel = channel;
      obj83.screenIndex = screenIndex;
      tmp65Result6 = tmp65(tmp6(tmp2[28]), obj83);
    }
    items22[1] = tmp65Result6;
    tmpResult27 = tmp(tmp2[23]);
    tmp65Result7 = null;
    if (tmpResult27.isIOS()) {
      obj84 = { channelId: null, screenIndex: null, onJumpToPresent: null };
      obj84.channelId = channel.id;
      obj84.screenIndex = screenIndex;
      obj84.onJumpToPresent = onJumpToPresent;
      tmp65Result7 = tmp65(tmp6(tmp2[79]), obj84);
    }
    items22[2] = tmp65Result7;
    obj81.children = items22;
    items21[4] = tmp71(tmp76, obj81);
    tmp65Result8 = null;
    if (isResourceChannel) {
      obj85 = { channel: null };
      obj85.channel = channel;
      tmp65Result8 = tmp65(tmp6(tmp2[80]), obj85, channel.id);
    }
    items21[5] = tmp65Result8;
    items21[6] = tmp65(tmp(tmp2[81]).MemberActionsChatInputBannerGuardedOuter, { channel });
    items21[7] = tmp65(tmp(tmp2[82]).DoubleTapToReactChatInputBanner, { channel });
    tmp65Result9 = null;
    if (tmp23) {
      obj86 = { channelId: null };
      obj86.channelId = channel.id;
      tmp65Result9 = tmp65(tmp6(tmp2[83]), obj86);
    }
    items21[8] = tmp65Result9;
    tmp65Result10 = null;
    if (tmp43 !== tmp(tmp2[52]).KeyboardTypes.EXPRESSION) {
      obj87 = {
        ref: null,
        analyticsLocations: null,
        channel: null,
        canMentionEveryone: null,
        keyboardType: null,
        onChangeAutoCompleteVisibility: null,
        commandsDisabled: null,
        canOnlyUseTextCommands: null,
        chatInputRef: null,
        screenIndex: null,
      };
      obj87.ref = tmp54.chatInputAutocomplete;
      obj87.analyticsLocations = analyticsLocations;
      obj87.channel = channel;
      obj87.canMentionEveryone = canMentionEveryone;
      obj87.keyboardType = tmp43;
      obj87.onChangeAutoCompleteVisibility = memo1.handleChangeAutoCompleteVisibility;
      obj87.commandsDisabled = tmp35;
      obj87.canOnlyUseTextCommands = tmp36;
      obj87.chatInputRef = tmp54.chatInput;
      obj87.screenIndex = screenIndex;
      tmp65Result10 = tmp65(tmp6(tmp2[84]), obj87);
    }
    items21[9] = tmp65Result10;
    obj88 = {
      ref: tmp54.chatInputAppCommandManager,
      canOnlyUseTextCommands: tmp36,
      channel,
      chatInputRef: tmp54.chatInput,
      chatInputStateRef: tmp54.state,
      commandsDisabled: tmp35,
    };
    items21[10] = tmp65(tmp6(tmp2[85]), obj88);
    obj89 = { style: null, onLayout: memo1.handleLayoutOfInputContainer, children: null };
    items23 = [,];
    ({ container: arr24[0], floatingContainer: arr24[1] } = tmp10);
    obj89.style = items23;
    items24 = [, , ,];
    items24[0] = tmp66;
    tmp6Result4 = tmp6(tmp2[86]);
    tmp91 = Fragment;
    items24[1] = tmp65(tmp6(tmp2[87]), { channel });
    items25 = [, ,];
    items25[0] = tmp10.floatingInputBox;
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
    }
    items25[1] = floatingInputBoxPressed;
    floatingInputBoxTyping = result1;
    if (result1) {
      floatingInputBoxTyping = tmp10.floatingInputBoxTyping;
    }
    obj90 = {
      style: items25,
      onStartShouldSetResponder: callback4,
      onResponderRelease: callback5,
      onLayout: callback,
      collapsable: false,
      accessibilityElementsHidden: tmp44,
      importantForAccessibility: null,
      children: null,
    };
    items25[2] = floatingInputBoxTyping;
    str2 = undefined;
    if (tmp44) {
      str2 = "no-hide-descendants";
    }
    obj90.importantForAccessibility = str2;
    obj91 = { channel, chatInputRef: tmp54.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
    items26 = [, ,];
    items26[0] = tmp65(tmp6(tmp2[88]), obj91);
    tmp65Result11 = tmp65Result14;
    if (tmp65Result14) {
      str3 = "large";
      tmp65Result11 = "large" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp65Result11) {
      obj92 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
      ({ chatInputEmojiSuggestions: obj56.ref, chatInput: obj56.chatInputRef, state: obj56.chatInputStateRef } = tmp54);
      obj92.channel = channel;
      obj92.suppressed = tmp25;
      tmp65Result11 = tmp65(tmp(tmp2[89]).EmojiSuggestionBarLarge, obj92);
    }
    items26[1] = tmp65Result11;
    obj93 = { style: tmp10.floatingMainContents, children: null };
    tmp65Result12 = null;
    if (null != tmp65Result) {
      obj94 = { style: null, children: null };
      obj95 = { paddingBottom: null, paddingLeft: null };
      obj95.paddingBottom = result;
      obj95.paddingLeft = result;
      obj94.style = obj95;
      obj94.children = tmp65Result;
      tmp65Result12 = tmp65(tmp76, obj94);
    }
    items27 = [, , , ,];
    items27[0] = tmp65Result12;
    obj96 = { style: null, children: tmp73 };
    items28 = [,];
    items28[0] = tmp10.inputFlat;
    items28[1] = { paddingBottom: result };
    obj96.style = items28;
    items27[1] = tmp65(tmp76, obj96);
    tmp65Result13 = null;
    if (editable) {
      obj97 = { style: null, children: null };
      obj98 = { paddingBottom: null };
      obj98.paddingBottom = result;
      obj97.style = obj98;
      obj99 = {
        ref: null,
        channel: null,
        keyboardType: null,
        shouldShowGiftButton: null,
        onPressAction: null,
        onPressExpression: null,
        suggestedExpressions: null,
        suggestedExpressionsRef: null,
      };
      obj99.ref = tmp54.chatInputRightActions;
      obj99.channel = channel;
      obj99.keyboardType = tmp43;
      tmp6Result5 = tmp6(tmp2[90]);
      if (!tmp21) {
        tmpResult28 = tmp(tmp2[69]);
        result3 = tmpResult28.isPremiumGiftingSupported();
      }
      obj99.shouldShowGiftButton = result3;
      ({ handlePressAction: obj63.onPressAction, handlePressExpression: obj63.onPressExpression } = memo1);
      obj99.suggestedExpressions = memo2;
      obj99.suggestedExpressionsRef = tmp54.chatInputEmojiSuggestions;
      obj97.children = tmp65(tmp6Result5, obj99);
      tmp65Result13 = tmp65(tmp76, obj97);
    }
    items27[2] = tmp65Result13;
    items27[3] = tmp65Result1;
    obj100 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp54.chatInputCharCounter };
    items27[4] = tmp65(tmp6(tmp2[91]), obj100);
    obj93.children = items27;
    items26[2] = tmp71(tmp76, obj93);
    obj90.children = items26;
    items24[2] = tmp71(tmp76, obj90);
    if (tmp65Result14) {
      str4 = "small";
      tmp65Result14 = "small" === mobileEmojiSuggestionsConfig.style;
    }
    if (tmp65Result14) {
      obj101 = {
        ref: null,
        chatInputRef: null,
        chatInputStateRef: null,
        channel: null,
        suppressed: null,
        anchorTop: null,
        onOccupiedHeightChange: null,
      };
      ({ chatInputEmojiSuggestions: obj66.ref, chatInput: obj66.chatInputRef, state: obj66.chatInputStateRef } = tmp54);
      obj101.channel = channel;
      obj101.suppressed = tmp25;
      obj101.anchorTop = tmp17;
      obj101.onOccupiedHeightChange = callback1;
      tmp65Result14 = tmp65(tmp(tmp2[92]).EmojiSuggestionBarSmall, obj101);
    }
    items24[3] = tmp65Result14;
    obj89.children = tmp71(tmp91, { children: items24 });
    items21[11] = tmp65(tmp6Result4, obj89);
    tmp65Result15 = null;
    if (null != refreshChatInputCoachmark) {
      obj102 = { buttonRef: null };
      obj102.buttonRef = ref1;
      tmp98 = obj102;
      tmp99 = refreshChatInputCoachmark;
      tmp6Result6 = tmp6(tmp2[37]);
      merged = Object.assign(refreshChatInputCoachmark);
      tmp65Result15 = tmp65(tmp6Result6, obj102);
    }
    items21[12] = tmp65Result15;
    items21[13] = tmp65(tmp6(tmp2[93]), {
      buttonRef: ref1,
      isVisible: isCoachmarkVisible,
      onDismiss: dismissCoachmark,
    });
    obj77.children = items21;
    tmp71Result = tmp71(tmp76, obj77);
    tmp65Result16 = tmp71Result;
    if (!tmp21) {
      obj103 = {
        channel: null,
        screenIndex: null,
        canSendMessages: null,
        canCreateThreads: null,
        onJumpToPresent: null,
        isReadonly: null,
        children: null,
      };
      obj103.channel = channel;
      obj103.screenIndex = screenIndex;
      obj103.canSendMessages = editable;
      obj103.canCreateThreads = canCreateThreads;
      obj103.onJumpToPresent = onJumpToPresent;
      obj103.isReadonly = !editable;
      obj103.children = tmp71Result;
      tmp65Result16 = tmp65(tmp6(tmp2[94]), obj103);
    }
    return tmp65Result16;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_7, findNodeHandle: closure_8 } = get_ActivityIndicator);
const useVoiceMessagesUIStore = fn(11632).useVoiceMessagesUIStore;
const DraftType = fn(7243).DraftType;
const useChatBottomManagerUIStore = fn(9383);
({
  updateShowingAutoComplete: closure_19,
  updateSmallSuggestionBarHeight: closure_20,
  useChatIsAtBottom: closure_21,
  useChatShowingAutoComplete: closure_22,
} = useChatBottomManagerUIStore);
const ChatInputConstants = fn(11634);
({
  CHAT_INPUT_HORIZONTAL_PADDING: closure_23,
  CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24,
  ChatInputActionType: closure_25,
} = ChatInputConstants);
const Constants = fn(1085);
({
  AnalyticEvents: closure_26,
  ChannelTypesSets: closure_27,
  ChatInputComponentViewedTypes: closure_28,
  ComponentActions: closure_29,
  MAX_UPLOAD_COUNT: closure_30,
  Permissions: items,
} = Constants);
const AppLauncherRouteName = fn(1502).AppLauncherRouteName;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const EmojiInteractionPoint = fn(1393).EmojiInteractionPoint;
const MediaKeyboardConstants = fn(1627);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
const jsxProd = fn(21);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
const createStyles = fn(5092);
const BottomSheet = createStyles.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  const obj = {
    position: "relative",
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: closure_1_23 - dependencyMap,
    backgroundColor: null,
    borderTopWidth: 1,
    borderColor: null,
  };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = {
    container: null,
    inputDefault: null,
    accessories: null,
    floatingContainer: null,
    floatingInputBox: null,
    floatingInputBoxPressed: null,
    floatingInputBoxTyping: null,
    floatingMainContents: null,
    inputFlat: null,
    floatingScrimOverlap: null,
    overflowVisible: null,
    characterCounter: null,
  };
  obj.backgroundColor = BACKGROUND_BASE_LOW;
  obj.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj2.container = obj;
  obj2.inputDefault = { alignSelf: "stretch", marginLeft: 0, marginTop: 0 };
  obj2.accessories = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  obj2.floatingContainer = {
    borderTopWidth: 0,
    borderColor: "transparent",
    borderRadius: nativeDefault.radii.none,
    backgroundColor: "transparent",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: 0,
    overflow: "visible",
  };
  const obj3 = {
    borderTopWidth: 0,
    borderColor: "transparent",
    borderRadius: nativeDefault.radii.none,
    backgroundColor: "transparent",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: 0,
    overflow: "visible",
  };
  obj2.floatingInputBox = {
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    flexDirection: "column",
    overflow: "hidden",
  };
  const obj4 = {
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    flexDirection: "column",
    overflow: "hidden",
  };
  obj2.floatingInputBoxPressed = {
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
  };
  obj2.floatingInputBoxTyping = { shadowOpacity: 0, elevation: 0 };
  const obj5 = {
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
  };
  obj2.floatingMainContents = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
    paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
  };
  const obj6 = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
    paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
  };
  let num = -6;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj2.inputFlat = { flex: 1, justifyContent: "center", marginLeft: num };
  obj2.floatingScrimOverlap = { marginTop: -arg1 / 2 };
  obj2.overflowVisible = { overflow: "visible" };
  const rect = {
    position: "absolute",
    top: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    right: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  };
  obj2.characterCounter = rect;
  return obj2;
});
const __initData12 = {
  code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}",
};
ChatInput.displayName = "ChatInput";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default noop.memo(ChatInput);
