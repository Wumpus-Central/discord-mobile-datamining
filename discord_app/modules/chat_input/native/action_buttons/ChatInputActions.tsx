// discord_app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
import chainCallbacks from "chainCallbacks";
import importAllResult from "CameraIcon";
import TextAreaCta from "TextAreaCta";
import { AnalyticEvents } from "ME";
import jsxProd from "PollsIcon";
import createCacheKey from "createCacheKey";

let CHAT_INPUT_TIMING_CONFIG;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ ChatInputActionType: c5, ChatInputOmniButtonActionType: closure_6, CHAT_INPUT_TIMING_CONFIG } = TextAreaCta);
({ jsx: metroImportAll, Fragment: c9 } = jsxProd);
let obj = { actions: { flexDirection: "row", alignItems: "center" }, themedChatInput: null, buttonWrapper: null, activeBrand: null };
obj = { backgroundColor: require("Themes").colors.CARD_SECONDARY_BG };
obj[1] = obj;
createCacheKey = { maxHeight: null };
createCacheKey[0] = require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT + require("MINIMUM_HIT_AREA").SMALL_BUTTON_PADDING;
obj[2] = createCacheKey;
obj[3] = { tintColor: require("Themes").colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function ChatInputActionsTsx1(){const{chatInputFloating,withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;if(chatInputFloating){return{opacity:1};}return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}" };
const forwardRefResult = importAllResult.forwardRef((canStartThreads, ref) => {
  let canUpload;
  let closure_4;
  let keyboardType;
  let onPressAction;
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  const photosButtonExternalRef = canStartThreads.photosButtonExternalRef;
  let enabled;
  let chatInputFloating;
  let c12;
  let closure_13;
  let c14;
  let c15;
  let canUseScheduledMessages;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let c23;
  let c24;
  let sum1;
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActions" });
  enabled = mobileVisualRefreshConfig.enabled;
  chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  let tmp4 = chatInputFloating();
  c12 = tmp4;
  let obj1 = canStartThreads(isAppLauncherEnabled[9]);
  closure_13 = obj1.useClientThemesOverride(tmp4.themedChatInput);
  let obj2 = canStartThreads(isAppLauncherEnabled[10]);
  const token = obj2.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = canStartThreads(isAppLauncherEnabled[10]);
  const token1 = obj3.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj4 = canStartThreads(isAppLauncherEnabled[10]);
  const token2 = obj4.useToken(channel(isAppLauncherEnabled[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP);
  const sum = token + 2 * token1;
  c14 = sum;
  let keyboardWillOpen = channel(isAppLauncherEnabled[11])({ includeCustomKeyboard: true });
  let obj5 = canStartThreads(isAppLauncherEnabled[12]);
  const tmp10 = channel(isAppLauncherEnabled[14])(channel);
  c15 = tmp10;
  let obj6 = canStartThreads(isAppLauncherEnabled[15]);
  canUseScheduledMessages = obj6.useCanUseScheduledMessages();
  const tmp12 = onPressAction(importAllResult.useState(false), 2);
  closure_17 = tmp12[1];
  const tmp13 = onPressAction(importAllResult.useState(true), 2);
  closure_18 = tmp13[1];
  closure_19 = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, importAllResult.useMemo(() => {
    let closure_0 = {
      onDismissActions(arg0) {
        callback2(arg0);
        callback3(false);
      },
      onShowActions(arg0) {
        callback2(arg0);
        callback3(true);
      },
      focusPhotosButton() {
        let obj = callback(outer1_2[16]);
        obj = { ref: closure_19, delay: 0 };
        const result = obj.setAccessibilityFocus(obj);
      }
    };
    return {
      showActionsImperativeApi() {
        return closure_0;
      }
    };
  }, []).showActionsImperativeApi);
  let items = [enabled, canPostPolls, canStartThreads, isAppLauncherEnabled, canUpload, tmp10, canUseScheduledMessages, channel.id, onPressAction, onPollsPress, onAttachPress];
  closure_20 = importAllResult.useMemo(() => {
    const items = [];
    if (enabled) {
      let result = canUpload;
      if (canUpload) {
        result = !c15;
      }
      if (result) {
        let obj = canStartThreads(isAppLauncherEnabled[17]);
        result = obj.isImageCaptureIntentSupported();
      }
      if (result) {
        obj = { label: null, IconComponent: null, action: null };
        const intl = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj[0] = intl.string(canStartThreads(isAppLauncherEnabled[18]).t.uje3P9);
        obj[1] = canStartThreads(isAppLauncherEnabled[19]).CameraIcon;
        obj[2] = function action() {
          return callback({}, outer1_5.CAMERA);
        };
        items.push(obj);
      }
      if (canUpload) {
        obj = { label: null, IconComponent: null, action: null };
        const intl2 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj[0] = intl2.string(canStartThreads(isAppLauncherEnabled[18]).t.Zmm6dN);
        obj[1] = canStartThreads(isAppLauncherEnabled[20]).ImageIcon;
        obj[2] = function action() {
          return callback({}, outer1_5.ALL_PHOTOS);
        };
        items.push(obj);
      }
      if (canPostPolls) {
        const obj1 = { label: null, IconComponent: null, action: null };
        const intl3 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj1[0] = intl3.string(canStartThreads(isAppLauncherEnabled[18]).t.RgIi2B);
        obj1[1] = canStartThreads(isAppLauncherEnabled[21]).PollsIcon;
        obj1[2] = onPollsPress;
        items.push(obj1);
      }
      if (canStartThreads) {
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl4 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj2[0] = intl4.string(canStartThreads(isAppLauncherEnabled[18]).t["7Xm5QI"]);
        obj2[1] = canStartThreads(isAppLauncherEnabled[22]).ThreadPlusIcon;
        obj2[2] = function action() {
          return callback({}, outer1_5.THREAD);
        };
        items.push(obj2);
      }
      if (isAppLauncherEnabled) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl5 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj3[0] = intl5.string(canStartThreads(isAppLauncherEnabled[18]).t.PHjkRE);
        obj3[1] = canStartThreads(isAppLauncherEnabled[23]).AppsIcon;
        obj3[2] = function action() {
          return callback({}, outer1_5.APPS);
        };
        items.push(obj3);
      }
      if (canUpload) {
        const obj4 = { label: null, IconComponent: null, action: null };
        const intl6 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj4[0] = intl6.string(canStartThreads(isAppLauncherEnabled[18]).t["8Hvr3+"]);
        obj4[1] = canStartThreads(isAppLauncherEnabled[24]).AttachmentIcon;
        obj4[2] = onAttachPress;
        items.push(obj4);
      }
      if (canUseScheduledMessages) {
        const obj5 = { label: null, IconComponent: null, action: null };
        const intl7 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj5[0] = intl7.string(canStartThreads(isAppLauncherEnabled[18]).t["3+ii4F"]);
        obj5[1] = canStartThreads(isAppLauncherEnabled[25]).HourglassIcon;
        obj5[2] = function action() {
          return outer1_0(outer1_2[26]).openScheduleMessageActionSheet(id.id);
        };
        items.push(obj5);
      }
      return items;
    } else {
      return items;
    }
  }, items);
  closure_21 = importAllResult.useCallback(() => {
    let obj = channel(isAppLauncherEnabled[27]);
    obj = { type: canPostPolls.OPENED };
    obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
  }, []);
  closure_22 = importAllResult.useCallback((arg0) => {
    if (arg0) {
      let obj = channel(isAppLauncherEnabled[27]);
      obj = { type: null };
      obj[0] = canPostPolls.CLOSED;
      obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
    }
  }, []);
  let items1 = [];
  obj = { type: canUpload.PHOTOS, active: null };
  let tmp16 = keyboardType === canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.MEDIA;
  if (!tmp16) {
    let tmp17 = chatInputFloating;
    if (chatInputFloating) {
      tmp17 = keyboardType === tmp(tmp2[13]).KeyboardTypes.APP_LAUNCHER;
    }
    tmp16 = tmp17;
  }
  obj[1] = tmp16;
  items1.push(obj);
  let tmp19 = !chatInputFloating;
  if (!chatInputFloating) {
    tmp19 = isAppLauncherEnabled;
  }
  if (tmp19) {
    obj = { type: null, active: null };
    obj[0] = tmp15.APPS;
    obj[1] = keyboardType === tmp(tmp2[13]).KeyboardTypes.APP_LAUNCHER;
    items1.push(obj);
  }
  let tmp21 = true === canStartThreads;
  if (tmp21) {
    if (!keyboardWillOpen) {
      keyboardWillOpen = obj5.useKeyboardContextForType(canStartThreads(isAppLauncherEnabled[13]).KeyboardTypes.SYSTEM).keyboardWillOpen;
    }
    if (!keyboardWillOpen) {
      keyboardWillOpen = tmp12[0];
    }
    tmp21 = keyboardWillOpen;
  }
  c23 = tmp21;
  if (!chatInputFloating) {
    if (tmp21) {
      obj1 = { type: null };
      obj1[0] = tmp15.THREAD;
      items1.push(obj1);
    } else if (canStartThreads.shouldShowGiftButton) {
      obj2 = { type: null };
      obj2[0] = tmp15.NITRO_GIFT;
      items1.push(obj2);
    }
  }
  c24 = tmp24;
  let num = 0;
  if (items1.length > 1) {
    num = (items1.length - 1) * token2;
  }
  sum1 = items1.length * sum + num;
  function ot() {
    if (chatInputFloating) {
      let obj = { opacity: 1 };
    } else {
      obj = canStartThreads(isAppLauncherEnabled[29]);
      obj = { overflow: "hidden", opacity: 1, width: null };
      obj[2] = obj.withTiming(c24 ? c14 : sum1, enabled);
    }
    return obj;
  }
  obj3 = { chatInputFloating, withTiming: tmp(tmp2[29]).withTiming, showPhotosOnly: tmp24, actionButtonWidth: sum, actionButtonsWidth: sum1, timingConfig: enabled };
  ot.__closure = obj3;
  ot.__workletHash = 11213591113353;
  ot.__initData = c12;
  const animatedStyle = canStartThreads(isAppLauncherEnabled[28]).useAnimatedStyle(ot);
  const items2 = [tmp4.actions, animatedStyle, ];
  obj4 = { gap: token2, maxWidth: null };
  let tmp29;
  if (!chatInputFloating) {
    tmp29 = sum1;
  }
  obj5 = { children: null };
  obj6 = {
    style: items2,
    children: items1.map((arg0, arg1) => {
      let active;
      let type;
      ({ type, active } = arg0);
      if (canUpload.PHOTOS === type) {
        if (enabled) {
          if (length.length > 0) {
            let obj = { items: null, triggerOnLongPress: true, align: "above", onOpen: null, onClose: null, children: null };
            obj[0] = tmp30;
            obj[3] = closure_21;
            obj[4] = closure_22;
            obj[5] = function children(arg0) {
              let accessibilityActions;
              let onAccessibilityAction;
              let ref;
              ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
              let obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
              const tmp = onAttachPress;
              const tmp2 = channel(isAppLauncherEnabled[31]);
              const items = [ref, outer1_19, outer1_9];
              const items1 = [...items.filter(Boolean)];
              obj[0] = canStartThreads(isAppLauncherEnabled[32]).mergeRefs.apply(items1);
              const intl = canStartThreads(isAppLauncherEnabled[18]).intl;
              obj[1] = intl.string(canStartThreads(isAppLauncherEnabled[18]).t.aDZSuz);
              const intl2 = canStartThreads(isAppLauncherEnabled[18]).intl;
              obj[2] = intl2.string(canStartThreads(isAppLauncherEnabled[18]).t.o7j1jA);
              obj = { expanded: active };
              obj[3] = obj;
              obj[4] = accessibilityActions;
              obj[5] = onAccessibilityAction;
              obj[6] = active;
              obj[7] = outer1_12.activeBrand;
              obj[8] = outer1_4;
              obj[9] = canStartThreads(isAppLauncherEnabled[33]).MediaKeyboardButtonIcon;
              obj[10] = function onPress(arg0) {
                return callback(arg0, outer1_5.PHOTOS);
              };
              let tmp4;
              if (!outer1_11) {
                tmp4 = outer1_13;
              }
              obj[11] = tmp4;
              return tmp(tmp2, obj);
            };
            let tmp31Result = onAttachPress(canStartThreads(isAppLauncherEnabled[30]).ContextMenu, obj, arg1);
          }
          return tmp31Result;
        }
        if (null != photosButtonExternalRef) {
          let obj4 = canStartThreads(tmp33[32]);
          let mergeRefsResult = obj4.mergeRefs(closure_19, tmp35);
        } else {
          mergeRefsResult = closure_19;
        }
        obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        obj[0] = mergeRefsResult;
        let intl2 = canStartThreads(tmp33[18]).intl;
        obj[1] = intl2.string(canStartThreads(isAppLauncherEnabled[18]).t.aDZSuz);
        const intl3 = canStartThreads(tmp33[18]).intl;
        obj[2] = intl3.string(canStartThreads(isAppLauncherEnabled[18]).t.o7j1jA);
        const obj1 = { expanded: null };
        obj1[0] = active;
        obj[3] = obj1;
        obj[4] = active;
        obj[5] = _undefined.activeBrand;
        obj[6] = closure_4;
        obj[7] = canStartThreads(isAppLauncherEnabled[33]).MediaKeyboardButtonIcon;
        obj[8] = function onPress(arg0) {
          return callback(arg0, outer1_5.PHOTOS);
        };
        let tmp44;
        if (!chatInputFloating) {
          tmp44 = closure_13;
        }
        obj[9] = tmp44;
        tmp31Result = onAttachPress(channel(isAppLauncherEnabled[31]), obj, arg1);
        const tmp31 = onAttachPress;
        const tmp34 = channel(isAppLauncherEnabled[31]);
      } else if (tmp.APPS === type) {
        const obj2 = { accessible: null, active: null, channel: null, onPress: null, styleButton: null, styleActiveIcon: null };
        obj2[0] = !c24;
        obj2[1] = active;
        obj2[2] = channel;
        obj2[3] = onPressAction;
        obj2[4] = closure_13;
        obj2[5] = _undefined.activeBrand;
        return onAttachPress(channel(isAppLauncherEnabled[34]), obj2, arg1);
      } else if (tmp.ALL_PHOTOS === type) {
        const obj3 = { accessibilityLabel: null, accessible: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        let intl = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj3[0] = intl.string(canStartThreads(isAppLauncherEnabled[18]).t.ZT24In);
        obj3[1] = !c24;
        obj4 = { expanded: null };
        obj4[0] = active;
        obj3[2] = obj4;
        obj3[3] = active;
        obj3[4] = _undefined.activeBrand;
        obj3[5] = !canUpload;
        obj3[6] = canStartThreads(isAppLauncherEnabled[20]).ImageIcon;
        obj3[7] = function onPress(arg0) {
          return callback(arg0, outer1_5.ALL_PHOTOS);
        };
        obj3[8] = closure_13;
        return onAttachPress(channel(isAppLauncherEnabled[31]), obj3, arg1);
      } else {
        obj = { accessible: null, canStartThreads: null, channel: null, onPress: null, styleButtonWrapper: null, styleButton: null, shouldShowThread: null };
        obj[0] = !c24;
        obj[1] = active;
        obj[2] = channel;
        obj[3] = onPressAction;
        obj[4] = _undefined.buttonWrapper;
        obj[5] = closure_13;
        obj[6] = c23;
        return onAttachPress(channel(isAppLauncherEnabled[35]), obj, "gift-or-thread");
      }
    })
  };
  obj4[1] = tmp29;
  items2[2] = obj4;
  obj5[0] = onAttachPress(channel(isAppLauncherEnabled[28]).View, obj6);
  return onAttachPress(photosButtonExternalRef, obj5);
});
forwardRefResult.displayName = "ChatInputActions";
let obj2 = { tintColor: require("Themes").colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;