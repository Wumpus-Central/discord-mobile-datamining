// _runtime/metro/05577__.js
import noop from "noop";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;

export default Link.createNavigatorFactory(function StackNavigator(arg0) {
  let NavigationContent;
  let children;
  let descriptors;
  let id;
  let initialRouteName;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, children, screenListeners, screenOptions } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let state;
  let navigation;
  const mode = merged.mode;
  navigation(4549)(null != mode, "Stack Navigator: 'mode=\"" + mode + "\"' is deprecated. Use 'presentation: \"" + mode + "\"' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator#presentation for more details.");
  const headerMode = merged.headerMode;
  navigation(4549)("none" === headerMode, "Stack Navigator: 'headerMode=\"none\"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headershown for more details.");
  let tmp9 = null != headerMode;
  const tmp4 = navigation(4549);
  const tmp5 = null != mode;
  if (tmp9) {
    tmp9 = "none" !== headerMode;
  }
  navigation(4549)(tmp9, "Stack Navigator: 'headerMode' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headermode for more details.");
  const keyboardHandlingEnabled = merged.keyboardHandlingEnabled;
  navigation(4549)(undefined !== keyboardHandlingEnabled, "Stack Navigator: 'keyboardHandlingEnabled' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#keyboardhandlingenabled for more details.");
  let obj = { presentation: mode, headerShown: null, headerMode: null, keyboardHandlingEnabled: null };
  let tmp12 = !headerMode;
  if (headerMode) {
    tmp12 = "none" !== headerMode;
  }
  obj[1] = tmp12;
  let tmp13;
  if (headerMode) {
    if ("none" !== headerMode) {
      tmp13 = headerMode;
    }
  }
  obj[2] = tmp13;
  obj[3] = keyboardHandlingEnabled;
  const tmp8 = navigation(4549);
  const navigationBuilder = state(1481).useNavigationBuilder(state(1481).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions, defaultScreenOptions: obj });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    const addListener = navigation.addListener;
    let addListenerResult;
    if (addListener != null) {
      addListenerResult = addListener("tabPress", (arg0) => {
        let closure_0 = arg0;
        focused = focused.isFocused();
        const animationFrame = requestAnimationFrame(() => {
          let tmp2 = closure_0.index > 0;
          if (tmp2) {
            tmp2 = closure_1;
          }
          if (tmp2) {
            tmp2 = !closure_0.defaultPrevented;
          }
          if (tmp2) {
            const obj = {};
            const StackActions = outer2_0(outer2_2[3]).StackActions;
            const merged = Object.assign(StackActions.popToTop());
            obj.target = closure_0.key;
            closure_1.dispatch(obj);
          }
        });
      });
    }
    return addListenerResult;
  }, items);
  obj = { children: null };
  obj = {};
  const obj2 = state(1481);
  const merged1 = Object.assign(merged);
  obj.state = state;
  obj.descriptors = descriptors;
  obj.navigation = navigation;
  obj[0] = jsx(navigation(5578), {});
  return <NavigationContent />;
});