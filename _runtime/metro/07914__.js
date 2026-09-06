// === Module 7914: ? ===

// Module 7914
import Link2 from "Link" /* 1484 */;
import noop from "module_19" /* 19 */;

require = fn;
function NativeStackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.assign({ id: 0, initialRouteName: 0, UNSTABLE_routeNamesChangeBehavior: 0, children: 0, layout: 0, screenListeners: 0, screenOptions: 0, screenLayout: 0, UNSTABLE_router: 0 }));
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
  obj.children = jsx(state(navigation[3]).NativeStackView, {});
  return <NavigationContent />;
}
const jsx = fn(21).jsx;
const Link = fn(1484);

export const createNativeStackNavigator = function createNativeStackNavigator(arg0) {
  return Link2.createNavigatorFactory(NativeStackNavigator)(arg0);
};
export const createNativeStackScreen = Link.createScreenFactory();