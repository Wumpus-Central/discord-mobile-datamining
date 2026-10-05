// === Module 11915: MemberActionChatInputBanner ===

// Module 11915 (MemberActionChatInputBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4523 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 7522 */;
import AssetRegistryDefault from "AssetRegistry" /* 11415 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11914 */;
import MemberActionUtils from "MemberActionUtils" /* 11916 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11917 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let action, channel, emoji, importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let size;
let size1;
let View = react_native.View;
let ChannelStore = ChannelStore_mod;
let Routes = Constants.Routes;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: obj2, text: { flexGrow: 1, flexShrink: 1, marginLeft: 8 }, wrap: { flexShrink: 1, flexWrap: "wrap" }, emoji: { width: 24, height: 24 }, textEmoji: { width: 24, textAlign: "center" }, emojiPlaceholder: size, circle: size1, icon: obj3 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
createStyles = createStyles.createStyles;
size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((action) => {
  let MkzlDL;
  let first;
  let format;
  let intl3;
  let obj3;
  let tmp11;
  let tmp6;
  const obj = action(576);
  const cResult = obj.c(8);
  action = action.action;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== action.channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(action.channelId);
    };
    cResult[1] = action.channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = action(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = useChannelNameDefault(stateFromStores, true);
  if (null == stateFromStores) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xxs/normal", color: "text-default", children: format(MkzlDL, obj3) };
      const Text = tmp(4886).Text;
      const intl2 = tmp(1126).intl;
      format = intl2.format;
      obj3 = { channelName: intl3.string(action(1126).t.J90oLW) };
      MkzlDL = tmp(1126).t.MkzlDL;
      intl3 = tmp(1126).intl;
      const tmp16 = closure_12(Text, obj2);
      cResult[3] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[3];
    }
    tmp11 = tmp14;
  } else {
    let tmp9;
    if (cResult[4] !== tmp8) {
      const intl = tmp(1126).intl;
      const obj4 = { channelName: tmp8 };
      const formatResult = intl.format(action(1126).t.MkzlDL, obj4);
      cResult[4] = tmp8;
      cResult[5] = formatResult;
      tmp9 = formatResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const obj5 = { variant: "text-xxs/normal", color: "text-default", children: tmp9 };
      const tmp13 = closure_12(action(4886).Text, obj5);
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
  }
  return tmp11;
}) : ((action) => {
  let MkzlDL;
  let format;
  let intl;
  let intl3;
  let obj3;
  let obj4;
  let obj5;
  action = action.action;
  const items = [ChannelStore];
  const obj = action(573);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  const tmp4 = useChannelNameDefault(stateFromStores, true);
  const Text = action(4886).Text;
  if (null == stateFromStores) {
    const obj2 = { variant: "text-xxs/normal", color: "text-default", children: format(MkzlDL, obj3) };
    const intl2 = tmp(1126).intl;
    format = intl2.format;
    obj3 = { channelName: intl3.string(action(1126).t.J90oLW) };
    MkzlDL = tmp(1126).t.MkzlDL;
    intl3 = tmp(1126).intl;
    obj4 = obj2;
  } else {
    obj4 = { variant: "text-xxs/normal", color: "text-default", children: intl.format(action(1126).t.MkzlDL, obj5) };
    intl = tmp(1126).intl;
    obj5 = { channelName: tmp4 };
  }
  return closure_12(Text, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let first;
  let id;
  let name;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp9;
  const tmp = id;
  const obj = id(576);
  const cResult = obj.c(18);
  emoji = emoji.emoji;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: tmp(1188).Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault };
    const Icon = tmp(1188).Icon;
    const tmp8 = closure_12(Icon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.emojiPlaceholder) {
    const obj3 = { style: tmp4.emojiPlaceholder, children: first };
    const tmp12 = closure_12(View, obj3);
    cResult[1] = tmp4.emojiPlaceholder;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    name = emoji.name;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[3] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[3];
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
    tmp17 = items1;
    tmp16 = fn;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp16, tmp17);
  if (null != stateFromStores) {
    if (cResult[7] === stateFromStores.animated) {
      let tmp24;
      let tmp28;
      if (cResult[8] === stateFromStores.id) {
        tmp24 = cResult[9];
      }
      if (cResult[10] !== tmp24) {
        const obj4 = { uri: tmp24 };
        cResult[10] = tmp24;
        cResult[11] = obj4;
        tmp28 = obj4;
      } else {
        tmp28 = cResult[11];
      }
      if (cResult[12] === tmp4.emoji) {
        let tmp29;
        if (cResult[13] === tmp28) {
          tmp29 = cResult[14];
        }
        return tmp29;
      }
      const obj5 = { style: tmp23, source: tmp28, resizeMode: "contain" };
      const tmp32 = closure_12(FastImageDefault, obj5);
      cResult[12] = tmp4.emoji;
      cResult[13] = tmp28;
      cResult[14] = tmp32;
      tmp29 = tmp32;
    }
    const obj8 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
    ({ id: obj7.id, animated: obj7.animated } = stateFromStores);
    const obj6 = AvatarUtilsDefault;
    const emojiURL = obj6.getEmojiURL(obj8);
    cResult[7] = stateFromStores.animated;
    cResult[8] = stateFromStores.id;
    cResult[9] = emojiURL;
    tmp24 = emojiURL;
  } else {
    let tmp22 = tmp9;
    if (null != name) {
      const getByName = UnicodeEmojisDefault.getByName;
      UnicodeEmojisDefault;
      tmp22 = tmp9;
      const obj10 = UnicodeEmojisDefault;
      if (null != getByName(obj10.convertSurrogateToName(name, false))) {
        if (cResult[15] === name) {
          let tmp19;
          if (cResult[16] === tmp4.textEmoji) {
            tmp19 = cResult[17];
          }
          tmp22 = tmp19;
        }
        const obj9 = { style: tmp4.textEmoji, variant: "heading-lg/normal", children: name };
        const tmp21 = closure_12(tmp(4886).Text, obj9);
        cResult[15] = name;
        cResult[16] = tmp4.textEmoji;
        cResult[17] = tmp21;
        tmp19 = tmp21;
      }
    }
    return tmp22;
  }
}) : ((emoji) => {
  let Icon;
  let name;
  let obj2;
  let obj4;
  let obj5;
  let tmp2Result;
  let tmp5Result4;
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  const obj = { style: tmp.emojiPlaceholder, children: closure_12(Icon, obj2) };
  obj2 = { size: id(1188).Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault };
  Icon = id(1188).Icon;
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    name = emoji.name;
  }
  const items = [EmojiStore];
  const items1 = [id];
  const tmp3Result = id(573);
  const stateFromStores = tmp3Result.useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.emoji, source: obj4, resizeMode: "contain" };
    obj4 = { uri: tmp5Result4.getEmojiURL(obj5) };
    obj5 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
    ({ id: obj9.id, animated: obj9.animated } = stateFromStores);
    const tmp5Result = FastImageDefault;
    tmp5Result4 = AvatarUtilsDefault;
    tmp2Result = closure_12(tmp5Result, obj3);
  } else {
    tmp2Result = tmp6;
    if (null != name) {
      const getByName = UnicodeEmojisDefault.getByName;
      UnicodeEmojisDefault;
      tmp2Result = tmp6;
      const tmp5Result6 = UnicodeEmojisDefault;
      if (null != getByName(tmp5Result6.convertSurrogateToName(name, false))) {
        const obj6 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp2Result = closure_12(tmp3(4886).Text, obj6);
      }
    }
  }
  return tmp2Result;
});
const __initData = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData2 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData3 = { code: "function MemberActionChatInputBannerTsx3(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData4 = { code: "function MemberActionChatInputBannerTsx4(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let channelAction;
  let closure_10;
  let closure_8;
  let tmp10;
  let tmp9;
  let useReducedMotion;
  let tmp2 = channelAction;
  let obj = channel(channelAction[13]);
  const cResult = obj.c(51);
  channel = channel.channel;
  const tmp4 = closure_15();
  let closure_1 = tmp4;
  let obj2 = channel(channelAction[23]);
  const memberActionsForChannel = obj2.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let channelId;
  const useNextMemberAction = channel(channelAction[23]).useNextMemberAction;
  const guild_id = channel.guild_id;
  channel(channelAction[23]);
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = useNextMemberAction(guild_id, channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [useReducedMotion];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp9 = items;
    tmp10 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp14 = actionType === channel(tmp2[24]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp14;
  let obj4 = nextMemberAction;
  const tmp15 = completed(nextMemberAction.useState(channel(tmp2[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first = tmp15[0];
  ChannelStore = tmp15[1];
  const tmp17 = completed(nextMemberAction.useState(channel(tmp2[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first1 = tmp17[0];
  Routes = tmp17[1];
  const tmpResult5 = channel(tmp2[25]);
  const sharedValue = tmpResult5.useSharedValue(0);
  let num3 = 0;
  const useSharedValue = tmp(tmp2[25]).useSharedValue;
  channel(tmp2[25]);
  if (completed) {
    num3 = first1;
  }
  const sharedValue1 = useSharedValue(num3);
  if (cResult[2] === completed) {
    if (cResult[3] === sharedValue) {
      if (cResult[4] === tmp14) {
        let tmp22;
        let tmp23;
        if (cResult[5] === first) {
          tmp22 = cResult[6];
          tmp23 = cResult[7];
        }
        const effect = obj4.useEffect(tmp22, tmp23);
        if (cResult[8] === completed) {
          if (cResult[9] === sharedValue1) {
            if (cResult[10] === nextMemberAction) {
              let tmp25;
              let tmp26;
              if (cResult[11] === first1) {
                tmp25 = cResult[12];
                tmp26 = cResult[13];
              }
              const effect1 = obj4.useEffect(tmp25, tmp26);
              const tmpResult7 = channel(tmp2[25]);
              class J {
                constructor() {
                  let tmp8;
                  const obj = { height: null };
                  if (stateFromStores) {
                    obj.height = sharedValue.get();
                    tmp8 = obj;
                  } else {
                    let num = 200;
                    const withDelay = ReanimatedRexport.withDelay;
                    ReanimatedRexport;
                    if (completed) {
                      num = 800;
                    }
                    const withTiming = timing.withTiming;
                    const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
                    timing;
                    const value = sharedValue.get();
                    obj.height = withDelay(num, withTiming(value, obj2));
                    tmp8 = obj;
                  }
                  return tmp8;
                }
              }
              let obj3 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp(tmp2[25]).withDelay, completed, withTiming: tmp(tmp2[26]).withTiming, DECELERATED_EASING: tmp(tmp2[18]).DECELERATED_EASING };
              const useAnimatedStyle = tmpResult7.useAnimatedStyle;
              J.__closure = obj3;
              J.__workletHash = 5585837927201;
              J.__initData = __initData;
              const animatedStyle = useAnimatedStyle(J);
              const tmpResult8 = channel(tmp2[25]);
              class K {
                constructor() {
                  let tmp9;
                  const obj = { height: null };
                  if (stateFromStores) {
                    obj.height = sharedValue1.get();
                    tmp9 = obj;
                  } else {
                    let num = 0;
                    const withDelay = ReanimatedRexport.withDelay;
                    ReanimatedRexport;
                    if (!useReducedMotion) {
                      num = 0;
                      if (completed) {
                        num = 1200;
                      }
                    }
                    const withTiming = timing.withTiming;
                    const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
                    timing;
                    const value = sharedValue1.get();
                    obj.height = withDelay(num, withTiming(value, obj2));
                    tmp9 = obj;
                  }
                  return tmp9;
                }
              }
              let obj5 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp(tmp2[25]).withDelay, isViewAction: tmp14, completed, withTiming: tmp(tmp2[26]).withTiming, DECELERATED_EASING: tmp(tmp2[18]).DECELERATED_EASING };
              const useAnimatedStyle2 = tmpResult8.useAnimatedStyle;
              K.__closure = obj5;
              K.__workletHash = 10256555667281;
              K.__initData = __initData2;
              const animatedStyle2 = useAnimatedStyle2(K);
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                class Z {
                  constructor(nativeEvent) {
                    closure_8(nativeEvent.nativeEvent.layout.height);
                  }
                }
                cResult[14] = Z;
                class J {
                  constructor() {
                    let tmp8;
                    const obj = { height: null };
                    if (stateFromStores) {
                      obj.height = sharedValue.get();
                      tmp8 = obj;
                    } else {
                      let num = 200;
                      const withDelay = ReanimatedRexport.withDelay;
                      ReanimatedRexport;
                      if (completed) {
                        num = 800;
                      }
                      const withTiming = timing.withTiming;
                      const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
                      timing;
                      const value = sharedValue.get();
                      obj.height = withDelay(num, withTiming(value, obj2));
                      tmp8 = obj;
                    }
                    return tmp8;
                  }
                }
              } else {
                class Z {
                  constructor(nativeEvent) {
                    closure_8(nativeEvent.nativeEvent.layout.height);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor(nativeEvent) {
                    closure_10(nativeEvent.nativeEvent.layout.height);
                  }
                }
                cResult[15] = X;
                class J {
                  constructor() {
                    let tmp8;
                    const obj = { height: null };
                    if (stateFromStores) {
                      obj.height = sharedValue.get();
                      tmp8 = obj;
                    } else {
                      let num = 200;
                      const withDelay = ReanimatedRexport.withDelay;
                      ReanimatedRexport;
                      if (completed) {
                        num = 800;
                      }
                      const withTiming = timing.withTiming;
                      const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
                      timing;
                      const value = sharedValue.get();
                      obj.height = withDelay(num, withTiming(value, obj2));
                      tmp8 = obj;
                    }
                    return tmp8;
                  }
                }
              } else {
                class X {
                  constructor(nativeEvent) {
                    closure_10(nativeEvent.nativeEvent.layout.height);
                  }
                }
              }
              if (null == channelAction) {
                class X {
                  constructor(nativeEvent) {
                    closure_10(nativeEvent.nativeEvent.layout.height);
                  }
                }
              } else {
                class X {
                  constructor(nativeEvent) {
                    closure_10(nativeEvent.nativeEvent.layout.height);
                  }
                }
                const fn2 = function $() {
                  let intl;
                  let items;
                  let items1;
                  let tmp3Result = null;
                  if (null != channelAction) {
                    const obj = { style: closure_1.container, children: items };
                    const obj2 = { emoji: channelAction.emoji };
                    items = [sharedValue1(closure_17, obj2), , ];
                    const obj3 = { style: closure_1.text, children: items1 };
                    const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
                    items1 = [sharedValue1(Text_Text.Text, obj4), ];
                    const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: intl.string(intl4.t["ElGg8+"]) };
                    const Text = Text_Text.Text;
                    intl = intl4.intl;
                    items1[1] = sharedValue1(Text, obj5);
                    items[1] = map1(View, obj3);
                    let tmp6Result = completed;
                    if (tmp6Result) {
                      const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault3 };
                      const Icon = native.Icon;
                      tmp6Result = sharedValue1(Icon, obj6);
                    }
                    items[2] = tmp6Result;
                    tmp3Result = map1(View, obj);
                  }
                  return tmp3Result;
                };
                class J {
                  constructor() {
                    let tmp8;
                    const obj = { height: null };
                    if (stateFromStores) {
                      obj.height = sharedValue.get();
                      tmp8 = obj;
                    } else {
                      let num = 200;
                      const withDelay = ReanimatedRexport.withDelay;
                      ReanimatedRexport;
                      if (completed) {
                        num = 800;
                      }
                      const withTiming = timing.withTiming;
                      const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
                      timing;
                      const value = sharedValue.get();
                      obj.height = withDelay(num, withTiming(value, obj2));
                      tmp8 = obj;
                    }
                    return tmp8;
                  }
                }
                cResult[17] = completed;
                cResult[18] = tmp4.container;
                cResult[19] = tmp4.text;
                cResult[20] = tmp4.wrap;
                cResult[21] = fn2;
              }
            }
          }
        }
        class M {
          constructor() {
            if (completed) {
              if (null != nextMemberAction) {
                const result = sharedValue1.set(first1);
              }
            }
            const result1 = sharedValue1.set(0);
          }
        }
        let items1 = [sharedValue1, completed, nextMemberAction, first1];
        cResult[8] = completed;
        cResult[9] = sharedValue1;
        cResult[10] = nextMemberAction;
        cResult[11] = first1;
        cResult[12] = M;
        cResult[13] = items1;
        tmp26 = items1;
        tmp25 = M;
      }
    }
  }
  class R {
    constructor() {
      if (!completed) {
        if (!useReducedMotion) {
          const result = sharedValue.set(first);
        }
      }
      const result1 = sharedValue.set(0);
    }
  }
  const items2 = [sharedValue, completed, tmp14, first];
  cResult[2] = completed;
  cResult[3] = sharedValue;
  cResult[4] = tmp14;
  cResult[5] = first;
  cResult[6] = R;
  cResult[7] = items2;
  tmp23 = items2;
  tmp22 = R;
}) : ((channel) => {
  let closure_1;
  let items5;
  let items6;
  let items7;
  channel = channel.channel;
  let channelAction;
  let nextMemberAction;
  let stateFromStores;
  let useReducedMotion;
  let first;
  let closure_8;
  let first1;
  let closure_10;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_15();
  importDefault = tmp;
  let tmp2 = channel;
  const tmp3 = channelAction;
  let obj = channel(channelAction[23]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let channelId;
  const useNextMemberAction = channel(channelAction[23]).useNextMemberAction;
  const guild_id = channel.guild_id;
  channel(channelAction[23]);
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = useNextMemberAction(guild_id, channelId);
  let items = [useReducedMotion];
  const tmp2Result = tmp2(tmp3[14]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp10 = actionType === tmp2(tmp3[24]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp10;
  let obj3 = nextMemberAction;
  const tmp11 = completed(nextMemberAction.useState(tmp2(tmp3[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp11[0];
  closure_8 = tmp13;
  const tmp14 = completed(nextMemberAction.useState(tmp2(tmp3[24]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp14[0];
  closure_10 = tmp16;
  const tmp2Result5 = tmp2(tmp3[25]);
  sharedValue = tmp2Result5.useSharedValue(0);
  let num = 0;
  const useSharedValue = tmp2(tmp3[25]).useSharedValue;
  tmp2(tmp3[25]);
  if (completed) {
    num = first1;
  }
  sharedValue1 = useSharedValue(num);
  let items1 = [sharedValue, completed, tmp10, first];
  const effect = obj3.useEffect(() => {
    if (!completed) {
      if (!useReducedMotion) {
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
  const tmp2Result7 = tmp2(tmp3[25]);
  class B {
    constructor() {
      let tmp8;
      const obj = { height: null };
      if (stateFromStores) {
        obj.height = sharedValue.get();
        tmp8 = obj;
      } else {
        let num = 200;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        if (completed) {
          num = 800;
        }
        const withTiming = timing.withTiming;
        const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
        timing;
        const value = sharedValue.get();
        obj.height = withDelay(num, withTiming(value, obj2));
        tmp8 = obj;
      }
      return tmp8;
    }
  }
  let obj2 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp2(tmp3[25]).withDelay, completed, withTiming: tmp2(tmp3[26]).withTiming, DECELERATED_EASING: tmp2(tmp3[18]).DECELERATED_EASING };
  B.__closure = obj2;
  B.__workletHash = 15931594863971;
  B.__initData = __initData3;
  const animatedStyle = tmp2Result7.useAnimatedStyle(B);
  const tmp2Result8 = tmp2(tmp3[25]);
  class V {
    constructor() {
      let tmp9;
      const obj = { height: null };
      if (stateFromStores) {
        obj.height = sharedValue1.get();
        tmp9 = obj;
      } else {
        let num = 0;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        if (!useReducedMotion) {
          num = 0;
          if (completed) {
            num = 1200;
          }
        }
        const withTiming = timing.withTiming;
        const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
        timing;
        const value = sharedValue1.get();
        obj.height = withDelay(num, withTiming(value, obj2));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  let obj4 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp2(tmp3[25]).withDelay, isViewAction: tmp10, completed, withTiming: tmp2(tmp3[26]).withTiming, DECELERATED_EASING: tmp2(tmp3[18]).DECELERATED_EASING };
  V.__closure = obj4;
  V.__workletHash = 12048442500119;
  V.__initData = __initData4;
  const items3 = [tmp11[1]];
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(V);
  [][0] = tmp14[1];
  const callback = obj3.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let intl;
      let items;
      let items1;
      let tmp3Result = null;
      if (null != channelAction) {
        const obj = { style: closure_1.container, children: items };
        const obj2 = { emoji: channelAction.emoji };
        items = [sharedValue1(closure_17, obj2), , ];
        const obj3 = { style: closure_1.text, children: items1 };
        const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        items1 = [sharedValue1(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: intl.string(intl4.t["ElGg8+"]) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        items1[1] = sharedValue1(Text, obj5);
        items[1] = map1(View, obj3);
        let tmp6Result = completed;
        if (tmp6Result) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault3 };
          const Icon = native.Icon;
          tmp6Result = sharedValue1(Icon, obj6);
        }
        items[2] = tmp6Result;
        tmp3Result = map1(View, obj);
      }
      return tmp3Result;
    }
    let obj5 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(stateFromStores, obj5), , ];
    let tmp32Result = !tmp10;
    const tmp33 = stateFromStores;
    if (tmp32Result) {
      let obj6 = { style: items5, children: renderAction() };
      items5 = [tmp.animatedContainer, animatedStyle];
      View = require("ReanimatedRexport").View;
      tmp32Result = tmp32(View, obj6);
    }
    items4[1] = tmp32Result;
    let tmp30Result = null;
    if (completed) {
      tmp30Result = null;
      if (null != nextMemberAction) {
        function renderNextAction() {
          let Icon;
          let channelId;
          let guild_id;
          let intl;
          let intl2;
          let items;
          let items1;
          let obj5;
          let obj8;
          let tmp2 = null;
          if (null != nextMemberAction) {
            let obj = {
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl4.t.PDTjLN),
              style: closure_1.container,
              onPress() {
                  const obj = channel(channelAction[29]);
                  return obj.transitionTo(closure_10.CHANNEL(guild_id.guild_id, channelId.channelId));
                },
              children: items
            };
            const PressableHighlight = Pressables.PressableHighlight;
            intl = intl4.intl;
            const obj2 = { emoji: nextMemberAction.emoji };
            items = [sharedValue1(closure_17, obj2), , ];
            const obj3 = { style: closure_1.text, children: items1 };
            const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: intl2.format(intl4.t["/beONw"], obj5) };
            const Text = Text_Text.Text;
            intl2 = intl4.intl;
            obj5 = { step: nextMemberAction.title };
            items1 = [sharedValue1(Text, obj4), ];
            const obj6 = { action: nextMemberAction };
            items1[1] = sharedValue1(closure_16, obj6);
            items[1] = map1(View, obj3);
            const obj7 = { style: closure_1.circle, children: sharedValue1(Icon, obj8) };
            obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: AssetRegistryDefault2 };
            Icon = native.Icon;
            items[2] = sharedValue1(View, obj7);
            tmp2 = map1(PressableHighlight, obj);
          }
          return tmp2;
        }
        let obj7 = { children: items6 };
        let obj8 = { style: tmp.measurement, onLayout: tmp25, children: renderNextAction() };
        items6 = [sharedValue1(tmp33, obj8), ];
        const obj9 = { style: items7, children: renderNextAction() };
        items7 = [tmp.animatedContainer, animatedStyle1];
        const View2 = require("ReanimatedRexport").View;
        items6[1] = sharedValue1(View2, obj9);
        tmp30Result = closure_13(closure_14, obj7);
      }
    }
    const obj10 = { children: items4 };
    items4[2] = tmp30Result;
    return closure_13(closure_14, obj10);
  }
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp7;
  const obj = channel(576);
  const cResult = obj.c(5);
  channel = channel.channel;
  const obj2 = channel(6723);
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(channel.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function l() {
      const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
      let isPending;
      if (selfMember != null) {
        isPending = selfMember.isPending;
      }
      return true === isPending;
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channel(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  let tmp9 = null;
  const tmpResult2 = channel(11916);
  if (!tmpResult2.useAllActionsCompleted(channel.guild_id)) {
    tmp9 = null;
    if (!stateFromStores) {
      tmp9 = null;
      if (canSeeOnboardingHome) {
        let tmp10;
        if (cResult[3] !== channel) {
          const obj3 = { channel };
          const tmp13 = closure_12(closure_22, obj3);
          cResult[3] = channel;
          cResult[4] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[4];
        }
        tmp9 = tmp10;
      }
    }
  }
  return tmp9;
}) : ((channel) => {
  channel = channel.channel;
  const obj = channel(6723);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
  const items = [GuildMemberStore];
  const obj2 = channel(573);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
    let isPending;
    if (selfMember != null) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  let tmp3 = null;
  const obj3 = channel(11916);
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
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let channelAction;
  let completed;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(2);
  channel = channel.channel;
  const obj2 = MemberActionUtils;
  const memberActionsForChannel = obj2.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  const useNextMemberAction = MemberActionUtils.useNextMemberAction;
  const guild_id = channel.guild_id;
  MemberActionUtils;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = useNextMemberAction(guild_id, channelId);
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  if (actionType !== GuildOnboardingHomeTypes.NewMemberActionTypes.VIEW) {
    let tmp10;
    if (cResult[0] !== channel) {
      const obj3 = { channel };
      const tmp13 = closure_12(memoResult, obj3);
      cResult[0] = channel;
      cResult[1] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[1];
    }
    tmp9 = tmp10;
  } else {
    tmp9 = null;
    if (completed) {
      tmp9 = null;
    }
  }
  return tmp9;
}) : ((channel) => {
  let channelAction;
  let completed;
  let tmp8;
  channel = channel.channel;
  const obj = MemberActionUtils;
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  const useNextMemberAction = MemberActionUtils.useNextMemberAction;
  const guild_id = channel.guild_id;
  MemberActionUtils;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = useNextMemberAction(guild_id, channelId);
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  if (actionType !== GuildOnboardingHomeTypes.NewMemberActionTypes.VIEW) {
    const obj2 = { channel };
    tmp8 = closure_12(memoResult, obj2);
  } else {
    tmp8 = null;
    if (completed) {
      tmp8 = null;
    }
  }
  return tmp8;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = memo2Result;