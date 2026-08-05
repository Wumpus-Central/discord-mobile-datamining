// discord_app/modules/chat_input/native/ChatInput.tsx
import INITIAL_STATE from "INITIAL_STATE";
import getChatInputMaxHeight from "getChatInputMaxHeight";
import importAllResult from "jsxProd";
import { View } from "set";
import handleInit from "handleInit";
import closure_9 from "INITIAL_STATE";
import initialize from "initialize";
import getState from "getState";
import { useVoiceMessagesUIStore } from "VoiceMessageRecordingStatus";
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import closure_15 from "initialize";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import map from "map";
import updateChatInputContainerHeight from "updateChatInputContainerHeight";
import TextAreaCta from "TextAreaCta";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { EmojiInteractionPoint } from "set";
import DRAG_HANDLE from "DRAG_HANDLE";
import jsxProd from "Themes";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
const require = arg1;
({ updateShowingAutoComplete: closure_18, useChatIsAtBottom: closure_19, useChatShowingAutoComplete: closure_20 } = updateChatInputContainerHeight);
({ CHAT_INPUT_HORIZONTAL_PADDING: closure_21, CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_22, ChatInputActionType: closure_23 } = TextAreaCta);
({ AnalyticEvents: closure_24, ChannelTypesSets: closure_25, ChatInputComponentViewedTypes: closure_26, ComponentActions: closure_27, MAX_UPLOAD_COUNT: closure_28, Permissions: closure_29 } = ME);
({ InAppCameraUsedCameraPreviewTypes: closure_32, MediaKeyboardTarget: closure_33 } = DRAG_HANDLE);
({ jsx: closure_34, jsxs: closure_35, Fragment: closure_36 } = jsxProd);
let closure_37 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let obj = { position: "relative", paddingVertical: Themes.space.PX_8, paddingHorizontal: closure_21 - closure_22, backgroundColor: null, borderTopWidth: 1, borderColor: null };
  let BACKGROUND_BASE_LOW = arg0;
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = tmp(712).colors.BACKGROUND_BASE_LOW;
  }
  obj = { container: null, containerInner: null, inputDefault: null, input: null, rightAccessory: null, refreshButtonAlignment: null, accessories: null, floatingContainer: null, floatingInputBox: null, floatingInputBoxPressed: null, floatingInputBoxTyping: null, floatingMainContents: null, inputFlat: null, floatingScrimOverlap: null, overflowVisible: null };
  obj[3] = BACKGROUND_BASE_LOW;
  obj[5] = Themes.colors.BORDER_SUBTLE;
  obj[0] = obj;
  obj[1] = { flexDirection: "row", alignItems: "flex-end" };
  obj = {};
  const merged = Object.assign(arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 });
  obj[2] = obj;
  const obj1 = { flexDirection: "row", alignItems: "stretch", borderRadius: Themes.modules.mobile.CHAT_INPUT_BORDER_RADIUS, paddingHorizontal: Themes.modules.mobile.CHAT_INPUT_PILL_PADDING, marginHorizontal: Themes.modules.mobile.CHAT_INPUT_PILL_MARGIN_HORIZONTAL, overflow: "hidden", flex: 1, borderWidth: Themes.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: Themes.colors.INPUT_BORDER_DEFAULT, backgroundColor: null };
  if (null != arg0) {
    let CHAT_INPUT_BACKGROUND = tmp(712).colors.CARD_SECONDARY_BG;
  } else {
    CHAT_INPUT_BACKGROUND = tmp(712).colors.CHAT_INPUT_BACKGROUND;
  }
  obj1[9] = CHAT_INPUT_BACKGROUND;
  obj[3] = obj1;
  obj[4] = { flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingVertical: Themes.modules.mobile.CHAT_INPUT_PILL_PADDING };
  const obj2 = { flexDirection: "column", justifyContent: "flex-end", alignItems: "center", paddingVertical: Themes.modules.mobile.CHAT_INPUT_PILL_PADDING };
  const tmp3 = arg1 ? { alignSelf: "stretch", marginLeft: 0, marginTop: 0 } : { flex: 1, marginLeft: 6 };
  obj[5] = { marginBottom: Themes.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj[6] = { position: "absolute", bottom: "100%", left: 0, right: 0 };
  const obj3 = { marginBottom: Themes.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH };
  obj[7] = { borderTopWidth: 0, borderColor: "transparent", borderRadius: Themes.radii.none, backgroundColor: "transparent", paddingHorizontal: Themes.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  const obj4 = { borderTopWidth: 0, borderColor: "transparent", borderRadius: Themes.radii.none, backgroundColor: "transparent", paddingHorizontal: Themes.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 0, overflow: "visible" };
  obj[8] = { backgroundColor: Themes.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: Themes.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: Themes.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: Themes.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  const obj5 = { backgroundColor: Themes.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: Themes.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: Themes.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: Themes.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, flexDirection: "column", overflow: "hidden" };
  obj[9] = { backgroundColor: Themes.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: Themes.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[10] = { shadowOpacity: 0, elevation: 0 };
  const obj6 = { backgroundColor: Themes.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: Themes.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
  obj[11] = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  const obj7 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: Themes.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
  let num = -6;
  if (obj11.isAndroid()) {
    num = -5;
  }
  obj[12] = { flex: 1, justifyContent: "center", marginLeft: num };
  obj[13] = { marginTop: -arg2 / 2 };
  obj[14] = { overflow: "visible" };
  return obj;
});
let closure_38 = { code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}" };
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  let accessibilityLabel;
  let c4;
  let canCreateThreads;
  let canMentionEveryone;
  let canSendVoiceMessage;
  let canUpload;
  let chatInputFloating;
  let editable;
  let enabled;
  let floatingInputBoxPressed;
  let isResourceChannel;
  let onJumpToPresent;
  let placeholder;
  let screenIndex;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let threadCreationCallback;
  channel = channel.channel;
  ({ screenIndex, threadCreationCallback, onJumpToPresent } = channel);
  chatInputFloating = undefined;
  let token;
  ref = undefined;
  c4 = undefined;
  let callback;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let callback2;
  let sharedValue;
  let c11;
  let memo1;
  let tmp2 = ref;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(ref[23]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInput" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  let obj1 = channel(ref[24]);
  const gradientValue = obj1.useGradientValue(channel(ref[24]).GradientPercentage.END);
  let obj2 = channel(ref[25]);
  token = obj2.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = channel(ref[25]);
  let result = (obj3.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  let obj4 = channel(ref[25]);
  const token1 = obj4.useToken(chatInputFloating(ref[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp9 = callback7(gradientValue, chatInputFloating, token1);
  let obj5 = channel(ref[25]);
  let token2 = gradientValue;
  if (gradientValue == null) {
    token2 = obj5.useToken(chatInputFloating(ref[21]).colors.BACKGROUND_BASE_LOWER);
  }
  let tmpResult = tmp(tmp2[25]);
  const token3 = tmpResult.useToken(tmp5(tmp2[21]).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  tmpResult = tmp(tmp2[25]);
  const token4 = tmpResult.useToken(tmp5(tmp2[21]).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = stateFromStores;
  const token5 = channel(tmp2[25]).useToken(tmp5(tmp2[21]).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  ref = stateFromStores.useRef(chatInputFloating);
  ref.current = chatInputFloating;
  const tmpResult1 = channel(tmp2[25]);
  [floatingInputBoxPressed, c4] = callback(stateFromStores.useState(false), 2);
  if (chatInputFloating) {
    let tmp5Result = tmp5(tmp2[26]);
  } else {
    tmp5Result = stateFromStores1;
  }
  callback = tmp17;
  let tmp15 = callback(stateFromStores.useState(false), 2);
  const tmp18 = channel.isPrivate() && null == threadCreationCallback;
  const tmp19 = callback2((channelId) => channelId.channelId === channel.id);
  const typingUserIds = channel(tmp2[27]).useTypingUserIds(channel.id, 1);
  let floatingInputBoxTyping = chatInputFloating;
  const tmpResult2 = channel(tmp2[27]);
  if (chatInputFloating) {
    floatingInputBoxTyping = channel.rateLimitPerUser > 0 || typingUserIds.length > 0;
    let tmp21 = channel.rateLimitPerUser > 0 || typingUserIds.length > 0;
  }
  if (floatingInputBoxTyping) {
    floatingInputBoxTyping = !tmp20;
  }
  const tmp22 = callback3(screenIndex);
  let tmp23 = token1;
  if (tmp22) {
    tmp23 = token5;
  }
  let tmp24 = token4;
  if (tmp22) {
    tmp24 = token3;
  }
  tmp20 = callback4(screenIndex);
  const items = [closure_15];
  stateFromStores = channel(tmp2[28]).useStateFromStores(items, () => {
    let editingTextValue = null;
    if (!c5) {
      editingTextValue = outer1_15.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const tmpResult3 = channel(tmp2[28]);
  const items1 = [c11];
  stateFromStores1 = channel(tmp2[28]).useStateFromStores(items1, () => {
    let pendingReply;
    if (!c5) {
      pendingReply = _undefined2.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const tmpResult4 = channel(tmp2[28]);
  const items2 = [map];
  let stateFromStores2 = channel(tmp2[28]).useStateFromStores(items2, () => {
    if (c5) {
      return false;
    } else {
      const uploads = outer1_17.getUploads(channel.id, outer1_14.ChannelMessage);
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
    memo = obj9.useMemo(() => outer1_13.getDraft(channel.id, c5 ? outer1_14.FirstThreadMessage : outer1_14.ChannelMessage), items3);
  }
  const tmpResult5 = channel(tmp2[28]);
  const items4 = [getUncachedChannelPermissions];
  const items5 = [channel, null != threadCreationCallback];
  const stateFromStoresObject = channel(tmp2[28]).useStateFromStoresObject(items4, () => {
    let obj = outer1_16;
    let canResult1 = outer1_16.can(outer1_29.MENTION_EVERYONE, channel);
    const canResult = outer1_16.can(outer1_29.ATTACH_FILES, channel);
    const canResult2 = outer1_16.can(outer1_29.SEND_MESSAGES, channel);
    const canResult3 = outer1_16.can(outer1_29.SEND_VOICE_MESSAGES, channel);
    const tmp6 = outer1_16.can(outer1_29.CREATE_PUBLIC_THREADS, channel) || obj.can(outer1_29.CREATE_PRIVATE_THREADS, channel);
    let isPrivateResult = obj2.isPrivate();
    const canResult4 = obj.can(outer1_29.SEND_MESSAGES_IN_THREADS, channel);
    let tmp11 = canResult4;
    const isReadOnlyThread = channel(ref[29]).computeIsReadOnlyThread(obj2);
    if (!c5) {
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
  const analyticsLocations = tmp5(tmp2[30])().analyticsLocations;
  let tmp30 = tmp17;
  if (null == threadCreationCallback) {
    tmp30 = null != stateFromStores;
  }
  if (!tmp30) {
    tmp30 = !tmp(tmp2[29]).getIsActiveChannelOrUnarchivableThread(channel);
    const tmpResult7 = tmp(tmp2[29]);
  }
  const tmpResult6 = channel(tmp2[28]);
  let canStartThread = channel(tmp2[29]).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp17;
  }
  const tmpResult8 = channel(tmp2[29]);
  const tmp34 = channel(tmp2[31]).useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult9 = channel(tmp2[31]);
  const token6 = channel(tmp2[25]).useToken(tmp5(tmp2[21]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  if (enabled) {
    let diff = token - 2 * token6;
  } else {
    diff = tmp(tmp2[32]).getChatInputMinHeight();
    const tmpResult11 = tmp(tmp2[32]);
  }
  callback2 = diff;
  const tmpResult10 = channel(tmp2[25]);
  let tmp37 = diff;
  if (chatInputFloating) {
    tmp37 = token;
  }
  sharedValue = channel(tmp2[33]).useSharedValue(tmp37);
  const items6 = [chatInputFloating, token, diff, sharedValue];
  const effect = obj9.useEffect(() => {
    const result = sharedValue.set(chatInputFloating ? token : c9);
  }, items6);
  const tmp40 = chatInputFloating(tmp2[34])();
  const tmp41 = memo1((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result2 = !tmp17;
  let isAppLauncherEnabled = result2;
  if (null == threadCreationCallback) {
    isAppLauncherEnabled = tmp(tmp2[35]).getIsAppLauncherEnabled(channel);
    const tmpResult13 = tmp(tmp2[35]);
  }
  const tmpResult12 = channel(tmp2[33]);
  const items7 = [editable];
  const stateFromStores3 = channel(tmp2[28]).useStateFromStores(items7, () => editable.getActiveCommand(channel.id));
  obj = { channel, isReadonly: !editable, isCreatingThread: tmp17 };
  const tmpResult14 = channel(tmp2[28]);
  let num2 = 8;
  ({ placeholder, accessibilityLabel } = chatInputFloating(tmp2[36])(obj));
  if (enabled) {
    num2 = 5;
  }
  const tmp45 = chatInputFloating(tmp2[36])(obj);
  class Ve {
    constructor() {
      obj = { minHeight: c10.get() };
      return obj;
    }
  }
  Ve.__closure = { textFieldHeight: sharedValue };
  Ve.__workletHash = 11048691841625;
  Ve.__initData = closure_38;
  const animatedStyle = channel(tmp2[33]).useAnimatedStyle(Ve);
  const ref1 = obj9.useRef(null);
  const tmpResult15 = channel(tmp2[33]);
  obj = { disabled: !editable };
  const refreshChatInputCoachmark = channel(tmp2[37]).useRefreshChatInputCoachmark(obj);
  obj1 = { chatInputProps: { analyticsLocations, canUpload, channel, defaultValue: memo, hasAttachmentsToUpload: stateFromStores2, pendingEdit: stateFromStores, pendingReply: stateFromStores1, screenIndex, secondaryTextFieldRef, threadCreationCallback }, chatInputTextFieldHeight: sharedValue, ref };
  const tmp49 = chatInputFloating(tmp2[38])(obj1);
  c11 = tmp49;
  const items8 = [tmp49];
  const effect1 = obj9.useEffect(() => {
    const current = _undefined2.chatInput.current;
    current.setText(_undefined2.props.current.defaultValue);
  }, items8);
  const items9 = [tmp49, channel, stateFromStores, stateFromStores1];
  const effect2 = obj9.useEffect(() => {
    const current = _undefined2.propsPrev.current;
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
      if (id !== channel(ref[39]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
    let ComponentDispatch = channel(ref[40]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_27.TEXTAREA_FOCUS, handleOpenKeyboard);
    return () => {
      const ComponentDispatch = channel(ref[40]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_27.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items10);
  const items11 = [tmp49];
  memo1 = obj9.useMemo(() => {
    let obj = {
      handleBlur(nativeEvent) {
        let obj = callback(outer1_3[41]);
        const result = obj.setIsAnyChatInputFocused(false);
        const result1 = closure_12.handleTextOrFocusChange(str, false);
        getState.state.current.focused = false;
        callback2(false);
        const current = getState.chatInputCover.current;
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
        let end;
        let start;
        ({ start, end } = nativeEvent.nativeEvent);
        let obj = callback(outer1_3[41]);
        const result = obj.setIsAnyChatInputFocused(true);
        getState.state.current.focused = true;
        callback2(true);
        getState.state.current.selectionStart = start;
        getState.state.current.selectionEnd = end;
        const result1 = closure_12.handleTextOrFocusChange(getState.state.current.text, true);
        const current = getState.chatInputAppCommandManager.current;
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
        getState.state.current.textFieldContentSize = height;
        const textFieldHeight = getState.state.current.textFieldHeight;
        const result = textFieldHeight.set(callback(outer1_3[32]).getChatInputHeightAnimationTiming(height));
      },
      handleLayoutOfInputContainer(arg0) {
        const current = getState.chatInputAutocomplete.current;
        if (current != null) {
          current.setChatInputHeight(tmp.layout.height);
        }
      },
      handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        const height = layout.height;
        if (tmp) {
          if (null == getState.props.current.threadCreationCallback) {
            const current = getState.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        const textFieldContentSize = getState.state.current.textFieldContentSize;
        if (0 !== textFieldContentSize) {
          const textFieldHeight = getState.state.current.textFieldHeight;
          const result = textFieldHeight.set(callback(outer1_3[32]).getChatInputHeightAnimationTiming(textFieldContentSize));
          const obj = callback(outer1_3[32]);
        }
      },
      handleChangeAutoCompleteVisibility(arg0) {
        outer1_18(getState.props.current.screenIndex, arg0);
      },
      handlePasteCommand(arg0) {
        if (getState.state.current.focused) {
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
    let closure_0 = _undefined((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        let c0;
        let c1;
        let c2;
        let c3;
        c1 = tmp2;
        ({ url: c0, width: c1, height: c2, type: c3 } = lib.nativeEvent);
        yield "PX_8";
        if (1 === tmp5) {
          if (arg0 === 1) {
            let styles = 3;
            throw arg1;
          } else if (arg0 === 2) {
            styles = 3;
            let obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            if (outer1_11.state.current.focused) {
              if (outer1_11.props.current.canUpload) {
                obj1 = lib(outer2_3[42]);
                c3 = 2;
                styles = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.getImageDimensionsIfMissing(lib, outer1_1, outer1_2);
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
          obj3[0] = outer1_11.props.current.channel.id;
          const obj4 = { uri: null, originalUri: null, width: null, height: null, mimeType: null, platform: null, id: null };
          obj4[0] = lib;
          obj4[1] = lib;
          obj4[2] = styles.width;
          obj4[3] = styles.height;
          obj4[4] = c3;
          obj4[5] = lib(outer2_3[44]).UploadPlatform.REACT_NATIVE;
          const obj7 = outer2_1(outer2_3[43]);
          obj4[6] = lib(outer2_3[45]).v4();
          obj3[1] = obj4;
          obj3[2] = outer2_14.ChannelMessage;
          obj7.addFile(obj3);
          const obj10 = lib(outer2_3[45]);
        }
        return arg1;
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
      if (outer1_23.PHOTOS === arg1) {
        const result = callback(outer1_3[46]).triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj21 = callback(outer1_3[46]);
        let obj = { type: null, channel_id: null, guild_id: null };
        obj[0] = outer1_26.ADD_BUTTON;
        obj[1] = getState.props.current.channel.id;
        obj[2] = getState.props.current.channel.guild_id;
        outer1_1(outer1_3[47]).track(outer1_24.CHAT_INPUT_COMPONENT_VIEWED, obj);
        if (ref.current) {
          let tmp42Result = tmp42(tmp43[34]);
          const keyboardType = tmp42Result.getKeyboardType();
          if (keyboardType === tmp42(tmp43[48]).KeyboardTypes.APP_LAUNCHER) {
            obj = { type: null };
            obj[0] = tmp42(tmp43[48]).KeyboardTypes.APP_LAUNCHER;
            closure_12.handleToggleKeyboard(obj);
          }
        }
        tmp42Result = tmp42(tmp43[34]);
        const keyboardType1 = tmp42Result.getKeyboardType();
        if (keyboardType1 === callback(outer1_3[48]).KeyboardTypes.MEDIA) {
          const current = tmp48.chatInputActions.current;
          if (current != null) {
            current.focusPhotosButton();
          }
        }
        let obj1 = { type: null, context: null };
        obj1[0] = callback(outer1_3[48]).KeyboardTypes.MEDIA;
        let obj2 = { target: null };
        obj2[0] = outer1_33.CHAT;
        obj1[1] = obj2;
        closure_12.handleToggleKeyboard(obj1);
        const obj22 = outer1_1(outer1_3[47]);
        tmp48 = getState;
      } else {
        let tmp35 = current2;
        if (tmp.APPS === arg1) {
          const result1 = callback(outer1_3[46]).triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj12 = callback(outer1_3[46]);
          callback(outer1_3[49]).trackWithMetadata(outer1_24.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
          const obj13 = callback(outer1_3[49]);
          const obj3 = { type: null, channel_id: null, guild_id: null };
          obj3[0] = outer1_26.APPS_BUTTON;
          obj3[1] = getState.props.current.channel.id;
          obj3[2] = getState.props.current.channel.guild_id;
          outer1_1(outer1_3[47]).track(outer1_24.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          const obj14 = outer1_1(outer1_3[47]);
          const tmp30 = getState;
          const result2 = outer1_2(outer1_3[50]).dismissNewActivityIndicator();
          const obj16 = outer1_2(outer1_3[50]);
          if (tmp35 == null) {
            tmp35 = null;
          }
          const result3 = callback(outer1_3[51]).setAppLauncherA11yFocusReturnRef(tmp35);
          const obj4 = { type: null, context: null };
          obj4[0] = callback(outer1_3[48]).KeyboardTypes.APP_LAUNCHER;
          let obj5 = { initialRouteName: null, initialSearchQuery: null };
          obj5[0] = outer1_30.HOME;
          const obj17 = callback(outer1_3[51]);
          const appDMApplication = callback(outer1_3[52]).getAppDMApplication(tmp30.props.current.channel);
          let name;
          if (appDMApplication != null) {
            name = appDMApplication.name;
          }
          obj5[1] = name;
          obj4[1] = obj5;
          closure_12.handleToggleKeyboard(obj4);
          const tmp23Result = callback(outer1_3[52]);
        } else if (tmp.ALL_PHOTOS === arg1) {
          const result4 = callback(outer1_3[46]).triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj9 = callback(outer1_3[46]);
          let obj6 = { channel: null, uploadLimit: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null, draftType: null };
          obj6[0] = getState.props.current.channel;
          obj6[1] = outer1_28;
          obj6[2] = function onDismissKeyboard() {
            return callback(4114).dismissKeyboard();
          };
          obj6[3] = function onRestoreKeyboard() {
            return closure_12.handleToggleKeyboard({ type: outer1_0(outer1_3[48]).KeyboardTypes.SYSTEM });
          };
          obj6[4] = function onSelectFiles(items) {
            outer1_0(outer1_3[53]).addImagesFromPicker(getState.props.current.channel.id, items, outer1_0(outer1_3[44]).UploadOrigin.IMAGE_PICKER);
          };
          obj6[5] = outer1_14.ChannelMessage;
          callback(outer1_3[53]).handleViewAllDialog(obj6);
          const obj10 = callback(outer1_3[53]);
        } else if (tmp.CAMERA === arg1) {
          obj5 = callback(outer1_3[46]);
          const result5 = obj5.triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj6 = callback(outer1_3[53]);
          const obj7 = { channel: null, previewType: null, onDismissKeyboard: null, onRestoreKeyboard: null, onSelectFiles: null };
          obj7[0] = getState.props.current.channel;
          obj7[1] = outer1_32.CAMERA_BUTTON;
          obj7[2] = function onDismissKeyboard() {
            return callback(4114).dismissKeyboard();
          };
          obj7[3] = function onRestoreKeyboard() {
            return closure_12.handleToggleKeyboard({ type: outer1_0(outer1_3[48]).KeyboardTypes.SYSTEM });
          };
          obj7[4] = function onSelectFiles(items) {
            outer1_0(outer1_3[53]).addImagesFromPicker(getState.props.current.channel.id, items, outer1_0(outer1_3[44]).UploadOrigin.IMAGE_PICKER);
          };
          obj6.handleCameraDialog(obj7);
        } else if (tmp.NITRO_GIFT === arg1) {
          obj = outer1_1(outer1_3[55]);
          const result6 = obj.markPotentialBadState();
          obj1 = callback(outer1_3[46]);
          const result7 = obj1.triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
          obj2 = callback(outer1_3[22]);
          if (obj2.isAndroid()) {
            let tmp5Result = tmp5(tmp3[54]);
            tmp5Result.dismissKeyboard();
          }
          tmp5Result = tmp5(tmp3[53]);
          tmp5Result.handleSelectGift(getState.props.current.analyticsLocations, getState.chatInput, tmp35);
        } else if (tmp.THREAD === arg1) {
          const result8 = callback(outer1_3[46]).triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj29 = callback(outer1_3[46]);
          callback(outer1_3[53]).handleSelectThread(getState.props.current.channel, getState.chatInput);
          const obj30 = callback(outer1_3[53]);
        }
      }
    };
    obj[10] = function handlePollsPress() {
      let obj = callback(outer1_3[46]);
      const result = obj.triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = { type: outer1_26.POLLS, channel_id: getState.props.current.channel.id, guild_id: getState.props.current.channel.guild_id };
      outer1_1(outer1_3[47]).track(outer1_24.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj2 = outer1_1(outer1_3[47]);
      callback(outer1_3[54]).dismissKeyboard();
      const obj4 = callback(outer1_3[54]);
      obj = {
        channel: getState.props.current.channel,
        onCancel() {
          return closure_12.handleToggleKeyboard({ type: outer1_0(outer1_3[48]).KeyboardTypes.SYSTEM });
        }
      };
      callback(outer1_3[56]).openCreatePollModal(obj);
    };
    obj[11] = function handleAttachPress() {
      let obj = callback(outer1_3[46]);
      const result = obj.triggerHapticFeedback(callback(outer1_3[46]).HapticFeedbackTypes.IMPACT_LIGHT);
      obj = {
        channel: getState.props.current.channel,
        uploadLimit: outer1_28,
        onDismissKeyboard() {
          return callback(table[54]).dismissKeyboard();
        },
        onRestoreKeyboard() {
          return closure_12.handleToggleKeyboard({ type: outer1_0(outer1_3[48]).KeyboardTypes.SYSTEM });
        },
        onSelectFiles(items) {
          outer1_0(outer1_3[53]).addImagesFromPicker(props.props.current.channel.id, items, outer1_0(outer1_3[44]).UploadOrigin.FILE_ATTACHMENT);
        }
      };
      callback(outer1_3[53]).handleAttachFile(obj);
    };
    obj[12] = function handlePressExpression(context) {
      let obj = callback(outer1_3[57]);
      const result = obj.initiateEmojiInteraction(outer1_31.ChatInputExpressionPressed);
      obj = { type: callback(outer1_3[48]).KeyboardTypes.EXPRESSION, context };
      closure_12.handleToggleKeyboard(obj);
    };
    obj[13] = function handlePressSend() {
      const current = getState.chatInput.current;
      current.handleSend();
    };
    obj[14] = function handleSelectionOrTextChange(nativeEvent) {
      let editId;
      let end;
      let start;
      let text;
      ({ start, end, text, editId } = nativeEvent.nativeEvent);
      getState.state.current.editId = editId;
      getState.state.current.selectionStart = start;
      getState.state.current.selectionEnd = end;
      const result = closure_12.handleTextOrFocusChange(text, getState.state.current.focused);
      const current = getState.chatInputAppCommandManager.current;
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
      if (getState.state.current.editId !== editId) {
        const current4 = tmp.chatInput.current;
        current4.handleTextChanged(text);
        const current5 = tmp.chatInputCharCounter.current;
        if (current5 != null) {
          const result1 = current5.onMessageLengthChanged(text.length);
        }
        callback(outer1_3[58]).hideContextMenu();
        const obj2 = callback(outer1_3[58]);
      }
    };
    obj[15] = function handleTapAction(nativeEvent) {
      let channelId;
      let optionName;
      const tapAction = nativeEvent.nativeEvent.tapAction;
      if ("tapAttachment" === tapAction.action) {
        let current = getState.chatInput.current;
        current.blur();
        const obj = callback(outer1_3[59]);
        const current2 = getState.chatInput.current;
        const applicationCommandManager = current2.getApplicationCommandManager();
        ({ channelId, optionName } = tapAction);
        let fn;
        if (getState.state.current.focused) {
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
          const maxMessageLength = callback(outer1_3[61]).getMaxMessageLength();
          if (tmp16) {
            outer1_1(outer1_3[47]).track(outer1_24.MESSAGE_LENGTH_LIMIT_REACHED, {});
            const obj3 = outer1_1(outer1_3[47]);
          }
          getState.state.current.textPrev = getState.state.current.text;
          getState.state.current.text = text;
        }
        if (outer1_10.isOpen()) {
          outer1_1(outer1_3[60]).hideNativeMenu();
          const obj = outer1_1(outer1_3[60]);
        }
        const current2 = getState.chatInputActions.current;
        if (current2 != null) {
          current2.onDismissActions(focused);
        }
        const current3 = getState.chatInputRightActions.current;
        if (current3 != null) {
          current3.onDismissActions(focused);
        }
        const tmp8 = getState;
      }
      if (0 === text.length) {
        const current4 = getState.chatInputActions.current;
        if (current4 != null) {
          current4.onShowActions(focused);
        }
        const current = getState.chatInputRightActions.current;
        if (current != null) {
          current.onShowActions(focused);
        }
        const tmp21 = getState;
      }
    };
    obj[17] = function handleTextFlushed(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const current = getState.chatInputTextFlushedResponses.current;
      const value = current.get(nativeEvent.requestId);
      if (value != null) {
        value(nativeEvent.text);
      }
    };
    obj[18] = function handleToggleKeyboard(type) {
      if (outer1_10.isOpen()) {
        outer1_1(outer1_3[60]).hideNativeMenu();
        const obj = outer1_1(outer1_3[60]);
      }
      if (type.type !== callback(outer1_3[48]).KeyboardTypes.SYSTEM) {
        if (type.type !== tmp4Result.getKeyboardType()) {
          const current = getState.chatInput.current;
          current.openCustomKeyboard(type);
        }
      }
      const current2 = getState.chatInput.current;
      current2.openSystemKeyboard();
    };
    return obj;
  }, items11);
  const items12 = [null != threadCreationCallback, tmp49];
  callback = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    if (tmp) {
      if (!c5) {
        const current = _undefined2.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items12);
  const items13 = [editable, tmp49];
  const callback1 = obj9.useCallback(() => true, []);
  callback2 = obj9.useCallback(() => {
    if (editable) {
      const current = _undefined2.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items13);
  obj2 = { canUpload, channelId: channel.id, screenIndex };
  const tmp58 = callback5(chatInputFloating(tmp2[62]), obj2);
  let tmp57Result = null;
  if (editable) {
    obj3 = { ref: null, channel: null, onPressAction: null, canStartThreads: null, isAppLauncherEnabled: null, keyboardType: null, shouldPhotosButtonBeDisabled: null, canUpload: null, shouldShowGiftButton: null, canPostPolls: null, onPollsPress: null, onAttachPress: null, photosButtonExternalRef: null };
    obj3[0] = tmp49.chatInputActions;
    obj3[1] = channel;
    obj3[2] = memo1.handlePressAction;
    obj3[3] = canStartThread;
    obj3[4] = isAppLauncherEnabled;
    obj3[5] = tmp40;
    let tmp61 = canUpload;
    tmp5Result = tmp5(tmp2[63]);
    if (canUpload) {
      tmp61 = null == stateFromStores3;
    }
    if (!tmp61) {
      tmp61 = tmp34;
    }
    obj3[6] = !tmp61;
    obj3[7] = canUpload;
    let result1 = result2;
    if (!tmp17) {
      result1 = tmp(tmp2[64]).isPremiumGiftingSupported();
      const tmpResult17 = tmp(tmp2[64]);
    }
    obj3[8] = result1;
    obj3[9] = tmp34;
    ({ handlePollsPress: obj30[10], handleAttachPress: obj30[11] } = memo1);
    obj3[12] = ref1;
    tmp57Result = tmp57(tmp5Result, obj3);
  }
  obj4 = { style: items14, children: null };
  items14 = [tmp9.inputDefault, animatedStyle];
  obj5 = { accessibilityLabel, customKeyboard: null, editable: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onMaxHeightChanged: null, onSelectionOrTextChange: null, onTextFlushed: null, onPasteImage: null, onPasteCommand: null, onTapAction: null, onRequestSend: null, placeholder: null, ref: null, setNoExtractUI: null, shouldShowCursor: null, verticalInset: null };
  const tmpResult16 = channel(tmp2[37]);
  obj5[1] = channel(tmp2[66]).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
  obj5[2] = editable;
  ({ handleFocus: obj33[3], handleBlur: obj33[4], handleChangeContentSize: obj33[5], handleMaxHeightChanged: obj33[6], handleSelectionOrTextChange: obj33[7], handleTextFlushed: obj33[8], handlePasteImage: obj33[9], handlePasteCommand: obj33[10], handleTapAction: obj33[11], handlePressSend: obj33[12] } = memo1);
  obj5[13] = placeholder;
  obj5[14] = tmp49.chatInputNative;
  obj5[15] = setNoExtractUI;
  obj5[16] = tmp40 !== channel(tmp2[48]).KeyboardTypes.MEDIA;
  obj5[17] = num2;
  const items15 = [callback5(chatInputFloating(tmp2[65]), obj5), callback5(chatInputFloating(tmp2[67]), { keyboardType: tmp40, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover })];
  obj4[1] = items15;
  const tmp65 = callback6(chatInputFloating(tmp2[33]).View, obj4);
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
    tmp57Result = tmp57(tmp5(tmp2[68]), obj7);
    const tmp5Result2 = tmp5(tmp2[68]);
  } else {
    tmp57Result = null;
  }
  const obj8 = { collapsable: false, onLayout: callback, style: null, children: null };
  const items16 = [chatInputFloating(tmp2[69])({ isCreatingThread: null != threadCreationCallback }), , ];
  let overflowVisible = chatInputFloating;
  if (chatInputFloating) {
    overflowVisible = tmp9.overflowVisible;
  }
  items16[1] = overflowVisible;
  let floatingScrimOverlap = chatInputFloating;
  if (chatInputFloating) {
    floatingScrimOverlap = result2;
  }
  if (floatingScrimOverlap) {
    floatingScrimOverlap = tmp9.floatingScrimOverlap;
  }
  items16[2] = floatingScrimOverlap;
  obj8[2] = items16;
  let tmp57Result1 = chatInputFloating;
  if (chatInputFloating) {
    tmp57Result1 = !floatingInputBoxTyping;
  }
  if (tmp57Result1) {
    obj9 = { gradientHeight: null, inline: false, scrimBase: null };
    obj9[0] = tmp23;
    obj9[2] = token2;
    tmp57Result1 = tmp57(tmp(tmp2[70]).ChatInputScrimGradient, obj9);
  }
  const items17 = [tmp57Result1, , , , , , , , , , , , , , ];
  let tmp57Result2 = chatInputFloating;
  if (chatInputFloating) {
    tmp57Result2 = floatingInputBoxTyping;
  }
  if (tmp57Result2) {
    let hex2rgbResult = tmp(tmp2[71]).hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    let obj10 = { style: null, pointerEvents: "none" };
    const obj11 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: null };
    obj11[5] = hex2rgbResult;
    obj10[0] = obj11;
    tmp57Result2 = tmp57(tmp68, obj10);
    const tmpResult18 = tmp(tmp2[71]);
  }
  items17[1] = tmp57Result2;
  items17[2] = callback5(channel(tmp2[72]).ChatInputAccessibilityDivider, {});
  let tmp57Result3 = null;
  if (tmp18) {
    let obj12 = { channel: null, hasInputText: null };
    obj12[0] = channel;
    let tmp74 = "" !== memo;
    if (!tmp74) {
      let current = tmp49.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp74 = "" !== text;
    }
    obj12[1] = tmp74;
    tmp57Result3 = tmp57(tmp5(tmp2[73]), obj12);
    const tmp5Result3 = tmp5(tmp2[73]);
  }
  items17[3] = tmp57Result3;
  let obj13 = { style: tmp9.accessories, children: null };
  let tmp57Result4 = chatInputFloating;
  if (chatInputFloating) {
    tmp57Result4 = floatingInputBoxTyping;
  }
  if (tmp57Result4) {
    let obj14 = { gradientHeight: null, inline: true, scrimBase: null };
    obj14[0] = tmp24;
    obj14[2] = token2;
    tmp57Result4 = tmp57(tmp(tmp2[70]).ChatInputScrimGradient, obj14);
  }
  const items18 = [tmp57Result4, , ];
  let tmp57Result5 = null;
  if (null == threadCreationCallback) {
    const obj15 = { channel: null, screenIndex: null };
    obj15[0] = channel;
    obj15[1] = screenIndex;
    tmp57Result5 = tmp57(tmp5(tmp2[74]), obj15);
  }
  items18[1] = tmp57Result5;
  let obj6 = { keyboardType: tmp40, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp49.chatInputCover };
  const tmp5Result1 = chatInputFloating(tmp2[65]);
  let tmp57Result6 = null;
  if (tmpResult19.isIOS()) {
    let obj16 = { channelId: null, screenIndex: null, onJumpToPresent: null };
    obj16[0] = channel.id;
    obj16[1] = screenIndex;
    obj16[2] = onJumpToPresent;
    tmp57Result6 = tmp57(tmp5(tmp2[75]), obj16);
  }
  items18[2] = tmp57Result6;
  obj13[1] = items18;
  items17[4] = callback6(stateFromStores1, obj13);
  let tmp57Result7 = null;
  if (isResourceChannel) {
    let obj17 = { channel: null };
    obj17[0] = channel;
    tmp57Result7 = tmp57(tmp5(tmp2[76]), obj17, channel.id);
  }
  items17[5] = tmp57Result7;
  items17[6] = callback5(channel(tmp2[77]).MemberActionsChatInputBannerGuardedOuter, { channel });
  items17[7] = callback5(channel(tmp2[78]).DoubleTapToReactChatInputBanner, { channel });
  let tmp57Result8 = null;
  if (tmp19) {
    const obj18 = { channelId: null };
    obj18[0] = channel.id;
    tmp57Result8 = tmp57(tmp5(tmp2[79]), obj18);
  }
  items17[8] = tmp57Result8;
  let tmp57Result9 = null;
  if (tmp40 !== channel(tmp2[48]).KeyboardTypes.EXPRESSION) {
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
    tmp57Result9 = tmp57(tmp5(tmp2[80]), obj19);
  }
  items17[9] = tmp57Result9;
  let tmp57Result10 = !chatInputFloating;
  if (!chatInputFloating) {
    const obj20 = { channel: null };
    obj20[0] = channel;
    tmp57Result10 = tmp57(tmp5(tmp2[81]), obj20);
  }
  items17[10] = tmp57Result10;
  let tmp57Result11 = !chatInputFloating;
  if (!chatInputFloating) {
    let obj21 = { channel: null, chatInputRef: null, pendingEdit: null, pendingReply: null };
    obj21[0] = channel;
    obj21[1] = tmp49.chatInput;
    obj21[2] = stateFromStores;
    obj21[3] = stateFromStores1;
    tmp57Result11 = tmp57(tmp5(tmp2[82]), obj21);
  }
  items17[11] = tmp57Result11;
  items17[12] = callback5(chatInputFloating(tmp2[83]), { ref: tmp49.chatInputAppCommandManager, canOnlyUseTextCommands: null != stateFromStores1, channel, chatInputRef: tmp49.chatInput, chatInputStateRef: tmp49.state, commandsDisabled: tmp30 });
  const items19 = [tmp9.container, ];
  let floatingContainer = chatInputFloating;
  if (chatInputFloating) {
    floatingContainer = tmp9.floatingContainer;
  }
  const obj23 = { style: items19, onLayout: memo1.handleLayoutOfInputContainer, children: null };
  items19[1] = floatingContainer;
  const obj24 = { children: null };
  if (chatInputFloating) {
    const items20 = [tmp58, , ];
    const obj25 = { channel: null };
    obj25[0] = channel;
    items20[1] = tmp57(tmp5(tmp2[81]), obj25);
    const items21 = [tmp9.floatingInputBox, , ];
    if (floatingInputBoxPressed) {
      floatingInputBoxPressed = tmp9.floatingInputBoxPressed;
    }
    items21[1] = floatingInputBoxPressed;
    if (floatingInputBoxTyping) {
      floatingInputBoxTyping = tmp9.floatingInputBoxTyping;
    }
    const obj26 = { style: null, onStartShouldSetResponder: null, onResponderRelease: null, collapsable: false, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items21[2] = floatingInputBoxTyping;
    obj26[0] = items21;
    obj26[1] = callback1;
    obj26[2] = callback2;
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
    const items22 = [tmp57(tmp5(tmp2[82]), obj27), ];
    const obj28 = { style: null, children: null };
    obj28[0] = tmp9.floatingMainContents;
    let tmp57Result12 = null;
    if (null != tmp57Result) {
      let obj29 = { style: null, children: null };
      let obj30 = { paddingBottom: null, paddingLeft: null };
      obj30[0] = result;
      obj30[1] = result;
      obj29[0] = obj30;
      obj29[1] = tmp57Result;
      tmp57Result12 = tmp57(tmp68, obj29);
    }
    const items23 = [tmp57Result12, , , ];
    const obj31 = { style: null, children: null };
    const items24 = [tmp9.inputFlat, ];
    const obj32 = { paddingBottom: null };
    obj32[0] = result;
    items24[1] = obj32;
    obj31[0] = items24;
    const items25 = [tmp65, ];
    const obj33 = { analyticsLocations: null, ref: null };
    obj33[0] = analyticsLocations;
    obj33[1] = tmp49.chatInputCharCounter;
    items25[1] = tmp57(tmp5(tmp2[84]), obj33);
    obj31[1] = items25;
    items23[1] = tmp63(tmp68, obj31);
    let tmp57Result13 = null;
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
        result2 = tmp(tmp2[64]).isPremiumGiftingSupported();
        const tmpResult20 = tmp(tmp2[64]);
      }
      obj36[3] = result2;
      ({ handlePressAction: obj74[4], handlePressExpression: obj74[5] } = memo1);
      obj34[1] = tmp57(tmp5(tmp2[85]), obj36);
      tmp57Result13 = tmp57(tmp68, obj34);
      const tmp5Result4 = tmp5(tmp2[85]);
    }
    items23[2] = tmp57Result13;
    items23[3] = tmp57Result;
    obj28[1] = items23;
    items22[1] = tmp63(tmp68, obj28);
    obj26[6] = items22;
    items20[2] = tmp63(tmp68, obj26);
    obj24[0] = items20;
    let tmp89 = obj24;
  } else {
    const items26 = [tmp58, ];
    const obj37 = { style: null, collapsable: false, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj37[0] = tmp9.containerInner;
    obj37[2] = tmp41;
    let str2;
    if (tmp41) {
      str2 = "no-hide-descendants";
    }
    obj37[3] = str2;
    let tmp57Result14 = tmp57Result;
    if (enabled) {
      const obj38 = { style: null, children: null };
      obj38[0] = tmp9.refreshButtonAlignment;
      obj38[1] = tmp57Result;
      tmp57Result14 = tmp57(tmp68, obj38);
    }
    const items27 = [tmp57Result14, , ];
    const obj39 = { style: null, children: null };
    const items28 = [tmp9.input, ];
    const obj40 = { minHeight: null };
    obj40[0] = token - 2 * token6;
    items28[1] = obj40;
    obj39[0] = items28;
    const items29 = [tmp65, ];
    const obj41 = { style: null, children: null };
    obj41[0] = tmp9.rightAccessory;
    let tmp57Result15 = null;
    if (editable) {
      const obj42 = { active: null, onPress: null };
      obj42[0] = tmp40 === tmp(tmp2[48]).KeyboardTypes.EXPRESSION;
      obj42[1] = memo1.handlePressExpression;
      tmp57Result15 = tmp57(tmp5(tmp2[86]), obj42);
      const tmp5Result5 = tmp5(tmp2[86]);
    }
    const items30 = [tmp57Result15, ];
    const obj43 = { analyticsLocations: null, ref: null };
    obj43[0] = analyticsLocations;
    obj43[1] = tmp49.chatInputCharCounter;
    items30[1] = tmp57(tmp5(tmp2[84]), obj43);
    obj41[1] = items30;
    items29[1] = tmp63(tmp68, obj41);
    obj39[1] = items29;
    items27[1] = tmp63(tmp68, obj39);
    let tmp57Result16 = tmp57Result;
    if (enabled) {
      const obj44 = { style: null, children: null };
      obj44[0] = tmp9.refreshButtonAlignment;
      obj44[1] = tmp57Result;
      tmp57Result16 = tmp57(tmp68, obj44);
    }
    items27[2] = tmp57Result16;
    obj37[4] = items27;
    items26[1] = tmp63(tmp68, obj37);
    obj24[0] = items26;
    tmp89 = obj24;
  }
  obj23[2] = callback6(closure_36, tmp89);
  items17[13] = callback5(tmp5Result, obj23);
  let tmp57Result17 = null;
  if (null != refreshChatInputCoachmark) {
    const obj45 = { buttonRef: null };
    obj45[0] = ref1;
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp57Result17 = tmp57(tmp5(tmp2[37]), obj45);
    const tmp5Result6 = tmp5(tmp2[37]);
  }
  items17[14] = tmp57Result17;
  obj8[3] = items17;
  const tmp63Result = callback6(stateFromStores1, obj8);
  let tmp57Result18 = tmp63Result;
  if (null == threadCreationCallback) {
    const obj46 = { channel: null, screenIndex: null, canSendMessages: null, canCreateThreads: null, onJumpToPresent: null, isReadonly: null, children: null };
    obj46[0] = channel;
    obj46[1] = screenIndex;
    obj46[2] = editable;
    obj46[3] = canCreateThreads;
    obj46[4] = onJumpToPresent;
    obj46[5] = !editable;
    obj46[6] = tmp63Result;
    tmp57Result18 = tmp57(tmp5(tmp2[87]), obj46);
  }
  return tmp57Result18;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("noop").fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;