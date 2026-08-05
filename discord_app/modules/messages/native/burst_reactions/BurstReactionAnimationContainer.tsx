// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx
import _slicedToArray from "_slicedToArray";
import ManaContext from "ManaContext";
import get_ActivityIndicator from "Text";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { DismissibleContent } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { CONFIG_NEVER_ANIMATE_TIMING } from "../../../../design/animation/reanimated/timing/timing.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

let StyleSheet;
let c10;
let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function BurstReactionAnimationContainerInner() {
  function handleComponentFinish() {
    if (false === ref.current) {
      dependencyMap(null);
    }
  }
  const _require = createCacheKey();
  const tmp = first1(React.useState(null), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const tmp3 = first1(React.useState(false), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  let closure_5 = React.useRef(false);
  const effect = React.useEffect(() => {
    function handleEffectReceived(channelId) {
      dependencyMap({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      callback(true);
      closure_5.current = true;
      const result = handleEffectReceived(outer1_2[8]).triggerHapticFeedback(outer1_1(outer1_2[9]).IMPACT_HEAVY);
    }
    const subscription = first(709).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      first(709).unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let obj = _ReanimatedRexport;
  let fn = function y() {
    if (null == first) {
      let obj = { opacity: 0 };
    } else {
      obj = { opacity: null };
      const tmp11 = callback(4286);
      const withTiming = tmp11.withTiming;
      const obj1 = { duration: 300 };
      if (first1) {
        obj[0] = withTiming(1, obj1);
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            outer1_0(outer1_2[11]).runOnJS(closure_6)();
            const obj = outer1_0(outer1_2[11]);
          }
        };
        obj = { runOnJS: null, handleComponentFinish: null };
        obj[0] = callback(4146).runOnJS;
        obj[1] = handleComponentFinish;
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = outer1_13;
        obj[0] = withTiming(0, obj1, "respect-motion-settings", fn);
      }
    }
    return obj;
  };
  obj = { animationData: first, showAnimation: first1, withTiming: _CONFIG_NEVER_ANIMATE_TIMING.withTiming, runOnJS: _ReanimatedRexport.runOnJS, handleComponentFinish };
  fn.__closure = obj;
  fn.__workletHash = 12044515783370;
  fn.__initData = closure_12;
  let closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != first) {
    obj = { contentTypes: null, children: null };
    let items = [_DismissibleContent.DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj[0] = items;
    obj[1] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let obj = { style: markAsDismissed.fill, children: null };
      obj = { style: items, children: null };
      items = [markAsDismissed.fill, closure_7];
      obj = { activeOpacity: null, onPress: null, style: null, children: null };
      obj[0] = callback(7163).BACKDROP_OPACITY;
      obj[1] = function onPress() {
        outer1_4(false);
        outer1_5.current = false;
        markAsDismissed(constants.UNKNOWN);
      };
      obj[2] = markAsDismissed.fill;
      const items1 = [outer1_8(handleComponentFinish, { style: markAsDismissed.background }), , ];
      const obj2 = { style: markAsDismissed.fill, children: null };
      let tmpResult = null;
      if (first1) {
        const obj3 = { isFullscreen: true, channelId: null, messageId: null, emoji: null, loop: false, withFadeOut: false, onComplete: null };
        ({ channelId: obj6[1], messageId: obj6[2], emoji: obj6[3] } = first);
        obj3[6] = function onComplete() {
          callback(false);
          closure_5.current = false;
        };
        tmpResult = tmp(first(7205), obj3);
      }
      obj2[1] = tmpResult;
      items1[1] = outer1_8(handleComponentFinish, obj2);
      let tmp6Result = markAsDismissed.visibleContent === tmp2(1358).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp6Result) {
        const obj4 = { children: null };
        const obj5 = { style: null, variant: "text-sm/medium", children: null };
        obj5[0] = tmp4.dismissTextContainer;
        const intl = tmp2(1236).intl;
        obj5[2] = intl.string(tmp2(1236).t.QpPMih);
        const items2 = [tmp(tmp2(4281).Text, obj5), ];
        const obj6 = { style: null };
        obj6[0] = tmp4.dismissTextBackground;
        items2[1] = tmp(tmp8, obj6);
        obj4[0] = items2;
        tmp6Result = tmp6(outer1_9, obj4);
      }
      items1[2] = tmp6Result;
      obj[3] = items1;
      obj[1] = outer1_10(closure_5, obj);
      obj[1] = outer1_8(first(4146).View, obj);
      return outer1_8(callback(1297).OverlayView, obj);
    };
    tmp8 = callback(first(9916), obj);
    let tmp11 = first(9916);
  }
  return tmp8;
}
({ TouchableOpacity: c5, View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { background: null, fill: null, dismissTextContainer: null, dismissTextBackground: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BLACK;
createCacheKey.opacity = require("_generateAnimationSource").BACKDROP_OPACITY;
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.flex = 1;
obj1.alignItems = "center";
obj1.justifyContent = "center";
createCacheKey[1] = obj1;
createCacheKey[2] = { position: "absolute", bottom: 48, zIndex: 1 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: require("Themes").radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: require("Themes").radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  const obj = { theme: null, children: null };
  obj[0] = Themes.themes.DARKER;
  obj[1] = callback(BurstReactionAnimationContainerInner, {});
  return callback(ManaContext.ThemeContextProvider, obj);
};