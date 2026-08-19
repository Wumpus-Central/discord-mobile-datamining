// discord_app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import TextAreaCta from "../ChatInputConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
({ ChatInputActionType: c5, ChatInputOmniButtonActionType: closure_6, CHAT_INPUT_TIMING_CONFIG } = TextAreaCta);
({ jsx: closure_8, Fragment: c9 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BG };
obj[1] = obj;
const createCacheKey = { maxHeight: require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT + require("MINIMUM_HIT_AREA").SMALL_BUTTON_PADDING };
obj[2] = createCacheKey;
obj[3] = { tintColor: ThemesDefault.colors.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function ChatInputActionsTsx1(){const{chatInputFloating,withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;if(chatInputFloating){return{opacity:1};}return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}" };
const forwardRefResult = importAllResult.forwardRef((canStartThreads, ref) => {
  canStartThreads = canStartThreads.canStartThreads;
  const channel = canStartThreads.channel;
  const isAppLauncherEnabled = canStartThreads.isAppLauncherEnabled;
  ({ keyboardType, onPressAction } = canStartThreads);
  ({ shouldPhotosButtonBeDisabled: closure_4, canUpload } = canStartThreads);
  const canPostPolls = canStartThreads.canPostPolls;
  const onPollsPress = canStartThreads.onPollsPress;
  const onAttachPress = canStartThreads.onAttachPress;
  const photosButtonExternalRef = canStartThreads.photosButtonExternalRef;
  closure_24 = undefined;
  let sum1;
  let obj = canStartThreads(isAppLauncherEnabled[8]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActions" });
  const enabled = mobileVisualRefreshConfig.enabled;
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  let tmp4 = chatInputFloating();
  closure_12 = tmp4;
  obj1 = canStartThreads(isAppLauncherEnabled[9]);
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
  closure_15 = tmp10;
  let obj6 = canStartThreads(isAppLauncherEnabled[15]);
  const canUseScheduledMessages = obj6.useCanUseScheduledMessages();
  const tmp12 = onPressAction(importAllResult.useState(false), 2);
  closure_17 = tmp12[1];
  const tmp13 = onPressAction(importAllResult.useState(true), 2);
  closure_18 = tmp13[1];
  closure_19 = importAllResult.useRef(null);
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
        callback(isAppLauncherEnabled[16]);
        const obj = { ref: closure_19, delay: 0 };
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
        result = !closure_15;
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
          return callback({}, canUpload.CAMERA);
        };
        items.push(obj);
      }
      if (canUpload) {
        obj = { label: null, IconComponent: null, action: null };
        const intl2 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj[0] = intl2.string(canStartThreads(isAppLauncherEnabled[18]).t.Zmm6dN);
        obj[1] = canStartThreads(isAppLauncherEnabled[20]).ImageIcon;
        obj[2] = function action() {
          return callback({}, canUpload.ALL_PHOTOS);
        };
        items.push(obj);
      }
      if (canPostPolls) {
        obj1 = { label: null, IconComponent: null, action: null };
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
          return callback({}, canUpload.THREAD);
        };
        items.push(obj2);
      }
      if (isAppLauncherEnabled) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl5 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj3[0] = intl5.string(canStartThreads(isAppLauncherEnabled[18]).t.PHjkRE);
        obj3[1] = canStartThreads(isAppLauncherEnabled[23]).AppsIcon;
        obj3[2] = function action() {
          return callback({}, canUpload.APPS);
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
          return canStartThreads(isAppLauncherEnabled[26]).openScheduleMessageActionSheet(id.id);
        };
        items.push(obj5);
      }
      return items;
    } else {
      return items;
    }
  }, items);
  closure_21 = importAllResult.useCallback(() => {
    channel(isAppLauncherEnabled[27]);
    const obj = { type: canPostPolls.OPENED };
    obj.track(onPollsPress.CHAT_INPUT_OMNI_BUTTON_ACTION, obj);
  }, []);
  closure_22 = importAllResult.useCallback((arg0) => {
    if (arg0) {
      channel(isAppLauncherEnabled[27]);
      const obj = { type: null };
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
  keyboardWillOpen = tmp21;
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
  closure_24 = tmp24;
  let num = 0;
  if (items1.length > 1) {
    num = (items1.length - 1) * token2;
  }
  sum1 = items1.length * sum + num;
  function ot() {
    if (chatInputFloating) {
      let obj = { opacity: 1 };
    } else {
      canStartThreads(isAppLauncherEnabled[29]);
      obj = { overflow: "hidden", opacity: 1, width: null };
      obj[2] = obj.withTiming(closure_24 ? c14 : sum1, enabled);
    }
    return obj;
  }
  obj3 = { chatInputFloating, withTiming: tmp(tmp2[29]).withTiming, showPhotosOnly: tmp24, actionButtonWidth: sum, actionButtonsWidth: sum1, timingConfig: enabled };
  ot.__closure = obj3;
  ot.__workletHash = 11213591113353;
  ot.__initData = closure_12;
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
    children: items1.map((item, index) => {
      ({ type, active } = item);
      if (canUpload.PHOTOS === type) {
        if (enabled) {
          if (length.length > 0) {
            let obj = { items: null, triggerOnLongPress: true, align: "above", onOpen: null, onClose: null, children: null };
            obj[0] = tmp30;
            obj[3] = closure_21;
            obj[4] = closure_22;
            obj[5] = function children(arg0) {
              ({ ref, accessibilityActions, onAccessibilityAction } = arg0);
              let obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
              const tmp2 = channel(isAppLauncherEnabled[31]);
              const items = [ref, closure_1_19, photosButtonExternalRef];
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
              obj[7] = closure_1_12.activeBrand;
              obj[8] = closure_1_4;
              obj[9] = canStartThreads(isAppLauncherEnabled[33]).MediaKeyboardButtonIcon;
              obj[10] = function onPress(arg0) {
                return callback(arg0, closure_1_5.PHOTOS);
              };
              let tmp4;
              if (!chatInputFloating) {
                tmp4 = closure_1_13;
              }
              obj[11] = tmp4;
              return onAttachPress(tmp2, obj);
            };
            let tmp31Result = onAttachPress(canStartThreads(isAppLauncherEnabled[30]).ContextMenu, obj, index);
          }
          return tmp31Result;
        }
        if (null != photosButtonExternalRef) {
          let obj4 = canStartThreads(isAppLauncherEnabled[32]);
          let mergeRefsResult = obj4.mergeRefs(closure_19, tmp35);
        } else {
          mergeRefsResult = closure_19;
        }
        obj = { ref: null, accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        obj[0] = mergeRefsResult;
        let intl2 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj[1] = intl2.string(canStartThreads(isAppLauncherEnabled[18]).t.aDZSuz);
        const intl3 = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj[2] = intl3.string(canStartThreads(isAppLauncherEnabled[18]).t.o7j1jA);
        obj1 = { expanded: null };
        obj1[0] = active;
        obj[3] = obj1;
        obj[4] = active;
        obj[5] = closure_12.activeBrand;
        obj[6] = closure_4;
        obj[7] = canStartThreads(isAppLauncherEnabled[33]).MediaKeyboardButtonIcon;
        obj[8] = function onPress(arg0) {
          return callback(arg0, canUpload.PHOTOS);
        };
        let tmp44;
        if (!chatInputFloating) {
          tmp44 = closure_13;
        }
        obj[9] = tmp44;
        tmp31Result = onAttachPress(channel(isAppLauncherEnabled[31]), obj, index);
        const tmp34 = channel(isAppLauncherEnabled[31]);
      } else if (canUpload.APPS === type) {
        const obj2 = { accessible: null, active: null, channel: null, onPress: null, styleButton: null, styleActiveIcon: null };
        obj2[0] = !closure_24;
        obj2[1] = active;
        obj2[2] = channel;
        obj2[3] = onPressAction;
        obj2[4] = closure_13;
        obj2[5] = closure_12.activeBrand;
        return onAttachPress(channel(isAppLauncherEnabled[34]), obj2, index);
      } else if (canUpload.ALL_PHOTOS === type) {
        const obj3 = { accessibilityLabel: null, accessible: null, accessibilityState: null, active: null, activeIconStyle: null, disabled: null, IconComponent: null, onPress: null, style: null };
        let intl = canStartThreads(isAppLauncherEnabled[18]).intl;
        obj3[0] = intl.string(canStartThreads(isAppLauncherEnabled[18]).t.ZT24In);
        obj3[1] = !closure_24;
        obj4 = { expanded: null };
        obj4[0] = active;
        obj3[2] = obj4;
        obj3[3] = active;
        obj3[4] = closure_12.activeBrand;
        obj3[5] = !canUpload;
        obj3[6] = canStartThreads(isAppLauncherEnabled[20]).ImageIcon;
        obj3[7] = function onPress(arg0) {
          return callback(arg0, canUpload.ALL_PHOTOS);
        };
        obj3[8] = closure_13;
        return onAttachPress(channel(isAppLauncherEnabled[31]), obj3, index);
      } else {
        obj = { accessible: null, canStartThreads: null, channel: null, onPress: null, styleButtonWrapper: null, styleButton: null, shouldShowThread: null };
        obj[0] = !closure_24;
        obj[1] = active;
        obj[2] = channel;
        obj[3] = onPressAction;
        obj[4] = closure_12.buttonWrapper;
        obj[5] = closure_13;
        obj[6] = keyboardWillOpen;
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
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActions.tsx");

export default memoResult;