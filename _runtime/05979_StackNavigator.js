// === Module 5979: StackNavigator ===

// Module 5979 (StackNavigator)
import createStandardNavigationFactories2 from "createStandardNavigationFactories" /* 1500 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1500 */;

require = arg1;
function StackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let state;
  let navigation;
  let obj = state(navigation[2]);
  const navigationBuilder = state(navigation[2]).useNavigationBuilder(state(navigation[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    const addListener = navigation.addListener;
    let addListenerResult;
    if (addListener != null) {
      addListenerResult = addListener("tabPress", (arg0) => {
        closure_0 = arg0;
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
            const StackActions = closure_2_0(closure_2_1[2]).StackActions;
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
  const merged1 = Object.assign(merged);
  obj.direction = obj.useLocale().direction;
  obj.state = state;
  obj.describe = describe;
  obj.descriptors = descriptors;
  obj.navigation = navigation;
  obj[0] = jsx(state(navigation[3]).StackView, {});
  return <NavigationContent />;
}

export const createStackNavigator = function createStackNavigator(arg0) {
  return createStandardNavigationFactories2.createNavigatorFactory(StackNavigator)(arg0);
};
export const createStackScreen = createStandardNavigationFactories.createScreenFactory();