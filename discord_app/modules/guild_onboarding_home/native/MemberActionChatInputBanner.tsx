// === Module 12541: MemberActionChatInputBanner ===

// Module 12541 (MemberActionChatInputBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4409 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import Text_Text from "Text/Text" /* 4752 */;
import timing from "timing" /* 4757 */;
import Pressables from "Pressables" /* 5339 */;
import FastImageDefault from "FastImage" /* 5804 */;
import _modDef12058 from "module_12058" /* 12058 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 12539 */;
import _modDef12540 from "module_12540" /* 12540 */;
import MemberActionUtils from "MemberActionUtils" /* 12542 */;
import _modDef12543 from "module_12543" /* 12543 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import EmojiStore from "EmojiStore" /* 5676 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;

require = fn;
function ActionChannelInfo(action) {
  action = action.action;
  const items = [ChannelStore];
  const stateFromStores = action(563).useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  const obj = action(563);
  if (null == stateFromStores) {
    const obj2 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl2 = tmp(1115).intl;
    const obj3 = { channelName: null };
    const intl3 = tmp(1115).intl;
    obj3.channelName = intl3.string(tmp(1115).t.J90oLW);
    obj2.children = intl2.format(tmp(1115).t.MkzlDL, obj3);
    let obj4 = obj2;
  } else {
    obj4 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl = tmp(1115).intl;
    const obj5 = { channelName: tmp4 };
    obj4.children = intl.format(tmp(1115).t.MkzlDL, obj5);
  }
  return closure_12(action(4752).Text, obj4);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  const obj = { style: tmp.emojiPlaceholder, children: closure_12(id(1177).Icon, { size: id(1177).Icon.Sizes.REFRESH_SMALL_16, source: _modDef12058 }) };
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    const name = emoji.name;
  }
  const obj2 = { size: id(1177).Icon.Sizes.REFRESH_SMALL_16, source: _modDef12058 };
  const items = [EmojiStore];
  const items1 = [id];
  const stateFromStores = id(563).useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.emoji, source: null, resizeMode: "contain" };
    const obj4 = { uri: null };
    const tmp5Result = FastImageDefault;
    const obj5 = { id: null, animated: null, size: null };
    ({ id: obj10.id, animated: obj10.animated } = stateFromStores);
    obj5.size = EMOJI_URL_BASE_SIZE;
    obj4.uri = AvatarUtilsDefault.getEmojiURL(obj5);
    obj3.source = obj4;
    let tmp2Result = closure_12(tmp5Result, obj3);
    const tmp5Result4 = AvatarUtilsDefault;
  } else {
    tmp2Result = tmp6;
    if (null != name) {
      const tmp5Result5 = UnicodeEmojisDefault;
      tmp2Result = tmp6;
      if (null != tmp5Result5.getByName(tmp5Result6.convertSurrogateToName(name, false))) {
        const obj6 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp2Result = closure_12(tmp3(4752).Text, obj6);
      }
      tmp5Result6 = UnicodeEmojisDefault;
    }
  }
  return tmp2Result;
}
function MemberActionChatInputBanner(channel) {
  channel = channel.channel;
  let channelAction;
  let nextMemberAction;
  let stateFromStores;
  let useReducedMotion;
  let first;
  closure_8 = undefined;
  let first1;
  closure_10 = undefined;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_15();
  importDefault = tmp;
  const memberActionsForChannel = channel(channelAction[21]).useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let obj = channel(channelAction[21]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = channel(channelAction[21]).useNextMemberAction(channel.guild_id, channelId);
  let obj2 = channel(channelAction[21]);
  let items = [useReducedMotion];
  stateFromStores = channel(channelAction[12]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp9 = actionType === channel(channelAction[22]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp9;
  const tmp10 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp10[0];
  closure_8 = tmp12;
  const tmp13 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp13[0];
  closure_10 = tmp15;
  const tmp2Result = channel(channelAction[12]);
  sharedValue = channel(channelAction[23]).useSharedValue(0);
  const tmp2Result5 = channel(channelAction[23]);
  let num = 0;
  if (completed) {
    num = first1;
  }
  sharedValue1 = channel(channelAction[23]).useSharedValue(num);
  let items1 = [sharedValue, completed, tmp9, first];
  const effect = obj4.useEffect(() => {
    if (!completed) {
      if (!closure_6) {
        const result = sharedValue.set(first);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = obj4.useEffect(() => {
    if (completed) {
      if (null != nextMemberAction) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  const tmp2Result6 = channel(channelAction[23]);
  class G {
    constructor() {
      obj = { height: null };
      if (closure_5) {
        tmp7 = closure_11;
        obj.height = closure_11.get();
        tmp6 = obj;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[23]);
        tmp3 = completed;
        num = 200;
        if (completed) {
          num = 800;
        }
        tmpResult = tmp(tmp2[24]);
        tmp4 = closure_11;
        obj1 = { duration: 400, easing: null };
        value = closure_11.get();
        obj1.easing = tmp(tmp2[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  const tmp2Result7 = channel(channelAction[23]);
  G.__closure = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(channelAction[23]).withDelay, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
  G.__workletHash = 5585837927201;
  G.__initData = __initData;
  const animatedStyle = tmp2Result7.useAnimatedStyle(G);
  let obj3 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(channelAction[23]).withDelay, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
  class B {
    constructor() {
      obj = { height: null };
      if (closure_5) {
        tmp8 = closure_12;
        obj.height = closure_12.get();
        tmp7 = obj;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[23]);
        tmp3 = closure_6;
        num = 0;
        if (!closure_6) {
          tmp4 = completed;
          num = 0;
          if (completed) {
            num = 1200;
          }
        }
        tmpResult = tmp(tmp2[24]);
        tmp5 = closure_12;
        obj1 = { duration: 400, easing: null };
        value = closure_12.get();
        obj1.easing = tmp(tmp2[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const tmp2Result8 = channel(channelAction[23]);
  B.__closure = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: channel(channelAction[23]).withDelay, isViewAction: tmp9, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
  B.__workletHash = 10256555667281;
  B.__initData = __initData2;
  const items3 = [tmp10[1]];
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(B);
  [][0] = tmp13[1];
  const callback = obj4.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let tmp3Result = null;
      if (null != channelAction) {
        const obj = { style: closure_1.container, children: null };
        const obj2 = { emoji: channelAction.emoji };
        const items = [closure_2_12(ChannelActionEmoji, obj2), , ];
        const obj3 = { style: closure_1.text, children: null };
        const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        const items1 = [closure_2_12(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t["ElGg8+"]);
        items1[1] = closure_2_12(Text_Text.Text, obj5);
        obj3.children = items1;
        items[1] = map1(View, obj3);
        let tmp6Result = completed;
        if (completed) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: _modDef12543 };
          tmp6Result = closure_2_12(native.Icon, obj6);
        }
        items[2] = tmp6Result;
        obj.children = items;
        tmp3Result = map1(View, obj);
      }
      return tmp3Result;
    }
    let obj6 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(stateFromStores, obj6), , ];
    let tmp30Result = !tmp9;
    if (!tmp9) {
      let obj7 = { style: null, children: null };
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj7.style = items5;
      obj7.children = renderAction();
      tmp30Result = tmp30(require("ReanimatedRexport").View, obj7);
    }
    items4[1] = tmp30Result;
    let tmp28Result = null;
    if (completed) {
      tmp28Result = null;
      if (null != nextMemberAction) {
        function renderNextAction() {
          let tmp2 = null;
          if (null != nextMemberAction) {
            const obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
            const intl = util.intl;
            obj.accessibilityLabel = intl.string(util.t.PDTjLN);
            obj.style = closure_1.container;
            obj.onPress = function onPress() {
              return channel(channelAction[27]).transitionTo(closure_10.CHANNEL(guild_id.guild_id, channelId.channelId));
            };
            const obj2 = { emoji: nextMemberAction.emoji };
            const items = [closure_2_12(ChannelActionEmoji, obj2), , ];
            const obj3 = { style: closure_1.text, children: null };
            const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: null };
            const intl2 = util.intl;
            const obj5 = { step: nextMemberAction.title };
            obj4.children = intl2.format(util.t["/beONw"], obj5);
            const items1 = [closure_2_12(Text_Text.Text, obj4), ];
            const obj6 = { action: nextMemberAction };
            items1[1] = closure_2_12(ActionChannelInfo, obj6);
            obj3.children = items1;
            items[1] = map1(View, obj3);
            const obj7 = { style: closure_1.circle, children: null };
            const obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: _modDef12540 };
            obj7.children = closure_2_12(native.Icon, obj8);
            items[2] = closure_2_12(View, obj7);
            obj.children = items;
            tmp2 = map1(Pressables.PressableHighlight, obj);
          }
          return tmp2;
        }
        let obj8 = { children: null };
        const obj9 = { style: tmp.measurement, onLayout: tmp23, children: renderNextAction() };
        const items6 = [tmp30(stateFromStores, obj9), ];
        const obj10 = { style: null, children: null };
        const items7 = [tmp.animatedContainer, animatedStyle1];
        obj10.style = items7;
        obj10.children = renderNextAction();
        items6[1] = tmp30(require("ReanimatedRexport").View, obj10);
        obj8.children = items6;
        tmp28Result = closure_13(closure_14, obj8);
      }
    }
    const obj11 = { children: null };
    items4[2] = tmp28Result;
    obj11.children = items4;
    return closure_13(closure_14, obj11);
  }
  let obj5 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: channel(channelAction[23]).withDelay, isViewAction: tmp9, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
}
const View = fn(17).View;
const Routes = fn(1074).Routes;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4756);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 }, text: { flexGrow: 1, flexShrink: 1, marginLeft: 8 }, wrap: { flexShrink: 1, flexWrap: "wrap" }, emoji: { width: 24, height: 24 }, textEmoji: { width: 24, textAlign: "center" }, emojiPlaceholder: null, circle: null, icon: null };
let size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj.emojiPlaceholder = size;
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.circle = size1;
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_15 = createStyles.createStyles(obj);
const __initData = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData2 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = noop.memo((channel) => {
  channel = channel.channel;
  const canSeeOnboardingHome = channel(7467).useCanSeeOnboardingHome(channel.guild_id);
  const obj = channel(7467);
  const items = [GuildMemberStore];
  const stateFromStores = channel(563).useStateFromStores(items, () => {
    const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
    let isPending;
    if (selfMember != null) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  const obj2 = channel(563);
  let tmp3 = null;
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        const obj4 = { channel };
        tmp3 = closure_12(MemberActionChatInputBanner, obj4);
      }
    }
  }
  return tmp3;
});
let obj4 = { tintColor: nativeDefault.colors.WHITE };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = noop.memo((channel) => {
  channel = channel.channel;
  const memberActionsForChannel = MemberActionUtils.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = MemberActionUtils.useNextMemberAction(channel.guild_id, channelId);
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  if (actionType !== GuildOnboardingHomeTypes.NewMemberActionTypes.VIEW) {
    const obj3 = { channel };
    let tmp7 = closure_1_12(memoResult, obj3);
  } else {
    tmp7 = null;
    if (completed) {
      tmp7 = null;
    }
  }
  return tmp7;
});