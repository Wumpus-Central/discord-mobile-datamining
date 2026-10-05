// === Module 16913: ChannelDetailsTopic ===

// Module 16913 (ChannelDetailsTopic)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import spring from "spring" /* 5597 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10653 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ CHANNEL_TOPIC_LINE_CLAMP: metroImportAll, SPRING_CHANNEL_DETAILS: c9 } = ChannelDetailsConstants);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
let closure_15 = createStyles.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
const EMPTY_STYLE = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null){return EMPTY_STYLE;}return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData2 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null){return EMPTY_STYLE;}return{height:expandedHeight.get()};}" };
const __initData3 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
const __initData4 = { code: "function ChannelDetailsTopicTsx4(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData5 = { code: "function ChannelDetailsTopicTsx5(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
const __initData6 = { code: "function ChannelDetailsTopicTsx6(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let closure_0;
  let closure_3;
  let expanded;
  let initialExpanded;
  let sharedValue;
  let textAlign;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(72);
  ({ channel, textAlign, initialExpanded } = arg0);
  const tmp4 = undefined !== initialExpanded && initialExpanded;
  _require = tmp4;
  const tmp5 = closure_15();
  const tmpResult = require("ChannelDetailsTopicGradient");
  const channelTopicGradientBackground = tmpResult.useChannelTopicGradientBackground();
  [tmp8, importDefault] = sharedValue.useState(true);
  _slicedToArray(sharedValue.useState(true), 2);
  [expanded, _slicedToArray] = sharedValue.useState(tmp4);
  const tmpResult7 = require("ReanimatedRexport");
  sharedValue = tmpResult7.useSharedValue(undefined);
  const tmpResult8 = require("ReanimatedRexport");
  const sharedValue1 = tmpResult8.useSharedValue(undefined);
  const tmpResult9 = require("ReanimatedRexport");
  const sharedValue2 = tmpResult9.useSharedValue(constants.HIDDEN);
  const fn = function c() {
    const value = sharedValue1.get();
    let value2 = sharedValue.get();
    if (null != value2) {
      let obj;
      if (null != value) {
        const withSpring = spring.withSpring;
        spring;
        if (first) {
          value2 = value;
        }
        obj = { height: withSpring(value2, c9) };
      }
      return obj;
    }
    obj = EMPTY_STYLE;
  };
  const tmpResult10 = require("ReanimatedRexport");
  let obj2 = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: tmp(tmp2[13]).withSpring, expanded, SPRING_CHANNEL_DETAILS };
  fn.__closure = obj2;
  fn.__workletHash = 2622348302162;
  fn.__initData = __initData;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const fn2 = function s() {
    let obj2;
    if (null == sharedValue1.get()) {
      obj2 = EMPTY_STYLE;
    } else {
      obj2 = { height: sharedValue1.get() };
    }
    return obj2;
  };
  fn2.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  fn2.__workletHash = 5103010682807;
  fn2.__initData = __initData2;
  const tmpResult11 = require("ReanimatedRexport");
  const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
  const fn3 = function _() {
    let obj2;
    const obj = { opacity: obj2.withSpring(sharedValue2.get(), c9) };
    obj2 = spring;
    return obj;
  };
  const tmpResult12 = require("ReanimatedRexport");
  fn3.__closure = { withSpring: require("spring").withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  fn3.__workletHash = 12423301233362;
  fn3.__initData = __initData3;
  ({ withSpring: require("spring").withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS });
  const animatedStyle2 = tmpResult12.useAnimatedStyle(fn3);
  if (cResult[0] === expanded) {
    if (cResult[3] !== sharedValue1) {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
      cResult[3] = sharedValue1;
      cResult[4] = K;
    } else {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (tmp8) {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
      class X {
        constructor() {
          closure_3(!first);
          const result = sharedValue2.set(first ? constants.VISIBLE : constants.HIDDEN);
        }
      }
      cResult[5] = expanded;
      cResult[6] = sharedValue2;
      cResult[7] = X;
    }
    if (cResult[8] !== sharedValue) {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
      class X {
        constructor() {
          closure_3(!first);
          const result = sharedValue2.set(first ? constants.VISIBLE : constants.HIDDEN);
        }
      }
      cResult[8] = sharedValue;
      cResult[9] = tmp21;
    } else {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (cResult[10] === channel.id) {
      class K {
        constructor(nativeEvent) {
          return sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        }
      }
      class X {
        constructor() {
          closure_3(!first);
          const result = sharedValue2.set(first ? constants.VISIBLE : constants.HIDDEN);
        }
      }
      const obj4 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
      const obj12 = require("MarkupUtils");
      cResult[13] = channel.id;
      cResult[14] = channel.topic;
      cResult[15] = obj12.parseTopic(channel.topic, true, obj4);
      const parseTopicResult = obj12.parseTopic(channel.topic, true, obj4);
    }
    const _HermesInternal = HermesInternal;
    const parseTopic = require("MarkupUtils").parseTopic;
    require("MarkupUtils");
    const obj5 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    const str2 = "" + channel.topic;
    cResult[10] = channel.id;
    cResult[11] = channel.topic;
    cResult[12] = parseTopic(str2.replace(/(\r\n|\n|\r)/gm, " "), true, obj5);
    const parseTopicResult1 = parseTopic(str2.replace(/(\r\n|\n|\r)/gm, " "), true, obj5);
  }
  class I {
    constructor(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.lines.length > metroImportAll);
      if (nativeEvent.nativeEvent.lines.length > metroImportAll) {
        let HIDDEN;
        if (!first) {
          HIDDEN = constants.VISIBLE;
        }
        tmp4(HIDDEN);
      }
      HIDDEN = constants.HIDDEN;
    }
  }
  cResult[0] = expanded;
  cResult[1] = sharedValue2;
  cResult[2] = I;
}) : ((channel) => {
  let PressableOpacity;
  let Text;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let items10;
  let items11;
  let items8;
  let items9;
  let obj11;
  let obj14;
  let obj15;
  let obj16;
  let obj19;
  let str;
  let tmp25;
  let tmp27;
  channel = channel.channel;
  let flag = channel.initialExpanded;
  const textAlign = channel.textAlign;
  if (flag === undefined) {
    flag = false;
  }
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  const tmp = closure_15();
  let obj = channel(first[11]);
  const channelTopicGradientBackground = obj.useChannelTopicGradientBackground();
  [first, _slicedToArray] = first1.useState(true);
  [first1, closure_5] = first1.useState(flag);
  let obj2 = channel(first[12]);
  const sharedValue = obj2.useSharedValue(undefined);
  const obj3 = channel(first[12]);
  const sharedValue1 = obj3.useSharedValue(undefined);
  const obj4 = channel(first[12]);
  const sharedValue2 = obj4.useSharedValue(constants.HIDDEN);
  const fn = function _() {
    const value = sharedValue1.get();
    let value2 = sharedValue.get();
    if (null != value2) {
      let obj;
      if (null != value) {
        const withSpring = spring.withSpring;
        spring;
        if (first1) {
          value2 = value;
        }
        obj = { height: withSpring(value2, c9) };
      }
      return obj;
    }
    obj = EMPTY_STYLE;
  };
  let expanded = EMPTY_STYLE;
  const obj5 = channel(first[12]);
  fn.__closure = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS };
  fn.__workletHash = 518436856881;
  fn.__initData = __initData4;
  ({ expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const fn2 = function y() {
    let obj2;
    if (null == sharedValue1.get()) {
      obj2 = EMPTY_STYLE;
    } else {
      obj2 = { height: sharedValue1.get() };
    }
    return obj2;
  };
  fn2.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  fn2.__workletHash = 16721769117590;
  fn2.__initData = __initData5;
  const obj7 = channel(first[12]);
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const obj8 = channel(first[12]);
  class N {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withSpring(sharedValue2.get(), c9) };
      obj2 = spring;
      return obj;
    }
  }
  N.__closure = { withSpring: channel(first[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  N.__workletHash = 16158058985911;
  N.__initData = __initData6;
  const items = [sharedValue2, first1];
  ({ withSpring: channel(first[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS });
  const animatedStyle2 = obj8.useAnimatedStyle(N);
  const items1 = [sharedValue1];
  const callback = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > metroImportAll);
    if (nativeEvent.nativeEvent.lines.length > metroImportAll) {
      let HIDDEN;
      if (!first1) {
        HIDDEN = constants.VISIBLE;
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
    const parseTopic = MarkupUtilsDefault.parseTopic;
    MarkupUtilsDefault;
    const obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    const str = "" + channel.topic;
    return parseTopic(str.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items4);
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(() => {
    const obj = MarkupUtilsDefault;
    const obj2 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    return obj.parseTopic(channel.topic, true, obj2);
  }, items5);
  const items6 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = first1.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    closure_5(flag);
  }, items6);
  if (null == memo) {
    PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[15]).PressableOpacity;
  }
  const obj10 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(channel(first[16]).Text, obj11) };
  obj11 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo2 };
  const items7 = [closure_11(closure_5, obj10), ];
  const obj12 = { style: items8, children: items10 };
  items8 = [tmp.topic, animatedStyle];
  const View = flag(tmp3[12]).View;
  const obj13 = { style: animatedStyle1, children: closure_11(PressableOpacity, obj14) };
  obj14 = { onPress: memo, activeOpacity: 0.7, children: closure_11(tmp25, obj15) };
  const View2 = flag(tmp3[12]).View;
  tmp25 = closure_5;
  if (!first1) {
    str = "none";
  }
  obj15 = { pointerEvents: str, children: closure_11(Text, obj16) };
  obj16 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2, lineClamp: tmp27, style: items9, children: memo1 };
  tmp27 = undefined;
  Text = tmp2(tmp3[16]).Text;
  if (!first1) {
    tmp27 = sharedValue2;
  }
  items9 = [tmp.topicText, , ];
  if (first1) {
    expanded = tmp.expanded;
  }
  items9[1] = expanded;
  items9[2] = { textAlign };
  if (first1) {
    memo1 = memo2;
  }
  const obj17 = { children: items7 };
  items10 = [closure_11(View2, obj13), ];
  const obj18 = { style: items11, pointerEvents: "none", children: closure_11(flag(first[17]), obj19) };
  items11 = [sharedValue.absoluteFill, animatedStyle2];
  const View3 = tmp26(tmp3[12]).View;
  obj19 = { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: channelTopicGradientBackground };
  items10[1] = closure_11(View3, obj18);
  items7[1] = closure_12(View, obj12);
  return closure_12(closure_13, obj17);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp6;
  let obj = channel(576);
  const cResult = obj.c(8);
  channel = channel.channel;
  const textAlign = channel.textAlign;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
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
        const obj = UserUtilsDefault;
        userTag = obj.getUserTag(user);
      }
      return userTag;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[3] !== textAlign) {
      const obj2 = { textAlign };
      cResult[3] = textAlign;
      cResult[4] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp9) {
      let tmp10;
      if (cResult[6] === stateFromStores) {
        tmp10 = cResult[7];
      }
      tmp8 = tmp10;
    }
    const obj3 = { variant: "heading-sm/normal", color: "interactive-text-default", style: tmp9, children: stateFromStores };
    const tmp12 = closure_11(channel(4886).Text, obj3);
    cResult[5] = tmp9;
    cResult[6] = stateFromStores;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  return tmp8;
}) : ((channel) => {
  let obj3;
  channel = channel.channel;
  const textAlign = channel.textAlign;
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
      const obj = UserUtilsDefault;
      userTag = obj.getUserTag(user);
    }
    return userTag;
  });
  let tmp4 = null;
  const tmp = channel;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(4886).Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp6;
  let obj = channel(576);
  const cResult = obj.c(8);
  channel = channel.channel;
  const textAlign = channel.textAlign;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.recipients) {
    const fn = function n() {
      const obj = ChannelUtils;
      return obj.getPrivateChannelUserTagsString(channel.recipients, UserStore);
    };
    cResult[1] = channel.recipients;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[3] !== textAlign) {
      const obj2 = { textAlign };
      cResult[3] = textAlign;
      cResult[4] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp9) {
      let tmp10;
      if (cResult[6] === stateFromStores) {
        tmp10 = cResult[7];
      }
      tmp8 = tmp10;
    }
    const obj3 = { variant: "heading-sm/normal", color: "interactive-text-default", style: tmp9, children: stateFromStores };
    const tmp12 = closure_11(channel(4886).Text, obj3);
    cResult[5] = tmp9;
    cResult[6] = stateFromStores;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  return tmp8;
}) : ((channel) => {
  let obj3;
  channel = channel.channel;
  const textAlign = channel.textAlign;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = ChannelUtils;
    return obj.getPrivateChannelUserTagsString(channel.recipients, UserStore);
  });
  let tmp4 = null;
  const tmp = channel;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(4886).Text, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let containerStyle;
  let initialExpanded;
  let textAlign;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  ({ channel, containerStyle, textAlign, initialExpanded } = arg0);
  let str = "center";
  if (undefined !== textAlign) {
    str = textAlign;
  }
  if (channel.isDM()) {
    if (cResult[0] === channel) {
      let tmp14;
      if (cResult[1] === str) {
        tmp14 = cResult[2];
      }
      tmp5 = tmp14;
    }
    const obj2 = { channel, textAlign: str };
    const tmp17 = unpackModuleId(closure_25, obj2);
    cResult[0] = channel;
    cResult[1] = str;
    cResult[2] = tmp17;
    tmp14 = tmp17;
  } else if (channel.isGroupDM()) {
    if (cResult[3] === channel) {
      let tmp10;
      if (cResult[4] === str) {
        tmp10 = cResult[5];
      }
      tmp5 = tmp10;
    }
    const obj3 = { channel, textAlign: str };
    const tmp13 = unpackModuleId(closure_26, obj3);
    cResult[3] = channel;
    cResult[4] = str;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  } else {
    let tmp4 = null != channel.topic;
    if (tmp4) {
      const str2 = channel.topic;
      tmp4 = "" !== str2.trim();
    }
    if (tmp4) {
      if (cResult[6] === channel) {
        if (cResult[7] === (undefined !== initialExpanded && initialExpanded)) {
          let tmp6;
          if (cResult[8] === str) {
            tmp6 = cResult[9];
          }
          tmp5 = tmp6;
        }
      }
      const obj4 = { channel, textAlign: str, initialExpanded: undefined !== initialExpanded && initialExpanded };
      const tmp9 = unpackModuleId(closure_24, obj4);
      cResult[6] = channel;
      cResult[7] = undefined !== initialExpanded && initialExpanded;
      cResult[8] = str;
      cResult[9] = tmp9;
      tmp6 = tmp9;
    }
  }
  let tmp18 = null;
  if (null != tmp5) {
    if (cResult[10] === containerStyle) {
      let tmp19;
      if (cResult[11] === tmp5) {
        tmp19 = cResult[12];
      }
      tmp18 = tmp19;
    }
    const obj5 = { style: containerStyle, children: tmp5 };
    const tmp22 = unpackModuleId(hasOwnProperty, obj5);
    cResult[10] = containerStyle;
    cResult[11] = tmp5;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  return tmp18;
}) : ((containerStyle) => {
  let channel;
  let textAlign;
  let tmp3;
  ({ channel, textAlign } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  if (textAlign === undefined) {
    textAlign = "center";
  }
  let flag = containerStyle.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  if (channel.isDM()) {
    const obj2 = { channel, textAlign };
    tmp3 = unpackModuleId(closure_25, obj2);
  } else if (channel.isGroupDM()) {
    const obj3 = { channel, textAlign };
    tmp3 = unpackModuleId(closure_26, obj3);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      const str = channel.topic;
      tmp2 = "" !== str.trim();
    }
    if (tmp2) {
      const obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = unpackModuleId(closure_24, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj4 = { style: containerStyle, children: tmp3 };
    tmp10 = unpackModuleId(hasOwnProperty, obj4);
  }
  return tmp10;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default memoResult;