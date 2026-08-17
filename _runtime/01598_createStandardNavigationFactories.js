// _runtime/01598_createStandardNavigationFactories.js
import closure_3 from "_objectWithoutProperties" /* 109 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import { BaseNavigationContainer } from "01503_BaseNavigationContainer.js";

const require = arg1;
let closure_2 = ["children", "id", "initialRouteName", "layout", "screenLayout", "screenListeners", "screenOptions", "UNSTABLE_routeNamesChangeBehavior", "UNSTABLE_router"];

export const createStandardNavigationFactories = function createStandardNavigationFactories(arg0, arg1, arg2) {
  const _require = arg1;
  dependencyMap = arg2;
  ({ type, version, NavigatorContent: closure_2 } = arg0);
  if ("standard" !== type) {
    let str3 = "unknown type.";
    if (typeof type === "string") {
      const _HermesInternal2 = HermesInternal;
      str3 = "type \"" + type + "\".";
    }
    error = new Error("createStandardNavigationFactories only works with standard navigator objects, but got navigator of " + str3);
    throw error;
  } else if (1 !== version) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("createStandardNavigationFactories only works with version 1 of standard navigator objects, but got version " + version + ".");
    throw error1;
  } else {
    let obj = { createNavigator: null, createScreen: null };
    obj[0] = _BaseNavigationContainer.createNavigatorFactory(function StandardNavigationNavigator(UNSTABLE_routeNamesChangeBehavior) {
      let obj = callback(1503);
      navigationBuilder = obj.useNavigationBuilder(navigationBuilder, UNSTABLE_routeNamesChangeBehavior);
      dependencyMap = callback(1599).useBuildHref();
      let tmp2 = callback(1601);
      let flag = tmp2.useMemoArray;
      if (!("preloadedRoutes" in navigationBuilder.state)) {
        let routes = navigationBuilder.state.routes;
        const flagResult = flag(routes.map((key) => {
          const tmp = callback(key.name, key.params);
          const items = [{ key: key.key, name: key.name, params: key.params, href: tmp }, ];
          const items1 = [, , , ];
          ({ key: arr2[0], name: arr2[1], params: arr2[2] } = key);
          items1[3] = tmp;
          items[1] = items1;
          return items;
        }));
        closure_2 = flagResult;
        let items = [navigationBuilder.state.index, flagResult];
        obj = {};
        const routes2 = closure_1_4.useMemo(() => ({ index: navigationBuilder.state.index, routes: closure_2 }), items).routes;
        tmp2 = routes2[Symbol.iterator]();
        flag = true;
      } else {
        const _Array = Array;
      }
      routes = navigationBuilder.state.routes;
      routes = routes.concat(navigationBuilder.state.preloadedRoutes);
    });
    const obj2 = _BaseNavigationContainer;
    obj[1] = _BaseNavigationContainer.createScreenFactory();
    return obj;
  }
};