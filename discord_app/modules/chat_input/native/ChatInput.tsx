// === Module 11958: ChatInput ===

// Module 11958 (ChatInput)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7221 */;
import ThreadHooks from "ThreadHooks" /* 7269 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7780 */;
import DiceRollStore from "DiceRollStore" /* 11959 */;
import NativeMenuStore from "NativeMenuStore" /* 9684 */;
import PendingReplyStore from "PendingReplyStore" /* 7680 */;
import DraftStore from "DraftStore" /* 4901 */;
import EditMessageStore from "EditMessageStore" /* 7681 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, findNodeHandle: closure_8 } = get_ActivityIndicator);
let useVoiceMessagesUIStore = fn(11960).useVoiceMessagesUIStore;
const DraftType = fn(4901).DraftType;
const useChatBottomManagerUIStore = fn(9485);
({ updateShowingAutoComplete: closure_19, updateSmallSuggestionBarHeight: closure_20, useChatIsAtBottom: closure_21, useChatShowingAutoComplete: closure_22 } = useChatBottomManagerUIStore);
const ChatInputConstants = fn(11962);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_23, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24, ChatInputActionType: closure_25 } = ChatInputConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_26, ChannelTypesSets: closure_27, ChatInputComponentViewedTypes: closure_28, ComponentActions: closure_29, MAX_UPLOAD_COUNT: closure_30, Permissions: items } = Constants);
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const EmojiInteractionPoint = fn(1374).EmojiInteractionPoint;
const MediaKeyboardConstants = fn(1607);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
const jsxProd = fn(21);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
const createStyles = fn(4560);
let closure_40 = createStyles.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  let obj = { position: "relative", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: __initData3 - __initData4, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(576).colors.BACKGROUND_BASE_LOW;
  }
  obj = { container: null, inputDefault: null, accessories: null, floatingContainer: null, floatingInputBox: null, floatingInputBoxPressed: null, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null, backgroundColor: BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.container = obj;
  obj.inputDefault = { alignSelf: "stretch", marginLeft: 0, marginTop: 0 };
  obj.accessories = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  obj = { borderTopWidth: 0, borderColor: "transparent", borderRadius: tmp(576).radii.none, backgroundColor: "transparent", paddingHorizontal: tmp(576).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj.floatingContainer = obj;
  obj.floatingInputBox = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj1 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj.floatingInputBoxPressed = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj.floatingInputBoxTyping = { shadowOpacity: 0, elevation: 0 };
  const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj.floatingMainContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  const obj3 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  let num = -6;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj.inputFlat = { flex: 1, justifyContent: "center", marginLeft: num };
  obj.floatingScrimOverlap = { marginTop: -arg1 / 2 };
  obj.overflowVisible = { overflow: "visible" };
  return obj;
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
  let obj = channel(11963);
  const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
  let obj1 = channel(4378);
  const gradientValue = obj1.useGradientValue(channel(4378).GradientPercentage.END);
  let obj2 = channel(4262);
  const token = obj2.useToken(screenIndex(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = channel(4262);
  let result = (obj3.useToken(screenIndex(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = channel(4262);
  const token1 = obj4.useToken(screenIndex(576).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp9 = closure_40(gradientValue, token1);
  let obj5 = channel(4262);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = obj5.useToken(screenIndex(576).colors.BACKGROUND_BASE_LOWER);
  }
  let tmpResult = tmp(4262);
  const token3 = tmpResult.useToken(tmp5(576).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  tmpResult = tmp(4262);
  const token4 = tmpResult.useToken(tmp5(576).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = stateFromStores1;
  const token5 = channel(4262).useToken(tmp5(576).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  const tmpResult1 = channel(4262);
  [floatingInputBoxPressed, c2] = stateFromStores(stateFromStores1.useState(false), 2);
  let tmp14 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp16, c3] = stateFromStores(stateFromStores1.useState(0), 2);
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
  closure_4 = tmp20;
  let tmp15 = stateFromStores(stateFromStores1.useState(0), 2);
  let tmp21 = channel.isPrivate() && null == threadCreationCallback;
  const tmp22 = sharedValue1((channelId) => channelId.channelId === channel.id);
  const typingUserIdsForDisplay = channel(11964).useTypingUserIdsForDisplay(channel.id, 1);
  const tmp24 = closure_22(screenIndex);
  const tmpResult2 = channel(11964);
  let result1 = channel(11964).hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp24);
  const tmp26 = closure_21(screenIndex);
  let tmp27 = token1;
  if (tmp26) {
    tmp27 = token5;
  }
  let tmp28 = token4;
  if (tmp26) {
    tmp28 = token3;
  }
  const tmpResult3 = channel(11964);
  const items2 = [unregisterViewTag];
  stateFromStores = channel(504).useStateFromStores(items2, () => {
    let editingTextValue = null;
    if (!closure_4) {
      editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult4 = channel(504);
  const items3 = [dismissCoachmark];
  stateFromStores1 = channel(504).useStateFromStores(items3, () => {
    let pendingReply;
    if (!closure_4) {
      pendingReply = PendingReplyStore.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult5 = channel(504);
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
    memo = obj9.useMemo(() => DraftStore.getDraft(channel.id, closure_4 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage), items5);
  }
  const tmpResult6 = channel(504);
  const items6 = [ref];
  const items7 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items6, () => {
    let obj = PermissionStore;
    let canResult1 = PermissionStore.can(constants3.MENTION_EVERYONE, channel);
    const canResult = PermissionStore.can(constants3.ATTACH_FILES, channel);
    const canResult2 = PermissionStore.can(constants3.SEND_MESSAGES, channel);
    const canResult3 = PermissionStore.can(constants3.SEND_VOICE_MESSAGES, channel);
    const tmp6 = PermissionStore.can(constants3.CREATE_PUBLIC_THREADS, channel) || obj.can(constants3.CREATE_PRIVATE_THREADS, channel);
    let isPrivateResult = obj2.isPrivate();
    const canResult4 = obj.can(constants3.SEND_MESSAGES_IN_THREADS, channel);
    let tmp11 = canResult4;
    const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(obj2);
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
      tmp14 = !tmp10;
    }
    obj = { canMentionEveryone: tmp14, canUpload: null, canSendVoiceMessage: null, editable: null, canCreateThreads: null };
    let tmp15 = isPrivateResult;
    if (!isPrivateResult) {
      tmp15 = canResult;
    }
    if (tmp15) {
      tmp15 = !tmp13;
    }
    if (tmp15) {
      tmp15 = !tmp10;
    }
    obj.canUpload = tmp15;
    if (!isPrivateResult) {
      isPrivateResult = canResult3;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp13;
    }
    if (isPrivateResult) {
      isPrivateResult = !tmp10;
    }
    obj.canSendVoiceMessage = isPrivateResult;
    obj.editable = !tmp13;
    obj.canCreateThreads = tmp6;
    return obj;
  }, items7);
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = tmp5(7162)().analyticsLocations;
  let tmp34 = tmp20;
  if (null == threadCreationCallback) {
    tmp34 = null != stateFromStores;
  }
  if (!tmp34) {
    tmp34 = !tmp(7269).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult8 = tmp(7269);
  }
  const tmpResult7 = channel(504);
  let canStartThread = channel(7269).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp20;
  }
  const tmpResult9 = channel(7269);
  const tmp38 = channel(7761).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult10 = channel(7761);
  sharedValue = channel(4296).useSharedValue(token);
  const tmpResult11 = channel(4296);
  sharedValue1 = channel(4296).useSharedValue(token);
  const items8 = [sharedValue1, token, sharedValue];
  const effect1 = obj9.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items8);
  const tmp42 = screenIndex(4427)();
  const tmp43 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp20;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(9546).getIsAppLauncherEnabled(channel);
    const tmpResult13 = tmp(9546);
  }
  const tmpResult12 = channel(4296);
  const items9 = [sharedValue];
  const stateFromStores3 = channel(504).useStateFromStores(items9, () => ApplicationCommandStore.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp20 };
  const tmpResult14 = channel(504);
  ({ placeholder, accessibilityLabel } = screenIndex(11984)(obj));
  const tmp47 = screenIndex(11984)(obj);
  function ze() {
    return { minHeight: sharedValue1.get() };
  }
  ze.__closure = { textFieldHeight: sharedValue1 };
  ze.__workletHash = 11048691841625;
  ze.__initData = __initData;
  const animatedStyle = channel(4296).useAnimatedStyle(ze);
  ref = obj9.useRef(null);
  const tmpResult15 = channel(4296);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = channel(11985).useRefreshChatInputCoachmark(obj);
  const tmpResult16 = channel(11985);
  const canUseScheduledMessages = channel(7845).useCanUseScheduledMessages();
  const tmpResult17 = channel(7845);
  const items10 = [memo1];
  const stateFromStores4 = channel(504).useStateFromStores(items10, () => DraftStore.getDraft(channel.id, DraftType.ChannelMessage));
  const tmpResult18 = channel(504);
  obj1 = { channel, draftText: stateFromStores4, isEligible: null };
  let tmp53 = canUseScheduledMessages;
  if (canUseScheduledMessages) {
    tmp53 = editable;
  }
  if (tmp53) {
    tmp53 = result3;
  }
  if (tmp53) {
    tmp53 = null == refreshChatInputCoachmark;
  }
  obj1.isEligible = tmp53;
  const scheduledMessageDraftCoachmarkState = channel(11986).useScheduledMessageDraftCoachmarkState(obj1);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  obj2 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
  const tmp55 = screenIndex(11987)(obj2);
  useVoiceMessagesUIStore = tmp55;
  const items11 = [tmp55];
  const effect2 = obj9.useEffect(() => {
    const current = closure_13.chatInput.current;
    current.setText(closure_13.props.current.defaultValue);
  }, items11);
  const items12 = [tmp55, channel, stateFromStores, stateFromStores1];
  const effect3 = obj9.useEffect(() => {
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
      const current2 = tmp.chatInput.current;
      if (current2 != null) {
        current2.focus();
      }
    }
    const id = tmp.propsPrev.current.channel.id;
    if (id !== channel.id) {
      if (id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        const current4 = tmp.chatInput.current;
        if (current4 != null) {
          current4.setText(tmp.props.current.defaultValue);
        }
      }
    }
    if (pendingEdit !== stateFromStores) {
      const current3 = tmp.chatInput.current;
      if (current3 != null) {
        let str = "";
        if (null != tmp9) {
          str = tmp9;
        }
        current3.setText(str);
      }
    }
  }, items12);
  const items13 = [tmp55];
  const effect4 = obj9.useEffect(() => {
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
    let ComponentDispatch = channel(_undefined[41]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants4.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items13);
  const items14 = [tmp55, sharedValue];
  memo1 = obj9.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = channel(1610);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = memo1.handleTextOrFocusChange(str, false);
        closure_1_13.state.current.focused = false;
        closure_1_2(false);
        const current = closure_1_13.chatInputCover.current;
        if (current != null) {
          current.focused(false);
        }
        const current2 = tmp3.chatInputAppCommandManager.current;
        if (current2 != null) {
          current2.updateState();
        }
        const current3 = tmp3.chatInputAutocomplete.current;
        if (current3 != null) {
          obj = { focused: false, text: str, selectionStart: tmp3.state.current.selectionStart, selectionEnd: tmp3.state.current.selectionEnd };
          current3.setData(obj);
        }
        const current4 = tmp3.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          obj = { focused: false, text: str, selectionStart: tmp3.state.current.selectionStart, selectionEnd: tmp3.state.current.selectionEnd };
          current4.setData(obj);
        }
        const current5 = tmp3.chatInputSendButton.current;
        if (current5 != null) {
          current5.setHasText(str.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = channel(1610);
        const result = obj.setIsAnyChatInputFocused(true);
        closure_1_13.state.current.focused = true;
        closure_1_2(true);
        closure_1_13.state.current.selectionStart = start;
        closure_1_13.state.current.selectionEnd = end;
        const result1 = memo1.handleTextOrFocusChange(closure_1_13.state.current.text, true);
        const current = closure_1_13.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = tmp2.chatInputCover.current;
        if (current2 != null) {
          current2.focused(true);
        }
        const current3 = tmp2.chatInputAutocomplete.current;
        if (current3 != null) {
          obj = { focused: true, text: tmp2.state.current.text, selectionStart: start, selectionEnd: end };
          current3.setData(obj);
        }
        const current4 = tmp2.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          obj = { focused: true, text: tmp2.state.current.text, selectionStart: start, selectionEnd: end };
          current4.setData(obj);
        }
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_1_13.state.current.textFieldContentSize = height;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_1_13.state.current.textFieldHeight;
          const result = textFieldHeight.set(channel(12031).getChatInputHeightAnimationTiming(height, sharedValue.get()));
          const tmp2Result = channel(12031);
        }
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
            const result = textFieldHeight.set(channel(12031).getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
            const tmpResult = channel(12031);
          }
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_2_19(closure_1_13.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_1_13.state.current.focused) {
          const current = tmp2.chatInputAppCommandManager.current;
          if (current != null) {
            const applicationCommandManager = current.getApplicationCommandManager();
            if (applicationCommandManager != null) {
              applicationCommandManager.setPastedCommand(tmp, tmp2.props.current.channel);
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
    closure_0 = closure_4(function*(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
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
                let obj1 = { value, done: true };
                return obj1;
              } else {
                if (closure_1_13.state.current.focused) {
                  if (closure_1_13.props.current.canUpload) {
                    obj1 = closure_0(5138);
                    c3 = 2;
                    c4 = 1;
                    const obj2 = { value: obj1.getImageDimensionsIfMissing(closure_129_0, closure_129_1, closure_129_2), done: false };
                    return obj2;
                  }
                }
                c4 = 3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_4 = value;
              const obj3 = { channelId: closure_1_13.props.current.channel.id, file: null, draftType: null };
              const size = { uri: closure_129_0, originalUri: closure_129_0, width: closure_129_4.width, height: closure_129_4.height, mimeType: closure_129_3, platform: closure_0(5128).UploadPlatform.REACT_NATIVE, id: null };
              const obj7 = screenIndex(9307);
              size.id = closure_0(1256).v4();
              obj3.file = size;
              obj3.draftType = ChannelMessage.ChannelMessage;
              obj7.addFile(obj3);
              const obj10 = closure_0(1256);
            }
            c4 = 3;
            obj = { value, done: true };
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
        const result = channel(4528).triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = channel(4528);
        let obj = { type: constants3.ADD_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
        screenIndex(1242).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const obj22 = screenIndex(1242);
        const tmp48 = closure_1_13;
        const keyboardType = channel(4427).getKeyboardType();
        if (keyboardType === channel(1609).KeyboardTypes.APP_LAUNCHER) {
          obj = { type: tmp42(1609).KeyboardTypes.APP_LAUNCHER };
          memo1.handleToggleKeyboard(obj);
        } else {
          const keyboardType1 = tmp42(4427).getKeyboardType();
          if (keyboardType1 === tmp42(1609).KeyboardTypes.MEDIA) {
            const current = tmp48.chatInputActions.current;
            if (current != null) {
              current.focusPhotosButton();
            }
          }
          let obj1 = { type: tmp42(1609).KeyboardTypes.MEDIA, context: null };
          let obj2 = { target: constants7.CHAT };
          obj1.context = obj2;
          memo1.handleToggleKeyboard(obj1);
          const tmp42Result = tmp42(4427);
        }
        const obj24 = channel(4427);
      } else {
        let tmp35 = current2;
        if (tmp.APPS === arg1) {
          const result1 = channel(4528).triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj12 = channel(4528);
          channel(4740).trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = channel(4740);
          const obj3 = { type: constants3.APPS_BUTTON, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
          screenIndex(1242).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj14 = screenIndex(1242);
          const tmp30 = closure_1_13;
          const result2 = c2(9504).dismissNewActivityIndicator();
          const obj16 = c2(9504);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = channel(12035).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj4 = { type: channel(1609).KeyboardTypes.APP_LAUNCHER, context: null };
          let obj5 = { initialRouteName: constants5.HOME, initialSearchQuery: null };
          const obj17 = channel(12035);
          const appDMApplication = channel(12196).getAppDMApplication(tmp30.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj5.initialSearchQuery = name;
          obj4.context = obj5;
          memo1.handleToggleKeyboard(obj4);
          const tmp23Result = channel(12196);
        } else if (tmp.ALL_PHOTOS === arg1) {
          const result4 = channel(4528).triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj9 = channel(4528);
          let obj6 = {
            channel: closure_1_13.props.current.channel,
            uploadLimit,
            onDismissKeyboard() {
                  return closure_1_0(4425).dismissKeyboard();
                },
            onRestoreKeyboard() {
                  return closure_1_14.handleToggleKeyboard({ type: closure_0(1609).KeyboardTypes.SYSTEM });
                },
            onSelectFiles(items) {
                  closure_0(10635).addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(5128).UploadOrigin.IMAGE_PICKER);
                },
            draftType: registerViewTag.ChannelMessage
          };
          channel(10635).handleViewAllDialog(obj6);
          const obj10 = channel(10635);
        } else if (tmp.CAMERA === arg1) {
          obj5 = channel(4528);
          const result5 = obj5.triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          obj6 = channel(10635);
          const obj7 = {
            channel: closure_1_13.props.current.channel,
            previewType: constants6.CAMERA_BUTTON,
            onDismissKeyboard() {
                  return closure_1_0(4425).dismissKeyboard();
                },
            onRestoreKeyboard() {
                  return closure_1_14.handleToggleKeyboard({ type: closure_0(1609).KeyboardTypes.SYSTEM });
                },
            onSelectFiles(items) {
                  closure_0(10635).addImagesFromPicker(closure_1_13.props.current.channel.id, items, closure_0(5128).UploadOrigin.IMAGE_PICKER);
                }
          };
          obj6.handleCameraDialog(obj7);
        } else if (tmp.NITRO_GIFT === arg1) {
          obj = screenIndex(1873);
          const result6 = obj.markPotentialBadState();
          obj1 = channel(4528);
          const result7 = obj1.triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = channel(1115);
          if (obj2.isAndroid()) {
            let tmp5Result = tmp5(4425);
            tmp5Result.dismissKeyboard();
          }
          tmp5Result = tmp5(10635);
          tmp5Result.handleSelectGift(closure_1_13.props.current.analyticsLocations, closure_1_13.chatInput, tmp35);
        } else if (tmp.THREAD === arg1) {
          const result8 = channel(4528).triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj28 = channel(4528);
          channel(10635).handleSelectThread(closure_1_13.props.current.channel, closure_1_13.chatInput);
          const obj29 = channel(10635);
        }
      }
    };
    obj.handlePollsPress = function handlePollsPress() {
      let obj = channel(4528);
      const result = obj.triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: constants3.POLLS, channel_id: closure_1_13.props.current.channel.id, guild_id: closure_1_13.props.current.channel.guild_id };
      screenIndex(1242).track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = screenIndex(1242);
      channel(4425).dismissKeyboard();
      const obj4 = channel(4425);
      obj = {
        channel: closure_1_13.props.current.channel,
        onCancel() {
          return closure_1_14.handleToggleKeyboard({ type: closure_0(1609).KeyboardTypes.SYSTEM });
        }
      };
      channel(12197).openCreatePollModal(obj);
    };
    obj.handleAttachPress = function handleAttachPress() {
      let obj = channel(4528);
      const result = obj.triggerHapticFeedback(channel(4528).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: closure_1_13.props.current.channel,
        uploadLimit,
        onDismissKeyboard() {
          return closure_1_0(dependencyMap[57]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_1_14.handleToggleKeyboard({ type: closure_0(1609).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          closure_0(10635).addImagesFromPicker(props.props.current.channel.id, items, closure_0(5128).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      channel(10635).handleAttachFile(obj);
    };
    obj.handlePressExpression = function handlePressExpression(context) {
      let obj = channel(10333);
      const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
      obj = { type: channel(1609).KeyboardTypes.EXPRESSION, context };
      memo1.handleToggleKeyboard(obj);
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
      const current2 = tmp.chatInputAutocomplete.current;
      if (current2 != null) {
        let obj = { focused: tmp.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current2.setData(obj);
      }
      const current3 = tmp.chatInputEmojiSuggestions.current;
      if (current3 != null) {
        obj = { focused: tmp.state.current.focused, text, selectionStart: start, selectionEnd: end };
        current3.setData(obj);
      }
      const current4 = tmp.chatInputSendButton.current;
      if (current4 != null) {
        current4.setHasText(text.trim().length > 0);
      }
      if (closure_1_13.state.current.editId !== editId) {
        const current5 = tmp.chatInput.current;
        current5.handleTextChanged(text);
        const current6 = tmp.chatInputCharCounter.current;
        if (current6 != null) {
          const result1 = current6.onMessageLengthChanged(text.length);
        }
        channel(8667).hideContextMenu();
        const obj3 = channel(8667);
      }
    };
    obj.handleTapAction = function handleTapAction(nativeEvent) {
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = closure_1_13.chatInput.current;
        current.blur();
        const obj = channel(12231);
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
          const maxMessageLength = channel(9304).getMaxMessageLength();
          if (tmp16) {
            screenIndex(1242).track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = screenIndex(1242);
          }
          closure_1_13.state.current.textPrev = closure_1_13.state.current.text;
          closure_1_13.state.current.text = text;
        }
        if (isCoachmarkVisible.isOpen()) {
          screenIndex(10650).hideNativeMenu();
          const obj = screenIndex(10650);
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
        screenIndex(10650).hideNativeMenu();
        const obj = screenIndex(10650);
      }
      if (type.type !== channel(1609).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = closure_1_13.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = closure_1_13.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items14);
  const items15 = [null != threadCreationCallback, tmp55];
  const callback2 = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!closure_4) {
        const current = closure_13.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items15);
  const tmp61 = screenIndex(12030)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp61.registerViewTag;
  unregisterViewTag = tmp61.unregisterViewTag;
  ref = obj9.useRef(null);
  const items16 = [tmp55, registerViewTag, unregisterViewTag];
  const callback3 = obj9.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(tmp.current);
      tmp.current = null;
    }
    closure_13.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = React6(current);
      if (null != tmp5) {
        tmp.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items16);
  const items17 = [editable, tmp55];
  const callback4 = obj9.useCallback(() => true, []);
  const callback5 = obj9.useCallback(() => {
    if (editable) {
      const current = closure_13.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items17);
  obj3 = { canUpload, channelId: channel.id, screenIndex };
  let tmp65Result = null;
  const tmpResult19 = channel(11986);
  if (editable) {
    obj4 = { ref: tmp55.chatInputActions, channel, onPressAction: memo1.handlePressAction, canStartThreads: canStartThread, isAppLauncherEnabled, keyboardType: tmp42, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null, onContextMenuOpen: null };
    let tmp69 = canUpload;
    let tmp5Result = tmp5(12235);
    if (canUpload) {
      tmp69 = null == stateFromStores3;
    }
    if (!tmp69) {
      tmp69 = tmp38;
    }
    obj4.shouldPhotosButtonBeDisabled = !tmp69;
    obj4.canUpload = canUpload;
    let result2 = result3;
    if (!tmp20) {
      result2 = tmp(4231).isPremiumGiftingSupported();
      const tmpResult20 = tmp(4231);
    }
    obj4.shouldShowGiftButton = result2;
    obj4.canPostPolls = tmp38;
    ({ handlePollsPress: obj34.onPollsPress, handleAttachPress: obj34.onAttachPress } = memo1);
    obj4.photosButtonExternalRef = ref;
    obj4.onContextMenuOpen = function onContextMenuOpen() {
      if (isCoachmarkVisible) {
        dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
      }
    };
    tmp65Result = tmp65(tmp5Result, obj4);
  }
  obj5 = { style: null, children: null };
  const items18 = [tmp9.inputDefault, animatedStyle];
  obj5.style = items18;
  let obj6 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: 5 };
  tmp5Result = tmp5(12251);
  obj6.customKeyboard = channel(12252).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj6.editable = editable;
  ({ handleFocus: obj37.onBeginFocus, handleBlur: obj37.onEndBlur, handleChangeContentSize: obj37.onChangeContentSize, handleMaxHeightChanged: obj37.onMaxHeightChanged, handleSelectionOrTextChange: obj37.onSelectionOrTextChange, handleTextFlushed: obj37.onTextFlushed, handlePasteImage: obj37.onPasteImage, handlePasteCommand: obj37.onPasteCommand, handleTapAction: obj37.onTapAction, handlePressSend: obj37.onRequestSend } = memo1);
  obj6.placeholder = placeholder;
  obj6.ref = callback3;
  obj6.setNoExtractUI = setNoExtractUI;
  obj6.shouldShowCursor = tmp42 !== channel(1609).KeyboardTypes.MEDIA;
  const items19 = [closure_37(tmp5Result, obj6), closure_37(screenIndex(12253), { keyboardType: tmp42, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp55.chatInputCover })];
  obj5.children = items19;
  let obj7 = { keyboardType: tmp42, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp55.chatInputCover };
  const tmp66 = closure_37(screenIndex(12234), obj3);
  if (editable) {
    const obj8 = { ref: tmp55.chatInputSendButton, canSendVoiceMessage, channel, defaultValue: memo, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj8.hasPendingAttachments = stateFromStores2;
    obj8.hasPendingEdit = null != stateFromStores;
    obj8.onSendMessage = memo1.handlePressSend;
    obj8.requireTextContent = result3;
    tmp65Result = tmp65(tmp5(12254), obj8);
    const tmp5Result1 = tmp5(12254);
  } else {
    tmp65Result = null;
  }
  obj9 = { collapsable: false, onLayout: callback2, style: null, children: null };
  const items20 = [screenIndex(12260)({ isCreatingThread: null != threadCreationCallback }), tmp9.overflowVisible, ];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp9.floatingScrimOverlap;
  }
  items20[2] = floatingScrimOverlap;
  obj9.style = items20;
  let tmp65Result1 = !result1;
  if (!result1) {
    let obj10 = { gradientHeight: tmp27, inline: false, scrimBase: token2 };
    tmp65Result1 = tmp65(tmp(12261).ChatInputScrimGradient, obj10);
  }
  const items21 = [tmp65Result1, , , , , , , , , , , , , ];
  let tmp65Result2 = result1;
  if (result1) {
    let hex2rgbResult = tmp(1091).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    const obj11 = { style: null, pointerEvents: "none" };
    const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
    obj11.style = rect;
    tmp65Result2 = tmp65(tmp76, obj11);
    const tmpResult21 = tmp(1091);
  }
  items21[1] = tmp65Result2;
  items21[2] = closure_37(channel(12262).ChatInputAccessibilityDivider, {});
  let tmp65Result3 = null;
  if (tmp21) {
    let obj12 = { channel, hasInputText: null };
    let tmp82 = "" !== memo;
    if (!tmp82) {
      let current = tmp55.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp82 = "" !== text;
    }
    obj12.hasInputText = tmp82;
    tmp65Result3 = tmp65(tmp5(12263), obj12);
    const tmp5Result2 = tmp5(12263);
  }
  items21[3] = tmp65Result3;
  let obj13 = { style: tmp9.accessories, children: null };
  let tmp65Result4 = result1;
  if (result1) {
    let obj14 = { gradientHeight: tmp28, inline: true, scrimBase: token2 };
    tmp65Result4 = tmp65(tmp(12261).ChatInputScrimGradient, obj14);
  }
  const items22 = [tmp65Result4, , ];
  let tmp65Result5 = null;
  if (null == threadCreationCallback) {
    const obj15 = { channel, screenIndex };
    tmp65Result5 = tmp65(tmp5(11964), obj15);
  }
  items22[1] = tmp65Result5;
  const tmp73 = closure_38(screenIndex(4296).View, obj5);
  let tmp65Result6 = null;
  if (tmpResult22.isIOS()) {
    let obj16 = { channelId: channel.id, screenIndex, onJumpToPresent };
    tmp65Result6 = tmp65(tmp5(12267), obj16);
  }
  items22[2] = tmp65Result6;
  obj13.children = items22;
  items21[4] = closure_38(editable, obj13);
  let tmp65Result7 = null;
  if (isResourceChannel) {
    let obj17 = { channel };
    tmp65Result7 = tmp65(tmp5(12282), obj17, channel.id);
  }
  items21[5] = tmp65Result7;
  items21[6] = closure_37(channel(12287).MemberActionsChatInputBannerGuardedOuter, { channel });
  items21[7] = closure_37(channel(12290).DoubleTapToReactChatInputBanner, { channel });
  let tmp65Result8 = null;
  if (tmp22) {
    const obj18 = { channelId: channel.id };
    tmp65Result8 = tmp65(tmp5(12383), obj18);
  }
  items21[8] = tmp65Result8;
  let tmp65Result9 = null;
  if (tmp42 !== channel(1609).KeyboardTypes.EXPRESSION) {
    const obj19 = { ref: tmp55.chatInputAutocomplete, analyticsLocations, channel, canMentionEveryone, keyboardType: tmp42, onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility, commandsDisabled: tmp34, canOnlyUseTextCommands: tmp35, chatInputRef: tmp55.chatInput, screenIndex };
    tmp65Result9 = tmp65(tmp5(12385), obj19);
  }
  items21[9] = tmp65Result9;
  items21[10] = closure_37(screenIndex(12405), { ref: tmp55.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp55.chatInput, chatInputStateRef: tmp55.state, commandsDisabled: tmp34 });
  let obj21 = { style: null, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  const items23 = [, ];
  ({ container: arr24[0], floatingContainer: arr24[1] } = tmp9);
  obj21.style = items23;
  const items24 = [tmp66, , , ];
  const obj20 = { ref: tmp55.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp55.chatInput, chatInputStateRef: tmp55.state, commandsDisabled: tmp34 };
  tmpResult22 = channel(1115);
  items24[1] = closure_37(screenIndex(12408), { channel });
  const items25 = [tmp9.floatingInputBox, , ];
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp9.floatingInputBoxPressed;
  }
  items25[1] = floatingInputBoxPressed;
  let floatingInputBoxTyping = result1;
  if (result1) {
    floatingInputBoxTyping = tmp9.floatingInputBoxTyping;
  }
  let obj22 = { style: items25, onStartShouldSetResponder: callback4, onResponderRelease: callback5, onLayout: callback, collapsable: false, accessibilityElementsHidden: tmp43, importantForAccessibility: null, children: null };
  items25[2] = floatingInputBoxTyping;
  let str2;
  if (tmp43) {
    str2 = "no-hide-descendants";
  }
  obj22.importantForAccessibility = str2;
  const items26 = [closure_37(screenIndex(12421), { channel, chatInputRef: tmp55.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 }), , ];
  let enabled = mobileEmojiSuggestionsConfig.enabled;
  if (enabled) {
    enabled = "large" === mobileEmojiSuggestionsConfig.style;
  }
  if (enabled) {
    let obj24 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
    ({ chatInputEmojiSuggestions: obj58.ref, chatInput: obj58.chatInputRef, state: obj58.chatInputStateRef } = tmp55);
    obj24.channel = channel;
    obj24.suppressed = tmp24;
    enabled = tmp65(tmp(12425).EmojiSuggestionBarLarge, obj24);
  }
  items26[1] = enabled;
  const obj25 = { style: tmp9.floatingMainContents, children: null };
  let tmp65Result10 = null;
  if (null != tmp65Result) {
    const obj26 = { style: null, children: null };
    const obj27 = { paddingBottom: result, paddingLeft: result };
    obj26.style = obj27;
    obj26.children = tmp65Result;
    tmp65Result10 = tmp65(tmp76, obj26);
  }
  const items27 = [tmp65Result10, , , ];
  let obj28 = { style: null, children: null };
  const items28 = [tmp9.inputFlat, { paddingBottom: result }];
  obj28.style = items28;
  const items29 = [tmp73, closure_37(screenIndex(12429), { analyticsLocations, ref: tmp55.chatInputCharCounter })];
  obj28.children = items29;
  items27[1] = closure_38(editable, obj28);
  let tmp65Result11 = null;
  if (editable) {
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: result };
    obj30.style = obj31;
    const obj32 = { ref: tmp55.chatInputRightActions, channel, keyboardType: tmp42, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null };
    if (!tmp20) {
      result3 = tmp(4231).isPremiumGiftingSupported();
      const tmpResult23 = tmp(4231);
    }
    obj32.shouldShowGiftButton = result3;
    ({ handlePressAction: obj66.onPressAction, handlePressExpression: obj66.onPressExpression } = memo1);
    obj30.children = tmp65(tmp5(12430), obj32);
    tmp65Result11 = tmp65(tmp76, obj30);
    const tmp5Result4 = tmp5(12430);
  }
  items27[2] = tmp65Result11;
  items27[3] = tmp65Result;
  obj25.children = items27;
  items26[2] = closure_38(editable, obj25);
  obj22.children = items26;
  items24[2] = closure_38(editable, obj22);
  let enabled2 = mobileEmojiSuggestionsConfig.enabled;
  if (enabled2) {
    enabled2 = "small" === mobileEmojiSuggestionsConfig.style;
  }
  if (enabled2) {
    const obj33 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null, anchorTop: null, onOccupiedHeightChange: null };
    ({ chatInputEmojiSuggestions: obj68.ref, chatInput: obj68.chatInputRef, state: obj68.chatInputStateRef } = tmp55);
    obj33.channel = channel;
    obj33.suppressed = tmp24;
    obj33.anchorTop = tmp16;
    obj33.onOccupiedHeightChange = callback1;
    enabled2 = tmp65(tmp(12431).EmojiSuggestionBarSmall, obj33);
  }
  items24[3] = enabled2;
  obj21.children = closure_38(closure_39, { children: items24 });
  items21[11] = closure_37(screenIndex(12407), obj21);
  let tmp65Result12 = null;
  if (null != refreshChatInputCoachmark) {
    const obj34 = { buttonRef: ref };
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp65Result12 = tmp65(tmp5(11985), obj34);
    const tmp5Result5 = tmp5(11985);
  }
  items21[12] = tmp65Result12;
  items21[13] = closure_37(screenIndex(12432), { buttonRef: ref, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
  obj9.children = items21;
  const tmp71Result = closure_38(editable, obj9);
  let tmp65Result13 = tmp71Result;
  if (null == threadCreationCallback) {
    const obj35 = { channel, screenIndex, canSendMessages: editable, canCreateThreads, onJumpToPresent, isReadonly: !editable, children: tmp71Result };
    tmp65Result13 = tmp65(tmp5(12433), obj35);
  }
  return tmp65Result13;
});
forwardRefResult.displayName = "ChatInput";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default noop.memo(forwardRefResult);