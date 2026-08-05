// discord_app/modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "getAvatarURL";
import { View } from "registerAsset";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import getEmojiToGroupId from "getEmojiToGroupId";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { Routes } from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "useMemberActionsForChannel";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/11115_registerAsset.js";
import { newMemberActionFromServer } from "../GuildOnboardingHomeTypes.tsx";
import { useMemberActionsForChannel } from "../MemberActionUtils.tsx";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function ActionChannelInfo(action) {
  action = action.action;
  let obj = action(647);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getChannel(action.channelId));
  if (null == stateFromStores) {
    obj = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl2 = tmp(1236).intl;
    obj = { channelName: null };
    const intl3 = tmp(1236).intl;
    obj[0] = intl3.string(tmp(1236).t.J90oLW);
    obj[2] = intl2.format(tmp(1236).t.MkzlDL, obj);
    let obj1 = obj;
  } else {
    obj1 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl = tmp(1236).intl;
    const obj2 = { channelName: null };
    obj2[0] = tmp4;
    obj1[2] = intl.format(tmp(1236).t.MkzlDL, obj2);
  }
  return closure_12(action(4281).Text, obj1);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = callback2();
  let obj = { style: tmp.emojiPlaceholder, children: null };
  obj = { size: null, source: null };
  obj[0] = id(1297).Icon.Sizes.REFRESH_SMALL_16;
  obj[1] = registerAsset;
  obj[1] = callback(id(1297).Icon, obj);
  const tmp6 = callback(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    const name = emoji.name;
  }
  const items = [getEmojiToGroupId];
  const items1 = [id];
  const stateFromStores = id(647).useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = outer1_7.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    obj = { style: null, source: null, resizeMode: "contain" };
    obj[0] = tmp.emoji;
    const obj1 = { uri: null };
    let tmp5Result = tmp5(5236);
    tmp5Result = tmp5(1416);
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj10[0], animated: obj10[1] } = stateFromStores);
    obj2[2] = EMOJI_URL_BASE_SIZE;
    obj1[0] = tmp5Result.getEmojiURL(obj2);
    obj[1] = obj1;
    let tmp2Result = tmp2(tmp5Result, obj);
  } else {
    tmp2Result = tmp6;
    if (null != name) {
      const tmp5Result1 = tmp5(3926);
      tmp2Result = tmp6;
      if (null != tmp5Result1.getByName(tmp5Result2.convertSurrogateToName(name, false))) {
        const obj3 = { style: null, variant: "heading-lg/normal", children: null };
        obj3[0] = tmp.textEmoji;
        obj3[2] = name;
        tmp2Result = tmp2(tmp3(4281).Text, obj3);
      }
      tmp5Result2 = tmp5(3926);
    }
  }
  return tmp2Result;
}
function MemberActionChatInputBanner(channel) {
  channel = channel.channel;
  let importDefault;
  let channelAction;
  let completed;
  let nextMemberAction;
  let stateFromStores;
  let c6;
  let first;
  let c8;
  let first1;
  let c10;
  let sharedValue;
  let sharedValue1;
  const tmp = callback2();
  importDefault = tmp;
  let obj = channel(channelAction[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  completed = memberActionsForChannel.completed;
  let obj1 = channel(channelAction[21]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = obj1.useNextMemberAction(channel.guild_id, channelId);
  let tmp2Result = tmp2(tmp3[12]);
  let items = [c6];
  stateFromStores = tmp2Result.useStateFromStores(items, () => _undefined2.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp9 = actionType === channel(channelAction[22]).NewMemberActionTypes.VIEW;
  c6 = tmp9;
  let obj3 = nextMemberAction;
  const tmp10 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp10[0];
  c8 = tmp12;
  const tmp13 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp13[0];
  c10 = tmp15;
  tmp2Result = tmp2(tmp3[23]);
  sharedValue = tmp2Result.useSharedValue(0);
  let num = 0;
  if (completed) {
    num = first1;
  }
  sharedValue1 = channel(channelAction[23]).useSharedValue(num);
  let items1 = [sharedValue, completed, tmp9, first];
  const effect = obj3.useEffect(() => {
    if (!completed) {
      if (!c6) {
        const result = sharedValue.set(first);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = obj3.useEffect(() => {
    if (completed) {
      if (null != nextMemberAction) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  const tmp2Result1 = channel(channelAction[23]);
  class G {
    constructor() {
      obj = { height: null };
      if (c5) {
        tmp7 = c11;
        obj[0] = c11.get();
        tmp6 = obj;
      } else {
        tmp = channel;
        tmp2 = channelAction;
        obj2 = channel(channelAction[23]);
        tmp3 = completed;
        num = 200;
        if (completed) {
          num = 800;
        }
        tmpResult = tmp(tmp2[24]);
        tmp4 = c11;
        obj = { duration: 400, easing: null };
        value = c11.get();
        obj[1] = tmp(tmp2[16]).DECELERATED_EASING;
        obj[0] = obj2.withDelay(num, tmpResult.withTiming(value, obj));
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp2(tmp3[23]).withDelay, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  G.__closure = obj;
  G.__workletHash = 5585837927201;
  G.__initData = closure_18;
  const animatedStyle = channel(channelAction[23]).useAnimatedStyle(G);
  const tmp2Result2 = channel(channelAction[23]);
  class B {
    constructor() {
      obj = { height: null };
      if (c5) {
        tmp8 = c12;
        obj[0] = c12.get();
        tmp7 = obj;
      } else {
        tmp = channel;
        tmp2 = channelAction;
        obj2 = channel(channelAction[23]);
        tmp3 = c6;
        num = 0;
        if (!c6) {
          tmp4 = completed;
          num = 0;
          if (completed) {
            num = 1200;
          }
        }
        tmpResult = tmp(tmp2[24]);
        tmp5 = c12;
        obj = { duration: 400, easing: null };
        value = c12.get();
        obj[1] = tmp(tmp2[16]).DECELERATED_EASING;
        obj[0] = obj2.withDelay(num, tmpResult.withTiming(value, obj));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  obj = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp2(tmp3[23]).withDelay, isViewAction: tmp9, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  B.__closure = obj;
  B.__workletHash = 10256555667281;
  B.__initData = closure_19;
  const items3 = [tmp10[1]];
  const animatedStyle1 = channel(channelAction[23]).useAnimatedStyle(B);
  [][0] = tmp13[1];
  const callback = obj3.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let tmp3Result = null;
      if (null != channelAction) {
        let obj = { style: null, children: null };
        obj[0] = _undefined.container;
        obj = { emoji: null };
        obj[0] = tmp.emoji;
        const items = [sharedValue1(outer1_17, obj), , ];
        obj = { style: null, children: null };
        obj[0] = _undefined.text;
        const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
        obj1[2] = _undefined.wrap;
        obj1[3] = tmp.title;
        const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
        const obj2 = { variant: "text-xxs/normal", color: "text-muted", children: null };
        const intl = channel(channelAction[15]).intl;
        obj2[2] = intl.string(channel(channelAction[15]).t["ElGg8+"]);
        items1[1] = sharedValue1(channel(channelAction[14]).Text, obj2);
        obj[1] = items1;
        items[1] = outer1_13(stateFromStores, obj);
        let tmp6Result = completed;
        if (completed) {
          const obj3 = { disableColor: true, size: null, source: null };
          obj3[1] = tmp8(tmp9[16]).Icon.Sizes.MEDIUM;
          obj3[2] = _undefined(tmp9[25]);
          tmp6Result = tmp6(tmp8(tmp9[16]).Icon, obj3);
        }
        items[2] = tmp6Result;
        obj[1] = items;
        tmp3Result = outer1_13(stateFromStores, obj);
        const tmp3 = outer1_13;
        const tmp4 = stateFromStores;
        tmp6 = sharedValue1;
      }
      return tmp3Result;
    }
    obj1 = { style: null, onLayout: null, children: null };
    obj1[0] = tmp.measurement;
    obj1[1] = callback;
    obj1[2] = renderAction();
    const items4 = [sharedValue1(stateFromStores, obj1), , ];
    let tmp30Result = !tmp9;
    if (!tmp9) {
      let obj2 = { style: null, children: null };
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj2[0] = items5;
      obj2[1] = renderAction();
      tmp30Result = tmp30(importDefault(tmp3[23]).View, obj2);
    }
    items4[1] = tmp30Result;
    let tmp28Result = null;
    if (completed) {
      tmp28Result = null;
      if (null != nextMemberAction) {
        function renderNextAction() {
          let tmp2 = null;
          if (null != nextMemberAction) {
            let obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
            const intl = channel(channelAction[15]).intl;
            obj[1] = intl.string(channel(channelAction[15]).t.PDTjLN);
            obj[2] = _undefined.container;
            obj[3] = function onPress() {
              return outer1_0(outer1_2[27]).transitionTo(outer1_10.CHANNEL(guild_id.guild_id, channelId.channelId));
            };
            obj = { emoji: null };
            obj[0] = tmp.emoji;
            const items = [sharedValue1(outer1_17, obj), , ];
            obj = { style: null, children: null };
            obj[0] = _undefined.text;
            const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: null, children: null };
            obj1[2] = _undefined.wrap;
            const intl2 = channel(channelAction[15]).intl;
            const obj2 = { step: null };
            obj2[0] = tmp.title;
            obj1[3] = intl2.format(channel(channelAction[15]).t["/beONw"], obj2);
            const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
            const obj3 = { action: null };
            obj3[0] = tmp;
            items1[1] = sharedValue1(outer1_16, obj3);
            obj[1] = items1;
            items[1] = outer1_13(stateFromStores, obj);
            const obj4 = { style: null, children: null };
            obj4[0] = _undefined.circle;
            const obj5 = { size: null, style: null, source: null };
            obj5[0] = channel(channelAction[16]).Icon.Sizes.REFRESH_SMALL_16;
            obj5[1] = _undefined.icon;
            obj5[2] = _undefined(channelAction[28]);
            obj4[1] = sharedValue1(channel(channelAction[16]).Icon, obj5);
            items[2] = sharedValue1(stateFromStores, obj4);
            obj[4] = items;
            tmp2 = outer1_13(channel(channelAction[26]).PressableHighlight, obj);
          }
          return tmp2;
        }
        obj3 = { children: null };
        let obj4 = { style: null, onLayout: null, children: null };
        obj4[0] = tmp.measurement;
        obj4[1] = tmp23;
        obj4[2] = renderNextAction();
        const items6 = [tmp30(stateFromStores, obj4), ];
        let obj5 = { style: null, children: null };
        const items7 = [tmp.animatedContainer, animatedStyle1];
        obj5[0] = items7;
        obj5[1] = renderNextAction();
        items6[1] = tmp30(importDefault(tmp3[23]).View, obj5);
        obj3[0] = items6;
        tmp28Result = tmp28(tmp29, obj3);
      }
    }
    const obj6 = { children: null };
    items4[2] = tmp28Result;
    obj6[0] = items4;
    return closure_13(closure_14, obj6);
  }
  const tmp2Result3 = channel(channelAction[23]);
}
let c4 = importAllResult;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: null, text: null, wrap: null, emoji: null, textEmoji: null, emojiPlaceholder: null, circle: null, icon: null };
obj = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj[2] = obj;
obj[3] = { flexGrow: 1, flexShrink: 1, marginLeft: 8 };
obj[4] = { flexShrink: 1, flexWrap: "wrap" };
obj[5] = { width: 24, height: 24 };
obj[6] = { width: 24, textAlign: "center" };
createCacheKey = { width: 24, height: 24, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj[7] = createCacheKey;
obj[8] = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj2 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
obj[9] = { tintColor: require("Themes").colors.WHITE };
let closure_15 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
let closure_19 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let obj = channel(5753);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
  const items = [trackCommunicationDisabled];
  const stateFromStores = channel(647).useStateFromStores(items, () => {
    const selfMember = outer1_9.getSelfMember(channel.guild_id);
    let isPending;
    if (selfMember != null) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  const obj2 = channel(647);
  let tmp3 = null;
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        obj = { channel: null };
        obj[0] = channel;
        tmp3 = callback(MemberActionChatInputBanner, obj);
      }
    }
  }
  return tmp3;
});
let obj3 = { tintColor: require("Themes").colors.WHITE };
const memoResult1 = importAllResult.memo((channel) => {
  let channelAction;
  let completed;
  channel = channel.channel;
  let obj = useMemberActionsForChannel;
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = useMemberActionsForChannel.useNextMemberAction(channel.guild_id, channelId);
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  if (actionType !== newMemberActionFromServer.NewMemberActionTypes.VIEW) {
    obj = { channel: null };
    obj[0] = channel;
    let tmp7 = callback(closure_21, obj);
  } else {
    tmp7 = null;
    if (completed) {
      tmp7 = null;
    }
  }
  return tmp7;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = memoResult1;