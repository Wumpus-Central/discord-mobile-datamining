// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
      const result = handleEffectReceived(4528).triggerHapticFeedback(first(4529).IMPACT_HEAVY);
    }
    const subscription = first(573).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      DispatcherDefault.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  require("ReanimatedRexport");
  let fn = function y() {
    if (null == first) {
      let obj = { opacity: 0 };
    } else {
      obj = { opacity: null };
      const tmp11 = timing;
      const withTiming = tmp11.withTiming;
      const obj1 = { duration: 300 };
      if (first1) {
        obj.opacity = withTiming(1, obj1);
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            closure_0(dependencyMap[11]).runOnJS(handleComponentFinish)();
            const obj = closure_0(dependencyMap[11]);
          }
        };
        obj = { runOnJS: ReanimatedRexport.runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = __initData;
        obj.opacity = withTiming(0, obj1, "respect-motion-settings", fn);
      }
    }
    return obj;
  };
  let obj = {
    animationData,
    showAnimation: first1,
    withTiming: require("timing").withTiming,
    runOnJS: require("ReanimatedRexport").runOnJS,
    handleComponentFinish,
  };
  fn.__closure = obj;
  fn.__workletHash = 12044515783370;
  fn.__initData = __initData;
  closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != animationData) {
    obj = { contentTypes: null, children: null };
    let items = [require("dismissible_content").DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj.contentTypes = items;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let obj = { style: markAsDismissed.fill, children: null };
      obj = { style: null, children: null };
      const items = [markAsDismissed.fill, closure_7];
      obj.style = items;
      obj = {
        activeOpacity: closure_0(7784).BACKDROP_OPACITY,
        onPress() {
          closure_4(false);
          closure_5.current = false;
          markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        style: markAsDismissed.fill,
        children: null,
      };
      const items1 = [closure_1_8(handleComponentFinish, { style: markAsDismissed.background }), ,];
      const obj2 = { style: markAsDismissed.fill, children: null };
      let tmpResult = null;
      if (first1) {
        const obj3 = {
          isFullscreen: true,
          channelId: null,
          messageId: null,
          emoji: null,
          loop: false,
          withFadeOut: false,
          onComplete: null,
        };
        ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
        obj3.onComplete = function onComplete(arg0) {
          if (!arg0) {
            closure_1_4(false);
            ref.current = false;
          }
        };
        tmpResult = closure_1_8(first(7826), obj3);
      }
      obj2.children = tmpResult;
      items1[1] = closure_1_8(handleComponentFinish, obj2);
      let tmp6Result =
        markAsDismissed.visibleContent ===
        closure_0(1943).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj4 = { children: null };
        const obj5 = { style: tmp4.dismissTextContainer, variant: "text-sm/medium", children: null };
        const intl = closure_0(1114).intl;
        obj5.children = intl.string(closure_0(1114).t.QpPMih);
        const items2 = [closure_1_8(closure_0(4556).Text, obj5)];
        const obj6 = { style: tmp4.dismissTextBackground };
        items2[1] = closure_1_8(handleComponentFinish, obj6);
        obj4.children = items2;
        tmp6Result = closure_1_10(closure_1_9, obj4);
      }
      items1[2] = tmp6Result;
      obj.children = items1;
      obj.children = closure_1_10(closure_5, obj);
      obj.children = closure_1_8(first(4296).View, obj);
      return closure_1_8(closure_0(1178).OverlayView, obj);
    };
    tmp8 = closure_8(animationData(10625), obj);
    let tmp11 = animationData(10625);
  }
  return tmp8;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.BLACK;
createStyles.opacity = fn(7784).BACKDROP_OPACITY;
createStyles.background = createStyles;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.flex = 1;
obj1.alignItems = "center";
obj1.justifyContent = "center";
createStyles.fill = obj1;
createStyles.dismissTextContainer = { position: "absolute", bottom: 48, zIndex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  bottom: -600,
  height: 700,
  width: 700,
};
createStyles.dismissTextBackground = size;
let closure_11 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}",
};
let closure_13 = {
  code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  return React6(native.ThemeContextProvider, {
    theme: nativeDefault.themes.DARKER,
    children: React6(BurstReactionAnimationContainerInner, {}),
  });
}
