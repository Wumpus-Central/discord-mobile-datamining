// discord_app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import mergeProps from "../../../../design/utils/native/mergeProps.native.tsx";
import ImagePickerUtils from "../../../image/native/ImagePickerUtils.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import CameraIcon from "../../../../design/components/Icon/native/redesign/generated/CameraIcon.tsx";
import CalendarPlusIcon from "../../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import ThreadPlusIcon from "../../../../design/components/Icon/native/redesign/generated/ThreadPlusIcon.tsx";
import ChatInputActionButtonDefault from "ChatInputActionButton.tsx";
import MediaKeyboardButtonIcon from "../../../media_keyboard/native/MediaKeyboardButtonIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class ChatInputActions {
  constructor(arg0) {
    canStartThreads = global.canStartThreads;
    channel = global.channel;
    isAppLauncherEnabled = global.isAppLauncherEnabled;
    ({ keyboardType, onPressAction } = global);
    ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = global);
    canPostPolls = global.canPostPolls;
    onPollsPress = global.onPollsPress;
    onAttachPress = global.onAttachPress;
    ({ photosButtonExternalRef, onContextMenuOpen } = global);
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    keyboardWillOpen = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    closure_22 = undefined;
    closure_23 = undefined;
    closure_24 = undefined;
    tmp = onContextMenuOpen();
    closure_11 = tmp;
    tmp2 = canStartThreads;
    tmp3 = isAppLauncherEnabled;
    obj = canStartThreads(isAppLauncherEnabled[8]);
    closure_12 = obj.useClientThemesOverride(tmp.themedChatInput);
    obj2 = canStartThreads(isAppLauncherEnabled[9]);
    tmp4 = channel;
    token = obj2.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
    closure_13 = channel(isAppLauncherEnabled[10])({ includeCustomKeyboard: true });
    obj3 = canStartThreads(isAppLauncherEnabled[11]);
    keyboardWillOpen = obj3.useKeyboardContextForType(
      canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.SYSTEM,
    ).keyboardWillOpen;
    tmp6 = channel(isAppLauncherEnabled[13])(channel);
    closure_15 = tmp6;
    obj4 = canStartThreads(isAppLauncherEnabled[14]);
    canSendScheduledMessagesInChannel = obj4.useCanSendScheduledMessagesInChannel(channel);
    closure_16 = canSendScheduledMessagesInChannel;
    tmp8 = onPressAction(closure_4.useState(false), 2);
    [closure_17, closure_18] = tmp8;
    tmp9 = onPressAction(closure_4.useState(true), 2);
    closure_19 = tmp9[1];
    closure_20 = closure_4.useRef(null);
    imperativeHandle = closure_4.useImperativeHandle(
      global.ref,
      closure_4.useMemo(() => {
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
          },
        };
        return {
          showActionsImperativeApi() {
            return closure_0;
          },
        };
      }, []).showActionsImperativeApi,
    );
    items = [, , , , , , , , ,];
    items[0] = canPostPolls;
    items[1] = canStartThreads;
    items[2] = isAppLauncherEnabled;
    items[3] = canUpload;
    items[4] = tmp6;
    items[5] = canSendScheduledMessagesInChannel;
    items[6] = channel.id;
    items[7] = onPressAction;
    items[8] = onPollsPress;
    items[9] = onAttachPress;
    closure_21 = closure_4.useMemo(() => {
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
          return canStartThreads(isAppLauncherEnabled[25]).openScheduleMessageActionSheet(
            id.id,
            canStartThreads(isAppLauncherEnabled[26]).ScheduledMessageEntryPoint.ATTACH_MENU,
          );
        };
        items.push(obj8);
      }
      return items;
    }, items);
    items1 = [];
    items1[0] = onContextMenuOpen;
    closure_22 = closure_4.useCallback(() => {
      AnalyticsUtilsDefault.track(AnalyticEvents.CHAT_INPUT_OMNI_BUTTON_ACTION, { type: constants.OPENED });
      if (onContextMenuOpen != null) {
        onContextMenuOpen();
      }
    }, items1);
    closure_23 = closure_4.useCallback((arg0) => {
      if (arg0) {
        const obj2 = { type: canPostPolls.CLOSED };
        channel(isAppLauncherEnabled[27]).track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj2);
        const obj = channel(isAppLauncherEnabled[27]);
      }
    }, []);
    items2 = [];
    obj1 = { type: canUpload.PHOTOS, active: null };
    tmp11 =
      keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA ||
      keyboardType === tmp2(tmp3[12]).KeyboardTypes.APP_LAUNCHER;
    obj1.active = tmp11;
    arr1 = items2.push(obj1);
    closure_24 = !tmp9[0];
    tmp2Result = tmp2(tmp3[28]);
    class Q {
      constructor() {
        return { opacity: 1 };
      }
    }
    Q.__closure = {};
    Q.__workletHash = 13622805272332;
    Q.__initData = closure_11;
    obj9 = { children: null };
    animatedStyle = tmp2Result.useAnimatedStyle(Q);
    obj10 = {
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
                const obj = {
                  ref: null,
                  accessibilityLabel: null,
                  accessibilityHint: null,
                  accessibilityState: null,
                  accessibilityActions: null,
                  onAccessibilityAction: null,
                  active: null,
                  activeIconStyle: null,
                  disabled: null,
                  IconComponent: null,
                  onPress: null,
                };
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
                return closure_3_8(tmp, obj);
              },
            };
            let tmp44Result = onAttachPress(canStartThreads(isAppLauncherEnabled[29]).ContextMenu, obj2, index);
          } else {
            if (null != closure_9) {
              let mergeRefsResult = canStartThreads(isAppLauncherEnabled[31]).mergeRefs(closure_20, tmp48);
              const obj5 = canStartThreads(isAppLauncherEnabled[31]);
            } else {
              mergeRefsResult = closure_20;
            }
            const obj3 = {
              ref: mergeRefsResult,
              accessibilityLabel: null,
              accessibilityHint: null,
              accessibilityState: null,
              active: null,
              activeIconStyle: null,
              disabled: null,
              IconComponent: null,
              onPress: null,
            };
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
          const obj6 = {
            accessible: !closure_24,
            active,
            channel,
            onPress: onPressAction,
            styleButton,
            styleActiveIcon: activeBrand.activeBrand,
          };
          return onAttachPress(channel(isAppLauncherEnabled[33]), obj6, index);
        } else if (canUpload.ALL_PHOTOS === type) {
          const obj7 = {
            accessibilityLabel: null,
            accessible: null,
            accessibilityState: null,
            active: null,
            activeIconStyle: null,
            disabled: null,
            IconComponent: null,
            onPress: null,
            style: null,
          };
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
          let obj = {
            accessible: !closure_24,
            canStartThreads: active,
            channel,
            onPress: onPressAction,
            styleButtonWrapper: activeBrand.buttonWrapper,
            styleButton,
            shouldShowThread: null,
          };
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
      }),
    };
    items3 = [, ,];
    items3[0] = tmp.actions;
    items3[1] = animatedStyle;
    items3[2] = { gap: token };
    obj10.style = items3;
    obj9.children = onAttachPress(tmp4(tmp3[28]).View, obj10);
    return onAttachPress(photosButtonExternalRef, obj9);
  }
}
const ChatInputConstants = fn(11652);
({ ChatInputActionType: hasOwnProperty, ChatInputOmniButtonActionType: metroRequire } = ChatInputConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  actions: { flexDirection: "row", alignItems: "center" },
  themedChatInput: { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG },
  buttonWrapper: null,
  activeBrand: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG };
obj.buttonWrapper = { maxHeight: fn(5380).SMALL_BUTTON_HEIGHT + fn(5380).SMALL_BUTTON_PADDING };
let obj4 = { maxHeight: fn(5380).SMALL_BUTTON_HEIGHT + fn(5380).SMALL_BUTTON_PADDING };
obj.activeBrand = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_10 = createStyles.createStyles(obj);
let __initData = { code: "function ChatInputActionsTsx1(){return{opacity:1};}" };
ChatInputActions.displayName = "ChatInputActions";
let obj5 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default noop.memo(ChatInputActions);
