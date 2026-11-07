// === Module 19364: BurstReactionAnimationContainer ===

// Module 19364 (BurstReactionAnimationContainer)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5199 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10639 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BurstReactionAnimationContainerInner() {
  _require = closure_11();
  [first, dependencyMap] = noop.useState(null);
  [first1, noop] = noop.useState(false);
  noop.useRef(false);
  const effect = noop.useEffect(() => {
    function handleEffectReceived(channelId) {
      dependencyMap({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      closure_1_4(true);
      _undefined4.current = true;
      const result = handleEffectReceived(5376).triggerHapticFeedback(c1(5377).IMPACT_HEAVY);
    }
    const subscription = _undefined2(_undefined3[10]).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  items = [
    closure_13,
    first,
    first1,
    require("timing/timing").withTiming,
    closure_12,
    require("module_1705").scheduleOnRN,
    function handleComponentFinish() {
      if (false === _undefined4.current) {
        _undefined3(null);
      }
    }
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class BurstReactionAnimationContainerTsx2 {
    constructor() {
      if (null == closure_0) {
        obj = { opacity: 0 };
      } else {
        tmp10 = closure_1;
        obj1 = { opacity: null };
        tmp11 = closure_2;
        obj4 = { duration: 300 };
        if (closure_1) {
          num3 = 1;
          obj1.opacity = tmp11(1, obj4);
          obj = obj1;
        } else {
          tmp = closure_3;
          items = [, , ];
          items[0] = closure_3;
          tmp2 = closure_4;
          items[1] = closure_4;
          tmp3 = closure_5;
          items[2] = closure_5;
          tmp4 = items;
          [tmp5, tmp6, tmp7] = items;
          class BurstReactionAnimationContainerTsx1 {
            constructor(arg0) {
              if (arg0) {
                tmp = closure_0;
                tmp2 = closure_1;
                tmp3 = closure_0(closure_1);
              }
              return;
            }
          }
          items1 = [, ];
          items1[0] = tmp6;
          items1[1] = tmp7;
          BurstReactionAnimationContainerTsx1.__closure = items1;
          num = 14162489280171;
          BurstReactionAnimationContainerTsx1.__workletHash = 14162489280171;
          BurstReactionAnimationContainerTsx1.__initData = tmp5;
          str = "respect-motion-settings";
          num2 = 0;
          tmp8 = obj4;
          tmp9 = BurstReactionAnimationContainerTsx1;
          obj1.opacity = tmp11(0, obj4, "respect-motion-settings", BurstReactionAnimationContainerTsx1);
          obj = obj1;
        }
      }
      return obj;
    }
  }
  let items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  BurstReactionAnimationContainerTsx2.__closure = items1;
  BurstReactionAnimationContainerTsx2.__workletHash = 8115368107310;
  BurstReactionAnimationContainerTsx2.__initData = tmp8;
  closure_6 = require("module_1652").useAnimatedStyle(BurstReactionAnimationContainerTsx2);
  let tmp15 = null;
  if (null != first) {
    let obj2 = { contentTypes: null, children: null };
    let items2 = [require("dismissible_content").DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj2.contentTypes = items2;
    obj2.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const obj = { style: markAsDismissed.fill, children: null };
      const obj2 = { style: null, children: null };
      items = [markAsDismissed.fill, closure_6];
      obj2.style = items;
      const obj3 = {
        activeOpacity: _undefined(_undefined3[7]).BACKDROP_OPACITY,
        onPress() {
          c4(false);
          c5.current = false;
          markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        style: markAsDismissed.fill,
        children: null
      };
      const items1 = [closure_1_8(closure_6, { style: markAsDismissed.background }), , ];
      const obj5 = { style: markAsDismissed.fill, children: null };
      let tmpResult = null;
      if (c3) {
        const obj7 = { isFullscreen: true, channelId: null, messageId: null, emoji: null, loop: false, withFadeOut: false, onComplete: null };
        ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = _undefined2);
        obj7.onComplete = function onComplete(arg0) {
          if (!arg0) {
            closure_1_4(false);
            _undefined4.current = false;
          }
        };
        tmpResult = closure_1_8(_undefined2(_undefined3[17]), obj7);
      }
      obj5.children = tmpResult;
      items1[1] = closure_1_8(closure_6, obj5);
      let tmp6Result = markAsDismissed.visibleContent === _undefined(_undefined3[15]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj8 = { children: null };
        const obj9 = { style: tmp4.dismissTextContainer, variant: "body-sm/medium", children: null };
        const intl = _undefined(_undefined3[19]).intl;
        obj9.children = intl.string(_undefined(_undefined3[19]).t.QpPMih);
        const items2 = [closure_1_8(_undefined(_undefined3[18]).Text, obj9), ];
        const obj17 = { style: tmp4.dismissTextBackground };
        items2[1] = closure_1_8(closure_6, obj17);
        obj8.children = items2;
        tmp6Result = closure_1_10(closure_1_9, obj8);
      }
      items1[2] = tmp6Result;
      obj3.children = items1;
      obj2.children = closure_1_10(c5, obj3);
      obj.children = closure_1_8(_undefined2(_undefined3[11]).View, obj2);
      return closure_1_8(_undefined(_undefined3[16]).OverlayView, obj);
    };
    tmp15 = closure_8(SelectedDismissibleContentDefault, obj2);
  }
  return tmp15;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: closure_6, StyleSheet } = get_ActivityIndicator);
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj3.opacity = fn(5098).BACKDROP_OPACITY;
obj2.background = obj3;
const obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj2.fill = obj4;
obj2.dismissTextContainer = { position: "absolute", bottom: 48, zIndex: 1 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
obj2.dismissTextBackground = size;
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { code: "(function BurstReactionAnimationContainerTsx1(finished){let[scheduleOnRN,handleComponentFinish]=this.__closure;if(finished)scheduleOnRN(handleComponentFinish);})" };
let closure_13 = { code: "(function BurstReactionAnimationContainerTsx2(){let[animationData,showAnimation,withTiming,_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function BurstReactionAnimationContainerTsx1Factory([_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]){const BurstReactionAnimationContainerTsx1=function(finished){if(finished)scheduleOnRN(handleComponentFinish);};BurstReactionAnimationContainerTsx1.__closure=[scheduleOnRN,handleComponentFinish];BurstReactionAnimationContainerTsx1.__workletHash=14162489280171;BurstReactionAnimationContainerTsx1.__initData=_worklet_14162489280171_init_data;return BurstReactionAnimationContainerTsx1;}([_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]))};}return{opacity:withTiming(1,{duration:300})};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  return React5(native.ThemeContextProvider, { theme: nativeDefault.themes.DARK, children: React5(BurstReactionAnimationContainerInner, {}) });
};