// === Module 17400: BurstReactionAnimationContainer ===

// Module 17400 (BurstReactionAnimationContainer)
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4787 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj3.opacity = fn(7898).BACKDROP_OPACITY;
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
const __initData = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},\"respect-motion-settings\",function(finished){if(finished){runOnJS(handleComponentFinish)();}})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished){runOnJS(handleComponentFinish)();}}" };
const __initData2 = { code: "function BurstReactionAnimationContainerTsx3(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_15 = { code: "function BurstReactionAnimationContainerTsx4(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function BurstReactionAnimationContainerInner() {
  let tmp2 = dependencyMap;
  const cResult = fill(576).c(12);
  fill = closure_11();
  const tmp4 = dismissTextContainer(noop.useState(null), 2);
  const animationData = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = dismissTextContainer(noop.useState(false), 2);
  dismissTextContainer = tmp6[0];
  noop = tmp6[1];
  noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o() {
      function handleEffectReceived(channelId) {
        dependencyMap({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
        closure_1_4(true);
        ref.current = true;
        const result = fill(5055).triggerHapticFeedback(first(5056).IMPACT_HEAVY);
      }
      const subscription = first(584).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
      return () => {
        DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
      };
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp7 = fn;
    tmp8 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const effect = noop.useEffect(tmp7, tmp8);
  function handleComponentFinish() {
    if (false === ref.current) {
      dependencyMap(null);
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleAnimationFinish(fn) {
      closure_4(false);
      closure_5.current = false;
      if (fn != null) {
        fn();
      }
    }
    cResult[2] = handleAnimationFinish;
    let tmp10 = handleAnimationFinish;
  } else {
    tmp10 = cResult[2];
  }
  closure_7 = tmp10;
  let obj = fill(576);
  const fn2 = function x() {
    if (null == first) {
      let obj2 = { opacity: 0 };
    } else {
      const obj3 = { opacity: null };
      const tmp11 = timing;
      const withTiming = tmp11.withTiming;
      const obj4 = { duration: 300 };
      if (dismissTextContainer) {
        obj3.opacity = withTiming(1, obj4);
        obj2 = obj3;
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            fill(dependencyMap[13]).runOnJS(handleComponentFinish)();
            const obj = fill(dependencyMap[13]);
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 5927595257622;
        fn.__initData = __initData;
        obj3.opacity = withTiming(0, obj4, "respect-motion-settings", fn);
        obj2 = obj3;
      }
    }
    return obj2;
  };
  let tmpResult = fill(4810);
  fn2.__closure = { animationData, showAnimation: dismissTextContainer, withTiming: fill(5091).withTiming, runOnJS: fill(4810).runOnJS, handleComponentFinish };
  fn2.__workletHash = 3096942457868;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (null == animationData) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [tmp(2048).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
      cResult[3] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === animationData) {
        if (cResult[6] === dismissTextContainer) {
          if (cResult[7] === fill.background) {
            if (cResult[8] === fill.dismissTextBackground) {
              if (cResult[9] === fill.dismissTextContainer) {
              }
            }
          }
        }
      }
    }
    let obj4 = {
      contentTypes: tmp12,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          const obj = { style: markAsDismissed.fill, children: null };
          const obj2 = { style: null, children: null };
          const items = [markAsDismissed.fill, animatedStyle];
          obj2.style = items;
          const obj3 = {
            activeOpacity: fill(7898).BACKDROP_OPACITY,
            onPress() {
              return constants(() => markAsDismissed(constants.UNKNOWN));
            },
            style: markAsDismissed.fill,
            children: null
          };
          const items1 = [animatedStyle(handleComponentFinish, { style: markAsDismissed.background }), , ];
          const obj5 = { style: markAsDismissed.fill, children: null };
          let tmpResult = null;
          if (dismissTextContainer) {
            const obj7 = { isFullscreen: true, channelId: null, messageId: null, emoji: null, loop: false, withFadeOut: false, onComplete: null };
            ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
            obj7.onComplete = function onComplete(arg0) {
              if (!arg0) {
                closure_1_7();
              }
            };
            tmpResult = animatedStyle(first(7940), obj7);
          }
          obj5.children = tmpResult;
          items1[1] = animatedStyle(handleComponentFinish, obj5);
          let tmp6Result = markAsDismissed.visibleContent === fill(2048).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
          if (tmp6Result) {
            const obj8 = { children: null };
            const obj9 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
            const intl = fill(1126).intl;
            obj9.children = intl.string(fill(1126).t.QpPMih);
            const items2 = [animatedStyle(fill(5086).Text, obj9), ];
            const obj17 = { style: tmp4.dismissTextBackground };
            items2[1] = animatedStyle(handleComponentFinish, obj17);
            obj8.children = items2;
            tmp6Result = closure_1_10(closure_1_9, obj8);
          }
          items1[2] = tmp6Result;
          obj3.children = items1;
          obj2.children = closure_1_10(closure_5, obj3);
          obj.children = animatedStyle(first(4810).View, obj2);
          return animatedStyle(fill(1200).OverlayView, obj);
        }
    };
    tmp2 = animatedStyle(animationData(9964), obj4);
    cResult[4] = animatedStyle;
    cResult[5] = animationData;
    cResult[6] = dismissTextContainer;
    cResult[7] = fill.background;
    ({ dismissTextBackground: tmp3[8], dismissTextContainer } = fill);
    cResult[9] = dismissTextContainer;
    fill = fill.fill;
    cResult[10] = fill;
    cResult[11] = tmp2;
  }
}) : (function BurstReactionAnimationContainerInner() {
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
      const result = handleEffectReceived(5055).triggerHapticFeedback(first(5056).IMPACT_HEAVY);
    }
    const subscription = first(584).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let fn = function b() {
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
            closure_0(dependencyMap[13]).runOnJS(handleComponentFinish)();
            const obj = closure_0(dependencyMap[13]);
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 9630692253462;
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
  fn.__workletHash = 4291853011336;
  fn.__initData = __initData2;
  closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != animationData) {
    let obj3 = { contentTypes: null, children: null };
    let items = [tmp6(2048).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj3.contentTypes = items;
    obj3.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const obj = { style: markAsDismissed.fill, children: null };
      const obj2 = { style: null, children: null };
      const items = [markAsDismissed.fill, closure_7];
      obj2.style = items;
      const obj3 = {
        activeOpacity: closure_0(7898).BACKDROP_OPACITY,
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
        tmpResult = closure_1_8(first(7940), obj7);
      }
      obj5.children = tmpResult;
      items1[1] = closure_1_8(handleComponentFinish, obj5);
      let tmp6Result = markAsDismissed.visibleContent === closure_0(2048).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj8 = { children: null };
        const obj9 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
        const intl = closure_0(1126).intl;
        obj9.children = intl.string(closure_0(1126).t.QpPMih);
        const items2 = [closure_1_8(closure_0(5086).Text, obj9), ];
        const obj17 = { style: tmp4.dismissTextBackground };
        items2[1] = closure_1_8(handleComponentFinish, obj17);
        obj8.children = items2;
        tmp6Result = closure_1_10(closure_1_9, obj8);
      }
      items1[2] = tmp6Result;
      obj3.children = items1;
      obj2.children = closure_1_10(closure_5, obj3);
      obj.children = closure_1_8(first(4810).View, obj2);
      return closure_1_8(closure_0(1200).OverlayView, obj);
    };
    tmp8 = closure_8(animationData(9964), obj3);
    let tmp11 = animationData(9964);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BurstReactionAnimationContainer() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { theme: nativeDefault.themes.DARK, children: closure_1_8(closure_16, {}) };
    const tmp8 = closure_1_8(native.ThemeContextProvider, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function BurstReactionAnimationContainer() {
  return closure_1_8(native.ThemeContextProvider, { theme: nativeDefault.themes.DARK, children: closure_1_8(closure_16, {}) });
});