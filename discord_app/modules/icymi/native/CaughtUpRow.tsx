// discord_app/modules/icymi/native/CaughtUpRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ReanimatedRexport = ReanimatedRexport2;
let _require, c1, c2, dependencyMap, visible;

let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = {
    container: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: nativeDefault.space.PX_32,
    },
    textContainer: { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 },
    recommendedGuildsContainer: { flex: 1, marginBottom: nativeDefault.space.PX_24 },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: nativeDefault.space.PX_24,
    },
    icon: { height: 40, width: 40 },
    headerText: { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" },
    subtitleText: { alignSelf: "center", textAlign: "center" },
    buttonContainer: { flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin },
    gradient: { position: "absolute", top: 0, left: 0, right: 0, height: 150 },
  };
  ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_32,
  });
  ({ marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 });
  ({ flex: 1, marginBottom: nativeDefault.space.PX_24 });
  ({ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 });
  ({ alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" });
  ({ flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin });
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let items;
      const tmp = visible;
      let obj = visible(576);
      const cResult = obj.c(56);
      visible = visible.visible;
      const tmp4 = closure_10();
      let obj2 = visible(4618);
      const sharedValue = obj2.useSharedValue(false);
      if (cResult[0] === visible) {
        let tmp6;
        let tmp7;
        if (cResult[1] === sharedValue) {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const effect = react.useEffect(tmp6, tmp7);
        let num = 2;
        [r10035, dependencyMap] = _slicedToArray(react.useState(false), 2);
        const _Symbol = Symbol;
        const tmp12 = _slicedToArray(react.useState(false), 2);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          _require = _asyncToGenerator(async () => {
            let obj8;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                    const obj5 = sharedValue(dependencyMap[11]);
                    obj5.itemInteracted("caught_up", "caught_up", "press_explore");
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
                    const obj6 = sharedValue(dependencyMap[11]);
                    obj6.feedItemActioned(obj4);
                    c1 = 1;
                    v3 = 1;
                    const obj7 = { value: obj8.maybeFetchGuildDiscoveryCategories(), done: false };
                    obj8 = tmp3(dependencyMap[12]);
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  const _setTimeout = setTimeout;
                  let timerId = setTimeout(() => {
                    const obj = closure_0(c2[13]);
                    obj.pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
                    const timerId = setTimeout(() => {
                      closure_1_2(false);
                    }, 500);
                  }, 100);
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp7) {
                v3 = 3;
                throw tmp7;
              }
            }
          });
          const fn2 = function () {
            return closure_0(...arguments);
          };
          cResult[4] = fn2;
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              const obj = sharedValue(dependencyMap[11]);
              obj.itemInteracted("caught_up", "caught_up", "press_home");
              const obj2 = sharedValue(dependencyMap[11]);
              obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              const obj3 = visible(dependencyMap[14]);
              const rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
            }
          }
          cResult[5] = A;
        } else {
          class A {
            constructor() {
              const obj = sharedValue(dependencyMap[11]);
              obj.itemInteracted("caught_up", "caught_up", "press_home");
              const obj2 = sharedValue(dependencyMap[11]);
              obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              const obj3 = visible(dependencyMap[14]);
              const rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
            }
          }
        }
        const tmpResult = tmp(4618);
        class R {
          constructor() {
            let Easing;
            let Easing3;
            let items;
            let num8;
            let out;
            let num = -80;
            if (sharedValue.get()) {
              const obj2 = { duration: 250, easing: Easing.bezier(0.5, 1.8, 0.5, 1) };
              const withTiming = timing.withTiming;
              timing;
              Easing = ReanimatedRexport2.Easing;
              num = withTiming(0, obj2);
            }
            const obj3 = { transform: items, opacity: num8 };
            items = [{ translateY: num }];
            num8 = 0;
            if (sharedValue.get()) {
              const obj4 = { duration: 100, easing: out(Easing3.bezierFn(0.33, 1, 0.68, 1)) };
              const withTiming2 = timing.withTiming;
              timing;
              const Easing2 = ReanimatedRexport2.Easing;
              out = Easing2.out;
              Easing3 = ReanimatedRexport2.Easing;
              num8 = withTiming2(1, obj4);
            }
            return obj3;
          }
        }
        let obj3 = { visibleSharedValue: sharedValue, withTiming: tmp(4897).withTiming, Easing: tmp(4618).Easing };
        const useAnimatedStyle = tmpResult.useAnimatedStyle;
        R.__closure = obj3;
        R.__workletHash = 6575188656069;
        R.__initData = __initData;
        const animatedStyle = useAnimatedStyle(R);
        const tmpResult4 = tmp(4618);
        class Y {
          constructor() {
            let Easing;
            let Easing2;
            let items;
            let num = 0;
            if (sharedValue.get()) {
              const withDelay = ReanimatedRexport2.withDelay;
              ReanimatedRexport2;
              const withSequence = ReanimatedRexport2.withSequence;
              ReanimatedRexport2;
              const obj = { duration: 100, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
              const withTiming = timing.withTiming;
              timing;
              Easing = ReanimatedRexport2.Easing;
              const withTimingResult = withTiming(8, obj);
              const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
              const withTiming2 = timing.withTiming;
              timing;
              Easing2 = ReanimatedRexport2.Easing;
              num = withDelay(80, withSequence(withTimingResult, withTiming2(0, obj2)));
            }
            const obj3 = { transform: items };
            items = [{ translateY: num }];
            return obj3;
          }
        }
        let obj4 = {
          visibleSharedValue: sharedValue,
          withDelay: tmp(4618).withDelay,
          withSequence: tmp(4618).withSequence,
          withTiming: tmp(4897).withTiming,
          Easing: tmp(4618).Easing,
        };
        const useAnimatedStyle2 = tmpResult4.useAnimatedStyle;
        Y.__closure = obj4;
        Y.__workletHash = 469742746264;
        Y.__initData = __initData2;
        const animatedStyle2 = useAnimatedStyle2(Y);
        const fn3 = function k() {
          let Easing;
          let Easing2;
          let items;
          let num = 0;
          if (sharedValue.get()) {
            const withDelay = ReanimatedRexport2.withDelay;
            ReanimatedRexport2;
            const withSequence = ReanimatedRexport2.withSequence;
            ReanimatedRexport2;
            const obj = { duration: 150, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
            const withTiming = timing.withTiming;
            timing;
            Easing = ReanimatedRexport2.Easing;
            const withTimingResult = withTiming(8, obj);
            const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
            const withTiming2 = timing.withTiming;
            timing;
            Easing2 = ReanimatedRexport2.Easing;
            num = withDelay(115, withSequence(withTimingResult, withTiming2(0, obj2)));
          }
          const obj3 = { transform: items };
          items = [{ translateY: num }];
          return obj3;
        };
        let obj5 = {
          visibleSharedValue: sharedValue,
          withDelay: tmp(4618).withDelay,
          withSequence: tmp(4618).withSequence,
          withTiming: tmp(4897).withTiming,
          Easing: tmp(4618).Easing,
        };
        const useAnimatedStyle3 = tmp(4618).useAnimatedStyle;
        tmp(4618);
        fn3.__closure = obj5;
        fn3.__workletHash = 14933607481025;
        fn3.__initData = __initData3;
        const animatedStyle3 = useAnimatedStyle3(fn3);
        const tmpResult6 = tmp(4586);
        const token = tmpResult6.useToken(sharedValue(587).colors.BACKGROUND_BRAND);
        const tmp26 = sharedValue;
        if (cResult[6] === animatedStyle) {
          class A {
            constructor() {
              const obj = sharedValue(dependencyMap[11]);
              obj.itemInteracted("caught_up", "caught_up", "press_home");
              const obj2 = sharedValue(dependencyMap[11]);
              obj2.feedItemActioned({
                itemId: "caught_up",
                itemType: "caught_up",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "back_to_home_button",
                  actionIntentType: "navigate",
                  actionDestinationType: "guild_home",
                },
              });
              const obj3 = visible(dependencyMap[14]);
              const rootNavigationRef = obj3.getRootNavigationRef();
              if (rootNavigationRef != null) {
                rootNavigationRef.navigate("tabs", { screen: "guilds" });
              }
            }
          }
          if (cResult[9] !== tmp4.icon) {
            class A {
              constructor() {
                const obj = sharedValue(dependencyMap[11]);
                obj.itemInteracted("caught_up", "caught_up", "press_home");
                const obj2 = sharedValue(dependencyMap[11]);
                obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                const obj3 = visible(dependencyMap[14]);
                const rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
              }
            }
            let obj6 = { size: "custom", style: tmp4.icon, color: "background-brand" };
            cResult[9] = tmp4.icon;
            cResult[10] = closure_7(tmp(12853).FlashIcon, obj6);
            const tmp31 = closure_7(tmp(12853).FlashIcon, obj6);
          } else {
            class A {
              constructor() {
                const obj = sharedValue(dependencyMap[11]);
                obj.itemInteracted("caught_up", "caught_up", "press_home");
                const obj2 = sharedValue(dependencyMap[11]);
                obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                const obj3 = visible(dependencyMap[14]);
                const rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
              }
            }
          }
          if (cResult[11] === tmp29) {
            class A {
              constructor() {
                const obj = sharedValue(dependencyMap[11]);
                obj.itemInteracted("caught_up", "caught_up", "press_home");
                const obj2 = sharedValue(dependencyMap[11]);
                obj2.feedItemActioned({
                  itemId: "caught_up",
                  itemType: "caught_up",
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "back_to_home_button",
                    actionIntentType: "navigate",
                    actionDestinationType: "guild_home",
                  },
                });
                const obj3 = visible(dependencyMap[14]);
                const rootNavigationRef = obj3.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  rootNavigationRef.navigate("tabs", { screen: "guilds" });
                }
              }
            }
            if (cResult[14] === animatedStyle2) {
              let tmp36;
              class A {
                constructor() {
                  const obj = sharedValue(dependencyMap[11]);
                  obj.itemInteracted("caught_up", "caught_up", "press_home");
                  const obj2 = sharedValue(dependencyMap[11]);
                  obj2.feedItemActioned({
                    itemId: "caught_up",
                    itemType: "caught_up",
                    actionParameters: {
                      actionGestureType: "press",
                      actionTargetElement: "back_to_home_button",
                      actionIntentType: "navigate",
                      actionDestinationType: "guild_home",
                    },
                  });
                  const obj3 = visible(dependencyMap[14]);
                  const rootNavigationRef = obj3.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    rootNavigationRef.navigate("tabs", { screen: "guilds" });
                  }
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    const obj = sharedValue(dependencyMap[11]);
                    obj.itemInteracted("caught_up", "caught_up", "press_home");
                    const obj2 = sharedValue(dependencyMap[11]);
                    obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    const obj3 = visible(dependencyMap[14]);
                    const rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                  }
                }
                const stringResult = obj9.string(tmp(1126).t.xjxffq);
                cResult[17] = stringResult;
                tmp36 = stringResult;
              } else {
                class A {
                  constructor() {
                    const obj = sharedValue(dependencyMap[11]);
                    obj.itemInteracted("caught_up", "caught_up", "press_home");
                    const obj2 = sharedValue(dependencyMap[11]);
                    obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    const obj3 = visible(dependencyMap[14]);
                    const rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                  }
                }
              }
              if (cResult[18] !== tmp35) {
                class A {
                  constructor() {
                    const obj = sharedValue(dependencyMap[11]);
                    obj.itemInteracted("caught_up", "caught_up", "press_home");
                    const obj2 = sharedValue(dependencyMap[11]);
                    obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    const obj3 = visible(dependencyMap[14]);
                    const rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                  }
                }
                let obj7 = {
                  variant: "heading-lg/semibold",
                  color: "mobile-text-heading-primary",
                  style: tmp35,
                  children: tmp36,
                };
                cResult[18] = tmp35;
                cResult[19] = closure_7(closure_9, obj7);
                const tmp40 = closure_7(closure_9, obj7);
              } else {
                class A {
                  constructor() {
                    const obj = sharedValue(dependencyMap[11]);
                    obj.itemInteracted("caught_up", "caught_up", "press_home");
                    const obj2 = sharedValue(dependencyMap[11]);
                    obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    const obj3 = visible(dependencyMap[14]);
                    const rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                  }
                }
              }
              if (cResult[20] === tmp4.subtitleText) {
                let tmp42;
                class A {
                  constructor() {
                    const obj = sharedValue(dependencyMap[11]);
                    obj.itemInteracted("caught_up", "caught_up", "press_home");
                    const obj2 = sharedValue(dependencyMap[11]);
                    obj2.feedItemActioned({
                      itemId: "caught_up",
                      itemType: "caught_up",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "back_to_home_button",
                        actionIntentType: "navigate",
                        actionDestinationType: "guild_home",
                      },
                    });
                    const obj3 = visible(dependencyMap[14]);
                    const rootNavigationRef = obj3.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("tabs", { screen: "guilds" });
                    }
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class A {
                    constructor() {
                      const obj = sharedValue(dependencyMap[11]);
                      obj.itemInteracted("caught_up", "caught_up", "press_home");
                      const obj2 = sharedValue(dependencyMap[11]);
                      obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      const obj3 = visible(dependencyMap[14]);
                      const rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                    }
                  }
                  const stringResult1 = obj11.string(tmp(1126).t.sAApb0);
                  cResult[23] = stringResult1;
                  tmp42 = stringResult1;
                } else {
                  class A {
                    constructor() {
                      const obj = sharedValue(dependencyMap[11]);
                      obj.itemInteracted("caught_up", "caught_up", "press_home");
                      const obj2 = sharedValue(dependencyMap[11]);
                      obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      const obj3 = visible(dependencyMap[14]);
                      const rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                    }
                  }
                }
                if (cResult[24] !== tmp41) {
                  class A {
                    constructor() {
                      const obj = sharedValue(dependencyMap[11]);
                      obj.itemInteracted("caught_up", "caught_up", "press_home");
                      const obj2 = sharedValue(dependencyMap[11]);
                      obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      const obj3 = visible(dependencyMap[14]);
                      const rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                    }
                  }
                  let obj8 = { variant: "text-md/normal", color: "text-default", style: tmp41, children: tmp42 };
                  cResult[24] = tmp41;
                  cResult[25] = closure_7(closure_9, obj8);
                  const tmp46 = closure_7(closure_9, obj8);
                } else {
                  class A {
                    constructor() {
                      const obj = sharedValue(dependencyMap[11]);
                      obj.itemInteracted("caught_up", "caught_up", "press_home");
                      const obj2 = sharedValue(dependencyMap[11]);
                      obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      const obj3 = visible(dependencyMap[14]);
                      const rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                    }
                  }
                }
                if (cResult[26] === tmp4.textContainer) {
                  class A {
                    constructor() {
                      const obj = sharedValue(dependencyMap[11]);
                      obj.itemInteracted("caught_up", "caught_up", "press_home");
                      const obj2 = sharedValue(dependencyMap[11]);
                      obj2.feedItemActioned({
                        itemId: "caught_up",
                        itemType: "caught_up",
                        actionParameters: {
                          actionGestureType: "press",
                          actionTargetElement: "back_to_home_button",
                          actionIntentType: "navigate",
                          actionDestinationType: "guild_home",
                        },
                      });
                      const obj3 = visible(dependencyMap[14]);
                      const rootNavigationRef = obj3.getRootNavigationRef();
                      if (rootNavigationRef != null) {
                        rootNavigationRef.navigate("tabs", { screen: "guilds" });
                      }
                    }
                  }
                }
                const obj10 = { style: tmp28, children: items };
                items = [tmp32, tmp38, tmp44];
                const tmp50 = closure_8(View, obj10);
                class R {
                  constructor() {
                    let Easing;
                    let Easing3;
                    let items;
                    let num8;
                    let out;
                    let num = -80;
                    if (sharedValue.get()) {
                      const obj2 = { duration: 250, easing: Easing.bezier(0.5, 1.8, 0.5, 1) };
                      const withTiming = timing.withTiming;
                      timing;
                      Easing = ReanimatedRexport2.Easing;
                      num = withTiming(0, obj2);
                    }
                    const obj3 = { transform: items, opacity: num8 };
                    items = [{ translateY: num }];
                    num8 = 0;
                    if (sharedValue.get()) {
                      const obj4 = { duration: 100, easing: out(Easing3.bezierFn(0.33, 1, 0.68, 1)) };
                      const withTiming2 = timing.withTiming;
                      timing;
                      const Easing2 = ReanimatedRexport2.Easing;
                      out = Easing2.out;
                      Easing3 = ReanimatedRexport2.Easing;
                      num8 = withTiming2(1, obj4);
                    }
                    return obj3;
                  }
                }
                cResult[27] = tmp38;
                cResult[28] = tmp44;
                cResult[29] = tmp32;
                cResult[30] = tmp50;
              }
              const items1 = [tmp4.subtitleText, animatedStyle3];
              cResult[20] = tmp4.subtitleText;
              cResult[21] = animatedStyle3;
              cResult[22] = items1;
            }
            const items2 = [tmp4.headerText, animatedStyle2];
            cResult[14] = animatedStyle2;
            cResult[15] = tmp4.headerText;
            cResult[16] = items2;
          }
          const obj12 = { style: tmp29, children: tmp30 };
          cResult[11] = tmp29;
          cResult[12] = tmp30;
          cResult[13] = closure_7(tmp26(4618).View, obj12);
          const tmp34 = closure_7(tmp26(4618).View, obj12);
        }
        const items3 = [tmp4.iconWrapper, animatedStyle];
        cResult[6] = animatedStyle;
        let num8 = 7;
        cResult[7] = tmp4.iconWrapper;
        cResult[8] = items3;
      }
      const fn = function y() {
        const tmp2 = visible && sharedValue.get() !== tmp;
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
    }
  : (visible) => {
      let closure_2;
      let first;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj13;
      visible = visible.visible;
      dependencyMap = undefined;
      const tmp = closure_10();
      let obj = visible(4618);
      const sharedValue = obj.useSharedValue(false);
      let items = [visible, sharedValue];
      const effect = react.useEffect(() => {
        const tmp2 = visible && sharedValue.get() !== tmp;
        if (tmp2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const result = sharedValue.set(true);
          }, 500);
        }
      }, items);
      [first, dependencyMap] = react.useState(false);
      const callback = react.useCallback(
        _asyncToGenerator(async () => {
          let closure_0;
          let v1;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              c2 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2(true);
                  const obj5 = v1(c2[11]);
                  obj5.itemInteracted("caught_up", "caught_up", "press_explore");
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
                  const obj6 = v1(c2[11]);
                  obj6.feedItemActioned(obj4);
                  v1 = 1;
                  const obj8 = tmp3(c2[12]);
                  c2 = 1;
                  const obj7 = { value: obj8.maybeFetchGuildDiscoveryCategories(), done: false };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                const _setTimeout = setTimeout;
                let timerId = setTimeout(() => {
                  const obj = visible(c2[13]);
                  obj.pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
                  const timerId = setTimeout(() => {
                    closure_1_2(false);
                  }, 500);
                }, 100);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp7) {
              c2 = 3;
              throw tmp7;
            }
          }
        }),
        [],
      );
      const callback1 = react.useCallback(() => {
        const obj = sharedValue(closure_2[11]);
        obj.itemInteracted("caught_up", "caught_up", "press_home");
        const obj2 = sharedValue(closure_2[11]);
        obj2.feedItemActioned({
          itemId: "caught_up",
          itemType: "caught_up",
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "back_to_home_button",
            actionIntentType: "navigate",
            actionDestinationType: "guild_home",
          },
        });
        const obj3 = visible(closure_2[14]);
        const rootNavigationRef = obj3.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("tabs", { screen: "guilds" });
        }
      }, []);
      let obj2 = visible(4618);
      class T {
        constructor() {
          let Easing;
          let Easing3;
          let items;
          let num8;
          let out;
          let num = -80;
          if (sharedValue.get()) {
            const obj2 = { duration: 250, easing: Easing.bezier(0.5, 1.8, 0.5, 1) };
            const withTiming = timing.withTiming;
            timing;
            Easing = ReanimatedRexport2.Easing;
            num = withTiming(0, obj2);
          }
          const obj3 = { transform: items, opacity: num8 };
          items = [{ translateY: num }];
          num8 = 0;
          if (sharedValue.get()) {
            const obj4 = { duration: 100, easing: out(Easing3.bezierFn(0.33, 1, 0.68, 1)) };
            const withTiming2 = timing.withTiming;
            timing;
            const Easing2 = ReanimatedRexport2.Easing;
            out = Easing2.out;
            Easing3 = ReanimatedRexport2.Easing;
            num8 = withTiming2(1, obj4);
          }
          return obj3;
        }
      }
      let obj3 = {
        visibleSharedValue: sharedValue,
        withTiming: visible(4897).withTiming,
        Easing: visible(4618).Easing,
      };
      T.__closure = obj3;
      T.__workletHash = 14991314358816;
      T.__initData = __initData4;
      const animatedStyle = obj2.useAnimatedStyle(T);
      let obj4 = visible(4618);
      const fn = function f() {
        let Easing;
        let Easing2;
        let items;
        let num = 0;
        if (sharedValue.get()) {
          const withDelay = ReanimatedRexport2.withDelay;
          ReanimatedRexport2;
          const withSequence = ReanimatedRexport2.withSequence;
          ReanimatedRexport2;
          const obj = { duration: 100, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
          const withTiming = timing.withTiming;
          timing;
          Easing = ReanimatedRexport2.Easing;
          const withTimingResult = withTiming(8, obj);
          const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
          const withTiming2 = timing.withTiming;
          timing;
          Easing2 = ReanimatedRexport2.Easing;
          num = withDelay(80, withSequence(withTimingResult, withTiming2(0, obj2)));
        }
        const obj3 = { transform: items };
        items = [{ translateY: num }];
        return obj3;
      };
      let obj5 = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4618).withDelay,
        withSequence: visible(4618).withSequence,
        withTiming: visible(4897).withTiming,
        Easing: visible(4618).Easing,
      };
      fn.__closure = obj5;
      fn.__workletHash = 3574961372927;
      fn.__initData = __initData5;
      const animatedStyle1 = obj4.useAnimatedStyle(fn);
      let obj6 = visible(4618);
      class S {
        constructor() {
          let Easing;
          let Easing2;
          let items;
          let num = 0;
          if (sharedValue.get()) {
            const withDelay = ReanimatedRexport2.withDelay;
            ReanimatedRexport2;
            const withSequence = ReanimatedRexport2.withSequence;
            ReanimatedRexport2;
            const obj = { duration: 150, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
            const withTiming = timing.withTiming;
            timing;
            Easing = ReanimatedRexport2.Easing;
            const withTimingResult = withTiming(8, obj);
            const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
            const withTiming2 = timing.withTiming;
            timing;
            Easing2 = ReanimatedRexport2.Easing;
            num = withDelay(115, withSequence(withTimingResult, withTiming2(0, obj2)));
          }
          const obj3 = { transform: items };
          items = [{ translateY: num }];
          return obj3;
        }
      }
      let obj7 = {
        visibleSharedValue: sharedValue,
        withDelay: visible(4618).withDelay,
        withSequence: visible(4618).withSequence,
        withTiming: visible(4897).withTiming,
        Easing: visible(4618).Easing,
      };
      S.__closure = obj7;
      S.__workletHash = 9492925527076;
      S.__initData = __initData6;
      const animatedStyle2 = obj6.useAnimatedStyle(S);
      let obj8 = visible(4586);
      const token = obj8.useToken(sharedValue(587).colors.BACKGROUND_BRAND);
      const obj10 = { style: tmp.container, children: items5 };
      const obj11 = { style: tmp.textContainer, children: items2 };
      const obj9 = { children: items7 };
      const obj12 = { style: items1, children: closure_7(visible(12853).FlashIcon, obj13) };
      items1 = [tmp.iconWrapper, animatedStyle];
      View = sharedValue(4618).View;
      obj13 = { size: "custom", style: tmp.icon, color: "background-brand" };
      items2 = [closure_7(View, obj12), ,];
      const obj14 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: items3,
        children: intl.string(visible(1126).t.xjxffq),
      };
      items3 = [tmp.headerText, animatedStyle1];
      intl = visible(1126).intl;
      items2[1] = closure_7(closure_9, obj14);
      const obj15 = {
        variant: "text-md/normal",
        color: "text-default",
        style: items4,
        children: intl2.string(visible(1126).t.sAApb0),
      };
      items4 = [tmp.subtitleText, animatedStyle2];
      intl2 = visible(1126).intl;
      items2[2] = closure_7(closure_9, obj15);
      items5 = [closure_8(View, obj11)];
      const obj16 = { style: tmp.buttonContainer, children: items6 };
      const obj17 = {
        size: "md",
        text: intl3.string(visible(1126).t.lNJYV8),
        grow: true,
        variant: "primary",
        onPress: callback,
        loading: first,
      };
      const Button = visible(5601).Button;
      intl3 = visible(1126).intl;
      items6 = [closure_7(Button, obj17)];
      const obj18 = {
        size: "md",
        text: intl4.string(visible(1126).t.AGrUbj),
        grow: true,
        variant: "secondary",
        onPress: callback1,
      };
      const Button2 = visible(5601).Button;
      intl4 = visible(1126).intl;
      items6[1] = closure_7(Button2, obj18);
      items5[1] = closure_8(View, obj16);
      items7 = [closure_8(View, obj10), closure_7(visible(16475).Separator, {})];
      const obj19 = {
        style: tmp.gradient,
        start: visible(1105).VerticalGradient.START,
        end: visible(1105).VerticalGradient.END,
        colors: items8,
        pointerEvents: "none",
      };
      const tmp12 = sharedValue(5612);
      items8 = [,];
      const obj20 = sharedValue(683)(token);
      const alphaResult = obj20.alpha(0.2);
      items8[0] = alphaResult.hex();
      const obj22 = sharedValue(683)(token);
      const alphaResult1 = obj22.alpha(0);
      items8[1] = alphaResult1.hex();
      items7[2] = closure_7(tmp12, obj19);
      return closure_8(View, obj9);
    };
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default tmp3;
