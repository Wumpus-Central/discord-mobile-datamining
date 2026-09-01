// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

require = arg1;
function BurstReactionAnimationContainerInner() {
  function handleComponentFinish() {
    if (false === ref.current) {
      dependencyMap(null);
    }
  }
  const _require = callback2();
  const tmp = first1(React.useState(null), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(React.useState(false), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  closure_5 = React.useRef(false);
  const effect = React.useEffect(() => {
    function handleEffectReceived(channelId) {
      dependencyMap({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      callback(true);
      closure_5.current = true;
      const result = handleEffectReceived(closure_1_2[8]).triggerHapticFeedback(
        closure_1_1(closure_1_2[9]).IMPACT_HEAVY,
      );
    }
    const subscription = first(709).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      first(709).unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let obj = ReanimatedRexport;
  let fn = function y() {
    if (null == first) {
      let obj = { opacity: 0 };
    } else {
      obj = { opacity: null };
      const tmp11 = callback(4479);
      const withTiming = tmp11.withTiming;
      obj1 = { duration: 300 };
      if (first1) {
        obj[0] = withTiming(1, obj1);
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            closure_1_0(closure_1_2[11]).runOnJS(closure_6)();
            const obj = closure_1_0(closure_1_2[11]);
          }
        };
        obj = { runOnJS: null, handleComponentFinish: null };
        obj[0] = callback(4217).runOnJS;
        obj[1] = handleComponentFinish;
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = closure_1_13;
        obj[0] = withTiming(0, obj1, "respect-motion-settings", fn);
      }
    }
    return obj;
  };
  obj = {
    animationData: first,
    showAnimation: first1,
    withTiming: require("../../../../design/animation/reanimated/timing/timing.tsx").withTiming,
    runOnJS: require("../../../reanimated/ReanimatedRexport.tsx").runOnJS,
    handleComponentFinish,
  };
  fn.__closure = obj;
  fn.__workletHash = 12044515783370;
  fn.__initData = closure_12;
  closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != first) {
    obj = { contentTypes: null, children: null };
    let items = [
      require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx")
        .DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS,
    ];
    obj[0] = items;
    obj[1] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let obj = { style: markAsDismissed.fill, children: null };
      obj = { style: items, children: null };
      items = [markAsDismissed.fill, closure_7];
      obj = {
        activeOpacity: callback(7528).BACKDROP_OPACITY,
        onPress() {
          closure_1_4(false);
          closure_1_5.current = false;
          markAsDismissed(constants.UNKNOWN);
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
        ({ channelId: obj6[1], messageId: obj6[2], emoji: obj6[3] } = first);
        obj3[6] = function onComplete(arg0) {
          if (!arg0) {
            callback(false);
            closure_5.current = false;
          }
        };
        tmpResult = tmp(first(7570), obj3);
      }
      obj2[1] = tmpResult;
      items1[1] = closure_1_8(handleComponentFinish, obj2);
      let tmp6Result =
        markAsDismissed.visibleContent ===
        tmp2(1373).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj4 = { children: null };
        const obj5 = { style: null, variant: "text-sm/medium", children: null };
        obj5[0] = tmp4.dismissTextContainer;
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.QpPMih);
        const items2 = [tmp(tmp2(4474).Text, obj5)];
        const obj6 = { style: null };
        obj6[0] = tmp4.dismissTextBackground;
        items2[1] = tmp(tmp8, obj6);
        obj4[0] = items2;
        tmp6Result = tmp6(closure_1_9, obj4);
      }
      items1[2] = tmp6Result;
      obj[3] = items1;
      obj[1] = closure_1_10(closure_5, obj);
      obj[1] = closure_1_8(first(4217).View, obj);
      return closure_1_8(callback(1297).OverlayView, obj);
    };
    tmp8 = callback(first(10418), obj);
    let tmp11 = first(10418);
  }
  return tmp8;
}
({ TouchableOpacity: c5, View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.BLACK;
createCacheKey.opacity = require("_generateAnimationSource").BACKDROP_OPACITY;
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.flex = 1;
obj1.alignItems = "center";
obj1.justifyContent = "center";
createCacheKey[1] = obj1;
createCacheKey[2] = { position: "absolute", bottom: 48, zIndex: 1 };
createCacheKey[3] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  bottom: -600,
  height: 700,
  width: 700,
};
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = {
  code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}",
};
let closure_13 = {
  code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}",
};
let obj2 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: ThemesDefault.radii.round,
  position: "absolute",
  bottom: -600,
  height: 700,
  width: 700,
};
let result = require("set").fileFinishedImporting(
  "modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx",
);

export default function BurstReactionAnimationContainer() {
  return callback(ManaContext.ThemeContextProvider, {
    theme: ThemesDefault.themes.DARKER,
    children: callback(BurstReactionAnimationContainerInner, {}),
  });
}
