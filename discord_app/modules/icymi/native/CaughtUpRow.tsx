// === Module 18860: CaughtUpRow ===

// Module 18860 (CaughtUpRow)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = module_1652.createAnimatedComponent(fn(5761).Text);
const createICYMIStyles = fn(18797);
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
let closure_11 = { code: "(function CaughtUpRowTsx1(){let[visibleSharedValue,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};})" };
let closure_12 = { code: "(function CaughtUpRowTsx2(){let[visibleSharedValue,withDelay,withSequence,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};})" };
let closure_13 = { code: "(function CaughtUpRowTsx3(){let[visibleSharedValue,withDelay,withSequence,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  _require = visible;
  const tmp = closure_10();
  const sharedValue = require("module_1652").useSharedValue(false);
  items = [visible, sharedValue];
  const effect = noop.useEffect(() => {
    let tmp2 = c0;
    if (c0) {
      tmp2 = _undefined2.get() !== tmp;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = _undefined2.set(true);
      }, 500);
    }
  }, items);
  [obj11.loading, dependencyMap] = noop.useState(false);
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
            v1(9065).itemInteracted("caught_up", "caught_up", "press_explore");
            const obj5 = v1(9065);
            const obj4 = { itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "browse_servers_button", actionIntentType: "open", actionDestinationType: null } };
            v1(9065).feedItemActioned(obj4);
            const obj6 = v1(9065);
            v1 = 1;
            dependencyMap = 1;
            const obj7 = { value: tmp4(18814).maybeFetchGuildDiscoveryCategories(), done: false };
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
    _undefined2(_undefined3[9]).itemInteracted("caught_up", "caught_up", "press_home");
    const obj = _undefined2(_undefined3[9]);
    _undefined2(_undefined3[9]).feedItemActioned({ itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "back_to_home_button", actionIntentType: "navigate", actionDestinationType: "guild_home" } });
    const obj2 = _undefined2(_undefined3[9]);
    const rootNavigationRef = _undefined(_undefined3[12]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("tabs", { screen: "guilds" });
    }
  }, []);
  let obj = require("module_1652");
  const items1 = [closure_11, sharedValue, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  class CaughtUpRowTsx1 {
    constructor() {
      obj = closure_0;
      num = -80;
      if (closure_0.get()) {
        tmp = closure_1;
        obj1 = { duration: 250, easing: null };
        tmp2 = closure_2;
        num2 = 1;
        num3 = 0.5;
        num4 = 1.8;
        tmp3 = closure_2;
        num5 = 0.5;
        num6 = 0.5;
        obj1.easing = closure_2.bezier(0.5, 1.8, 0.5, 1);
        num7 = 0;
        num = closure_1(0, obj1);
      }
      obj5 = { transform: null, opacity: null };
      items = [];
      items[0] = { translateY: num };
      obj5.transform = items;
      num8 = 0;
      if (obj.get()) {
        tmp4 = closure_1;
        obj6 = { duration: 100, easing: null };
        tmp5 = closure_2;
        num9 = 1;
        num10 = 0.68;
        num11 = 0.33;
        tmp6 = closure_2;
        num12 = 1;
        num13 = 1;
        obj6.easing = closure_2.out(closure_2.bezierFn(0.33, 1, 0.68, 1));
        num8 = closure_1(1, obj6);
      }
      obj5.opacity = num8;
      return obj5;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  CaughtUpRowTsx1.__closure = items2;
  CaughtUpRowTsx1.__workletHash = 808134122268;
  CaughtUpRowTsx1.__initData = tmp9;
  const animatedStyle = require("module_1652").useAnimatedStyle(CaughtUpRowTsx1);
  let obj2 = require("module_1652");
  const items3 = [closure_12, sharedValue, require("module_1652").withDelay, require("module_1652").withSequence, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items3;
  class CaughtUpRowTsx2 {
    constructor() {
      num = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        obj = { duration: 100, easing: null };
        tmp4 = closure_4;
        obj.easing = closure_4.inOut(closure_4.ease);
        num2 = 8;
        obj1 = { duration: 300, easing: null };
        tmp5 = closure_3(8, obj);
        obj1.easing = closure_4.out(closure_4.ease);
        num3 = 80;
        num = closure_1(80, closure_2(tmp5, closure_3(0, obj1)));
      }
      obj4 = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj4.transform = items;
      return obj4;
    }
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  CaughtUpRowTsx2.__closure = items4;
  CaughtUpRowTsx2.__workletHash = 5492465188513;
  CaughtUpRowTsx2.__initData = tmp14;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(CaughtUpRowTsx2);
  const tmp2Result = require("module_1652");
  const items5 = [closure_13, sharedValue, require("module_1652").withDelay, require("module_1652").withSequence, require("timing/timing").withTiming, require("module_1652").Easing];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items5;
  class CaughtUpRowTsx3 {
    constructor() {
      num = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        obj = { duration: 150, easing: null };
        tmp4 = closure_4;
        obj.easing = closure_4.inOut(closure_4.ease);
        num2 = 8;
        obj1 = { duration: 300, easing: null };
        tmp5 = closure_3(8, obj);
        obj1.easing = closure_4.out(closure_4.ease);
        num3 = 115;
        num = closure_1(115, closure_2(tmp5, closure_3(0, obj1)));
      }
      obj4 = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj4.transform = items;
      return obj4;
    }
  }
  const items6 = [tmp22, tmp23, tmp24, tmp25, tmp26];
  CaughtUpRowTsx3.__closure = items6;
  CaughtUpRowTsx3.__workletHash = 13859124718008;
  CaughtUpRowTsx3.__initData = tmp21;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(CaughtUpRowTsx3);
  const tmp2Result3 = require("module_1652");
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj3 = { children: null };
  let obj4 = { style: tmp.container, children: null };
  let obj5 = { style: tmp.textContainer, children: null };
  let obj6 = { style: null, children: closure_7(require("FlashIcon").FlashIcon, { size: "custom", style: tmp.icon, color: "background-brand" }) };
  const items7 = [tmp.iconWrapper, animatedStyle];
  obj6.style = items7;
  const items8 = [closure_7(module_1652.View, obj6), , ];
  const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: null, children: null };
  const items9 = [tmp.headerText, animatedStyle1];
  obj8.style = items9;
  const intl = tmp2(1113).intl;
  obj8.children = intl.string(require("util").t.xjxffq);
  items8[1] = closure_7(closure_9, obj8);
  const obj9 = { variant: "body-md/normal", color: "text-default", style: null, children: null };
  const items10 = [tmp.subtitleText, animatedStyle2];
  obj9.style = items10;
  const intl2 = tmp2(1113).intl;
  obj9.children = intl2.string(require("util").t.sAApb0);
  items8[2] = closure_7(closure_9, obj9);
  obj5.children = items8;
  const items11 = [closure_8(View, obj5), ];
  const obj10 = { style: tmp.buttonContainer, children: null };
  const obj11 = { size: "md", text: null, grow: true, variant: "primary", onPress: null, loading: null };
  const intl3 = tmp2(1113).intl;
  obj11.text = intl3.string(require("util").t.lNJYV8);
  obj11.onPress = callback;
  const items12 = [closure_7(require("components/Button/Button").Button, obj11), ];
  const obj12 = { size: "md", text: null, grow: true, variant: "secondary", onPress: null };
  const intl4 = tmp2(1113).intl;
  obj12.text = intl4.string(require("util").t.AGrUbj);
  obj12.onPress = callback1;
  items12[1] = closure_7(require("components/Button/Button").Button, obj12);
  obj10.children = items12;
  items11[1] = closure_8(View, obj10);
  obj4.children = items11;
  const items13 = [closure_8(View, obj4), closure_7(require("ICYMIShared").Separator, {}), ];
  const obj13 = { style: tmp.gradient, start: null, end: null, colors: null, pointerEvents: "none" };
  let obj7 = { size: "custom", style: tmp.icon, color: "background-brand" };
  const tmp2Result4 = require("useToken");
  obj13.start = require("ConstantsIOS").VerticalGradient.START;
  obj13.end = require("ConstantsIOS").VerticalGradient.END;
  const tmp29 = LinearGradientDefault;
  const obj17 = _modDef671(token);
  const items14 = [_modDef671(token).alpha(0.2).hex(), ];
  const alphaResult = _modDef671(token).alpha(0.2);
  const obj19 = _modDef671(token);
  items14[1] = _modDef671(token).alpha(0).hex();
  obj13.colors = items14;
  items13[2] = closure_7(tmp29, obj13);
  obj3.children = items13;
  return closure_8(View, obj3);
};