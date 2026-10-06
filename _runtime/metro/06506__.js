// === Module 6506: ? ===

// Module 6506
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import Link from "Link" /* 1491 */;

let focused, navigation;

function StackNavigator(arg0) {
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
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
  let state;
  navigation = undefined;
  let obj = state(navigation[2]);
  const direction = obj.useLocale().direction;
  const obj2 = state(navigation[2]);
  const navigationBuilder = obj2.useNavigationBuilder(state(navigation[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  const effect = react.useEffect(() => {
    let index;
    const addListener = navigation.addListener;
    let addListenerResult;
    if (addListener != null) {
      addListenerResult = addListener("tabPress", (arg0) => {
        let closure_1;
        const defaultPrevented = arg0;
        focused = focused.isFocused();
        const animationFrame = requestAnimationFrame(() => {
          const tmp2 = index.index > 0 && closure_1 && !defaultPrevented.defaultPrevented;
          if (tmp2) {
            const dispatch = focused.dispatch;
            const obj = { target: index.key };
            const StackActions = state(navigation[2]).StackActions;
            const merged = Object.assign(StackActions.popToTop());
            dispatch(obj);
          }
        });
      });
    }
    return addListenerResult;
  }, items);
  const StackView = state(navigation[3]).StackView;
  const merged1 = Object.assign(merged);
  return <NavigationContent>{null}</NavigationContent>;
}
const jsx = Fragment.jsx;

export const createStackNavigator = function createStackNavigator(arg0) {
  const obj = Link;
  return obj.createNavigatorFactory(StackNavigator)(arg0);
};
export const createStackScreen = Link.createScreenFactory();