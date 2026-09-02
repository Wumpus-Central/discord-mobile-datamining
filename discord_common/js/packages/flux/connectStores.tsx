// === Module 646: connectStores ===

// Module 646 (connectStores)
import _objectWithoutPropertiesDefault from "_objectWithoutProperties" /* 109 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
_objectWithoutPropertiesDefault;
let result = require("set").fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1) {
  if (null != arg2) {
    if (arg2.forwardRef) {
      closure_0 = items;
      closure_1 = arg1;
      let fn = (displayName) => {
        closure_0 = displayName;
        let str = displayName.displayName;
        if (str == null) {
          str = displayName.name;
        }
        if (str == null) {
          str = "<Unknown>";
        }
        const combined = "FluxContainer(" + str + ")";
        const Component = closure_1_3.Component;
        class FluxContainer extends Component {
          constructor() {
            applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
            closure_0 = applyArgumentsResult;
            closure_0 = closure_1;
            memoizedFunction = function memoizedFunction(arg0) {
              if (null != closure_1) {
                if (null != closure_2) {
                  if (_null(_null2[4])(closure_1, arg0)) {
                    let tmp5 = closure_2;
                  }
                  if (null == tmp5) {
                    closure_1 = arg0;
                    const tmp11 = lib(arg0);
                    closure_2 = tmp11;
                    tmp5 = tmp11;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != closure_1) {
                tmp5 = null;
                if (null != closure_2) {
                  tmp5 = null;
                  if (_null(_null2[4])(closure_1, arg0)) {
                    closure_1 = arg0;
                    tmp5 = closure_2;
                  }
                }
              }
            };
            c1 = null;
            c2 = null;
            memoizedFunction.getCachedResult = function getCachedResult(childProps) {
              if (null != closure_1) {
                if (null != _null2) {
                  if (_null(_null2[4])(closure_1, childProps)) {
                    let tmp5 = _null2;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != closure_1) {
                tmp5 = null;
                if (null != _null2) {
                  tmp5 = null;
                  if (_null(_null2[4])(closure_1, childProps)) {
                    closure_1 = childProps;
                    tmp5 = _null2;
                  }
                }
              }
            };
            memoizedFunction.clear = () => {
              c1 = null;
              c2 = null;
            };
            applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
            batchedStoreListener = new closure_0(closure_2_2[3]).BatchedStoreListener(closure_0, () => {
              const memoizedGetStateFromStores = closure_0.memoizedGetStateFromStores;
              const cachedResult = memoizedGetStateFromStores.getCachedResult(closure_0.props.childProps);
              let tmp6Result = null != cachedResult;
              if (tmp6Result) {
                const memoizedGetStateFromStores2 = obj.memoizedGetStateFromStores;
                memoizedGetStateFromStores2.clear();
                tmp6Result = _null(_null2[4])(obj.memoizedGetStateFromStores(obj.props.childProps), cachedResult);
                const tmp6 = _null(_null2[4]);
              }
              if (!tmp6Result) {
                obj.forceUpdate();
              }
            });
            applyArgumentsResult.listener = batchedStoreListener;
            return applyArgumentsResult;
          }
        }
        const prototype = FluxContainer.prototype;
        prototype["componentDidMount"] = function componentDidMount() {
          const listener = this.listener;
          listener.attach(combined);
        };
        prototype["componentWillUnmount"] = function componentWillUnmount() {
          const listener = this.listener;
          listener.detach();
          const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
          memoizedGetStateFromStores.clear();
        };
        prototype["render"] = function render() {
          ({ childProps, forwardedConnectStoresRef } = this.props);
          const result = this.memoizedGetStateFromStores(childProps);
          const merged = Object.assign(childProps);
          const merged1 = Object.assign(result);
          return closure_2_4(closure_0, { ref: forwardedConnectStoresRef });
        };
        FluxContainer.displayName = combined;
        const forwardRefResult = closure_1_3.forwardRef((childProps, forwardedConnectStoresRef) => closure_2_4(FluxContainer, { childProps, forwardedConnectStoresRef }));
        forwardRefResult.displayName = "ForwardRef(" + combined + ")";
        return forwardRefResult;
      };
    }
    return fn;
  }
  closure_0 = items;
  closure_1 = arg1;
  fn = (displayName) => {
    closure_0 = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "<Unknown>";
    }
    const combined = "FluxContainer(" + str + ")";
    const Component = closure_1_3.Component;
    class FluxContainer extends Component {
      constructor() {
        applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
        closure_0 = applyArgumentsResult;
        closure_0 = closure_1;
        memoizedFunction = function memoizedFunction(arg0) {
          if (null != closure_1) {
            if (null != closure_2) {
              if (_null(_null2[4])(closure_1, arg0)) {
                let tmp5 = closure_2;
              }
              if (null == tmp5) {
                closure_1 = arg0;
                const tmp11 = lib(arg0);
                closure_2 = tmp11;
                tmp5 = tmp11;
              }
              return tmp5;
            }
          }
          tmp5 = null;
          if (null != closure_1) {
            tmp5 = null;
            if (null != closure_2) {
              tmp5 = null;
              if (_null(_null2[4])(closure_1, arg0)) {
                closure_1 = arg0;
                tmp5 = closure_2;
              }
            }
          }
        };
        c1 = null;
        c2 = null;
        memoizedFunction.getCachedResult = function getCachedResult(childProps) {
          if (null != closure_1) {
            if (null != _null2) {
              if (_null(_null2[4])(closure_1, childProps)) {
                let tmp5 = _null2;
              }
              return tmp5;
            }
          }
          tmp5 = null;
          if (null != closure_1) {
            tmp5 = null;
            if (null != _null2) {
              tmp5 = null;
              if (_null(_null2[4])(closure_1, childProps)) {
                closure_1 = childProps;
                tmp5 = _null2;
              }
            }
          }
        };
        memoizedFunction.clear = () => {
          c1 = null;
          c2 = null;
        };
        applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
        batchedStoreListener = new closure_0(closure_2_2[3]).BatchedStoreListener(closure_0, () => {
          const memoizedGetStateFromStores = lib.memoizedGetStateFromStores;
          const cachedResult = memoizedGetStateFromStores.getCachedResult(lib.props);
          let tmp6Result = null != cachedResult;
          if (tmp6Result) {
            const memoizedGetStateFromStores2 = obj.memoizedGetStateFromStores;
            memoizedGetStateFromStores2.clear();
            tmp6Result = _null(_null2[4])(obj.memoizedGetStateFromStores(obj.props), cachedResult);
            const tmp6 = _null(_null2[4]);
          }
          if (!tmp6Result) {
            obj.forceUpdate();
          }
        });
        applyArgumentsResult.listener = batchedStoreListener;
        return applyArgumentsResult;
      }
    }
    const prototype = FluxContainer.prototype;
    prototype["componentDidMount"] = function componentDidMount() {
      const listener = this.listener;
      listener.attach(combined);
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      const listener = this.listener;
      listener.detach();
      const memoizedGetStateFromStores = this.memoizedGetStateFromStores;
      memoizedGetStateFromStores.clear();
    };
    prototype["render"] = function render() {
      const result = this.memoizedGetStateFromStores(this.props);
      const merged = Object.assign(this.props);
      const merged1 = Object.assign(result);
      return closure_2_4(closure_0, {});
    };
    FluxContainer.displayName = combined;
    return FluxContainer;
  };
};