// === Module 11939: MemberActionChatInputBanner ===

// Module 11939 (MemberActionChatInputBanner)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4723 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import Text_Text from "Text/Text" /* 5087 */;
import timing from "timing" /* 5092 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import FastImageDefault from "FastImage" /* 6163 */;
import Pressables from "Pressables" /* 6191 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 9293 */;
import _modDef11318 from "module_11318" /* 11318 */;
import _modDef11938 from "module_11938" /* 11938 */;
import MemberActionUtils from "MemberActionUtils" /* 11940 */;
import _modDef11941 from "module_11941" /* 11941 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import EmojiStore from "EmojiStore" /* 5994 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

require = fn;
const View = fn(17).View;
let Routes = fn(1085).Routes;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 }, text: { flexGrow: 1, flexShrink: 1, marginLeft: 8 }, wrap: { flexShrink: 1, flexWrap: "wrap" }, emoji: { width: 24, height: 24 }, textEmoji: { width: 24, textAlign: "center" }, emojiPlaceholder: null, circle: null, icon: null };
let size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj.emojiPlaceholder = size;
const size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.circle = size1;
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj.icon = { tintColor: nativeDefault.colors.WHITE };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionChannelInfo(action) {
  let stringResult = dependencyMap;
  const cResult = action(576).c(8);
  action = action.action;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== action.channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(action.channelId);
    };
    cResult[1] = action.channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = action(576);
  const stateFromStores = action(573).useStateFromStores(first, tmp6);
  const tmp8 = useChannelNameDefault(stateFromStores, true);
  if (null == stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xxs/normal", color: "text-default", children: null };
      const intl2 = tmp(1126).intl;
      const obj3 = { channelName: null };
      const intl3 = tmp(1126).intl;
      stringResult = intl3.string(tmp(1126).t.J90oLW);
      obj3.channelName = stringResult;
      obj2.children = intl2.format(tmp(1126).t.MkzlDL, obj3);
      const tmp16 = closure_12(tmp(5087).Text, obj2);
      cResult[3] = tmp16;
    }
  } else {
    if (cResult[4] !== tmp8) {
      const intl = tmp(1126).intl;
      const obj4 = { channelName: tmp8 };
      const formatResult = intl.format(tmp(1126).t.MkzlDL, obj4);
      cResult[4] = tmp8;
      cResult[5] = formatResult;
      let tmp9 = formatResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const obj5 = { variant: "text-xxs/normal", color: "text-default", children: tmp9 };
      const tmp13 = closure_12(tmp(5087).Text, obj5);
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const tmpResult = action(573);
}) : (function ActionChannelInfo(action) {
  action = action.action;
  const items = [ChannelStore];
  const stateFromStores = action(573).useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  const obj = action(573);
  if (null == stateFromStores) {
    const obj2 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl2 = tmp(1126).intl;
    const obj3 = { channelName: null };
    const intl3 = tmp(1126).intl;
    obj3.channelName = intl3.string(tmp(1126).t.J90oLW);
    obj2.children = intl2.format(tmp(1126).t.MkzlDL, obj3);
    let obj4 = obj2;
  } else {
    obj4 = { variant: "text-xxs/normal", color: "text-default", children: null };
    const intl = tmp(1126).intl;
    const obj5 = { channelName: tmp4 };
    obj4.children = intl.format(tmp(1126).t.MkzlDL, obj5);
  }
  return closure_12(action(5087).Text, obj4);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelActionEmoji(emoji) {
  let Text = id;
  const cResult = id(576).c(18);
  emoji = emoji.emoji;
  const tmp3 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: Text(1200).Icon.Sizes.REFRESH_SMALL_16, source: _modDef11318 };
    const tmp7 = closure_12(Text(1200).Icon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.emojiPlaceholder) {
    const obj3 = { style: tmp3.emojiPlaceholder, children: first };
    const tmp11 = closure_12(View, obj3);
    cResult[1] = tmp3.emojiPlaceholder;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    let textEmoji = emoji.name;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[3] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== id) {
    const fn = function y() {
      let customEmojiById = null;
      if (null != id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp);
      }
      return customEmojiById;
    };
    const items1 = [id];
    cResult[4] = id;
    cResult[5] = fn;
    cResult[6] = items1;
    let tmp16 = items1;
    let tmp15 = fn;
  } else {
    tmp15 = cResult[5];
    tmp16 = cResult[6];
  }
  const obj = id(576);
  const stateFromStores = Text(573).useStateFromStores(tmp13, tmp15, tmp16);
  if (null != stateFromStores) {
    if (cResult[7] === stateFromStores.animated) {
      if (cResult[8] === stateFromStores.id) {
        let tmp23 = cResult[9];
      }
      if (cResult[10] !== tmp23) {
        const obj4 = { uri: tmp23 };
        cResult[10] = tmp23;
        cResult[11] = obj4;
        let tmp27 = obj4;
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] === tmp3.emoji) {
        if (cResult[13] === tmp27) {
          let tmp28 = cResult[14];
        }
        return tmp28;
      }
      const obj5 = { style: tmp22, source: tmp27, resizeMode: "contain" };
      const tmp31 = closure_12(FastImageDefault, obj5);
      cResult[12] = tmp3.emoji;
      cResult[13] = tmp27;
      cResult[14] = tmp31;
      tmp28 = tmp31;
    }
    const obj8 = { id: null, animated: null, size: null };
    ({ id: obj7.id, animated: obj7.animated } = stateFromStores);
    obj8.size = EMOJI_URL_BASE_SIZE;
    const emojiURL = AvatarUtilsDefault.getEmojiURL(obj8);
    cResult[7] = stateFromStores.animated;
    cResult[8] = stateFromStores.id;
    cResult[9] = emojiURL;
    tmp23 = emojiURL;
  } else {
    let tmp32 = tmp8;
    if (null != textEmoji) {
      const obj10 = UnicodeEmojisDefault;
      tmp32 = tmp8;
      if (null != obj10.getByName(obj11.convertSurrogateToName(textEmoji, false))) {
        if (cResult[15] === textEmoji) {
        }
        Text = Text(5087).Text;
        const obj9 = { style: tmp3.textEmoji, variant: "heading-lg/normal", children: textEmoji };
        const tmp20 = closure_12(Text, obj9);
        cResult[15] = textEmoji;
        textEmoji = tmp3.textEmoji;
        cResult[16] = textEmoji;
        cResult[17] = tmp20;
      }
      obj11 = UnicodeEmojisDefault;
    }
    return tmp32;
  }
  const TextResult = Text(573);
}) : (function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  const obj = { style: tmp.emojiPlaceholder, children: closure_12(id(1200).Icon, { size: id(1200).Icon.Sizes.REFRESH_SMALL_16, source: _modDef11318 }) };
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    const name = emoji.name;
  }
  const obj2 = { size: id(1200).Icon.Sizes.REFRESH_SMALL_16, source: _modDef11318 };
  const items = [EmojiStore];
  const items1 = [id];
  const stateFromStores = id(573).useStateFromStores(items, () => {
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
        tmp2Result = closure_12(tmp3(5087).Text, obj6);
      }
      tmp5Result6 = UnicodeEmojisDefault;
    }
  }
  return tmp2Result;
});
const __initData = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData2 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData3 = { code: "function MemberActionChatInputBannerTsx3(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData4 = { code: "function MemberActionChatInputBannerTsx4(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberActionChatInputBanner(channel) {
  const cResult = channel(channelAction[13]).c(51);
  channel = channel.channel;
  const tmp4 = closure_15();
  closure_1 = tmp4;
  let obj = channel(channelAction[13]);
  const memberActionsForChannel = channel(channelAction[23]).useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let obj2 = channel(channelAction[23]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = channel(channelAction[23]).useNextMemberAction(channel.guild_id, channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [useReducedMotion];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let obj3 = channel(channelAction[23]);
  const stateFromStores = channel(channelAction[14]).useStateFromStores(tmp8, tmp9);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp13 = actionType === channel(channelAction[24]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp13;
  const tmp14 = completed(nextMemberAction.useState(channel(channelAction[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first = tmp14[0];
  ChannelStore = tmp14[1];
  const tmp16 = completed(nextMemberAction.useState(channel(channelAction[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first1 = tmp16[0];
  Routes = tmp16[1];
  let tmpResult = channel(channelAction[14]);
  const sharedValue = channel(channelAction[25]).useSharedValue(0);
  const tmpResult5 = channel(channelAction[25]);
  let num3 = 0;
  if (completed) {
    num3 = first1;
  }
  const sharedValue1 = channel(channelAction[25]).useSharedValue(num3);
  if (cResult[2] === completed) {
    if (cResult[3] === sharedValue) {
      if (cResult[4] === tmp13) {
        if (cResult[5] === first) {
          let tmp20 = cResult[6];
          let tmp21 = cResult[7];
        }
        const effect = obj5.useEffect(tmp20, tmp21);
        if (cResult[8] === completed) {
          if (cResult[9] === sharedValue1) {
            if (cResult[10] === nextMemberAction) {
              if (cResult[11] === first1) {
                let tmp23 = cResult[12];
                let tmp24 = cResult[13];
              }
              const effect1 = obj5.useEffect(tmp23, tmp24);
              class J {
                constructor() {
                  obj = { height: null };
                  if (closure_5) {
                    tmp7 = closure_11;
                    obj.height = closure_11.get();
                    tmp6 = obj;
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[25]);
                    tmp3 = completed;
                    num = 200;
                    if (completed) {
                      num = 800;
                    }
                    tmpResult = tmp(tmp2[26]);
                    tmp4 = closure_11;
                    obj1 = { duration: 400, easing: null };
                    value = closure_11.get();
                    obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
                    obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
                    tmp6 = obj;
                  }
                  return tmp6;
                }
              }
              let obj4 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp(tmp2[25]).withDelay, completed, withTiming: tmp(tmp2[26]).withTiming, DECELERATED_EASING: tmp(tmp2[18]).DECELERATED_EASING };
              J.__closure = obj4;
              J.__workletHash = 5585837927201;
              J.__initData = __initData;
              const animatedStyle = tmp(tmp2[25]).useAnimatedStyle(J);
              const tmpResult7 = tmp(tmp2[25]);
              class K {
                constructor() {
                  obj = { height: null };
                  if (closure_5) {
                    tmp8 = closure_12;
                    obj.height = closure_12.get();
                    tmp7 = obj;
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[25]);
                    tmp3 = closure_6;
                    num = 0;
                    if (!closure_6) {
                      tmp4 = completed;
                      num = 0;
                      if (completed) {
                        num = 1200;
                      }
                    }
                    tmpResult = tmp(tmp2[26]);
                    tmp5 = closure_12;
                    obj1 = { duration: 400, easing: null };
                    value = closure_12.get();
                    obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
                    obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
                    tmp7 = obj;
                  }
                  return tmp7;
                }
              }
              let obj6 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp(tmp2[25]).withDelay, isViewAction: tmp13, completed, withTiming: tmp(tmp2[26]).withTiming, DECELERATED_EASING: tmp(tmp2[18]).DECELERATED_EASING };
              K.__closure = obj6;
              K.__workletHash = 10256555667281;
              K.__initData = __initData2;
              const animatedStyle1 = tmp(tmp2[25]).useAnimatedStyle(K);
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                class Z {
                  constructor(arg0) {
                    tmp = closure_8(channel.nativeEvent.layout.height);
                    return;
                  }
                }
                cResult[14] = Z;
                class J {
                  constructor() {
                    obj = { height: null };
                    if (closure_5) {
                      tmp7 = closure_11;
                      obj.height = closure_11.get();
                      tmp6 = obj;
                    } else {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[25]);
                      tmp3 = completed;
                      num = 200;
                      if (completed) {
                        num = 800;
                      }
                      tmpResult = tmp(tmp2[26]);
                      tmp4 = closure_11;
                      obj1 = { duration: 400, easing: null };
                      value = closure_11.get();
                      obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
                      obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
                      tmp6 = obj;
                    }
                    return tmp6;
                  }
                }
              } else {
                class Z {
                  constructor(arg0) {
                    tmp = closure_8(channel.nativeEvent.layout.height);
                    return;
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor(arg0) {
                    tmp = closure_10(channel.nativeEvent.layout.height);
                    return;
                  }
                }
                cResult[15] = X;
                class J {
                  constructor() {
                    obj = { height: null };
                    if (closure_5) {
                      tmp7 = closure_11;
                      obj.height = closure_11.get();
                      tmp6 = obj;
                    } else {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[25]);
                      tmp3 = completed;
                      num = 200;
                      if (completed) {
                        num = 800;
                      }
                      tmpResult = tmp(tmp2[26]);
                      tmp4 = closure_11;
                      obj1 = { duration: 400, easing: null };
                      value = closure_11.get();
                      obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
                      obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
                      tmp6 = obj;
                    }
                    return tmp6;
                  }
                }
              } else {
                class X {
                  constructor(arg0) {
                    tmp = closure_10(channel.nativeEvent.layout.height);
                    return;
                  }
                }
              }
              if (null == channelAction) {
                class X {
                  constructor(arg0) {
                    tmp = closure_10(channel.nativeEvent.layout.height);
                    return;
                  }
                }
              } else {
                class X {
                  constructor(arg0) {
                    tmp = closure_10(channel.nativeEvent.layout.height);
                    return;
                  }
                }
                function renderAction() {
                  let tmp3Result = null;
                  if (null != channelAction) {
                    const obj = { style: closure_1.container, children: null };
                    const obj2 = { emoji: channelAction.emoji };
                    const items = [__initData(closure_17, obj2), , ];
                    const obj3 = { style: closure_1.text, children: null };
                    const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
                    const items1 = [__initData(Text_Text.Text, obj4), ];
                    const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: null };
                    const intl = util.intl;
                    obj5.children = intl.string(util.t["ElGg8+"]);
                    items1[1] = __initData(Text_Text.Text, obj5);
                    obj3.children = items1;
                    items[1] = __initData2(View, obj3);
                    let tmp6Result = completed;
                    if (completed) {
                      const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: _modDef11941 };
                      tmp6Result = __initData(native.Icon, obj6);
                    }
                    items[2] = tmp6Result;
                    obj.children = items;
                    tmp3Result = __initData2(View, obj);
                  }
                  return tmp3Result;
                }
                class J {
                  constructor() {
                    obj = { height: null };
                    if (closure_5) {
                      tmp7 = closure_11;
                      obj.height = closure_11.get();
                      tmp6 = obj;
                    } else {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[25]);
                      tmp3 = completed;
                      num = 200;
                      if (completed) {
                        num = 800;
                      }
                      tmpResult = tmp(tmp2[26]);
                      tmp4 = closure_11;
                      obj1 = { duration: 400, easing: null };
                      value = closure_11.get();
                      obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
                      obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
                      tmp6 = obj;
                    }
                    return tmp6;
                  }
                }
                cResult[17] = completed;
                cResult[18] = tmp4.container;
                cResult[19] = tmp4.text;
                cResult[20] = tmp4.wrap;
                cResult[21] = renderAction;
              }
              const tmpResult8 = tmp(tmp2[25]);
            }
          }
        }
        class L {
          constructor() {
            if (completed) {
              tmp = closure_4;
              tmp2 = null;
              if (null != closure_4) {
                tmp4 = closure_12;
                tmp5 = closure_9;
                result = closure_12.set(closure_9);
              }
              return;
            }
            result1 = closure_12.set(0);
            return;
          }
        }
        let items1 = [sharedValue1, completed, nextMemberAction, first1];
        cResult[8] = completed;
        cResult[9] = sharedValue1;
        cResult[10] = nextMemberAction;
        cResult[11] = first1;
        cResult[12] = L;
        cResult[13] = items1;
        tmp24 = items1;
        tmp23 = L;
      }
    }
  }
  class R {
    constructor() {
      if (!completed) {
        tmp = closure_6;
        if (!closure_6) {
          tmp2 = closure_11;
          tmp3 = closure_7;
          result = closure_11.set(closure_7);
        }
        return;
      }
      result1 = closure_11.set(0);
      return;
    }
  }
  const items2 = [sharedValue, completed, tmp13, first];
  cResult[2] = completed;
  cResult[3] = sharedValue;
  cResult[4] = tmp13;
  cResult[5] = first;
  cResult[6] = R;
  cResult[7] = items2;
  tmp21 = items2;
  tmp20 = R;
  const tmpResult6 = channel(channelAction[25]);
}) : (function MemberActionChatInputBanner(channel) {
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
  const memberActionsForChannel = channel(channelAction[23]).useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let obj = channel(channelAction[23]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = channel(channelAction[23]).useNextMemberAction(channel.guild_id, channelId);
  let obj2 = channel(channelAction[23]);
  let items = [useReducedMotion];
  stateFromStores = channel(channelAction[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp9 = actionType === channel(channelAction[24]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp9;
  const tmp10 = completed(nextMemberAction.useState(channel(channelAction[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp10[0];
  closure_8 = tmp12;
  const tmp13 = completed(nextMemberAction.useState(channel(channelAction[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp13[0];
  closure_10 = tmp15;
  const tmp2Result = channel(channelAction[14]);
  sharedValue = channel(channelAction[25]).useSharedValue(0);
  const tmp2Result5 = channel(channelAction[25]);
  let num = 0;
  if (completed) {
    num = first1;
  }
  sharedValue1 = channel(channelAction[25]).useSharedValue(num);
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
  const tmp2Result6 = channel(channelAction[25]);
  const fn = function z() {
    const obj = { height: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      let tmp6 = obj;
    } else {
      let num = 200;
      if (completed) {
        num = 800;
      }
      const obj2 = ReanimatedRexport;
      const obj3 = { duration: 400, easing: null };
      value = sharedValue.get();
      obj3.easing = native.DECELERATED_EASING;
      obj.height = obj2.withDelay(num, timing.withTiming(value, obj3));
      tmp6 = obj;
      const tmpResult = timing;
    }
    return tmp6;
  };
  const tmp2Result7 = channel(channelAction[25]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(channelAction[25]).withDelay, completed, withTiming: channel(channelAction[26]).withTiming, DECELERATED_EASING: channel(channelAction[18]).DECELERATED_EASING };
  fn.__workletHash = 15931594863971;
  fn.__initData = __initData3;
  const animatedStyle = tmp2Result7.useAnimatedStyle(fn);
  let obj3 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(channelAction[25]).withDelay, completed, withTiming: channel(channelAction[26]).withTiming, DECELERATED_EASING: channel(channelAction[18]).DECELERATED_EASING };
  class V {
    constructor() {
      obj = { height: null };
      if (closure_5) {
        tmp8 = closure_12;
        obj.height = closure_12.get();
        tmp7 = obj;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[25]);
        tmp3 = closure_6;
        num = 0;
        if (!closure_6) {
          tmp4 = completed;
          num = 0;
          if (completed) {
            num = 1200;
          }
        }
        tmpResult = tmp(tmp2[26]);
        tmp5 = closure_12;
        obj1 = { duration: 400, easing: null };
        value = closure_12.get();
        obj1.easing = tmp(tmp2[18]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num, tmpResult.withTiming(value, obj1));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const tmp2Result8 = channel(channelAction[25]);
  V.__closure = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: channel(channelAction[25]).withDelay, isViewAction: tmp9, completed, withTiming: channel(channelAction[26]).withTiming, DECELERATED_EASING: channel(channelAction[18]).DECELERATED_EASING };
  V.__workletHash = 12048442500119;
  V.__initData = __initData4;
  const items3 = [tmp10[1]];
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(V);
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
        const items = [__initData(closure_17, obj2), , ];
        const obj3 = { style: closure_1.text, children: null };
        const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        const items1 = [__initData(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t["ElGg8+"]);
        items1[1] = __initData(Text_Text.Text, obj5);
        obj3.children = items1;
        items[1] = __initData2(View, obj3);
        let tmp6Result = completed;
        if (completed) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: _modDef11941 };
          tmp6Result = __initData(native.Icon, obj6);
        }
        items[2] = tmp6Result;
        obj.children = items;
        tmp3Result = __initData2(View, obj);
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
              return channel(channelAction[29]).transitionTo(closure_10.CHANNEL(guild_id.guild_id, channelId.channelId));
            };
            const obj2 = { emoji: nextMemberAction.emoji };
            const items = [__initData(closure_17, obj2), , ];
            const obj3 = { style: closure_1.text, children: null };
            const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: null };
            const intl2 = util.intl;
            const obj5 = { step: nextMemberAction.title };
            obj4.children = intl2.format(util.t["/beONw"], obj5);
            const items1 = [__initData(Text_Text.Text, obj4), ];
            const obj6 = { action: nextMemberAction };
            items1[1] = __initData(closure_16, obj6);
            obj3.children = items1;
            items[1] = __initData2(View, obj3);
            const obj7 = { style: closure_1.circle, children: null };
            const obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: _modDef11938 };
            obj7.children = __initData(native.Icon, obj8);
            items[2] = __initData(View, obj7);
            obj.children = items;
            tmp2 = __initData2(Pressables.PressableHighlight, obj);
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
  let obj5 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: channel(channelAction[25]).withDelay, isViewAction: tmp9, completed, withTiming: channel(channelAction[26]).withTiming, DECELERATED_EASING: channel(channelAction[18]).DECELERATED_EASING };
});
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MemberActionChatInputBannerGuarded(channel) {
  const cResult = channel(576).c(5);
  channel = channel.channel;
  const obj = channel(576);
  const canSeeOnboardingHome = channel(6918).useCanSeeOnboardingHome(channel.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function o() {
      const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
      let isPending;
      if (selfMember != null) {
        isPending = selfMember.isPending;
      }
      return true === isPending;
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = channel(6918);
  const stateFromStores = channel(573).useStateFromStores(first, tmp7);
  const tmpResult = channel(573);
  let tmp9 = null;
  if (!tmpResult2.useAllActionsCompleted(channel.guild_id)) {
    tmp9 = null;
    if (!stateFromStores) {
      tmp9 = null;
      if (canSeeOnboardingHome) {
        if (cResult[3] !== channel) {
          const obj3 = { channel };
          const tmp13 = closure_12(closure_22, obj3);
          cResult[3] = channel;
          cResult[4] = tmp13;
        }
      }
    }
  }
  return tmp9;
}) : (function MemberActionChatInputBannerGuarded(channel) {
  channel = channel.channel;
  const canSeeOnboardingHome = channel(6918).useCanSeeOnboardingHome(channel.guild_id);
  const obj = channel(6918);
  const items = [GuildMemberStore];
  const stateFromStores = channel(573).useStateFromStores(items, () => {
    const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
    let isPending;
    if (selfMember != null) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  const obj2 = channel(573);
  let tmp3 = null;
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        const obj4 = { channel };
        tmp3 = closure_12(closure_22, obj4);
      }
    }
  }
  return tmp3;
}));
ReactCompilerGating = fn(558);
let obj4 = { tintColor: nativeDefault.colors.WHITE };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputMemberActions(channel) {
  const cResult = c.c(2);
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
  if (actionType === GuildOnboardingHomeTypes.NewMemberActionTypes.VIEW) {
    let tmp8 = null;
    if (completed) {
      tmp8 = null;
    }
    return tmp8;
  }
  if (cResult[0] !== channel) {
    const obj4 = { channel };
    const tmp12 = __initData(memoResult, obj4);
    cResult[0] = channel;
    cResult[1] = tmp12;
  }
}) : (function ChatInputMemberActions(channel) {
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
    let tmp7 = __initData(memoResult, obj3);
  } else {
    tmp7 = null;
    if (completed) {
      tmp7 = null;
    }
  }
  return tmp7;
}));