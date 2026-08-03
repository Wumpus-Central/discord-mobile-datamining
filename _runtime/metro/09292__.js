// === Module 9292: ? ===

// Module 9292
import noop from "noop";
import { jsx } from "jsxProd";
import Link from "Link";

const require = arg1;

export default Link.createNavigatorFactory(function NativeStackNavigator(arg0) {
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
  let obj = state(1481);
  const navigationBuilder = obj.useNavigationBuilder(state(1481).StackRouter, { id, initialRouteName, children, screenListeners, screenOptions });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
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
              const StackActions = outer2_0(outer2_2[2]).StackActions;
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
  obj[0] = jsx(navigation(9293), {});
  return <NavigationContent />;
});