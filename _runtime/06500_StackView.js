// === Module 6500: StackView ===

// Module 6500 (StackView)
import Fragment from "Fragment" /* 21 */;
import PanGestureHandler from "PanGestureHandler" /* 6501 */;
import _mod6510 from "module_6510" /* 6510 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require, dependencyMap, navigation, set;

let StyleSheet;
let View;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = ["state", "descriptors"];
({ StyleSheet, View } = react_native);
const jsx = Fragment.jsx;
let GestureHandlerRootView = PanGestureHandler.GestureHandlerRootView;
if (GestureHandlerRootView == null) {
  GestureHandlerRootView = View;
}
function isArrayEqual(arg0, arg1) {

}
class StackView {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, StackView);
    const items1 = [...items];
    let obj = _getPrototypeOf(StackView);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    closure_0 = tmp3Result;
    let obj2 = { routes: [], previousState: "y", openingRouteKeys: [], closingRouteKeys: [], replacingRouteKeys: [], descriptors: {} };
    tmp3Result.state = obj2;
    tmp3Result.getPreviousRoute = (route) => {
      let c1;
      let c2;
      route = route.route;
      c1 = undefined;
      c2 = undefined;
      ({ closingRouteKeys: c1, replacingRouteKeys: c2 } = closure_0.state);
      const routes = closure_0.state.routes;
      const found = routes.filter((key) => {
        let tmp = key.key === route.key;
        if (!tmp) {
          const hasItem = _undefined.includes(key.key);
          tmp = !hasItem && !_undefined2.includes(key.key);
          const tmp4 = !hasItem && !_undefined2.includes(key.key);
        }
        return tmp;
      });
      return found[found.findIndex(found, (key) => key.key === route.key) - 1];
    };
    tmp3Result.renderHeader = (arg0) => {
      const obj = {};
      const HeaderContainer = StackView(closure_1_1[10]).HeaderContainer;
      const merged = Object.assign(arg0);
      return closure_1_7(HeaderContainer, obj);
    };
    tmp3Result.handleOpenRoute = (route) => {
      let closingRouteKeys;
      let replacingRouteKeys;
      let state;
      route = route.route;
      ({ state, navigation } = closure_0.props);
      ({ closingRouteKeys, replacingRouteKeys } = closure_0.state);
      if (closingRouteKeys.some((item) => item === route.key)) {
        if (replacingRouteKeys.every((item) => item !== route.key)) {
          const routeNames = state.routeNames;
          if (routeNames.includes(route.name)) {
            let routes = state.routes;
            if (!routes.some((key) => key.key === route.key)) {
              navigation.dispatch((routes) => {
                let key;
                routes = routes.routes;
                const items = [];
                items[HermesBuiltin.arraySpread(items, routes.filter((key) => key.key !== key.key), 0)] = route;
                const CommonActions = closure_2_0(closure_2_1[11]).CommonActions;
                const reset = CommonActions.reset;
                const obj = { routes: items, index: items.length - 1 };
                const merged = Object.assign(routes);
                return reset(obj);
              });
            }
          }
        }
      }
      closure_0.setState((routes) => {
        let closingRouteKeys;
        let openingRouteKeys;
        let replacingRouteKeys;
        let routes2;
        routes = routes.routes;
        const routes1 = routes.routes;
        const substr = routes1.slice(0, routes.findIndex((key) => key.key === routes.key));
        const found = substr.filter((key) => {
          const replacingRouteKeys = routes.replacingRouteKeys;
          return replacingRouteKeys.includes(key.key);
        });
        set = new Set(found.map((key) => key.key));
        const obj = { routes: routes2.filter((key) => !set.has(key.key)), openingRouteKeys: openingRouteKeys.filter((item) => item !== routes.key), closingRouteKeys: closingRouteKeys.filter((item) => item !== routes.key), replacingRouteKeys: replacingRouteKeys.filter((item) => !set.has(item)) };
        routes2 = routes.routes;
        openingRouteKeys = routes.openingRouteKeys;
        closingRouteKeys = routes.closingRouteKeys;
        replacingRouteKeys = routes.replacingRouteKeys;
        return obj;
      });
    };
    tmp3Result.handleCloseRoute = (route) => {
      let state;
      route = route.route;
      ({ state, navigation } = closure_0.props);
      let routes = state.routes;
      if (routes.some((key) => key.key === route.key)) {
        const dispatch = navigation.dispatch;
        const obj2 = { source: route.key, target: state.key };
        const StackActions = StackView(closure_2_1[11]).StackActions;
        const merged = Object.assign(StackActions.pop());
        dispatch(obj2);
      } else {
        closure_0.setState((routes) => {
          let closingRouteKeys;
          let openingRouteKeys;
          const obj = { routes: routes.filter((key) => key.key !== route.key), openingRouteKeys: openingRouteKeys.filter((item) => item !== route.key), closingRouteKeys: closingRouteKeys.filter((item) => item !== route.key) };
          routes = routes.routes;
          openingRouteKeys = routes.openingRouteKeys;
          closingRouteKeys = routes.closingRouteKeys;
          return obj;
        });
      }
    };
    tmp3Result.handleTransitionStart = (route, closing) => {
      let obj2;
      navigation = closure_0.props.navigation;
      const obj = { type: "transitionStart", data: obj2, target: route.route.key };
      obj2 = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleTransitionEnd = (route, closing) => {
      let obj2;
      navigation = closure_0.props.navigation;
      const obj = { type: "transitionEnd", data: obj2, target: route.route.key };
      obj2 = { closing };
      return navigation.emit(obj);
    };
    tmp3Result.handleGestureStart = (route) => {
      navigation = closure_0.props.navigation;
      const obj = { type: "gestureStart", target: route.route.key };
      navigation.emit(obj);
    };
    tmp3Result.handleGestureEnd = (route) => {
      navigation = closure_0.props.navigation;
      const obj = { type: "gestureEnd", target: route.route.key };
      navigation.emit(obj);
    };
    tmp3Result.handleGestureCancel = (route) => {
      navigation = closure_0.props.navigation;
      const obj = { type: "gestureCancel", target: route.route.key };
      navigation.emit(obj);
    };
    return tmp3Result;
  }
}
_inherits(StackView, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let SafeAreaProviderCompat;
    let closingRouteKeys;
    let closure_5;
    let descriptors;
    let obj2;
    let obj3;
    let openingRouteKeys;
    let routes;
    const self = this;
    let props = this.props;
    const state = props.state;
    closure_2 = _objectWithoutProperties(props, closure_2);
    ({ routes: _objectWithoutProperties, descriptors: _classCallCheck, openingRouteKeys: closure_5, closingRouteKeys: _getPrototypeOf } = this.state);
    const preloadedRoutes = state.preloadedRoutes;
    _require = preloadedRoutes.reduce((acc, key) => {
      let describeResult = acc[key.key];
      if (!describeResult) {
        const props = self.props;
        describeResult = props.describe(key, true);
      }
      acc[key.key] = describeResult;
      return acc;
    }, {});
    let obj = { style: container.container, children: self(SafeAreaProviderCompat, obj2) };
    obj2 = { children: self(require("module_1621").SafeAreaInsetsContext.Consumer, obj3) };
    SafeAreaProviderCompat = require("module_6019").SafeAreaProviderCompat;
    obj3 = {
      children(arg0) {
        closure_0 = arg0;
        let obj = {
          children(arg0) {
            closure_0 = arg0;
            const obj = {
              children(isParentHeaderShown) {
                const CardStack = _mod6510.CardStack;
                const merged = Object.assign(closure_2);
                return <CardStack insets={preloadedDescriptors} isParentHeaderShown={isParentHeaderShown} isParentModal={preloadedDescriptors} getPreviousRoute={self.getPreviousRoute} routes={_objectWithoutProperties} openingRouteKeys={openingRouteKeys} closingRouteKeys={_getPrototypeOf} onOpenRoute={self.handleOpenRoute} onCloseRoute={self.handleCloseRoute} onTransitionStart={self.handleTransitionStart} onTransitionEnd={self.handleTransitionEnd} renderHeader={self.renderHeader} state={state} descriptors={_classCallCheck} onGestureStart={self.handleGestureStart} onGestureEnd={self.handleGestureEnd} onGestureCancel={self.handleGestureCancel} preloadedDescriptors={preloadedDescriptors} />;
              }
            };
            return self(closure_0(state[12]).HeaderShownContext.Consumer, obj);
          }
        };
        return self(closure_0(state[14]).ModalPresentationContext.Consumer, obj);
      }
    };
    return self(GestureHandlerRootView, obj);
  }
};
let items = [entry];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(state, previousState) {
    let arr3;
    let closingRouteKeys;
    let openingRouteKeys;
    const f92295 = (item, index) => Object.is(item, arr3[index]);
    _require = state;
    dependencyMap = previousState;
    const items = [...state.state.preloadedRoutes];
    const items1 = [];
    if (previousState.previousState) {
      const tmp2 = items1;
      HermesBuiltin.arraySpread(items1, previousState.previousState.preloadedRoutes, HermesBuiltin.arraySpread(items1, previousState.previousState.routes, 0));
      arr3 = items1;
    } else {
      arr3 = items1;
    }
    const mapped = items.map((key) => key.key);
    const mapped1 = arr3.map((key) => key.key);
    if (typeof isArrayEqual === "function") {
      let substr1;
      let tmp10;
      let tmp11;
      let found4;
      let arr11;
      const tmp6 = mapped.length === mapped1.length && mapped.every(f92295);
      if (tmp6) {
        if (previousState.routes.length) {
          let routes = previousState.routes;
          const found = routes.filter((key) => {
            state = key;
            const closingRouteKeys = previousState.closingRouteKeys;
            let hasItem = closingRouteKeys.includes(key.key);
            if (hasItem) {
              const routes = state.state.routes;
              hasItem = !routes.some((key) => key.key === key.key);
            }
            return hasItem;
          });
          const routes1 = previousState.routes;
          const found1 = routes1.filter((key) => {
            state = key;
            const replacingRouteKeys = previousState.replacingRouteKeys;
            let hasItem = replacingRouteKeys.includes(key.key);
            if (hasItem) {
              const routes = state.state.routes;
              hasItem = !routes.some((key) => key.key === key.key);
            }
            return hasItem;
          });
          const routes2 = state.state.routes;
          const substr = routes2.slice();
          if (found1.length) {
            const splice3 = substr.splice;
            const items2 = [substr.length - 1, 0];
            HermesBuiltin.arraySpread(items2, found1, 2);
            HermesBuiltin.apply(splice3, items2, substr);
          }
          if (found.length) {
            const push = substr.push;
            const items3 = [];
            HermesBuiltin.arraySpread(items3, found, 0);
            HermesBuiltin.apply(push, items3, substr);
          }
          if (typeof isArrayEqual === "function") {
            let mapped2 = substr;
            const tmp73 = items.length === arr3.length && items.every(f92295);
            if (!tmp73) {
              closure_2 = items.reduce((acc, key) => {
                acc[key.key] = key;
                return acc;
              }, {});
              mapped2 = substr.map((item) => closure_2[item.key] || item);
            }
            const items4 = [];
            HermesBuiltin.arraySpread(items4, state.state.preloadedRoutes, HermesBuiltin.arraySpread(items4, mapped2, 0));
            const obj2 = {
              routes: mapped2,
              previousState: state.state,
              descriptors: items4.reduce((acc, key) => {
                        const tmp = state.descriptors[key.key] || previousState.descriptors[key.key];
                        acc[key.key] = tmp;
                        return acc;
                      }, {})
            };
            return obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      if (state.state.index < state.state.routes.length - 1) {
        const routes3 = state.state.routes;
        substr1 = routes3.slice(0, state.state.index + 1);
      } else {
        substr1 = state.state.routes;
      }
      let substr3 = substr1;
      ({ openingRouteKeys, closingRouteKeys } = previousState);
      let replacingRouteKeys = previousState.replacingRouteKeys;
      const found2 = closingRouteKeys.filter((item) => {
        let closure_0 = item;
        return !substr3.some((key) => key.key === closure_0);
      });
      let found9 = found2;
      const found3 = replacingRouteKeys.filter((item) => {
        let closure_0 = item;
        return !substr3.some((key) => key.key === closure_0);
      });
      let items10 = found3;
      let tmp7;
      if (previousState.previousState) {
        tmp7 = previousState.previousState.routes[previousState.previousState.index];
      }
      let closure_6 = tmp7;
      let closure_7 = tmp8;
      function isAnimationEnabled(arg0) {

      }
      if (tmp7) {
        if (tmp7.key !== substr1[substr1.length - 1].key) {
          if (arr3.some((key) => key.key === closure_7.key)) {
            if (!substr1.some((key) => key.key === closure_6.key)) {
              const key = tmp7.key;
              let animation;
              let getAnimationEnabled = require("module_6510").getAnimationEnabled;
              require("module_6510");
              if ((state.descriptors[key] || previousState.descriptors[key]) != null) {
                animation = tmp19.options.animation;
              }
              tmp10 = found3;
              tmp11 = found2;
              found4 = openingRouteKeys;
              arr11 = substr1;
              const tmp25 = getAnimationEnabled(animation) && !found2.includes(tmp7.key);
              if (tmp25) {
                const items5 = [];
                items5[HermesBuiltin.arraySpread(items5, found2, 0)] = tmp7.key;
                found9 = items5;
                found4 = openingRouteKeys.filter((item) => item !== closure_6.key);
                const found5 = found3.filter((item) => item !== closure_6.key);
                items10 = found5;
                const items6 = [];
                items6[HermesBuiltin.arraySpread(items6, substr1, 0)] = tmp7;
                substr3 = items6;
                tmp10 = found5;
                tmp11 = items5;
                arr11 = items6;
              }
            }
          }
          const tmp31 = state.descriptors[substr1[substr1.length - 1].key] || previousState.descriptors[substr1[substr1.length - 1].key];
          let animation1;
          const getAnimationEnabled2 = require("module_6510").getAnimationEnabled;
          require("module_6510");
          if (tmp31 != null) {
            animation1 = tmp31.options.animation;
          }
          tmp10 = found3;
          tmp11 = found2;
          found4 = openingRouteKeys;
          arr11 = substr1;
          if (getAnimationEnabled2(animation1)) {
            tmp10 = found3;
            tmp11 = found2;
            found4 = openingRouteKeys;
            arr11 = substr1;
            if (!openingRouteKeys.includes(substr1[substr1.length - 1].key)) {
              const items7 = [];
              items7[HermesBuiltin.arraySpread(items7, openingRouteKeys, 0)] = substr1[substr1.length - 1].key;
              const found6 = found2.filter((item) => item !== closure_7.key);
              found9 = found6;
              const found7 = found3.filter((item) => item !== closure_7.key);
              items10 = found7;
              tmp10 = found7;
              tmp11 = found6;
              found4 = items7;
              arr11 = substr1;
              if (!substr1.some((key) => key.key === closure_6.key)) {
                const found8 = items7.filter((item) => item !== closure_6.key);
                let str = (state.descriptors[substr1[substr1.length - 1].key] || previousState.descriptors[substr1[substr1.length - 1].key]).options.animationTypeForReplace;
                if (str == null) {
                  str = "push";
                }
                if ("pop" === str) {
                  const items8 = [];
                  items8[HermesBuiltin.arraySpread(items8, found6, 0)] = tmp7.key;
                  found9 = items8;
                  found4 = found8.filter((item) => item !== closure_7.key);
                  const items9 = [];
                  items9[HermesBuiltin.arraySpread(items9, substr1, 0)] = tmp7;
                  substr3 = items9;
                  tmp10 = found7;
                  tmp11 = items8;
                  arr11 = items9;
                } else {
                  items10 = [];
                  items10[HermesBuiltin.arraySpread(items10, found7, 0)] = tmp7.key;
                  found9 = found6.filter((item) => item !== closure_6.key);
                  const substr2 = substr1.slice();
                  substr3 = substr2;
                  substr2.splice(substr2.length - 1, 0, tmp7);
                  const routes4 = previousState.routes;
                  const found10 = routes4.filter((key) => {
                    let closure_0 = key;
                    const hasItem = items10.includes(key.key) && !substr3.some((key) => key.key === key.key);
                    return hasItem;
                  });
                  tmp10 = items10;
                  tmp11 = found9;
                  found4 = found8;
                  arr11 = substr2;
                  if (found10.length) {
                    const splice2 = substr2.splice;
                    const items11 = [substr2.length - 2, 0];
                    HermesBuiltin.arraySpread(items11, found10, 2);
                    HermesBuiltin.apply(splice2, items11, substr2);
                    tmp10 = items10;
                    tmp11 = found9;
                    found4 = found8;
                    arr11 = substr2;
                  }
                }
              }
            }
          }
        }
        if (arr11.length) {
          const items12 = [];
          HermesBuiltin.arraySpread(items12, state.state.preloadedRoutes, HermesBuiltin.arraySpread(items12, arr11, 0));
          const obj = {
            routes: arr11,
            previousState: state.state,
            openingRouteKeys: found4,
            closingRouteKeys: tmp11,
            replacingRouteKeys: tmp10,
            descriptors: items12.reduce((acc, key) => {
                    const tmp = state.descriptors[key.key] || previousState.descriptors[key.key];
                    acc[key.key] = tmp;
                    return acc;
                  }, {})
          };
          return obj;
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("There should always be at least one route in the navigation state.");
          throw error;
        }
      }
      tmp10 = found3;
      tmp11 = found2;
      found4 = openingRouteKeys;
      arr11 = substr1;
      const tmp9 = found3.length || found2.length;
      if (tmp9) {
        substr3 = substr1.slice();
        const splice = substr3.splice;
        const items13 = [substr3.length - 1, 0];
        const routes5 = previousState.routes;
        HermesBuiltin.arraySpread(items13, routes5.filter((key) => {
          if (typeof isAnimationEnabled === "function") {
            let animation;
            const getAnimationEnabled = _mod6510.getAnimationEnabled;
            _mod6510;
            if ((state.descriptors[key] || previousState.descriptors[key]) != null) {
              animation = tmp2.options.animation;
            }
            let animationEnabled = getAnimationEnabled(animation);
            if (animationEnabled) {
              const hasItem = items10.includes(key) || found9.includes(key);
              animationEnabled = hasItem;
            }
            return animationEnabled;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }), 2);
        HermesBuiltin.apply(splice, items13, substr3);
        tmp10 = found3;
        tmp11 = found2;
        found4 = openingRouteKeys;
        arr11 = substr3;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
let items1 = [entry1];
const importDefaultResultResult = _createClass(StackView, items, items1);
const container = StyleSheet.create({ container: { flex: 1 } });
const StackView_export = importDefaultResultResult;

export { StackView_export as StackView };