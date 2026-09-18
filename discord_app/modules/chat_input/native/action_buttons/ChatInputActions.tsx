// === Module 12477: ChatInputActions ===

// Module 12477 (ChatInputActions)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import mergeProps from "mergeProps" /* 4428 */;
import ImageIcon from "ImageIcon" /* 5256 */;
import AppsIcon from "AppsIcon" /* 5275 */;
import ImagePickerUtils from "ImagePickerUtils" /* 5320 */;
import AttachmentIcon from "AttachmentIcon" /* 10355 */;
import PollsIcon from "PollsIcon" /* 10881 */;
import CameraIcon from "CameraIcon" /* 10896 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12451 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 12479 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12481 */;
import MediaKeyboardButtonIcon from "MediaKeyboardButtonIcon" /* 12482 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChatInputConstants = fn(12204);
({ ChatInputActionType: hasOwnProperty, ChatInputOmniButtonActionType: metroRequire } = ChatInputConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj = { actions: { flexDirection: "row", alignItems: "center" }, themedChatInput: { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG }, buttonWrapper: null, activeBrand: null };
let obj3 = { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG };
obj.buttonWrapper = { maxHeight: fn(5149).SMALL_BUTTON_HEIGHT + fn(5149).SMALL_BUTTON_PADDING };
let obj4 = { maxHeight: fn(5149).SMALL_BUTTON_HEIGHT + fn(5149).SMALL_BUTTON_PADDING };
obj.activeBrand = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_10 = createStyles.createStyles(obj);
let __initData = { code: "function ChatInputActionsTsx1(){return{opacity:1};}" };
const forwardRefResult = noop.forwardRef((canStartThreads, arg1) => {
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: noop, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  ({ photosButtonExternalRef: closure_9, onContextMenuOpen } = canStartThreads);
  c17 = undefined;
  c18 = undefined;
  let tmp = onContextMenuOpen();
  __initData = tmp;
  closure_12 = canStartThreads(isAppLauncherEnabled[8]).useClientThemesOverride(tmp.themedChatInput);
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  const token = canStartThreads(isAppLauncherEnabled[9]).useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  closure_13 = channel(isAppLauncherEnabled[10])({ includeCustomKeyboard: true });
  let obj2 = canStartThreads(isAppLauncherEnabled[9]);
  const tmp4 = channel;
  const keyboardWillOpen = canStartThreads(isAppLauncherEnabled[11]).useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp6 = channel(isAppLauncherEnabled[13])(channel);
  closure_15 = tmp6;
  let obj3 = canStartThreads(isAppLauncherEnabled[11]);
  const canSendScheduledMessagesInChannel = canStartThreads(isAppLauncherEnabled[14]).useCanSendScheduledMessagesInChannel(channel);
  let obj4 = canStartThreads(isAppLauncherEnabled[14]);
  [c17, c18] = onPressAction(noop.useState(false), 2);
  const tmp9 = onPressAction(noop.useState(true), 2);
  closure_19 = tmp9[1];
  closure_20 = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(arg1, noop.useMemo(() => {
    closure_0 = {
      onDismissActions(arg0) {
        closure_1_18(arg0);
        closure_1_19(false);
      },
      onShowActions(arg0) {
        closure_1_18(arg0);
        closure_1_19(true);
      },
      focusPhotosButton() {
        const result = canStartThreads(isAppLauncherEnabled[15]).setAccessibilityFocus({ ref, delay: 0 });
      }
    };
    return {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
  }, []).showActionsImperativeApi);
  let items = [canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp6, canSendScheduledMessagesInChannel, channel.id, onPressAction, onPollsPress, onAttachPress];
  noop.useMemo(() => {
    let result = canUpload;
    if (canUpload) {
      result = !closure_15;
    }
    if (result) {
      result = ImagePickerUtils.isImageCaptureIntentSupported();
    }
    const items = [];
    if (result) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t.uje3P9);
      obj2.IconComponent = CameraIcon.CameraIcon;
      obj2.action = function action() {
        return onPressAction({}, canUpload.CAMERA);
      };
      items.push(obj2);
    }
    if (canUpload) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.Zmm6dN);
      obj3.IconComponent = ImageIcon.ImageIcon;
      obj3.action = function action() {
        return onPressAction({}, canUpload.ALL_PHOTOS);
      };
      items.push(obj3);
    }
    if (canPostPolls) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.RgIi2B);
      obj4.IconComponent = PollsIcon.PollsIcon;
      obj4.action = onPollsPress;
      items.push(obj4);
    }
    if (canStartThreads) {
      const obj5 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj5.label = intl4.string(util.t["7Xm5QI"]);
      obj5.IconComponent = ThreadPlusIcon.ThreadPlusIcon;
      obj5.action = function action() {
        return onPressAction({}, canUpload.THREAD);
      };
      items.push(obj5);
    }
    if (isAppLauncherEnabled) {
      const obj6 = { label: null, IconComponent: null, action: null };
      const intl5 = util.intl;
      obj6.label = intl5.string(util.t.PHjkRE);
      obj6.IconComponent = AppsIcon.AppsIcon;
      obj6.action = function action() {
        return onPressAction({}, canUpload.APPS);
      };
      items.push(obj6);
    }
    if (canUpload) {
      const obj7 = { label: null, IconComponent: null, action: null };
      const intl6 = util.intl;
      obj7.label = intl6.string(util.t["8Hvr3+"]);
      obj7.IconComponent = AttachmentIcon.AttachmentIcon;
      obj7.action = onAttachPress;
      items.push(obj7);
    }
    if (canSendScheduledMessagesInChannel) {
      const obj8 = { label: null, IconComponent: null, action: null };
      const intl7 = util.intl;
      obj8.label = intl7.string(util.t["3+ii4F"]);
      obj8.IconComponent = CalendarPlusIcon.CalendarPlusIcon;
      obj8.action = function action() {
        return canStartThreads(isAppLauncherEnabled[25]).openScheduleMessageActionSheet(id.id, canStartThreads(isAppLauncherEnabled[26]).ScheduledMessageEntryPoint.ATTACH_MENU);
      };
      items.push(obj8);
    }
    return items;
  }, items);
  let items1 = [onContextMenuOpen];
  const onOpen = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.CHAT_INPUT_OMNI_BUTTON_ACTION, { type: constants.OPENED });
    if (onContextMenuOpen != null) {
      onContextMenuOpen();
    }
  }, items1);
  const onClose = noop.useCallback((arg0) => {
    if (arg0) {
      const obj2 = { type: canPostPolls.CLOSED };
      channel(isAppLauncherEnabled[27]).track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj2);
      const obj = channel(isAppLauncherEnabled[27]);
    }
  }, []);
  const items2 = [];
  let obj5 = { type: canUpload.PHOTOS, active: null };
  const tmp8 = onPressAction(noop.useState(false), 2);
  obj5.active = keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA || keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.APP_LAUNCHER;
  items2.push(obj5);
  closure_24 = !tmp9[0];
  const tmp11 = keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA || keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.APP_LAUNCHER;
  class X {
    constructor() {
      return { opacity: 1 };
    }
  }
  X.__closure = {};
  X.__workletHash = 13622805272332;
  X.__initData = __initData;
  let obj6 = { children: null };
  const animatedStyle = canStartThreads(isAppLauncherEnabled[28]).useAnimatedStyle(X);
  let obj7 = {
    style: null,
    children: items2.map((item, index) => {
      ({ type, active } = item);
      if (canUpload.PHOTOS === type) {
        if (length.length > 0) {
          const obj2 = {
            items: tmp31,
            triggerOnLongPress: true,
            align: "above",
            onOpen,
            onClose,
            children(arg0) {
                  ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
                  const tmp = ChatInputActionButtonDefault;
                  const items = [ref, closure_20, closure_2_9];
                  const items1 = [...items.filter(Boolean)];
                  obj.ref = mergeProps.mergeRefs.apply(items1);
                  const intl = util.intl;
                  obj.accessibilityLabel = intl.string(util.t.aDZSuz);
                  const intl2 = util.intl;
                  obj.accessibilityHint = intl2.string(util.t.o7j1jA);
                  obj.accessibilityState = { expanded: active };
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  obj.active = active;
                  obj.activeIconStyle = activeBrand.activeBrand;
                  obj.disabled = disabled;
                  obj.IconComponent = MediaKeyboardButtonIcon.MediaKeyboardButtonIcon;
                  obj.onPress = function onPress(arg0) {
                    return closure_1_3(arg0, constants.PHOTOS);
                  };
                  return React6(tmp, obj);
                }
          };
          let tmp44Result = onAttachPress(canStartThreads(isAppLauncherEnabled[29]).ContextMenu, obj2, index);
        } else {
          if (null != closure_9) {
            let mergeRefsResult = canStartThreads(isAppLauncherEnabled[31]).mergeRefs(closure_20, tmp48);
            const obj5 = canStartThreads(isAppLauncherEnabled[31]);
          } else {
            mergeRefsResult = closure_20;
          }
          const obj3 = { ref: mergeRefsResult, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
          let intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
          obj3.accessibilityLabel = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
          const intl3 = canStartThreads(isAppLauncherEnabled[17]).intl;
          obj3.accessibilityHint = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
          const obj4 = { expanded: active };
          obj3.accessibilityState = obj4;
          obj3.active = active;
          obj3.activeIconStyle = activeBrand.activeBrand;
          obj3.disabled = disabled;
          obj3.IconComponent = canStartThreads(isAppLauncherEnabled[32]).MediaKeyboardButtonIcon;
          obj3.onPress = function onPress(arg0) {
            return onPressAction(arg0, canUpload.PHOTOS);
          };
          tmp44Result = onAttachPress(channel(isAppLauncherEnabled[30]), obj3, index);
          const tmp47 = channel(isAppLauncherEnabled[30]);
        }
        return tmp44Result;
      } else if (canUpload.APPS === type) {
        const obj6 = { accessible: !closure_24, active, channel, onPress: onPressAction, styleButton, styleActiveIcon: activeBrand.activeBrand };
        return onAttachPress(channel(isAppLauncherEnabled[33]), obj6, index);
      } else if (canUpload.ALL_PHOTOS === type) {
        const obj7 = { accessibilityLabel: null, accessible: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        let intl = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj7.accessibilityLabel = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In);
        obj7.accessible = !closure_24;
        const obj8 = { expanded: active };
        obj7.accessibilityState = obj8;
        obj7.active = active;
        obj7.activeIconStyle = activeBrand.activeBrand;
        obj7.disabled = !canUpload;
        obj7.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
        obj7.onPress = function onPress(arg0) {
          return onPressAction(arg0, canUpload.ALL_PHOTOS);
        };
        obj7.style = styleButton;
        return onAttachPress(channel(isAppLauncherEnabled[30]), obj7, index);
      } else {
        let obj = { accessible: !closure_24, canStartThreads: active, channel, onPress: onPressAction, styleButtonWrapper: activeBrand.buttonWrapper, styleButton, shouldShowThread: null };
        let tmp12 = true === active;
        if (tmp12) {
          let tmp13 = closure_13;
          if (!closure_13) {
            tmp13 = keyboardWillOpen;
          }
          if (!tmp13) {
            tmp13 = c17;
          }
          tmp12 = tmp13;
        }
        obj.shouldShowThread = tmp12;
        return onAttachPress(channel(isAppLauncherEnabled[34]), obj, "gift-or-thread");
      }
    })
  };
  const items3 = [tmp.actions, animatedStyle, { gap: token }];
  obj7.style = items3;
  obj6.children = onAttachPress(tmp4(isAppLauncherEnabled[28]).View, obj7);
  return onAttachPress(closure_9, obj6);
});
forwardRefResult.displayName = "ChatInputActions";
let obj5 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default noop.memo(forwardRefResult);