// === Module 1600: createStaticNavigation ===

// Module 1600 (createStaticNavigation)
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;

export const createStaticNavigation = function createStaticNavigation(getComponent) {
  closure_0 = getComponent;
  const component = getComponent.getComponent();
  return React.forwardRef(function Navigation(linking, ref) {
    linking = linking.linking;
    let merged = Object.assign(linking, Object.create(null));
    let memo;
    let obj = closure_1_2;
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
    memo = closure_1_2.useMemo(() => {
      let obj = linking(memo[2]);
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
      const pathConfigForStaticNavigation = obj.createPathConfigForStaticNavigation(linking, { initialRouteName }, "auto" === enabled);
      if (pathConfigForStaticNavigation) {
        let path;
        if (tmp2 != null) {
          const config2 = tmp2.config;
          if (config2 != null) {
            path = config2.path;
          }
        }
        obj = { path: null, initialRouteName: null, screens: null };
        obj[0] = path;
        let initialRouteName1;
        if (tmp2 != null) {
          const config3 = tmp2.config;
          if (config3 != null) {
            initialRouteName1 = config3.initialRouteName;
          }
        }
        obj[1] = initialRouteName1;
        obj[2] = pathConfigForStaticNavigation;
        return obj;
      }
      const tmp = linking;
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
        error = new Error("Linking is enabled but no linking configuration was found for the screens.\n\nTo solve this:\n- Specify a 'linking' property for the screens you want to link to.\n- Or set 'linking.enabled' to 'auto' to generate paths automatically.\n\nSee usage guide: https://reactnavigation.org/docs/static-configuration#linking");
        throw error;
      }
    }
    obj = {};
    const merged1 = Object.assign(merged);
    obj.ref = ref;
    obj.linking = memo1;
    obj.children = closure_1_3(memo, {});
    return closure_1_3(getComponent(table[3]).NavigationContainer, obj);
  });
};