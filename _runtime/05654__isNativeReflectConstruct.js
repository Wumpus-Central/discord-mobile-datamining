// _runtime/05654__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { GestureHandlerRootView } from "PanGestureHandler";
import importAllResult from "noop";

let StyleSheet;
let View;
const StackView = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["state", "descriptors"];
({ StyleSheet, View } = get_ActivityIndicator);
if (GestureHandlerRootView == null) {
  GestureHandlerRootView = View;
}
class StackView {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.state = { routes: [], previousRoutes: [], previousDescriptors: {}, openingRouteKeys: [], closingRouteKeys: [], replacingRouteKeys: [], descriptors: {} };
    tmp3Result.getPreviousRoute = (route) => {
      let c1;
      let c2;
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
    tmp3Result.renderScene = (route) => {
      route = route.route;
      let renderResult = null;
      if (_undefined.state.descriptors[route.key] || _undefined.props.descriptors[route.key]) {
        renderResult = obj.render();
      }
      return renderResult;
    };
    tmp3Result.renderHeader = (arg0) => {
      const merged = Object.assign(arg0);
      return callback2(callback(table[10]), {});
    };
    tmp3Result.handleOpenRoute = (route) => {
      let closingRouteKeys;
      let navigation;
      let replacingRouteKeys;
      let state;
      route = route.route;
      ({ state, navigation } = route.props);
      ({ closingRouteKeys, replacingRouteKeys } = route.state);
      if (closingRouteKeys.some((arg0) => arg0 === route.key)) {
        if (replacingRouteKeys.every((arg0) => arg0 !== route.key)) {
          const routeNames = state.routeNames;
          if (routeNames.includes(route.name)) {
            let routes = state.routes;
            if (!routes.some((key) => key.key === route.key)) {
              navigation.navigate(route);
            }
          }
        }
      }
      route.setState((routes) => {
        let closingRouteKeys;
        let openingRouteKeys;
        let closure_0 = routes;
        routes = routes.routes;
        if (routes.replacingRouteKeys.length) {
          let found = routes.filter((key) => {
            const replacingRouteKeys = closure_0.replacingRouteKeys;
            return !replacingRouteKeys.includes(key.key);
          });
        } else {
          found = routes;
        }
        ({ openingRouteKeys, closingRouteKeys } = routes);
        return { routes: found, openingRouteKeys: openingRouteKeys.filter((arg0) => arg0 !== closure_0.key), closingRouteKeys: closingRouteKeys.filter((arg0) => arg0 !== closure_0.key), replacingRouteKeys: [] };
      });
    };
    tmp3Result.handleCloseRoute = (route) => {
      let navigation;
      let state;
      route = route.route;
      let obj = route;
      ({ state, navigation } = route.props);
      const routes = state.routes;
      if (routes.some((key) => key.key === route.key)) {
        obj = {};
        const StackActions = _undefined(outer1_2[11]).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = route.key;
        obj.target = state.key;
        navigation.dispatch(obj);
      } else {
        obj.setState((arg0) => {
          let closingRouteKeys;
          let openingRouteKeys;
          let routes;
          ({ routes, openingRouteKeys, closingRouteKeys } = arg0);
          return { routes: routes.filter((key) => key.key !== closure_0.key), openingRouteKeys: openingRouteKeys.filter((arg0) => arg0 !== closure_0.key), closingRouteKeys: closingRouteKeys.filter((arg0) => arg0 !== closure_0.key) };
        });
      }
    };
    tmp3Result.handleTransitionStart = (route, closing) => {
      const navigation = _undefined.props.navigation;
      obj = { type: "transitionStart", data: obj, target: route.route.key };
      obj = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleTransitionEnd = (route, closing) => {
      const navigation = _undefined.props.navigation;
      obj = { type: "transitionEnd", data: obj, target: route.route.key };
      obj = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleGestureStart = (route) => {
      const navigation = _undefined.props.navigation;
      navigation.emit({ type: "gestureStart", target: route.route.key });
    };
    tmp3Result.handleGestureEnd = (route) => {
      const navigation = _undefined.props.navigation;
      navigation.emit({ type: "gestureEnd", target: route.route.key });
    };
    tmp3Result.handleGestureCancel = (route) => {
      const navigation = _undefined.props.navigation;
      navigation.emit({ type: "gestureCancel", target: route.route.key });
    };
    return tmp3Result;
  }
}
importDefaultResult1(StackView, require("noop").Component);
let obj = {
  key: "render",
  value: function render() {
    let StackView;
    let closure_3;
    let _objectWithoutProperties;
    let _classCallCheck;
    let descriptors;
    let importDefault;
    const self = this;
    const props = this.props;
    ({ state: importDefault, descriptors } = props);
    const dependencyMap = callback(props, closure_3);
    ({ routes: closure_3, descriptors: _objectWithoutProperties, openingRouteKeys: _classCallCheck, closingRouteKeys: StackView } = this.state);
    let obj = { style: container.container, children: null };
    obj = { children: null };
    obj = {
      children(arg0) {
        let closure_0 = arg0;
        return outer1_8(outer1_1(table[14]).Consumer, {
          children(arg0) {
            let closure_0 = arg0;
            return outer2_8(outer2_0(table[12]).HeaderShownContext.Consumer, {
              children(isParentHeaderShown) {
                const merged = Object.assign(outer2_2);
                return outer3_8(outer3_1(table[15]), { insets: closure_0, isParentHeaderShown, isParentModal: closure_0, getPreviousRoute: outer2_6.getPreviousRoute, routes: outer2_3, openingRouteKeys: outer2_5, closingRouteKeys: closure_0, onOpenRoute: outer2_6.handleOpenRoute, onCloseRoute: outer2_6.handleCloseRoute, onTransitionStart: outer2_6.handleTransitionStart, onTransitionEnd: outer2_6.handleTransitionEnd, renderHeader: outer2_6.renderHeader, renderScene: outer2_6.renderScene, state: outer2_1, descriptors: outer2_4, onGestureStart: outer2_6.handleGestureStart, onGestureEnd: outer2_6.handleGestureEnd, onGestureCancel: outer2_6.handleGestureCancel });
              }
            });
          }
        });
      }
    };
    obj[0] = jsx(StackView(1584).SafeAreaInsetsContext.Consumer, {
      children(arg0) {
        let closure_0 = arg0;
        return outer1_8(outer1_1(table[14]).Consumer, {
          children(arg0) {
            let closure_0 = arg0;
            return outer2_8(outer2_0(table[12]).HeaderShownContext.Consumer, {
              children(isParentHeaderShown) {
                const merged = Object.assign(outer2_2);
                return outer3_8(outer3_1(table[15]), { insets: closure_0, isParentHeaderShown, isParentModal: closure_0, getPreviousRoute: outer2_6.getPreviousRoute, routes: outer2_3, openingRouteKeys: outer2_5, closingRouteKeys: closure_0, onOpenRoute: outer2_6.handleOpenRoute, onCloseRoute: outer2_6.handleCloseRoute, onTransitionStart: outer2_6.handleTransitionStart, onTransitionEnd: outer2_6.handleTransitionEnd, renderHeader: outer2_6.renderHeader, renderScene: outer2_6.renderScene, state: outer2_1, descriptors: outer2_4, onGestureStart: outer2_6.handleGestureStart, onGestureEnd: outer2_6.handleGestureEnd, onGestureCancel: outer2_6.handleGestureCancel });
              }
            });
          }
        });
      }
    });
    obj[1] = jsx(StackView(5659).SafeAreaProviderCompat, {
      children(arg0) {
        let closure_0 = arg0;
        return outer1_8(outer1_1(table[14]).Consumer, {
          children(arg0) {
            let closure_0 = arg0;
            return outer2_8(outer2_0(table[12]).HeaderShownContext.Consumer, {
              children(isParentHeaderShown) {
                const merged = Object.assign(outer2_2);
                return outer3_8(outer3_1(table[15]), { insets: closure_0, isParentHeaderShown, isParentModal: closure_0, getPreviousRoute: outer2_6.getPreviousRoute, routes: outer2_3, openingRouteKeys: outer2_5, closingRouteKeys: closure_0, onOpenRoute: outer2_6.handleOpenRoute, onCloseRoute: outer2_6.handleCloseRoute, onTransitionStart: outer2_6.handleTransitionStart, onTransitionEnd: outer2_6.handleTransitionEnd, renderHeader: outer2_6.renderHeader, renderScene: outer2_6.renderScene, state: outer2_1, descriptors: outer2_4, onGestureStart: outer2_6.handleGestureStart, onGestureEnd: outer2_6.handleGestureEnd, onGestureCancel: outer2_6.handleGestureCancel });
              }
            });
          }
        });
      }
    });
    return <GestureHandlerRootView>{function children(arg0) {
      let closure_0 = arg0;
      return outer1_8(outer1_1(table[14]).Consumer, {
        children(arg0) {
          let closure_0 = arg0;
          return outer2_8(outer2_0(table[12]).HeaderShownContext.Consumer, {
            children(isParentHeaderShown) {
              const merged = Object.assign(outer2_2);
              return outer3_8(outer3_1(table[15]), { insets: closure_0, isParentHeaderShown, isParentModal: closure_0, getPreviousRoute: outer2_6.getPreviousRoute, routes: outer2_3, openingRouteKeys: outer2_5, closingRouteKeys: closure_0, onOpenRoute: outer2_6.handleOpenRoute, onCloseRoute: outer2_6.handleCloseRoute, onTransitionStart: outer2_6.handleTransitionStart, onTransitionEnd: outer2_6.handleTransitionEnd, renderHeader: outer2_6.renderHeader, renderScene: outer2_6.renderScene, state: outer2_1, descriptors: outer2_4, onGestureStart: outer2_6.handleGestureStart, onGestureEnd: outer2_6.handleGestureEnd, onGestureCancel: outer2_6.handleGestureCancel });
            }
          });
        }
      });
    }}</GestureHandlerRootView>;
  }
};
let items = [obj];
obj = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(state, previousRoutes) {
    let closingRouteKeys;
    let openingRouteKeys;
    let routes;
    let closure_0 = state;
    let closure_1 = previousRoutes;
    if (state.state.routes === previousRoutes.previousRoutes) {
      if (previousRoutes.routes.length) {
        ({ routes, previousRoutes } = previousRoutes);
        let descriptors = state.descriptors;
        let descriptors2 = previousRoutes.previousDescriptors;
        if (state.descriptors !== previousRoutes.previousDescriptors) {
          routes = previousRoutes.routes;
          descriptors = routes.reduce((arg0, key) => {
            let tmp = state.descriptors[key.key];
            if (!tmp) {
              tmp = previousRoutes.descriptors[key.key];
            }
            arg0[key.key] = tmp;
            return arg0;
          }, {});
          descriptors2 = state.descriptors;
        }
        if (state.state.routes !== previousRoutes.previousRoutes) {
          const routes1 = state.state.routes;
          let closure_2 = routes1.reduce((arg0, key) => {
            arg0[key.key] = key;
            return arg0;
          }, {});
          const routes2 = previousRoutes.routes;
          routes = routes2.map((arg0) => table[arg0.key] || arg0);
          previousRoutes = state.state.routes;
        }
        let obj = { routes: null, previousRoutes: null, descriptors: null, previousDescriptors: null };
        obj[0] = routes;
        obj[1] = previousRoutes;
        obj[2] = descriptors;
        obj[3] = descriptors2;
        return obj;
      }
    } else {
      const routes3 = state.state.routes;
      const mapped = routes3.map((key) => key.key);
      previousRoutes = previousRoutes.previousRoutes;
      const mapped1 = previousRoutes.map((key) => key.key);
    }
    if (state.state.index < state.state.routes.length - 1) {
      const routes4 = state.state.routes;
      let substr = routes4.slice(0, state.state.index + 1);
    } else {
      substr = state.state.routes;
    }
    ({ openingRouteKeys, closingRouteKeys } = previousRoutes);
    let found6 = closingRouteKeys;
    const replacingRouteKeys = previousRoutes.replacingRouteKeys;
    let items4 = replacingRouteKeys;
    const previousRoutes1 = previousRoutes.previousRoutes;
    let _possibleConstructorReturn = tmp;
    let _getPrototypeOf = tmp2;
    function isAnimationEnabled(arg0) {

    }
    if (previousRoutes1[previousRoutes1.length - 1]) {
      if (tmp.key !== tmp2.key) {
        if (previousRoutes1.some((key) => key.key === tmp2.key)) {
          let tmp4 = replacingRouteKeys;
          let tmp5 = closingRouteKeys;
          let tmp6 = openingRouteKeys;
          let arr9 = substr;
          if (!substr.some((key) => key.key === tmp.key)) {
            let tmp40 = !tmp39;
            if (state.descriptors[tmp.key] || previousRoutes.descriptors[tmp.key]) {
              tmp40 = false !== tmp39.options.animationEnabled;
            }
            if (tmp40) {
              tmp40 = !closingRouteKeys.includes(tmp.key);
            }
            let tmp41 = replacingRouteKeys;
            let tmp42 = closingRouteKeys;
            let found = openingRouteKeys;
            let tmp44 = substr;
            if (tmp40) {
              const items = [];
              items[HermesBuiltin.arraySpread(closingRouteKeys, 0)] = tmp.key;
              found6 = items;
              found = openingRouteKeys.filter((arg0) => arg0 !== tmp.key);
              const found1 = replacingRouteKeys.filter((arg0) => arg0 !== tmp.key);
              items4 = found1;
              const items1 = [];
              items1[HermesBuiltin.arraySpread(substr, 0)] = tmp;
              tmp41 = found1;
              tmp42 = items;
              tmp44 = items1;
            }
            tmp4 = tmp41;
            tmp5 = tmp42;
            tmp6 = found;
            arr9 = tmp44;
          }
        } else {
          let tmp14 = !tmp13;
          if (state.descriptors[tmp2.key] || previousRoutes.descriptors[tmp2.key]) {
            tmp14 = false !== tmp13.options.animationEnabled;
          }
          if (tmp14) {
            tmp14 = !openingRouteKeys.includes(tmp2.key);
          }
          tmp4 = replacingRouteKeys;
          tmp5 = closingRouteKeys;
          tmp6 = openingRouteKeys;
          arr9 = substr;
          if (tmp14) {
            const items2 = [];
            items2[HermesBuiltin.arraySpread(openingRouteKeys, 0)] = tmp2.key;
            let found2 = closingRouteKeys.filter((arg0) => arg0 !== tmp2.key);
            found6 = found2;
            const found3 = replacingRouteKeys.filter((arg0) => arg0 !== tmp2.key);
            items4 = found3;
            if (substr.some((key) => key.key === tmp.key)) {
              tmp4 = found3;
              tmp5 = found2;
              tmp6 = items2;
              arr9 = substr;
            } else {
              const found4 = items2.filter((arg0) => arg0 !== tmp.key);
              let str = state.descriptors[tmp2.key] || previousRoutes.descriptors[tmp2.key].options.animationTypeForReplace;
              if (str == null) {
                str = "push";
              }
              if ("pop" === str) {
                const items3 = [];
                items3[HermesBuiltin.arraySpread(found2, 0)] = tmp.key;
                found6 = items3;
                let found5 = found4.filter((arg0) => arg0 !== tmp2.key);
                found2 = [];
                found2[HermesBuiltin.arraySpread(substr, 0)] = tmp;
                let tmp28 = found3;
                let tmp29 = items3;
                let substr1 = found2;
              } else {
                items4 = [];
                items4[HermesBuiltin.arraySpread(found3, 0)] = tmp.key;
                found6 = found2.filter((arg0) => arg0 !== tmp.key);
                substr1 = substr.slice();
                substr1.splice(substr1.length - 1, 0, tmp);
                tmp28 = items4;
                tmp29 = found6;
                found5 = found4;
              }
              const tmp22 = state.descriptors[tmp2.key] || previousRoutes.descriptors[tmp2.key];
            }
          }
        }
      }
      if (arr9.length) {
        obj = { routes: null, previousRoutes: null, previousDescriptors: null, openingRouteKeys: null, closingRouteKeys: null, replacingRouteKeys: null, descriptors: null };
        obj[0] = arr9;
        obj[1] = state.state.routes;
        obj[2] = state.descriptors;
        obj[3] = tmp6;
        obj[4] = tmp5;
        obj[5] = tmp4;
        obj[6] = arr9.reduce((arg0, key) => {
          let tmp = state.descriptors[key.key];
          if (!tmp) {
            tmp = previousRoutes.descriptors[key.key];
          }
          arg0[key.key] = tmp;
          return arg0;
        }, {});
        return obj;
      } else {
        const _Error = Error;
        const error = new Error("There should always be at least one route in the navigation state.");
        throw error;
      }
    }
    tmp4 = replacingRouteKeys;
    tmp5 = closingRouteKeys;
    tmp6 = openingRouteKeys;
    arr9 = substr;
    if (tmp3) {
      const substr2 = substr.slice();
      const splice = substr2.splice;
      const items5 = [substr2.length - 1, 0];
      const routes5 = previousRoutes.routes;
      HermesBuiltin.arraySpread(routes5.filter((key) => {
        if (typeof isAnimationEnabled !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp = state.descriptors[key];
        if (!tmp) {
          tmp = previousRoutes.descriptors[key];
        }
        let tmp3 = !tmp;
        if (tmp) {
          tmp3 = false !== tmp.options.animationEnabled;
        }
        let tmp4 = tmp3;
        if (tmp4) {
          let hasItem = items4.includes(key);
          if (!hasItem) {
            hasItem = found6.includes(key);
          }
          tmp4 = hasItem;
        }
        return tmp4;
      }), 2);
      HermesBuiltin.apply(items5, substr2);
      tmp4 = replacingRouteKeys;
      tmp5 = closingRouteKeys;
      tmp6 = openingRouteKeys;
      arr9 = substr2;
    }
  }
};
let items1 = [obj];
const styles = StyleSheet.create({ container: { flex: 1 } });

export default importDefaultResult(StackView, items, items1);