// === Module 1585: ? ===

// Module 1585
import BaseNavigationContainer from "BaseNavigationContainer" /* 1486 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const createStaticNavigation = function createStaticNavigation(getComponent) {
  const component = getComponent.getComponent();
  return noop.forwardRef(function Navigation(linking, ref) {
    linking = linking.linking;
    let merged = Object.assign(linking, Object.assign({ linking: 0 }));
    let memo;
    let obj = React;
    let enabled;
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
    memo = React.useMemo(() => {
      let obj = BaseNavigationContainer;
      let initialRouteName;
      if (linking != null) {
        const config = tmp2.config;
        if (config != null) {
          initialRouteName = config.initialRouteName;
        }
      }
      let enabled;
      if (linking != null) {
        enabled = tmp2.enabled;
      }
      const pathConfigForStaticNavigation = obj.createPathConfigForStaticNavigation(closure_0, { initialRouteName }, "auto" === enabled);
      if (pathConfigForStaticNavigation) {
        let path;
        if (tmp2 != null) {
          const config2 = tmp2.config;
          if (config2 != null) {
            path = config2.path;
          }
        }
        obj = { path, initialRouteName: null, screens: null };
        let initialRouteName1;
        if (tmp2 != null) {
          const config3 = tmp2.config;
          if (config3 != null) {
            initialRouteName1 = config3.initialRouteName;
          }
        }
        obj.initialRouteName = initialRouteName1;
        obj.screens = pathConfigForStaticNavigation;
        return obj;
      }
    }, items);
    const items1 = [linking, memo];
    let enabled1;
    const memo1 = obj.useMemo(() => {
      if (linking) {
        if (typeof tmp.enabled === "boolean") {
          let enabled = tmp.enabled;
        } else {
          let screens;
          if (memo != null) {
            screens = memo.screens;
          }
          enabled = null != screens;
        }
        const obj = {};
        const merged = Object.assign(tmp);
        obj.enabled = enabled;
        obj.config = memo;
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
        const error = new Error("Linking is enabled but no linking configuration was found for the screens.\n\nTo solve this:\n- Specify a 'linking' property for the screens you want to link to.\n- Or set 'linking.enabled' to 'auto' to generate paths automatically.\n\nSee usage guide: https://reactnavigation.org/docs/static-configuration#linking");
        throw error;
      }
    }
    obj = {};
    const merged1 = Object.assign(merged);
    obj.ref = ref;
    obj.linking = memo1;
    obj.children = <memo />;
    return jsx(getComponent(closure_1[3]).NavigationContainer, {});
  });
};