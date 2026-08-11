// _runtime/08577_NativeStackNavigator.js
import noop from "noop";
import { jsx } from "jsxProd";
import createStandardNavigationFactories from "createStandardNavigationFactories";
import { createStandardNavigationFactories } from "01500_createStandardNavigationFactories.js";

const require = arg1;
function NativeStackNavigator(arg0) {
  let NavigationContent;
  let UNSTABLE_routeNamesChangeBehavior;
  let UNSTABLE_router;
  let children;
  let describe;
  let descriptors;
  let id;
  let initialRouteName;
  let layout;
  let screenLayout;
  let screenListeners;
  let screenOptions;
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let state;
  let navigation;
  let context;
  let obj = state(navigation[2]);
  const navigationBuilder = obj.useNavigationBuilder(state(navigation[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  context = context.useContext(state(navigation[2]).NavigationMetaContext);
  const items = [context, navigation, , ];
  ({ index: arr[2], key: arr[3] } = state);
  const effect = context.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      const addListener = navigation.addListener;
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
              const StackActions = outer2_0(outer2_1[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              obj.target = closure_0.key;
              closure_1.dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items);
  obj = { children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.state = state;
  obj.navigation = navigation;
  obj.descriptors = descriptors;
  obj.describe = describe;
  obj[0] = jsx(state(navigation[3]).NativeStackView, {});
  return <NavigationContent />;
}

export const createNativeStackNavigator = function createNativeStackNavigator(arg0) {
  return createStandardNavigationFactories.createNavigatorFactory(NativeStackNavigator)(arg0);
};
export const createNativeStackScreen = createStandardNavigationFactories.createScreenFactory();