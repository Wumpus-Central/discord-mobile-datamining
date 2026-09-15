// === Module 17065: BurstReactionAnimationContainer ===

// Module 17065 (BurstReactionAnimationContainer)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4350 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import timing from "timing" /* 4640 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BurstReactionAnimationContainerInner() {
  function handleComponentFinish() {
    if (false === ref.current) {
      dependencyMap(null);
    }
  }
  _require = closure_11();
  const tmp = first1(noop.useState(null), 2);
  const animationData = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(noop.useState(false), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  noop.useRef(false);
  const effect = noop.useEffect(() => {
    function handleEffectReceived(channelId) {
      dependencyMap({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      closure_1_4(true);
      ref.current = true;
      const result = handleEffectReceived(4607).triggerHapticFeedback(first(4608).IMPACT_HEAVY);
    }
    const subscription = first(573).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let fn = function y() {
    if (null == first) {
      let obj2 = { opacity: 0 };
    } else {
      const obj3 = { opacity: null };
      const tmp11 = timing;
      const withTiming = tmp11.withTiming;
      const obj4 = { duration: 300 };
      if (first1) {
        obj3.opacity = withTiming(1, obj4);
        obj2 = obj3;
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            closure_0(dependencyMap[11]).runOnJS(handleComponentFinish)();
            const obj = closure_0(dependencyMap[11]);
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = __initData;
        obj3.opacity = withTiming(0, obj4, "respect-motion-settings", fn);
        obj2 = obj3;
      }
    }
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  const tmp6 = _require;
  fn.__closure = { animationData, showAnimation: first1, withTiming: require("timing").withTiming, runOnJS: require("ReanimatedRexport").runOnJS, handleComponentFinish };
  fn.__workletHash = 12044515783370;
  fn.__initData = __initData;
  closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != animationData) {
    let obj3 = { contentTypes: null, children: null };
    let items = [tmp6(1944).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj3.contentTypes = items;
    obj3.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const obj = { style: markAsDismissed.fill, children: null };
      const obj2 = { style: null, children: null };
      const items = [markAsDismissed.fill, closure_7];
      obj2.style = items;
      const obj3 = {
        activeOpacity: closure_0(7889).BACKDROP_OPACITY,
        onPress() {
          closure_4(false);
          closure_5.current = false;
          markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        style: markAsDismissed.fill,
        children: null
      };
      const items1 = [closure_1_8(handleComponentFinish, { style: markAsDismissed.background }), , ];
      const obj5 = { style: markAsDismissed.fill, children: null };
      let tmpResult = null;
      if (first1) {
        const obj7 = { isFullscreen: true, channelId: null, messageId: null, emoji: null, loop: false, withFadeOut: false, onComplete: null };
        ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
        obj7.onComplete = function onComplete(arg0) {
          if (!arg0) {
            closure_1_4(false);
            ref.current = false;
          }
        };
        tmpResult = closure_1_8(first(7931), obj7);
      }
      obj5.children = tmpResult;
      items1[1] = closure_1_8(handleComponentFinish, obj5);
      let tmp6Result = markAsDismissed.visibleContent === closure_0(1944).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj8 = { children: null };
        const obj9 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
        const intl = closure_0(1115).intl;
        obj9.children = intl.string(closure_0(1115).t.QpPMih);
        const items2 = [closure_1_8(closure_0(4635).Text, obj9), ];
        const obj17 = { style: tmp4.dismissTextBackground };
        items2[1] = closure_1_8(handleComponentFinish, obj17);
        obj8.children = items2;
        tmp6Result = closure_1_10(closure_1_9, obj8);
      }
      items1[2] = tmp6Result;
      obj3.children = items1;
      obj2.children = closure_1_10(closure_5, obj3);
      obj.children = closure_1_8(first(4376).View, obj2);
      return closure_1_8(closure_0(1177).OverlayView, obj);
    };
    tmp8 = closure_8(animationData(10758), obj3);
    let tmp11 = animationData(10758);
  }
  return tmp8;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj3.opacity = fn(7889).BACKDROP_OPACITY;
obj2.background = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj2.fill = obj4;
obj2.dismissTextContainer = { position: "absolute", bottom: 48, zIndex: 1 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
obj2.dismissTextBackground = size;
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  return React6(native.ThemeContextProvider, { theme: nativeDefault.themes.DARK, children: React6(BurstReactionAnimationContainerInner, {}) });
};