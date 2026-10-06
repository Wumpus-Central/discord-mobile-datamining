// discord_app/modules/chat_input/native/ChatInput.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AppLauncherNativeConstants from "../../app_launcher/native/AppLauncherNativeConstants.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import FakePlaceholderPrivateChannel from "../../channel/FakePlaceholderPrivateChannel.tsx";
import ThreadHooks from "../../threads/ThreadHooks.tsx";
import DraftStore2 from "../../../stores/DraftStore.tsx";
import VoiceMessagesUIStore from "../../voice_messages/native/VoiceMessagesUIStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import DiceRollStore from "../../dice_roll/DiceRollStore.tsx";
import NativeMenuStore from "../../native_menu/native/NativeMenuStore.tsx";
import PendingReplyStore from "../../replies/PendingReplyStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore.tsx";
import ChatInputConstants from "ChatInputConstants.tsx";
import Constants from "../../../Constants.tsx";
import MediaKeyboardConstants from "../../media_keyboard/native/MediaKeyboardConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const DraftStore = DraftStore2;
let channel, dependencyMap, set;

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
let closure_30;
let closure_31;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, findNodeHandle: metroImportAll } = react_native);
const useVoiceMessagesUIStore = VoiceMessagesUIStore.useVoiceMessagesUIStore;
const DraftType = DraftStore2.DraftType;
({
  updateShowingAutoComplete: closure_19,
  updateSmallSuggestionBarHeight: closure_20,
  useChatIsAtBottom: closure_21,
  useChatShowingAutoComplete: closure_22,
} = useChatBottomManagerUIStore);
({
  CHAT_INPUT_HORIZONTAL_PADDING: closure_23,
  CHAT_INPUT_HORIZONTAL_PADDING_PARENT: closure_24,
  ChatInputActionType: closure_25,
} = ChatInputConstants);
({
  AnalyticEvents: closure_26,
  ChannelTypesSets: closure_27,
  ChatInputComponentViewedTypes: closure_28,
  ComponentActions: closure_29,
  MAX_UPLOAD_COUNT: closure_30,
  Permissions: closure_31,
} = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ InAppCameraUsedCameraPreviewTypes: closure_35, MediaKeyboardTarget: closure_36 } = MediaKeyboardConstants);
({ jsx: closure_37, jsxs: closure_38, Fragment: closure_39 } = Fragment);
let closure_40 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj8;
  let rect;
  let BACKGROUND_BASE_LOW = arg0;
  const obj = {
    position: "relative",
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: closure_23 - closure_24,
    backgroundColor: BACKGROUND_BASE_LOW,
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  if (arg0 == null) {
    BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = {
    container: obj,
    inputDefault: { alignSelf: "stretch", marginLeft: 0, marginTop: 0 },
    accessories: { position: "absolute", bottom: "100%", left: 0, right: 0 },
    floatingContainer: {
      borderTopWidth: 0,
      borderColor: "transparent",
      borderRadius: nativeDefault.radii.none,
      backgroundColor: "transparent",
      paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
      paddingVertical: 0,
      overflow: "visible",
    },
    floatingInputBox: {
      backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
      borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
      borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
      borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
      flexDirection: "column",
      overflow: "hidden",
    },
    floatingInputBoxPressed: {
      backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
      borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
    },
    floatingInputBoxTyping: { shadowOpacity: 0, elevation: 0 },
    floatingMainContents: {
      flexDirection: "row",
      alignItems: "flex-end",
      paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
      paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
      gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
    },
    inputFlat: { flex: 1, justifyContent: "center", marginLeft: num },
    floatingScrimOverlap: obj8,
    overflowVisible: { overflow: "visible" },
    characterCounter: rect,
  };
  ({
    borderTopWidth: 0,
    borderColor: "transparent",
    borderRadius: nativeDefault.radii.none,
    backgroundColor: "transparent",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: 0,
    overflow: "visible",
  });
  ({
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
    borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
    flexDirection: "column",
    overflow: "hidden",
  });
  ({
    backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
    borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
  });
  ({
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
    paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
  });
  num = -6;
  const obj7 = PlatformUtils;
  if (obj7.isAndroid()) {
    num = -5;
  }
  obj8 = { marginTop: -arg1 / 2 };
  rect = {
    position: "absolute",
    top: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
    right: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  };
  return obj2;
});
const __initData = {
  code: "function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}",
};
const forwardRefResult = react.forwardRef((channel, ref) => {
  let _undefined;
  let _undefined2;
  let accessibilityLabel;
  let c4;
  let c5;
  let canCreateThreads;
  let canMentionEveryone;
  let canSendVoiceMessage;
  let canUpload;
  let closure_3;
  let closure_6;
  let constants4;
  let constants5;
  let constants6;
  let constants7;
  let editable;
  let floatingInputBoxPressed;
  let isResourceChannel;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items27;
  let items28;
  let items29;
  let obj31;
  let obj36;
  let obj37;
  let onJumpToPresent;
  let placeholder;
  let rect;
  let result2;
  let secondaryTextFieldRef;
  let setNoExtractUI;
  let str2;
  let threadCreationCallback;
  let tmp18;
  let tmp56;
  let tmp69Result17;
  let tmp6Result11;
  let tmp73;
  let tmp86;
  let uploadLimit;
  channel = channel.channel;
  const screenIndex = channel.screenIndex;
  ({ threadCreationCallback, onJumpToPresent } = channel);
  dependencyMap = undefined;
  c4 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let suppressed;
  let stateFromStores;
  let stateFromStores1;
  editable = undefined;
  let sharedValue;
  let sharedValue1;
  let isCoachmarkVisible;
  let dismissCoachmark;
  let closure_16;
  let memo1;
  let registerViewTag;
  let unregisterViewTag;
  ref = undefined;
  let tmp = channel;
  let tmp2 = dependencyMap;
  ({ isResourceChannel, setNoExtractUI, secondaryTextFieldRef } = channel);
  let obj = channel(11590);
  const mobileEmojiSuggestionsConfig = obj.useMobileEmojiSuggestionsConfig({ location: "ChatInput" });
  const InlineEmojiSuggestionsEnabled = channel(2028).InlineEmojiSuggestionsEnabled;
  let tmp69Result30 = mobileEmojiSuggestionsConfig.enabled && InlineEmojiSuggestionsEnabled.useSetting();
  dependencyMap = tmp69Result30;
  let tmpResult = tmp(4702);
  const gradientValue = tmpResult.useGradientValue(tmp(4702).GradientPercentage.END);
  let tmp6 = screenIndex;
  const tmpResult30 = tmp(4586);
  const token = tmpResult30.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmpResult31 = tmp(4586);
  let result = (tmpResult31.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT) - token) / 2;
  const tmpResult32 = tmp(4586);
  const token1 = tmpResult32.useToken(screenIndex(587).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  const tmp10 = closure_40(gradientValue, token1);
  const useToken = tmp(4586).useToken;
  let token2 = gradientValue;
  tmp(4586);
  if (gradientValue == null) {
    token2 = useToken(screenIndex(587).colors.BACKGROUND_BASE_LOWER);
  }
  const tmpResult34 = tmp(4586);
  const token3 = tmpResult34.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED);
  const tmpResult35 = tmp(4586);
  const token4 = tmpResult35.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT);
  let obj9 = react;
  const tmpResult36 = tmp(4586);
  const token5 = tmpResult36.useToken(tmp6(587).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM);
  let tmp16 = _slicedToArray(react.useState(false), 2);
  [floatingInputBoxPressed, c4] = tmp16;
  [tmp18, c5] = _slicedToArray(react.useState(0), 2);
  const items = [screenIndex];
  const tmp17 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.y);
  }, []);
  const items1 = [screenIndex];
  const callback1 = react.useCallback((arg0) => {
    ref(screenIndex, arg0);
  }, items);
  const effect = react.useEffect(
    () => () => {
      ref(screenIndex, 0);
    },
    items1,
  );
  react = tmp22;
  let tmp23 = channel.isPrivate() && !tmp22;
  const tmp24 = editable((channelId) => channelId.channelId === channel.id);
  const tmpResult37 = tmp(11591);
  const typingUserIdsForDisplay = tmpResult37.useTypingUserIdsForDisplay(channel.id, 1);
  const tmp26 = closure_22(screenIndex);
  suppressed = tmp26;
  const tmpResult38 = tmp(11591);
  let result1 = tmpResult38.hasTypingIndicatorContent(channel, typingUserIdsForDisplay, tmp26);
  const tmp28 = closure_21(screenIndex);
  let tmp29 = token1;
  if (tmp28) {
    tmp29 = token5;
  }
  let tmp30 = token4;
  if (tmp28) {
    tmp30 = token3;
  }
  const items2 = [closure_16];
  const tmpResult39 = tmp(504);
  stateFromStores = tmpResult39.useStateFromStores(items2, () => {
    let editingTextValue = null;
    if (!closure_6) {
      editingTextValue = EditMessageStore.getEditingTextValue(channel.id);
    }
    return editingTextValue;
  });
  const items3 = [sharedValue];
  const tmpResult40 = tmp(504);
  stateFromStores1 = tmpResult40.useStateFromStores(items3, () => {
    let pendingReply;
    if (!closure_6) {
      pendingReply = PendingReplyStore.getPendingReply(channel.id);
    }
    return pendingReply;
  });
  const items4 = [registerViewTag];
  const tmpResult41 = tmp(504);
  let stateFromStores2 = tmpResult41.useStateFromStores(items4, () => {
    if (closure_6) {
      return false;
    } else {
      const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
      return null != uploads && uploads.length > 0;
    }
  });
  const items5 = [channel.id, tmp22];
  let memo = stateFromStores;
  if (stateFromStores == null) {
    memo = obj9.useMemo(
      () => DraftStore.getDraft(channel.id, closure_6 ? DraftType.FirstThreadMessage : DraftType.ChannelMessage),
      items5,
    );
  }
  const items6 = [memo1];
  const items7 = [channel, tmp22];
  const tmpResult42 = tmp(504);
  const stateFromStoresObject = tmpResult42.useStateFromStoresObject(
    items6,
    () => {
      const canResult = PermissionStore.can(constants.ATTACH_FILES, channel);
      let canResult1 = PermissionStore.can(constants.MENTION_EVERYONE, channel);
      const canResult2 = PermissionStore.can(constants.SEND_MESSAGES, channel);
      const canResult3 = PermissionStore.can(constants.SEND_VOICE_MESSAGES, channel);
      const tmp6 =
        PermissionStore.can(constants.CREATE_PUBLIC_THREADS, channel) ||
        PermissionStore.can(constants.CREATE_PRIVATE_THREADS, channel);
      const canResult4 = PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, channel);
      let isPrivateResult = channel.isPrivate();
      let tmp11 = canResult4;
      const obj3 = ThreadHooks;
      const isReadOnlyThread = obj3.computeIsReadOnlyThread(channel);
      if (!closure_6) {
        tmp11 = isPrivateResult || canResult2;
      }
      let tmp13 = !tmp11;
      if (tmp11) {
        tmp13 = isReadOnlyThread;
      }
      let tmp14 = isPrivateResult;
      if (!tmp14) {
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
        canUpload: (isPrivateResult || canResult) && !tmp13 && !closure_6,
        canSendVoiceMessage: isPrivateResult,
        editable: !tmp13,
        canCreateThreads: tmp6,
      };
      if (!isPrivateResult) {
        isPrivateResult = canResult3;
      }
      if (isPrivateResult) {
        isPrivateResult = !tmp13;
      }
      if (isPrivateResult) {
        isPrivateResult = !closure_6;
      }
      return obj4;
    },
    items7,
  );
  ({ canUpload, editable } = stateFromStoresObject);
  ({ canMentionEveryone, canSendVoiceMessage, canCreateThreads } = stateFromStoresObject);
  const analyticsLocations = tmp6(6664)().analyticsLocations;
  let tmp36 = tmp22 || null != stateFromStores;
  if (!tmp36) {
    const tmpResult43 = tmp(6782);
    tmp36 = !tmpResult43.getIsActiveChannelOrUnarchivableThread(channel);
  }
  const tmpResult44 = tmp(6782);
  let canStartThread = tmpResult44.useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = constants.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !tmp22;
  }
  const tmpResult45 = tmp(7270);
  const tmp40 = tmpResult45.useCanPostPollsInChannel(channel) && null == threadCreationCallback;
  const tmpResult46 = tmp(4618);
  sharedValue = tmpResult46.useSharedValue(token);
  const tmpResult47 = tmp(4618);
  sharedValue1 = tmpResult47.useSharedValue(token);
  const items8 = [sharedValue1, token, sharedValue];
  const effect1 = obj9.useEffect(() => {
    const result = sharedValue.set(token);
    const result1 = sharedValue1.set(token);
  }, items8);
  const tmp44 = tmp6(4753)();
  const tmp45 = sharedValue1((startTimeMillis) => null != startTimeMillis.startTimeMillis);
  let result3 = !tmp22;
  let isAppLauncherEnabled = result3;
  if (null == threadCreationCallback) {
    const tmpResult48 = tmp(9033);
    isAppLauncherEnabled = tmpResult48.getIsAppLauncherEnabled(channel);
  }
  const items9 = [stateFromStores1];
  const tmpResult49 = tmp(504);
  const stateFromStores3 = tmpResult49.useStateFromStores(items9, () =>
    ApplicationCommandStore.getActiveCommand(channel.id),
  );
  let obj2 = { channel, isReadonly: !editable, isCreatingThread: tmp22 };
  ({ placeholder, accessibilityLabel } = tmp6(11612)(obj2));
  tmp6(11612)(obj2);
  const tmpResult50 = tmp(4618);
  class Ze {
    constructor() {
      const obj = { minHeight: sharedValue1.get() };
      return obj;
    }
  }
  Ze.__closure = { textFieldHeight: sharedValue1 };
  Ze.__workletHash = 11048691841625;
  Ze.__initData = __initData;
  const animatedStyle = tmpResult50.useAnimatedStyle(Ze);
  ref = obj9.useRef(null);
  let obj3 = { disabled: !editable };
  const tmpResult51 = tmp(11613);
  const refreshChatInputCoachmark = tmpResult51.useRefreshChatInputCoachmark(obj3);
  const tmpResult52 = tmp(7486);
  const canUseScheduledMessages = tmpResult52.useCanUseScheduledMessages();
  const items10 = [isCoachmarkVisible];
  const tmpResult53 = tmp(504);
  const stateFromStores4 = tmpResult53.useStateFromStores(items10, () =>
    DraftStore.getDraft(channel.id, DraftType.ChannelMessage),
  );
  let obj4 = { channel, draftText: stateFromStores4, isEligible: tmp56 };
  tmp56 = canUseScheduledMessages;
  const useScheduledMessageDraftCoachmarkState = tmp(11614).useScheduledMessageDraftCoachmarkState;
  tmp(11614);
  if (canUseScheduledMessages) {
    tmp56 = editable;
  }
  if (tmp56) {
    tmp56 = result3;
  }
  if (tmp56) {
    tmp56 = null == refreshChatInputCoachmark;
  }
  const scheduledMessageDraftCoachmarkState = useScheduledMessageDraftCoachmarkState(obj4);
  isCoachmarkVisible = scheduledMessageDraftCoachmarkState.isCoachmarkVisible;
  dismissCoachmark = scheduledMessageDraftCoachmarkState.dismissCoachmark;
  let obj5 = {
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
  const tmp58 = tmp6(11615)(obj5);
  closure_16 = tmp58;
  const items11 = [tmp58];
  const effect2 = obj9.useEffect(() => {
    const current = closure_16.chatInput.current;
    current.setText(closure_16.props.current.defaultValue);
  }, items11);
  const items12 = [tmp58, channel, stateFromStores, stateFromStores1];
  const effect3 = obj9.useEffect(() => {
    const current = closure_16.propsPrev.current;
    const pendingEdit = current.pendingEdit;
    let tmp2 = null == current.pendingReply && null != stateFromStores1;
    if (!tmp2) {
      tmp2 = null == pendingEdit && null != stateFromStores;
      const tmp4 = null == pendingEdit && null != stateFromStores;
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
        const setText = current3.setText;
        if (null != stateFromStores) {
          str = stateFromStores;
        }
        setText(str);
      }
    }
  }, items12);
  const items13 = [tmp58];
  const effect4 = obj9.useEffect(() => {
    let props;
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
      ComponentDispatch.unsubscribe(constants.TEXTAREA_FOCUS, handleOpenKeyboard);
    };
  }, items13);
  const items14 = [tmp58, sharedValue];
  memo1 = obj9.useMemo(() => {
    let ChannelMessage;
    let obj = {
      handleBlur(nativeEvent) {
        const obj = channel(closure_3[43]);
        const result = obj.setIsAnyChatInputFocused(false);
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
            text: nativeEvent.nativeEvent.text,
            selectionStart: closure_1_16.state.current.selectionStart,
            selectionEnd: closure_1_16.state.current.selectionEnd,
          };
          current3.setData(obj2);
        }
        const current4 = closure_1_16.chatInputEmojiSuggestions.current;
        if (current4 != null) {
          const obj3 = {
            focused: false,
            text: nativeEvent.nativeEvent.text,
            selectionStart: closure_1_16.state.current.selectionStart,
            selectionEnd: closure_1_16.state.current.selectionEnd,
          };
          current4.setData(obj3);
        }
        const current5 = closure_1_16.chatInputSendButton.current;
        if (current5 != null) {
          current5.setHasText(nativeEvent.nativeEvent.text.trim().length > 0);
        }
      },
      handleFocus(nativeEvent) {
        let end;
        let start;
        ({ start, end } = nativeEvent.nativeEvent);
        const obj = channel(closure_3[43]);
        const result = obj.setIsAnyChatInputFocused(true);
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
      },
      handleChangeContentSize(nativeEvent) {
        const height = nativeEvent.nativeEvent.height;
        closure_1_16.state.current.textFieldContentSize = height;
        const obj = channel(closure_3[44]);
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldHeight = closure_1_16.state.current.textFieldHeight;
          set = textFieldHeight.set;
          const tmp2Result = channel(closure_3[45]);
          const result = set(tmp2Result.getChatInputHeightAnimationTiming(height, sharedValue.get()));
        }
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
        const tmp = 0 !== height && 0 !== layout.width;
        if (tmp) {
          if (null == closure_1_16.props.current.threadCreationCallback) {
            const current = closure_1_16.chatInput.current;
            const result = current.updateChatInputContainerHeightDebounced(height);
          }
        }
      },
      handleMaxHeightChanged() {
        const obj = channel(closure_3[44]);
        if (!obj.getIsChatInputHeightWorkletEnabled()) {
          const textFieldContentSize = closure_1_16.state.current.textFieldContentSize;
          if (0 !== textFieldContentSize) {
            const textFieldHeight = closure_1_16.state.current.textFieldHeight;
            set = textFieldHeight.set;
            const tmpResult = channel(closure_3[45]);
            const result = set(tmpResult.getChatInputHeightAnimationTiming(textFieldContentSize, sharedValue.get()));
          }
        }
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
      handlePasteImage: function () {
        return closure_0(...arguments);
      },
      handlePressAction(arg0, arg1, current2) {
        let name;
        let obj11;
        let obj18;
        if (constants.PHOTOS === arg1) {
          const obj20 = channel(closure_3[50]);
          const result = obj20.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj4 = {
            type: constants3.ADD_BUTTON,
            channel_id: closure_1_16.props.current.channel.id,
            guild_id: closure_1_16.props.current.channel.guild_id,
          };
          const obj21 = screenIndex(closure_3[51]);
          obj21.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj4);
          const obj23 = channel(closure_3[34]);
          const keyboardType = obj23.getKeyboardType();
          if (keyboardType === channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER) {
            const handleToggleKeyboard3 = memo1.handleToggleKeyboard;
            const obj5 = { type: channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER };
            const result1 = handleToggleKeyboard3(obj5);
          } else {
            const tmp43Result = channel(closure_3[34]);
            const keyboardType1 = tmp43Result.getKeyboardType();
            if (keyboardType1 === channel(closure_3[52]).KeyboardTypes.MEDIA) {
              const current = closure_1_16.chatInputActions.current;
              if (current != null) {
                current.focusPhotosButton();
              }
            }
            const handleToggleKeyboard2 = memo1.handleToggleKeyboard;
            const obj8 = { type: channel(closure_3[52]).KeyboardTypes.MEDIA, context: obj11 };
            obj11 = { target: constants7.CHAT };
            const result2 = handleToggleKeyboard2(obj8);
          }
        } else {
          let tmp36 = current2;
          if (constants.APPS === arg1) {
            const obj12 = channel(closure_3[50]);
            const result3 = obj12.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj13 = channel(closure_3[53]);
            obj13.trackWithMetadata(constants2.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED);
            const obj15 = {
              type: constants3.APPS_BUTTON,
              channel_id: closure_1_16.props.current.channel.id,
              guild_id: closure_1_16.props.current.channel.guild_id,
            };
            const obj14 = screenIndex(closure_3[51]);
            obj14.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj15);
            const obj16 = mobileEmojiSuggestionsConfig(closure_3[54]);
            const result4 = obj16.dismissNewActivityIndicator();
            const setAppLauncherA11yFocusReturnRef = channel(closure_3[55]).setAppLauncherA11yFocusReturnRef;
            if (tmp36 == null) {
              tmp36 = null;
            }
            const result5 = setAppLauncherA11yFocusReturnRef(tmp36);
            const handleToggleKeyboard = memo1.handleToggleKeyboard;
            const obj17 = { type: channel(closure_3[52]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
            obj18 = { initialRouteName: constants5.HOME, initialSearchQuery: name };
            const tmp23Result = channel(closure_3[56]);
            const appDMApplication = tmp23Result.getAppDMApplication(closure_1_16.props.current.channel);
            name = undefined;
            if (appDMApplication != null) {
              name = appDMApplication.name;
            }
            handleToggleKeyboard(obj17);
          } else if (constants.ALL_PHOTOS === arg1) {
            const obj9 = channel(closure_3[50]);
            const result6 = obj9.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj19 = {
              channel: closure_1_16.props.current.channel,
              uploadLimit,
              onDismissKeyboard() {
                const obj = closure_1_0(closure_1_3[58]);
                return obj.dismissKeyboard();
              },
              onRestoreKeyboard() {
                const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
                return closure_1_17.handleToggleKeyboard(obj);
              },
              onSelectFiles(items) {
                const obj = closure_0(closure_2_3[57]);
                obj.addImagesFromPicker(
                  closure_1_16.props.current.channel.id,
                  items,
                  closure_0(closure_2_3[59]).UploadOrigin.IMAGE_PICKER,
                );
              },
              draftType: dismissCoachmark.ChannelMessage,
            };
            const obj10 = channel(closure_3[57]);
            obj10.handleViewAllDialog(obj19);
          } else if (constants.CAMERA === arg1) {
            const obj6 = channel(closure_3[50]);
            const result7 = obj6.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj22 = {
              channel: closure_1_16.props.current.channel,
              previewType: constants6.CAMERA_BUTTON,
              onDismissKeyboard() {
                const obj = closure_1_0(closure_1_3[58]);
                return obj.dismissKeyboard();
              },
              onRestoreKeyboard() {
                const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
                return closure_1_17.handleToggleKeyboard(obj);
              },
              onSelectFiles(items) {
                const obj = closure_0(closure_2_3[57]);
                obj.addImagesFromPicker(
                  closure_1_16.props.current.channel.id,
                  items,
                  closure_0(closure_2_3[59]).UploadOrigin.IMAGE_PICKER,
                );
              },
            };
            const obj7 = channel(closure_3[57]);
            obj7.handleCameraDialog(obj22);
          } else if (constants.NITRO_GIFT === arg1) {
            let obj = screenIndex(closure_3[60]);
            const result8 = obj.markPotentialBadState();
            const obj2 = channel(closure_3[50]);
            const result9 = obj2.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj3 = channel(closure_3[23]);
            if (obj3.isAndroid()) {
              const tmp5Result = channel(closure_3[58]);
              tmp5Result.dismissKeyboard();
            }
            const tmp5Result2 = channel(closure_3[57]);
            tmp5Result2.handleSelectGift(closure_1_16.props.current.analyticsLocations, closure_1_16.chatInput, tmp36);
          } else if (constants.THREAD === arg1) {
            const obj27 = channel(closure_3[50]);
            const result10 = obj27.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj28 = channel(closure_3[57]);
            obj28.handleSelectThread(closure_1_16.props.current.channel, closure_1_16.chatInput);
          }
        }
      },
      handlePollsPress() {
        let obj = channel(closure_3[50]);
        const result = obj.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = screenIndex(closure_3[51]);
        const obj3 = {
          type: constants3.POLLS,
          channel_id: closure_1_16.props.current.channel.id,
          guild_id: closure_1_16.props.current.channel.guild_id,
        };
        obj2.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj3);
        const obj4 = channel(closure_3[58]);
        obj4.dismissKeyboard();
        const obj5 = channel(closure_3[61]);
        const obj6 = {
          channel: closure_1_16.props.current.channel,
          onCancel() {
            const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
            return closure_1_17.handleToggleKeyboard(obj);
          },
        };
        obj5.openCreatePollModal(obj6);
      },
      handleAttachPress() {
        let props;
        let obj = channel(closure_3[50]);
        const result = obj.triggerHapticFeedback(channel(closure_3[50]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = channel(closure_3[57]);
        const obj3 = {
          channel: closure_1_16.props.current.channel,
          uploadLimit,
          onDismissKeyboard() {
            const obj = closure_1_0(closure_1_3[58]);
            return obj.dismissKeyboard();
          },
          onRestoreKeyboard() {
            const obj = { type: closure_0(closure_2_3[52]).KeyboardTypes.SYSTEM };
            return closure_1_17.handleToggleKeyboard(obj);
          },
          onSelectFiles(items) {
            const obj = closure_0(closure_2_3[57]);
            obj.addImagesFromPicker(
              props.props.current.channel.id,
              items,
              closure_0(closure_2_3[59]).UploadOrigin.FILE_ATTACHMENT,
            );
          },
        };
        obj2.handleAttachFile(obj3);
      },
      handlePressExpression(arg0, unlocked) {
        let obj3;
        let tmp7;
        const obj = channel(closure_3[62]);
        const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.ChatInputExpressionPressed);
        let tmp4 = null != unlocked;
        if (tmp4) {
          tmp4 = unlocked.unlocked.length > 0 || unlocked.locked.length > 0;
        }
        let type = arg0;
        if (arg0 == null) {
          const tmpResult = channel(closure_3[34]);
          type = tmpResult.getKeyboardContextForType(channel(closure_3[52]).KeyboardTypes.EXPRESSION).type;
        }
        const handleToggleKeyboard = memo1.handleToggleKeyboard;
        const obj2 = { type: channel(closure_3[52]).KeyboardTypes.EXPRESSION, context: obj3 };
        obj3 = { type, suggestedEmojis: tmp7 };
        tmp7 = undefined;
        if (tmp4) {
          tmp7 = unlocked;
        }
        handleToggleKeyboard(obj2);
      },
      handlePressSend() {
        const current = closure_1_16.chatInput.current;
        current.handleSend();
      },
      handleSelectionOrTextChange(nativeEvent) {
        let editId;
        let end;
        let start;
        let text;
        ({ start, end, text, editId } = nativeEvent.nativeEvent);
        closure_1_16.state.current.editId = editId;
        closure_1_16.state.current.selectionStart = start;
        closure_1_16.state.current.selectionEnd = end;
        const editId2 = closure_1_16.state.current.editId;
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
        if (editId2 !== editId) {
          const current5 = closure_1_16.chatInput.current;
          current5.handleTextChanged(text);
          const current6 = closure_1_16.chatInputCharCounter.current;
          if (current6 != null) {
            const result1 = current6.onMessageLengthChanged(text.length);
          }
          const obj3 = channel(closure_3[63]);
          obj3.hideContextMenu();
        }
      },
      handleTapAction(nativeEvent) {
        let channelId;
        let chatInput;
        let optionName;
        const tapAction = nativeEvent.nativeEvent.tapAction;
        if ("tapAttachment" === tapAction.action) {
          let current = closure_1_16.chatInput.current;
          current.blur();
          const current2 = closure_1_16.chatInput.current;
          const openCommandAttachmentPreview = channel(closure_3[64]).openCommandAttachmentPreview;
          const tmp11 = channel(closure_3[64]);
          const applicationCommandManager = current2.getApplicationCommandManager();
          ({ channelId, optionName } = tapAction);
          let fn;
          if (closure_1_16.state.current.focused) {
            fn = () => {
              const current = chatInput.chatInput.current;
              return current.openSystemKeyboard();
            };
          }
          const result = openCommandAttachmentPreview(applicationCommandManager, channelId, optionName, fn);
        }
      },
      handleTextOrFocusChange(text, focused) {
        if (text.length > 0) {
          if (!focused) {
            const obj2 = channel(closure_3[66]);
            const maxMessageLength = obj2.getMaxMessageLength();
            const tmp16 =
              closure_1_16.state.current.textPrev.length <= maxMessageLength && text.length > maxMessageLength;
            if (tmp16) {
              const obj3 = screenIndex(closure_3[51]);
              obj3.track(constants2.MESSAGE_LENGTH_LIMIT_REACHED, {});
            }
            closure_1_16.state.current.textPrev = closure_1_16.state.current.text;
            closure_1_16.state.current.text = text;
          }
          if (token.isOpen()) {
            const obj = screenIndex(closure_3[65]);
            obj.hideNativeMenu();
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
      },
      handleTextFlushed(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const current = closure_1_16.chatInputTextFlushedResponses.current;
        const text = nativeEvent.text;
        const value = current.get(nativeEvent.requestId);
        if (value != null) {
          value(text);
        }
      },
      handleToggleKeyboard(type) {
        if (token.isOpen()) {
          const obj = screenIndex(closure_3[65]);
          obj.hideNativeMenu();
        }
        if (type.type !== channel(closure_3[52]).KeyboardTypes.SYSTEM) {
          type = type.type;
          const tmp4Result = channel(closure_3[34]);
          if (type !== tmp4Result.getKeyboardType()) {
            const current = closure_1_16.chatInput.current;
            current.openCustomKeyboard(type);
          }
        }
        const current2 = closure_1_16.chatInput.current;
        current2.openSystemKeyboard();
      },
    };
    let closure_0 = _undefined(function* (arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let closure_1;
      let closure_2;
      let mimeType;
      let obj2;
      let obj9;
      closure_0 = arg0;
      if (1 === mimeType) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (closure_1_16.state.current.focused) {
          if (closure_1_16.props.current.canUpload) {
            mimeType = 2;
            c4 = 1;
            const obj6 = { value: obj2.getImageDimensionsIfMissing(originalUri, c1, c2), done: false };
            obj2 = closure_0(closure_2_3[46]);
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const styles = value;
        const obj7 = {
          channelId: closure_1_16.props.current.channel.id,
          file: size,
          draftType: ChannelMessage.ChannelMessage,
        };
        size = {
          uri: originalUri,
          originalUri,
          width: styles.width,
          height: styles.height,
          mimeType,
          platform: closure_0(closure_2_3[48]).UploadPlatform.REACT_NATIVE,
          id: obj9.v4(),
        };
        const addFile = screenIndex(closure_2_3[47]).addFile;
        const tmp23 = screenIndex(closure_2_3[47]);
        obj9 = closure_0(closure_2_3[49]);
        addFile(obj7);
      }
      yield "IconComponent";
      ({ url: c0, width: c1, height: c2, type: c3 } = closure_0.nativeEvent);
      return "Reflect";
    });
    return obj;
  }, items14);
  const items15 = [tmp69Result30, mobileEmojiSuggestionsConfig.style, tmp58, tmp26];
  const items16 = [tmp22, tmp58];
  const memo2 = obj9.useMemo(() => {
    let tmp;
    if (closure_3) {
      if ("button" === mobileEmojiSuggestionsConfig.style) {
        const obj = { chatInputRef: null, chatInputStateRef: null, suppressed };
        ({ chatInput: obj.chatInputRef, state: obj.chatInputStateRef } = closure_16);
        tmp = obj;
      }
    }
    return tmp;
  }, items15);
  const callback2 = obj9.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    const tmp = 0 !== height && 0 !== layout.width;
    if (tmp) {
      if (!closure_6) {
        const current = closure_16.chatInput.current;
        const result = current.updateChatInputContainerHeightDebounced(height);
      }
    }
  }, items16);
  const tmp65 = tmp6(11658)({ textFieldHeight: sharedValue1, textFieldMinHeight: sharedValue });
  registerViewTag = tmp65.registerViewTag;
  unregisterViewTag = tmp65.unregisterViewTag;
  ref = obj9.useRef(null);
  const items17 = [tmp58, registerViewTag, unregisterViewTag];
  const callback3 = obj9.useCallback((current) => {
    if (null != ref.current) {
      unregisterViewTag(ref.current);
      ref.current = null;
    }
    closure_16.chatInputNative.current = current;
    if (null != current) {
      const tmp5 = metroImportAll(current);
      if (null != tmp5) {
        ref.current = tmp5;
        registerViewTag(tmp5);
      }
    }
  }, items17);
  const items18 = [editable, tmp58];
  const callback4 = obj9.useCallback(() => true, []);
  const callback5 = obj9.useCallback(() => {
    if (editable) {
      const current = closure_16.chatInput.current;
      current.openSystemKeyboard();
    }
  }, items18);
  let obj6 = { canUpload, channelId: channel.id, screenIndex };
  let tmp69Result = null;
  const tmp70 = closure_37(tmp6(11877), obj6);
  if (editable) {
    let obj7 = {
      ref: tmp58.chatInputActions,
      channel,
      onPressAction: memo1.handlePressAction,
      canStartThreads: canStartThread,
      isAppLauncherEnabled,
      keyboardType: tmp44,
      shouldPhotosButtonBeDisabled: !tmp73,
      canUpload,
      shouldShowGiftButton: result2,
      canPostPolls: tmp40,
      onPollsPress: null,
      onAttachPress: null,
      photosButtonExternalRef: ref,
      onContextMenuOpen() {
        if (isCoachmarkVisible) {
          dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
        }
      },
    };
    tmp73 = canUpload;
    const tmp6Result = tmp6(11878);
    if (canUpload) {
      tmp73 = null == stateFromStores3;
    }
    if (!tmp73) {
      tmp73 = tmp40;
    }
    result2 = result3;
    if (null == threadCreationCallback) {
      const tmpResult55 = tmp(4547);
      result2 = tmpResult55.isPremiumGiftingSupported();
    }
    ({ handlePollsPress: obj32.onPollsPress, handleAttachPress: obj32.onAttachPress } = memo1);
    tmp69Result = closure_37(tmp6Result, obj7);
  }
  let obj8 = { style: items19, children: items20 };
  items19 = [tmp10.inputDefault, animatedStyle];
  const View = tmp6(4618).View;
  let obj10 = {
    accessibilityLabel,
    customKeyboard: tmp(11896).PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE,
    editable,
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
    placeholder,
    ref: callback3,
    setNoExtractUI,
    shouldShowCursor: tmp44 !== tmp(1616).KeyboardTypes.MEDIA,
    verticalInset: 5,
  };
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
  const tmp6Result7 = tmp6(11895);
  items20 = [closure_37(tmp6Result7, obj10)];
  let obj11 = { keyboardType: tmp44, onSelectKeyboard: memo1.handleToggleKeyboard, ref: tmp58.chatInputCover };
  items20[1] = closure_37(tmp6(11897), obj11);
  const tmp77 = closure_38(View, obj8);
  if (editable) {
    let obj12 = {
      ref: tmp58.chatInputSendButton,
      canSendVoiceMessage,
      channel,
      defaultValue: memo,
      hasPendingAttachments: stateFromStores2,
      hasPendingEdit: null != stateFromStores,
      onSendMessage: memo1.handlePressSend,
      requireTextContent: result3,
    };
    const tmp6Result8 = tmp6(11898);
    if (stateFromStores2) {
      stateFromStores2 = canUpload;
    }
    tmp69Result17 = closure_37(tmp6Result8, obj12);
  } else {
    tmp69Result17 = null;
  }
  let obj13 = { collapsable: false, onLayout: callback2, style: items21, children: items22 };
  items21 = [tmp6(11904)({ isCreatingThread: tmp22 }), tmp10.overflowVisible];
  let floatingScrimOverlap = result3;
  if (null == threadCreationCallback) {
    floatingScrimOverlap = tmp10.floatingScrimOverlap;
  }
  items21[2] = floatingScrimOverlap;
  let tmp69Result18 = !result1;
  if (tmp69Result18) {
    let obj14 = { gradientHeight: tmp29, inline: false, scrimBase: token2 };
    tmp69Result18 = closure_37(tmp(11905).ChatInputScrimGradient, obj14);
  }
  items22 = [tmp69Result18, , , , , , , , , , , , ,];
  let tmp69Result19 = result1;
  if (tmp69Result19) {
    const tmpResult56 = tmp(1103);
    let hex2rgbResult = tmpResult56.hex2rgb(token2, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = token2;
    }
    let obj15 = { style: rect, pointerEvents: "none" };
    rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: hex2rgbResult };
    tmp69Result19 = closure_37(tmp80, obj15);
  }
  items22[1] = tmp69Result19;
  items22[2] = closure_37(tmp(11906).ChatInputAccessibilityDivider, {});
  let tmp69Result20 = null;
  if (tmp23) {
    let obj16 = { channel, hasInputText: tmp86 };
    let str = "";
    tmp86 = "" !== memo;
    const tmp6Result9 = tmp6(11907);
    if (!tmp86) {
      let current = tmp58.chatInput.current;
      let text;
      if (current != null) {
        text = current.getText();
      }
      tmp86 = "" !== text;
    }
    tmp69Result20 = closure_37(tmp6Result9, obj16);
  }
  items22[3] = tmp69Result20;
  let obj17 = { style: tmp10.accessories, children: items23 };
  let tmp69Result21 = result1;
  if (tmp69Result21) {
    let obj18 = { gradientHeight: tmp30, inline: true, scrimBase: token2 };
    tmp69Result21 = closure_37(tmp(11905).ChatInputScrimGradient, obj18);
  }
  items23 = [tmp69Result21, ,];
  let tmp69Result22 = null;
  if (null == threadCreationCallback) {
    let obj19 = { channel, screenIndex };
    tmp69Result22 = closure_37(tmp6(11591), obj19);
  }
  items23[1] = tmp69Result22;
  let tmp69Result23 = null;
  const tmpResult57 = tmp(1369);
  if (tmpResult57.isIOS()) {
    let obj20 = { channelId: channel.id, screenIndex, onJumpToPresent };
    tmp69Result23 = closure_37(tmp6(11910), obj20);
  }
  items23[2] = tmp69Result23;
  items22[4] = closure_38(suppressed, obj17);
  let tmp69Result24 = null;
  if (isResourceChannel) {
    let obj21 = { channel };
    tmp69Result24 = closure_37(tmp6(11926), obj21, channel.id);
  }
  items22[5] = tmp69Result24;
  items22[6] = closure_37(tmp(11929).MemberActionsChatInputBannerGuardedOuter, { channel });
  items22[7] = closure_37(tmp(11932).DoubleTapToReactChatInputBanner, { channel });
  let tmp69Result25 = null;
  if (tmp24) {
    let obj22 = { channelId: channel.id };
    tmp69Result25 = closure_37(tmp6(12036), obj22);
  }
  items22[8] = tmp69Result25;
  let tmp69Result26 = null;
  if (tmp44 !== tmp(1616).KeyboardTypes.EXPRESSION) {
    let obj23 = {
      ref: tmp58.chatInputAutocomplete,
      analyticsLocations,
      channel,
      canMentionEveryone,
      keyboardType: tmp44,
      onChangeAutoCompleteVisibility: memo1.handleChangeAutoCompleteVisibility,
      commandsDisabled: tmp36,
      canOnlyUseTextCommands: null != stateFromStores1,
      chatInputRef: tmp58.chatInput,
      screenIndex,
    };
    tmp69Result26 = closure_37(tmp6(12038), obj23);
  }
  items22[9] = tmp69Result26;
  const obj24 = {
    ref: tmp58.chatInputAppCommandManager,
    canOnlyUseTextCommands: null != stateFromStores1,
    channel,
    chatInputRef: tmp58.chatInput,
    chatInputStateRef: tmp58.state,
    commandsDisabled: tmp36,
  };
  items22[10] = closure_37(tmp6(12063), obj24);
  const obj25 = {
    style: items24,
    onLayout: memo1.handleLayoutOfInputContainer,
    children: closure_38(closure_39, { children: items25 }),
  };
  items24 = [,];
  ({ container: arr25[0], floatingContainer: arr25[1] } = tmp10);
  items25 = [tmp70, , ,];
  const tmp6Result10 = tmp6(12065);
  items25[1] = closure_37(tmp6(12066), { channel });
  const items26 = [tmp10.floatingInputBox, ,];
  if (floatingInputBoxPressed) {
    floatingInputBoxPressed = tmp10.floatingInputBoxPressed;
  }
  items26[1] = floatingInputBoxPressed;
  const obj26 = {
    style: items26,
    onStartShouldSetResponder: callback4,
    onResponderRelease: callback5,
    onLayout: callback,
    collapsable: false,
    accessibilityElementsHidden: tmp45,
    importantForAccessibility: str2,
    children: items27,
  };
  const tmp96 = result1 && tmp10.floatingInputBoxTyping;
  items26[2] = tmp96;
  str2 = undefined;
  if (tmp45) {
    str2 = "no-hide-descendants";
  }
  let obj27 = { channel, chatInputRef: tmp58.chatInput, pendingEdit: stateFromStores, pendingReply: stateFromStores1 };
  items27 = [closure_37(tmp6(12078), obj27), ,];
  let tmp69Result27 = tmp69Result30 && "large" === mobileEmojiSuggestionsConfig.style;
  if (tmp69Result27) {
    let obj28 = { ref: null, chatInputRef: null, chatInputStateRef: null, channel, suppressed: tmp26 };
    ({ chatInputEmojiSuggestions: obj56.ref, chatInput: obj56.chatInputRef, state: obj56.chatInputStateRef } = tmp58);
    tmp69Result27 = closure_37(tmp(12082).EmojiSuggestionBarLarge, obj28);
  }
  items27[1] = tmp69Result27;
  let tmp69Result28 = null;
  const obj29 = { style: tmp10.floatingMainContents, children: items28 };
  if (null != tmp69Result) {
    const obj30 = { style: obj31, children: tmp69Result };
    obj31 = { paddingBottom: result, paddingLeft: result };
    tmp69Result28 = closure_37(tmp80, obj30);
  }
  items28 = [tmp69Result28, , , ,];
  const obj33 = { style: items29, children: tmp77 };
  items29 = [tmp10.inputFlat, { paddingBottom: result }];
  items28[1] = closure_37(suppressed, obj33);
  let tmp69Result29 = null;
  if (editable) {
    const obj34 = { style: obj36, children: closure_37(tmp6Result11, obj37) };
    obj36 = { paddingBottom: result };
    obj37 = {
      ref: tmp58.chatInputRightActions,
      channel,
      keyboardType: tmp44,
      shouldShowGiftButton: result3,
      onPressAction: null,
      onPressExpression: null,
      suggestedExpressions: memo2,
      suggestedExpressionsRef: tmp58.chatInputEmojiSuggestions,
    };
    tmp6Result11 = tmp6(12086);
    if (null == threadCreationCallback) {
      const tmpResult58 = tmp(4547);
      result3 = tmpResult58.isPremiumGiftingSupported();
    }
    ({ handlePressAction: obj63.onPressAction, handlePressExpression: obj63.onPressExpression } = memo1);
    tmp69Result29 = closure_37(tmp80, obj34);
  }
  items28[2] = tmp69Result29;
  items28[3] = tmp69Result17;
  const obj38 = { style: tmp10.characterCounter, analyticsLocations, ref: tmp58.chatInputCharCounter };
  items28[4] = closure_37(tmp6(12088), obj38);
  items27[2] = closure_38(suppressed, obj29);
  items25[2] = closure_38(suppressed, obj26);
  if (tmp69Result30) {
    tmp69Result30 = "small" === mobileEmojiSuggestionsConfig.style;
  }
  if (tmp69Result30) {
    const obj39 = {
      ref: null,
      chatInputRef: null,
      chatInputStateRef: null,
      channel,
      suppressed: tmp26,
      anchorTop: tmp18,
      onOccupiedHeightChange: callback1,
    };
    ({ chatInputEmojiSuggestions: obj66.ref, chatInput: obj66.chatInputRef, state: obj66.chatInputStateRef } = tmp58);
    tmp69Result30 = closure_37(tmp(12089).EmojiSuggestionBarSmall, obj39);
  }
  items25[3] = tmp69Result30;
  items22[11] = closure_37(tmp6Result10, obj25);
  let tmp69Result31 = null;
  if (null != refreshChatInputCoachmark) {
    const obj40 = { buttonRef: ref };
    const tmp6Result12 = tmp6(11613);
    const merged = Object.assign(refreshChatInputCoachmark);
    tmp69Result31 = closure_37(tmp6Result12, obj40);
  }
  items22[12] = tmp69Result31;
  items22[13] = closure_37(tmp6(12090), { buttonRef: ref, isVisible: isCoachmarkVisible, onDismiss: dismissCoachmark });
  const tmp75Result = closure_38(suppressed, obj13);
  let tmp69Result32 = tmp75Result;
  if (null == threadCreationCallback) {
    const obj41 = {
      channel,
      screenIndex,
      canSendMessages: editable,
      canCreateThreads,
      onJumpToPresent,
      isReadonly: !editable,
      children: tmp75Result,
    };
    tmp69Result32 = closure_37(tmp6(12091), obj41);
  }
  return tmp69Result32;
});
forwardRefResult.displayName = "ChatInput";
const memoResult = react.memo(forwardRefResult);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInput.tsx");

export default memoResult;
