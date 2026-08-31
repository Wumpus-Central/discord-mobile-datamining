// discord_app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import TextAreaCta from "../ChatInputConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
({ ChatInputActionType: c5, ChatInputOmniButtonActionType: closure_6 } = TextAreaCta);
({ jsx: closure_8, Fragment: c9 } = jsxProd);
let obj = { actions: { flexDirection: "row", alignItems: "center" }, themedChatInput: null, buttonWrapper: null, activeBrand: null };
obj = { backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG };
obj[1] = obj;
createCacheKey = { maxHeight: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT + require("MINIMUM_HIT_AREA").SMALL_BUTTON_PADDING };
obj[2] = createCacheKey;
obj[3] = { tintColor: ThemesDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function ChatInputActionsTsx1(){return{opacity:1};}" };
const forwardRefResult = importAllResult.forwardRef((canStartThreads, ref) => {
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  ({ photosButtonExternalRef: closure_9, onContextMenuOpen } = canStartThreads);
  closure_11 = undefined;
  closure_12 = undefined;
  closure_13 = undefined;
  let keyboardWillOpen;
  closure_15 = undefined;
  let canUseScheduledMessages;
  c17 = undefined;
  c18 = undefined;
  closure_19 = undefined;
  closure_20 = undefined;
  closure_21 = undefined;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  let tmp = onContextMenuOpen();
  closure_11 = tmp;
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  closure_12 = obj.useClientThemesOverride(tmp.themedChatInput);
  obj1 = canStartThreads(isAppLauncherEnabled[9]);
  const token = obj1.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  closure_13 = channel(isAppLauncherEnabled[10])({ includeCustomKeyboard: true });
  keyboardWillOpen = canStartThreads(isAppLauncherEnabled[11]).useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.SYSTEM).keyboardWillOpen;
  const tmp6 = channel(isAppLauncherEnabled[13])(channel);
  closure_15 = tmp6;
  let obj3 = canStartThreads(isAppLauncherEnabled[11]);
  const tmp4 = channel;
  canUseScheduledMessages = canStartThreads(isAppLauncherEnabled[14]).useCanUseScheduledMessages();
  let obj4 = canStartThreads(isAppLauncherEnabled[14]);
  [c17, c18] = onPressAction(importAllResult.useState(false), 2);
  const tmp9 = onPressAction(importAllResult.useState(true), 2);
  closure_19 = tmp9[1];
  closure_20 = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, importAllResult.useMemo(() => {
    closure_0 = {
      onDismissActions(arg0) {
        callback2(arg0);
        callback3(false);
      },
      onShowActions(arg0) {
        callback2(arg0);
        callback3(true);
      },
      focusPhotosButton() {
        let obj = callback(closure_1_2[15]);
        obj = { ref: closure_20, delay: 0 };
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
  closure_21 = importAllResult.useMemo(() => {
    let result = canUpload;
    if (canUpload) {
      result = !closure_15;
    }
    if (result) {
      let obj = canStartThreads(isAppLauncherEnabled[16]);
      result = obj.isImageCaptureIntentSupported();
    }
    const items = [];
    if (result) {
      obj = { label: null, IconComponent: null, action: null };
      const intl = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj[0] = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.uje3P9);
      obj[1] = canStartThreads(isAppLauncherEnabled[18]).CameraIcon;
      obj[2] = function action() {
        return callback({}, closure_1_5.CAMERA);
      };
      items.push(obj);
    }
    if (canUpload) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj[0] = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.Zmm6dN);
      obj[1] = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
      obj[2] = function action() {
        return callback({}, closure_1_5.ALL_PHOTOS);
      };
      items.push(obj);
    }
    if (canPostPolls) {
      obj1 = { label: null, IconComponent: null, action: null };
      const intl3 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj1[0] = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.RgIi2B);
      obj1[1] = canStartThreads(isAppLauncherEnabled[20]).PollsIcon;
      obj1[2] = onPollsPress;
      items.push(obj1);
    }
    if (canStartThreads) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl4 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj2[0] = intl4.string(canStartThreads(isAppLauncherEnabled[17]).t["7Xm5QI"]);
      obj2[1] = canStartThreads(isAppLauncherEnabled[21]).ThreadPlusIcon;
      obj2[2] = function action() {
        return callback({}, closure_1_5.THREAD);
      };
      items.push(obj2);
    }
    if (isAppLauncherEnabled) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl5 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj3[0] = intl5.string(canStartThreads(isAppLauncherEnabled[17]).t.PHjkRE);
      obj3[1] = canStartThreads(isAppLauncherEnabled[22]).AppsIcon;
      obj3[2] = function action() {
        return callback({}, closure_1_5.APPS);
      };
      items.push(obj3);
    }
    if (canUpload) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl6 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj4[0] = intl6.string(canStartThreads(isAppLauncherEnabled[17]).t["8Hvr3+"]);
      obj4[1] = canStartThreads(isAppLauncherEnabled[23]).AttachmentIcon;
      obj4[2] = onAttachPress;
      items.push(obj4);
    }
    if (canUseScheduledMessages) {
      const obj5 = { label: null, IconComponent: null, action: null };
      const intl7 = canStartThreads(isAppLauncherEnabled[17]).intl;
      obj5[0] = intl7.string(canStartThreads(isAppLauncherEnabled[17]).t["3+ii4F"]);
      obj5[1] = canStartThreads(isAppLauncherEnabled[24]).CalendarPlusIcon;
      obj5[2] = function action() {
        return closure_1_0(closure_1_2[25]).openScheduleMessageActionSheet(id.id);
      };
      items.push(obj5);
    }
    return items;
  }, items);
  let items1 = [onContextMenuOpen];
  closure_22 = importAllResult.useCallback(() => {
    let obj = channel(isAppLauncherEnabled[26]);
    obj = { type: canPostPolls.OPENED };
    obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    if (onContextMenuOpen != null) {
      onContextMenuOpen();
    }
  }, items1);
  closure_23 = importAllResult.useCallback((arg0) => {
    if (arg0) {
      let obj = channel(isAppLauncherEnabled[26]);
      obj = { type: null };
      obj[0] = canPostPolls.CLOSED;
      obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    }
  }, []);
  const items2 = [];
  obj = { type: canUpload.PHOTOS, active: null };
  const tmp8 = onPressAction(importAllResult.useState(false), 2);
  obj[1] = keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.MEDIA || keyboardType === canStartThreads(isAppLauncherEnabled[12]).KeyboardTypes.APP_LAUNCHER;
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
  X.__initData = closure_11;
  obj = { children: null };
  const animatedStyle = canStartThreads(isAppLauncherEnabled[27]).useAnimatedStyle(X);
  obj1 = {
    style: items3,
    children: items2.map((arg0, arg1) => {
      ({ type, active } = arg0);
      if (canUpload.PHOTOS === type) {
        if (length.length > 0) {
          let obj = { items: null, triggerOnLongPress: true, align: "above", onOpen: null, onClose: null, children: null };
          obj[0] = tmp31;
          obj[3] = closure_22;
          obj[4] = closure_23;
          obj[5] = function children(arg0) {
            ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
            let obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
            const tmp = channel(isAppLauncherEnabled[29]);
            const items = [ref, closure_1_20, closure_1_9];
            const items1 = [...items.filter(Boolean)];
            obj[0] = canStartThreads(isAppLauncherEnabled[30]).mergeRefs.apply(items1);
            const intl = canStartThreads(isAppLauncherEnabled[17]).intl;
            obj[1] = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
            const intl2 = canStartThreads(isAppLauncherEnabled[17]).intl;
            obj[2] = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
            obj = { expanded: active };
            obj[3] = obj;
            obj[4] = accessibilityActions;
            obj[5] = onAccessibilityAction;
            obj[6] = active;
            obj[7] = closure_1_11.activeBrand;
            obj[8] = closure_1_4;
            obj[9] = canStartThreads(isAppLauncherEnabled[31]).MediaKeyboardButtonIcon;
            obj[10] = function onPress(arg0) {
              return callback(arg0, closure_1_5.PHOTOS);
            };
            return onAttachPress(tmp, obj);
          };
          let tmp44Result = onAttachPress(canStartThreads(isAppLauncherEnabled[28]).ContextMenu, obj, arg1);
        } else {
          if (null != closure_9) {
            let obj4 = canStartThreads(tmp46[30]);
            let mergeRefsResult = obj4.mergeRefs(closure_20, tmp48);
          } else {
            mergeRefsResult = closure_20;
          }
          obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null };
          obj[0] = mergeRefsResult;
          let intl2 = canStartThreads(tmp46[17]).intl;
          obj[1] = intl2.string(canStartThreads(isAppLauncherEnabled[17]).t.aDZSuz);
          const intl3 = canStartThreads(tmp46[17]).intl;
          obj[2] = intl3.string(canStartThreads(isAppLauncherEnabled[17]).t.o7j1jA);
          obj1 = { expanded: null };
          obj1[0] = active;
          obj[3] = obj1;
          obj[4] = active;
          obj[5] = closure_11.activeBrand;
          obj[6] = closure_4;
          obj[7] = canStartThreads(isAppLauncherEnabled[31]).MediaKeyboardButtonIcon;
          obj[8] = function onPress(arg0) {
            return callback(arg0, closure_1_5.PHOTOS);
          };
          tmp44Result = onAttachPress(channel(isAppLauncherEnabled[29]), obj, arg1);
          const tmp44 = onAttachPress;
          const tmp47 = channel(isAppLauncherEnabled[29]);
        }
        return tmp44Result;
      } else if (tmp.APPS === type) {
        const obj2 = { accessible: null, active: null, channel: null, onPress: null, styleButton: null, styleActiveIcon: null };
        obj2[0] = !closure_24;
        obj2[1] = active;
        obj2[2] = channel;
        obj2[3] = onPressAction;
        obj2[4] = closure_12;
        obj2[5] = closure_11.activeBrand;
        return onAttachPress(channel(isAppLauncherEnabled[32]), obj2, arg1);
      } else if (tmp.ALL_PHOTOS === type) {
        const obj3 = { accessibilityLabel: null, accessible: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        let intl = canStartThreads(isAppLauncherEnabled[17]).intl;
        obj3[0] = intl.string(canStartThreads(isAppLauncherEnabled[17]).t.ZT24In);
        obj3[1] = !closure_24;
        obj4 = { expanded: null };
        obj4[0] = active;
        obj3[2] = obj4;
        obj3[3] = active;
        obj3[4] = closure_11.activeBrand;
        obj3[5] = !canUpload;
        obj3[6] = canStartThreads(isAppLauncherEnabled[19]).ImageIcon;
        obj3[7] = function onPress(arg0) {
          return callback(arg0, closure_1_5.ALL_PHOTOS);
        };
        obj3[8] = closure_12;
        return onAttachPress(channel(isAppLauncherEnabled[29]), obj3, arg1);
      } else {
        obj = { accessible: null, canStartThreads: null, channel: null, onPress: null, styleButtonWrapper: null, styleButton: null, shouldShowThread: null };
        obj[0] = !closure_24;
        obj[1] = active;
        obj[2] = channel;
        obj[3] = onPressAction;
        obj[4] = closure_11.buttonWrapper;
        obj[5] = closure_12;
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
        obj[6] = tmp12;
        return onAttachPress(channel(isAppLauncherEnabled[33]), obj, "gift-or-thread");
      }
    })
  };
  items3 = [tmp.actions, animatedStyle, { gap: token }];
  obj[0] = onAttachPress(tmp4(isAppLauncherEnabled[27]).View, obj1);
  return onAttachPress(closure_9, obj);
});
forwardRefResult.displayName = "ChatInputActions";
let obj2 = { tintColor: ThemesDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;