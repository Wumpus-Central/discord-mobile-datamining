// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import burst_reactions_BurstReactionEffectUtils from "BurstReactionEffectUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
let react = react_mod;
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  background: obj2,
  fill: obj3,
  dismissTextContainer: { position: "absolute", bottom: 48, zIndex: 1 },
  dismissTextBackground: size,
};
obj2 = {
  backgroundColor: nativeDefault.colors.BLACK,
  opacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY,
};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  bottom: -600,
  height: 700,
  width: 700,
};
let closure_11 = createStyles(obj);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let closure_2;
      let closure_4;
      let first1;
      let tmp10;
      let tmp12;
      let tmp9;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp4 = closure_11();
      _require = tmp4;
      let obj2 = react;
      const tmp5 = first1(react.useState(null), 2);
      const animationData = tmp5[0];
      dependencyMap = tmp5[1];
      const tmp7 = first1(react.useState(false), 2);
      first1 = tmp7[0];
      react = tmp7[1];
      const ref = react.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let fn = function o() {
          function handleEffectReceived(channelId) {
            const obj = { channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId };
            closure_1_2(obj);
            closure_1_4(true);
            ref.current = true;
            const obj2 = handleEffectReceived(closure_2[10]);
            const result = obj2.triggerHapticFeedback(first(closure_2[11]).IMPACT_HEAVY);
          }
          let obj = first(closure_2[12]);
          const subscription = obj.subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
          return () => {
            const obj = DispatcherDefault;
            obj.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
          };
        };
        let items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp10 = items;
        tmp9 = fn;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const effect = obj2.useEffect(tmp9, tmp10);
      function handleComponentFinish() {
        if (false === ref.current) {
          closure_2(null);
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v(fn) {
          closure_4(false);
          ref.current = false;
          if (fn != null) {
            fn();
          }
        };
        cResult[2] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[2];
      }
      let closure_7 = tmp12;
      let tmpResult = tmp(4612);
      const fn3 = function x() {
        let obj2;
        if (null == first) {
          obj2 = { opacity: 0 };
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
              const tmp = arg0;
              if (tmp) {
                const obj = closure_0(closure_2[13]);
                obj.runOnJS(handleComponentFinish)();
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
      let obj3 = {
        animationData,
        showAnimation: first1,
        withTiming: tmp(4891).withTiming,
        runOnJS: tmp(4612).runOnJS,
        handleComponentFinish,
      };
      fn3.__closure = obj3;
      fn3.__workletHash = 3096942457868;
      fn3.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn3);
      let tmp14 = null;
      if (null != animationData) {
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [tmp(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
          cResult[3] = items1;
          tmp15 = items1;
        } else {
          tmp15 = cResult[3];
        }
        if (cResult[4] === animatedStyle) {
          if (cResult[5] === animationData) {
            if (cResult[6] === first1) {
              if (cResult[7] === tmp4.background) {
                if (cResult[8] === tmp4.dismissTextBackground) {
                  if (cResult[9] === tmp4.dismissTextContainer) {
                    let tmp16;
                    if (cResult[10] === tmp4.fill) {
                      tmp16 = cResult[11];
                    }
                    tmp14 = tmp16;
                  }
                }
              }
            }
          }
        }
        let obj4 = {
          contentTypes: tmp15,
          children(markAsDismissed) {
            let View;
            let intl;
            let items;
            let items1;
            let items2;
            let obj2;
            let obj3;
            let tmpResult;
            markAsDismissed = markAsDismissed.markAsDismissed;
            const visibleContent = markAsDismissed.visibleContent;
            const obj = { style: markAsDismissed.fill, children: animatedStyle(View, obj2) };
            const OverlayView = closure_0(closure_2[17]).OverlayView;
            obj2 = { style: items, children: closure_1_10(ref, obj3) };
            items = [markAsDismissed.fill, animatedStyle];
            obj3 = {
              activeOpacity: closure_0(closure_2[7]).BACKDROP_OPACITY,
              onPress() {
                return constants(() => markAsDismissed(constants.UNKNOWN));
              },
              style: markAsDismissed.fill,
              children: items1,
            };
            View = first(closure_2[13]).View;
            items1 = [, ,];
            const obj4 = { style: markAsDismissed.background };
            items1[0] = animatedStyle(handleComponentFinish, obj4);
            const obj5 = { style: markAsDismissed.fill, children: tmpResult };
            tmpResult = null;
            if (first1) {
              const obj7 = {
                isFullscreen: true,
                channelId: null,
                messageId: null,
                emoji: null,
                loop: false,
                withFadeOut: false,
                onComplete(arg0) {
                  const tmp = arg0;
                  if (!tmp) {
                    closure_1_7();
                  }
                },
              };
              ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
              tmpResult = animatedStyle(first(closure_2[18]), obj7);
            }
            items1[1] = animatedStyle(handleComponentFinish, obj5);
            let tmp6Result =
              visibleContent ===
              closure_0(closure_2[15]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
            if (tmp6Result) {
              const obj8 = { children: items2 };
              const obj9 = {
                style: markAsDismissed.dismissTextContainer,
                variant: "text-sm/medium",
                children: intl.string(closure_0(closure_2[20]).t.QpPMih),
              };
              const Text = closure_0(closure_2[19]).Text;
              intl = closure_0(closure_2[20]).intl;
              items2 = [animatedStyle(Text, obj9)];
              const obj17 = { style: markAsDismissed.dismissTextBackground };
              items2[1] = animatedStyle(handleComponentFinish, obj17);
              tmp6Result = closure_1_10(closure_1_9, obj8);
            }
            items1[2] = tmp6Result;
            return animatedStyle(OverlayView, obj);
          },
        };
        const tmp19 = animatedStyle(animationData(10354), obj4);
        cResult[4] = animatedStyle;
        cResult[5] = animationData;
        cResult[6] = first1;
        cResult[7] = tmp4.background;
        cResult[8] = tmp4.dismissTextBackground;
        cResult[9] = tmp4.dismissTextContainer;
        cResult[10] = tmp4.fill;
        cResult[11] = tmp19;
        tmp16 = tmp19;
      }
      return tmp14;
    }
  : () => {
      let closure_0;
      let closure_2;
      let closure_4;
      let first1;
      let items;
      function handleComponentFinish() {
        if (false === ref.current) {
          closure_2(null);
        }
      }
      _require = closure_11();
      let tmp = first1(react.useState(null), 2);
      const animationData = tmp[0];
      dependencyMap = tmp[1];
      const tmp3 = first1(react.useState(false), 2);
      first1 = tmp3[0];
      react = tmp3[1];
      const ref = react.useRef(false);
      const effect = react.useEffect(() => {
        function handleEffectReceived(channelId) {
          const obj = { channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId };
          closure_1_2(obj);
          closure_1_4(true);
          ref.current = true;
          const obj2 = handleEffectReceived(closure_2[10]);
          const result = obj2.triggerHapticFeedback(first(closure_2[11]).IMPACT_HEAVY);
        }
        let obj = first(closure_2[12]);
        const subscription = obj.subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
        };
      }, []);
      let obj = require("ReanimatedRexport");
      const tmp6 = _require;
      class R {
        constructor() {
          let obj2;
          if (null == first) {
            obj2 = { opacity: 0 };
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
                const tmp = arg0;
                if (tmp) {
                  const obj = closure_0(closure_2[13]);
                  obj.runOnJS(handleComponentFinish)();
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
        }
      }
      let obj2 = {
        animationData,
        showAnimation: first1,
        withTiming: require("timing").withTiming,
        runOnJS: require("ReanimatedRexport").runOnJS,
        handleComponentFinish,
      };
      R.__closure = obj2;
      R.__workletHash = 4291853011336;
      R.__initData = __initData2;
      let closure_7 = obj.useAnimatedStyle(R);
      let tmp8 = null;
      if (null != animationData) {
        let obj3 = {
          contentTypes: items,
          children(markAsDismissed) {
            let View;
            let intl;
            let items;
            let items1;
            let items2;
            let obj2;
            let obj3;
            let tmpResult;
            markAsDismissed = markAsDismissed.markAsDismissed;
            const visibleContent = markAsDismissed.visibleContent;
            const obj = { style: markAsDismissed.fill, children: closure_1_8(View, obj2) };
            const OverlayView = closure_0(closure_2[17]).OverlayView;
            obj2 = { style: items, children: closure_1_10(ref, obj3) };
            items = [markAsDismissed.fill, closure_7];
            obj3 = {
              activeOpacity: closure_0(closure_2[7]).BACKDROP_OPACITY,
              onPress() {
                closure_4(false);
                ref.current = false;
                markAsDismissed(ContentDismissActionType.UNKNOWN);
              },
              style: markAsDismissed.fill,
              children: items1,
            };
            View = first(closure_2[13]).View;
            items1 = [, ,];
            const obj4 = { style: markAsDismissed.background };
            items1[0] = closure_1_8(handleComponentFinish, obj4);
            const obj5 = { style: markAsDismissed.fill, children: tmpResult };
            tmpResult = null;
            if (first1) {
              const obj7 = {
                isFullscreen: true,
                channelId: null,
                messageId: null,
                emoji: null,
                loop: false,
                withFadeOut: false,
                onComplete(arg0) {
                  const tmp = arg0;
                  if (!tmp) {
                    closure_1_4(false);
                    ref.current = false;
                  }
                },
              };
              ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
              tmpResult = closure_1_8(first(closure_2[18]), obj7);
            }
            items1[1] = closure_1_8(handleComponentFinish, obj5);
            let tmp6Result =
              visibleContent ===
              closure_0(closure_2[15]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
            if (tmp6Result) {
              const obj8 = { children: items2 };
              const obj9 = {
                style: markAsDismissed.dismissTextContainer,
                variant: "text-sm/medium",
                children: intl.string(closure_0(closure_2[20]).t.QpPMih),
              };
              const Text = closure_0(closure_2[19]).Text;
              intl = closure_0(closure_2[20]).intl;
              items2 = [closure_1_8(Text, obj9)];
              const obj17 = { style: markAsDismissed.dismissTextBackground };
              items2[1] = closure_1_8(handleComponentFinish, obj17);
              tmp6Result = closure_1_10(closure_1_9, obj8);
            }
            items1[2] = tmp6Result;
            return closure_1_8(OverlayView, obj);
          },
        };
        let tmp11 = animationData(10354);
        items = [tmp6(2036).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
        tmp8 = closure_8(tmp11, obj3);
      }
      return tmp8;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { theme: nativeDefault.themes.DARK, children: metroImportAll(closure_16, {}) };
        const ThemeContextProvider = native.ThemeContextProvider;
        const tmp8 = metroImportAll(ThemeContextProvider, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = { theme: nativeDefault.themes.DARK, children: metroImportAll(closure_16, {}) };
      const ThemeContextProvider = native.ThemeContextProvider;
      return metroImportAll(ThemeContextProvider, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default tmp7;
