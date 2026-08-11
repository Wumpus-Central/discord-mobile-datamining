// discord_app/modules/notification_center/native/ForYouItemActionButtons.tsx
import closure_3 from "ME";
import handleSupportedURL from "handleSupportedURL";
import { View } from "_sendWave";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "NotificationCenterScenes";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useCanReplyToMessage } from "../../replies/canReplyToMessage.tsx";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function focusChatInput(arg0) {
  let tmp;
  if (null != arg0) {
    const obj = { channelId: null };
    obj[0] = arg0;
    tmp = obj;
  }
  const require = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = _undefined(outer1_2[8]).ComponentDispatch;
    return ComponentDispatch.dispatch(outer1_9.TEXTAREA_FOCUS, _undefined);
  }, 0);
}
class IncomingFriendRequestActions {
  constructor(arg0) {
    pressed = global.pressed;
    compactMode = global.compactMode;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ onAccept, onIgnore, onWavePress } = global);
    tmp2 = pressed;
    tmp3 = c2;
    tmp = jsxs();
    obj = require("module_4042");
    sharedValue = require("asyncGeneratorStep");
    c1 = sharedValue;
    obj2 = require("module_4042");
    sharedValue1 = require("module_4294967295");
    c2 = sharedValue1;
    obj3 = require("module_4042");
    sharedValue2 = require("module_4294967295");
    c3 = sharedValue2;
    obj4 = require("module_4042");
    sharedValue3 = require("module_4294967295");
    c4 = sharedValue3;
    obj5 = require("module_4042");
    fn = function u() {
      let obj = pressed(sharedValue1[10]);
      let num = 1;
      if (pressed.get()) {
        num = 0;
      }
      obj = { opacity: obj.withTiming(num, { duration: 150 }), pointerEvents: null };
      let str = "auto";
      if (pressed.get()) {
        str = "none";
      }
      obj[1] = str;
      return obj;
    };
    obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, pressed };
    fn.__closure = obj;
    fn.__workletHash = 100815030677;
    fn.__initData = jsxs;
    animatedStyle = obj5.useAnimatedStyle(fn);
    obj7 = require("module_4042");
    fn2 = function _() {
      let obj = pressed;
      let num = 1;
      if (!pressed.get()) {
        let value = sharedValue.get();
        num = value / sharedValue1.get();
      }
      value = sharedValue1.get();
      const diff = value - sharedValue1.get() * num;
      let num2 = 0;
      if (!obj.get()) {
        num2 = -diff / 2;
      }
      obj = { transform: null, opacity: null, pointerEvents: null };
      obj = { scaleX: null };
      obj[0] = pressed(sharedValue1[10]).withTiming(num);
      const items = [obj, ];
      const obj1 = { translateX: null };
      const obj4 = pressed(sharedValue1[10]);
      obj1[0] = pressed(sharedValue1[10]).withTiming(num2);
      items[1] = obj1;
      obj[0] = items;
      const obj6 = pressed(sharedValue1[10]);
      let num4 = 0;
      if (obj.get()) {
        num4 = 1;
      }
      obj[1] = pressed(sharedValue1[10]).withTiming(num4);
      let str = "none";
      if (obj.get()) {
        str = "auto";
      }
      obj[2] = str;
      return obj;
    };
    obj1 = { pressed, acceptButtonWidth: sharedValue, buttonWidth: sharedValue1, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming };
    fn2.__closure = obj1;
    fn2.__workletHash = 12358515723480;
    fn2.__initData = jsxs;
    animatedStyle1 = obj7.useAnimatedStyle(fn2);
    obj9 = require("module_4042");
    class E {
      constructor() {
        obj = { transform: null };
        obj = { translateX: c3.get() / 2 };
        items = [, ];
        items[0] = obj;
        obj1 = { translateY: c4.get() / 2 };
        items[1] = obj1;
        obj[0] = items;
        return obj;
      }
    }
    E.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
    E.__workletHash = 667441788226;
    E.__initData = jsxs;
    animatedStyle2 = obj9.useAnimatedStyle(E);
    obj10 = require("module_4042");
    class I {
      constructor() {
        tmp = pressed;
        tmp2 = c2;
        obj = require("module_4042");
        obj2 = require("module_4042");
        obj3 = require("CONFIG_NEVER_ANIMATE_TIMING");
        str = "-2deg";
        if (pressed.get()) {
          str = "8deg";
        }
        obj = { transform: null };
        obj1 = { rotateZ: null };
        obj2 = { duration: 150, easing: null };
        Easing = require("module_4042").Easing;
        obj2[1] = Easing.inOut(require("module_4042").Easing.quad);
        obj1[0] = require("module_450");
        items = [, , ];
        items[0] = obj1;
        obj3 = { translateX: -c3.get() / 2 };
        items[1] = obj3;
        obj4 = { translateY: -c4.get() / 2 };
        items[2] = obj4;
        obj[0] = items;
        return obj;
      }
    }
    obj2 = { withDelay: require("module_4042").withDelay, withRepeat: require("module_4042").withRepeat, withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, pressed, Easing: require("module_4042").Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
    I.__closure = obj2;
    I.__workletHash = 498167545082;
    I.__initData = jsxs;
    animatedStyle3 = obj10.useAnimatedStyle(I);
    obj12 = require("module_4042");
    fn3 = function p() {
      const value = pressed.get();
      return { pointerEvents: "none" };
    };
    fn3.__closure = { pressed };
    fn3.__workletHash = 3473531476662;
    fn3.__initData = jsxs;
    animatedProps = obj12.useAnimatedProps(fn3);
    tmp13 = jsxs;
    tmp14 = View;
    tmp15 = jsx;
    tmp16 = c1;
    obj3 = { style: items, children: null };
    items = [, ];
    items[0] = tmp.actionButtonsContainer;
    items[1] = animatedStyle;
    obj4 = {
      onLayout(nativeEvent) {
            const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
          },
      children: null
    };
    obj5 = { text: null, variant: "primary", size: null, onPress: null };
    intl = require("getSystemLocale").intl;
    obj5[0] = intl.string(require("getSystemLocale").t.zf5jU5);
    str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    obj5[2] = str2;
    obj5[3] = onAccept;
    obj4[1] = tmp15(require("Button").Button, obj5, "accept_friend_request");
    items1 = [, ];
    items1[0] = tmp15(tmp14, obj4);
    obj6 = { text: null, variant: "secondary", size: null, onPress: null };
    intl2 = require("getSystemLocale").intl;
    obj6[0] = intl2.string(require("getSystemLocale").t.EBN847);
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj7 = { direction: "horizontal", spacing: 8, children: null };
    obj6[2] = str3;
    obj6[3] = onIgnore;
    items1[1] = tmp15(require("Button").Button, obj6, "ignore_friend_request");
    obj7[2] = items1;
    obj3[1] = tmp13(require("Stack").Stack, obj7);
    items2 = [, ];
    items2[0] = tmp15(require("module_4042").View, obj3);
    obj8 = {
      style: animatedStyle1,
      onLayout(nativeEvent) {
            const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
          }
    };
    merged = Object.assign(animatedProps);
    obj9 = { variant: "secondary", text: null, icon: null, size: null, onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj9[1] = intl3.string(require("getSystemLocale").t.n8nU4W);
    obj10 = { style: animatedStyle2, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    obj11 = {
      style: animatedStyle3,
      onLayout(nativeEvent) {
            const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
            const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
          },
      children: null
    };
    obj11[2] = tmp15(require("Text").Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" });
    obj10[3] = tmp15(require("module_4042").View, obj11);
    obj9[2] = tmp15(require("module_4042").View, obj10);
    if (compactMode) {
      str = "sm";
    }
    obj12 = { children: null };
    obj9[3] = str;
    obj9[4] = onWavePress;
    obj8.children = tmp15(require("Button").Button, obj9);
    items2[1] = tmp15(require("module_4042").View, obj8);
    obj12[0] = items2;
    return tmp13(tmp14, obj12);
  }
}
({ AnalyticEvents: metroImportAll, ComponentActions: c9, EMPTY_STRING_SNOWFLAKE_ID: c10, MessageTypes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles({ buttonsContainer: { flexDirection: "row", marginTop: 8 }, actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 } });
let closure_15 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
let closure_17 = { code: "function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_18 = { code: "function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
let closure_19 = { code: "function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
let closure_20 = { code: "function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
let closure_21 = { code: "function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export const useItemActionButtonPropsV2 = function useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, arg6, compactMode) {
  const _require = item;
  let closure_1 = callback;
  const dependencyMap = navigation;
  callback = forceHoistItem;
  const React = onSoftAckItem;
  let closure_5 = arg6;
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = sharedValue;
  }
  const notification_center_v2 = "notification_center_v2";
  let tmp2 = _require;
  let obj = _defaultAreStatesEqual;
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const message = item.message;
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    return id.getChannel(channel_id);
  });
  let obj1 = _useCanReplyToMessage;
  let message = item.message;
  const canReplyToMessage = obj1.useCanReplyToMessage(stateFromStores, item.message);
  if (message != null) {
    const type = message.type;
  }
  const items1 = [id, onSoftAckItem, item];
  callback = React.useCallback(() => {
    let obj = item(navigation[17]);
    obj.sendWave(id, false, "You Tab");
    const dMFromUserId = id.getDMFromUserId(id);
    if (null != dMFromUserId) {
      const _HermesInternal = HermesInternal;
      obj = { payload: null, safe: true, navigationReplace: false };
      obj[0] = callback(tmp[18])("https://discord.com/channels/@me/" + dMFromUserId).payload;
      callback(tmp[19])(obj);
      const tmp5 = callback(tmp[18]);
    }
    onSoftAckItem(item);
  }, items1);
  sharedValue = tmp2(4042).useSharedValue(false);
  const items2 = [forceHoistItem, sharedValue, item, id, arg6];
  const callback1 = React.useCallback(() => {
    let obj = callback(navigation[20]);
    obj = { userId: id, applicationId: null, location: null, onConfirm: null };
    let applicationId;
    if (item.type === item(navigation[21]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = item.applicationId;
    }
    obj[1] = applicationId;
    obj[2] = notification_center_v2;
    obj[3] = function onConfirm() {
      const user = outer1_7.getUser(ensureGuildLoaded);
      if (null != user) {
        const intl = outer1_0(outer1_2[13]).intl;
        let username = user.globalName;
        if (username == null) {
          username = user.username;
        }
        const obj = { username: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "**" + username + "**";
        closure_5(intl.formatToPlainString(outer1_0(outer1_2[13]).t["5Uzkdp"], obj));
        const tmp6 = closure_5;
      }
      const result = closure_10.set(true);
      closure_0.enableBadge = false;
      callback(closure_0);
    };
    let result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items2);
  const items3 = [, , ];
  ({ applicationId: arr4[0], type: arr4[1] } = item);
  items3[2] = id;
  const callback2 = React.useCallback(() => {
    let obj = callback(navigation[20]);
    obj = { userId: id, applicationId: null, location: null };
    let applicationId;
    if (item.type === item(navigation[21]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = item.applicationId;
    }
    obj[1] = applicationId;
    obj[2] = notification_center_v2;
    obj.cancelFriendRequest(obj);
  }, items3);
  const items4 = [navigation];
  const callback3 = React.useCallback(() => {
    if (closure_2 != null) {
      closure_2.navigate("friends", { screen: "requests" });
    }
  }, items4);
  const items5 = [id];
  const callback4 = React.useCallback(() => {
    const dMChannel = callback(navigation[22]).getDMChannel(id);
    dMChannel.then((arg0) => {
      callback(13207)({ payload: callback(4284)("https://discord.com/channels/@me/" + arg0).payload, safe: true, navigationReplace: false });
      let c0;
      let tmp3;
      if (null != arg0) {
        const obj = { channelId: null };
        obj[0] = arg0;
        tmp3 = obj;
      }
      c0 = tmp3;
      const timerId = setTimeout(() => {
        const ComponentDispatch = _undefined(outer1_2[8]).ComponentDispatch;
        return ComponentDispatch.dispatch(outer1_9.TEXTAREA_FOCUS, _undefined);
      }, 0);
    });
  }, items5);
  const items6 = [id];
  const callback5 = React.useCallback(() => {
    let obj = callback(navigation[23]);
    obj = { userId: id, context: obj };
    obj = { location: notification_center_v2 };
    obj.addRelationship(obj);
    const obj1 = { key: "NOTIF_CENTER_V2_ADD_FRIEND_TOAST", content: null };
    const intl = item(navigation[13]).intl;
    obj1[1] = intl.string(item(navigation[13]).t["7MAxkR"]);
    callback(navigation[24]).open(obj1);
  }, items6);
  const items7 = [callback, stateFromStores, , ];
  ({ message_id: arr8[2], message_channel_id: arr8[3] } = item);
  const callback6 = React.useCallback(callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const message_channel_id = tmp2;
            let tmp7 = null != outer1_0.message_id;
            if (tmp7) {
              tmp7 = null != outer1_8;
            }
            if (tmp7) {
              let obj1 = outer1_0(table[25]);
              obj1 = { messageId: null, channel: null, shouldMention: true, showMentionToggle: true };
              obj1[0] = outer1_0.message_id;
              obj1[1] = outer1_8;
              v0 = 1;
              table = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.createShallowPendingReply(obj1);
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0();
        outer1_16(message_channel_id.message_channel_id);
        table = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp18) {
        table = tmp;
        throw tmp18;
      }
    }
  }), items7);
  const items8 = [callback, item.message_channel_id];
  const callback7 = React.useCallback(() => {
    callback();
    const message_channel_id = item.message_channel_id;
    item = undefined;
    let tmp2;
    if (null != message_channel_id) {
      const obj = { channelId: null };
      obj[0] = message_channel_id;
      tmp2 = obj;
    }
    item = tmp2;
    const timerId = setTimeout(() => {
      const ComponentDispatch = _undefined(outer1_2[8]).ComponentDispatch;
      return ComponentDispatch.dispatch(outer1_9.TEXTAREA_FOCUS, _undefined);
    }, 0);
  }, items8);
  if (item.disable_action) {
    obj = { actionButtons: null };
    obj[0] = [];
    return obj;
  } else {
    if (item.type !== tmp2(7102).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (item.type !== tmp2(7102).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (item.type !== tmp2(7102).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (item.type === tmp2(7102).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            obj = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            obj1 = { id: "view_friend_requests", text: null, variant: "secondary", size: "md", onPress: null };
            const intl14 = tmp2(1236).intl;
            obj1[1] = intl14.string(tmp2(1236).t["lMR96+"]);
            obj1[4] = callback3;
            const items9 = [obj1];
            obj[0] = items9;
            let obj2 = { name: null, label: null };
            obj2[0] = constants.ACTION;
            const intl15 = tmp2(1236).intl;
            obj2[1] = intl15.string(tmp2(1236).t["lMR96+"]);
            const items10 = [obj2];
            obj[1] = items10;
            obj[2] = callback3;
            return obj;
          } else if (item.type === tmp2(7102).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj3 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj4 = { id: "join_stream", text: null, variant: "secondary", size: "md", onPress: null };
            const intl12 = tmp2(1236).intl;
            obj4[1] = intl12.string(tmp2(1236).t["Pqj7h+"]);
            obj4[4] = callback;
            const items11 = [obj4];
            obj3[0] = items11;
            const obj5 = { name: null, label: null };
            obj5[0] = constants.ACTION;
            const intl13 = tmp2(1236).intl;
            obj5[1] = intl13.string(tmp2(1236).t["Pqj7h+"]);
            const items12 = [obj5];
            obj3[1] = items12;
            obj3[2] = callback;
            return obj3;
          } else {
            if (item.type !== tmp2(7102).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (item.type !== tmp2(7102).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (item.type !== tmp2(7102).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (item.type !== tmp2(7102).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (item.type === tmp2(7102).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj6 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj7 = { id: "add_friend", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl8 = tmp2(1236).intl;
                      obj7[1] = intl8.string(tmp2(1236).t["boL/YX"]);
                      obj7[4] = callback5;
                      const items13 = [obj7];
                      obj6[0] = items13;
                      const obj8 = { name: null, label: null };
                      obj8[0] = constants.ACTION;
                      const intl9 = tmp2(1236).intl;
                      obj8[1] = intl9.string(tmp2(1236).t["boL/YX"]);
                      const items14 = [obj8];
                      obj6[1] = items14;
                      obj6[2] = callback5;
                      return obj6;
                    } else if (item.type === tmp2(7102).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj9 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj10 = { id: "join_event", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl6 = tmp2(1236).intl;
                      obj10[1] = intl6.string(tmp2(1236).t.hRKdcn);
                      obj10[4] = callback;
                      const items15 = [obj10];
                      obj9[0] = items15;
                      const obj11 = { name: null, label: null };
                      obj11[0] = constants.ACTION;
                      const intl7 = tmp2(1236).intl;
                      obj11[1] = intl7.string(tmp2(1236).t.hRKdcn);
                      const items16 = [obj11];
                      obj9[1] = items16;
                      obj9[2] = callback;
                      return obj9;
                    } else if (item.type === tmp2(7102).NotificationCenterItems.LIFECYCLE_ITEM) {
                      const item_enum = item.item_enum;
                      if (tmp2(7102).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl5 = tmp2(1236).intl;
                        let stringResult = intl5.string(tmp2(1236).t.zMRcWL);
                        let str = "update_profile";
                      } else if (tmp2(7102).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl4 = tmp2(1236).intl;
                        stringResult = intl4.string(tmp2(1236).t["vwL/4s"]);
                        str = "find_friends";
                      } else if (tmp2(7102).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl3 = tmp2(1236).intl;
                        stringResult = intl3.string(tmp2(1236).t["boL/YX"]);
                        str = "add_friend";
                      } else {
                        str = null;
                        stringResult = null;
                        if (tmp2(7102).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl19 = tmp2(1236).intl;
                          stringResult = intl19.string(tmp2(1236).t["GuUH7/"]);
                          str = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        if (null != str) {
                          let obj12 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj13 = { id: null, text: null, variant: "secondary", size: "md", onPress: null };
                          obj13[0] = str;
                          obj13[1] = stringResult;
                          obj13[4] = callback;
                          const items17 = [obj13];
                          obj12[0] = items17;
                          const obj14 = { name: null, label: null };
                          obj14[0] = constants.ACTION;
                          obj14[1] = stringResult;
                          const items18 = [obj14];
                          obj12[1] = items18;
                          obj12[2] = callback;
                        }
                        return obj12;
                      }
                      const obj15 = { actionButtons: null };
                      obj15[0] = [];
                      obj12 = obj15;
                    } else {
                      if (item.type !== tmp2(7102).NotificationCenterItems.RECENT_MENTION) {
                        if (item.type !== tmp2(7102).NotificationCenterItems.REPLY_MENTION) {
                          if (item.type === tmp2(7102).NotificationCenterItems.TRENDING_CONTENT) {
                            const obj16 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                            const obj17 = { id: "read_summary", text: null, variant: "secondary", size: "md", onPress: null };
                            let intl = tmp2(1236).intl;
                            obj17[1] = intl.string(tmp2(1236).t.k0Q31F);
                            obj17[4] = callback7;
                            const items19 = [obj17];
                            obj16[0] = items19;
                            const obj18 = { name: null, label: null };
                            obj18[0] = constants.ACTION;
                            const intl2 = tmp2(1236).intl;
                            obj18[1] = intl2.string(tmp2(1236).t.k0Q31F);
                            const items20 = [obj18];
                            obj16[1] = items20;
                            obj16[2] = callback7;
                            let obj19 = obj16;
                          } else {
                            obj19 = { actionButtons: null };
                            obj19[0] = [];
                          }
                          return obj19;
                        }
                      }
                      if (canReplyToMessage) {
                        if (type !== callback1.POLL_RESULT) {
                          let obj20 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj21 = { id: "send_reply", text: null, variant: "secondary", size: "md", onPress: null };
                          const intl17 = tmp2(1236).intl;
                          obj21[1] = intl17.string(tmp2(1236).t.vBq3iT);
                          obj21[4] = callback6;
                          const items21 = [obj21];
                          obj20[0] = items21;
                          const obj22 = { name: null, label: null };
                          obj22[0] = constants.ACTION;
                          const intl18 = tmp2(1236).intl;
                          obj22[1] = intl18.string(tmp2(1236).t.vBq3iT);
                          const items22 = [obj22];
                          obj20[1] = items22;
                          obj20[2] = callback6;
                        }
                      }
                      const obj23 = { actionButtons: null };
                      obj23[0] = [];
                      obj20 = obj23;
                    }
                  }
                }
              }
            }
            const obj24 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj25 = { id: "send_message", text: null, variant: "secondary", size: "md", onPress: null };
            const intl10 = tmp2(1236).intl;
            obj25[1] = intl10.string(tmp2(1236).t["GuUH7/"]);
            obj25[4] = callback4;
            const items23 = [obj25];
            obj24[0] = items23;
            const obj26 = { name: null, label: null };
            obj26[0] = constants.ACTION;
            const intl11 = tmp2(1236).intl;
            obj26[1] = intl11.string(tmp2(1236).t["GuUH7/"]);
            const items24 = [obj26];
            obj24[1] = items24;
            obj24[2] = callback4;
            return obj24;
          }
        }
      }
    }
    const obj27 = { actionsNode: null, accessibilityActions: null, onAccessibilityAction: null };
    const obj28 = { onWavePress: null, onAccept: null, onIgnore: null, pressed: null, compactMode: null };
    obj28[0] = callback;
    obj28[1] = callback1;
    obj28[2] = callback2;
    obj28[3] = sharedValue;
    obj28[4] = compactMode;
    obj27[0] = callback2(IncomingFriendRequestActions, obj28);
    if (item.type === tmp2(7102).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj29 = { name: null, label: null };
      obj29[0] = constants.WAVE;
      const intl16 = tmp2(1236).intl;
      obj29[1] = intl16.string(tmp2(1236).t.n8nU4W);
      const items25 = [obj29];
      let items26 = items25;
    } else {
      const obj30 = { name: null, label: null };
      obj30[0] = constants.ACCEPT;
      const intl20 = tmp2(1236).intl;
      obj30[1] = intl20.string(tmp2(1236).t.zf5jU5);
      items26 = [obj30, ];
      const obj31 = { name: null, label: null };
      obj31[0] = constants.IGNORE;
      const intl21 = tmp2(1236).intl;
      obj31[1] = intl21.string(tmp2(1236).t.EBN847);
      items26[1] = obj31;
    }
    obj27[1] = items26;
    obj27[2] = function onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (outer1_15.WAVE === actionName) {
        callback();
      } else if (tmp.ACCEPT === actionName) {
        callback1();
      } else if (tmp.IGNORE === actionName) {
        callback2();
      }
    };
    return obj27;
  }
  const tmp2Result = tmp2(4042);
};
export const ForYouItemActionButtons = function ForYouItemActionButtons(arg0) {
  let actionButtons;
  let actionsNode;
  let compactMode;
  let dependencyMap;
  let importDefault;
  let require;
  ({ item: require, rowIndex: importDefault, onSoftAckItem: dependencyMap, actionButtons, actionsNode, compactMode } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let mapped = !compactMode;
  if (!compactMode) {
    mapped = null != actionButtons;
  }
  if (mapped) {
    let obj = { style: null };
    obj[0] = tmp2.buttonsContainer;
    let merged1 = Object.assign(merged);
    if (mapped) {
      mapped = actionButtons.map((id) => {
        id = id.id;
        const merged = Object.assign(id, Object.create(null));
        let obj = {};
        const merged1 = Object.assign(merged);
        obj.onPress = function onPress(arg0) {
          const onPress = merged.onPress;
          if (onPress != null) {
            onPress(arg0);
          }
          outer1_2(id);
          let obj = outer2_1(outer2_2[26]);
          obj = { action_type: outer2_0(outer2_2[21]).NotificationCenterActionTypes.ACTION_BUTTON, notification_center_id: id.id, item_type: id.type, acked: false, item_index: merged, deeplink: id.deeplink, action_button_id: id };
          obj.track(outer2_8.NOTIFICATION_CENTER_ACTION, obj);
        };
        if (id == null) {
          id = arg1;
        }
        return outer1_12(outer1_0(outer1_2[12]).Button, obj, id);
      });
    }
    const items = [mapped, ];
    let tmp11 = null;
    if (tmp4) {
      tmp11 = actionsNode;
    }
    items[1] = tmp11;
    obj.children = items;
    let tmp6Result = closure_13(View, obj);
    const tmp6 = closure_13;
    const tmp7 = View;
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};