// === Module 15942: ChatPanelNativeStackNavigator ===

// Module 15942 (ChatPanelNativeStackNavigator)
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function ChatPanelNativeStackNavigator(arg0) {
  ({ id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  let state;
  let descriptors;
  let navigation;
  let state2;
  let obj = state(descriptors[2]);
  const navigationBuilder = obj.useNavigationBuilder(state(descriptors[2]).StackRouter, { id, initialRouteName, UNSTABLE_routeNamesChangeBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  descriptors = navigationBuilder.descriptors;
  navigation = navigationBuilder.navigation;
  let items = [state, descriptors];
  ({ describe, NavigationContent } = navigationBuilder);
  const memo = navigation.useMemo(() => {
    state = {};
    const merged = Object.assign(state);
    const items = [...state.routes];
    state.routes = items;
    const items1 = [];
    const items2 = [];
    const filteredDescriptors = {};
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < state.routes.length) {
      do {
        let tmp2 = state.routes[num];
        let tmp3 = state;
        let tmp4 = descriptors;
        let obj3 = state(descriptors[3]);
        let tmp5 = num;
        let tmp6 = num2;
        if (null != obj3.coerceChannelRoute(tmp2)) {
          let arr = items1.push(tmp2);
          let sum = num2;
          if (num <= state.index) {
            sum = num2 + 1;
          }
        } else {
          arr = items2.push(tmp2);
          sum = num2;
          if (tmp2.key in descriptors) {
            filteredDescriptors[tmp2.key] = tmp8[tmp2.key];
            sum = num2;
          }
        }
        num = num + 1;
        num2 = sum;
        num3 = sum;
      } while (num < state.routes.length);
    }
    state.index = Math.max(0, state.index - num3);
    state.routes = items2;
    if (0 === state.routes.length) {
      state.index = 0;
    } else if (state.index >= state.routes.length) {
      state.index = state.routes.length - 1;
    }
    return { state, filteredDescriptors };
  }, items);
  state2 = memo.state;
  let items1 = [navigation, , ];
  ({ index: arr2[1], key: arr2[2] } = state2);
  const accessibilityPatchedDescriptors = state(descriptors[4]).useAccessibilityPatchedDescriptors(memo.filteredDescriptors);
  const effect = navigation.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      const addListener = navigation.addListener;
      if (addListener != null) {
        addListenerResult = addListener("tabPress", (arg0) => {
          closure_0 = arg0;
          closure_1 = focused.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            let tmp2 = closure_1_3.index > 0;
            if (tmp2) {
              tmp2 = closure_1;
            }
            if (tmp2) {
              tmp2 = !defaultPrevented.defaultPrevented;
            }
            if (tmp2) {
              const obj = {};
              const StackActions = closure_2_0(closure_2_1[2]).StackActions;
              const merged = Object.assign(StackActions.popToTop());
              obj.target = closure_1_3.key;
              closure_1_2.dispatch(obj);
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items1);
  obj = { children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.state = state2;
  obj.navigation = navigation;
  obj.descriptors = accessibilityPatchedDescriptors;
  obj.describe = describe;
  obj[0] = state2(state(descriptors[5]).NativeStackView, obj);
  return state2(NavigationContent, obj);
}
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx");

export default function createChatPanelNativeStackNavigator(arg0) {
  return createStandardNavigationFactories.createNavigatorFactory(ChatPanelNativeStackNavigator)(arg0);
};