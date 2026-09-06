// === Module 12235: ChatInputActions ===

// Module 12235 (ChatInputActions)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import mergeProps from "mergeProps" /* 4267 */;
import ImageIcon from "ImageIcon" /* 5087 */;
import AppsIcon from "AppsIcon" /* 5106 */;
import ImagePickerUtils from "ImagePickerUtils" /* 5151 */;
import AttachmentIcon from "AttachmentIcon" /* 10112 */;
import PollsIcon from "PollsIcon" /* 10638 */;
import CameraIcon from "CameraIcon" /* 10653 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12209 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 12237 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12239 */;
import MediaKeyboardButtonIcon from "MediaKeyboardButtonIcon" /* 12240 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChatInputConstants = fn(11962);
({ ChatInputActionType: hasOwnProperty, ChatInputOmniButtonActionType: metroRequire } = ChatInputConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = { actions: { flexDirection: "row", alignItems: "center" }, themedChatInput: null, buttonWrapper: null, activeBrand: null };
obj = { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG };
obj.themedChatInput = obj;
const createStyles = { maxHeight: fn(4980).SMALL_BUTTON_HEIGHT + fn(4980).SMALL_BUTTON_PADDING };
obj.buttonWrapper = createStyles;
obj.activeBrand = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_10 = createStyles.createStyles(obj);
let __initData = { code: "function ChatInputActionsTsx1(){return{opacity:1};}" };
const forwardRefResult = noop.forwardRef((canStartThreads, ref) => {
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
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  closure_12 = obj.useClientThemesOverride(tmp.themedChatInput);
  let obj1 = canStartThreads(isAppLauncherEnabled[9]);
  const token = obj1.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  closure_13 = channel(isAppLauncherEnabled[10])({ includeCustomKeyboard: true });
  const keyboardWillOpen = canStartThreads(isAppLauncherEnabled[11]).useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp6 = channel(isAppLauncherEnabled[13])(channel);
  closure_15 = tmp6;
  let obj3 = canStartThreads(isAppLauncherEnabled[11]);
  const tmp4 = channel;
  const canUseScheduledMessages = canStartThreads(isAppLauncherEnabled[14]).useCanUseScheduledMessages();
  let obj4 = canStartThreads(isAppLauncherEnabled[14]);
  [c17, c18] = onPressAction(noop.useState(false), 2);
  const tmp9 = onPressAction(noop.useState(true), 2);
  closure_19 = tmp9[1];
  closure_20 = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref, noop.useMemo(() => {
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
        canStartThreads(isAppLauncherEnabled[15]);
        const obj = { ref, delay: 0 };
        const result = obj.setAccessibilityFocus(obj);
      }
    };
    return {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
  }, []).showActionsImperativeApi);
  let items = [canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp6, canUseScheduledMessages, channel.id, onPressAction, onPollsPress, onAttachPress];
  noop.useMemo(() => {
    let result = canUpload;
    if (canUpload) {
      result = !closure_15;
    }
    if (result) {
      let obj = ImagePickerUtils;
      result = obj.isImageCaptureIntentSupported();
    }
    const items = [];
    if (result) {
      obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.uje3P9);
      obj.IconComponent = CameraIcon.CameraIcon;
      obj.action = function action() {
        return onPressAction({}, canUpload.CAMERA);
      };
      items.push(obj);
    }
    if (canUpload) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.Zmm6dN);
      obj.IconComponent = ImageIcon.ImageIcon;
      obj.action = function action() {
        return onPressAction({}, canUpload.ALL_PHOTOS);
      };
      items.push(obj);
    }
    if (canPostPolls) {
      const obj1 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj1.label = intl3.string(util.t.RgIi2B);
      obj1.IconComponent = PollsIcon.PollsIcon;
      obj1.action = onPollsPress;
      items.push(obj1);
    }
    if (canStartThreads) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj2.label = intl4.string(util.t["7Xm5QI"]);
      obj2.IconComponent = ThreadPlusIcon.ThreadPlusIcon;
      obj2.action = function action() {
        return onPressAction({}, canUpload.THREAD);
      };
      items.push(obj2);
    }
    if (isAppLauncherEnabled) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl5 = util.intl;
      obj3.label = intl5.string(util.t.PHjkRE);
      obj3.IconComponent = AppsIcon.AppsIcon;
      obj3.action = function action() {
        return onPressAction({}, canUpload.APPS);
      };
      items.push(obj3);
    }
    if (canUpload) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl6 = util.intl;
      obj4.label = intl6.string(util.t["8Hvr3+"]);
      obj4.IconComponent = AttachmentIcon.AttachmentIcon;
      obj4.action = onAttachPress;
      items.push(obj4);
    }
    if (canUseScheduledMessages) {
      const obj5 = { label: null, IconComponent: null, action: null };
      const intl7 = util.intl;
      obj5.label = intl7.string(util.t["3+ii4F"]);
      obj5.IconComponent = CalendarPlusIcon.CalendarPlusIcon;
      obj5.action = function action() {
        return canStartThreads(isAppLauncherEnabled[25]).openScheduleMessageActionSheet(id.id, canStartThreads(isAppLauncherEnabled[26]).ScheduledMessageEntryPoint.ATTACH_MENU);
      };
      items.push(obj5);
    }
    return items;
  }, items);
  let items1 = [onContextMenuOpen];
  const onOpen = noop.useCallback(() => {
    const obj = { type: constants.OPENED };
    obj.track(AnalyticEvents.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    if (onContextMenuOpen != null) {
      onContextMenuOpen();
    }
  }, items1);
  const onClose = noop.useCallback((arg0) => {
    if (arg0) {
      channel(isAppLauncherEnabled[27]);
      const obj = { type: canPostPolls.CLOSED };
      obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    }
  }, []);
  const items2 = [];
  obj = { type: canUpload.PHOTOS, active: null };
  const tmp8 = onPressAction(noop.useState(false), 2);
  obj.active = keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA || keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.APP_LAUNCHER;
  items2.push(obj);
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
  obj = { children: null };
  const animatedStyle = canStartThreads(isAppLauncherEnabled[28]).useAnimatedStyle(X);
  obj1 = {
    style: null,
    children: items2.map((item, index) => {
      ({ type, active } = item);
      if (canUpload.PHOTOS === type) {
        if (length.length > 0) {
          let obj = {
            items: tmp31,
            triggerOnLongPress: true,
            align: "above",
            onOpen,
            onClose,
            children(arg0) {
                  ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
                  let obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
                  const tmp = ChatInputActionButtonDefault;
                  const items = [ref, closure_20, closure_2_9];
                  const items1 = [...items.filter(Boolean)];
                  obj.ref = mergeProps.mergeRefs.apply(items1);
                  const intl = util.intl;
                  obj.accessibilityLabel = intl.string(util.t.aDZSuz);
                  const intl2 = util.intl;
                  obj.accessibilityHint = intl2.string(util.t.o7j1jA);
                  obj = { expanded: active };
                  obj.accessibilityState = obj;
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
          let tmp44Result = onAttachPress(canStartThreads(isAppLauncherEnabled[29]).ContextMenu, obj, index);
        } else {
          if (null != closure_9) {
            let obj4 = canStartThreads(tmp46[31]);
            let mergeRefsResult = obj4.mergeRefs(closure_20, tmp48);
          } else {
            mergeRefsResult = closure_20;
          }
          obj = { ref: mergeRefsResult, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
          let intl2 = canStartThreads(tmp46[17]).intl;
          obj.accessibilityLabel = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
          const intl3 = canStartThreads(tmp46[17]).intl;
          obj.accessibilityHint = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
          const obj1 = { expanded: active };
          obj.accessibilityState = obj1;
          obj.active = active;
          obj.activeIconStyle = activeBrand.activeBrand;
          obj.disabled = disabled;
          obj.IconComponent = canStartThreads(isAppLauncherEnabled[32]).MediaKeyboardButtonIcon;
          obj.onPress = function onPress(arg0) {
            return onPressAction(arg0, canUpload.PHOTOS);
          };
          tmp44Result = onAttachPress(channel(isAppLauncherEnabled[30]), obj, index);
          const tmp47 = channel(isAppLauncherEnabled[30]);
        }
        return tmp44Result;
      } else if (tmp.APPS === type) {
        const obj2 = { accessible: !closure_24, active, channel, onPress: onPressAction, styleButton, styleActiveIcon: activeBrand.activeBrand };
        return onAttachPress(channel(isAppLauncherEnabled[33]), obj2, index);
      } else if (tmp.ALL_PHOTOS === type) {
        const obj3 = { accessibilityLabel: null, accessible: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        let intl = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj3.accessibilityLabel = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In);
        obj3.accessible = !closure_24;
        obj4 = { expanded: active };
        obj3.accessibilityState = obj4;
        obj3.active = active;
        obj3.activeIconStyle = activeBrand.activeBrand;
        obj3.disabled = !canUpload;
        obj3.IconComponent = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
        obj3.onPress = function onPress(arg0) {
          return onPressAction(arg0, canUpload.ALL_PHOTOS);
        };
        obj3.style = styleButton;
        return onAttachPress(channel(isAppLauncherEnabled[30]), obj3, index);
      } else {
        obj = { accessible: !closure_24, canStartThreads: active, channel, onPress: onPressAction, styleButtonWrapper: activeBrand.buttonWrapper, styleButton, shouldShowThread: null };
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
  obj1.style = items3;
  obj.children = onAttachPress(tmp4(isAppLauncherEnabled[28]).View, obj1);
  return onAttachPress(closure_9, obj);
});
forwardRefResult.displayName = "ChatInputActions";
let obj2 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default noop.memo(forwardRefResult);