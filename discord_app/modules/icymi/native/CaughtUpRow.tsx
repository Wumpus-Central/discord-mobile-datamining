// discord_app/modules/icymi/native/CaughtUpRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(5087).Text);
const createICYMIStyles = fn(16820);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = {
    container: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: nativeDefault.space.PX_32,
    },
    textContainer: null,
    recommendedGuildsContainer: null,
    iconWrapper: null,
    icon: null,
    headerText: null,
    subtitleText: null,
    buttonContainer: null,
    gradient: null,
  };
  const obj2 = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_32,
  };
  obj.textContainer = { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 };
  const obj3 = { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 };
  obj.recommendedGuildsContainer = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, marginBottom: nativeDefault.space.PX_24 };
  obj.iconWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: nativeDefault.space.PX_24,
  };
  obj.icon = { height: 40, width: 40 };
  const obj5 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: nativeDefault.space.PX_24,
  };
  obj.headerText = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
  obj.subtitleText = { alignSelf: "center", textAlign: "center" };
  const obj6 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
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
const __initData4 = {
  code: "function CaughtUpRowTsx4(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}",
};
const __initData5 = {
  code: "function CaughtUpRowTsx5(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}",
};
const __initData6 = {
  code: "function CaughtUpRowTsx6(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExploreServersRow(visible) {
      const cResult = require("c").c(56);
      visible = visible.visible;
      _require = visible;
      const tmp4 = closure_10();
      let obj = require("c");
      const sharedValue = require("ReanimatedRexport").useSharedValue(false);
      if (cResult[0] === visible) {
        if (cResult[1] === sharedValue) {
          let tmp6 = cResult[2];
          let tmp7 = cResult[3];
        }
        const effect = noop.useEffect(tmp6, tmp7);
        [r10035, dependencyMap] = noop.useState(false);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          _require = asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    v3(true);
                    sharedValue(8455).itemInteracted("caught_up", "caught_up", "press_explore");
                    const obj5 = sharedValue(8455);
                    const obj4 = {
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "browse_servers_button",
                        actionIntentType: "open",
                        actionDestinationType: null,
                      },
                    };
                    sharedValue(8455).feedItemActioned(obj4);
                    const obj6 = sharedValue(8455);
                    c1 = 1;
                    v3 = 1;
                    const obj7 = { value: tmp4(16839).maybeFetchGuildDiscoveryCategories(), done: false };
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  const _setTimeout = setTimeout;
                  let timerId = setTimeout(() => {
                    closure_0(c2[13]).pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
                    const timerId = setTimeout(() => {
                      closure_1_2(false);
                    }, 500);
                  }, 100);
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp8) {
                v3 = tmp;
                throw tmp8;
              }
            }
          });
          function t3() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[4] = t3;
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              obj = closure_1(closure_2[11]);
              itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
              obj2 = closure_1(closure_2[11]);
              feedItemActionedResult = obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              obj3 = closure_0(closure_2[14]);
              rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "tabs";
                navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
              return;
            }
          }
          cResult[5] = A;
        } else {
          class A {
            constructor() {
              obj = closure_1(closure_2[11]);
              itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
              obj2 = closure_1(closure_2[11]);
              feedItemActionedResult = obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              obj3 = closure_0(closure_2[14]);
              rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "tabs";
                navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
              return;
            }
          }
        }
        const tmp12 = _slicedToArray(noop.useState(false), 2);
        class R {
          constructor() {
            obj = closure_1;
            num = -80;
            if (closure_1.get()) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[15]);
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
              obj5 = closure_0(closure_2[15]);
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
        let obj3 = { visibleSharedValue: sharedValue, withTiming: tmp(5092).withTiming, Easing: tmp(4811).Easing };
        R.__closure = obj3;
        R.__workletHash = 6575188656069;
        R.__initData = __initData;
        const animatedStyle = tmp(4811).useAnimatedStyle(R);
        const tmpResult = tmp(4811);
        class Y {
          constructor() {
            num = 0;
            if (closure_1.get()) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[5]);
              obj2 = closure_0(closure_2[5]);
              obj3 = closure_0(closure_2[15]);
              obj1 = { duration: 100, easing: null };
              Easing = closure_0(closure_2[5]).Easing;
              obj1.easing = Easing.inOut(closure_0(closure_2[5]).Easing.ease);
              num2 = 8;
              withTimingResult = obj3.withTiming(8, obj1);
              obj5 = closure_0(closure_2[15]);
              obj8 = { duration: 300, easing: null };
              Easing2 = closure_0(closure_2[5]).Easing;
              obj8.easing = Easing2.out(closure_0(closure_2[5]).Easing.ease);
              num3 = 80;
              num = obj.withDelay(80, obj2.withSequence(withTimingResult, obj5.withTiming(0, obj8)));
            }
            obj9 = { transform: null };
            items = [];
            items[0] = { translateY: num };
            obj9.transform = items;
            return obj9;
          }
        }
        let obj4 = {
          visibleSharedValue: sharedValue,
          withDelay: tmp(4811).withDelay,
          withSequence: tmp(4811).withSequence,
          withTiming: tmp(5092).withTiming,
          Easing: tmp(4811).Easing,
        };
        Y.__closure = obj4;
        Y.__workletHash = 469742746264;
        Y.__initData = __initData2;
        const animatedStyle1 = tmp(4811).useAnimatedStyle(Y);
        const tmpResult4 = tmp(4811);
        const fn2 = function k() {
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
        let obj5 = {
          visibleSharedValue: sharedValue,
          withDelay: tmp(4811).withDelay,
          withSequence: tmp(4811).withSequence,
          withTiming: tmp(5092).withTiming,
          Easing: tmp(4811).Easing,
        };
        fn2.__closure = obj5;
        fn2.__workletHash = 14933607481025;
        fn2.__initData = __initData3;
        const animatedStyle2 = tmp(4811).useAnimatedStyle(fn2);
        const tmpResult5 = tmp(4811);
        const token = tmp(4779).useToken(sharedValue(587).colors.BACKGROUND_BRAND);
        if (cResult[6] === animatedStyle) {
          class A {
            constructor() {
              obj = closure_1(closure_2[11]);
              itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
              obj2 = closure_1(closure_2[11]);
              feedItemActionedResult = obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              obj3 = closure_0(closure_2[14]);
              rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                str = "tabs";
                navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
              return;
            }
          }
          if (cResult[9] !== tmp4.icon) {
            class A {
              constructor() {
                obj = closure_1(closure_2[11]);
                itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                obj2 = closure_1(closure_2[11]);
                feedItemActionedResult = obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                obj3 = closure_0(closure_2[14]);
                rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "tabs";
                  navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
                return;
              }
            }
            let obj6 = { size: "custom", style: tmp4.icon, color: "background-brand" };
            const tmp28 = closure_7(tmp(13084).FlashIcon, obj6);
            cResult[9] = tmp4.icon;
            cResult[10] = tmp28;
          } else {
            class A {
              constructor() {
                obj = closure_1(closure_2[11]);
                itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                obj2 = closure_1(closure_2[11]);
                feedItemActionedResult = obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                obj3 = closure_0(closure_2[14]);
                rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "tabs";
                  navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
                return;
              }
            }
          }
          if (cResult[11] === tmp26) {
            class A {
              constructor() {
                obj = closure_1(closure_2[11]);
                itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                obj2 = closure_1(closure_2[11]);
                feedItemActionedResult = obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                obj3 = closure_0(closure_2[14]);
                rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  str = "tabs";
                  navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
                return;
              }
            }
            if (cResult[14] === animatedStyle1) {
              class A {
                constructor() {
                  obj = closure_1(closure_2[11]);
                  itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                  obj2 = closure_1(closure_2[11]);
                  feedItemActionedResult = obj2.feedItemActioned({
                    itemId: "caught_up",
                    itemType: "caught_up",
                    actionParameters: {
                      actionGestureType: "press",
                      actionTargetElement: "back_to_home_button",
                      actionIntentType: "navigate",
                      actionDestinationType: "guild_home",
                    },
                  });
                  obj3 = closure_0(closure_2[14]);
                  rootNavigationRef = obj3.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    str = "tabs";
                    navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                  }
                  return;
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    obj = closure_1(closure_2[11]);
                    itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                    obj2 = closure_1(closure_2[11]);
                    feedItemActionedResult = obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    obj3 = closure_0(closure_2[14]);
                    rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "tabs";
                      navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                    return;
                  }
                }
                const stringResult = obj12.string(tmp(1126).t.xjxffq);
                cResult[17] = stringResult;
                const tmp33 = stringResult;
              } else {
                class A {
                  constructor() {
                    obj = closure_1(closure_2[11]);
                    itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                    obj2 = closure_1(closure_2[11]);
                    feedItemActionedResult = obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    obj3 = closure_0(closure_2[14]);
                    rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "tabs";
                      navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                    return;
                  }
                }
              }
              if (cResult[18] !== tmp32) {
                class A {
                  constructor() {
                    obj = closure_1(closure_2[11]);
                    itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                    obj2 = closure_1(closure_2[11]);
                    feedItemActionedResult = obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    obj3 = closure_0(closure_2[14]);
                    rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "tabs";
                      navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                    return;
                  }
                }
                let obj7 = {
                  variant: "heading-lg/semibold",
                  color: "mobile-text-heading-primary",
                  style: tmp32,
                  children: tmp33,
                };
                const tmp37 = closure_7(closure_9, obj7);
                cResult[18] = tmp32;
                cResult[19] = tmp37;
              } else {
                class A {
                  constructor() {
                    obj = closure_1(closure_2[11]);
                    itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                    obj2 = closure_1(closure_2[11]);
                    feedItemActionedResult = obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    obj3 = closure_0(closure_2[14]);
                    rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "tabs";
                      navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                    return;
                  }
                }
              }
              if (cResult[20] === tmp4.subtitleText) {
                class A {
                  constructor() {
                    obj = closure_1(closure_2[11]);
                    itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                    obj2 = closure_1(closure_2[11]);
                    feedItemActionedResult = obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    obj3 = closure_0(closure_2[14]);
                    rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      str = "tabs";
                      navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                    return;
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class A {
                    constructor() {
                      obj = closure_1(closure_2[11]);
                      itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                      obj2 = closure_1(closure_2[11]);
                      feedItemActionedResult = obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      obj3 = closure_0(closure_2[14]);
                      rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        str = "tabs";
                        navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                      return;
                    }
                  }
                  const stringResult1 = obj14.string(tmp(1126).t.sAApb0);
                  cResult[23] = stringResult1;
                  const tmp39 = stringResult1;
                } else {
                  class A {
                    constructor() {
                      obj = closure_1(closure_2[11]);
                      itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                      obj2 = closure_1(closure_2[11]);
                      feedItemActionedResult = obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      obj3 = closure_0(closure_2[14]);
                      rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        str = "tabs";
                        navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                      return;
                    }
                  }
                }
                if (cResult[24] !== tmp38) {
                  class A {
                    constructor() {
                      obj = closure_1(closure_2[11]);
                      itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                      obj2 = closure_1(closure_2[11]);
                      feedItemActionedResult = obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      obj3 = closure_0(closure_2[14]);
                      rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        str = "tabs";
                        navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                      return;
                    }
                  }
                  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp38, children: tmp39 };
                  const tmp43 = closure_7(closure_9, obj8);
                  cResult[24] = tmp38;
                  cResult[25] = tmp43;
                } else {
                  class A {
                    constructor() {
                      obj = closure_1(closure_2[11]);
                      itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                      obj2 = closure_1(closure_2[11]);
                      feedItemActionedResult = obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      obj3 = closure_0(closure_2[14]);
                      rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        str = "tabs";
                        navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                      return;
                    }
                  }
                }
                if (cResult[26] === tmp4.textContainer) {
                  class A {
                    constructor() {
                      obj = closure_1(closure_2[11]);
                      itemInteractedResult = obj.itemInteracted("caught_up", "caught_up", "press_home");
                      obj2 = closure_1(closure_2[11]);
                      feedItemActionedResult = obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      obj3 = closure_0(closure_2[14]);
                      rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        str = "tabs";
                        navigateResult = rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                      return;
                    }
                  }
                }
                const obj9 = { style: tmp25, children: null };
                let items = [tmp29, tmp35, tmp41];
                obj9.children = items;
                const tmp47 = closure_8(View, obj9);
                class R {
                  constructor() {
                    obj = closure_1;
                    num = -80;
                    if (closure_1.get()) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[15]);
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
                      obj5 = closure_0(closure_2[15]);
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
                cResult[27] = tmp35;
                cResult[28] = tmp41;
                cResult[29] = tmp29;
                cResult[30] = tmp47;
              }
              const items1 = [tmp4.subtitleText, animatedStyle2];
              cResult[20] = tmp4.subtitleText;
              cResult[21] = animatedStyle2;
              cResult[22] = items1;
            }
            const items2 = [tmp4.headerText, animatedStyle1];
            cResult[14] = animatedStyle1;
            cResult[15] = tmp4.headerText;
            cResult[16] = items2;
          }
          const obj10 = { style: tmp26, children: tmp27 };
          const tmp31 = closure_7(tmp23(4811).View, obj10);
          cResult[11] = tmp26;
          cResult[12] = tmp27;
          cResult[13] = tmp31;
        }
        const items3 = [tmp4.iconWrapper, animatedStyle];
        cResult[6] = animatedStyle;
        cResult[7] = tmp4.iconWrapper;
        cResult[8] = items3;
        tmp23 = sharedValue;
        const tmpResult6 = tmp(4779);
      }
      const fn = function y() {
        let tmp2 = closure_0;
        if (closure_0) {
          tmp2 = sharedValue.get() !== tmp;
        }
        if (tmp2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const result = sharedValue.set(true);
          }, 500);
        }
      };
      tmp8[0] = visible;
      tmp8[1] = sharedValue;
      cResult[0] = visible;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      tmp6 = fn;
      let obj2 = require("ReanimatedRexport");
    }
  : function ExploreServersRow(visible) {
      visible = visible.visible;
      dependencyMap = undefined;
      const tmp = closure_10();
      const sharedValue = visible(4811).useSharedValue(false);
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
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: null };
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
                  v1(8455).itemInteracted("caught_up", "caught_up", "press_explore");
                  const obj5 = v1(8455);
                  const obj4 = {
                    itemId: "caught_up",
                    itemType: "caught_up",
                    actionParameters: {
                      actionGestureType: "press",
                      actionTargetElement: "browse_servers_button",
                      actionIntentType: "open",
                      actionDestinationType: null,
                    },
                  };
                  v1(8455).feedItemActioned(obj4);
                  const obj6 = v1(8455);
                  v1 = 1;
                  dependencyMap = 1;
                  const obj7 = { value: tmp4(16839).maybeFetchGuildDiscoveryCategories(), done: false };
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
                  closure_0(c2[13]).pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
                  const timerId = setTimeout(() => {
                    closure_1_2(false);
                  }, 500);
                }, 100);
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
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
        sharedValue(8455).itemInteracted("caught_up", "caught_up", "press_home");
        const obj = sharedValue(8455);
        sharedValue(8455).feedItemActioned({
          itemId: "caught_up",
          itemType: "caught_up",
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "back_to_home_button",
            actionIntentType: "navigate",
            actionDestinationType: "guild_home",
          },
        });
        const obj2 = sharedValue(8455);
        const rootNavigationRef = visible(4938).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("tabs", { screen: "guilds" });
        }
      }, []);
      let obj = visible(4811);
      class T {
        constructor() {
          obj = closure_1;
          num = -80;
          if (closure_1.get()) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[15]);
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
            obj5 = closure_0(closure_2[15]);
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
      let obj2 = visible(4811);
      T.__closure = {
        visibleSharedValue: sharedValue,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      T.__workletHash = 14991314358816;
      T.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(T);
      let obj3 = {
        visibleSharedValue: sharedValue,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      const fn = function f() {
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
      let obj4 = visible(4811);
      fn.__closure = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4811).withDelay,
        withSequence: visible(4811).withSequence,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      fn.__workletHash = 3574961372927;
      fn.__initData = __initData5;
      const animatedStyle1 = obj4.useAnimatedStyle(fn);
      let obj5 = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4811).withDelay,
        withSequence: visible(4811).withSequence,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      class S {
        constructor() {
          num = 0;
          if (closure_1.get()) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            obj2 = closure_0(closure_2[5]);
            obj3 = closure_0(closure_2[15]);
            obj1 = { duration: 150, easing: null };
            Easing = closure_0(closure_2[5]).Easing;
            obj1.easing = Easing.inOut(closure_0(closure_2[5]).Easing.ease);
            num2 = 8;
            withTimingResult = obj3.withTiming(8, obj1);
            obj5 = closure_0(closure_2[15]);
            obj8 = { duration: 300, easing: null };
            Easing2 = closure_0(closure_2[5]).Easing;
            obj8.easing = Easing2.out(closure_0(closure_2[5]).Easing.ease);
            num3 = 115;
            num = obj.withDelay(115, obj2.withSequence(withTimingResult, obj5.withTiming(0, obj8)));
          }
          obj9 = { transform: null };
          items = [];
          items[0] = { translateY: num };
          obj9.transform = items;
          return obj9;
        }
      }
      let obj6 = visible(4811);
      S.__closure = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4811).withDelay,
        withSequence: visible(4811).withSequence,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      S.__workletHash = 9492925527076;
      S.__initData = __initData6;
      const animatedStyle2 = obj6.useAnimatedStyle(S);
      let obj7 = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4811).withDelay,
        withSequence: visible(4811).withSequence,
        withTiming: visible(5092).withTiming,
        Easing: visible(4811).Easing,
      };
      const token = visible(4779).useToken(sharedValue(587).colors.BACKGROUND_BRAND);
      const obj9 = { children: null };
      const obj10 = { style: tmp.container, children: null };
      const obj11 = { style: tmp.textContainer, children: null };
      const obj12 = {
        style: null,
        children: closure_7(visible(13084).FlashIcon, { size: "custom", style: tmp.icon, color: "background-brand" }),
      };
      const items1 = [tmp.iconWrapper, animatedStyle];
      obj12.style = items1;
      const items2 = [closure_7(sharedValue(4811).View, obj12), ,];
      const obj14 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: null,
        children: null,
      };
      const items3 = [tmp.headerText, animatedStyle1];
      obj14.style = items3;
      const intl = visible(1126).intl;
      obj14.children = intl.string(visible(1126).t.xjxffq);
      items2[1] = closure_7(closure_9, obj14);
      const obj15 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
      const items4 = [tmp.subtitleText, animatedStyle2];
      obj15.style = items4;
      const intl2 = visible(1126).intl;
      obj15.children = intl2.string(visible(1126).t.sAApb0);
      items2[2] = closure_7(closure_9, obj15);
      obj11.children = items2;
      const items5 = [closure_8(View, obj11)];
      const obj16 = { style: tmp.buttonContainer, children: null };
      const obj17 = { size: "md", text: null, grow: true, variant: "primary", onPress: null, loading: null };
      const intl3 = visible(1126).intl;
      obj17.text = intl3.string(visible(1126).t.lNJYV8);
      obj17.onPress = callback;
      const items6 = [closure_7(visible(5376).Button, obj17)];
      const obj18 = { size: "md", text: null, grow: true, variant: "secondary", onPress: null };
      const intl4 = visible(1126).intl;
      obj18.text = intl4.string(visible(1126).t.AGrUbj);
      obj18.onPress = callback1;
      items6[1] = closure_7(visible(5376).Button, obj18);
      obj16.children = items6;
      items5[1] = closure_8(View, obj16);
      obj10.children = items5;
      const items7 = [closure_8(View, obj10), closure_7(visible(16861).Separator, {})];
      const obj19 = { style: tmp.gradient, start: null, end: null, colors: null, pointerEvents: "none" };
      const obj13 = { size: "custom", style: tmp.icon, color: "background-brand" };
      const obj8 = visible(4779);
      obj19.start = visible(1105).VerticalGradient.START;
      obj19.end = visible(1105).VerticalGradient.END;
      const tmp11 = sharedValue(5388);
      const obj20 = sharedValue(683)(token);
      const items8 = [sharedValue(683)(token).alpha(0.2).hex()];
      const alphaResult = sharedValue(683)(token).alpha(0.2);
      const obj22 = sharedValue(683)(token);
      items8[1] = sharedValue(683)(token).alpha(0).hex();
      obj19.colors = items8;
      items7[2] = closure_7(tmp11, obj19);
      obj9.children = items7;
      return closure_8(View, obj9);
    };
