// === Module 17442: ChannelDetailsTopic ===

// Module 17442 (ChannelDetailsTopic)
import c from "c" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5079 */;
import spring from "spring" /* 5378 */;
import ChannelUtils from "ChannelUtils" /* 5414 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ChannelDetailsConstants = fn(9629);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = ChannelDetailsConstants);
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1382);
const createStyles = fn(5092);
let closure_15 = createStyles.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
const EMPTY_STYLE = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null){return EMPTY_STYLE;}return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData2 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null){return EMPTY_STYLE;}return{height:expandedHeight.get()};}" };
const __initData3 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
const __initData4 = { code: "function ChannelDetailsTopicTsx4(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData5 = { code: "function ChannelDetailsTopicTsx5(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
const __initData6 = { code: "function ChannelDetailsTopicTsx6(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelDetailsTopic(arg0) {
  const cResult = require("c").c(72);
  ({ channel, textAlign, initialExpanded } = arg0);
  _require = tmp4;
  closure_15();
  let obj = require("c");
  const channelTopicGradientBackground = require("ChannelDetailsTopicGradient").useChannelTopicGradientBackground();
  const tmpResult = require("ChannelDetailsTopicGradient");
  [tmp8, importDefault] = sharedValue.useState(true);
  [expanded, _slicedToArray] = sharedValue.useState(undefined !== initialExpanded && initialExpanded);
  const tmp7 = _slicedToArray(sharedValue.useState(true), 2);
  sharedValue = require("ReanimatedRexport").useSharedValue(undefined);
  const tmpResult7 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(undefined);
  const tmpResult8 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(constants.HIDDEN);
  const tmpResult9 = require("ReanimatedRexport");
  const fn = function c() {
    value = sharedValue1.get();
    value2 = sharedValue.get();
    if (null != value2) {
      if (null != value) {
        if (first) {
          value2 = value;
        }
        let obj2 = { height: spring.withSpring(value2, SPRING_CHANNEL_DETAILS) };
      }
      return obj2;
    }
    obj2 = closure_16;
  };
  const tmpResult10 = require("ReanimatedRexport");
  fn.__closure = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: require("spring").withSpring, expanded, SPRING_CHANNEL_DETAILS };
  fn.__workletHash = 2622348302162;
  fn.__initData = __initData;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  let obj2 = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: require("spring").withSpring, expanded, SPRING_CHANNEL_DETAILS };
  const fn2 = function s() {
    if (null == sharedValue1.get()) {
      let obj2 = closure_16;
    } else {
      obj2 = { height: sharedValue1.get() };
    }
    return obj2;
  };
  fn2.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  fn2.__workletHash = 5103010682807;
  fn2.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(fn2);
  const tmpResult11 = require("ReanimatedRexport");
  const fn3 = function _() {
    const obj = { opacity: spring.withSpring(sharedValue2.get(), SPRING_CHANNEL_DETAILS) };
    return obj;
  };
  const tmpResult12 = require("ReanimatedRexport");
  fn3.__closure = { withSpring: require("spring").withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  fn3.__workletHash = 12423301233362;
  fn3.__initData = __initData3;
  const animatedStyle2 = tmpResult12.useAnimatedStyle(fn3);
  if (cResult[0] === expanded) {
    if (cResult[3] !== sharedValue1) {
      class K {
        constructor(arg0) {
          return closure_5.set(arg0.nativeEvent.layout.height);
        }
      }
      cResult[3] = sharedValue1;
      cResult[4] = K;
    } else {
      class K {
        constructor(arg0) {
          return closure_5.set(arg0.nativeEvent.layout.height);
        }
      }
    }
    if (!tmp8) {
      class K {
        constructor(arg0) {
          return closure_5.set(arg0.nativeEvent.layout.height);
        }
      }
      if (cResult[10] === channel.id) {
        class K {
          constructor(arg0) {
            return closure_5.set(arg0.nativeEvent.layout.height);
          }
        }
        if (cResult[13] === channel.id) {
          class K {
            constructor(arg0) {
              return closure_5.set(arg0.nativeEvent.layout.height);
            }
          }
          if (cResult[16] === sharedValue1) {
            class K {
              constructor(arg0) {
                return closure_5.set(arg0.nativeEvent.layout.height);
              }
            }
          }
          function re() {
            const result = sharedValue.set(undefined);
            const result1 = sharedValue1.set(undefined);
            closure_3(closure_0);
          }
          cResult[16] = sharedValue1;
          cResult[17] = tmp4;
          cResult[18] = sharedValue;
          cResult[19] = re;
        }
        const obj4 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
        const parseTopicResult = require("MarkupUtils").parseTopic(channel.topic, true, obj4);
        cResult[13] = channel.id;
        cResult[14] = channel.topic;
        cResult[15] = parseTopicResult;
        const obj13 = require("MarkupUtils");
      }
      const _HermesInternal = HermesInternal;
      const obj11 = require("MarkupUtils");
      const obj5 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
      const parseTopicResult1 = obj11.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj5);
      cResult[10] = channel.id;
      cResult[11] = channel.topic;
      cResult[12] = parseTopicResult1;
      const str2 = "" + channel.topic;
    } else {
      class K {
        constructor(arg0) {
          return closure_5.set(arg0.nativeEvent.layout.height);
        }
      }
      class X {
        constructor() {
          tmp = closure_3(!closure_2);
          tmp2 = closure_17;
          result = closure_6.set(closure_2 ? tmp2.VISIBLE : tmp2.HIDDEN);
          return;
        }
      }
      cResult[5] = expanded;
      cResult[6] = sharedValue2;
      cResult[7] = X;
    }
  }
  const fn4 = function f(nativeEvent) {
    importDefault(nativeEvent.nativeEvent.lines.length > closure_2_8);
    if (nativeEvent.nativeEvent.lines.length > closure_2_8) {
      if (!first) {
        let HIDDEN = constants.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = constants.HIDDEN;
  };
  cResult[0] = expanded;
  cResult[1] = sharedValue2;
  cResult[2] = fn4;
  const obj3 = { withSpring: require("spring").withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
}) : (function GuildChannelDetailsTopic(channel) {
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
  const channelTopicGradientBackground = channel(first[11]).useChannelTopicGradientBackground();
  [first, _slicedToArray] = first1.useState(true);
  [first1, closure_5] = first1.useState(flag);
  let obj = channel(first[11]);
  const sharedValue = channel(first[12]).useSharedValue(undefined);
  let obj2 = channel(first[12]);
  const sharedValue1 = channel(first[12]).useSharedValue(undefined);
  const obj3 = channel(first[12]);
  const sharedValue2 = channel(first[12]).useSharedValue(constants.HIDDEN);
  const obj4 = channel(first[12]);
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
  const obj5 = channel(first[12]);
  let expanded = EMPTY_STYLE;
  fn.__closure = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS };
  fn.__workletHash = 518436856881;
  fn.__initData = __initData4;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS };
  class D {
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
  D.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  D.__workletHash = 16721769117590;
  D.__initData = __initData5;
  const animatedStyle1 = channel(first[12]).useAnimatedStyle(D);
  const obj7 = channel(first[12]);
  const fn2 = function y() {
    const obj = { opacity: spring.withSpring(sharedValue2.get(), SPRING_CHANNEL_DETAILS) };
    return obj;
  };
  const obj8 = channel(first[12]);
  fn2.__closure = { withSpring: channel(first[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  fn2.__workletHash = 16158058985911;
  fn2.__initData = __initData6;
  const items = [sharedValue2, first1];
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  const items1 = [sharedValue1];
  const callback = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > closure_2_8);
    if (nativeEvent.nativeEvent.lines.length > closure_2_8) {
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
    const obj = MarkupUtilsDefault;
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num });
  }, items4);
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(() => MarkupUtilsDefault.parseTopic(channel.topic, true, { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num }), items5);
  const items6 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = first1.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    closure_5(flag);
  }, items6);
  if (null == memo) {
    let PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[15]).PressableOpacity;
  }
  const obj10 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(channel(first[16]).Text, { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo2 }) };
  const items7 = [closure_11(closure_5, obj10), ];
  const obj12 = { style: null, children: null };
  const items8 = [tmp.topic, animatedStyle];
  obj12.style = items8;
  const obj13 = { style: animatedStyle1, children: null };
  const obj14 = { onPress: memo, activeOpacity: 0.7, children: null };
  const obj15 = { pointerEvents: str, children: null };
  const obj16 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2, lineClamp: null, style: null, children: null };
  let tmp27;
  if (!first1) {
    tmp27 = sharedValue2;
  }
  obj16.lineClamp = tmp27;
  const items9 = [tmp.topicText, , ];
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
  obj15.children = closure_11(channel(first[16]).Text, obj16);
  obj14.children = closure_11(closure_5, obj15);
  obj13.children = closure_11(PressableOpacity, obj14);
  const items10 = [closure_11(flag(first[12]).View, obj13), ];
  const obj18 = { style: null, pointerEvents: "none", children: closure_11(flag(first[17]), { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: channelTopicGradientBackground }) };
  const items11 = [sharedValue.absoluteFill, animatedStyle2];
  obj18.style = items11;
  items10[1] = closure_11(flag(first[12]).View, obj18);
  obj12.children = items10;
  items7[1] = closure_12(flag(first[12]).View, obj12);
  obj17.children = items7;
  return closure_12(closure_13, obj17);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrivateChannelDetailsTopic(channel) {
  let Text = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(8);
  channel = channel.channel;
  const textAlign = channel.textAlign;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function n() {
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
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStores = Text(504).useStateFromStores(first, tmp5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] !== textAlign) {
      const obj2 = { textAlign };
      cResult[3] = textAlign;
      cResult[4] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp7) {
    }
    Text = Text(5088).Text;
    const obj3 = { variant: "heading-sm/normal", color: "interactive-text-default", style: tmp7, children: stateFromStores };
    tmp = closure_11(Text, obj3);
    cResult[5] = tmp7;
    cResult[6] = stateFromStores;
    cResult[7] = tmp;
  }
  const TextResult = Text(504);
}) : (function PrivateChannelDetailsTopic(channel) {
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
    tmp4 = closure_11(channel(5088).Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMChannelDetailsTopic(channel) {
  let Text = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(8);
  channel = channel.channel;
  const textAlign = channel.textAlign;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.recipients) {
    const fn = function n() {
      return ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore);
    };
    cResult[1] = channel.recipients;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = Text(504).useStateFromStores(first, tmp5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] !== textAlign) {
      const obj2 = { textAlign };
      cResult[3] = textAlign;
      cResult[4] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp7) {
    }
    Text = Text(5088).Text;
    const obj3 = { variant: "heading-sm/normal", color: "interactive-text-default", style: tmp7, children: stateFromStores };
    tmp = closure_11(Text, obj3);
    cResult[5] = tmp7;
    cResult[6] = stateFromStores;
    cResult[7] = tmp;
  }
  const TextResult = Text(504);
}) : (function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  const items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: null, children: null };
    const obj3 = { textAlign: channel.textAlign };
    obj2.style = obj3;
    obj2.children = stateFromStores;
    tmp4 = closure_11(channel(5088).Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelDetailsTopic(arg0) {
  const cResult = c.c(13);
  ({ channel, containerStyle, textAlign, initialExpanded } = arg0);
  let str = "center";
  if (undefined !== textAlign) {
    str = textAlign;
  }
  if (channel.isDM()) {
    if (cResult[0] === channel) {
    }
    const obj2 = { channel, textAlign: str };
    const tmp17 = closure_1_11(closure_25, obj2);
    cResult[0] = channel;
    cResult[1] = str;
    cResult[2] = tmp17;
  } else {
    if (channel.isGroupDM()) {
      if (cResult[3] === channel) {
        if (cResult[4] === str) {
          let tmp10 = cResult[5];
        }
        let tmp5 = tmp10;
      }
      const obj3 = { channel, textAlign: str };
      const tmp13 = closure_1_11(closure_26, obj3);
      cResult[3] = channel;
      cResult[4] = str;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      let tmp4 = null != channel.topic;
      if (tmp4) {
        tmp4 = "" !== channel.topic.trim();
      }
      if (tmp4) {
        if (cResult[6] === channel) {
          if (cResult[7] === tmp2) {
            if (cResult[8] === str) {
              let tmp6 = cResult[9];
            }
            tmp5 = tmp6;
          }
        }
        const obj4 = { channel, textAlign: str, initialExpanded: tmp2 };
        const tmp9 = closure_1_11(closure_24, obj4);
        cResult[6] = channel;
        cResult[7] = tmp2;
        cResult[8] = str;
        cResult[9] = tmp9;
        tmp6 = tmp9;
      }
    }
    if (null == tmp5) {
      return null;
    } else {
      if (cResult[10] === containerStyle) {
      }
      const obj5 = { style: containerStyle, children: tmp5 };
      const tmp23 = closure_1_11(hasOwnProperty, obj5);
      cResult[10] = containerStyle;
      cResult[11] = tmp5;
      cResult[12] = tmp23;
    }
  }
}) : (function ChannelDetailsTopic(initialExpanded) {
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
    let tmp3 = closure_1_11(closure_25, obj2);
  } else if (channel.isGroupDM()) {
    const obj3 = { channel, textAlign };
    tmp3 = closure_1_11(closure_26, obj3);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
    }
    if (tmp2) {
      const obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = closure_1_11(closure_24, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj4 = { style: initialExpanded.containerStyle, children: tmp3 };
    tmp10 = closure_1_11(hasOwnProperty, obj4);
  }
  return tmp10;
}));