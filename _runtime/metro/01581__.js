// _runtime/metro/01581__.js
import BaseNavigationContainer from "../01486_BaseNavigationContainer.js";
import _mod1582 from "01582__.js";
import _mod1584 from "01584__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

require = fn;
let closure_2 = [
  "children",
  "id",
  "initialRouteName",
  "layout",
  "screenLayout",
  "screenListeners",
  "screenOptions",
  "UNSTABLE_routeNamesChangeBehavior",
  "UNSTABLE_router",
];
const jsx = fn(21).jsx;

export const createStandardNavigationFactories = function createStandardNavigationFactories(arg0, arg1, arg2) {
  _require = arg1;
  dependencyMap = arg2;
  ({ type, version, NavigatorContent: closure_2 } = arg0);
  if ("standard" !== type) {
    let str3 = "unknown type.";
    if (typeof type === "string") {
      const _HermesInternal2 = HermesInternal;
      str3 = 'type "' + type + '".';
    }
    const error = new Error(
      "createStandardNavigationFactories only works with standard navigator objects, but got navigator of " + str3,
    );
    throw error;
  } else if (1 !== version) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error(
      "createStandardNavigationFactories only works with version 1 of standard navigator objects, but got version " +
        version +
        ".",
    );
    throw error1;
  } else {
    let obj = {
      createNavigator: require("BaseNavigationContainer").createNavigatorFactory(
        function StandardNavigationNavigator(UNSTABLE_routeNamesChangeBehavior) {
          let obj = BaseNavigationContainer;
          const navigationBuilder = obj.useNavigationBuilder(closure_0, UNSTABLE_routeNamesChangeBehavior);
          closure_1 = _mod1582.useBuildHref();
          let tmp2 = _mod1584;
          let flag = tmp2.useMemoArray;
          if (!("preloadedRoutes" in navigationBuilder.state)) {
            let routes = navigationBuilder.state.routes;
            const flagResult = flag(
              routes.map((key) => {
                const tmp = closure_1(key.name, key.params);
                const items = [{ key: key.key, name: key.name, params: key.params, href: tmp }];
                const items1 = [, , ,];
                ({ key: arr2[0], name: arr2[1], params: arr2[2] } = key);
                items1[3] = tmp;
                items[1] = items1;
                return items;
              }),
            );
            closure_2 = flagResult;
            let items = [navigationBuilder.state.index, flagResult];
            obj = {};
            const routes2 = noop.useMemo(
              () => ({ index: navigationBuilder.state.index, routes: flagResult }),
              items,
            ).routes;
            tmp2 = routes2[Symbol.iterator]();
            flag = true;
          } else {
            const _Array = Array;
          }
          routes = navigationBuilder.state.routes;
          routes = routes.concat(navigationBuilder.state.preloadedRoutes);
        },
      ),
      createScreen: null,
    };
    let obj2 = require("BaseNavigationContainer");
    obj.createScreen = require("BaseNavigationContainer").createScreenFactory();
    return obj;
  }
};
