// discord_common/js/packages/flux/connectStores.tsx
import "_objectWithoutProperties";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/flux/connectStores.tsx");

export default function connectStores(items, arg1) {
  if (null != arg2) {
    if (arg2.forwardRef) {
      let closure_0 = items;
      let closure_1 = arg1;
      let fn = (displayName) => {
        let closure_0 = displayName;
        let str = displayName.displayName;
        if (str == null) {
          str = displayName.name;
        }
        if (str == null) {
          str = "<Unknown>";
        }
        const combined = "FluxContainer(" + str + ")";
        const Component = outer1_3.Component;
        class FluxContainer extends Component {
          constructor() {
            applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
            closure_0 = applyArgumentsResult;
            closure_0 = concat;
            memoizedFunction = function memoizedFunction(arg0) {
              if (null != closure_1) {
                if (null != _null2) {
                  if (_null(_null2[4])(closure_1, arg0)) {
                    let tmp5 = _null2;
                  }
                  if (null == tmp5) {
                    closure_1 = arg0;
                    const tmp11 = lib(arg0);
                    _null2 = tmp11;
                    tmp5 = tmp11;
                  }
                  return tmp5;
                }
              }
              tmp5 = null;
              if (null != closure_1) {
                tmp5 = null;
                if (null != _null2) {
                  tmp5 = null;
                  if (_null(_null2[4])(closure_1, arg0)) {
                    closure_1 = arg0;
                    tmp5 = _null2;
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
              let c1 = null;
              let c2 = null;
            };
            applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
            batchedStoreListener = new closure_0(outer2_2[3]).BatchedStoreListener(closure_0, () => {
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
          let childProps;
          let forwardedConnectStoresRef;
          ({ childProps, forwardedConnectStoresRef } = this.props);
          const result = this.memoizedGetStateFromStores(childProps);
          const merged = Object.assign(childProps);
          const merged1 = Object.assign(result);
          return outer2_4(closure_0, { ref: forwardedConnectStoresRef });
        };
        FluxContainer.displayName = combined;
        const forwardRefResult = outer1_3.forwardRef((childProps, forwardedConnectStoresRef) => outer2_4(FluxContainer, { childProps, forwardedConnectStoresRef }));
        forwardRefResult.displayName = "ForwardRef(" + combined + ")";
        return forwardRefResult;
      };
    }
    return fn;
  }
  closure_0 = items;
  closure_1 = arg1;
  fn = (displayName) => {
    let closure_0 = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "<Unknown>";
    }
    const combined = "FluxContainer(" + str + ")";
    const Component = outer1_3.Component;
    class FluxContainer extends Component {
      constructor() {
        applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
        closure_0 = applyArgumentsResult;
        closure_0 = c1;
        memoizedFunction = function memoizedFunction(arg0) {
          if (null != closure_1) {
            if (null != _null2) {
              if (_null(_null2[4])(closure_1, arg0)) {
                let tmp5 = _null2;
              }
              if (null == tmp5) {
                closure_1 = arg0;
                const tmp11 = lib(arg0);
                _null2 = tmp11;
                tmp5 = tmp11;
              }
              return tmp5;
            }
          }
          tmp5 = null;
          if (null != closure_1) {
            tmp5 = null;
            if (null != _null2) {
              tmp5 = null;
              if (_null(_null2[4])(closure_1, arg0)) {
                closure_1 = arg0;
                tmp5 = _null2;
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
          let c1 = null;
          let c2 = null;
        };
        applyArgumentsResult.memoizedGetStateFromStores = memoizedFunction;
        batchedStoreListener = new closure_0(outer2_2[3]).BatchedStoreListener(closure_0, () => {
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
      return outer2_4(closure_0, {});
    };
    FluxContainer.displayName = combined;
    return FluxContainer;
  };
};