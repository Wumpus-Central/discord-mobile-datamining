// === Module 16732: ChannelDetailsTopic ===

// Module 16732 (ChannelDetailsTopic)
import UserUtilsDefault from "UserUtils" /* 4404 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  _slicedToArray = undefined;
  let first1;
  const tmp = closure_15();
  let obj = channel(first[9]);
  const channelTopicGradientBackground = obj.useChannelTopicGradientBackground();
  const tmp5 = _slicedToArray(first1.useState(true), 2);
  first = tmp5[0];
  _slicedToArray = tmp5[1];
  const tmp7 = _slicedToArray(first1.useState(flag), 2);
  first1 = tmp7[0];
  closure_5 = tmp7[1];
  let obj1 = channel(first[10]);
  const sharedValue = obj1.useSharedValue(undefined);
  let obj2 = channel(first[10]);
  const sharedValue1 = obj2.useSharedValue(undefined);
  let obj3 = channel(first[10]);
  const sharedValue2 = obj3.useSharedValue(constants.HIDDEN);
  let obj4 = channel(first[10]);
  const fn = function _() {
    sharedValue1.get();
    value = sharedValue.get();
    if (null != value) {
      if (null != value) {
        let obj = { height: null };
        obj.height = obj.withSpring(value, SPRING_CHANNEL_DETAILS);
      }
      return obj;
    }
    obj = closure_16;
  };
  obj = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[11]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS };
  let expanded = EMPTY_STYLE;
  fn.__closure = obj;
  fn.__workletHash = 11932535786068;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = channel(first[10]);
  class N {
    constructor() {
      obj = closure_7;
      if (null == closure_7.get()) {
        obj = closure_16;
      } else {
        obj = { height: null };
        obj.height = obj.get();
      }
      return obj;
    }
  }
  N.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  N.__workletHash = 13643982891313;
  N.__initData = __initData2;
  const animatedStyle1 = obj6.useAnimatedStyle(N);
  let obj7 = channel(first[10]);
  class L {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[11]);
      obj.opacity = obj2.withSpring(closure_8.get(), SPRING_CHANNEL_DETAILS);
      return obj;
    }
  }
  obj = { withSpring: channel(first[11]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  L.__closure = obj;
  L.__workletHash = 12423301233362;
  L.__initData = __initData3;
  const items = [sharedValue2, first1];
  const animatedStyle2 = obj7.useAnimatedStyle(L);
  const items1 = [sharedValue1];
  const callback = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > React6);
    if (nativeEvent.nativeEvent.lines.length > React6) {
      if (!first1) {
        let HIDDEN = constants.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = constants.HIDDEN;
  }, items);
  const items2 = [first, first1, sharedValue2];
  const callback1 = first1.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items1);
  const memo = first1.useMemo(() => first ? (() => {
    closure_1_5(!first1);
    const result = sharedValue2.set(first1 ? constants.VISIBLE : constants.HIDDEN);
  }) : undefined, items2);
  const items3 = [sharedValue];
  const items4 = [, ];
  ({ id: arr5[0], topic: arr5[1] } = channel);
  const callback2 = first1.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items3);
  let memo1 = first1.useMemo(() => {
    const obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items4);
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(() => {
    const obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    return obj.parseTopic(channel.topic, true, obj);
  }, items5);
  const items6 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = first1.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    closure_5(flag);
  }, items6);
  if (null == memo) {
    let PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[13]).PressableOpacity;
  }
  obj1 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  obj2 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo2 };
  obj1.children = closure_11(channel(first[14]).Text, obj2);
  const items7 = [closure_11(closure_5, obj1), ];
  obj3 = { style: null, children: null };
  const items8 = [tmp.topic, animatedStyle];
  obj3.style = items8;
  obj4 = { style: animatedStyle1, children: null };
  const obj5 = { onPress: memo, activeOpacity: 0.7, children: null };
  obj6 = { pointerEvents: str, children: null };
  obj7 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2, lineClamp: null, style: null, children: null };
  let tmp27;
  if (!first1) {
    tmp27 = sharedValue2;
  }
  obj7.lineClamp = tmp27;
  const items9 = [tmp.topicText, , ];
  if (first1) {
    expanded = tmp.expanded;
  }
  items9[1] = expanded;
  items9[2] = { textAlign: channel.textAlign };
  obj7.style = items9;
  if (first1) {
    memo1 = memo2;
  }
  const obj8 = { children: null };
  obj7.children = memo1;
  obj6.children = closure_11(channel(first[14]).Text, obj7);
  obj5.children = closure_11(closure_5, obj6);
  obj4.children = closure_11(PressableOpacity, obj5);
  const items10 = [closure_11(flag(first[10]).View, obj4), ];
  const obj9 = { style: null, pointerEvents: "none", children: closure_11(flag(first[15]), { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: channelTopicGradientBackground }) };
  const items11 = [sharedValue.absoluteFill, animatedStyle2];
  obj9.style = items11;
  items10[1] = closure_11(flag(first[10]).View, obj9);
  obj3.children = items10;
  items7[1] = closure_12(flag(first[10]).View, obj3);
  obj8.children = items7;
  return closure_12(closure_13, obj8);
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = UserStore.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    let userTag = null;
    if (!isProvisional) {
      userTag = UserUtilsDefault.getUserTag(user);
    }
    return userTag;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp4 = closure_11(channel(4556).Text, obj);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp4 = closure_11(channel(4556).Text, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ChannelDetailsConstants = fn(10916);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = ChannelDetailsConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1115);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
const EMPTY_STYLE = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData2 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
const __initData3 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default noop.memo(function ChannelDetailsTopic(initialExpanded) {
  ({ channel, textAlign } = initialExpanded);
  if (textAlign === undefined) {
    textAlign = "center";
  }
  let flag = initialExpanded.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  if (channel.isDM()) {
    let obj = { channel, textAlign };
    let tmp3 = closure_1_11(PrivateChannelDetailsTopic, obj);
  } else if (channel.isGroupDM()) {
    obj = { channel, textAlign };
    tmp3 = closure_1_11(GroupDMChannelDetailsTopic, obj);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
    }
    if (tmp2) {
      obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = closure_1_11(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj1 = { style: initialExpanded.containerStyle, children: tmp3 };
    tmp10 = closure_1_11(hasOwnProperty, obj1);
  }
  return tmp10;
});