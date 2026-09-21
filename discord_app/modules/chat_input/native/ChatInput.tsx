// === Module 12211: ChatInput ===

// Module 12211 (ChatInput)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7466 */;
import ThreadHooks from "ThreadHooks" /* 7511 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8022 */;
import DiceRollStore from "DiceRollStore" /* 12212 */;
import NativeMenuStore from "NativeMenuStore" /* 9773 */;
import PendingReplyStore from "PendingReplyStore" /* 7916 */;
import DraftStore from "DraftStore" /* 5105 */;
import EditMessageStore from "EditMessageStore" /* 7917 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5104 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, findNodeHandle: closure_8 } = get_ActivityIndicator);
let useVoiceMessagesUIStore = fn(12213).useVoiceMessagesUIStore;
const DraftType = fn(5105).DraftType;
const useChatBottomManagerUIStore = fn(9654);
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
const ChatInputConstants = fn(12215);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: items } = Constants);
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const EmojiInteractionPoint = fn(1375).EmojiInteractionPoint;
const MediaKeyboardConstants = fn(1608);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
const jsxProd = fn(21);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
const createStyles = fn(4756);
let closure_40 = createStyles.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  const obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: __initData3 - __initData4, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { container: null, inputDefault: null, accessories: null, floatingContainer: null, floatingInputBox: null, floatingInputBoxPressed: null, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null };
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
  return obj2;
});
const __initData = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = noop.forwardRef((channel, ref) => {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  ({ threadCreationCallback, onJumpToPresent } = channel);
  c2 = undefined;
  dependencyMap = undefined;
  closure_4 = undefined;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let sharedValue;
  let sharedValue1;
  let isCoachmarkVisible;
  let dismissCoachmark;
  useVoiceMessagesUIStore = undefined;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  ref = undefined;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  const mobileEmojiSuggestionsConfig = channel(12216).useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
  const InlineEmojiSuggestionsEnabled = channel(2019).InlineEmojiSuggestionsEnabled;
  let tmp66Result30 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
  let obj = channel(12216);
  const gradientValue = channel(4574).useGradientValue(tmp(4574).GradientPercentage.END);
  let tmpResult = channel(4574);
  const token = channel(4457).useToken(screenIndex(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmpResult30 = channel(4457);
  let result = (channel(4457).useToken(screenIndex(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  const tmpResult31 = channel(4457);
  const token1 = channel(4457).useToken(screenIndex(576).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp10 = closure_40(gradientValue, token1);
  const tmpResult32 = channel(4457);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = tmpResult33.useToken(screenIndex(576).colors.BACKGROUND_BASE_LOWER);
  }
  tmpResult33 = channel(4457);
  const token3 = channel(4457).useToken(tmp6(576).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  const tmpResult34 = channel(4457);
  const token4 = channel(4457).useToken(tmp6(576).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  const tmpResult35 = channel(4457);
  const token5 = channel(4457).useToken(tmp6(576).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  const tmpResult36 = channel(4457);
  [floatingInputBoxPressed, c2] = stateFromStores(stateFromStores1.useState(false), 2);
  let tmp15 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp17, c3] = stateFromStores(stateFromStores1.useState(0), 2);
  const items = [screenIndex];
  const callback = stateFromStores1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.y);
  }, []);
  const items1 = [screenIndex];
  const callback1 = stateFromStores1.useCallback((arg0) => {
    closure_2_20(screenIndex, arg0);
  }, items);
  const effect = stateFromStores1.useEffect(() => () => {
    closure_2_20(screenIndex, 0);
  }, items1);
  closure_4 = tmp21;
  let tmp16 = stateFromStores(stateFromStores1.useState(0), 2);
  const tmp22 = channel.isPrivate() && null == threadCreationCallback;
  const tmp23 = sharedValue1((channelId) => channelId.channelId === channel.id);
  const typingUserIdsForDisplay = channel(12217).useTypingUserIdsForDisplay(channel.id, 1);
  const tmp25 = closure_22(screenIndex);
  const tmpResult37 = channel(12217);
  let result1 = channel(12217).hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp25);
  const tmp27 = closure_21(screenIndex);
  let tmp28 = token1;
  if (tmp27) {
    tmp28 = token5;
  }
  let tmp29 = token4;
  if (tmp27) {
    tmp29 = token3;
  }
  const tmpResult38 = channel(12217);
  const items2 = [unregisterViewTag];
  stateFromStores = channel(504).useStateFromStores(items2, () => {
    let editingTextValue = null;
    if (!closure_4) {
      editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult39 = channel(504);
  const items3 = [dismissCoachmark];
  stateFromStores1 = channel(504).useStateFromStores(items3, () => {
    let pendingReply;
    if (!closure_4) {
      pendingReply = PendingReplyStore.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult40 = channel(504);
  const items4 = [UploadAttachmentStore];
  let stateFromStores2 = channel(504).useStateFromStores(items4, () => {
    if (closure_4) {
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
  const items5 = [channel.id, null != threadCreationCallback];
  let memo = stateFromStores;
  if (stateFromStores == null) {
    memo = obj10.useMemo(() => DraftStore.getDraft(channel.id, closure_4 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items5);
  }
  const tmpResult41 = channel(504);
  const items6 = [ref];
  const items7 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items6, () => {
    let canResult1 = PermissionStore.can(constants3.MENTION_EVERYONE, channel);
    const canResult = PermissionStore.can(constants3.ATTACH_FILES, channel);
    const canResult2 = PermissionStore.can(constants3.SEND_MESSAGES, channel);
    const canResult3 = PermissionStore.can(constants3.SEND_VOICE_MESSAGES, channel);
    const tmp6 = PermissionStore.can(constants3.CREATE_PUBLIC_THREADS, channel) || PermissionStore.can(constants3.CREATE_PRIVATE_THREADS, channel);
    let isPrivateResult = channel.isPrivate();
    const canResult4 = PermissionStore.can(constants3.SEND_MESSAGES_IN_THREADS, channel);
    let tmp11 = canResult4;
    const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(channel);
    if (!closure_4) {
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
      tmp14 = !closure_4;
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
      tmp15 = !closure_4;
    }
    obj4.canUpload = tmp15;
    if (!isPrivateResult) {
      isPrivateResult = canResult3;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp13;
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_4;
    }
    obj4.canSendVoiceMessage = isPrivateResult;
    obj4.editable = !tmp13;
    obj4.canCreateThreads = tmp6;
    return obj4;
  }, items7);
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = tmp6(7407)().analyticsLocations;
  let tmp35 = tmp21;
  if (null == threadCreationCallback) {
    tmp35 = null != stateFromStores;
  }
  if (!tmp35) {
    tmp35 = !tmp(7511).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult43 = tmp(7511);
  }
  const tmpResult42 = channel(504);
  let canStartThread = channel(7511).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp21;
  }
  const tmpResult44 = channel(7511);
  const tmp39 = channel(8003).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult45 = channel(8003);
  sharedValue = channel(4492).useSharedValue(token);
  const tmpResult46 = channel(4492);
  sharedValue1 = channel(4492).useSharedValue(token);
  const items8 = [sharedValue1, token, sharedValue];
  const effect1 = obj10.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items8);
  const tmp43 = screenIndex(4624)();
  const tmp44 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp21;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(9600).getIsAppLauncherEnabled(channel);
    const tmpResult48 = tmp(9600);
  }
  const tmpResult47 = channel(4492);
  const items9 = [sharedValue];
  const stateFromStores3 = channel(504).useStateFromStores(items9, () => ApplicationCommandStore.getActiveCommand(channel.id));
  let obj2 = { channel, isReadonly: !editable, isCreatingThread: null != threadCreationCallback };
  const tmpResult49 = channel(504);
  ({ placeholder, accessibilityLabel } = screenIndex(12237)({ channel, isReadonly: !editable, isCreatingThread: null != threadCreationCallback }));
  const tmp48 = screenIndex(12237)({ channel, isReadonly: !editable, isCreatingThread: null != threadCreationCallback });
  class Ze {
    constructor() {
      obj = { minHeight: closure_10.get() };
      return obj;
    }
  }
  Ze.__closure = { textFieldHeight: sharedValue1 };
  Ze.__workletHash = 11048691841625;
  Ze.__initData = __initData;
  const animatedStyle = channel(4492).useAnimatedStyle(Ze);
  ref = obj10.useRef(null);
  const tmpResult50 = channel(4492);
  const refreshChatInputCoachmark = channel(12238).useRefreshChatInputCoachmark({ disabled: !editable });
  let obj3 = { disabled: !editable };
  const tmpResult51 = channel(12238);
  const canUseScheduledMessages = channel(8088).useCanUseScheduledMessages();
  const tmpResult52 = channel(8088);
  const items10 = [memo1];
  const stateFromStores4 = channel(504).useStateFromStores(items10, () => DraftStore.getDraft(channel.id, DraftType.ChannelMessage));
  const tmpResult53 = channel(504);
  let obj4 = { channel, draftText: stateFromStores4, isEligible: null };
  let tmp54 = canUseScheduledMessages;
  if (canUseScheduledMessages) {
    tmp54 = editable;
  }
  if (tmp54) {
    tmp54 = result3;
  }
  if (tmp54) {
    tmp54 = null == refreshChatInputCoachmark;
  }
  obj4.isEligible = tmp54;
  const scheduledMessageDraftCoachmarkState = channel(12239).useScheduledMessageDraftCoachmarkState(obj4);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  const tmp56 = screenIndex(12240)({ chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref });
  useVoiceMessagesUIStore = tmp56;
  const items11 = [tmp56];
  const effect2 = obj10.useEffect(() => {
    const current = closure_13.chatInput.current;
    current.setText(closure_13.props.current.defaultValue);
  }, items11);
  const items12 = [tmp56, channel, stateFromStores, stateFromStores1];
  const effect3 = obj10.useEffect(() => {
    const current = closure_13.propsPrev.current;
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
      const current2 = closure_13.chatInput.current;
      if (current2 != null) {
        current2.focus();
      }
    }
    const id = closure_13.propsPrev.current.channel.id;
    if (id !== channel.id) {
      if (id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        const current4 = closure_13.chatInput.current;
        if (current4 != null) {
          current4.setText(closure_13.props.current.defaultValue);
        }
      }
    }
    if (pendingEdit !== stateFromStores) {
      const current3 = closure_13.chatInput.current;
      if (current3 != null) {
        let str = "";
        if (null != stateFromStores) {
          str = stateFromStores;
        }
        current3.setText(str);
      }
    }
  }, items12);
  const items13 = [tmp56];
  const effect4 = obj10.useEffect(() => {
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
    let ComponentDispatch = channel(_undefined[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items13);
  const items14 = [tmp56, sharedValue];
  memo1 = obj10.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        const result = channel(1611).setIsAnyChatInputFocused(false);
        const result1 = memo1.handleTextOrFocusChange(str, false);
        closure_1_13.state.current.focused = false;
        closure_1_2(false);
        const current = closure_1_13.chatInputCover.current;
        if (current != null) {
          current.focused(false);
        }
        const current2 = closure_1_13.chatInputAppCommandManager.current;
        if (current2 != null) {
          current2.updateState();
        }
        const current3 = closure_1_13.chatInputAutocomplete.current;
        if (current3 != null) {
          const obj2 = { focused: false, text: str, selectionStart: closure_1_13.state.current.selectionStart, selectionEnd: closure_1_13.state.current.selectionEnd };
          current3.setData(obj2);
        }
        const current4 = closure_1_13.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          const obj3 = { focused: false, text: str, selectionStart: closure_1_13.state.current.selectionStart, selectionEnd: closure_1_13.state.current.selectionEnd };
          current4.setData(obj3);
        }
        const current5 = closure_1_13.chatInputSendButton.current;
        if (current5 != null) {
          current5.setHasText(str.trim().length > 0);
        }
        const obj = channel(1611);
      },
      handleFocus(nativeEvent) {
        ({ start, end } = nativeEvent.nativeEvent);
        const result = channel(1611).setIsAnyChatInputFocused(true);
        closure_1_13.state.current.focused = true;
        closure_1_2(true);
        closure_1_13.state.current.selectionStart = start;
        closure_1_13.state.current.selectionEnd = end;
        const result1 = memo1.handleTextOrFocusChange(closure_1_13.state.current.text, true);
        const current = closure_1_13.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = closure_1_13.chatInputCover.current;
        if (current2 != null) {
          current2.focused(true);
        }
        const current3 = closure_1_13.chatInputAutocomplete.current;
        if (current3 != null) {
          const obj2 = { focused: true, text: closure_1_13.state.current.text, selectionStart: start, selectionEnd: end };
          current3.setData(obj2);
        }
        const current4 = closure_1_13.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          const obj3 = { focused: true, text: closure_1_13.state.current.text, selectionStart: start, selectionEnd: end };
          current4.setData(obj3);
        }
        const obj = channel(1611);
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_1_13.state.current.textFieldContentSize = height;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_1_13.state.current.textFieldHeight;
          const result = textFieldHeight.set(channel(12284).getChatInputHeightAnimationTiming(height, sharedValue.get()));
          const tmp2Result = channel(12284);
        }
        obj = channel(12283);
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_1_13.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == closure_1_13.props.current.threadCreationCallback) {
            const current = closure_1_13.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_1_13.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_1_13.state.current.textFieldHeight;
            const result = textFieldHeight.set(channel(12284).getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
            const tmpResult = channel(12284);
          }
        }
        obj = channel(12283);
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_2_19(closure_1_13.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_1_13.state.current.focused) {
          const current = closure_1_13.chatInputAppCommandManager.current;
          if (current != null) {
            const applicationCommandManager = current.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              applicationCommandManager.setPastedCommand(tmp, closure_1_13.props.current.channel);
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
      handleToggleKeyboard: null
    };
    closure_0 = closure_4(function*(arg0) {
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
              return { value: "PX_16", done: true };
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
                if (closure_1_13.state.current.focused) {
                  if (closure_1_13.props.current.canUpload) {
                    c3 = 2;
                    c4 = 1;
                    const obj6 = { value: closure_0(5354).getImageDimensionsIfMissing(closure_129_0, closure_129_1, closure_129_2), done: false };
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
              const obj8 = { channelId: closure_1_13.props.current.channel.id, file: null, draftType: null };
              const size = { uri: closure_129_0, originalUri: closure_129_0, width: closure_129_4.width, height: closure_129_4.height, mimeType: closure_129_3, platform: closure_0(5344).UploadPlatform.REACT_NATIVE, id: null };
              const obj7 = screenIndex(9421);
              size.id = closure_0(1255).v4();
              obj8.file = size;
              obj8.draftType = ChannelMessage.ChannelMessage;
              obj7.addFile(obj8);
              const obj10 = closure_0(1255);
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
    obj.handlePasteImage = function() {
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
        const result = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = channel(4724);
        const obj4 = { type: constants3.ADD_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
        screenIndex(1241).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
        const obj22 = screenIndex(1241);
        const keyboardType = channel(4624).getKeyboardType();
        if (keyboardType === channel(1610).KeyboardTypes.APP_LAUNCHER) {
          const obj5 = { type: channel(1610).KeyboardTypes.APP_LAUNCHER };
          memo1.handleToggleKeyboard(obj5);
        } else {
          const keyboardType1 = channel(4624).getKeyboardType();
          if (keyboardType1 === channel(1610).KeyboardTypes.MEDIA) {
            const current = closure_1_13.chatInputActions.current;
            if (current != null) {
              current.focusPhotosButton();
            }
          }
          const obj8 = { type: channel(1610).KeyboardTypes.MEDIA, context: null };
          const obj11 = { target: constants7.CHAT };
          obj8.context = obj11;
          memo1.handleToggleKeyboard(obj8);
          const tmp42Result = channel(4624);
        }
        const obj24 = channel(4624);
      } else {
        let tmp35 = current2;
        if (constants.APPS === arg1) {
          const result1 = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj12 = channel(4724);
          channel(4936).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = channel(4936);
          const obj15 = { type: constants3.APPS_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
          screenIndex(1241).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
          const obj14 = screenIndex(1241);
          const result2 = c2(9593).dismissNewActivityIndicator();
          const obj16 = c2(9593);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = channel(12288).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj18 = { type: channel(1610).KeyboardTypes.APP_LAUNCHER, context: null };
          const obj19 = { initialRouteName: constants5.HOME, initialSearchQuery: null };
          const obj17 = channel(12288);
          const appDMApplication = channel(12449).getAppDMApplication(closure_1_13.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj19.initialSearchQuery = name;
          obj18.context = obj19;
          memo1.handleToggleKeyboard(obj18);
          const tmp23Result = channel(12449);
        } else if (constants.ALL_PHOTOS === arg1) {
          const result4 = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj9 = channel(4724);
          const obj20 = {
            channel: closure_1_13.props.current.channel,
            uploadLimit,
            onDismissKeyboard() {
                  return closure_1_0(4622).dismissKeyboard();
                },
            onRestoreKeyboard() {
                  return closure_1_14.handleToggleKeyboard({ type: closure_0(1610).KeyboardTypes.SYSTEM });
                },
            onSelectFiles(items) {
                  closure_0(10895).addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(5344).UploadOrigin.IMAGE_PICKER);
                },
            draftType: registerViewTag.ChannelMessage
          };
          channel(10895).handleViewAllDialog(obj20);
          const obj10 = channel(10895);
        } else if (constants.CAMERA === arg1) {
          const result5 = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj6 = channel(4724);
          const obj23 = {
            channel: closure_1_13.props.current.channel,
            previewType: constants6.CAMERA_BUTTON,
            onDismissKeyboard() {
                  return closure_1_0(4622).dismissKeyboard();
                },
            onRestoreKeyboard() {
                  return closure_1_14.handleToggleKeyboard({ type: closure_0(1610).KeyboardTypes.SYSTEM });
                },
            onSelectFiles(items) {
                  closure_0(10895).addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(5344).UploadOrigin.IMAGE_PICKER);
                }
          };
          channel(10895).handleCameraDialog(obj23);
          const obj7 = channel(10895);
        } else if (constants.NITRO_GIFT === arg1) {
          const result6 = screenIndex(1874).markPotentialBadState();
          const obj = screenIndex(1874);
          const result7 = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = channel(4724);
          if (obj3.isAndroid()) {
            channel(4622).dismissKeyboard();
            const tmp5Result = channel(4622);
          }
          obj3 = channel(1364);
          channel(10895).handleSelectGift(closure_1_13.props.current.analyticsLocations, closure_1_13.chatInput, tmp35);
          const tmp5Result2 = channel(10895);
        } else if (constants.THREAD === arg1) {
          const result8 = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj28 = channel(4724);
          channel(10895).handleSelectThread(closure_1_13.props.current.channel, closure_1_13.chatInput);
          const obj29 = channel(10895);
        }
      }
    };
    obj.handlePollsPress = function handlePollsPress() {
      const result = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = channel(4724);
      screenIndex(1241).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, { type: constants3.POLLS, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id });
      const obj2 = screenIndex(1241);
      const obj3 = { type: constants3.POLLS, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
      channel(4622).dismissKeyboard();
      const obj4 = channel(4622);
      channel(12450).openCreatePollModal({
        channel: closure_1_13.props.current.channel,
        onCancel() {
          return closure_1_14.handleToggleKeyboard({ type: closure_0(1610).KeyboardTypes.SYSTEM });
        }
      });
    };
    obj.handleAttachPress = function handleAttachPress() {
      const result = channel(4724).triggerHapticFeedback(channel(4724).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = channel(4724);
      channel(10895).handleAttachFile({
        channel: closure_1_13.props.current.channel,
        uploadLimit,
        onDismissKeyboard() {
          return closure_1_0(dependencyMap[58]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_1_14.handleToggleKeyboard({ type: closure_0(1610).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          closure_0(10895).addImagesFromPicker(props.props.current.channel.id, items, closure_0(5344).UploadOrigin.FILE_ATTACHMENT);
        }
      });
    };
    obj.handlePressExpression = function handlePressExpression(context) {
      const result = channel(10592).initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
      const obj = channel(10592);
      memo1.handleToggleKeyboard({ type: channel(1610).KeyboardTypes.EXPRESSION, context });
    };
    obj.handlePressSend = function handlePressSend() {
      const current = closure_1_13.chatInput.current;
      current.handleSend();
    };
    obj.handleSelectionOrTextChange = function handleSelectionOrTextChange(nativeEvent) {
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      closure_1_13.state.current.editId = editId;
      closure_1_13.state.current.selectionStart = start;
      closure_1_13.state.current.selectionEnd = end;
      const result = memo1.handleTextOrFocusChange(text, closure_1_13.state.current.focused);
      const current = closure_1_13.chatInputAppCommandManager.current;
      if (current != null) {
        current.updateState();
      }
      const current2 = closure_1_13.chatInputAutocomplete.current;
      if (current2 != null) {
        const obj = { focused: closure_1_13.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current2.setData(obj);
      }
      const current3 = closure_1_13.chatInputEmojiSuggestions.current;
      if (current3 != null) {
        const obj2 = { focused: closure_1_13.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current3.setData(obj2);
      }
      const current4 = closure_1_13.chatInputSendButton.current;
      if (current4 != null) {
        current4.setHasText(text.trim().length > 0);
      }
      if (closure_1_13.state.current.editId !== editId) {
        const current5 = closure_1_13.chatInput.current;
        current5.handleTextChanged(text);
        const current6 = closure_1_13.chatInputCharCounter.current;
        if (current6 != null) {
          const result1 = current6.onMessageLengthChanged(text.length);
        }
        channel(8175).hideContextMenu();
        const obj3 = channel(8175);
      }
    };
    obj.handleTapAction = function handleTapAction(nativeEvent) {
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = closure_1_13.chatInput.current;
        current.blur();
        const obj = channel(12484);
        const current2 = closure_1_13.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        let fn;
        if (closure_1_13.state.current.focused) {
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
          const maxMessageLength = channel(9418).getMaxMessageLength();
          if (tmp16) {
            screenIndex(1241).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = screenIndex(1241);
          }
          closure_1_13.state.current.textPrev = closure_1_13.state.current.text;
          closure_1_13.state.current.text = text;
          const obj2 = channel(9418);
          tmp16 = closure_1_13.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
        }
        if (isCoachmarkVisible.isOpen()) {
          screenIndex(10910).hideNativeMenu();
          const obj = screenIndex(10910);
        }
        const current2 = closure_1_13.chatInputActions.current;
        if (current2 != null) {
          current2.onDismissActions(focused);
        }
        const current3 = closure_1_13.chatInputRightActions.current;
        if (current3 != null) {
          current3.onDismissActions(focused);
        }
      }
      if (0 === text.length) {
        const current4 = closure_1_13.chatInputActions.current;
        if (current4 != null) {
          current4.onShowActions(focused);
        }
        const current = closure_1_13.chatInputRightActions.current;
        if (current != null) {
          current.onShowActions(focused);
        }
      }
    };
    obj.handleTextFlushed = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = closure_1_13.chatInputTextFlushedResponses.current;
      value = current.get(nativeEvent.requestId);
      if (value != null) {
        value(nativeEvent.text);
      }
    };
    obj.handleToggleKeyboard = function handleToggleKeyboard(type) {
      if (isCoachmarkVisible.isOpen()) {
        screenIndex(10910).hideNativeMenu();
        const obj = screenIndex(10910);
      }
      if (type.type !== channel(1610).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = closure_1_13.chatInput.current;
          current.openCustomKeyboard(type);
        }
        tmp4Result = channel(4624);
      }
      const current2 = closure_1_13.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items14);
  const items15 = [null != threadCreationCallback, tmp56];
  const callback2 = obj10.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!closure_4) {
        const current = closure_13.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
    tmp = 0 !== height && 0 !== layout.width;
  }, items15);
  const tmp62 = screenIndex(12283)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp62.registerViewTag;
  unregisterViewTag = tmp62.unregisterViewTag;
  ref = obj10.useRef(null);
  const items16 = [tmp56, registerViewTag, unregisterViewTag];
  const callback3 = obj10.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(ref.current);
      ref.current = null;
    }
    closure_13.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = React6(current);
      if (null != tmp5) {
        ref.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items16);
  const items17 = [editable, tmp56];
  const callback4 = obj10.useCallback(() => true, []);
  const callback5 = obj10.useCallback(() => {
    if (editable) {
      const current = closure_13.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items17);
  let tmp66Result = null;
  let obj5 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
  let obj6 = { canUpload, channelId: channel.id, screenIndex };
  const tmpResult54 = channel(12239);
  if (editable) {
    let obj7 = { ref: tmp56.chatInputActions, channel, onPressAction: memo1.handlePressAction, canStartThreads: canStartThread, isAppLauncherEnabled, keyboardType: tmp43, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null, onContextMenuOpen: null };
    let tmp70 = canUpload;
    if (canUpload) {
      tmp70 = null == stateFromStores3;
    }
    if (!tmp70) {
      tmp70 = tmp39;
    }
    obj7.shouldPhotosButtonBeDisabled = !tmp70;
    obj7.canUpload = canUpload;
    let result2 = result3;
    if (!tmp21) {
      result2 = tmp(4427).isPremiumGiftingSupported();
      const tmpResult55 = tmp(4427);
    }
    obj7.shouldShowGiftButton = result2;
    obj7.canPostPolls = tmp39;
    ({ handlePollsPress: obj34.onPollsPress, handleAttachPress: obj34.onAttachPress } = memo1);
    obj7.photosButtonExternalRef = ref;
    obj7.onContextMenuOpen = function onContextMenuOpen() {
      if (isCoachmarkVisible) {
        dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
      }
    };
    tmp66Result = closure_37(tmp6(12488), obj7);
    const tmp6Result = tmp6(12488);
  }
  let obj8 = { style: null, children: null };
  const items18 = [tmp10.inputDefault, animatedStyle];
  obj8.style = items18;
  let obj9 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: 5 };
  const tmp67 = closure_37(screenIndex(12487), { canUpload, channelId: channel.id, screenIndex });
  obj9.customKeyboard = channel(12505).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj9.editable = editable;
  ({ handleFocus: obj37.onBeginFocus, handleBlur: obj37.onEndBlur, handleChangeContentSize: obj37.onChangeContentSize, handleMaxHeightChanged: obj37.onMaxHeightChanged, handleSelectionOrTextChange: obj37.onSelectionOrTextChange, handleTextFlushed: obj37.onTextFlushed, handlePasteImage: obj37.onPasteImage, handlePasteCommand: obj37.onPasteCommand, handleTapAction: obj37.onTapAction, handlePressSend: obj37.onRequestSend } = memo1);
  obj9.placeholder = placeholder;
  obj9.ref = callback3;
  obj9.setNoExtractUI = setNoExtractUI;
  obj9.shouldShowCursor = tmp43 !== channel(1610).KeyboardTypes.MEDIA;
  const items19 = [closure_37(screenIndex(12504), obj9), closure_37(screenIndex(12506), { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp56.chatInputCover })];
  obj8.children = items19;
  let obj11 = { keyboardType: tmp43, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp56.chatInputCover };
  const tmp6Result7 = screenIndex(12504);
  if (editable) {
    let obj12 = { ref: tmp56.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj12.hasPendingAttachments = stateFromStores2;
    obj12.hasPendingEdit = null != stateFromStores;
    obj12.onSendMessage = memo1.handlePressSend;
    obj12.requireTextContent = result3;
    let tmp66Result17 = closure_37(tmp6(12507), obj12);
    const tmp6Result8 = tmp6(12507);
  } else {
    tmp66Result17 = null;
  }
  let obj13 = { collapsable: false, onLayout: callback2, style: null, children: null };
  const items20 = [screenIndex(12513)({ isCreatingThread: null != threadCreationCallback }), tmp10.overflowVisible, ];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp10.floatingScrimOverlap;
  }
  items20[2] = floatingScrimOverlap;
  obj13.style = items20;
  let tmp66Result18 = !result1;
  if (!result1) {
    let obj14 = { gradientHeight: tmp28, inline: false, scrimBase: token2 };
    tmp66Result18 = closure_37(tmp(12514).ChatInputScrimGradient, obj14);
  }
  const items21 = [tmp66Result18, , , , , , , , , , , , , ];
  let tmp66Result19 = result1;
  if (result1) {
    let hex2rgbResult = tmp(1092).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    let obj15 = { style: null, pointerEvents: "none" };
    const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
    obj15.style = rect;
    tmp66Result19 = closure_37(tmp77, obj15);
    const tmpResult56 = tmp(1092);
  }
  items21[1] = tmp66Result19;
  items21[2] = closure_37(channel(12515).ChatInputAccessibilityDivider, {});
  let tmp66Result20 = null;
  if (tmp22) {
    let obj16 = { channel, hasInputText: null };
    let tmp83 = "" !== memo;
    if (!tmp83) {
      let current = tmp56.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp83 = "" !== text;
    }
    obj16.hasInputText = tmp83;
    tmp66Result20 = closure_37(tmp6(12516), obj16);
    const tmp6Result9 = tmp6(12516);
  }
  items21[3] = tmp66Result20;
  let obj17 = { style: tmp10.accessories, children: null };
  let tmp66Result21 = result1;
  if (result1) {
    let obj18 = { gradientHeight: tmp29, inline: true, scrimBase: token2 };
    tmp66Result21 = closure_37(tmp(12514).ChatInputScrimGradient, obj18);
  }
  const items22 = [tmp66Result21, , ];
  let tmp66Result22 = null;
  if (null == threadCreationCallback) {
    let obj19 = { channel, screenIndex };
    tmp66Result22 = closure_37(tmp6(12217), obj19);
  }
  items22[1] = tmp66Result22;
  const tmp74 = closure_38(screenIndex(4492).View, obj8);
  let tmp66Result23 = null;
  if (tmpResult57.isIOS()) {
    let obj20 = { channelId: channel.id, screenIndex, onJumpToPresent };
    tmp66Result23 = closure_37(tmp6(12520), obj20);
  }
  items22[2] = tmp66Result23;
  obj17.children = items22;
  items21[4] = closure_38(editable, obj17);
  let tmp66Result24 = null;
  if (isResourceChannel) {
    let obj21 = { channel };
    tmp66Result24 = closure_37(tmp6(12536), obj21, channel.id);
  }
  items21[5] = tmp66Result24;
  items21[6] = closure_37(channel(12541).MemberActionsChatInputBannerGuardedOuter, { channel });
  items21[7] = closure_37(channel(12544).DoubleTapToReactChatInputBanner, { channel });
  let tmp66Result25 = null;
  if (tmp23) {
    let obj22 = { channelId: channel.id };
    tmp66Result25 = closure_37(tmp6(12637), obj22);
  }
  items21[8] = tmp66Result25;
  let tmp66Result26 = null;
  if (tmp43 !== channel(1610).KeyboardTypes.EXPRESSION) {
    let obj23 = { ref: tmp56.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp43, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp35, canOnlyUseTextCommands: tmp36, chatInputRef: tmp56.chatInput, screenIndex };
    tmp66Result26 = closure_37(tmp6(12639), obj23);
  }
  items21[9] = tmp66Result26;
  items21[10] = closure_37(screenIndex(12659), { ref: tmp56.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp56.chatInput, chatInputStateRef: tmp56.state, commandsDisabled: tmp35 });
  const obj25 = { style: null, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  const items23 = [, ];
  ({ container: arr24[0], floatingContainer: arr24[1] } = tmp10);
  obj25.style = items23;
  const items24 = [tmp67, , , ];
  let obj24 = { ref: tmp56.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp56.chatInput, chatInputStateRef: tmp56.state, commandsDisabled: tmp35 };
  tmpResult57 = channel(1364);
  items24[1] = closure_37(screenIndex(12662), { channel });
  const items25 = [tmp10.floatingInputBox, , ];
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
  }
  items25[1] = floatingInputBoxPressed;
  let floatingInputBoxTyping = result1;
  if (result1) {
    floatingInputBoxTyping = tmp10.floatingInputBoxTyping;
  }
  const obj26 = { style: items25, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp44, importantForAccessibility: null, children: null };
  items25[2] = floatingInputBoxTyping;
  let str2;
  if (tmp44) {
    str2 = "no-hide-descendants";
  }
  obj26.importantForAccessibility = str2;
  const items26 = [closure_37(screenIndex(12675), { channel, chatInputRef: tmp56.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 }), , ];
  let tmp66Result27 = tmp66Result30;
  if (tmp66Result30) {
    tmp66Result27 = "large" === mobileEmojiSuggestionsConfig.style;
  }
  if (tmp66Result27) {
    let obj28 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
    ({ chatInputEmojiSuggestions: obj58.ref, chatInput: obj58.chatInputRef, state: obj58.chatInputStateRef } = tmp56);
    obj28.channel = channel;
    obj28.suppressed = tmp25;
    tmp66Result27 = closure_37(tmp(12679).EmojiSuggestionBarLarge, obj28);
  }
  items26[1] = tmp66Result27;
  let obj29 = { style: tmp10.floatingMainContents, children: null };
  let tmp66Result28 = null;
  if (null != tmp66Result) {
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: result, paddingLeft: result };
    obj30.style = obj31;
    obj30.children = tmp66Result;
    tmp66Result28 = closure_37(tmp77, obj30);
  }
  const items27 = [tmp66Result28, , , ];
  const obj32 = { style: null, children: null };
  const items28 = [tmp10.inputFlat, { paddingBottom: result }];
  obj32.style = items28;
  const items29 = [tmp74, closure_37(screenIndex(12683), { analyticsLocations, ref: tmp56.chatInputCharCounter })];
  obj32.children = items29;
  items27[1] = closure_38(editable, obj32);
  let tmp66Result29 = null;
  if (editable) {
    const obj35 = { style: null, children: null };
    const obj36 = { paddingBottom: result };
    obj35.style = obj36;
    const obj38 = { ref: tmp56.chatInputRightActions, channel, keyboardType: tmp43, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null };
    if (!tmp21) {
      result3 = tmp(4427).isPremiumGiftingSupported();
      const tmpResult58 = tmp(4427);
    }
    obj38.shouldShowGiftButton = result3;
    ({ handlePressAction: obj66.onPressAction, handlePressExpression: obj66.onPressExpression } = memo1);
    obj35.children = closure_37(tmp6(12684), obj38);
    tmp66Result29 = closure_37(tmp77, obj35);
    const tmp6Result11 = tmp6(12684);
  }
  items27[2] = tmp66Result29;
  items27[3] = tmp66Result17;
  obj29.children = items27;
  items26[2] = closure_38(editable, obj29);
  obj26.children = items26;
  items24[2] = closure_38(editable, obj26);
  if (tmp66Result30) {
    tmp66Result30 = "small" === mobileEmojiSuggestionsConfig.style;
  }
  if (tmp66Result30) {
    const obj39 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null, anchorTop: null, onOccupiedHeightChange: null };
    ({ chatInputEmojiSuggestions: obj68.ref, chatInput: obj68.chatInputRef, state: obj68.chatInputStateRef } = tmp56);
    obj39.channel = channel;
    obj39.suppressed = tmp25;
    obj39.anchorTop = tmp17;
    obj39.onOccupiedHeightChange = callback1;
    tmp66Result30 = closure_37(tmp(12685).EmojiSuggestionBarSmall, obj39);
  }
  items24[3] = tmp66Result30;
  obj25.children = closure_38(closure_39, { children: items24 });
  items21[11] = closure_37(screenIndex(12661), obj25);
  let tmp66Result31 = null;
  if (null != refreshChatInputCoachmark) {
    const obj40 = { buttonRef: ref };
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp66Result31 = closure_37(tmp6(12238), obj40);
    const tmp6Result12 = tmp6(12238);
  }
  items21[12] = tmp66Result31;
  items21[13] = closure_37(screenIndex(12686), { buttonRef: ref, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
  obj13.children = items21;
  const tmp72Result = closure_38(editable, obj13);
  let tmp66Result32 = tmp72Result;
  if (null == threadCreationCallback) {
    const obj41 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: tmp72Result };
    tmp66Result32 = closure_37(tmp6(12687), obj41);
  }
  return tmp66Result32;
});
forwardRefResult.displayName = "ChatInput";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default noop.memo(forwardRefResult);