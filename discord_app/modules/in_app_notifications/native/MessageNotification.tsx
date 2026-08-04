// discord_app/modules/in_app_notifications/native/MessageNotification.tsx
import importAllResult from "checkReactionResponse";
import { View } from "context";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import set from "set";
import { MessageEmbedTypes } from "ME";
import jsxProd from "getSystemLocale";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "maybeApplyNoTextColorForLightCustomTheme";

let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ DEFAULT_ANIMATION_TIMING: closure_6, IN_APP_NOTIFICATION_MAX_HEIGHT: error, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportAll, RIGHT_ACCESSORY_LEFT_MARGIN: c9 } = set);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let c13 = 20;
set = set.isAndroid();
const PX_12 = require("Themes").space.PX_12;
const PX_8 = require("Themes").space.PX_8;
let closure_17 = createCacheKey.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, initialPreviewOverlay: { position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden" }, expandedPreviewOverlay: { position: "absolute", top: 0, left: 0, right: 0 } });
let closure_18 = importAllResult.memo((message) => callback(importDefault(10293), { message: message.message, lineClamp: closure_8, maxHeight: closure_7 }));
let closure_19 = { code: "function MessageNotificationTsx1(){const{contentHeight,EXPANDED_MAX_HEIGHT,TRUNCATED_MESSAGE_HEIGHT_OFFSET,EXPANDED_SHORT_PREVIEW_PADDING}=this.__closure;const isGradientShown=contentHeight.get()>=EXPANDED_MAX_HEIGHT-TRUNCATED_MESSAGE_HEIGHT_OFFSET;const isShortPreview=contentHeight.get()>0&&!isGradientShown;return{paddingBottom:isShortPreview?EXPANDED_SHORT_PREVIEW_PADDING:0};}" };
let closure_20 = { code: "function MessageNotificationTsx2(){const{IS_ANDROID,hasPreviewableMedia,hasTextContent,hasEmbedMedia,fadeProgress,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(IS_ANDROID&&hasPreviewableMedia&&hasTextContent&&!hasEmbedMedia){return{opacity:fadeProgress.get()};}if(!hasTextContent||hasEmbedMedia){return{opacity:fadeProgress.get(),transform:[{translateY:(1-fadeProgress.get())*ACCESSORY_EXIT_THRESHOLD}]};}return{opacity:1};}" };
let closure_21 = importAllResult.memo((message) => {
  let expandedPreviewHeight;
  let fadeProgress;
  let gradientColors;
  let gradientStyles;
  message = message.message;
  let sharedValue = message;
  ({ expandedPreviewHeight, fadeProgress } = message);
  let hasPreviewableMedia;
  let memo;
  let c4;
  let c5;
  sharedValue = undefined;
  let tmp = callback3();
  const tmp2 = hasPreviewableMedia;
  ({ gradientColors, gradientStyles } = fadeProgress(hasPreviewableMedia[10])());
  let obj = sharedValue(hasPreviewableMedia[11]);
  let items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.useReducedMotion);
  let obj1 = sharedValue(hasPreviewableMedia[12]);
  hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  const items1 = [message.embeds];
  memo = memo.useMemo(() => {
    const embeds = sharedValue.embeds;
    return embeds.some((image) => {
      let tmp = null != image.image || null != image.thumbnail;
      if (!tmp) {
        tmp = image.type === constants.GIFV;
      }
      return tmp;
    });
  }, items1);
  const items2 = [hasPreviewableMedia, message.poll, memo];
  const memo1 = memo.useMemo(() => {
    let tmp = hasPreviewableMedia;
    if (!hasPreviewableMedia) {
      tmp = null != sharedValue.poll;
    }
    if (!tmp) {
      tmp = memo;
    }
    return tmp;
  }, items2);
  c4 = tmp9;
  const result = 0.24 * fadeProgress(hasPreviewableMedia[13])({ ignoreKeyboard: true }).height;
  c5 = result;
  sharedValue = expandedPreviewHeight;
  const items3 = [expandedPreviewHeight];
  const callback = memo.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      const result = initialPreviewHeight.set(height);
    }
  }, items3);
  let obj2 = sharedValue(hasPreviewableMedia[14]);
  sharedValue = obj2.useSharedValue(0);
  const items4 = [sharedValue];
  const callback1 = memo.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      const result = initialPreviewHeight.set(height);
    }
  }, items4);
  let obj3 = sharedValue(hasPreviewableMedia[14]);
  const fn = function h() {
    let paddingBottom = 0;
    if (sharedValue.get() > 0) {
      paddingBottom = 0;
      if (!tmp) {
        paddingBottom = outer1_15;
      }
    }
    return { paddingBottom };
  };
  obj = { contentHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, TRUNCATED_MESSAGE_HEIGHT_OFFSET: PX_8, EXPANDED_SHORT_PREVIEW_PADDING: PX_12 };
  fn.__closure = obj;
  fn.__workletHash = 4300216170219;
  fn.__initData = closure_19;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp3 = fadeProgress(hasPreviewableMedia[10])();
  const tmp4 = sharedValue;
  const fn2 = function u() {
    if (outer1_14) {
      if (hasPreviewableMedia) {
        if (c4) {
          if (!memo) {
            let obj = { opacity: null };
            obj[0] = fadeProgress.get();
            return obj;
          }
        }
      }
    }
    if (c4) {
      if (!memo) {
        obj = { opacity: 1 };
      }
    }
    obj = { opacity: fadeProgress.get(), transform: null };
    const items = [{ translateY: (1 - fadeProgress.get()) * outer1_13 }];
    obj[1] = items;
  };
  obj = { IS_ANDROID: set, hasPreviewableMedia, hasTextContent: tmp9, hasEmbedMedia: memo, fadeProgress, ACCESSORY_EXIT_THRESHOLD: c13 };
  fn2.__closure = obj;
  fn2.__workletHash = 9879198032662;
  fn2.__initData = closure_20;
  const animatedStyle1 = sharedValue(hasPreviewableMedia[14]).useAnimatedStyle(fn2);
  const items5 = [tmp.expandedPreviewOverlay, , ];
  let tmp17 = null;
  if (memo1) {
    tmp17 = animatedStyle1;
  }
  obj1 = { style: items5, onLayout: callback, children: null };
  items5[1] = tmp17;
  items5[2] = animatedStyle;
  obj2 = { onLayout: callback1, children: null };
  obj3 = { message, lineClamp: null, maxHeight: null, gifAutoPlay: null, gradientStyles: null, gradientColors: null };
  let num;
  if (memo1) {
    num = 6;
  }
  obj3[1] = num;
  obj3[2] = result;
  obj3[3] = !stateFromStores;
  obj3[4] = gradientStyles;
  obj3[5] = gradientColors;
  obj2[1] = closure_11(tmp4(tmp2[15]).NativeChannelRowPreview, obj3);
  obj1[2] = closure_11(c4, obj2);
  return closure_11(fadeProgress(hasPreviewableMedia[14]).View, obj1);
});
let closure_22 = { code: "function MessageNotificationTsx3(){const{shouldHandlePreviewableMediaExpand,fadeProgress,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{opacity:Math.max(0,1-fadeProgress.get()*2),right:accessoryWidthSV.get()}:{opacity:Math.max(0,1-fadeProgress.get()*2)};}" };
let closure_23 = importAllResult.memo((children) => {
  let fadeProgress;
  let initialPreviewHeight;
  ({ initialPreviewHeight, fadeProgress } = children);
  initialPreviewHeight = fadeProgress;
  const accessoryWidthSV = children.accessoryWidthSV;
  const shouldHandlePreviewableMediaExpand = children.shouldHandlePreviewableMediaExpand;
  const items = [initialPreviewHeight];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      const result = initialPreviewHeight.set(height);
    }
  }, items);
  let obj = initialPreviewHeight(shouldHandlePreviewableMediaExpand[14]);
  const fn = function h() {
    if (shouldHandlePreviewableMediaExpand) {
      let obj = { opacity: null, right: null };
      const _Math2 = Math;
      obj[0] = Math.max(0, 1 - 2 * initialPreviewHeight.get());
      obj[1] = accessoryWidthSV.get();
    } else {
      obj = { opacity: null };
      const _Math = Math;
      obj[0] = Math.max(0, 1 - 2 * initialPreviewHeight.get());
    }
    return obj;
  };
  fn.__closure = { shouldHandlePreviewableMediaExpand, fadeProgress, accessoryWidthSV };
  fn.__workletHash = 15466459240148;
  fn.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items1, children: null };
  items1 = [callback3().initialPreviewOverlay, animatedStyle];
  obj[1] = callback(View, { onLayout: callback, children: children.initialPreviewContent });
  return callback(accessoryWidthSV(shouldHandlePreviewableMediaExpand[14]).View, obj);
});
let closure_24 = { code: "function MessageNotificationTsx4(){const{expandedPreviewHeight,EXPANDED_MAX_HEIGHT,expandedSV,notificationGestureY,initialPreviewHeight}=this.__closure;const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);if(expandedSV.get()){return maxExpandedHeight;}const dragDistance=Math.max(0,notificationGestureY.get());const maxHeight=Math.max(maxExpandedHeight,initialPreviewHeight.get());return Math.min(initialPreviewHeight.get()+dragDistance,maxHeight);}" };
let closure_25 = { code: "function MessageNotificationTsx5(){const{expandedSV,expandedPreviewHeight,EXPANDED_MAX_HEIGHT,initialPreviewHeight,notificationGestureY,ACCESSORY_EXIT_THRESHOLD,currentHeight}=this.__closure;if(expandedSV.get()){return 1;}const maxExpandedHeight=Math.min(expandedPreviewHeight.get(),EXPANDED_MAX_HEIGHT);const heightDifference=maxExpandedHeight-initialPreviewHeight.get();const dragDistance=Math.max(0,notificationGestureY.get());if(heightDifference<=0){return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}return Math.min(1,(currentHeight.get()-initialPreviewHeight.get())/heightDifference);}" };
let closure_26 = { code: "function MessageNotificationTsx6(){const{shouldHandlePreviewableMediaExpand,currentHeight,accessoryWidthSV}=this.__closure;return shouldHandlePreviewableMediaExpand?{overflow:'hidden',height:currentHeight.get(),marginRight:-accessoryWidthSV.get()}:{overflow:'hidden',height:currentHeight.get()};}" };
let closure_27 = importAllResult.memo((initialPreviewContent) => {
  let expandedSV;
  let message;
  ({ message, expandedSV } = initialPreviewContent);
  const notificationGestureY = initialPreviewContent.notificationGestureY;
  const initialPreviewHeight = initialPreviewContent.initialPreviewHeight;
  const accessoryWidthSV = initialPreviewContent.accessoryWidthSV;
  let c4;
  let sharedValue;
  let hasPreviewableMedia;
  let derivedValue;
  const result = 0.24 * notificationGestureY(initialPreviewHeight[13])({ ignoreKeyboard: true }).height;
  c4 = result;
  let obj = expandedSV(initialPreviewHeight[14]);
  sharedValue = obj.useSharedValue(result);
  hasPreviewableMedia = set;
  if (set) {
    hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  }
  let tmp4Result = tmp4(tmp2[14]);
  const fn = function h() {
    const bound = Math.min(sharedValue.get(), c4);
    if (expandedSV.get()) {
      return bound;
    } else {
      const _Math = Math;
      const _Math2 = Math;
      const bound1 = Math.max(0, notificationGestureY.get());
      const _Math3 = Math;
      const bound2 = Math.max(bound, initialPreviewHeight.get());
      return Math.min(initialPreviewHeight.get() + bound1, bound2);
    }
  };
  fn.__closure = { expandedPreviewHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, expandedSV, notificationGestureY, initialPreviewHeight };
  fn.__workletHash = 10745028098653;
  fn.__initData = closure_24;
  derivedValue = tmp4Result.useDerivedValue(fn);
  tmp4Result = tmp4(tmp2[14]);
  const fn2 = function u() {
    if (expandedSV.get()) {
      return 1;
    } else {
      const _Math = Math;
      const bound = Math.min(sharedValue.get(), c4);
      const diff = bound - initialPreviewHeight.get();
      const _Math2 = Math;
      if (diff <= 0) {
        const _Math4 = Math;
        let bound1 = Math.min(1, tmp7 / outer1_13);
      } else {
        const _Math3 = Math;
        const value = derivedValue.get();
        bound1 = Math.min(1, (value - initialPreviewHeight.get()) / diff);
      }
      return bound1;
    }
  };
  obj = { expandedSV, expandedPreviewHeight: sharedValue, EXPANDED_MAX_HEIGHT: result, initialPreviewHeight, notificationGestureY, ACCESSORY_EXIT_THRESHOLD: c13, currentHeight: derivedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 7693825745292;
  fn2.__initData = closure_25;
  const derivedValue1 = tmp4Result.useDerivedValue(fn2);
  obj2 = expandedSV(initialPreviewHeight[12]);
  const tmp = notificationGestureY;
  const fn3 = function _() {
    if (hasPreviewableMedia) {
      let obj = { overflow: "hidden", height: null, marginRight: null };
      obj[1] = derivedValue.get();
      obj[2] = -accessoryWidthSV.get();
    } else {
      obj = { overflow: "hidden", height: null };
      obj[1] = derivedValue.get();
    }
    return obj;
  };
  fn3.__closure = { shouldHandlePreviewableMediaExpand: hasPreviewableMedia, currentHeight: derivedValue, accessoryWidthSV };
  fn3.__workletHash = 9399498954959;
  fn3.__initData = closure_26;
  const animatedStyle = expandedSV(initialPreviewHeight[14]).useAnimatedStyle(fn3);
  obj = { style: animatedStyle, children: null };
  const items = [callback(closure_21, { message, expandedPreviewHeight: sharedValue, fadeProgress: derivedValue1 }), callback(closure_23, { initialPreviewHeight, fadeProgress: derivedValue1, initialPreviewContent: initialPreviewContent.initialPreviewContent, accessoryWidthSV, shouldHandlePreviewableMediaExpand: hasPreviewableMedia })];
  obj[1] = items;
  return callback2(tmp(initialPreviewHeight[14]).View, obj);
});
let closure_28 = { code: "function MessageNotificationTsx7(){const{isExpandableNotification,expandedSV,notificationGestureY,ACCESSORY_EXIT_THRESHOLD}=this.__closure;if(!isExpandableNotification){return 0;}if(expandedSV.get()){return 1;}const dragDistance=Math.max(0,notificationGestureY.get());return Math.min(1,dragDistance/ACCESSORY_EXIT_THRESHOLD);}" };
let closure_29 = { code: "function MessageNotificationTsx8(){const{PREVIEW_SIZE,RIGHT_ACCESSORY_LEFT_MARGIN,accessoryExitProgressSV}=this.__closure;return(PREVIEW_SIZE+RIGHT_ACCESSORY_LEFT_MARGIN)*(1-accessoryExitProgressSV.get());}" };
let closure_30 = { code: "function MessageNotificationTsx9(){const{isExpandableNotification,hasPreviewableMedia,accessoryWidthSV,PREVIEW_SIZE}=this.__closure;if(!isExpandableNotification||!hasPreviewableMedia){return{};}return{marginRight:accessoryWidthSV.get(),minHeight:PREVIEW_SIZE};}" };
let closure_31 = { code: "function MessageNotificationTsx10(){const{withTiming,expandedSV,DEFAULT_ANIMATION_TIMING}=this.__closure;return{opacity:withTiming(expandedSV.get()?1:0,DEFAULT_ANIMATION_TIMING),maxHeight:withTiming(expandedSV.get()?60:0,DEFAULT_ANIMATION_TIMING)};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default importAllResult.memo(function MessageNotification(notification) {
  let c3;
  let setConfirmation;
  notification = notification.notification;
  let setExpanded = notification;
  let setAutoDismissing;
  let setActionTaken;
  let importAllResult;
  setConfirmation = undefined;
  let nullableMessageAuthor;
  let isExpanded;
  let expandedSV;
  let notificationGestureY;
  let handleDismissNotification;
  let isExpandableNotification;
  let callback;
  let hasPreviewableMedia;
  let derivedValue;
  let derivedValue1;
  const message = notification.message;
  setAutoDismissing = message;
  const channel = notification.channel;
  setActionTaken = channel;
  const parentChannel = notification.parentChannel;
  importAllResult = parentChannel;
  const guild = notification.guild;
  setConfirmation = guild;
  let tmp2 = 0 === message.content.length;
  if (tmp2) {
    tmp2 = null !== message.interaction;
  }
  if (tmp2) {
    tmp2 = undefined !== message.interaction;
  }
  if (tmp2) {
    tmp2 = null !== message.activityInstance;
  }
  if (tmp2) {
    tmp2 = undefined !== message.activityInstance;
  }
  if (tmp2) {
    let intl = setExpanded(setActionTaken[21]).intl;
    let obj = setExpanded(setActionTaken[22]);
    const interaction = message.interaction;
    let user;
    if (interaction != null) {
      user = interaction.user;
    }
    obj = { username: null };
    obj[0] = obj.getUserAuthor(user, channel).nick;
    message.content = intl.formatToPlainString(setExpanded(setActionTaken[21]).t["7eikg1"], obj);
  }
  let obj2 = setExpanded(setActionTaken[22]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  let obj3 = setExpanded(setActionTaken[11]);
  const items = [nullableMessageAuthor];
  let colorString;
  const stateFromStores = obj3.useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp15Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      obj = { color: null, colors: null, containerStyles: null };
      obj[0] = colorString;
      let colorStrings;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      obj[1] = colorStrings;
      obj[2] = tmp.newContainerRoleDot;
      tmp15Result = callback(tmp9(tmp10[16]).RoleDot, obj);
      const tmp15 = callback;
    }
  }
  let tmp9Result = tmp9(tmp10[17]);
  const inAppNotificationContext = tmp9Result.useInAppNotificationContext();
  isExpanded = inAppNotificationContext.isExpanded;
  expandedSV = inAppNotificationContext.expandedSV;
  notificationGestureY = inAppNotificationContext.notificationGestureY;
  handleDismissNotification = inAppNotificationContext.handleDismissNotification;
  isExpandableNotification = inAppNotificationContext.isExpandableNotification;
  setExpanded = undefined;
  setAutoDismissing = undefined;
  setActionTaken = undefined;
  importAllResult = undefined;
  setConfirmation = undefined;
  tmp9Result = tmp9(tmp10[17]);
  const inAppNotificationContext1 = tmp9Result.useInAppNotificationContext();
  setExpanded = inAppNotificationContext1.setExpanded;
  setAutoDismissing = inAppNotificationContext1.setAutoDismissing;
  setActionTaken = inAppNotificationContext1.setActionTaken;
  ({ isExpanded: c3, setConfirmation } = inAppNotificationContext1);
  let obj7 = importAllResult;
  const items1 = [setActionTaken, setExpanded, setAutoDismissing, setConfirmation];
  let tmp20;
  callback = importAllResult.useCallback((channel, reaction, burst) => {
    let obj = setExpanded(setActionTaken[18]);
    const result = obj.triggerHapticFeedback(setExpanded(setActionTaken[18]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = setExpanded(setActionTaken[19]);
    const obj3 = setExpanded(setActionTaken[20]);
    obj = { burst };
    obj2.addReaction(channel.channel.id, channel.message.id, setExpanded(setActionTaken[20]).toReactionEmoji(reaction), setExpanded(setActionTaken[19]).ReactionLocations.IN_APP_NOTIFICATION, obj);
    setActionTaken(true);
    setExpanded(false);
    obj = { type: "message", reaction, message: null };
    const intl = setExpanded(setActionTaken[21]).intl;
    obj[2] = intl.string(setExpanded(setActionTaken[21]).t.UjTvrz);
    setConfirmation(obj);
    setAutoDismissing(true);
  }, items1);
  if (isExpandableNotification) {
    const obj1 = { name: "expand_toggle", label: null };
    const intl2 = tmp9(tmp10[21]).intl;
    obj1[1] = intl2.string(tmp9(tmp10[21]).t["PbxI/x"]);
    const items2 = [obj1];
    tmp20 = items2;
  }
  tmp = callback3();
  const items3 = [nullableMessageAuthor.nick, channel.id, message.content];
  const isScreenReaderEnabled = setExpanded(setActionTaken[23]).useIsScreenReaderEnabled();
  const effect = obj7.useEffect(() => {
    const intl = setExpanded(setActionTaken[21]).intl;
    const obj = { userName: nullableMessageAuthor.nick, message: null };
    obj[1] = setAutoDismissing(setActionTaken[24]).unparse(setAutoDismissing.content, setActionTaken.id, true);
    const obj2 = setAutoDismissing(setActionTaken[24]);
    const AccessibilityAnnouncer = setExpanded(setActionTaken[25]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(setExpanded(setActionTaken[21]).t.Hjp1LH, obj));
  }, items3);
  const items4 = [channel.id, message.id];
  const items5 = [channel.id];
  const callback1 = obj7.useCallback(() => {
    setAutoDismissing(setActionTaken[26]).popAll();
    const obj = setAutoDismissing(setActionTaken[26]);
    setExpanded(setActionTaken[27]).transitionToMessage(setActionTaken.id, setAutoDismissing.id, { navigationReplace: true });
  }, items4);
  const callback2 = obj7.useCallback(() => {
    let obj = setAutoDismissing(setActionTaken[26]);
    obj = { channelId: setActionTaken.id };
    return obj.pushLazy(setExpanded(setActionTaken[29])(setActionTaken[28], setActionTaken.paths), obj, "in-app-notification-settings-modal");
  }, items5);
  const tmp9Result1 = setExpanded(setActionTaken[23]);
  hasPreviewableMedia = setExpanded(setActionTaken[12]).useHasPreviewableMedia(message);
  const tmp9Result2 = setExpanded(setActionTaken[12]);
  const sharedValue = setExpanded(setActionTaken[14]).useSharedValue(expandedSV);
  const tmp9Result3 = setExpanded(setActionTaken[14]);
  class F {
    constructor() {
      if (isExpandableNotification) {
        tmp = expandedSV;
        if (expandedSV.get()) {
          num4 = 1;
          return 1;
        } else {
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = notificationGestureY;
          num2 = 0;
          _Math2 = Math;
          tmp4 = c13;
          num3 = 1;
          return Math.min(1, Math.max(0, notificationGestureY.get()) / c13);
        }
      } else {
        num = 0;
        return 0;
      }
    }
  }
  obj2 = { isExpandableNotification, expandedSV, notificationGestureY, ACCESSORY_EXIT_THRESHOLD: derivedValue };
  F.__closure = obj2;
  F.__workletHash = 10189805207166;
  F.__initData = closure_28;
  derivedValue = setExpanded(setActionTaken[14]).useDerivedValue(F);
  const tmp9Result4 = setExpanded(setActionTaken[14]);
  const fn = function k() {
    const sum = setExpanded(setActionTaken[30]).PREVIEW_SIZE + handleDismissNotification;
    return sum * (1 - derivedValue.get());
  };
  obj3 = { PREVIEW_SIZE: tmp9(tmp10[30]).PREVIEW_SIZE, RIGHT_ACCESSORY_LEFT_MARGIN: handleDismissNotification, accessoryExitProgressSV: derivedValue };
  fn.__closure = obj3;
  fn.__workletHash = 12027019053130;
  fn.__initData = closure_29;
  derivedValue1 = setExpanded(setActionTaken[14]).useDerivedValue(fn);
  const tmp9Result5 = setExpanded(setActionTaken[14]);
  class U {
    constructor() {
      if (isExpandableNotification) {
        tmp = c12;
        if (c12) {
          obj = { marginRight: null, minHeight: null };
          tmp3 = useCallback;
          obj[0] = useCallback.get();
          tmp4 = setExpanded;
          tmp5 = setActionTaken;
          obj[1] = setExpanded(setActionTaken[30]).PREVIEW_SIZE;
          tmp2 = obj;
        }
        return {};
      }
      return;
    }
  }
  const tmp9Result6 = setExpanded(setActionTaken[14]);
  U.__closure = { isExpandableNotification, hasPreviewableMedia, accessoryWidthSV: derivedValue1, PREVIEW_SIZE: setExpanded(setActionTaken[30]).PREVIEW_SIZE };
  U.__workletHash = 2118539495108;
  U.__initData = closure_30;
  const items6 = [channel, parentChannel, guild, nullableMessageAuthor, isExpanded, handleDismissNotification];
  const animatedStyle = tmp9Result6.useAnimatedStyle(U);
  const memo = obj7.useMemo(() => ({ type: "message", channel: setActionTaken, parentChannel: c3, guild: setConfirmation, author: nullableMessageAuthor, expanded: isExpanded, onDismiss: handleDismissNotification }), items6);
  const tmp32 = callback(closure_18, { message });
  let tmp31Result = tmp32;
  if (isExpandableNotification) {
    const obj5 = { message: null, expandedSV: null, notificationGestureY: null, initialPreviewContent: null, initialPreviewHeight: null, accessoryWidthSV: null };
    obj5[0] = message;
    obj5[1] = expandedSV;
    obj5[2] = notificationGestureY;
    obj5[3] = tmp32;
    obj5[4] = sharedValue;
    obj5[5] = derivedValue1;
    tmp31Result = tmp31(closure_27, obj5);
  }
  const obj4 = { isExpandableNotification, hasPreviewableMedia, accessoryWidthSV: derivedValue1, PREVIEW_SIZE: setExpanded(setActionTaken[30]).PREVIEW_SIZE };
  class Z {
    constructor() {
      tmp = setExpanded;
      tmp2 = setActionTaken;
      obj = setExpanded(setActionTaken[31]);
      obj2 = expandedSV;
      num = 0;
      if (expandedSV.get()) {
        num = 1;
      }
      obj = { opacity: obj.withTiming(num, isExpanded), maxHeight: null };
      tmp3 = isExpanded;
      tmpResult = tmp(tmp2[31]);
      num2 = 0;
      if (obj2.get()) {
        num2 = 60;
      }
      obj[1] = tmpResult.withTiming(num2, tmp3);
      return obj;
    }
  }
  const tmp9Result7 = setExpanded(setActionTaken[14]);
  Z.__closure = { withTiming: setExpanded(setActionTaken[31]).withTiming, expandedSV, DEFAULT_ANIMATION_TIMING: isExpanded };
  Z.__workletHash = 2035414692485;
  Z.__initData = closure_31;
  const animatedStyle1 = tmp9Result7.useAnimatedStyle(Z);
  obj7 = { user: message.author, guildId: null, size: null };
  const guild2 = notification.guild;
  let id;
  if (guild2 != null) {
    id = guild2.id;
  }
  const obj8 = { icon: null, accessoryLabelNode: null, bodyStyle: null, rightAccessory: null, children: null, header: null, showDragHandle: null, onAccessibilityExpand: null, expandedContentVisible: null, notification: null, onPress: null, onSettingsPress: null, accessibilityActions: null, onAccessibilityAction: null, expandableContent: null };
  obj7[1] = id;
  obj7[2] = setExpanded(setActionTaken[16]).AvatarSizes.NORMAL;
  obj8[0] = callback(setExpanded(setActionTaken[16]).Avatar, obj7);
  obj8[1] = tmp15Result;
  obj8[2] = animatedStyle;
  if (!isExpandableNotification) {
    const obj9 = { message: null, accessoryExitProgressSV: null };
    obj9[0] = message;
    let tmp38;
    if (isExpandableNotification) {
      tmp38 = derivedValue;
    }
    obj9[1] = tmp38;
    tmp31Result = tmp31(tmp9(tmp10[30]).MediaPreviewRightAccessory, obj9);
  } else {
    tmp31Result = null;
  }
  obj8[3] = tmp31Result;
  obj8[4] = tmp31Result;
  obj8[5] = memo;
  if (isExpandableNotification) {
    let tmp39 = !isExpanded;
    if (isExpanded) {
      tmp39 = isScreenReaderEnabled;
    }
    isExpandableNotification = tmp39;
  }
  obj8[6] = isExpandableNotification;
  obj8[7] = function onAccessibilityExpand() {
    setExpanded(!c3, "accessibility_expand");
  };
  obj8[8] = isExpanded;
  obj8[9] = notification;
  obj8[10] = callback1;
  obj8[11] = callback2;
  obj8[12] = tmp20;
  obj8[13] = function onAccessibilityAction(nativeEvent) {
    if ("expand_toggle" === nativeEvent.nativeEvent.actionName) {
      setExpanded(!c3, "accessibility_expand");
    }
  };
  let tmp31Result1;
  if (inAppNotificationContext.showReactionBar) {
    const obj10 = { notification: null, onReactionPress: null, animationStyle: null };
    obj10[0] = notification;
    obj10[1] = function onReactionPress(arg0) {
      return callback(setExpanded, arg0, arg1);
    };
    obj10[2] = animatedStyle1;
    tmp31Result1 = tmp31(tmp9(tmp10[33]).MessageNotificationReactBar, obj10);
  }
  obj8[14] = tmp31Result1;
  return callback(setExpanded(setActionTaken[32]).NotificationPressable, obj8);
});