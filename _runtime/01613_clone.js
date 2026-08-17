// _runtime/01613_clone.js
import BaseNavigationContainer from "BaseNavigationContainer" /* 1503 */;
import useEffectDefault from "useEffect" /* 1522 */;
import closure_3 from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

require = arg1;
function clone(obj, arg1, get) {
  let keys = arg1;
  if (arg1 === undefined) {
    keys = closure_4;
  }
  if (typeof obj === "object") {
    if (null != obj) {
      let value;
      if (get != null) {
        value = get.get(obj);
      }
      if (value) {
        return value;
      } else {
        const _Array = Array;
        const isArray = Array.isArray(obj);
        if (keys === closure_5) {
          if ("screen" in obj) {
            if (typeof obj.screen !== "string") {
              if ("state" in obj) {
                if (typeof obj.state === "object") {
                  if (null != obj.state) {
                    if ("routes" in obj.state) {
                      const _Array2 = Array;
                    }
                  }
                }
              }
              return obj;
            }
          }
        }
        let tmp8;
        if (keys === closure_5) {
          obj = {};
          const merged = Object.assign(obj);
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
          tmp15 = obj;
        }
        const result = weakMap.set(obj, tmp15);
        if (isArray) {
          keys = obj.keys();
        }
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _Reflect = Reflect;
          let tmp21 = nextResult;
          value = Reflect.get(obj, nextResult);
          let tmp23 = value;
          let tmp24 = clone;
          if ("params" === nextResult) {
            let tmp26 = closure_5;
            let tmp27 = closure_5;
            let tmp25 = closure_5;
          } else {
            tmp25 = closure_4;
          }
          let tmp24Result = tmp24(value, tmp25, weakMap);
          let tmp30 = value;
          if (tmp24Result !== tmp23) {
            let tmp31 = tmp12;
            if (tmp12 != null) {
              let tmp39 = tmp12;
              let result1 = weakMap.set(obj, tmp12);
              let _Object = Object;
              obj = {};
              let tmp41 = nextResult;
              let tmp42 = tmp24Result;
              obj[tmp21] = tmp29;
              let merged1 = Object.assign(tmp12, obj);
            } else {
              if (isArray) {
                let items = [];
                let tmp35 = items;
                let tmp36 = obj;
                let num2 = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(obj, 0);
                obj = items;
              } else {
                obj = {};
                let tmp32 = obj;
                let tmp33 = obj;
                let merged2 = Object.assign(obj);
              }
              let tmp38 = obj;
            }
          }
          continue;
        }
        if (tmp12 == null) {
          tmp12 = obj;
        }
        return tmp12;
      }
    }
  }
  return obj;
}
let closure_4 = ["payload", "params", "state", "routes"];
let closure_5 = ["params", "state"];

export const useLinkProps = function useLinkProps(arg0) {
  ({ screen: require, params: importDefault, action: dependencyMap } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let context1;
  let obj = merged;
  const context = merged.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  context1 = merged.useContext(BaseNavigationContainer.NavigationHelpersContext);
  if (context1 == null) {
    context1 = context;
  }
  if (null == context1) {
    let _Error = Error;
    error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const options = obj.useContext(tmp2(1600).LinkingContext).options;
    const tmp14 = useEffectDefault((preventDefault) => {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      if (null != closure_2) {
        let tmp8 = closure_1_6(tmp2);
      } else if (null == closure_0) {
        const _Error = Error;
        error = new Error("Couldn't find a screen to navigate to. Make sure to provide a screen name.");
        throw error;
      } else {
        const CommonActions = closure_1_0(closure_1_2[2]).CommonActions;
        tmp8 = closure_1_6(CommonActions.navigate(tmp3, closure_1));
      }
      context1.dispatch(tmp8);
    });
    const items = [merged.href, tmp2(1614).useDeepStableValue(undefined), , ];
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