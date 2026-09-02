// === Module 11754: ChatInput ===

// Module 11754 (ChatInput)
import ThemesDefault from "Themes" /* 709 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "handleInit" /* 7534 */;
import closure_10 from "INITIAL_STATE" /* 11755 */;
import closure_11 from "initialize" /* 9667 */;
import closure_12 from "getState" /* 7434 */;
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus" /* 11756 */;
import closure_14 from "handleChanged" /* 4854 */;
import { DraftType } from "handleChanged" /* 4854 */;
import closure_16 from "initialize" /* 7435 */;
import closure_17 from "getUncachedChannelPermissions" /* 4120 */;
import closure_18 from "map" /* 4853 */;
import updateChatInputContainerHeight from "updateChatInputContainerHeight" /* 9547 */;
import TextAreaCta from "TextAreaCta" /* 11758 */;
import ME from "ME" /* 673 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { EmojiInteractionPoint } from "set" /* 1924 */;
import DRAG_HANDLE from "DRAG_HANDLE" /* 1622 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ View: error, findNodeHandle: closure_8 } = get_ActivityIndicator);
({ updateShowingAutoComplete: closure_19, useChatIsAtBottom: closure_20, useChatShowingAutoComplete: closure_21 } = updateChatInputContainerHeight);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_22, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_23, ChatInputActionType: closure_24 } = TextAreaCta);
({ AnalyticEvents: closure_25, ChannelTypesSets: closure_26, ChatInputComponentViewedTypes: closure_27, ComponentActions: closure_28, MAX_UPLOAD_COUNT: closure_29, Permissions: closure_30 } = ME);
({ InAppCameraUsedCameraPreviewTypes: closure_34, MediaKeyboardTarget: closure_35 } = DRAG_HANDLE);
({ jsx: closure_36, jsxs: closure_37, Fragment: closure_38 } = jsxProd);
let closure_39 = createCacheKey.createStyles((arg0, arg1) => {
  let BACKGROUND_BASE_LOW = arg0;
  let obj = { position: "relative", paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: closure_22 - closure_23, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(709).colors.BACKGROUND_BASE_LOW;
  }
  obj = { container: obj, inputDefault: { alignSelf: "stretch", marginLeft: 0, marginTop: 0 }, accessories: { position: "absolute", bottom: "100%", left: 0, right: 0 }, floatingContainer: BACKGROUND_BASE_LOW, floatingInputBox: null, floatingInputBoxPressed: tmp(709).colors.BORDER_SUBTLE, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null };
  obj = { borderTopWidth: 0, borderColor: "transparent", borderRadius: tmp(709).radii.none, backgroundColor: "transparent", paddingHorizontal: tmp(709).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj[3] = obj;
  obj[4] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj[5] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[6] = { shadowOpacity: 0, elevation: 0 };
  const obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[7] = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  const obj3 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  let num = -6;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj[8] = { flex: 1, justifyContent: "center", marginLeft: num };
  obj[9] = { marginTop: -arg1 / 2 };
  obj[10] = { overflow: "visible" };
  return obj;
});
let closure_40 = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  ({ screenIndex, threadCreationCallback, onJumpToPresent } = channel);
  importDefault = undefined;
  closure_2 = undefined;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let token;
  let sharedValue;
  let sharedValue1;
  let isCoachmarkVisible;
  let dismissCoachmark;
  closure_11 = undefined;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  closure_15 = undefined;
  let tmp2 = stateFromStores;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(stateFromStores[24]);
  const gradientValue = obj.useGradientValue(channel(stateFromStores[24]).GradientPercentage.END);
  obj1 = channel(stateFromStores[25]);
  token = obj1.useToken(importDefault(stateFromStores[22]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = channel(stateFromStores[25]);
  let result = (obj2.useToken(importDefault(stateFromStores[22]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj3 = channel(stateFromStores[25]);
  const token1 = obj3.useToken(importDefault(stateFromStores[22]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  let tmp8 = callback5(gradientValue, token1);
  let obj4 = channel(stateFromStores[25]);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = obj4.useToken(importDefault(stateFromStores[22]).colors.BACKGROUND_BASE_LOWER);
  }
  let tmpResult = tmp(tmp2[25]);
  const token3 = tmpResult.useToken(tmp4(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  tmpResult = tmp(tmp2[25]);
  const token4 = tmpResult.useToken(tmp4(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj8 = token;
  const token5 = channel(tmp2[25]).useToken(tmp4(tmp2[22]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  const tmpResult1 = channel(tmp2[25]);
  [floatingInputBoxPressed, c1] = editable(token.useState(false), 2);
  closure_2 = tmp14;
  let tmp13 = editable(token.useState(false), 2);
  let tmp15 = channel.isPrivate() && null == threadCreationCallback;
  const tmp16 = dismissCoachmark((channelId) => channelId.channelId === channel.id);
  const typingUserIdsForDisplay = channel(tmp2[26]).useTypingUserIdsForDisplay(channel.id, 1);
  const tmpResult2 = channel(tmp2[26]);
  const tmp18 = callback2(screenIndex);
  let result1 = channel(tmp2[26]).hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp18);
  const tmp20 = callback(screenIndex);
  let tmp21 = token1;
  if (tmp20) {
    tmp21 = token5;
  }
  let tmp22 = token4;
  if (tmp20) {
    tmp22 = token3;
  }
  const tmpResult3 = channel(tmp2[26]);
  const items = [closure_16];
  stateFromStores = channel(tmp2[27]).useStateFromStores(items, () => {
    let editingTextValue = null;
    if (!closure_2) {
      editingTextValue = closure_1_16.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult4 = channel(tmp2[27]);
  const items1 = [memo1];
  stateFromStores1 = channel(tmp2[27]).useStateFromStores(items1, () => {
    let pendingReply;
    if (!closure_2) {
      pendingReply = memo1.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult5 = channel(tmp2[27]);
  const items2 = [closure_18];
  let stateFromStores2 = channel(tmp2[27]).useStateFromStores(items2, () => {
    if (closure_2) {
      return false;
    } else {
      const uploads = closure_1_18.getUploads(channel.id, ref.ChannelMessage);
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
    memo = obj8.useMemo(() => unregisterViewTag.getDraft(channel.id, closure_2 ? closure_15.FirstThreadMessage : closure_15.ChannelMessage), items3);
  }
  const tmpResult6 = channel(tmp2[27]);
  const items4 = [closure_17];
  const items5 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = channel(tmp2[27]).useStateFromStoresObject(items4, () => {
    let obj = closure_1_17;
    let canResult1 = closure_1_17.can(closure_1_30.MENTION_EVERYONE, channel);
    const canResult = closure_1_17.can(closure_1_30.ATTACH_FILES, channel);
    const canResult2 = closure_1_17.can(closure_1_30.SEND_MESSAGES, channel);
    const canResult3 = closure_1_17.can(closure_1_30.SEND_VOICE_MESSAGES, channel);
    const tmp6 = closure_1_17.can(closure_1_30.CREATE_PUBLIC_THREADS, channel) || obj.can(closure_1_30.CREATE_PRIVATE_THREADS, channel);
    let isPrivateResult = obj2.isPrivate();
    const canResult4 = obj.can(closure_1_30.SEND_MESSAGES_IN_THREADS, channel);
    let tmp11 = canResult4;
    const isReadOnlyThread = channel(stateFromStores[28]).computeIsReadOnlyThread(obj2);
    if (!closure_2) {
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
  const analyticsLocations = tmp4(tmp2[29])().analyticsLocations;
  let tmp28 = tmp14;
  if (null == threadCreationCallback) {
    tmp28 = null != stateFromStores;
  }
  if (!tmp28) {
    tmp28 = !tmp(tmp2[28]).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult8 = tmp(tmp2[28]);
  }
  const tmpResult7 = channel(tmp2[27]);
  let canStartThread = channel(tmp2[28]).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp14;
  }
  const tmpResult9 = channel(tmp2[28]);
  const tmp32 = channel(tmp2[30]).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult10 = channel(tmp2[30]);
  sharedValue = channel(tmp2[31]).useSharedValue(token);
  const tmpResult11 = channel(tmp2[31]);
  sharedValue1 = channel(tmp2[31]).useSharedValue(token);
  const items6 = [sharedValue1, token, sharedValue];
  const effect = obj8.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items6);
  const tmp36 = importDefault(tmp2[32])();
  const tmp37 = registerViewTag((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp14;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(tmp2[33]).getIsAppLauncherEnabled(channel);
    const tmpResult13 = tmp(tmp2[33]);
  }
  const tmpResult12 = channel(tmp2[31]);
  const items7 = [isCoachmarkVisible];
  const stateFromStores3 = channel(tmp2[27]).useStateFromStores(items7, () => isCoachmarkVisible.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp14 };
  const tmpResult14 = channel(tmp2[27]);
  ({ placeholder, accessibilityLabel } = importDefault(tmp2[34])(obj));
  const tmp41 = importDefault(tmp2[34])(obj);
  class Ge {
    constructor() {
      obj = { minHeight: closure_8.get() };
      return obj;
    }
  }
  Ge.__closure = { textFieldHeight: sharedValue1 };
  Ge.__workletHash = 11048691841625;
  Ge.__initData = closure_40;
  const animatedStyle = channel(tmp2[31]).useAnimatedStyle(Ge);
  ref = obj8.useRef(null);
  const tmpResult15 = channel(tmp2[31]);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = channel(tmp2[35]).useRefreshChatInputCoachmark(obj);
  const tmpResult16 = channel(tmp2[35]);
  const canUseScheduledMessages = channel(tmp2[36]).useCanUseScheduledMessages();
  const tmpResult17 = channel(tmp2[36]);
  const items8 = [unregisterViewTag];
  const stateFromStores4 = channel(tmp2[27]).useStateFromStores(items8, () => unregisterViewTag.getDraft(channel.id, ref.ChannelMessage));
  const tmpResult18 = channel(tmp2[27]);
  obj1 = { channel, draftText: stateFromStores4, isEligible: null };
  let tmp47 = canUseScheduledMessages;
  if (canUseScheduledMessages) {
    tmp47 = editable;
  }
  if (tmp47) {
    tmp47 = result3;
  }
  if (tmp47) {
    tmp47 = null == refreshChatInputCoachmark;
  }
  obj1[2] = tmp47;
  const scheduledMessageDraftCoachmarkState = channel(tmp2[37]).useScheduledMessageDraftCoachmarkState(obj1);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  obj2 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue1, ref };
  const tmp49 = importDefault(tmp2[38])(obj2);
  closure_11 = tmp49;
  const items9 = [tmp49];
  const effect1 = obj8.useEffect(() => {
    const current = closure_11.chatInput.current;
    current.setText(closure_11.props.current.defaultValue);
  }, items9);
  const items10 = [tmp49, channel, stateFromStores, stateFromStores1];
  const effect2 = obj8.useEffect(() => {
    const current = closure_11.propsPrev.current;
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
      if (id !== channel(stateFromStores[39]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
  }, items10);
  const items11 = [tmp49];
  const effect3 = obj8.useEffect(() => {
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
    let ComponentDispatch = channel(stateFromStores[40]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(closure_1_28.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = channel(stateFromStores[40]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_2_28.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items11);
  const items12 = [tmp49, sharedValue];
  memo1 = obj8.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = callback(closure_1_3[41]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = closure_12.handleTextOrFocusChange(str, false);
        closure_11.state.current.focused = false;
        callback2(false);
        const current = closure_11.chatInputCover.current;
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
        closure_11.state.current.focused = true;
        callback2(true);
        closure_11.state.current.selectionStart = start;
        closure_11.state.current.selectionEnd = end;
        const result1 = closure_12.handleTextOrFocusChange(closure_11.state.current.text, true);
        const current = closure_11.chatInputAppCommandManager.current;
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
        closure_11.state.current.textFieldContentSize = height;
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_11.state.current.textFieldHeight;
          const result = textFieldHeight.set(callback(closure_1_3[43]).getChatInputHeightAnimationTiming(height, store.get()));
          const tmp2Result = callback(closure_1_3[43]);
        }
      },
      handleLayoutOfInputContainer(arg0) {
        const current = closure_11.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == closure_11.props.current.threadCreationCallback) {
            const current = closure_11.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_11.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_11.state.current.textFieldHeight;
            const result = textFieldHeight.set(callback(closure_1_3[43]).getChatInputHeightAnimationTiming(textFieldContentSize, store.get()));
            const tmpResult = callback(closure_1_3[43]);
          }
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        closure_1_19(closure_11.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (closure_11.state.current.focused) {
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
    closure_0 = stateFromStores1((arg0) => {
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
                  if (closure_1_11.state.current.focused) {
                    if (closure_1_11.props.current.canUpload) {
                      obj1 = lib(closure_2_3[44]);
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
                obj3[0] = closure_1_11.props.current.channel.id;
                const obj4 = { uri: null, originalUri: null, width: null, height: null, mimeType: null, platform: null, id: null };
                obj4[0] = lib;
                obj4[1] = lib;
                obj4[2] = styles.width;
                obj4[3] = styles.height;
                obj4[4] = c3;
                obj4[5] = lib(closure_2_3[46]).UploadPlatform.REACT_NATIVE;
                const obj7 = closure_2_1(closure_2_3[45]);
                obj4[6] = lib(closure_2_3[47]).v4();
                obj3[1] = obj4;
                obj3[2] = closure_2_15.ChannelMessage;
                obj7.addFile(obj3);
                const obj10 = lib(closure_2_3[47]);
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
        const result = callback(closure_1_3[48]).triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = callback(closure_1_3[48]);
        let obj = { type: null, channel_id: null, guild_id: null };
        obj[0] = closure_1_27.ADD_BUTTON;
        obj[1] = closure_11.props.current.channel.id;
        obj[2] = closure_11.props.current.channel.guild_id;
        closure_1_1(closure_1_3[49]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const obj22 = closure_1_1(closure_1_3[49]);
        const tmp48 = closure_11;
        const keyboardType = callback(closure_1_3[32]).getKeyboardType();
        if (keyboardType === callback(closure_1_3[50]).KeyboardTypes.APP_LAUNCHER) {
          obj = { type: null };
          obj[0] = tmp42(tmp43[50]).KeyboardTypes.APP_LAUNCHER;
          closure_12.handleToggleKeyboard(obj);
        } else {
          const keyboardType1 = tmp42(tmp43[32]).getKeyboardType();
          if (keyboardType1 === tmp42(tmp43[50]).KeyboardTypes.MEDIA) {
            const current = tmp48.chatInputActions.current;
            if (current != null) {
              current.focusPhotosButton();
            }
          }
          obj1 = { type: null, context: null };
          obj1[0] = tmp42(tmp43[50]).KeyboardTypes.MEDIA;
          let obj2 = { target: null };
          obj2[0] = closure_1_35.CHAT;
          obj1[1] = obj2;
          closure_12.handleToggleKeyboard(obj1);
          const tmp42Result = tmp42(tmp43[32]);
        }
        const obj24 = callback(closure_1_3[32]);
      } else {
        let tmp35 = current2;
        if (tmp.APPS === arg1) {
          const result1 = callback(closure_1_3[48]).triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj12 = callback(closure_1_3[48]);
          callback(closure_1_3[51]).trackWithMetadata(closure_1_25.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = callback(closure_1_3[51]);
          const obj3 = { type: null, channel_id: null, guild_id: null };
          obj3[0] = closure_1_27.APPS_BUTTON;
          obj3[1] = closure_11.props.current.channel.id;
          obj3[2] = closure_11.props.current.channel.guild_id;
          closure_1_1(closure_1_3[49]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj14 = closure_1_1(closure_1_3[49]);
          const tmp30 = closure_11;
          const result2 = closure_1_2(closure_1_3[52]).dismissNewActivityIndicator();
          const obj16 = closure_1_2(closure_1_3[52]);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = callback(closure_1_3[53]).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj4 = { type: null, context: null };
          obj4[0] = callback(closure_1_3[50]).KeyboardTypes.APP_LAUNCHER;
          let obj5 = { initialRouteName: null, initialSearchQuery: null };
          obj5[0] = closure_1_31.HOME;
          const obj17 = callback(closure_1_3[53]);
          const appDMApplication = callback(closure_1_3[54]).getAppDMApplication(tmp30.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj5[1] = name;
          obj4[1] = obj5;
          closure_12.handleToggleKeyboard(obj4);
          const tmp23Result = callback(closure_1_3[54]);
        } else if (tmp.ALL_PHOTOS === arg1) {
          const result4 = callback(closure_1_3[48]).triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj9 = callback(closure_1_3[48]);
          let obj6 = { channel: null, uploadLimit: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null, draftType: null };
          obj6[0] = closure_11.props.current.channel;
          obj6[1] = closure_1_29;
          obj6[2] = function onDismissKeyboard() {
            return callback(4340).dismissKeyboard();
          };
          obj6[3] = function onRestoreKeyboard() {
            return closure_12.handleToggleKeyboard({ type: closure_1_0(closure_1_3[50]).KeyboardTypes.SYSTEM });
          };
          obj6[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[55]).addImagesFromPicker(closure_11.props.current.channel.id, items, closure_1_0(closure_1_3[46]).UploadOrigin.IMAGE_PICKER);
          };
          obj6[5] = closure_1_15.ChannelMessage;
          callback(closure_1_3[55]).handleViewAllDialog(obj6);
          const obj10 = callback(closure_1_3[55]);
        } else if (tmp.CAMERA === arg1) {
          obj5 = callback(closure_1_3[48]);
          const result5 = obj5.triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj6 = callback(closure_1_3[55]);
          const obj7 = { channel: null, previewType: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null };
          obj7[0] = closure_11.props.current.channel;
          obj7[1] = closure_1_34.CAMERA_BUTTON;
          obj7[2] = function onDismissKeyboard() {
            return callback(4340).dismissKeyboard();
          };
          obj7[3] = function onRestoreKeyboard() {
            return closure_12.handleToggleKeyboard({ type: closure_1_0(closure_1_3[50]).KeyboardTypes.SYSTEM });
          };
          obj7[4] = function onSelectFiles(items) {
            closure_1_0(closure_1_3[55]).addImagesFromPicker(closure_11.props.current.channel.id, items, closure_1_0(closure_1_3[46]).UploadOrigin.IMAGE_PICKER);
          };
          obj6.handleCameraDialog(obj7);
        } else if (tmp.NITRO_GIFT === arg1) {
          obj = closure_1_1(closure_1_3[57]);
          const result6 = obj.markPotentialBadState();
          obj1 = callback(closure_1_3[48]);
          const result7 = obj1.triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = callback(closure_1_3[23]);
          if (obj2.isAndroid()) {
            let tmp5Result = tmp5(tmp3[56]);
            tmp5Result.dismissKeyboard();
          }
          tmp5Result = tmp5(tmp3[55]);
          tmp5Result.handleSelectGift(closure_11.props.current.analyticsLocations, closure_11.chatInput, tmp35);
        } else if (tmp.THREAD === arg1) {
          const result8 = callback(closure_1_3[48]).triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj28 = callback(closure_1_3[48]);
          callback(closure_1_3[55]).handleSelectThread(closure_11.props.current.channel, closure_11.chatInput);
          const obj29 = callback(closure_1_3[55]);
        }
      }
    };
    obj[10] = function handlePollsPress() {
      let obj = callback(closure_1_3[48]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: closure_1_27.POLLS, channel_id: closure_11.props.current.channel.id, guild_id: closure_11.props.current.channel.guild_id };
      closure_1_1(closure_1_3[49]).track(closure_1_25.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = closure_1_1(closure_1_3[49]);
      callback(closure_1_3[56]).dismissKeyboard();
      const obj4 = callback(closure_1_3[56]);
      obj = {
        channel: closure_11.props.current.channel,
        onCancel() {
          return closure_12.handleToggleKeyboard({ type: closure_1_0(closure_1_3[50]).KeyboardTypes.SYSTEM });
        }
      };
      callback(closure_1_3[58]).openCreatePollModal(obj);
    };
    obj[11] = function handleAttachPress() {
      let obj = callback(closure_1_3[48]);
      const result = obj.triggerHapticFeedback(callback(closure_1_3[48]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: closure_11.props.current.channel,
        uploadLimit: closure_1_29,
        onDismissKeyboard() {
          return callback(table[56]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_12.handleToggleKeyboard({ type: closure_1_0(closure_1_3[50]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          closure_1_0(closure_1_3[55]).addImagesFromPicker(props.props.current.channel.id, items, closure_1_0(closure_1_3[46]).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      callback(closure_1_3[55]).handleAttachFile(obj);
    };
    obj[12] = function handlePressExpression(context) {
      let obj = callback(closure_1_3[59]);
      const result = obj.initiateEmojiInteraction(closure_1_33.ChatInputExpressionPressed);
      obj = { type: callback(closure_1_3[50]).KeyboardTypes.EXPRESSION, context };
      closure_12.handleToggleKeyboard(obj);
    };
    obj[13] = function handlePressSend() {
      const current = closure_11.chatInput.current;
      current.handleSend();
    };
    obj[14] = function handleSelectionOrTextChange(nativeEvent) {
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      closure_11.state.current.editId = editId;
      closure_11.state.current.selectionStart = start;
      closure_11.state.current.selectionEnd = end;
      const result = closure_12.handleTextOrFocusChange(text, closure_11.state.current.focused);
      const current = closure_11.chatInputAppCommandManager.current;
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
      if (closure_11.state.current.editId !== editId) {
        const current4 = tmp.chatInput.current;
        current4.handleTextChanged(text);
        const current5 = tmp.chatInputCharCounter.current;
        if (current5 != null) {
          const result1 = current5.onMessageLengthChanged(text.length);
        }
        callback(closure_1_3[60]).hideContextMenu();
        const obj2 = callback(closure_1_3[60]);
      }
    };
    obj[15] = function handleTapAction(nativeEvent) {
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = closure_11.chatInput.current;
        current.blur();
        const obj = callback(closure_1_3[61]);
        const current2 = closure_11.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        let fn;
        if (closure_11.state.current.focused) {
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
          const maxMessageLength = callback(closure_1_3[63]).getMaxMessageLength();
          if (tmp16) {
            closure_1_1(closure_1_3[49]).track(closure_1_25.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = closure_1_1(closure_1_3[49]);
          }
          closure_11.state.current.textPrev = closure_11.state.current.text;
          closure_11.state.current.text = text;
        }
        if (closure_1_11.isOpen()) {
          closure_1_1(closure_1_3[62]).hideNativeMenu();
          const obj = closure_1_1(closure_1_3[62]);
        }
        const current2 = closure_11.chatInputActions.current;
        if (current2 != null) {
          current2.onDismissActions(focused);
        }
        const current3 = closure_11.chatInputRightActions.current;
        if (current3 != null) {
          current3.onDismissActions(focused);
        }
        const tmp8 = closure_11;
      }
      if (0 === text.length) {
        const current4 = closure_11.chatInputActions.current;
        if (current4 != null) {
          current4.onShowActions(focused);
        }
        const current = closure_11.chatInputRightActions.current;
        if (current != null) {
          current.onShowActions(focused);
        }
        const tmp21 = closure_11;
      }
    };
    obj[17] = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = closure_11.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (value != null) {
        value(nativeEvent.text);
      }
    };
    obj[18] = function handleToggleKeyboard(type) {
      if (closure_1_11.isOpen()) {
        closure_1_1(closure_1_3[62]).hideNativeMenu();
        const obj = closure_1_1(closure_1_3[62]);
      }
      if (type.type !== callback(closure_1_3[50]).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = closure_11.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = closure_11.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items12);
  const items13 = [null != threadCreationCallback, tmp49];
  callback = obj8.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!closure_2) {
        const current = closure_11.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items13);
  const tmp55 = importDefault(tmp2[42])({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp55.registerViewTag;
  unregisterViewTag = tmp55.unregisterViewTag;
  closure_15 = obj8.useRef(null);
  const items14 = [tmp49, registerViewTag, unregisterViewTag];
  const callback1 = obj8.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(tmp.current);
      tmp.current = null;
    }
    closure_11.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = sharedValue1(current);
      if (null != tmp5) {
        tmp.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items14);
  const items15 = [editable, tmp49];
  callback2 = obj8.useCallback(() => true, []);
  const callback3 = obj8.useCallback(() => {
    if (editable) {
      const current = closure_11.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items15);
  obj3 = { canUpload, channelId: channel.id, screenIndex };
  let tmp59Result = null;
  const tmpResult19 = channel(tmp2[37]);
  if (editable) {
    obj4 = { ref: null, channel: null, onPressAction: null, canStartThreads: null, isAppLauncherEnabled: null, keyboardType: null, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null, onContextMenuOpen: null };
    obj4[0] = tmp49.chatInputActions;
    obj4[1] = channel;
    obj4[2] = memo1.handlePressAction;
    obj4[3] = canStartThread;
    obj4[4] = isAppLauncherEnabled;
    obj4[5] = tmp36;
    let tmp63 = canUpload;
    let tmp4Result = tmp4(tmp2[65]);
    if (canUpload) {
      tmp63 = null == stateFromStores3;
    }
    if (!tmp63) {
      tmp63 = tmp32;
    }
    obj4[6] = !tmp63;
    obj4[7] = canUpload;
    let result2 = result3;
    if (!tmp14) {
      result2 = tmp(tmp2[66]).isPremiumGiftingSupported();
      const tmpResult20 = tmp(tmp2[66]);
    }
    obj4[8] = result2;
    obj4[9] = tmp32;
    ({ handlePollsPress: obj33[10], handleAttachPress: obj33[11] } = memo1);
    obj4[12] = ref;
    obj4[13] = function onContextMenuOpen() {
      if (isCoachmarkVisible) {
        dismissCoachmark(closure_1_32.TAKE_ACTION);
      }
    };
    tmp59Result = tmp59(tmp4Result, obj4);
  }
  let obj5 = { style: items16, children: null };
  items16 = [tmp8.inputDefault, animatedStyle];
  let obj6 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: 5 };
  tmp4Result = tmp4(tmp2[67]);
  obj6[1] = channel(tmp2[68]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj6[2] = editable;
  ({ handleFocus: obj36[3], handleBlur: obj36[4], handleChangeContentSize: obj36[5], handleMaxHeightChanged: obj36[6], handleSelectionOrTextChange: obj36[7], handleTextFlushed: obj36[8], handlePasteImage: obj36[9], handlePasteCommand: obj36[10], handleTapAction: obj36[11], handlePressSend: obj36[12] } = memo1);
  obj6[13] = placeholder;
  obj6[14] = callback1;
  obj6[15] = setNoExtractUI;
  obj6[16] = tmp36 !== channel(tmp2[50]).KeyboardTypes.MEDIA;
  const items17 = [callback3(tmp4Result, obj6), callback3(importDefault(tmp2[69]), { keyboardType: tmp36, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover })];
  obj5[1] = items17;
  let obj7 = { keyboardType: tmp36, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover };
  const tmp60 = callback3(importDefault(tmp2[64]), obj3);
  if (editable) {
    obj8 = { ref: null, canSendVoiceMessage: null, channel: null, defaultValue: null, hasPendingAttachments: null, hasPendingEdit: null, onSendMessage: null, requireTextContent: null };
    obj8[0] = tmp49.chatInputSendButton;
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
    tmp59Result = tmp59(tmp4(tmp2[70]), obj8);
    const tmp4Result1 = tmp4(tmp2[70]);
  } else {
    tmp59Result = null;
  }
  let obj9 = { collapsable: false, onLayout: callback, style: null, children: null };
  const items18 = [importDefault(tmp2[71])({ isCreatingThread: null != threadCreationCallback }), tmp8.overflowVisible, ];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp8.floatingScrimOverlap;
  }
  items18[2] = floatingScrimOverlap;
  obj9[2] = items18;
  let tmp59Result1 = !result1;
  if (!result1) {
    let obj10 = { gradientHeight: null, inline: false, scrimBase: null };
    obj10[0] = tmp21;
    obj10[2] = token2;
    tmp59Result1 = tmp59(tmp(tmp2[72]).ChatInputScrimGradient, obj10);
  }
  const items19 = [tmp59Result1, , , , , , , , , , , , , ];
  let tmp59Result2 = result1;
  if (result1) {
    let hex2rgbResult = tmp(tmp2[73]).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    const obj11 = { style: null, pointerEvents: "none" };
    let obj12 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
    obj12[5] = hex2rgbResult;
    obj11[0] = obj12;
    tmp59Result2 = tmp59(tmp70, obj11);
    const tmpResult21 = tmp(tmp2[73]);
  }
  items19[1] = tmp59Result2;
  items19[2] = callback3(channel(tmp2[74]).ChatInputAccessibilityDivider, {});
  let tmp59Result3 = null;
  if (tmp15) {
    let obj13 = { channel: null, hasInputText: null };
    obj13[0] = channel;
    let tmp76 = "" !== memo;
    if (!tmp76) {
      let current = tmp49.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp76 = "" !== text;
    }
    obj13[1] = tmp76;
    tmp59Result3 = tmp59(tmp4(tmp2[75]), obj13);
    const tmp4Result2 = tmp4(tmp2[75]);
  }
  items19[3] = tmp59Result3;
  let obj14 = { style: tmp8.accessories, children: null };
  let tmp59Result4 = result1;
  if (result1) {
    const obj15 = { gradientHeight: null, inline: true, scrimBase: null };
    obj15[0] = tmp22;
    obj15[2] = token2;
    tmp59Result4 = tmp59(tmp(tmp2[72]).ChatInputScrimGradient, obj15);
  }
  const items20 = [tmp59Result4, , ];
  let tmp59Result5 = null;
  if (null == threadCreationCallback) {
    let obj16 = { channel: null, screenIndex: null };
    obj16[0] = channel;
    obj16[1] = screenIndex;
    tmp59Result5 = tmp59(tmp4(tmp2[26]), obj16);
  }
  items20[1] = tmp59Result5;
  const tmp67 = callback4(importDefault(tmp2[31]).View, obj5);
  let tmp59Result6 = null;
  if (tmpResult22.isIOS()) {
    let obj17 = { channelId: null, screenIndex: null, onJumpToPresent: null };
    obj17[0] = channel.id;
    obj17[1] = screenIndex;
    obj17[2] = onJumpToPresent;
    tmp59Result6 = tmp59(tmp4(tmp2[76]), obj17);
  }
  items20[2] = tmp59Result6;
  obj14[1] = items20;
  items19[4] = callback4(sharedValue, obj14);
  let tmp59Result7 = null;
  if (isResourceChannel) {
    const obj18 = { channel: null };
    obj18[0] = channel;
    tmp59Result7 = tmp59(tmp4(tmp2[77]), obj18, channel.id);
  }
  items19[5] = tmp59Result7;
  items19[6] = callback3(channel(tmp2[78]).MemberActionsChatInputBannerGuardedOuter, { channel });
  items19[7] = callback3(channel(tmp2[79]).DoubleTapToReactChatInputBanner, { channel });
  let tmp59Result8 = null;
  if (tmp16) {
    const obj19 = { channelId: null };
    obj19[0] = channel.id;
    tmp59Result8 = tmp59(tmp4(tmp2[80]), obj19);
  }
  items19[8] = tmp59Result8;
  let tmp59Result9 = null;
  if (tmp36 !== channel(tmp2[50]).KeyboardTypes.EXPRESSION) {
    const obj20 = { ref: null, analyticsLocations: null, channel: null, canMentionEveryone: null, keyboardType: null, onChangeAutoCompleteVisibility: null, commandsDisabled: null, canOnlyUseTextCommands: null, chatInputRef: null, screenIndex: null };
    obj20[0] = tmp49.chatInputAutocomplete;
    obj20[1] = analyticsLocations;
    obj20[2] = channel;
    obj20[3] = canMentionEveryone;
    obj20[4] = tmp36;
    obj20[5] = memo1.handleChangeAutoCompleteVisibility;
    obj20[6] = tmp28;
    obj20[7] = tmp29;
    obj20[8] = tmp49.chatInput;
    obj20[9] = screenIndex;
    tmp59Result9 = tmp59(tmp4(tmp2[81]), obj20);
  }
  items19[9] = tmp59Result9;
  items19[10] = callback3(importDefault(tmp2[82]), { ref: tmp49.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp49.chatInput, chatInputStateRef: tmp49.state, commandsDisabled: tmp28 });
  let obj22 = { style: items21, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  items21 = [, ];
  ({ container: arr22[0], floatingContainer: arr22[1] } = tmp8);
  const items22 = [tmp60, , ];
  let obj21 = { ref: tmp49.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp49.chatInput, chatInputStateRef: tmp49.state, commandsDisabled: tmp28 };
  tmpResult22 = channel(tmp2[23]);
  items22[1] = callback3(importDefault(tmp2[84]), { channel });
  const items23 = [tmp8.floatingInputBox, , ];
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp8.floatingInputBoxPressed;
  }
  items23[1] = floatingInputBoxPressed;
  let floatingInputBoxTyping = result1;
  if (result1) {
    floatingInputBoxTyping = tmp8.floatingInputBoxTyping;
  }
  const obj23 = { style: items23, onStartShouldSetResponder: callback2, onResponderRelease: callback3, collapsable: false, accessibilityElementsHidden: tmp37, importantForAccessibility: null, children: null };
  items23[2] = floatingInputBoxTyping;
  let str2;
  if (tmp37) {
    str2 = "no-hide-descendants";
  }
  obj23[5] = str2;
  const items24 = [callback3(importDefault(tmp2[85]), { channel, chatInputRef: tmp49.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 }), ];
  const obj25 = { style: tmp8.floatingMainContents, children: null };
  let tmp59Result10 = null;
  if (null != tmp59Result) {
    const obj26 = { style: null, children: null };
    const obj27 = { paddingBottom: null, paddingLeft: null };
    obj27[0] = result;
    obj27[1] = result;
    obj26[0] = obj27;
    obj26[1] = tmp59Result;
    tmp59Result10 = tmp59(tmp70, obj26);
  }
  const items25 = [tmp59Result10, , , ];
  let obj28 = { style: items26, children: null };
  items26 = [tmp8.inputFlat, { paddingBottom: result }];
  const items27 = [tmp67, callback3(importDefault(tmp2[86]), { analyticsLocations, ref: tmp49.chatInputCharCounter })];
  obj28[1] = items27;
  items25[1] = callback4(sharedValue, obj28);
  let tmp59Result11 = null;
  if (editable) {
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: null };
    obj31[0] = result;
    obj30[0] = obj31;
    const obj32 = { ref: null, channel: null, keyboardType: null, shouldShowGiftButton: null, onPressAction: null, onPressExpression: null };
    obj32[0] = tmp49.chatInputRightActions;
    obj32[1] = channel;
    obj32[2] = tmp36;
    if (!tmp14) {
      result3 = tmp(tmp2[66]).isPremiumGiftingSupported();
      const tmpResult23 = tmp(tmp2[66]);
    }
    obj32[3] = result3;
    ({ handlePressAction: obj64[4], handlePressExpression: obj64[5] } = memo1);
    obj30[1] = tmp59(tmp4(tmp2[87]), obj32);
    tmp59Result11 = tmp59(tmp70, obj30);
    const tmp4Result4 = tmp4(tmp2[87]);
  }
  const obj33 = { children: null };
  items25[2] = tmp59Result11;
  items25[3] = tmp59Result;
  obj25[1] = items25;
  items24[1] = callback4(sharedValue, obj25);
  obj23[6] = items24;
  items22[2] = callback4(sharedValue, obj23);
  obj33[0] = items22;
  obj22[2] = callback4(closure_38, obj33);
  items19[11] = callback3(importDefault(tmp2[83]), obj22);
  let tmp59Result12 = null;
  if (null != refreshChatInputCoachmark) {
    const obj34 = { buttonRef: null };
    obj34[0] = ref;
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp59Result12 = tmp59(tmp4(tmp2[35]), obj34);
    const tmp4Result5 = tmp4(tmp2[35]);
  }
  items19[12] = tmp59Result12;
  items19[13] = callback3(importDefault(tmp2[88]), { buttonRef: ref, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
  obj9[3] = items19;
  const tmp65Result = callback4(sharedValue, obj9);
  let tmp59Result13 = tmp65Result;
  if (null == threadCreationCallback) {
    const obj35 = { channel: null, screenIndex: null, canSendMessages: null, canCreateThreads: null, onJumpToPresent: null, isReadonly: null, children: null };
    obj35[0] = channel;
    obj35[1] = screenIndex;
    obj35[2] = editable;
    obj35[3] = canCreateThreads;
    obj35[4] = onJumpToPresent;
    obj35[5] = !editable;
    obj35[6] = tmp65Result;
    tmp59Result13 = tmp59(tmp4(tmp2[89]), obj35);
  }
  return tmp59Result13;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;