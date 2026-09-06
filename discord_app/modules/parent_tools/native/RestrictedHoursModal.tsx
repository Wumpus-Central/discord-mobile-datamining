// === Module 17294: RestrictedHoursModal ===

// Module 17294 (RestrictedHoursModal)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 4972 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5577 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 17293 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 17297 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

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
  let obj = onLogin(sharedValue1[10]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj1 = onLogin(sharedValue1[11]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = onLogin(sharedValue1[11]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = onLogin(sharedValue1[11]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = onLogin(sharedValue1[11]);
  const sharedValue3 = obj4.useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    let obj = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = sharedValue.set(obj.withTiming(1, obj));
    let obj2 = ReanimatedRexport;
    obj = { duration: 1500, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj.easing = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj2.withDelay(1500, timing.withTiming(1, obj)));
    const obj6 = ReanimatedRexport;
    const obj1 = { duration: 1000, easing: null };
    const Easing3 = ReanimatedRexport.Easing;
    obj1.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, timing.withTiming(1, obj1)));
    const obj9 = ReanimatedRexport;
    obj2 = { duration: 1000, easing: null };
    const Easing4 = ReanimatedRexport.Easing;
    obj2.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, timing.withTiming(1, obj2)));
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
  const animatedStyle = obj5.useAnimatedStyle(M);
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
  const animatedStyle1 = obj6.useAnimatedStyle(O);
  let obj7 = onLogin(sharedValue1[11]);
  const fn = function z() {
    let obj = { opacity: sharedValue2.get(), transform: null };
    obj = { scale: sharedValue3.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  fn.__workletHash = 15616799997783;
  fn.__initData = __initData3;
  const animatedStyle2 = obj7.useAnimatedStyle(fn);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    obj = { endTime: tmp5 };
    let formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  obj = { backgroundColor, children: null };
  obj1 = { style: null, children: null };
  const items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj1.style = items2;
  obj2 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const items3 = [closure_7(closure_5, obj2), , , ];
  obj3 = { style: null, pointerEvents: "none", children: null };
  const items4 = [tmp.assetLayers, animatedStyle1];
  obj3.style = items4;
  obj4 = { source: tmp6(tmp3[16]), resizeMode: "cover", style: tmp.sunbeamGradient };
  obj3.children = closure_7(sharedValue(sharedValue1[11]).Image, obj4);
  items3[1] = closure_7(sharedValue(sharedValue1[11]).View, obj3);
  obj5 = { style: null, children: null };
  const items5 = [tmp.content, animatedStyle2];
  obj5.style = items5;
  obj6 = { style: tmp.riveContainer, children: closure_7(tmp6(tmp3[17]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) };
  const items6 = [closure_7(closure_5, obj6), ];
  obj7 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items6[1] = closure_7(onLogin(sharedValue1[18]).Text, obj7);
  obj5.children = items6;
  items3[2] = closure_8(sharedValue(sharedValue1[11]).View, obj5);
  const obj8 = { style: tmp.footer, children: null };
  let obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl3 = tmp6(tmp3[13]).intl;
  obj9.children = intl3.format(sharedValue(sharedValue1[14]).iqeKDz, {
    username: stateFromStores,
    loginHook(children, arg1) {
      return React5(Text_Text.Text, { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children }, arg1);
    }
  });
  obj8.children = closure_7(onLogin(sharedValue1[18]).Text, obj9);
  items3[3] = closure_7(closure_5, obj8);
  obj1.children = items3;
  const items7 = [closure_8(sharedValue(sharedValue1[11]).View, obj1), closure_7(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj.children = items7;
  return closure_8(onLogin(sharedValue1[15]).ModalScreen, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "rgb(0, 3, 40)";
fn(4560);
let createStyles = { container: null, backgroundFill: null, assetLayers: null, sunbeamGradient: null, riveContainer: null, content: null, description: null, footer: null, logoutBlockingLayer: null };
createStyles = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.zIndex = 0;
obj1.backgroundColor = "rgb(0, 3, 40)";
createStyles.backgroundFill = obj1;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.zIndex = 1;
createStyles.assetLayers = obj2;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.sunbeamGradient = {};
createStyles.riveContainer = { width: "100%", maxWidth: 523, height: 300 };
createStyles.content = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
createStyles.description = { textAlign: "center" };
let obj3 = {};
let obj4 = { alignItems: "center", width: "100%", gap: nativeDefault.space.PX_16, zIndex: 2 };
createStyles.footer = { position: "absolute", bottom: nativeDefault.space.PX_32, alignSelf: "center", zIndex: 2 };
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.zIndex = 10;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj6.backgroundColor = "rgb(0, 3, 40)";
createStyles.logoutBlockingLayer = obj6;
let closure_10 = createStyles.createStyles(createStyles);
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
  [tmp4, _slicedToArray] = _slicedToArray(noop.useState(false), 2);
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
  let obj = require("Navigator");
  const items = [callback, tmp4];
  const items1 = [tmp];
  const navigatorScreens = obj.useNavigatorScreens(() => ({
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
  obj = { screens: navigatorScreens, initialRouteName: constants.MAIN };
  return closure_7(require("Modal").Modal, obj);
};