// _runtime/metro/01587__.js
import BaseNavigationContainer from "../01488_BaseNavigationContainer.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const createStaticNavigation = function createStaticNavigation(getComponent) {
  const component = getComponent.getComponent();
  return noop.forwardRef(function Navigation(linking, ref) {
    linking = linking.linking;
    let merged = Object.assign(linking, Object.assign({ linking: 0 }));
    let memo;
    let enabled;
    if (linking != null) {
      enabled = linking.enabled;
    }
    const items = [enabled, ,];
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
      let initialRouteName;
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
      const pathConfigForStaticNavigation = BaseNavigationContainer.createPathConfigForStaticNavigation(
        closure_0,
        { initialRouteName },
        "auto" === enabled,
      );
      if (pathConfigForStaticNavigation) {
        let path;
        if (linking != null) {
          const config2 = linking.config;
          if (config2 != null) {
            path = config2.path;
          }
        }
        const obj2 = { path, initialRouteName: null, screens: null };
        let initialRouteName1;
        if (linking != null) {
          const config3 = linking.config;
          if (config3 != null) {
            initialRouteName1 = config3.initialRouteName;
          }
        }
        obj2.initialRouteName = initialRouteName1;
        obj2.screens = pathConfigForStaticNavigation;
        return obj2;
      }
    }, items);
    const items1 = [linking, memo];
    let enabled1;
    const memo1 = React.useMemo(() => {
      if (linking) {
        if (typeof linking.enabled === "boolean") {
          let enabled = linking.enabled;
        } else {
          let screens;
          if (memo != null) {
            screens = memo.screens;
          }
          enabled = null != screens;
        }
        const obj = {};
        const merged = Object.assign(linking);
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
        const error = new Error(
          "Linking is enabled but no linking configuration was found for the screens.\n\nTo solve this:\n- Specify a 'linking' property for the screens you want to link to.\n- Or set 'linking.enabled' to 'auto' to generate paths automatically.\n\nSee usage guide: https://reactnavigation.org/docs/static-configuration#linking",
        );
        throw error;
      }
    }
    let obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.ref = ref;
    obj2.linking = memo1;
    obj2.children = <memo />;
    return jsx(getComponent(closure_1[3]).NavigationContainer, {});
  });
};
