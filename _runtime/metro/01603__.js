// === Module 1603: ? ===

// Module 1603
import react_native from "react-native" /* 17 */;
import BaseNavigationContainer from "BaseNavigationContainer" /* 1493 */;
import useLatestCallbackDefault from "useLatestCallback" /* 1512 */;
import react2 from "react" /* 1590 */;
import react3 from "react" /* 1604 */;
import react from "react" /* 19 */;

let set;

function clone(screen, arg1) {
  let keys = arg1;
  if (arg1 === undefined) {
    keys = closure_4;
  }
  if (typeof screen === "object") {
    if (null != screen) {
      let value;
      if (get != null) {
        value = get.get(screen);
      }
      if (value) {
        return value;
      } else {
        const _Array = Array;
        const isArray = Array.isArray(screen);
        if (keys === closure_5) {
          if ("screen" in screen) {
            if (typeof screen.screen !== "string") {
              if ("state" in screen) {
                if (typeof screen.state === "object") {
                  if (null != screen.state) {
                    if ("routes" in screen.state) {
                      const _Array2 = Array;
                    }
                  }
                }
              }
              return screen;
            }
          }
        }
        let tmp8;
        if (keys === closure_5) {
          const obj = {};
          const merged = Object.assign(screen);
          tmp8 = obj;
        }
        let tmp12 = tmp8;
        let weakMap = get;
        if (get == null) {
          const _WeakMap = WeakMap;
          const self2 = this;
          const self = this;
          weakMap = new WeakMap();
        }
        let tmp13 = tmp12;
        set = weakMap.set;
        if (tmp12 == null) {
          tmp13 = screen;
        }
        const result = set(screen, tmp13);
        if (isArray) {
          keys = screen.keys();
        }
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp23;
          let _Reflect = Reflect;
          let tmp19 = nextResult;
          let value2 = Reflect.get(screen, nextResult);
          let tmp21 = value2;
          if ("params" === nextResult) {
            tmp23 = closure_5;
          } else {
            tmp23 = closure_4;
          }
          let tmp22Result = clone(value2, tmp23, weakMap);
          if (tmp22Result !== tmp21) {
            if (tmp12 == null) {
              let obj2;
              if (isArray) {
                let items = [];
                let arraySpreadResult = HermesBuiltin.arraySpread(items, screen, 0);
                obj2 = items;
              } else {
                obj2 = {};
                let merged1 = Object.assign(screen);
              }
              tmp12 = obj2;
            }
            let result1 = weakMap.set(screen, tmp12);
            let _Object = Object;
            let obj3 = {};
            obj3[tmp19] = tmp27;
            let merged2 = Object.assign(tmp12, obj3);
          }
          continue;
        }
        if (tmp12 == null) {
          tmp12 = screen;
        }
        return tmp12;
      }
    }
  }
  return screen;
}
const Platform = react_native.Platform;
let closure_4 = ["payload", "params", "state", "routes"];
let closure_5 = ["params", "state"];

export const useLinkProps = function useLinkProps(arg0) {
  ({ screen: require, params: importDefault, action: dependencyMap } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0 }));
  const context = merged.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let context1 = merged.useContext(BaseNavigationContainer.NavigationHelpersContext);
  if (context1 == null) {
    context1 = context;
  }
  if (null == context1) {
    let tmp8 = globalThis;
    let _Error = Error;
    let self = this;
    let self2 = this;
    let error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const options = obj.useContext(react2.LinkingContext).options;
    const items = [merged.href, , , ];
    const tmp12 = useLatestCallbackDefault(function(preventDefault) {
      let tmp8;
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      if (null != dependencyMap) {
        tmp8 = clone(tmp2);
      } else if (null == require) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Couldn't find a screen to navigate to. Make sure to provide a screen name.");
        throw error;
      } else {
        const CommonActions = BaseNavigationContainer.CommonActions;
        tmp8 = clone(CommonActions.navigate(tmp3, importDefault));
      }
      context1.dispatch(tmp8);
    });
    const tmp2Result = react3;
    items[1] = tmp2Result.useDeepStableValue(undefined);
    let getPathFromState;
    const useMemo = obj.useMemo;
    if (options != null) {
      getPathFromState = options.getPathFromState;
    }
    items[2] = getPathFromState;
    let config;
    if (options != null) {
      config = options.config;
    }
    items[3] = config;
    const obj2 = { href: useMemo(() => merged.href, items), role: "link", onPress: tmp12 };
    return obj2;
  }
};