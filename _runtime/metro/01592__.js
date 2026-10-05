// === Module 1592: ? ===

// Module 1592
import Fragment from "Fragment" /* 21 */;
import BaseNavigationContainer from "BaseNavigationContainer" /* 1493 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const createStaticNavigation = function createStaticNavigation(getComponent) {
  let closure_1;
  const component = getComponent.getComponent();
  return react.forwardRef(function Navigation(linking, ref) {
    linking = linking.linking;
    let merged = Object.assign(linking, Object.assign({ linking: 0 }));
    let memo;
    let enabled;
    const useMemo = React.useMemo;
    if (linking != null) {
      enabled = linking.enabled;
    }
    const items = [enabled, , ];
    let path;
    if (linking != null) {
      let config = linking.config;
      if (config != null) {
        path = config.path;
      }
    }
    items[1] = path;
    let initialRouteName;
    if (linking != null) {
      let config2 = linking.config;
      if (config2 != null) {
        initialRouteName = config2.initialRouteName;
      }
    }
    items[2] = initialRouteName;
    memo = useMemo(() => {
      let initialRouteName1;
      let initialRouteName;
      const createPathConfigForStaticNavigation = BaseNavigationContainer.createPathConfigForStaticNavigation;
      BaseNavigationContainer;
      if (linking != null) {
        const config = linking.config;
        if (config != null) {
          initialRouteName = config.initialRouteName;
        }
      }
      let enabled;
      if (linking != null) {
        enabled = linking.enabled;
      }
      const pathConfigForStaticNavigation = createPathConfigForStaticNavigation(getComponent, { initialRouteName }, "auto" === enabled);
      if (pathConfigForStaticNavigation) {
        let path;
        if (linking != null) {
          const config2 = linking.config;
          if (config2 != null) {
            path = config2.path;
          }
        }
        const obj = { path, initialRouteName: initialRouteName1, screens: pathConfigForStaticNavigation };
        initialRouteName1 = undefined;
        if (linking != null) {
          const config3 = linking.config;
          if (config3 != null) {
            initialRouteName1 = config3.initialRouteName;
          }
        }
        return obj;
      }
    }, items);
    const items1 = [linking, memo];
    let enabled1;
    const memo1 = React.useMemo(() => {
      if (linking) {
        let enabled;
        if (typeof linking.enabled === "boolean") {
          enabled = linking.enabled;
        } else {
          let screens;
          if (memo != null) {
            screens = memo.screens;
          }
          enabled = null != screens;
        }
        const obj = { enabled, config: memo };
        const merged = Object.assign(linking);
        return obj;
      }
    }, items1);
    if (linking != null) {
      enabled1 = linking.enabled;
    }
    if (true === enabled1) {
      let screens;
      if (memo != null) {
        screens = memo.screens;
      }
      if (null == screens) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Linking is enabled but no linking configuration was found for the screens.\n\nTo solve this:\n- Specify a 'linking' property for the screens you want to link to.\n- Or set 'linking.enabled' to 'auto' to generate paths automatically.\n\nSee usage guide: https://reactnavigation.org/docs/static-configuration#linking");
        throw error;
      }
    }
    const NavigationContainer = getComponent(closure_1[3]).NavigationContainer;
    const merged1 = Object.assign(merged);
    return <NavigationContainer ref={ref} linking={memo1}><memo /></NavigationContainer>;
  });
};