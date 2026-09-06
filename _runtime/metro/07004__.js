// _runtime/metro/07004__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

let StackView = fn;
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
  } catch (err) {}
}
let closure_2 = ["state", "descriptors"];
get_ActivityIndicator = fn(17);
({ StyleSheet, View } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let GestureHandlerRootView = fn(7005).GestureHandlerRootView;
if (GestureHandlerRootView == null) {
  GestureHandlerRootView = View;
}
function isArrayEqual(arg0, arg1) {}
class StackView {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_4(this, StackView);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(StackView);
    tmp3 = hasOwnProperty;
    if (closure_8()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = {
      routes: [],
      previousState: "y",
      openingRouteKeys: 4,
      closingRouteKeys: 2,
      replacingRouteKeys: 0,
      descriptors: "BULK_ACK",
    };
    obj.openingRouteKeys = [];
    obj.closingRouteKeys = [];
    obj.replacingRouteKeys = [];
    obj.descriptors = {};
    tmp3Result.state = obj;
    tmp3Result.getPreviousRoute = (route) => {
      route = route.route;
      c1 = undefined;
      c2 = undefined;
      ({ closingRouteKeys: c1, replacingRouteKeys: c2 } = state.state);
      const routes = state.state.routes;
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
      return jsx(state(7008).HeaderContainer, {});
    };
    tmp3Result.handleOpenRoute = (route) => {
      route = route.route;
      ({ state, navigation } = state.props);
      ({ closingRouteKeys, replacingRouteKeys } = state.state);
      if (closingRouteKeys.some((item) => item === route.key)) {
        if (replacingRouteKeys.every((item) => item !== route.key)) {
          const routeNames = state.routeNames;
          if (routeNames.includes(route.name)) {
            let routes = state.routes;
            if (!routes.some((key) => key.key === route.key)) {
              navigation.dispatch((routes) => {
                routes = routes.routes;
                const items = [];
                items[
                  HermesBuiltin.arraySpread(
                    routes.filter((key) => key.key !== key.key),
                    0,
                  )
                ] = route;
                const CommonActions = key(1484).CommonActions;
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
      state.setState((routes) => {
        closure_0 = routes;
        routes = routes.routes;
        routes = routes.routes;
        const substr = routes.slice(
          0,
          routes.findIndex((key) => key.key === closure_0.key),
        );
        const found = substr.filter((key) => {
          const replacingRouteKeys = closure_0.replacingRouteKeys;
          return replacingRouteKeys.includes(key.key);
        });
        const set = new Set(found.map((key) => key.key));
        const obj = { routes: null, openingRouteKeys: null, closingRouteKeys: null, replacingRouteKeys: null };
        const routes1 = routes.routes;
        obj.routes = routes1.filter((key) => !set.has(key.key));
        const openingRouteKeys = routes.openingRouteKeys;
        obj.openingRouteKeys = openingRouteKeys.filter((item) => item !== closure_0.key);
        const closingRouteKeys = routes.closingRouteKeys;
        obj.closingRouteKeys = closingRouteKeys.filter((item) => item !== closure_0.key);
        let replacingRouteKeys = routes.replacingRouteKeys;
        obj.replacingRouteKeys = replacingRouteKeys.filter((item) => !set.has(item));
        return obj;
      });
    };
    tmp3Result.handleCloseRoute = (route) => {
      route = route.route;
      let obj = state;
      ({ state, navigation } = state.props);
      let routes = state.routes;
      if (routes.some((key) => key.key === route.key)) {
        obj = {};
        const StackActions = StackView(1484).StackActions;
        const merged = Object.assign(StackActions.pop());
        obj.source = route.key;
        obj.target = state.key;
        navigation.dispatch(obj);
      } else {
        obj.setState((routes) => {
          const obj = { routes: null, openingRouteKeys: null, closingRouteKeys: null };
          routes = routes.routes;
          obj.routes = routes.filter((key) => key.key !== route.key);
          const openingRouteKeys = routes.openingRouteKeys;
          obj.openingRouteKeys = openingRouteKeys.filter((item) => item !== route.key);
          const closingRouteKeys = routes.closingRouteKeys;
          obj.closingRouteKeys = closingRouteKeys.filter((item) => item !== route.key);
          return obj;
        });
      }
    };
    tmp3Result.handleTransitionStart = (route, closing) => {
      const navigation = state.props.navigation;
      let obj = { type: "transitionStart", data: null, target: route.route.key };
      obj = { closing };
      obj.data = obj;
      return navigation.emit(obj);
    };
    tmp3Result.handleTransitionEnd = (route, closing) => {
      const navigation = state.props.navigation;
      let obj = { type: "transitionEnd", data: null, target: route.route.key };
      obj = { closing };
      obj.data = obj;
      return navigation.emit(obj);
    };
    tmp3Result.handleGestureStart = (route) => {
      const navigation = state.props.navigation;
      navigation.emit({ type: "gestureStart", target: route.route.key });
    };
    tmp3Result.handleGestureEnd = (route) => {
      const navigation = state.props.navigation;
      navigation.emit({ type: "gestureEnd", target: route.route.key });
    };
    tmp3Result.handleGestureCancel = (route) => {
      const navigation = state.props.navigation;
      navigation.emit({ type: "gestureCancel", target: route.route.key });
    };
    return tmp3Result;
  }
}
_inherits(StackView, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    let props = this.props;
    const state = props.state;
    closure_2 = _objectWithoutProperties(props, closure_2);
    ({
      routes: _objectWithoutProperties,
      descriptors: _classCallCheck,
      openingRouteKeys: closure_5,
      closingRouteKeys: _getPrototypeOf,
    } = this.state);
    const preloadedRoutes = state.preloadedRoutes;
    StackView = preloadedRoutes.reduce((acc, key) => {
      let describeResult = acc[key.key];
      if (!describeResult) {
        const props = self.props;
        describeResult = props.describe(key, true);
      }
      acc[key.key] = describeResult;
      return acc;
    }, {});
    let obj = { style: container.container, children: null };
    obj = { children: self(StackView(state[12]).SafeAreaProviderCompat, obj) };
    obj = {
      children(arg0) {
        closure_0 = arg0;
        return self(closure_0(state[14]).ModalPresentationContext.Consumer, {
          children(arg0) {
            closure_0 = arg0;
            return self(closure_0(state[12]).HeaderShownContext.Consumer, {
              children(isParentHeaderShown) {
                const merged = Object.assign(closure_2);
                return jsx(StackView(7014).CardStack, {
                  insets: preloadedDescriptors,
                  isParentHeaderShown,
                  isParentModal: preloadedDescriptors,
                  getPreviousRoute: self.getPreviousRoute,
                  routes,
                  openingRouteKeys,
                  closingRouteKeys,
                  onOpenRoute: self.handleOpenRoute,
                  onCloseRoute: self.handleCloseRoute,
                  onTransitionStart: self.handleTransitionStart,
                  onTransitionEnd: self.handleTransitionEnd,
                  renderHeader: self.renderHeader,
                  state,
                  descriptors,
                  onGestureStart: self.handleGestureStart,
                  onGestureEnd: self.handleGestureEnd,
                  onGestureCancel: self.handleGestureCancel,
                  preloadedDescriptors,
                });
              },
            });
          },
        });
      },
    };
    obj.children = self(StackView(state[13]).SafeAreaInsetsContext.Consumer, obj);
    return self(GestureHandlerRootView, obj);
  },
};
let items = [entry];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(state, previousState) {
    let arr3 = state;
    dependencyMap = previousState;
    const items = [...state.state.preloadedRoutes];
    const items1 = [];
    if (previousState.previousState) {
      HermesBuiltin.arraySpread(
        previousState.previousState.preloadedRoutes,
        HermesBuiltin.arraySpread(previousState.previousState.routes, 0),
      );
      arr3 = items1;
    } else {
      arr3 = items1;
    }
    const mapped = items.map((key) => key.key);
    const mapped1 = arr3.map((key) => key.key);
    if (typeof isArrayEqual === "function") {
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
          if (typeof isArrayEqual === "function") {
            let mapped2 = substr;
            if (!tmp72) {
              closure_2 = items.reduce((acc, key) => {
                acc[key.key] = key;
                return acc;
              }, {});
              mapped2 = substr.map((item) => closure_2[item.key] || item);
            }
            const items4 = [];
            HermesBuiltin.arraySpread(state.state.preloadedRoutes, HermesBuiltin.arraySpread(mapped2, 0));
            let obj = {
              routes: mapped2,
              previousState: state.state,
              descriptors: items4.reduce((acc, key) => {
                let tmp = arr3.descriptors[key.key];
                if (!tmp) {
                  tmp = previousState.descriptors[key.key];
                }
                acc[key.key] = tmp;
                return acc;
              }, {}),
            };
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
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
      let replacingRouteKeys = previousState.replacingRouteKeys;
      const found2 = closingRouteKeys.filter((item) => {
        closure_0 = item;
        return !substr3.some((key) => key.key === closure_0);
      });
      let found9 = found2;
      const found3 = replacingRouteKeys.filter((item) => {
        closure_0 = item;
        return !substr3.some((key) => key.key === closure_0);
      });
      let items10 = found3;
      let tmp6;
      if (previousState.previousState) {
        tmp6 = previousState.previousState.routes[previousState.previousState.index];
      }
      closure_6 = tmp6;
      closure_7 = tmp7;
      function isAnimationEnabled(arg0) {}
      if (tmp6) {
        if (tmp6.key !== tmp7.key) {
          if (arr3.some((key) => key.key === closure_7.key)) {
            if (!substr1.some((key) => key.key === closure_6.key)) {
              obj = arr3(7014);
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
                found4 = openingRouteKeys.filter((item) => item !== closure_6.key);
                const found5 = found3.filter((item) => item !== closure_6.key);
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
              const found6 = found2.filter((item) => item !== closure_7.key);
              found9 = found6;
              const found7 = found3.filter((item) => item !== closure_7.key);
              items10 = found7;
              tmp9 = found7;
              tmp10 = found6;
              found4 = items7;
              arr11 = substr1;
              if (!substr1.some((key) => key.key === closure_6.key)) {
                const found8 = items7.filter((item) => item !== closure_6.key);
                let str =
                  state.descriptors[tmp7.key] || previousState.descriptors[tmp7.key].options.animationTypeForReplace;
                if (str == null) {
                  str = "push";
                }
                if ("pop" === str) {
                  const items8 = [];
                  items8[HermesBuiltin.arraySpread(found6, 0)] = tmp6.key;
                  found9 = items8;
                  found4 = found8.filter((item) => item !== closure_7.key);
                  const items9 = [];
                  items9[HermesBuiltin.arraySpread(substr1, 0)] = tmp6;
                  substr3 = items9;
                  tmp9 = found7;
                  tmp10 = items8;
                  arr11 = items9;
                } else {
                  items10 = [];
                  items10[HermesBuiltin.arraySpread(found7, 0)] = tmp6.key;
                  found9 = found6.filter((item) => item !== closure_6.key);
                  const substr2 = substr1.slice();
                  substr3 = substr2;
                  substr2.splice(substr2.length - 1, 0, tmp6);
                  const routes4 = previousState.routes;
                  const found10 = routes4.filter((key) => {
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
          obj2 = arr3(7014);
        }
        if (arr11.length) {
          const items12 = [];
          HermesBuiltin.arraySpread(state.state.preloadedRoutes, HermesBuiltin.arraySpread(arr11, 0));
          obj = {
            routes: arr11,
            previousState: state.state,
            openingRouteKeys: found4,
            closingRouteKeys: tmp10,
            replacingRouteKeys: tmp9,
            descriptors: items12.reduce((acc, key) => {
              let tmp = arr3.descriptors[key.key];
              if (!tmp) {
                tmp = previousState.descriptors[key.key];
              }
              acc[key.key] = tmp;
              return acc;
            }, {}),
          };
          return obj;
        } else {
          const _Error = Error;
          const error = new Error("There should always be at least one route in the navigation state.");
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
        HermesBuiltin.arraySpread(
          routes5.filter((key) => {
            if (typeof isAnimationEnabled === "function") {
              let tmp2 = arr3.descriptors[key];
              if (!tmp2) {
                tmp2 = previousState.descriptors[key];
              }
              let animation;
              if (tmp2 != null) {
                animation = tmp2.options.animation;
              }
              let animationEnabled = StackView(7014).getAnimationEnabled(animation);
              if (animationEnabled) {
                let hasItem = items10.includes(key);
                if (!hasItem) {
                  hasItem = found9.includes(key);
                }
                animationEnabled = hasItem;
              }
              return animationEnabled;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }),
          2,
        );
        HermesBuiltin.apply(items13, substr3);
        tmp9 = found3;
        tmp10 = found2;
        found4 = openingRouteKeys;
        arr11 = substr3;
      }
      tmp5 = mapped.length === mapped1.length && mapped.every((item, index) => Object.is(item, arr3[index]));
      tmp8 = found3.length || found2.length;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
let items1 = [entry1];
const container = StyleSheet.create({ container: { flex: 1 } });

export const StackView = _createClass(StackView, items, items1);
