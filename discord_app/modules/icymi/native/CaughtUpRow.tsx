// === Module 15407: ExploreServersRow ===

// Module 15407 (ExploreServersRow)
import module_4054 from "module_4054";
import _slicedToArray from "_slicedToArray";
import LinearGradient from "LinearGradient";
import { View } from "Button";
import jsxProd from "n";
import createICYMIStyles from "createICYMIStyles";
import importDefaultResult from "module_4054";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = require("module_4054").createAnimatedComponent(require("Text").Text);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { container: null, textContainer: null, recommendedGuildsContainer: null, iconWrapper: null, icon: null, headerText: null, subtitleText: null, buttonContainer: null, gradient: null };
  obj = { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: importDefault(712).space.PX_32 };
  obj[0] = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: importDefault(712).space.PX_24 };
  obj[1] = obj;
  obj[2] = { flex: 1, marginBottom: importDefault(712).space.PX_24 };
  const obj1 = { flex: 1, marginBottom: importDefault(712).space.PX_24 };
  obj[3] = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: importDefault(712).space.PX_24 };
  obj[4] = { height: 40, width: 40 };
  const obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: importDefault(712).space.PX_24 };
  obj[5] = { alignSelf: "center", marginBottom: importDefault(712).space.PX_8, textAlign: "center" };
  obj[6] = { alignSelf: "center", textAlign: "center" };
  const obj3 = { alignSelf: "center", marginBottom: importDefault(712).space.PX_8, textAlign: "center" };
  obj[7] = { flex: 1, width: "100%", gap: importDefault(712).space.PX_12, paddingHorizontal: margin.margin };
  obj[8] = { position: "absolute", top: 0, left: 0, right: 0, height: 150 };
  return obj;
});
let closure_11 = { code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}" };
let closure_12 = { code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let closure_13 = { code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let result = require("noop").fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  let sharedValue;
  let dependencyMap;
  const tmp = callback5();
  let obj = visible(4054);
  sharedValue = obj.useSharedValue(false);
  let items = [visible, sharedValue];
  const effect = React.useEffect(() => {
    let tmp2 = visible;
    if (visible) {
      tmp2 = sharedValue.get() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = closure_1.set(true);
      }, 500);
    }
  }, items);
  const tmp4 = callback2(React.useState(false), 2);
  dependencyMap = tmp4[1];
  callback = React.useCallback(callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            dependencyMap(true);
            v0(8189).itemInteracted("caught_up", "caught_up", "press_explore");
            const obj5 = v0(8189);
            const obj1 = { itemId: "caught_up", itemType: "caught_up", actionParameters: null };
            obj1[2] = { actionGestureType: "press", actionTargetElement: "browse_servers_button", actionIntentType: "open", actionDestinationType: null };
            v0(8189).feedItemActioned(obj1);
            const obj6 = v0(8189);
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_0(15361).maybeFetchGuildDiscoveryCategories();
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            tmp4(table[11]).pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
            const timerId = setTimeout(() => {
              callback(false);
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
  const callback1 = React.useCallback(() => {
    sharedValue(8189).itemInteracted("caught_up", "caught_up", "press_home");
    const obj = sharedValue(8189);
    sharedValue(8189).feedItemActioned({ itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "back_to_home_button", actionIntentType: "navigate", actionDestinationType: "guild_home" } });
    const obj2 = sharedValue(8189);
    const rootNavigationRef = visible(4045).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("tabs", { screen: "guilds" });
    }
  }, []);
  let obj1 = visible(4054);
  class E {
    constructor() {
      obj = c1;
      num = -80;
      if (c1.get()) {
        tmp = visible;
        tmp2 = useState;
        obj2 = visible(useState[13]);
        obj = { duration: 250, easing: null };
        tmp3 = visible;
        tmp4 = useState;
        Easing = visible(useState[5]).Easing;
        num2 = 1;
        num3 = 0.5;
        num4 = 1.8;
        tmp5 = Easing;
        num5 = 0.5;
        num6 = 0.5;
        obj[1] = Easing.bezier(0.5, 1.8, 0.5, 1);
        num7 = 0;
        num = obj2.withTiming(0, obj);
      }
      obj1 = { transform: items, opacity: null };
      items = [];
      items[0] = { translateY: num };
      num8 = 0;
      if (obj.get()) {
        tmp6 = visible;
        tmp7 = useState;
        obj5 = visible(useState[13]);
        obj2 = { duration: 100, easing: null };
        tmp8 = visible;
        tmp9 = useState;
        Easing2 = visible(useState[5]).Easing;
        tmp10 = visible;
        tmp11 = useState;
        Easing3 = visible(useState[5]).Easing;
        num9 = 1;
        num10 = 0.68;
        num11 = 0.33;
        tmp12 = Easing3;
        num12 = 1;
        num13 = 1;
        obj2[1] = Easing2.out(Easing3.bezierFn(0.33, 1, 0.68, 1));
        num8 = obj5.withTiming(1, obj2);
      }
      obj1[1] = num8;
      return obj1;
    }
  }
  obj = { visibleSharedValue: sharedValue, withTiming: visible(4194).withTiming, Easing: visible(4054).Easing };
  E.__closure = obj;
  E.__workletHash = 6575188656069;
  E.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = visible(4054);
  const fn = function b() {
    let num = 0;
    if (sharedValue.get()) {
      let obj = visible(4054);
      const obj2 = visible(4054);
      obj = { duration: 100, easing: null };
      const Easing = visible(4054).Easing;
      obj[1] = Easing.inOut(visible(4054).Easing.ease);
      const obj3 = visible(4194);
      const withTimingResult = visible(4194).withTiming(8, obj);
      obj = { duration: 300, easing: null };
      const Easing2 = visible(4054).Easing;
      obj[1] = Easing2.out(visible(4054).Easing.ease);
      num = obj.withDelay(80, obj2.withSequence(withTimingResult, visible(4194).withTiming(0, obj)));
      const obj5 = visible(4194);
    }
    const transform = [{ translateY: num }];
    return { transform };
  };
  obj = { visibleSharedValue: sharedValue, withDelay: visible(4054).withDelay, withSequence: visible(4054).withSequence, withTiming: visible(4194).withTiming, Easing: visible(4054).Easing };
  fn.__closure = obj;
  fn.__workletHash = 469742746264;
  fn.__initData = closure_12;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = visible(4054);
  const fn2 = function x() {
    let num = 0;
    if (sharedValue.get()) {
      let obj = visible(4054);
      const obj2 = visible(4054);
      obj = { duration: 150, easing: null };
      const Easing = visible(4054).Easing;
      obj[1] = Easing.inOut(visible(4054).Easing.ease);
      const obj3 = visible(4194);
      const withTimingResult = visible(4194).withTiming(8, obj);
      obj = { duration: 300, easing: null };
      const Easing2 = visible(4054).Easing;
      obj[1] = Easing2.out(visible(4054).Easing.ease);
      num = obj.withDelay(115, obj2.withSequence(withTimingResult, visible(4194).withTiming(0, obj)));
      const obj5 = visible(4194);
    }
    const transform = [{ translateY: num }];
    return { transform };
  };
  obj1 = { visibleSharedValue: sharedValue, withDelay: visible(4054).withDelay, withSequence: visible(4054).withSequence, withTiming: visible(4194).withTiming, Easing: visible(4054).Easing };
  fn2.__closure = obj1;
  fn2.__workletHash = 14933607481025;
  fn2.__initData = closure_13;
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  let obj7 = visible(3897);
  const token = obj7.useToken(sharedValue(712).colors.BACKGROUND_BRAND);
  let obj2 = { children: null };
  obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  obj5 = { style: items1, children: null };
  items1 = [tmp.iconWrapper, animatedStyle];
  obj5[1] = callback3(visible(12016).FlashIcon, { size: "custom", style: tmp.icon, color: "background-brand" });
  const items2 = [callback3(sharedValue(4054).View, obj5), , ];
  obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: items3, children: null };
  items3 = [tmp.headerText, animatedStyle1];
  const intl = visible(1236).intl;
  obj7[3] = intl.string(visible(1236).t.xjxffq);
  items2[1] = callback3(closure_9, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: items4, children: null };
  items4 = [tmp.subtitleText, animatedStyle2];
  const intl2 = visible(1236).intl;
  obj8[3] = intl2.string(visible(1236).t.sAApb0);
  items2[2] = callback3(closure_9, obj8);
  obj4[1] = items2;
  const items5 = [callback4(View, obj4), ];
  const obj9 = { style: tmp.buttonContainer, children: null };
  const obj10 = { size: "md", text: null, grow: true, variant: "primary", onPress: null, loading: null };
  const intl3 = visible(1236).intl;
  obj10[1] = intl3.string(visible(1236).t.lNJYV8);
  obj10[4] = callback;
  obj10[5] = tmp4[0];
  const items6 = [callback3(visible(4604).Button, obj10), ];
  const obj11 = { size: "md", text: null, grow: true, variant: "secondary", onPress: null };
  const intl4 = visible(1236).intl;
  obj11[1] = intl4.string(visible(1236).t.AGrUbj);
  obj11[4] = callback1;
  items6[1] = callback3(visible(4604).Button, obj11);
  obj9[1] = items6;
  items5[1] = callback4(View, obj9);
  obj3[1] = items5;
  const items7 = [callback4(View, obj3), callback3(visible(15383).Separator, {}), ];
  const obj12 = { style: tmp.gradient, start: null, end: null, colors: null, pointerEvents: "none" };
  obj12[1] = visible(691).VerticalGradient.START;
  obj12[2] = visible(691).VerticalGradient.END;
  let obj6 = { size: "custom", style: tmp.icon, color: "background-brand" };
  const tmp11 = sharedValue(4615);
  const obj20 = sharedValue(689)(token);
  const items8 = [sharedValue(689)(token).alpha(0.2).hex(), ];
  const alphaResult = sharedValue(689)(token).alpha(0.2);
  const obj22 = sharedValue(689)(token);
  items8[1] = sharedValue(689)(token).alpha(0).hex();
  obj12[3] = items8;
  items7[2] = callback3(tmp11, obj12);
  obj2[0] = items7;
  return callback4(View, obj2);
};