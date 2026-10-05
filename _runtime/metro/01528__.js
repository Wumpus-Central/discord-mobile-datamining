// === Module 1528: ? ===

// Module 1528
import react from "react" /* 19 */;


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
      const obj2 = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group, config };
      const createComponentForStaticNavigation = Navigator(str[1]).createComponentForStaticNavigation;
      Navigator(str[1]);
      Navigator = createComponentForStaticNavigation(obj2, Navigator);
      return {
        config,
        with: (IMAGE_ONLY_ANSWERS) => {
            config = IMAGE_ONLY_ANSWERS;
            class WithComponent {
              constructor() {
                return <IMAGE_ONLY_ANSWERS Navigator={Navigator} />;
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
            return Navigator;
          }
      };
    } else {
      const obj = { Navigator, Screen: Navigator(str[2]).Screen, Group: Navigator(str[3]).Group };
      return obj;
    }
  };
};