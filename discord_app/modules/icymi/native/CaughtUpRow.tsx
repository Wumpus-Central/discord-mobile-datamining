// === Module 16158: CaughtUpRow ===

// Module 16158 (CaughtUpRow)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(4832).Text);
const createICYMIStyles = fn(16095);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = { container: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_32 }, textContainer: null, recommendedGuildsContainer: null, iconWrapper: null, icon: null, headerText: null, subtitleText: null, buttonContainer: null, gradient: null };
  const obj2 = { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_32 };
  obj.textContainer = { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 };
  const obj3 = { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 };
  obj.recommendedGuildsContainer = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  obj.iconWrapper = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.icon = { height: 40, width: 40 };
  const obj5 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.headerText = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
  obj.subtitleText = { alignSelf: "center", textAlign: "center" };
  const obj6 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
  obj.buttonContainer = { flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin };
  obj.gradient = { position: "absolute", top: 0, left: 0, right: 0, height: 150 };
  return obj;
});
const __initData = { code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}" };
const __initData2 = { code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
const __initData3 = { code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  dependencyMap = undefined;
  const tmp = closure_10();
  const sharedValue = visible(4566).useSharedValue(false);
  let items = [visible, sharedValue];
  const effect = noop.useEffect(() => {
    let tmp2 = visible;
    if (visible) {
      tmp2 = sharedValue.get() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = sharedValue.set(true);
      }, 500);
    }
  }, items);
  [obj17.loading, dependencyMap] = noop.useState(false);
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            dependencyMap(true);
            v1(7799).itemInteracted("caught_up", "caught_up", "press_explore");
            const obj5 = v1(7799);
            const obj4 = { itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "browse_servers_button", actionIntentType: "open", actionDestinationType: null } };
            v1(7799).feedItemActioned(obj4);
            const obj6 = v1(7799);
            v1 = 1;
            dependencyMap = 1;
            const obj7 = { value: tmp4(16112).maybeFetchGuildDiscoveryCategories(), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            closure_0(c2[11]).pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
            const timerId = setTimeout(() => {
              closure_1_2(false);
            }, 500);
          }, 100);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        dependencyMap = tmp;
        throw tmp8;
      }
    }
  }), []);
  const callback1 = noop.useCallback(() => {
    sharedValue(7799).itemInteracted("caught_up", "caught_up", "press_home");
    const obj = sharedValue(7799);
    sharedValue(7799).feedItemActioned({ itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "back_to_home_button", actionIntentType: "navigate", actionDestinationType: "guild_home" } });
    const obj2 = sharedValue(7799);
    const rootNavigationRef = visible(4693).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("tabs", { screen: "guilds" });
    }
  }, []);
  let obj = visible(4566);
  class E {
    constructor() {
      obj = closure_1;
      num = -80;
      if (closure_1.get()) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[13]);
        obj1 = { duration: 250, easing: null };
        tmp3 = closure_0;
        tmp4 = closure_2;
        Easing = closure_0(closure_2[5]).Easing;
        num2 = 1;
        num3 = 0.5;
        num4 = 1.8;
        tmp5 = Easing;
        num5 = 0.5;
        num6 = 0.5;
        obj1.easing = Easing.bezier(0.5, 1.8, 0.5, 1);
        num7 = 0;
        num = obj2.withTiming(0, obj1);
      }
      obj7 = { transform: null, opacity: null };
      items = [];
      items[0] = { translateY: num };
      obj7.transform = items;
      num8 = 0;
      if (obj.get()) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj5 = closure_0(closure_2[13]);
        obj8 = { duration: 100, easing: null };
        tmp8 = closure_0;
        tmp9 = closure_2;
        Easing2 = closure_0(closure_2[5]).Easing;
        tmp10 = closure_0;
        tmp11 = closure_2;
        Easing3 = closure_0(closure_2[5]).Easing;
        num9 = 1;
        num10 = 0.68;
        num11 = 0.33;
        tmp12 = Easing3;
        num12 = 1;
        num13 = 1;
        obj8.easing = Easing2.out(Easing3.bezierFn(0.33, 1, 0.68, 1));
        num8 = obj5.withTiming(1, obj8);
      }
      obj7.opacity = num8;
      return obj7;
    }
  }
  let obj2 = visible(4566);
  E.__closure = { visibleSharedValue: sharedValue, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  E.__workletHash = 6575188656069;
  E.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj3 = { visibleSharedValue: sharedValue, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  const fn = function b() {
    let num = 0;
    if (sharedValue.get()) {
      const obj = ReanimatedRexport2;
      const obj2 = ReanimatedRexport2;
      const obj4 = { duration: 100, easing: null };
      const Easing = ReanimatedRexport2.Easing;
      obj4.easing = Easing.inOut(ReanimatedRexport2.Easing.ease);
      const withTimingResult = timing.withTiming(8, obj4);
      const obj6 = { duration: 300, easing: null };
      const Easing2 = ReanimatedRexport2.Easing;
      obj6.easing = Easing2.out(ReanimatedRexport2.Easing.ease);
      num = obj.withDelay(80, obj2.withSequence(withTimingResult, timing.withTiming(0, obj6)));
    }
    const obj7 = { transform: null };
    const items = [{ translateY: num }];
    obj7.transform = items;
    return obj7;
  };
  let obj4 = visible(4566);
  fn.__closure = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  fn.__workletHash = 469742746264;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj5 = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  const fn2 = function x() {
    let num = 0;
    if (sharedValue.get()) {
      const obj = ReanimatedRexport2;
      const obj2 = ReanimatedRexport2;
      const obj4 = { duration: 150, easing: null };
      const Easing = ReanimatedRexport2.Easing;
      obj4.easing = Easing.inOut(ReanimatedRexport2.Easing.ease);
      const withTimingResult = timing.withTiming(8, obj4);
      const obj6 = { duration: 300, easing: null };
      const Easing2 = ReanimatedRexport2.Easing;
      obj6.easing = Easing2.out(ReanimatedRexport2.Easing.ease);
      num = obj.withDelay(115, obj2.withSequence(withTimingResult, timing.withTiming(0, obj6)));
    }
    const obj7 = { transform: null };
    const items = [{ translateY: num }];
    obj7.transform = items;
    return obj7;
  };
  let obj6 = visible(4566);
  fn2.__closure = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  fn2.__workletHash = 14933607481025;
  fn2.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(fn2);
  let obj7 = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  const token = visible(4531).useToken(sharedValue(576).colors.BACKGROUND_BRAND);
  const obj9 = { children: null };
  const obj10 = { style: tmp.container, children: null };
  const obj11 = { style: tmp.textContainer, children: null };
  const obj12 = { style: null, children: closure_7(visible(12567).FlashIcon, { size: "custom", style: tmp.icon, color: "background-brand" }) };
  const items1 = [tmp.iconWrapper, animatedStyle];
  obj12.style = items1;
  const items2 = [closure_7(sharedValue(4566).View, obj12), , ];
  const obj14 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: null, children: null };
  const items3 = [tmp.headerText, animatedStyle1];
  obj14.style = items3;
  const intl = visible(1115).intl;
  obj14.children = intl.string(visible(1115).t.xjxffq);
  items2[1] = closure_7(closure_9, obj14);
  const obj15 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
  const items4 = [tmp.subtitleText, animatedStyle2];
  obj15.style = items4;
  const intl2 = visible(1115).intl;
  obj15.children = intl2.string(visible(1115).t.sAApb0);
  items2[2] = closure_7(closure_9, obj15);
  obj11.children = items2;
  const items5 = [closure_8(View, obj11), ];
  const obj16 = { style: tmp.buttonContainer, children: null };
  const obj17 = { size: "md", text: null, grow: true, variant: "primary", onPress: null, loading: null };
  const intl3 = visible(1115).intl;
  obj17.text = intl3.string(visible(1115).t.lNJYV8);
  obj17.onPress = callback;
  const items6 = [closure_7(visible(5281).Button, obj17), ];
  const obj18 = { size: "md", text: null, grow: true, variant: "secondary", onPress: null };
  const intl4 = visible(1115).intl;
  obj18.text = intl4.string(visible(1115).t.AGrUbj);
  obj18.onPress = callback1;
  items6[1] = closure_7(visible(5281).Button, obj18);
  obj16.children = items6;
  items5[1] = closure_8(View, obj16);
  obj10.children = items5;
  const items7 = [closure_8(View, obj10), closure_7(visible(16134).Separator, {}), ];
  const obj19 = { style: tmp.gradient, start: null, end: null, colors: null, pointerEvents: "none" };
  const obj13 = { size: "custom", style: tmp.icon, color: "background-brand" };
  const obj8 = visible(4531);
  obj19.start = visible(1094).VerticalGradient.START;
  obj19.end = visible(1094).VerticalGradient.END;
  const tmp11 = sharedValue(5293);
  const obj20 = sharedValue(672)(token);
  const items8 = [sharedValue(672)(token).alpha(0.2).hex(), ];
  const alphaResult = sharedValue(672)(token).alpha(0.2);
  const obj22 = sharedValue(672)(token);
  items8[1] = sharedValue(672)(token).alpha(0).hex();
  obj19.colors = items8;
  items7[2] = closure_7(tmp11, obj19);
  obj9.children = items7;
  return closure_8(View, obj9);
};