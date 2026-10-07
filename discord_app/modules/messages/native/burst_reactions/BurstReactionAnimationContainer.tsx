// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
import c from "../../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj3.opacity = fn(7423).BACKDROP_OPACITY;
obj2.background = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj2.fill = obj4;
obj2.dismissTextContainer = { position: "absolute", bottom: 48, zIndex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  bottom: -600,
  height: 700,
  width: 700,
};
obj2.dismissTextBackground = size;
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},"respect-motion-settings",function(finished){if(finished){runOnJS(handleComponentFinish)();}})};}return{opacity:withTiming(1,{duration:300})};}',
};
let closure_13 = {
  code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished){runOnJS(handleComponentFinish)();}}",
};
const __initData2 = {
  code: "function BurstReactionAnimationContainerTsx3(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}",
};
const __initData3 = {
  code: "function BurstReactionAnimationContainerTsx4(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}",
};
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
            const result = fill(4861).triggerHapticFeedback(first(4862).IMPACT_HEAVY);
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
        const fn2 = function v(fn) {
          closure_4(false);
          closure_5.current = false;
          if (fn != null) {
            fn();
          }
        };
        cResult[2] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      closure_7 = tmp10;
      let obj = fill(576);
      const fn3 = function x() {
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
      let tmpResult = fill(4618);
      fn3.__closure = {
        animationData,
        showAnimation: dismissTextContainer,
        withTiming: fill(4897).withTiming,
        runOnJS: fill(4618).runOnJS,
        handleComponentFinish,
      };
      fn3.__workletHash = 3096942457868;
      fn3.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn3);
      if (null == animationData) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [tmp(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
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
              activeOpacity: fill(7423).BACKDROP_OPACITY,
              onPress() {
                return constants(() => markAsDismissed(constants.UNKNOWN));
              },
              style: markAsDismissed.fill,
              children: null,
            };
            const items1 = [animatedStyle(handleComponentFinish, { style: markAsDismissed.background }), ,];
            const obj5 = { style: markAsDismissed.fill, children: null };
            let tmpResult = null;
            if (dismissTextContainer) {
              const obj7 = {
                isFullscreen: true,
                channelId: null,
                messageId: null,
                emoji: null,
                loop: false,
                withFadeOut: false,
                onComplete: null,
              };
              ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
              obj7.onComplete = function onComplete(arg0) {
                if (!arg0) {
                  closure_1_7();
                }
              };
              tmpResult = animatedStyle(first(7465), obj7);
            }
            obj5.children = tmpResult;
            items1[1] = animatedStyle(handleComponentFinish, obj5);
            let tmp6Result =
              markAsDismissed.visibleContent ===
              fill(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
            if (tmp6Result) {
              const obj8 = { children: null };
              const obj9 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
              const intl = fill(1126).intl;
              obj9.children = intl.string(fill(1126).t.QpPMih);
              const items2 = [animatedStyle(fill(4892).Text, obj9)];
              const obj17 = { style: tmp4.dismissTextBackground };
              items2[1] = animatedStyle(handleComponentFinish, obj17);
              obj8.children = items2;
              tmp6Result = closure_1_10(closure_1_9, obj8);
            }
            items1[2] = tmp6Result;
            obj3.children = items1;
            obj2.children = closure_1_10(closure_5, obj3);
            obj.children = animatedStyle(first(4618).View, obj2);
            return animatedStyle(fill(1188).OverlayView, obj);
          },
        };
        tmp2 = animatedStyle(animationData(10367), obj4);
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
    }
  : () => {
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
          const result = handleEffectReceived(4861).triggerHapticFeedback(first(4862).IMPACT_HEAVY);
        }
        const subscription = first(584).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
        return () => {
          DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
        };
      }, []);
      class R {
        constructor() {
          if (null == closure_1) {
            obj1 = { opacity: 0 };
          } else {
            tmp8 = closure_3;
            obj5 = { opacity: null };
            tmp9 = closure_0;
            tmp10 = closure_2;
            tmp11 = closure_0(closure_2[14]);
            withTiming = tmp11.withTiming;
            obj6 = { duration: 300 };
            if (closure_3) {
              num3 = 1;
              obj5.opacity = withTiming(1, obj6);
              obj1 = obj5;
            } else {
              fn = function n(arg0) {
                if (arg0) {
                  closure_0(dependencyMap[13]).runOnJS(handleComponentFinish)();
                  const obj = closure_0(dependencyMap[13]);
                }
              };
              obj = { runOnJS: null, handleComponentFinish: null };
              tmp = closure_0;
              tmp2 = closure_2;
              obj.runOnJS = closure_0(closure_2[13]).runOnJS;
              tmp3 = handleComponentFinish;
              obj.handleComponentFinish = handleComponentFinish;
              fn.__closure = obj;
              num = 9630692253462;
              fn.__workletHash = 9630692253462;
              tmp4 = closure_15;
              fn.__initData = closure_15;
              str = "respect-motion-settings";
              num2 = 0;
              tmp5 = tmp11;
              tmp6 = obj6;
              tmp7 = fn;
              obj5.opacity = withTiming(0, obj6, "respect-motion-settings", fn);
              obj1 = obj5;
            }
          }
          return obj1;
        }
      }
      let obj = require("ReanimatedRexport");
      const tmp6 = _require;
      R.__closure = {
        animationData,
        showAnimation: first1,
        withTiming: require("timing").withTiming,
        runOnJS: require("ReanimatedRexport").runOnJS,
        handleComponentFinish,
      };
      R.__workletHash = 4291853011336;
      R.__initData = __initData2;
      closure_7 = obj.useAnimatedStyle(R);
      let tmp8 = null;
      if (null != animationData) {
        let obj3 = { contentTypes: null, children: null };
        let items = [tmp6(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
        obj3.contentTypes = items;
        obj3.children = function children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          const obj = { style: markAsDismissed.fill, children: null };
          const obj2 = { style: null, children: null };
          const items = [markAsDismissed.fill, closure_7];
          obj2.style = items;
          const obj3 = {
            activeOpacity: closure_0(7423).BACKDROP_OPACITY,
            onPress() {
              closure_4(false);
              closure_5.current = false;
              markAsDismissed(ContentDismissActionType.UNKNOWN);
            },
            style: markAsDismissed.fill,
            children: null,
          };
          const items1 = [closure_1_8(handleComponentFinish, { style: markAsDismissed.background }), ,];
          const obj5 = { style: markAsDismissed.fill, children: null };
          let tmpResult = null;
          if (first1) {
            const obj7 = {
              isFullscreen: true,
              channelId: null,
              messageId: null,
              emoji: null,
              loop: false,
              withFadeOut: false,
              onComplete: null,
            };
            ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
            obj7.onComplete = function onComplete(arg0) {
              if (!arg0) {
                closure_1_4(false);
                ref.current = false;
              }
            };
            tmpResult = closure_1_8(first(7465), obj7);
          }
          obj5.children = tmpResult;
          items1[1] = closure_1_8(handleComponentFinish, obj5);
          let tmp6Result =
            markAsDismissed.visibleContent ===
            closure_0(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
          if (tmp6Result) {
            const obj8 = { children: null };
            const obj9 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
            const intl = closure_0(1126).intl;
            obj9.children = intl.string(closure_0(1126).t.QpPMih);
            const items2 = [closure_1_8(closure_0(4892).Text, obj9)];
            const obj17 = { style: tmp4.dismissTextBackground };
            items2[1] = closure_1_8(handleComponentFinish, obj17);
            obj8.children = items2;
            tmp6Result = closure_1_10(closure_1_9, obj8);
          }
          items1[2] = tmp6Result;
          obj3.children = items1;
          obj2.children = closure_1_10(closure_5, obj3);
          obj.children = closure_1_8(first(4618).View, obj2);
          return closure_1_8(closure_0(1188).OverlayView, obj);
        };
        tmp8 = closure_8(animationData(10367), obj3);
        let tmp11 = animationData(10367);
      }
      return tmp8;
    };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () =>
      closure_1_8(native.ThemeContextProvider, {
        theme: nativeDefault.themes.DARK,
        children: closure_1_8(closure_16, {}),
      });
