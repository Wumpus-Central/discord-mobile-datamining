import _slicedToArray from "_slicedToArray";
import NavigationStack from "NavigationStack";
import get_ActivityIndicator from "ManaContext";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "handleLogout";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let error;
let metroImportAll;
const require = arg1;
function RestrictedHoursLogoutBlockingLayer(visible) {
  let tmp2 = null;
  if (visible.visible) {
    const obj = { style: null, pointerEvents: "auto", accessibilityLiveRegion: "polite", children: null };
    obj[0] = tmp.logoutBlockingLayer;
    obj[3] = callback2(require(5703) /* ActivityIndicator */.ActivityIndicator, { size: "large" });
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
}
function RestrictedHoursScreen(visible) {
  let bottom;
  let top;
  const onLogin = visible.onLogin;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  const tmp = createCacheKey();
  ({ top, bottom } = sharedValue(sharedValue1[8])());
  const tmp5 = sharedValue(sharedValue1[9])();
  let obj = onLogin(sharedValue1[10]);
  let items = [mergeGuildAvatar];
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
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = onLogin(sharedValue1[11]);
  sharedValue3 = obj4.useSharedValue(0.9);
  const items1 = [sharedValue, sharedValue1, sharedValue2, sharedValue3];
  const effect = sharedValue3.useEffect(() => {
    let obj = onLogin(sharedValue1[12]);
    obj = { duration: 3000, easing: null };
    const Easing = onLogin(sharedValue1[11]).Easing;
    obj[1] = Easing.bezier(0.24, 0.27, 0.58, 1);
    const result = sharedValue.set(obj.withTiming(1, obj));
    let obj2 = onLogin(sharedValue1[11]);
    obj = { duration: 1500, easing: null };
    const Easing2 = onLogin(sharedValue1[11]).Easing;
    obj[1] = Easing2.bezier(0, 0, 1, 1);
    const result1 = sharedValue1.set(obj2.withDelay(1500, onLogin(sharedValue1[12]).withTiming(1, obj)));
    const obj4 = onLogin(sharedValue1[12]);
    const obj6 = onLogin(sharedValue1[11]);
    const obj1 = { duration: 1000, easing: null };
    const Easing3 = onLogin(sharedValue1[11]).Easing;
    obj1[1] = Easing3.bezier(0.1, 0.24, 0.32, 1);
    const result2 = sharedValue2.set(obj6.withDelay(2000, onLogin(sharedValue1[12]).withTiming(1, obj1)));
    const obj7 = onLogin(sharedValue1[12]);
    const obj9 = onLogin(sharedValue1[11]);
    obj2 = { duration: 1000, easing: null };
    const Easing4 = onLogin(sharedValue1[11]).Easing;
    obj2[1] = Easing4.bezier(0.1, 0.24, 0.32, 1);
    const result3 = sharedValue3.set(obj9.withDelay(2000, onLogin(sharedValue1[12]).withTiming(1, obj2)));
  }, items1);
  let obj5 = onLogin(sharedValue1[11]);
  class M {
    constructor() {
      obj = { opacity: c1.get() };
      return obj;
    }
  }
  M.__closure = { backgroundOpacity: sharedValue };
  M.__workletHash = 17073775693336;
  M.__initData = closure_13;
  const animatedStyle = obj5.useAnimatedStyle(M);
  let obj6 = onLogin(sharedValue1[11]);
  class O {
    constructor() {
      obj = { opacity: c2.get() };
      return obj;
    }
  }
  O.__closure = { gradientOpacity: sharedValue1 };
  O.__workletHash = 16592270370139;
  O.__initData = closure_14;
  const animatedStyle1 = obj6.useAnimatedStyle(O);
  let obj7 = onLogin(sharedValue1[11]);
  const fn = function z() {
    let obj = { opacity: sharedValue2.get(), transform: null };
    obj = { scale: sharedValue3.get() };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  fn.__closure = { contentOpacity: sharedValue2, contentScale: sharedValue3 };
  fn.__workletHash = 15616799997783;
  fn.__initData = closure_15;
  const animatedStyle2 = obj7.useAnimatedStyle(fn);
  if (null != tmp5) {
    const intl2 = tmp6(tmp3[13]).intl;
    obj = { endTime: null };
    obj[0] = tmp5;
    let formatResult = intl2.format(tmp2(tmp3[14]).VfqJvY, obj);
  } else {
    const intl = tmp6(tmp3[13]).intl;
    formatResult = intl.string(tmp2(tmp3[14]).abikhN);
  }
  obj = { backgroundColor: c9, children: null };
  obj1 = { style: items2, children: null };
  items2 = [tmp.container, { paddingTop: top, paddingBottom: bottom }, animatedStyle];
  obj2 = { style: tmp.backgroundFill, pointerEvents: "none" };
  const items3 = [callback2(closure_5, obj2), , , ];
  obj3 = { style: items4, pointerEvents: "none", children: null };
  items4 = [tmp.assetLayers, animatedStyle1];
  obj4 = { source: null, resizeMode: "cover", style: null };
  obj4[0] = onLogin(sharedValue1[16]);
  obj4[2] = tmp.sunbeamGradient;
  obj3[2] = callback2(sharedValue(sharedValue1[11]).Image, obj4);
  items3[1] = callback2(sharedValue(sharedValue1[11]).View, obj3);
  obj5 = { style: items5, children: null };
  items5 = [tmp.content, animatedStyle2];
  obj6 = { style: tmp.riveContainer, children: null };
  obj6[1] = callback2(onLogin(sharedValue1[17]).TeenScreenTimeRive, { artboard: "Teen Screen Time Illo", stateMachine: "State Machine 1" });
  const items6 = [callback2(closure_5, obj6), ];
  obj7 = { variant: "text-lg/medium", color: "text-overlay-light", style: tmp.description, children: formatResult };
  items6[1] = callback2(onLogin(sharedValue1[18]).Text, obj7);
  obj5[1] = items6;
  items3[2] = callback3(sharedValue(sharedValue1[11]).View, obj5);
  const obj8 = { style: tmp.footer, children: null };
  let obj9 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl3 = tmp6(tmp3[13]).intl;
  obj9[3] = intl3.format(sharedValue(sharedValue1[14]).iqeKDz, {
    username: stateFromStores,
    loginHook(children) {
      return outer1_7(onLogin(sharedValue1[18]).Text, { variant: "text-sm/normal", color: "text-link", onPress: onLogin, children }, arg1);
    }
  });
  obj8[1] = callback2(onLogin(sharedValue1[18]).Text, obj9);
  items3[3] = callback2(closure_5, obj8);
  obj1[1] = items3;
  const items7 = [callback3(sharedValue(sharedValue1[11]).View, obj1), callback2(RestrictedHoursLogoutBlockingLayer, { visible: visible.logoutRequestInFlight })];
  obj[1] = items7;
  return callback3(onLogin(sharedValue1[15]).ModalScreen, obj);
}
({ StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let c9 = "rgb(0, 3, 40)";
createCacheKey = { container: null, backgroundFill: null, assetLayers: null, sunbeamGradient: null, riveContainer: null, content: null, description: null, footer: null, logoutBlockingLayer: null };
createCacheKey = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.zIndex = 0;
obj1.backgroundColor = "rgb(0, 3, 40)";
createCacheKey[1] = obj1;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.zIndex = 1;
createCacheKey[2] = obj2;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[3] = {};
createCacheKey[4] = { width: "100%", maxWidth: 523, height: 300 };
createCacheKey[5] = { alignItems: "center", width: "100%", gap: require("Themes").space.PX_16, zIndex: 2 };
createCacheKey[6] = { textAlign: "center" };
let obj3 = {};
let obj4 = { alignItems: "center", width: "100%", gap: require("Themes").space.PX_16, zIndex: 2 };
createCacheKey[7] = { position: "absolute", bottom: require("Themes").space.PX_32, alignSelf: "center", zIndex: 2 };
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.zIndex = 10;
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj6.backgroundColor = "rgb(0, 3, 40)";
createCacheKey[8] = obj6;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_11 = { MAIN: "main" };
let closure_13 = { code: "function RestrictedHoursModalTsx1(){const{backgroundOpacity}=this.__closure;return{opacity:backgroundOpacity.get()};}" };
let closure_14 = { code: "function RestrictedHoursModalTsx2(){const{gradientOpacity}=this.__closure;return{opacity:gradientOpacity.get()};}" };
let closure_15 = { code: "function RestrictedHoursModalTsx3(){const{contentOpacity,contentScale}=this.__closure;return{opacity:contentOpacity.get(),transform:[{scale:contentScale.get()}]};}" };
let obj5 = { position: "absolute", bottom: require("Themes").space.PX_32, alignSelf: "center", zIndex: 2 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/RestrictedHoursModal.tsx");

export default function RestrictedHoursModal() {
  let _slicedToArray;
  let tmp4;
  const tmp = importDefault(16202)();
  let callback = tmp;
  importDefault = React.useRef(false);
  const dependencyMap = React.useRef(true);
  const effect = React.useEffect(() => {
    closure_2.current = true;
    return () => {
      closure_2.current = false;
    };
  }, []);
  [tmp4, _slicedToArray] = callback(React.useState(false), 2);
  callback = React.useCallback(() => {
    if (!tmp4.current) {
      tmp.current = true;
      callback(true);
      const obj = tmp4(5707);
      tmp4(5707).logout("restricted_hours").finally(() => {
        if (ref.current) {
          closure_1.current = false;
          callback(false);
        }
      });
      const logoutResult = tmp4(5707).logout("restricted_hours");
    }
  }, []);
  importDefault = tmp4;
  let obj = callback(5636);
  const items = [callback, tmp4];
  const items1 = [tmp];
  const navigatorScreens = obj.useNavigatorScreens(() => ({
    [outer1_11.MAIN]: {
      headerShown: false,
      gestureEnabled: false,
      render() {
        return outer1_7(outer1_16, { onLogin: closure_0, logoutRequestInFlight: closure_1 });
      }
    }
  }), items);
  const effect1 = React.useEffect(() => {
    let current = callback;
    if (!callback) {
      current = tmp4.current;
    }
    if (!current) {
      const result = callback(16198).closeRestrictedHoursModal();
      const obj = callback(16198);
    }
  }, items1);
  importDefault(4663)(() => true);
  obj = { screens: navigatorScreens, initialRouteName: constants.MAIN };
  return callback2(callback(11249).Modal, obj);
};