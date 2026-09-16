// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import MarkupUtilsDefault from "../../../../markup/MarkupUtils.tsx";
import ChannelUtils from "../../../../../utils/ChannelUtils.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  const tmp = closure_15();
  const channelTopicGradientBackground = channel(first[9]).useChannelTopicGradientBackground();
  [first, _slicedToArray] = first1.useState(true);
  [first1, closure_5] = first1.useState(flag);
  let obj = channel(first[9]);
  const sharedValue = channel(first[10]).useSharedValue(undefined);
  let obj2 = channel(first[10]);
  const sharedValue1 = channel(first[10]).useSharedValue(undefined);
  const obj3 = channel(first[10]);
  const sharedValue2 = channel(first[10]).useSharedValue(constants.HIDDEN);
  const obj4 = channel(first[10]);
  const fn = function _() {
    value = sharedValue1.get();
    value2 = sharedValue.get();
    if (null != value2) {
      if (null != value) {
        if (first1) {
          value2 = value;
        }
        let obj2 = { height: spring.withSpring(value2, SPRING_CHANNEL_DETAILS) };
      }
      return obj2;
    }
    obj2 = closure_16;
  };
  const obj5 = channel(first[10]);
  let expanded = EMPTY_STYLE;
  fn.__closure = {
    expandedHeight: sharedValue1,
    truncatedHeight: sharedValue,
    EMPTY_STYLE,
    withSpring: channel(first[11]).withSpring,
    expanded: first1,
    SPRING_CHANNEL_DETAILS,
  };
  fn.__workletHash = 11932535786068;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = {
    expandedHeight: sharedValue1,
    truncatedHeight: sharedValue,
    EMPTY_STYLE,
    withSpring: channel(first[11]).withSpring,
    expanded: first1,
    SPRING_CHANNEL_DETAILS,
  };
  class N {
    constructor() {
      obj = closure_7;
      if (null == closure_7.get()) {
        obj1 = closure_16;
      } else {
        obj1 = { height: null };
        obj1.height = obj.get();
      }
      return obj1;
    }
  }
  N.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  N.__workletHash = 13643982891313;
  N.__initData = __initData2;
  const animatedStyle1 = channel(first[10]).useAnimatedStyle(N);
  const obj7 = channel(first[10]);
  class L {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[11]);
      obj.opacity = obj2.withSpring(closure_8.get(), SPRING_CHANNEL_DETAILS);
      return obj;
    }
  }
  const obj8 = channel(first[10]);
  L.__closure = { withSpring: channel(first[11]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  L.__workletHash = 12423301233362;
  L.__initData = __initData3;
  const items = [sharedValue2, first1];
  const animatedStyle2 = obj8.useAnimatedStyle(L);
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
  const callback1 = first1.useCallback(
    (nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height),
    items1,
  );
  const memo = first1.useMemo(
    () =>
      first
        ? () => {
            closure_1_5(!first1);
            const result = sharedValue2.set(first1 ? constants.VISIBLE : constants.HIDDEN);
          }
        : undefined,
    items2,
  );
  const items3 = [sharedValue];
  const items4 = [,];
  ({ id: arr5[0], topic: arr5[1] } = channel);
  const callback2 = first1.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items3);
  let memo1 = first1.useMemo(() => {
    const obj = MarkupUtilsDefault;
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, {
      channelId: channel.id,
      shouldNavigateBack: true,
      mentionPillOffsetY: num,
    });
  }, items4);
  const items5 = [,];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(
    () =>
      MarkupUtilsDefault.parseTopic(channel.topic, true, {
        channelId: channel.id,
        shouldNavigateBack: true,
        mentionPillOffsetY: num,
      }),
    items5,
  );
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
  const obj10 = {
    style: tmp.hidden,
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    children: closure_11(channel(first[14]).Text, {
      variant: "heading-sm/normal",
      style: tmp.topicText,
      onTextLayout: callback,
      onLayout: callback1,
      children: memo2,
    }),
  };
  const items7 = [closure_11(closure_5, obj10)];
  const obj12 = { style: null, children: null };
  const items8 = [tmp.topic, animatedStyle];
  obj12.style = items8;
  const obj13 = { style: animatedStyle1, children: null };
  const obj14 = { onPress: memo, activeOpacity: 0.7, children: null };
  const obj15 = { pointerEvents: str, children: null };
  const obj16 = {
    color: "interactive-text-default",
    variant: "heading-sm/normal",
    onLayout: callback2,
    lineClamp: null,
    style: null,
    children: null,
  };
  let tmp27;
  if (!first1) {
    tmp27 = sharedValue2;
  }
  obj16.lineClamp = tmp27;
  const items9 = [tmp.topicText, ,];
  if (first1) {
    expanded = tmp.expanded;
  }
  items9[1] = expanded;
  items9[2] = { textAlign: channel.textAlign };
  obj16.style = items9;
  if (first1) {
    memo1 = memo2;
  }
  const obj17 = { children: null };
  obj16.children = memo1;
  obj15.children = closure_11(channel(first[14]).Text, obj16);
  obj14.children = closure_11(closure_5, obj15);
  obj13.children = closure_11(PressableOpacity, obj14);
  const items10 = [closure_11(flag(first[10]).View, obj13)];
  const obj18 = {
    style: null,
    pointerEvents: "none",
    children: closure_11(flag(first[15]), {
      style: tmp.gradient,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
      colors: channelTopicGradientBackground,
    }),
  };
  const items11 = [sharedValue.absoluteFill, animatedStyle2];
  obj18.style = items11;
  items10[1] = closure_11(flag(first[10]).View, obj18);
  obj12.children = items10;
  items7[1] = closure_12(flag(first[10]).View, obj12);
  obj17.children = items7;
  return closure_12(closure_13, obj17);
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  const items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
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
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    const obj3 = { textAlign: channel.textAlign };
    obj2.style = obj3;
    obj2.children = stateFromStores;
    tmp4 = closure_11(channel(4634).Text, obj2);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  const items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () =>
    ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore),
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    const obj3 = { textAlign: channel.textAlign };
    obj2.style = obj3;
    obj2.children = stateFromStores;
    tmp4 = closure_11(channel(4634).Text, obj2);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ChannelDetailsConstants = fn(11065);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = ChannelDetailsConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1364);
const createStyles = fn(4638);
let closure_15 = createStyles.createStyles({
  hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 },
  topic: { overflow: "hidden" },
  gradient: { flex: 1, flexGrow: 1 },
  expanded: { textAlign: "center" },
  topicText: { paddingVertical: 5 },
});
const EMPTY_STYLE = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = {
  code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}",
};
const __initData2 = {
  code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}",
};
const __initData3 = {
  code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}",
};
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
    const obj2 = { channel, textAlign };
    let tmp3 = closure_1_11(PrivateChannelDetailsTopic, obj2);
  } else if (channel.isGroupDM()) {
    const obj3 = { channel, textAlign };
    tmp3 = closure_1_11(GroupDMChannelDetailsTopic, obj3);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
    }
    if (tmp2) {
      const obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = closure_1_11(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj4 = { style: initialExpanded.containerStyle, children: tmp3 };
    tmp10 = closure_1_11(hasOwnProperty, obj4);
  }
  return tmp10;
});
