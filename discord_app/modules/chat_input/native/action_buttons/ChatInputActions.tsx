// === Module 11864: ChatInputActions ===

// Module 11864 (ChatInputActions)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import mergeProps from "mergeProps" /* 4585 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import ImageIcon from "ImageIcon" /* 5871 */;
import AppsIcon from "AppsIcon" /* 5890 */;
import ImagePickerUtils from "ImagePickerUtils" /* 7286 */;
import PollsIcon from "PollsIcon" /* 10367 */;
import AttachmentIcon from "AttachmentIcon" /* 10369 */;
import CameraIcon from "CameraIcon" /* 10384 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11838 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 11866 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import MediaKeyboardButtonIcon from "MediaKeyboardButtonIcon" /* 11869 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let canStartThreads, closure_12;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ChatInputActionType: hasOwnProperty, ChatInputOmniButtonActionType: metroRequire } = ChatInputConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actions: { flexDirection: "row", alignItems: "center" }, themedChatInput: obj2, buttonWrapper: obj3, activeBrand: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG };
createStyles = createStyles.createStyles;
obj3 = { maxHeight: ButtonConstants.SMALL_BUTTON_HEIGHT + ButtonConstants.SMALL_BUTTON_PADDING };
obj4 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_10 = createStyles(obj);
let __initData = { code: "function ChatInputActionsTsx1(){return{opacity:1};}" };
const forwardRefResult = react.forwardRef((canStartThreads, arg1) => {
  let View;
  let c17;
  let c18;
  let canUpload;
  let closure_11;
  let closure_9;
  let disabled;
  let items3;
  let keyboardType;
  let obj7;
  let onContextMenuOpen;
  let onPressAction;
  let tmp12;
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: react, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  ({ photosButtonExternalRef: closure_9, onContextMenuOpen } = canStartThreads);
  c17 = undefined;
  c18 = undefined;
  let tmp = onContextMenuOpen();
  __initData = tmp;
  let tmp2 = canStartThreads;
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  closure_12 = obj.useClientThemesOverride(tmp.themedChatInput);
  let obj2 = canStartThreads(isAppLauncherEnabled[9]);
  const token = obj2.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  let closure_13 = channel(isAppLauncherEnabled[10])({ includeCustomKeyboard: true });
  let obj3 = canStartThreads(isAppLauncherEnabled[11]);
  const keyboardWillOpen = obj3.useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp6 = channel(isAppLauncherEnabled[13])(channel);
  let closure_15 = tmp6;
  let obj4 = canStartThreads(isAppLauncherEnabled[14]);
  const canSendScheduledMessagesInChannel = obj4.useCanSendScheduledMessagesInChannel(channel);
  [c17, c18] = onPressAction(react.useState(false), 2);
  onPressAction(react.useState(false), 2);
  const tmp9 = onPressAction(react.useState(true), 2);
  let closure_19 = tmp9[1];
  const first = tmp9[0];
  let closure_20 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(arg1, react.useMemo(() => {
    let ref;
    let closure_0 = {
      onDismissActions(arg0) {
        closure_1_18(arg0);
        closure_1_19(false);
      },
      onShowActions(arg0) {
        closure_1_18(arg0);
        closure_1_19(true);
      },
      focusPhotosButton() {
        const obj = canStartThreads(isAppLauncherEnabled[15]);
        const obj2 = { ref, delay: 0 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
    let obj = {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
    return obj;
  }, []).showActionsImperativeApi);
  let items = [canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp6, canSendScheduledMessagesInChannel, channel.id, onPressAction, onPollsPress, onAttachPress];
  const length = react.useMemo(() => {
    let id;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let result = canUpload && !closure_15;
    if (result) {
      let obj = ImagePickerUtils;
      result = obj.isImageCaptureIntentSupported();
    }
    const items = [];
    if (result) {
      const push = items.push;
      const obj2 = {
        label: intl.string(intl8.t.uje3P9),
        IconComponent: CameraIcon.CameraIcon,
        action() {
            return onPressAction({}, canUpload.CAMERA);
          }
      };
      intl = intl8.intl;
      push(obj2);
    }
    if (canUpload) {
      const push2 = items.push;
      const obj3 = {
        label: intl2.string(intl8.t.Zmm6dN),
        IconComponent: ImageIcon.ImageIcon,
        action() {
            return onPressAction({}, canUpload.ALL_PHOTOS);
          }
      };
      intl2 = intl8.intl;
      push2(obj3);
    }
    if (canPostPolls) {
      const push3 = items.push;
      const obj4 = { label: intl3.string(intl8.t.RgIi2B), IconComponent: PollsIcon.PollsIcon, action: onPollsPress };
      intl3 = intl8.intl;
      push3(obj4);
    }
    if (canStartThreads) {
      const push4 = items.push;
      const obj5 = {
        label: intl4.string(intl8.t["7Xm5QI"]),
        IconComponent: ThreadPlusIcon.ThreadPlusIcon,
        action() {
            return onPressAction({}, canUpload.THREAD);
          }
      };
      intl4 = intl8.intl;
      push4(obj5);
    }
    if (isAppLauncherEnabled) {
      const push5 = items.push;
      const obj6 = {
        label: intl5.string(intl8.t.PHjkRE),
        IconComponent: AppsIcon.AppsIcon,
        action() {
            return onPressAction({}, canUpload.APPS);
          }
      };
      intl5 = intl8.intl;
      push5(obj6);
    }
    if (canUpload) {
      const push6 = items.push;
      const obj7 = { label: intl6.string(intl8.t["8Hvr3+"]), IconComponent: AttachmentIcon.AttachmentIcon, action: onAttachPress };
      intl6 = intl8.intl;
      push6(obj7);
    }
    if (canSendScheduledMessagesInChannel) {
      const push7 = items.push;
      const obj8 = {
        label: intl7.string(intl8.t["3+ii4F"]),
        IconComponent: CalendarPlusIcon.CalendarPlusIcon,
        action() {
            const obj = canStartThreads(isAppLauncherEnabled[25]);
            return obj.openScheduleMessageActionSheet(id.id, canStartThreads(isAppLauncherEnabled[26]).ScheduledMessageEntryPoint.ATTACH_MENU);
          }
      };
      intl7 = intl8.intl;
      push7(obj8);
    }
    return items;
  }, items);
  let items1 = [onContextMenuOpen];
  const onOpen = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.OPENED };
    obj.track(AnalyticEvents.CHAT_INPUT_OMNI_BUTTON_ACTION, obj2);
    if (onContextMenuOpen != null) {
      onContextMenuOpen();
    }
  }, items1);
  const onClose = react.useCallback((arg0) => {
    const tmp = arg0;
    if (tmp) {
      const obj2 = { type: canPostPolls.CLOSED };
      const obj = channel(isAppLauncherEnabled[27]);
      obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj2);
    }
  }, []);
  const items2 = [];
  let obj5 = { type: canUpload.PHOTOS, active: tmp12 };
  let push = items2.push;
  tmp12 = keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA || keyboardType === tmp2(tmp3[12]).KeyboardTypes.APP_LAUNCHER;
  push(obj5);
  let closure_24 = !first;
  const tmp2Result = tmp2(isAppLauncherEnabled[28]);
  const tmp4 = channel;
  class Q {
    constructor() {
      return { opacity: 1 };
    }
  }
  Q.__closure = {};
  Q.__workletHash = 13622805272332;
  Q.__initData = __initData;
  let obj6 = { children: onAttachPress(View, obj7) };
  const animatedStyle = tmp2Result.useAnimatedStyle(Q);
  obj7 = {
    style: items3,
    children: items2.map((item, index) => {
      let active;
      let intl;
      let intl2;
      let intl3;
      let obj4;
      let obj8;
      let tmp12;
      let type;
      ({ type, active } = item);
      if (canUpload.PHOTOS === type) {
        let tmp44Result;
        if (length.length > 0) {
          let obj2 = {
            items: tmp31,
            triggerOnLongPress: true,
            align: "above",
            onOpen,
            onClose,
            children(arg0) {
                  let accessibilityActions;
                  let intl;
                  let intl2;
                  let items1;
                  let obj2;
                  let onAccessibilityAction;
                  let ref;
                  let tmp2;
                  ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = {
                    ref: tmp2.mergeRefs.apply(items1),
                    accessibilityLabel: intl.string(intl8.t.aDZSuz),
                    accessibilityHint: intl2.string(intl8.t.o7j1jA),
                    accessibilityState: obj2,
                    accessibilityActions,
                    onAccessibilityAction,
                    active,
                    activeIconStyle: activeBrand.activeBrand,
                    disabled: react,
                    IconComponent: MediaKeyboardButtonIcon.MediaKeyboardButtonIcon,
                    onPress(arg0) {
                      return closure_1_3(arg0, constants.PHOTOS);
                    }
                  };
                  const items = [ref, closure_20, closure_9];
                  items1 = [...items.filter(Boolean)];
                  const tmp = ChatInputActionButtonDefault;
                  tmp2 = mergeProps;
                  intl = intl8.intl;
                  intl2 = intl8.intl;
                  obj2 = { expanded: active };
                  return metroImportAll(tmp, obj);
                }
          };
          tmp44Result = onAttachPress(canStartThreads(isAppLauncherEnabled[29]).ContextMenu, obj2, index);
        } else {
          let mergeRefsResult;
          const tmp47 = channel(isAppLauncherEnabled[30]);
          if (null != closure_9) {
            const obj5 = canStartThreads(isAppLauncherEnabled[31]);
            mergeRefsResult = obj5.mergeRefs(closure_20, tmp48);
          } else {
            mergeRefsResult = closure_20;
          }
          const obj3 = {
            ref: mergeRefsResult,
            accessibilityLabel: intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz),
            accessibilityHint: intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA),
            accessibilityState: obj4,
            active,
            activeIconStyle: activeBrand.activeBrand,
            disabled,
            IconComponent: canStartThreads(isAppLauncherEnabled[32]).MediaKeyboardButtonIcon,
            onPress(arg0) {
                  return onPressAction(arg0, canUpload.PHOTOS);
                }
          };
          intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
          intl3 = canStartThreads(isAppLauncherEnabled[17]).intl;
          obj4 = { expanded: active };
          tmp44Result = onAttachPress(tmp47, obj3, index);
        }
        return tmp44Result;
      } else if (canUpload.APPS === type) {
        const obj6 = { accessible: !closure_24, active, channel, onPress: onPressAction, styleButton, styleActiveIcon: activeBrand.activeBrand };
        return onAttachPress(channel(isAppLauncherEnabled[33]), obj6, index);
      } else if (canUpload.ALL_PHOTOS === type) {
        const obj7 = {
          accessibilityLabel: intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In),
          accessible: !closure_24,
          accessibilityState: obj8,
          active,
          activeIconStyle: activeBrand.activeBrand,
          disabled: !canUpload,
          IconComponent: canStartThreads(isAppLauncherEnabled[19]).ImageIcon,
          onPress(arg0) {
              return onPressAction(arg0, canUpload.ALL_PHOTOS);
            },
          style: styleButton
        };
        const tmp17 = channel(isAppLauncherEnabled[30]);
        intl = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj8 = { expanded: active };
        return onAttachPress(tmp17, obj7, index);
      } else {
        let obj = { accessible: !closure_24, canStartThreads: active, channel, onPress: onPressAction, styleButtonWrapper: activeBrand.buttonWrapper, styleButton, shouldShowThread: tmp12 };
        tmp12 = true === active;
        const tmp5 = channel(isAppLauncherEnabled[34]);
        if (tmp12) {
          tmp12 = closure_13 || keyboardWillOpen || c17;
        }
        return onAttachPress(tmp5, obj, "gift-or-thread");
      }
    })
  };
  items3 = [tmp.actions, animatedStyle, { gap: token }];
  View = tmp4(tmp3[28]).View;
  return onAttachPress(closure_9, obj6);
});
forwardRefResult.displayName = "ChatInputActions";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;