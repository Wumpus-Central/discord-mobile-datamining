// === Module 19174: ChannelDetailsTopic ===

// Module 19174 (ChannelDetailsTopic)
import _modDef1652 from "module_1652" /* 1652 */;
import UserUtilsDefault from "UserUtils" /* 5194 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5879 */;
import ChannelUtils from "ChannelUtils" /* 6178 */;
import MentionPillOffset from "MentionPillOffset" /* 11185 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  _require = channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  _slicedToArray = undefined;
  noop = undefined;
  absoluteFill = undefined;
  const tmp = closure_14();
  const channelTopicGradientBackground = require("ChannelDetailsTopicGradient").useChannelTopicGradientBackground();
  [first, _slicedToArray] = noop.useState(true);
  [first1, c5] = noop.useState(flag);
  noop = first1;
  let obj = require("ChannelDetailsTopicGradient");
  [tmp10, c6] = noop.useState();
  const tmp9 = _slicedToArray(noop.useState(), 2);
  const sharedValue = require("module_1652").useSharedValue(undefined);
  const obj3 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(undefined);
  const obj4 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(constants.HIDDEN);
  const obj5 = require("module_1652");
  items = [closure_17, sharedValue1, sharedValue, , , , ];
  let expanded = closure_15;
  items[3] = closure_15;
  items[4] = require("spring/spring").withSpring;
  items[5] = first1;
  items[6] = sharedValue2;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  class ChannelDetailsTopicTsx1 {
    constructor() {
      value = closure_0.get();
      value1 = closure_1.get();
      if (null != value1) {
        if (null != value) {
          tmp4 = closure_4;
          tmp3 = closure_3;
          if (closure_4) {
            value1 = value;
          }
          obj = { height: null };
          tmp5 = closure_5;
          obj.height = tmp3(value1, closure_5);
        }
        return obj;
      }
      obj = closure_2;
      return;
    }
  }
  const items1 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  ChannelDetailsTopicTsx1.__closure = items1;
  ChannelDetailsTopicTsx1.__workletHash = 13417147111917;
  ChannelDetailsTopicTsx1.__initData = tmp15;
  const animatedStyle = require("module_1652").useAnimatedStyle(ChannelDetailsTopicTsx1);
  const obj6 = require("module_1652");
  const tmp14 = sharedValue2;
  const items2 = [closure_18, sharedValue1, expanded];
  _require = undefined;
  importDefault = undefined;
  [tmp23, tmp24, tmp25] = items2;
  class ChannelDetailsTopicTsx2 {
    constructor() {
      obj = closure_0;
      if (null == closure_0.get()) {
        obj1 = closure_1;
      } else {
        obj1 = { height: null };
        obj1.height = obj.get();
      }
      return obj1;
    }
  }
  const items3 = [tmp24, tmp25];
  ChannelDetailsTopicTsx2.__closure = items3;
  ChannelDetailsTopicTsx2.__workletHash = 9247180573864;
  ChannelDetailsTopicTsx2.__initData = tmp23;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(ChannelDetailsTopicTsx2);
  const tmp2Result = require("module_1652");
  const items4 = [closure_19, require("spring/spring").withSpring, sharedValue2, tmp14];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp27, tmp28, tmp29, tmp30] = items4;
  class ChannelDetailsTopicTsx3 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items5 = [tmp28, tmp29, tmp30];
  ChannelDetailsTopicTsx3.__closure = items5;
  ChannelDetailsTopicTsx3.__workletHash = 16443247307275;
  ChannelDetailsTopicTsx3.__initData = tmp27;
  const items6 = [sharedValue2, first1];
  const animatedStyle2 = require("module_1652").useAnimatedStyle(ChannelDetailsTopicTsx3);
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.lines.length > React5);
    if (nativeEvent.nativeEvent.lines.length > React5) {
      if (!c4) {
        let HIDDEN = constants.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = constants.HIDDEN;
  }, items6);
  const items7 = [sharedValue1];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const lines = nativeEvent.nativeEvent.lines;
    const substr = lines.slice(0, React5);
    const mapped = substr.map((text) => text.text);
    _undefined5(mapped.join(""));
  }, []);
  const items8 = [first, first1, sharedValue2];
  const callback2 = obj2.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items7);
  const memo = obj2.useMemo(() => c2 ? (() => {
    _undefined4(!closure_1_4);
    const result = sharedValue2.set(closure_1_4 ? constants.VISIBLE : constants.HIDDEN);
  }) : undefined, items8);
  const items9 = [sharedValue];
  const items10 = [, ];
  ({ id: arr11[0], topic: arr11[1] } = channel);
  const callback3 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items9);
  let memo1 = obj2.useMemo(() => {
    const obj = MarkupUtilsDefault;
    const obj2 = { channelId: _undefined.id, shouldNavigateBack: true, enableEmojiInteraction: true, textVariant: "heading-sm/normal", mentionPillOffsetY: null };
    const replaced = "" + _undefined.topic.replace(/(\r\n|\n|\r)/gm, " ");
    obj2.mentionPillOffsetY = MentionPillOffset.MENTION_PILL_OFFSET_Y;
    return obj.parseTopic(replaced, true, obj2);
  }, items10);
  const items11 = [, ];
  ({ id: arr12[0], topic: arr12[1] } = channel);
  const memo2 = obj2.useMemo(() => {
    const obj = MarkupUtilsDefault;
    return obj.parseTopic(_undefined.topic, true, { channelId: _undefined.id, shouldNavigateBack: true, enableEmojiInteraction: true, textVariant: "heading-sm/normal", mentionPillOffsetY: MentionPillOffset.MENTION_PILL_OFFSET_Y });
  }, items11);
  const items12 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    _undefined4(c1);
    _undefined5("");
  }, items12);
  if (null == memo) {
    let PressableOpacity = c5;
  } else {
    PressableOpacity = tmp2(7043).PressableOpacity;
  }
  const obj7 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(require("Text/Text").Text, { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback, onLayout: callback2, children: memo2 }) };
  const items13 = [closure_11(c5, obj7), , ];
  const obj9 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(require("Text/Text").Text, { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback1, children: memo1 }) };
  items13[1] = closure_11(c5, obj9);
  const obj11 = { style: null, children: null };
  const items14 = [tmp.topic, animatedStyle];
  obj11.style = items14;
  const obj12 = { style: animatedStyle1, children: null };
  const obj13 = { onPress: memo, activeOpacity: 0.7 };
  if (null == memo) {
    const merged = Object.assign(tmp46);
    const obj14 = { color: "interactive-text-default", variant: "heading-xs/medium", onLayout: callback3, lineClamp: null, style: null, children: null };
    let tmp51;
    if (!first1) {
      tmp51 = sharedValue1;
    }
    obj14.lineClamp = tmp51;
    const items15 = [tmp.topicText, , ];
    if (first1) {
      expanded = tmp.expanded;
    }
    items15[1] = expanded;
    const obj15 = { textAlign: channel.textAlign };
    items15[2] = obj15;
    obj14.style = items15;
    if (first1) {
      memo1 = memo2;
    }
    const obj16 = { children: null };
    const obj17 = { children: null };
    obj14.children = memo1;
    obj17.children = closure_11(tmp2(5751).Text, obj14);
    obj13.children = closure_11(tmp43, obj17);
    obj12.children = closure_11(PressableOpacity, obj13);
    const items16 = [closure_11(tmp45, obj12), ];
    const obj18 = { style: null, pointerEvents: "none", children: null };
    const items17 = [absoluteFill.absoluteFill, animatedStyle2];
    obj18.style = items17;
    const obj19 = { style: tmp.gradient, start: null, end: null, colors: null };
    ({ START: obj23.start, END: obj23.end } = VerticalGradient);
    obj19.colors = channelTopicGradientBackground;
    obj18.children = closure_11(tmp44(5715), obj19);
    items16[1] = closure_11(tmp44(1652).View, obj18);
    obj11.children = items16;
    items13[2] = closure_12(_modDef1652.View, obj11);
    obj16.children = items13;
    return closure_12(closure_13, obj16);
  } else {
    let str = "";
    if (!first1) {
      str = tmp10;
    }
    const obj20 = { accessibilityRole: "button", accessibilityLabel: str, accessibilityHint: null, accessibilityState: null };
    const intl = tmp2(1113).intl;
    const t = tmp2(1113).t;
    obj20.accessibilityHint = intl.string(first1 ? t["6MwJo/"] : t.lBeKY2);
    const obj21 = { expanded: first1 };
    obj20.accessibilityState = obj21;
  }
  const obj10 = { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback1, children: memo1 };
  const obj8 = { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback, onLayout: callback2, children: memo2 };
  const tmp2Result2 = require("module_1652");
  tmp43 = c5;
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  items = [UserStore];
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
    const obj2 = { variant: "heading-xs/medium", color: "interactive-text-default", style: null, children: null };
    const obj3 = { textAlign: channel.textAlign };
    obj2.style = obj3;
    obj2.children = stateFromStores;
    tmp4 = closure_11(channel(5751).Text, obj2);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  items = [UserStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ChannelUtils.getPrivateChannelUserTagsString(channel.recipients, UserStore));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-xs/medium", color: "interactive-text-default", style: null, children: null };
    const obj3 = { textAlign: channel.textAlign };
    obj2.style = obj3;
    obj2.children = stateFromStores;
    tmp4 = closure_11(channel(5751).Text, obj2);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6 } = get_ActivityIndicator);
const ChannelDetailsConstants = fn(10258);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = ChannelDetailsConstants);
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5140);
let obj = { hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: null };
const PlatformUtils = fn(1377);
let obj3 = null;
if (!PlatformUtils.isAndroid()) {
  obj3 = { lineHeight: "uri" };
}
let merged = Object.assign(obj3);
obj.topicText = { paddingVertical: 5 };
let closure_14 = createStyles.createStyles(obj);
let closure_15 = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_17 = { code: "(function ChannelDetailsTopicTsx1(){let[expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS]=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};})" };
let closure_18 = { code: "(function ChannelDetailsTopicTsx2(){let[expandedHeight,EMPTY_STYLE]=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};})" };
let closure_19 = { code: "(function ChannelDetailsTopicTsx3(){let[withSpring,gradient,SPRING_CHANNEL_DETAILS]=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};})" };
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