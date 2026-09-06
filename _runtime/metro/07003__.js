// _runtime/metro/07003__.js
import Link2 from "../01484_Link.js";
import noop from "00019__.js";

require = fn;
function StackNavigator(arg0) {
  ({
    id,
    initialRouteName,
    UNSTABLE_routeNamesChangeBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
    screenLayout,
    UNSTABLE_router,
  } = arg0);
  let merged = Object.assign(
    arg0,
    Object.assign({
      id: 0,
      initialRouteName: 0,
      UNSTABLE_routeNamesChangeBehavior: 0,
      children: 0,
      layout: 0,
      screenListeners: 0,
      screenOptions: 0,
      screenLayout: 0,
      UNSTABLE_router: 0,
    }),
  );
  let state;
  let navigation;
  state(navigation[2]);
  const navigationBuilder = state(navigation[2]).useNavigationBuilder(state(navigation[2]).StackRouter, {
    id,
    initialRouteName,
    UNSTABLE_routeNamesChangeBehavior,
    children,
    layout,
    screenListeners,
    screenOptions,
    screenLayout,
    UNSTABLE_router,
  });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, ,];
  ({ index: arr[1], key: arr[2] } = state);
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  const effect = noop.useEffect(() => {
    const addListener = navigation.addListener;
    let addListenerResult;
    if (addListener != null) {
      addListenerResult = addListener("tabPress", (arg0) => {
        const defaultPrevented = arg0;
        closure_1 = closure_1.isFocused();
        const animationFrame = requestAnimationFrame(() => {
          let tmp2 = index.index > 0;
          if (tmp2) {
            tmp2 = closure_1;
          }
          if (tmp2) {
            tmp2 = !defaultPrevented.defaultPrevented;
          }
          if (tmp2) {
            const obj = {};
            const StackActions = state(navigation[2]).StackActions;
            const merged = Object.assign(StackActions.popToTop());
            obj.target = index.key;
            closure_2_1.dispatch(obj);
          }
        });
      });
    }
    return addListenerResult;
  }, items);
  let obj = { children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.direction = obj.useLocale().direction;
  obj.state = state;
  obj.describe = describe;
  obj.descriptors = descriptors;
  obj.navigation = navigation;
  obj.children = jsx(state(navigation[3]).StackView, {});
  return <NavigationContent />;
}
const jsx = fn(21).jsx;
const Link = fn(1484);

export const createStackNavigator = function createStackNavigator(arg0) {
  return Link2.createNavigatorFactory(StackNavigator)(arg0);
};
export const createStackScreen = Link.createScreenFactory();
