// === Module 17042: RestrictedHoursModal ===

// Module 17042 (RestrictedHoursModal)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import Text_Text from "Text/Text" /* 4825 */;
import timing from "timing" /* 4830 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5269 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5884 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6005 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 17041 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 17045 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" }) };
    tmp2 = React5(hasOwnProperty, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(visible) {
  const onLogin = visible.onLogin;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_10();
  ({ top, bottom } = sharedValue(sharedValue1[8])());
  const tmp5 = sharedValue(sharedValue1[9])();
  const tmp4 = sharedValue(sharedValue1[8])();
  let items = [UserStore];
  const stateFromStores = onLogin(sharedValue1[10]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.username;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  let obj = onLogin(sharedValue1[10]);
  sharedValue = onLogin(sharedValue1[11]).useSharedValue(0);
  let obj2 = onLogin(sharedValue1[11]);
  sharedValue1 = onLogin(sharedValue1[11]).useSharedValue(0);
  let obj3 = onLogin(sharedValue1[11]);
  const sharedValue2 = onLogin(sharedValue1[11]).useSharedValue(0);
  let obj4 = onLogin(sharedValue1[11]);
  const sharedValue3 = onLogin(sharedValue1[11]).useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    const obj2 = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = sharedValue.set(timing.withTiming(1, obj2));
    const obj3 = ReanimatedRexport;
    const obj5 = { duration: 1500, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj5.easing = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj3.withDelay(1500, timing.withTiming(1, obj5)));
    const obj6 = ReanimatedRexport;
    const obj8 = { duration: 1000, easing: null };
    const Easing3 = ReanimatedRexport.Easing;
    obj8.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, timing.withTiming(1, obj8)));
    const obj9 = ReanimatedRexport;
    const obj11 = { duration: 1000, easing: null };
    const Easing4 = ReanimatedRexport.Easing;
    obj11.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, timing.withTiming(1, obj11)));
  }, items1);
  let obj5 = onLogin(sharedValue1[11]);
  class M {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  M.__closure = { backgroundOpacity: sharedValue };
  M.__workletHash = 17073775693336;
  M.__initData = __initData;
  const animatedStyle = onLogin(sharedValue1[11]).useAnimatedStyle(M);
  let obj6 = onLogin(sharedValue1[11]);
  class O {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  O.__closure = { gradientOpacity: sharedValue1 };
  O.__workletHash = 16592270370139;
  O.__initData = __initData2;
  const animatedStyle1 = onLogin(sharedValue1[11]).useAnimatedStyle(O);
  let obj7 = onLogin(sharedValue1[11]);
  const fn = function z() {
    const obj = { opacity: sharedValue2.get(), transform: null };
    const items = [{ scale: sharedValue3.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  fn.__workletHash = 15616799997783;
  fn.__initData = __initData3;
  const animatedStyle2 = onLogin(sharedValue1[11]).useAnimatedStyle(fn);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    let obj9 = { endTime: tmp5 };
    let formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj9);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  const obj10 = { backgroundColor, children: null };
  let obj11 = { style: null, children: null };
  const items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj11.style = items2;
  const items3 = [closure_7(closure_5, { style: tmp.backgroundFill, pointerEvents: "none" }), , , ];
  const obj13 = { style: null, pointerEvents: "none", children: null };
  const items4 = [tmp.assetLayers, animatedStyle1];
  obj13.style = items4;
  const obj12 = { style: tmp.backgroundFill, pointerEvents: "none" };
  let obj8 = onLogin(sharedValue1[11]);
  obj13.children = closure_7(sharedValue(sharedValue1[11]).Image, { source: onLogin(sharedValue1[16]), resizeMode: "cover", style: tmp.sunbeamGradient });
  items3[1] = closure_7(sharedValue(sharedValue1[11]).View, obj13);
  const obj15 = { style: null, children: null };
  const items5 = [tmp.content, animatedStyle2];
  obj15.style = items5;
  const obj14 = { source: onLogin(sharedValue1[16]), resizeMode: "cover", style: tmp.sunbeamGradient };
  const items6 = [closure_7(closure_5, { style: tmp.riveContainer, children: closure_7(onLogin(sharedValue1[17]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) }), closure_7(onLogin(sharedValue1[18]).Text, { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult })];
  obj15.children = items6;
  items3[2] = closure_8(sharedValue(sharedValue1[11]).View, obj15);
  const obj18 = { style: tmp.footer, children: null };
  const obj19 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl3 = tmp6(tmp3[13]).intl;
  obj19.children = intl3.format(sharedValue(sharedValue1[14]).iqeKDz, {
    username: stateFromStores,
    loginHook(children, arg1) {
      return React5(Text_Text.Text, { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children }, arg1);
    }
  });
  obj18.children = closure_7(onLogin(sharedValue1[18]).Text, obj19);
  items3[3] = closure_7(closure_5, obj18);
  obj11.children = items3;
  const items7 = [closure_8(sharedValue(sharedValue1[11]).View, obj11), closure_7(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj10.children = items7;
  return closure_8(onLogin(sharedValue1[15]).ModalScreen, obj10);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "rgb(0, 3, 40)";
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 }, backgroundFill: null, assetLayers: null, sunbeamGradient: null, riveContainer: null, content: null, description: null, footer: null, logoutBlockingLayer: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 0;
obj4.backgroundColor = "rgb(0, 3, 40)";
obj2.backgroundFill = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.zIndex = 1;
obj2.assetLayers = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.sunbeamGradient = {};
obj2.riveContainer = { width: "100%", maxWidth: 523, height: 300 };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
let obj6 = {};
obj2.content = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj2.description = { textAlign: "center" };
let obj7 = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
obj2.footer = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
let obj9 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj9.zIndex = 10;
obj9.justifyContent = "center";
obj9.alignItems = "center";
obj9.backgroundColor = "rgb(0, 3, 40)";
obj2.logoutBlockingLayer = obj9;
let closure_10 = createStyles.createStyles(obj2);
const constants = { MAIN: "main" };
const __initData = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
const __initData2 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
const __initData3 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default function RestrictedHoursModal() {
  const tmp = useIsInRestrictedHoursDefault();
  _require = tmp;
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(true);
  const effect = noop.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_1_2.current = false;
    };
  }, []);
  [tmp4, _slicedToArray] = noop.useState(false);
  const callback = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      _slicedToArray(true);
      AuthenticationActionCreatorsDefault.logout("restricted_hours").finally(() => {
        if (ref.current) {
          closure_1_1.current = false;
          closure_1_3(false);
        }
      });
      const logoutResult = AuthenticationActionCreatorsDefault.logout("restricted_hours");
    }
  }, []);
  closure_129_0 = callback;
  closure_129_1 = tmp4;
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const items = [callback, tmp4];
  const items1 = [tmp];
  const navigatorScreens = require("Navigator").useNavigatorScreens(() => ({
    [closure_2_11.MAIN]: {
      headerShown: false,
      gestureEnabled: false,
      render() {
        return closure_2_7(RestrictedHoursScreen, { onLogin, logoutRequestInFlight });
      }
    }
  }), items);
  const effect1 = noop.useEffect(() => {
    let current = closure_0;
    if (!closure_0) {
      current = ref.current;
    }
    if (!current) {
      const result = RestrictedHoursActionCreators.closeRestrictedHoursModal();
    }
  }, items1);
  useBackPressHandlerDefault(() => true);
  return closure_7(require("Modal").Modal, { screens: navigatorScreens, initialRouteName: constants.MAIN });
};