// === Module 11526: ChatInput ===

// Module 11526 (ChatInput)
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "handleInit" /* 7383 */;
import closure_10 from "INITIAL_STATE" /* 11527 */;
import closure_11 from "initialize" /* 9941 */;
import closure_12 from "getState" /* 7285 */;
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus" /* 11528 */;
import closure_14 from "handleChanged" /* 4742 */;
import { DraftType } from "handleChanged" /* 4742 */;
import closure_16 from "initialize" /* 7286 */;
import closure_17 from "getUncachedChannelPermissions" /* 4025 */;
import closure_18 from "map" /* 4741 */;
import updateChatInputContainerHeight from "updateChatInputContainerHeight" /* 8758 */;
import TextAreaCta from "TextAreaCta" /* 11530 */;
import ME from "ME" /* 676 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import { EmojiInteractionPoint } from "set" /* 1925 */;
import DRAG_HANDLE from "DRAG_HANDLE" /* 1624 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ View: error, findNodeHandle: closure_8 } = get_ActivityIndicator);
({ updateShowingAutoComplete: closure_19, useChatIsAtBottom: closure_20, useChatShowingAutoComplete: closure_21 } = updateChatInputContainerHeight);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_22, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_23, ChatInputActionType: closure_24 } = TextAreaCta);
({ AnalyticEvents: closure_25, ChannelTypesSets: closure_26, ChatInputComponentViewedTypes: closure_27, ComponentActions: closure_28, MAX_UPLOAD_COUNT: closure_29, Permissions: closure_30 } = ME);
({ InAppCameraUsedCameraPreviewTypes: closure_33, MediaKeyboardTarget: closure_34 } = DRAG_HANDLE);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = jsxProd);
let closure_38 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let obj = { position: "relative", paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: closure_22 - closure_23, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  let BACKGROUND_BASE_LOW = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(712).colors.BACKGROUND_BASE_LOW;
  }
  obj = { container: obj, containerInner: { flexDirection: "row", alignItems: "flex-end" }, inputDefault: null, input: BACKGROUND_BASE_LOW, rightAccessory: null, refreshButtonAlignment: tmp(712).colors.BORDER_SUBTLE, accessories: null, floatingContainer: null, floatingInputBox: null, floatingInputBoxPressed: null, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null };
  obj = {};
  const merged = Object.assign(arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 });
  obj[2] = obj;
  obj1 = { flexDirection: "row", alignItems: "stretch", borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_PADDING, marginHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_MARGIN_HORIZONTAL, overflow: "hidden", flex: 1, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: ThemesDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: null };
  if (null != arg0) {
    let CHAT_INPUT_BACKGROUND = tmp(712).colors.CARD_SECONDARY_BG;
  } else {
    CHAT_INPUT_BACKGROUND = tmp(712).colors.CHAT_INPUT_BACKGROUND;
  }
  obj1[9] = CHAT_INPUT_BACKGROUND;
  obj[3] = obj1;
  obj[4] = { flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_PADDING };
  const obj2 = { flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_PADDING };
  const tmp3 = arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 };
  obj[5] = { marginBottom: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj[6] = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  const obj3 = { marginBottom: ThemesDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj[7] = { borderTopWidth: 0, borderColor: "transparent", borderRadius: ThemesDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  const obj4 = { borderTopWidth: 0, borderColor: "transparent", borderRadius: ThemesDefault.radii.none, backgroundColor: "transparent", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj[8] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj5 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj[9] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[10] = { shadowOpacity: 0, elevation: 0 };
  const obj6 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[11] = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  const obj7 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  let num = -6;
  if (obj11.isAndroid()) {
    num = -5;
  }
  obj[12] = { flex: 1, justifyContent: "center", marginLeft: num };
  obj[13] = { marginTop: -arg2 / 2 };
  obj[14] = { overflow: "visible" };
  return obj;
});
let closure_39 = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  ({ screenIndex, threadCreationCallback, onJumpToPresent } = channel);
  ref = undefined;
  c2 = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  c7 = undefined;
  let sharedValue;
  let sharedValue1;
  let callback;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  closure_14 = undefined;
  let tmp = channel;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(1367);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInput" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  obj1 = channel(4199);
  const gradientValue = obj1.useGradientValue(channel(4199).GradientPercentage.END);
  let obj2 = channel(4101);
  const token = obj2.useToken(ref(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = channel(4101);
  let result = (obj3.useToken(ref(712).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = channel(4101);
  const token1 = obj4.useToken(ref(712).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp9 = callback6(gradientValue, chatInputFloating, token1);
  let obj5 = channel(4101);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = obj5.useToken(ref(712).colors.BACKGROUND_BASE_LOWER);
  }
  let tmpResult = tmp(4101);
  const token3 = tmpResult.useToken(tmp5(712).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  tmpResult = tmp(4101);
  const token4 = tmpResult.useToken(tmp5(712).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = editable;
  const token5 = tmp(4101).useToken(tmp5(712).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  ref = editable.useRef(chatInputFloating);
  ref.current = chatInputFloating;
  const tmpResult1 = tmp(4101);
  [floatingInputBoxPressed, c2] = stateFromStores1(editable.useState(false), 2);
  if (chatInputFloating) {
    let tmp5Result = tmp5(11531);
  } else {
    tmp5Result = c7;
  }
  dependencyMap = tmp17;
  let tmp15 = stateFromStores1(editable.useState(false), 2);
  const tmp18 = channel.isPrivate() && null == threadCreationCallback;
  const tmp19 = callback((channelId) => channelId.channelId === channel.id);
  const typingUserIdsForDisplay = tmp(11532).useTypingUserIdsForDisplay(channel.id, 1);
  const tmpResult2 = tmp(11532);
  let tmp21 = callback3(screenIndex);
  let floatingInputBoxTyping = chatInputFloating;
  if (chatInputFloating) {
    floatingInputBoxTyping = tmpResult3.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp21);
  }
  const tmp22 = callback2(screenIndex);
  let tmp23 = token1;
  if (tmp22) {
    tmp23 = token5;
  }
  let tmp24 = token4;
  if (tmp22) {
    tmp24 = token3;
  }
  tmpResult3 = tmp(11532);
  const items = [closure_16];
  stateFromStores = tmp(589).useStateFromStores(items, () => {
    let editingTextValue = null;
    if (!closure_3) {
      editingTextValue = closure_1_16.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult4 = tmp(589);
  const items1 = [registerViewTag];
  stateFromStores1 = tmp(589).useStateFromStores(items1, () => {
    let pendingReply;
    if (!closure_3) {
      pendingReply = registerViewTag.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult5 = tmp(589);
  const items2 = [closure_18];
  let stateFromStores2 = tmp(589).useStateFromStores(items2, () => {
    if (closure_3) {
      return false;
    } else {
      const uploads = closure_1_18.getUploads(channel.id, closure_1_15.ChannelMessage);
      let tmp5 = null != uploads;
      if (tmp5) {
        tmp5 = uploads.length > 0;
      }
      return tmp5;
    }
  });
  const items3 = [channel.id, null != threadCreationCallback];
  let memo = stateFromStores;
  if (stateFromStores == null) {
    memo = obj9.useMemo(() => ref.getDraft(channel.id, closure_3 ? closure_1_15.FirstThreadMessage : closure_1_15.ChannelMessage), items3);
  }
  const tmpResult6 = tmp(589);
  const items4 = [closure_17];
  const items5 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = tmp(589).useStateFromStoresObject(items4, () => {
    let obj = closure_1_17;
    let canResult1 = closure_1_17.can(closure_1_30.MENTION_EVERYONE, channel);
    const canResult = closure_1_17.can(closure_1_30.ATTACH_FILES, channel);
    const canResult2 = closure_1_17.can(closure_1_30.SEND_MESSAGES, channel);
    const canResult3 = closure_1_17.can(closure_1_30.SEND_VOICE_MESSAGES, channel);
    const tmp6 = closure_1_17.can(closure_1_30.CREATE_PUBLIC_THREADS, channel) || obj.can(closure_1_30.CREATE_PRIVATE_THREADS, channel);
    let isPrivateResult = obj2.isPrivate();
    const canResult4 = obj.can(closure_1_30.SEND_MESSAGES_IN_THREADS, channel);
    let tmp11 = canResult4;
    const isReadOnlyThread = channel(5996).computeIsReadOnlyThread(obj2);
    if (!dependencyMap) {
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
  }, items5);
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = tmp5(5834)().analyticsLocations;
  let tmp30 = tmp17;
  if (null == threadCreationCallback) {
    tmp30 = null != stateFromStores;
  }
  if (!tmp30) {
    tmp30 = !tmp(5996).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult8 = tmp(5996);
  }
  const tmpResult7 = tmp(589);
  let canStartThread = tmp(5996).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp17;
  }
  const tmpResult9 = tmp(5996);
  const tmp34 = tmp(7364).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult10 = tmp(7364);
  const token6 = tmp(4101).useToken(tmp5(712).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  if (enabled) {
    let diff = token - 2 * token6;
  } else {
    diff = tmp(11552).getChatInputMinHeight();
    const tmpResult12 = tmp(11552);
  }
  if (chatInputFloating) {
    diff = token;
  }
  c7 = diff;
  const tmpResult11 = tmp(4101);
  sharedValue = tmp(4120).useSharedValue(diff);
  const tmpResult13 = tmp(4120);
  sharedValue1 = tmp(4120).useSharedValue(diff);
  const items6 = [sharedValue1, diff, sharedValue];
  const effect = obj9.useEffect(() => {
    const result = sharedValue.set(c7);
    const result1 = sharedValue1.set(c7);
  }, items6);
  const tmp40 = ref(4244)();
  const tmp41 = unregisterViewTag((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result2 = !tmp17;
  let isAppLauncherEnabled = result2;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(8492).getIsAppLauncherEnabled(channel);
    const tmpResult15 = tmp(8492);
  }
  const tmpResult14 = tmp(4120);
  const items7 = [sharedValue1];
  const stateFromStores3 = tmp(589).useStateFromStores(items7, () => sharedValue1.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp17 };
  const tmpResult16 = tmp(589);
  let num = 8;
  ({ placeholder, accessibilityLabel } = ref(11556)(obj));
  if (enabled) {
    num = 5;
  }
  const tmp45 = ref(11556)(obj);
  function ze() {
    return { minHeight: sharedValue1.get() };
  }
  ze.__closure = { textFieldHeight: sharedValue1 };
  ze.__workletHash = 11048691841625;
  ze.__initData = closure_39;
  const animatedStyle = tmp(4120).useAnimatedStyle(ze);
  const ref1 = obj9.useRef(null);
  const tmpResult17 = tmp(4120);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = tmp(11557).useRefreshChatInputCoachmark(obj);
  obj1 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
  const tmp49 = ref(11558)(obj1);
  callback = tmp49;
  const items8 = [tmp49];
  const effect1 = obj9.useEffect(() => {
    const current = closure_10.chatInput.current;
    current.setText(closure_10.props.current.defaultValue);
  }, items8);
  const items9 = [tmp49, channel, stateFromStores, stateFromStores1];
  const effect2 = obj9.useEffect(() => {
    const current = closure_10.propsPrev.current;
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
      if (id !== channel(5949).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
  }, items9);
  const items10 = [tmp49];
  const effect3 = obj9.useEffect(() => {
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
    let ComponentDispatch = channel(1231).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_28.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = channel(table[40]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_28.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items10);
  const items11 = [tmp49, sharedValue];
  memo1 = obj9.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = callback(closure_1_3[41]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = closure_11.handleTextOrFocusChange(str, false);
        closure_10.state.current.focused = false;
        callback2(false);
        const current = closure_10.chatInputCover.current;
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
        const current4 = tmp3.chatInputSendButton.current;
        if (current4 != null) {
          current4.setHasText(str.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = callback(closure_1_3[41]);
        const result = obj.setIsAnyChatInputFocused(true);
        closure_10.state.current.focused = true;
        callback2(true);
        closure_10.state.current.selectionStart = start;
        closure_10.state.current.selectionEnd = end;
        const result1 = closure_11.handleTextOrFocusChange(closure_10.state.current.text, true);
        const current = closure_10.chatInputAppCommandManager.current;
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
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_10.state.current.textFieldContentSize = height;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_10.state.current.textFieldHeight;
          const result = textFieldHeight.set(callback(closure_1_3[32]).getChatInputHeightAnimationTiming(height, store.get()));
          const tmp2Result = callback(closure_1_3[32]);
        }
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_10.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == closure_10.props.current.threadCreationCallback) {
            const current = closure_10.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_10.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_10.state.current.textFieldHeight;
            const result = textFieldHeight.set(callback(closure_1_3[32]).getChatInputHeightAnimationTiming(textFieldContentSize, store.get()));
            const tmpResult = callback(closure_1_3[32]);
          }
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_1_19(closure_10.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_10.state.current.focused) {
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
    closure_0 = stateFromStores((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                return { value: "ct", done: true };
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
                  if (closure_1_10.state.current.focused) {
                    if (closure_1_10.props.current.canUpload) {
                      obj1 = lib(closure_2_3[43]);
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
                obj3[0] = closure_1_10.props.current.channel.id;
                const obj4 = { uri: null, originalUri: null, width: null, height: null, mimeType: null, platform: null, id: null };
                obj4[0] = lib;
                obj4[1] = lib;
                obj4[2] = styles.width;
                obj4[3] = styles.height;
                obj4[4] = c3;
                obj4[5] = lib(closure_2_3[45]).UploadPlatform.REACT_NATIVE;
                const obj7 = closure_2_1(closure_2_3[44]);
                obj4[6] = lib(closure_2_3[46]).v4();
                obj3[1] = obj4;
                obj3[2] = closure_2_15.ChannelMessage;
                obj7.addFile(obj3);
                const obj10 = lib(closure_2_3[46]);
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
    obj[8] = function() {
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
      if (closure_1_24.PHOTOS === arg1) {
        const result = callback(closure_1_3[47]).triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = callback(closure_1_3[47]);
        let obj = { type: null, channel_id: null, guild_id: null };
        obj[0] = closure_1_27.ADD_BUTTON;
        obj[1] = closure_10.props.current.channel.id;
        obj[2] = closure_10.props.current.channel.guild_id;
        closure_1_1(closure_1_3[48]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj);
        if (ref.current) {
          let tmp42Result = tmp42(tmp43[34]);
          const keyboardType = tmp42Result.getKeyboardType();
          if (keyboardType === tmp42(tmp43[49]).KeyboardTypes.APP_LAUNCHER) {
            obj = { type: null };
            obj[0] = tmp42(tmp43[49]).KeyboardTypes.APP_LAUNCHER;
            closure_11.handleToggleKeyboard(obj);
          }
        }
        tmp42Result = tmp42(tmp43[34]);
        const keyboardType1 = tmp42Result.getKeyboardType();
        if (keyboardType1 === callback(closure_1_3[49]).KeyboardTypes.MEDIA) {
          const current = tmp48.chatInputActions.current;
          if (current != null) {
            current.focusPhotosButton();
          }
        }
        obj1 = { type: null, context: null };
        obj1[0] = callback(closure_1_3[49]).KeyboardTypes.MEDIA;
        let obj2 = { target: null };
        obj2[0] = closure_1_34.CHAT;
        obj1[1] = obj2;
        closure_11.handleToggleKeyboard(obj1);
        const obj22 = closure_1_1(closure_1_3[48]);
        tmp48 = closure_10;
      } else {
        let tmp35 = current2;
        if (tmp.APPS === arg1) {
          const result1 = callback(closure_1_3[47]).triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj12 = callback(closure_1_3[47]);
          callback(closure_1_3[50]).trackWithMetadata(closure_1_25.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = callback(closure_1_3[50]);
          const obj3 = { type: null, channel_id: null, guild_id: null };
          obj3[0] = closure_1_27.APPS_BUTTON;
          obj3[1] = closure_10.props.current.channel.id;
          obj3[2] = closure_10.props.current.channel.guild_id;
          closure_1_1(closure_1_3[48]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj14 = closure_1_1(closure_1_3[48]);
          const tmp30 = closure_10;
          const result2 = closure_1_2(closure_1_3[51]).dismissNewActivityIndicator();
          const obj16 = closure_1_2(closure_1_3[51]);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = callback(closure_1_3[52]).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj4 = { type: null, context: null };
          obj4[0] = callback(closure_1_3[49]).KeyboardTypes.APP_LAUNCHER;
          let obj5 = { initialRouteName: null, initialSearchQuery: null };
          obj5[0] = closure_1_31.HOME;
          const obj17 = callback(closure_1_3[52]);
          const appDMApplication = callback(closure_1_3[53]).getAppDMApplication(tmp30.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj5[1] = name;
          obj4[1] = obj5;
          closure_11.handleToggleKeyboard(obj4);
          const tmp23Result = callback(closure_1_3[53]);
        } else if (tmp.ALL_PHOTOS === arg1) {
          const result4 = callback(closure_1_3[47]).triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj9 = callback(closure_1_3[47]);
          let obj6 = { channel: null, uploadLimit: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null, draftType: null };
          obj6[0] = closure_10.props.current.channel;
          obj6[1] = closure_1_29;
          obj6[2] = function onDismissKeyboard() {
            return callback(4242).dismissKeyboard();
          };
          obj6[3] = function onRestoreKeyboard() {
            return closure_11.handleToggleKeyboard({ type: closure_1_0(closure_1_3[49]).KeyboardTypes.SYSTEM });
          };
          obj6[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[54]).addImagesFromPicker(closure_10.props.current.channel.id, items, closure_1_0(closure_1_3[45]).UploadOrigin.IMAGE_PICKER);
          };
          obj6[5] = closure_1_15.ChannelMessage;
          callback(closure_1_3[54]).handleViewAllDialog(obj6);
          const obj10 = callback(closure_1_3[54]);
        } else if (tmp.CAMERA === arg1) {
          obj5 = callback(closure_1_3[47]);
          const result5 = obj5.triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj6 = callback(closure_1_3[54]);
          const obj7 = { channel: null, previewType: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null };
          obj7[0] = closure_10.props.current.channel;
          obj7[1] = closure_1_33.CAMERA_BUTTON;
          obj7[2] = function onDismissKeyboard() {
            return callback(4242).dismissKeyboard();
          };
          obj7[3] = function onRestoreKeyboard() {
            return closure_11.handleToggleKeyboard({ type: closure_1_0(closure_1_3[49]).KeyboardTypes.SYSTEM });
          };
          obj7[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[54]).addImagesFromPicker(closure_10.props.current.channel.id, items, closure_1_0(closure_1_3[45]).UploadOrigin.IMAGE_PICKER);
          };
          obj6.handleCameraDialog(obj7);
        } else if (tmp.NITRO_GIFT === arg1) {
          obj = closure_1_1(closure_1_3[56]);
          const result6 = obj.markPotentialBadState();
          obj1 = callback(closure_1_3[47]);
          const result7 = obj1.triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = callback(closure_1_3[22]);
          if (obj2.isAndroid()) {
            let tmp5Result = tmp5(tmp3[55]);
            tmp5Result.dismissKeyboard();
          }
          tmp5Result = tmp5(tmp3[54]);
          tmp5Result.handleSelectGift(closure_10.props.current.analyticsLocations, closure_10.chatInput, tmp35);
        } else if (tmp.THREAD === arg1) {
          const result8 = callback(closure_1_3[47]).triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj29 = callback(closure_1_3[47]);
          callback(closure_1_3[54]).handleSelectThread(closure_10.props.current.channel, closure_10.chatInput);
          const obj30 = callback(closure_1_3[54]);
        }
      }
    };
    obj[10] = function handlePollsPress() {
      let obj = callback(closure_1_3[47]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: closure_1_27.POLLS, channel_id: closure_10.props.current.channel.id, guild_id: closure_10.props.current.channel.guild_id };
      closure_1_1(closure_1_3[48]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = closure_1_1(closure_1_3[48]);
      callback(closure_1_3[55]).dismissKeyboard();
      const obj4 = callback(closure_1_3[55]);
      obj = {
        channel: closure_10.props.current.channel,
        onCancel() {
          return closure_11.handleToggleKeyboard({ type: closure_1_0(closure_1_3[49]).KeyboardTypes.SYSTEM });
        }
      };
      callback(closure_1_3[57]).openCreatePollModal(obj);
    };
    obj[11] = function handleAttachPress() {
      let obj = callback(closure_1_3[47]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[47]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: closure_10.props.current.channel,
        uploadLimit: closure_1_29,
        onDismissKeyboard() {
          return callback(table[55]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_11.handleToggleKeyboard({ type: closure_1_0(closure_1_3[49]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          closure_1_0(closure_1_3[54]).addImagesFromPicker(props.props.current.channel.id, items, closure_1_0(closure_1_3[45]).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      callback(closure_1_3[54]).handleAttachFile(obj);
    };
    obj[12] = function handlePressExpression(context) {
      let obj = callback(closure_1_3[58]);
      const result = obj.initiateEmojiInteraction(closure_1_32.ChatInputExpressionPressed);
      obj = { type: callback(closure_1_3[49]).KeyboardTypes.EXPRESSION, context };
      closure_11.handleToggleKeyboard(obj);
    };
    obj[13] = function handlePressSend() {
      const current = closure_10.chatInput.current;
      current.handleSend();
    };
    obj[14] = function handleSelectionOrTextChange(nativeEvent) {
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      closure_10.state.current.editId = editId;
      closure_10.state.current.selectionStart = start;
      closure_10.state.current.selectionEnd = end;
      const result = closure_11.handleTextOrFocusChange(text, closure_10.state.current.focused);
      const current = closure_10.chatInputAppCommandManager.current;
      if (current != null) {
        current.updateState();
      }
      const current2 = tmp.chatInputAutocomplete.current;
      if (current2 != null) {
        const obj = { focused: null, text: null, selectionStart: null, selectionEnd: null };
        obj[0] = tmp.state.current.focused;
        obj[1] = text;
        obj[2] = start;
        obj[3] = end;
        current2.setData(obj);
      }
      const current3 = tmp.chatInputSendButton.current;
      if (current3 != null) {
        current3.setHasText(text.trim().length > 0);
      }
      if (closure_10.state.current.editId !== editId) {
        const current4 = tmp.chatInput.current;
        current4.handleTextChanged(text);
        const current5 = tmp.chatInputCharCounter.current;
        if (current5 != null) {
          const result1 = current5.onMessageLengthChanged(text.length);
        }
        callback(closure_1_3[59]).hideContextMenu();
        const obj2 = callback(closure_1_3[59]);
      }
    };
    obj[15] = function handleTapAction(nativeEvent) {
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = closure_10.chatInput.current;
        current.blur();
        const obj = callback(closure_1_3[60]);
        const current2 = closure_10.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        let fn;
        if (closure_10.state.current.focused) {
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
          const maxMessageLength = callback(closure_1_3[62]).getMaxMessageLength();
          if (tmp16) {
            closure_1_1(closure_1_3[48]).track(closure_1_25.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = closure_1_1(closure_1_3[48]);
          }
          closure_10.state.current.textPrev = closure_10.state.current.text;
          closure_10.state.current.text = text;
        }
        if (closure_1_11.isOpen()) {
          closure_1_1(closure_1_3[61]).hideNativeMenu();
          const obj = closure_1_1(closure_1_3[61]);
        }
        const current2 = closure_10.chatInputActions.current;
        if (current2 != null) {
          current2.onDismissActions(focused);
        }
        const current3 = closure_10.chatInputRightActions.current;
        if (current3 != null) {
          current3.onDismissActions(focused);
        }
        const tmp8 = closure_10;
      }
      if (0 === text.length) {
        const current4 = closure_10.chatInputActions.current;
        if (current4 != null) {
          current4.onShowActions(focused);
        }
        const current = closure_10.chatInputRightActions.current;
        if (current != null) {
          current.onShowActions(focused);
        }
        const tmp21 = closure_10;
      }
    };
    obj[17] = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = closure_10.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (value != null) {
        value(nativeEvent.text);
      }
    };
    obj[18] = function handleToggleKeyboard(type) {
      if (closure_1_11.isOpen()) {
        closure_1_1(closure_1_3[61]).hideNativeMenu();
        const obj = closure_1_1(closure_1_3[61]);
      }
      if (type.type !== callback(closure_1_3[49]).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = closure_10.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = closure_10.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items11);
  const items12 = [null != threadCreationCallback, tmp49];
  callback = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!closure_3) {
        const current = closure_10.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items12);
  const tmp55 = ref(11617)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp55.registerViewTag;
  unregisterViewTag = tmp55.unregisterViewTag;
  closure_14 = obj9.useRef(null);
  const items13 = [tmp49, registerViewTag, unregisterViewTag];
  const callback1 = obj9.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(tmp.current);
      tmp.current = null;
    }
    closure_10.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = sharedValue(current);
      if (null != tmp5) {
        tmp.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items13);
  const items14 = [editable, tmp49];
  callback2 = obj9.useCallback(() => true, []);
  callback3 = obj9.useCallback(() => {
    if (editable) {
      const current = closure_10.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items14);
  obj2 = { canUpload, channelId: channel.id, screenIndex };
  const tmp60 = callback4(ref(11802), obj2);
  let tmp59Result = null;
  if (editable) {
    obj3 = { ref: null, channel: null, onPressAction: null, canStartThreads: null, isAppLauncherEnabled: null, keyboardType: null, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null };
    obj3[0] = tmp49.chatInputActions;
    obj3[1] = channel;
    obj3[2] = memo1.handlePressAction;
    obj3[3] = canStartThread;
    obj3[4] = isAppLauncherEnabled;
    obj3[5] = tmp40;
    let tmp63 = canUpload;
    tmp5Result = tmp5(11803);
    if (canUpload) {
      tmp63 = null == stateFromStores3;
    }
    if (!tmp63) {
      tmp63 = tmp34;
    }
    obj3[6] = !tmp63;
    obj3[7] = canUpload;
    let result1 = result2;
    if (!tmp17) {
      result1 = tmp(4056).isPremiumGiftingSupported();
      const tmpResult19 = tmp(4056);
    }
    obj3[8] = result1;
    obj3[9] = tmp34;
    ({ handlePollsPress: obj32[10], handleAttachPress: obj32[11] } = memo1);
    obj3[12] = ref1;
    tmp59Result = tmp59(tmp5Result, obj3);
  }
  obj4 = { style: items15, children: null };
  items15 = [tmp9.inputDefault, animatedStyle];
  obj5 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: null };
  const tmpResult18 = tmp(11557);
  obj5[1] = tmp(11820).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj5[2] = editable;
  ({ handleFocus: obj35[3], handleBlur: obj35[4], handleChangeContentSize: obj35[5], handleMaxHeightChanged: obj35[6], handleSelectionOrTextChange: obj35[7], handleTextFlushed: obj35[8], handlePasteImage: obj35[9], handlePasteCommand: obj35[10], handleTapAction: obj35[11], handlePressSend: obj35[12] } = memo1);
  obj5[13] = placeholder;
  obj5[14] = callback1;
  obj5[15] = setNoExtractUI;
  obj5[16] = tmp40 !== tmp(1627).KeyboardTypes.MEDIA;
  obj5[17] = num;
  const items16 = [callback4(ref(11819), obj5), callback4(ref(11821), { keyboardType: tmp40, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover })];
  obj4[1] = items16;
  const tmp67 = callback5(ref(4120).View, obj4);
  if (editable) {
    let obj7 = { ref: null, canSendVoiceMessage: null, channel: null, defaultValue: null, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
    obj7[0] = tmp49.chatInputSendButton;
    obj7[1] = canSendVoiceMessage;
    obj7[2] = channel;
    obj7[3] = memo;
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    obj7[4] = stateFromStores2;
    obj7[5] = null != stateFromStores;
    obj7[6] = memo1.handlePressSend;
    obj7[7] = result2;
    tmp59Result = tmp59(tmp5(11822), obj7);
    const tmp5Result2 = tmp5(11822);
  } else {
    tmp59Result = null;
  }
  const obj8 = { collapsable: false, onLayout: callback, style: null, children: null };
  const items17 = [ref(11828)({ isCreatingThread: null != threadCreationCallback }), , ];
  let overflowVisible = chatInputFloating;
  if (chatInputFloating) {
    overflowVisible = tmp9.overflowVisible;
  }
  items17[1] = overflowVisible;
  let floatingScrimOverlap = chatInputFloating;
  if (chatInputFloating) {
    floatingScrimOverlap = result2;
  }
  if (floatingScrimOverlap) {
    floatingScrimOverlap = tmp9.floatingScrimOverlap;
  }
  items17[2] = floatingScrimOverlap;
  obj8[2] = items17;
  let tmp59Result1 = chatInputFloating;
  if (chatInputFloating) {
    tmp59Result1 = !floatingInputBoxTyping;
  }
  if (tmp59Result1) {
    obj9 = { gradientHeight: null, inline: false, scrimBase: null };
    obj9[0] = tmp23;
    obj9[2] = token2;
    tmp59Result1 = tmp59(tmp(11829).ChatInputScrimGradient, obj9);
  }
  const items18 = [tmp59Result1, , , , , , , , , , , , , , ];
  let tmp59Result2 = chatInputFloating;
  if (chatInputFloating) {
    tmp59Result2 = floatingInputBoxTyping;
  }
  if (tmp59Result2) {
    let hex2rgbResult = tmp(688).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    let obj10 = { style: null, pointerEvents: "none" };
    const obj11 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
    obj11[5] = hex2rgbResult;
    obj10[0] = obj11;
    tmp59Result2 = tmp59(tmp70, obj10);
    const tmpResult20 = tmp(688);
  }
  items18[1] = tmp59Result2;
  items18[2] = callback4(tmp(11830).ChatInputAccessibilityDivider, {});
  let tmp59Result3 = null;
  if (tmp18) {
    let obj12 = { channel: null, hasInputText: null };
    obj12[0] = channel;
    let tmp76 = "" !== memo;
    if (!tmp76) {
      let current = tmp49.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp76 = "" !== text;
    }
    obj12[1] = tmp76;
    tmp59Result3 = tmp59(tmp5(11831), obj12);
    const tmp5Result3 = tmp5(11831);
  }
  items18[3] = tmp59Result3;
  let obj13 = { style: tmp9.accessories, children: null };
  let tmp59Result4 = chatInputFloating;
  if (chatInputFloating) {
    tmp59Result4 = floatingInputBoxTyping;
  }
  if (tmp59Result4) {
    let obj14 = { gradientHeight: null, inline: true, scrimBase: null };
    obj14[0] = tmp24;
    obj14[2] = token2;
    tmp59Result4 = tmp59(tmp(11829).ChatInputScrimGradient, obj14);
  }
  const items19 = [tmp59Result4, , ];
  let tmp59Result5 = null;
  if (null == threadCreationCallback) {
    const obj15 = { channel: null, screenIndex: null };
    obj15[0] = channel;
    obj15[1] = screenIndex;
    tmp59Result5 = tmp59(tmp5(11532), obj15);
  }
  items19[1] = tmp59Result5;
  let obj6 = { keyboardType: tmp40, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover };
  const tmp5Result1 = ref(11819);
  let tmp59Result6 = null;
  if (tmpResult21.isIOS()) {
    let obj16 = { channelId: null, screenIndex: null, onJumpToPresent: null };
    obj16[0] = channel.id;
    obj16[1] = screenIndex;
    obj16[2] = onJumpToPresent;
    tmp59Result6 = tmp59(tmp5(11835), obj16);
  }
  items19[2] = tmp59Result6;
  obj13[1] = items19;
  items18[4] = callback5(c7, obj13);
  let tmp59Result7 = null;
  if (isResourceChannel) {
    let obj17 = { channel: null };
    obj17[0] = channel;
    tmp59Result7 = tmp59(tmp5(11850), obj17, channel.id);
  }
  items18[5] = tmp59Result7;
  items18[6] = callback4(tmp(11854).MemberActionsChatInputBannerGuardedOuter, { channel });
  items18[7] = callback4(tmp(11857).DoubleTapToReactChatInputBanner, { channel });
  let tmp59Result8 = null;
  if (tmp19) {
    const obj18 = { channelId: null };
    obj18[0] = channel.id;
    tmp59Result8 = tmp59(tmp5(11952), obj18);
  }
  items18[8] = tmp59Result8;
  let tmp59Result9 = null;
  if (tmp40 !== tmp(1627).KeyboardTypes.EXPRESSION) {
    const obj19 = { ref: null, analyticsLocations: null, channel: null, canMentionEveryone: null, keyboardType: null, onChangeAutoCompleteVisibility: null, commandsDisabled: null, canOnlyUseTextCommands: null, chatInputRef: null, screenIndex: null };
    obj19[0] = tmp49.chatInputAutocomplete;
    obj19[1] = analyticsLocations;
    obj19[2] = channel;
    obj19[3] = canMentionEveryone;
    obj19[4] = tmp40;
    obj19[5] = memo1.handleChangeAutoCompleteVisibility;
    obj19[6] = tmp30;
    obj19[7] = tmp31;
    obj19[8] = tmp49.chatInput;
    obj19[9] = screenIndex;
    tmp59Result9 = tmp59(tmp5(11954), obj19);
  }
  items18[9] = tmp59Result9;
  let tmp59Result10 = !chatInputFloating;
  if (!chatInputFloating) {
    const obj20 = { channel: null };
    obj20[0] = channel;
    tmp59Result10 = tmp59(tmp5(11972), obj20);
  }
  items18[10] = tmp59Result10;
  let tmp59Result11 = !chatInputFloating;
  if (!chatInputFloating) {
    let obj21 = { channel: null, chatInputRef: null, pendingEdit: null, pendingReply: null };
    obj21[0] = channel;
    obj21[1] = tmp49.chatInput;
    obj21[2] = stateFromStores;
    obj21[3] = stateFromStores1;
    tmp59Result11 = tmp59(tmp5(11985), obj21);
  }
  items18[11] = tmp59Result11;
  items18[12] = callback4(ref(11989), { ref: tmp49.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp49.chatInput, chatInputStateRef: tmp49.state, commandsDisabled: tmp30 });
  const items20 = [tmp9.container, ];
  let floatingContainer = chatInputFloating;
  if (chatInputFloating) {
    floatingContainer = tmp9.floatingContainer;
  }
  const obj23 = { style: items20, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  items20[1] = floatingContainer;
  const obj24 = { children: null };
  if (chatInputFloating) {
    const items21 = [tmp60, , ];
    const obj25 = { channel: null };
    obj25[0] = channel;
    items21[1] = tmp59(tmp5(11972), obj25);
    const items22 = [tmp9.floatingInputBox, , ];
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp9.floatingInputBoxPressed;
    }
    items22[1] = floatingInputBoxPressed;
    if (floatingInputBoxTyping) {
      floatingInputBoxTyping = tmp9.floatingInputBoxTyping;
    }
    const obj26 = { style: null, onStartShouldSetResponder: null, onResponderRelease: null, collapsable: false, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items22[2] = floatingInputBoxTyping;
    obj26[0] = items22;
    obj26[1] = callback2;
    obj26[2] = callback3;
    obj26[4] = tmp41;
    let str3;
    if (tmp41) {
      str3 = "no-hide-descendants";
    }
    obj26[5] = str3;
    const obj27 = { channel: null, chatInputRef: null, pendingEdit: null, pendingReply: null };
    obj27[0] = channel;
    obj27[1] = tmp49.chatInput;
    obj27[2] = stateFromStores;
    obj27[3] = stateFromStores1;
    const items23 = [tmp59(tmp5(11985), obj27), ];
    const obj28 = { style: null, children: null };
    obj28[0] = tmp9.floatingMainContents;
    let tmp59Result12 = null;
    if (null != tmp59Result) {
      let obj29 = { style: null, children: null };
      let obj30 = { paddingBottom: null, paddingLeft: null };
      obj30[0] = result;
      obj30[1] = result;
      obj29[0] = obj30;
      obj29[1] = tmp59Result;
      tmp59Result12 = tmp59(tmp70, obj29);
    }
    const items24 = [tmp59Result12, , , ];
    const obj31 = { style: null, children: null };
    const items25 = [tmp9.inputFlat, ];
    const obj32 = { paddingBottom: null };
    obj32[0] = result;
    items25[1] = obj32;
    obj31[0] = items25;
    const items26 = [tmp67, ];
    const obj33 = { analyticsLocations: null, ref: null };
    obj33[0] = analyticsLocations;
    obj33[1] = tmp49.chatInputCharCounter;
    items26[1] = tmp59(tmp5(11991), obj33);
    obj31[1] = items26;
    items24[1] = tmp65(tmp70, obj31);
    let tmp59Result13 = null;
    if (editable) {
      const obj34 = { style: null, children: null };
      const obj35 = { paddingBottom: null };
      obj35[0] = result;
      obj34[0] = obj35;
      const obj36 = { ref: null, channel: null, keyboardType: null, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null };
      obj36[0] = tmp49.chatInputRightActions;
      obj36[1] = channel;
      obj36[2] = tmp40;
      if (!tmp17) {
        result2 = tmp(4056).isPremiumGiftingSupported();
        const tmpResult22 = tmp(4056);
      }
      obj36[3] = result2;
      ({ handlePressAction: obj76[4], handlePressExpression: obj76[5] } = memo1);
      obj34[1] = tmp59(tmp5(11992), obj36);
      tmp59Result13 = tmp59(tmp70, obj34);
      const tmp5Result4 = tmp5(11992);
    }
    items24[2] = tmp59Result13;
    items24[3] = tmp59Result;
    obj28[1] = items24;
    items23[1] = tmp65(tmp70, obj28);
    obj26[6] = items23;
    items21[2] = tmp65(tmp70, obj26);
    obj24[0] = items21;
    let tmp91 = obj24;
  } else {
    const items27 = [tmp60, ];
    const obj37 = { style: null, collapsable: false, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj37[0] = tmp9.containerInner;
    obj37[2] = tmp41;
    let str2;
    if (tmp41) {
      str2 = "no-hide-descendants";
    }
    obj37[3] = str2;
    let tmp59Result14 = tmp59Result;
    if (enabled) {
      const obj38 = { style: null, children: null };
      obj38[0] = tmp9.refreshButtonAlignment;
      obj38[1] = tmp59Result;
      tmp59Result14 = tmp59(tmp70, obj38);
    }
    const items28 = [tmp59Result14, , ];
    const obj39 = { style: null, children: null };
    const items29 = [tmp9.input, ];
    const obj40 = { minHeight: null };
    obj40[0] = token - 2 * token6;
    items29[1] = obj40;
    obj39[0] = items29;
    const items30 = [tmp67, ];
    const obj41 = { style: null, children: null };
    obj41[0] = tmp9.rightAccessory;
    let tmp59Result15 = null;
    if (editable) {
      const obj42 = { active: null, onPress: null };
      obj42[0] = tmp40 === tmp(1627).KeyboardTypes.EXPRESSION;
      obj42[1] = memo1.handlePressExpression;
      tmp59Result15 = tmp59(tmp5(11759), obj42);
      const tmp5Result5 = tmp5(11759);
    }
    const items31 = [tmp59Result15, ];
    const obj43 = { analyticsLocations: null, ref: null };
    obj43[0] = analyticsLocations;
    obj43[1] = tmp49.chatInputCharCounter;
    items31[1] = tmp59(tmp5(11991), obj43);
    obj41[1] = items31;
    items30[1] = tmp65(tmp70, obj41);
    obj39[1] = items30;
    items28[1] = tmp65(tmp70, obj39);
    let tmp59Result16 = tmp59Result;
    if (enabled) {
      const obj44 = { style: null, children: null };
      obj44[0] = tmp9.refreshButtonAlignment;
      obj44[1] = tmp59Result;
      tmp59Result16 = tmp59(tmp70, obj44);
    }
    items28[2] = tmp59Result16;
    obj37[4] = items28;
    items27[1] = tmp65(tmp70, obj37);
    obj24[0] = items27;
    tmp91 = obj24;
  }
  obj23[2] = callback5(closure_37, tmp91);
  items18[13] = callback4(tmp5Result, obj23);
  let tmp59Result17 = null;
  if (null != refreshChatInputCoachmark) {
    const obj45 = { buttonRef: null };
    obj45[0] = ref1;
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp59Result17 = tmp59(tmp5(11557), obj45);
    const tmp5Result6 = tmp5(11557);
  }
  items18[14] = tmp59Result17;
  obj8[3] = items18;
  tmp = tmp65(tmp70, obj8);
  if (null == threadCreationCallback) {
    const obj46 = { channel: null, screenIndex: null, canSendMessages: null, canCreateThreads: null, onJumpToPresent: null, isReadonly: null, children: null };
    obj46[0] = channel;
    obj46[1] = screenIndex;
    obj46[2] = editable;
    obj46[3] = canCreateThreads;
    obj46[4] = onJumpToPresent;
    obj46[5] = !editable;
    obj46[6] = tmp;
    tmp = tmp59(tmp5(11993), obj46);
  }
  return tmp;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;