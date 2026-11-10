// === Module 14095: MemberActionChatInputBanner ===

// Module 14095 (MemberActionChatInputBanner)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef1652 from "module_1652" /* 1652 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5088 */;
import Text_Text from "Text/Text" /* 5753 */;
import FastImageDefault from "FastImage" /* 5844 */;
import Pressables from "Pressables" /* 7046 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 7466 */;
import _modDef13442 from "module_13442" /* 13442 */;
import _modDef14094 from "module_14094" /* 14094 */;
import MemberActionUtils from "MemberActionUtils" /* 14096 */;
import _modDef14097 from "module_14097" /* 14097 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import EmojiStore from "EmojiStore" /* 6854 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildMemberStore from "GuildMemberStore" /* 5054 */;

require = fn;
function ActionChannelInfo(action) {
  action = action.action;
  items = [ChannelStore];
  const stateFromStores = action(563).useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  const obj = action(563);
  if (null == stateFromStores) {
    const obj2 = { variant: "footnote/normal", color: "text-default", children: null };
    const intl2 = tmp(1113).intl;
    const obj3 = { channelName: null };
    const intl3 = tmp(1113).intl;
    obj3.channelName = intl3.string(tmp(1113).t.J90oLW);
    obj2.children = intl2.format(tmp(1113).t.MkzlDL, obj3);
    let obj4 = obj2;
  } else {
    obj4 = { variant: "footnote/normal", color: "text-default", children: null };
    const intl = tmp(1113).intl;
    const obj5 = { channelName: tmp4 };
    obj4.children = intl.format(tmp(1113).t.MkzlDL, obj5);
  }
  return closure_12(action(5753).Text, obj4);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  const obj = { style: tmp.emojiPlaceholder, children: closure_12(id(1187).Icon, { size: id(1187).Icon.Sizes.REFRESH_SMALL_16, source: _modDef13442 }) };
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    const name = emoji.name;
  }
  const obj2 = { size: id(1187).Icon.Sizes.REFRESH_SMALL_16, source: _modDef13442 };
  items = [EmojiStore];
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
        const obj6 = { style: tmp.textEmoji, variant: "heading-lg/medium", children: name };
        tmp2Result = closure_12(tmp3(5753).Text, obj6);
      }
      tmp5Result6 = UnicodeEmojisDefault;
    }
  }
  return tmp2Result;
}
function MemberActionChatInputBanner(channel) {
  channel = channel.channel;
  _require = channel;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_15();
  importDefault = tmp;
  const memberActionsForChannel = require("MemberActionUtils").useMemberActionsForChannel(channel.guild_id, channel);
  const channelAction = memberActionsForChannel.channelAction;
  dependencyMap = channelAction;
  const completed = memberActionsForChannel.completed;
  _slicedToArray = completed;
  let obj = require("MemberActionUtils");
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = require("MemberActionUtils").useNextMemberAction(channel.guild_id, channelId);
  noop = nextMemberAction;
  let obj2 = require("MemberActionUtils");
  items = [c6];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => easing2.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp9 = actionType === require("GuildOnboardingHomeTypes").NewMemberActionTypes.VIEW;
  c5 = tmp9;
  const tmp10 = _slicedToArray(noop.useState(require("GuildOnboardingHomeTypes").CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first = tmp10[0];
  c6 = first;
  closure_7 = tmp12;
  [first1, [][0]] = noop.useState(require("GuildOnboardingHomeTypes").CHANNEL_ACTION_BANNER_HEIGHT);
  closure_9 = tmp15;
  const tmp2Result = require("useStateFromStores");
  sharedValue = require("module_1652").useSharedValue(0);
  const tmp2Result5 = require("module_1652");
  let num = 0;
  if (completed) {
    num = first1;
  }
  sharedValue1 = require("module_1652").useSharedValue(num);
  let items1 = [sharedValue, completed, tmp9, first];
  const effect = obj4.useEffect(() => {
    if (!c3) {
      if (!c5) {
        const result = sharedValue.set(c6);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = obj4.useEffect(() => {
    if (c3) {
      if (null != c4) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  const tmp2Result6 = require("module_1652");
  const items3 = [closure_18, stateFromStores, sharedValue, require("module_1652").withDelay, completed, require("timing/timing").withTiming, require("native").DECELERATED_EASING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items3;
  class MemberActionChatInputBannerTsx1 {
    constructor() {
      obj = { height: null };
      if (closure_0) {
        tmp7 = closure_1;
        obj.height = closure_1.get();
        tmp6 = obj;
      } else {
        tmp2 = closure_3;
        num = 200;
        tmp = closure_2;
        if (closure_3) {
          num = 800;
        }
        tmp3 = closure_4;
        tmp4 = closure_1;
        obj1 = { duration: 400, easing: null };
        tmp5 = closure_5;
        obj1.easing = closure_5;
        obj.height = tmp(num, closure_4(closure_1.get(), obj1));
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  const items4 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  MemberActionChatInputBannerTsx1.__closure = items4;
  MemberActionChatInputBannerTsx1.__workletHash = 16275727828088;
  MemberActionChatInputBannerTsx1.__initData = tmp20;
  const animatedStyle = require("module_1652").useAnimatedStyle(MemberActionChatInputBannerTsx1);
  const tmp2Result7 = require("module_1652");
  const items5 = [closure_19, stateFromStores, sharedValue1, require("module_1652").withDelay, tmp9, completed, require("timing/timing").withTiming, require("native").DECELERATED_EASING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items5;
  class MemberActionChatInputBannerTsx2 {
    constructor() {
      obj = { height: null };
      if (closure_0) {
        tmp8 = closure_1;
        obj.height = closure_1.get();
        tmp7 = obj;
      } else {
        tmp2 = closure_3;
        num = 0;
        tmp = closure_2;
        if (!closure_3) {
          tmp3 = closure_4;
          num = 0;
          if (closure_4) {
            num = 1200;
          }
        }
        tmp4 = closure_5;
        tmp5 = closure_1;
        obj1 = { duration: 400, easing: null };
        tmp6 = closure_6;
        obj1.easing = closure_6;
        obj.height = tmp(num, closure_5(closure_1.get(), obj1));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const items6 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  MemberActionChatInputBannerTsx2.__closure = items6;
  MemberActionChatInputBannerTsx2.__workletHash = 12940138330664;
  MemberActionChatInputBannerTsx2.__initData = tmp28;
  const items7 = [tmp10[1]];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MemberActionChatInputBannerTsx2);
  const callback = obj4.useCallback((nativeEvent) => {
    closure_7(nativeEvent.nativeEvent.layout.height);
  }, items7);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let tmp3Result = null;
      if (null != _undefined) {
        const obj = { style: _undefined.container, children: null };
        const obj2 = { emoji: _undefined.emoji };
        items = [application_id(ChannelActionEmoji, obj2), , ];
        const obj3 = { style: _undefined.text, children: null };
        const obj4 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: _undefined.wrap, children: _undefined.title };
        const items1 = [application_id(Text_Text.Text, obj4), ];
        const obj5 = { variant: "footnote/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t["ElGg8+"]);
        items1[1] = application_id(Text_Text.Text, obj5);
        obj3.children = items1;
        items[1] = state(View, obj3);
        let tmp6Result = c3;
        if (c3) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: _modDef14097 };
          tmp6Result = application_id(native.Icon, obj6);
        }
        items[2] = tmp6Result;
        obj.children = items;
        tmp3Result = state(View, obj);
      }
      return tmp3Result;
    }
    let obj3 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items8 = [closure_12(c5, obj3), , ];
    let tmp45Result = !tmp9;
    if (!tmp9) {
      let obj5 = { style: null, children: null };
      const items9 = [tmp.animatedContainer, animatedStyle];
      obj5.style = items9;
      obj5.children = renderAction();
      tmp45Result = closure_12(_modDef1652.View, obj5);
    }
    items8[1] = tmp45Result;
    let tmp43Result = null;
    if (completed) {
      tmp43Result = null;
      if (null != nextMemberAction) {
        function renderNextAction() {
          let tmp2 = null;
          if (null != action) {
            const obj = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
            const intl = util.intl;
            obj.accessibilityLabel = intl.string(util.t.PDTjLN);
            obj.style = _undefined.container;
            obj.onPress = function onPress() {
              return c0(c2[27]).transitionTo(sharedValue.CHANNEL(closure_1_0.guild_id, channelId.channelId));
            };
            const obj2 = { emoji: action.emoji };
            items = [application_id(ChannelActionEmoji, obj2), , ];
            const obj3 = { style: _undefined.text, children: null };
            const obj4 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: _undefined.wrap, children: null };
            const intl2 = util.intl;
            const obj5 = { step: action.title };
            obj4.children = intl2.format(util.t["/beONw"], obj5);
            const items1 = [application_id(Text_Text.Text, obj4), ];
            const obj6 = { action };
            items1[1] = application_id(ActionChannelInfo, obj6);
            obj3.children = items1;
            items[1] = state(View, obj3);
            const obj7 = { style: _undefined.circle, children: null };
            const obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: _undefined.icon, source: _modDef14094 };
            obj7.children = application_id(native.Icon, obj8);
            items[2] = application_id(View, obj7);
            obj.children = items;
            tmp2 = state(Pressables.PressableHighlight, obj);
          }
          return tmp2;
        }
        let obj6 = { children: null };
        let obj7 = { style: tmp.measurement, onLayout: tmp38, children: renderNextAction() };
        const items10 = [closure_12(c5, obj7), ];
        let obj8 = { style: null, children: null };
        const items11 = [tmp.animatedContainer, animatedStyle1];
        obj8.style = items11;
        obj8.children = renderNextAction();
        items10[1] = closure_12(_modDef1652.View, obj8);
        obj6.children = items10;
        tmp43Result = closure_13(closure_14, obj6);
      }
    }
    const obj9 = { children: null };
    items8[2] = tmp43Result;
    obj9.children = items8;
    return closure_13(closure_14, obj9);
  }
  const tmp2Result8 = require("module_1652");
}
const View = fn(17).View;
const Routes = fn(1072).Routes;
const EMOJI_URL_BASE_SIZE = fn(1388).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5142);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 }, text: { flexGrow: 1, flexShrink: 1, marginLeft: 8 }, wrap: { flexShrink: 1, flexWrap: "wrap" }, emoji: { width: 24, height: 24 }, textEmoji: { width: 24, textAlign: "center" }, emojiPlaceholder: null, circle: null, icon: null };
let size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj.emojiPlaceholder = size;
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.circle = size1;
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_15 = createStyles.createStyles(obj);
let closure_18 = { code: "(function MemberActionChatInputBannerTsx1(){let[useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};})" };
let closure_19 = { code: "(function MemberActionChatInputBannerTsx2(){let[useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};})" };
const memoResult = noop.memo(function MemberActionChatInputBannerGuarded(channel) {
  channel = channel.channel;
  const canSeeOnboardingHome = channel(7464).useCanSeeOnboardingHome(channel.guild_id);
  const obj = channel(7464);
  items = [GuildMemberStore];
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
export const MemberActionsChatInputBannerGuardedOuter = noop.memo(function ChatInputMemberActions(channel) {
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
    let tmp7 = application_id(memoResult, obj3);
  } else {
    tmp7 = null;
    if (completed) {
      tmp7 = null;
    }
  }
  return tmp7;
});