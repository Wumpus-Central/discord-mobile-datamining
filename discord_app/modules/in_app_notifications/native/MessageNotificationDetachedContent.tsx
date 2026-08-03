// === Module 10397: MessageNotificationDetachedContent ===

// Module 10397 (MessageNotificationDetachedContent)
import noop from "noop";
import { Keyboard } from "get ActivityIndicator";
import { DEFAULT_ANIMATION_TIMING } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ expandFooterContainer: { position: "absolute", left: 0, right: 0 } });
let closure_10 = { code: "function MessageNotificationDetachedContentTsx1(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING,keyboardHeight,safeAreaBottom}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),transform:[{scale:withTiming(expandedSV.get()?1:0.8,DEFAULT_ANIMATION_TIMING)}],bottom:4+Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationDetachedContent.tsx");

export const MessageNotificationDetachedContent = function MessageNotificationDetachedContent(notification) {
  let confirmation;
  let isExpanded;
  let setConfirmation;
  let showReplyInput;
  let expandedSV;
  let setActionTaken;
  let setExpanded;
  let setAutoDismissing;
  setConfirmation = undefined;
  let c5;
  let bottom;
  let obj = expandedSV(setExpanded[5]);
  const inAppNotificationContext = obj.useInAppNotificationContext();
  expandedSV = inAppNotificationContext.expandedSV;
  setActionTaken = inAppNotificationContext.setActionTaken;
  setExpanded = inAppNotificationContext.setExpanded;
  setAutoDismissing = inAppNotificationContext.setAutoDismissing;
  ({ confirmation, setConfirmation } = inAppNotificationContext);
  let items = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
  ({ isExpanded, showReplyInput } = inAppNotificationContext);
  const callback = setAutoDismissing.useCallback(() => {
    setConfirmation.dismiss();
    setActionTaken(true);
    setExpanded(false);
    setAutoDismissing(true);
    const obj = { type: "message", reaction: null, message: null };
    const intl = expandedSV(setExpanded[6]).intl;
    obj[2] = intl.string(expandedSV(setExpanded[6]).t["b/4dOF"]);
    setConfirmation(obj);
  }, items);
  const tmp7 = setActionTaken(setExpanded[7])();
  c5 = tmp7;
  bottom = setActionTaken(setExpanded[8])().bottom;
  let obj1 = expandedSV(setExpanded[9]);
  const fn = function _() {
    let obj = expandedSV(setExpanded[10]);
    let num = 0;
    if (expandedSV.get()) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, _undefined), transform: null, bottom: null };
    let num2 = 0.8;
    if (expandedSV.get()) {
      num2 = 1;
    }
    obj = { scale: expandedSV(setExpanded[10]).withTiming(num2, _undefined) };
    const items = [obj];
    obj[1] = items;
    obj[2] = 4 + Math.max(_undefined.get(), bottom);
    return obj;
  };
  obj = { withTiming: expandedSV(setExpanded[10]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING: c5, keyboardHeight: tmp7, safeAreaBottom: bottom };
  fn.__closure = obj;
  fn.__workletHash = 1331449062174;
  fn.__initData = closure_10;
  let tmp11 = null;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  if (null != confirmation) {
    obj = { message: null, reaction: null };
    ({ message: obj4[0], reaction: obj4[1] } = confirmation);
    tmp11 = bottom(tmp2(tmp3[11]).ConfirmationToast, obj);
  }
  const children = [tmp11, ];
  let tmp13 = null;
  if (isExpanded) {
    tmp13 = null;
    if (showReplyInput) {
      obj1 = { style: null, children: null };
      const items2 = [tmp.expandFooterContainer, animatedStyle];
      obj1[0] = items2;
      const obj2 = { notification: null, onMessageSent: null };
      obj2[0] = notification.notification;
      obj2[1] = callback;
      obj1[1] = bottom(tmp2(tmp3[12]).MessageReplyInput, obj2);
      tmp13 = bottom(setActionTaken(tmp3[9]).View, obj1);
    }
  }
  children[1] = tmp13;
  return closure_8(closure_7, { children });
};