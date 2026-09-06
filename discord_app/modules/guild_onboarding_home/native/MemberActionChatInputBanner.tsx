// === Module 12287: MemberActionChatInputBanner ===

// Module 12287 (MemberActionChatInputBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import Pressables from "Pressables" /* 5123 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef11804 from "module_11804" /* 11804 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 12285 */;
import _modDef12286 from "module_12286" /* 12286 */;
import MemberActionUtils from "MemberActionUtils" /* 12288 */;
import _modDef12289 from "module_12289" /* 12289 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
function ActionChannelInfo(action) {
  action = action.action;
  let obj = action(563);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  if (null == stateFromStores) {
    obj = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl2 = tmp(1114).intl;
    obj = { channelName: null };
    const intl3 = tmp(1114).intl;
    obj.channelName = intl3.string(tmp(1114).t.J90oLW);
    obj.children = intl2.format(tmp(1114).t.MkzlDL, obj);
    let obj1 = obj;
  } else {
    obj1 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl = tmp(1114).intl;
    const obj2 = { channelName: tmp4 };
    obj1.children = intl.format(tmp(1114).t.MkzlDL, obj2);
  }
  return closure_12(action(4556).Text, obj1);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  let obj = { style: tmp.emojiPlaceholder, children: null };
  obj = { size: id(1178).Icon.Sizes.REFRESH_SMALL_16, source: _modDef11804 };
  obj.children = closure_12(id(1178).Icon, obj);
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    const name = emoji.name;
  }
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
    obj = { style: tmp.emoji, source: null, resizeMode: "contain" };
    const obj1 = { uri: null };
    const tmp5Result = AvatarUtilsDefault;
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj10.id, animated: obj10.animated } = stateFromStores);
    obj2.size = EMOJI_URL_BASE_SIZE;
    obj1.uri = tmp5Result.getEmojiURL(obj2);
    obj.source = obj1;
    let tmp2Result = closure_12(tmp5Result, obj);
  } else {
    tmp2Result = tmp6;
    if (null != name) {
      const tmp5Result1 = UnicodeEmojisDefault;
      tmp2Result = tmp6;
      if (null != tmp5Result1.getByName(tmp5Result2.convertSurrogateToName(name, false))) {
        const obj3 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp2Result = closure_12(tmp3(4556).Text, obj3);
      }
      tmp5Result2 = UnicodeEmojisDefault;
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
  let obj = channel(channelAction[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let obj1 = channel(channelAction[21]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = obj1.useNextMemberAction(channel.guild_id, channelId);
  let tmp2Result = tmp2(tmp3[12]);
  let items = [useReducedMotion];
  stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp9 = actionType === channel(channelAction[22]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp9;
  let obj3 = nextMemberAction;
  const tmp10 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp10[0];
  closure_8 = tmp12;
  const tmp13 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp13[0];
  closure_10 = tmp15;
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
      if (!closure_6) {
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
        obj = { duration: 400, easing: null };
        value = closure_11.get();
        obj.easing = tmp(tmp2[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj));
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp2(tmp3[23]).withDelay, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  G.__closure = obj;
  G.__workletHash = 5585837927201;
  G.__initData = __initData;
  const animatedStyle = channel(channelAction[23]).useAnimatedStyle(G);
  const tmp2Result2 = channel(channelAction[23]);
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
        obj = { duration: 400, easing: null };
        value = closure_12.get();
        obj.easing = tmp(tmp2[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  obj = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp2(tmp3[23]).withDelay, isViewAction: tmp9, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  B.__closure = obj;
  B.__workletHash = 10256555667281;
  B.__initData = __initData2;
  const items3 = [tmp10[1]];
  const animatedStyle1 = channel(channelAction[23]).useAnimatedStyle(B);
  [][0] = tmp13[1];
  const callback = obj3.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let tmp3Result = null;
      if (null != channelAction) {
        let obj = { style: closure_1.container, children: null };
        obj = { emoji: channelAction.emoji };
        const items = [closure_2_12(ChannelActionEmoji, obj), , ];
        obj = { style: closure_1.text, children: null };
        const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        const items1 = [closure_2_12(Text_Text.Text, obj1), ];
        const obj2 = { variant: "text-xxs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["ElGg8+"]);
        items1[1] = closure_2_12(Text_Text.Text, obj2);
        obj.children = items1;
        items[1] = map1(View, obj);
        let tmp6Result = completed;
        if (completed) {
          const obj3 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: _modDef12289 };
          tmp6Result = closure_2_12(native.Icon, obj3);
        }
        items[2] = tmp6Result;
        obj.children = items;
        tmp3Result = map1(View, obj);
      }
      return tmp3Result;
    }
    obj1 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(stateFromStores, obj1), , ];
    let tmp30Result = !tmp9;
    if (!tmp9) {
      let obj2 = { style: null, children: null };
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj2.style = items5;
      obj2.children = renderAction();
      tmp30Result = tmp30(require("ReanimatedRexport").View, obj2);
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
            const intl = util.intl;
            obj.accessibilityLabel = intl.string(util.t.PDTjLN);
            obj.style = closure_1.container;
            obj.onPress = function onPress() {
              return channel(channelAction[27]).transitionTo(closure_10.CHANNEL(guild_id.guild_id, channelId.channelId));
            };
            obj = { emoji: nextMemberAction.emoji };
            const items = [closure_2_12(ChannelActionEmoji, obj), , ];
            obj = { style: closure_1.text, children: null };
            const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: null };
            const intl2 = util.intl;
            const obj2 = { step: nextMemberAction.title };
            obj1.children = intl2.format(util.t["/beONw"], obj2);
            const items1 = [closure_2_12(Text_Text.Text, obj1), ];
            const obj3 = { action: nextMemberAction };
            items1[1] = closure_2_12(ActionChannelInfo, obj3);
            obj.children = items1;
            items[1] = map1(View, obj);
            const obj4 = { style: closure_1.circle, children: null };
            const obj5 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: _modDef12286 };
            obj4.children = closure_2_12(native.Icon, obj5);
            items[2] = closure_2_12(View, obj4);
            obj.children = items;
            tmp2 = map1(Pressables.PressableHighlight, obj);
          }
          return tmp2;
        }
        obj3 = { children: null };
        let obj4 = { style: tmp.measurement, onLayout: tmp23, children: renderNextAction() };
        const items6 = [tmp30(stateFromStores, obj4), ];
        let obj5 = { style: null, children: null };
        const items7 = [tmp.animatedContainer, animatedStyle1];
        obj5.style = items7;
        obj5.children = renderNextAction();
        items6[1] = tmp30(require("ReanimatedRexport").View, obj5);
        obj3.children = items6;
        tmp28Result = closure_13(closure_14, obj3);
      }
    }
    const obj6 = { children: null };
    items4[2] = tmp28Result;
    obj6.children = items4;
    return closure_13(closure_14, obj6);
  }
  const tmp2Result3 = channel(channelAction[23]);
}
const View = fn(17).View;
const Routes = fn(1074).Routes;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: null, text: null, wrap: null, emoji: null, textEmoji: null, emojiPlaceholder: null, circle: null, icon: null };
obj = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj.container = obj;
obj.text = { flexGrow: 1, flexShrink: 1, marginLeft: 8 };
obj.wrap = { flexShrink: 1, flexWrap: "wrap" };
obj.emoji = { width: 24, height: 24 };
obj.textEmoji = { width: 24, textAlign: "center" };
let size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj.emojiPlaceholder = size;
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.circle = size1;
const createStyles = { tintColor: nativeDefault.colors.WHITE };
obj.icon = createStyles;
let closure_15 = createStyles.createStyles(obj);
const __initData = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData2 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = noop.memo((channel) => {
  channel = channel.channel;
  let obj = channel(7222);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
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
        obj = { channel };
        tmp3 = closure_12(MemberActionChatInputBanner, obj);
      }
    }
  }
  return tmp3;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = noop.memo((channel) => {
  channel = channel.channel;
  let obj = MemberActionUtils;
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
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
    obj = { channel };
    let tmp7 = closure_1_12(memoResult, obj);
  } else {
    tmp7 = null;
    if (completed) {
      tmp7 = null;
    }
  }
  return tmp7;
});