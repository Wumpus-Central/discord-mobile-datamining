// _runtime/metro/01588__.js
import Fragment from "../react/00021_Fragment.js";
import BaseNavigationContainer from "../01493_BaseNavigationContainer.js";
import _mod1589 from "01589__.js";
import react2 from "../01591_react.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, closure_1, dependencyMap, navigation;

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
const jsx = Fragment.jsx;

export const createStandardNavigationFactories = function createStandardNavigationFactories(arg0, arg1, arg2) {
  let closure_0;
  let obj2;
  let obj3;
  let type;
  let version;
  _require = arg1;
  dependencyMap = arg2;
  ({ type, version, NavigatorContent: closure_2 } = arg0);
  if ("standard" !== type) {
    let str3 = "unknown type.";
    const _Error2 = Error;
    if (typeof type === "string") {
      const _HermesInternal2 = HermesInternal;
      str3 = 'type "' + type + '".';
    }
    const self3 = this;
    const self4 = this;
    const _Error21 = new _Error2(
      "createStandardNavigationFactories only works with standard navigator objects, but got navigator of " + str3,
    );
    throw _Error21;
  } else if (1 !== version) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error(
      "createStandardNavigationFactories only works with version 1 of standard navigator objects, but got version " +
        version +
        ".",
    );
    throw error;
  } else {
    let obj = {
      createNavigator: obj2.createNavigatorFactory(
        function StandardNavigationNavigator(UNSTABLE_routeNamesChangeBehavior) {
          let UNSTABLE_router;
          let children;
          let id;
          let initialRouteName;
          let layout;
          let screenLayout;
          let screenListeners;
          let screenOptions;
          let obj = BaseNavigationContainer;
          const navigationBuilder = obj.useNavigationBuilder(closure_0, UNSTABLE_routeNamesChangeBehavior);
          const obj3 = _mod1589;
          closure_1 = obj3.useBuildHref();
          let tmp = react2;
          if ("preloadedRoutes" in navigationBuilder.state) {
            let combined;
            const _Array = Array;
            if (Array.isArray(navigationBuilder.state.preloadedRoutes)) {
              const routes = navigationBuilder.state.routes;
              combined = routes.concat(navigationBuilder.state.preloadedRoutes);
            }
            const tmp2Result = tmp2(
              combined.map((key) => {
                const tmp = closure_1(key.name, key.params);
                const items = [,];
                const obj = { key: key.key, name: key.name, params: key.params, href: tmp };
                items[0] = obj;
                const items1 = [, , ,];
                ({ key: arr2[0], name: arr2[1], params: arr2[2] } = key);
                items1[3] = tmp;
                items[1] = items1;
                return items;
              }),
            );
            closure_2 = tmp2Result;
            let items = [navigationBuilder.state.index, tmp2Result];
            const memo = react.useMemo(() => ({ index: navigationBuilder.state.index, routes }), items);
            const obj2 = {};
            const routes2 = memo.routes;
            const iter = routes2[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp12 = nextResult;
              let describeResult = navigationBuilder.descriptors[nextResult.key];
              if (describeResult == null) {
                describeResult = navigationBuilder.describe(tmp12, true);
              }
              let obj4 = { options: null, render: null };
              ({ options: obj5.options, render: obj5.render } = describeResult);
              obj2[tmp12.key] = obj4;
              continue;
            }
            let items1 = [navigationBuilder.navigation, navigationBuilder.state.key];
            const items2 = [navigationBuilder.navigation];
            const memo1 = react.useMemo(() => {
              let obj = {
                navigate(arg0, arg1) {
                  navigation = closure_1_0.navigation;
                  const dispatch = navigation.dispatch;
                  const obj = { target: closure_1_0.state.key };
                  const CommonActions = navigationBuilder(closure_1[3]).CommonActions;
                  const merged = Object.assign(CommonActions.navigate(arg0, arg1));
                  dispatch(obj);
                },
                back() {
                  navigation = navigationBuilder.navigation;
                  navigation.goBack();
                },
              };
              return obj;
            }, items1);
            let tmp19Result;
            const memo2 = react.useMemo(() => ({ emit: navigationBuilder.navigation.emit }), items2);
            if (closure_1 != null) {
              const obj7 = { state: null, navigation: null };
              ({ state: obj6.state, navigation: obj6.navigation } = navigationBuilder);
              tmp19Result = tmp19(obj7);
            }
            ({
              children,
              id,
              initialRouteName,
              layout,
              screenLayout,
              screenListeners,
              screenOptions,
              UNSTABLE_routeNamesChangeBehavior,
              UNSTABLE_router,
            } = UNSTABLE_routeNamesChangeBehavior);
            const NavigationContent = navigationBuilder.NavigationContent;
            let merged = Object.assign(_objectWithoutProperties(UNSTABLE_routeNamesChangeBehavior, closure_2));
            const merged1 = Object.assign(tmp19Result);
            return <NavigationContent>{null}</NavigationContent>;
          }
          combined = navigationBuilder.state.routes;
        },
      ),
      createScreen: obj3.createScreenFactory(),
    };
    let tmp = _require;
    const tmp2 = dependencyMap;
    obj2 = require("BaseNavigationContainer");
    obj3 = require("BaseNavigationContainer");
    return obj;
  }
};
