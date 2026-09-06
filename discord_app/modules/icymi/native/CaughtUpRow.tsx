// discord_app/modules/icymi/native/CaughtUpRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(4556).Text);
const createICYMIStyles = fn(16452);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {
    container: null,
    textContainer: null,
    recommendedGuildsContainer: null,
    iconWrapper: null,
    icon: null,
    headerText: null,
    subtitleText: null,
    buttonContainer: null,
    gradient: null,
  };
  obj = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_32,
  };
  obj.container = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 };
  obj.textContainer = obj;
  obj.recommendedGuildsContainer = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  const obj1 = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  obj.iconWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: nativeDefault.space.PX_24,
  };
  obj.icon = { height: 40, width: 40 };
  const obj2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: nativeDefault.space.PX_24,
  };
  obj.headerText = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
  obj.subtitleText = { alignSelf: "center", textAlign: "center" };
  const obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
  obj.buttonContainer = { flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin };
  obj.gradient = { position: "absolute", top: 0, left: 0, right: 0, height: 150 };
  return obj;
});
const __initData = {
  code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}",
};
const __initData2 = {
  code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}",
};
const __initData3 = {
  code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  const tmp = closure_10();
  let obj = visible(4296);
  const sharedValue = obj.useSharedValue(false);
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
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp4[1];
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              dependencyMap(true);
              v1(8351).itemInteracted("caught_up", "caught_up", "press_explore");
              const obj5 = v1(8351);
              const obj1 = {
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "browse_servers_button",
                  actionIntentType: "open",
                  actionDestinationType: null,
                },
              };
              v1(8351).feedItemActioned(obj1);
              const obj6 = v1(8351);
              v1 = 1;
              dependencyMap = 1;
              const obj2 = { value: tmp4(16469).maybeFetchGuildDiscoveryCategories(), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
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
    }),
    [],
  );
  const callback1 = noop.useCallback(() => {
    sharedValue(8351).itemInteracted("caught_up", "caught_up", "press_home");
    const obj = sharedValue(8351);
    sharedValue(8351).feedItemActioned({
      itemId: "caught_up",
      itemType: "caught_up",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "back_to_home_button",
        actionIntentType: "navigate",
        actionDestinationType: "guild_home",
      },
    });
    const obj2 = sharedValue(8351);
    const rootNavigationRef = visible(4418).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("tabs", { screen: "guilds" });
    }
  }, []);
  let obj1 = visible(4296);
  class E {
    constructor() {
      obj = closure_1;
      num = -80;
      if (closure_1.get()) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[13]);
        obj = { duration: 250, easing: null };
        tmp3 = closure_0;
        tmp4 = closure_2;
        Easing = closure_0(closure_2[5]).Easing;
        num2 = 1;
        num3 = 0.5;
        num4 = 1.8;
        tmp5 = Easing;
        num5 = 0.5;
        num6 = 0.5;
        obj.easing = Easing.bezier(0.5, 1.8, 0.5, 1);
        num7 = 0;
        num = obj2.withTiming(0, obj);
      }
      obj1 = { transform: null, opacity: null };
      items = [];
      items[0] = { translateY: num };
      obj1.transform = items;
      num8 = 0;
      if (obj.get()) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj5 = closure_0(closure_2[13]);
        obj2 = { duration: 100, easing: null };
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
        obj2.easing = Easing2.out(Easing3.bezierFn(0.33, 1, 0.68, 1));
        num8 = obj5.withTiming(1, obj2);
      }
      obj1.opacity = num8;
      return obj1;
    }
  }
  obj = { visibleSharedValue: sharedValue, withTiming: visible(4561).withTiming, Easing: visible(4296).Easing };
  E.__closure = obj;
  E.__workletHash = 6575188656069;
  E.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = visible(4296);
  const fn = function b() {
    let num = 0;
    if (sharedValue.get()) {
      let obj1 = ReanimatedRexport2;
      let obj = { duration: 100, easing: null };
      const Easing = ReanimatedRexport2.Easing;
      obj.easing = Easing.inOut(ReanimatedRexport2.Easing.ease);
      const withTimingResult = timing.withTiming(8, obj);
      obj = { duration: 300, easing: null };
      const Easing2 = ReanimatedRexport2.Easing;
      obj.easing = Easing2.out(ReanimatedRexport2.Easing.ease);
      num = obj.withDelay(80, obj1.withSequence(withTimingResult, timing.withTiming(0, obj)));
    }
    obj1 = { transform: null };
    const items = [{ translateY: num }];
    obj1.transform = items;
    return obj1;
  };
  obj = {
    visibleSharedValue: sharedValue,
    withDelay: visible(4296).withDelay,
    withSequence: visible(4296).withSequence,
    withTiming: visible(4561).withTiming,
    Easing: visible(4296).Easing,
  };
  fn.__closure = obj;
  fn.__workletHash = 469742746264;
  fn.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = visible(4296);
  const fn2 = function x() {
    let num = 0;
    if (sharedValue.get()) {
      let obj1 = ReanimatedRexport2;
      let obj = { duration: 150, easing: null };
      const Easing = ReanimatedRexport2.Easing;
      obj.easing = Easing.inOut(ReanimatedRexport2.Easing.ease);
      const withTimingResult = timing.withTiming(8, obj);
      obj = { duration: 300, easing: null };
      const Easing2 = ReanimatedRexport2.Easing;
      obj.easing = Easing2.out(ReanimatedRexport2.Easing.ease);
      num = obj.withDelay(115, obj1.withSequence(withTimingResult, timing.withTiming(0, obj)));
    }
    obj1 = { transform: null };
    const items = [{ translateY: num }];
    obj1.transform = items;
    return obj1;
  };
  obj1 = {
    visibleSharedValue: sharedValue,
    withDelay: visible(4296).withDelay,
    withSequence: visible(4296).withSequence,
    withTiming: visible(4561).withTiming,
    Easing: visible(4296).Easing,
  };
  fn2.__closure = obj1;
  fn2.__workletHash = 14933607481025;
  fn2.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  let obj7 = visible(4262);
  const token = obj7.useToken(sharedValue(576).colors.BACKGROUND_BRAND);
  let obj2 = { children: null };
  obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  obj5 = {
    style: null,
    children: closure_7(visible(13011).FlashIcon, { size: "custom", style: tmp.icon, color: "background-brand" }),
  };
  const items1 = [tmp.iconWrapper, animatedStyle];
  obj5.style = items1;
  const items2 = [closure_7(sharedValue(4296).View, obj5), ,];
  obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: null, children: null };
  const items3 = [tmp.headerText, animatedStyle1];
  obj7.style = items3;
  const intl = visible(1114).intl;
  obj7.children = intl.string(visible(1114).t.xjxffq);
  items2[1] = closure_7(closure_9, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
  const items4 = [tmp.subtitleText, animatedStyle2];
  obj8.style = items4;
  const intl2 = visible(1114).intl;
  obj8.children = intl2.string(visible(1114).t.sAApb0);
  items2[2] = closure_7(closure_9, obj8);
  obj4.children = items2;
  const items5 = [closure_8(View, obj4)];
  const obj9 = { style: tmp.buttonContainer, children: null };
  const obj10 = { size: "md", text: null, grow: true, variant: "primary", onPress: null, loading: null };
  const intl3 = visible(1114).intl;
  obj10.text = intl3.string(visible(1114).t.lNJYV8);
  obj10.onPress = callback;
  obj10.loading = tmp4[0];
  const items6 = [closure_7(visible(4975).Button, obj10)];
  const obj11 = { size: "md", text: null, grow: true, variant: "secondary", onPress: null };
  const intl4 = visible(1114).intl;
  obj11.text = intl4.string(visible(1114).t.AGrUbj);
  obj11.onPress = callback1;
  items6[1] = closure_7(visible(4975).Button, obj11);
  obj9.children = items6;
  items5[1] = closure_8(View, obj9);
  obj3.children = items5;
  const items7 = [closure_8(View, obj3), closure_7(visible(16491).Separator, {})];
  const obj12 = {
    style: tmp.gradient,
    start: visible(1093).VerticalGradient.START,
    end: visible(1093).VerticalGradient.END,
    colors: null,
    pointerEvents: "none",
  };
  let obj6 = { size: "custom", style: tmp.icon, color: "background-brand" };
  const tmp11 = sharedValue(4987);
  const obj20 = sharedValue(672)(token);
  const items8 = [sharedValue(672)(token).alpha(0.2).hex()];
  const alphaResult = sharedValue(672)(token).alpha(0.2);
  const obj22 = sharedValue(672)(token);
  items8[1] = sharedValue(672)(token).alpha(0).hex();
  obj12.colors = items8;
  items7[2] = closure_7(tmp11, obj12);
  obj2.children = items7;
  return closure_8(View, obj2);
}
