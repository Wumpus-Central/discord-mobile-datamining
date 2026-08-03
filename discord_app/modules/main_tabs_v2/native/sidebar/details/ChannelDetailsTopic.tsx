import _slicedToArray from "_slicedToArray";
import importAllResult from "nameFromUser";
import get_ActivityIndicator from "LinearGradient";
import mergeGuildAvatar from "mergeGuildAvatar";
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens";
import { VerticalGradient } from "ME";
import jsxProd from "set";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";

let c5;
let c9;
let closure_12;
let closure_6;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  let token;
  let first;
  let importAllResult;
  let first1;
  let absoluteFill;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback2();
  let obj = channel(token[9]);
  token = obj.useToken(flag(token[10]).colors.BACKGROUND_BASE_LOWER);
  let items = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = flag(token[11])(token);
    const items = [flag(token[11])(token).alpha(0).hex(), token];
    return items;
  }, items);
  const tmp7 = first(importAllResult.useState(true), 2);
  first = tmp7[0];
  importAllResult = tmp7[1];
  const tmp9 = first(importAllResult.useState(flag), 2);
  first1 = tmp9[0];
  absoluteFill = tmp9[1];
  let obj1 = channel(token[12]);
  sharedValue = obj1.useSharedValue(undefined);
  let obj2 = channel(token[12]);
  sharedValue1 = obj2.useSharedValue(undefined);
  let obj3 = channel(token[12]);
  sharedValue2 = obj3.useSharedValue(constants.HIDDEN);
  let obj4 = channel(token[12]);
  const fn = function _() {
    let value = sharedValue1.get();
    value = sharedValue.get();
    if (null != value) {
      if (null != value) {
        let obj = channel(token[13]);
        obj = { height: null };
        obj[0] = obj.withSpring(value, sharedValue2);
      }
      return obj;
    }
    obj = outer1_16;
  };
  obj = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE: closure_16, withSpring: channel(token[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS: sharedValue2 };
  let expanded = closure_16;
  fn.__closure = obj;
  fn.__workletHash = 11932535786068;
  fn.__initData = closure_18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = channel(token[12]);
  const fn2 = function f() {
    let obj = sharedValue1;
    if (null == sharedValue1.get()) {
      obj = outer1_16;
    } else {
      obj = { height: null };
      obj[0] = obj.get();
    }
    return obj;
  };
  fn2.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE: closure_16 };
  fn2.__workletHash = 13643982891313;
  fn2.__initData = closure_19;
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  let obj7 = channel(token[12]);
  class L {
    constructor() {
      obj = { opacity: null };
      obj2 = channel(BACKGROUND_BASE_LOWER[13]);
      obj[0] = obj2.withSpring(HIDDEN.get(), HIDDEN);
      return obj;
    }
  }
  obj = { withSpring: channel(token[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS: sharedValue2 };
  L.__closure = obj;
  L.__workletHash = 12423301233362;
  L.__initData = closure_20;
  const items1 = [sharedValue2, first1];
  const animatedStyle2 = obj7.useAnimatedStyle(L);
  const items2 = [sharedValue1];
  const callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > sharedValue1);
    if (nativeEvent.nativeEvent.lines.length > sharedValue1) {
      if (!first1) {
        let HIDDEN = outer1_17.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = outer1_17.HIDDEN;
  }, items1);
  const items3 = [first, first1, sharedValue2];
  const callback1 = importAllResult.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items2);
  const memo1 = importAllResult.useMemo(() => first ? (() => {
    callback(!closure_5);
    const result = closure_9.set(closure_5 ? tmp2.VISIBLE : tmp2.HIDDEN);
  }) : undefined, items3);
  const items4 = [sharedValue];
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  callback2 = importAllResult.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items4);
  let memo2 = importAllResult.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: outer1_14 };
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items5);
  const items6 = [, ];
  ({ id: arr7[0], topic: arr7[1] } = channel);
  const memo3 = importAllResult.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: outer1_14 };
    return obj.parseTopic(channel.topic, true, obj);
  }, items6);
  const items7 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    callback2(flag);
  }, items7);
  if (null == memo1) {
    let PressableOpacity = first1;
  } else {
    PressableOpacity = tmp2(tmp3[15]).PressableOpacity;
  }
  obj1 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: callback(tmp2(tmp3[16]).Text, obj2) };
  obj2 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo3 };
  const items8 = [callback(first1, obj1), ];
  obj3 = { style: items9, children: null };
  items9 = [tmp.topic, animatedStyle];
  obj4 = { style: animatedStyle1, children: null };
  const obj5 = { onPress: memo1, activeOpacity: 0.7, children: null };
  obj6 = { pointerEvents: str, children: null };
  obj7 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2, lineClamp: null, style: null, children: null };
  let tmp28;
  if (!first1) {
    tmp28 = sharedValue1;
  }
  obj7[3] = tmp28;
  const items10 = [tmp.topicText, , ];
  if (first1) {
    expanded = tmp.expanded;
  }
  items10[1] = expanded;
  items10[2] = { textAlign: channel.textAlign };
  obj7[4] = items10;
  if (first1) {
    memo2 = memo3;
  }
  const obj8 = { children: null };
  obj7[5] = memo2;
  obj6[1] = callback(channel(token[16]).Text, obj7);
  obj5[2] = callback(first1, obj6);
  obj4[1] = callback(PressableOpacity, obj5);
  const items11 = [callback(flag(token[12]).View, obj4), ];
  const obj9 = { style: items12, pointerEvents: "none", children: null };
  items12 = [absoluteFill.absoluteFill, animatedStyle2];
  obj9[2] = callback(flag(token[17]), { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo });
  items11[1] = callback(flag(token[12]).View, obj9);
  obj3[1] = items11;
  items8[1] = closure_12(flag(token[12]).View, obj3);
  obj8[0] = items8;
  return closure_12(closure_13, obj8);
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = outer1_7.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    let userTag = null;
    if (!isProvisional) {
      userTag = outer1_1(outer1_2[19]).getUserTag(user);
      const obj = outer1_1(outer1_2[19]);
    }
    return userTag;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    obj = { textAlign: null };
    obj[0] = channel.textAlign;
    obj[2] = obj;
    obj[3] = stateFromStores;
    tmp4 = callback(channel(4251).Text, obj);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => channel(outer1_2[20]).getPrivateChannelUserTagsString(channel.recipients, outer1_7));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    obj = { textAlign: null };
    obj[0] = channel.textAlign;
    obj[2] = obj;
    obj[3] = stateFromStores;
    tmp4 = callback(channel(4251).Text, obj);
  }
  return tmp4;
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ CHANNEL_TOPIC_LINE_CLAMP: metroImportAll, SPRING_CHANNEL_DETAILS: c9 } = ChannelDetailsNavigatorScreens);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let num = 2;
if (set.isAndroid()) {
  num = 4;
}
let closure_15 = createCacheKey.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
let closure_16 = {};
let closure_17 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_18 = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
let closure_19 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
let closure_20 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default importAllResult.memo(function ChannelDetailsTopic(initialExpanded) {
  let channel;
  let textAlign;
  ({ channel, textAlign } = initialExpanded);
  if (textAlign === undefined) {
    textAlign = "center";
  }
  let flag = initialExpanded.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  if (channel.isDM()) {
    let obj = { channel: null, textAlign: null };
    obj[0] = channel;
    obj[1] = textAlign;
    let tmp3 = callback(PrivateChannelDetailsTopic, obj);
  } else if (channel.isGroupDM()) {
    obj = { channel: null, textAlign: null };
    obj[0] = channel;
    obj[1] = textAlign;
    tmp3 = callback(GroupDMChannelDetailsTopic, obj);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
      const str = channel.topic;
    }
    if (tmp2) {
      obj = { channel: null, textAlign: null, initialExpanded: null };
      obj[0] = channel;
      obj[1] = textAlign;
      obj[2] = flag;
      tmp3 = callback(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj1 = { style: null, children: null };
    obj1[0] = initialExpanded.containerStyle;
    obj1[1] = tmp3;
    tmp10 = callback(closure_5, obj1);
  }
  return tmp10;
});