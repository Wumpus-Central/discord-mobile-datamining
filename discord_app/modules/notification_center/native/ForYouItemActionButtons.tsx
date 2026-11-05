// discord_app/modules/notification_center/native/ForYouItemActionButtons.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import NotificationCenterItemsTypes from "../NotificationCenterItemsTypes.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import PeopleUtilsDefault from "../../people/PeopleUtils.tsx";
import handleSupportedURLDefault from "../../links/native/handleSupportedURL.tsx";
import AddFriendsScreenUtils from "../../main_tabs_v2/native/friends/components/AddFriendsScreenUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    let obj = { channelId };
    tmp = obj;
  }
  obj = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = other_user(1108).ComponentDispatch;
    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
  }, 0);
}
class IncomingFriendRequestActions {
  constructor(arg0) {
    ({ pressed, compactMode } = global);
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    ({ onAccept, onIgnore, onWavePress } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_14();
    obj = closure_0(closure_2[9]);
    sharedValue = obj.useSharedValue(0);
    closure_0 = sharedValue;
    obj2 = closure_0(closure_2[9]);
    sharedValue1 = obj2.useSharedValue(-1);
    closure_1 = sharedValue1;
    obj3 = closure_0(closure_2[9]);
    sharedValue2 = obj3.useSharedValue(-1);
    closure_2 = sharedValue2;
    obj4 = closure_0(closure_2[9]);
    sharedValue3 = obj4.useSharedValue(-1);
    closure_3 = sharedValue3;
    obj5 = closure_0(closure_2[9]);
    items = [, ,];
    items[0] = closure_17;
    items[1] = closure_0(closure_2[10]).withTiming;
    items[2] = pressed;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp8, tmp9, tmp10] = items;
    class ForYouItemActionButtonsTsx1 {
      constructor() {
        obj = closure_1;
        tmp = closure_0;
        num = 1;
        if (closure_1.get()) {
          num = 0;
        }
        obj1 = { opacity: tmp(num, { duration: 150 }), pointerEvents: null };
        str = "auto";
        if (obj.get()) {
          str = "none";
        }
        obj1.pointerEvents = str;
        return obj1;
      }
    }
    items1 = [,];
    items1[0] = tmp9;
    items1[1] = tmp10;
    ForYouItemActionButtonsTsx1.__closure = items1;
    ForYouItemActionButtonsTsx1.__workletHash = 938545958540;
    ForYouItemActionButtonsTsx1.__initData = tmp8;
    animatedStyle = obj5.useAnimatedStyle(ForYouItemActionButtonsTsx1);
    tmp2Result = tmp2(tmp3[9]);
    items2 = [, , , ,];
    items2[0] = closure_18;
    items2[1] = pressed;
    items2[2] = sharedValue;
    items2[3] = sharedValue1;
    items2[4] = tmp2(tmp3[10]).withTiming;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
    class ForYouItemActionButtonsTsx2 {
      constructor() {
        obj = closure_0;
        num = 1;
        if (!closure_0.get()) {
          tmp = closure_1;
          tmp3 = closure_2;
          value = closure_1.get();
          num = value / closure_2.get();
        }
        value1 = closure_2.get();
        diff = value1 - closure_2.get() * num;
        num2 = 0;
        if (!obj.get()) {
          num3 = 2;
          num2 = -diff / 2;
        }
        obj1 = { transform: null, opacity: null, pointerEvents: null };
        obj5 = { scaleX: closure_3(num) };
        tmp6 = closure_3;
        items = [,];
        items[0] = obj5;
        obj6 = { translateX: closure_3(num2) };
        items[1] = obj6;
        obj1.transform = items;
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        obj1.opacity = tmp6(num4);
        str = "none";
        if (obj.get()) {
          str = "auto";
        }
        obj1.pointerEvents = str;
        return obj1;
      }
    }
    items3 = [, , ,];
    items3[0] = tmp13;
    items3[1] = tmp14;
    items3[2] = tmp15;
    items3[3] = tmp16;
    ForYouItemActionButtonsTsx2.__closure = items3;
    ForYouItemActionButtonsTsx2.__workletHash = 14181259880641;
    ForYouItemActionButtonsTsx2.__initData = tmp12;
    animatedStyle1 = tmp2Result.useAnimatedStyle(ForYouItemActionButtonsTsx2);
    tmp2Result1 = tmp2(tmp3[9]);
    items4 = [, ,];
    items4[0] = closure_19;
    items4[1] = sharedValue2;
    items4[2] = sharedValue3;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp18, tmp19, tmp20] = items4;
    class ForYouItemActionButtonsTsx3 {
      constructor() {
        obj = { transform: null };
        obj1 = { translateX: closure_0.get() / 2 };
        items = [,];
        items[0] = obj1;
        obj4 = { translateY: closure_1.get() / 2 };
        items[1] = obj4;
        obj.transform = items;
        return obj;
      }
    }
    items5 = [,];
    items5[0] = tmp19;
    items5[1] = tmp20;
    ForYouItemActionButtonsTsx3.__closure = items5;
    ForYouItemActionButtonsTsx3.__workletHash = 8815114936763;
    ForYouItemActionButtonsTsx3.__initData = tmp18;
    animatedStyle2 = tmp2Result1.useAnimatedStyle(ForYouItemActionButtonsTsx3);
    tmp2Result2 = tmp2(tmp3[9]);
    items6 = [, , , , , , ,];
    items6[0] = closure_20;
    items6[1] = tmp2(tmp3[9]).withDelay;
    items6[2] = tmp2(tmp3[9]).withRepeat;
    items6[3] = tmp2(tmp3[10]).withTiming;
    items6[4] = pressed;
    items6[5] = tmp2(tmp3[9]).Easing;
    items6[6] = sharedValue2;
    items6[7] = sharedValue3;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items6;
    class ForYouItemActionButtonsTsx4 {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_2;
        str = "-2deg";
        if (closure_3.get()) {
          str = "8deg";
        }
        obj = { transform: null };
        obj1 = { rotateZ: null };
        obj6 = { duration: 150, easing: closure_4.inOut(closure_4.quad) };
        obj1.rotateZ = tmp(450, tmp2(tmp3(str, obj6), 4, true));
        items = [, ,];
        items[0] = obj1;
        obj7 = { translateX: -closure_5.get() / 2 };
        items[1] = obj7;
        obj8 = { translateY: -closure_6.get() / 2 };
        items[2] = obj8;
        obj.transform = items;
        return obj;
      }
    }
    items7 = [, , , , , ,];
    items7[0] = tmp23;
    items7[1] = tmp24;
    items7[2] = tmp25;
    items7[3] = tmp26;
    items7[4] = tmp27;
    items7[5] = tmp28;
    items7[6] = tmp29;
    ForYouItemActionButtonsTsx4.__closure = items7;
    ForYouItemActionButtonsTsx4.__workletHash = 9813687280195;
    ForYouItemActionButtonsTsx4.__initData = tmp22;
    animatedStyle3 = tmp2Result2.useAnimatedStyle(ForYouItemActionButtonsTsx4);
    tmp2Result3 = tmp2(tmp3[9]);
    items8 = [,];
    items8[0] = closure_21;
    items8[1] = pressed;
    closure_0 = undefined;
    [tmp31, tmp32] = items8;
    class ForYouItemActionButtonsTsx5 {
      constructor() {
        value = closure_0.get();
        return { pointerEvents: "none" };
      }
    }
    items9 = [];
    items9[0] = tmp32;
    ForYouItemActionButtonsTsx5.__closure = items9;
    ForYouItemActionButtonsTsx5.__workletHash = 4550653159023;
    ForYouItemActionButtonsTsx5.__initData = tmp31;
    animatedProps = tmp2Result3.useAnimatedProps(ForYouItemActionButtonsTsx5);
    tmp34 = jsxs;
    tmp35 = View;
    tmp36 = jsx;
    tmp37 = closure_1;
    obj1 = { style: null, children: null };
    items10 = [,];
    items10[0] = tmp.actionButtonsContainer;
    items10[1] = animatedStyle;
    obj1.style = items10;
    obj20 = {
      onLayout: function handleAcceptButtonLayout(nativeEvent) {
        const result = _undefined.set(nativeEvent.nativeEvent.layout.width);
      },
      children: null,
    };
    obj21 = { text: null, variant: "primary", size: null, onPress: null };
    intl = tmp2(tmp3[13]).intl;
    obj21.text = intl.string(tmp2(tmp3[13]).t.zf5jU5);
    str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    obj21.size = str2;
    obj21.onPress = onAccept;
    obj20.children = tmp36(tmp2(tmp3[12]).Button, obj21, "accept_friend_request");
    items11 = [,];
    items11[0] = tmp36(tmp35, obj20);
    obj22 = { text: null, variant: "secondary", size: null, onPress: null };
    intl2 = tmp2(tmp3[13]).intl;
    obj22.text = intl2.string(tmp2(tmp3[13]).t.EBN847);
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj23 = { direction: "horizontal", spacing: 8, children: null };
    obj22.size = str3;
    obj22.onPress = onIgnore;
    items11[1] = tmp36(tmp2(tmp3[12]).Button, obj22, "ignore_friend_request");
    obj23.children = items11;
    obj1.children = tmp34(tmp2(tmp3[11]).Stack, obj23);
    items12 = [,];
    items12[0] = tmp36(closure_1(tmp3[9]).View, obj1);
    obj24 = {
      style: animatedStyle1,
      onLayout: function handleButtonsLayout(nativeEvent) {
        const result = _undefined2.set(nativeEvent.nativeEvent.layout.width);
      },
    };
    merged = Object.assign(animatedProps);
    obj25 = { variant: "secondary", text: null, icon: null, size: null, onPress: null };
    intl3 = tmp2(tmp3[13]).intl;
    obj25.text = intl3.string(tmp2(tmp3[13]).t.n8nU4W);
    obj26 = {
      style: animatedStyle2,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    obj27 = {
      style: animatedStyle3,
      onLayout: function handleWaveLayout(nativeEvent) {
        const result = _undefined3.set(nativeEvent.nativeEvent.layout.width);
        const result1 = _undefined4.set(nativeEvent.nativeEvent.layout.height);
      },
      children: tmp36(tmp2(tmp3[14]).Text, {
        maxFontSizeMultiplier: 2,
        variant: "body-sm/normal",
        children: "\u{1F44B}",
      }),
    };
    obj26.children = tmp36(tmp37(tmp3[9]).View, obj27);
    obj25.icon = tmp36(tmp37(tmp3[9]).View, obj26);
    if (compactMode) {
      str = "sm";
    }
    obj28 = { children: null };
    obj25.size = str;
    obj25.onPress = onWavePress;
    obj24.children = tmp36(tmp2(tmp3[12]).Button, obj25);
    items12[1] = tmp36(tmp37(tmp3[9]).View, obj24);
    obj28.children = items12;
    return tmp34(tmp35, obj28);
  }
}
const View = fn(17).View;
const Constants = fn(1072);
({
  AnalyticEvents: closure_8,
  ComponentActions: closure_9,
  EMPTY_STRING_SNOWFLAKE_ID: closure_10,
  MessageTypes: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5143);
const gesture = createStyles.createStyles({
  buttonsContainer: { flexDirection: "row", marginTop: 8 },
  actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 },
});
const constants2 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
let closure_17 = {
  code: "(function ForYouItemActionButtonsTsx1(){let[withTiming,pressed]=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};})",
};
let closure_18 = {
  code: "(function ForYouItemActionButtonsTsx2(){let[pressed,acceptButtonWidth,buttonWidth,withTiming]=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};})",
};
let closure_19 = {
  code: "(function ForYouItemActionButtonsTsx3(){let[waveWidth,waveHeight]=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};})",
};
let closure_20 = {
  code: "(function ForYouItemActionButtonsTsx4(){let[withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight]=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};})",
};
let closure_21 = {
  code: "(function ForYouItemActionButtonsTsx5(){let[pressed]=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export function useItemActionButtonPropsV2(
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
  let flag = isSoftAcked;
  if (isSoftAcked === undefined) {
    flag = false;
  }
  let notification_center_v2;
  let stateFromStores;
  callback = undefined;
  let sharedValue;
  let callback1;
  let callback2;
  other_user = other_user.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = sharedValue;
  }
  notification_center_v2 = "notification_center_v2";
  let tmp2 = _require;
  items = [id];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const message = other_user.message;
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    return ChannelStore.getChannel(channel_id);
  });
  let obj = require("useStateFromStores");
  let message = other_user.message;
  const canReplyToMessage = require("canReplyToMessage").useCanReplyToMessage(stateFromStores, other_user.message);
  if (message != null) {
    const type = message.type;
  }
  const items1 = [id, onSoftAckItem, other_user];
  callback = noop.useCallback(() => {
    AddFriendsScreenUtils.sendWave(id, false, "You Tab");
    const dMFromUserId = ChannelStore.getDMFromUserId(id);
    if (null != dMFromUserId) {
      const _HermesInternal = HermesInternal;
      const obj2 = {
        payload: parseURLDefault("https://discord.com/channels/@me/" + dMFromUserId).payload,
        safe: true,
        navigationReplace: false,
      };
      handleSupportedURLDefault(obj2);
    }
    onSoftAckItem(closure_0);
  }, items1);
  let obj2 = require("canReplyToMessage");
  sharedValue = tmp2(1652).useSharedValue(false);
  const items2 = [forceHoistItem, sharedValue, other_user, id, arg6];
  callback1 = noop.useCallback(() => {
    const obj2 = { userId: id, applicationId: null, location: null, onConfirm: null };
    let applicationId;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = other_user.applicationId;
    }
    obj2.applicationId = applicationId;
    obj2.location = notification_center_v2;
    obj2.onConfirm = function onConfirm() {
      const user = notification_center_v2.getUser(id);
      if (null != user) {
        const intl = closure_0(1113).intl;
        let username = user.globalName;
        if (username == null) {
          username = user.username;
        }
        const obj = { username };
        closure_1_5(intl.format(closure_0(1113).t["5Uzkdp"], obj));
      }
      const result = sharedValue.set(true);
      other_user.enableBadge = false;
      forceHoistItem(other_user);
    };
    let result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept(obj2);
  }, items2);
  const items3 = [, ,];
  ({ applicationId: arr4[0], type: arr4[1] } = other_user);
  items3[2] = id;
  callback2 = noop.useCallback(() => {
    const obj2 = { userId: id, applicationId: null, location: null };
    let applicationId;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = other_user.applicationId;
    }
    obj2.applicationId = applicationId;
    obj2.location = notification_center_v2;
    PeopleUtilsDefault.cancelFriendRequest(obj2);
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
      closure_1(15929)({
        payload: closure_1(5882)("https://discord.com/channels/@me/" + channelId).payload,
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
        const ComponentDispatch = other_user(1108).ComponentDispatch;
        return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
      }, 0);
    });
  }, items5);
  const items6 = [id];
  const callback5 = noop.useCallback(() => {
    const obj2 = { userId: id, context: { location: notification_center_v2 } };
    RelationshipActionCreatorsDefault.addRelationship(obj2);
    const obj3 = { location: notification_center_v2 };
    const obj5 = { text: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t["7MAxkR"]);
    ToastActionCreatorsDefault.open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj5);
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
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp7 = null != tmp2.message_id;
              if (tmp7) {
                tmp7 = null != stateFromStores;
              }
              if (tmp7) {
                const obj5 = {
                  messageId: tmp2.message_id,
                  channel: stateFromStores,
                  shouldMention: true,
                  showMentionToggle: true,
                };
                c1 = 1;
                navigation = 1;
                const obj6 = { value: tmp2(navigation[25]).createShallowPendingReply(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            navigation = 3;
            throw value;
          } else if (arg0 === 2) {
            navigation = 3;
            const obj = { value, done: true };
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
      const ComponentDispatch = other_user(1108).ComponentDispatch;
      return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
    }, 0);
  }, items8);
  if (other_user.disable_action) {
    let obj3 = { actionButtons: [] };
    return obj3;
  } else {
    if (other_user.type !== tmp2(6997).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (other_user.type !== tmp2(6997).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (other_user.type !== tmp2(6997).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (other_user.type === tmp2(6997).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            let obj4 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            let obj5 = { id: "view_friend_requests", text: null, variant: "secondary", size: "md", onPress: null };
            const intl15 = tmp2(1113).intl;
            obj5.text = intl15.string(tmp2(1113).t["lMR96+"]);
            obj5.onPress = callback3;
            const items9 = [obj5];
            obj4.actionButtons = items9;
            let obj6 = { name: constants2.ACTION, label: null };
            const intl16 = tmp2(1113).intl;
            obj6.label = intl16.string(tmp2(1113).t["lMR96+"]);
            const items10 = [obj6];
            obj4.accessibilityActions = items10;
            obj4.onAccessibilityAction = callback3;
            return obj4;
          } else if (other_user.type === tmp2(6997).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj7 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj8 = { id: "join_stream", text: null, variant: "secondary", size: "md", onPress: null };
            const intl13 = tmp2(1113).intl;
            obj8.text = intl13.string(tmp2(1113).t["Pqj7h+"]);
            obj8.onPress = callback;
            const items11 = [obj8];
            obj7.actionButtons = items11;
            const obj9 = { name: constants2.ACTION, label: null };
            const intl14 = tmp2(1113).intl;
            obj9.label = intl14.string(tmp2(1113).t["Pqj7h+"]);
            const items12 = [obj9];
            obj7.accessibilityActions = items12;
            obj7.onAccessibilityAction = callback;
            return obj7;
          } else {
            if (other_user.type !== tmp2(6997).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (other_user.type !== tmp2(6997).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (other_user.type !== tmp2(6997).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (other_user.type !== tmp2(6997).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (other_user.type === tmp2(6997).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj10 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj11 = { id: "add_friend", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl9 = tmp2(1113).intl;
                      obj11.text = intl9.string(tmp2(1113).t["boL/YX"]);
                      obj11.onPress = callback5;
                      const items13 = [obj11];
                      obj10.actionButtons = items13;
                      const obj12 = { name: constants2.ACTION, label: null };
                      const intl10 = tmp2(1113).intl;
                      obj12.label = intl10.string(tmp2(1113).t["boL/YX"]);
                      const items14 = [obj12];
                      obj10.accessibilityActions = items14;
                      obj10.onAccessibilityAction = callback5;
                      return obj10;
                    } else if (other_user.type === tmp2(6997).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj13 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                      const obj14 = { id: "join_event", text: null, variant: "secondary", size: "md", onPress: null };
                      const intl7 = tmp2(1113).intl;
                      obj14.text = intl7.string(tmp2(1113).t.hRKdcn);
                      obj14.onPress = callback;
                      const items15 = [obj14];
                      obj13.actionButtons = items15;
                      const obj15 = { name: constants2.ACTION, label: null };
                      const intl8 = tmp2(1113).intl;
                      obj15.label = intl8.string(tmp2(1113).t.hRKdcn);
                      const items16 = [obj15];
                      obj13.accessibilityActions = items16;
                      obj13.onAccessibilityAction = callback;
                      return obj13;
                    } else if (other_user.type === tmp2(6997).NotificationCenterItems.LIFECYCLE_ITEM) {
                      const item_enum = other_user.item_enum;
                      if (tmp2(6997).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl6 = tmp2(1113).intl;
                        let stringResult = intl6.string(tmp2(1113).t.zMRcWL);
                        let str2 = "update_profile";
                      } else if (tmp2(6997).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl5 = tmp2(1113).intl;
                        stringResult = intl5.string(tmp2(1113).t["vwL/4s"]);
                        str2 = "find_friends";
                      } else if (tmp2(6997).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl4 = tmp2(1113).intl;
                        stringResult = intl4.string(tmp2(1113).t["boL/YX"]);
                        str2 = "add_friend";
                      } else {
                        str2 = null;
                        stringResult = null;
                        if (tmp2(6997).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl20 = tmp2(1113).intl;
                          stringResult = intl20.string(tmp2(1113).t["GuUH7/"]);
                          str2 = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        if (null != str2) {
                          let obj16 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj17 = {
                            id: str2,
                            text: stringResult,
                            variant: "secondary",
                            size: "md",
                            onPress: callback,
                          };
                          const items17 = [obj17];
                          obj16.actionButtons = items17;
                          const obj18 = { name: constants2.ACTION, label: stringResult };
                          const items18 = [obj18];
                          obj16.accessibilityActions = items18;
                          obj16.onAccessibilityAction = callback;
                        }
                        return obj16;
                      }
                      const obj19 = { actionButtons: [] };
                      obj16 = obj19;
                    } else {
                      if (other_user.type !== tmp2(6997).NotificationCenterItems.RECENT_MENTION) {
                        if (other_user.type !== tmp2(6997).NotificationCenterItems.REPLY_MENTION) {
                          if (
                            other_user.type === tmp2(6997).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER
                          ) {
                            const intl3 = tmp2(1113).intl;
                            const stringResult1 = intl3.string(tmp2(1113).t.TI8qgg);
                            const obj20 = {
                              id: "share_trials",
                              text: stringResult1,
                              variant: null,
                              size: "md",
                              onPress: null,
                            };
                            let str = "primary";
                            if (flag) {
                              str = "secondary";
                            }
                            const obj21 = {
                              actionButtons: null,
                              accessibilityActions: null,
                              onAccessibilityAction: null,
                            };
                            obj20.variant = str;
                            obj20.onPress = callback;
                            const items19 = [obj20];
                            obj21.actionButtons = items19;
                            const obj22 = { name: constants2.ACTION, label: stringResult1 };
                            const items20 = [obj22];
                            obj21.accessibilityActions = items20;
                            obj21.onAccessibilityAction = callback;
                            return obj21;
                          } else {
                            if (other_user.type === tmp2(6997).NotificationCenterItems.TRENDING_CONTENT) {
                              const obj23 = {
                                actionButtons: null,
                                accessibilityActions: null,
                                onAccessibilityAction: null,
                              };
                              const obj24 = {
                                id: "read_summary",
                                text: null,
                                variant: "secondary",
                                size: "md",
                                onPress: null,
                              };
                              let intl = tmp2(1113).intl;
                              obj24.text = intl.string(tmp2(1113).t.k0Q31F);
                              obj24.onPress = callback7;
                              const items21 = [obj24];
                              obj23.actionButtons = items21;
                              const obj25 = { name: constants2.ACTION, label: null };
                              const intl2 = tmp2(1113).intl;
                              obj25.label = intl2.string(tmp2(1113).t.k0Q31F);
                              const items22 = [obj25];
                              obj23.accessibilityActions = items22;
                              obj23.onAccessibilityAction = callback7;
                              let obj26 = obj23;
                            } else {
                              obj26 = { actionButtons: [] };
                            }
                            return obj26;
                          }
                        }
                      }
                      if (canReplyToMessage) {
                        if (type !== callback1.POLL_RESULT) {
                          let obj27 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
                          const obj28 = {
                            id: "send_reply",
                            text: null,
                            variant: "secondary",
                            size: "md",
                            onPress: null,
                          };
                          const intl18 = tmp2(1113).intl;
                          obj28.text = intl18.string(tmp2(1113).t.vBq3iT);
                          obj28.onPress = callback6;
                          const items23 = [obj28];
                          obj27.actionButtons = items23;
                          const obj29 = { name: constants2.ACTION, label: null };
                          const intl19 = tmp2(1113).intl;
                          obj29.label = intl19.string(tmp2(1113).t.vBq3iT);
                          const items24 = [obj29];
                          obj27.accessibilityActions = items24;
                          obj27.onAccessibilityAction = callback6;
                        }
                        return obj27;
                      }
                      const obj30 = { actionButtons: [] };
                      obj27 = obj30;
                    }
                  }
                }
              }
            }
            const obj31 = { actionButtons: null, accessibilityActions: null, onAccessibilityAction: null };
            const obj32 = { id: "send_message", text: null, variant: "secondary", size: "md", onPress: null };
            const intl11 = tmp2(1113).intl;
            obj32.text = intl11.string(tmp2(1113).t["GuUH7/"]);
            obj32.onPress = callback4;
            const items25 = [obj32];
            obj31.actionButtons = items25;
            const obj33 = { name: constants2.ACTION, label: null };
            const intl12 = tmp2(1113).intl;
            obj33.label = intl12.string(tmp2(1113).t["GuUH7/"]);
            const items26 = [obj33];
            obj31.accessibilityActions = items26;
            obj31.onAccessibilityAction = callback4;
            return obj31;
          }
        }
      }
    }
    const obj34 = { actionsNode: null, accessibilityActions: null, onAccessibilityAction: null };
    const obj35 = {
      onWavePress: callback,
      onAccept: callback1,
      onIgnore: callback2,
      pressed: sharedValue,
      compactMode,
    };
    obj34.actionsNode = callback2(IncomingFriendRequestActions, obj35);
    if (other_user.type === tmp2(6997).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj36 = { name: constants2.WAVE, label: null };
      const intl17 = tmp2(1113).intl;
      obj36.label = intl17.string(tmp2(1113).t.n8nU4W);
      const items27 = [obj36];
      let items28 = items27;
    } else {
      const obj37 = { name: constants2.ACCEPT, label: null };
      const intl21 = tmp2(1113).intl;
      obj37.label = intl21.string(tmp2(1113).t.zf5jU5);
      items28 = [obj37];
      const obj38 = { name: constants2.IGNORE, label: null };
      const intl22 = tmp2(1113).intl;
      obj38.label = intl22.string(tmp2(1113).t.EBN847);
      items28[1] = obj38;
    }
    obj34.accessibilityActions = items28;
    obj34.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (constants.WAVE === actionName) {
        callback();
      } else if (constants.ACCEPT === actionName) {
        callback1();
      } else if (constants.IGNORE === actionName) {
        callback2();
      }
    };
    return obj34;
  }
  const tmp2Result = tmp2(1652);
}
export function ForYouItemActionButtons(arg0) {
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
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.NOTIFICATION_CENTER_ACTION, {
            action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON,
            notification_center_id: _require.id,
            item_type: _require.type,
            acked: false,
            item_index,
            deeplink: _require.deeplink,
            action_button_id: id,
          });
        };
        if (id == null) {
          id = index;
        }
        return closure_1_12(require("components/Button/Button").Button, obj, id);
      });
    }
    items = [mapped];
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
}
