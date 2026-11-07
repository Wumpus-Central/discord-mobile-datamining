// === Module 19767: RestrictedHoursModal ===

// Module 19767 (RestrictedHoursModal)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5370 */;
import Text_Text from "Text/Text" /* 5751 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 6154 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6795 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7015 */;
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators" /* 19766 */;
import useIsInRestrictedHoursDefault from "useIsInRestrictedHours" /* 19770 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: tmp.logoutBlockingLayer, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "large" }) };
    tmp2 = metroImportDefault(hasOwnProperty, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(visible) {
  _require = visible.onLogin;
  importDefault = undefined;
  let sharedValue1;
  const tmp = closure_10();
  ({ top, bottom } = require("useSafeAreaInsets")());
  const tmp5 = require("useFormattedEndTime")();
  const tmp4 = require("useSafeAreaInsets")();
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  let obj = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(0);
  importDefault = sharedValue;
  let obj2 = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj4 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    const obj2 = { duration: 3000, easing: null };
    const Easing = _mod1652.Easing;
    obj2.easing = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = _undefined.set(timing_timing.withTiming(1, obj2));
    const obj3 = _mod1652;
    const obj5 = { duration: 1500, easing: null };
    const Easing2 = _mod1652.Easing;
    obj5.easing = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj3.withDelay(1500, timing_timing.withTiming(1, obj5)));
    const obj6 = _mod1652;
    const obj8 = { duration: 1000, easing: null };
    const Easing3 = _mod1652.Easing;
    obj8.easing = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, timing_timing.withTiming(1, obj8)));
    const obj9 = _mod1652;
    const obj11 = { duration: 1000, easing: null };
    const Easing4 = _mod1652.Easing;
    obj11.easing = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, timing_timing.withTiming(1, obj11)));
  }, items1);
  let obj5 = require("module_1652");
  const items2 = [closure_13, sharedValue];
  _require = undefined;
  [tmp13, tmp14] = items2;
  class RestrictedHoursModalTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp14];
  RestrictedHoursModalTsx1.__closure = items3;
  RestrictedHoursModalTsx1.__workletHash = 11776278729345;
  RestrictedHoursModalTsx1.__initData = tmp13;
  const animatedStyle = require("module_1652").useAnimatedStyle(RestrictedHoursModalTsx1);
  let obj6 = require("module_1652");
  const items4 = [closure_14, sharedValue1];
  _require = undefined;
  [tmp16, tmp17] = items4;
  class RestrictedHoursModalTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp17];
  RestrictedHoursModalTsx2.__closure = items5;
  RestrictedHoursModalTsx2.__workletHash = 10964689956002;
  RestrictedHoursModalTsx2.__initData = tmp16;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(RestrictedHoursModalTsx2);
  const tmp6Result = require("module_1652");
  const items6 = [closure_15, sharedValue2, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items6;
  class RestrictedHoursModalTsx3 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: closure_1.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp20, tmp21];
  RestrictedHoursModalTsx3.__closure = items7;
  RestrictedHoursModalTsx3.__workletHash = 4184569865582;
  RestrictedHoursModalTsx3.__initData = tmp19;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(RestrictedHoursModalTsx3);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    let obj7 = { endTime: tmp5 };
    let formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj7);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  let obj8 = { backgroundColor, children: null };
  let obj9 = { style: null, children: null };
  const items8 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj9.style = items8;
  const items9 = [closure_7(closure_5, { style: tmp.backgroundFill, pointerEvents: "none" }), , , ];
  let obj11 = { style: null, pointerEvents: "none", children: null };
  const items10 = [tmp.assetLayers, animatedStyle1];
  obj11.style = items10;
  const obj12 = { source: null, resizeMode: "cover", style: null };
  const obj10 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const tmp6Result2 = require("module_1652");
  obj12.source = require("module_19769");
  obj12.style = tmp.sunbeamGradient;
  obj11.children = closure_7(require("FastImage"), obj12);
  items9[1] = closure_7(require("module_1652").View, obj11);
  const obj13 = { style: null, children: null };
  const items11 = [tmp.content, animatedStyle2];
  obj13.style = items11;
  const tmp2Result = require("FastImage");
  const items12 = [closure_7(closure_5, { style: tmp.riveContainer, children: closure_7(require("TeenScreenTimeRive").TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" }) }), closure_7(require("Text/Text").Text, { variant: "body-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult })];
  obj13.children = items12;
  items9[2] = closure_8(require("module_1652").View, obj13);
  const obj16 = { style: tmp.footer, children: null };
  const obj17 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl3 = tmp6(tmp3[13]).intl;
  obj17.children = intl3.format(require("module_2664").iqeKDz, {
    username: stateFromStores,
    loginHook(children, id) {
      return metroImportDefault(Text_Text.Text, { variant: "body-sm/normal", color: "text-link", onPress, children }, id);
    }
  });
  obj16.children = closure_7(require("Text/Text").Text, obj17);
  items9[3] = closure_7(closure_5, obj16);
  obj9.children = items9;
  const items13 = [closure_8(require("module_1652").View, obj9), closure_7(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj8.children = items13;
  return closure_8(require("ModalScreen").ModalScreen, obj8);
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let c9 = "rgb(0, 3, 40)";
const createStyles = fn(5140);
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
let closure_13 = { code: "(function RestrictedHoursModalTsx1(){let[backgroundOpacity]=this.__closure;return{opacity:backgroundOpacity.get()};})" };
let closure_14 = { code: "(function RestrictedHoursModalTsx2(){let[gradientOpacity]=this.__closure;return{opacity:gradientOpacity.get()};})" };
let closure_15 = { code: "(function RestrictedHoursModalTsx3(){let[contentOpacity,contentScale]=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};})" };
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
  items = [callback, tmp4];
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