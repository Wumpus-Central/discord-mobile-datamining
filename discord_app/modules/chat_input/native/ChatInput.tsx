// discord_app/modules/chat_input/native/ChatInput.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../application_commands/ApplicationCommandStore.tsx";
import closure_10 from "../../dice_roll/DiceRollStore.tsx";
import closure_11 from "../../native_menu/native/NativeMenuStore.tsx";
import closure_12 from "../../replies/PendingReplyStore.tsx";
import { useVoiceMessagesUIStore } from "../../voice_messages/native/VoiceMessagesUIStore.tsx";
import closure_14 from "../../../stores/DraftStore.tsx";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_16 from "../../../stores/EditMessageStore.tsx";
import closure_17 from "../../../stores/PermissionStore.tsx";
import closure_18 from "../../../stores/UploadAttachmentStore.tsx";
import updateChatInputContainerHeight from "useChatBottomManagerUIStore.tsx";
import TextAreaCta from "ChatInputConstants.tsx";
import ME from "../../../Constants.tsx";
import { AppLauncherRouteName } from "../../app_launcher/native/AppLauncherNativeConstants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { EmojiInteractionPoint } from "../../emojis/EmojiConstants.tsx";
import DRAG_HANDLE from "../../media_keyboard/native/MediaKeyboardConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: error, findNodeHandle: closure_8 } = get_ActivityIndicator);
({
  updateShowingAutoComplete: closure_19,
  updateSmallSuggestionBarHeight: closure_20,
  useChatIsAtBottom: closure_21,
  useChatShowingAutoComplete: closure_22,
} = updateChatInputContainerHeight);
({
  CHAT_INPUT_HORIZONTAL_PADDING: closure_23,
  CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24,
  ChatInputActionType: closure_25,
} = TextAreaCta);
({
  AnalyticEvents: closure_26,
  ChannelTypesSets: closure_27,
  ChatInputComponentViewedTypes: closure_28,
  ComponentActions: closure_29,
  MAX_UPLOAD_COUNT: closure_30,
  Permissions: closure_31,
} = ME);
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = DRAG_HANDLE);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = jsxProd);
let closure_40 = createCacheKey.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  let obj = {
    position: "relative",
    paddingVertical: ThemesDefault.space.PX_8,
    paddingHorizontal: closure_23 - closure_24,
    backgroundColor: null,
    borderTopWidth: 1,
    borderColor: null,
  };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(709).colors.BACKGROUND_BASE_LOW;
  }
  obj = {
    container: obj,
    inputDefault: { alignSelf: "stretch", marginLeft: 0, marginTop: 0 },
    accessories: { position: "absolute", bottom: "100%", left: 0, right: 0 },
    floatingContainer: BACKGROUND_BASE_LOW,
    floatingInputBox: null,
    floatingInputBoxPressed: tmp(709).colors.BORDER_SUBTLE,
    floatingInputBoxTyping: null,
    floatingMainContents: null,
    inputFlat: null,
    floatingScrimOverlap: null,
    overflowVisible: null,
  };
  obj = {
    borderTopWidth: 0,
    borderColor: "transparent",
    borderRadius: tmp(709).radii.none,
    backgroundColor: "transparent",
    paddingHorizontal: tmp(709).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: 0,
    overflow: "visible",
  };
  obj[3] = obj;
  obj[4] = {
    backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
    borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    flexDirection: "column",
    overflow: "hidden",
  };
  obj1 = {
    backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
    borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    flexDirection: "column",
    overflow: "hidden",
  };
  obj[5] = {
    backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
    borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
  };
  obj[6] = { shadowOpacity: 0, elevation: 0 };
  const obj2 = {
    backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
    borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
  };
  obj[7] = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
    paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
  };
  const obj3 = {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
    paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
  };
  let num = -6;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj[8] = { flex: 1, justifyContent: "center", marginLeft: num };
  obj[9] = { marginTop: -arg1 / 2 };
  obj[10] = { overflow: "visible" };
  return obj;
});
let closure_41 = {
  code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}",
};
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  ({ threadCreationCallback, onJumpToPresent } = channel);
  c2 = undefined;
  dependencyMap = undefined;
  closure_4 = undefined;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let token;
  let sharedValue;
  let sharedValue1;
  let isCoachmarkVisible;
  let dismissCoachmark;
  useVoiceMessagesUIStore = undefined;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  closure_17 = undefined;
  let tmp = channel;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(11764);
  const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
  obj1 = channel(4296);
  const gradientValue = obj1.useGradientValue(channel(4296).GradientPercentage.END);
  let obj2 = channel(4197);
  token = obj2.useToken(screenIndex(709).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = channel(4197);
  let result = (obj3.useToken(screenIndex(709).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = channel(4197);
  const token1 = obj4.useToken(screenIndex(709).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp9 = callback5(gradientValue, token1);
  let obj5 = channel(4197);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = obj5.useToken(screenIndex(709).colors.BACKGROUND_BASE_LOWER);
  }
  let tmpResult = tmp(4197);
  const token3 = tmpResult.useToken(tmp5(709).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  tmpResult = tmp(4197);
  const token4 = tmpResult.useToken(tmp5(709).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = stateFromStores1;
  const token5 = tmp(4197).useToken(tmp5(709).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  const tmpResult1 = tmp(4197);
  [floatingInputBoxPressed, c2] = stateFromStores(stateFromStores1.useState(false), 2);
  let tmp14 = stateFromStores(stateFromStores1.useState(false), 2);
  [tmp16, c3] = stateFromStores(stateFromStores1.useState(0), 2);
  const items = [screenIndex];
  const callback = stateFromStores1.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.y);
  }, []);
  const items1 = [screenIndex];
  const callback1 = stateFromStores1.useCallback((arg0) => {
    closure_1_20(screenIndex, arg0);
  }, items);
  const effect = stateFromStores1.useEffect(
    () => () => {
      closure_1_20(closure_1, 0);
    },
    items1,
  );
  closure_4 = tmp20;
  let tmp15 = stateFromStores(stateFromStores1.useState(0), 2);
  let tmp21 = channel.isPrivate() && null == threadCreationCallback;
  const tmp22 = sharedValue1((channelId) => channelId.channelId === channel.id);
  const typingUserIdsForDisplay = tmp(11765).useTypingUserIdsForDisplay(channel.id, 1);
  const tmp24 = callback2(screenIndex);
  const tmpResult2 = tmp(11765);
  let result1 = tmp(11765).hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp24);
  const tmp26 = callback(screenIndex);
  let tmp27 = token1;
  if (tmp26) {
    tmp27 = token5;
  }
  let tmp28 = token4;
  if (tmp26) {
    tmp28 = token3;
  }
  const tmpResult3 = tmp(11765);
  const items2 = [unregisterViewTag];
  stateFromStores = tmp(586).useStateFromStores(items2, () => {
    let editingTextValue = null;
    if (!closure_4) {
      editingTextValue = unregisterViewTag.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult4 = tmp(586);
  const items3 = [dismissCoachmark];
  stateFromStores1 = tmp(586).useStateFromStores(items3, () => {
    let pendingReply;
    if (!closure_4) {
      pendingReply = dismissCoachmark.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult5 = tmp(586);
  const items4 = [closure_18];
  let stateFromStores2 = tmp(586).useStateFromStores(items4, () => {
    if (closure_4) {
      return false;
    } else {
      const uploads = closure_1_18.getUploads(channel.id, registerViewTag.ChannelMessage);
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
    memo = obj9.useMemo(
      () => memo1.getDraft(channel.id, closure_4 ? registerViewTag.FirstThreadMessage : registerViewTag.ChannelMessage),
      items5,
    );
  }
  const tmpResult6 = tmp(586);
  const items6 = [closure_17];
  const items7 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = tmp(586).useStateFromStoresObject(
    items6,
    () => {
      let obj = closure_17;
      let canResult1 = closure_17.can(closure_1_31.MENTION_EVERYONE, channel);
      const canResult = closure_17.can(closure_1_31.ATTACH_FILES, channel);
      const canResult2 = closure_17.can(closure_1_31.SEND_MESSAGES, channel);
      const canResult3 = closure_17.can(closure_1_31.SEND_VOICE_MESSAGES, channel);
      const tmp6 =
        closure_17.can(closure_1_31.CREATE_PUBLIC_THREADS, channel) ||
        obj.can(closure_1_31.CREATE_PRIVATE_THREADS, channel);
      let isPrivateResult = obj2.isPrivate();
      const canResult4 = obj.can(closure_1_31.SEND_MESSAGES_IN_THREADS, channel);
      let tmp11 = canResult4;
      const isReadOnlyThread = channel(_undefined[29]).computeIsReadOnlyThread(obj2);
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
      obj = {
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
        tmp15 = !tmp10;
      }
      obj[1] = tmp15;
      if (!isPrivateResult) {
        isPrivateResult = canResult3;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp13;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp10;
      }
      obj[2] = isPrivateResult;
      obj[3] = !tmp13;
      obj[4] = tmp6;
      return obj;
    },
    items7,
  );
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = tmp5(5962)().analyticsLocations;
  let tmp34 = tmp20;
  if (null == threadCreationCallback) {
    tmp34 = null != stateFromStores;
  }
  if (!tmp34) {
    tmp34 = !tmp(6125).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult8 = tmp(6125);
  }
  const tmpResult7 = tmp(586);
  let canStartThread = tmp(6125).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp20;
  }
  const tmpResult9 = tmp(6125);
  const tmp38 = tmp(7516).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult10 = tmp(7516);
  sharedValue = tmp(4217).useSharedValue(token);
  const tmpResult11 = tmp(4217);
  sharedValue1 = tmp(4217).useSharedValue(token);
  const items8 = [sharedValue1, token, sharedValue];
  const effect1 = obj9.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items8);
  const tmp42 = screenIndex(4342)();
  const tmp43 = useVoiceMessagesUIStore((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp20;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(8156).getIsAppLauncherEnabled(channel);
    const tmpResult13 = tmp(8156);
  }
  const tmpResult12 = tmp(4217);
  const items9 = [sharedValue];
  const stateFromStores3 = tmp(586).useStateFromStores(items9, () => sharedValue.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp20 };
  const tmpResult14 = tmp(586);
  ({ placeholder, accessibilityLabel } = screenIndex(11785)(obj));
  const tmp47 = screenIndex(11785)(obj);
  function ze() {
    return { minHeight: sharedValue1.get() };
  }
  ze.__closure = { textFieldHeight: sharedValue1 };
  ze.__workletHash = 11048691841625;
  ze.__initData = closure_41;
  const animatedStyle = tmp(4217).useAnimatedStyle(ze);
  ref = obj9.useRef(null);
  const tmpResult15 = tmp(4217);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = tmp(11786).useRefreshChatInputCoachmark(obj);
  const tmpResult16 = tmp(11786);
  const canUseScheduledMessages = tmp(7600).useCanUseScheduledMessages();
  const tmpResult17 = tmp(7600);
  const items10 = [memo1];
  const stateFromStores4 = tmp(586).useStateFromStores(items10, () =>
    memo1.getDraft(channel.id, registerViewTag.ChannelMessage),
  );
  const tmpResult18 = tmp(586);
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
  obj1[2] = tmp53;
  const scheduledMessageDraftCoachmarkState = tmp(11787).useScheduledMessageDraftCoachmarkState(obj1);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  obj2 = {
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
  const tmp55 = screenIndex(11788)(obj2);
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
      if (id !== channel(_undefined[40]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
    const subscription = ComponentDispatch.subscribe(closure_1_29.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = channel(table[41]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_29.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items13);
  const items14 = [tmp55, sharedValue];
  memo1 = obj9.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = callback(closure_1_3[42]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = closure_14.handleTextOrFocusChange(str, false);
        closure_13.state.current.focused = false;
        callback2(false);
        const current = closure_13.chatInputCover.current;
        if (current != null) {
          current.focused(false);
        }
        const current2 = tmp3.chatInputAppCommandManager.current;
        if (current2 != null) {
          current2.updateState();
        }
        const current3 = tmp3.chatInputAutocomplete.current;
        if (current3 != null) {
          obj = { focused: false, text: null, selectionStart: null, selectionEnd: null };
          obj[1] = str;
          obj[2] = tmp3.state.current.selectionStart;
          obj[3] = tmp3.state.current.selectionEnd;
          current3.setData(obj);
        }
        const current4 = tmp3.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          obj = { focused: false, text: null, selectionStart: null, selectionEnd: null };
          obj[1] = str;
          obj[2] = tmp3.state.current.selectionStart;
          obj[3] = tmp3.state.current.selectionEnd;
          current4.setData(obj);
        }
        const current5 = tmp3.chatInputSendButton.current;
        if (current5 != null) {
          current5.setHasText(str.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = callback(closure_1_3[42]);
        const result = obj.setIsAnyChatInputFocused(true);
        closure_13.state.current.focused = true;
        callback2(true);
        closure_13.state.current.selectionStart = start;
        closure_13.state.current.selectionEnd = end;
        const result1 = closure_14.handleTextOrFocusChange(closure_13.state.current.text, true);
        const current = closure_13.chatInputAppCommandManager.current;
        if (current != null) {
          current.updateState();
        }
        const current2 = tmp2.chatInputCover.current;
        if (current2 != null) {
          current2.focused(true);
        }
        const current3 = tmp2.chatInputAutocomplete.current;
        if (current3 != null) {
          obj = { focused: true, text: null, selectionStart: null, selectionEnd: null };
          obj[1] = tmp2.state.current.text;
          obj[2] = start;
          obj[3] = end;
          current3.setData(obj);
        }
        const current4 = tmp2.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          obj = { focused: true, text: null, selectionStart: null, selectionEnd: null };
          obj[1] = tmp2.state.current.text;
          obj[2] = start;
          obj[3] = end;
          current4.setData(obj);
        }
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_13.state.current.textFieldContentSize = height;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_13.state.current.textFieldHeight;
          const result = textFieldHeight.set(
            callback(closure_1_3[44]).getChatInputHeightAnimationTiming(height, store.get()),
          );
          const tmp2Result = callback(closure_1_3[44]);
        }
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_13.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == closure_13.props.current.threadCreationCallback) {
            const current = closure_13.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_13.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_13.state.current.textFieldHeight;
            const result = textFieldHeight.set(
              callback(closure_1_3[44]).getChatInputHeightAnimationTiming(textFieldContentSize, store.get()),
            );
            const tmpResult = callback(closure_1_3[44]);
          }
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_1_19(closure_13.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_13.state.current.focused) {
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
      handleToggleKeyboard: null,
    };
    closure_0 = callback((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function* (arg0) {
        if (styles === 2) {
          styles = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            styles = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                styles = 3;
                throw arg1;
              } else if (arg0 === 2) {
                styles = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = tmp5;
                c1 = tmp2;
                let lib;
                c1 = undefined;
                c2 = undefined;
                c3 = undefined;
                ({ url: c0, width: c1, height: c2, type: c3 } = lib.nativeEvent);
                styles = undefined;
                c3 = 1;
                styles = 1;
                return { value: "PX_16", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  styles = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  styles = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  if (closure_1_13.state.current.focused) {
                    if (closure_1_13.props.current.canUpload) {
                      obj1 = lib(closure_2_3[45]);
                      c3 = 2;
                      styles = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = obj1.getImageDimensionsIfMissing(lib, closure_1_1, closure_1_2);
                      return obj2;
                    }
                  }
                  styles = 3;
                }
              } else if (arg0 === 1) {
                styles = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                styles = arg1;
                const obj3 = { channelId: null, file: null, draftType: null };
                obj3[0] = closure_1_13.props.current.channel.id;
                const obj4 = {
                  uri: null,
                  originalUri: null,
                  width: null,
                  height: null,
                  mimeType: null,
                  platform: null,
                  id: null,
                };
                obj4[0] = lib;
                obj4[1] = lib;
                obj4[2] = styles.width;
                obj4[3] = styles.height;
                obj4[4] = c3;
                obj4[5] = lib(closure_2_3[47]).UploadPlatform.REACT_NATIVE;
                const obj7 = closure_2_1(closure_2_3[46]);
                obj4[6] = lib(closure_2_3[48]).v4();
                obj3[1] = obj4;
                obj3[2] = closure_2_15.ChannelMessage;
                obj7.addFile(obj3);
                const obj10 = lib(closure_2_3[48]);
              }
              styles = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp16) {
            styles = tmp;
            throw tmp16;
          }
        }
      })();
      iter.next();
      return iter;
    });
    obj[8] = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[9] = function handlePressAction(arg0, arg1, current2) {
      if (closure_1_25.PHOTOS === arg1) {
        const result = callback(closure_1_3[49]).triggerHapticFeedback(
          callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT,
        );
        const obj21 = callback(closure_1_3[49]);
        let obj = { type: null, channel_id: null, guild_id: null };
        obj[0] = closure_1_28.ADD_BUTTON;
        obj[1] = closure_13.props.current.channel.id;
        obj[2] = closure_13.props.current.channel.guild_id;
        closure_1_1(closure_1_3[50]).track(closure_1_26.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const obj22 = closure_1_1(closure_1_3[50]);
        const tmp48 = closure_13;
        const keyboardType = callback(closure_1_3[33]).getKeyboardType();
        if (keyboardType === callback(closure_1_3[51]).KeyboardTypes.APP_LAUNCHER) {
          obj = { type: null };
          obj[0] = tmp42(tmp43[51]).KeyboardTypes.APP_LAUNCHER;
          closure_14.handleToggleKeyboard(obj);
        } else {
          const keyboardType1 = tmp42(tmp43[33]).getKeyboardType();
          if (keyboardType1 === tmp42(tmp43[51]).KeyboardTypes.MEDIA) {
            const current = tmp48.chatInputActions.current;
            if (current != null) {
              current.focusPhotosButton();
            }
          }
          obj1 = { type: null, context: null };
          obj1[0] = tmp42(tmp43[51]).KeyboardTypes.MEDIA;
          let obj2 = { target: null };
          obj2[0] = closure_1_36.CHAT;
          obj1[1] = obj2;
          closure_14.handleToggleKeyboard(obj1);
          const tmp42Result = tmp42(tmp43[33]);
        }
        const obj24 = callback(closure_1_3[33]);
      } else {
        let tmp35 = current2;
        if (tmp.APPS === arg1) {
          const result1 = callback(closure_1_3[49]).triggerHapticFeedback(
            callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT,
          );
          const obj12 = callback(closure_1_3[49]);
          callback(closure_1_3[52]).trackWithMetadata(closure_1_26.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = callback(closure_1_3[52]);
          const obj3 = { type: null, channel_id: null, guild_id: null };
          obj3[0] = closure_1_28.APPS_BUTTON;
          obj3[1] = closure_13.props.current.channel.id;
          obj3[2] = closure_13.props.current.channel.guild_id;
          closure_1_1(closure_1_3[50]).track(closure_1_26.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj14 = closure_1_1(closure_1_3[50]);
          const tmp30 = closure_13;
          const result2 = closure_1_2(closure_1_3[53]).dismissNewActivityIndicator();
          const obj16 = closure_1_2(closure_1_3[53]);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = callback(closure_1_3[54]).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj4 = { type: null, context: null };
          obj4[0] = callback(closure_1_3[51]).KeyboardTypes.APP_LAUNCHER;
          let obj5 = { initialRouteName: null, initialSearchQuery: null };
          obj5[0] = closure_1_32.HOME;
          const obj17 = callback(closure_1_3[54]);
          const appDMApplication = callback(closure_1_3[55]).getAppDMApplication(tmp30.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj5[1] = name;
          obj4[1] = obj5;
          closure_14.handleToggleKeyboard(obj4);
          const tmp23Result = callback(closure_1_3[55]);
        } else if (tmp.ALL_PHOTOS === arg1) {
          const result4 = callback(closure_1_3[49]).triggerHapticFeedback(
            callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT,
          );
          const obj9 = callback(closure_1_3[49]);
          let obj6 = {
            channel: null,
            uploadLimit: null,
            onDismissKeyboard: null,
            onRestoreKeyboard: null,
            onSelectFiles: null,
            draftType: null,
          };
          obj6[0] = closure_13.props.current.channel;
          obj6[1] = closure_1_30;
          obj6[2] = function onDismissKeyboard() {
            return callback(4340).dismissKeyboard();
          };
          obj6[3] = function onRestoreKeyboard() {
            return closure_14.handleToggleKeyboard({ type: closure_1_0(closure_1_3[51]).KeyboardTypes.SYSTEM });
          };
          obj6[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[56]).addImagesFromPicker(
              closure_13.props.current.channel.id,
              items,
              closure_1_0(closure_1_3[47]).UploadOrigin.IMAGE_PICKER,
            );
          };
          obj6[5] = closure_1_15.ChannelMessage;
          callback(closure_1_3[56]).handleViewAllDialog(obj6);
          const obj10 = callback(closure_1_3[56]);
        } else if (tmp.CAMERA === arg1) {
          obj5 = callback(closure_1_3[49]);
          const result5 = obj5.triggerHapticFeedback(callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj6 = callback(closure_1_3[56]);
          const obj7 = {
            channel: null,
            previewType: null,
            onDismissKeyboard: null,
            onRestoreKeyboard: null,
            onSelectFiles: null,
          };
          obj7[0] = closure_13.props.current.channel;
          obj7[1] = closure_1_35.CAMERA_BUTTON;
          obj7[2] = function onDismissKeyboard() {
            return callback(4340).dismissKeyboard();
          };
          obj7[3] = function onRestoreKeyboard() {
            return closure_14.handleToggleKeyboard({ type: closure_1_0(closure_1_3[51]).KeyboardTypes.SYSTEM });
          };
          obj7[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[56]).addImagesFromPicker(
              closure_13.props.current.channel.id,
              items,
              closure_1_0(closure_1_3[47]).UploadOrigin.IMAGE_PICKER,
            );
          };
          obj6.handleCameraDialog(obj7);
        } else if (tmp.NITRO_GIFT === arg1) {
          obj = closure_1_1(closure_1_3[58]);
          const result6 = obj.markPotentialBadState();
          obj1 = callback(closure_1_3[49]);
          const result7 = obj1.triggerHapticFeedback(callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = callback(closure_1_3[23]);
          if (obj2.isAndroid()) {
            let tmp5Result = tmp5(tmp3[57]);
            tmp5Result.dismissKeyboard();
          }
          tmp5Result = tmp5(tmp3[56]);
          tmp5Result.handleSelectGift(closure_13.props.current.analyticsLocations, closure_13.chatInput, tmp35);
        } else if (tmp.THREAD === arg1) {
          const result8 = callback(closure_1_3[49]).triggerHapticFeedback(
            callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT,
          );
          const obj28 = callback(closure_1_3[49]);
          callback(closure_1_3[56]).handleSelectThread(closure_13.props.current.channel, closure_13.chatInput);
          const obj29 = callback(closure_1_3[56]);
        }
      }
    };
    obj[10] = function handlePollsPress() {
      let obj = callback(closure_1_3[49]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        type: closure_1_28.POLLS,
        channel_id: closure_13.props.current.channel.id,
        guild_id: closure_13.props.current.channel.guild_id,
      };
      closure_1_1(closure_1_3[50]).track(closure_1_26.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = closure_1_1(closure_1_3[50]);
      callback(closure_1_3[57]).dismissKeyboard();
      const obj4 = callback(closure_1_3[57]);
      obj = {
        channel: closure_13.props.current.channel,
        onCancel() {
          return closure_14.handleToggleKeyboard({ type: closure_1_0(closure_1_3[51]).KeyboardTypes.SYSTEM });
        },
      };
      callback(closure_1_3[59]).openCreatePollModal(obj);
    };
    obj[11] = function handleAttachPress() {
      let obj = callback(closure_1_3[49]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[49]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: closure_13.props.current.channel,
        uploadLimit: closure_1_30,
        onDismissKeyboard() {
          return callback(table[57]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_14.handleToggleKeyboard({ type: closure_1_0(closure_1_3[51]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          closure_1_0(closure_1_3[56]).addImagesFromPicker(
            props.props.current.channel.id,
            items,
            closure_1_0(closure_1_3[47]).UploadOrigin.FILE_ATTACHMENT,
          );
        },
      };
      callback(closure_1_3[56]).handleAttachFile(obj);
    };
    obj[12] = function handlePressExpression(context) {
      let obj = callback(closure_1_3[60]);
      const result = obj.initiateEmojiInteraction(closure_1_34.ChatInputExpressionPressed);
      obj = { type: callback(closure_1_3[51]).KeyboardTypes.EXPRESSION, context };
      closure_14.handleToggleKeyboard(obj);
    };
    obj[13] = function handlePressSend() {
      const current = closure_13.chatInput.current;
      current.handleSend();
    };
    obj[14] = function handleSelectionOrTextChange(nativeEvent) {
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      closure_13.state.current.editId = editId;
      closure_13.state.current.selectionStart = start;
      closure_13.state.current.selectionEnd = end;
      const result = closure_14.handleTextOrFocusChange(text, closure_13.state.current.focused);
      const current = closure_13.chatInputAppCommandManager.current;
      if (current != null) {
        current.updateState();
      }
      const current2 = tmp.chatInputAutocomplete.current;
      if (current2 != null) {
        let obj = { focused: null, text: null, selectionStart: null, selectionEnd: null };
        obj[0] = tmp.state.current.focused;
        obj[1] = text;
        obj[2] = start;
        obj[3] = end;
        current2.setData(obj);
      }
      const current3 = tmp.chatInputEmojiSuggestions.current;
      if (current3 != null) {
        obj = { focused: null, text: null, selectionStart: null, selectionEnd: null };
        obj[0] = tmp.state.current.focused;
        obj[1] = text;
        obj[2] = start;
        obj[3] = end;
        current3.setData(obj);
      }
      const current4 = tmp.chatInputSendButton.current;
      if (current4 != null) {
        current4.setHasText(text.trim().length > 0);
      }
      if (closure_13.state.current.editId !== editId) {
        const current5 = tmp.chatInput.current;
        current5.handleTextChanged(text);
        const current6 = tmp.chatInputCharCounter.current;
        if (current6 != null) {
          const result1 = current6.onMessageLengthChanged(text.length);
        }
        callback(closure_1_3[61]).hideContextMenu();
        const obj3 = callback(closure_1_3[61]);
      }
    };
    obj[15] = function handleTapAction(nativeEvent) {
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = closure_13.chatInput.current;
        current.blur();
        const obj = callback(closure_1_3[62]);
        const current2 = closure_13.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        let fn;
        if (closure_13.state.current.focused) {
          fn = () => {
            const current = chatInput.chatInput.current;
            return current.openSystemKeyboard();
          };
        }
        const result = obj.openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
      }
    };
    obj[16] = function handleTextOrFocusChange(text, focused) {
      if (text.length > 0) {
        if (!focused) {
          const maxMessageLength = callback(closure_1_3[64]).getMaxMessageLength();
          if (tmp16) {
            closure_1_1(closure_1_3[50]).track(closure_1_26.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = closure_1_1(closure_1_3[50]);
          }
          closure_13.state.current.textPrev = closure_13.state.current.text;
          closure_13.state.current.text = text;
        }
        if (closure_1_11.isOpen()) {
          closure_1_1(closure_1_3[63]).hideNativeMenu();
          const obj = closure_1_1(closure_1_3[63]);
        }
        const current2 = closure_13.chatInputActions.current;
        if (current2 != null) {
          current2.onDismissActions(focused);
        }
        const current3 = closure_13.chatInputRightActions.current;
        if (current3 != null) {
          current3.onDismissActions(focused);
        }
        const tmp8 = closure_13;
      }
      if (0 === text.length) {
        const current4 = closure_13.chatInputActions.current;
        if (current4 != null) {
          current4.onShowActions(focused);
        }
        const current = closure_13.chatInputRightActions.current;
        if (current != null) {
          current.onShowActions(focused);
        }
        const tmp21 = closure_13;
      }
    };
    obj[17] = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = closure_13.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (value != null) {
        value(nativeEvent.text);
      }
    };
    obj[18] = function handleToggleKeyboard(type) {
      if (closure_1_11.isOpen()) {
        closure_1_1(closure_1_3[63]).hideNativeMenu();
        const obj = closure_1_1(closure_1_3[63]);
      }
      if (type.type !== callback(closure_1_3[51]).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = closure_13.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = closure_13.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items14);
  const items15 = [null != threadCreationCallback, tmp55];
  callback2 = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!closure_4) {
        const current = closure_13.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items15);
  const tmp61 = screenIndex(11831)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp61.registerViewTag;
  unregisterViewTag = tmp61.unregisterViewTag;
  closure_17 = obj9.useRef(null);
  const items16 = [tmp55, registerViewTag, unregisterViewTag];
  const callback3 = obj9.useCallback((current) => {
    if (null != closure_17.current) {
      unregisterViewTag(tmp.current);
      tmp.current = null;
    }
    closure_13.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = token(current);
      if (null != tmp5) {
        tmp.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items16);
  const items17 = [editable, tmp55];
  const callback4 = obj9.useCallback(() => true, []);
  callback5 = obj9.useCallback(() => {
    if (editable) {
      const current = closure_13.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items17);
  obj3 = { canUpload, channelId: channel.id, screenIndex };
  let tmp65Result = null;
  const tmpResult19 = tmp(11787);
  if (editable) {
    obj4 = {
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
    obj4[0] = tmp55.chatInputActions;
    obj4[1] = channel;
    obj4[2] = memo1.handlePressAction;
    obj4[3] = canStartThread;
    obj4[4] = isAppLauncherEnabled;
    obj4[5] = tmp42;
    let tmp69 = canUpload;
    let tmp5Result = tmp5(12031);
    if (canUpload) {
      tmp69 = null == stateFromStores3;
    }
    if (!tmp69) {
      tmp69 = tmp38;
    }
    obj4[6] = !tmp69;
    obj4[7] = canUpload;
    let result2 = result3;
    if (!tmp20) {
      result2 = tmp(4152).isPremiumGiftingSupported();
      const tmpResult20 = tmp(4152);
    }
    obj4[8] = result2;
    obj4[9] = tmp38;
    ({ handlePollsPress: obj34[10], handleAttachPress: obj34[11] } = memo1);
    obj4[12] = ref;
    obj4[13] = function onContextMenuOpen() {
      if (isCoachmarkVisible) {
        dismissCoachmark(closure_1_33.TAKE_ACTION);
      }
    };
    tmp65Result = tmp65(tmp5Result, obj4);
  }
  obj5 = { style: items18, children: null };
  items18 = [tmp9.inputDefault, animatedStyle];
  let obj6 = {
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
  tmp5Result = tmp5(12047);
  obj6[1] = tmp(12048).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj6[2] = editable;
  ({
    handleFocus: obj37[3],
    handleBlur: obj37[4],
    handleChangeContentSize: obj37[5],
    handleMaxHeightChanged: obj37[6],
    handleSelectionOrTextChange: obj37[7],
    handleTextFlushed: obj37[8],
    handlePasteImage: obj37[9],
    handlePasteCommand: obj37[10],
    handleTapAction: obj37[11],
    handlePressSend: obj37[12],
  } = memo1);
  obj6[13] = placeholder;
  obj6[14] = callback3;
  obj6[15] = setNoExtractUI;
  obj6[16] = tmp42 !== tmp(1625).KeyboardTypes.MEDIA;
  const items19 = [
    callback3(tmp5Result, obj6),
    callback3(screenIndex(12049), {
      keyboardType: tmp42,
      onSelectKeyboard: memo1.handleToggleKeyboard,
      ref: tmp55.chatInputCover,
    }),
  ];
  obj5[1] = items19;
  let obj7 = { keyboardType: tmp42, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp55.chatInputCover };
  const tmp66 = callback3(screenIndex(12030), obj3);
  if (editable) {
    const obj8 = {
      ref: null,
      canSendVoiceMessage: null,
      channel: null,
      defaultValue: null,
      hasPendingAttachments: null,
      hasPendingEdit: null,
      onSendMessage: null,
      requireTextContent: null,
    };
    obj8[0] = tmp55.chatInputSendButton;
    obj8[1] = canSendVoiceMessage;
    obj8[2] = channel;
    obj8[3] = memo;
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj8[4] = stateFromStores2;
    obj8[5] = null != stateFromStores;
    obj8[6] = memo1.handlePressSend;
    obj8[7] = result3;
    tmp65Result = tmp65(tmp5(12050), obj8);
    const tmp5Result1 = tmp5(12050);
  } else {
    tmp65Result = null;
  }
  obj9 = { collapsable: false, onLayout: callback2, style: null, children: null };
  const items20 = [screenIndex(12056)({ isCreatingThread: null != threadCreationCallback }), tmp9.overflowVisible];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp9.floatingScrimOverlap;
  }
  items20[2] = floatingScrimOverlap;
  obj9[2] = items20;
  let tmp65Result1 = !result1;
  if (!result1) {
    let obj10 = { gradientHeight: null, inline: false, scrimBase: null };
    obj10[0] = tmp27;
    obj10[2] = token2;
    tmp65Result1 = tmp65(tmp(12057).ChatInputScrimGradient, obj10);
  }
  const items21 = [tmp65Result1, , , , , , , , , , , , ,];
  let tmp65Result2 = result1;
  if (result1) {
    let hex2rgbResult = tmp(685).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    const obj11 = { style: null, pointerEvents: "none" };
    let obj12 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
    obj12[5] = hex2rgbResult;
    obj11[0] = obj12;
    tmp65Result2 = tmp65(tmp76, obj11);
    const tmpResult21 = tmp(685);
  }
  items21[1] = tmp65Result2;
  items21[2] = callback3(tmp(12058).ChatInputAccessibilityDivider, {});
  let tmp65Result3 = null;
  if (tmp21) {
    let obj13 = { channel: null, hasInputText: null };
    obj13[0] = channel;
    let tmp82 = "" !== memo;
    if (!tmp82) {
      let current = tmp55.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp82 = "" !== text;
    }
    obj13[1] = tmp82;
    tmp65Result3 = tmp65(tmp5(12059), obj13);
    const tmp5Result2 = tmp5(12059);
  }
  items21[3] = tmp65Result3;
  let obj14 = { style: tmp9.accessories, children: null };
  let tmp65Result4 = result1;
  if (result1) {
    const obj15 = { gradientHeight: null, inline: true, scrimBase: null };
    obj15[0] = tmp28;
    obj15[2] = token2;
    tmp65Result4 = tmp65(tmp(12057).ChatInputScrimGradient, obj15);
  }
  const items22 = [tmp65Result4, ,];
  let tmp65Result5 = null;
  if (null == threadCreationCallback) {
    let obj16 = { channel: null, screenIndex: null };
    obj16[0] = channel;
    obj16[1] = screenIndex;
    tmp65Result5 = tmp65(tmp5(11765), obj16);
  }
  items22[1] = tmp65Result5;
  const tmp73 = callback4(screenIndex(4217).View, obj5);
  let tmp65Result6 = null;
  if (tmpResult22.isIOS()) {
    let obj17 = { channelId: null, screenIndex: null, onJumpToPresent: null };
    obj17[0] = channel.id;
    obj17[1] = screenIndex;
    obj17[2] = onJumpToPresent;
    tmp65Result6 = tmp65(tmp5(12063), obj17);
  }
  items22[2] = tmp65Result6;
  obj14[1] = items22;
  items21[4] = callback4(editable, obj14);
  let tmp65Result7 = null;
  if (isResourceChannel) {
    const obj18 = { channel: null };
    obj18[0] = channel;
    tmp65Result7 = tmp65(tmp5(12078), obj18, channel.id);
  }
  items21[5] = tmp65Result7;
  items21[6] = callback3(tmp(12083).MemberActionsChatInputBannerGuardedOuter, { channel });
  items21[7] = callback3(tmp(12086).DoubleTapToReactChatInputBanner, { channel });
  let tmp65Result8 = null;
  if (tmp22) {
    const obj19 = { channelId: null };
    obj19[0] = channel.id;
    tmp65Result8 = tmp65(tmp5(12181), obj19);
  }
  items21[8] = tmp65Result8;
  let tmp65Result9 = null;
  if (tmp42 !== tmp(1625).KeyboardTypes.EXPRESSION) {
    const obj20 = {
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
    obj20[0] = tmp55.chatInputAutocomplete;
    obj20[1] = analyticsLocations;
    obj20[2] = channel;
    obj20[3] = canMentionEveryone;
    obj20[4] = tmp42;
    obj20[5] = memo1.handleChangeAutoCompleteVisibility;
    obj20[6] = tmp34;
    obj20[7] = tmp35;
    obj20[8] = tmp55.chatInput;
    obj20[9] = screenIndex;
    tmp65Result9 = tmp65(tmp5(12185), obj20);
  }
  items21[9] = tmp65Result9;
  items21[10] = callback3(screenIndex(12205), {
    ref: tmp55.chatInputAppCommandManager,
    canOnlyUseTextCommands: null != stateFromStores1,
    channel,
    chatInputRef: tmp55.chatInput,
    chatInputStateRef: tmp55.state,
    commandsDisabled: tmp34,
  });
  let obj22 = { style: items23, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  items23 = [,];
  ({ container: arr24[0], floatingContainer: arr24[1] } = tmp9);
  const items24 = [tmp66, , ,];
  let obj21 = {
    ref: tmp55.chatInputAppCommandManager,
    canOnlyUseTextCommands: null != stateFromStores1,
    channel,
    chatInputRef: tmp55.chatInput,
    chatInputStateRef: tmp55.state,
    commandsDisabled: tmp34,
  };
  tmpResult22 = tmp(1234);
  items24[1] = callback3(screenIndex(12208), { channel });
  const items25 = [tmp9.floatingInputBox, ,];
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp9.floatingInputBoxPressed;
  }
  items25[1] = floatingInputBoxPressed;
  let floatingInputBoxTyping = result1;
  if (result1) {
    floatingInputBoxTyping = tmp9.floatingInputBoxTyping;
  }
  const obj23 = {
    style: items25,
    onStartShouldSetResponder: callback4,
    onResponderRelease: callback5,
    onLayout: callback,
    collapsable: false,
    accessibilityElementsHidden: tmp43,
    importantForAccessibility: null,
    children: null,
  };
  items25[2] = floatingInputBoxTyping;
  let str2;
  if (tmp43) {
    str2 = "no-hide-descendants";
  }
  obj23[6] = str2;
  const items26 = [
    callback3(screenIndex(12221), {
      channel,
      chatInputRef: tmp55.chatInput,
      pendingEdit: stateFromStores,
      pendingReply: stateFromStores1,
    }),
    ,
  ];
  let enabled = mobileEmojiSuggestionsConfig.enabled;
  if (enabled) {
    enabled = "large" === mobileEmojiSuggestionsConfig.style;
  }
  if (enabled) {
    const obj25 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel: null, suppressed: null };
    ({ chatInputEmojiSuggestions: obj58[0], chatInput: obj58[1], state: obj58[2] } = tmp55);
    obj25[3] = channel;
    obj25[4] = tmp24;
    enabled = tmp65(tmp(12225).EmojiSuggestionBarLarge, obj25);
  }
  items26[1] = enabled;
  const obj26 = { style: tmp9.floatingMainContents, children: null };
  let tmp65Result10 = null;
  if (null != tmp65Result) {
    const obj27 = { style: null, children: null };
    let obj28 = { paddingBottom: null, paddingLeft: null };
    obj28[0] = result;
    obj28[1] = result;
    obj27[0] = obj28;
    obj27[1] = tmp65Result;
    tmp65Result10 = tmp65(tmp76, obj27);
  }
  const items27 = [tmp65Result10, , ,];
  let obj29 = { style: items28, children: null };
  items28 = [tmp9.inputFlat, { paddingBottom: result }];
  const items29 = [tmp73, callback3(screenIndex(12229), { analyticsLocations, ref: tmp55.chatInputCharCounter })];
  obj29[1] = items29;
  items27[1] = callback4(editable, obj29);
  let tmp65Result11 = null;
  if (editable) {
    const obj31 = { style: null, children: null };
    const obj32 = { paddingBottom: null };
    obj32[0] = result;
    obj31[0] = obj32;
    const obj33 = {
      ref: null,
      channel: null,
      keyboardType: null,
      shouldShowGiftButton: null,
      onPressAction: null,
      onPressExpression: null,
    };
    obj33[0] = tmp55.chatInputRightActions;
    obj33[1] = channel;
    obj33[2] = tmp42;
    if (!tmp20) {
      result3 = tmp(4152).isPremiumGiftingSupported();
      const tmpResult23 = tmp(4152);
    }
    obj33[3] = result3;
    ({ handlePressAction: obj66[4], handlePressExpression: obj66[5] } = memo1);
    obj31[1] = tmp65(tmp5(12230), obj33);
    tmp65Result11 = tmp65(tmp76, obj31);
    const tmp5Result4 = tmp5(12230);
  }
  items27[2] = tmp65Result11;
  items27[3] = tmp65Result;
  obj26[1] = items27;
  items26[2] = callback4(editable, obj26);
  obj23[7] = items26;
  items24[2] = callback4(editable, obj23);
  let enabled2 = mobileEmojiSuggestionsConfig.enabled;
  if (enabled2) {
    enabled2 = "small" === mobileEmojiSuggestionsConfig.style;
  }
  if (enabled2) {
    const obj34 = {
      ref: null,
      chatInputRef: null,
      chatInputStateRef: null,
      channel: null,
      suppressed: null,
      anchorTop: null,
      onOccupiedHeightChange: null,
    };
    ({ chatInputEmojiSuggestions: obj68[0], chatInput: obj68[1], state: obj68[2] } = tmp55);
    obj34[3] = channel;
    obj34[4] = tmp24;
    obj34[5] = tmp16;
    obj34[6] = callback1;
    enabled2 = tmp65(tmp(12231).EmojiSuggestionBarSmall, obj34);
  }
  items24[3] = enabled2;
  obj22[2] = callback4(closure_39, { children: items24 });
  items21[11] = callback3(screenIndex(12207), obj22);
  let tmp65Result12 = null;
  if (null != refreshChatInputCoachmark) {
    const obj35 = { buttonRef: null };
    obj35[0] = ref;
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp65Result12 = tmp65(tmp5(11786), obj35);
    const tmp5Result5 = tmp5(11786);
  }
  items21[12] = tmp65Result12;
  items21[13] = callback3(screenIndex(12232), {
    buttonRef: ref,
    isVisible: isCoachmarkVisible,
    onDismiss: dismissCoachmark,
  });
  obj9[3] = items21;
  tmp = tmp71(tmp76, obj9);
  if (null == threadCreationCallback) {
    const obj36 = {
      channel: null,
      screenIndex: null,
      canSendMessages: null,
      canCreateThreads: null,
      onJumpToPresent: null,
      isReadonly: null,
      children: null,
    };
    obj36[0] = channel;
    obj36[1] = screenIndex;
    obj36[2] = editable;
    obj36[3] = canCreateThreads;
    obj36[4] = onJumpToPresent;
    obj36[5] = !editable;
    obj36[6] = tmp;
    tmp = tmp65(tmp5(12233), obj36);
  }
  return tmp;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
