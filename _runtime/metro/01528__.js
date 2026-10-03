// === Module 1528: ? ===

// Module 1528
import noop from "module_19" /* 19 */;

const require = arg1;

export const createNavigatorFactory = function createNavigatorFactory(NativeStackNavigator) {
  let Navigator = NativeStackNavigator;
  let str = NativeStackNavigator.displayName;
  if (str == null) {
    str = NativeStackNavigator.name;
  }
  if (str == null) {
    str = "Navigator";
  }
  return function createNavigator(config) {
    Navigator = config;
    if (null != config) {
      const obj3 = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group, config };
      Navigator = Navigator(str[1]).createComponentForStaticNavigation(obj3, Navigator);
      const obj4 = {
        config,
        with(IMAGE_ONLY_ANSWERS) {
            config = IMAGE_ONLY_ANSWERS;
            class WithComponent {
              constructor() {
                obj = { Navigator: closure_1 };
                return closure_2.createElement(closure_0, obj);
              }
            }
            WithComponent.displayName = "" + Navigator + "With";
            return {
              config,
              getComponent() {
                return WithComponent;
              }
            };
          },
        getComponent() {
            return closure_1;
          }
      };
      return obj4;
    } else {
      const obj = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group };
      return obj;
    }
  };
};