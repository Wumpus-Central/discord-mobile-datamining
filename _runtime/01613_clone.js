// _runtime/01613_clone.js
import BaseNavigationContainer from "01503_BaseNavigationContainer.js";
import useEffectDefault from "01522_useEffect.js";
import get_options from "01600_get_options.js";
import useDeepStableValue from "01614_useDeepStableValue.js";
import noop from "00019_noop.js";
import { Platform } from "00017_get_ActivityIndicator.js";

require = fn;
function clone(screen, arg1, get) {
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
          let obj = {};
          const merged = Object.assign(screen);
          tmp8 = obj;
        }
        let tmp12 = tmp8;
        let weakMap = get;
        if (get == null) {
          const _WeakMap = WeakMap;
          weakMap = new WeakMap();
        }
        let tmp15 = tmp12;
        if (tmp12 == null) {
          tmp15 = screen;
        }
        const result = weakMap.set(screen, tmp15);
        if (isArray) {
          keys = screen.keys();
        }
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _Reflect = Reflect;
          let tmp21 = nextResult;
          value = Reflect.get(screen, nextResult);
          let tmp23 = value;
          if ("params" === nextResult) {
            let tmp25 = closure_5;
          } else {
            tmp25 = closure_4;
          }
          let tmp24Result = clone(value, tmp25, weakMap);
          if (tmp24Result !== tmp23) {
            if (tmp12 != null) {
              let result1 = weakMap.set(screen, tmp12);
              let _Object = Object;
              obj = {};
              obj[tmp21] = tmp29;
              let merged1 = Object.assign(tmp12, obj);
            } else if (isArray) {
              let items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(screen, 0);
              obj = items;
            } else {
              obj = {};
              let merged2 = Object.assign(screen);
            }
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
let closure_4 = ["payload", "params", "state", "routes"];
let closure_5 = ["params", "state"];

export const useLinkProps = function useLinkProps(arg0) {
  ({ screen: require, params: importDefault, action: dependencyMap } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = merged;
  const context = merged.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  let context1 = merged.useContext(BaseNavigationContainer.NavigationHelpersContext);
  if (context1 == null) {
    context1 = context;
  }
  if (null == context1) {
    let _Error = Error;
    error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const options = obj.useContext(get_options.LinkingContext).options;
    const tmp14 = useEffectDefault((preventDefault) => {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      if (null != closure_2) {
        let tmp8 = clone(tmp2);
      } else if (null == closure_0) {
        const _Error = Error;
        error = new Error("Couldn't find a screen to navigate to. Make sure to provide a screen name.");
        throw error;
      } else {
        const CommonActions = BaseNavigationContainer.CommonActions;
        tmp8 = clone(CommonActions.navigate(tmp3, closure_1));
      }
      context1.dispatch(tmp8);
    });
    const items = [merged.href, useDeepStableValue.useDeepStableValue(undefined), , ];
    let getPathFromState;
    if (options != null) {
      getPathFromState = options.getPathFromState;
    }
    items[2] = getPathFromState;
    let config;
    if (options != null) {
      config = options.config;
    }
    obj = { href: null, role: "link", onPress: null };
    items[3] = config;
    obj[0] = obj.useMemo(() => merged.href, items);
    obj[2] = tmp14;
    return obj;
  }
};