// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../../stores/UserStore.tsx";
import ChannelDetailsNavigatorScreens from "ChannelDetailsConstants.tsx";
import { VerticalGradient } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../../utils/PlatformUtils.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  let callback;
  let first1;
  closure_5 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback3();
  let obj = channel(first[9]);
  const channelTopicGradientBackground = obj.useChannelTopicGradientBackground();
  const tmp5 = callback(first1.useState(true), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState(flag), 2);
  first1 = tmp7[0];
  closure_5 = tmp7[1];
  obj1 = channel(first[10]);
  sharedValue = obj1.useSharedValue(undefined);
  let obj2 = channel(first[10]);
  sharedValue1 = obj2.useSharedValue(undefined);
  let obj3 = channel(first[10]);
  sharedValue2 = obj3.useSharedValue(constants.HIDDEN);
  let obj4 = channel(first[10]);
  const fn = function _() {
    let value = sharedValue1.get();
    value = sharedValue.get();
    if (null != value) {
      if (null != value) {
        let obj = channel(first[11]);
        obj = { height: null };
        obj[0] = obj.withSpring(value, closure_1_9);
      }
      return obj;
    }
    obj = closure_1_16;
  };
  obj = {
    expandedHeight: sharedValue1,
    truncatedHeight: sharedValue,
    EMPTY_STYLE: closure_16,
    withSpring: channel(first[11]).withSpring,
    expanded: first1,
    SPRING_CHANNEL_DETAILS: closure_9,
  };
  let expanded = closure_16;
  fn.__closure = obj;
  fn.__workletHash = 11932535786068;
  fn.__initData = closure_18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = channel(first[10]);
  class N {
    constructor() {
      obj = closure_7;
      if (null == closure_7.get()) {
        obj = closure_1_16;
      } else {
        obj = { height: null };
        obj[0] = obj.get();
      }
      return obj;
    }
  }
  N.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE: closure_16 };
  N.__workletHash = 13643982891313;
  N.__initData = closure_19;
  const animatedStyle1 = obj6.useAnimatedStyle(N);
  let obj7 = channel(first[10]);
  class L {
    constructor() {
      obj = { opacity: null };
      obj2 = channel(closure_2[11]);
      obj[0] = obj2.withSpring(closure_8.get(), closure_1_9);
      return obj;
    }
  }
  obj = { withSpring: channel(first[11]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS: closure_9 };
  L.__closure = obj;
  L.__workletHash = 12423301233362;
  L.__initData = closure_20;
  const items = [sharedValue2, first1];
  const animatedStyle2 = obj7.useAnimatedStyle(L);
  const items1 = [sharedValue1];
  callback = first1.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > sharedValue2);
    if (nativeEvent.nativeEvent.lines.length > sharedValue2) {
      if (!first1) {
        let HIDDEN = closure_1_17.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = closure_1_17.HIDDEN;
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
            callback(!closure_4);
            const result = closure_8.set(closure_4 ? tmp2.VISIBLE : tmp2.HIDDEN);
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
    let obj = flag(first[12]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: closure_1_14 };
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items4);
  const items5 = [,];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(() => {
    let obj = flag(first[12]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: closure_1_14 };
    return obj.parseTopic(channel.topic, true, obj);
  }, items5);
  const items6 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = first1.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    callback2(flag);
  }, items6);
  if (null == memo) {
    let PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[13]).PressableOpacity;
  }
  obj1 = {
    style: tmp.hidden,
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    children: callback2(tmp2(tmp3[14]).Text, obj2),
  };
  obj2 = {
    variant: "heading-sm/normal",
    style: tmp.topicText,
    onTextLayout: callback,
    onLayout: callback1,
    children: memo2,
  };
  const items7 = [callback2(closure_5, obj1)];
  obj3 = { style: items8, children: null };
  items8 = [tmp.topic, animatedStyle];
  obj4 = { style: animatedStyle1, children: null };
  const obj5 = { onPress: memo, activeOpacity: 0.7, children: null };
  obj6 = { pointerEvents: str, children: null };
  obj7 = {
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
  obj7[3] = tmp27;
  const items9 = [tmp.topicText, ,];
  if (first1) {
    expanded = tmp.expanded;
  }
  items9[1] = expanded;
  items9[2] = { textAlign: channel.textAlign };
  obj7[4] = items9;
  if (first1) {
    memo1 = memo2;
  }
  const obj8 = { children: null };
  obj7[5] = memo1;
  obj6[1] = callback2(channel(first[14]).Text, obj7);
  obj5[2] = callback2(closure_5, obj6);
  obj4[1] = callback2(PressableOpacity, obj5);
  const items10 = [callback2(flag(first[10]).View, obj4)];
  const items11 = [sharedValue.absoluteFill, animatedStyle2];
  items10[1] = callback2(flag(first[10]).View, {
    style: items11,
    pointerEvents: "none",
    children: callback2(flag(first[15]), obj10),
  });
  obj3[1] = items10;
  items7[1] = closure_12(flag(first[10]).View, obj3);
  obj8[0] = items7;
  return closure_12(closure_13, obj8);
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = closure_1_7.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    let userTag = null;
    if (!isProvisional) {
      userTag = closure_1_1(closure_1_2[17]).getUserTag(user);
      const obj = closure_1_1(closure_1_2[17]);
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
    tmp4 = callback2(channel(4474).Text, obj);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () =>
    channel(closure_1_2[18]).getPrivateChannelUserTagsString(channel.recipients, closure_1_7),
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    obj = { textAlign: null };
    obj[0] = channel.textAlign;
    obj[2] = obj;
    obj[3] = stateFromStores;
    tmp4 = callback2(channel(4474).Text, obj);
  }
  return tmp4;
}
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: c9 } = ChannelDetailsNavigatorScreens);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let num = 2;
if (set.isAndroid()) {
  num = 4;
}
let closure_15 = createCacheKey.createStyles({
  hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 },
  topic: { overflow: "hidden" },
  gradient: { flex: 1, flexGrow: 1 },
  expanded: { textAlign: "center" },
  topicText: { paddingVertical: 5 },
});
let closure_16 = {};
let closure_17 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_18 = {
  code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}",
};
let closure_19 = {
  code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}",
};
let closure_20 = {
  code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}",
};
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default importAllResult.memo(function ChannelDetailsTopic(initialExpanded) {
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
    let tmp3 = callback2(PrivateChannelDetailsTopic, obj);
  } else if (channel.isGroupDM()) {
    obj = { channel: null, textAlign: null };
    obj[0] = channel;
    obj[1] = textAlign;
    tmp3 = callback2(GroupDMChannelDetailsTopic, obj);
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
      tmp3 = callback2(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    obj1 = { style: null, children: null };
    obj1[0] = initialExpanded.containerStyle;
    obj1[1] = tmp3;
    tmp10 = callback2(closure_5, obj1);
  }
  return tmp10;
});
