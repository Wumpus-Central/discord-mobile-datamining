// _runtime/06373__isNativeReflectConstruct.js
import closure_3 from "_objectWithoutProperties" /* 109 */;
import closure_4 from "_classCallCheck" /* 41 */;
import closure_5 from "_possibleConstructorReturn" /* 93 */;
import closure_6 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import { GestureHandlerRootView } from "PanGestureHandler" /* 6374 */;
import importAllResult from "noop" /* 19 */;

let StackView = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = ["state", "descriptors"];
({ StyleSheet, View } = get_ActivityIndicator);
if (GestureHandlerRootView == null) {
  GestureHandlerRootView = View;
}
function isArrayEqual(arg0, arg1) {

}
class StackView {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, closure_0);
    items1 = [...items];
    tmp2 = closure_6;
    obj = closure_6(closure_0);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = { routes: [], previousState: "y", openingRouteKeys: 72, closingRouteKeys: 180, replacingRouteKeys: null, descriptors: null };
    obj[2] = [];
    obj[3] = [];
    obj[4] = [];
    obj[5] = {};
    tmp3Result.state = obj;
    tmp3Result.getPreviousRoute = (route) => {
      route = route.route;
      c1 = undefined;
      c2 = undefined;
      ({ closingRouteKeys: c1, replacingRouteKeys: c2 } = route.state);
      const routes = route.state.routes;
      const found = routes.filter((key) => {
        let tmp = key.key === route.key;
        if (!tmp) {
          const hasItem = _undefined.includes(key.key);
          let tmp4 = !hasItem;
          if (!hasItem) {
            tmp4 = !_undefined2.includes(key.key);
          }
          tmp = tmp4;
        }
        return tmp;
      });
      return found[found.findIndex(found, (key) => key.key === route.key) - 1];
    };
    tmp3Result.renderHeader = (arg0) => {
      const merged = Object.assign(arg0);
      return callback(lib(table[10]).HeaderContainer, {});
    };
    tmp3Result.handleOpenRoute = (route) => {
      route = route.route;
      ({ state, navigation } = route.props);
      ({ closingRouteKeys, replacingRouteKeys } = route.state);
      if (closingRouteKeys.some((arg0) => arg0 === route.key)) {
        if (replacingRouteKeys.every((arg0) => arg0 !== route.key)) {
          const routeNames = state.routeNames;
          if (routeNames.includes(route.name)) {
            let routes = state.routes;
            if (!routes.some((key) => key.key === route.key)) {
              navigation.dispatch((routes) => {
                routes = routes.routes;
                const items = [];
                items[HermesBuiltin.arraySpread(routes.filter((key) => key.key !== key.key), 0)] = route;
                const CommonActions = route(closure_1_1[11]).CommonActions;
                const obj = {};
                const merged = Object.assign(routes);
                obj.routes = items;
                obj.index = items.length - 1;
                return CommonActions.reset(obj);
              });
            }
          }
        }
      }
      route.setState((routes) => {
        closure_0 = routes;
        routes = routes.routes;
        routes = routes.routes;
        const substr = routes.slice(0, routes.findIndex((key) => key.key === closure_0.key));
        const found = substr.filter((key) => {
          const replacingRouteKeys = closure_0.replacingRouteKeys;
          return replacingRouteKeys.includes(key.key);
        });
        const set = new Set(found.map((key) => key.key));
        ({ routes: routes2, openingRouteKeys, closingRouteKeys, replacingRouteKeys } = routes);
        return { routes: routes2.filter((key) => !set.has(key.key)), openingRouteKeys: openingRouteKeys.filter((arg0) => arg0 !== closure_0.key), closingRouteKeys: closingRouteKeys.filter((arg0) => arg0 !== closure_0.key), replacingRouteKeys: replacingRouteKeys.filter((arg0) => !set.has(arg0)) };
      });
    };
    tmp3Result.handleCloseRoute = (route) => {
      route = route.route;
      let obj = route;
      ({ state, navigation } = route.props);
      const routes = state.routes;
      if (routes.some((key) => key.key === route.key)) {
        obj = {};
        const StackActions = lib(closure_1_1[11]).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = route.key;
        obj.target = state.key;
        navigation.dispatch(obj);
      } else {
        obj.setState((arg0) => {
          ({ routes, openingRouteKeys, closingRouteKeys } = arg0);
          return { routes: routes.filter((key) => key.key !== closure_0.key), openingRouteKeys: openingRouteKeys.filter((arg0) => arg0 !== closure_0.key), closingRouteKeys: closingRouteKeys.filter((arg0) => arg0 !== closure_0.key) };
        });
      }
    };
    tmp3Result.handleTransitionStart = (route, closing) => {
      const navigation = lib.props.navigation;
      obj = { type: "transitionStart", data: obj, target: route.route.key };
      obj = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleTransitionEnd = (route, closing) => {
      const navigation = lib.props.navigation;
      obj = { type: "transitionEnd", data: obj, target: route.route.key };
      obj = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleGestureStart = (route) => {
      const navigation = lib.props.navigation;
      navigation.emit({ type: "gestureStart", target: route.route.key });
    };
    tmp3Result.handleGestureEnd = (route) => {
      const navigation = lib.props.navigation;
      navigation.emit({ type: "gestureEnd", target: route.route.key });
    };
    tmp3Result.handleGestureCancel = (route) => {
      const navigation = lib.props.navigation;
      navigation.emit({ type: "gestureCancel", target: route.route.key });
    };
    return tmp3Result;
  }
}
importDefaultResult1(StackView, importAllResult.Component);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    let props = this.props;
    const state = props.state;
    closure_2 = callback(props, closure_2);
    ({ routes: closure_3, descriptors: closure_4, openingRouteKeys: closure_5, closingRouteKeys: closure_6 } = this.state);
    const preloadedRoutes = state.preloadedRoutes;
    StackView = preloadedRoutes.reduce((arg0, key) => {
      let describeResult = arg0[key.key];
      if (!describeResult) {
        const props = self.props;
        describeResult = props.describe(key, true);
      }
      arg0[key.key] = describeResult;
      return arg0;
    }, {});
    let obj = { style: container.container, children: null };
    obj = { children: self(StackView(state[13]).SafeAreaInsetsContext.Consumer, obj) };
    obj = {
      children(arg0) {
        let callback = arg0;
        return self(callback(state[14]).ModalPresentationContext.Consumer, {
          children(arg0) {
            const callback = arg0;
            return self(callback(state[12]).HeaderShownContext.Consumer, {
              children(isParentHeaderShown) {
                const merged = Object.assign(closure_2_2);
                return self(callback(state[15]).CardStack, { insets: callback, isParentHeaderShown, isParentModal: callback, getPreviousRoute: closure_2_7.getPreviousRoute, routes: closure_2_3, openingRouteKeys: closure_2_5, closingRouteKeys: closure_2_6, onOpenRoute: closure_2_7.handleOpenRoute, onCloseRoute: closure_2_7.handleCloseRoute, onTransitionStart: closure_2_7.handleTransitionStart, onTransitionEnd: closure_2_7.handleTransitionEnd, renderHeader: closure_2_7.renderHeader, state: closure_2_1, descriptors: closure_2_4, onGestureStart: closure_2_7.handleGestureStart, onGestureEnd: closure_2_7.handleGestureEnd, onGestureCancel: closure_2_7.handleGestureCancel, preloadedDescriptors: callback });
              }
            });
          }
        });
      }
    };
    obj[1] = self(StackView(state[12]).SafeAreaProviderCompat, obj);
    return self(GestureHandlerRootView, obj);
  }
};
let items = [obj];
obj = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(state, previousState) {
    let arr3 = state;
    dependencyMap = previousState;
    const items = [...state.state.preloadedRoutes];
    const items1 = [];
    if (previousState.previousState) {
      HermesBuiltin.arraySpread(previousState.previousState.preloadedRoutes, HermesBuiltin.arraySpread(previousState.previousState.routes, 0));
      arr3 = items1;
    } else {
      arr3 = items1;
    }
    const mapped = items.map((key) => key.key);
    const mapped1 = arr3.map((key) => key.key);
    if (typeof isArrayEqual !== "function") {
      HermesBuiltin.throwTypeError();
    }
    arr3 = mapped1;
    if (tmp5) {
      if (previousState.routes.length) {
        let routes = previousState.routes;
        const found = routes.filter((key) => {
          const closingRouteKeys = previousState.closingRouteKeys;
          let hasItem = closingRouteKeys.includes(key.key);
          if (hasItem) {
            const routes = arr3.state.routes;
            hasItem = !routes.some((key) => key.key === key.key);
          }
          return hasItem;
        });
        const routes1 = previousState.routes;
        const found1 = routes1.filter((key) => {
          const replacingRouteKeys = previousState.replacingRouteKeys;
          let hasItem = replacingRouteKeys.includes(key.key);
          if (hasItem) {
            const routes = arr3.state.routes;
            hasItem = !routes.some((key) => key.key === key.key);
          }
          return hasItem;
        });
        const routes2 = state.state.routes;
        const substr = routes2.slice();
        if (found1.length) {
          const splice3 = substr.splice;
          const items2 = [substr.length - 1, 0];
          HermesBuiltin.arraySpread(found1, 2);
          HermesBuiltin.apply(items2, substr);
        }
        if (found.length) {
          const push = substr.push;
          const items3 = [];
          HermesBuiltin.arraySpread(found, 0);
          HermesBuiltin.apply(items3, substr);
        }
        if (typeof isArrayEqual !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let mapped2 = substr;
        if (!tmp72) {
          closure_2 = items.reduce((arg0, key) => {
            arg0[key.key] = key;
            return arg0;
          }, {});
          mapped2 = substr.map((arg0) => table[arg0.key] || arg0);
        }
        const items4 = [];
        HermesBuiltin.arraySpread(state.state.preloadedRoutes, HermesBuiltin.arraySpread(mapped2, 0));
        let obj = { routes: null, previousState: null, descriptors: null };
        obj[0] = mapped2;
        obj[1] = state.state;
        obj[2] = items4.reduce((arg0, key) => {
          let tmp = arr3.descriptors[key.key];
          if (!tmp) {
            tmp = previousState.descriptors[key.key];
          }
          arg0[key.key] = tmp;
          return arg0;
        }, {});
        return obj;
      }
    }
    if (state.state.index < state.state.routes.length - 1) {
      const routes3 = state.state.routes;
      let substr1 = routes3.slice(0, state.state.index + 1);
    } else {
      substr1 = state.state.routes;
    }
    let substr3 = substr1;
    ({ openingRouteKeys, closingRouteKeys } = previousState);
    let found9 = closingRouteKeys;
    let replacingRouteKeys = previousState.replacingRouteKeys;
    let items10 = replacingRouteKeys;
    const found2 = closingRouteKeys.filter((arg0) => {
      closure_0 = arg0;
      return !substr3.some((key) => key.key === closure_0);
    });
    found9 = found2;
    const found3 = replacingRouteKeys.filter((arg0) => {
      closure_0 = arg0;
      return !substr3.some((key) => key.key === closure_0);
    });
    items10 = found3;
    let tmp6;
    if (previousState.previousState) {
      tmp6 = previousState.previousState.routes[previousState.previousState.index];
    }
    closure_6 = tmp6;
    closure_7 = tmp7;
    function isAnimationEnabled(arg0) {

    }
    if (tmp6) {
      if (tmp6.key !== tmp7.key) {
        if (arr3.some((key) => key.key === closure_7.key)) {
          if (!substr1.some((key) => key.key === closure_6.key)) {
            obj = arr3(6524);
            let animation;
            if ((state.descriptors[tmp6.key] || previousState.descriptors[tmp6.key]) != null) {
              animation = tmp18.options.animation;
            }
            let tmp9 = found3;
            let tmp10 = found2;
            let found4 = openingRouteKeys;
            let arr11 = substr1;
            if (tmp23) {
              const items5 = [];
              items5[HermesBuiltin.arraySpread(found2, 0)] = tmp6.key;
              found9 = items5;
              found4 = openingRouteKeys.filter((arg0) => arg0 !== closure_6.key);
              const found5 = found3.filter((arg0) => arg0 !== closure_6.key);
              items10 = found5;
              const items6 = [];
              items6[HermesBuiltin.arraySpread(substr1, 0)] = tmp6;
              substr3 = items6;
              tmp9 = found5;
              tmp10 = items5;
              arr11 = items6;
            }
            tmp23 = obj.getAnimationEnabled(animation) && !found2.includes(tmp6.key);
          }
        }
        let animation1;
        if ((state.descriptors[tmp7.key] || previousState.descriptors[tmp7.key]) != null) {
          animation1 = tmp29.options.animation;
        }
        tmp9 = found3;
        tmp10 = found2;
        found4 = openingRouteKeys;
        arr11 = substr1;
        if (obj2.getAnimationEnabled(animation1)) {
          tmp9 = found3;
          tmp10 = found2;
          found4 = openingRouteKeys;
          arr11 = substr1;
          if (!openingRouteKeys.includes(tmp7.key)) {
            const items7 = [];
            items7[HermesBuiltin.arraySpread(openingRouteKeys, 0)] = tmp7.key;
            const found6 = found2.filter((arg0) => arg0 !== closure_7.key);
            found9 = found6;
            const found7 = found3.filter((arg0) => arg0 !== closure_7.key);
            items10 = found7;
            tmp9 = found7;
            tmp10 = found6;
            found4 = items7;
            arr11 = substr1;
            if (!substr1.some((key) => key.key === closure_6.key)) {
              const found8 = items7.filter((arg0) => arg0 !== closure_6.key);
              let str = state.descriptors[tmp7.key] || previousState.descriptors[tmp7.key].options.animationTypeForReplace;
              if (str == null) {
                str = "push";
              }
              if ("pop" === str) {
                const items8 = [];
                items8[HermesBuiltin.arraySpread(found6, 0)] = tmp6.key;
                found9 = items8;
                found4 = found8.filter((arg0) => arg0 !== closure_7.key);
                const items9 = [];
                items9[HermesBuiltin.arraySpread(substr1, 0)] = tmp6;
                substr3 = items9;
                tmp9 = found7;
                tmp10 = items8;
                arr11 = items9;
              } else {
                items10 = [];
                items10[HermesBuiltin.arraySpread(found7, 0)] = tmp6.key;
                found9 = found6.filter((arg0) => arg0 !== closure_6.key);
                const substr2 = substr1.slice();
                substr3 = substr2;
                substr2.splice(substr2.length - 1, 0, tmp6);
                const routes4 = previousState.routes;
                const found10 = routes4.filter((key) => {
                  closure_0 = key;
                  let hasItem = items10.includes(key.key);
                  if (hasItem) {
                    hasItem = !substr3.some((key) => key.key === key.key);
                  }
                  return hasItem;
                });
                tmp9 = items10;
                tmp10 = found9;
                found4 = found8;
                arr11 = substr2;
                if (found10.length) {
                  const splice2 = substr2.splice;
                  const items11 = [substr2.length - 2, 0];
                  HermesBuiltin.arraySpread(found10, 2);
                  HermesBuiltin.apply(items11, substr2);
                  tmp9 = items10;
                  tmp10 = found9;
                  found4 = found8;
                  arr11 = substr2;
                }
              }
              const tmp37 = state.descriptors[tmp7.key] || previousState.descriptors[tmp7.key];
            }
          }
        }
        obj2 = arr3(6524);
      }
      if (arr11.length) {
        const items12 = [];
        HermesBuiltin.arraySpread(state.state.preloadedRoutes, HermesBuiltin.arraySpread(arr11, 0));
        obj = { routes: null, previousState: null, openingRouteKeys: null, closingRouteKeys: null, replacingRouteKeys: null, descriptors: null };
        obj[0] = arr11;
        obj[1] = state.state;
        obj[2] = found4;
        obj[3] = tmp10;
        obj[4] = tmp9;
        obj[5] = items12.reduce((arg0, key) => {
          let tmp = arr3.descriptors[key.key];
          if (!tmp) {
            tmp = previousState.descriptors[key.key];
          }
          arg0[key.key] = tmp;
          return arg0;
        }, {});
        return obj;
      } else {
        const _Error = Error;
        error = new Error("There should always be at least one route in the navigation state.");
        throw error;
      }
    }
    tmp9 = found3;
    tmp10 = found2;
    found4 = openingRouteKeys;
    arr11 = substr1;
    if (tmp8) {
      substr3 = substr1.slice();
      const splice = substr3.splice;
      const items13 = [substr3.length - 1, 0];
      const routes5 = previousState.routes;
      HermesBuiltin.arraySpread(routes5.filter((key) => {
        if (typeof isAnimationEnabled !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp = arr3.descriptors[key];
        if (!tmp) {
          tmp = previousState.descriptors[key];
        }
        let animation;
        if (tmp != null) {
          animation = tmp.options.animation;
        }
        let animationEnabled = arr3(previousState[15]).getAnimationEnabled(animation);
        if (animationEnabled) {
          let hasItem = items10.includes(key);
          if (!hasItem) {
            hasItem = found9.includes(key);
          }
          animationEnabled = hasItem;
        }
        return animationEnabled;
      }), 2);
      HermesBuiltin.apply(items13, substr3);
      tmp9 = found3;
      tmp10 = found2;
      found4 = openingRouteKeys;
      arr11 = substr3;
    }
  }
};
let items1 = [obj];
const styles = StyleSheet.create({ container: { flex: 1 } });

export const StackView = importDefaultResult(StackView, items, items1);