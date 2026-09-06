// discord_app/modules/notification_center/native/ForYouItemActionButtons.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import NotificationCenterItemsTypes from "../NotificationCenterItemsTypes.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import handleSupportedURLDefault from "../../links/native/handleSupportedURL.tsx";
import AddFriendsScreenUtils from "../../main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    let obj = { channelId };
    tmp = obj;
  }
  obj = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = other_user(1109).ComponentDispatch;
    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
  }, 0);
}
class IncomingFriendRequestActions {
  constructor(arg0) {
    pressed = global.pressed;
    compactMode = global.compactMode;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    ({ onAccept, onIgnore, onWavePress } = global);
    tmp2 = pressed;
    tmp3 = closure_2;
    tmp = closure_14();
    obj = pressed(closure_2[9]);
    sharedValue = obj.useSharedValue(0);
    closure_1 = sharedValue;
    obj2 = pressed(closure_2[9]);
    sharedValue1 = obj2.useSharedValue(-1);
    closure_2 = sharedValue1;
    obj3 = pressed(closure_2[9]);
    sharedValue2 = obj3.useSharedValue(-1);
    closure_3 = sharedValue2;
    obj4 = pressed(closure_2[9]);
    sharedValue3 = obj4.useSharedValue(-1);
    closure_4 = sharedValue3;
    obj5 = pressed(closure_2[9]);
    fn = function u() {
      let obj = timing;
      let num = 1;
      if (pressed.get()) {
        num = 0;
      }
      obj = { opacity: obj.withTiming(num, { duration: 150 }), pointerEvents: null };
      let str = "auto";
      if (pressed.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    };
    obj = { withTiming: pressed(closure_2[10]).withTiming, pressed };
    fn.__closure = obj;
    fn.__workletHash = 100815030677;
    fn.__initData = closure_17;
    animatedStyle = obj5.useAnimatedStyle(fn);
    obj7 = pressed(closure_2[9]);
    fn2 = function _() {
      let obj = pressed;
      let num = 1;
      if (!pressed.get()) {
        value = sharedValue.get();
        num = value / sharedValue1.get();
      }
      value = sharedValue1.get();
      const diff = value - sharedValue1.get() * num;
      let num2 = 0;
      if (!obj.get()) {
        num2 = -diff / 2;
      }
      obj = { transform: null, opacity: null, pointerEvents: null };
      obj = { scaleX: timing.withTiming(num) };
      const items = [obj];
      const obj1 = { translateX: null };
      obj1.translateX = timing.withTiming(num2);
      items[1] = obj1;
      obj.transform = items;
      let num4 = 0;
      if (obj.get()) {
        num4 = 1;
      }
      obj.opacity = timing.withTiming(num4);
      let str = "none";
      if (obj.get()) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    };
    obj1 = {
      pressed,
      acceptButtonWidth: sharedValue,
      buttonWidth: sharedValue1,
      withTiming: pressed(closure_2[10]).withTiming,
    };
    fn2.__closure = obj1;
    fn2.__workletHash = 12358515723480;
    fn2.__initData = closure_18;
    animatedStyle1 = obj7.useAnimatedStyle(fn2);
    obj9 = pressed(closure_2[9]);
    class E {
      constructor() {
        obj = { transform: null };
        obj = { translateX: closure_3.get() / 2 };
        items = [,];
        items[0] = obj;
        obj1 = { translateY: closure_4.get() / 2 };
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    E.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
    E.__workletHash = 667441788226;
    E.__initData = closure_19;
    animatedStyle2 = obj9.useAnimatedStyle(E);
    obj10 = pressed(closure_2[9]);
    class I {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[9]);
        obj2 = closure_0(closure_2[9]);
        obj3 = closure_0(closure_2[10]);
        str = "-2deg";
        if (pressed.get()) {
          str = "8deg";
        }
        obj = { transform: null };
        obj1 = { rotateZ: null };
        obj2 = { duration: 150, easing: null };
        Easing = tmp(tmp2[9]).Easing;
        obj2.easing = Easing.inOut(tmp(tmp2[9]).Easing.quad);
        obj1.rotateZ = obj.withDelay(450, obj2.withRepeat(obj3.withTiming(str, obj2), 4, true));
        items = [, ,];
        items[0] = obj1;
        obj3 = { translateX: -closure_3.get() / 2 };
        items[1] = obj3;
        obj4 = { translateY: -closure_4.get() / 2 };
        items[2] = obj4;
        obj.transform = items;
        return obj;
      }
    }
    obj2 = {
      withDelay: pressed(closure_2[9]).withDelay,
      withRepeat: pressed(closure_2[9]).withRepeat,
      withTiming: pressed(closure_2[10]).withTiming,
      pressed,
      Easing: pressed(closure_2[9]).Easing,
      waveWidth: sharedValue2,
      waveHeight: sharedValue3,
    };
    I.__closure = obj2;
    I.__workletHash = 498167545082;
    I.__initData = closure_20;
    animatedStyle3 = obj10.useAnimatedStyle(I);
    obj12 = pressed(closure_2[9]);
    fn3 = function p() {
      value = pressed.get();
      return { pointerEvents: "none" };
    };
    fn3.__closure = { pressed };
    fn3.__workletHash = 3473531476662;
    fn3.__initData = closure_21;
    animatedProps = obj12.useAnimatedProps(fn3);
    tmp13 = jsxs;
    tmp14 = View;
    tmp15 = jsx;
    tmp16 = closure_1;
    obj3 = { style: null, children: null };
    items = [,];
    items[0] = tmp.actionButtonsContainer;
    items[1] = animatedStyle;
    obj3.style = items;
    obj4 = {
      onLayout(nativeEvent) {
        const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
      },
      children: null,
    };
    obj5 = { text: null, variant: "primary", size: null, onPress: null };
    intl = pressed(closure_2[13]).intl;
    obj5.text = intl.string(pressed(closure_2[13]).t.zf5jU5);
    str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    obj5.size = str2;
    obj5.onPress = onAccept;
    obj4.children = tmp15(pressed(closure_2[12]).Button, obj5, "accept_friend_request");
    items1 = [,];
    items1[0] = tmp15(tmp14, obj4);
    obj6 = { text: null, variant: "secondary", size: null, onPress: null };
    intl2 = tmp2(tmp3[13]).intl;
    obj6.text = intl2.string(tmp2(tmp3[13]).t.EBN847);
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj7 = { direction: "horizontal", spacing: 8, children: null };
    obj6.size = str3;
    obj6.onPress = onIgnore;
    items1[1] = tmp15(tmp2(tmp3[12]).Button, obj6, "ignore_friend_request");
    obj7.children = items1;
    obj3.children = tmp13(pressed(closure_2[11]).Stack, obj7);
    items2 = [,];
    items2[0] = tmp15(closure_1(closure_2[9]).View, obj3);
    obj8 = {
      style: animatedStyle1,
      onLayout(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      },
    };
    merged = Object.assign(animatedProps);
    obj9 = { variant: "secondary", text: null, icon: null, size: null, onPress: null };
    intl3 = tmp2(tmp3[13]).intl;
    obj9.text = intl3.string(tmp2(tmp3[13]).t.n8nU4W);
    obj10 = {
      style: animatedStyle2,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    obj11 = {
      style: animatedStyle3,
      onLayout(nativeEvent) {
        const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
      },
      children: tmp15(tmp2(tmp3[14]).Text, {
        maxFontSizeMultiplier: 2,
        variant: "text-sm/normal",
        children: "\u{1F44B}",
      }),
    };
    obj10.children = tmp15(tmp16(tmp3[9]).View, obj11);
    obj9.icon = tmp15(tmp16(tmp3[9]).View, obj10);
    if (compactMode) {
      str = "sm";
    }
    obj12 = { children: null };
    obj9.size = str;
    obj9.onPress = onWavePress;
    obj8.children = tmp15(tmp2(tmp3[12]).Button, obj9);
    items2[1] = tmp15(tmp16(tmp3[9]).View, obj8);
    obj12.children = items2;
    return tmp13(tmp14, obj12);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  ComponentActions: closure_9,
  EMPTY_STRING_SNOWFLAKE_ID: c10,
  MessageTypes: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let value = createStyles.createStyles({
  buttonsContainer: { flexDirection: "row", marginTop: 8 },
  actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 },
});
const constants2 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
let __initData = {
  code: "function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}",
};
const collapsedCategories = {
  code: "function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}",
};
const __initData3 = {
  code: "function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}",
};
const __initData4 = {
  code: "function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}",
};
__initData = {
  code: "function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export const useItemActionButtonPropsV2 = function useItemActionButtonPropsV2(
  other_user,
  callback,
  navigation,
  forceHoistItem,
  isForceHoisted,
  onSoftAckItem,
  arg6,
  compactMode,
) {
  _require = other_user;
  closure_1 = callback;
  dependencyMap = navigation;
  asyncGeneratorStep = forceHoistItem;
  noop = onSoftAckItem;
  closure_5 = arg6;
  other_user = other_user.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = sharedValue;
  }
  const notification_center_v2 = "notification_center_v2";
  let tmp2 = _require;
  let obj = require("useStateFromStores");
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const message = other_user.message;
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  });
  let obj1 = require("canReplyToMessage");
  let message = other_user.message;
  const canReplyToMessage = obj1.useCanReplyToMessage(stateFromStores, other_user.message);
  if (message != null) {
    const type = message.type;
  }
  const items1 = [id, onSoftAckItem, other_user];
  callback = noop.useCallback(() => {
    let obj = AddFriendsScreenUtils;
    obj.sendWave(id, false, "You Tab");
    const dMFromUserId = ChannelStore.getDMFromUserId(id);
    if (null != dMFromUserId) {
      const _HermesInternal = HermesInternal;
      obj = {
        payload: parseURLDefault("https://discord.com/channels/@me/" + dMFromUserId).payload,
        safe: true,
        navigationReplace: false,
      };
      handleSupportedURLDefault(obj);
    }
    onSoftAckItem(closure_0);
  }, items1);
  sharedValue = tmp2(4296).useSharedValue(false);
  const items2 = [forceHoistItem, sharedValue, other_user, id, arg6];
  const callback1 = noop.useCallback(() => {
    let obj = { userId: id, applicationId: null, location: null, onConfirm: null };
    let applicationId;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = other_user.applicationId;
    }
    obj.applicationId = applicationId;
    obj.location = notification_center_v2;
    obj.onConfirm = function onConfirm() {
      const user = notification_center_v2.getUser(id);
      if (null != user) {
        const intl = closure_0(1114).intl;
        let username = user.globalName;
        if (username == null) {
          username = user.username;
        }
        const obj = { username };
        closure_1_5(intl.format(closure_0(1114).t["5Uzkdp"], obj));
      }
      const result = sharedValue.set(true);
      other_user.enableBadge = false;
      forceHoistItem(other_user);
    };
    let result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items2);
  const items3 = [, ,];
  ({ applicationId: arr4[0], type: arr4[1] } = other_user);
  items3[2] = id;
  const callback2 = noop.useCallback(() => {
    const obj = { userId: id, applicationId: null, location: null };
    let applicationId;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = other_user.applicationId;
    }
    obj.applicationId = applicationId;
    obj.location = notification_center_v2;
    obj.cancelFriendRequest(obj);
  }, items3);
  const items4 = [navigation];
  const callback3 = noop.useCallback(() => {
    if (navigation != null) {
      navigation.navigate("friends", { screen: "requests" });
    }
  }, items4);
  const items5 = [id];
  const callback4 = noop.useCallback(() => {
    const dMChannel = ChannelActionCreatorsDefault.getDMChannel(id);
    dMChannel.then((channelId) => {
      closure_1(13850)({
        payload: closure_1(4540)("https://discord.com/channels/@me/" + channelId).payload,
        safe: true,
        navigationReplace: false,
      });
      let obj;
      let tmp3;
      if (null != channelId) {
        obj = { channelId };
        tmp3 = obj;
      }
      obj = tmp3;
      const timerId = setTimeout(() => {
        const ComponentDispatch = other_user(1109).ComponentDispatch;
        return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
      }, 0);
    });
  }, items5);
  const items6 = [id];
  const callback5 = noop.useCallback(() => {
    let obj = { userId: id, context: null };
    obj = { location: notification_center_v2 };
    obj.context = obj;
    obj.addRelationship(obj);
    const obj1 = { key: "NOTIF_CENTER_V2_ADD_FRIEND_TOAST", content: null };
    const intl = util.intl;
    obj1.content = intl.string(util.t["7MAxkR"]);
    ToastActionCreatorsDefault.open(obj1);
  }, items6);
  const items7 = [callback, stateFromStores, ,];
  ({ message_id: arr8[2], message_channel_id: arr8[3] } = other_user);
  const callback6 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (navigation === 2) {
        navigation = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          navigation = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              navigation = 3;
              throw value;
            } else if (arg0 === 2) {
              navigation = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp7 = null != tmp2.message_id;
              if (tmp7) {
                tmp7 = null != stateFromStores;
              }
              if (tmp7) {
                let obj1 = tmp2(navigation[25]);
                obj1 = {
                  messageId: tmp2.message_id,
                  channel: stateFromStores,
                  shouldMention: true,
                  showMentionToggle: true,
                };
                c1 = 1;
                navigation = 1;
                const obj2 = { value: obj1.createShallowPendingReply(obj1), done: false };
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            navigation = 3;
            throw value;
          } else if (arg0 === 2) {
            navigation = 3;
            obj = { value, done: true };
            return obj;
          }
          closure_128_1();
          focusChatInput(closure_128_0.message_channel_id);
          navigation = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp18) {
          navigation = tmp;
          throw tmp18;
        }
      }
    }),
    items7,
  );
  const items8 = [callback, other_user.message_channel_id];
  const callback7 = noop.useCallback(() => {
    closure_1();
    const message_channel_id = other_user.message_channel_id;
    let obj;
    let tmp2;
    if (null != message_channel_id) {
      obj = { channelId: message_channel_id };
      tmp2 = obj;
    }
    obj = tmp2;
    const timerId = setTimeout(() => {
      const ComponentDispatch = other_user(1109).ComponentDispatch;
      return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
    }, 0);
  }, items8);
  if (other_user.disable_action) {
    obj = { actionButtons: [] };
    return obj;
  } else {
    if (other_user.type !== tmp2(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (other_user.type !== tmp2(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (other_user.type !== tmp2(7640).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (other_user.type === tmp2(7640).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            obj = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            obj1 = { id: "view_friend_requests", text: null, variant: "secondary", size: "md", onPress: null };
            const intl14 = tmp2(1114).intl;
            obj1.text = intl14.string(tmp2(1114).t["lMR96+"]);
            obj1.onPress = callback3;
            const items9 = [obj1];
            obj.actionButtons = items9;
            let obj2 = { name: constants2.ACTION, label: null };
            const intl15 = tmp2(1114).intl;
            obj2.label = intl15.string(tmp2(1114).t["lMR96+"]);
            const items10 = [obj2];
            obj.accessibilityActions = items10;
            obj.onAccessibilityAction = callback3;
            return obj;
          } else if (other_user.type === tmp2(7640).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj3 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj4 = { id: "join_stream", text: null, variant: "secondary", size: "md", onPress: null };
            const intl12 = tmp2(1114).intl;
            obj4.text = intl12.string(tmp2(1114).t["Pqj7h+"]);
            obj4.onPress = callback;
            const items11 = [obj4];
            obj3.actionButtons = items11;
            const obj5 = { name: constants2.ACTION, label: null };
            const intl13 = tmp2(1114).intl;
            obj5.label = intl13.string(tmp2(1114).t["Pqj7h+"]);
            const items12 = [obj5];
            obj3.accessibilityActions = items12;
            obj3.onAccessibilityAction = callback;
            return obj3;
          } else {
            if (other_user.type !== tmp2(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (other_user.type !== tmp2(7640).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (other_user.type !== tmp2(7640).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (other_user.type !== tmp2(7640).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (other_user.type === tmp2(7640).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj6 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj7 = { id: "add_friend", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl8 = tmp2(1114).intl;
                      obj7.text = intl8.string(tmp2(1114).t["boL/YX"]);
                      obj7.onPress = callback5;
                      const items13 = [obj7];
                      obj6.actionButtons = items13;
                      const obj8 = { name: constants2.ACTION, label: null };
                      const intl9 = tmp2(1114).intl;
                      obj8.label = intl9.string(tmp2(1114).t["boL/YX"]);
                      const items14 = [obj8];
                      obj6.accessibilityActions = items14;
                      obj6.onAccessibilityAction = callback5;
                      return obj6;
                    } else if (other_user.type === tmp2(7640).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj9 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj10 = { id: "join_event", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl6 = tmp2(1114).intl;
                      obj10.text = intl6.string(tmp2(1114).t.hRKdcn);
                      obj10.onPress = callback;
                      const items15 = [obj10];
                      obj9.actionButtons = items15;
                      const obj11 = { name: constants2.ACTION, label: null };
                      const intl7 = tmp2(1114).intl;
                      obj11.label = intl7.string(tmp2(1114).t.hRKdcn);
                      const items16 = [obj11];
                      obj9.accessibilityActions = items16;
                      obj9.onAccessibilityAction = callback;
                      return obj9;
                    } else if (other_user.type === tmp2(7640).NotificationCenterItems.LIFECYCLE_ITEM) {
                      const item_enum = other_user.item_enum;
                      if (tmp2(7640).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl5 = tmp2(1114).intl;
                        let stringResult = intl5.string(tmp2(1114).t.zMRcWL);
                        let str = "update_profile";
                      } else if (tmp2(7640).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl4 = tmp2(1114).intl;
                        stringResult = intl4.string(tmp2(1114).t["vwL/4s"]);
                        str = "find_friends";
                      } else if (tmp2(7640).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl3 = tmp2(1114).intl;
                        stringResult = intl3.string(tmp2(1114).t["boL/YX"]);
                        str = "add_friend";
                      } else {
                        str = null;
                        stringResult = null;
                        if (tmp2(7640).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl19 = tmp2(1114).intl;
                          stringResult = intl19.string(tmp2(1114).t["GuUH7/"]);
                          str = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        if (null != str) {
                          let obj12 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj13 = {
                            id: str,
                            text: stringResult,
                            variant: "secondary",
                            size: "md",
                            onPress: callback,
                          };
                          const items17 = [obj13];
                          obj12.actionButtons = items17;
                          const obj14 = { name: constants2.ACTION, label: stringResult };
                          const items18 = [obj14];
                          obj12.accessibilityActions = items18;
                          obj12.onAccessibilityAction = callback;
                        }
                        return obj12;
                      }
                      const obj15 = { actionButtons: [] };
                      obj12 = obj15;
                    } else {
                      if (other_user.type !== tmp2(7640).NotificationCenterItems.RECENT_MENTION) {
                        if (other_user.type !== tmp2(7640).NotificationCenterItems.REPLY_MENTION) {
                          if (other_user.type === tmp2(7640).NotificationCenterItems.TRENDING_CONTENT) {
                            const obj16 = {
                              actionButtons: null,
                              accessibilityActions: null,
                              onAccessibilityAction: null,
                            };
                            const obj17 = {
                              id: "read_summary",
                              text: null,
                              variant: "secondary",
                              size: "md",
                              onPress: null,
                            };
                            let intl = tmp2(1114).intl;
                            obj17.text = intl.string(tmp2(1114).t.k0Q31F);
                            obj17.onPress = callback7;
                            const items19 = [obj17];
                            obj16.actionButtons = items19;
                            const obj18 = { name: constants2.ACTION, label: null };
                            const intl2 = tmp2(1114).intl;
                            obj18.label = intl2.string(tmp2(1114).t.k0Q31F);
                            const items20 = [obj18];
                            obj16.accessibilityActions = items20;
                            obj16.onAccessibilityAction = callback7;
                            let obj19 = obj16;
                          } else {
                            obj19 = { actionButtons: [] };
                          }
                          return obj19;
                        }
                      }
                      if (canReplyToMessage) {
                        if (type !== callback1.POLL_RESULT) {
                          let obj20 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj21 = {
                            id: "send_reply",
                            text: null,
                            variant: "secondary",
                            size: "md",
                            onPress: null,
                          };
                          const intl17 = tmp2(1114).intl;
                          obj21.text = intl17.string(tmp2(1114).t.vBq3iT);
                          obj21.onPress = callback6;
                          const items21 = [obj21];
                          obj20.actionButtons = items21;
                          const obj22 = { name: constants2.ACTION, label: null };
                          const intl18 = tmp2(1114).intl;
                          obj22.label = intl18.string(tmp2(1114).t.vBq3iT);
                          const items22 = [obj22];
                          obj20.accessibilityActions = items22;
                          obj20.onAccessibilityAction = callback6;
                        }
                      }
                      const obj23 = { actionButtons: [] };
                      obj20 = obj23;
                    }
                  }
                }
              }
            }
            const obj24 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj25 = { id: "send_message", text: null, variant: "secondary", size: "md", onPress: null };
            const intl10 = tmp2(1114).intl;
            obj25.text = intl10.string(tmp2(1114).t["GuUH7/"]);
            obj25.onPress = callback4;
            const items23 = [obj25];
            obj24.actionButtons = items23;
            const obj26 = { name: constants2.ACTION, label: null };
            const intl11 = tmp2(1114).intl;
            obj26.label = intl11.string(tmp2(1114).t["GuUH7/"]);
            const items24 = [obj26];
            obj24.accessibilityActions = items24;
            obj24.onAccessibilityAction = callback4;
            return obj24;
          }
        }
      }
    }
    const obj27 = { actionsNode: null, accessibilityActions: null, onAccessibilityAction: null };
    const obj28 = {
      onWavePress: callback,
      onAccept: callback1,
      onIgnore: callback2,
      pressed: sharedValue,
      compactMode,
    };
    obj27.actionsNode = callback2(IncomingFriendRequestActions, obj28);
    if (other_user.type === tmp2(7640).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj29 = { name: constants2.WAVE, label: null };
      const intl16 = tmp2(1114).intl;
      obj29.label = intl16.string(tmp2(1114).t.n8nU4W);
      const items25 = [obj29];
      let items26 = items25;
    } else {
      const obj30 = { name: constants2.ACCEPT, label: null };
      const intl20 = tmp2(1114).intl;
      obj30.label = intl20.string(tmp2(1114).t.zf5jU5);
      items26 = [obj30];
      const obj31 = { name: constants2.IGNORE, label: null };
      const intl21 = tmp2(1114).intl;
      obj31.label = intl21.string(tmp2(1114).t.EBN847);
      items26[1] = obj31;
    }
    obj27.accessibilityActions = items26;
    obj27.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (constants.WAVE === actionName) {
        callback();
      } else if (constants.ACCEPT === actionName) {
        callback1();
      } else if (constants.IGNORE === actionName) {
        callback2();
      }
    };
    return obj27;
  }
  const tmp2Result = tmp2(4296);
};
export const ForYouItemActionButtons = function ForYouItemActionButtons(arg0) {
  ({
    item: require,
    rowIndex: importDefault,
    onSoftAckItem: dependencyMap,
    actionButtons,
    actionsNode,
    compactMode,
  } = arg0);
  let merged = Object.assign(
    arg0,
    Object.assign({ item: 0, rowIndex: 0, onSoftAckItem: 0, actionButtons: 0, actionsNode: 0, compactMode: 0 }),
  );
  let mapped = !compactMode;
  if (!compactMode) {
    mapped = null != actionButtons;
  }
  if (mapped) {
    let obj = { style: tmp2.buttonsContainer };
    let merged1 = Object.assign(merged);
    if (mapped) {
      mapped = actionButtons.map((id, index) => {
        id = id.id;
        const merged = Object.assign(id, Object.assign({ id: 0 }));
        let obj = {};
        const merged1 = Object.assign(merged);
        obj.onPress = function onPress(arg0) {
          const onPress = merged.onPress;
          if (onPress != null) {
            onPress(arg0);
          }
          dependencyMap(_require);
          const obj = {
            action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
            notification_center_id: _require.id,
            item_type: _require.type,
            acked: false,
            item_index,
            deeplink: _require.deeplink,
            action_button_id: id,
          };
          obj.track(constants.NOTIFICATION_CENTER_ACTION, obj);
        };
        if (id == null) {
          id = index;
        }
        return closure_1_12(require("components/Button/Button").Button, obj, id);
      });
    }
    const items = [mapped];
    let tmp11 = null;
    if (tmp4) {
      tmp11 = actionsNode;
    }
    items[1] = tmp11;
    obj.children = items;
    let tmp6Result = closure_13(View, obj);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
};
