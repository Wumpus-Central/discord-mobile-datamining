// _runtime/01537_createNavigatorFactory.js
import noop from "noop";

const require = arg1;

export const createNavigatorFactory = function createNavigatorFactory(AccessibleNativeStackNavigator) {
  let closure_0 = AccessibleNativeStackNavigator;
  let str = AccessibleNativeStackNavigator.displayName;
  if (str == null) {
    str = AccessibleNativeStackNavigator.name;
  }
  if (str == null) {
    str = "Navigator";
  }
  return function createNavigator(arg0) {
    const AccessibleNativeStackNavigator = arg0;
    if (null != arg0) {
      let obj = { Navigator: null, Screen: null, Group: null, config: null };
      obj[0] = AccessibleNativeStackNavigator;
      obj[1] = AccessibleNativeStackNavigator(str[2]).Screen;
      obj[2] = AccessibleNativeStackNavigator(str[3]).Group;
      obj[3] = arg0;
      closure_1 = AccessibleNativeStackNavigator(str[1]).createComponentForStaticNavigation(obj, closure_1);
      obj = { config: null, with: null, getComponent: null };
      obj[0] = arg0;
      obj[1] = function with(IMAGE_ONLY_ANSWERS, arg1) {
        let closure_0 = IMAGE_ONLY_ANSWERS;
        class WithComponent {
          constructor() {
            obj = { Navigator: WithComponent };
            return outer3_2.createElement(closure_0, obj);
          }
        }
        WithComponent.displayName = "" + closure_1 + "With";
        return {
          config: closure_0,
          getComponent() {
            return WithComponent;
          }
        };
      };
      obj[2] = function getComponent() {
        return closure_1;
      };
      return obj;
    } else {
      obj = { Navigator: null, Screen: null, Group: null };
      obj[0] = AccessibleNativeStackNavigator;
      obj[1] = AccessibleNativeStackNavigator(str[2]).Screen;
      obj[2] = AccessibleNativeStackNavigator(str[3]).Group;
      return obj;
    }
  };
};